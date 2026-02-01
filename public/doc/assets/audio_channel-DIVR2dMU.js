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
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _audioContext, _gainNode, _volume, _muted, _sources, _AudioChannel_instances, updateGain_fn;
import { P as PerkyModule } from "./perky_module-DrWJO8l1.js";
class AudioChannel extends PerkyModule {
  constructor(options = {}) {
    super(options);
    __privateAdd(this, _AudioChannel_instances);
    __privateAdd(this, _audioContext, null);
    __privateAdd(this, _gainNode, null);
    __privateAdd(this, _volume, 1);
    __privateAdd(this, _muted, false);
    __privateAdd(this, _sources, /* @__PURE__ */ new Map());
    __privateSet(this, _audioContext, options.audioContext);
    __privateSet(this, _volume, options.volume ?? 1);
  }
  get volume() {
    return __privateGet(this, _volume);
  }
  set volume(value) {
    __privateSet(this, _volume, Math.max(0, Math.min(1, value)));
    __privateMethod(this, _AudioChannel_instances, updateGain_fn).call(this);
  }
  get muted() {
    return __privateGet(this, _muted);
  }
  set muted(value) {
    __privateSet(this, _muted, Boolean(value));
    __privateMethod(this, _AudioChannel_instances, updateGain_fn).call(this);
  }
  get gainNode() {
    if (!__privateGet(this, _gainNode) && __privateGet(this, _audioContext)) {
      __privateSet(this, _gainNode, __privateGet(this, _audioContext).createGain());
      __privateGet(this, _gainNode).connect(__privateGet(this, _audioContext).masterGain);
      __privateMethod(this, _AudioChannel_instances, updateGain_fn).call(this);
    }
    return __privateGet(this, _gainNode);
  }
  get sources() {
    return Array.from(__privateGet(this, _sources).values());
  }
  get sourceCount() {
    return __privateGet(this, _sources).size;
  }
  onInstall() {
  }
  onDispose() {
    this.stopAll();
    if (__privateGet(this, _gainNode)) {
      __privateGet(this, _gainNode).disconnect();
      __privateSet(this, _gainNode, null);
    }
  }
  registerSource(source) {
    if (!source || !source.$id) {
      return false;
    }
    __privateGet(this, _sources).set(source.$id, source);
    this.emit("source:added", source);
    return true;
  }
  unregisterSource(source) {
    if (!source || !__privateGet(this, _sources).has(source.$id)) {
      return false;
    }
    __privateGet(this, _sources).delete(source.$id);
    this.emit("source:removed", source);
    return true;
  }
  getSource(id) {
    return __privateGet(this, _sources).get(id) || null;
  }
  hasSource(id) {
    return __privateGet(this, _sources).has(id);
  }
  stopAll() {
    for (const source of __privateGet(this, _sources).values()) {
      if (source.stop) {
        source.stop();
      }
    }
    __privateGet(this, _sources).clear();
  }
  setVolume(value) {
    this.volume = value;
    this.emit("volume:changed", __privateGet(this, _volume));
    return this;
  }
  getVolume() {
    return __privateGet(this, _volume);
  }
  mute() {
    this.muted = true;
    this.emit("muted");
    return this;
  }
  unmute() {
    this.muted = false;
    this.emit("unmuted");
    return this;
  }
  toggleMute() {
    if (__privateGet(this, _muted)) {
      this.unmute();
    } else {
      this.mute();
    }
    return this;
  }
}
_audioContext = new WeakMap();
_gainNode = new WeakMap();
_volume = new WeakMap();
_muted = new WeakMap();
_sources = new WeakMap();
_AudioChannel_instances = new WeakSet();
updateGain_fn = function() {
  var _a;
  if (__privateGet(this, _gainNode) && ((_a = __privateGet(this, _audioContext)) == null ? void 0 : _a.context)) {
    const effectiveVolume = __privateGet(this, _muted) ? 0 : __privateGet(this, _volume);
    __privateGet(this, _gainNode).gain.setValueAtTime(
      effectiveVolume,
      __privateGet(this, _audioContext).context.currentTime
    );
  }
};
__publicField(AudioChannel, "$category", "audioChannel");
export {
  AudioChannel as A
};
