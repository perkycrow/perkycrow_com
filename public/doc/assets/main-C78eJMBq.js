const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./doc_application_application-CZzkTZfS.js","./runtime-CM36Pd9c.js","./logger-DMogC8ed.js","./doc_application_perky_view-Bp-HQOs_.js","./doc_audio_audio_system-432J3CHH.js","./audio_system-B0lRqclk.js","./perky_module-8S_KnZAY.js","./utils-BTvKfW7M.js","./doc_core_action_controller-BTkfojQA.js","./action_controller-BKl2uYjt.js","./doc_core_action_dispatcher-C5Z-TTgS.js","./action_dispatcher-DnKE6KZm.js","./doc_core_notifier-DFvSfJKE.js","./doc_core_perky_module-D8Ng1jdQ.js","./doc_core_utils-r4RsJYka.js","./doc_editor_inspectors_action_controller_inspector-BjsWNmR-.js","./action_controller_inspector-9VUh3OSo.js","./perky_explorer_details-blS-_Re2.js","./perky_explorer_styles-C0ezRuWU.js","./doc_editor_inspectors_action_dispatcher_inspector-CtQduLR2.js","./action_dispatcher_inspector-CXLcEDVW.js","./toggle_input-Do276pUG.js","./base_input-C1WyeWNO.js","./doc_editor_log_renderers_vec2_log_renderer-BJIE9Pjw.js","./vec2-BvD8ope7.js","./vec2_log_renderer-CHeUJOoI.js","./doc_editor_perky_explorer-BUeQdMDN.js","./keyboard_device-CKrVtMJT.js","./button_control-CrnxTZ2i.js","./mouse_device-D9hyVJ1e.js","./game_loop-BEuebuJ3.js","./canvas_2d-CLOgpmyB.js","./group_2d-CoEJFKmm.js","./webgl_canvas_2d-zqI8K6VW.js","./entity-CKloPz57.js","./vec2_input-BFMiN3vt.js","./doc_editor_perky_logger-DX0HfWLv.js","./doc_editor_toggle_input-Cs7UWo0w.js","./doc_editor_vec2_input-7hLUZEU8.js","./doc_game_game_loop-SPQJ0_T-.js","./doc_input_input_devices_keyboard_device-DeTThXHV.js","./doc_input_input_devices_mouse_device-CimKdHK0.js","./doc_math_random-iUa-_pLJ.js","./doc_math_vec2-xHH1BOS6.js","./doc_render_canvas_2d-CgWicJYW.js","./doc_render_webgl_canvas_2d-CiCEUbHv.js","./conventions.guide-1sZsbFuI.js","./getting_started.guide-CWdDpIjb.js","./philosophy.guide-CaZFhYe7.js"])))=>i.map(i=>d[i]);
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
var _src, _code, _title, _theme, _noHeader, _loading, _error, _formattedCode, _containerEl, _preEl, _copyBtnEl, _titleEl, _copyTimeoutId, _PerkyCode_instances, handleSrc_fn, handleCode_fn, handleTitle_fn, handleTheme_fn, handleNoHeader_fn, updateHeaderVisibility_fn, handleAttributeChange_fn, buildDOM_fn, createHeader_fn, createContent_fn, updateView_fn, _doc, _api, _tests, _sources, _activeTab, _contentEl, _tocEl, _containerEl2, _currentApp, _containers, _DocPage_instances, setupAnchorNavigation_fn, disposeAll_fn, buildDOM_fn2, render_fn, createLayout_fn, createHeader_fn2, createTitleRow_fn, createTabs_fn, renderActiveTab_fn, scrollToHash_fn, createTab_fn, switchTab_fn, renderDocContent_fn, renderApiContent_fn, renderTestContent_fn, renderDescribe_fn, appendDescribeContent_fn, renderBlock_fn, getSourceFor_fn, renderContainer_fn, renderSection_fn, _maxEntries, _position, _timestamp, _theme2, _entries, _containerEl3, _contentEl2, _controlsEl, _opacityToggle, _isPinned, _onLog, _onClear, _onSpacer, _onTitle, _PerkyLogger_instances, handleMaxEntries_fn, handlePosition_fn, handleTimestamp_fn, handleTheme_fn2, handleAttributeChange_fn2, buildDOM_fn3, togglePin_fn, updateControlsVisibility_fn, bindLoggerEvents_fn, replayHistory_fn, replayEntry_fn, unbindLoggerEvents_fn, handleLog_fn, updateClasses_fn, scrollToBottom_fn;
import { l as logger } from "./logger-DMogC8ed.js";
import { t as toKebabCase, a as toHumanCase } from "./utils-BTvKfW7M.js";
import { a as applyContainerPreset } from "./runtime-CM36Pd9c.js";
import { r as registerLogRenderer, a as renderLogItem } from "./vec2_log_renderer-CHeUJOoI.js";
import "./vec2-BvD8ope7.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const scriptRel = "modulepreload";
const assetsURL = function(dep, importerUrl) {
  return new URL(dep, importerUrl).href;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (deps && deps.length > 0) {
    let allSettled2 = function(promises) {
      return Promise.all(
        promises.map(
          (p) => Promise.resolve(p).then(
            (value) => ({ status: "fulfilled", value }),
            (reason) => ({ status: "rejected", reason })
          )
        )
      );
    };
    const links = document.getElementsByTagName("link");
    const cspNonceMeta = document.querySelector(
      "meta[property=csp-nonce]"
    );
    const cspNonce = (cspNonceMeta == null ? void 0 : cspNonceMeta.nonce) || (cspNonceMeta == null ? void 0 : cspNonceMeta.getAttribute("nonce"));
    promise = allSettled2(
      deps.map((dep) => {
        dep = assetsURL(dep, importerUrl);
        if (dep in seen) return;
        seen[dep] = true;
        const isCss = dep.endsWith(".css");
        const cssSelector = isCss ? '[rel="stylesheet"]' : "";
        const isBaseRelative = !!importerUrl;
        if (isBaseRelative) {
          for (let i = links.length - 1; i >= 0; i--) {
            const link2 = links[i];
            if (link2.href === dep && (!isCss || link2.rel === "stylesheet")) {
              return;
            }
          }
        } else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
          return;
        }
        const link = document.createElement("link");
        link.rel = isCss ? "stylesheet" : scriptRel;
        if (!isCss) {
          link.as = "script";
        }
        link.crossOrigin = "";
        link.href = dep;
        if (cspNonce) {
          link.setAttribute("nonce", cspNonce);
        }
        document.head.appendChild(link);
        if (isCss) {
          return new Promise((res, rej) => {
            link.addEventListener("load", res);
            link.addEventListener(
              "error",
              () => rej(new Error(`Unable to preload CSS for ${dep}`))
            );
          });
        }
      })
    );
  }
  function handlePreloadError(err) {
    const e = new Event("vite:preloadError", {
      cancelable: true
    });
    e.payload = err;
    window.dispatchEvent(e);
    if (!e.defaultPrevented) {
      throw err;
    }
  }
  return promise.then((res) => {
    for (const item of res || []) {
      if (item.status !== "rejected") continue;
      handlePreloadError(item.reason);
    }
    return baseModule().catch(handlePreloadError);
  });
};
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
class PerkyCode extends HTMLElement {
  constructor() {
    super();
    __privateAdd(this, _PerkyCode_instances);
    __privateAdd(this, _src, "");
    __privateAdd(this, _code, "");
    __privateAdd(this, _title, "Source Code");
    __privateAdd(this, _theme, "");
    __privateAdd(this, _noHeader, false);
    __privateAdd(this, _loading, false);
    __privateAdd(this, _error, null);
    __privateAdd(this, _formattedCode, "");
    __privateAdd(this, _containerEl, null);
    __privateAdd(this, _preEl, null);
    __privateAdd(this, _copyBtnEl, null);
    __privateAdd(this, _titleEl, null);
    __privateAdd(this, _copyTimeoutId, null);
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    __privateMethod(this, _PerkyCode_instances, buildDOM_fn).call(this);
    if (__privateGet(this, _src)) {
      this.loadCode();
    }
    if (__privateGet(this, _code)) {
      this.formatCode();
    }
  }
  disconnectedCallback() {
    if (__privateGet(this, _copyTimeoutId)) {
      clearTimeout(__privateGet(this, _copyTimeoutId));
      __privateSet(this, _copyTimeoutId, null);
    }
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) {
      return;
    }
    __privateMethod(this, _PerkyCode_instances, handleAttributeChange_fn).call(this, name, newValue);
  }
  get src() {
    return __privateGet(this, _src);
  }
  set src(value) {
    __privateSet(this, _src, value || "");
    if (value) {
      this.setAttribute("src", value);
    } else {
      this.removeAttribute("src");
    }
    if (__privateGet(this, _src) && this.isConnected) {
      this.loadCode();
    }
  }
  get code() {
    return __privateGet(this, _code);
  }
  set code(value) {
    __privateSet(this, _code, value || "");
    if (this.isConnected) {
      this.formatCode();
    }
  }
  get title() {
    return __privateGet(this, _title);
  }
  set title(value) {
    __privateSet(this, _title, value || "Source Code");
    if (value) {
      this.setAttribute("title", value);
    } else {
      this.removeAttribute("title");
    }
    if (__privateGet(this, _titleEl)) {
      __privateGet(this, _titleEl).textContent = __privateGet(this, _title);
    }
  }
  get theme() {
    return __privateGet(this, _theme);
  }
  set theme(value) {
    __privateSet(this, _theme, value || "");
    if (value) {
      this.setAttribute("theme", value);
    } else {
      this.removeAttribute("theme");
    }
  }
  get loading() {
    return __privateGet(this, _loading);
  }
  get error() {
    return __privateGet(this, _error);
  }
  get formattedCode() {
    return __privateGet(this, _formattedCode);
  }
  async loadCode() {
    if (__privateGet(this, _loading)) {
      return;
    }
    __privateSet(this, _loading, true);
    __privateSet(this, _error, null);
    __privateMethod(this, _PerkyCode_instances, updateView_fn).call(this);
    try {
      const response = await fetch(__privateGet(this, _src));
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      const code = await response.text();
      __privateSet(this, _loading, false);
      __privateSet(this, _code, code);
      this.formatCode();
    } catch (error) {
      __privateSet(this, _loading, false);
      __privateSet(this, _error, error.message);
      __privateMethod(this, _PerkyCode_instances, updateView_fn).call(this);
      logger.error("Error loading code:", error);
    }
  }
  formatCode() {
    if (!__privateGet(this, _code)) {
      __privateSet(this, _formattedCode, "");
      __privateMethod(this, _PerkyCode_instances, updateView_fn).call(this);
      return;
    }
    let code = __privateGet(this, _code).trim();
    code = code.replace(/\/\/# sourceMappingURL=.*$/gm, "");
    code = code.replace(/(from\s+["'])([^"']+)\?t=\d+(["'])/g, "$1$2$3");
    code = code.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const placeholders = [];
    let counter = 0;
    const replaceWithPlaceholder = (match, cssClass) => {
      const placeholder = `__PLACEHOLDER_${counter++}__`;
      placeholders.push({
        placeholder,
        replacement: `<span class="${cssClass}">${match}</span>`
      });
      return placeholder;
    };
    let result = code.replace(
      /\/\/.*$/gm,
      (match) => replaceWithPlaceholder(match, "hl-comment")
    );
    result = result.replace(
      /(["'`])(?:(?=(\\?))\2.)*?\1/g,
      (match) => replaceWithPlaceholder(match, "hl-string")
    ).replace(
      /\b(import|from|const|let|var|function|class|extends|return|async|await|new)\b/g,
      (match) => replaceWithPlaceholder(match, "hl-keyword")
    ).replace(
      /\b(if|else|try|catch)\b/g,
      (match) => replaceWithPlaceholder(match, "hl-keyword")
    ).replace(
      /\b(true|false)\b/g,
      (match) => replaceWithPlaceholder(match, "hl-constant")
    ).replace(
      /\b(\d+(\.\d+)?([eE][+-]?\d+)?)\b/g,
      (match) => replaceWithPlaceholder(match, "hl-constant")
    ).replace(
      /\b(document|window|console)\b(?=\.)/g,
      (match) => replaceWithPlaceholder(match, "hl-keyword")
    ).replace(
      /\.(\w+)(?=\()/g,
      (match) => {
        const methodName = match.substring(1);
        return "." + replaceWithPlaceholder(methodName, "hl-keyword");
      }
    ).replace(
      /\.(\w+)(?=\s|=|,|;|\))/g,
      (match) => {
        const propName = match.substring(1);
        return "." + replaceWithPlaceholder(propName, "hl-constant");
      }
    );
    placeholders.forEach((item) => {
      result = result.replace(item.placeholder, item.replacement);
    });
    const lines = result.split("\n");
    let lastCodeLineIndex = lines.length - 1;
    while (lastCodeLineIndex >= 0 && lines[lastCodeLineIndex].trim() === "") {
      lastCodeLineIndex--;
    }
    const codeLines = lines.slice(0, lastCodeLineIndex + 1);
    __privateSet(this, _formattedCode, codeLines.map((line, index) => {
      const lineNumber = index + 1;
      const paddedNumber = lineNumber.toString().padStart(3, " ");
      return `<span class="line-number">${paddedNumber}</span>${line}`;
    }).join("\n"));
    __privateMethod(this, _PerkyCode_instances, updateView_fn).call(this);
  }
  async copyToClipboard() {
    const originalText = __privateGet(this, _copyBtnEl).textContent;
    try {
      await navigator.clipboard.writeText(__privateGet(this, _code));
      __privateGet(this, _copyBtnEl).textContent = "Copied!";
      __privateGet(this, _copyBtnEl).classList.add("success");
      if (__privateGet(this, _copyTimeoutId)) {
        clearTimeout(__privateGet(this, _copyTimeoutId));
      }
      __privateSet(this, _copyTimeoutId, setTimeout(() => {
        __privateGet(this, _copyBtnEl).textContent = originalText;
        __privateGet(this, _copyBtnEl).classList.remove("success");
        __privateSet(this, _copyTimeoutId, null);
      }, 2e3));
    } catch (error) {
      logger.error("Failed to copy to clipboard:", error);
    }
  }
}
_src = new WeakMap();
_code = new WeakMap();
_title = new WeakMap();
_theme = new WeakMap();
_noHeader = new WeakMap();
_loading = new WeakMap();
_error = new WeakMap();
_formattedCode = new WeakMap();
_containerEl = new WeakMap();
_preEl = new WeakMap();
_copyBtnEl = new WeakMap();
_titleEl = new WeakMap();
_copyTimeoutId = new WeakMap();
_PerkyCode_instances = new WeakSet();
handleSrc_fn = function(value) {
  const oldSrc = __privateGet(this, _src);
  __privateSet(this, _src, value || "");
  if (__privateGet(this, _src) && __privateGet(this, _src) !== oldSrc && this.isConnected) {
    this.loadCode();
  }
};
handleCode_fn = function(value) {
  __privateSet(this, _code, value || "");
  if (this.isConnected) {
    this.formatCode();
  }
};
handleTitle_fn = function(value) {
  __privateSet(this, _title, value || "Source Code");
  if (__privateGet(this, _titleEl)) {
    __privateGet(this, _titleEl).textContent = __privateGet(this, _title);
  }
};
handleTheme_fn = function(value) {
  __privateSet(this, _theme, value || "");
};
handleNoHeader_fn = function(value) {
  __privateSet(this, _noHeader, value !== null);
  if (this.isConnected) {
    __privateMethod(this, _PerkyCode_instances, updateHeaderVisibility_fn).call(this);
  }
};
updateHeaderVisibility_fn = function() {
  var _a;
  const header = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector(".editor-header");
  if (header) {
    header.style.display = __privateGet(this, _noHeader) ? "none" : "";
  }
};
handleAttributeChange_fn = function(name, value) {
  var _a;
  const handlers = {
    src: __privateMethod(this, _PerkyCode_instances, handleSrc_fn),
    code: __privateMethod(this, _PerkyCode_instances, handleCode_fn),
    title: __privateMethod(this, _PerkyCode_instances, handleTitle_fn),
    theme: __privateMethod(this, _PerkyCode_instances, handleTheme_fn),
    "no-header": __privateMethod(this, _PerkyCode_instances, handleNoHeader_fn)
  };
  (_a = handlers[name]) == null ? void 0 : _a.call(this, value);
};
buildDOM_fn = function() {
  const style = document.createElement("style");
  style.textContent = STYLES$2;
  this.shadowRoot.appendChild(style);
  __privateSet(this, _containerEl, document.createElement("div"));
  __privateGet(this, _containerEl).className = "code-display";
  const header = __privateMethod(this, _PerkyCode_instances, createHeader_fn).call(this);
  const content = __privateMethod(this, _PerkyCode_instances, createContent_fn).call(this);
  __privateGet(this, _containerEl).appendChild(header);
  __privateGet(this, _containerEl).appendChild(content);
  this.shadowRoot.appendChild(__privateGet(this, _containerEl));
  __privateMethod(this, _PerkyCode_instances, updateHeaderVisibility_fn).call(this);
};
createHeader_fn = function() {
  const header = document.createElement("div");
  header.className = "editor-header";
  __privateSet(this, _titleEl, document.createElement("span"));
  __privateGet(this, _titleEl).className = "editor-header-title";
  __privateGet(this, _titleEl).textContent = __privateGet(this, _title);
  __privateSet(this, _copyBtnEl, document.createElement("button"));
  __privateGet(this, _copyBtnEl).className = "editor-btn";
  __privateGet(this, _copyBtnEl).textContent = "Copy";
  __privateGet(this, _copyBtnEl).addEventListener("click", () => this.copyToClipboard());
  header.appendChild(__privateGet(this, _titleEl));
  header.appendChild(__privateGet(this, _copyBtnEl));
  return header;
};
createContent_fn = function() {
  const content = document.createElement("div");
  content.className = "code-content";
  __privateSet(this, _preEl, document.createElement("pre"));
  content.appendChild(__privateGet(this, _preEl));
  return content;
};
updateView_fn = function() {
  if (!__privateGet(this, _containerEl)) {
    return;
  }
  if (__privateGet(this, _loading)) {
    __privateGet(this, _containerEl).innerHTML = "";
    const loadingEl = document.createElement("div");
    loadingEl.className = "code-loading";
    loadingEl.textContent = "Loading code...";
    __privateGet(this, _containerEl).appendChild(loadingEl);
    return;
  }
  if (__privateGet(this, _error)) {
    __privateGet(this, _containerEl).innerHTML = "";
    const errorEl = document.createElement("div");
    errorEl.className = "code-error";
    errorEl.textContent = `Error loading code: ${__privateGet(this, _error)}`;
    __privateGet(this, _containerEl).appendChild(errorEl);
    return;
  }
  if (!__privateGet(this, _containerEl).querySelector(".editor-header")) {
    __privateGet(this, _containerEl).innerHTML = "";
    const header = __privateMethod(this, _PerkyCode_instances, createHeader_fn).call(this);
    const content = __privateMethod(this, _PerkyCode_instances, createContent_fn).call(this);
    __privateGet(this, _containerEl).appendChild(header);
    __privateGet(this, _containerEl).appendChild(content);
  }
  if (__privateGet(this, _preEl)) {
    __privateGet(this, _preEl).innerHTML = __privateGet(this, _formattedCode);
  }
};
__publicField(PerkyCode, "observedAttributes", ["src", "code", "title", "theme", "no-header"]);
const STYLES$2 = buildEditorStyles(
  editorHeaderStyles,
  editorButtonStyles,
  editorScrollbarStyles,
  `
    :host {
        display: block;
        margin-top: 1.5em;
        margin-bottom: 1.5em;
        border-radius: 6px;
        overflow: hidden;
        font-family: var(--font-mono);
        border: 1px solid var(--border);
    }

    .code-display {
        background: var(--bg-primary);
        border-radius: 6px;
        overflow: hidden;
    }

    .code-content {
        background: var(--bg-primary);
        color: var(--fg-primary);
        overflow: auto;
        padding: 16px;
    }

    .code-content pre {
        font-family: var(--font-mono);
        font-size: 12px;
        font-weight: 400;
        line-height: 1.5;
        margin: 0;
        white-space: pre;
        word-break: normal;
    }

    .line-number {
        display: inline-block;
        width: 2.5em;
        text-align: right;
        color: var(--fg-muted);
        user-select: none;
        margin-right: 0.8em;
        border-right: 1px solid var(--border);
        padding-right: 0.4em;
    }

    .hl-keyword { color: var(--hl-keyword); }
    .hl-string { color: var(--hl-string); }
    .hl-comment { color: var(--hl-comment); }
    .hl-constant { color: var(--hl-constant); }

    .code-loading {
        padding: 2rem;
        text-align: center;
        color: var(--fg-muted);
        background: var(--bg-primary);
    }

    .code-error {
        padding: 2rem;
        text-align: center;
        color: var(--status-error);
        background: var(--bg-primary);
        border: 1px solid var(--border);
        border-radius: 6px;
    }
`
);
customElements.define("perky-code", PerkyCode);
class DocPage extends HTMLElement {
  constructor() {
    super();
    __privateAdd(this, _DocPage_instances);
    __privateAdd(this, _doc, null);
    __privateAdd(this, _api, null);
    __privateAdd(this, _tests, null);
    __privateAdd(this, _sources, null);
    __privateAdd(this, _activeTab, "doc");
    __privateAdd(this, _contentEl, null);
    __privateAdd(this, _tocEl, null);
    __privateAdd(this, _containerEl2, null);
    __privateAdd(this, _currentApp, null);
    __privateAdd(this, _containers, []);
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    __privateMethod(this, _DocPage_instances, buildDOM_fn2).call(this);
    __privateMethod(this, _DocPage_instances, setupAnchorNavigation_fn).call(this);
  }
  disconnectedCallback() {
    __privateMethod(this, _DocPage_instances, disposeAll_fn).call(this);
  }
  set doc(value) {
    __privateSet(this, _doc, value);
    if (this.isConnected) {
      __privateMethod(this, _DocPage_instances, render_fn).call(this);
    }
  }
  get doc() {
    return __privateGet(this, _doc);
  }
  set api(value) {
    __privateSet(this, _api, value);
    if (this.isConnected) {
      __privateMethod(this, _DocPage_instances, render_fn).call(this);
    }
  }
  get api() {
    return __privateGet(this, _api);
  }
  set sources(value) {
    __privateSet(this, _sources, value);
  }
  get sources() {
    return __privateGet(this, _sources);
  }
  set tests(value) {
    __privateSet(this, _tests, value);
  }
  get tests() {
    return __privateGet(this, _tests);
  }
  set initialTab(value) {
    if (value === "api" || value === "doc" || value === "test") {
      __privateSet(this, _activeTab, value);
    }
  }
}
_doc = new WeakMap();
_api = new WeakMap();
_tests = new WeakMap();
_sources = new WeakMap();
_activeTab = new WeakMap();
_contentEl = new WeakMap();
_tocEl = new WeakMap();
_containerEl2 = new WeakMap();
_currentApp = new WeakMap();
_containers = new WeakMap();
_DocPage_instances = new WeakSet();
setupAnchorNavigation_fn = function() {
  this.shadowRoot.addEventListener("click", (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) {
      return;
    }
    e.preventDefault();
    const targetId = link.getAttribute("href").slice(1);
    const target = this.shadowRoot.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", link.href);
    }
  });
};
disposeAll_fn = function() {
  for (const container of __privateGet(this, _containers)) {
    const app = container._currentApp;
    if (app == null ? void 0 : app.dispose) {
      app.dispose();
    }
  }
  __privateSet(this, _containers, []);
};
buildDOM_fn2 = function() {
  const style = document.createElement("style");
  style.textContent = STYLES$1;
  this.shadowRoot.appendChild(style);
  const container = document.createElement("div");
  container.className = "doc-page";
  this.shadowRoot.appendChild(container);
  if (__privateGet(this, _doc)) {
    __privateMethod(this, _DocPage_instances, render_fn).call(this);
  }
};
render_fn = function() {
  __privateMethod(this, _DocPage_instances, disposeAll_fn).call(this);
  const container = this.shadowRoot.querySelector(".doc-page");
  container.innerHTML = "";
  if (!__privateGet(this, _doc)) {
    return;
  }
  const layout = __privateMethod(this, _DocPage_instances, createLayout_fn).call(this);
  container.appendChild(layout);
  __privateMethod(this, _DocPage_instances, renderActiveTab_fn).call(this);
  __privateMethod(this, _DocPage_instances, scrollToHash_fn).call(this);
};
createLayout_fn = function() {
  const layout = document.createElement("div");
  layout.className = "doc-layout";
  const main = document.createElement("div");
  main.className = "doc-main";
  main.appendChild(__privateMethod(this, _DocPage_instances, createHeader_fn2).call(this));
  __privateSet(this, _contentEl, document.createElement("div"));
  __privateGet(this, _contentEl).className = "doc-content";
  main.appendChild(__privateGet(this, _contentEl));
  layout.appendChild(main);
  __privateSet(this, _tocEl, document.createElement("aside"));
  __privateGet(this, _tocEl).className = "doc-toc";
  layout.appendChild(__privateGet(this, _tocEl));
  return layout;
};
createHeader_fn2 = function() {
  const header = document.createElement("header");
  header.className = "doc-header";
  header.appendChild(__privateMethod(this, _DocPage_instances, createTitleRow_fn).call(this));
  if (__privateGet(this, _api) || __privateGet(this, _tests)) {
    header.appendChild(__privateMethod(this, _DocPage_instances, createTabs_fn).call(this));
  }
  return header;
};
createTitleRow_fn = function() {
  var _a;
  const titleRow = document.createElement("div");
  titleRow.className = "doc-title-row";
  const title = document.createElement("h1");
  title.textContent = __privateGet(this, _doc).title;
  titleRow.appendChild(title);
  if ((_a = __privateGet(this, _doc).options) == null ? void 0 : _a.context) {
    const context = document.createElement("span");
    context.className = "doc-context";
    context.textContent = __privateGet(this, _doc).options.context;
    titleRow.appendChild(context);
  }
  return titleRow;
};
createTabs_fn = function() {
  const tabs = document.createElement("div");
  tabs.className = "doc-tabs";
  tabs.appendChild(__privateMethod(this, _DocPage_instances, createTab_fn).call(this, "Doc", "doc"));
  if (__privateGet(this, _api)) {
    tabs.appendChild(__privateMethod(this, _DocPage_instances, createTab_fn).call(this, "API", "api"));
  }
  if (__privateGet(this, _tests)) {
    tabs.appendChild(__privateMethod(this, _DocPage_instances, createTab_fn).call(this, "Test", "test"));
  }
  return tabs;
};
renderActiveTab_fn = function() {
  if (__privateGet(this, _activeTab) === "doc") {
    __privateMethod(this, _DocPage_instances, renderDocContent_fn).call(this);
  } else if (__privateGet(this, _activeTab) === "api") {
    __privateMethod(this, _DocPage_instances, renderApiContent_fn).call(this);
  } else if (__privateGet(this, _activeTab) === "test") {
    __privateMethod(this, _DocPage_instances, renderTestContent_fn).call(this);
  }
};
scrollToHash_fn = function() {
  const hash = window.location.hash;
  if (!hash) {
    return;
  }
  const targetId = hash.slice(1);
  requestAnimationFrame(() => {
    const target = this.shadowRoot.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ block: "start" });
    }
  });
};
createTab_fn = function(label, tab) {
  const isActive = __privateGet(this, _activeTab) === tab;
  {
    const link = document.createElement("a");
    link.className = `doc-tab ${isActive ? "active" : ""}`;
    link.textContent = label;
    link.href = getTabUrl(tab);
    return link;
  }
};
switchTab_fn = function(tab) {
  __privateSet(this, _activeTab, tab);
  __privateMethod(this, _DocPage_instances, render_fn).call(this);
};
renderDocContent_fn = function() {
  __privateGet(this, _contentEl).innerHTML = "";
  __privateGet(this, _tocEl).innerHTML = "";
  const sections = __privateGet(this, _doc).blocks.filter((b) => b.type === "section");
  if (sections.length > 1) {
    const tocTitle = document.createElement("div");
    tocTitle.className = "doc-toc-title";
    tocTitle.textContent = "Sections";
    __privateGet(this, _tocEl).appendChild(tocTitle);
    const tocList = document.createElement("nav");
    tocList.className = "doc-toc-list";
    for (const section of sections) {
      const sectionId = toKebabCase(section.title);
      const link = document.createElement("a");
      link.className = "doc-toc-link";
      link.textContent = section.title;
      link.href = `#${sectionId}`;
      tocList.appendChild(link);
    }
    __privateGet(this, _tocEl).appendChild(tocList);
  }
  for (const block of __privateGet(this, _doc).blocks) {
    __privateGet(this, _contentEl).appendChild(__privateMethod(this, _DocPage_instances, renderBlock_fn).call(this, block));
  }
};
renderApiContent_fn = function() {
  __privateGet(this, _contentEl).innerHTML = "";
  __privateGet(this, _tocEl).innerHTML = "";
  if (!__privateGet(this, _api)) {
    return;
  }
  const api = __privateGet(this, _api);
  if (api.extends) {
    const extendsEl = document.createElement("div");
    extendsEl.className = "api-extends";
    extendsEl.innerHTML = `extends <code>${api.extends}</code>`;
    __privateGet(this, _contentEl).appendChild(extendsEl);
  }
  if (api.file) {
    const fileEl = document.createElement("div");
    fileEl.className = "api-file";
    fileEl.textContent = api.file;
    __privateGet(this, _contentEl).appendChild(fileEl);
  }
  const categories = api.type === "module" ? [{ key: "functions", title: "Functions" }] : [
    { key: "statics", title: "Static" },
    { key: "constructor", title: "Constructor", single: true },
    { key: "methods", title: "Methods" },
    { key: "getters", title: "Getters" },
    { key: "setters", title: "Setters" }
  ];
  const tocTitle = document.createElement("div");
  tocTitle.className = "doc-toc-title";
  tocTitle.textContent = "API";
  __privateGet(this, _tocEl).appendChild(tocTitle);
  const tocList = document.createElement("nav");
  tocList.className = "doc-toc-list";
  for (const cat of categories) {
    const items = getApiItems(api, cat);
    if (items.length === 0) {
      continue;
    }
    const sectionId = toKebabCase(cat.title);
    const sectionEl = document.createElement("div");
    sectionEl.className = "api-section";
    sectionEl.id = sectionId;
    const sectionTitle = document.createElement("h2");
    sectionTitle.className = "api-section-title";
    sectionTitle.textContent = cat.title;
    sectionEl.appendChild(sectionTitle);
    for (const item of items) {
      sectionEl.appendChild(renderApiMember(item, api.file));
    }
    __privateGet(this, _contentEl).appendChild(sectionEl);
    const tocLink = document.createElement("a");
    tocLink.className = "doc-toc-link";
    tocLink.textContent = cat.title;
    tocLink.href = `#${sectionId}`;
    tocList.appendChild(tocLink);
  }
  __privateGet(this, _tocEl).appendChild(tocList);
};
renderTestContent_fn = function() {
  __privateGet(this, _contentEl).innerHTML = "";
  __privateGet(this, _tocEl).innerHTML = "";
  if (!__privateGet(this, _tests)) {
    return;
  }
  const tocTitle = document.createElement("div");
  tocTitle.className = "doc-toc-title";
  tocTitle.textContent = "Tests";
  __privateGet(this, _tocEl).appendChild(tocTitle);
  const tocList = document.createElement("nav");
  tocList.className = "doc-toc-list";
  for (const describe of __privateGet(this, _tests).describes) {
    __privateGet(this, _contentEl).appendChild(__privateMethod(this, _DocPage_instances, renderDescribe_fn).call(this, describe, tocList));
  }
  __privateGet(this, _tocEl).appendChild(tocList);
};
renderDescribe_fn = function(describe, tocList = null, depth = 0) {
  const sectionId = toKebabCase(describe.title);
  const wrapper = createDescribeWrapper(describe, sectionId, depth);
  addDescribeTocLink(tocList, describe.title, sectionId, depth);
  __privateMethod(this, _DocPage_instances, appendDescribeContent_fn).call(this, wrapper, describe, tocList, depth);
  return wrapper;
};
appendDescribeContent_fn = function(wrapper, describe, tocList, depth) {
  if (describe.beforeEach) {
    wrapper.appendChild(renderTestHook("beforeEach", describe.beforeEach));
  }
  if (describe.afterEach) {
    wrapper.appendChild(renderTestHook("afterEach", describe.afterEach));
  }
  for (const test of describe.tests) {
    wrapper.appendChild(renderTest(test));
  }
  for (const nested of describe.describes) {
    wrapper.appendChild(__privateMethod(this, _DocPage_instances, renderDescribe_fn).call(this, nested, tocList, depth + 1));
  }
};
renderBlock_fn = function(block, setup = null) {
  const renderers = {
    text: () => renderText(block),
    code: () => renderCode(block, __privateMethod(this, _DocPage_instances, getSourceFor_fn).call(this, block)),
    action: () => renderAction(block, setup, __privateMethod(this, _DocPage_instances, getSourceFor_fn).call(this, block)),
    section: () => __privateMethod(this, _DocPage_instances, renderSection_fn).call(this, block),
    container: () => __privateMethod(this, _DocPage_instances, renderContainer_fn).call(this, block, setup)
  };
  const renderer = renderers[block.type];
  return renderer ? renderer() : document.createElement("div");
};
getSourceFor_fn = function(block) {
  if (!__privateGet(this, _sources)) {
    return null;
  }
  const match = __privateGet(this, _sources).find(
    (s) => s.type === block.type && s.title === block.title
  );
  return (match == null ? void 0 : match.source) || null;
};
renderContainer_fn = function(block, setup = null) {
  const wrapper = document.createElement("div");
  wrapper.className = "doc-container-block";
  if (block.title) {
    const titleEl = document.createElement("div");
    titleEl.className = "doc-container-title";
    titleEl.textContent = block.title;
    wrapper.appendChild(titleEl);
  }
  const container = document.createElement("div");
  container.className = "doc-container-element";
  if (block.width) {
    container.style.width = `${block.width}px`;
  }
  container.style.height = `${block.height}px`;
  const button = document.createElement("button");
  button.className = "doc-action-btn";
  button.innerHTML = `
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
            </svg>
            Run
        `;
  const setResetState = () => {
    button.classList.add("doc-action-btn--reset");
    button.innerHTML = `
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.65 6.35A7.958 7.958 0 0012 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0112 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
                </svg>
                Reset
            `;
  };
  const overlayBtn = document.createElement("button");
  overlayBtn.className = "doc-container-run-overlay";
  overlayBtn.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
            </svg>
        `;
  overlayBtn.addEventListener("click", () => {
    overlayBtn.remove();
    executeContainer(block, container, setup);
    setResetState();
  });
  container.appendChild(overlayBtn);
  wrapper.appendChild(container);
  __privateGet(this, _containers).push(container);
  const codeWrapper = document.createElement("div");
  codeWrapper.className = "doc-container-code";
  const codeEl = document.createElement("perky-code");
  codeEl.setAttribute("title", block.title || "Container");
  codeEl.code = __privateMethod(this, _DocPage_instances, getSourceFor_fn).call(this, block) || block.source;
  codeWrapper.appendChild(codeEl);
  button.addEventListener("click", () => {
    if (overlayBtn.parentNode) {
      overlayBtn.remove();
    }
    executeContainer(block, container, setup);
    setResetState();
  });
  codeWrapper.appendChild(button);
  wrapper.appendChild(codeWrapper);
  return wrapper;
};
renderSection_fn = function(block) {
  const sectionId = toKebabCase(block.title);
  const wrapper = document.createElement("div");
  wrapper.className = "doc-section";
  wrapper.id = sectionId;
  const header = document.createElement("h2");
  header.className = "doc-section-title";
  header.textContent = block.title;
  wrapper.appendChild(header);
  if (block.setup) {
    const setupEl = document.createElement("div");
    setupEl.className = "doc-setup-block";
    const codeEl = document.createElement("perky-code");
    codeEl.setAttribute("title", "Setup");
    codeEl.code = block.setup.source;
    setupEl.appendChild(codeEl);
    wrapper.appendChild(setupEl);
  }
  const content = document.createElement("div");
  content.className = "doc-section-content";
  for (const childBlock of block.blocks) {
    content.appendChild(__privateMethod(this, _DocPage_instances, renderBlock_fn).call(this, childBlock, block.setup));
  }
  wrapper.appendChild(content);
  return wrapper;
};
function getTabUrl(tab) {
  const pathname = window.location.pathname;
  const filename = pathname.split("/").pop();
  const baseName = filename.replace("_api.html", "").replace("_test.html", "").replace(".html", "");
  if (tab === "api") {
    return `${baseName}_api.html`;
  }
  if (tab === "test") {
    return `${baseName}_test.html`;
  }
  return `${baseName}.html`;
}
function renderText(block) {
  const el = document.createElement("div");
  el.className = "doc-text";
  el.innerHTML = parseMarkdown(block.content);
  return el;
}
function createDescribeWrapper(describe, sectionId, depth) {
  const wrapper = document.createElement("div");
  wrapper.className = depth === 0 ? "test-describe" : "test-describe-nested";
  wrapper.id = depth <= 1 ? sectionId : "";
  const header = document.createElement("h2");
  header.className = depth === 0 ? "test-describe-title" : "test-describe-subtitle";
  header.textContent = describe.title;
  wrapper.appendChild(header);
  return wrapper;
}
function addDescribeTocLink(tocList, title, sectionId, depth) {
  if (!tocList || depth > 1) {
    return;
  }
  const tocLink = document.createElement("a");
  tocLink.className = depth === 0 ? "doc-toc-link doc-toc-root" : "doc-toc-link";
  tocLink.textContent = title;
  tocLink.href = `#${sectionId}`;
  tocList.appendChild(tocLink);
}
function renderTestHook(name, hook) {
  const wrapper = document.createElement("div");
  wrapper.className = "test-hook";
  const label = document.createElement("div");
  label.className = "test-hook-label";
  label.textContent = name;
  wrapper.appendChild(label);
  if (hook.source) {
    const codeEl = document.createElement("perky-code");
    codeEl.setAttribute("title", name);
    codeEl.code = hook.source;
    wrapper.appendChild(codeEl);
  }
  return wrapper;
}
function renderTest(test) {
  const wrapper = document.createElement("div");
  wrapper.className = "test-case";
  const codeEl = document.createElement("perky-code");
  codeEl.setAttribute("title", test.title);
  codeEl.code = test.source || "";
  wrapper.appendChild(codeEl);
  return wrapper;
}
function renderAction(block, setup = null, extractedSource = null) {
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
  button.addEventListener("click", () => executeAction(block, setup));
  wrapper.appendChild(button);
  return wrapper;
}
function addSpacerIfNeeded() {
  const hasVisibleLogs = logger.history.some((e) => e.event === "log");
  const lastEntry = logger.history[logger.history.length - 1];
  const lastIsSpacer = (lastEntry == null ? void 0 : lastEntry.event) === "spacer";
  if (hasVisibleLogs && !lastIsSpacer) {
    logger.spacer();
  }
}
async function executeAction(block, setup = null) {
  try {
    addSpacerIfNeeded();
    const ctx = {};
    if (setup == null ? void 0 : setup.fn) {
      await setup.fn(ctx);
    }
    await block.fn(ctx);
  } catch (error) {
    logger.error("Action error:", error.message);
  }
}
async function executeContainer(block, container, setup = null) {
  addSpacerIfNeeded();
  const prevApp = container._currentApp;
  if (prevApp == null ? void 0 : prevApp.dispose) {
    prevApp.dispose();
  }
  container.innerHTML = "";
  if (block.preset) {
    applyContainerPreset(container, block.preset);
  }
  if (block.scrollable) {
    container.style.overflow = "auto";
  }
  try {
    let actionsBar = null;
    let slidersBar = null;
    let infoBar = null;
    const ctx = {
      container,
      setApp: (app, ...args) => {
        container._currentApp = app;
        const [scene] = args;
        if (scene && app.autoFitEnabled && app.render) {
          app.on("resize", () => app.render(scene));
        }
      },
      action: (label, fn) => {
        if (!actionsBar) {
          actionsBar = document.createElement("div");
          actionsBar.className = "doc-actions-bar";
          container.appendChild(actionsBar);
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
          fn();
        });
        actionsBar.appendChild(btn);
        if (isFirst) {
          fn();
        }
      },
      slider: (label, opts, onChange) => {
        if (!slidersBar) {
          slidersBar = document.createElement("div");
          slidersBar.className = "doc-sliders-bar";
          container.appendChild(slidersBar);
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
      },
      info: (fn) => {
        if (!infoBar) {
          infoBar = document.createElement("div");
          infoBar.className = "doc-info-bar";
          container.appendChild(infoBar);
        }
        const el = document.createElement("div");
        el.className = "doc-info";
        infoBar.appendChild(el);
        const update = (...args) => {
          el.textContent = fn(...args);
        };
        update();
        return update;
      },
      hint: (text) => {
        const el = document.createElement("div");
        el.className = "doc-hint";
        el.textContent = text;
        container.appendChild(el);
      },
      display: (fn) => {
        const el = document.createElement("div");
        el.className = "doc-display";
        container.appendChild(el);
        const update = (...args) => {
          const result = fn(...args);
          if (Array.isArray(result)) {
            el.innerHTML = result.map((item) => `<span class="doc-display-tag">${item}</span>`).join("");
          } else {
            el.innerHTML = result;
          }
        };
        update();
        return update;
      }
    };
    if (setup == null ? void 0 : setup.fn) {
      await setup.fn(ctx);
    }
    await block.fn(ctx);
    if (container.tabIndex >= 0) {
      container.focus();
    }
  } catch (error) {
    logger.error("Container error:", error.message);
  }
}
function getApiItems(api, cat) {
  if (cat.single) {
    return api[cat.key] ? [api[cat.key]] : [];
  }
  return api[cat.key] || [];
}
function renderApiMember(member, file) {
  const wrapper = document.createElement("div");
  wrapper.className = "api-member";
  const header = document.createElement("div");
  header.className = "api-member-header";
  const signature = document.createElement("span");
  signature.className = "api-member-name";
  if (member.params) {
    signature.textContent = `${member.name}(${member.params.join(", ")})`;
  } else if (member.value) {
    signature.innerHTML = `${member.name} = <code>${member.value}</code>`;
  } else {
    signature.textContent = member.name;
  }
  header.appendChild(signature);
  if (member.line && file) {
    const lineLink = document.createElement("span");
    lineLink.className = "api-member-line";
    lineLink.textContent = `:${member.line}`;
    header.appendChild(lineLink);
  }
  const toggle = document.createElement("button");
  toggle.className = "api-toggle";
  toggle.innerHTML = `
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 10l5 5 5-5z"/>
        </svg>
    `;
  header.appendChild(toggle);
  wrapper.appendChild(header);
  const codeWrapper = document.createElement("div");
  codeWrapper.className = "api-code-wrapper";
  const codeEl = document.createElement("perky-code");
  codeEl.code = member.source;
  codeEl.setAttribute("no-header", "");
  codeWrapper.appendChild(codeEl);
  wrapper.appendChild(codeWrapper);
  toggle.addEventListener("click", () => {
    wrapper.classList.toggle("expanded");
  });
  header.addEventListener("click", (e) => {
    if (e.target !== toggle && !toggle.contains(e.target)) {
      wrapper.classList.toggle("expanded");
    }
  });
  return wrapper;
}
function renderCode(block, extractedSource = null) {
  const wrapper = document.createElement("div");
  wrapper.className = "doc-code-block";
  const codeEl = document.createElement("perky-code");
  codeEl.setAttribute("title", block.title);
  codeEl.code = extractedSource || block.source;
  wrapper.appendChild(codeEl);
  return wrapper;
}
function parseMarkdown(text) {
  return text.replace(/`([^`]+)`/g, "<code>$1</code>").replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/\*([^*]+)\*/g, "<em>$1</em>").split("\n\n").filter((p) => p.trim()).map((p) => `<p>${p.trim()}</p>`).join("");
}
const STYLES$1 = buildEditorStyles(
  editorButtonStyles,
  editorScrollbarStyles,
  `
    :host {
        display: block;
        font-family: var(--font-mono);
        height: 100%;
        overflow-y: auto;
        scroll-padding-top: 80px;
    }

    .doc-page {
        width: 100%;
        max-width: 1000px;
    }

    .doc-layout {
        display: flex;
        gap: 3rem;
    }

    .doc-main {
        flex: 1;
        min-width: 0;
    }

    .doc-toc {
        width: 160px;
        flex-shrink: 0;
        position: sticky;
        top: 0;
        align-self: flex-start;
        padding-top: 0.5rem;
    }

    .doc-toc-title {
        font-size: 0.7rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        color: var(--fg-muted);
        margin-bottom: 0.75rem;
    }

    .doc-toc-list {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
    }

    .doc-toc-link {
        font-size: 0.8rem;
        color: var(--fg-secondary);
        text-decoration: none;
        padding: 0.25rem 0;
        transition: color 0.15s;
    }

    .doc-toc-link:hover {
        color: var(--accent);
    }

    .doc-header {
        position: sticky;
        top: 0;
        z-index: 100;
        background: var(--bg-primary);
        margin-bottom: 2rem;
        padding: 1rem 0;
        border-bottom: 1px solid var(--border);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }

    .doc-title-row {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .doc-header h1 {
        font-family: var(--font-mono);
        font-size: 1.5rem;
        font-weight: 500;
        margin: 0;
        color: var(--fg-primary);
    }

    .doc-context {
        font-family: var(--font-mono);
        font-size: 0.7rem;
        padding: 0.2rem 0.5rem;
        background: var(--bg-hover);
        border-radius: 4px;
        color: var(--fg-muted);
    }

    .doc-tabs {
        display: flex;
        gap: 0.25rem;
        background: var(--bg-secondary);
        padding: 0.2rem;
        border-radius: 6px;
    }

    .doc-tab {
        font-family: var(--font-mono);
        font-size: 0.75rem;
        padding: 0.4rem 0.8rem;
        background: transparent;
        border: none;
        border-radius: 4px;
        color: var(--fg-muted);
        cursor: pointer;
        transition: all 0.15s;
    }

    .doc-tab:hover {
        color: var(--fg-primary);
    }

    .doc-tab.active {
        background: var(--bg-primary);
        color: var(--fg-primary);
    }

    .doc-content {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .doc-text {
        color: var(--fg-secondary);
        line-height: 1.6;
        font-size: 13px;
    }

    .doc-text p {
        margin: 0 0 0.5rem 0;
    }

    .doc-text p:last-child {
        margin-bottom: 0;
    }

    .doc-text code {
        font-family: var(--font-mono);
        background: var(--bg-hover);
        padding: 0.1rem 0.35rem;
        border-radius: 3px;
        font-size: 0.9em;
        color: var(--accent-secondary, #c084fc);
    }

    .doc-code-block {
        position: relative;
    }

    .doc-action-block {
        position: relative;
    }

    .doc-action-btn {
        position: absolute;
        top: 8px;
        right: 70px;
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        padding: 0.3rem 0.6rem;
        background: var(--accent);
        color: var(--bg-primary);
        border: none;
        border-radius: 4px;
        font-family: var(--font-mono);
        font-size: 10px;
        font-weight: 500;
        cursor: pointer;
        transition: filter 0.15s, transform 0.1s;
        z-index: 10;
    }

    .doc-action-btn:hover {
        filter: brightness(1.15);
    }

    .doc-action-btn:active {
        transform: scale(0.97);
    }

    .doc-action-btn--reset {
        background: var(--fg-muted);
    }

    .doc-action-btn svg {
        flex-shrink: 0;
    }

    .doc-section {
        margin-top: 2rem;
        padding-top: 1.5rem;
        border-top: 1px solid var(--border);
    }

    .doc-section:first-child {
        margin-top: 0.5rem;
        padding-top: 0;
        border-top: none;
    }

    .doc-section-title {
        font-family: var(--font-mono);
        font-size: 1.1rem;
        font-weight: 500;
        margin: 0 0 1.25rem 0;
        color: var(--fg-primary);
    }

    .doc-section-content {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .doc-setup-block {
        position: relative;
        margin-bottom: 0.75rem;
        opacity: 0.7;
    }

    .doc-app-container {
        width: 100%;
        height: 400px;
        background: var(--bg-secondary);
        border: 1px solid var(--border);
        border-radius: 6px;
        margin-bottom: 1.5rem;
        position: relative;
        overflow: hidden;
    }

    .doc-container-block {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    .doc-container-title {
        font-size: 0.75rem;
        font-weight: 500;
        color: var(--fg-muted);
        margin-bottom: 0.5rem;
    }

    .doc-container-element {
        background: var(--bg-secondary);
        border: 1px solid var(--border);
        border-radius: 6px;
        overflow: hidden;
        position: relative;
    }

    .doc-actions-bar {
        position: absolute;
        top: 8px;
        left: 8px;
        display: flex;
        gap: 4px;
        z-index: 10;
    }

    .doc-actions-btn {
        padding: 4px 10px;
        background: rgba(0, 0, 0, 0.4);
        color: var(--fg-muted);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 4px;
        font-family: var(--font-mono);
        font-size: 11px;
        cursor: pointer;
        transition: background 0.15s, color 0.15s, border-color 0.15s;
    }

    .doc-actions-btn:hover {
        background: rgba(0, 0, 0, 0.6);
        color: var(--fg-primary);
    }

    .doc-actions-btn--active {
        background: var(--accent);
        color: var(--bg-primary);
        border-color: var(--accent);
    }

    .doc-actions-btn--active:hover {
        background: var(--accent);
        color: var(--bg-primary);
    }

    .doc-info-bar {
        position: absolute;
        top: 8px;
        right: 8px;
        display: flex;
        flex-direction: column;
        gap: 4px;
        z-index: 10;
    }

    .doc-info {
        font-family: var(--font-mono);
        font-size: 12px;
        color: #fff;
        background: rgba(0, 0, 0, 0.5);
        padding: 4px 8px;
        border-radius: 4px;
    }

    .doc-sliders-bar {
        position: absolute;
        bottom: 8px;
        left: 8px;
        right: 8px;
        display: flex;
        flex-wrap: wrap;
        gap: 8px 16px;
        z-index: 10;
    }

    .doc-slider-wrapper {
        display: flex;
        align-items: center;
        gap: 8px;
        flex: 1 1 200px;
        max-width: 100%;
    }

    .doc-slider-label {
        font-family: var(--font-mono);
        font-size: 11px;
        color: rgba(255, 255, 255, 0.7);
        white-space: nowrap;
        flex-shrink: 0;
    }

    .doc-slider-value {
        font-family: var(--font-mono);
        font-size: 11px;
        color: var(--accent);
        min-width: 32px;
        text-align: left;
        flex-shrink: 0;
    }

    .doc-slider {
        flex: 1;
        height: 4px;
        -webkit-appearance: none;
        appearance: none;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 2px;
        cursor: pointer;
    }

    .doc-slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 14px;
        height: 14px;
        background: var(--accent);
        border-radius: 50%;
        cursor: pointer;
        transition: transform 0.1s;
    }

    .doc-slider::-webkit-slider-thumb:hover {
        transform: scale(1.2);
    }

    .doc-slider::-moz-range-thumb {
        width: 14px;
        height: 14px;
        background: var(--accent);
        border: none;
        border-radius: 50%;
        cursor: pointer;
    }

    .doc-container-run-overlay {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        border: none;
        cursor: pointer;
        color: var(--fg-muted);
        transition: color 0.15s, background 0.15s;
    }

    .doc-container-run-overlay:hover {
        background: rgba(255, 255, 255, 0.05);
        color: var(--accent);
    }

    .doc-container-run-overlay svg {
        opacity: 0.6;
        transition: opacity 0.15s, transform 0.15s;
    }

    .doc-container-run-overlay:hover svg {
        opacity: 1;
        transform: scale(1.1);
    }

    .doc-container-element .doc-hint {
        font-size: 12px;
        opacity: 0.6;
        margin-bottom: 16px;
    }

    .doc-container-element .doc-display {
        font-size: 24px;
        min-height: 32px;
    }

    .doc-container-element .doc-display-alt {
        font-size: 20px;
        color: #e94560;
    }

    .doc-container-element .doc-display-tag {
        display: inline-block;
        background: #e94560;
        padding: 4px 8px;
        margin: 2px;
        border-radius: 4px;
        font-size: 16px;
    }

    .doc-container-code {
        position: relative;
    }


    .api-extends {
        font-size: 0.85rem;
        color: var(--fg-muted);
        margin-bottom: 0.5rem;
    }

    .api-extends code {
        font-family: var(--font-mono);
        color: var(--accent);
    }

    .api-file {
        font-size: 0.75rem;
        color: var(--fg-muted);
        margin-bottom: 1.5rem;
    }

    .api-section {
        margin-bottom: 2rem;
    }

    .api-section-title {
        font-family: var(--font-mono);
        font-size: 0.9rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        color: var(--fg-muted);
        margin: 0 0 1rem 0;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid var(--border);
    }

    .api-member {
        margin-bottom: 0.5rem;
        border-radius: 6px;
        overflow: hidden;
        border: 1px solid var(--border);
    }

    .api-member-header {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem 0.75rem;
        background: var(--bg-secondary);
        cursor: pointer;
        transition: background 0.15s;
    }

    .api-member-header:hover {
        background: var(--bg-hover);
    }

    .api-member.expanded .api-member-header {
        border-radius: 0;
    }

    .api-member-name {
        font-family: var(--font-mono);
        font-size: 0.85rem;
        color: var(--fg-primary);
        flex: 1;
    }

    .api-member-name code {
        font-family: var(--font-mono);
        color: var(--accent);
        font-size: 0.8rem;
    }

    .api-member-line {
        font-family: var(--font-mono);
        font-size: 0.7rem;
        color: var(--fg-muted);
    }

    .api-toggle {
        background: transparent;
        border: none;
        padding: 0.25rem;
        cursor: pointer;
        color: var(--fg-muted);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.2s;
    }

    .api-member.expanded .api-toggle {
        transform: rotate(180deg);
    }

    .api-code-wrapper {
        display: none;
    }

    .api-member.expanded .api-code-wrapper {
        display: block;
    }

    .api-code-wrapper perky-code {
        margin: 0;
        border: none;
        border-radius: 0;
    }


    .test-describe {
        margin-bottom: 2rem;
    }

    .test-describe-title {
        font-family: var(--font-mono);
        font-size: 1.1rem;
        font-weight: 600;
        color: var(--fg-primary);
        margin: 0 0 1rem 0;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid var(--border);
    }

    .test-describe-nested {
        margin: 1.5rem 0;
        padding-left: 1rem;
        border-left: 2px solid var(--border);
    }

    .test-describe-subtitle {
        font-family: var(--font-mono);
        font-size: 0.9rem;
        font-weight: 500;
        color: var(--fg-secondary);
        margin: 0 0 0.75rem 0;
    }

    .test-hook {
        margin-bottom: 1rem;
        opacity: 0.7;
    }

    .test-hook-label {
        font-family: var(--font-mono);
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        color: var(--fg-muted);
        margin-bottom: 0.25rem;
    }

    .test-case {
        margin-bottom: 0.75rem;
    }

    .test-case perky-code {
        margin: 0;
    }

    @media (max-width: 900px) {
        .doc-toc {
            display: none;
        }
    }
`
);
customElements.define("doc-page", DocPage);
const MAX_PREVIEW_KEYS = 5;
const MAX_STRING_LENGTH$1 = 50;
function formatString$2(str) {
  const truncated = str.length > MAX_STRING_LENGTH$1 ? str.slice(0, MAX_STRING_LENGTH$1) + "..." : str;
  return `"${truncated}"`;
}
function formatObject$2(obj) {
  var _a;
  if (Array.isArray(obj)) {
    return `Array(${obj.length})`;
  }
  const name = (_a = obj.constructor) == null ? void 0 : _a.name;
  return name && name !== "Object" ? name : "{...}";
}
function formatValue$1(value) {
  if (value === null) {
    return "null";
  }
  if (value === void 0) {
    return "undefined";
  }
  if (typeof value === "string") {
    return formatString$2(value);
  }
  if (typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }
  if (typeof value === "function") {
    return "f()";
  }
  if (typeof value === "object") {
    return formatObject$2(value);
  }
  return String(value);
}
function createPreview$1(obj) {
  const keys = Object.keys(obj);
  const previewKeys = keys.slice(0, MAX_PREVIEW_KEYS);
  const parts = previewKeys.map((key) => `${key}: ${formatValue$1(obj[key])}`);
  if (keys.length > MAX_PREVIEW_KEYS) {
    parts.push("...");
  }
  return `{${parts.join(", ")}}`;
}
function renderExpandedContent$2(obj, container) {
  const keys = Object.keys(obj);
  const methods = [];
  const properties = [];
  for (const key of keys) {
    if (typeof obj[key] === "function") {
      methods.push(key);
    } else {
      properties.push(key);
    }
  }
  for (const key of properties) {
    const row = document.createElement("div");
    row.className = "log-object-row";
    const keyEl = document.createElement("span");
    keyEl.className = "log-object-key";
    keyEl.textContent = key;
    const separator = document.createElement("span");
    separator.className = "log-object-separator";
    separator.textContent = ": ";
    const valueEl = document.createElement("span");
    valueEl.className = "log-object-value";
    const customRender = renderLogItem(obj[key]);
    if (customRender) {
      valueEl.appendChild(customRender);
    } else {
      valueEl.textContent = formatValue$1(obj[key]);
    }
    row.appendChild(keyEl);
    row.appendChild(separator);
    row.appendChild(valueEl);
    container.appendChild(row);
  }
  if (methods.length > 0) {
    const row = document.createElement("div");
    row.className = "log-object-row log-object-methods-row";
    const keyEl = document.createElement("span");
    keyEl.className = "log-object-key";
    keyEl.textContent = "methods";
    const separator = document.createElement("span");
    separator.className = "log-object-separator";
    separator.textContent = ": ";
    const valueEl = document.createElement("span");
    valueEl.className = "log-object-value log-object-methods";
    for (let i = 0; i < methods.length; i++) {
      const methodSpan = document.createElement("span");
      methodSpan.className = "log-object-method-name";
      methodSpan.textContent = methods[i];
      valueEl.appendChild(methodSpan);
      if (i < methods.length - 1) {
        valueEl.appendChild(document.createTextNode(", "));
      }
    }
    row.appendChild(keyEl);
    row.appendChild(separator);
    row.appendChild(valueEl);
    container.appendChild(row);
  }
}
const objectLogRenderer = {
  match(item) {
    var _a;
    return item !== null && typeof item === "object" && !Array.isArray(item) && ((_a = item.constructor) == null ? void 0 : _a.name) === "Object";
  },
  render(obj) {
    const container = document.createElement("span");
    container.className = "log-object";
    const toggle = document.createElement("span");
    toggle.className = "log-object-toggle";
    toggle.textContent = "▶";
    const preview = document.createElement("span");
    preview.className = "log-object-preview";
    preview.textContent = createPreview$1(obj);
    const expanded = document.createElement("div");
    expanded.className = "log-object-expanded";
    expanded.style.display = "none";
    let isExpanded = false;
    let hasRenderedContent = false;
    const header = document.createElement("span");
    header.className = "log-object-header";
    header.style.cursor = "pointer";
    header.appendChild(toggle);
    header.appendChild(preview);
    header.addEventListener("click", () => {
      isExpanded = !isExpanded;
      if (isExpanded && !hasRenderedContent) {
        renderExpandedContent$2(obj, expanded);
        hasRenderedContent = true;
      }
      toggle.textContent = isExpanded ? "▼" : "▶";
      expanded.style.display = isExpanded ? "block" : "none";
      preview.style.display = isExpanded ? "none" : "inline";
    });
    container.appendChild(header);
    container.appendChild(expanded);
    return container;
  }
};
registerLogRenderer(objectLogRenderer);
const MAX_PREVIEW_ITEMS = 5;
function formatString$1(str) {
  const truncated = str.length > 20 ? str.slice(0, 20) + "..." : str;
  return `"${truncated}"`;
}
function formatObject$1(obj) {
  var _a;
  if (Array.isArray(obj)) {
    return `Array(${obj.length})`;
  }
  return ((_a = obj.constructor) == null ? void 0 : _a.name) || "Object";
}
function getItemLabel(item) {
  if (item === null) {
    return "null";
  }
  if (item === void 0) {
    return "undefined";
  }
  if (typeof item === "string") {
    return formatString$1(item);
  }
  if (typeof item === "number" || typeof item === "boolean") {
    return String(item);
  }
  if (typeof item === "object") {
    return formatObject$1(item);
  }
  return String(item);
}
function createPreview(arr) {
  const previewItems = arr.slice(0, MAX_PREVIEW_ITEMS);
  const parts = previewItems.map(getItemLabel);
  if (arr.length > MAX_PREVIEW_ITEMS) {
    parts.push(`... +${arr.length - MAX_PREVIEW_ITEMS} more`);
  }
  return `(${arr.length}) [${parts.join(", ")}]`;
}
function renderExpandedContent$1(arr, container) {
  for (let i = 0; i < arr.length; i++) {
    const row = document.createElement("div");
    row.className = "log-array-row";
    const indexEl = document.createElement("span");
    indexEl.className = "log-array-index";
    indexEl.textContent = i;
    const separator = document.createElement("span");
    separator.className = "log-array-separator";
    separator.textContent = ": ";
    const valueEl = document.createElement("span");
    valueEl.className = "log-array-value";
    const customRender = renderLogItem(arr[i]);
    if (customRender) {
      valueEl.appendChild(customRender);
    } else {
      valueEl.textContent = getItemLabel(arr[i]);
    }
    row.appendChild(indexEl);
    row.appendChild(separator);
    row.appendChild(valueEl);
    container.appendChild(row);
  }
  const lengthRow = document.createElement("div");
  lengthRow.className = "log-array-row log-array-length";
  lengthRow.textContent = `length: ${arr.length}`;
  container.appendChild(lengthRow);
}
const arrayLogRenderer = {
  match(item) {
    return Array.isArray(item);
  },
  render(arr) {
    const container = document.createElement("span");
    container.className = "log-array";
    const toggle = document.createElement("span");
    toggle.className = "log-array-toggle";
    toggle.textContent = "▶";
    const preview = document.createElement("span");
    preview.className = "log-array-preview";
    preview.textContent = createPreview(arr);
    const expanded = document.createElement("div");
    expanded.className = "log-array-expanded";
    expanded.style.display = "none";
    let isExpanded = false;
    let hasRenderedContent = false;
    const header = document.createElement("span");
    header.className = "log-array-header";
    header.style.cursor = "pointer";
    header.appendChild(toggle);
    header.appendChild(preview);
    header.addEventListener("click", () => {
      isExpanded = !isExpanded;
      if (isExpanded && !hasRenderedContent) {
        renderExpandedContent$1(arr, expanded);
        hasRenderedContent = true;
      }
      toggle.textContent = isExpanded ? "▼" : "▶";
      expanded.style.display = isExpanded ? "block" : "none";
      preview.style.display = isExpanded ? "none" : "inline";
    });
    container.appendChild(header);
    container.appendChild(expanded);
    return container;
  }
};
registerLogRenderer(arrayLogRenderer);
const IGNORED_KEYS = /* @__PURE__ */ new Set([
  "options",
  "host",
  "children",
  "childrenRegistry",
  "tags",
  "started",
  "disposed",
  "installed",
  "running"
]);
function createCompactLabel(module, container) {
  var _a;
  const name = module.$name || ((_a = module.constructor) == null ? void 0 : _a.name) || "Module";
  const category = module.$category || "";
  const id = module.$id || "";
  const nameSpan = document.createElement("span");
  nameSpan.className = "log-module-name";
  if (name === id) {
    nameSpan.textContent = name;
  } else {
    nameSpan.textContent = `${name} #${id}`;
  }
  container.appendChild(nameSpan);
  if (category && category !== name && category !== id) {
    const categorySpan = document.createElement("span");
    categorySpan.className = "log-module-category";
    categorySpan.textContent = ` (${category})`;
    container.appendChild(categorySpan);
  }
}
function getPropertyKeys(module) {
  const keys = [];
  for (const key of Object.keys(module)) {
    if (!IGNORED_KEYS.has(key) && !key.startsWith("_")) {
      keys.push(key);
    }
  }
  return keys;
}
const MAX_STRING_LENGTH = 30;
function formatString(str) {
  const truncated = str.length > MAX_STRING_LENGTH ? str.slice(0, MAX_STRING_LENGTH) + "..." : str;
  return `"${truncated}"`;
}
function formatObject(obj) {
  var _a;
  if (Array.isArray(obj)) {
    return `Array(${obj.length})`;
  }
  return ((_a = obj.constructor) == null ? void 0 : _a.name) || "{...}";
}
function formatValue(value) {
  if (value === null) {
    return "null";
  }
  if (value === void 0) {
    return "undefined";
  }
  if (typeof value === "string") {
    return formatString(value);
  }
  if (typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }
  if (typeof value === "function") {
    return "f()";
  }
  if (typeof value === "object") {
    return formatObject(value);
  }
  return String(value);
}
function createRow(className, keyText, valueContent) {
  const row = document.createElement("div");
  row.className = className;
  const keyEl = document.createElement("span");
  keyEl.className = "log-module-key";
  keyEl.textContent = keyText;
  const separator = document.createElement("span");
  separator.className = "log-module-separator";
  separator.textContent = ": ";
  const valueEl = document.createElement("span");
  valueEl.className = "log-module-value";
  if (typeof valueContent === "string") {
    valueEl.textContent = valueContent;
  } else if (valueContent instanceof Node) {
    valueEl.appendChild(valueContent);
  }
  row.appendChild(keyEl);
  row.appendChild(separator);
  row.appendChild(valueEl);
  return { row, valueEl };
}
function renderMetaSection(module) {
  var _a, _b;
  const metaSection = document.createElement("div");
  metaSection.className = "log-module-meta";
  const metaItems = [
    { label: "$id", value: module.$id },
    { label: "$name", value: module.$name },
    { label: "$category", value: module.$category },
    { label: "$status", value: module.$status },
    { label: "$tags", value: ((_a = module.$tags) == null ? void 0 : _a.join(", ")) || "(none)" },
    { label: "children", value: ((_b = module.children) == null ? void 0 : _b.length) || 0 }
  ];
  for (const { label, value } of metaItems) {
    const { row, valueEl } = createRow("log-module-row log-module-meta-row", label, String(value));
    valueEl.className = "log-module-value log-module-meta-value";
    metaSection.appendChild(row);
  }
  return metaSection;
}
function renderPropsSection(module, properties) {
  const propsSection = document.createElement("div");
  propsSection.className = "log-module-props";
  for (const key of properties) {
    const customRender = renderLogItem(module[key]);
    const content = customRender || formatValue(module[key]);
    const { row, valueEl } = createRow("log-module-row", key, content);
    if (!customRender) {
      valueEl.textContent = content;
    }
    propsSection.appendChild(row);
  }
  return propsSection;
}
function renderMethodsSection(methods) {
  const methodsSection = document.createElement("div");
  methodsSection.className = "log-module-methods";
  const { row, valueEl } = createRow("log-module-row log-module-methods-row", "methods", "");
  for (let i = 0; i < methods.length; i++) {
    const methodSpan = document.createElement("span");
    methodSpan.className = "log-module-method-name";
    methodSpan.textContent = methods[i];
    valueEl.appendChild(methodSpan);
    if (i < methods.length - 1) {
      valueEl.appendChild(document.createTextNode(", "));
    }
  }
  methodsSection.appendChild(row);
  return methodsSection;
}
function separatePropertiesAndMethods(module) {
  const propsKeys = getPropertyKeys(module);
  const methods = [];
  const properties = [];
  for (const key of propsKeys) {
    if (typeof module[key] === "function") {
      methods.push(key);
    } else {
      properties.push(key);
    }
  }
  return { methods, properties };
}
function renderExpandedContent(module, container) {
  container.appendChild(renderMetaSection(module));
  const { methods, properties } = separatePropertiesAndMethods(module);
  if (properties.length > 0) {
    container.appendChild(renderPropsSection(module, properties));
  }
  if (methods.length > 0) {
    container.appendChild(renderMethodsSection(methods));
  }
}
const perkyModuleLogRenderer = {
  match(item) {
    return item !== null && typeof item === "object" && typeof item.$id !== "undefined" && typeof item.$name !== "undefined" && typeof item.$category !== "undefined";
  },
  render(module) {
    const container = document.createElement("span");
    container.className = "log-module";
    const toggle = document.createElement("span");
    toggle.className = "log-module-toggle";
    toggle.textContent = "▶";
    const label = document.createElement("span");
    label.className = "log-module-label";
    createCompactLabel(module, label);
    const expanded = document.createElement("div");
    expanded.className = "log-module-expanded";
    expanded.style.display = "none";
    let isExpanded = false;
    let hasRenderedContent = false;
    const header = document.createElement("span");
    header.className = "log-module-header";
    header.style.cursor = "pointer";
    header.appendChild(toggle);
    header.appendChild(label);
    header.addEventListener("click", () => {
      isExpanded = !isExpanded;
      if (isExpanded && !hasRenderedContent) {
        renderExpandedContent(module, expanded);
        hasRenderedContent = true;
      }
      toggle.textContent = isExpanded ? "▼" : "▶";
      expanded.style.display = isExpanded ? "block" : "none";
    });
    container.appendChild(header);
    container.appendChild(expanded);
    return container;
  }
};
registerLogRenderer(perkyModuleLogRenderer);
function createLoggerContent() {
  const content = document.createElement("div");
  content.className = "logger-content";
  return content;
}
class PerkyLogger extends HTMLElement {
  constructor() {
    super();
    __privateAdd(this, _PerkyLogger_instances);
    __privateAdd(this, _maxEntries, 50);
    __privateAdd(this, _position, "bottom");
    __privateAdd(this, _timestamp, false);
    __privateAdd(this, _theme2, "");
    __privateAdd(this, _entries, []);
    __privateAdd(this, _containerEl3, null);
    __privateAdd(this, _contentEl2, null);
    __privateAdd(this, _controlsEl, null);
    __privateAdd(this, _opacityToggle, null);
    __privateAdd(this, _isPinned, true);
    __privateAdd(this, _onLog, null);
    __privateAdd(this, _onClear, null);
    __privateAdd(this, _onSpacer, null);
    __privateAdd(this, _onTitle, null);
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    __privateMethod(this, _PerkyLogger_instances, buildDOM_fn3).call(this);
    __privateMethod(this, _PerkyLogger_instances, bindLoggerEvents_fn).call(this);
  }
  disconnectedCallback() {
    __privateMethod(this, _PerkyLogger_instances, unbindLoggerEvents_fn).call(this);
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) {
      return;
    }
    __privateMethod(this, _PerkyLogger_instances, handleAttributeChange_fn2).call(this, name, newValue);
  }
  get maxEntries() {
    return __privateGet(this, _maxEntries);
  }
  set maxEntries(value) {
    __privateSet(this, _maxEntries, value);
    this.setAttribute("max-entries", value);
  }
  get position() {
    return __privateGet(this, _position);
  }
  set position(value) {
    __privateSet(this, _position, value);
    this.setAttribute("position", value);
    __privateMethod(this, _PerkyLogger_instances, updateClasses_fn).call(this);
  }
  get timestamp() {
    return __privateGet(this, _timestamp);
  }
  set timestamp(value) {
    __privateSet(this, _timestamp, value);
    if (value) {
      this.setAttribute("timestamp", "");
    } else {
      this.removeAttribute("timestamp");
    }
  }
  get theme() {
    return __privateGet(this, _theme2);
  }
  set theme(value) {
    __privateSet(this, _theme2, value);
    if (value) {
      this.setAttribute("theme", value);
    } else {
      this.removeAttribute("theme");
    }
  }
  get entries() {
    return __privateGet(this, _entries);
  }
  log(message, type = "info", format = "text", timestamp = null) {
    const entry = document.createElement("div");
    entry.className = `logger-entry log-${type}`;
    const indicator = document.createElement("span");
    indicator.className = "logger-indicator";
    entry.appendChild(indicator);
    const messageElement = document.createElement("span");
    messageElement.className = "logger-message";
    processMessage(messageElement, message, format);
    entry.appendChild(messageElement);
    const time = timestamp ? new Date(timestamp) : /* @__PURE__ */ new Date();
    const timestampEl = document.createElement("span");
    timestampEl.className = "logger-timestamp";
    timestampEl.textContent = time.toLocaleTimeString();
    entry.appendChild(timestampEl);
    __privateGet(this, _entries).push(entry);
    while (__privateGet(this, _entries).length > __privateGet(this, _maxEntries)) {
      const removed = __privateGet(this, _entries).shift();
      if (removed.parentNode) {
        removed.parentNode.removeChild(removed);
      }
    }
    if (__privateGet(this, _contentEl2)) {
      __privateGet(this, _contentEl2).appendChild(entry);
      __privateGet(this, _contentEl2).scrollTop = __privateGet(this, _contentEl2).scrollHeight;
    }
    __privateMethod(this, _PerkyLogger_instances, updateControlsVisibility_fn).call(this);
    return entry;
  }
  info(...messages) {
    return this.log(formatMessage(...messages), "info");
  }
  notice(...messages) {
    return this.log(formatMessage(...messages), "notice");
  }
  warn(...messages) {
    return this.log(formatMessage(...messages), "warn");
  }
  error(...messages) {
    return this.log(formatMessage(...messages), "error");
  }
  success(...messages) {
    return this.log(formatMessage(...messages), "success");
  }
  spacer() {
    const entry = document.createElement("div");
    entry.className = "logger-entry logger-spacer";
    __privateGet(this, _entries).push(entry);
    if (__privateGet(this, _contentEl2)) {
      __privateGet(this, _contentEl2).appendChild(entry);
    }
  }
  title(title) {
    const entry = document.createElement("div");
    entry.className = "logger-entry logger-title-entry";
    entry.textContent = title;
    __privateGet(this, _entries).push(entry);
    if (__privateGet(this, _contentEl2)) {
      __privateGet(this, _contentEl2).appendChild(entry);
    }
  }
  clear() {
    __privateSet(this, _entries, []);
    if (__privateGet(this, _contentEl2)) {
      __privateGet(this, _contentEl2).innerHTML = "";
    }
    __privateMethod(this, _PerkyLogger_instances, updateControlsVisibility_fn).call(this);
  }
}
_maxEntries = new WeakMap();
_position = new WeakMap();
_timestamp = new WeakMap();
_theme2 = new WeakMap();
_entries = new WeakMap();
_containerEl3 = new WeakMap();
_contentEl2 = new WeakMap();
_controlsEl = new WeakMap();
_opacityToggle = new WeakMap();
_isPinned = new WeakMap();
_onLog = new WeakMap();
_onClear = new WeakMap();
_onSpacer = new WeakMap();
_onTitle = new WeakMap();
_PerkyLogger_instances = new WeakSet();
handleMaxEntries_fn = function(value) {
  __privateSet(this, _maxEntries, parseInt(value, 10) || 50);
};
handlePosition_fn = function(value) {
  __privateSet(this, _position, value || "bottom");
  __privateMethod(this, _PerkyLogger_instances, updateClasses_fn).call(this);
};
handleTimestamp_fn = function(value) {
  __privateSet(this, _timestamp, value !== null && value !== "false");
};
handleTheme_fn2 = function(value) {
  __privateSet(this, _theme2, value || "");
};
handleAttributeChange_fn2 = function(name, value) {
  var _a;
  const handlers = {
    "max-entries": __privateMethod(this, _PerkyLogger_instances, handleMaxEntries_fn),
    position: __privateMethod(this, _PerkyLogger_instances, handlePosition_fn),
    timestamp: __privateMethod(this, _PerkyLogger_instances, handleTimestamp_fn),
    theme: __privateMethod(this, _PerkyLogger_instances, handleTheme_fn2)
  };
  (_a = handlers[name]) == null ? void 0 : _a.call(this, value);
};
buildDOM_fn3 = function() {
  const style = document.createElement("style");
  style.textContent = STYLES;
  this.shadowRoot.appendChild(style);
  __privateSet(this, _containerEl3, document.createElement("div"));
  __privateMethod(this, _PerkyLogger_instances, updateClasses_fn).call(this);
  __privateSet(this, _controlsEl, document.createElement("div"));
  __privateGet(this, _controlsEl).className = "logger-controls";
  const clearBtn = document.createElement("button");
  clearBtn.className = "logger-btn";
  clearBtn.innerHTML = CLEAR_ICON;
  clearBtn.title = "Clear logs";
  clearBtn.addEventListener("click", () => this.clear());
  __privateGet(this, _controlsEl).appendChild(clearBtn);
  __privateSet(this, _opacityToggle, document.createElement("button"));
  __privateGet(this, _opacityToggle).className = "logger-btn pinned";
  __privateGet(this, _opacityToggle).innerHTML = EYE_ICON;
  __privateGet(this, _opacityToggle).title = "Toggle opacity";
  __privateGet(this, _opacityToggle).addEventListener("click", () => __privateMethod(this, _PerkyLogger_instances, togglePin_fn).call(this));
  __privateGet(this, _controlsEl).appendChild(__privateGet(this, _opacityToggle));
  __privateGet(this, _containerEl3).appendChild(__privateGet(this, _controlsEl));
  __privateSet(this, _contentEl2, createLoggerContent());
  __privateGet(this, _containerEl3).appendChild(__privateGet(this, _contentEl2));
  this.shadowRoot.appendChild(__privateGet(this, _containerEl3));
};
togglePin_fn = function() {
  __privateSet(this, _isPinned, !__privateGet(this, _isPinned));
  __privateGet(this, _opacityToggle).classList.toggle("pinned", __privateGet(this, _isPinned));
  __privateGet(this, _containerEl3).classList.toggle("logger-faded", !__privateGet(this, _isPinned));
};
updateControlsVisibility_fn = function() {
  if (__privateGet(this, _controlsEl)) {
    __privateGet(this, _controlsEl).classList.toggle("visible", __privateGet(this, _entries).length >= 2);
  }
};
bindLoggerEvents_fn = function() {
  __privateMethod(this, _PerkyLogger_instances, replayHistory_fn).call(this);
  __privateSet(this, _onLog, ({ type, items, timestamp }) => __privateMethod(this, _PerkyLogger_instances, handleLog_fn).call(this, type, items, timestamp));
  __privateSet(this, _onClear, () => this.clear());
  __privateSet(this, _onSpacer, () => this.spacer());
  __privateSet(this, _onTitle, ({ title }) => this.title(title));
  logger.on("log", __privateGet(this, _onLog));
  logger.on("clear", __privateGet(this, _onClear));
  logger.on("spacer", __privateGet(this, _onSpacer));
  logger.on("title", __privateGet(this, _onTitle));
};
replayHistory_fn = function() {
  for (const entry of logger.history) {
    __privateMethod(this, _PerkyLogger_instances, replayEntry_fn).call(this, entry);
  }
  __privateMethod(this, _PerkyLogger_instances, scrollToBottom_fn).call(this);
};
replayEntry_fn = function(entry) {
  var _a;
  const handlers = {
    log: () => __privateMethod(this, _PerkyLogger_instances, handleLog_fn).call(this, entry.type, entry.items, entry.timestamp),
    clear: () => this.clear(),
    spacer: () => this.spacer(),
    title: () => this.title(entry.title)
  };
  (_a = handlers[entry.event]) == null ? void 0 : _a.call(handlers);
};
unbindLoggerEvents_fn = function() {
  logger.off("log", __privateGet(this, _onLog));
  logger.off("clear", __privateGet(this, _onClear));
  logger.off("spacer", __privateGet(this, _onSpacer));
  logger.off("title", __privateGet(this, _onTitle));
};
handleLog_fn = function(type, items, timestamp) {
  const fragment = document.createDocumentFragment();
  items.forEach((item, index) => {
    if (index > 0) {
      fragment.appendChild(document.createTextNode(" "));
    }
    const rendered = renderLogItem(item);
    if (rendered) {
      fragment.appendChild(rendered);
    } else if (typeof item === "object" && item !== null) {
      fragment.appendChild(document.createTextNode(JSON.stringify(item)));
    } else {
      fragment.appendChild(document.createTextNode(String(item)));
    }
  });
  this.log(fragment, type, "element", timestamp);
};
updateClasses_fn = function() {
  if (!__privateGet(this, _containerEl3)) {
    return;
  }
  __privateGet(this, _containerEl3).className = `logger logger-${__privateGet(this, _position)}`;
};
scrollToBottom_fn = function() {
  if (__privateGet(this, _contentEl2)) {
    __privateGet(this, _contentEl2).scrollTop = __privateGet(this, _contentEl2).scrollHeight;
  }
};
__publicField(PerkyLogger, "observedAttributes", ["max-entries", "position", "timestamp", "theme"]);
function processMessage(messageElement, message, format) {
  if (format === "text") {
    messageElement.textContent = message;
  } else if (format === "html") {
    messageElement.innerHTML = message;
  } else if (format === "element") {
    messageElement.appendChild(message);
  }
}
function formatMessage(...messages) {
  return messages.map((m) => typeof m === "object" ? JSON.stringify(m, null, 2) : m).join(" ");
}
const EYE_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>';
const CLEAR_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>';
const STYLES = buildEditorStyles(
  editorScrollbarStyles,
  editorBaseStyles,
  `
    :host {
        display: block;
        font-family: var(--font-mono);
        font-size: 12px;
        --logger-width: calc(100% - 20px);
        --logger-margin: 0 10px 10px;
        --logger-padding: 0;
        --logger-border: 1px solid var(--border);
        --logger-border-radius: 6px;
    }

    .logger {
        width: var(--logger-width);
        margin: var(--logger-margin);
        padding: var(--logger-padding);
        border-radius: var(--logger-border-radius);
        overflow: hidden;
        z-index: 100;
        position: relative;
        background: var(--bg-primary);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
        border: var(--logger-border);
        color: var(--fg-primary);
        transition: opacity 0.2s ease;
    }

    .logger-faded {
        opacity: 0.4;
    }

    .logger-faded:hover {
        opacity: 1;
    }

    .logger-controls {
        position: absolute;
        top: 4px;
        right: 4px;
        display: none;
        gap: 2px;
        z-index: 10;
        background: var(--bg-primary);
        padding: 2px;
        border-radius: 4px;
    }

    .logger-controls.visible {
        display: flex;
    }

    .logger-btn {
        width: 20px;
        height: 20px;
        padding: 3px;
        background: transparent;
        border: none;
        cursor: pointer;
        color: var(--fg-muted);
        opacity: 0.5;
        transition: opacity 0.15s, color 0.15s;
    }

    .logger-btn:hover {
        opacity: 1;
    }

    .logger-btn.pinned {
        color: var(--accent);
        opacity: 0.8;
    }

    .logger-btn.pinned:hover {
        opacity: 1;
    }

    .logger-btn svg {
        width: 100%;
        height: 100%;
    }

    .logger-content {
        max-height: 250px;
        overflow-y: auto;
    }

    .logger-entry {
        padding: 3px 12px;
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 10px;
    }

    .logger-indicator {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        flex-shrink: 0;
        background: var(--fg-muted);
        opacity: 0.5;
    }

    .log-info .logger-indicator {
        background: var(--fg-muted);
        opacity: 0.5;
    }

    .log-notice .logger-indicator {
        background: var(--fg-muted);
        opacity: 0.3;
    }

    .log-warn .logger-indicator {
        background: var(--status-warning);
        opacity: 1;
    }

    .log-error .logger-indicator {
        background: var(--status-error);
        opacity: 1;
        box-shadow: 0 0 4px var(--status-error);
    }

    .log-success .logger-indicator {
        background: var(--status-success);
        opacity: 1;
    }

    .logger-timestamp {
        color: var(--fg-muted);
        font-size: 10px;
        flex-shrink: 0;
        opacity: 0;
        transition: opacity 0.15s;
    }

    .logger-entry:hover .logger-timestamp {
        opacity: 1;
    }

    .logger-message {
        flex-grow: 1;
        word-break: break-word;
        color: var(--fg-secondary);
    }

    .log-error .logger-message {
        color: var(--fg-primary);
    }

    .logger-spacer {
        height: 1px;
        background: var(--border);
        margin: 4px 12px;
        padding: 0;
        gap: 0;
    }

    .logger-title-entry {
        padding: 6px 12px 2px;
        font-size: 9px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        color: var(--fg-muted);
    }


    .log-vec2 {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        background: var(--bg-hover);
        padding: 2px 8px;
        border-radius: 4px;
        font-size: 10px;
    }

    .log-vec2-label {
        color: var(--fg-muted);
        font-weight: 500;
    }

    .log-vec2-values {
        display: inline-flex;
        gap: 8px;
    }

    .log-vec2-component {
        display: inline-flex;
        gap: 4px;
    }

    .log-vec2-key {
        color: var(--fg-muted);
    }

    .log-vec2-value {
        color: var(--accent);
    }


    .log-object,
    .log-array,
    .log-module {
        display: inline-block;
        vertical-align: top;
    }

    .log-object-header,
    .log-array-header,
    .log-module-header {
        display: inline-flex;
        align-items: center;
        gap: 4px;
    }

    .log-object-toggle,
    .log-array-toggle,
    .log-module-toggle {
        color: var(--fg-muted);
        font-size: 8px;
        width: 10px;
        user-select: none;
    }

    .log-object-preview,
    .log-array-preview {
        color: var(--fg-secondary);
    }

    .log-object-expanded,
    .log-array-expanded,
    .log-module-expanded {
        margin-left: 14px;
        padding: 4px 0;
        border-left: 1px solid var(--border);
        padding-left: 8px;
    }

    .log-object-row,
    .log-array-row,
    .log-module-row {
        display: flex;
        gap: 4px;
        padding: 1px 0;
    }

    .log-object-key,
    .log-module-key {
        color: var(--accent);
    }

    .log-array-index {
        color: var(--fg-muted);
        min-width: 20px;
    }

    .log-object-separator,
    .log-array-separator,
    .log-module-separator {
        color: var(--fg-muted);
    }

    .log-object-value,
    .log-array-value,
    .log-module-value {
        color: var(--fg-secondary);
    }

    .log-array-length {
        color: var(--fg-muted);
        font-style: italic;
    }


    .log-module-label {
        color: var(--fg-primary);
        background: var(--bg-hover);
        padding: 2px 8px;
        border-radius: 4px;
    }

    .log-module-category {
        color: var(--fg-muted);
        font-size: 0.9em;
    }

    .log-module-meta {
        border-bottom: 1px solid var(--border);
        padding-bottom: 4px;
        margin-bottom: 4px;
    }

    .log-module-meta-row .log-module-key {
        color: var(--fg-muted);
    }

    .log-module-meta-value {
        color: var(--fg-secondary);
    }

    .log-object-methods-row,
    .log-module-methods-row {
        flex-wrap: wrap;
    }

    .log-object-method-name,
    .log-module-method-name {
        white-space: nowrap;
    }
`
);
customElements.define("perky-logger", PerkyLogger);
const docModules = /* @__PURE__ */ Object.assign({ "../application/application.doc.js": () => __vitePreload(() => import("./doc_application_application-CZzkTZfS.js"), true ? __vite__mapDeps([0,1,2]) : void 0, import.meta.url), "../application/perky_view.doc.js": () => __vitePreload(() => import("./doc_application_perky_view-Bp-HQOs_.js"), true ? __vite__mapDeps([3,1,2]) : void 0, import.meta.url), "../audio/audio_system.doc.js": () => __vitePreload(() => import("./doc_audio_audio_system-432J3CHH.js"), true ? __vite__mapDeps([4,1,5,6,7,2]) : void 0, import.meta.url), "../core/action_controller.doc.js": () => __vitePreload(() => import("./doc_core_action_controller-BTkfojQA.js"), true ? __vite__mapDeps([8,1,9,6,7,2]) : void 0, import.meta.url), "../core/action_dispatcher.doc.js": () => __vitePreload(() => import("./doc_core_action_dispatcher-C5Z-TTgS.js"), true ? __vite__mapDeps([10,1,11,6,7,9,2]) : void 0, import.meta.url), "../core/notifier.doc.js": () => __vitePreload(() => import("./doc_core_notifier-DFvSfJKE.js"), true ? __vite__mapDeps([12,1,2]) : void 0, import.meta.url), "../core/perky_module.doc.js": () => __vitePreload(() => import("./doc_core_perky_module-D8Ng1jdQ.js"), true ? __vite__mapDeps([13,1,6,7,2]) : void 0, import.meta.url), "../core/utils.doc.js": () => __vitePreload(() => import("./doc_core_utils-r4RsJYka.js"), true ? __vite__mapDeps([14,1,7,2]) : void 0, import.meta.url), "../editor/inspectors/action_controller_inspector.doc.js": () => __vitePreload(() => import("./doc_editor_inspectors_action_controller_inspector-BjsWNmR-.js"), true ? __vite__mapDeps([15,1,9,6,7,16,17,18,2]) : void 0, import.meta.url), "../editor/inspectors/action_dispatcher_inspector.doc.js": () => __vitePreload(() => import("./doc_editor_inspectors_action_dispatcher_inspector-CtQduLR2.js"), true ? __vite__mapDeps([19,1,11,6,7,9,2,20,17,18,21,22]) : void 0, import.meta.url), "../editor/log_renderers/vec2_log_renderer.doc.js": () => __vitePreload(() => import("./doc_editor_log_renderers_vec2_log_renderer-BJIE9Pjw.js"), true ? __vite__mapDeps([23,1,24,25,2]) : void 0, import.meta.url), "../editor/perky_explorer.doc.js": () => __vitePreload(() => import("./doc_editor_perky_explorer-BUeQdMDN.js"), true ? __vite__mapDeps([26,1,6,7,11,9,2,27,28,29,24,30,31,32,33,17,18,22,21,34,35,16,20,5]) : void 0, import.meta.url), "../editor/perky_logger.doc.js": () => __vitePreload(() => import("./doc_editor_perky_logger-DX0HfWLv.js"), true ? __vite__mapDeps([36,1,24,2]) : void 0, import.meta.url), "../editor/toggle_input.doc.js": () => __vitePreload(() => import("./doc_editor_toggle_input-Cs7UWo0w.js"), true ? __vite__mapDeps([37,1,21,22,18,2]) : void 0, import.meta.url), "../editor/vec2_input.doc.js": () => __vitePreload(() => import("./doc_editor_vec2_input-7hLUZEU8.js"), true ? __vite__mapDeps([38,1,24,35,22,18,2]) : void 0, import.meta.url), "../game/game_loop.doc.js": () => __vitePreload(() => import("./doc_game_game_loop-SPQJ0_T-.js"), true ? __vite__mapDeps([39,1,30,6,7,2]) : void 0, import.meta.url), "../input/input_devices/keyboard_device.doc.js": () => __vitePreload(() => import("./doc_input_input_devices_keyboard_device-DeTThXHV.js"), true ? __vite__mapDeps([40,1,27,28,6,7]) : void 0, import.meta.url), "../input/input_devices/mouse_device.doc.js": () => __vitePreload(() => import("./doc_input_input_devices_mouse_device-CimKdHK0.js"), true ? __vite__mapDeps([41,1,29,28,6,7,24]) : void 0, import.meta.url), "../math/random.doc.js": () => __vitePreload(() => import("./doc_math_random-iUa-_pLJ.js"), true ? __vite__mapDeps([42,1,2]) : void 0, import.meta.url), "../math/vec2.doc.js": () => __vitePreload(() => import("./doc_math_vec2-xHH1BOS6.js"), true ? __vite__mapDeps([43,1,24,2]) : void 0, import.meta.url), "../render/canvas_2d.doc.js": () => __vitePreload(() => import("./doc_render_canvas_2d-CgWicJYW.js"), true ? __vite__mapDeps([44,1,31,32,6,7,2]) : void 0, import.meta.url), "../render/webgl_canvas_2d.doc.js": () => __vitePreload(() => import("./doc_render_webgl_canvas_2d-CiCEUbHv.js"), true ? __vite__mapDeps([45,1,33,32,6,7,2]) : void 0, import.meta.url) });
const guideModules = /* @__PURE__ */ Object.assign({ "./guides/conventions.guide.js": () => __vitePreload(() => import("./conventions.guide-1sZsbFuI.js"), true ? __vite__mapDeps([46,1]) : void 0, import.meta.url), "./guides/getting_started.guide.js": () => __vitePreload(() => import("./getting_started.guide-CWdDpIjb.js"), true ? __vite__mapDeps([47,1,6,7,9,2,34,24]) : void 0, import.meta.url), "./guides/philosophy.guide.js": () => __vitePreload(() => import("./philosophy.guide-CaZFhYe7.js"), true ? __vite__mapDeps([48,1]) : void 0, import.meta.url) });
class DocViewer {
  constructor() {
    this.container = document.getElementById("doc-container");
    this.nav = document.getElementById("docs-nav");
    this.searchInput = document.querySelector(".sidebar-search .search-input");
    this.docs = [];
    this.guides = [];
    this.apiData = {};
    this.testsData = {};
    this.currentDoc = null;
    this.currentSection = "docs";
  }
  async init() {
    await this.loadDocs();
    await this.loadApiData();
    await this.loadTestsData();
    this.buildNav();
    this.setupSearch();
    this.route();
  }
  async loadDocs() {
    try {
      const response = await fetch("./docs.json");
      const data = await response.json();
      this.docs = data.docs;
      this.guides = data.guides || [];
    } catch (error) {
      logger.error("Failed to load docs.json:", error);
      this.docs = [];
      this.guides = [];
    }
  }
  async loadApiData() {
    try {
      const response = await fetch("./api.json");
      this.apiData = await response.json();
    } catch (error) {
      logger.error("Failed to load api.json:", error);
      this.apiData = {};
    }
  }
  async loadTestsData() {
    try {
      const response = await fetch("./tests.json");
      this.testsData = await response.json();
    } catch (error) {
      logger.error("Failed to load tests.json:", error);
      this.testsData = {};
    }
  }
  buildNav() {
    this.nav.innerHTML = "";
    const switcherContainer = document.getElementById("nav-switcher");
    if (switcherContainer) {
      switcherContainer.innerHTML = "";
      const docsBtn = document.createElement("button");
      docsBtn.className = "nav-switch active";
      docsBtn.dataset.section = "docs";
      docsBtn.textContent = "Docs";
      const guidesBtn = document.createElement("button");
      guidesBtn.className = "nav-switch";
      guidesBtn.dataset.section = "guides";
      guidesBtn.textContent = "Guides";
      switcherContainer.appendChild(docsBtn);
      switcherContainer.appendChild(guidesBtn);
    }
    const docsSection = buildNavSectionElement(this.docs, "docs", "doc");
    const guidesSection = buildNavSectionElement(this.guides, "guides", "guide");
    guidesSection.style.display = "none";
    this.nav.appendChild(docsSection);
    this.nav.appendChild(guidesSection);
    this.setupSwitcher();
  }
  setupSwitcher() {
    const switcherContainer = document.getElementById("nav-switcher");
    if (!switcherContainer) {
      return;
    }
    const buttons = switcherContainer.querySelectorAll(".nav-switch");
    for (const btn of buttons) {
      btn.addEventListener("click", () => {
        const section = btn.dataset.section;
        this.switchSection(section);
      });
    }
  }
  switchSection(section) {
    this.currentSection = section;
    const switcherContainer = document.getElementById("nav-switcher");
    if (switcherContainer) {
      const buttons = switcherContainer.querySelectorAll(".nav-switch");
      for (const btn of buttons) {
        btn.classList.toggle("active", btn.dataset.section === section);
      }
    }
    const sections = this.nav.querySelectorAll(".nav-section");
    for (const sec of sections) {
      sec.style.display = sec.dataset.section === section ? "" : "none";
    }
  }
  setupSearch() {
    this.searchInput.addEventListener("input", (e) => {
      const search = e.target.value.toLowerCase().trim();
      const items = this.nav.querySelectorAll(".nav-item");
      const categories = this.nav.querySelectorAll(".nav-category");
      filterNavItems(items, search);
      filterNavCategories(categories, search);
    });
  }
  route() {
    const params = new URLSearchParams(window.location.search);
    let docPath = params.get("doc");
    let guidePath = params.get("guide");
    let tab = params.get("tab") || "doc";
    if (!docPath && !guidePath) {
      const fromFilename = this.getPathFromFilename();
      docPath = fromFilename.docPath;
      guidePath = fromFilename.guidePath;
      tab = fromFilename.tab;
    }
    if (guidePath) {
      this.switchSection("guides");
      this.showGuide(guidePath);
      this.updateActiveNav(guidePath);
    } else if (docPath) {
      this.switchSection("docs");
      this.showDoc(docPath, tab);
      this.updateActiveNav(docPath);
    } else {
      this.showWelcome();
    }
  }
  getPathFromFilename() {
    const pathname = window.location.pathname;
    const filename = pathname.split("/").pop();
    if (!filename || filename === "index.html" || !filename.endsWith(".html")) {
      return { docPath: null, guidePath: null, tab: "doc" };
    }
    if (filename.startsWith("guide_")) {
      const guideId = filename.replace("guide_", "").replace(".html", "");
      const guide = this.guides.find((g) => g.id === guideId);
      return { docPath: null, guidePath: guide ? guide.file : null, tab: "doc" };
    }
    const isApiPage = filename.endsWith("_api.html");
    const isTestPage = filename.endsWith("_test.html");
    const baseName = filename.replace("_api.html", "").replace("_test.html", "").replace(".html", "");
    const doc = this.docs.find((d) => {
      const docBaseName = d.file.slice(1).replace(/\//g, "_").replace(".doc.js", "");
      return docBaseName === baseName;
    });
    let tab = "doc";
    if (isApiPage) {
      tab = "api";
    }
    if (isTestPage) {
      tab = "test";
    }
    return { docPath: doc ? doc.file : null, guidePath: null, tab };
  }
  updateActiveNav(docPath) {
    const items = this.nav.querySelectorAll(".nav-item");
    let activeItem = null;
    for (const item of items) {
      const isActive = item.dataset.file === docPath;
      item.classList.toggle("active", isActive);
      if (isActive) {
        activeItem = item;
      }
    }
    if (activeItem) {
      activeItem.scrollIntoView({ block: "center", behavior: "instant" });
    }
  }
  showWelcome() {
    this.container.innerHTML = `
            <div class="welcome-message">
                <h2>Welcome to Perky Docs</h2>
                <p>Select a module from the sidebar to view its documentation.</p>
            </div>
        `;
    this.currentDoc = null;
  }
  async showDoc(docPath, tab = "doc") {
    logger.clear();
    try {
      const modulePath = ".." + docPath;
      const loader = docModules[modulePath];
      if (!loader) {
        throw new Error(`Doc module not found: ${docPath}`);
      }
      const module = await loader();
      const docData = module.default;
      this.container.innerHTML = "";
      const docPage = document.createElement("doc-page");
      docPage.doc = docData;
      docPage.initialTab = tab;
      const api = this.apiData[docPath];
      if (api) {
        docPage.api = api;
      }
      const sources = await loadSourcesFor(docPath);
      if (sources) {
        docPage.sources = sources;
      }
      const tests = this.testsData[docPath];
      if (tests) {
        docPage.tests = tests;
      }
      this.container.appendChild(docPage);
      this.currentDoc = docPath;
    } catch (error) {
      logger.error("Failed to load doc:", error);
      this.container.innerHTML = `
                <div class="error-message">
                    <h2>Failed to load documentation</h2>
                    <p>${error.message}</p>
                </div>
            `;
    }
  }
  async showGuide(guidePath) {
    logger.clear();
    try {
      const modulePath = "." + guidePath.replace("/doc", "");
      const loader = guideModules[modulePath];
      if (!loader) {
        throw new Error(`Guide module not found: ${guidePath}`);
      }
      const module = await loader();
      const guideData = module.default;
      this.container.innerHTML = "";
      const docPage = document.createElement("doc-page");
      docPage.doc = guideData;
      docPage.initialTab = "doc";
      const guide = this.guides.find((g) => g.file === guidePath);
      if (guide) {
        const sources = await loadGuideSourcesFor(guide.id);
        if (sources) {
          docPage.sources = sources;
        }
      }
      this.container.appendChild(docPage);
      this.currentDoc = guidePath;
    } catch (error) {
      logger.error("Failed to load guide:", error);
      this.container.innerHTML = `
                <div class="error-message">
                    <h2>Failed to load guide</h2>
                    <p>${error.message}</p>
                </div>
            `;
    }
  }
}
async function loadSourcesFor(docPath) {
  try {
    const fileName = docPath.slice(1).replace(/\//g, "_").replace(".js", ".json");
    const response = await fetch(`./sources/${fileName}`);
    return await response.json();
  } catch {
    return null;
  }
}
async function loadGuideSourcesFor(guideId) {
  try {
    const response = await fetch(`./sources/guide_${guideId}.json`);
    return await response.json();
  } catch {
    return null;
  }
}
function getDocUrl(docFile) {
  {
    const htmlFile = docFile.slice(1).replace(/\//g, "_").replace(".doc.js", ".html");
    return htmlFile;
  }
}
function getGuideUrl(guideId) {
  {
    return `guide_${guideId}.html`;
  }
}
function buildNavSectionElement(items, sectionName, type) {
  const section = document.createElement("div");
  section.className = "nav-section";
  section.dataset.section = sectionName;
  const byCategory = {};
  for (const item of items) {
    if (!byCategory[item.category]) {
      byCategory[item.category] = [];
    }
    byCategory[item.category].push(item);
  }
  for (const [category, categoryItems] of Object.entries(byCategory)) {
    const categoryEl = document.createElement("div");
    categoryEl.className = "nav-category";
    categoryEl.textContent = category;
    section.appendChild(categoryEl);
    for (const item of categoryItems) {
      const link = document.createElement("a");
      link.className = "nav-item";
      link.textContent = type === "guide" ? toHumanCase(item.title) : item.title;
      link.dataset.file = item.file;
      link.dataset.title = item.title.toLowerCase();
      link.dataset.category = item.category;
      link.dataset.type = type;
      link.href = type === "guide" ? getGuideUrl(item.id) : getDocUrl(item.file);
      section.appendChild(link);
    }
  }
  return section;
}
function filterNavItems(items, search) {
  for (const item of items) {
    const matches = !search || item.dataset.title.includes(search) || item.dataset.category.includes(search);
    item.classList.toggle("hidden", !matches);
  }
}
function filterNavCategories(categories, search) {
  for (const category of categories) {
    const categoryName = category.textContent.toLowerCase();
    const hasVisibleItems = categoryHasVisibleItems(category);
    category.classList.toggle("hidden", !hasVisibleItems && search && !categoryName.includes(search));
  }
}
function categoryHasVisibleItems(category) {
  let nextEl = category.nextElementSibling;
  while (nextEl && !nextEl.classList.contains("nav-category")) {
    if (nextEl.classList.contains("nav-item") && !nextEl.classList.contains("hidden")) {
      return true;
    }
    nextEl = nextEl.nextElementSibling;
  }
  return false;
}
document.addEventListener("DOMContentLoaded", () => {
  const viewer = new DocViewer();
  viewer.init();
});
