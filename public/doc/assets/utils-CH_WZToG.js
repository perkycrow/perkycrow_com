var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _pluralRules, _singularRules, _uncountables, _irregularPlurals, _irregularSingles, _Inflector_instances, sanitizeWord_fn, replaceWord_fn, checkWord_fn, loadIrregulars_fn, loadPlurals_fn, loadSingulars_fn, loadUncountables_fn;
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
    return string.replace(/[-\s]/g, "_").replace(/([A-Z])([A-Z][a-z])/g, "$1_$2").replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase().replace(/^_/, "");
  }
  toKebabCase(string) {
    return string.replace(/[_\s]/g, "-").replace(/([A-Z])([A-Z][a-z])/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase().replace(/^-/, "");
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
const inflector = new Inflector();
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
export {
  delegateProperties as d,
  toKebabCase as t,
  uniqueId as u
};
