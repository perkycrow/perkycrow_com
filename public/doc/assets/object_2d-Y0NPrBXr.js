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
var _enabled, _effects, _tint, _effects2, _debugGizmos;
import { T as Transform } from "./transform-CSg8UWZ0.js";
class ShaderEffect {
  constructor(options = {}) {
    __privateAdd(this, _enabled, true);
    __privateSet(this, _enabled, options.enabled ?? true);
  }
  get enabled() {
    return __privateGet(this, _enabled);
  }
  set enabled(value) {
    __privateSet(this, _enabled, value);
  }
  get type() {
    return this.constructor.name;
  }
  getParams() {
    const { params } = this.constructor.shader;
    return params.map((name) => this[name] ?? 0);
  }
  getHints() {
    return null;
  }
  update() {
  }
  dispose() {
  }
}
_enabled = new WeakMap();
__publicField(ShaderEffect, "shader", {
  params: [],
  uniforms: [],
  fragment: ""
});
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
class Object2D extends Transform {
  constructor(options = {}) {
    super();
    __privateAdd(this, _tint, null);
    __privateAdd(this, _effects2, null);
    __privateAdd(this, _debugGizmos, null);
    this.visible = options.visible ?? true;
    this.opacity = options.opacity ?? 1;
    this.depth = options.depth ?? 0;
    this.anchorX = options.anchorX ?? 0.5;
    this.anchorY = options.anchorY ?? 0.5;
    if (options.debugGizmos !== void 0) {
      __privateSet(this, _debugGizmos, options.debugGizmos);
    }
    if (options.tint !== void 0) {
      __privateSet(this, _tint, options.tint);
    }
    if (options.x !== void 0) {
      this.x = options.x;
    }
    if (options.y !== void 0) {
      this.y = options.y;
    }
    if (options.rotation !== void 0) {
      this.rotation = options.rotation;
    }
    if (options.scaleX !== void 0) {
      this.scaleX = options.scaleX;
    }
    if (options.scaleY !== void 0) {
      this.scaleY = options.scaleY;
    }
    if (options.pivotX !== void 0) {
      this.pivotX = options.pivotX;
    }
    if (options.pivotY !== void 0) {
      this.pivotY = options.pivotY;
    }
  }
  get tint() {
    return __privateGet(this, _tint);
  }
  set tint(value) {
    __privateSet(this, _tint, value);
  }
  get effects() {
    if (!__privateGet(this, _effects2)) {
      __privateSet(this, _effects2, new SpriteEffectStack());
    }
    return __privateGet(this, _effects2);
  }
  get debugGizmos() {
    return __privateGet(this, _debugGizmos);
  }
  set debugGizmos(value) {
    __privateSet(this, _debugGizmos, value);
  }
  showDebugGizmos(options = {}) {
    __privateSet(this, _debugGizmos, {
      bounds: options.bounds ?? true,
      anchor: options.anchor ?? true,
      pivot: options.pivot ?? true,
      origin: options.origin ?? true
    });
    return this;
  }
  hideDebugGizmos() {
    __privateSet(this, _debugGizmos, null);
    return this;
  }
  setPosition(x, y) {
    this.x = x;
    this.y = y;
    this.markDirty();
    return this;
  }
  setRotation(rotation) {
    this.rotation = rotation;
    this.markDirty();
    return this;
  }
  setScale(scaleX, scaleY = scaleX) {
    this.scaleX = scaleX;
    this.scaleY = scaleY;
    this.markDirty();
    return this;
  }
  setOpacity(opacity) {
    this.opacity = opacity;
    this.markDirty();
    return this;
  }
  setVisible(visible) {
    this.visible = visible;
    this.markDirty();
    return this;
  }
  setDepth(depth) {
    if (this.depth !== depth) {
      this.depth = depth;
      if (this.parent) {
        this.parent.markChildrenNeedSort();
      }
      this.markDirty();
    }
    return this;
  }
  setAnchor(x, y = x) {
    this.anchorX = x;
    this.anchorY = y;
    this.markDirty();
    return this;
  }
  setPivot(x, y) {
    this.pivotX = x;
    this.pivotY = y;
    this.markDirty();
    return this;
  }
  getBounds() {
    return {
      minX: 0,
      minY: 0,
      maxX: 0,
      maxY: 0,
      width: 0,
      height: 0
    };
  }
  getWorldBounds() {
    const localBounds = this.getBounds();
    if (localBounds.width === 0 && localBounds.height === 0) {
      return localBounds;
    }
    const corners = [
      { x: localBounds.minX, y: localBounds.minY },
      { x: localBounds.maxX, y: localBounds.minY },
      { x: localBounds.minX, y: localBounds.maxY },
      { x: localBounds.maxX, y: localBounds.maxY }
    ];
    const transformedCorners = corners.map((corner) => this.transformPoint(corner));
    const xs = transformedCorners.map((c) => c.x);
    const ys = transformedCorners.map((c) => c.y);
    const minX = Math.min(...xs);
    const minY = Math.min(...ys);
    const maxX = Math.max(...xs);
    const maxY = Math.max(...ys);
    return {
      minX,
      minY,
      maxX,
      maxY,
      width: maxX - minX,
      height: maxY - minY
    };
  }
  get renderHints() {
    const hasTint = __privateGet(this, _tint) !== null;
    const hasEffects = __privateGet(this, _effects2) !== null && __privateGet(this, _effects2).count > 0;
    if (!hasTint && !hasEffects) {
      return null;
    }
    const hints = {};
    if (hasTint) {
      hints.tint = __privateGet(this, _tint);
    }
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
  render() {
  }
}
_tint = new WeakMap();
_effects2 = new WeakMap();
_debugGizmos = new WeakMap();
export {
  Object2D as O
};
