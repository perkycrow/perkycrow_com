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
var _vec2, _xInput, _yInput, _label, _labelEl, _Vec2Input_instances, buildDOM_fn, updateDisplay_fn, syncContext_fn, handleChange_fn;
import { E as EditorComponent } from "./editor_component-KitFp2Fu.js";
import { c as controlsSheet } from "./index-Defq3ZXV.js";
import { h as handleAttributeChange, e as emitChange } from "./base_input-3TimJ94Y.js";
import { c as createElement } from "./dom_utils-DTpHkHXB.js";
import "./number_input-LIkKIlEX.js";
const vec2InputCSS = `
    :host {
        display: block;
        width: 100%;
    }

    .vec2-input-container {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-xs);
        width: 100%;
    }

    .vec2-input-label {
        font-size: var(--font-size-xs);
        text-transform: uppercase;
        letter-spacing: 0.5px;
        color: var(--fg-muted);
    }

    .vec2-input-label:empty {
        display: none;
    }

    .vec2-inputs {
        display: flex;
        gap: var(--spacing-sm);
        width: 100%;
    }

    .vec2-inputs number-input {
        flex: 1;
        min-width: 0;
    }


    :host([context="studio"]) .vec2-input-container {
        gap: var(--spacing-sm);
    }

    :host([context="studio"]) .vec2-input-label {
        font-size: var(--font-size-sm);
    }

    :host([context="studio"]) .vec2-inputs {
        gap: var(--spacing-md);
    }

    :host([context="studio"]) .vec2-inputs number-input {
        --input-height: var(--touch-target);
    }
`;
class Vec2Input extends EditorComponent {
  constructor() {
    super();
    __privateAdd(this, _Vec2Input_instances);
    __privateAdd(this, _vec2, null);
    __privateAdd(this, _xInput, null);
    __privateAdd(this, _yInput, null);
    __privateAdd(this, _label, "");
    __privateAdd(this, _labelEl, null);
    __privateMethod(this, _Vec2Input_instances, buildDOM_fn).call(this);
  }
  static get observedAttributes() {
    return ["label"];
  }
  onConnected() {
    __privateMethod(this, _Vec2Input_instances, updateDisplay_fn).call(this);
    __privateMethod(this, _Vec2Input_instances, syncContext_fn).call(this);
  }
  attributeChangedCallback(name, oldValue, newValue) {
    handleAttributeChange(this, name, oldValue, newValue);
    if (name === "context") {
      __privateMethod(this, _Vec2Input_instances, syncContext_fn).call(this);
    }
  }
  get value() {
    return __privateGet(this, _vec2);
  }
  set value(vec2) {
    __privateSet(this, _vec2, vec2);
    __privateMethod(this, _Vec2Input_instances, updateDisplay_fn).call(this);
  }
  setLabel(val) {
    __privateSet(this, _label, val);
    if (__privateGet(this, _labelEl)) {
      __privateGet(this, _labelEl).textContent = __privateGet(this, _label);
    }
  }
}
_vec2 = new WeakMap();
_xInput = new WeakMap();
_yInput = new WeakMap();
_label = new WeakMap();
_labelEl = new WeakMap();
_Vec2Input_instances = new WeakSet();
buildDOM_fn = function() {
  const container = createElement("div", { class: "vec2-input-container" });
  __privateSet(this, _labelEl, createElement("span", {
    class: "vec2-input-label",
    text: __privateGet(this, _label)
  }));
  const inputs = createElement("div", { class: "vec2-inputs" });
  __privateSet(this, _xInput, createElement("number-input", {
    attrs: { label: "x", step: "0.1", precision: "2" }
  }));
  __privateGet(this, _xInput).addEventListener("change", (e) => __privateMethod(this, _Vec2Input_instances, handleChange_fn).call(this, "x", e.detail.value));
  __privateSet(this, _yInput, createElement("number-input", {
    attrs: { label: "y", step: "0.1", precision: "2" }
  }));
  __privateGet(this, _yInput).addEventListener("change", (e) => __privateMethod(this, _Vec2Input_instances, handleChange_fn).call(this, "y", e.detail.value));
  inputs.appendChild(__privateGet(this, _xInput));
  inputs.appendChild(__privateGet(this, _yInput));
  container.appendChild(__privateGet(this, _labelEl));
  container.appendChild(inputs);
  this.shadowRoot.appendChild(container);
};
updateDisplay_fn = function() {
  if (!__privateGet(this, _vec2)) {
    return;
  }
  __privateGet(this, _xInput).value = __privateGet(this, _vec2).x;
  __privateGet(this, _yInput).value = __privateGet(this, _vec2).y;
};
syncContext_fn = function() {
  var _a, _b, _c, _d;
  const context = this.getAttribute("context");
  if (context) {
    (_a = __privateGet(this, _xInput)) == null ? void 0 : _a.setAttribute("context", context);
    (_b = __privateGet(this, _yInput)) == null ? void 0 : _b.setAttribute("context", context);
  } else {
    (_c = __privateGet(this, _xInput)) == null ? void 0 : _c.removeAttribute("context");
    (_d = __privateGet(this, _yInput)) == null ? void 0 : _d.removeAttribute("context");
  }
};
handleChange_fn = function(axis, value) {
  if (!__privateGet(this, _vec2)) {
    return;
  }
  __privateGet(this, _vec2)[axis] = value;
  emitChange(this, { value: __privateGet(this, _vec2), axis, componentValue: value });
};
__publicField(Vec2Input, "styles", [controlsSheet, vec2InputCSS]);
customElements.define("vec2-input", Vec2Input);
