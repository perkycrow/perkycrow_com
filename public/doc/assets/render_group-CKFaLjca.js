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
var _initialized, _RenderGroup_instances, initTransform_fn, initPasses_fn;
import { P as PerkyModule } from "./perky_module-DrWJO8l1.js";
const BLEND_MODES = {
  normal: "normal",
  additive: "additive",
  multiply: "multiply"
};
class RenderGroup extends PerkyModule {
  constructor(options = {}) {
    super(options);
    __privateAdd(this, _RenderGroup_instances);
    __privateAdd(this, _initialized, false);
    this.content = options.content ?? null;
    this.postPasses = options.postPasses ?? [];
    this.blendMode = options.blendMode ?? BLEND_MODES.normal;
    this.visible = options.visible ?? true;
    this.opacity = options.opacity ?? 1;
    this.renderTransform = options.renderTransform ?? null;
    __privateSet(this, _initialized, false);
  }
  onInstall() {
    var _a;
    const renderer = this.host;
    if (!(renderer == null ? void 0 : renderer.gl) || !(renderer == null ? void 0 : renderer.shaderRegistry)) {
      return;
    }
    __privateMethod(this, _RenderGroup_instances, initPasses_fn).call(this, renderer.shaderRegistry);
    __privateMethod(this, _RenderGroup_instances, initTransform_fn).call(this, renderer);
    const fbManager = (_a = renderer.postProcessor) == null ? void 0 : _a.framebufferManager;
    if (fbManager) {
      fbManager.getOrCreateBuffer(this.$id);
    }
  }
  hasActivePasses() {
    return this.postPasses.some((pass) => pass.enabled);
  }
  onDispose() {
    var _a, _b;
    const fbManager = (_b = (_a = this.host) == null ? void 0 : _a.postProcessor) == null ? void 0 : _b.framebufferManager;
    if (fbManager) {
      fbManager.disposeBuffer(this.$id);
    }
    for (const pass of this.postPasses) {
      pass.dispose();
    }
    this.postPasses = [];
    if (this.renderTransform) {
      this.renderTransform.dispose();
      this.renderTransform = null;
    }
    __privateSet(this, _initialized, false);
  }
  addPostPass(pass) {
    var _a;
    if (__privateGet(this, _initialized) && ((_a = this.host) == null ? void 0 : _a.shaderRegistry)) {
      pass.init(this.host.shaderRegistry);
    }
    this.postPasses.push(pass);
    this.emit("postPass:added", pass);
    return this;
  }
  removePostPass(pass) {
    const index = this.postPasses.indexOf(pass);
    if (index !== -1) {
      this.postPasses.splice(index, 1);
      pass.dispose();
      this.emit("postPass:removed", pass);
    }
    return this;
  }
}
_initialized = new WeakMap();
_RenderGroup_instances = new WeakSet();
initTransform_fn = function(renderer) {
  if (this.renderTransform) {
    this.renderTransform.init({
      gl: renderer.gl,
      shaderRegistry: renderer.shaderRegistry
    });
  }
};
initPasses_fn = function(shaderRegistry) {
  if (__privateGet(this, _initialized)) {
    return;
  }
  for (const pass of this.postPasses) {
    pass.init(shaderRegistry);
  }
  __privateSet(this, _initialized, true);
};
__publicField(RenderGroup, "$category", "renderGroup");
__publicField(RenderGroup, "$name", "renderGroup");
export {
  BLEND_MODES as B,
  RenderGroup as R
};
