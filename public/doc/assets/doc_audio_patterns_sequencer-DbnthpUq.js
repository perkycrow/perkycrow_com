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
var _audioSystem, _patterns, _playing, _bpm, _Sequencer_instances, bindPatternToSounds_fn, playOscillatorForStep_fn;
import { d as doc, t as text, s as section, a as action, l as logger, c as code } from "./runtime-DOmi4lo7.js";
import { P as PerkyModule } from "./perky_module-DrWJO8l1.js";
import { P as Pattern } from "./pattern-BJtunO1W.js";
import "./registry-CF_H4IOw.js";
import "./observable_map-BPZFGUWq.js";
import "./observable_set-BOSKLaPv.js";
import "./utils-DVCexGPz.js";
import "./inflector-BxOpyWLP.js";
class Sequencer extends PerkyModule {
  constructor(options = {}) {
    super(options);
    __privateAdd(this, _Sequencer_instances);
    __privateAdd(this, _audioSystem, null);
    __privateAdd(this, _patterns, /* @__PURE__ */ new Map());
    __privateAdd(this, _playing, false);
    __privateAdd(this, _bpm, 120);
    __privateSet(this, _audioSystem, options.audioSystem);
    __privateSet(this, _bpm, options.bpm ?? 120);
  }
  get audioSystem() {
    return __privateGet(this, _audioSystem);
  }
  get playing() {
    return __privateGet(this, _playing);
  }
  get bpm() {
    return __privateGet(this, _bpm);
  }
  set bpm(value) {
    __privateSet(this, _bpm, Math.max(1, Math.min(999, value)));
    for (const pattern of __privateGet(this, _patterns).values()) {
      pattern.bpm = __privateGet(this, _bpm);
    }
  }
  get patterns() {
    return Array.from(__privateGet(this, _patterns).values());
  }
  get patternCount() {
    return __privateGet(this, _patterns).size;
  }
  onInstall(host) {
    this.delegateTo(host, [
      "addPattern",
      "removePattern",
      "getPattern",
      "hasPattern",
      "playPatterns",
      "stopPatterns",
      "setBpm"
    ]);
  }
  setBpm(value) {
    this.bpm = value;
    return this;
  }
  addPattern(name, patternOrString, options = {}) {
    let pattern;
    if (patternOrString instanceof Pattern) {
      pattern = patternOrString;
    } else {
      pattern = new Pattern({
        pattern: patternOrString,
        bpm: __privateGet(this, _bpm),
        ...options
      });
    }
    pattern.$id = name;
    if (options.sounds && __privateGet(this, _audioSystem)) {
      __privateMethod(this, _Sequencer_instances, bindPatternToSounds_fn).call(this, pattern, options.sounds);
    }
    if (options.onStep) {
      pattern.onStep(options.onStep);
    }
    __privateGet(this, _patterns).set(name, pattern);
    if (__privateGet(this, _playing)) {
      pattern.play();
    }
    this.emit("pattern:added", name, pattern);
    return pattern;
  }
  removePattern(name) {
    const pattern = __privateGet(this, _patterns).get(name);
    if (!pattern) {
      return false;
    }
    pattern.stop();
    __privateGet(this, _patterns).delete(name);
    this.emit("pattern:removed", name);
    return true;
  }
  getPattern(name) {
    return __privateGet(this, _patterns).get(name) || null;
  }
  hasPattern(name) {
    return __privateGet(this, _patterns).has(name);
  }
  playPatterns() {
    if (__privateGet(this, _playing)) {
      return this;
    }
    __privateSet(this, _playing, true);
    for (const pattern of __privateGet(this, _patterns).values()) {
      pattern.play();
    }
    this.emit("play");
    return this;
  }
  stopPatterns() {
    if (!__privateGet(this, _playing)) {
      return this;
    }
    __privateSet(this, _playing, false);
    for (const pattern of __privateGet(this, _patterns).values()) {
      pattern.stop();
    }
    this.emit("stop");
    return this;
  }
  resetAll() {
    for (const pattern of __privateGet(this, _patterns).values()) {
      pattern.reset();
    }
    this.emit("reset");
    return this;
  }
  update(delta) {
    if (!__privateGet(this, _playing)) {
      return;
    }
    for (const pattern of __privateGet(this, _patterns).values()) {
      pattern.update(delta);
    }
  }
  clear() {
    this.stopPatterns();
    for (const name of __privateGet(this, _patterns).keys()) {
      this.removePattern(name);
    }
    return this;
  }
  onDispose() {
    this.clear();
  }
}
_audioSystem = new WeakMap();
_patterns = new WeakMap();
_playing = new WeakMap();
_bpm = new WeakMap();
_Sequencer_instances = new WeakSet();
bindPatternToSounds_fn = function(pattern, sounds) {
  pattern.onStep((step, index) => {
    const soundId = sounds[step];
    if (soundId && __privateGet(this, _audioSystem).hasBuffer(soundId)) {
      __privateGet(this, _audioSystem).play(soundId);
    } else if (__privateGet(this, _audioSystem).hasBuffer(step)) {
      __privateGet(this, _audioSystem).play(step);
    } else {
      __privateMethod(this, _Sequencer_instances, playOscillatorForStep_fn).call(this, step, index);
    }
  });
};
playOscillatorForStep_fn = function(step) {
  const noteFrequencies = {
    C: 261.63,
    D: 293.66,
    E: 329.63,
    F: 349.23,
    G: 392,
    A: 440,
    B: 493.88,
    c: 523.25,
    d: 587.33,
    e: 659.25,
    f: 698.46,
    g: 783.99,
    a: 880,
    b: 987.77
  };
  const freq = noteFrequencies[step];
  if (freq && __privateGet(this, _audioSystem)) {
    __privateGet(this, _audioSystem).playOscillator({
      frequency: freq,
      duration: 0.1,
      volume: 0.3,
      type: "triangle"
    });
  }
};
__publicField(Sequencer, "$category", "sequencer");
const sequencer_doc = doc("Sequencer", () => {
  text(`
        Manages multiple [[Pattern]] instances and wires them to [[AudioSystem]].
        Note names like \`C\`, \`D\`, \`E\` auto-play as oscillators.
        Extends [[PerkyModule]].
    `);
  section("Basic Setup", () => {
    text("Create a sequencer and add named patterns. Patterns share the sequencer BPM by default.");
    action("Add patterns", () => {
      const seq = new Sequencer({ bpm: 140 });
      seq.addPattern("drums", "kick . snare . kick kick snare .");
      seq.addPattern("melody", "C . E G . . A .");
      logger.log("Pattern count:", seq.patternCount);
      logger.log("Has drums:", seq.hasPattern("drums"));
      logger.log("BPM:", seq.bpm);
    });
  });
  section("Playback", () => {
    text("Start and stop all patterns at once. Call `update(delta)` each frame while playing.");
    code("Play and stop", () => {
      const seq = new Sequencer({ bpm: 120 });
      seq.addPattern("beat", "kick . snare .");
      seq.playPatterns();
      seq.playing;
      seq.stopPatterns();
      seq.playing;
    });
  });
  section("BPM Control", () => {
    text("Changing the sequencer BPM updates all patterns.");
    action("Change BPM", () => {
      const seq = new Sequencer({ bpm: 120 });
      seq.addPattern("beat", "kick . snare .");
      logger.log("BPM:", seq.bpm);
      seq.setBpm(180);
      logger.log("BPM:", seq.bpm);
      const pattern = seq.getPattern("beat");
      logger.log("Pattern BPM:", pattern.bpm);
    });
  });
  section("Pattern Management", () => {
    text("Add, remove, and query patterns by name.");
    action("Manage patterns", () => {
      const seq = new Sequencer({ bpm: 120 });
      seq.addPattern("drums", "kick . snare .");
      seq.addPattern("bass", "C . . E . . G .");
      logger.log("Count:", seq.patternCount);
      seq.removePattern("bass");
      logger.log("Count:", seq.patternCount);
      logger.log("Has bass:", seq.hasPattern("bass"));
      seq.clear();
      logger.log("Count after clear:", seq.patternCount);
    });
  });
  section("Sound Binding", () => {
    text(`
            When adding a pattern with a \`sounds\` map, steps are automatically
            routed to [[AudioSystem]] buffers. Unknown steps that match note names
            play as oscillators.
        `);
    code("Bind sounds", () => {
      const seq = new Sequencer({ audioSystem, bpm: 140 });
      seq.addPattern("drums", "kick . snare . kick kick snare .", {
        sounds: { kick: "kickSample", snare: "snareSample" }
      });
      seq.addPattern("melody", "C . E G . . A .");
    });
  });
});
export {
  sequencer_doc as default
};
