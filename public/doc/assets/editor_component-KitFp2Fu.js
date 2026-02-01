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
var _listeners, _PerkyElement_instances, adoptStyles_fn, collectStyleSheets_fn, cleanListeners_fn;
import { b as adoptStyleSheets, a as createStyleSheet } from "./dom_utils-DTpHkHXB.js";
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
function getThemeStyles(options = {}) {
  const {
    supportColorScheme = true,
    supportThemeAttribute = true
  } = options;
  let styles = `:host { ${editorThemeVariables} }`;
  if (supportColorScheme) {
    styles += `
            @media (prefers-color-scheme: light) {
                :host { ${editorThemeVariablesLight} }
            }
        `;
  }
  if (supportThemeAttribute) {
    styles += `
            :host([theme="dark"]) { ${editorThemeVariables} }
            :host([theme="light"]) { ${editorThemeVariablesLight} }
        `;
  }
  return styles;
}
function buildEditorStyles(...styleParts) {
  return [
    getThemeStyles(),
    editorBaseStyles,
    ...styleParts
  ].join("\n");
}
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
export {
  EditorComponent as E,
  editorButtonStyles as a,
  editorScrollbarStyles as b,
  buildEditorStyles as c,
  editorBaseStyles as d,
  editorHeaderStyles as e
};
