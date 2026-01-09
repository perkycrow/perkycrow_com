var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _indexes, _Registry_instances, handleSet_fn, handleDelete_fn, addToIndex_fn, removeFromIndex_fn;
import { O as ObservableMap } from "./observable_map-DbdPsVuP.js";
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
export {
  Registry as R
};
