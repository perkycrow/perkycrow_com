var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var _region;
import { O as Object2D } from "./object_2d-Y0NPrBXr.js";
import { T as TextureRegion } from "./texture_region-Buaf2v24.js";
class Sprite extends Object2D {
  constructor(options = {}) {
    super(options);
    __privateAdd(this, _region, null);
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
export {
  Sprite as S
};
