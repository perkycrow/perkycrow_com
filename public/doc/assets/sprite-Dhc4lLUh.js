var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var _effects, _region, _effects2;
import { O as Object2D } from "./object_2d-DKcr5oBk.js";
import { T as TextureRegion } from "./texture_region-Buaf2v24.js";
import { S as ShaderEffect } from "./shader_effect-DOeCHK4c.js";
class SpriteEffectStack {
  constructor() {
    __privateAdd(this, _effects, []);
    __privateSet(this, _effects, []);
  }
  get effects() {
    return __privateGet(this, _effects);
  }
  get count() {
    return __privateGet(this, _effects).length;
  }
  add(effect) {
    if (this.has(effect.constructor)) {
      return this;
    }
    __privateGet(this, _effects).push(effect);
    return this;
  }
  remove(EffectClass) {
    const index = __privateGet(this, _effects).findIndex((e) => e.constructor === EffectClass);
    if (index !== -1) {
      const effect = __privateGet(this, _effects)[index];
      effect.dispose();
      __privateGet(this, _effects).splice(index, 1);
    }
    return this;
  }
  get(EffectClass) {
    return __privateGet(this, _effects).find((e) => e.constructor === EffectClass) || null;
  }
  has(EffectClass) {
    return __privateGet(this, _effects).some((e) => e.constructor === EffectClass);
  }
  clear() {
    for (const effect of __privateGet(this, _effects)) {
      effect.dispose();
    }
    __privateSet(this, _effects, []);
    return this;
  }
  getHints() {
    const hints = {};
    for (const effect of __privateGet(this, _effects)) {
      if (!effect.enabled) {
        continue;
      }
      const effectHints = effect.getHints();
      if (effectHints) {
        hints[effect.type] = effectHints;
      }
    }
    return Object.keys(hints).length > 0 ? hints : null;
  }
  update(deltaTime) {
    for (const effect of __privateGet(this, _effects)) {
      if (effect.enabled) {
        effect.update(deltaTime);
      }
    }
  }
  dispose() {
    this.clear();
  }
  getShaderEffectTypes() {
    const types = [];
    for (const effect of __privateGet(this, _effects)) {
      if (effect.enabled && effect instanceof ShaderEffect) {
        types.push(effect.type);
      }
    }
    return types;
  }
  getShaderEffectParams() {
    const params = [0, 0, 0, 0];
    let offset = 0;
    for (const effect of __privateGet(this, _effects)) {
      if (!effect.enabled || !(effect instanceof ShaderEffect)) {
        continue;
      }
      const effectParams = effect.getParams();
      for (let i = 0; i < effectParams.length && offset + i < 4; i++) {
        params[offset + i] = effectParams[i];
      }
      offset += effectParams.length;
    }
    return params;
  }
}
_effects = new WeakMap();
class Sprite extends Object2D {
  constructor(options = {}) {
    super(options);
    __privateAdd(this, _region, null);
    __privateAdd(this, _effects2, null);
    this.width = options.width ?? null;
    this.height = options.height ?? null;
    this.animations = /* @__PURE__ */ new Map();
    this.currentAnimation = null;
    if (options.region) {
      __privateSet(this, _region, options.region);
    } else if (options.frame) {
      this.setFrame(options.frame);
    } else if (options.image) {
      __privateSet(this, _region, TextureRegion.fromImage(options.image));
    }
  }
  get region() {
    return __privateGet(this, _region);
  }
  set region(value) {
    __privateSet(this, _region, value);
  }
  get image() {
    var _a;
    return ((_a = __privateGet(this, _region)) == null ? void 0 : _a.image) ?? null;
  }
  set image(value) {
    if (value) {
      __privateSet(this, _region, TextureRegion.fromImage(value));
    } else {
      __privateSet(this, _region, null);
    }
  }
  get currentFrame() {
    return __privateGet(this, _region);
  }
  setFrame(frame) {
    if (frame instanceof TextureRegion) {
      __privateSet(this, _region, frame);
    } else if (frame && frame.frame) {
      const image = frame.image;
      __privateSet(this, _region, TextureRegion.fromFrame(image, frame.frame));
    } else {
      __privateSet(this, _region, null);
    }
  }
  addAnimation(name, animation) {
    this.animations.set(name, animation);
  }
  play(name) {
    const animation = this.animations.get(name);
    if (animation) {
      if (this.currentAnimation && this.currentAnimation !== animation) {
        this.currentAnimation.stop();
      }
      this.currentAnimation = animation;
      this.currentAnimation.play();
    }
  }
  stop() {
    if (this.currentAnimation) {
      this.currentAnimation.stop();
      this.currentAnimation = null;
    }
  }
  get effects() {
    if (!__privateGet(this, _effects2)) {
      __privateSet(this, _effects2, new SpriteEffectStack());
    }
    return __privateGet(this, _effects2);
  }
  get renderHints() {
    const parentHints = super.renderHints;
    const hasEffects = __privateGet(this, _effects2) !== null && __privateGet(this, _effects2).count > 0;
    if (!parentHints && !hasEffects) {
      return null;
    }
    const hints = parentHints ? { ...parentHints } : {};
    if (hasEffects) {
      const effectHints = __privateGet(this, _effects2).getHints();
      if (effectHints) {
        hints.effects = effectHints;
      }
      const shaderEffectTypes = __privateGet(this, _effects2).getShaderEffectTypes();
      if (shaderEffectTypes.length > 0) {
        hints.shaderEffectTypes = shaderEffectTypes;
        hints.effectParams = __privateGet(this, _effects2).getShaderEffectParams();
      }
    }
    return hints;
  }
  getBounds() {
    const region = __privateGet(this, _region);
    const hasWidth = this.width !== null;
    const hasHeight = this.height !== null;
    if (!region) {
      const renderW2 = hasWidth ? this.width : 10;
      const renderH2 = hasHeight ? this.height : 10;
      const offsetX2 = -renderW2 * this.anchorX;
      const offsetY2 = -renderH2 * this.anchorY;
      return {
        minX: offsetX2,
        minY: offsetY2,
        maxX: offsetX2 + renderW2,
        maxY: offsetY2 + renderH2,
        width: renderW2,
        height: renderH2
      };
    }
    const w = region.width;
    const h = region.height;
    let renderW;
    let renderH;
    if (hasWidth && hasHeight) {
      renderW = this.width;
      renderH = this.height;
    } else if (hasWidth) {
      renderW = this.width;
      renderH = h / w * renderW;
    } else if (hasHeight) {
      renderH = this.height;
      renderW = w / h * renderH;
    } else {
      renderW = w;
      renderH = h;
    }
    const offsetX = -renderW * this.anchorX;
    const offsetY = -renderH * this.anchorY;
    return {
      minX: offsetX,
      minY: offsetY,
      maxX: offsetX + renderW,
      maxY: offsetY + renderH,
      width: renderW,
      height: renderH
    };
  }
}
_region = new WeakMap();
_effects2 = new WeakMap();
export {
  Sprite as S,
  SpriteEffectStack as a
};
