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
var _id, _name, _category, _bind, _host, _started, _disposed, _installed, _eagerStart, _lifecycle, _childrenRegistry, _tags, _tagIndexes, _idCounters, _delegations, _eventDelegations, _linked, _PerkyModule_instances, findUniqueId_fn, addChild_fn, setupTagIndexListeners_fn;
import { N as Notifier } from "./runtime-DOmi4lo7.js";
import { R as Registry } from "./registry-CF_H4IOw.js";
import { O as ObservableSet } from "./observable_set-BOSKLaPv.js";
import { b as delegateProperties } from "./utils-DVCexGPz.js";
const SELECTOR_REGEX = /([#.$@])([a-zA-Z0-9_-]+)/g;
const PREFIX_TO_TYPE = {
  "#": "id",
  ".": "tag",
  $: "name",
  "@": "category"
};
const TYPE_MATCHERS = {
  id: (module, value) => module.$id === value,
  tag: (module, value) => {
    var _a;
    return (_a = module.hasTag) == null ? void 0 : _a.call(module, value);
  },
  name: (module, value) => module.$name === value,
  category: (module, value) => module.$category === value
};
function parseSelector(selector) {
  const segments = selector.trim().split(/\s+/);
  return segments.map((segment) => {
    const conditions = [];
    let match;
    SELECTOR_REGEX.lastIndex = 0;
    while ((match = SELECTOR_REGEX.exec(segment)) !== null) {
      const [, prefix, value] = match;
      conditions.push({
        type: PREFIX_TO_TYPE[prefix],
        value
      });
    }
    return conditions;
  }).filter((segment) => segment.length > 0);
}
function matchesConditions(module, conditions) {
  return conditions.every(({ type, value }) => {
    const matcher = TYPE_MATCHERS[type];
    return matcher ? matcher(module, value) : false;
  });
}
function findMatchingChildren(candidates, conditions) {
  return candidates.flatMap((candidate) => {
    const children = candidate.children || [];
    return children.filter((child) => matchesConditions(child, conditions));
  });
}
function query(root, selector) {
  const segments = parseSelector(selector);
  if (segments.length === 0) {
    return null;
  }
  let candidates = [root];
  for (const conditions of segments) {
    candidates = findMatchingChildren(candidates, conditions);
    if (candidates.length === 0) {
      return null;
    }
  }
  return candidates[0] || null;
}
function queryAll(root, selector) {
  const segments = parseSelector(selector);
  if (segments.length === 0) {
    return [];
  }
  let candidates = [root];
  for (const conditions of segments) {
    candidates = findMatchingChildren(candidates, conditions);
    if (candidates.length === 0) {
      return [];
    }
  }
  return candidates;
}
const _PerkyModule = class _PerkyModule extends Notifier {
  constructor(options = {}) {
    super();
    __privateAdd(this, _PerkyModule_instances);
    __privateAdd(this, _id);
    __privateAdd(this, _name);
    __privateAdd(this, _category);
    __privateAdd(this, _bind);
    __privateAdd(this, _host, null);
    __privateAdd(this, _started, false);
    __privateAdd(this, _disposed, false);
    __privateAdd(this, _installed, false);
    __privateAdd(this, _eagerStart);
    __privateAdd(this, _lifecycle);
    __privateAdd(this, _childrenRegistry, null);
    __privateAdd(this, _tags, null);
    __privateAdd(this, _tagIndexes, /* @__PURE__ */ new Map());
    __privateAdd(this, _idCounters, /* @__PURE__ */ new Map());
    __privateAdd(this, _delegations, []);
    __privateAdd(this, _eventDelegations, []);
    __privateAdd(this, _linked, /* @__PURE__ */ new Map());
    this.options = { ...options };
    __privateSet(this, _name, options.$name || this.constructor.$name || this.constructor.name);
    __privateSet(this, _id, options.$id || __privateGet(this, _name));
    __privateSet(this, _category, options.$category || this.constructor.$category);
    const bindOption = options.$bind ?? this.constructor.$bind;
    __privateSet(this, _bind, bindOption === true ? __privateGet(this, _name) : bindOption);
    __privateSet(this, _eagerStart, (options.$eagerStart ?? this.constructor.$eagerStart) !== false);
    __privateSet(this, _lifecycle, (options.$lifecycle ?? this.constructor.$lifecycle) !== false);
    __privateSet(this, _tags, new ObservableSet([
      ...this.constructor.$tags,
      ...options.$tags || []
    ]));
    __privateSet(this, _childrenRegistry, new Registry());
    __privateGet(this, _childrenRegistry).addIndex("$category");
  }
  get $id() {
    return __privateGet(this, _id);
  }
  set $id(newId) {
    const oldId = __privateGet(this, _id);
    if (oldId !== newId) {
      __privateSet(this, _id, newId);
      this.emit("$id:changed", newId, oldId);
    }
  }
  get $name() {
    return __privateGet(this, _name);
  }
  set $name(newName) {
    const oldName = __privateGet(this, _name);
    if (oldName !== newName) {
      __privateSet(this, _name, newName);
      this.emit("$name:changed", newName, oldName);
    }
  }
  get $category() {
    return __privateGet(this, _category);
  }
  set $category(newCategory) {
    const oldCategory = __privateGet(this, _category);
    if (oldCategory !== newCategory) {
      __privateSet(this, _category, newCategory);
      this.emit("$category:changed", newCategory, oldCategory);
    }
  }
  get $bind() {
    return __privateGet(this, _bind);
  }
  set $bind(newBind) {
    const oldBind = __privateGet(this, _bind);
    if (oldBind !== newBind) {
      __privateSet(this, _bind, newBind);
      this.emit("$bind:changed", newBind, oldBind);
    }
  }
  get host() {
    return __privateGet(this, _host);
  }
  get started() {
    return __privateGet(this, _started);
  }
  get disposed() {
    return __privateGet(this, _disposed);
  }
  get installed() {
    return __privateGet(this, _installed);
  }
  get $eagerStart() {
    return __privateGet(this, _eagerStart);
  }
  get $lifecycle() {
    return __privateGet(this, _lifecycle);
  }
  get $status() {
    if (!__privateGet(this, _lifecycle)) {
      return "static";
    }
    if (__privateGet(this, _disposed)) {
      return "disposed";
    }
    if (__privateGet(this, _started)) {
      return "started";
    }
    return "stopped";
  }
  get running() {
    return __privateGet(this, _started);
  }
  start() {
    var _a;
    if (__privateGet(this, _started)) {
      return false;
    }
    __privateSet(this, _started, true);
    (_a = this.onStart) == null ? void 0 : _a.call(this);
    this.emit("start");
    return true;
  }
  stop() {
    var _a;
    if (!__privateGet(this, _started)) {
      return false;
    }
    __privateSet(this, _started, false);
    (_a = this.onStop) == null ? void 0 : _a.call(this);
    this.emit("stop");
    return true;
  }
  dispose() {
    var _a;
    if (__privateGet(this, _disposed)) {
      return false;
    }
    __privateSet(this, _disposed, true);
    this.stop();
    this.unlinkAll();
    this.cleanExternalListeners();
    __privateGet(this, _childrenRegistry).forEach((child) => {
      if (child && !child.disposed) {
        child.dispose();
      }
    });
    __privateGet(this, _childrenRegistry).clear();
    (_a = this.onDispose) == null ? void 0 : _a.call(this);
    this.emit("dispose");
    this.removeListeners();
    return true;
  }
  install(host, options) {
    var _a;
    if (__privateGet(this, _installed)) {
      return this.uninstall();
    }
    __privateSet(this, _host, host);
    if (this.$bind) {
      host[this.$bind] = this;
    }
    __privateSet(this, _installed, true);
    (_a = this.onInstall) == null ? void 0 : _a.call(this, host, options);
    return true;
  }
  uninstall() {
    var _a;
    if (!__privateGet(this, _installed)) {
      return false;
    }
    this.cleanDelegations();
    this.cleanEventDelegations();
    (_a = this.onUninstall) == null ? void 0 : _a.call(this, __privateGet(this, _host));
    __privateSet(this, _installed, false);
    __privateSet(this, _host, null);
    return true;
  }
  get children() {
    return __privateGet(this, _childrenRegistry).all;
  }
  get childrenRegistry() {
    return __privateGet(this, _childrenRegistry);
  }
  create(Child, options = {}) {
    options.$category || (options.$category = Child.$category);
    options.$name || (options.$name = Child.$name || options.$category);
    options.$lifecycle = options.$lifecycle ?? Child.$lifecycle ?? true;
    options.$eagerStart = options.$eagerStart ?? Child.$eagerStart ?? true;
    const hasExplicitId = "$id" in options;
    if (hasExplicitId) {
      unregisterExisting(this, options.$id);
    }
    return this.addChild(new Child(options));
  }
  addChild(child) {
    if (!(child instanceof _PerkyModule)) {
      throw new Error("addChild expects a PerkyModule instance");
    }
    if (child.installed) {
      throw new Error("Module is already installed in another parent");
    }
    if (__privateGet(this, _childrenRegistry).has(child.$id)) {
      child.$id = __privateMethod(this, _PerkyModule_instances, findUniqueId_fn).call(this, child.$name);
    }
    return __privateMethod(this, _PerkyModule_instances, addChild_fn).call(this, child, child.options);
  }
  getChild(name) {
    return __privateGet(this, _childrenRegistry).get(name) || null;
  }
  hasChild(name) {
    return __privateGet(this, _childrenRegistry).has(name);
  }
  removeChild(name) {
    const child = __privateGet(this, _childrenRegistry).get(name);
    if (!child) {
      return false;
    }
    unregisterChild(this, child);
    return true;
  }
  listNamesFor(key, indexName = "$category") {
    return __privateGet(this, _childrenRegistry).lookupKeys(indexName, key);
  }
  lookup(indexName, key) {
    return __privateGet(this, _childrenRegistry).lookup(indexName, key);
  }
  childrenByCategory(category) {
    return this.lookup("$category", category);
  }
  get $tags() {
    return __privateGet(this, _tags).toArray();
  }
  set $tags(newTags) {
    __privateGet(this, _tags).clear();
    if (Array.isArray(newTags)) {
      newTags.forEach((tag) => __privateGet(this, _tags).add(tag));
    }
  }
  get tags() {
    return __privateGet(this, _tags);
  }
  hasTag(tag) {
    return __privateGet(this, _tags).has(tag);
  }
  addTag(tag) {
    if (__privateGet(this, _tags).has(tag)) {
      return false;
    }
    __privateGet(this, _tags).add(tag);
    return true;
  }
  removeTag(tag) {
    return __privateGet(this, _tags).delete(tag);
  }
  hasTags(tags) {
    if (typeof tags === "string") {
      return this.hasTag(tags);
    }
    return Array.isArray(tags) && tags.every((tag) => __privateGet(this, _tags).has(tag));
  }
  childrenByTags(tags) {
    const tagArray = Array.isArray(tags) ? tags : [tags];
    if (tagArray.length === 0) {
      return [];
    }
    const indexKey = getTagIndexKey(tagArray);
    if (__privateGet(this, _tagIndexes).has(indexKey)) {
      return __privateGet(this, _childrenRegistry).lookup(indexKey, indexKey);
    }
    return __privateGet(this, _childrenRegistry).all.filter(
      (child) => tagArray.every((tag) => {
        var _a;
        return (_a = child.$tags) == null ? void 0 : _a.includes(tag);
      })
    );
  }
  addTagsIndex(tags) {
    if (!Array.isArray(tags) || tags.length === 0) {
      return false;
    }
    const indexKey = getTagIndexKey(tags);
    if (__privateGet(this, _tagIndexes).has(indexKey)) {
      return false;
    }
    __privateGet(this, _childrenRegistry).addIndex(indexKey, (child) => {
      const hasAllTags = tags.every((tag) => {
        var _a;
        return (_a = child.tags) == null ? void 0 : _a.has(tag);
      });
      return hasAllTags ? indexKey : null;
    });
    __privateGet(this, _tagIndexes).set(indexKey, tags);
    __privateGet(this, _childrenRegistry).forEach((child) => {
      if (child.tags) {
        __privateMethod(this, _PerkyModule_instances, setupTagIndexListeners_fn).call(this, child);
      }
    });
    return true;
  }
  removeTagsIndex(tags) {
    const indexKey = getTagIndexKey(tags);
    if (!__privateGet(this, _tagIndexes).has(indexKey)) {
      return false;
    }
    __privateGet(this, _childrenRegistry).removeIndex(indexKey);
    __privateGet(this, _tagIndexes).delete(indexKey);
    return true;
  }
  delegateTo(host, names) {
    delegateProperties(host, this, names);
    const propertyNames = Array.isArray(names) ? names : Object.values(names);
    __privateGet(this, _delegations).push({ host, propertyNames });
  }
  cleanDelegations() {
    for (const { host, propertyNames } of __privateGet(this, _delegations)) {
      for (const name of propertyNames) {
        delete host[name];
      }
    }
    __privateGet(this, _delegations).length = 0;
  }
  delegateEventsTo(host, events, namespace) {
    const eventArray = Array.isArray(events) ? events : Object.keys(events);
    const callbacks = [];
    for (const event of eventArray) {
      const prefixedEvent = namespace ? `${namespace}:${event}` : event;
      const callback = (...args) => host.emit(prefixedEvent, ...args);
      this.on(event, callback);
      callbacks.push({ event, callback });
    }
    __privateGet(this, _eventDelegations).push({ callbacks });
  }
  cleanEventDelegations() {
    for (const { callbacks } of __privateGet(this, _eventDelegations)) {
      for (const { event, callback } of callbacks) {
        this.off(event, callback);
      }
    }
    __privateGet(this, _eventDelegations).length = 0;
  }
  query(selector) {
    return query(this, selector);
  }
  queryAll(selector) {
    return queryAll(this, selector);
  }
  link(module, alias) {
    if (!(module instanceof _PerkyModule)) {
      throw new Error("link expects a PerkyModule instance");
    }
    const key = alias || module.$id;
    const shouldBind = alias !== false;
    if (__privateGet(this, _linked).has(key)) {
      this.unlink(key);
    }
    __privateGet(this, _linked).set(key, module);
    if (shouldBind) {
      this[key] = module;
    }
    this.listenTo(module, "dispose", () => {
      this.unlink(key);
    });
    this.emit("link", key, module);
    return module;
  }
  unlink(key) {
    const module = __privateGet(this, _linked).get(key);
    if (!module) {
      return false;
    }
    __privateGet(this, _linked).delete(key);
    if (this[key] === module) {
      delete this[key];
    }
    this.emit("unlink", key, module);
    return true;
  }
  getLinked(key) {
    return __privateGet(this, _linked).get(key) || null;
  }
  get linked() {
    return Array.from(__privateGet(this, _linked).values());
  }
  hasLinked(key) {
    return __privateGet(this, _linked).has(key);
  }
  unlinkAll() {
    for (const key of __privateGet(this, _linked).keys()) {
      this.unlink(key);
    }
  }
};
_id = new WeakMap();
_name = new WeakMap();
_category = new WeakMap();
_bind = new WeakMap();
_host = new WeakMap();
_started = new WeakMap();
_disposed = new WeakMap();
_installed = new WeakMap();
_eagerStart = new WeakMap();
_lifecycle = new WeakMap();
_childrenRegistry = new WeakMap();
_tags = new WeakMap();
_tagIndexes = new WeakMap();
_idCounters = new WeakMap();
_delegations = new WeakMap();
_eventDelegations = new WeakMap();
_linked = new WeakMap();
_PerkyModule_instances = new WeakSet();
findUniqueId_fn = function(baseName) {
  let counter = __privateGet(this, _idCounters).get(baseName) || 1;
  __privateGet(this, _idCounters).set(baseName, counter + 1);
  return `${baseName}_${counter}`;
};
addChild_fn = function(child, options = {}) {
  child.install(this, options);
  __privateGet(this, _childrenRegistry).set(child.$id, child);
  setupLifecycle(this, child, options);
  __privateMethod(this, _PerkyModule_instances, setupTagIndexListeners_fn).call(this, child);
  this.emit(`${child.$category}:set`, child.$id, child);
  child.emit("registered", this, child.$id);
  return child;
};
setupTagIndexListeners_fn = function(child) {
  if (__privateGet(this, _tagIndexes).size === 0 || !child.tags) {
    return;
  }
  const refreshAllIndexes = () => {
    for (const indexKey of __privateGet(this, _tagIndexes).keys()) {
      __privateGet(this, _childrenRegistry).refreshIndexFor(child, indexKey);
    }
  };
  child.listenTo(child.tags, "add", refreshAllIndexes);
  child.listenTo(child.tags, "delete", refreshAllIndexes);
  child.listenTo(child.tags, "clear", refreshAllIndexes);
};
// === STATIC ===
__publicField(_PerkyModule, "$category", "perkyModule");
__publicField(_PerkyModule, "$name", null);
__publicField(_PerkyModule, "$lifecycle", true);
__publicField(_PerkyModule, "$eagerStart", true);
__publicField(_PerkyModule, "$tags", []);
__publicField(_PerkyModule, "perkyModuleMethods", Notifier.notifierMethods.concat([
  "start",
  "stop",
  "dispose",
  "install",
  "uninstall",
  "create",
  "addChild",
  "getChild",
  "hasChild",
  "removeChild",
  "listNamesFor",
  "lookup",
  "childrenByCategory",
  "hasTag",
  "addTag",
  "removeTag",
  "hasTags",
  "childrenByTags",
  "addTagsIndex",
  "removeTagsIndex",
  "delegateTo",
  "cleanDelegations",
  "delegateEventsTo",
  "cleanEventDelegations",
  "query",
  "queryAll",
  "link",
  "unlink",
  "getLinked",
  "hasLinked",
  "unlinkAll"
]));
let PerkyModule = _PerkyModule;
function setupLifecycle(host, child, options) {
  const { $lifecycle = true } = options;
  if (!$lifecycle) {
    return;
  }
  const childrenRegistry = host.childrenRegistry;
  if (host.started && child.$eagerStart) {
    child.start();
  }
  child.listenTo(host, "start", () => {
    child.start();
  });
  child.listenTo(host, "stop", () => {
    child.stop();
  });
  child.listenTo(host, "dispose", () => {
    if (childrenRegistry.hasEntry(child.$id, child)) {
      unregisterChild(host, child);
    }
  });
  child.once("dispose", () => {
    if (childrenRegistry.hasEntry(child.$id, child)) {
      unregisterChild(host, child);
    }
  });
  child.on("$category:changed", (newCategory, oldCategory) => {
    childrenRegistry.updateIndexFor(child, "$category", oldCategory, newCategory);
  });
  child.on("$id:changed", (newId, oldId) => {
    childrenRegistry.updateKey(oldId, newId, child);
  });
  child.on("$bind:changed", (newBind, oldBind) => {
    if (oldBind && host[oldBind] === child) {
      delete host[oldBind];
    }
    if (newBind) {
      host[newBind] = child;
    }
  });
}
function unregisterExisting(host, childName) {
  const children = host.childrenRegistry;
  if (children.has(childName)) {
    unregisterChild(host, children.get(childName));
  }
}
function unregisterChild(host, child) {
  if (host.childrenRegistry.hasEntry(child.$id, child)) {
    host.childrenRegistry.delete(child.$id);
  }
  if (child.$bind && host[child.$bind] === child) {
    delete host[child.$bind];
  }
  child.uninstall();
  host.emit(`${child.$category}:delete`, child.$id, child);
  child.emit("unregistered", host, child.$id);
  child.dispose();
}
function getTagIndexKey(tags) {
  return [...tags].sort().join("_");
}
export {
  PerkyModule as P,
  queryAll as a,
  matchesConditions as m,
  parseSelector as p,
  query as q
};
