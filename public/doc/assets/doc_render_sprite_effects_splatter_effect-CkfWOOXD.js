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
var _intensity, _pattern, _atlas;
import { d as doc, t as text, s as section, a as action, l as logger } from "./runtime-DOmi4lo7.js";
import { S as SpriteEffect } from "./sprite_effect-D5CqI1nO.js";
class SplatterEffect extends SpriteEffect {
  constructor(options = {}) {
    super(options);
    __privateAdd(this, _intensity, 0);
    __privateAdd(this, _pattern, 0);
    __privateAdd(this, _atlas, null);
    if (options.intensity !== void 0) {
      __privateSet(this, _intensity, options.intensity);
    }
    if (options.pattern !== void 0) {
      __privateSet(this, _pattern, options.pattern);
    }
    if (options.atlas !== void 0) {
      __privateSet(this, _atlas, options.atlas);
    }
  }
  get intensity() {
    return __privateGet(this, _intensity);
  }
  set intensity(value) {
    __privateSet(this, _intensity, Math.max(0, Math.min(1, value)));
  }
  get pattern() {
    return __privateGet(this, _pattern);
  }
  set pattern(value) {
    __privateSet(this, _pattern, value);
  }
  get atlas() {
    return __privateGet(this, _atlas);
  }
  set atlas(value) {
    __privateSet(this, _atlas, value);
  }
  getHints() {
    return {
      intensity: __privateGet(this, _intensity),
      pattern: __privateGet(this, _pattern),
      atlas: __privateGet(this, _atlas)
    };
  }
}
_intensity = new WeakMap();
_pattern = new WeakMap();
_atlas = new WeakMap();
__publicField(SplatterEffect, "type", "splatter");
const splatter_effect_doc = doc("SplatterEffect", () => {
  text(`
        Applies a splatter dissolve effect to sprites using an atlas texture.
        Extends [[SpriteEffect@render]]. Used with [[SpriteEffectStack@render]].
    `);
  section("Creation", () => {
    text("Create with optional intensity, pattern, and atlas parameters.");
    action("Default splatter", () => {
      const splatter = new SplatterEffect();
      logger.log("type:", splatter.type);
      logger.log("intensity:", splatter.intensity);
      logger.log("pattern:", splatter.pattern);
      logger.log("atlas:", splatter.atlas);
    });
    action("Custom splatter", () => {
      const splatter = new SplatterEffect({
        intensity: 0.5,
        pattern: 2
      });
      logger.log("intensity:", splatter.intensity);
      logger.log("pattern:", splatter.pattern);
    });
  });
  section("Intensity", () => {
    text("Intensity is clamped between 0 and 1.");
    action("Clamped intensity", () => {
      const splatter = new SplatterEffect();
      splatter.intensity = 0.7;
      logger.log("set 0.7:", splatter.intensity);
      splatter.intensity = 2;
      logger.log("set 2.0 (clamped):", splatter.intensity);
      splatter.intensity = -1;
      logger.log("set -1 (clamped):", splatter.intensity);
    });
  });
  section("Hints", () => {
    text("`getHints()` returns the current parameters for the shader pipeline.");
    action("getHints", () => {
      const splatter = new SplatterEffect({
        intensity: 0.3,
        pattern: 1
      });
      const hints = splatter.getHints();
      logger.log("hints.intensity:", hints.intensity);
      logger.log("hints.pattern:", hints.pattern);
      logger.log("hints.atlas:", hints.atlas);
    });
  });
});
export {
  splatter_effect_doc as default
};
