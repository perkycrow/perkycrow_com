import { _ as __vitePreload } from "./preload-helper-BbOs9S9B.js";
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
export {
  createCanvas as a,
  canvasToBlob as b,
  calculateResizeDimensions as c,
  putPixels as p,
  resizeCanvas as r
};
