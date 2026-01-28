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
var _listenersFor, _externalListeners, _pluralRules, _singularRules, _uncountables, _irregularPlurals, _irregularSingles, _Inflector_instances, sanitizeWord_fn, replaceWord_fn, checkWord_fn, loadIrregulars_fn, loadPlurals_fn, loadSingulars_fn, loadUncountables_fn, _history, _maxHistory, _consoleOutput, _Logger_instances, record_fn, trimHistory_fn, emit_fn;
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
class Notifier {
  constructor() {
    __privateAdd(this, _listenersFor, {});
    __privateAdd(this, _externalListeners, []);
  }
  getListenersFor(name) {
    return __privateGet(this, _listenersFor)[name];
  }
  on(name, listener) {
    if (typeof listener !== "function") {
      throw new TypeError("Listener must be a function");
    }
    if (!__privateGet(this, _listenersFor)[name]) {
      __privateGet(this, _listenersFor)[name] = [];
    }
    __privateGet(this, _listenersFor)[name].push(listener);
    return listener;
  }
  once(name, listener) {
    if (typeof listener !== "function") {
      throw new TypeError("Listener must be a function");
    }
    const onceWrapper = (...args) => {
      listener(...args);
      this.off(name, onceWrapper);
    };
    return this.on(name, onceWrapper);
  }
  off(name, listener) {
    const listeners = this.getListenersFor(name);
    if (typeof listener === "undefined") {
      return this.removeListenersFor(name);
    } else if (Array.isArray(listeners)) {
      const index = listeners.indexOf(listener);
      if (index !== -1) {
        listeners.splice(index, 1);
        return true;
      }
    }
    return false;
  }
  emit(name, ...args) {
    const listeners = this.getListenersFor(name);
    if (!listeners) {
      return;
    }
    const listenersCopy = [...listeners];
    for (const listener of listenersCopy) {
      listener.call(this, ...args);
    }
  }
  emitter(name) {
    return (...args) => this.emit(name, ...args);
  }
  listenTo(target, eventName, callback) {
    target.on(eventName, callback);
    __privateGet(this, _externalListeners).push({ target, eventName, callback });
  }
  listenToOnce(target, eventName, callback) {
    const onceWrapper = (...args) => {
      callback(...args);
      target.off(eventName, onceWrapper);
      const index = __privateGet(this, _externalListeners).findIndex(
        (l) => l.target === target && l.eventName === eventName && l.callback === onceWrapper
      );
      if (index !== -1) {
        __privateGet(this, _externalListeners).splice(index, 1);
      }
    };
    target.on(eventName, onceWrapper);
    __privateGet(this, _externalListeners).push({ target, eventName, callback: onceWrapper });
  }
  cleanExternalListeners() {
    __privateGet(this, _externalListeners).forEach(({ target, eventName, callback }) => {
      target.off(eventName, callback);
    });
    __privateSet(this, _externalListeners, []);
  }
  removeListeners() {
    Object.keys(__privateGet(this, _listenersFor)).forEach((name) => this.removeListenersFor(name));
  }
  removeListenersFor(name) {
    const listeners = this.getListenersFor(name);
    if (listeners) {
      listeners.length = 0;
      delete __privateGet(this, _listenersFor)[name];
      return true;
    }
    return false;
  }
  delegateEvents(target, events, namespace) {
    if (!target || !Array.isArray(events) && typeof events !== "object") {
      return;
    }
    const eventArray = Array.isArray(events) ? events : Object.keys(events);
    eventArray.forEach((event) => {
      this.listenTo(target, event, (...args) => {
        const prefixedEvent = namespace ? `${namespace}:${event}` : event;
        this.emit(prefixedEvent, ...args);
      });
    });
  }
}
_listenersFor = new WeakMap();
_externalListeners = new WeakMap();
__publicField(Notifier, "notifierMethods", [
  "getListenersFor",
  "on",
  "once",
  "off",
  "emit",
  "emitter",
  "listenTo",
  "listenToOnce",
  "cleanExternalListeners",
  "removeListeners",
  "removeListenersFor",
  "delegateEvents"
]);
class Inflector {
  constructor() {
    __privateAdd(this, _Inflector_instances);
    __privateAdd(this, _pluralRules, []);
    __privateAdd(this, _singularRules, []);
    __privateAdd(this, _uncountables, {});
    __privateAdd(this, _irregularPlurals, {});
    __privateAdd(this, _irregularSingles, {});
    __privateMethod(this, _Inflector_instances, loadIrregulars_fn).call(this);
    __privateMethod(this, _Inflector_instances, loadPlurals_fn).call(this);
    __privateMethod(this, _Inflector_instances, loadSingulars_fn).call(this);
    __privateMethod(this, _Inflector_instances, loadUncountables_fn).call(this);
  }
  plural(word) {
    return __privateMethod(this, _Inflector_instances, replaceWord_fn).call(this, __privateGet(this, _irregularSingles), __privateGet(this, _irregularPlurals), __privateGet(this, _pluralRules))(word);
  }
  singular(word) {
    return __privateMethod(this, _Inflector_instances, replaceWord_fn).call(this, __privateGet(this, _irregularPlurals), __privateGet(this, _irregularSingles), __privateGet(this, _singularRules))(word);
  }
  isPlural(word) {
    return __privateMethod(this, _Inflector_instances, checkWord_fn).call(this, __privateGet(this, _irregularSingles), __privateGet(this, _irregularPlurals), __privateGet(this, _pluralRules))(word);
  }
  isSingular(word) {
    return __privateMethod(this, _Inflector_instances, checkWord_fn).call(this, __privateGet(this, _irregularPlurals), __privateGet(this, _irregularSingles), __privateGet(this, _singularRules))(word);
  }
  pluralize(word, count, inclusive) {
    const pluralized = count === 1 ? this.singular(word) : this.plural(word);
    return (inclusive ? count + " " : "") + pluralized;
  }
  toCamelCase(string) {
    return string.replace(/[-_\s]([a-z])/g, (match, letter) => letter.toUpperCase()).replace(/^[A-Z]/, (letter) => letter.toLowerCase());
  }
  toPascalCase(string) {
    return this.toCamelCase(string).replace(/^[a-z]/, (letter) => letter.toUpperCase());
  }
  toSnakeCase(string) {
    return string.replace(/[-\s]/g, "_").replace(/([A-Z])([A-Z][a-z])/g, "$1_$2").replace(/([a-z])([A-Z])/g, "$1_$2").replace(/([a-z])(\d+[A-Z])$/g, "$1_$2").replace(/(\d)([A-Z][a-z])/g, "$1_$2").toLowerCase().replace(/^_/, "");
  }
  toKebabCase(string) {
    return string.replace(/[_\s]/g, "-").replace(/([A-Z])([A-Z][a-z])/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2").replace(/([a-z])(\d+[A-Z])$/g, "$1-$2").replace(/(\d)([A-Z][a-z])/g, "$1-$2").toLowerCase().replace(/^-/, "");
  }
  toHumanCase(string) {
    return string.replace(/[-_]/g, " ").replace(/([A-Z])([A-Z][a-z])/g, "$1 $2").replace(/([a-z])([A-Z])/g, "$1 $2").replace(/([a-z])(\d+[A-Z])$/g, "$1 $2").replace(/(\d)([A-Z][a-z])/g, "$1 $2").replace(/^\s+/, "").replace(/\s+/g, " ");
  }
  addPluralRule(rule, replacement) {
    __privateGet(this, _pluralRules).push([sanitizeRule(rule), replacement]);
  }
  addSingularRule(rule, replacement) {
    __privateGet(this, _singularRules).push([sanitizeRule(rule), replacement]);
  }
  addUncountableRule(word) {
    if (typeof word === "string") {
      __privateGet(this, _uncountables)[word.toLowerCase()] = true;
      return;
    }
    this.addPluralRule(word, "$0");
    this.addSingularRule(word, "$0");
  }
  addIrregularRule(single, pluralForm) {
    const s = single.toLowerCase();
    const p = pluralForm.toLowerCase();
    __privateGet(this, _irregularSingles)[s] = p;
    __privateGet(this, _irregularPlurals)[p] = s;
  }
}
_pluralRules = new WeakMap();
_singularRules = new WeakMap();
_uncountables = new WeakMap();
_irregularPlurals = new WeakMap();
_irregularSingles = new WeakMap();
_Inflector_instances = new WeakSet();
sanitizeWord_fn = function(token, word, rules) {
  if (!token.length || Object.hasOwn(__privateGet(this, _uncountables), token)) {
    return word;
  }
  for (let i = rules.length - 1; i >= 0; i--) {
    const rule = rules[i];
    if (rule[0].test(word)) {
      return replace(word, rule);
    }
  }
  return word;
};
replaceWord_fn = function(replaceMap, keepMap, rules) {
  return (word) => {
    const token = word.toLowerCase();
    if (Object.hasOwn(keepMap, token)) {
      return restoreCase(word, token);
    }
    if (Object.hasOwn(replaceMap, token)) {
      return restoreCase(word, replaceMap[token]);
    }
    return __privateMethod(this, _Inflector_instances, sanitizeWord_fn).call(this, token, word, rules);
  };
};
checkWord_fn = function(replaceMap, keepMap, rules) {
  return (word) => {
    const token = word.toLowerCase();
    if (Object.hasOwn(keepMap, token)) {
      return true;
    }
    if (Object.hasOwn(replaceMap, token)) {
      return false;
    }
    return __privateMethod(this, _Inflector_instances, sanitizeWord_fn).call(this, token, token, rules) === token;
  };
};
loadIrregulars_fn = function() {
  const irregulars = [
    ["I", "we"],
    ["me", "us"],
    ["he", "they"],
    ["she", "they"],
    ["them", "them"],
    ["myself", "ourselves"],
    ["yourself", "yourselves"],
    ["itself", "themselves"],
    ["herself", "themselves"],
    ["himself", "themselves"],
    ["themself", "themselves"],
    ["is", "are"],
    ["was", "were"],
    ["has", "have"],
    ["this", "these"],
    ["that", "those"],
    ["my", "our"],
    ["its", "their"],
    ["his", "their"],
    ["her", "their"],
    ["echo", "echoes"],
    ["dingo", "dingoes"],
    ["volcano", "volcanoes"],
    ["tornado", "tornadoes"],
    ["torpedo", "torpedoes"],
    ["genus", "genera"],
    ["viscus", "viscera"],
    ["stigma", "stigmata"],
    ["stoma", "stomata"],
    ["dogma", "dogmata"],
    ["lemma", "lemmata"],
    ["schema", "schemata"],
    ["anathema", "anathemata"],
    ["ox", "oxen"],
    ["axe", "axes"],
    ["die", "dice"],
    ["yes", "yeses"],
    ["foot", "feet"],
    ["eave", "eaves"],
    ["goose", "geese"],
    ["tooth", "teeth"],
    ["quiz", "quizzes"],
    ["human", "humans"],
    ["proof", "proofs"],
    ["carve", "carves"],
    ["valve", "valves"],
    ["looey", "looies"],
    ["thief", "thieves"],
    ["groove", "grooves"],
    ["pickaxe", "pickaxes"],
    ["passerby", "passersby"],
    ["canvas", "canvases"]
  ];
  for (const [single, pluralForm] of irregulars) {
    this.addIrregularRule(single, pluralForm);
  }
};
loadPlurals_fn = function() {
  const plurals = [
    [/s?$/i, "s"],
    [/[^\x20-\x7F]$/i, "$0"],
    [/([^aeiou]ese)$/i, "$1"],
    [/(ax|test)is$/i, "$1es"],
    [/(alias|[^aou]us|t[lm]as|gas|ris)$/i, "$1es"],
    [/(e[mn]u)s?$/i, "$1s"],
    [/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i, "$1"],
    [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, "$1i"],
    [/(alumn|alg|vertebr)(?:a|ae)$/i, "$1ae"],
    [/(seraph|cherub)(?:im)?$/i, "$1im"],
    [/(her|at|gr)o$/i, "$1oes"],
    [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i, "$1a"],
    [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i, "$1a"],
    [/sis$/i, "ses"],
    [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, "$1$2ves"],
    [/([^aeiouy]|qu)y$/i, "$1ies"],
    [/([^ch][ieo][ln])ey$/i, "$1ies"],
    [/(x|ch|ss|sh|zz)$/i, "$1es"],
    [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, "$1ices"],
    [/\b((?:tit)?m|l)(?:ice|ouse)$/i, "$1ice"],
    [/(pe)(?:rson|ople)$/i, "$1ople"],
    [/(child)(?:ren)?$/i, "$1ren"],
    [/eaux$/i, "$0"],
    [/m[ae]n$/i, "men"],
    ["thou", "you"]
  ];
  for (const [rule, replacement] of plurals) {
    this.addPluralRule(rule, replacement);
  }
};
loadSingulars_fn = function() {
  const singulars = [
    [/s$/i, ""],
    [/(ss)$/i, "$1"],
    [/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i, "$1fe"],
    [/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, "$1f"],
    [/ies$/i, "y"],
    [/(dg|ss|ois|lk|ok|wn|mb|th|ch|ec|oal|is|ck|ix|sser|ts|wb)ies$/i, "$1ie"],
    [/\b(l|(?:neck|cross|hog|aun)?t|coll|faer|food|gen|goon|group|hipp|junk|vegg|(?:pork)?p|charl|calor|cut)ies$/i, "$1ie"],
    [/\b(mon|smil)ies$/i, "$1ey"],
    [/\b((?:tit)?m|l)ice$/i, "$1ouse"],
    [/(seraph|cherub)im$/i, "$1"],
    [/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i, "$1"],
    [/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i, "$1sis"],
    [/(movie|twelve|abuse|e[mn]u)s$/i, "$1"],
    [/(test)(?:is|es)$/i, "$1is"],
    [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, "$1us"],
    [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i, "$1um"],
    [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i, "$1on"],
    [/(alumn|alg|vertebr)ae$/i, "$1a"],
    [/(cod|mur|sil|vert|ind)ices$/i, "$1ex"],
    [/(matr|append)ices$/i, "$1ix"],
    [/(pe)(rson|ople)$/i, "$1rson"],
    [/(child)ren$/i, "$1"],
    [/(eau)x?$/i, "$1"],
    [/men$/i, "man"]
  ];
  for (const [rule, replacement] of singulars) {
    this.addSingularRule(rule, replacement);
  }
};
loadUncountables_fn = function() {
  const uncountables = [
    "adulthood",
    "advice",
    "agenda",
    "aid",
    "aircraft",
    "alcohol",
    "ammo",
    "analytics",
    "anime",
    "athletics",
    "audio",
    "bison",
    "blood",
    "bream",
    "buffalo",
    "butter",
    "carp",
    "cash",
    "chassis",
    "chess",
    "clothing",
    "cod",
    "commerce",
    "cooperation",
    "corps",
    "debris",
    "diabetes",
    "digestion",
    "elk",
    "energy",
    "equipment",
    "excretion",
    "expertise",
    "firmware",
    "flounder",
    "fun",
    "gallows",
    "garbage",
    "graffiti",
    "hardware",
    "headquarters",
    "health",
    "herpes",
    "highjinks",
    "homework",
    "housework",
    "information",
    "jeans",
    "justice",
    "kudos",
    "labour",
    "literature",
    "machinery",
    "mackerel",
    "mail",
    "media",
    "mews",
    "moose",
    "music",
    "mud",
    "manga",
    "news",
    "only",
    "personnel",
    "pike",
    "plankton",
    "pliers",
    "police",
    "pollution",
    "premises",
    "rain",
    "research",
    "rice",
    "salmon",
    "scissors",
    "series",
    "sewage",
    "shambles",
    "shrimp",
    "software",
    "staff",
    "swine",
    "tennis",
    "traffic",
    "transportation",
    "trout",
    "tuna",
    "wealth",
    "welfare",
    "whiting",
    "wildebeest",
    "wildlife",
    "you",
    /pok[eé]mon$/i,
    /[^aeiou]ese$/i,
    /deer$/i,
    /fish$/i,
    /measles$/i,
    /o[iu]s$/i,
    /pox$/i,
    /sheep$/i
  ];
  for (const word of uncountables) {
    this.addUncountableRule(word);
  }
};
function sanitizeRule(rule) {
  if (typeof rule === "string") {
    return new RegExp("^" + rule + "$", "i");
  }
  return rule;
}
function restoreCase(word, token) {
  if (word === token) {
    return token;
  }
  if (word === word.toLowerCase()) {
    return token.toLowerCase();
  }
  if (word === word.toUpperCase()) {
    return token.toUpperCase();
  }
  if (word[0] === word[0].toUpperCase()) {
    return token.charAt(0).toUpperCase() + token.slice(1).toLowerCase();
  }
  return token.toLowerCase();
}
function interpolate(str, args) {
  return str.replace(/\$(\d{1,2})/g, (_, index) => args[index] ?? "");
}
function replace(word, rule) {
  return word.replace(rule[0], function(match) {
    const result = interpolate(rule[1], arguments);
    if (match === "") {
      return restoreCase(word[arguments[arguments.length - 2] - 1], result);
    }
    return restoreCase(match, result);
  });
}
const inflector = new Inflector();
function toCamelCase(string) {
  return inflector.toCamelCase(string);
}
function toSnakeCase(string) {
  return inflector.toSnakeCase(string);
}
function toKebabCase(string) {
  return inflector.toKebabCase(string);
}
const idCounter = {};
function uniqueId(collection, prefix) {
  if (!prefix) {
    prefix = collection;
    collection = "default";
  }
  if (!idCounter[collection]) {
    idCounter[collection] = {};
  }
  if (!idCounter[collection][prefix]) {
    idCounter[collection][prefix] = 0;
  }
  const current = idCounter[collection][prefix];
  idCounter[collection][prefix]++;
  return current === 0 ? prefix : `${prefix}_${current}`;
}
function pluralize(word, count, inclusive) {
  return inflector.pluralize(word, count, inclusive);
}
function setDefaults(data, defaults) {
  return deepMerge(defaults, data);
}
function getNestedValue(obj, path) {
  if (!path) {
    return obj;
  }
  const parts = path.split(".");
  let current = obj;
  for (const part of parts) {
    if (current === void 0 || current === null) {
      return void 0;
    }
    current = current[part];
  }
  return current;
}
function setNestedValue(obj, path, value) {
  const parts = path.split(".");
  let current = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    const part = parts[i];
    if (!current[part]) {
      current[part] = {};
    }
    current = current[part];
  }
  current[parts[parts.length - 1]] = value;
  return obj;
}
function deepMerge(target, source) {
  return deepMergeInternal(target, source, /* @__PURE__ */ new WeakSet());
}
function deepMergeInternal(target, source, seen) {
  if (!source) {
    return target;
  }
  if (typeof source === "object" && source !== null) {
    if (seen.has(source)) {
      return source;
    }
    seen.add(source);
  }
  const sourceIsArray = Array.isArray(source);
  const targetIsArray = Array.isArray(target);
  if (sourceIsArray !== targetIsArray) {
    return cloneIfNeeded(source, seen);
  }
  if (sourceIsArray) {
    return mergeArrays(target, source, seen);
  }
  return mergeObject(target, source, seen);
}
function isNonNullObject(value) {
  return Boolean(value) && typeof value === "object";
}
function isSpecial(value) {
  const stringValue = Object.prototype.toString.call(value);
  return stringValue === "[object RegExp]" || stringValue === "[object Date]";
}
function isMergeableObject(value) {
  return isNonNullObject(value) && !isSpecial(value);
}
function emptyTarget(value) {
  return Array.isArray(value) ? [] : {};
}
function cloneIfNeeded(value, seen) {
  return isMergeableObject(value) ? deepMergeInternal(emptyTarget(value), value, seen) : value;
}
function mergeArrays(target, source, seen) {
  return target.concat(source).map((element) => cloneIfNeeded(element, seen));
}
function getKeys(target) {
  const symbols = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter((symbol) => Object.propertyIsEnumerable.call(target, symbol)) : [];
  return Object.keys(target).concat(symbols);
}
function mergeObject(target, source, seen) {
  const destination = {};
  if (isMergeableObject(target)) {
    getKeys(target).forEach((key) => {
      destination[key] = cloneIfNeeded(target[key], seen);
    });
  }
  getKeys(source).forEach((key) => {
    if (key in target && isMergeableObject(source[key])) {
      destination[key] = deepMergeInternal(target[key], source[key], seen);
    } else {
      destination[key] = cloneIfNeeded(source[key], seen);
    }
  });
  return destination;
}
function formatNumber(n) {
  if (typeof n !== "number") {
    return String(n);
  }
  return Number.isInteger(n) ? String(n) : n.toFixed(2);
}
function formatBytes(bytes) {
  if (bytes === 0) {
    return "0 B";
  }
  const units = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  const value = bytes / Math.pow(1024, i);
  return `${value.toFixed(i > 1 ? 2 : 0)} ${units[i]}`;
}
function delegateProperties(receiver, source, names) {
  if (Array.isArray(names)) {
    names.forEach((name) => delegateProperty(receiver, source, name, name));
  } else if (typeof names === "object") {
    Object.entries(names).forEach(([sourceName, receiverName]) => {
      delegateProperty(receiver, source, sourceName, receiverName);
    });
  }
}
function delegateProperty(receiver, source, sourceName, receiverName) {
  const descriptor = Object.getOwnPropertyDescriptor(source, sourceName);
  if (descriptor && (descriptor.get || descriptor.set)) {
    Object.defineProperty(receiver, receiverName, {
      get: descriptor.get ? descriptor.get.bind(source) : void 0,
      set: descriptor.set ? descriptor.set.bind(source) : void 0,
      enumerable: true,
      configurable: true
    });
  } else if (typeof source[sourceName] === "function") {
    receiver[receiverName] = source[sourceName].bind(source);
  } else {
    Object.defineProperty(receiver, receiverName, {
      get: () => source[sourceName],
      set: (value) => {
        source[sourceName] = value;
      },
      enumerable: true,
      configurable: true
    });
  }
}
const CONSOLE_METHODS = {
  info: "info",
  warn: "warn",
  error: "error",
  notice: "log",
  success: "log"
};
class Logger extends Notifier {
  constructor() {
    super(...arguments);
    __privateAdd(this, _Logger_instances);
    __privateAdd(this, _history, []);
    __privateAdd(this, _maxHistory, 100);
    __privateAdd(this, _consoleOutput, true);
  }
  get history() {
    return __privateGet(this, _history);
  }
  get maxHistory() {
    return __privateGet(this, _maxHistory);
  }
  set maxHistory(value) {
    __privateSet(this, _maxHistory, value);
    __privateMethod(this, _Logger_instances, trimHistory_fn).call(this);
  }
  get consoleOutput() {
    return __privateGet(this, _consoleOutput);
  }
  set consoleOutput(value) {
    __privateSet(this, _consoleOutput, value);
  }
  log(...items) {
    __privateMethod(this, _Logger_instances, emit_fn).call(this, "notice", ...items);
  }
  info(...items) {
    __privateMethod(this, _Logger_instances, emit_fn).call(this, "info", ...items);
  }
  notice(...items) {
    __privateMethod(this, _Logger_instances, emit_fn).call(this, "notice", ...items);
  }
  warn(...items) {
    __privateMethod(this, _Logger_instances, emit_fn).call(this, "warn", ...items);
  }
  error(...items) {
    __privateMethod(this, _Logger_instances, emit_fn).call(this, "error", ...items);
  }
  success(...items) {
    __privateMethod(this, _Logger_instances, emit_fn).call(this, "success", ...items);
  }
  clear() {
    const entry = { event: "clear", timestamp: Date.now() };
    __privateMethod(this, _Logger_instances, record_fn).call(this, entry);
    this.emit("clear", entry);
  }
  spacer() {
    const entry = { event: "spacer", timestamp: Date.now() };
    __privateMethod(this, _Logger_instances, record_fn).call(this, entry);
    this.emit("spacer", entry);
  }
  title(title) {
    const entry = { event: "title", title, timestamp: Date.now() };
    __privateMethod(this, _Logger_instances, record_fn).call(this, entry);
    this.emit("title", entry);
  }
  clearHistory() {
    __privateSet(this, _history, []);
  }
}
_history = new WeakMap();
_maxHistory = new WeakMap();
_consoleOutput = new WeakMap();
_Logger_instances = new WeakSet();
record_fn = function(entry) {
  __privateGet(this, _history).push(entry);
  __privateMethod(this, _Logger_instances, trimHistory_fn).call(this);
};
trimHistory_fn = function() {
  while (__privateGet(this, _history).length > __privateGet(this, _maxHistory)) {
    __privateGet(this, _history).shift();
  }
};
emit_fn = function(type, ...items) {
  const entry = { event: "log", type, items, timestamp: Date.now() };
  __privateMethod(this, _Logger_instances, record_fn).call(this, entry);
  this.emit("log", entry);
  if (__privateGet(this, _consoleOutput)) {
    const method = CONSOLE_METHODS[type] || "log";
    console[method](...items);
  }
};
const logger = new Logger();
const directAttrs = [
  "id",
  "href",
  "src",
  "alt",
  "title",
  "value",
  "type",
  "name",
  "placeholder",
  "min",
  "max",
  "step",
  "checked",
  "disabled",
  "readonly",
  "selected"
];
function createElement(tag, options = {}) {
  const el = document.createElement(tag);
  applyElementOptions(el, options);
  return el;
}
function applyElementOptions(el, options) {
  applyDirectAttributes(el, options);
  applyContent(el, options);
  if (options.style) {
    setStyle(el, options.style);
  }
  if (options.attrs) {
    setAttributes(el, options.attrs);
  }
}
function applyDirectAttributes(el, options) {
  for (const attr of directAttrs) {
    if (attr in options) {
      el[attr] = options[attr];
    }
  }
  if (options.class || options.className) {
    el.className = options.class || options.className;
  }
}
function applyContent(el, options) {
  if (options.text) {
    el.textContent = options.text;
  }
  if (options.html) {
    el.innerHTML = options.html;
  }
}
function setAttributes(element, attrs) {
  for (const [key, value] of Object.entries(attrs)) {
    const attrName = key.includes("-") ? key : toKebabCase(key);
    element.setAttribute(attrName, value);
  }
}
function setStyle(element, styles) {
  if (typeof styles === "string") {
    element.style.cssText = styles;
  } else {
    for (const [key, value] of Object.entries(styles)) {
      element.style[key] = value;
    }
  }
}
function createStyleSheet(css) {
  const sheet = new CSSStyleSheet();
  if (sheet.replaceSync) {
    sheet.replaceSync(css);
  }
  return sheet;
}
function adoptStyleSheets(shadowRoot, ...sheets) {
  shadowRoot.adoptedStyleSheets = sheets.filter(Boolean);
}
class ShelfPacker {
  constructor(width, height, padding = 1) {
    this.width = width;
    this.height = height;
    this.padding = padding;
    this.shelves = [];
    this.currentY = 0;
    this.full = false;
  }
  pack(w, h) {
    const pw = w + this.padding;
    const ph = h + this.padding;
    for (const shelf2 of this.shelves) {
      if (shelf2.height >= ph && shelf2.remainingWidth >= pw) {
        const slot = { x: shelf2.x, y: shelf2.y };
        shelf2.x += pw;
        shelf2.remainingWidth -= pw;
        return slot;
      }
    }
    if (this.currentY + ph > this.height) {
      this.full = true;
      return null;
    }
    const shelf = {
      y: this.currentY,
      x: pw,
      height: ph,
      remainingWidth: this.width - pw
    };
    this.shelves.push(shelf);
    this.currentY += ph;
    return { x: 0, y: shelf.y };
  }
  canFit(w, h) {
    const pw = w + this.padding;
    const ph = h + this.padding;
    for (const shelf of this.shelves) {
      if (shelf.height >= ph && shelf.remainingWidth >= pw) {
        return true;
      }
    }
    return this.currentY + ph <= this.height;
  }
}
export {
  Notifier as N,
  ShelfPacker as S,
  formatBytes as a,
  createStyleSheet as b,
  createElement as c,
  adoptStyleSheets as d,
  delegateProperties as e,
  formatNumber as f,
  deepMerge as g,
  getNestedValue as h,
  setNestedValue as i,
  toCamelCase as j,
  logger as l,
  pluralize as p,
  setDefaults as s,
  toSnakeCase as t,
  uniqueId as u
};
