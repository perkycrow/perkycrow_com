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
var _module, _gridEl, _actionsEl, _module2, _titleEl, _contentEl, _PerkyExplorerDetails_instances, buildDOM_fn, render_fn, renderEmpty_fn, renderTitle_fn, renderContent_fn, renderCustomInspector_fn, renderInspectMethod_fn, renderDefaultGrid_fn;
import { E as EditorComponent } from "./editor_component-KitFp2Fu.js";
import { c as createElement } from "./dom_utils-DTpHkHXB.js";
const explorerStyles = `
    *, *::before, *::after {
        box-sizing: border-box;
    }

    :host {
        display: block;
        font-family: var(--font-mono);
        font-size: 12px;
        position: fixed;
        right: 10px;
        top: 10px;
        width: 320px;
        max-height: calc(100vh - 20px);
        z-index: 9999;
    }


    .explorer {
        background: var(--bg-primary);
        border: 1px solid var(--border);
        border-radius: 6px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
        overflow-y: auto;
        overflow-x: hidden;
        display: flex;
        flex-direction: column;
        max-height: inherit;
    }

    .explorer::-webkit-scrollbar {
        width: 6px;
    }

    .explorer::-webkit-scrollbar-track {
        background: var(--bg-primary);
    }

    .explorer::-webkit-scrollbar-thumb {
        background: var(--border);
        border-radius: 3px;
    }

    .explorer-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 12px;
        background: var(--bg-secondary);
        border-bottom: 1px solid var(--border);
        cursor: pointer;
        user-select: none;
        position: sticky;
        top: 0;
        z-index: 1;
    }

    .explorer-title {
        display: flex;
        align-items: center;
        gap: 8px;
        color: var(--fg-primary);
        font-weight: 500;
    }

    .explorer-title-icon {
        font-size: 14px;
    }

    .explorer-buttons {
        display: flex;
        gap: 4px;
    }

    .explorer-btn {
        background: var(--bg-hover);
        border: none;
        border-radius: 4px;
        color: var(--fg-secondary);
        padding: 4px 8px;
        cursor: pointer;
        font-family: inherit;
        font-size: 11px;
        transition: background 0.15s, color 0.15s;
    }

    .explorer-btn:hover {
        background: var(--bg-selected);
        color: var(--fg-primary);
    }

    .explorer-btn-icon {
        padding: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .explorer-btn-icon svg {
        width: 14px;
        height: 14px;
    }

    .explorer-btn.active {
        background: var(--accent);
        color: var(--bg-primary);
    }

    .explorer-btn.active:hover {
        filter: brightness(1.1);
    }

    .explorer-tree {
        flex-shrink: 0;
        padding: 8px 0;
        min-height: 100px;
    }

    .explorer-tree::-webkit-scrollbar {
        width: 6px;
    }

    .explorer-tree::-webkit-scrollbar-track {
        background: var(--bg-primary);
    }

    .explorer-tree::-webkit-scrollbar-thumb {
        background: var(--border);
        border-radius: 3px;
    }

    .explorer-minimized {
        height: 36px;
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 0 12px;
        background: var(--bg-primary);
        border: 1px solid var(--border);
        border-radius: 6px;
        cursor: pointer;
        font-size: 12px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
        color: var(--fg-primary);
    }

    .explorer-minimized:hover {
        background: var(--bg-secondary);
    }

    .explorer-back-button {
        display: none;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        background: var(--bg-hover);
        border-radius: 4px;
        color: var(--fg-secondary);
        font-size: 12px;
        transition: background 0.15s, color 0.15s;
    }

    .explorer-minimized.back-mode {
        background: var(--bg-secondary);
        border: none;
        border-bottom: 1px solid var(--border);
        border-radius: 0;
        box-shadow: none;
    }

    .explorer-minimized.back-mode .explorer-back-button {
        display: flex;
    }

    .explorer-minimized:hover .explorer-back-button {
        background: var(--bg-selected);
        color: var(--fg-primary);
    }

    .hidden {
        display: none !important;
    }

    .explorer-empty {
        padding: 20px;
        text-align: center;
        color: var(--fg-muted);
    }
`;
const nodeStyles = `
    :host {
        display: block;
        cursor: pointer;
    }

    .node-content {
        display: flex;
        align-items: center;
        padding: 4px 12px;
        padding-left: calc(12px + var(--depth, 0) * 16px);
        gap: 6px;
        transition: background 0.1s;
    }

    .node-content:hover {
        background: var(--bg-hover);
    }

    .node-content.selected {
        background: var(--bg-selected);
    }

    .node-toggle {
        width: 16px;
        height: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--fg-muted);
        font-size: 10px;
        flex-shrink: 0;
    }

    .node-toggle.has-children {
        cursor: pointer;
    }

    .node-toggle.has-children:hover {
        color: var(--fg-primary);
    }

    .node-status {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        flex-shrink: 0;
    }

    .node-status.started {
        background: var(--status-started);
        box-shadow: 0 0 4px var(--status-started);
    }

    .node-status.stopped {
        background: var(--status-stopped);
    }

    .node-status.disposed {
        background: var(--status-disposed);
    }

    .node-status.static {
        background: var(--fg-muted);
        opacity: 0.5;
    }

    .node-id {
        color: var(--fg-primary);
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .node-category {
        color: var(--fg-muted);
        font-size: 10px;
        flex-shrink: 0;
    }

    .node-content {
        position: relative;
    }

    .node-system-icon {
        position: absolute;
        left: 11px;
        top: 50%;
        transform: translateY(calc(-50% + 1px));
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .node-system-icon svg {
        width: 8px;
        height: 8px;
        fill: var(--fg-muted);
        opacity: 0.4;
    }

    .node-children {
        display: none;
    }

    .node-children.expanded {
        display: block;
    }
`;
const detailsStyles = `
    :host {
        display: block;
        flex-shrink: 0;
        border-top: 1px solid var(--border);
        background: var(--bg-secondary);
        padding: 10px 12px;
    }

    .details-title {
        color: var(--fg-primary);
        font-weight: 500;
        margin-bottom: 8px;
        display: flex;
        align-items: center;
        gap: 6px;
    }

    .details-status {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        flex-shrink: 0;
    }

    .details-status.started {
        background: var(--status-started);
        box-shadow: 0 0 4px var(--status-started);
    }

    .details-status.stopped {
        background: var(--status-stopped);
    }

    .details-status.disposed {
        background: var(--status-disposed);
    }

    .details-status.static {
        background: var(--fg-muted);
        opacity: 0.5;
    }

    .details-grid {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 4px 12px;
        font-size: 11px;
    }

    .details-label {
        color: var(--fg-muted);
    }

    .details-value {
        color: var(--fg-secondary);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .details-value.accent {
        color: var(--accent);
    }

    .details-tags {
        display: flex;
        gap: 4px;
        flex-wrap: wrap;
    }

    .details-tag {
        background: var(--bg-hover);
        padding: 2px 6px;
        border-radius: 3px;
        font-size: 10px;
    }

    .details-empty {
        color: var(--fg-muted);
        font-style: italic;
    }

    .details-content > * + * {
        margin-top: 12px;
        padding-top: 12px;
        border-top: 1px solid var(--border);
    }
`;
const inspectorStyles = `
    .inspector-grid {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 4px 12px;
        font-size: 11px;
    }

    .inspector-label {
        color: var(--fg-muted);
    }

    .inspector-value {
        color: var(--fg-secondary);
    }

    .inspector-value.accent {
        color: var(--accent);
        font-weight: 500;
    }

    .inspector-value.running {
        color: var(--status-started);
    }

    .inspector-value.paused {
        color: var(--status-stopped);
    }

    .inspector-separator {
        grid-column: 1 / -1;
        height: 1px;
        background: var(--border);
        margin: 6px 0;
    }

    .inspector-actions {
        display: flex;
        gap: 6px;
        margin-top: 10px;
    }

    .inspector-btn {
        flex: 1;
        height: 28px;
        padding: 0 12px;
        background: var(--bg-hover);
        border: 1px solid var(--border);
        border-radius: 4px;
        color: var(--fg-secondary);
        cursor: pointer;
        font-family: inherit;
        font-size: 11px;
        font-weight: 400;
        line-height: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        transition: all 0.15s ease;
    }

    .inspector-btn:hover {
        background: var(--bg-selected);
        color: var(--fg-primary);
        border-color: var(--fg-muted);
    }

    .inspector-btn:active {
        transform: scale(0.98);
    }

    .inspector-btn.primary {
        background: var(--accent);
        border-color: var(--accent);
        color: var(--bg-primary);
        font-weight: 500;
    }

    .inspector-btn.primary:hover {
        filter: brightness(1.1);
        border-color: var(--accent);
    }

    .inspector-btn:disabled {
        opacity: 0.4;
        cursor: not-allowed;
        pointer-events: none;
    }

    .inspector-select {
        width: 100%;
        padding: 6px 10px;
        background: var(--bg-primary);
        border: 1px solid var(--border);
        border-radius: 4px;
        color: var(--fg-secondary);
        font-family: inherit;
        font-size: 11px;
        cursor: pointer;
        transition: border-color 0.15s, color 0.15s;
    }

    .inspector-select:hover {
        border-color: var(--fg-muted);
        color: var(--fg-primary);
    }

    .inspector-select:focus {
        outline: none;
        border-color: var(--accent);
    }

    .inspector-row {
        grid-column: 1 / -1;
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 12px;
        align-items: center;
    }

    .inspector-row-label {
        color: var(--fg-muted);
        font-size: 11px;
    }

    .inspector-color-swatch {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 1px solid var(--border);
        cursor: pointer;
        transition: border-color 0.15s;
    }

    .inspector-color-swatch:hover {
        border-color: var(--fg-muted);
    }
`;
const panelStyles = `
    .panel-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 12px;
        background: var(--bg-secondary);
        border-bottom: 1px solid var(--border);
        cursor: pointer;
        user-select: none;
    }

    .panel-title {
        display: flex;
        align-items: center;
        gap: 8px;
        color: var(--fg-primary);
        font-weight: 500;
    }

    .panel-title-icon {
        font-size: 14px;
    }

    .panel-buttons {
        display: flex;
        gap: 4px;
    }

    .panel-btn {
        background: var(--bg-hover);
        border: none;
        border-radius: 4px;
        color: var(--fg-secondary);
        padding: 4px 8px;
        cursor: pointer;
        font-family: inherit;
        font-size: 11px;
        transition: background 0.15s, color 0.15s;
    }

    .panel-btn:hover {
        background: var(--bg-selected);
        color: var(--fg-primary);
    }

    .panel-tree {
        flex: 1;
        overflow-y: auto;
        padding: 8px 0;
        min-height: 100px;
    }

    .panel-tree::-webkit-scrollbar {
        width: 6px;
    }

    .panel-tree::-webkit-scrollbar-track {
        background: var(--bg-primary);
    }

    .panel-tree::-webkit-scrollbar-thumb {
        background: var(--border);
        border-radius: 3px;
    }

    .panel-empty {
        padding: 20px;
        text-align: center;
        color: var(--fg-muted);
    }
`;
class BaseInspector extends EditorComponent {
  constructor() {
    super(...arguments);
    __privateAdd(this, _module, null);
    __privateAdd(this, _gridEl, null);
    __privateAdd(this, _actionsEl, null);
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
    __privateSet(this, _gridEl, createElement("div", { class: "inspector-grid" }));
    __privateSet(this, _actionsEl, createElement("div", { class: "inspector-actions" }));
    this.shadowRoot.appendChild(__privateGet(this, _gridEl));
    this.shadowRoot.appendChild(__privateGet(this, _actionsEl));
  }
  addRow(label, value, isAccent = false) {
    const labelEl = createElement("div", { class: "inspector-label", text: label });
    const valueEl = createElement("div", { class: `inspector-value ${isAccent ? "accent" : ""}` });
    const displayValue = typeof value === "function" ? value() : value;
    valueEl.textContent = String(displayValue);
    valueEl.title = String(displayValue);
    __privateGet(this, _gridEl).appendChild(labelEl);
    __privateGet(this, _gridEl).appendChild(valueEl);
    return valueEl;
  }
  addSeparator() {
    const sep = createElement("div", { class: "inspector-separator" });
    __privateGet(this, _gridEl).appendChild(sep);
  }
  createButton(icon, text, onClick) {
    const btn = createElement("button", { class: "inspector-btn", text: icon ? `${icon} ${text}` : text });
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
__publicField(BaseInspector, "styles", `
    :host {
        display: block;
    }
    ${inspectorStyles}
    `);
const inspectorRegistry = /* @__PURE__ */ new Set();
class PerkyExplorerDetails extends EditorComponent {
  constructor() {
    super(...arguments);
    __privateAdd(this, _PerkyExplorerDetails_instances);
    __privateAdd(this, _module2, null);
    __privateAdd(this, _titleEl, null);
    __privateAdd(this, _contentEl, null);
  }
  onConnected() {
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
  __privateSet(this, _titleEl, createElement("div", { class: "details-title" }));
  __privateSet(this, _contentEl, createElement("div", { class: "details-content" }));
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
  const empty = createElement("div", {
    class: "details-empty",
    text: "Select a module to inspect"
  });
  __privateGet(this, _contentEl).appendChild(empty);
};
renderTitle_fn = function() {
  __privateGet(this, _titleEl).innerHTML = "";
  const statusDot = createElement("div", {
    class: `details-status ${__privateGet(this, _module2).$status}`
  });
  const focusBtn = createElement("button", {
    class: "details-focus-btn",
    html: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle></svg>',
    title: "Focus on this module"
  });
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
__publicField(PerkyExplorerDetails, "styles", `
    ${detailsStyles}

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
    `);
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
  return createElement("div", { class: "details-grid" });
}
function addGridRow(grid, label, value, isAccent = false) {
  const labelEl = createElement("div", {
    class: "details-label",
    text: label
  });
  const valueEl = createElement("div", {
    class: `details-value ${isAccent ? "accent" : ""}`.trim()
  });
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
  const container = createElement("div", { class: "details-tags" });
  for (const tag of tags) {
    const tagEl = createElement("span", {
      class: "details-tag",
      text: tag
    });
    container.appendChild(tagEl);
  }
  return container;
}
customElements.define("perky-explorer-details", PerkyExplorerDetails);
export {
  BaseInspector as B,
  PerkyExplorerDetails as P,
  explorerStyles as e,
  nodeStyles as n,
  panelStyles as p
};
