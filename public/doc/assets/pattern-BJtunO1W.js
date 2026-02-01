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
var __privateWrapper = (obj, member, setter, getter) => ({
  set _(value) {
    __privateSet(obj, member, value, setter);
  },
  get _() {
    return __privateGet(obj, member, getter);
  }
});
var _steps, _bpm, _playing, _currentStep, _stepDuration, _elapsed, _loop, _swing, _Pattern_instances, updateStepDuration_fn, triggerStep_fn;
import { P as PerkyModule } from "./perky_module-DrWJO8l1.js";
const _Pattern = class _Pattern extends PerkyModule {
  constructor(options = {}) {
    super(options);
    __privateAdd(this, _Pattern_instances);
    __privateAdd(this, _steps, []);
    __privateAdd(this, _bpm, 120);
    __privateAdd(this, _playing, false);
    __privateAdd(this, _currentStep, 0);
    __privateAdd(this, _stepDuration, 0);
    __privateAdd(this, _elapsed, 0);
    __privateAdd(this, _loop, true);
    __privateAdd(this, _swing, 0);
    __privateSet(this, _bpm, options.bpm ?? 120);
    __privateSet(this, _loop, options.loop ?? true);
    __privateSet(this, _swing, options.swing ?? 0);
    if (options.steps) {
      __privateSet(this, _steps, options.steps);
    } else if (options.pattern) {
      __privateSet(this, _steps, parsePattern(options.pattern));
    }
    __privateMethod(this, _Pattern_instances, updateStepDuration_fn).call(this);
  }
  get steps() {
    return __privateGet(this, _steps);
  }
  get stepCount() {
    return __privateGet(this, _steps).length;
  }
  get bpm() {
    return __privateGet(this, _bpm);
  }
  set bpm(value) {
    __privateSet(this, _bpm, Math.max(1, Math.min(999, value)));
    __privateMethod(this, _Pattern_instances, updateStepDuration_fn).call(this);
  }
  get playing() {
    return __privateGet(this, _playing);
  }
  get currentStep() {
    return __privateGet(this, _currentStep);
  }
  get loop() {
    return __privateGet(this, _loop);
  }
  set loop(value) {
    __privateSet(this, _loop, Boolean(value));
  }
  get swing() {
    return __privateGet(this, _swing);
  }
  set swing(value) {
    __privateSet(this, _swing, Math.max(0, Math.min(1, value)));
  }
  get progress() {
    if (__privateGet(this, _steps).length === 0) {
      return 0;
    }
    return __privateGet(this, _currentStep) / __privateGet(this, _steps).length;
  }
  setPattern(pattern) {
    __privateSet(this, _steps, typeof pattern === "string" ? parsePattern(pattern) : pattern);
    this.reset();
    return this;
  }
  setSteps(steps) {
    __privateSet(this, _steps, steps);
    this.reset();
    return this;
  }
  setBpm(value) {
    this.bpm = value;
    return this;
  }
  setSwing(value) {
    this.swing = value;
    return this;
  }
  play() {
    if (__privateGet(this, _playing)) {
      return this;
    }
    __privateSet(this, _playing, true);
    this.emit("play");
    return this;
  }
  stop() {
    if (!__privateGet(this, _playing)) {
      return this;
    }
    __privateSet(this, _playing, false);
    this.emit("stop");
    return this;
  }
  reset() {
    __privateSet(this, _currentStep, 0);
    __privateSet(this, _elapsed, 0);
    this.emit("reset");
    return this;
  }
  update(delta) {
    if (!__privateGet(this, _playing) || __privateGet(this, _steps).length === 0) {
      return;
    }
    __privateSet(this, _elapsed, __privateGet(this, _elapsed) + delta);
    const swingOffset = __privateGet(this, _currentStep) % 2 === 1 ? __privateGet(this, _swing) * __privateGet(this, _stepDuration) * 0.5 : 0;
    const targetDuration = __privateGet(this, _stepDuration) + swingOffset;
    while (__privateGet(this, _elapsed) >= targetDuration) {
      __privateSet(this, _elapsed, __privateGet(this, _elapsed) - targetDuration);
      const step = __privateGet(this, _steps)[__privateGet(this, _currentStep)];
      __privateMethod(this, _Pattern_instances, triggerStep_fn).call(this, step, __privateGet(this, _currentStep));
      __privateWrapper(this, _currentStep)._++;
      if (__privateGet(this, _currentStep) >= __privateGet(this, _steps).length) {
        if (__privateGet(this, _loop)) {
          __privateSet(this, _currentStep, 0);
          this.emit("loop");
        } else {
          __privateSet(this, _playing, false);
          this.emit("complete");
          return;
        }
      }
    }
  }
  onStep(callback) {
    this.on("step", callback);
    return this;
  }
  map(fn) {
    const newSteps = __privateGet(this, _steps).map((step, i) => fn(step, i));
    return new _Pattern({
      steps: newSteps,
      bpm: __privateGet(this, _bpm),
      loop: __privateGet(this, _loop),
      swing: __privateGet(this, _swing)
    });
  }
  reverse() {
    return new _Pattern({
      steps: [...__privateGet(this, _steps)].reverse(),
      bpm: __privateGet(this, _bpm),
      loop: __privateGet(this, _loop),
      swing: __privateGet(this, _swing)
    });
  }
  fast(factor) {
    return new _Pattern({
      steps: __privateGet(this, _steps),
      bpm: __privateGet(this, _bpm) * factor,
      loop: __privateGet(this, _loop),
      swing: __privateGet(this, _swing)
    });
  }
  slow(factor) {
    return this.fast(1 / factor);
  }
  every(n, fn) {
    let count = 0;
    const newPattern = new _Pattern({
      steps: __privateGet(this, _steps),
      bpm: __privateGet(this, _bpm),
      loop: __privateGet(this, _loop),
      swing: __privateGet(this, _swing)
    });
    newPattern.on("loop", () => {
      count++;
      if (count % n === 0) {
        fn(newPattern);
      }
    });
    return newPattern;
  }
};
_steps = new WeakMap();
_bpm = new WeakMap();
_playing = new WeakMap();
_currentStep = new WeakMap();
_stepDuration = new WeakMap();
_elapsed = new WeakMap();
_loop = new WeakMap();
_swing = new WeakMap();
_Pattern_instances = new WeakSet();
updateStepDuration_fn = function() {
  __privateSet(this, _stepDuration, 60 / __privateGet(this, _bpm) / 4);
};
triggerStep_fn = function(step, index) {
  if (step === null || step === "_" || step === ".") {
    return;
  }
  if (Array.isArray(step)) {
    for (const subStep of step) {
      __privateMethod(this, _Pattern_instances, triggerStep_fn).call(this, subStep, index);
    }
    return;
  }
  this.emit("step", step, index);
  this.emit(`step:${step}`, index);
};
__publicField(_Pattern, "$category", "pattern");
__publicField(_Pattern, "$lifecycle", false);
let Pattern = _Pattern;
function parsePattern(str) {
  if (!str || typeof str !== "string") {
    return [];
  }
  const steps = [];
  let i = 0;
  while (i < str.length) {
    const char = str[i];
    if (char === " ") {
      i++;
      continue;
    }
    if (char === "[") {
      const { group, end } = parseGroup(str, i);
      steps.push(group);
      i = end;
      continue;
    }
    if (char === "." || char === "_" || char === "~") {
      steps.push(null);
      i++;
      continue;
    }
    let token = "";
    while (i < str.length && !isDelimiter(str[i])) {
      token += str[i];
      i++;
    }
    if (token) {
      steps.push(token);
    }
  }
  return steps;
}
function parseGroup(str, start) {
  const group = [];
  let i = start + 1;
  while (i < str.length && str[i] !== "]") {
    const char = str[i];
    if (char === " ") {
      i++;
      continue;
    }
    if (char === "[") {
      const { group: nested, end } = parseGroup(str, i);
      group.push(nested);
      i = end;
      continue;
    }
    if (char === "." || char === "_" || char === "~") {
      group.push(null);
      i++;
      continue;
    }
    let token = "";
    while (i < str.length && !isDelimiter(str[i])) {
      token += str[i];
      i++;
    }
    if (token) {
      group.push(token);
    }
  }
  return { group, end: i + 1 };
}
function isDelimiter(char) {
  return char === " " || char === "[" || char === "]";
}
export {
  Pattern as P,
  parsePattern as p
};
