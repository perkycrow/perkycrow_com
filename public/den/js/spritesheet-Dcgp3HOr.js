import { _ as __vitePreload, t as toCamelCase, S as ShelfPacker, l as logger } from "./preload-helper-D0VL-0Hd.js";
class BinaryReader {
  constructor(buffer) {
    if (buffer instanceof ArrayBuffer) {
      this.buffer = new Uint8Array(buffer);
      this.view = new DataView(buffer);
    } else if (buffer instanceof Uint8Array) {
      this.buffer = buffer;
      this.view = new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength);
    } else {
      this.buffer = new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
      this.view = new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength);
    }
    this.offset = 0;
  }
  get length() {
    return this.buffer.length;
  }
  get remaining() {
    return this.buffer.length - this.offset;
  }
  seek(offset) {
    this.offset = offset;
  }
  skip(bytes) {
    this.offset += bytes;
  }
  readUint8() {
    const value = this.view.getUint8(this.offset);
    this.offset += 1;
    return value;
  }
  readInt8() {
    const value = this.view.getInt8(this.offset);
    this.offset += 1;
    return value;
  }
  readUint16(littleEndian = false) {
    const value = this.view.getUint16(this.offset, littleEndian);
    this.offset += 2;
    return value;
  }
  readInt16(littleEndian = false) {
    const value = this.view.getInt16(this.offset, littleEndian);
    this.offset += 2;
    return value;
  }
  readUint32(littleEndian = false) {
    const value = this.view.getUint32(this.offset, littleEndian);
    this.offset += 4;
    return value;
  }
  readInt32(littleEndian = false) {
    const value = this.view.getInt32(this.offset, littleEndian);
    this.offset += 4;
    return value;
  }
  readFloat32(littleEndian = false) {
    const value = this.view.getFloat32(this.offset, littleEndian);
    this.offset += 4;
    return value;
  }
  readFloat64(littleEndian = false) {
    const value = this.view.getFloat64(this.offset, littleEndian);
    this.offset += 8;
    return value;
  }
  readBytes(length) {
    const bytes = this.buffer.slice(this.offset, this.offset + length);
    this.offset += length;
    return bytes;
  }
  readString(length) {
    const bytes = this.readBytes(length);
    return String.fromCharCode(...bytes);
  }
  readPascalString(padding = 1) {
    const length = this.readUint8();
    const str = length > 0 ? this.readString(length) : "";
    const totalLength = 1 + length;
    const remainder = totalLength % padding;
    if (remainder !== 0) {
      this.skip(padding - remainder);
    }
    return str;
  }
}
const COLOR_MODES = {
  0: "Bitmap",
  1: "Grayscale",
  2: "Indexed",
  3: "RGB",
  4: "CMYK",
  7: "Multichannel",
  8: "Duotone",
  9: "Lab"
};
function readUtf16String(reader, byteLength) {
  const chars = [];
  const charCount = byteLength / 2;
  for (let i = 0; i < charCount; i++) {
    const charCode = reader.readUint16();
    if (charCode > 0) {
      chars.push(String.fromCharCode(charCode));
    }
  }
  return chars.join("");
}
function readProfileName(reader, startOffset, descOffset) {
  if (descOffset <= 0) {
    return "Unknown";
  }
  reader.seek(startOffset + descOffset);
  const descType = reader.readString(4);
  if (descType === "desc") {
    reader.skip(4);
    const strLength2 = reader.readUint32();
    return reader.readString(strLength2 - 1);
  }
  if (descType !== "mluc") {
    return "Unknown";
  }
  reader.skip(4);
  const recordCount = reader.readUint32();
  reader.skip(4);
  if (recordCount <= 0) {
    return "Unknown";
  }
  reader.skip(4);
  const strLength = reader.readUint32();
  const strOffset = reader.readUint32();
  reader.seek(startOffset + descOffset + strOffset);
  return readUtf16String(reader, strLength);
}
function processRlePacket(reader, ctx) {
  const header = reader.readInt8();
  if (header >= 0) {
    const count = header + 1;
    for (let i = 0; i < count && ctx.offset < ctx.rowEnd; i++) {
      ctx.output[ctx.offset++] = reader.readUint8();
    }
    return;
  }
  if (header > -128) {
    const count = -header + 1;
    const value = reader.readUint8();
    for (let i = 0; i < count && ctx.offset < ctx.rowEnd; i++) {
      ctx.output[ctx.offset++] = value;
    }
  }
}
function copyPixelToRgba(rgba, dstIdx, channels, srcIdx) {
  rgba[dstIdx * 4] = channels.red ? channels.red[srcIdx] : 0;
  rgba[dstIdx * 4 + 1] = channels.green ? channels.green[srcIdx] : 0;
  rgba[dstIdx * 4 + 2] = channels.blue ? channels.blue[srcIdx] : 0;
  rgba[dstIdx * 4 + 3] = channels.alpha ? channels.alpha[srcIdx] : 255;
}
function parsePsd(buffer) {
  const reader = new BinaryReader(buffer);
  const header = parseHeader(reader);
  skipColorModeData(reader);
  const colorProfile = parseImageResources(reader);
  const layers = parseLayerSection(reader);
  const tree = buildLayerTree(layers);
  const animations = findAnimations(tree);
  return {
    width: header.width,
    height: header.height,
    depth: header.depth,
    colorMode: header.colorMode,
    colorProfile,
    layers,
    tree,
    animations
  };
}
function parseHeader(reader) {
  const signature = reader.readString(4);
  if (signature !== "8BPS") {
    throw new Error(`Invalid PSD signature: ${signature}`);
  }
  const version = reader.readUint16();
  if (version !== 1 && version !== 2) {
    throw new Error(`Unsupported PSD version: ${version}`);
  }
  reader.skip(6);
  const channels = reader.readUint16();
  const height = reader.readUint32();
  const width = reader.readUint32();
  const depth = reader.readUint16();
  const colorMode = reader.readUint16();
  return {
    version: version === 1 ? "PSD" : "PSB",
    channels,
    width,
    height,
    depth,
    colorMode: COLOR_MODES[colorMode] || colorMode
  };
}
function skipColorModeData(reader) {
  const length = reader.readUint32();
  reader.skip(length);
}
function parseImageResources(reader) {
  const length = reader.readUint32();
  const endOffset = reader.offset + length;
  let colorProfile = null;
  while (reader.offset < endOffset) {
    const signature = reader.readString(4);
    if (signature !== "8BIM") {
      break;
    }
    const resourceId = reader.readUint16();
    const nameLength = reader.readUint8();
    const namePadding = (nameLength + 1) % 2 === 0 ? 0 : 1;
    reader.skip(nameLength + namePadding);
    const dataLength = reader.readUint32();
    const dataPadding = dataLength % 2 === 0 ? 0 : 1;
    if (resourceId === 1039) {
      colorProfile = parseICCProfile(reader, dataLength);
      reader.skip(dataPadding);
    } else {
      reader.skip(dataLength + dataPadding);
    }
  }
  reader.seek(endOffset);
  return colorProfile || { name: "sRGB", isP3: false };
}
function parseICCProfile(reader, length) {
  const startOffset = reader.offset;
  reader.skip(4);
  reader.skip(4);
  reader.skip(4);
  reader.skip(4);
  const colorSpace = reader.readString(4).trim();
  reader.seek(startOffset + 128);
  const tagCount = reader.readUint32();
  let descOffset = 0;
  for (let i = 0; i < tagCount; i++) {
    const tagSig = reader.readString(4);
    const tagOffset = reader.readUint32();
    reader.skip(4);
    if (tagSig === "desc") {
      descOffset = tagOffset;
      break;
    }
  }
  const profileName = readProfileName(reader, startOffset, descOffset);
  reader.seek(startOffset + length);
  const nameLower = profileName.toLowerCase();
  const isP3 = nameLower.includes("p3") || nameLower.includes("display p3");
  const isSRGB = nameLower.includes("srgb");
  return {
    name: profileName,
    colorSpace,
    isP3,
    isSRGB
  };
}
function parseLayerSection(reader) {
  const sectionLength = reader.readUint32();
  if (sectionLength === 0) {
    return [];
  }
  const sectionEnd = reader.offset + sectionLength;
  const layerInfoLength = reader.readUint32();
  if (layerInfoLength === 0) {
    reader.seek(sectionEnd);
    return [];
  }
  let layerCount = reader.readInt16();
  layerCount = Math.abs(layerCount);
  const layers = [];
  for (let i = 0; i < layerCount; i++) {
    layers.push(parseLayerRecord(reader));
  }
  for (const layer of layers) {
    layer.channelData = parseChannelData(reader, layer);
  }
  reader.seek(sectionEnd);
  return layers;
}
function parseLayerRecord(reader) {
  const top = reader.readInt32();
  const left = reader.readInt32();
  const bottom = reader.readInt32();
  const right = reader.readInt32();
  const channelCount = reader.readUint16();
  const channels = [];
  for (let i = 0; i < channelCount; i++) {
    const id = reader.readInt16();
    const dataLength = reader.readUint32();
    channels.push({ id, dataLength });
  }
  reader.skip(4);
  const blendMode = reader.readString(4);
  const opacity = reader.readUint8();
  reader.skip(1);
  const flags = reader.readUint8();
  reader.skip(1);
  const extraDataLength = reader.readUint32();
  const extraDataEnd = reader.offset + extraDataLength;
  const maskDataLength = reader.readUint32();
  reader.skip(maskDataLength);
  const blendingRangesLength = reader.readUint32();
  reader.skip(blendingRangesLength);
  const name = readLayerName(reader);
  let isGroup = false;
  let isGroupEnd = false;
  let sectionType = 0;
  while (reader.offset < extraDataEnd) {
    const sig = reader.readString(4);
    if (sig !== "8BIM" && sig !== "8B64") {
      reader.offset -= 4;
      break;
    }
    const key = reader.readString(4);
    const dataLength = reader.readUint32();
    const dataEnd = reader.offset + dataLength;
    if (key === "lsct" || key === "lsdk") {
      sectionType = reader.readUint32();
      isGroup = sectionType === 1 || sectionType === 2;
      isGroupEnd = sectionType === 3;
    }
    reader.seek(dataEnd);
    if (dataLength % 2 !== 0) {
      reader.skip(1);
    }
  }
  reader.seek(extraDataEnd);
  return {
    name,
    top,
    left,
    bottom,
    right,
    width: right - left,
    height: bottom - top,
    channels,
    opacity,
    blendMode,
    isGroup,
    isGroupEnd,
    visible: (flags & 2) === 0
    // eslint-disable-line no-bitwise -- clean
  };
}
function readLayerName(reader) {
  const length = reader.readUint8();
  const name = length > 0 ? reader.readString(length) : "";
  const padding = (4 - (length + 1) % 4) % 4;
  reader.skip(padding);
  return name;
}
function parseChannelData(reader, layer) {
  const channelData = {};
  for (const channel of layer.channels) {
    const compression = reader.readUint16();
    const dataLength = channel.dataLength - 2;
    if (layer.width === 0 || layer.height === 0) {
      reader.skip(dataLength);
      continue;
    }
    let pixels;
    if (compression === 0) {
      pixels = reader.readBytes(dataLength);
    } else if (compression === 1) {
      pixels = decodeRLE(reader, layer.width, layer.height);
    } else {
      reader.skip(dataLength);
      continue;
    }
    channelData[channel.id] = pixels;
  }
  return channelData;
}
function decodeRLE(reader, width, height) {
  for (let y = 0; y < height; y++) {
    reader.readUint16();
  }
  const output = new Uint8Array(width * height);
  const ctx = { output, offset: 0, rowEnd: 0 };
  for (let y = 0; y < height; y++) {
    ctx.rowEnd = ctx.offset + width;
    while (ctx.offset < ctx.rowEnd) {
      processRlePacket(reader, ctx);
    }
  }
  return output;
}
function buildLayerTree(layers) {
  const root = { children: [] };
  const stack = [root];
  for (let i = layers.length - 1; i >= 0; i--) {
    const layer = layers[i];
    const current = stack[stack.length - 1];
    if (!current) {
      continue;
    }
    if (layer.isGroup) {
      const group = {
        type: "group",
        name: layer.name,
        children: []
      };
      current.children.push(group);
      stack.push(group);
    } else if (layer.isGroupEnd) {
      if (stack.length > 1) {
        stack.pop();
      }
    } else {
      current.children.push({
        type: "layer",
        name: layer.name,
        layer
      });
    }
  }
  return root.children;
}
function findAnimations(tree) {
  const animations = {};
  function traverse(nodes) {
    for (const node of nodes) {
      if (node.type === "group") {
        if (node.name.startsWith("anim - ")) {
          const animName = node.name.replace("anim - ", "");
          const frames = node.children.filter((child) => child.type === "layer").map((child) => child.layer).sort((a, b) => {
            var _a, _b;
            const numA = parseInt(((_a = a.name.match(/^(\d+)/)) == null ? void 0 : _a[1]) || "0", 10);
            const numB = parseInt(((_b = b.name.match(/^(\d+)/)) == null ? void 0 : _b[1]) || "0", 10);
            return numA - numB;
          });
          animations[animName] = frames;
        } else {
          traverse(node.children);
        }
      }
    }
  }
  traverse(tree);
  return animations;
}
function layerToRGBA(layer, psdWidth, psdHeight, options = {}) {
  const { channelData, width, height, left, top } = layer;
  const trim = options.trim ?? false;
  if (width === 0 || height === 0) {
    return null;
  }
  const channels = {
    red: channelData[0],
    green: channelData[1],
    blue: channelData[2],
    alpha: channelData[-1]
  };
  if (trim) {
    return createTrimmedRgba(channels, { width, height, left, top });
  }
  return createFullRgba(channels, layer, psdWidth, psdHeight);
}
function createTrimmedRgba(channels, bounds) {
  const { width, height, left, top } = bounds;
  const rgba = new Uint8Array(width * height * 4);
  for (let i = 0; i < width * height; i++) {
    copyPixelToRgba(rgba, i, channels, i);
  }
  return { pixels: rgba, width, height, left, top };
}
function createFullRgba(channels, layer, psdWidth, psdHeight) {
  const rgba = new Uint8Array(psdWidth * psdHeight * 4);
  const ctx = { rgba, channels, layer, psdWidth, psdHeight };
  for (let ly = 0; ly < layer.height; ly++) {
    copyRowToRgba(ctx, ly);
  }
  return { pixels: rgba, width: psdWidth, height: psdHeight, left: 0, top: 0 };
}
function copyRowToRgba(ctx, ly) {
  const { rgba, channels, layer, psdWidth, psdHeight } = ctx;
  const { width, left, top } = layer;
  const dstY = top + ly;
  if (dstY < 0 || dstY >= psdHeight) {
    return;
  }
  for (let lx = 0; lx < width; lx++) {
    const dstX = left + lx;
    if (dstX < 0 || dstX >= psdWidth) {
      continue;
    }
    const srcIdx = ly * width + lx;
    const dstIdx = dstY * psdWidth + dstX;
    copyPixelToRgba(rgba, dstIdx, channels, srcIdx);
  }
}
let nodeCanvas = null;
async function getNodeCanvas() {
  if (!nodeCanvas) {
    nodeCanvas = await __vitePreload(() => import(
      /* @vite-ignore */
      "./browser-BgX0THxW.js"
    ).then((n) => n.b), true ? [] : void 0, import.meta.url);
  }
  return nodeCanvas;
}
function isNode() {
  return typeof document === "undefined";
}
async function createCanvas(width, height) {
  if (isNode()) {
    const { createCanvas: nodeCreateCanvas } = await getNodeCanvas();
    return nodeCreateCanvas(width, height);
  }
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  return canvas;
}
async function canvasToBlob(canvas) {
  if (isNode()) {
    const buffer = canvas.toBuffer("image/png");
    return new Blob([buffer], { type: "image/png" });
  }
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        reject(new Error("Failed to create blob"));
        return;
      }
      resolve(blob);
    }, "image/png");
  });
}
function putPixels(ctx, { pixels, width, height, x = 0, y = 0 }) {
  const imageData = ctx.createImageData(width, height);
  imageData.data.set(new Uint8ClampedArray(pixels.buffer, pixels.byteOffset, pixels.byteLength));
  ctx.putImageData(imageData, x, y);
}
function calculateResizeDimensions(srcWidth, srcHeight, targetWidth, targetHeight) {
  if (targetWidth && targetHeight) {
    return { width: targetWidth, height: targetHeight };
  }
  if (targetWidth) {
    const scale = targetWidth / srcWidth;
    return { width: targetWidth, height: Math.round(srcHeight * scale) };
  }
  if (targetHeight) {
    const scale = targetHeight / srcHeight;
    return { width: Math.round(srcWidth * scale), height: targetHeight };
  }
  return { width: srcWidth, height: srcHeight };
}
async function resizeCanvas(sourceCanvas, targetWidth, targetHeight, nearest = false) {
  const destCanvas = await createCanvas(targetWidth, targetHeight);
  const ctx = destCanvas.getContext("2d");
  if (nearest) {
    ctx.imageSmoothingEnabled = false;
  } else {
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
  }
  ctx.drawImage(sourceCanvas, 0, 0, targetWidth, targetHeight);
  return destCanvas;
}
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
  countFrames as a,
  parseAnimationName as b,
  canvasToBlob as c,
  calculateResizeDimensions as d,
  extractFramesFromGroup as e,
  findAnimationGroups as f,
  packFramesIntoAtlases as g,
  compositeAtlas as h,
  buildJsonData as i,
  parsePsd as j,
  nextPowerOfTwo as n,
  putPixels as p,
  resizeFrames as r
};
