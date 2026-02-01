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
var _enabled, _program, _uniforms, _RenderPass_instances, applyUniform_fn;
import { P as PerkyModule } from "./perky_module-DrWJO8l1.js";
class RenderPass extends PerkyModule {
  constructor(options = {}) {
    super(options);
    __privateAdd(this, _RenderPass_instances);
    __privateAdd(this, _enabled, true);
    __privateAdd(this, _program, null);
    __privateAdd(this, _uniforms, {});
    __privateSet(this, _uniforms, { ...this.constructor.defaultUniforms });
  }
  get enabled() {
    return __privateGet(this, _enabled);
  }
  set enabled(value) {
    __privateSet(this, _enabled, value);
  }
  get program() {
    return __privateGet(this, _program);
  }
  get uniforms() {
    return __privateGet(this, _uniforms);
  }
  init(shaderRegistry) {
    const definition = this.constructor.shaderDefinition;
    if (!definition) {
      throw new Error(`${this.constructor.name}.shaderDefinition must be defined`);
    }
    const id = `pass_${this.constructor.name}_${Date.now()}`;
    __privateSet(this, _program, shaderRegistry.register(id, definition));
  }
  setUniform(name, value) {
    __privateGet(this, _uniforms)[name] = value;
    return this;
  }
  render(gl, inputTexture, fullscreenQuad) {
    if (!__privateGet(this, _enabled) || !__privateGet(this, _program)) {
      return;
    }
    __privateGet(this, _program).use();
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, inputTexture);
    __privateGet(this, _program).setUniform1i("uTexture", 0);
    this.applyUniforms();
    fullscreenQuad.draw(gl, __privateGet(this, _program));
  }
  applyUniforms() {
    for (const [name, value] of Object.entries(__privateGet(this, _uniforms))) {
      __privateMethod(this, _RenderPass_instances, applyUniform_fn).call(this, name, value);
    }
  }
  onDispose() {
    __privateSet(this, _program, null);
    __privateSet(this, _uniforms, {});
  }
}
_enabled = new WeakMap();
_program = new WeakMap();
_uniforms = new WeakMap();
_RenderPass_instances = new WeakSet();
applyUniform_fn = function(name, value) {
  var _a;
  if (typeof value === "number") {
    __privateGet(this, _program).setUniform1f(name, value);
    return;
  }
  if (!Array.isArray(value)) {
    return;
  }
  const setters = {
    2: () => __privateGet(this, _program).setUniform2f(name, value[0], value[1]),
    3: () => __privateGet(this, _program).setUniform3f(name, value[0], value[1], value[2]),
    4: () => __privateGet(this, _program).setUniform4f(name, value)
  };
  (_a = setters[value.length]) == null ? void 0 : _a.call(setters);
};
__publicField(RenderPass, "$category", "renderPass");
__publicField(RenderPass, "$lifecycle", false);
__publicField(RenderPass, "shaderDefinition", null);
__publicField(RenderPass, "defaultUniforms", {});
__publicField(RenderPass, "uniformConfig", {});
export {
  RenderPass as R
};
