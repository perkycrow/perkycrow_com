var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _listeners, _module, _gridEl, _actionsEl, _customStyles, _BaseInspector_instances, getStyles_fn, _module2, _titleEl, _contentEl, _PerkyExplorerDetails_instances, buildDOM_fn, render_fn, renderEmpty_fn, renderTitle_fn, renderContent_fn, renderCustomInspector_fn, renderInspectMethod_fn, renderDefaultGrid_fn;
import { c as cssVariables, i as inspectorStyles, d as detailsStyles } from "./perky_explorer_styles-C0ezRuWU.js";
class BaseEditorComponent extends HTMLElement {
  constructor() {
    super();
    __privateAdd(this, _listeners, []);
    this.attachShadow({ mode: "open" });
  }
  disconnectedCallback() {
    this.cleanListeners();
  }
  listenTo(target, eventName, callback) {
    target.on(eventName, callback);
    __privateGet(this, _listeners).push({ target, eventName, callback });
  }
  cleanListeners() {
    for (const { target, eventName, callback } of __privateGet(this, _listeners)) {
      target.off(eventName, callback);
    }
    __privateSet(this, _listeners, []);
  }
}
_listeners = new WeakMap();
class BaseInspector extends BaseEditorComponent {
  constructor(customStyles = "") {
    super();
    __privateAdd(this, _BaseInspector_instances);
    __privateAdd(this, _module, null);
    __privateAdd(this, _gridEl, null);
    __privateAdd(this, _actionsEl, null);
    __privateAdd(this, _customStyles, "");
    __privateSet(this, _customStyles, customStyles);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
  }
  setModule(module) {
    var _a;
    this.cleanListeners();
    __privateSet(this, _module, module);
    (_a = this.onModuleSet) == null ? void 0 : _a.call(this, module);
  }
  getModule() {
    return __privateGet(this, _module);
  }
  get module() {
    return __privateGet(this, _module);
  }
  get gridEl() {
    return __privateGet(this, _gridEl);
  }
  get actionsEl() {
    return __privateGet(this, _actionsEl);
  }
  buildDOM() {
    const style = document.createElement("style");
    style.textContent = __privateMethod(this, _BaseInspector_instances, getStyles_fn).call(this);
    this.shadowRoot.appendChild(style);
    __privateSet(this, _gridEl, document.createElement("div"));
    __privateGet(this, _gridEl).className = "inspector-grid";
    __privateSet(this, _actionsEl, document.createElement("div"));
    __privateGet(this, _actionsEl).className = "inspector-actions";
    this.shadowRoot.appendChild(__privateGet(this, _gridEl));
    this.shadowRoot.appendChild(__privateGet(this, _actionsEl));
  }
  addRow(label, value, isAccent = false) {
    const labelEl = document.createElement("div");
    labelEl.className = "inspector-label";
    labelEl.textContent = label;
    const valueEl = document.createElement("div");
    valueEl.className = `inspector-value ${isAccent ? "accent" : ""}`;
    const displayValue = typeof value === "function" ? value() : value;
    valueEl.textContent = String(displayValue);
    valueEl.title = String(displayValue);
    __privateGet(this, _gridEl).appendChild(labelEl);
    __privateGet(this, _gridEl).appendChild(valueEl);
    return valueEl;
  }
  addSeparator() {
    const sep = document.createElement("div");
    sep.className = "inspector-separator";
    __privateGet(this, _gridEl).appendChild(sep);
  }
  createButton(icon, text, onClick) {
    const btn = document.createElement("button");
    btn.className = "inspector-btn";
    btn.textContent = icon ? `${icon} ${text}` : text;
    btn.addEventListener("click", onClick);
    return btn;
  }
  clearContent() {
    __privateGet(this, _gridEl).innerHTML = "";
    __privateGet(this, _actionsEl).innerHTML = "";
  }
}
_module = new WeakMap();
_gridEl = new WeakMap();
_actionsEl = new WeakMap();
_customStyles = new WeakMap();
_BaseInspector_instances = new WeakSet();
getStyles_fn = function() {
  return `
            :host {
                ${cssVariables}
                display: block;
            }
            ${inspectorStyles}
            ${__privateGet(this, _customStyles)}
        `;
};
const inspectorRegistry = /* @__PURE__ */ new Set();
class PerkyExplorerDetails extends BaseEditorComponent {
  constructor() {
    super(...arguments);
    __privateAdd(this, _PerkyExplorerDetails_instances);
    __privateAdd(this, _module2, null);
    __privateAdd(this, _titleEl, null);
    __privateAdd(this, _contentEl, null);
  }
  connectedCallback() {
    __privateMethod(this, _PerkyExplorerDetails_instances, buildDOM_fn).call(this);
  }
  setModule(module) {
    __privateSet(this, _module2, module);
    __privateMethod(this, _PerkyExplorerDetails_instances, render_fn).call(this);
  }
  getModule() {
    return __privateGet(this, _module2);
  }
  clear() {
    __privateSet(this, _module2, null);
    __privateMethod(this, _PerkyExplorerDetails_instances, render_fn).call(this);
  }
  static registerInspector(Inspector) {
    inspectorRegistry.add(Inspector);
  }
  static unregisterInspector(Inspector) {
    inspectorRegistry.delete(Inspector);
  }
}
_module2 = new WeakMap();
_titleEl = new WeakMap();
_contentEl = new WeakMap();
_PerkyExplorerDetails_instances = new WeakSet();
buildDOM_fn = function() {
  const style = document.createElement("style");
  style.textContent = `:host { ${cssVariables} } ${detailsStyles}
        .details-focus-btn {
            background: none;
            border: none;
            color: var(--fg-secondary);
            cursor: pointer;
            font-size: 14px;
            margin-left: auto;
            opacity: 0.5;
            padding: 4px;
            transition: opacity 0.2s, color 0.2s;
        }
        .details-focus-btn:hover {
            opacity: 1;
            color: var(--fg-primary);
        }
        `;
  this.shadowRoot.appendChild(style);
  __privateSet(this, _titleEl, document.createElement("div"));
  __privateGet(this, _titleEl).className = "details-title";
  __privateSet(this, _contentEl, document.createElement("div"));
  __privateGet(this, _contentEl).className = "details-content";
  this.shadowRoot.appendChild(__privateGet(this, _titleEl));
  this.shadowRoot.appendChild(__privateGet(this, _contentEl));
};
render_fn = function() {
  if (!__privateGet(this, _module2)) {
    __privateMethod(this, _PerkyExplorerDetails_instances, renderEmpty_fn).call(this);
    return;
  }
  __privateMethod(this, _PerkyExplorerDetails_instances, renderTitle_fn).call(this);
  __privateMethod(this, _PerkyExplorerDetails_instances, renderContent_fn).call(this);
};
renderEmpty_fn = function() {
  __privateGet(this, _titleEl).textContent = "";
  __privateGet(this, _contentEl).innerHTML = "";
  const empty = document.createElement("div");
  empty.className = "details-empty";
  empty.textContent = "Select a module to inspect";
  __privateGet(this, _contentEl).appendChild(empty);
};
renderTitle_fn = function() {
  __privateGet(this, _titleEl).innerHTML = "";
  const statusDot = document.createElement("div");
  statusDot.className = `details-status ${__privateGet(this, _module2).$status}`;
  const focusBtn = document.createElement("button");
  focusBtn.className = "details-focus-btn";
  focusBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle></svg>';
  focusBtn.title = "Focus on this module";
  focusBtn.onclick = () => {
    this.dispatchEvent(new CustomEvent("focus:module", {
      detail: { module: __privateGet(this, _module2) },
      bubbles: true,
      composed: true
    }));
  };
  __privateGet(this, _titleEl).appendChild(statusDot);
  __privateGet(this, _titleEl).appendChild(document.createTextNode(__privateGet(this, _module2).$id));
  __privateGet(this, _titleEl).appendChild(focusBtn);
};
renderContent_fn = function() {
  __privateGet(this, _contentEl).innerHTML = "";
  const matchingInspectors = findAllInspectors(__privateGet(this, _module2));
  if (matchingInspectors.length > 0) {
    for (const Inspector of matchingInspectors) {
      __privateMethod(this, _PerkyExplorerDetails_instances, renderCustomInspector_fn).call(this, Inspector);
    }
  } else if (typeof __privateGet(this, _module2).inspect === "function") {
    __privateMethod(this, _PerkyExplorerDetails_instances, renderInspectMethod_fn).call(this);
  } else {
    __privateMethod(this, _PerkyExplorerDetails_instances, renderDefaultGrid_fn).call(this);
  }
};
renderCustomInspector_fn = function(Inspector) {
  const inspector = new Inspector();
  inspector.setModule(__privateGet(this, _module2));
  __privateGet(this, _contentEl).appendChild(inspector);
};
renderInspectMethod_fn = function() {
  const inspectData = __privateGet(this, _module2).inspect();
  const grid = createGrid();
  for (const [key, value] of Object.entries(inspectData)) {
    addGridRow(grid, key, formatValue(value));
  }
  __privateGet(this, _contentEl).appendChild(grid);
};
renderDefaultGrid_fn = function() {
  const module = __privateGet(this, _module2);
  const grid = createGrid();
  addGridRow(grid, "$name", module.$name);
  addGridRow(grid, "$category", module.$category);
  const tags = module.$tags;
  if (tags && tags.length > 0) {
    addGridRow(grid, "$tags", formatTags(tags));
  }
  addGridRow(grid, "children", module.children.length, true);
  __privateGet(this, _contentEl).appendChild(grid);
};
function findAllInspectors(module) {
  const matches = [];
  for (const Inspector of inspectorRegistry) {
    if (typeof Inspector.matches === "function" && Inspector.matches(module)) {
      matches.push(Inspector);
    }
  }
  return matches;
}
function createGrid() {
  const grid = document.createElement("div");
  grid.className = "details-grid";
  return grid;
}
function addGridRow(grid, label, value, isAccent = false) {
  const labelEl = document.createElement("div");
  labelEl.className = "details-label";
  labelEl.textContent = label;
  const valueEl = document.createElement("div");
  valueEl.className = `details-value ${isAccent ? "accent" : ""}`;
  if (value instanceof HTMLElement) {
    valueEl.appendChild(value);
  } else {
    valueEl.textContent = String(value);
    valueEl.title = String(value);
  }
  grid.appendChild(labelEl);
  grid.appendChild(valueEl);
}
function formatValue(value) {
  if (value === null || value === void 0) {
    return "(none)";
  }
  if (Array.isArray(value)) {
    return value.length > 0 ? value.join(", ") : "(empty)";
  }
  if (typeof value === "object") {
    return JSON.stringify(value);
  }
  return String(value);
}
function formatTags(tags) {
  const container = document.createElement("div");
  container.className = "details-tags";
  for (const tag of tags) {
    const tagEl = document.createElement("span");
    tagEl.className = "details-tag";
    tagEl.textContent = tag;
    container.appendChild(tagEl);
  }
  return container;
}
customElements.define("perky-explorer-details", PerkyExplorerDetails);
export {
  BaseEditorComponent as B,
  PerkyExplorerDetails as P,
  BaseInspector as a
};
