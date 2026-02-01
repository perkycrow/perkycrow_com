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
var _checked, _label, _toggle, _labelEl, _ToggleInput_instances, buildDOM_fn, updateDisplay_fn, handleClick_fn;
import { E as EditorComponent } from "./editor_component-KitFp2Fu.js";
import { c as controlsSheet } from "./index-Defq3ZXV.js";
import { h as handleAttributeChange, e as emitChange } from "./base_input-3TimJ94Y.js";
import { c as createElement } from "./dom_utils-DTpHkHXB.js";
const toggleInputCSS = `
    .toggle-input-container {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
        cursor: pointer;
    }

    .toggle-input-track {
        position: relative;
        width: 28px;
        height: 14px;
        background: var(--bg-hover);
        border-radius: 7px;
        transition: background var(--transition-normal);
        flex-shrink: 0;
    }

    .toggle-input-track.checked {
        background: var(--accent);
    }

    .toggle-input-thumb {
        position: absolute;
        top: 2px;
        left: 2px;
        width: 10px;
        height: 10px;
        background: var(--fg-muted);
        border-radius: 50%;
        transition: transform var(--transition-normal), background var(--transition-normal);
    }

    .toggle-input-track.checked .toggle-input-thumb {
        transform: translateX(14px);
        background: var(--bg-primary);
    }

    .toggle-input-label {
        font-size: var(--font-size-sm);
        color: var(--fg-primary);
        font-weight: 500;
        user-select: none;
        -webkit-user-select: none;
    }

    .toggle-input-label:empty {
        display: none;
    }

    .toggle-input-container:hover .toggle-input-track:not(.checked) {
        background: var(--bg-selected);
    }

    .toggle-input-container:hover .toggle-input-thumb {
        background: var(--fg-secondary);
    }

    .toggle-input-track.checked:hover .toggle-input-thumb {
        background: var(--bg-primary);
    }


    :host([context="studio"]) .toggle-input-container {
        gap: var(--spacing-md);
    }

    :host([context="studio"]) .toggle-input-track {
        width: 52px;
        height: 32px;
        border-radius: 16px;
    }

    :host([context="studio"]) .toggle-input-thumb {
        top: 4px;
        left: 4px;
        width: 24px;
        height: 24px;
    }

    :host([context="studio"]) .toggle-input-track.checked .toggle-input-thumb {
        transform: translateX(20px);
    }

    :host([context="studio"]) .toggle-input-label {
        font-size: var(--font-size-lg);
    }
`;
class ToggleInput extends EditorComponent {
  constructor() {
    super();
    __privateAdd(this, _ToggleInput_instances);
    __privateAdd(this, _checked, false);
    __privateAdd(this, _label, "");
    __privateAdd(this, _toggle, null);
    __privateAdd(this, _labelEl, null);
    __privateMethod(this, _ToggleInput_instances, buildDOM_fn).call(this);
  }
  static get observedAttributes() {
    return ["checked", "label"];
  }
  onConnected() {
    __privateMethod(this, _ToggleInput_instances, updateDisplay_fn).call(this);
  }
  attributeChangedCallback(name, oldValue, newValue) {
    handleAttributeChange(this, name, oldValue, newValue);
  }
  get checked() {
    return __privateGet(this, _checked);
  }
  set checked(val) {
    const newChecked = Boolean(val);
    if (__privateGet(this, _checked) !== newChecked) {
      __privateSet(this, _checked, newChecked);
      __privateMethod(this, _ToggleInput_instances, updateDisplay_fn).call(this);
    }
  }
  setChecked(val) {
    __privateSet(this, _checked, val);
    __privateMethod(this, _ToggleInput_instances, updateDisplay_fn).call(this);
  }
  setLabel(val) {
    __privateSet(this, _label, val);
    if (__privateGet(this, _labelEl)) {
      __privateGet(this, _labelEl).textContent = __privateGet(this, _label);
    }
  }
}
_checked = new WeakMap();
_label = new WeakMap();
_toggle = new WeakMap();
_labelEl = new WeakMap();
_ToggleInput_instances = new WeakSet();
buildDOM_fn = function() {
  const container = createElement("div", { class: "toggle-input-container" });
  __privateSet(this, _toggle, createElement("div", { class: "toggle-input-track" }));
  __privateGet(this, _toggle).addEventListener("click", () => __privateMethod(this, _ToggleInput_instances, handleClick_fn).call(this));
  const thumb = createElement("div", { class: "toggle-input-thumb" });
  __privateGet(this, _toggle).appendChild(thumb);
  __privateSet(this, _labelEl, createElement("span", {
    class: "toggle-input-label",
    text: __privateGet(this, _label)
  }));
  __privateGet(this, _labelEl).addEventListener("click", () => __privateMethod(this, _ToggleInput_instances, handleClick_fn).call(this));
  container.appendChild(__privateGet(this, _toggle));
  container.appendChild(__privateGet(this, _labelEl));
  this.shadowRoot.appendChild(container);
};
updateDisplay_fn = function() {
  if (__privateGet(this, _toggle)) {
    __privateGet(this, _toggle).classList.toggle("checked", __privateGet(this, _checked));
  }
};
handleClick_fn = function() {
  __privateSet(this, _checked, !__privateGet(this, _checked));
  __privateMethod(this, _ToggleInput_instances, updateDisplay_fn).call(this);
  emitChange(this, { checked: __privateGet(this, _checked) });
};
__publicField(ToggleInput, "styles", [controlsSheet, toggleInputCSS]);
customElements.define("toggle-input", ToggleInput);
