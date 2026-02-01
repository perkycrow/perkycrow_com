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
var _audioContext, _channel, _gainNode, _pannerNode, _sourceNode, _playing, _loop, _volume, _playbackRate, _startTime, _pauseTime, _x, _y, _spatial, _refDistance, _maxDistance, _rolloffFactor, _AudioSource_instances, initSpatialOptions_fn, updatePannerPosition_fn, updateGain_fn, setupNodes_fn, configurePanner_fn, cleanupSourceNode_fn, _audioContext2, _buffers, _pendingAudio, _unlocked, _AudioSystem_instances, loadPendingAudio_fn, applyConfig_fn;
import { P as PerkyModule } from "./perky_module-DrWJO8l1.js";
import { A as AudioContext } from "./audio_context-BeUTJY33.js";
import { A as AudioChannel } from "./audio_channel-DIVR2dMU.js";
import { u as uniqueId } from "./utils-DVCexGPz.js";
import { o as onAudioUnlock } from "./audio_unlock-DF5uB3Ac.js";
class AudioSource extends PerkyModule {
  constructor(options = {}) {
    super(options);
    __privateAdd(this, _AudioSource_instances);
    __privateAdd(this, _audioContext, null);
    __privateAdd(this, _channel, null);
    __privateAdd(this, _gainNode, null);
    __privateAdd(this, _pannerNode, null);
    __privateAdd(this, _sourceNode, null);
    __privateAdd(this, _playing, false);
    __privateAdd(this, _loop, false);
    __privateAdd(this, _volume, 1);
    __privateAdd(this, _playbackRate, 1);
    __privateAdd(this, _startTime, 0);
    __privateAdd(this, _pauseTime, 0);
    __privateAdd(this, _x, 0);
    __privateAdd(this, _y, 0);
    __privateAdd(this, _spatial, false);
    __privateAdd(this, _refDistance, 1);
    __privateAdd(this, _maxDistance, 10);
    __privateAdd(this, _rolloffFactor, 1);
    __privateSet(this, _audioContext, options.audioContext);
    __privateSet(this, _channel, options.channel);
    __privateSet(this, _loop, options.loop ?? false);
    __privateSet(this, _volume, options.volume ?? 1);
    __privateSet(this, _playbackRate, options.playbackRate ?? 1);
    __privateSet(this, _spatial, options.spatial ?? false);
    __privateMethod(this, _AudioSource_instances, initSpatialOptions_fn).call(this, options);
  }
  get playing() {
    return __privateGet(this, _playing);
  }
  get loop() {
    return __privateGet(this, _loop);
  }
  set loop(value) {
    __privateSet(this, _loop, Boolean(value));
    if (__privateGet(this, _sourceNode) && "loop" in __privateGet(this, _sourceNode)) {
      __privateGet(this, _sourceNode).loop = __privateGet(this, _loop);
    }
  }
  get volume() {
    return __privateGet(this, _volume);
  }
  set volume(value) {
    __privateSet(this, _volume, Math.max(0, Math.min(1, value)));
    __privateMethod(this, _AudioSource_instances, updateGain_fn).call(this);
  }
  get playbackRate() {
    return __privateGet(this, _playbackRate);
  }
  set playbackRate(value) {
    __privateSet(this, _playbackRate, Math.max(0.1, Math.min(10, value)));
    if (__privateGet(this, _sourceNode) && "playbackRate" in __privateGet(this, _sourceNode)) {
      __privateGet(this, _sourceNode).playbackRate.setValueAtTime(
        __privateGet(this, _playbackRate),
        __privateGet(this, _audioContext).context.currentTime
      );
    }
  }
  get channel() {
    return __privateGet(this, _channel);
  }
  get gainNode() {
    return __privateGet(this, _gainNode);
  }
  get sourceNode() {
    return __privateGet(this, _sourceNode);
  }
  get currentTime() {
    if (!__privateGet(this, _playing)) {
      return __privateGet(this, _pauseTime);
    }
    return __privateGet(this, _audioContext).currentTime - __privateGet(this, _startTime);
  }
  get x() {
    return __privateGet(this, _x);
  }
  set x(value) {
    __privateSet(this, _x, value);
    __privateMethod(this, _AudioSource_instances, updatePannerPosition_fn).call(this);
  }
  get y() {
    return __privateGet(this, _y);
  }
  set y(value) {
    __privateSet(this, _y, value);
    __privateMethod(this, _AudioSource_instances, updatePannerPosition_fn).call(this);
  }
  get spatial() {
    return __privateGet(this, _spatial);
  }
  get refDistance() {
    return __privateGet(this, _refDistance);
  }
  get maxDistance() {
    return __privateGet(this, _maxDistance);
  }
  get rolloffFactor() {
    return __privateGet(this, _rolloffFactor);
  }
  playBuffer(buffer, offset = 0) {
    var _a;
    if (!__privateGet(this, _audioContext) || !buffer) {
      return false;
    }
    this.stop();
    __privateMethod(this, _AudioSource_instances, setupNodes_fn).call(this);
    __privateSet(this, _sourceNode, __privateGet(this, _audioContext).createBufferSource());
    __privateGet(this, _sourceNode).buffer = buffer;
    __privateGet(this, _sourceNode).loop = __privateGet(this, _loop);
    __privateGet(this, _sourceNode).playbackRate.setValueAtTime(
      __privateGet(this, _playbackRate),
      __privateGet(this, _audioContext).context.currentTime
    );
    __privateGet(this, _sourceNode).connect(__privateGet(this, _gainNode));
    __privateGet(this, _sourceNode).onended = () => {
      var _a2;
      if (__privateGet(this, _playing) && !__privateGet(this, _loop)) {
        __privateSet(this, _playing, false);
        this.emit("ended");
        (_a2 = __privateGet(this, _channel)) == null ? void 0 : _a2.unregisterSource(this);
      }
    };
    __privateGet(this, _sourceNode).start(0, offset);
    __privateSet(this, _startTime, __privateGet(this, _audioContext).currentTime - offset);
    __privateSet(this, _playing, true);
    (_a = __privateGet(this, _channel)) == null ? void 0 : _a.registerSource(this);
    this.emit("play");
    return true;
  }
  playOscillator(type = "sine", frequency = 440, duration = null) {
    var _a;
    if (!__privateGet(this, _audioContext)) {
      return false;
    }
    this.stop();
    __privateMethod(this, _AudioSource_instances, setupNodes_fn).call(this);
    __privateSet(this, _sourceNode, __privateGet(this, _audioContext).createOscillator());
    __privateGet(this, _sourceNode).type = type;
    __privateGet(this, _sourceNode).frequency.setValueAtTime(
      frequency,
      __privateGet(this, _audioContext).context.currentTime
    );
    __privateGet(this, _sourceNode).connect(__privateGet(this, _gainNode));
    __privateGet(this, _sourceNode).onended = () => {
      var _a2;
      if (__privateGet(this, _playing)) {
        __privateSet(this, _playing, false);
        this.emit("ended");
        (_a2 = __privateGet(this, _channel)) == null ? void 0 : _a2.unregisterSource(this);
      }
    };
    __privateGet(this, _sourceNode).start();
    __privateSet(this, _startTime, __privateGet(this, _audioContext).currentTime);
    __privateSet(this, _playing, true);
    if (duration !== null && duration > 0) {
      __privateGet(this, _sourceNode).stop(__privateGet(this, _audioContext).context.currentTime + duration);
    }
    (_a = __privateGet(this, _channel)) == null ? void 0 : _a.registerSource(this);
    this.emit("play");
    return true;
  }
  stop() {
    var _a;
    if (!__privateGet(this, _playing)) {
      return false;
    }
    __privateSet(this, _playing, false);
    __privateSet(this, _pauseTime, 0);
    if (__privateGet(this, _sourceNode)) {
      try {
        __privateGet(this, _sourceNode).stop();
      } catch {
      }
    }
    __privateMethod(this, _AudioSource_instances, cleanupSourceNode_fn).call(this);
    if (__privateGet(this, _pannerNode)) {
      __privateGet(this, _pannerNode).disconnect();
      __privateSet(this, _pannerNode, null);
    }
    if (__privateGet(this, _gainNode)) {
      __privateGet(this, _gainNode).disconnect();
      __privateSet(this, _gainNode, null);
    }
    (_a = __privateGet(this, _channel)) == null ? void 0 : _a.unregisterSource(this);
    this.emit("stop");
    return true;
  }
  setPosition(x, y) {
    __privateSet(this, _x, x);
    __privateSet(this, _y, y);
    __privateMethod(this, _AudioSource_instances, updatePannerPosition_fn).call(this);
    return this;
  }
  getPosition() {
    return { x: __privateGet(this, _x), y: __privateGet(this, _y) };
  }
  setVolume(value) {
    this.volume = value;
    return this;
  }
  getVolume() {
    return __privateGet(this, _volume);
  }
  setLoop(value) {
    this.loop = value;
    return this;
  }
  setPlaybackRate(value) {
    this.playbackRate = value;
    return this;
  }
  fadeIn(duration = 1) {
    var _a;
    if (!__privateGet(this, _gainNode) || !((_a = __privateGet(this, _audioContext)) == null ? void 0 : _a.context)) {
      return this;
    }
    const ctx = __privateGet(this, _audioContext).context;
    __privateGet(this, _gainNode).gain.setValueAtTime(0, ctx.currentTime);
    __privateGet(this, _gainNode).gain.linearRampToValueAtTime(__privateGet(this, _volume), ctx.currentTime + duration);
    return this;
  }
  fadeOut(duration = 1, stopAfter = true) {
    var _a;
    if (!__privateGet(this, _gainNode) || !((_a = __privateGet(this, _audioContext)) == null ? void 0 : _a.context)) {
      return this;
    }
    const ctx = __privateGet(this, _audioContext).context;
    __privateGet(this, _gainNode).gain.setValueAtTime(__privateGet(this, _gainNode).gain.value, ctx.currentTime);
    __privateGet(this, _gainNode).gain.linearRampToValueAtTime(0, ctx.currentTime + duration);
    if (stopAfter) {
      setTimeout(() => this.stop(), duration * 1e3);
    }
    return this;
  }
  onDispose() {
    this.stop();
  }
}
_audioContext = new WeakMap();
_channel = new WeakMap();
_gainNode = new WeakMap();
_pannerNode = new WeakMap();
_sourceNode = new WeakMap();
_playing = new WeakMap();
_loop = new WeakMap();
_volume = new WeakMap();
_playbackRate = new WeakMap();
_startTime = new WeakMap();
_pauseTime = new WeakMap();
_x = new WeakMap();
_y = new WeakMap();
_spatial = new WeakMap();
_refDistance = new WeakMap();
_maxDistance = new WeakMap();
_rolloffFactor = new WeakMap();
_AudioSource_instances = new WeakSet();
initSpatialOptions_fn = function(options) {
  __privateSet(this, _x, options.x ?? 0);
  __privateSet(this, _y, options.y ?? 0);
  __privateSet(this, _refDistance, options.refDistance ?? 1);
  __privateSet(this, _maxDistance, options.maxDistance ?? 10);
  __privateSet(this, _rolloffFactor, options.rolloffFactor ?? 1);
};
updatePannerPosition_fn = function() {
  var _a;
  if (__privateGet(this, _pannerNode) && ((_a = __privateGet(this, _audioContext)) == null ? void 0 : _a.context)) {
    const ctx = __privateGet(this, _audioContext).context;
    __privateGet(this, _pannerNode).positionX.setValueAtTime(__privateGet(this, _x), ctx.currentTime);
    __privateGet(this, _pannerNode).positionY.setValueAtTime(__privateGet(this, _y), ctx.currentTime);
  }
};
updateGain_fn = function() {
  var _a;
  if (__privateGet(this, _gainNode) && ((_a = __privateGet(this, _audioContext)) == null ? void 0 : _a.context)) {
    __privateGet(this, _gainNode).gain.setValueAtTime(
      __privateGet(this, _volume),
      __privateGet(this, _audioContext).context.currentTime
    );
  }
};
setupNodes_fn = function() {
  var _a;
  if (!__privateGet(this, _audioContext)) {
    return false;
  }
  __privateSet(this, _gainNode, __privateGet(this, _audioContext).createGain());
  __privateMethod(this, _AudioSource_instances, updateGain_fn).call(this);
  let outputNode = __privateGet(this, _gainNode);
  if (__privateGet(this, _spatial)) {
    __privateSet(this, _pannerNode, __privateGet(this, _audioContext).createPanner());
    __privateMethod(this, _AudioSource_instances, configurePanner_fn).call(this);
    __privateGet(this, _gainNode).connect(__privateGet(this, _pannerNode));
    outputNode = __privateGet(this, _pannerNode);
  }
  if ((_a = __privateGet(this, _channel)) == null ? void 0 : _a.gainNode) {
    outputNode.connect(__privateGet(this, _channel).gainNode);
  } else {
    outputNode.connect(__privateGet(this, _audioContext).masterGain);
  }
  return true;
};
configurePanner_fn = function() {
  if (!__privateGet(this, _pannerNode)) {
    return;
  }
  __privateGet(this, _pannerNode).panningModel = "HRTF";
  __privateGet(this, _pannerNode).distanceModel = "linear";
  __privateGet(this, _pannerNode).refDistance = __privateGet(this, _refDistance);
  __privateGet(this, _pannerNode).maxDistance = __privateGet(this, _maxDistance);
  __privateGet(this, _pannerNode).rolloffFactor = __privateGet(this, _rolloffFactor);
  __privateMethod(this, _AudioSource_instances, updatePannerPosition_fn).call(this);
};
cleanupSourceNode_fn = function() {
  if (__privateGet(this, _sourceNode)) {
    try {
      __privateGet(this, _sourceNode).disconnect();
    } catch {
    }
    __privateSet(this, _sourceNode, null);
  }
};
__publicField(AudioSource, "$category", "audioSource");
__publicField(AudioSource, "$lifecycle", false);
class AudioSystem extends PerkyModule {
  constructor(options = {}) {
    super(options);
    __privateAdd(this, _AudioSystem_instances);
    __privateAdd(this, _audioContext2, null);
    __privateAdd(this, _buffers, /* @__PURE__ */ new Map());
    __privateAdd(this, _pendingAudio, /* @__PURE__ */ new Map());
    __privateAdd(this, _unlocked, false);
    __privateSet(this, _audioContext2, new AudioContext());
    const defaultChannels = options.channels ?? ["music", "sfx", "ambiance"];
    for (const channelName of defaultChannels) {
      this.createChannel(channelName);
    }
  }
  get audioContext() {
    return __privateGet(this, _audioContext2);
  }
  get unlocked() {
    return __privateGet(this, _unlocked);
  }
  get currentTime() {
    return __privateGet(this, _audioContext2).currentTime;
  }
  get masterVolume() {
    return __privateGet(this, _audioContext2).getMasterVolume();
  }
  set masterVolume(value) {
    __privateGet(this, _audioContext2).setMasterVolume(value);
  }
  onInstall(host) {
    this.delegateTo(host, {
      play: "playSound",
      playAt: "playSoundAt",
      stop: "stopSound",
      unlock: "unlockAudio",
      setVolume: "setVolume",
      getVolume: "getVolume"
    });
    this.delegateEventsTo(host, [
      "audio:play",
      "audio:stop",
      "audio:unlocked"
    ], "audio");
    if (host.sourceManager) {
      this.listenTo(host.sourceManager, "loader:progress", (_progress, { asset, source }) => {
        if (asset.type === "audio" && (source == null ? void 0 : source.type) === "deferred_audio") {
          __privateGet(this, _pendingAudio).set(asset.id, source.url);
        }
      });
    }
    __privateMethod(this, _AudioSystem_instances, applyConfig_fn).call(this);
  }
  onStart() {
    onAudioUnlock(() => this.unlock());
  }
  onStop() {
    if (__privateGet(this, _unlocked)) {
      __privateGet(this, _audioContext2).suspend();
    }
  }
  onDispose() {
    this.stopAll();
    __privateGet(this, _buffers).clear();
    __privateGet(this, _audioContext2).dispose();
  }
  async unlock() {
    if (__privateGet(this, _unlocked)) {
      return true;
    }
    try {
      await __privateGet(this, _audioContext2).resume();
      __privateSet(this, _unlocked, true);
      await __privateMethod(this, _AudioSystem_instances, loadPendingAudio_fn).call(this);
      this.emit("audio:unlocked");
      return true;
    } catch {
      return false;
    }
  }
  createChannel(name, options = {}) {
    return this.create(AudioChannel, {
      $id: name,
      $bind: name,
      audioContext: __privateGet(this, _audioContext2),
      ...options
    });
  }
  getChannel(name) {
    return this.getChild(name);
  }
  hasChannel(name) {
    return this.hasChild(name);
  }
  listChannels() {
    return this.listNamesFor("audioChannel");
  }
  registerBuffer(id, buffer) {
    __privateGet(this, _buffers).set(id, buffer);
    this.emit("buffer:registered", id, buffer);
  }
  async registerArrayBuffer(id, arrayBuffer) {
    try {
      const audioBuffer = await __privateGet(this, _audioContext2).decodeAudioData(arrayBuffer);
      this.registerBuffer(id, audioBuffer);
      return audioBuffer;
    } catch (e) {
      this.emit("buffer:error", id, e);
      return null;
    }
  }
  getBuffer(id) {
    return __privateGet(this, _buffers).get(id) || null;
  }
  hasBuffer(id) {
    return __privateGet(this, _buffers).has(id);
  }
  async loadBuffer(id, url) {
    try {
      const response = await fetch(url);
      const arrayBuffer = await response.arrayBuffer();
      return this.registerArrayBuffer(id, arrayBuffer);
    } catch (e) {
      this.emit("buffer:error", id, e);
      return null;
    }
  }
  play(bufferId, options = {}) {
    if (!__privateGet(this, _unlocked)) {
      return null;
    }
    const buffer = __privateGet(this, _buffers).get(bufferId);
    if (!buffer) {
      return null;
    }
    const channelName = options.channel ?? "sfx";
    const channel = this.getChannel(channelName);
    const sourceId = options.$id ?? uniqueId(this.childrenRegistry, bufferId);
    const source = new AudioSource({
      $id: sourceId,
      audioContext: __privateGet(this, _audioContext2),
      channel,
      loop: options.loop ?? false,
      volume: options.volume ?? 1,
      playbackRate: options.playbackRate ?? 1
    });
    source.playBuffer(buffer, options.offset ?? 0);
    this.emit("audio:play", sourceId, bufferId, options);
    return source;
  }
  playAt(bufferId, x, y, options = {}) {
    return this.play(bufferId, {
      ...options,
      spatial: true,
      x,
      y
    });
  }
  playOscillator(options = {}) {
    if (!__privateGet(this, _unlocked)) {
      return null;
    }
    const channel = this.getChannel(options.channel ?? "sfx");
    const sourceId = options.$id ?? uniqueId(this.childrenRegistry, "oscillator");
    const source = new AudioSource({
      ...options,
      $id: sourceId,
      audioContext: __privateGet(this, _audioContext2),
      channel
    });
    source.playOscillator(options.type, options.frequency, options.duration);
    this.emit("audio:play", sourceId, "oscillator", options);
    return source;
  }
  playOscillatorAt(x, y, options = {}) {
    return this.playOscillator({
      ...options,
      spatial: true,
      x,
      y
    });
  }
  stop(sourceId) {
    for (const channelName of this.listChannels()) {
      const channel = this.getChannel(channelName);
      const source = channel == null ? void 0 : channel.getSource(sourceId);
      if (source) {
        source.stop();
        this.emit("audio:stop", sourceId);
        return true;
      }
    }
    return false;
  }
  stopChannel(channelName) {
    const channel = this.getChannel(channelName);
    if (channel) {
      channel.stopAll();
      return true;
    }
    return false;
  }
  stopAll() {
    for (const channelName of this.listChannels()) {
      this.stopChannel(channelName);
    }
  }
  setVolume(value) {
    this.masterVolume = value;
    this.emit("volume:changed", value);
    return this;
  }
  getVolume() {
    return this.masterVolume;
  }
  setChannelVolume(channelName, value) {
    const channel = this.getChannel(channelName);
    if (channel) {
      channel.setVolume(value);
    }
    return this;
  }
  getChannelVolume(channelName) {
    const channel = this.getChannel(channelName);
    return channel ? channel.getVolume() : 0;
  }
  muteChannel(channelName) {
    const channel = this.getChannel(channelName);
    if (channel) {
      channel.mute();
    }
    return this;
  }
  unmuteChannel(channelName) {
    const channel = this.getChannel(channelName);
    if (channel) {
      channel.unmute();
    }
    return this;
  }
  setListenerPosition(x, y) {
    __privateGet(this, _audioContext2).setListenerPosition(x, y, 0);
    return this;
  }
  getListenerPosition() {
    const pos = __privateGet(this, _audioContext2).getListenerPosition();
    return { x: pos.x, y: pos.y };
  }
}
_audioContext2 = new WeakMap();
_buffers = new WeakMap();
_pendingAudio = new WeakMap();
_unlocked = new WeakMap();
_AudioSystem_instances = new WeakSet();
loadPendingAudio_fn = async function() {
  const promises = [];
  for (const [id, url] of __privateGet(this, _pendingAudio)) {
    promises.push(this.loadBuffer(id, url));
  }
  __privateGet(this, _pendingAudio).clear();
  await Promise.all(promises);
};
applyConfig_fn = function() {
  var _a, _b;
  const audioConfig = (_b = (_a = this.host) == null ? void 0 : _a.getConfig) == null ? void 0 : _b.call(_a, "audio");
  if (!audioConfig) {
    return;
  }
  if (audioConfig.masterVolume !== void 0) {
    this.setVolume(audioConfig.masterVolume);
  }
  if (audioConfig.channels) {
    Object.entries(audioConfig.channels).forEach(([channelName, channelConfig]) => {
      if (channelConfig.volume !== void 0) {
        this.setChannelVolume(channelName, channelConfig.volume);
      }
      if (channelConfig.muted) {
        this.muteChannel(channelName);
      }
    });
  }
};
__publicField(AudioSystem, "$category", "audioSystem");
export {
  AudioSystem as A
};
