var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _checked, _label, _toggle, _labelEl, _ToggleInput_instances, buildDOM_fn, updateDisplay_fn, handleClick_fn;
import { h as handleAttributeChange, c as createInputStyles, e as emitChange } from "./base_input-DkF2Qlwh.js";
const toggleStyles = createInputStyles(`
    .toggle-input-container {
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
    }

    .toggle-input-track {
        position: relative;
        width: 28px;
        height: 14px;
        background: var(--bg-hover);
        border-radius: 7px;
        transition: background 0.2s;
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
        transition: transform 0.2s, background 0.2s;
    }

    .toggle-input-track.checked .toggle-input-thumb {
        transform: translateX(14px);
        background: var(--bg-primary);
    }

    .toggle-input-label {
        font-size: 11px;
        color: var(--fg-primary);
        font-weight: 500;
        user-select: none;
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
`);
class ToggleInput extends HTMLElement {
  constructor() {
    super();
    __privateAdd(this, _ToggleInput_instances);
    __privateAdd(this, _checked, false);
    __privateAdd(this, _label, "");
    __privateAdd(this, _toggle, null);
    __privateAdd(this, _labelEl, null);
    this.attachShadow({ mode: "open" });
    __privateMethod(this, _ToggleInput_instances, buildDOM_fn).call(this);
  }
  static get observedAttributes() {
    return ["checked", "label"];
  }
  connectedCallback() {
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
  const style = document.createElement("style");
  style.textContent = toggleStyles;
  this.shadowRoot.appendChild(style);
  const container = document.createElement("div");
  container.className = "toggle-input-container";
  __privateSet(this, _toggle, document.createElement("div"));
  __privateGet(this, _toggle).className = "toggle-input-track";
  __privateGet(this, _toggle).addEventListener("click", () => __privateMethod(this, _ToggleInput_instances, handleClick_fn).call(this));
  const thumb = document.createElement("div");
  thumb.className = "toggle-input-thumb";
  __privateGet(this, _toggle).appendChild(thumb);
  __privateSet(this, _labelEl, document.createElement("span"));
  __privateGet(this, _labelEl).className = "toggle-input-label";
  __privateGet(this, _labelEl).textContent = __privateGet(this, _label);
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
customElements.define("toggle-input", ToggleInput);
