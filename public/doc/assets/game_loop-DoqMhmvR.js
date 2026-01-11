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
var _paused, _fpsLimited;
import { P as PerkyModule } from "./perky_module-BJShv6RO.js";
class GameLoop extends PerkyModule {
  constructor(params = {}) {
    super(params);
    __privateAdd(this, _paused, false);
    __privateAdd(this, _fpsLimited, false);
    this.lastTime = 0;
    this.accumulator = 0;
    this.maxFrameSkip = params.maxFrameSkip || 5;
    this.frameCount = 0;
    this.screenFrameCount = 0;
    this.lastFpsUpdate = 0;
    this.fps = params.fps ?? 60;
    this.frameInterval = 1e3 / this.fps;
    __privateSet(this, _fpsLimited, params.fpsLimited ?? false);
  }
  onInstall(host) {
    this.delegateTo(host, [
      "paused",
      "pause",
      "resume",
      "setFps",
      "getFps",
      "getCurrentFps",
      "getScreenFps",
      "fpsLimited",
      "setFpsLimited"
    ]);
    this.delegateEventsTo(host, [
      "update",
      "render",
      "pause",
      "resume",
      "changed:fps",
      "changed:fpsLimited"
    ]);
  }
  get paused() {
    return __privateGet(this, _paused);
  }
  set paused(value) {
    __privateSet(this, _paused, value);
  }
  get running() {
    return super.running && !__privateGet(this, _paused);
  }
  onStart() {
    __privateSet(this, _paused, false);
    this.lastTime = performance.now();
    this.accumulator = 0;
    this.frameCount = 0;
    this.lastFpsUpdate = this.lastTime;
    requestAnimationFrame((time) => update(this, time));
  }
  pause(...args) {
    if (!this.started || __privateGet(this, _paused)) {
      return false;
    }
    __privateSet(this, _paused, true);
    this.emit("pause", ...args);
    return true;
  }
  resume(...args) {
    if (!this.started || !__privateGet(this, _paused)) {
      return false;
    }
    __privateSet(this, _paused, false);
    this.lastTime = performance.now();
    this.emit("resume", ...args);
    requestAnimationFrame((time) => update(this, time));
    return true;
  }
  getFps() {
    return this.fps;
  }
  setFps(fps) {
    this.fps = fps;
    this.frameInterval = 1e3 / fps;
    this.emit("changed:fps", fps);
  }
  getCurrentFps() {
    return this.currentFps || 0;
  }
  getScreenFps() {
    return this.screenFps || 0;
  }
  get fpsLimited() {
    return __privateGet(this, _fpsLimited);
  }
  setFpsLimited(value) {
    __privateSet(this, _fpsLimited, value);
    this.emit("changed:fpsLimited", value);
  }
}
_paused = new WeakMap();
_fpsLimited = new WeakMap();
__publicField(GameLoop, "$category", "gameLoop");
function update(gameLoop, currentTime) {
  if (!gameLoop.started || gameLoop.paused) {
    return false;
  }
  const deltaTime = currentTime - gameLoop.lastTime;
  gameLoop.lastTime = currentTime;
  gameLoop.screenFrameCount++;
  if (gameLoop.fpsLimited) {
    const { frameInterval, maxFrameSkip } = gameLoop;
    gameLoop.accumulator += Math.min(deltaTime, frameInterval * maxFrameSkip);
    while (gameLoop.accumulator >= frameInterval) {
      gameLoop.emit("update", frameInterval / 1e3);
      gameLoop.accumulator -= frameInterval;
      gameLoop.frameCount++;
    }
    const frameProgress = gameLoop.accumulator / frameInterval;
    gameLoop.emit("render", frameProgress, gameLoop.currentFps, gameLoop.screenFps);
  } else {
    gameLoop.emit("update", deltaTime / 1e3);
    gameLoop.emit("render", 1, gameLoop.currentFps, gameLoop.screenFps);
    gameLoop.frameCount++;
  }
  if (currentTime - gameLoop.lastFpsUpdate >= 1e3) {
    gameLoop.currentFps = gameLoop.frameCount;
    gameLoop.screenFps = gameLoop.screenFrameCount;
    gameLoop.frameCount = 0;
    gameLoop.screenFrameCount = 0;
    gameLoop.lastFpsUpdate = currentTime;
  }
  requestAnimationFrame((time) => update(gameLoop, time));
  return true;
}
export {
  GameLoop as G
};
