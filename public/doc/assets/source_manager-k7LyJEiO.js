var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _SourceManager_instances, setupLoaderEvents_fn;
import { P as PerkyModule } from "./perky_module-DrWJO8l1.js";
import { S as SourceLoader } from "./source_loader-CBYKn62_.js";
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
      "loader:error",
      "asset:loaded"
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
  this.listenTo(loader, "progress", (progress, { asset }) => {
    this.emit("asset:loaded", asset);
  });
};
__publicField(SourceManager, "$category", "sourceManager");
export {
  SourceManager as S
};
