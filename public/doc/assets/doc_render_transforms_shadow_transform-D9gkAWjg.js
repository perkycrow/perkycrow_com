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
var _program;
import { d as doc, t as text, s as section, a as action, l as logger } from "./runtime-DOmi4lo7.js";
import { R as RenderTransform } from "./render_transform-ClfkMTcS.js";
import { S as SHADOW_SHADER_DEF } from "./shadow_shader-BY1Wg89t.js";
class ShadowTransform extends RenderTransform {
  constructor(options = {}) {
    super(options);
    __privateAdd(this, _program, null);
    this.skewX = options.skewX ?? 0.5;
    this.scaleY = options.scaleY ?? -0.3;
    this.offsetY = options.offsetY ?? 0;
    this.color = options.color ?? [0, 0, 0, 0.4];
  }
  init(context) {
    __privateSet(this, _program, context.shaderRegistry.register("shadow", SHADOW_SHADER_DEF));
  }
  getProgram() {
    return __privateGet(this, _program);
  }
  applyUniforms(gl, program) {
    gl.uniform1f(program.uniforms.uShadowSkewX, this.skewX);
    gl.uniform1f(program.uniforms.uShadowScaleY, this.scaleY);
    gl.uniform1f(program.uniforms.uShadowOffsetY, this.offsetY);
    gl.uniform4fv(program.uniforms.uShadowColor, this.color);
  }
  getPropertyConfig() {
    return this.constructor.propertyConfig;
  }
  dispose() {
    __privateSet(this, _program, null);
  }
}
_program = new WeakMap();
__publicField(ShadowTransform, "propertyConfig", {
  skewX: { min: -2, max: 2, step: 0.05 },
  scaleY: { min: -1, max: 0, step: 0.05 },
  offsetY: { min: -0.5, max: 0.5, step: 0.01 },
  color: { type: "color" }
});
const shadow_transform_doc = doc("ShadowTransform", () => {
  text(`
        Projects a skewed shadow beneath sprites in a [[RenderGroup@render]].
        Extends [[RenderTransform@render]] and uses a dedicated shadow shader.
    `);
  section("Creation", () => {
    text("Create with optional skew, scale, offset, and color parameters.");
    action("Default shadow", () => {
      const shadow = new ShadowTransform();
      logger.log("skewX:", shadow.skewX);
      logger.log("scaleY:", shadow.scaleY);
      logger.log("offsetY:", shadow.offsetY);
      logger.log("color:", shadow.color);
    });
    action("Custom shadow", () => {
      const shadow = new ShadowTransform({
        skewX: 0.8,
        scaleY: -0.5,
        offsetY: 0.1,
        color: [0.1, 0, 0.2, 0.6]
      });
      logger.log("skewX:", shadow.skewX);
      logger.log("scaleY:", shadow.scaleY);
      logger.log("offsetY:", shadow.offsetY);
      logger.log("color:", shadow.color);
    });
  });
  section("Properties", () => {
    text("All shadow parameters can be tweaked at runtime.");
    action("Modify properties", () => {
      const shadow = new ShadowTransform();
      shadow.skewX = 1;
      shadow.scaleY = -0.4;
      shadow.offsetY = 0.05;
      shadow.color = [0, 0, 0, 0.8];
      logger.log("skewX:", shadow.skewX);
      logger.log("scaleY:", shadow.scaleY);
      logger.log("offsetY:", shadow.offsetY);
      logger.log("color:", shadow.color);
    });
  });
  section("Property Config", () => {
    text("`getPropertyConfig()` returns slider ranges for inspector UIs.");
    action("getPropertyConfig", () => {
      const shadow = new ShadowTransform();
      const config = shadow.getPropertyConfig();
      logger.log("skewX range:", config.skewX.min, "to", config.skewX.max);
      logger.log("scaleY range:", config.scaleY.min, "to", config.scaleY.max);
      logger.log("color type:", config.color.type);
    });
  });
});
export {
  shadow_transform_doc as default
};
