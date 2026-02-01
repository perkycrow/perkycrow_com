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
var _width, _color;
import { d as doc, t as text, s as section, a as action, l as logger } from "./runtime-DOmi4lo7.js";
import { S as SpriteEffect } from "./sprite_effect-D5CqI1nO.js";
class OutlineEffect extends SpriteEffect {
  constructor(options = {}) {
    super(options);
    __privateAdd(this, _width, 0.02);
    __privateAdd(this, _color, [1, 1, 1, 1]);
    if (options.width !== void 0) {
      __privateSet(this, _width, options.width);
    }
    if (options.color !== void 0) {
      __privateSet(this, _color, options.color);
    }
  }
  get width() {
    return __privateGet(this, _width);
  }
  set width(value) {
    __privateSet(this, _width, value);
  }
  get color() {
    return __privateGet(this, _color);
  }
  set color(value) {
    __privateSet(this, _color, value);
  }
  getHints() {
    return {
      width: __privateGet(this, _width),
      color: __privateGet(this, _color)
    };
  }
}
_width = new WeakMap();
_color = new WeakMap();
__publicField(OutlineEffect, "type", "outline");
const outline_effect_doc = doc("OutlineEffect", () => {
  text(`
        Draws an outline around sprite edges by detecting alpha boundaries in the texture.
        Extends [[SpriteEffect@render]]. Used with [[SpriteEffectStack@render]].
    `);
  section("Creation", () => {
    text("Create with optional width and color parameters.");
    action("Default outline", () => {
      const outline = new OutlineEffect();
      logger.log("type:", outline.type);
      logger.log("width:", outline.width);
      logger.log("color:", outline.color);
    });
    action("Custom width and color", () => {
      const outline = new OutlineEffect({
        width: 0.05,
        color: [1, 0, 0, 1]
      });
      logger.log("width:", outline.width);
      logger.log("color:", outline.color);
    });
  });
  section("Properties", () => {
    text("Width and color can be changed at runtime.");
    action("Modify properties", () => {
      const outline = new OutlineEffect({ width: 0.02 });
      logger.log("initial width:", outline.width);
      outline.width = 0.08;
      logger.log("new width:", outline.width);
      outline.color = [0, 1, 0, 1];
      logger.log("new color:", outline.color);
    });
  });
  section("Hints", () => {
    text("`getHints()` returns the current parameters for the shader pipeline.");
    action("getHints", () => {
      const outline = new OutlineEffect({
        width: 0.03,
        color: [1, 1, 0, 1]
      });
      const hints = outline.getHints();
      logger.log("hints.width:", hints.width);
      logger.log("hints.color:", hints.color);
    });
  });
});
export {
  outline_effect_doc as default
};
