import { f as toCamelCase } from "./utils-DVCexGPz.js";
import { l as logger } from "./runtime-DOmi4lo7.js";
import { S as ShelfPacker } from "./shelf_packer-Cr1tslJC.js";
import { c as calculateResizeDimensions, a as createCanvas, p as putPixels, r as resizeCanvas } from "./canvas-BKhKokj7.js";
import { l as layerToRGBA } from "./psd-Bk5qgwWq.js";
const MAX_ATLAS_SIZE = 4096;
const PADDING = 1;
const ANIM_GROUP_PATTERN = /^anim[\s-]+(.+)$/i;
function isAnimationGroup(name) {
  return ANIM_GROUP_PATTERN.test(name);
}
function findAnimationGroups(tree) {
  const groups = [];
  function traverse(nodes) {
    for (const node of nodes) {
      if (node.type === "group") {
        if (isAnimationGroup(node.name)) {
          groups.push(node);
        } else {
          traverse(node.children);
        }
      }
    }
  }
  traverse(tree);
  return groups;
}
function parseAnimationName(groupName) {
  const match = groupName.match(ANIM_GROUP_PATTERN);
  if (!match) {
    return groupName;
  }
  const rawName = match[1].trim().toLowerCase();
  return toCamelCase(rawName);
}
function parseFrameNumber(layerName) {
  const match = layerName.match(/^(\d+)/);
  return match ? match[1] : null;
}
function countFrames(group) {
  return group.children.filter((c) => c.type === "layer" && parseFrameNumber(c.name)).length;
}
function extractFramesFromGroup(group, psdWidth, psdHeight) {
  const animName = parseAnimationName(group.name);
  const frames = [];
  const layersWithFrameNumbers = [];
  for (const child of group.children) {
    if (child.type !== "layer") {
      continue;
    }
    const frameNumber = parseFrameNumber(child.name);
    if (!frameNumber) {
      continue;
    }
    layersWithFrameNumbers.push({
      layer: child.layer,
      name: child.name,
      frameNumber: parseInt(frameNumber, 10)
    });
  }
  layersWithFrameNumbers.sort((a, b) => a.frameNumber - b.frameNumber);
  for (const { layer, frameNumber } of layersWithFrameNumbers) {
    const rgba = layerToRGBA(layer, psdWidth, psdHeight);
    if (!rgba) {
      continue;
    }
    frames.push({
      filename: `${animName}/${frameNumber}`,
      pixels: rgba.pixels,
      width: rgba.width,
      height: rgba.height,
      animName,
      frameNumber
    });
  }
  return frames;
}
async function resizeFrame(frameData, targetWidth, targetHeight, nearest) {
  const srcCanvas = await createCanvas(frameData.width, frameData.height);
  const srcCtx = srcCanvas.getContext("2d");
  putPixels(srcCtx, { pixels: frameData.pixels, width: frameData.width, height: frameData.height });
  const resizedCanvas = await resizeCanvas(srcCanvas, targetWidth, targetHeight, nearest);
  const resizedCtx = resizedCanvas.getContext("2d");
  const imageData = resizedCtx.getImageData(0, 0, targetWidth, targetHeight);
  return {
    pixels: new Uint8Array(imageData.data.buffer),
    width: targetWidth,
    height: targetHeight
  };
}
async function resizeFrames(frames, { psdWidth, psdHeight, targetWidth, targetHeight, nearest }) {
  const resize = calculateResizeDimensions(psdWidth, psdHeight, targetWidth, targetHeight);
  const needsResize = resize.width !== psdWidth || resize.height !== psdHeight;
  if (!needsResize) {
    return frames;
  }
  const resized = [];
  for (const frame of frames) {
    const resizedFrame = await resizeFrame(frame, resize.width, resize.height, nearest);
    resized.push({
      ...frame,
      pixels: resizedFrame.pixels,
      width: resizedFrame.width,
      height: resizedFrame.height
    });
  }
  return resized;
}
function packFramesIntoAtlases(frames, atlasSize = MAX_ATLAS_SIZE, padding = PADDING) {
  const atlases = [];
  let currentAtlas = {
    packer: new ShelfPacker(atlasSize, atlasSize, padding),
    frames: []
  };
  atlases.push(currentAtlas);
  for (const frame of frames) {
    let slot = currentAtlas.packer.pack(frame.width, frame.height);
    if (!slot) {
      currentAtlas = {
        packer: new ShelfPacker(atlasSize, atlasSize, padding),
        frames: []
      };
      atlases.push(currentAtlas);
      slot = currentAtlas.packer.pack(frame.width, frame.height);
      if (!slot) {
        logger.warn(`Frame too large: ${frame.filename}`);
        continue;
      }
    }
    currentAtlas.frames.push({
      ...frame,
      x: slot.x,
      y: slot.y,
      atlasIndex: atlases.length - 1
    });
  }
  return atlases;
}
async function compositeAtlas(packedFrames, atlasWidth, atlasHeight) {
  const canvas = await createCanvas(atlasWidth, atlasHeight);
  const ctx = canvas.getContext("2d");
  for (const frame of packedFrames) {
    putPixels(ctx, { pixels: frame.pixels, width: frame.width, height: frame.height, x: frame.x, y: frame.y });
  }
  return canvas;
}
function nextPowerOfTwo(n) {
  const powers = [16, 32, 64, 128, 256, 512, 1024, 2048, 4096];
  for (const p of powers) {
    if (p >= n) {
      return p;
    }
  }
  return 4096;
}
function buildJsonData(atlases, animations, baseName, appName = "perky-spritesheet") {
  const allFrames = [];
  const images = [];
  for (let i = 0; i < atlases.length; i++) {
    const atlas = atlases[i];
    const imageName = atlases.length === 1 ? `${baseName}.png` : `${baseName}_${i}.png`;
    images.push({
      filename: imageName,
      size: {
        w: MAX_ATLAS_SIZE,
        h: atlas.finalHeight
      }
    });
    for (const frame of atlas.frames) {
      allFrames.push({
        filename: frame.filename,
        frame: {
          x: frame.x,
          y: frame.y,
          w: frame.width,
          h: frame.height
        },
        sourceSize: {
          w: frame.width,
          h: frame.height
        },
        atlas: i
      });
    }
  }
  return {
    frames: allFrames,
    animations,
    meta: {
      app: appName,
      version: "1.0",
      images
    }
  };
}
export {
  MAX_ATLAS_SIZE as M,
  PADDING as P,
  parseFrameNumber as a,
  packFramesIntoAtlases as b,
  countFrames as c,
  buildJsonData as d,
  extractFramesFromGroup as e,
  findAnimationGroups as f,
  compositeAtlas as g,
  isAnimationGroup as i,
  nextPowerOfTwo as n,
  parseAnimationName as p,
  resizeFrames as r
};
