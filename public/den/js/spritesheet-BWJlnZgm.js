import { h as toCamelCase, S as ShelfPacker } from "./shelf_packer-B9xAzSmX.js";
import { _ as __vitePreload } from "./preload-helper-BbOs9S9B.js";
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
  let profileName = "Unknown";
  if (descOffset > 0) {
    reader.seek(startOffset + descOffset);
    const descType = reader.readString(4);
    if (descType === "desc") {
      reader.skip(4);
      const strLength = reader.readUint32();
      profileName = reader.readString(strLength - 1);
    } else if (descType === "mluc") {
      reader.skip(4);
      const recordCount = reader.readUint32();
      reader.skip(4);
      if (recordCount > 0) {
        reader.skip(4);
        const strLength = reader.readUint32();
        const strOffset = reader.readUint32();
        reader.seek(startOffset + descOffset + strOffset);
        const chars = [];
        for (let i = 0; i < strLength / 2; i++) {
          const charCode = reader.readUint16();
          if (charCode > 0) {
            chars.push(String.fromCharCode(charCode));
          }
        }
        profileName = chars.join("");
      }
    }
  }
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
  const rowLengths = [];
  for (let y = 0; y < height; y++) {
    rowLengths.push(reader.readUint16());
  }
  const output = new Uint8Array(width * height);
  let outOffset = 0;
  for (let y = 0; y < height; y++) {
    const rowEnd = outOffset + width;
    while (outOffset < rowEnd) {
      const header = reader.readInt8();
      if (header >= 0) {
        const count = header + 1;
        for (let i = 0; i < count && outOffset < rowEnd; i++) {
          output[outOffset++] = reader.readUint8();
        }
      } else if (header > -128) {
        const count = -header + 1;
        const value = reader.readUint8();
        for (let i = 0; i < count && outOffset < rowEnd; i++) {
          output[outOffset++] = value;
        }
      }
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
  const red = channelData[0];
  const green = channelData[1];
  const blue = channelData[2];
  const alpha = channelData[-1];
  if (trim) {
    const rgba2 = new Uint8Array(width * height * 4);
    for (let i = 0; i < width * height; i++) {
      rgba2[i * 4] = red ? red[i] : 0;
      rgba2[i * 4 + 1] = green ? green[i] : 0;
      rgba2[i * 4 + 2] = blue ? blue[i] : 0;
      rgba2[i * 4 + 3] = alpha ? alpha[i] : 255;
    }
    return { pixels: rgba2, width, height, left, top };
  }
  const rgba = new Uint8Array(psdWidth * psdHeight * 4);
  for (let ly = 0; ly < height; ly++) {
    for (let lx = 0; lx < width; lx++) {
      const srcIdx = ly * width + lx;
      const dstX = left + lx;
      const dstY = top + ly;
      if (dstX >= 0 && dstX < psdWidth && dstY >= 0 && dstY < psdHeight) {
        const dstIdx = dstY * psdWidth + dstX;
        rgba[dstIdx * 4] = red ? red[srcIdx] : 0;
        rgba[dstIdx * 4 + 1] = green ? green[srcIdx] : 0;
        rgba[dstIdx * 4 + 2] = blue ? blue[srcIdx] : 0;
        rgba[dstIdx * 4 + 3] = alpha ? alpha[srcIdx] : 255;
      }
    }
  }
  return {
    pixels: rgba,
    width: psdWidth,
    height: psdHeight,
    left: 0,
    top: 0
  };
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
    const { createCanvas: createCanvas2 } = await getNodeCanvas();
    return createCanvas2(width, height);
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
function putPixels(ctx, pixels, width, height, x = 0, y = 0) {
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
const ANIM_GROUP_PATTERN = /^anim[\s-]+(.+)$/i;
const MAX_ATLAS_SIZE = 4096;
const PADDING = 1;
let currentPsd = null;
let currentResult = null;
const elements = {
  fileDrop: document.getElementById("file-drop"),
  fileInput: document.getElementById("file-input"),
  infoPanel: document.getElementById("info-panel"),
  infoDimensions: document.getElementById("info-dimensions"),
  infoProfile: document.getElementById("info-profile"),
  infoLayers: document.getElementById("info-layers"),
  infoAnimations: document.getElementById("info-animations"),
  p3Warning: document.getElementById("p3-warning"),
  animationsList: document.getElementById("animations-list"),
  settingsPanel: document.getElementById("settings-panel"),
  outputWidth: document.getElementById("output-width"),
  outputHeight: document.getElementById("output-height"),
  resizeMode: document.getElementById("resize-mode"),
  convertBtn: document.getElementById("convert-btn"),
  previewPanel: document.getElementById("preview-panel"),
  previewContainer: document.getElementById("preview-container"),
  downloadPng: document.getElementById("download-png"),
  downloadJson: document.getElementById("download-json")
};
function init() {
  elements.fileDrop.addEventListener("click", () => elements.fileInput.click());
  elements.fileInput.addEventListener("change", handleFileSelect);
  elements.fileDrop.addEventListener("dragover", handleDragOver);
  elements.fileDrop.addEventListener("dragleave", handleDragLeave);
  elements.fileDrop.addEventListener("drop", handleDrop);
  elements.convertBtn.addEventListener("click", handleConvert);
  elements.downloadPng.addEventListener("click", downloadPng);
  elements.downloadJson.addEventListener("click", downloadJson);
}
function handleDragOver(e) {
  e.preventDefault();
  elements.fileDrop.classList.add("dragover");
}
function handleDragLeave() {
  elements.fileDrop.classList.remove("dragover");
}
function handleDrop(e) {
  e.preventDefault();
  elements.fileDrop.classList.remove("dragover");
  const file = e.dataTransfer.files[0];
  if (file && file.name.endsWith(".psd")) {
    loadPsdFile(file);
  }
}
function handleFileSelect(e) {
  const file = e.target.files[0];
  if (file) {
    loadPsdFile(file);
  }
}
async function loadPsdFile(file) {
  const buffer = await file.arrayBuffer();
  const psd = parsePsd(new Uint8Array(buffer));
  currentPsd = {
    ...psd,
    filename: file.name.replace(".psd", "")
  };
  displayPsdInfo(psd);
}
function displayPsdInfo(psd) {
  elements.infoDimensions.textContent = `${psd.width} x ${psd.height}`;
  elements.infoProfile.textContent = psd.colorProfile.name;
  elements.infoLayers.textContent = psd.layers.length;
  const animGroups = findAnimationGroups(psd.tree);
  const totalFrames = animGroups.reduce((sum, g) => sum + countFrames(g), 0);
  elements.infoAnimations.textContent = `${animGroups.length} (${totalFrames} frames)`;
  if (psd.colorProfile.isP3) {
    elements.p3Warning.classList.remove("hidden");
  } else {
    elements.p3Warning.classList.add("hidden");
  }
  elements.animationsList.innerHTML = "";
  for (const group of animGroups) {
    const tag = document.createElement("div");
    tag.className = "animation-tag";
    const name = parseAnimationName(group.name);
    const frameCount = countFrames(group);
    tag.innerHTML = `${name}<span>${frameCount}f</span>`;
    elements.animationsList.appendChild(tag);
  }
  elements.outputWidth.value = "";
  elements.outputHeight.value = "";
  elements.outputWidth.placeholder = psd.width;
  elements.outputHeight.placeholder = psd.height;
  elements.infoPanel.classList.remove("hidden");
  elements.settingsPanel.classList.remove("hidden");
  elements.previewPanel.classList.add("hidden");
}
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
  if (!match) return groupName;
  const rawName = match[1].trim().toLowerCase();
  return toCamelCase(rawName);
}
function parseFrameNumber(layerName) {
  const match = layerName.match(/^(\d+)\s*-/);
  return match ? match[1] : null;
}
function countFrames(group) {
  return group.children.filter((c) => c.type === "layer" && parseFrameNumber(c.name)).length;
}
async function handleConvert() {
  if (!currentPsd) return;
  elements.convertBtn.disabled = true;
  elements.convertBtn.textContent = "Converting...";
  elements.previewPanel.classList.remove("hidden");
  elements.previewContainer.innerHTML = '<p class="preview-placeholder">Converting...</p>';
  await new Promise((r) => setTimeout(r, 50));
  try {
    const result = await convertPsd(currentPsd);
    currentResult = result;
    displayPreview(result);
  } catch (error) {
    elements.previewContainer.innerHTML = `<p class="preview-placeholder">Error: ${error.message}</p>`;
  }
  elements.convertBtn.disabled = false;
  elements.convertBtn.textContent = "Convert to Spritesheet";
}
async function convertPsd(psd) {
  const targetWidth = parseInt(elements.outputWidth.value, 10) || null;
  const targetHeight = parseInt(elements.outputHeight.value, 10) || null;
  const nearest = elements.resizeMode.value === "nearest";
  const resize = calculateResizeDimensions(psd.width, psd.height, targetWidth, targetHeight);
  const needsResize = resize.width !== psd.width || resize.height !== psd.height;
  const animGroups = findAnimationGroups(psd.tree);
  const frames = [];
  const animations = {};
  for (const group of animGroups) {
    const animName = parseAnimationName(group.name);
    animations[animName] = [];
    const layersWithFrameNumbers = [];
    for (const child of group.children) {
      if (child.type !== "layer") continue;
      const frameNumber = parseFrameNumber(child.name);
      if (!frameNumber) continue;
      layersWithFrameNumbers.push({
        layer: child.layer,
        name: child.name,
        frameNumber: parseInt(frameNumber, 10)
      });
    }
    layersWithFrameNumbers.sort((a, b) => a.frameNumber - b.frameNumber);
    for (const { layer, frameNumber } of layersWithFrameNumbers) {
      const filename = `${animName}/${frameNumber}`;
      const rgba = layerToRGBA(layer, psd.width, psd.height);
      if (!rgba) continue;
      let finalPixels = rgba.pixels;
      let finalWidth = rgba.width;
      let finalHeight = rgba.height;
      if (needsResize) {
        const resized = await resizeFrame(rgba, resize.width, resize.height, nearest);
        finalPixels = resized.pixels;
        finalWidth = resized.width;
        finalHeight = resized.height;
      }
      frames.push({
        filename,
        pixels: finalPixels,
        width: finalWidth,
        height: finalHeight,
        animName,
        frameNumber
      });
      animations[animName].push(filename);
    }
  }
  const atlases = packFramesIntoAtlases(frames, MAX_ATLAS_SIZE);
  for (let i = 0; i < atlases.length; i++) {
    const atlas = atlases[i];
    const usedHeight = atlas.packer.currentY;
    atlas.finalHeight = nextPowerOfTwo(usedHeight);
    atlas.canvas = await compositeAtlas(atlas.frames, MAX_ATLAS_SIZE, atlas.finalHeight);
  }
  const jsonData = buildJsonData(atlases, animations, psd.filename);
  return {
    atlases,
    jsonData,
    filename: psd.filename
  };
}
async function resizeFrame(frameData, targetWidth, targetHeight, nearest) {
  const srcCanvas = await createCanvas(frameData.width, frameData.height);
  const srcCtx = srcCanvas.getContext("2d");
  putPixels(srcCtx, frameData.pixels, frameData.width, frameData.height);
  const resizedCanvas = await resizeCanvas(srcCanvas, targetWidth, targetHeight, nearest);
  const resizedCtx = resizedCanvas.getContext("2d");
  const imageData = resizedCtx.getImageData(0, 0, targetWidth, targetHeight);
  return {
    pixels: new Uint8Array(imageData.data.buffer),
    width: targetWidth,
    height: targetHeight
  };
}
function packFramesIntoAtlases(frames, atlasSize) {
  const atlases = [];
  let currentAtlas = {
    packer: new ShelfPacker(atlasSize, atlasSize, PADDING),
    frames: []
  };
  atlases.push(currentAtlas);
  for (const frame of frames) {
    let slot = currentAtlas.packer.pack(frame.width, frame.height);
    if (!slot) {
      currentAtlas = {
        packer: new ShelfPacker(atlasSize, atlasSize, PADDING),
        frames: []
      };
      atlases.push(currentAtlas);
      slot = currentAtlas.packer.pack(frame.width, frame.height);
      if (!slot) {
        console.warn(`Frame too large: ${frame.filename}`);
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
    putPixels(ctx, frame.pixels, frame.width, frame.height, frame.x, frame.y);
  }
  return canvas;
}
function buildJsonData(atlases, animations, psdName) {
  const allFrames = [];
  const images = [];
  for (let i = 0; i < atlases.length; i++) {
    const atlas = atlases[i];
    const imageName = atlases.length === 1 ? `${psdName}.png` : `${psdName}_${i}.png`;
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
      app: "perky-spritesheet",
      version: "1.0",
      images
    }
  };
}
function nextPowerOfTwo(n) {
  const powers = [16, 32, 64, 128, 256, 512, 1024, 2048, 4096];
  for (const p of powers) {
    if (p >= n) return p;
  }
  return 4096;
}
function displayPreview(result) {
  elements.previewContainer.innerHTML = "";
  for (const atlas of result.atlases) {
    const img = document.createElement("img");
    img.src = atlas.canvas.toDataURL("image/png");
    img.alt = "Atlas preview";
    elements.previewContainer.appendChild(img);
  }
}
async function downloadPng() {
  if (!currentResult) return;
  for (let i = 0; i < currentResult.atlases.length; i++) {
    const atlas = currentResult.atlases[i];
    const blob = await canvasToBlob(atlas.canvas);
    const filename = currentResult.atlases.length === 1 ? `${currentResult.filename}.png` : `${currentResult.filename}_${i}.png`;
    downloadBlob(blob, filename);
  }
}
function downloadJson() {
  if (!currentResult) return;
  const json = JSON.stringify(currentResult.jsonData, null, 2);
  const blob = new Blob([json], { type: "application/json" });
  downloadBlob(blob, `${currentResult.filename}.json`);
}
function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
