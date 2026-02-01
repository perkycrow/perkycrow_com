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
var _backdrop, _container, _Overlay_instances, buildDOM_fn;
import { d as doc, t as text, s as section, b as container, l as logger } from "./runtime-DOmi4lo7.js";
import { E as EditorComponent } from "./editor_component-KitFp2Fu.js";
import { c as createElement } from "./dom_utils-DTpHkHXB.js";
import "./editor_button-DcpPKk4k.js";
import "./utils-DVCexGPz.js";
import "./inflector-BxOpyWLP.js";
import "./index-Defq3ZXV.js";
class Overlay extends EditorComponent {
  constructor() {
    super();
    __privateAdd(this, _Overlay_instances);
    __privateAdd(this, _backdrop, null);
    __privateAdd(this, _container, null);
    __privateMethod(this, _Overlay_instances, buildDOM_fn).call(this);
  }
  static get observedAttributes() {
    return ["open"];
  }
  get isOpen() {
    return this.hasAttribute("open");
  }
  open() {
    if (!this.isOpen) {
      this.setAttribute("open", "");
      this.dispatchEvent(new CustomEvent("open", { bubbles: true }));
    }
  }
  close() {
    if (this.isOpen) {
      this.removeAttribute("open");
      this.dispatchEvent(new CustomEvent("close", { bubbles: true }));
    }
  }
  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }
}
_backdrop = new WeakMap();
_container = new WeakMap();
_Overlay_instances = new WeakSet();
buildDOM_fn = function() {
  __privateSet(this, _backdrop, createElement("div", { class: "backdrop" }));
  __privateGet(this, _backdrop).addEventListener("click", (e) => {
    if (e.target === __privateGet(this, _backdrop) && !this.hasAttribute("no-close-on-backdrop")) {
      this.close();
    }
  });
  __privateSet(this, _container, createElement("div", { class: "container" }));
  const slot = document.createElement("slot");
  __privateGet(this, _container).appendChild(slot);
  this.shadowRoot.appendChild(__privateGet(this, _backdrop));
  this.shadowRoot.appendChild(__privateGet(this, _container));
  this.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !this.hasAttribute("no-close-on-escape")) {
      this.close();
    }
  });
};
__publicField(Overlay, "styles", `
        :host {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 1000;
            font-family: var(--font-mono);
        }

        :host([open]) {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .backdrop {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.6);
            backdrop-filter: blur(4px);
            -webkit-backdrop-filter: blur(4px);
        }

        :host([no-backdrop]) .backdrop {
            background: transparent;
            backdrop-filter: none;
            -webkit-backdrop-filter: none;
        }

        .container {
            position: relative;
            display: flex;
            background: var(--bg-secondary);
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-lg);
            max-width: 90vw;
            max-height: 90vh;
            overflow: hidden;
            animation: overlay-enter 0.15s ease-out;
        }

        @keyframes overlay-enter {
            from {
                opacity: 0;
                transform: scale(0.95);
            }
            to {
                opacity: 1;
                transform: scale(1);
            }
        }

        :host([position="top"]) {
            align-items: flex-start;
            padding-top: 10vh;
        }

        :host([position="bottom"]) {
            align-items: flex-end;
            padding-bottom: 10vh;
        }


        :host([fullscreen]) .container {
            width: 100%;
            height: 100%;
            max-width: 100vw;
            max-height: 100vh;
            border-radius: 0;
            border: none;
        }


        :host([context="studio"]) .container {
            border-radius: var(--radius-xl);
        }

        :host([context="studio"][fullscreen]) .container {
            border-radius: 0;
        }
    `);
