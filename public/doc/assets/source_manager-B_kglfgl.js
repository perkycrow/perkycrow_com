var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _loadingPromises, _SourceManager_instances, setupLoaderEvents_fn;
import { P as PerkyModule } from "./perky_module-H-JzEFBm.js";
import { R as Registry } from "./registry-fw3VIFkv.js";
class SourceLoader extends PerkyModule {
  constructor(assets, loaders) {
    super();
    __privateAdd(this, _loadingPromises, {});
    this.loaders = loaders instanceof Registry ? loaders : new Registry(loaders);
    this.assets = assets;
  }
  get assetCount() {
    return this.assets.length;
  }
  get loadedCount() {
    return this.assets.filter((asset) => asset.loaded).length;
  }
  get progress() {
    if (this.assetCount === 0) {
      return 1;
    }
    return this.loadedCount / this.assetCount;
  }
  async load() {
    if (this.loading) {
      return false;
    }
    this.loading = true;
    const promises = this.assets.map((asset) => {
      return this.loadAsset(asset);
    });
    await Promise.all(promises);
    this.loading = false;
    this.emit("complete", this.assets);
    return this.assets;
  }
  async loadAsset(asset) {
    const assetKey = `${asset.type}:${asset.id}`;
    if (asset.loaded) {
      return asset;
    }
    if (__privateGet(this, _loadingPromises)[assetKey]) {
      return __privateGet(this, _loadingPromises)[assetKey];
    }
    const loader = this.loaders.get(asset.type);
    if (!loader) {
      throw new Error(`No loader found for asset type: ${asset.type}`);
    }
    const params = asset.url ? {
      url: asset.url,
      config: asset.config || {}
    } : asset;
    __privateGet(this, _loadingPromises)[assetKey] = Promise.resolve().then(() => loader(params)).then((source) => {
      asset.source = source;
      delete __privateGet(this, _loadingPromises)[assetKey];
      this.emit("progress", this.progress, { asset, source });
      return asset;
    }).catch((error) => {
      delete __privateGet(this, _loadingPromises)[assetKey];
      this.emit("error", asset, error);
      throw error;
    });
    return __privateGet(this, _loadingPromises)[assetKey];
  }
}
_loadingPromises = new WeakMap();
class SourceManager extends PerkyModule {
  constructor(options = {}) {
    super(options);
    __privateAdd(this, _SourceManager_instances);
    this.loaders = options.loaders;
    this.manifest = options.manifest;
  }
  onInstall(host) {
    this.delegateTo(host, ["loadAsset", "loadTag", "loadAll", "loaders"]);
    this.delegateEventsTo(host, [
      "loader:progress",
      "loader:complete",
      "loader:error"
    ]);
  }
  async loadAsset(id) {
    const asset = this.manifest.getAsset(id);
    if (!asset) {
      throw new Error(`Asset not found: ${id}`);
    }
    const sourceLoader = new SourceLoader([asset], this.loaders);
    __privateMethod(this, _SourceManager_instances, setupLoaderEvents_fn).call(this, sourceLoader);
    await sourceLoader.load();
    return sourceLoader;
  }
  async loadTag(tag) {
    const assets = this.manifest.getAssetsByTag(tag);
    const sourceLoader = new SourceLoader(assets, this.loaders);
    __privateMethod(this, _SourceManager_instances, setupLoaderEvents_fn).call(this, sourceLoader);
    await sourceLoader.load();
    return sourceLoader;
  }
  async loadAll() {
    const assets = this.manifest.getAllAssets();
    const sourceLoader = new SourceLoader(assets, this.loaders);
    __privateMethod(this, _SourceManager_instances, setupLoaderEvents_fn).call(this, sourceLoader);
    await sourceLoader.load();
    return sourceLoader;
  }
}
_SourceManager_instances = new WeakSet();
setupLoaderEvents_fn = function(loader) {
  this.delegateEvents(loader, [
    "progress",
    "complete",
    "error"
  ], "loader");
};
__publicField(SourceManager, "$category", "sourceManager");
export {
  SourceManager as S
};
