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
var _headerEl, _titleEl, _menuBtn, _closeBtn, _contentEl, _footerEl, _AppLayout_instances, buildDOM_fn, updateTitle_fn, updateButtonVisibility_fn, emitEvent_fn;
import { d as doc, t as text, s as section, b as container } from "./runtime-DOmi4lo7.js";
import { E as EditorComponent } from "./editor_component-KitFp2Fu.js";
import { c as createElement } from "./dom_utils-DTpHkHXB.js";
import "./editor_button-DcpPKk4k.js";
import "./utils-DVCexGPz.js";
import "./inflector-BxOpyWLP.js";
import "./index-Defq3ZXV.js";
class AppLayout extends EditorComponent {
  constructor() {
    super(...arguments);
    __privateAdd(this, _AppLayout_instances);
    __privateAdd(this, _headerEl, null);
    __privateAdd(this, _titleEl, null);
    __privateAdd(this, _menuBtn, null);
    __privateAdd(this, _closeBtn, null);
    __privateAdd(this, _contentEl, null);
    __privateAdd(this, _footerEl, null);
  }
  onConnected() {
    __privateMethod(this, _AppLayout_instances, buildDOM_fn).call(this);
    __privateMethod(this, _AppLayout_instances, updateButtonVisibility_fn).call(this);
  }
  static get observedAttributes() {
    return ["title", "no-header", "no-footer", "no-menu", "no-close"];
  }
  attributeChangedCallback(name) {
    if (name === "title") {
      __privateMethod(this, _AppLayout_instances, updateTitle_fn).call(this);
    } else if (name === "no-menu" || name === "no-close") {
      __privateMethod(this, _AppLayout_instances, updateButtonVisibility_fn).call(this);
    }
  }
  get title() {
    return this.getAttribute("title") || "";
  }
  set title(value) {
    this.setAttribute("title", value);
  }
  setTitle(value) {
    this.title = value;
  }
}
_headerEl = new WeakMap();
_titleEl = new WeakMap();
_menuBtn = new WeakMap();
_closeBtn = new WeakMap();
_contentEl = new WeakMap();
_footerEl = new WeakMap();
_AppLayout_instances = new WeakSet();
buildDOM_fn = function() {
  __privateSet(this, _headerEl, createElement("header", { class: "header" }));
  const headerStart = createElement("div", { class: "header-start" });
  __privateSet(this, _menuBtn, createElement("button", { class: "header-btn menu-btn", html: "≡" }));
  __privateGet(this, _menuBtn).addEventListener("click", () => __privateMethod(this, _AppLayout_instances, emitEvent_fn).call(this, "menu"));
  headerStart.appendChild(__privateGet(this, _menuBtn));
  const headerStartSlot = createElement("slot", { name: "header-start" });
  headerStart.appendChild(headerStartSlot);
  const headerCenter = createElement("div", { class: "header-center" });
  __privateSet(this, _titleEl, createElement("span", { class: "title" }));
  headerCenter.appendChild(__privateGet(this, _titleEl));
  const headerCenterSlot = createElement("slot", { name: "header-center" });
  headerCenter.appendChild(headerCenterSlot);
  const headerEnd = createElement("div", { class: "header-end" });
  const headerEndSlot = createElement("slot", { name: "header-end" });
  headerEnd.appendChild(headerEndSlot);
  __privateSet(this, _closeBtn, createElement("button", { class: "header-btn close-btn", html: "✕" }));
  __privateGet(this, _closeBtn).addEventListener("click", () => __privateMethod(this, _AppLayout_instances, emitEvent_fn).call(this, "close"));
  headerEnd.appendChild(__privateGet(this, _closeBtn));
  __privateGet(this, _headerEl).appendChild(headerStart);
  __privateGet(this, _headerEl).appendChild(headerCenter);
  __privateGet(this, _headerEl).appendChild(headerEnd);
  __privateSet(this, _contentEl, createElement("main", { class: "content" }));
  const contentSlot = createElement("slot");
  __privateGet(this, _contentEl).appendChild(contentSlot);
  const overlayContainer = createElement("div", { class: "overlay-container" });
  const overlaySlot = createElement("slot", { name: "overlay" });
  overlayContainer.appendChild(overlaySlot);
  __privateGet(this, _contentEl).appendChild(overlayContainer);
  __privateSet(this, _footerEl, createElement("footer", { class: "footer" }));
  const footerStart = createElement("div", { class: "footer-start" });
  const footerStartSlot = createElement("slot", { name: "footer-start" });
  footerStart.appendChild(footerStartSlot);
  const footerCenter = createElement("div", { class: "footer-center" });
  const footerCenterSlot = createElement("slot", { name: "footer-center" });
  footerCenter.appendChild(footerCenterSlot);
  const footerEnd = createElement("div", { class: "footer-end" });
  const footerEndSlot = createElement("slot", { name: "footer-end" });
  footerEnd.appendChild(footerEndSlot);
  __privateGet(this, _footerEl).appendChild(footerStart);
  __privateGet(this, _footerEl).appendChild(footerCenter);
  __privateGet(this, _footerEl).appendChild(footerEnd);
  this.shadowRoot.appendChild(__privateGet(this, _headerEl));
  this.shadowRoot.appendChild(__privateGet(this, _contentEl));
  this.shadowRoot.appendChild(__privateGet(this, _footerEl));
  __privateMethod(this, _AppLayout_instances, updateTitle_fn).call(this);
};
updateTitle_fn = function() {
  if (__privateGet(this, _titleEl)) {
    __privateGet(this, _titleEl).textContent = this.title;
  }
};
updateButtonVisibility_fn = function() {
  if (__privateGet(this, _menuBtn)) {
    __privateGet(this, _menuBtn).classList.toggle("hidden", this.hasAttribute("no-menu"));
  }
  if (__privateGet(this, _closeBtn)) {
    __privateGet(this, _closeBtn).classList.toggle("hidden", this.hasAttribute("no-close"));
  }
};
emitEvent_fn = function(name) {
  this.dispatchEvent(new CustomEvent(name, { bubbles: true }));
};
__publicField(AppLayout, "styles", `
    :host {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        background: var(--bg-primary);
        color: var(--fg-primary);
        font-family: var(--font-mono);
        overflow: hidden;
    }


    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-height: var(--touch-target);
        padding: 0 var(--spacing-md);
        background: var(--bg-secondary);
        flex-shrink: 0;
        gap: var(--spacing-md);
    }

    .header-start {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
    }

    .header-center {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
        flex: 1;
        justify-content: center;
    }

    .header-end {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
    }

    .title {
        font-size: var(--font-size-lg);
        font-weight: 500;
        color: var(--fg-primary);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .title:empty {
        display: none;
    }

    .header-btn {
        appearance: none;
        background: transparent;
        border: none;
        color: var(--fg-secondary);
        font-size: 18px;
        width: var(--touch-target);
        height: var(--touch-target);
        min-width: var(--touch-target);
        min-height: var(--touch-target);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border-radius: var(--radius-md);
        transition: background var(--transition-fast), color var(--transition-fast);
        padding: 0;
    }

    .header-btn:hover {
        background: var(--bg-hover);
        color: var(--fg-primary);
    }

    .header-btn:active {
        background: var(--bg-selected);
    }

    .header-btn.hidden {
        display: none;
    }


    .content {
        flex: 1;
        overflow: auto;
        position: relative;
    }


    .footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-height: var(--touch-target);
        padding: var(--spacing-sm) var(--spacing-md);
        padding-bottom: max(var(--spacing-sm), env(safe-area-inset-bottom));
        background: var(--bg-secondary);
        border-top: 1px solid var(--border);
        flex-shrink: 0;
        gap: var(--spacing-md);
    }

    .footer-start {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
    }

    .footer-center {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
        flex: 1;
        justify-content: center;
    }

    .footer-end {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
    }

    :host([no-footer]) .footer {
        display: none;
    }

    :host([no-header]) .header {
        display: none;
    }


    .overlay-container {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        z-index: 100;
    }

    .overlay-container ::slotted(*) {
        pointer-events: auto;
    }
    `);
