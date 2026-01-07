var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _c, _s0, _s1, _s2, _seed, _Random_instances, next_fn, initSeed_fn;
import { d as doc, t as text, c as code, e as action } from "./runtime-CM36Pd9c.js";
import { l as logger } from "./logger-DMogC8ed.js";
const CHARACTERS = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const _Random = class _Random {
  constructor(seed = _Random.generateSeed()) {
    __privateAdd(this, _Random_instances);
    __privateAdd(this, _c);
    __privateAdd(this, _s0);
    __privateAdd(this, _s1);
    __privateAdd(this, _s2);
    __privateAdd(this, _seed);
    __privateSet(this, _seed, seed);
    __privateMethod(this, _Random_instances, initSeed_fn).call(this, seed);
  }
  setSeed(seed) {
    __privateSet(this, _seed, seed);
    __privateMethod(this, _Random_instances, initSeed_fn).call(this, seed);
    return this;
  }
  getSeed() {
    return __privateGet(this, _seed);
  }
  setState(state) {
    __privateSet(this, _c, state.c);
    __privateSet(this, _s0, state.s0);
    __privateSet(this, _s1, state.s1);
    __privateSet(this, _s2, state.s2);
    return this;
  }
  getState() {
    return {
      c: __privateGet(this, _c),
      s0: __privateGet(this, _s0),
      s1: __privateGet(this, _s1),
      s2: __privateGet(this, _s2)
    };
  }
  fork() {
    const forked = new _Random(__privateGet(this, _seed));
    forked.setState(this.getState());
    return forked;
  }
  between(min, max) {
    return __privateMethod(this, _Random_instances, next_fn).call(this) * (max - min) + min;
  }
  intBetween(min, max) {
    return Math.floor(this.between(min, max));
  }
  pick(array) {
    return array[this.intBetween(0, array.length)];
  }
  oneChanceIn(chances) {
    return __privateMethod(this, _Random_instances, next_fn).call(this) < 1 / chances;
  }
  coinToss() {
    return __privateMethod(this, _Random_instances, next_fn).call(this) < 0.5;
  }
  weightedChoice(choices) {
    if (!choices || choices.length === 0) {
      return void 0;
    }
    const totalWeight = choices.reduce((total, choice) => total + choice.weight, 0);
    let randomValue = __privateMethod(this, _Random_instances, next_fn).call(this) * totalWeight;
    for (const choice of choices) {
      randomValue -= choice.weight;
      if (randomValue <= 0) {
        return choice.value;
      }
    }
    return choices[choices.length - 1].value;
  }
  static generateSeed(length = 10) {
    let result = "";
    for (let i = 0; i < length; i++) {
      result += CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS.length));
    }
    return result;
  }
};
_c = new WeakMap();
_s0 = new WeakMap();
_s1 = new WeakMap();
_s2 = new WeakMap();
_seed = new WeakMap();
_Random_instances = new WeakSet();
next_fn = function() {
  const t = 2091639 * __privateGet(this, _s0) + __privateGet(this, _c) * 23283064365386963e-26;
  __privateSet(this, _c, t | 0);
  __privateSet(this, _s0, __privateGet(this, _s1));
  __privateSet(this, _s1, __privateGet(this, _s2));
  __privateSet(this, _s2, t - __privateGet(this, _c));
  return __privateGet(this, _s2);
};
initSeed_fn = function(seed) {
  const mash = createMash();
  __privateSet(this, _c, 1);
  __privateSet(this, _s0, 0.8633289230056107 - mash(seed));
  if (__privateGet(this, _s0) < 0) {
    __privateSet(this, _s0, __privateGet(this, _s0) + 1);
  }
  __privateSet(this, _s1, 0.15019597788341343 - mash(seed));
  if (__privateGet(this, _s1) < 0) {
    __privateSet(this, _s1, __privateGet(this, _s1) + 1);
  }
  __privateSet(this, _s2, 0.9176952994894236 - mash(seed));
  if (__privateGet(this, _s2) < 0) {
    __privateSet(this, _s2, __privateGet(this, _s2) + 1);
  }
};
let Random = _Random;
function createMash() {
  let n = 3941471299;
  return function(string) {
    string = String(string);
    for (let i = 0; i < string.length; i++) {
      n += string.charCodeAt(i);
      let h = 0.02519603282416938 * n;
      n = h >>> 0;
      h = (h - n) * n;
      n = h >>> 0;
      n += (h - n) * 4294967296;
    }
    return (n >>> 0) * 23283064365386963e-26;
  };
}
const random_doc = doc("Random", { context: "simple" }, () => {
  text(`
        Deterministic (seedable) random number generator.
        Uses the Alea algorithm for reproducible results.
    `);
  code("Creation", () => {
    new Random();
    new Random("my-seed");
  });
  action("Random numbers", () => {
    const rng = new Random();
    logger.log("between(0, 100):", rng.between(0, 100));
    logger.log("between(0, 100):", rng.between(0, 100));
    logger.log("intBetween(1, 10):", rng.intBetween(1, 10));
  });
  action("Reproducibility", () => {
    const rng1 = new Random("test-seed");
    const rng2 = new Random("test-seed");
    logger.log("rng1:", rng1.between(0, 100));
    logger.log("rng2:", rng2.between(0, 100));
    logger.log("Same seed = same values");
  });
  text("Utility methods for games.");
  action("coinToss", () => {
    const rng = new Random();
    for (let i = 0; i < 5; i++) {
      logger.log("coinToss:", rng.coinToss());
    }
  });
  action("oneChanceIn", () => {
    const rng = new Random();
    for (let i = 0; i < 5; i++) {
      logger.log("oneChanceIn(4):", rng.oneChanceIn(4));
    }
  });
  action("pick", () => {
    const rng = new Random();
    const items = ["sword", "shield", "potion", "scroll"];
    for (let i = 0; i < 5; i++) {
      logger.log("pick:", rng.pick(items));
    }
  });
  action("weightedChoice", () => {
    const rng = new Random();
    const loot = [
      { value: "common", weight: 70 },
      { value: "rare", weight: 25 },
      { value: "legendary", weight: 5 }
    ];
    for (let i = 0; i < 5; i++) {
      logger.log("loot:", rng.weightedChoice(loot));
    }
  });
  text("State management for save/restore.");
  action("fork", () => {
    const rng = new Random("base");
    rng.between(0, 100);
    rng.between(0, 100);
    const forked = rng.fork();
    logger.log("original:", rng.between(0, 100));
    logger.log("forked:", forked.between(0, 100));
    logger.log("Both continue independently");
  });
  action("getState / setState", () => {
    const rng = new Random("save-test");
    logger.log("val 1:", rng.between(0, 100));
    const state = rng.getState();
    logger.log("val 2:", rng.between(0, 100));
    logger.log("val 3:", rng.between(0, 100));
    rng.setState(state);
    logger.log("after restore:", rng.between(0, 100));
  });
});
export {
  random_doc as default
};
