var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _map, _values, _keyByValue, _ObservableMap_instances, removeFromValues_fn;
import { N as Notifier } from "./runtime-D8el-yK6.js";
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
export {
  ObservableMap as O
};
