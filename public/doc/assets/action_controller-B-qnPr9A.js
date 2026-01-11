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
var _actions, _actionList;
import { P as PerkyModule } from "./perky_module-BJShv6RO.js";
import { R as Registry } from "./registry-DalNpkO9.js";
const _ActionController = class _ActionController extends PerkyModule {
  constructor(options = {}) {
    super(options);
    __privateAdd(this, _actions, new Registry());
    __privateAdd(this, _actionList, []);
    this.context = {};
    __privateSet(this, _actionList, extractPrototypeMethods(this));
  }
  addAction(actionName, action) {
    if (!__privateGet(this, _actionList).includes(actionName)) {
      __privateGet(this, _actionList).push(actionName);
    }
    return __privateGet(this, _actions).set(actionName, action);
  }
  getAction(actionName) {
    return __privateGet(this, _actions).get(actionName);
  }
  removeAction(actionName) {
    return __privateGet(this, _actions).delete(actionName);
  }
  hasAction(actionName) {
    return this.getAction(actionName) !== void 0 || typeof this[actionName] === "function";
  }
  shouldPropagate(actionName) {
    const ControllerClass = this.constructor;
    return ControllerClass.propagable && Array.isArray(ControllerClass.propagable) ? ControllerClass.propagable.includes(actionName) : false;
  }
  listActions() {
    return [...__privateGet(this, _actionList)];
  }
  listActionsWithParams() {
    const result = [];
    for (const actionName of __privateGet(this, _actionList)) {
      const action = this.getAction(actionName) || this[actionName];
      const params = typeof action === "function" ? extractFunctionParams(action) : [];
      result.push({ name: actionName, params });
    }
    return result;
  }
  execute(actionName, ...args) {
    const action = this.getAction(actionName) || this[actionName];
    if (typeof action === "function") {
      action.call(this, ...args);
    }
    this.emit(actionName, ...args);
    this.emit("action", actionName, ...args);
  }
  static normalizeBindings(controllerName) {
    const bindings = this.bindings;
    const normalized = [];
    for (const [actionName, bindingDef] of Object.entries(bindings)) {
      const bindingConfigs = normalizeBindingDefinition(bindingDef);
      for (const config of bindingConfigs) {
        normalized.push({
          action: actionName,
          key: config.key,
          scoped: config.scoped ?? false,
          eventType: config.eventType ?? "pressed",
          controllerName: config.scoped ? controllerName : null
        });
      }
    }
    return normalized;
  }
};
_actions = new WeakMap();
_actionList = new WeakMap();
__publicField(_ActionController, "propagable", []);
__publicField(_ActionController, "bindings", {});
__publicField(_ActionController, "$category", "actionController");
__publicField(_ActionController, "actionControllerMethods", _ActionController.perkyModuleMethods.concat([
  "addAction",
  "getAction",
  "removeAction",
  "hasAction",
  "shouldPropagate",
  "listActions",
  "listActionsWithParams",
  "execute",
  "context"
]));
let ActionController = _ActionController;
const internalMethods = new Set(ActionController.actionControllerMethods);
function isInternalMethod(methodName) {
  return internalMethods.has(methodName);
}
const ignoredPrefixes = ["_", "#", "on", "update", "get", "check"];
function extractPrototypeMethods(instance) {
  const methods = [];
  const proto = Object.getPrototypeOf(instance);
  const propertyNames = Object.getOwnPropertyNames(proto);
  for (const method of propertyNames) {
    if (method === "constructor") {
      continue;
    }
    if (ignoredPrefixes.some((prefix) => method.startsWith(prefix))) {
      continue;
    }
    if (isInternalMethod(method)) {
      continue;
    }
    const descriptor = Object.getOwnPropertyDescriptor(proto, method);
    if (descriptor && typeof descriptor.value === "function") {
      methods.push(method);
    }
  }
  return methods;
}
function normalizeBindingDefinition(bindingDef) {
  if (typeof bindingDef === "string") {
    return [{ key: bindingDef }];
  }
  if (Array.isArray(bindingDef)) {
    return bindingDef.map((key) => ({ key }));
  }
  if (typeof bindingDef === "object" && bindingDef !== null) {
    const keys = Array.isArray(bindingDef.keys) ? bindingDef.keys : [bindingDef.keys];
    return keys.map((key) => ({
      key,
      scoped: bindingDef.scoped ?? false,
      eventType: bindingDef.eventType ?? "pressed"
    }));
  }
  return [];
}
function extractFunctionParams(fn) {
  const fnStr = fn.toString();
  const match = fnStr.match(/^[^(]*\(([^)]*)\)/);
  if (!match || !match[1]) {
    return [];
  }
  return match[1].split(",").map((p) => {
    const trimmed = p.trim();
    if (trimmed.startsWith("...")) {
      return null;
    }
    const parts = trimmed.split("=").map((s) => s.trim());
    const name = parts[0];
    const defaultValue = parts[1] ?? null;
    return { name, defaultValue };
  }).filter((p) => p && p.name);
}
export {
  ActionController as A
};
