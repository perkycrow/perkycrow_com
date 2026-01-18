var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _Spritesheet_instances, initializeFrames_fn;
import { T as TextureRegion } from "./texture_region-Buaf2v24.js";
class Spritesheet {
  constructor(source) {
    __privateAdd(this, _Spritesheet_instances);
    this.images = source.images || [source.image];
    this.data = source.data || { frames: [], animations: {}, meta: {} };
    this.framesMap = /* @__PURE__ */ new Map();
    this.animations = this.data.animations || {};
    __privateMethod(this, _Spritesheet_instances, initializeFrames_fn).call(this, this.data.frames);
  }
  getFrame(name) {
    return this.framesMap.get(name) || null;
  }
  getRegion(name) {
    const frame = this.framesMap.get(name);
    return (frame == null ? void 0 : frame.region) || null;
  }
  getFrames(names) {
    if (!names) {
      return Array.from(this.framesMap.values());
    }
    if (!Array.isArray(names)) {
      return [];
    }
    return names.map((name) => this.getFrame(name)).filter(Boolean);
  }
  getRegions(names) {
    return this.getFrames(names).map((frame) => frame.region);
  }
  getAnimation(name) {
    return this.animations[name] || null;
  }
  getAnimationRegions(name) {
    const frameNames = this.getAnimation(name);
    if (!frameNames) {
      return [];
    }
    return this.getRegions(frameNames);
  }
  listFrames() {
    return Array.from(this.framesMap.keys());
  }
  listAnimations() {
    return Object.keys(this.animations);
  }
}
_Spritesheet_instances = new WeakSet();
initializeFrames_fn = function(frames) {
  if (!Array.isArray(frames)) {
    return;
  }
  for (const frameData of frames) {
    if (!frameData.filename) {
      continue;
    }
    const atlasIndex = frameData.atlas ?? 0;
    const image = this.images[atlasIndex];
    const region = new TextureRegion({
      image,
      x: frameData.frame.x,
      y: frameData.frame.y,
      width: frameData.frame.w,
      height: frameData.frame.h
    });
    this.framesMap.set(frameData.filename, {
      ...frameData,
      region,
      image
    });
  }
};
export {
  Spritesheet as S
};
