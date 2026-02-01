var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _context, _masterGain, _suspended, _pendingDecodes, _masterVolume, _AudioContext_instances, processPendingDecodes_fn;
class AudioContext {
  constructor() {
    __privateAdd(this, _AudioContext_instances);
    __privateAdd(this, _context, null);
    __privateAdd(this, _masterGain, null);
    __privateAdd(this, _suspended, true);
    __privateAdd(this, _pendingDecodes, []);
    __privateAdd(this, _masterVolume, 1);
  }
  get context() {
    return __privateGet(this, _context);
  }
  get masterGain() {
    return __privateGet(this, _masterGain);
  }
  get currentTime() {
    var _a;
    return ((_a = __privateGet(this, _context)) == null ? void 0 : _a.currentTime) ?? 0;
  }
  get suspended() {
    return __privateGet(this, _suspended);
  }
  get sampleRate() {
    var _a;
    return ((_a = __privateGet(this, _context)) == null ? void 0 : _a.sampleRate) ?? 44100;
  }
  get listener() {
    var _a;
    return ((_a = __privateGet(this, _context)) == null ? void 0 : _a.listener) ?? null;
  }
  init() {
    if (__privateGet(this, _context)) {
      return __privateGet(this, _context);
    }
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) {
      throw new Error("Web Audio API is not supported in this browser");
    }
    __privateSet(this, _context, new AudioContextClass());
    __privateSet(this, _masterGain, __privateGet(this, _context).createGain());
    __privateGet(this, _masterGain).gain.setValueAtTime(__privateGet(this, _masterVolume), __privateGet(this, _context).currentTime);
    __privateGet(this, _masterGain).connect(__privateGet(this, _context).destination);
    __privateSet(this, _suspended, __privateGet(this, _context).state === "suspended");
    if (__privateGet(this, _context).state === "running") {
      __privateMethod(this, _AudioContext_instances, processPendingDecodes_fn).call(this);
    }
    return __privateGet(this, _context);
  }
  async resume() {
    if (!__privateGet(this, _context)) {
      this.init();
    }
    if (__privateGet(this, _context).state === "suspended") {
      await __privateGet(this, _context).resume();
      __privateSet(this, _suspended, false);
    }
    return this;
  }
  suspend() {
    if (__privateGet(this, _context) && __privateGet(this, _context).state === "running") {
      __privateGet(this, _context).suspend();
      __privateSet(this, _suspended, true);
    }
    return this;
  }
  setMasterVolume(value) {
    __privateSet(this, _masterVolume, Math.max(0, Math.min(1, value)));
    if (__privateGet(this, _masterGain)) {
      __privateGet(this, _masterGain).gain.setValueAtTime(
        __privateGet(this, _masterVolume),
        __privateGet(this, _context).currentTime
      );
    }
    return this;
  }
  getMasterVolume() {
    return __privateGet(this, _masterVolume);
  }
  createGain() {
    this.init();
    return __privateGet(this, _context).createGain();
  }
  createOscillator() {
    this.init();
    return __privateGet(this, _context).createOscillator();
  }
  createBufferSource() {
    this.init();
    return __privateGet(this, _context).createBufferSource();
  }
  createPanner() {
    this.init();
    return __privateGet(this, _context).createPanner();
  }
  createStereoPanner() {
    this.init();
    return __privateGet(this, _context).createStereoPanner();
  }
  async decodeAudioData(arrayBuffer) {
    this.init();
    if (__privateGet(this, _context).state === "suspended") {
      return new Promise((resolve, reject) => {
        __privateGet(this, _pendingDecodes).push({ buffer: arrayBuffer, resolve, reject });
      });
    }
    return __privateGet(this, _context).decodeAudioData(arrayBuffer);
  }
  setListenerPosition(x, y, z = 0) {
    this.init();
    const listener = __privateGet(this, _context).listener;
    if (listener.positionX) {
      listener.positionX.setValueAtTime(x, __privateGet(this, _context).currentTime);
      listener.positionY.setValueAtTime(y, __privateGet(this, _context).currentTime);
      listener.positionZ.setValueAtTime(z, __privateGet(this, _context).currentTime);
    } else if (listener.setPosition) {
      listener.setPosition(x, y, z);
    }
    return this;
  }
  getListenerPosition() {
    var _a;
    if (!((_a = __privateGet(this, _context)) == null ? void 0 : _a.listener)) {
      return { x: 0, y: 0, z: 0 };
    }
    const listener = __privateGet(this, _context).listener;
    if (listener.positionX) {
      return {
        x: listener.positionX.value,
        y: listener.positionY.value,
        z: listener.positionZ.value
      };
    }
    return { x: 0, y: 0, z: 0 };
  }
  dispose() {
    if (__privateGet(this, _context)) {
      __privateGet(this, _context).close();
      __privateSet(this, _context, null);
      __privateSet(this, _masterGain, null);
    }
  }
}
_context = new WeakMap();
_masterGain = new WeakMap();
_suspended = new WeakMap();
_pendingDecodes = new WeakMap();
_masterVolume = new WeakMap();
_AudioContext_instances = new WeakSet();
processPendingDecodes_fn = function() {
  for (const pending of __privateGet(this, _pendingDecodes)) {
    __privateGet(this, _context).decodeAudioData(pending.buffer).then(pending.resolve).catch(pending.reject);
  }
  __privateSet(this, _pendingDecodes, []);
};
export {
  AudioContext as A
};
