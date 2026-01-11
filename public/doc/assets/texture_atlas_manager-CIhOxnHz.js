var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _canvas, _ctx, _packer, _regions, _dirty, _atlases, _regionIndex, _atlasSize, _TextureAtlasManager_instances, addToAtlas_fn, addOversizedImage_fn;
import { T as TextureRegion } from "./texture_region-Buaf2v24.js";
class ShelfPacker {
  constructor(width, height, padding = 1) {
    this.width = width;
    this.height = height;
    this.padding = padding;
    this.shelves = [];
    this.currentY = 0;
    this.full = false;
  }
  pack(w, h) {
    const pw = w + this.padding;
    const ph = h + this.padding;
    for (const shelf2 of this.shelves) {
      if (shelf2.height >= ph && shelf2.remainingWidth >= pw) {
        const slot = { x: shelf2.x, y: shelf2.y };
        shelf2.x += pw;
        shelf2.remainingWidth -= pw;
        return slot;
      }
    }
    if (this.currentY + ph > this.height) {
      this.full = true;
      return null;
    }
    const shelf = {
      y: this.currentY,
      x: pw,
      height: ph,
      remainingWidth: this.width - pw
    };
    this.shelves.push(shelf);
    this.currentY += ph;
    return { x: 0, y: shelf.y };
  }
  canFit(w, h) {
    const pw = w + this.padding;
    const ph = h + this.padding;
    for (const shelf of this.shelves) {
      if (shelf.height >= ph && shelf.remainingWidth >= pw) {
        return true;
      }
    }
    return this.currentY + ph <= this.height;
  }
}
const DEFAULT_SIZE = 2048;
const MAX_SIZE = 4096;
const PADDING = 1;
class TextureAtlas {
  constructor(options = {}) {
    __privateAdd(this, _canvas, null);
    __privateAdd(this, _ctx, null);
    __privateAdd(this, _packer, null);
    __privateAdd(this, _regions, /* @__PURE__ */ new Map());
    __privateAdd(this, _dirty, false);
    this.width = options.width ?? DEFAULT_SIZE;
    this.height = options.height ?? DEFAULT_SIZE;
    this.padding = options.padding ?? PADDING;
    __privateSet(this, _canvas, createCanvas(this.width, this.height));
    __privateSet(this, _ctx, __privateGet(this, _canvas).getContext("2d"));
    __privateSet(this, _packer, new ShelfPacker(this.width, this.height, this.padding));
  }
  get canvas() {
    return __privateGet(this, _canvas);
  }
  get dirty() {
    return __privateGet(this, _dirty);
  }
  get full() {
    return __privateGet(this, _packer).full;
  }
  get regionCount() {
    return __privateGet(this, _regions).size;
  }
  markClean() {
    __privateSet(this, _dirty, false);
  }
  add(id, image) {
    if (__privateGet(this, _regions).has(id)) {
      return __privateGet(this, _regions).get(id);
    }
    const slot = __privateGet(this, _packer).pack(image.width, image.height);
    if (!slot) {
      return null;
    }
    __privateGet(this, _ctx).drawImage(image, slot.x, slot.y);
    const region = new TextureRegion({
      image: __privateGet(this, _canvas),
      x: slot.x,
      y: slot.y,
      width: image.width,
      height: image.height
    });
    __privateGet(this, _regions).set(id, region);
    __privateSet(this, _dirty, true);
    return region;
  }
  get(id) {
    return __privateGet(this, _regions).get(id) || null;
  }
  has(id) {
    return __privateGet(this, _regions).has(id);
  }
  getAllRegions() {
    return __privateGet(this, _regions);
  }
  canFit(width, height) {
    return __privateGet(this, _packer).canFit(width, height);
  }
  clear() {
    __privateGet(this, _ctx).clearRect(0, 0, this.width, this.height);
    __privateSet(this, _packer, new ShelfPacker(this.width, this.height, this.padding));
    __privateGet(this, _regions).clear();
    __privateSet(this, _dirty, true);
  }
  dispose() {
    __privateSet(this, _canvas, null);
    __privateSet(this, _ctx, null);
    __privateSet(this, _packer, null);
    __privateGet(this, _regions).clear();
  }
  static get DEFAULT_SIZE() {
    return DEFAULT_SIZE;
  }
  static get MAX_SIZE() {
    return MAX_SIZE;
  }
}
_canvas = new WeakMap();
_ctx = new WeakMap();
_packer = new WeakMap();
_regions = new WeakMap();
_dirty = new WeakMap();
function createCanvas(width, height) {
  if (typeof OffscreenCanvas !== "undefined") {
    return new OffscreenCanvas(width, height);
  }
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  return canvas;
}
class TextureAtlasManager {
  constructor(options = {}) {
    __privateAdd(this, _TextureAtlasManager_instances);
    __privateAdd(this, _atlases, []);
    __privateAdd(this, _regionIndex, /* @__PURE__ */ new Map());
    __privateAdd(this, _atlasSize, TextureAtlas.DEFAULT_SIZE);
    __privateSet(this, _atlasSize, options.atlasSize ?? TextureAtlas.DEFAULT_SIZE);
  }
  get atlases() {
    return __privateGet(this, _atlases);
  }
  get atlasCount() {
    return __privateGet(this, _atlases).length;
  }
  get regionCount() {
    return __privateGet(this, _regionIndex).size;
  }
  add(id, image) {
    if (__privateGet(this, _regionIndex).has(id)) {
      return __privateGet(this, _regionIndex).get(id);
    }
    if (!isValidImage(image)) {
      return null;
    }
    if (isOversized(image, __privateGet(this, _atlasSize))) {
      return __privateMethod(this, _TextureAtlasManager_instances, addOversizedImage_fn).call(this, id, image);
    }
    const region = __privateMethod(this, _TextureAtlasManager_instances, addToAtlas_fn).call(this, id, image);
    if (region) {
      __privateGet(this, _regionIndex).set(id, region);
    }
    return region;
  }
  addBatch(images) {
    const results = /* @__PURE__ */ new Map();
    for (const [id, image] of Object.entries(images)) {
      const region = this.add(id, image);
      results.set(id, region);
    }
    return results;
  }
  get(id) {
    return __privateGet(this, _regionIndex).get(id) || null;
  }
  has(id) {
    return __privateGet(this, _regionIndex).has(id);
  }
  getDirtyAtlases() {
    return __privateGet(this, _atlases).filter((atlas) => atlas.dirty);
  }
  markAllClean() {
    for (const atlas of __privateGet(this, _atlases)) {
      atlas.markClean();
    }
  }
  clear() {
    for (const atlas of __privateGet(this, _atlases)) {
      atlas.dispose();
    }
    __privateSet(this, _atlases, []);
    __privateGet(this, _regionIndex).clear();
  }
  dispose() {
    this.clear();
  }
}
_atlases = new WeakMap();
_regionIndex = new WeakMap();
_atlasSize = new WeakMap();
_TextureAtlasManager_instances = new WeakSet();
addToAtlas_fn = function(id, image) {
  for (const atlas of __privateGet(this, _atlases)) {
    if (atlas.canFit(image.width, image.height)) {
      return atlas.add(id, image);
    }
  }
  const newAtlas = new TextureAtlas({
    width: __privateGet(this, _atlasSize),
    height: __privateGet(this, _atlasSize)
  });
  __privateGet(this, _atlases).push(newAtlas);
  return newAtlas.add(id, image);
};
addOversizedImage_fn = function(id, image) {
  const region = TextureRegion.fromImage(image);
  __privateGet(this, _regionIndex).set(id, region);
  return region;
};
function isValidImage(image) {
  return image && image.width > 0 && image.height > 0;
}
function isOversized(image, atlasSize) {
  return image.width > atlasSize || image.height > atlasSize;
}
export {
  TextureAtlasManager as T,
  TextureAtlas as a
};
