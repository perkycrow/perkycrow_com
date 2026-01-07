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
var _listenersFor, _externalListeners;
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
export {
  Notifier as N
};
