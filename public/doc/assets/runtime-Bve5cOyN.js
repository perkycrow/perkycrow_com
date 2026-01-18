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
var _listenersFor, _externalListeners, _history, _maxHistory, _consoleOutput, _Logger_instances, record_fn, trimHistory_fn, emit_fn;
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
function dedent(str, options = {}) {
  const { trimEmptyLines = true, preserveFirstLine = false } = options;
  let lines = str.split("\n");
  if (trimEmptyLines) {
    lines = trimLines(lines);
  }
  if (lines.length === 0) {
    return "";
  }
  const minIndent = getMinIndent(lines, preserveFirstLine);
  if (minIndent === 0) {
    return lines.join("\n");
  }
  return removeIndent(lines, minIndent, preserveFirstLine);
}
function trimLines(lines) {
  while (lines.length > 0 && lines[0].trim() === "") {
    lines.shift();
  }
  while (lines.length > 0 && lines[lines.length - 1].trim() === "") {
    lines.pop();
  }
  return lines;
}
function getMinIndent(lines, preserveFirstLine) {
  const linesToCheck = preserveFirstLine ? lines.slice(1) : lines;
  const nonEmptyLines = linesToCheck.filter((line) => line.trim());
  if (nonEmptyLines.length === 0) {
    return 0;
  }
  return Math.min(
    ...nonEmptyLines.map((line) => {
      const match = line.match(/^(\s*)/);
      return match ? match[1].length : 0;
    })
  );
}
function removeIndent(lines, indent, preserveFirstLine) {
  return lines.map((line, index) => {
    if (preserveFirstLine && index === 0) {
      return line;
    }
    return line.slice(indent);
  }).join("\n");
}
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
function see(name, options = {}) {
  if (!currentBlocks) {
    throw new Error("see() must be called inside doc()");
  }
  currentBlocks.push({
    type: "see",
    name,
    pageType: options.type || "doc",
    section: options.section || null,
    category: options.category || null
  });
}
function disclaimer(content) {
  if (!currentBlocks) {
    throw new Error("disclaimer() must be called inside doc()");
  }
  currentBlocks.push({
    type: "disclaimer",
    content: dedent(content)
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
function addSpacerIfNeeded() {
  const hasVisibleLogs = logger.history.some((e) => e.event === "log");
  const lastEntry = logger.history[logger.history.length - 1];
  const lastIsSpacer = (lastEntry == null ? void 0 : lastEntry.event) === "spacer";
  if (hasVisibleLogs && !lastIsSpacer) {
    logger.spacer();
  }
}
async function executeAction(block, sectionSetup = null) {
  try {
    addSpacerIfNeeded();
    const ctx = {};
    if (sectionSetup == null ? void 0 : sectionSetup.fn) {
      await sectionSetup.fn(ctx);
    }
    await block.fn(ctx);
  } catch (error) {
    logger.error("Action error:", error.message);
  }
}
async function executeContainer(block, containerEl, sectionSetup = null) {
  addSpacerIfNeeded();
  const prevApp = containerEl._currentApp;
  if (prevApp == null ? void 0 : prevApp.dispose) {
    prevApp.dispose();
  }
  containerEl.innerHTML = "";
  if (block.preset) {
    applyContainerPreset(containerEl, block.preset);
  }
  if (block.scrollable) {
    containerEl.style.overflow = "auto";
  }
  try {
    let actionsBar = null;
    let slidersBar = null;
    let infoBar = null;
    const ctx = {
      container: containerEl,
      setApp: (app, ...args) => {
        containerEl._currentApp = app;
        const [scene] = args;
        if (scene && app.autoFitEnabled && app.render) {
          app.on("resize", () => app.render(scene));
        }
      },
      action: (label, callback) => {
        if (!actionsBar) {
          actionsBar = document.createElement("div");
          actionsBar.className = "doc-actions-bar";
          containerEl.appendChild(actionsBar);
        }
        const isFirst = actionsBar.children.length === 0;
        const btn = document.createElement("button");
        btn.className = "doc-actions-btn";
        if (isFirst) {
          btn.classList.add("doc-actions-btn--active");
        }
        btn.textContent = label;
        btn.addEventListener("click", () => {
          actionsBar.querySelectorAll(".doc-actions-btn").forEach((b) => b.classList.remove("doc-actions-btn--active"));
          btn.classList.add("doc-actions-btn--active");
          callback();
        });
        actionsBar.appendChild(btn);
        if (isFirst) {
          callback();
        }
      },
      slider: (label, opts, onChange) => {
        if (!slidersBar) {
          slidersBar = document.createElement("div");
          slidersBar.className = "doc-sliders-bar";
          containerEl.appendChild(slidersBar);
        }
        const wrapper = document.createElement("div");
        wrapper.className = "doc-slider-wrapper";
        const labelEl = document.createElement("span");
        labelEl.className = "doc-slider-label";
        labelEl.textContent = label;
        const valueEl = document.createElement("span");
        valueEl.className = "doc-slider-value";
        valueEl.textContent = opts.default ?? opts.min;
        const input = document.createElement("input");
        input.type = "range";
        input.className = "doc-slider";
        input.min = opts.min;
        input.max = opts.max;
        input.step = opts.step ?? (opts.max - opts.min) / 100;
        input.value = opts.default ?? opts.min;
        input.addEventListener("input", () => {
          const value = parseFloat(input.value);
          valueEl.textContent = Number.isInteger(value) ? value : value.toFixed(2);
          onChange(value);
        });
        wrapper.appendChild(labelEl);
        wrapper.appendChild(input);
        wrapper.appendChild(valueEl);
        slidersBar.appendChild(wrapper);
        onChange(parseFloat(input.value));
        return {
          set: (value) => {
            input.value = value;
            valueEl.textContent = Number.isInteger(value) ? value : value.toFixed(2);
          },
          get: () => parseFloat(input.value)
        };
      },
      info: (formatter) => {
        if (!infoBar) {
          infoBar = document.createElement("div");
          infoBar.className = "doc-info-bar";
          containerEl.appendChild(infoBar);
        }
        const el = document.createElement("div");
        el.className = "doc-info";
        infoBar.appendChild(el);
        const update = (...args) => {
          el.textContent = formatter(...args);
        };
        update();
        return update;
      },
      hint: (message) => {
        const el = document.createElement("div");
        el.className = "doc-hint";
        el.textContent = message;
        containerEl.appendChild(el);
      },
      display: (formatter) => {
        const el = document.createElement("div");
        el.className = "doc-display";
        containerEl.appendChild(el);
        const update = (...args) => {
          const result = formatter(...args);
          if (result instanceof HTMLElement) {
            el.innerHTML = "";
            el.appendChild(result);
          } else if (Array.isArray(result)) {
            el.innerHTML = result.map((item) => `<span class="doc-display-tag">${item}</span>`).join("");
          } else {
            el.innerHTML = result;
          }
        };
        update();
        return update;
      },
      box: (opts = {}) => {
        const size = opts.size || 40;
        const color = opts.color || "#4a9eff";
        const el = document.createElement("div");
        el.style.cssText = `width:${size}px;height:${size}px;background:${color};position:absolute;border-radius:4px;left:50%;top:50%;transform:translate(-50%,-50%)`;
        containerEl.appendChild(el);
        return el;
      },
      marker: (x = 0, y = 0, opts = {}) => {
        const size = opts.size || 20;
        const color = opts.color || "#4a9eff";
        const el = document.createElement("div");
        el.style.cssText = `width:${size}px;height:${size}px;background:${color};position:absolute;border-radius:50%;transform:translate(-50%,-50%);left:${x}px;top:${y}px`;
        containerEl.appendChild(el);
        return el;
      },
      column: (opts = {}) => {
        const gap = opts.gap || 4;
        const el = document.createElement("div");
        el.style.cssText = `display:flex;flex-direction:column;align-items:center;gap:${gap}px;`;
        if (opts.parent) {
          opts.parent.appendChild(el);
        } else {
          containerEl.appendChild(el);
        }
        return el;
      },
      row: (opts = {}) => {
        const gap = opts.gap || 8;
        const el = document.createElement("div");
        el.style.cssText = `display:flex;flex-direction:row;align-items:center;gap:${gap}px;flex-wrap:wrap;justify-content:center;`;
        if (opts.parent) {
          opts.parent.appendChild(el);
        } else {
          containerEl.appendChild(el);
        }
        return el;
      },
      label: (content, opts = {}) => {
        const el = document.createElement("div");
        el.style.cssText = "color:#888;font-family:monospace;font-size:11px;";
        el.textContent = content;
        if (opts.overlay) {
          el.style.cssText += "position:absolute;top:64px;left:50%;transform:translateX(-50%);z-index:10;";
        }
        if (opts.parent) {
          opts.parent.appendChild(el);
        } else {
          containerEl.appendChild(el);
        }
        return el;
      },
      checkerBoard: (opts = {}) => {
        const size = opts.size || 8;
        const color1 = opts.color1 || "#222";
        const color2 = opts.color2 || "#1a1a1a";
        const el = document.createElement("div");
        el.style.cssText = `background:repeating-conic-gradient(${color1} 0% 25%, ${color2} 0% 50%) 50% / ${size * 2}px ${size * 2}px;border:1px solid #333;overflow:hidden;`;
        if (opts.width) {
          el.style.width = opts.width + "px";
        }
        if (opts.height) {
          el.style.height = opts.height + "px";
        }
        if (opts.parent) {
          opts.parent.appendChild(el);
        } else {
          containerEl.appendChild(el);
        }
        return el;
      },
      canvas: (source, opts = {}) => {
        const wrapper = document.createElement("div");
        const size = opts.checkerSize || 8;
        wrapper.style.cssText = `background:repeating-conic-gradient(#222 0% 25%, #1a1a1a 0% 50%) 50% / ${size * 2}px ${size * 2}px;border:1px solid #333;display:inline-block;`;
        if (opts.parent) {
          opts.parent.appendChild(wrapper);
        } else {
          containerEl.appendChild(wrapper);
        }
        const displayCanvas = document.createElement("canvas");
        displayCanvas.style.cssText = "display:block;";
        if (opts.maxWidth) {
          displayCanvas.style.maxWidth = opts.maxWidth + "px";
          displayCanvas.style.height = "auto";
        }
        wrapper.appendChild(displayCanvas);
        const update = (src) => {
          const canvas = src || source;
          displayCanvas.width = canvas.width;
          displayCanvas.height = canvas.height;
          const dctx = displayCanvas.getContext("2d");
          dctx.clearRect(0, 0, canvas.width, canvas.height);
          dctx.drawImage(canvas, 0, 0);
        };
        if (source) {
          update(source);
        }
        return { element: wrapper, canvas: displayCanvas, update };
      }
    };
    if (sectionSetup == null ? void 0 : sectionSetup.fn) {
      await sectionSetup.fn(ctx);
    }
    await block.fn(ctx);
    if (containerEl.tabIndex >= 0) {
      containerEl.focus();
    }
  } catch (error) {
    logger.error("Container error:", error.message);
  }
}
function renderAction(block, sectionSetup = null, extractedSource = null) {
  const wrapper = document.createElement("div");
  wrapper.className = "doc-action-block";
  const codeEl = document.createElement("perky-code");
  codeEl.setAttribute("title", block.title);
  codeEl.code = extractedSource || block.source;
  wrapper.appendChild(codeEl);
  const button = document.createElement("button");
  button.className = "doc-action-btn";
  button.innerHTML = `
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z"/>
        </svg>
        Run
    `;
  button.addEventListener("click", () => executeAction(block, sectionSetup));
  wrapper.appendChild(button);
  return wrapper;
}
export {
  Notifier as N,
  setup as a,
  action as b,
  code as c,
  doc as d,
  executeContainer as e,
  container as f,
  see as g,
  disclaimer as h,
  logger as l,
  renderAction as r,
  section as s,
  text as t
};