customElements.define("editor-overlay", Overlay);
const overlay_doc = doc("Overlay", { advanced: true }, () => {
  text(`
        Modal/popup container with backdrop.
        Click backdrop or press Escape to close.
    `);
  section("Basic Overlay", () => {
    text("Use `open()` and `close()` methods to control visibility.");
    container({ title: "Basic overlay", height: 150, preset: "centered" }, (ctx) => {
      const btn = document.createElement("editor-button");
      btn.textContent = "Open Overlay";
      btn.variant = "primary";
      ctx.container.appendChild(btn);
      const overlay = document.createElement("editor-overlay");
      overlay.innerHTML = `
                <div style="padding:24px;text-align:center;">
                    <h3 style="margin:0 0 12px;color:#e4e4e8;font-size:16px;">Hello!</h3>
                    <p style="margin:0 0 16px;color:#888;font-size:14px;">Click backdrop to close</p>
                </div>
            `;
      ctx.container.appendChild(overlay);
      btn.addEventListener("click", () => overlay.open());
      overlay.addEventListener("close", () => {
        logger.log("Overlay closed");
      });
    });
  });
  section("With Actions", () => {
    text("Add buttons inside the overlay for actions.");
    container({ title: "Overlay with actions", height: 150, preset: "centered" }, (ctx) => {
      const btn = document.createElement("editor-button");
      btn.textContent = "Confirm Dialog";
      ctx.container.appendChild(btn);
      const overlay = document.createElement("editor-overlay");
      const content = document.createElement("div");
      content.style.cssText = "padding:24px;min-width:280px;";
      content.innerHTML = `
                <h3 style="margin:0 0 8px;color:#e4e4e8;font-size:16px;">Delete Item?</h3>
                <p style="margin:0 0 20px;color:#888;font-size:14px;">This action cannot be undone.</p>
            `;
      const actions = document.createElement("div");
      actions.style.cssText = "display:flex;gap:8px;justify-content:flex-end;";
      const cancelBtn = document.createElement("editor-button");
      cancelBtn.textContent = "Cancel";
      cancelBtn.addEventListener("click", () => {
        overlay.close();
        logger.log("Cancelled");
      });
      const deleteBtn = document.createElement("editor-button");
      deleteBtn.textContent = "Delete";
      deleteBtn.variant = "danger";
      deleteBtn.addEventListener("click", () => {
        overlay.close();
        logger.log("Deleted!");
      });
      actions.appendChild(cancelBtn);
      actions.appendChild(deleteBtn);
      content.appendChild(actions);
      overlay.appendChild(content);
      ctx.container.appendChild(overlay);
      btn.addEventListener("click", () => overlay.open());
    });
  });
  section("Position", () => {
    text('Use `position="top"` or `position="bottom"` to align the overlay.');
    container({ title: "Top position", height: 150, preset: "centered" }, (ctx) => {
      const row = ctx.row({ gap: 8 });
      const topBtn = document.createElement("editor-button");
      topBtn.textContent = "Top";
      row.appendChild(topBtn);
      const bottomBtn = document.createElement("editor-button");
      bottomBtn.textContent = "Bottom";
      row.appendChild(bottomBtn);
      const topOverlay = document.createElement("editor-overlay");
      topOverlay.setAttribute("position", "top");
      topOverlay.innerHTML = '<div style="padding:20px;color:#888;">Top aligned</div>';
      ctx.container.appendChild(topOverlay);
      const bottomOverlay = document.createElement("editor-overlay");
      bottomOverlay.setAttribute("position", "bottom");
      bottomOverlay.innerHTML = '<div style="padding:20px;color:#888;">Bottom aligned</div>';
      ctx.container.appendChild(bottomOverlay);
      topBtn.addEventListener("click", () => topOverlay.open());
      bottomBtn.addEventListener("click", () => bottomOverlay.open());
    });
  });
  section("No Backdrop Close", () => {
    text("Use `no-close-on-backdrop` to prevent closing when clicking backdrop.");
    container({ title: "Must use button to close", height: 150, preset: "centered" }, (ctx) => {
      const btn = document.createElement("editor-button");
      btn.textContent = "Open Locked";
      ctx.container.appendChild(btn);
      const overlay = document.createElement("editor-overlay");
      overlay.setAttribute("no-close-on-backdrop", "");
      const content = document.createElement("div");
      content.style.cssText = "padding:24px;text-align:center;";
      content.innerHTML = '<p style="margin:0 0 16px;color:#888;">Backdrop click disabled</p>';
      const closeBtn = document.createElement("editor-button");
      closeBtn.textContent = "Close";
      closeBtn.variant = "primary";
      closeBtn.addEventListener("click", () => overlay.close());
      content.appendChild(closeBtn);
      overlay.appendChild(content);
      ctx.container.appendChild(overlay);
      btn.addEventListener("click", () => overlay.open());
    });
  });
  section("Events", () => {
    text("Overlay emits `open` and `close` events.");
    container({ title: "Event handling", height: 150, preset: "centered" }, (ctx) => {
      const btn = document.createElement("editor-button");
      btn.textContent = "Toggle";
      ctx.container.appendChild(btn);
      const overlay = document.createElement("editor-overlay");
      overlay.innerHTML = '<div style="padding:24px;color:#888;">Press Escape or click backdrop</div>';
      ctx.container.appendChild(overlay);
      overlay.addEventListener("open", () => logger.log("Opened"));
      overlay.addEventListener("close", () => logger.log("Closed"));
      btn.addEventListener("click", () => overlay.toggle());
    });
  });
});
export {
  overlay_doc as default
};
