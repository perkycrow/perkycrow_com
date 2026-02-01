var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var _gl, _programs, _defaults;
import { S as ShaderProgram } from "./shader_program-CRf-39vH.js";
class ShaderRegistry {
  constructor(gl) {
    __privateAdd(this, _gl, null);
    __privateAdd(this, _programs, /* @__PURE__ */ new Map());
    __privateAdd(this, _defaults, /* @__PURE__ */ new Map());
    __privateSet(this, _gl, gl);
  }
  register(id, { vertex, fragment, uniforms = [], attributes = [] }) {
    const program = new ShaderProgram(__privateGet(this, _gl), vertex, fragment);
    for (const name of uniforms) {
      program.registerUniform(name);
    }
    for (const name of attributes) {
      program.registerAttribute(name);
    }
    __privateGet(this, _programs).set(id, program);
    return program;
  }
  get(id) {
    return __privateGet(this, _programs).get(id) || null;
  }
  has(id) {
    return __privateGet(this, _programs).has(id);
  }
  setDefault(type, id) {
    __privateGet(this, _defaults).set(type, id);
    return this;
  }
  getDefault(type) {
    const id = __privateGet(this, _defaults).get(type);
    return id ? this.get(id) : null;
  }
  unregister(id) {
    const program = __privateGet(this, _programs).get(id);
    if (program) {
      program.dispose();
      __privateGet(this, _programs).delete(id);
      for (const [type, defaultId] of __privateGet(this, _defaults)) {
        if (defaultId === id) {
          __privateGet(this, _defaults).delete(type);
        }
      }
    }
    return this;
  }
  dispose() {
    for (const program of __privateGet(this, _programs).values()) {
      program.dispose();
    }
    __privateGet(this, _programs).clear();
    __privateGet(this, _defaults).clear();
    __privateSet(this, _gl, null);
  }
}
_gl = new WeakMap();
_programs = new WeakMap();
_defaults = new WeakMap();
export {
  ShaderRegistry as S
};
