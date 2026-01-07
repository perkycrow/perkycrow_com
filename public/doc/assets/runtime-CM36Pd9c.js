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
let currentBlocks = null;
let currentSetup = null;
function doc(title, options, fn) {
  const opts = typeof options === "function" ? {} : options;
  const callback = typeof options === "function" ? options : fn;
  const docData = {
    title,
    options: opts,
    blocks: []
  };
  currentBlocks = docData.blocks;
  currentSetup = null;
  callback();
  currentBlocks = null;
  currentSetup = null;
  return docData;
}
function section(title, fn) {
  if (!currentBlocks) {
    throw new Error("section() must be called inside doc()");
  }
  const sectionData = {
    type: "section",
    title,
    blocks: [],
    setup: null
  };
  const parentBlocks = currentBlocks;
  const parentSetup = currentSetup;
  currentBlocks = sectionData.blocks;
  currentSetup = null;
  fn();
  sectionData.setup = currentSetup;
  currentBlocks = parentBlocks;
  currentSetup = parentSetup;
  currentBlocks.push(sectionData);
}
function setup(fn) {
  if (!currentBlocks) {
    throw new Error("setup() must be called inside doc() or section()");
  }
  currentSetup = {
    source: extractFunctionBody(fn),
    fn
  };
}
function text(content) {
  if (!currentBlocks) {
    throw new Error("text() must be called inside doc()");
  }
  currentBlocks.push({
    type: "text",
    content: dedent(content)
  });
}
function code(title, fn) {
  if (!currentBlocks) {
    throw new Error("code() must be called inside doc()");
  }
  currentBlocks.push({
    type: "code",
    title,
    source: extractFunctionBody(fn)
  });
}
function action(title, fn) {
  if (!currentBlocks) {
    throw new Error("action() must be called inside doc()");
  }
  currentBlocks.push({
    type: "action",
    title,
    source: extractFunctionBody(fn),
    fn
  });
}
const CONTAINER_PRESETS = {
  interactive: {
    tabIndex: 0,
    style: {
      outline: "none",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "#1a1a2e",
      color: "#fff",
      fontFamily: "monospace",
      userSelect: "none"
    }
  },
  "interactive-alt": {
    tabIndex: 0,
    style: {
      outline: "none",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "#16213e",
      color: "#fff",
      fontFamily: "monospace",
      userSelect: "none"
    }
  },
  inspector: {
    style: {
      padding: "12px",
      background: "#1a1a1e",
      overflow: "auto"
    }
  },
  centered: {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#1a1a1e"
    }
  }
};
function container(options, fn) {
  if (!currentBlocks) {
    throw new Error("container() must be called inside doc()");
  }
  const opts = typeof options === "function" ? {} : options;
  const callback = typeof options === "function" ? options : fn;
  currentBlocks.push({
    type: "container",
    width: opts.width || null,
    height: opts.height || 300,
    title: opts.title || null,
    preset: opts.preset || null,
    scrollable: opts.scrollable || false,
    source: extractFunctionBody(callback),
    fn: callback
  });
}
function applyContainerPreset(element, presetName) {
  const preset = CONTAINER_PRESETS[presetName];
  if (!preset) {
    return;
  }
  if (preset.tabIndex !== void 0) {
    element.tabIndex = preset.tabIndex;
  }
  if (preset.style) {
    Object.assign(element.style, preset.style);
  }
}
function extractFunctionBody(fn) {
  const source = fn.toString();
  let body = null;
  const arrowMatch = source.match(/^\s*\(?[^)]*\)?\s*=>\s*\{([\s\S]*)\}\s*$/);
  if (arrowMatch) {
    body = arrowMatch[1];
  }
  if (!body) {
    const functionMatch = source.match(/^function\s*\w*\s*\([^)]*\)\s*\{([\s\S]*)\}\s*$/);
    if (functionMatch) {
      body = functionMatch[1];
    }
  }
  if (!body) {
    const arrowExpressionMatch = source.match(/^\s*\(?[^)]*\)?\s*=>\s*(.+)$/);
    if (arrowExpressionMatch) {
      return arrowExpressionMatch[1].trim();
    }
  }
  if (!body) {
    return source;
  }
  body = body.split("\n").filter((line) => !line.trim().startsWith("ctx.setApp(")).join("\n");
  return dedent(body);
}
function dedent(str) {
  let lines = str.split("\n");
  while (lines.length > 0 && lines[0].trim() === "") {
    lines.shift();
  }
  while (lines.length > 0 && lines[lines.length - 1].trim() === "") {
    lines.pop();
  }
  if (lines.length === 0) {
    return "";
  }
  const nonEmptyLines = lines.filter((line) => line.trim());
  if (nonEmptyLines.length === 0) {
    return lines.join("\n");
  }
  const minIndent = Math.min(
    ...nonEmptyLines.map((line) => {
      const match = line.match(/^(\s*)/);
      return match ? match[1].length : 0;
    })
  );
  if (minIndent === 0) {
    return lines.join("\n");
  }
  return lines.map((line) => line.slice(minIndent)).join("\n");
}
export {
  Notifier as N,
  applyContainerPreset as a,
  setup as b,
  code as c,
  doc as d,
  action as e,
  container as f,
  section as s,
  text as t
};
