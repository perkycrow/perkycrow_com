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
var _map, _values, _keyByValue, _ObservableMap_instances, removeFromValues_fn, _indexes, _Registry_instances, handleSet_fn, handleDelete_fn, addToIndex_fn, removeFromIndex_fn, _set, _id, _name, _category, _bind, _host, _started, _disposed, _installed, _eagerStart, _lifecycle, _childrenRegistry, _tags, _tagIndexes, _idCounters, _delegations, _eventDelegations, _linked, _PerkyModule_instances, findUniqueId_fn, addChild_fn, setupTagIndexListeners_fn, _data, _Manifest_instances, initAssets_fn, exportAssets_fn, _loadingPromises, _SourceManager_instances, setupLoaderEvents_fn, _canvas, _ctx, _packer, _regions, _dirty, _atlases, _atlasGroups, _regionIndex, _atlasSize, _TextureAtlasManager_instances, addToAtlas_fn, addToNamedAtlas_fn, addOversizedImage_fn, _Spritesheet_instances, initializeFrames_fn, _atlasManager, _manualRegions, _spritesheets, _listeners, _PerkyElement_instances, adoptStyles_fn, collectStyleSheets_fn, cleanListeners_fn, _db, _dbName;
import { N as Notifier, e as delegateProperties, u as uniqueId, t as toSnakeCase, s as setDefaults, g as deepMerge, h as getNestedValue, i as setNestedValue, S as ShelfPacker, d as adoptStyleSheets, b as createStyleSheet } from "./preload-helper-DNpi5zPU.js";
class ObservableMap extends Notifier {
  constructor(collection) {
    super();
    __privateAdd(this, _ObservableMap_instances);
    __privateAdd(this, _map, /* @__PURE__ */ new Map());
    __privateAdd(this, _values, /* @__PURE__ */ new Set());
    __privateAdd(this, _keyByValue, /* @__PURE__ */ new Map());
    if (collection) {
      this.addCollection(collection);
    }
  }
  get size() {
    return __privateGet(this, _map).size;
  }
  get entries() {
    return Array.from(__privateGet(this, _map).entries());
  }
  get keys() {
    return __privateGet(this, _map).keys();
  }
  get values() {
    return __privateGet(this, _map).values();
  }
  get all() {
    return Array.from(__privateGet(this, _map).values());
  }
  get map() {
    return __privateGet(this, _map);
  }
  get(key) {
    return __privateGet(this, _map).get(key);
  }
  has(key) {
    return __privateGet(this, _map).has(key);
  }
  hasValue(value) {
    return __privateGet(this, _values).has(value);
  }
  keyFor(value) {
    return __privateGet(this, _keyByValue).get(value);
  }
  hasEntry(key, value) {
    return this.get(key) === value;
  }
  isKeyOf(key, value) {
    return this.keyFor(value) === key;
  }
  forEach(callbackFn, thisArg) {
    __privateGet(this, _map).forEach(callbackFn, thisArg);
  }
  set(key, value) {
    const exists = __privateGet(this, _map).has(key);
    const oldValue = exists ? __privateGet(this, _map).get(key) : void 0;
    const isReplacing = exists && oldValue !== value;
    __privateGet(this, _map).set(key, value);
    __privateGet(this, _values).add(value);
    __privateGet(this, _keyByValue).set(value, key);
    if (isReplacing) {
      __privateMethod(this, _ObservableMap_instances, removeFromValues_fn).call(this, oldValue);
      this.emit("delete", key, oldValue);
    }
    this.emit("set", key, value, oldValue);
    return true;
  }
  delete(key) {
    const exists = __privateGet(this, _map).has(key);
    if (!exists) {
      return false;
    }
    const value = __privateGet(this, _map).get(key);
    const deleted = __privateGet(this, _map).delete(key);
    if (deleted) {
      __privateMethod(this, _ObservableMap_instances, removeFromValues_fn).call(this, value);
      this.emit("delete", key, value);
    }
    return deleted;
  }
  updateKey(oldKey, newKey, item) {
    if (!this.has(oldKey)) {
      return false;
    }
    if (oldKey === newKey) {
      return false;
    }
    const value = this.get(oldKey);
    if (item !== void 0 && value !== item) {
      return false;
    }
    __privateGet(this, _map).delete(oldKey);
    __privateGet(this, _map).set(newKey, value);
    this.emit("key:updated", oldKey, newKey, value);
    return true;
  }
  clear() {
    if (__privateGet(this, _map).size > 0) {
      const itemsToDelete = Array.from(__privateGet(this, _map).entries());
      itemsToDelete.forEach(([key, value]) => {
        this.emit("delete", key, value);
      });
      __privateGet(this, _map).clear();
      __privateGet(this, _values).clear();
      __privateGet(this, _keyByValue).clear();
      this.emit("clear");
    }
  }
  addCollection(collection) {
    if (!collection || typeof collection !== "object") {
      return false;
    }
    if (typeof collection.forEach === "function") {
      collection.forEach((value, key) => {
        this.set(key, value);
      });
    } else {
      for (const key in collection) {
        if (Object.prototype.hasOwnProperty.call(collection, key)) {
          this.set(key, collection[key]);
        }
      }
    }
    return true;
  }
  toObject() {
    const object = {};
    __privateGet(this, _map).forEach((value, key) => {
      object[key] = value;
    });
    return object;
  }
}
_map = new WeakMap();
_values = new WeakMap();
_keyByValue = new WeakMap();
_ObservableMap_instances = new WeakSet();
removeFromValues_fn = function(value) {
  for (const [, v] of __privateGet(this, _map)) {
    if (v === value) {
      return;
    }
  }
  __privateGet(this, _values).delete(value);
  __privateGet(this, _keyByValue).delete(value);
};
class Registry extends ObservableMap {
  constructor(collection) {
    super(collection);
    __privateAdd(this, _Registry_instances);
    __privateAdd(this, _indexes, /* @__PURE__ */ new Map());
    this.on("set", __privateMethod(this, _Registry_instances, handleSet_fn));
    this.on("delete", __privateMethod(this, _Registry_instances, handleDelete_fn));
  }
  addIndex(name, keyFunction) {
    if (keyFunction === void 0) {
      keyFunction = name;
    }
    if (typeof keyFunction === "string") {
      const propertyName = keyFunction;
      keyFunction = (item) => item[propertyName];
    }
    if (typeof keyFunction !== "function") {
      return false;
    }
    const index = {
      keyFn: keyFunction,
      data: /* @__PURE__ */ new Map()
    };
    __privateGet(this, _indexes).set(name, index);
    for (const value of this.map.values()) {
      __privateMethod(this, _Registry_instances, addToIndex_fn).call(this, name, value);
    }
    return true;
  }
  lookup(indexName, key) {
    const index = __privateGet(this, _indexes).get(indexName);
    if (!index) {
      throw new Error(`Index '${indexName}' does not exist`);
    }
    const items = index.data.get(key);
    return items ? Array.from(items) : [];
  }
  lookupKeys(indexName, key) {
    const itemsSet = new Set(this.lookup(indexName, key));
    if (itemsSet.size === 0) {
      return [];
    }
    const keys = [];
    for (const [k, v] of this.map.entries()) {
      if (itemsSet.has(v)) {
        keys.push(k);
      }
    }
    return keys;
  }
  hasIndex(name) {
    return __privateGet(this, _indexes).has(name);
  }
  removeIndex(name) {
    return __privateGet(this, _indexes).delete(name);
  }
  updateIndexFor(item, indexName, oldKeys, newKeys) {
    if (!this.hasValue(item)) {
      return false;
    }
    const index = __privateGet(this, _indexes).get(indexName);
    if (!index) {
      return false;
    }
    const oldKeysArray = Array.isArray(oldKeys) ? oldKeys : [oldKeys];
    const newKeysArray = Array.isArray(newKeys) ? newKeys : [newKeys];
    for (const oldKey of oldKeysArray) {
      const items = index.data.get(oldKey);
      if (items) {
        items.delete(item);
        if (items.size === 0) {
          index.data.delete(oldKey);
        }
      }
    }
    for (const newKey of newKeysArray) {
      if (!index.data.has(newKey)) {
        index.data.set(newKey, /* @__PURE__ */ new Set());
      }
      index.data.get(newKey).add(item);
    }
    return true;
  }
  refreshIndexFor(value, indexName) {
    if (!this.hasValue(value)) {
      return false;
    }
    const index = __privateGet(this, _indexes).get(indexName);
    if (!index) {
      return false;
    }
    for (const [key, items] of index.data.entries()) {
      if (items.has(value)) {
        items.delete(value);
        if (items.size === 0) {
          index.data.delete(key);
        }
      }
    }
    __privateMethod(this, _Registry_instances, addToIndex_fn).call(this, indexName, value);
    return true;
  }
}
_indexes = new WeakMap();
_Registry_instances = new WeakSet();
handleSet_fn = function(key, value) {
  for (const indexName of __privateGet(this, _indexes).keys()) {
    __privateMethod(this, _Registry_instances, addToIndex_fn).call(this, indexName, value);
  }
};
handleDelete_fn = function(key, value) {
  for (const indexName of __privateGet(this, _indexes).keys()) {
    __privateMethod(this, _Registry_instances, removeFromIndex_fn).call(this, indexName, value);
  }
};
addToIndex_fn = function(indexName, value) {
  const index = __privateGet(this, _indexes).get(indexName);
  if (!index) {
    return;
  }
  const keys = getKeysForValue(index.keyFn, value);
  for (const key of keys) {
    if (!index.data.has(key)) {
      index.data.set(key, /* @__PURE__ */ new Set());
    }
    const items = index.data.get(key);
    items.add(value);
  }
};
removeFromIndex_fn = function(indexName, value) {
  const index = __privateGet(this, _indexes).get(indexName);
  if (!index) {
    return;
  }
  const keys = getKeysForValue(index.keyFn, value);
  for (const key of keys) {
    const items = index.data.get(key);
    if (!items) {
      continue;
    }
    items.delete(value);
    if (items.size === 0) {
      index.data.delete(key);
    }
  }
};
function getKeysForValue(keyFn, value) {
  const result = keyFn(value);
  if (Array.isArray(result)) {
    return result;
  }
  if (result === null || result === void 0) {
    return [];
  }
  return [result];
}
class ObservableSet extends Notifier {
  constructor(values) {
    super();
    __privateAdd(this, _set, /* @__PURE__ */ new Set());
    if (values) {
      for (const value of values) {
        __privateGet(this, _set).add(value);
      }
    }
  }
  get size() {
    return __privateGet(this, _set).size;
  }
  add(value) {
    if (!__privateGet(this, _set).has(value)) {
      __privateGet(this, _set).add(value);
      this.emit("add", value);
    }
    return this;
  }
  delete(value) {
    const deleted = __privateGet(this, _set).delete(value);
    if (deleted) {
      this.emit("delete", value);
    }
    return deleted;
  }
  clear() {
    if (__privateGet(this, _set).size > 0) {
      const values = Array.from(__privateGet(this, _set));
      __privateGet(this, _set).clear();
      this.emit("clear", values);
    }
  }
  has(value) {
    return __privateGet(this, _set).has(value);
  }
  values() {
    return __privateGet(this, _set).values();
  }
  keys() {
    return __privateGet(this, _set).keys();
  }
  entries() {
    return __privateGet(this, _set).entries();
  }
  forEach(callbackFn, thisArg) {
    __privateGet(this, _set).forEach(callbackFn, thisArg);
  }
  [Symbol.iterator]() {
    return __privateGet(this, _set)[Symbol.iterator]();
  }
  toArray() {
    return Array.from(__privateGet(this, _set));
  }
}
_set = new WeakMap();
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
class Asset {
  constructor(params = {}) {
    this.type = params.type;
    this.name = params.name;
    this.id = params.id || guessId(params);
    this.name ?? (this.name = this.id);
    this.url = params.url || params.path;
    this.source = params.source;
    this.tags = params.tags || [];
    this.config = params.config || {};
    this.updatedAt = params.updatedAt || 0;
  }
  get loaded() {
    return Boolean(this.source);
  }
  hasTag(tag) {
    return Array.isArray(this.tags) && this.tags.includes(tag);
  }
  export() {
    const exported = {
      type: this.type,
      id: this.id,
      name: this.name,
      tags: this.tags,
      config: this.config
    };
    if (this.url) {
      exported.url = this.url;
    } else if (this.source) {
      exported.source = this.source;
    }
    return exported;
  }
}
function guessId(params) {
  return uniqueId("assets", params.id || (params.name ? toSnakeCase(params.name) : params.type));
}
class Manifest extends PerkyModule {
  constructor(params = {}) {
    const { data = {}, ...moduleParams } = params;
    super(moduleParams);
    __privateAdd(this, _Manifest_instances);
    __privateAdd(this, _data);
    __privateSet(this, _data, setDefaults(data, {
      config: {},
      assets: {}
    }));
    this.assets = new Registry();
    this.assets.addIndex("type", (asset) => asset.type);
    this.assets.addIndex("tags", (asset) => asset.tags);
    __privateMethod(this, _Manifest_instances, initAssets_fn).call(this);
  }
  onInstall(host) {
    this.delegateTo(host, [
      "getConfig",
      "setConfig",
      "addAsset",
      "getAsset",
      "getAssets",
      "getAssetsByType",
      "getAssetsByTag",
      "getSource",
      "getAllAssets"
    ]);
    this.delegateTo(host, {
      export: "exportManifest",
      import: "importManifest"
    });
  }
  import(jsonData) {
    if (typeof jsonData === "string") {
      try {
        __privateSet(this, _data, JSON.parse(jsonData));
      } catch (error) {
        throw new Error(`Failed to parse manifest JSON: ${error.message}`);
      }
    } else if (jsonData && typeof jsonData === "object") {
      __privateSet(this, _data, jsonData);
    } else {
      throw new Error("Invalid manifest data: must be a JSON string or object");
    }
    this.assets.clear();
    __privateMethod(this, _Manifest_instances, initAssets_fn).call(this);
    return this;
  }
  export() {
    return deepMerge({}, {
      config: __privateGet(this, _data).config,
      assets: __privateMethod(this, _Manifest_instances, exportAssets_fn).call(this)
    });
  }
  getConfig(path) {
    if (path === void 0) {
      return __privateGet(this, _data).config;
    }
    return getNestedValue(__privateGet(this, _data).config, path);
  }
  setConfig(path, value) {
    setNestedValue(__privateGet(this, _data).config, path, value);
    return this;
  }
  addAsset(assetData) {
    validateAssetInput(assetData);
    const asset = prepareAsset(assetData);
    this.assets.set(asset.id, asset);
    return asset;
  }
  getAsset(id) {
    return this.assets.get(id) || null;
  }
  getSource(id) {
    const asset = this.getAsset(id);
    if (!asset) {
      return null;
    }
    return asset.source;
  }
  getAssetsByType(type) {
    return this.assets.lookup("type", type);
  }
  getAssetsByTag(tag) {
    if (!tag || typeof tag !== "string") {
      return [];
    }
    return this.assets.lookup("tags", tag);
  }
  getAssets() {
    return this.assets.all;
  }
  getAllAssets() {
    return this.assets.all;
  }
  hasAsset(id) {
    return this.assets.has(id);
  }
  removeAsset(id) {
    return this.assets.delete(id);
  }
}
_data = new WeakMap();
_Manifest_instances = new WeakSet();
initAssets_fn = function() {
  const { assets: assets2 } = __privateGet(this, _data);
  if (!assets2 || typeof assets2 !== "object") {
    return;
  }
  Object.entries(assets2).forEach(([id, assetData]) => {
    if (!assetData.id) {
      assetData.id = id;
    }
    const asset = prepareAsset(assetData);
    this.assets.set(asset.id, asset);
  });
};
exportAssets_fn = function() {
  const exported = {};
  for (const asset of this.assets.all) {
    exported[asset.id] = asset.export();
  }
  return exported;
};
__publicField(Manifest, "$category", "manifest");
__publicField(Manifest, "$lifecycle", false);
function validateAssetInput(assetData) {
  if (!assetData || typeof assetData !== "object") {
    throw new Error("Asset must be an object or Asset instance");
  }
}
function prepareAsset(assetData) {
  if (assetData instanceof Asset) {
    return assetData;
  }
  const asset = new Asset(assetData);
  if (!asset.id) {
    throw new Error("Asset must have an id");
  }
  return asset;
}
class SourceLoader extends PerkyModule {
  constructor(assets2, loaders2) {
    super();
    __privateAdd(this, _loadingPromises, {});
    this.loaders = loaders2 instanceof Registry ? loaders2 : new Registry(loaders2);
    this.assets = assets2;
  }
  get assetCount() {
    return this.assets.length;
  }
  get loadedCount() {
    return this.assets.filter((asset) => asset.loaded).length;
  }
  get progress() {
    if (this.assetCount === 0) {
      return 1;
    }
    return this.loadedCount / this.assetCount;
  }
  async load() {
    if (this.loading) {
      return false;
    }
    this.loading = true;
    const promises = this.assets.map((asset) => {
      return this.loadAsset(asset);
    });
    await Promise.all(promises);
    this.loading = false;
    this.emit("complete", this.assets);
    return this.assets;
  }
  async loadAsset(asset) {
    const assetKey = `${asset.type}:${asset.id}`;
    if (asset.loaded) {
      return asset;
    }
    if (__privateGet(this, _loadingPromises)[assetKey]) {
      return __privateGet(this, _loadingPromises)[assetKey];
    }
    const loader = this.loaders.get(asset.type);
    if (!loader) {
      throw new Error(`No loader found for asset type: ${asset.type}`);
    }
    const params = asset.url ? {
      url: asset.url,
      config: asset.config || {}
    } : asset;
    __privateGet(this, _loadingPromises)[assetKey] = Promise.resolve().then(() => loader(params)).then((source) => {
      asset.source = source;
      delete __privateGet(this, _loadingPromises)[assetKey];
      this.emit("progress", this.progress, { asset, source });
      return asset;
    }).catch((error) => {
      delete __privateGet(this, _loadingPromises)[assetKey];
      this.emit("error", asset, error);
      throw error;
    });
    return __privateGet(this, _loadingPromises)[assetKey];
  }
}
_loadingPromises = new WeakMap();
class SourceManager extends PerkyModule {
  constructor(options = {}) {
    super(options);
    __privateAdd(this, _SourceManager_instances);
    this.loaders = options.loaders;
    this.manifest = options.manifest;
  }
  onInstall(host) {
    this.delegateTo(host, ["loadAsset", "loadTag", "loadAll", "loaders"]);
    this.delegateEventsTo(host, [
      "loader:progress",
      "loader:complete",
      "loader:error",
      "asset:loaded"
    ]);
  }
  async loadAsset(id) {
    const asset = this.manifest.getAsset(id);
    if (!asset) {
      throw new Error(`Asset not found: ${id}`);
    }
    const sourceLoader = new SourceLoader([asset], this.loaders);
    __privateMethod(this, _SourceManager_instances, setupLoaderEvents_fn).call(this, sourceLoader);
    await sourceLoader.load();
    return sourceLoader;
  }
  async loadTag(tag) {
    const assets2 = this.manifest.getAssetsByTag(tag);
    const sourceLoader = new SourceLoader(assets2, this.loaders);
    __privateMethod(this, _SourceManager_instances, setupLoaderEvents_fn).call(this, sourceLoader);
    await sourceLoader.load();
    return sourceLoader;
  }
  async loadAll() {
    const assets2 = this.manifest.getAllAssets();
    const sourceLoader = new SourceLoader(assets2, this.loaders);
    __privateMethod(this, _SourceManager_instances, setupLoaderEvents_fn).call(this, sourceLoader);
    await sourceLoader.load();
    return sourceLoader;
  }
}
_SourceManager_instances = new WeakSet();
setupLoaderEvents_fn = function(loader) {
  this.delegateEvents(loader, [
    "progress",
    "complete",
    "error"
  ], "loader");
  this.listenTo(loader, "progress", (progress, { asset }) => {
    this.emit("asset:loaded", asset);
  });
};
__publicField(SourceManager, "$category", "sourceManager");
function normalizeParams(params) {
  if (typeof params === "string") {
    return { url: params, config: {} };
  }
  return {
    url: params.url,
    config: params.config || {}
  };
}
function checkResponse(response, url) {
  if (!response.ok) {
    throw new Error(`HTTP Error ${response.status} (${response.statusText}) for ${url}`);
  }
}
async function loadResponse(params) {
  const { url, config: config2 } = normalizeParams(params);
  return fetch(url, config2);
}
async function loadBlob(params) {
  const { url } = normalizeParams(params);
  const response = await loadResponse(params);
  checkResponse(response, url);
  return response.blob();
}
async function loadImage(params) {
  const blob = await loadBlob(params);
  const url = URL.createObjectURL(blob);
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = function() {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = function() {
      URL.revokeObjectURL(url);
      const normalizedParams = normalizeParams(params);
      reject(new Error(`Failed to load image: ${normalizedParams.url}`));
    };
    img.src = url;
  });
}
async function loadText(params) {
  const { url } = normalizeParams(params);
  const response = await loadResponse(params);
  checkResponse(response, url);
  return response.text();
}
async function loadJson(params) {
  const { url } = normalizeParams(params);
  const response = await loadResponse(params);
  checkResponse(response, url);
  return response.json();
}
async function loadArrayBuffer(params) {
  const { url } = normalizeParams(params);
  const response = await loadResponse(params);
  checkResponse(response, url);
  return response.arrayBuffer();
}
async function loadAudio(params) {
  const { url } = normalizeParams(params);
  return {
    type: "deferred_audio",
    url
  };
}
function loadFont(params) {
  const { url, config: config2 } = normalizeParams(params);
  const {
    name,
    family = name,
    style = "normal",
    weight = "normal"
  } = config2;
  const fontName = family || name;
  const font = new FontFace(fontName, `url(${url})`, { style, weight });
  return font.load().then(() => {
    document.fonts.add(font);
    return font;
  }).catch((error) => {
    throw new Error(`Failed to load font "${fontName}": ${error.message}`);
  });
}
async function loadSpritesheet(params) {
  const { url } = normalizeParams(params);
  const data = await loadJson({ url });
  const baseUrl = url.substring(0, url.lastIndexOf("/") + 1);
  const imagePromises = data.meta.images.map((imageInfo) => {
    const imageUrl = baseUrl + imageInfo.filename;
    return loadImage({ url: imageUrl });
  });
  const images = await Promise.all(imagePromises);
  return {
    data,
    images
  };
}
const loaders = {
  response: loadResponse,
  blob: loadBlob,
  image: loadImage,
  text: loadText,
  json: loadJson,
  arrayBuffer: loadArrayBuffer,
  audio: loadAudio,
  font: loadFont,
  spritesheet: loadSpritesheet,
  animator: loadJson
};
class TextureRegion {
  constructor(options = {}) {
    this.image = options.image || null;
    this.x = options.x ?? 0;
    this.y = options.y ?? 0;
    this.width = options.width ?? getImageWidth(this.image);
    this.height = options.height ?? getImageHeight(this.image);
  }
  get u0() {
    if (!this.image || !this.image.width) {
      return 0;
    }
    return this.x / this.image.width;
  }
  get v0() {
    if (!this.image || !this.image.height) {
      return 0;
    }
    return this.y / this.image.height;
  }
  get u1() {
    if (!this.image || !this.image.width) {
      return 1;
    }
    return (this.x + this.width) / this.image.width;
  }
  get v1() {
    if (!this.image || !this.image.height) {
      return 1;
    }
    return (this.y + this.height) / this.image.height;
  }
  get uvs() {
    return {
      u0: this.u0,
      v0: this.v0,
      u1: this.u1,
      v1: this.v1
    };
  }
  get bounds() {
    return {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height
    };
  }
  get valid() {
    return this.image !== null && this.width > 0 && this.height > 0;
  }
  static fromImage(image) {
    return new TextureRegion({
      image,
      x: 0,
      y: 0,
      width: (image == null ? void 0 : image.width) || 0,
      height: (image == null ? void 0 : image.height) || 0
    });
  }
  static fromFrame(image, frame) {
    return new TextureRegion({
      image,
      x: frame.x,
      y: frame.y,
      width: frame.w ?? frame.width,
      height: frame.h ?? frame.height
    });
  }
}
function getImageWidth(image) {
  return (image == null ? void 0 : image.width) || 0;
}
function getImageHeight(image) {
  return (image == null ? void 0 : image.height) || 0;
}
const DEFAULT_SIZE = 4096;
const MAX_SIZE = 4096;
const PADDING = 1;
class TextureAtlas {
  constructor(options = {}) {
    __privateAdd(this, _canvas, null);
    __privateAdd(this, _ctx, null);
    __privateAdd(this, _packer, null);
    __privateAdd(this, _regions, /* @__PURE__ */ new Map());
    __privateAdd(this, _dirty, false);
    this.width = options.width ?? DEFAULT_SIZE;
    this.height = options.height ?? DEFAULT_SIZE;
    this.padding = options.padding ?? PADDING;
    __privateSet(this, _canvas, createCanvas(this.width, this.height));
    __privateSet(this, _ctx, __privateGet(this, _canvas).getContext("2d"));
    __privateSet(this, _packer, new ShelfPacker(this.width, this.height, this.padding));
  }
  get canvas() {
    return __privateGet(this, _canvas);
  }
  get dirty() {
    return __privateGet(this, _dirty);
  }
  get full() {
    return __privateGet(this, _packer).full;
  }
  get regionCount() {
    return __privateGet(this, _regions).size;
  }
  markClean() {
    __privateSet(this, _dirty, false);
  }
  add(id, image) {
    if (__privateGet(this, _regions).has(id)) {
      return __privateGet(this, _regions).get(id);
    }
    const slot = __privateGet(this, _packer).pack(image.width, image.height);
    if (!slot) {
      return null;
    }
    __privateGet(this, _ctx).drawImage(image, slot.x, slot.y);
    const region = new TextureRegion({
      image: __privateGet(this, _canvas),
      x: slot.x,
      y: slot.y,
      width: image.width,
      height: image.height
    });
    __privateGet(this, _regions).set(id, region);
    __privateSet(this, _dirty, true);
    return region;
  }
  get(id) {
    return __privateGet(this, _regions).get(id) || null;
  }
  has(id) {
    return __privateGet(this, _regions).has(id);
  }
  getAllRegions() {
    return __privateGet(this, _regions);
  }
  canFit(width, height) {
    return __privateGet(this, _packer).canFit(width, height);
  }
  clear() {
    __privateGet(this, _ctx).clearRect(0, 0, this.width, this.height);
    __privateSet(this, _packer, new ShelfPacker(this.width, this.height, this.padding));
    __privateGet(this, _regions).clear();
    __privateSet(this, _dirty, true);
  }
  dispose() {
    __privateSet(this, _canvas, null);
    __privateSet(this, _ctx, null);
    __privateSet(this, _packer, null);
    __privateGet(this, _regions).clear();
  }
  static get DEFAULT_SIZE() {
    return DEFAULT_SIZE;
  }
  static get MAX_SIZE() {
    return MAX_SIZE;
  }
}
_canvas = new WeakMap();
_ctx = new WeakMap();
_packer = new WeakMap();
_regions = new WeakMap();
_dirty = new WeakMap();
function createCanvas(width, height) {
  if (typeof OffscreenCanvas !== "undefined") {
    return new OffscreenCanvas(width, height);
  }
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  return canvas;
}
const _TextureAtlasManager = class _TextureAtlasManager {
  constructor(options = {}) {
    __privateAdd(this, _TextureAtlasManager_instances);
    __privateAdd(this, _atlases, []);
    __privateAdd(this, _atlasGroups, /* @__PURE__ */ new Map());
    __privateAdd(this, _regionIndex, /* @__PURE__ */ new Map());
    __privateAdd(this, _atlasSize, TextureAtlas.DEFAULT_SIZE);
    __privateSet(this, _atlasSize, options.atlasSize ?? TextureAtlas.DEFAULT_SIZE);
  }
  get atlases() {
    return __privateGet(this, _atlases);
  }
  get atlasCount() {
    return __privateGet(this, _atlases).length;
  }
  get regionCount() {
    return __privateGet(this, _regionIndex).size;
  }
  add(id, image) {
    if (__privateGet(this, _regionIndex).has(id)) {
      return __privateGet(this, _regionIndex).get(id);
    }
    if (!isValidImage(image)) {
      return null;
    }
    if (isOversized(image, __privateGet(this, _atlasSize))) {
      return __privateMethod(this, _TextureAtlasManager_instances, addOversizedImage_fn).call(this, id, image);
    }
    const region = __privateMethod(this, _TextureAtlasManager_instances, addToAtlas_fn).call(this, id, image);
    if (region) {
      __privateGet(this, _regionIndex).set(id, region);
    }
    return region;
  }
  addBatch(images) {
    const results = /* @__PURE__ */ new Map();
    for (const [id, image] of Object.entries(images)) {
      const region = this.add(id, image);
      results.set(id, region);
    }
    return results;
  }
  addToNamedAtlas(atlasName, id, image) {
    if (__privateGet(this, _regionIndex).has(id)) {
      return __privateGet(this, _regionIndex).get(id);
    }
    if (!isValidImage(image)) {
      return null;
    }
    if (isOversized(image, __privateGet(this, _atlasSize))) {
      return __privateMethod(this, _TextureAtlasManager_instances, addOversizedImage_fn).call(this, id, image);
    }
    const region = __privateMethod(this, _TextureAtlasManager_instances, addToNamedAtlas_fn).call(this, atlasName, id, image);
    if (region) {
      __privateGet(this, _regionIndex).set(id, region);
    }
    return region;
  }
  addBatchToNamedAtlas(atlasName, images) {
    const results = /* @__PURE__ */ new Map();
    for (const [id, image] of Object.entries(images)) {
      const region = this.addToNamedAtlas(atlasName, id, image);
      results.set(id, region);
    }
    return results;
  }
  get(id) {
    return __privateGet(this, _regionIndex).get(id) || null;
  }
  has(id) {
    return __privateGet(this, _regionIndex).has(id);
  }
  getDirtyAtlases() {
    return __privateGet(this, _atlases).filter((atlas) => atlas.dirty);
  }
  markAllClean() {
    for (const atlas of __privateGet(this, _atlases)) {
      atlas.markClean();
    }
  }
  clear() {
    for (const atlas of __privateGet(this, _atlases)) {
      atlas.dispose();
    }
    __privateSet(this, _atlases, []);
    __privateGet(this, _atlasGroups).clear();
    __privateGet(this, _regionIndex).clear();
  }
  dispose() {
    this.clear();
  }
};
_atlases = new WeakMap();
_atlasGroups = new WeakMap();
_regionIndex = new WeakMap();
_atlasSize = new WeakMap();
_TextureAtlasManager_instances = new WeakSet();
addToAtlas_fn = function(id, image) {
  return __privateMethod(this, _TextureAtlasManager_instances, addToNamedAtlas_fn).call(this, _TextureAtlasManager.DEFAULT_ATLAS, id, image);
};
addToNamedAtlas_fn = function(atlasName, id, image) {
  let atlasGroup = __privateGet(this, _atlasGroups).get(atlasName);
  if (!atlasGroup) {
    atlasGroup = [];
    __privateGet(this, _atlasGroups).set(atlasName, atlasGroup);
  }
  for (const atlas of atlasGroup) {
    if (atlas.canFit(image.width, image.height)) {
      return atlas.add(id, image);
    }
  }
  const newAtlas = new TextureAtlas({
    width: __privateGet(this, _atlasSize),
    height: __privateGet(this, _atlasSize)
  });
  atlasGroup.push(newAtlas);
  __privateGet(this, _atlases).push(newAtlas);
  return newAtlas.add(id, image);
};
addOversizedImage_fn = function(id, image) {
  const region = TextureRegion.fromImage(image);
  __privateGet(this, _regionIndex).set(id, region);
  return region;
};
__publicField(_TextureAtlasManager, "DEFAULT_ATLAS", Symbol("default"));
let TextureAtlasManager = _TextureAtlasManager;
function isValidImage(image) {
  return image && image.width > 0 && image.height > 0;
}
function isOversized(image, atlasSize) {
  return image.width > atlasSize || image.height > atlasSize;
}
class Spritesheet {
  constructor(source) {
    __privateAdd(this, _Spritesheet_instances);
    this.images = source.images || [source.image];
    this.data = source.data || { frames: [], animations: {}, meta: {} };
    this.framesMap = /* @__PURE__ */ new Map();
    this.animations = this.data.animations || {};
    __privateMethod(this, _Spritesheet_instances, initializeFrames_fn).call(this, this.data.frames);
  }
  getFrame(name) {
    return this.framesMap.get(name) || null;
  }
  getRegion(name) {
    const frame = this.framesMap.get(name);
    return (frame == null ? void 0 : frame.region) || null;
  }
  getFrames(names) {
    if (!names) {
      return Array.from(this.framesMap.values());
    }
    if (!Array.isArray(names)) {
      return [];
    }
    return names.map((name) => this.getFrame(name)).filter(Boolean);
  }
  getRegions(names) {
    return this.getFrames(names).map((frame) => frame.region);
  }
  getAnimation(name) {
    return this.animations[name] || null;
  }
  getAnimationRegions(name) {
    const frameNames = this.getAnimation(name);
    if (!frameNames) {
      return [];
    }
    return this.getRegions(frameNames);
  }
  listFrames() {
    return Array.from(this.framesMap.keys());
  }
  listAnimations() {
    return Object.keys(this.animations);
  }
}
_Spritesheet_instances = new WeakSet();
initializeFrames_fn = function(frames) {
  if (!Array.isArray(frames)) {
    return;
  }
  for (const frameData of frames) {
    if (!frameData.filename) {
      continue;
    }
    const atlasIndex = frameData.atlas ?? 0;
    const image = this.images[atlasIndex];
    const region = new TextureRegion({
      image,
      x: frameData.frame.x,
      y: frameData.frame.y,
      width: frameData.frame.w,
      height: frameData.frame.h
    });
    this.framesMap.set(frameData.filename, {
      ...frameData,
      region,
      image
    });
  }
};
class TextureSystem extends PerkyModule {
  constructor(options = {}) {
    super(options);
    __privateAdd(this, _atlasManager, null);
    __privateAdd(this, _manualRegions, /* @__PURE__ */ new Map());
    __privateAdd(this, _spritesheets, /* @__PURE__ */ new Map());
    __privateSet(this, _atlasManager, new TextureAtlasManager({
      atlasSize: options.atlasSize
    }));
    this.fallback = options.fallback ?? null;
  }
  onInstall(host) {
    this.delegateTo(host, [
      "getRegion",
      "hasRegion",
      "addRegion",
      "addRegions",
      "registerManualAtlas",
      "getSpritesheet",
      "registerSpritesheet"
    ]);
  }
  get atlasManager() {
    return __privateGet(this, _atlasManager);
  }
  get atlases() {
    return __privateGet(this, _atlasManager).atlases;
  }
  get regionCount() {
    return __privateGet(this, _atlasManager).regionCount + __privateGet(this, _manualRegions).size;
  }
  getRegion(id) {
    var _a;
    const region = __privateGet(this, _manualRegions).get(id) || __privateGet(this, _atlasManager).get(id);
    if (region) {
      return region;
    }
    const source = (_a = this.fallback) == null ? void 0 : _a.call(this, id);
    if (source) {
      return TextureRegion.fromImage(source);
    }
    return null;
  }
  hasRegion(id) {
    return __privateGet(this, _manualRegions).has(id) || __privateGet(this, _atlasManager).has(id);
  }
  addRegion(id, image) {
    if (this.hasRegion(id)) {
      return this.getRegion(id);
    }
    return __privateGet(this, _atlasManager).add(id, image);
  }
  addRegions(images) {
    return __privateGet(this, _atlasManager).addBatch(images);
  }
  registerManualAtlas(id, image, frames) {
    for (const [frameName, frameData] of Object.entries(frames)) {
      const regionId = `${id}:${frameName}`;
      const region = TextureRegion.fromFrame(image, frameData);
      __privateGet(this, _manualRegions).set(regionId, region);
    }
  }
  registerSpritesheet(id, source) {
    const spritesheet = new Spritesheet(source);
    __privateGet(this, _spritesheets).set(id, spritesheet);
    return spritesheet;
  }
  getSpritesheet(id) {
    return __privateGet(this, _spritesheets).get(id) || null;
  }
  addFromAsset(asset) {
    var _a;
    if (!isImageAsset(asset) || !asset.source) {
      return null;
    }
    if (this.hasRegion(asset.id)) {
      return this.getRegion(asset.id);
    }
    if (((_a = asset.config) == null ? void 0 : _a.atlas) === false) {
      const region = TextureRegion.fromImage(asset.source);
      __privateGet(this, _manualRegions).set(asset.id, region);
      return region;
    }
    return this.addRegion(asset.id, asset.source);
  }
  buildFromAssets(assets2) {
    var _a;
    const atlasGroups = /* @__PURE__ */ new Map();
    const defaultImages = {};
    for (const asset of assets2) {
      if (!isImageAsset(asset) || !asset.source) {
        continue;
      }
      const atlasName = (_a = asset.config) == null ? void 0 : _a.atlas;
      if (atlasName === false) {
        __privateGet(this, _manualRegions).set(asset.id, TextureRegion.fromImage(asset.source));
      } else if (atlasName) {
        if (!atlasGroups.has(atlasName)) {
          atlasGroups.set(atlasName, {});
        }
        atlasGroups.get(atlasName)[asset.id] = asset.source;
      } else {
        defaultImages[asset.id] = asset.source;
      }
    }
    for (const [atlasName, images] of atlasGroups) {
      __privateGet(this, _atlasManager).addBatchToNamedAtlas(atlasName, images);
    }
    return this.addRegions(defaultImages);
  }
  getDirtyAtlases() {
    return __privateGet(this, _atlasManager).getDirtyAtlases();
  }
  markAllClean() {
    __privateGet(this, _atlasManager).markAllClean();
  }
  clear() {
    __privateGet(this, _atlasManager).clear();
    __privateGet(this, _manualRegions).clear();
    __privateGet(this, _spritesheets).clear();
  }
  onDispose() {
    this.clear();
  }
}
_atlasManager = new WeakMap();
_manualRegions = new WeakMap();
_spritesheets = new WeakMap();
__publicField(TextureSystem, "$category", "textureSystem");
function isImageAsset(asset) {
  return asset.type === "image";
}
const version = "0.0.1";
const config = { "name": "Den", "audio": { "masterVolume": 0.5, "channels": { "sfx": { "muted": true, "volume": 0.5 }, "ambiance": { "muted": true }, "music": { "muted": false } } }, "studio": { "animator": { "unitsInView": { "width": 7, "height": 5 }, "background": "background" } } };
const assets = { "background": { "type": "image", "url": "./assets/images/background.png", "config": { "atlas": false } }, "wolf": { "type": "image", "url": "./assets/images/wolf.png", "config": { "atlas": "characters" } }, "wolf_right": { "type": "image", "url": "./assets/images/wolf_right.png", "config": { "atlas": "characters" } }, "wolf_up": { "type": "image", "url": "./assets/images/wolf_up.png", "config": { "atlas": "characters" } }, "wolf_down": { "type": "image", "url": "./assets/images/wolf_down.png", "config": { "atlas": "characters" } }, "pig": { "type": "image", "url": "./assets/images/pig.png", "config": { "atlas": "characters" } }, "red": { "type": "image", "url": "./assets/images/red.png", "config": { "atlas": "characters" } }, "granny": { "type": "image", "url": "./assets/images/granny.png", "config": { "atlas": "characters" } }, "amalgam": { "type": "image", "url": "./assets/images/amalgam.png", "config": { "atlas": "characters" } }, "brick": { "type": "image", "url": "./assets/images/brick.png", "config": { "atlas": "projectiles" } }, "pie": { "type": "image", "url": "./assets/images/pie.png", "config": { "atlas": "projectiles" } }, "cake": { "type": "image", "url": "./assets/images/cake.png", "config": { "atlas": "projectiles" } }, "fireball": { "type": "image", "url": "./assets/images/fireball.png", "config": { "atlas": "projectiles" } }, "redSpritesheet": { "type": "spritesheet", "url": "./assets/spritesheets/red.json" }, "redAnimator": { "type": "animator", "url": "./assets/animators/red_animator.json" }, "click": { "type": "audio", "url": "./assets/audio/click.ogg", "tags": ["sfx"] }, "howl": { "type": "audio", "url": "./assets/audio/howl.ogg", "tags": ["sfx"] }, "throw": { "type": "audio", "url": "./assets/audio/throw.ogg", "tags": ["sfx"] }, "wound": { "type": "audio", "url": "./assets/audio/wound.ogg", "tags": ["sfx"] }, "music": { "type": "audio", "url": "./assets/audio/music.ogg", "tags": ["music"] } };
const manifestData = {
  version,
  config,
  assets
};
const sheetCache = /* @__PURE__ */ new WeakMap();
const _PerkyElement = class _PerkyElement extends HTMLElement {
  constructor() {
    var _a;
    super();
    __privateAdd(this, _PerkyElement_instances);
    __privateAdd(this, _listeners, []);
    this.attachShadow({ mode: "open" });
    (_a = this.onInit) == null ? void 0 : _a.call(this);
  }
  connectedCallback() {
    var _a;
    __privateMethod(this, _PerkyElement_instances, adoptStyles_fn).call(this);
    (_a = this.onConnected) == null ? void 0 : _a.call(this);
  }
  disconnectedCallback() {
    var _a;
    __privateMethod(this, _PerkyElement_instances, cleanListeners_fn).call(this);
    (_a = this.onDisconnected) == null ? void 0 : _a.call(this);
  }
  listenTo(target, eventName, callback) {
    target.on(eventName, callback);
    __privateGet(this, _listeners).push({ target, eventName, callback });
  }
  cleanListeners() {
    __privateMethod(this, _PerkyElement_instances, cleanListeners_fn).call(this);
  }
};
_listeners = new WeakMap();
_PerkyElement_instances = new WeakSet();
adoptStyles_fn = function() {
  const sheets = __privateMethod(this, _PerkyElement_instances, collectStyleSheets_fn).call(this);
  adoptStyleSheets(this.shadowRoot, ...sheets);
};
collectStyleSheets_fn = function() {
  const sheets = [];
  let proto = this.constructor;
  while (proto && proto !== _PerkyElement && proto !== HTMLElement) {
    const protoSheets = getOrCreateSheets(proto);
    if (protoSheets.length > 0) {
      sheets.unshift(...protoSheets);
    }
    proto = Object.getPrototypeOf(proto);
  }
  return sheets;
};
cleanListeners_fn = function() {
  for (const { target, eventName, callback } of __privateGet(this, _listeners)) {
    target.off(eventName, callback);
  }
  __privateSet(this, _listeners, []);
};
let PerkyElement = _PerkyElement;
function toSheet(style) {
  if (typeof style === "string") {
    return createStyleSheet(style);
  }
  return style;
}
function getOrCreateSheets(ctor) {
  if (!Object.hasOwn(ctor, "styles") || !ctor.styles) {
    return [];
  }
  if (!sheetCache.has(ctor)) {
    const styles = ctor.styles;
    const sheets = Array.isArray(styles) ? styles.map((s) => toSheet(s)) : [toSheet(styles)];
    sheetCache.set(ctor, sheets);
  }
  return sheetCache.get(ctor);
}
const editorThemeVariables = `
    --bg-primary: #1a1a1e;
    --bg-secondary: #24242a;
    --bg-hover: #2e2e36;
    --bg-selected: #3a3a44;

    --fg-primary: #e4e4e8;
    --fg-secondary: #9898a0;
    --fg-muted: #6a6a72;

    --accent: #6b9fff;

    --status-success: #4ade80;
    --status-error: #f87171;
    --status-warning: #f59e0b;
    --status-muted: #6b7280;

    --status-started: #4ade80;
    --status-stopped: #6b7280;
    --status-disposed: #f87171;

    --hl-keyword: #6b9fff;
    --hl-string: #4ade80;
    --hl-comment: #6a6a72;
    --hl-constant: #f59e0b;

    --border: #38383e;
    --font-mono: "Source Code Pro", "SF Mono", "Monaco", monospace;
`;
const editorThemeVariablesLight = `
    --bg-primary: #f5f5f7;
    --bg-secondary: #eaeaec;
    --bg-hover: #e0e0e4;
    --bg-selected: #d4d4d8;

    --fg-primary: #1a1a1e;
    --fg-secondary: #4a4a52;
    --fg-muted: #8a8a92;

    --accent: #0066cc;

    --status-success: #16a34a;
    --status-error: #dc2626;
    --status-warning: #d97706;
    --status-muted: #9ca3af;

    --status-started: #16a34a;
    --status-stopped: #9ca3af;
    --status-disposed: #dc2626;

    --hl-keyword: #0066cc;
    --hl-string: #16a34a;
    --hl-comment: #8a8a92;
    --hl-constant: #d97706;

    --border: #c8c8cc;
    --font-mono: "Source Code Pro", "SF Mono", "Monaco", monospace;
`;
const editorBaseStyles = `
    .hidden {
        display: none !important;
    }
`;
const editorScrollbarStyles = `
    ::-webkit-scrollbar {
        width: 6px;
    }

    ::-webkit-scrollbar-track {
        background: var(--bg-primary);
    }

    ::-webkit-scrollbar-thumb {
        background: var(--border);
        border-radius: 3px;
    }
`;
const editorButtonStyles = `
    .editor-btn {
        appearance: none;
        background: var(--bg-hover);
        border: none;
        border-radius: 4px;
        color: var(--fg-secondary);
        padding: 4px 8px;
        cursor: pointer;
        font-family: var(--font-mono);
        font-size: 11px;
        transition: background 0.15s, color 0.15s;
    }

    .editor-btn:hover {
        background: var(--bg-selected);
        color: var(--fg-primary);
    }

    .editor-btn.primary {
        background: var(--accent);
        color: var(--bg-primary);
    }

    .editor-btn.primary:hover {
        filter: brightness(1.1);
    }

    .editor-btn.success {
        background: var(--status-success);
        color: var(--bg-primary);
    }
`;
const editorHeaderStyles = `
    .editor-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px 12px;
        background: var(--bg-secondary);
        border-bottom: 1px solid var(--border);
        cursor: pointer;
        user-select: none;
    }

    .editor-header-title {
        display: flex;
        align-items: center;
        gap: 8px;
        color: var(--fg-primary);
        font-weight: 500;
        font-size: 12px;
    }

    .editor-header-buttons {
        display: flex;
        align-items: center;
        gap: 4px;
    }
`;
const layoutVariables = `
    --bg-input: #24242a;

    --accent-hover: #7daaff;

    --border-focus: var(--accent);


    --spacing-xs: 4px;
    --spacing-sm: 8px;
    --spacing-md: 12px;
    --spacing-lg: 16px;
    --spacing-xl: 24px;


    --touch-target: 44px;
    --touch-target-compact: 32px;


    --input-height: 32px;
    --input-height-compact: 28px;
    --input-height-touch: 44px;


    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 12px;


    --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    --font-size-xs: 10px;
    --font-size-sm: 11px;
    --font-size-md: 12px;
    --font-size-lg: 14px;


    --transition-fast: 0.1s ease;
    --transition-normal: 0.15s ease;
    --transition-slow: 0.25s ease;


    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.2);
    --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.3);
    --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.4);
`;
const layoutVariablesLight = `
    --bg-input: #ffffff;

    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.1);
    --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.15);
    --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.2);
`;
const themeColorsCSS = `
    :host {
        ${editorThemeVariables}
    }

    @media (prefers-color-scheme: light) {
        :host([theme="auto"]) {
            ${editorThemeVariablesLight}
        }
    }

    :host([theme="light"]) {
        ${editorThemeVariablesLight}
    }
`;
const themeLayoutCSS = `
    :host {
        ${layoutVariables}
    }

    :host([context="studio"]) {
        --input-height: var(--input-height-touch);
        --font-size-md: var(--font-size-lg);
        --spacing-sm: var(--spacing-md);
        --radius-md: var(--radius-lg);
    }

    :host([context="editor"]) {
        --input-height: var(--input-height-compact);
        --font-size-md: var(--font-size-sm);
    }

    :host([compact]) {
        --input-height: var(--input-height-compact);
        --font-size-md: var(--font-size-sm);
        --spacing-sm: var(--spacing-xs);
    }

    @media (prefers-color-scheme: light) {
        :host([theme="auto"]) {
            ${layoutVariablesLight}
        }
    }

    :host([theme="light"]) {
        ${layoutVariablesLight}
    }
`;
const themeCSS = [themeColorsCSS, themeLayoutCSS];
const resetCSS = `
    *, *::before, *::after {
        box-sizing: border-box;
    }

    :host {
        display: block;
        font-family: var(--font-mono);
        font-size: var(--font-size-md);
        color: var(--fg-primary);
        line-height: 1.4;
    }

    :host([hidden]) {
        display: none !important;
    }


    ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: var(--border);
        border-radius: 3px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: var(--fg-muted);
    }


    :focus-visible {
        outline: 2px solid var(--accent);
        outline-offset: 2px;
    }

    :focus:not(:focus-visible) {
        outline: none;
    }
`;
class EditorComponent extends PerkyElement {
}
__publicField(EditorComponent, "styles", [...themeCSS, resetCSS]);
const ICONS = {
  inspect: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',
  clipboard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>',
  action: '<svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>',
  start: '<svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>',
  pause: '<svg viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>',
  stop: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>',
  close: '<svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',
  spawn: '<svg viewBox="0 0 24 24"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>',
  dispose: '<svg viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>',
  apps: '<svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>',
  explorer: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>',
  logger: '<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>',
  terminal: '<svg viewBox="0 0 24 24"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>',
  chevronLeft: '<svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"></polyline></svg>',
  history: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>',
  crow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M10 5 L14 5"/>
        <path d="M11 5 L11.5 2.5 H13.5 L13 5"/>
        <circle cx="10" cy="10" r="2" />
        <path d="M 12 5 C 9 5 8 7 8 9" />
        <path d="M 8 9 L 3 11 L 8 13" />
        <path d="M 8 13 C 9 16 11 19 14 21" />
        <path d="M 14 5 C 16 6 17 12 17 20" />
    </svg>`,
  volume: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>',
  volumeMuted: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>',
  audio: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>',
  layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>',
  system: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 22 12 12 22 2 12"></polygon></svg>',
  wrench: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>',
  flask: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6v5.5l4.5 9a2 2 0 0 1-1.8 2.5H6.3a2 2 0 0 1-1.8-2.5L9 8.5V3z"></path><line x1="9" y1="3" x2="15" y2="3"></line></svg>',
  clapperboard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8H4z"></path><path d="M4 11V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5"></path><path d="M8 4l2 7"></path><path d="M14 4l2 7"></path></svg>',
  scenery: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="2" y1="18" x2="22" y2="18"></line><line x1="6" y1="18" x2="6" y2="10"></line><line x1="12" y1="18" x2="12" y2="8"></line><line x1="18" y1="18" x2="18" y2="12"></line><circle cx="17" cy="5" r="2"></circle></svg>',
  grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="9" y1="3" x2="9" y2="21"></line><line x1="15" y1="3" x2="15" y2="21"></line><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line></svg>',
  folder: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>',
  link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>',
  unlink: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18.84 12.25l1.72-1.71a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M5.17 11.75l-1.71 1.71a5 5 0 0 0 7.07 7.07l1.71-1.71"></path><line x1="8" y1="2" x2="8" y2="5"></line><line x1="2" y1="8" x2="5" y2="8"></line><line x1="16" y1="19" x2="16" y2="22"></line><line x1="19" y1="16" x2="22" y2="16"></line></svg>',
  image: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>',
  film: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>'
};
function blobToArrayBuffer(blob) {
  if (typeof blob.arrayBuffer === "function") {
    return blob.arrayBuffer();
  }
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsArrayBuffer(blob);
  });
}
async function compress(blob) {
  if (typeof CompressionStream === "undefined") {
    return blob;
  }
  if (typeof blob.stream !== "function") {
    const buffer = await blobToArrayBuffer(blob);
    const stream2 = new Response(buffer).body.pipeThrough(new CompressionStream("gzip"));
    return new Response(stream2).blob();
  }
  const stream = blob.stream().pipeThrough(new CompressionStream("gzip"));
  return new Response(stream).blob();
}
async function decompress(blob) {
  if (typeof DecompressionStream === "undefined") {
    return blob;
  }
  if (typeof blob.stream !== "function") {
    const buffer = await blobToArrayBuffer(blob);
    const stream2 = new Response(buffer).body.pipeThrough(new DecompressionStream("gzip"));
    return new Response(stream2).blob();
  }
  const stream = blob.stream().pipeThrough(new DecompressionStream("gzip"));
  return new Response(stream).blob();
}
async function pack(files, { compress: shouldCompress = true } = {}) {
  const header = {
    files: files.map((f) => ({
      name: f.name,
      size: f.blob.size,
      type: f.blob.type
    }))
  };
  const headerBytes = new TextEncoder().encode(JSON.stringify(header));
  const headerSize = new Uint32Array([headerBytes.length]);
  const blob = new Blob([headerSize, headerBytes, ...files.map((f) => f.blob)]);
  return shouldCompress ? compress(blob) : blob;
}
async function unpack(blob, { compressed = true } = {}) {
  const data = compressed ? await decompress(blob) : blob;
  const buffer = await blobToArrayBuffer(data);
  const headerSize = new Uint32Array(buffer, 0, 1)[0];
  const headerBytes = new Uint8Array(buffer, 4, headerSize);
  const header = JSON.parse(new TextDecoder().decode(headerBytes));
  let offset = 4 + headerSize;
  return header.files.map((file) => {
    const fileBlob = new Blob([buffer.slice(offset, offset + file.size)], { type: file.type });
    offset += file.size;
    return { name: file.name, blob: fileBlob };
  });
}
const DB_PREFIX = "perky-";
const STORE_NAME = "resources";
const DB_VERSION = 1;
const META_FILENAME = "meta.json";
class PerkyStore {
  constructor(dbName = "studio") {
    __privateAdd(this, _db, null);
    __privateAdd(this, _dbName);
    __privateSet(this, _dbName, `${DB_PREFIX}${dbName}`);
  }
  async open() {
    if (__privateGet(this, _db)) {
      return __privateGet(this, _db);
    }
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(__privateGet(this, _dbName), DB_VERSION);
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          const store = db.createObjectStore(STORE_NAME, { keyPath: "id" });
          store.createIndex("type", "type", { unique: false });
        }
      };
      request.onsuccess = (event) => {
        __privateSet(this, _db, event.target.result);
        resolve(__privateGet(this, _db));
      };
      request.onerror = () => {
        reject(new Error("Failed to open database"));
      };
    });
  }
  async list(type = null) {
    const db = await this.open();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, "readonly");
      const store = transaction.objectStore(STORE_NAME);
      const request = type ? store.index("type").getAll(type) : store.getAll();
      request.onsuccess = () => {
        const items = request.result.map((item) => ({
          id: item.id,
          type: item.type,
          name: item.name,
          createdAt: item.createdAt,
          updatedAt: item.updatedAt
        }));
        resolve(items);
      };
      request.onerror = () => {
        reject(new Error("Failed to list resources"));
      };
    });
  }
  async get(id) {
    const db = await this.open();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, "readonly");
      const store = transaction.objectStore(STORE_NAME);
      const request = store.get(id);
      request.onsuccess = async () => {
        const item = request.result;
        if (!item) {
          resolve(null);
          return;
        }
        const allFiles = await unpack(item.blob);
        const files = allFiles.filter((f) => f.name !== META_FILENAME);
        resolve({
          id: item.id,
          type: item.type,
          name: item.name,
          files,
          createdAt: item.createdAt,
          updatedAt: item.updatedAt
        });
      };
      request.onerror = () => {
        reject(new Error("Failed to get resource"));
      };
    });
  }
  async save(id, data) {
    const db = await this.open();
    const { type, name, files } = data;
    if (!type) {
      throw new Error("Resource type is required");
    }
    const now = Date.now();
    const meta = {
      type,
      name: name || id,
      version: 1,
      updatedAt: now
    };
    const allFiles = [
      { name: META_FILENAME, blob: new Blob([JSON.stringify(meta)], { type: "application/json" }) },
      ...files
    ];
    const blob = await pack(allFiles);
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, "readwrite");
      const store = transaction.objectStore(STORE_NAME);
      const getRequest = store.get(id);
      getRequest.onsuccess = () => {
        const existing = getRequest.result;
        const record = {
          id,
          type,
          name: name || id,
          blob,
          createdAt: (existing == null ? void 0 : existing.createdAt) || now,
          updatedAt: now
        };
        const putRequest = store.put(record);
        putRequest.onsuccess = () => {
          resolve({ id, type, name: record.name });
        };
        putRequest.onerror = () => {
          reject(new Error("Failed to save resource"));
        };
      };
      getRequest.onerror = () => {
        reject(new Error("Failed to save resource"));
      };
    });
  }
  async delete(id) {
    const db = await this.open();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, "readwrite");
      const store = transaction.objectStore(STORE_NAME);
      const request = store.delete(id);
      request.onsuccess = () => {
        resolve();
      };
      request.onerror = () => {
        reject(new Error("Failed to delete resource"));
      };
    });
  }
  async export(id) {
    const db = await this.open();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, "readonly");
      const store = transaction.objectStore(STORE_NAME);
      const request = store.get(id);
      request.onsuccess = () => {
        const item = request.result;
        if (!item) {
          reject(new Error("Resource not found"));
          return;
        }
        const url = URL.createObjectURL(item.blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${item.name}.perky`;
        a.click();
        URL.revokeObjectURL(url);
        resolve();
      };
      request.onerror = () => {
        reject(new Error("Failed to export resource"));
      };
    });
  }
  async import(file) {
    const blob = file instanceof Blob ? file : new Blob([await file.arrayBuffer()]);
    const allFiles = await unpack(blob);
    const metaFile = allFiles.find((f) => f.name === META_FILENAME);
    if (!metaFile) {
      throw new Error("Invalid .perky file: missing meta.json");
    }
    const metaText = await blobToText(metaFile.blob);
    const meta = JSON.parse(metaText);
    if (!meta.type || !meta.name) {
      throw new Error("Invalid .perky file: meta.json must have type and name");
    }
    const files = allFiles.filter((f) => f.name !== META_FILENAME);
    const id = `${meta.name}${capitalize(meta.type)}`;
    await this.save(id, {
      type: meta.type,
      name: meta.name,
      files
    });
    return { id, type: meta.type, name: meta.name };
  }
}
_db = new WeakMap();
_dbName = new WeakMap();
function blobToText(blob) {
  if (typeof blob.text === "function") {
    return blob.text();
  }
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsText(blob);
  });
}
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
export {
  EditorComponent as E,
  ICONS as I,
  Manifest as M,
  PerkyModule as P,
  Registry as R,
  SourceManager as S,
  TextureSystem as T,
  editorButtonStyles as a,
  editorBaseStyles as b,
  editorHeaderStyles as c,
  PerkyStore as d,
  editorScrollbarStyles as e,
  TextureRegion as f,
  loaders as l,
  manifestData as m
};