customElements.define("app-layout", AppLayout);
const app_layout_doc = doc("AppLayout", { advanced: true }, () => {
  text(`
        A fullscreen layout for apps with header, content, and footer areas.
        Designed for iPad Pro with touch-friendly controls and safe area support.
    `);
  section("Basic Structure", () => {
    text(`
            The layout has three main areas:
            - **Header**: Title, menu button, close button, and custom slots
            - **Content**: Main area (default slot)
            - **Footer**: Actions and toolbar (optional)
        `);
    container({ title: "Basic layout", height: 300, preset: "inspector" }, (ctx) => {
      const layout = document.createElement("app-layout");
      layout.title = "My App";
      layout.style.height = "100%";
      const content = document.createElement("div");
      content.style.cssText = "display:flex;align-items:center;justify-content:center;height:100%;color:#888;";
      content.textContent = "Content area";
      layout.appendChild(content);
      ctx.container.appendChild(layout);
    });
  });
  section("With Footer", () => {
    text("Add elements to footer slots for actions.");
    container({ title: "Layout with footer", height: 300, preset: "inspector" }, (ctx) => {
      const layout = document.createElement("app-layout");
      layout.title = "Sprite Animator";
      layout.style.height = "100%";
      const content = document.createElement("div");
      content.style.cssText = "display:flex;align-items:center;justify-content:center;height:100%;background:#0d0d10;";
      content.textContent = "Preview area";
      layout.appendChild(content);
      const backBtn = document.createElement("editor-button");
      backBtn.setAttribute("slot", "footer-start");
      backBtn.setAttribute("icon", "");
      backBtn.textContent = "◀";
      layout.appendChild(backBtn);
      const playBtn = document.createElement("editor-button");
      playBtn.setAttribute("slot", "footer-center");
      playBtn.setAttribute("icon", "");
      playBtn.textContent = "▶";
      layout.appendChild(playBtn);
      const stopBtn = document.createElement("editor-button");
      stopBtn.setAttribute("slot", "footer-center");
      stopBtn.setAttribute("icon", "");
      stopBtn.textContent = "■";
      layout.appendChild(stopBtn);
      const exportBtn = document.createElement("editor-button");
      exportBtn.setAttribute("slot", "footer-end");
      exportBtn.variant = "primary";
      exportBtn.textContent = "Export";
      layout.appendChild(exportBtn);
      ctx.container.appendChild(layout);
    });
  });
  section("Header Slots", () => {
    text("Customize header with `header-start`, `header-center`, and `header-end` slots.");
    container({ title: "Custom header", height: 300, preset: "inspector" }, (ctx) => {
      const layout = document.createElement("app-layout");
      layout.style.height = "100%";
      const select = document.createElement("select");
      select.setAttribute("slot", "header-center");
      select.style.cssText = "padding:8px 12px;border-radius:8px;background:#24242a;color:#e4e4e8;border:none;";
      select.innerHTML = "<option>Animation 1</option><option>Animation 2</option><option>Animation 3</option>";
      layout.appendChild(select);
      const settingsBtn = document.createElement("editor-button");
      settingsBtn.setAttribute("slot", "header-end");
      settingsBtn.setAttribute("icon", "");
      settingsBtn.setAttribute("variant", "ghost");
      settingsBtn.textContent = "⚙";
      layout.appendChild(settingsBtn);
      const content = document.createElement("div");
      content.style.cssText = "display:flex;align-items:center;justify-content:center;height:100%;color:#888;";
      content.textContent = "Content";
      layout.appendChild(content);
      ctx.container.appendChild(layout);
    });
  });
  section("No Header/Footer", () => {
    text("Use `no-header` or `no-footer` attributes to hide those areas.");
    container({ title: "Content only", height: 200, preset: "inspector" }, (ctx) => {
      const layout = document.createElement("app-layout");
      layout.setAttribute("no-header", "");
      layout.setAttribute("no-footer", "");
      layout.style.height = "100%";
      const content = document.createElement("div");
      content.style.cssText = "display:flex;align-items:center;justify-content:center;height:100%;background:#0d0d10;color:#888;";
      content.textContent = "Fullscreen content (no header/footer)";
      layout.appendChild(content);
      ctx.container.appendChild(layout);
    });
  });
  section("Events", () => {
    text(`
            The layout emits events:
            - \`menu\` - When menu button (≡) is clicked
            - \`close\` - When close button (✕) is clicked
        `);
    container({ title: "Event handling", height: 200, preset: "inspector" }, (ctx) => {
      const layout = document.createElement("app-layout");
      layout.title = "Event Demo";
      layout.style.height = "100%";
      const log = document.createElement("div");
      log.style.cssText = "padding:16px;color:#888;font-size:12px;";
      log.textContent = "Click menu (≡) or close (✕) buttons...";
      layout.appendChild(log);
      layout.addEventListener("menu", () => {
        log.textContent = "📋 Menu clicked!";
      });
      layout.addEventListener("close", () => {
        log.textContent = "❌ Close clicked!";
      });
      ctx.container.appendChild(layout);
    });
  });
});
export {
  app_layout_doc as default
};
