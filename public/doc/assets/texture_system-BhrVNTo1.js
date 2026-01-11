var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var _atlasManager, _manualRegions;
import { P as PerkyModule } from "./perky_module-BJShv6RO.js";
import { T as TextureAtlasManager } from "./texture_atlas_manager-CIhOxnHz.js";
import { T as TextureRegion } from "./texture_region-Buaf2v24.js";
class TextureSystem extends PerkyModule {
  constructor(options = {}) {
    super(options);
    __privateAdd(this, _atlasManager, null);
    __privateAdd(this, _manualRegions, /* @__PURE__ */ new Map());
    __privateSet(this, _atlasManager, new TextureAtlasManager({
      atlasSize: options.atlasSize
    }));
    this.fallback = options.fallback ?? null;
  }
  onInstall(host) {
    this.delegateTo(host, [
      "getRegion",
      "hasRegion",
      "addRegion",
      "addRegions",
      "registerManualAtlas"
    ]);
  }
  get atlasManager() {
    return __privateGet(this, _atlasManager);
  }
  get atlases() {
    return __privateGet(this, _atlasManager).atlases;
  }
  get regionCount() {
    return __privateGet(this, _atlasManager).regionCount + __privateGet(this, _manualRegions).size;
  }
  getRegion(id) {
    var _a;
    const region = __privateGet(this, _manualRegions).get(id) || __privateGet(this, _atlasManager).get(id);
    if (region) {
      return region;
    }
    const source = (_a = this.fallback) == null ? void 0 : _a.call(this, id);
    if (source) {
      return TextureRegion.fromImage(source);
    }
    return null;
  }
  hasRegion(id) {
    return __privateGet(this, _manualRegions).has(id) || __privateGet(this, _atlasManager).has(id);
  }
  addRegion(id, image) {
    if (this.hasRegion(id)) {
      return this.getRegion(id);
    }
    return __privateGet(this, _atlasManager).add(id, image);
  }
  addRegions(images) {
    return __privateGet(this, _atlasManager).addBatch(images);
  }
  registerManualAtlas(id, image, frames) {
    for (const [frameName, frameData] of Object.entries(frames)) {
      const regionId = `${id}:${frameName}`;
      const region = TextureRegion.fromFrame(image, frameData);
      __privateGet(this, _manualRegions).set(regionId, region);
    }
  }
  buildFromAssets(assets) {
    const images = {};
    for (const asset of assets) {
      if (isImageAsset(asset) && asset.source) {
        images[asset.id] = asset.source;
      }
    }
    return this.addRegions(images);
  }
  getDirtyAtlases() {
    return __privateGet(this, _atlasManager).getDirtyAtlases();
  }
  markAllClean() {
    __privateGet(this, _atlasManager).markAllClean();
  }
  clear() {
    __privateGet(this, _atlasManager).clear();
    __privateGet(this, _manualRegions).clear();
  }
  onDispose() {
    this.clear();
  }
}
_atlasManager = new WeakMap();
_manualRegions = new WeakMap();
__publicField(TextureSystem, "$category", "textureSystem");
function isImageAsset(asset) {
  return asset.type === "image";
}
export {
  TextureSystem as T
};
