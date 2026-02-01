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
var _buttonEl, _EditorButton_instances, render_fn, updateButton_fn;
import { E as EditorComponent } from "./editor_component-KitFp2Fu.js";
import { c as controlsSheet } from "./index-Defq3ZXV.js";
import { c as createElement } from "./dom_utils-DTpHkHXB.js";
class EditorButton extends EditorComponent {
  constructor() {
    super(...arguments);
    __privateAdd(this, _EditorButton_instances);
    __privateAdd(this, _buttonEl, null);
  }
  onConnected() {
    __privateMethod(this, _EditorButton_instances, render_fn).call(this);
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue || !__privateGet(this, _buttonEl)) {
      return;
    }
    __privateMethod(this, _EditorButton_instances, updateButton_fn).call(this);
  }
  get variant() {
    return this.getAttribute("variant") || "default";
  }
  set variant(value) {
    this.setAttribute("variant", value);
  }
  get disabled() {
    return this.hasAttribute("disabled");
  }
  set disabled(value) {
    if (value) {
      this.setAttribute("disabled", "");
    } else {
      this.removeAttribute("disabled");
    }
  }
  get active() {
    return this.hasAttribute("active");
  }
  set active(value) {
    if (value) {
      this.setAttribute("active", "");
    } else {
      this.removeAttribute("active");
    }
  }
  focus() {
    var _a;
    (_a = __privateGet(this, _buttonEl)) == null ? void 0 : _a.focus();
  }
  blur() {
    var _a;
    (_a = __privateGet(this, _buttonEl)) == null ? void 0 : _a.blur();
  }
  click() {
    var _a;
    (_a = __privateGet(this, _buttonEl)) == null ? void 0 : _a.click();
  }
}
_buttonEl = new WeakMap();
_EditorButton_instances = new WeakSet();
render_fn = function() {
  __privateSet(this, _buttonEl, createElement("button", {
    type: "button",
    html: "<slot></slot>"
  }));
  __privateGet(this, _buttonEl).addEventListener("click", (e) => {
    if (this.disabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    this.dispatchEvent(new CustomEvent("press", { bubbles: true }));
  });
  __privateMethod(this, _EditorButton_instances, updateButton_fn).call(this);
  this.shadowRoot.appendChild(__privateGet(this, _buttonEl));
};
updateButton_fn = function() {
  if (!__privateGet(this, _buttonEl)) {
    return;
  }
  __privateGet(this, _buttonEl).className = "";
  const variant = this.variant;
  if (variant !== "default") {
    __privateGet(this, _buttonEl).classList.add(variant);
  }
  if (this.hasAttribute("icon")) {
    __privateGet(this, _buttonEl).classList.add("icon-only");
  }
  if (this.active) {
    __privateGet(this, _buttonEl).classList.add("active");
  }
  __privateGet(this, _buttonEl).disabled = this.disabled;
};
__publicField(EditorButton, "styles", [
  controlsSheet,
  `
        :host {
            display: inline-block;
        }

        button {
            width: 100%;
        }

        @media (pointer: coarse) {
            button {
                min-height: var(--touch-target);
                min-width: var(--touch-target);
            }
        }
        `
]);
__publicField(EditorButton, "observedAttributes", ["variant", "icon", "disabled", "active"]);
customElements.define("editor-button", EditorButton);
