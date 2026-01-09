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
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _data, _Manifest_instances, initAssets_fn, exportAssets_fn;
import { P as PerkyModule } from "./perky_module-H-JzEFBm.js";
import { l as setDefaults, k as deepMerge, h as getNestedValue, j as setNestedValue } from "./utils-CPyB8f8f.js";
import { R as Registry } from "./registry-fw3VIFkv.js";
import { A as Asset } from "./asset-CuLWpPYs.js";
class Manifest extends PerkyModule {
  constructor(params = {}) {
    const { data = {}, ...moduleParams } = params;
    super(moduleParams);
    __privateAdd(this, _Manifest_instances);
    __privateAdd(this, _data);
    __privateSet(this, _data, setDefaults(data, {
      config: {},
      assets: {}
    }));
    this.assets = new Registry();
    this.assets.addIndex("type", (asset) => asset.type);
    this.assets.addIndex("tags", (asset) => asset.tags);
    __privateMethod(this, _Manifest_instances, initAssets_fn).call(this);
  }
  onInstall(host) {
    this.delegateTo(host, [
      "getConfig",
      "setConfig",
      "addAsset",
      "getAsset",
      "getAssets",
      "getAssetsByType",
      "getAssetsByTag",
      "getSource",
      "getAllAssets"
    ]);
    this.delegateTo(host, {
      export: "exportManifest",
      import: "importManifest"
    });
  }
  import(jsonData) {
    if (typeof jsonData === "string") {
      try {
        __privateSet(this, _data, JSON.parse(jsonData));
      } catch (error) {
        throw new Error(`Failed to parse manifest JSON: ${error.message}`);
      }
    } else if (jsonData && typeof jsonData === "object") {
      __privateSet(this, _data, jsonData);
    } else {
      throw new Error("Invalid manifest data: must be a JSON string or object");
    }
    this.assets.clear();
    __privateMethod(this, _Manifest_instances, initAssets_fn).call(this);
    return this;
  }
  export() {
    return deepMerge({}, {
      config: __privateGet(this, _data).config,
      assets: __privateMethod(this, _Manifest_instances, exportAssets_fn).call(this)
    });
  }
  getConfig(path) {
    if (path === void 0) {
      return __privateGet(this, _data).config;
    }
    return getNestedValue(__privateGet(this, _data).config, path);
  }
  setConfig(path, value) {
    setNestedValue(__privateGet(this, _data).config, path, value);
    return this;
  }
  addAsset(assetData) {
    validateAssetInput(assetData);
    const asset = prepareAsset(assetData);
    this.assets.set(asset.id, asset);
    return asset;
  }
  getAsset(id) {
    return this.assets.get(id) || null;
  }
  getSource(id) {
    const asset = this.getAsset(id);
    if (!asset) {
      return null;
    }
    return asset.source;
  }
  getAssetsByType(type) {
    return this.assets.lookup("type", type);
  }
  getAssetsByTag(tag) {
    if (!tag || typeof tag !== "string") {
      return [];
    }
    return this.assets.lookup("tags", tag);
  }
  getAssets() {
    return this.assets.all;
  }
  getAllAssets() {
    return this.assets.all;
  }
  hasAsset(id) {
    return this.assets.has(id);
  }
  removeAsset(id) {
    return this.assets.delete(id);
  }
}
_data = new WeakMap();
_Manifest_instances = new WeakSet();
initAssets_fn = function() {
  const { assets } = __privateGet(this, _data);
  if (!assets || typeof assets !== "object") {
    return;
  }
  Object.entries(assets).forEach(([id, assetData]) => {
    if (!assetData.id) {
      assetData.id = id;
    }
    const asset = prepareAsset(assetData);
    this.assets.set(asset.id, asset);
  });
};
exportAssets_fn = function() {
  const exported = {};
  for (const asset of this.assets.all) {
    exported[asset.id] = asset.export();
  }
  return exported;
};
__publicField(Manifest, "$category", "manifest");
__publicField(Manifest, "$lifecycle", false);
function validateAssetInput(assetData) {
  if (!assetData || typeof assetData !== "object") {
    throw new Error("Asset must be an object or Asset instance");
  }
}
function prepareAsset(assetData) {
  if (assetData instanceof Asset) {
    return assetData;
  }
  const asset = new Asset(assetData);
  if (!asset.id) {
    throw new Error("Asset must have an id");
  }
  return asset;
}
export {
  Manifest as M
};
