function normalizeParams(params) {
  if (typeof params === "string") {
    return { url: params, config: {} };
  }
  return {
    url: params.url,
    config: params.config || {}
  };
}
function checkResponse(response, url) {
  if (!response.ok) {
    throw new Error(`HTTP Error ${response.status} (${response.statusText}) for ${url}`);
  }
}
async function loadResponse(params) {
  const { url, config } = normalizeParams(params);
  return fetch(url, config);
}
async function loadBlob(params) {
  const { url } = normalizeParams(params);
  const response = await loadResponse(params);
  checkResponse(response, url);
  return response.blob();
}
async function loadImage(params) {
  const blob = await loadBlob(params);
  const url = URL.createObjectURL(blob);
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = function() {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = function() {
      URL.revokeObjectURL(url);
      const normalizedParams = normalizeParams(params);
      reject(new Error(`Failed to load image: ${normalizedParams.url}`));
    };
    img.src = url;
  });
}
async function loadText(params) {
  const { url } = normalizeParams(params);
  const response = await loadResponse(params);
  checkResponse(response, url);
  return response.text();
}
async function loadJson(params) {
  const { url } = normalizeParams(params);
  const response = await loadResponse(params);
  checkResponse(response, url);
  return response.json();
}
async function loadArrayBuffer(params) {
  const { url } = normalizeParams(params);
  const response = await loadResponse(params);
  checkResponse(response, url);
  return response.arrayBuffer();
}
async function loadAudio(params) {
  const { url } = normalizeParams(params);
  return {
    type: "deferred_audio",
    url
  };
}
function loadFont(params) {
  const { url, config } = normalizeParams(params);
  const {
    name,
    family = name,
    style = "normal",
    weight = "normal"
  } = config;
  const fontName = family || name;
  const font = new FontFace(fontName, `url(${url})`, { style, weight });
  return font.load().then(() => {
    document.fonts.add(font);
    return font;
  }).catch((error) => {
    throw new Error(`Failed to load font "${fontName}": ${error.message}`);
  });
}
function replaceUrlFilename(url, filename) {
  let splitted = url.split("/");
  splitted.pop();
  splitted.push(filename);
  return splitted.join("/");
}
function removeFileExtension(filename) {
  return filename.replace(/\.[^/.]+$/, "");
}
async function loadSpritesheet(params) {
  const { url } = normalizeParams(params);
  const data = await loadJson({ url });
  const baseUrl = url.substring(0, url.lastIndexOf("/") + 1);
  const imagePromises = data.meta.images.map((imageInfo) => {
    const imageUrl = baseUrl + imageInfo.filename;
    return loadImage({ url: imageUrl });
  });
  const images = await Promise.all(imagePromises);
  return {
    data,
    images
  };
}
const loaders = {
  response: loadResponse,
  blob: loadBlob,
  image: loadImage,
  text: loadText,
  json: loadJson,
  arrayBuffer: loadArrayBuffer,
  audio: loadAudio,
  font: loadFont,
  spritesheet: loadSpritesheet,
  animator: loadJson
};
export {
  loadSpritesheet as a,
  removeFileExtension as b,
  loaders as l,
  normalizeParams as n,
  replaceUrlFilename as r
};
