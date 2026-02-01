var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _elapsed, _events, _framesByEvent, _pingpongDirection, _SpriteAnimation_instances, advanceFrame_fn, getNextFrameIndex_fn, getNextForward_fn, getNextReverse_fn, getNextPingpong_fn, emitFrameEvents_fn, updateSpriteFrame_fn;
import { P as PerkyModule } from "./perky_module-DrWJO8l1.js";
class SpriteAnimation extends PerkyModule {
  constructor(options = {}) {
    super(options);
    __privateAdd(this, _SpriteAnimation_instances);
    __privateAdd(this, _elapsed, 0);
    __privateAdd(this, _events, /* @__PURE__ */ new Map());
    __privateAdd(this, _framesByEvent, /* @__PURE__ */ new Map());
    __privateAdd(this, _pingpongDirection, 1);
    const { sprite, frames, fps = 12, loop = true, speed = 1, playbackMode = "forward" } = options;
    this.sprite = sprite;
    this.frames = Array.isArray(frames) ? frames : [];
    this.fps = fps;
    this.loop = loop;
    this.speed = speed;
    this.playbackMode = playbackMode;
    this.currentIndex = 0;
    this.playing = false;
    this.completed = false;
  }
  get frameDuration() {
    return 1 / this.fps;
  }
  getFrameDuration(index) {
    const frame = this.frames[index];
    const baseDuration = this.frameDuration;
    if (frame && typeof frame.duration === "number") {
      return baseDuration * frame.duration;
    }
    return baseDuration;
  }
  get currentFrameDuration() {
    return this.getFrameDuration(this.currentIndex);
  }
  get totalFrames() {
    return this.frames.length;
  }
  get currentFrame() {
    return this.frames[this.currentIndex] || null;
  }
  get progress() {
    return this.totalFrames > 0 ? this.currentIndex / this.totalFrames : 0;
  }
  play() {
    if (this.playing || this.totalFrames === 0) {
      return this;
    }
    this.playing = true;
    this.completed = false;
    __privateSet(this, _elapsed, 0);
    __privateMethod(this, _SpriteAnimation_instances, updateSpriteFrame_fn).call(this);
    this.emit("play");
    return this;
  }
  pause() {
    if (!this.playing) {
      return this;
    }
    this.playing = false;
    this.emit("pause");
    return this;
  }
  stop() {
    this.playing = false;
    this.currentIndex = 0;
    this.completed = false;
    __privateSet(this, _elapsed, 0);
    __privateMethod(this, _SpriteAnimation_instances, updateSpriteFrame_fn).call(this);
    this.emit("stop");
    return this;
  }
  restart() {
    this.currentIndex = 0;
    this.completed = false;
    __privateSet(this, _elapsed, 0);
    this.playing = true;
    __privateMethod(this, _SpriteAnimation_instances, updateSpriteFrame_fn).call(this);
    this.emit("play");
    return this;
  }
  setFrame(index) {
    if (index >= 0 && index < this.totalFrames) {
      this.currentIndex = index;
      __privateMethod(this, _SpriteAnimation_instances, updateSpriteFrame_fn).call(this);
      this.emit("frameChanged", this.currentFrame, index);
    }
    return this;
  }
  setFrameByName(frameName) {
    const index = this.frames.indexOf(frameName);
    if (index !== -1) {
      this.setFrame(index);
    }
    return this;
  }
  nextFrame() {
    const nextIndex = (this.currentIndex + 1) % this.totalFrames;
    this.setFrame(nextIndex);
    return this;
  }
  previousFrame() {
    const prevIndex = this.currentIndex === 0 ? this.totalFrames - 1 : this.currentIndex - 1;
    this.setFrame(prevIndex);
    return this;
  }
  setFps(fps) {
    this.fps = fps;
    this.emit("fpsChanged", fps);
    return this;
  }
  setLoop(loop) {
    this.loop = loop;
    return this;
  }
  setSpeed(speed) {
    this.speed = speed;
    return this;
  }
  setPlaybackMode(mode) {
    this.playbackMode = mode;
    if (mode === "reverse") {
      __privateSet(this, _pingpongDirection, -1);
    } else {
      __privateSet(this, _pingpongDirection, 1);
    }
    return this;
  }
  addEvent(frameIndex, eventName) {
    if (!__privateGet(this, _events).has(frameIndex)) {
      __privateGet(this, _events).set(frameIndex, []);
    }
    __privateGet(this, _events).get(frameIndex).push(eventName);
    if (!__privateGet(this, _framesByEvent).has(eventName)) {
      __privateGet(this, _framesByEvent).set(eventName, []);
    }
    __privateGet(this, _framesByEvent).get(eventName).push(frameIndex);
    return this;
  }
  removeEvent(frameIndex, eventName) {
    if (!__privateGet(this, _events).has(frameIndex)) {
      return this;
    }
    const events = __privateGet(this, _events).get(frameIndex);
    const index = events.indexOf(eventName);
    if (index !== -1) {
      events.splice(index, 1);
    }
    if (events.length === 0) {
      __privateGet(this, _events).delete(frameIndex);
    }
    if (__privateGet(this, _framesByEvent).has(eventName)) {
      const frames = __privateGet(this, _framesByEvent).get(eventName);
      const frameIdx = frames.indexOf(frameIndex);
      if (frameIdx !== -1) {
        frames.splice(frameIdx, 1);
      }
      if (frames.length === 0) {
        __privateGet(this, _framesByEvent).delete(eventName);
      }
    }
    return this;
  }
  clearEvents() {
    __privateGet(this, _events).clear();
    __privateGet(this, _framesByEvent).clear();
    return this;
  }
  getEvents(frameIndex) {
    return __privateGet(this, _events).get(frameIndex) || [];
  }
  getFramesByEvent(eventName) {
    return __privateGet(this, _framesByEvent).get(eventName) || [];
  }
  getSegmentProgress(eventName) {
    const keyframes = this.getFramesByEvent(eventName);
    if (keyframes.length < 2) {
      return 0;
    }
    const current = this.currentIndex;
    for (let i = 0; i < keyframes.length; i++) {
      const start = keyframes[i];
      const end = keyframes[(i + 1) % keyframes.length];
      const isInSegment = end > start ? current >= start && current < end : current >= start || current < end;
      if (isInSegment) {
        const segmentLength = end > start ? end - start : this.totalFrames - start + end;
        const position = current >= start ? current - start : this.totalFrames - start + current;
        return position / segmentLength;
      }
    }
    return 0;
  }
  seekToFrame(index) {
    if (index >= 0 && index < this.totalFrames) {
      this.currentIndex = index;
      __privateSet(this, _elapsed, 0);
      __privateMethod(this, _SpriteAnimation_instances, updateSpriteFrame_fn).call(this);
    }
    return this;
  }
  seekToProgress(progress) {
    const clampedProgress = Math.max(0, Math.min(1, progress));
    const targetIndex = Math.floor(clampedProgress * this.totalFrames);
    return this.seekToFrame(Math.min(targetIndex, this.totalFrames - 1));
  }
  update(deltaTime) {
    if (!this.playing || this.completed) {
      return;
    }
    __privateSet(this, _elapsed, __privateGet(this, _elapsed) + deltaTime * this.speed);
    while (__privateGet(this, _elapsed) >= this.currentFrameDuration) {
      __privateSet(this, _elapsed, __privateGet(this, _elapsed) - this.currentFrameDuration);
      __privateMethod(this, _SpriteAnimation_instances, advanceFrame_fn).call(this);
      if (this.completed) {
        break;
      }
    }
  }
  onDispose() {
    this.playing = false;
    this.sprite = null;
    this.frames = [];
    __privateGet(this, _events).clear();
    __privateGet(this, _framesByEvent).clear();
  }
}
_elapsed = new WeakMap();
_events = new WeakMap();
_framesByEvent = new WeakMap();
_pingpongDirection = new WeakMap();
_SpriteAnimation_instances = new WeakSet();
advanceFrame_fn = function() {
  const previousIndex = this.currentIndex;
  const nextIndex = __privateMethod(this, _SpriteAnimation_instances, getNextFrameIndex_fn).call(this);
  if (nextIndex === null) {
    this.playing = false;
    this.completed = true;
    this.emit("complete");
    return;
  }
  this.currentIndex = nextIndex;
  __privateMethod(this, _SpriteAnimation_instances, emitFrameEvents_fn).call(this, previousIndex, this.currentIndex);
  __privateMethod(this, _SpriteAnimation_instances, updateSpriteFrame_fn).call(this);
  this.emit("frameChanged", this.currentFrame, this.currentIndex);
};
getNextFrameIndex_fn = function() {
  const lastIndex = this.totalFrames - 1;
  if (this.playbackMode === "forward") {
    return __privateMethod(this, _SpriteAnimation_instances, getNextForward_fn).call(this, lastIndex);
  }
  if (this.playbackMode === "reverse") {
    return __privateMethod(this, _SpriteAnimation_instances, getNextReverse_fn).call(this, lastIndex);
  }
  if (this.playbackMode === "pingpong") {
    return __privateMethod(this, _SpriteAnimation_instances, getNextPingpong_fn).call(this, lastIndex);
  }
  return __privateMethod(this, _SpriteAnimation_instances, getNextForward_fn).call(this, lastIndex);
};
getNextForward_fn = function(lastIndex) {
  if (this.currentIndex < lastIndex) {
    return this.currentIndex + 1;
  }
  if (this.loop) {
    this.emit("loop");
    return 0;
  }
  return null;
};
getNextReverse_fn = function(lastIndex) {
  if (this.currentIndex > 0) {
    return this.currentIndex - 1;
  }
  if (this.loop) {
    this.emit("loop");
    return lastIndex;
  }
  return null;
};
getNextPingpong_fn = function(lastIndex) {
  const nextIndex = this.currentIndex + __privateGet(this, _pingpongDirection);
  if (nextIndex >= 0 && nextIndex <= lastIndex) {
    return nextIndex;
  }
  __privateSet(this, _pingpongDirection, __privateGet(this, _pingpongDirection) * -1);
  this.emit("bounce", __privateGet(this, _pingpongDirection));
  if (!this.loop && this.currentIndex === 0) {
    return null;
  }
  return this.currentIndex + __privateGet(this, _pingpongDirection);
};
emitFrameEvents_fn = function(previousIndex, currentIndex) {
  const events = __privateGet(this, _events).get(currentIndex);
  if (events) {
    for (const eventName of events) {
      this.emit("event", eventName, currentIndex);
      this.emit(`event:${eventName}`, currentIndex);
    }
  }
};
updateSpriteFrame_fn = function() {
  if (!this.sprite || !this.currentFrame) {
    return;
  }
  if (this.currentFrame.region) {
    this.sprite.region = this.currentFrame.region;
  } else {
    this.sprite.region = this.currentFrame;
  }
};
export {
  SpriteAnimation as S
};
