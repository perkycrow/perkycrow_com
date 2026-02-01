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
var _value, _step, _precision, _label, _min, _max, _input, _labelEl, _decrementBtn, _incrementBtn, _isDragging, _dragStartX, _dragStartValue, _onDragMove, _onDragEnd, _NumberInput_instances, buildDOM_fn, updateDisplay_fn, handleInputChange_fn, handleBlur_fn, handleKeyDown_fn, handleStep_fn, adjustValue_fn, clamp_fn, startDrag_fn;
import { E as EditorComponent } from "./editor_component-KitFp2Fu.js";
import { c as controlsSheet } from "./index-Defq3ZXV.js";
import { e as emitChange, h as handleAttributeChange } from "./base_input-3TimJ94Y.js";
import { c as createElement } from "./dom_utils-DTpHkHXB.js";
const SHIFT_MULTIPLIER = 10;
const CTRL_MULTIPLIER = 0.1;
const DRAG_SENSITIVITY = 0.5;
const numberInputCSS = `
    :host {
        display: inline-block;
    }

    .number-input-container {
        display: flex;
        align-items: center;
        gap: var(--spacing-xs);
        min-width: 0;
        background: transparent;
        padding: 0;
        height: var(--input-height);
    }

    .number-input-label {
        font-size: var(--font-size-sm);
        color: var(--fg-muted);
        cursor: ew-resize;
        user-select: none;
        -webkit-user-select: none;
        min-width: 10px;
        text-transform: lowercase;
        touch-action: none;
    }

    .number-input-label:hover {
        color: var(--accent);
    }

    .number-input-label.dragging {
        color: var(--accent);
    }

    .number-input-field {
        background: transparent;
        border: none;
        border-radius: 0;
        color: var(--fg-primary);
        font-size: var(--font-size-sm);
        font-family: var(--font-mono);
        width: 28px;
        text-align: right;
        padding: 0;
        height: auto;
    }

    .number-input-field:hover {
        background: transparent;
    }

    .number-input-field:focus {
        outline: none;
        border: none;
        background: transparent;
    }

    .number-input-steppers {
        display: flex;
        gap: 1px;
    }

    .number-input-stepper {
        background: transparent;
        border: none;
        color: var(--fg-muted);
        cursor: pointer;
        font-size: 7px;
        width: 14px;
        height: 18px;
        min-height: auto;
        min-width: auto;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background var(--transition-fast), color var(--transition-fast);
        border-radius: var(--radius-sm);
    }

    .number-input-stepper:hover {
        background: var(--bg-hover);
        color: var(--fg-primary);
    }

    .number-input-stepper:active {
        background: var(--accent);
        color: var(--bg-primary);
        transform: none;
    }


    :host([compact]) .number-input-container {
        background: transparent;
        border: none;
        padding: 0;
        height: auto;
        gap: 2px;
    }

    :host([compact]) .number-input-container:focus-within {
        border-color: transparent;
    }

    :host([compact]) .number-input-label {
        display: none;
    }

    :host([compact]) .number-input-field {
        text-align: center;
        padding: 2px 4px;
        color: var(--fg-muted);
        transition: color var(--transition-fast);
    }

    :host([compact]) .number-input-field:hover {
        color: var(--fg-secondary);
    }

    :host([compact]) .number-input-field:focus {
        color: var(--fg-primary);
    }

    :host([compact]) .number-input-steppers {
        flex-direction: column-reverse;
        gap: 0;
    }

    :host([compact]) .number-input-stepper {
        width: 12px;
        height: 10px;
        font-size: 0;
        border-radius: 2px;
    }

    :host([compact]) .number-input-stepper::after {
        font-size: 6px;
    }

    :host([compact]) .number-input-stepper:first-child {
        border-radius: 0 0 2px 2px;
    }

    :host([compact]) .number-input-stepper:first-child::after {
        content: '▼';
    }

    :host([compact]) .number-input-stepper:last-child {
        border-radius: 2px 2px 0 0;
    }

    :host([compact]) .number-input-stepper:last-child::after {
        content: '▲';
    }


    :host([context="studio"]) .number-input-container {
        height: var(--touch-target);
        padding: 0 var(--spacing-xs) 0 var(--spacing-md);
        border-radius: var(--radius-md);
    }

    :host([context="studio"]) .number-input-label {
        font-size: var(--font-size-md);
    }

    :host([context="studio"]) .number-input-field {
        font-size: var(--font-size-md);
        width: 36px;
    }

    :host([context="studio"]) .number-input-stepper {
        width: 28px;
        height: 32px;
        font-size: 12px;
    }
`;
class NumberInput extends EditorComponent {
  constructor() {
    super();
    __privateAdd(this, _NumberInput_instances);
    __privateAdd(this, _value, 0);
    __privateAdd(this, _step, 0.1);
    __privateAdd(this, _precision, 2);
    __privateAdd(this, _label, "");
    __privateAdd(this, _min, -Infinity);
    __privateAdd(this, _max, Infinity);
    __privateAdd(this, _input, null);
    __privateAdd(this, _labelEl, null);
    __privateAdd(this, _decrementBtn, null);
    __privateAdd(this, _incrementBtn, null);
    __privateAdd(this, _isDragging, false);
    __privateAdd(this, _dragStartX, 0);
    __privateAdd(this, _dragStartValue, 0);
    __privateAdd(this, _onDragMove, (event) => {
      if (!__privateGet(this, _isDragging)) {
        return;
      }
      const deltaX = event.clientX - __privateGet(this, _dragStartX);
      const multiplier = getMultiplier(event);
      const delta = deltaX * DRAG_SENSITIVITY * __privateGet(this, _step) * multiplier;
      const newValue = __privateMethod(this, _NumberInput_instances, clamp_fn).call(this, __privateGet(this, _dragStartValue) + delta);
      if (__privateGet(this, _value) !== newValue) {
        __privateSet(this, _value, newValue);
        __privateMethod(this, _NumberInput_instances, updateDisplay_fn).call(this);
        emitChange(this, { value: __privateGet(this, _value) });
      }
    });
    __privateAdd(this, _onDragEnd, () => {
      __privateSet(this, _isDragging, false);
      if (__privateGet(this, _labelEl)) {
        __privateGet(this, _labelEl).classList.remove("dragging");
      }
      document.body.style.cursor = "";
      document.removeEventListener("pointermove", __privateGet(this, _onDragMove));
      document.removeEventListener("pointerup", __privateGet(this, _onDragEnd));
      document.removeEventListener("pointercancel", __privateGet(this, _onDragEnd));
    });
    __privateMethod(this, _NumberInput_instances, buildDOM_fn).call(this);
  }
  static get observedAttributes() {
    return ["value", "step", "precision", "label", "min", "max"];
  }
  onConnected() {
    __privateMethod(this, _NumberInput_instances, updateDisplay_fn).call(this);
  }
  onDisconnected() {
    if (__privateGet(this, _isDragging)) {
      __privateGet(this, _onDragEnd).call(this);
    }
  }
  attributeChangedCallback(name, oldValue, newValue) {
    handleAttributeChange(this, name, oldValue, newValue);
  }
  get value() {
    return __privateGet(this, _value);
  }
  set value(val) {
    const newValue = __privateMethod(this, _NumberInput_instances, clamp_fn).call(this, parseFloat(val) || 0);
    if (__privateGet(this, _value) !== newValue) {
      __privateSet(this, _value, newValue);
      __privateMethod(this, _NumberInput_instances, updateDisplay_fn).call(this);
    }
  }
  setValue(val) {
    __privateSet(this, _value, val);
    __privateMethod(this, _NumberInput_instances, updateDisplay_fn).call(this);
  }
  setStep(val) {
    __privateSet(this, _step, val);
  }
  setPrecision(val) {
    __privateSet(this, _precision, val);
    __privateMethod(this, _NumberInput_instances, updateDisplay_fn).call(this);
  }
  setLabel(val) {
    __privateSet(this, _label, val);
    if (__privateGet(this, _labelEl)) {
      __privateGet(this, _labelEl).textContent = __privateGet(this, _label);
    }
  }
  setMin(val) {
    __privateSet(this, _min, val);
  }
  setMax(val) {
    __privateSet(this, _max, val);
  }
  setCompact(val) {
    if (val) {
      this.setAttribute("compact", "");
    } else {
      this.removeAttribute("compact");
    }
  }
}
_value = new WeakMap();
_step = new WeakMap();
_precision = new WeakMap();
_label = new WeakMap();
_min = new WeakMap();
_max = new WeakMap();
_input = new WeakMap();
_labelEl = new WeakMap();
_decrementBtn = new WeakMap();
_incrementBtn = new WeakMap();
_isDragging = new WeakMap();
_dragStartX = new WeakMap();
_dragStartValue = new WeakMap();
_onDragMove = new WeakMap();
_onDragEnd = new WeakMap();
_NumberInput_instances = new WeakSet();
buildDOM_fn = function() {
  const container = createElement("div", { class: "number-input-container" });
  __privateSet(this, _labelEl, createElement("span", { class: "number-input-label", text: __privateGet(this, _label) }));
  __privateGet(this, _labelEl).addEventListener("pointerdown", (e) => __privateMethod(this, _NumberInput_instances, startDrag_fn).call(this, e));
  __privateSet(this, _input, createElement("input", {
    class: "number-input-field",
    type: "text",
    attrs: { inputmode: "decimal" }
  }));
  __privateGet(this, _input).addEventListener("input", () => __privateMethod(this, _NumberInput_instances, handleInputChange_fn).call(this));
  __privateGet(this, _input).addEventListener("keydown", (e) => __privateMethod(this, _NumberInput_instances, handleKeyDown_fn).call(this, e));
  __privateGet(this, _input).addEventListener("blur", () => __privateMethod(this, _NumberInput_instances, handleBlur_fn).call(this));
  __privateGet(this, _input).addEventListener("focus", () => __privateGet(this, _input).select());
  const stepperContainer = createElement("div", { class: "number-input-steppers" });
  __privateSet(this, _decrementBtn, createElement("button", { class: "number-input-stepper", html: "◀" }));
  __privateGet(this, _decrementBtn).tabIndex = -1;
  __privateGet(this, _decrementBtn).addEventListener("click", (e) => __privateMethod(this, _NumberInput_instances, handleStep_fn).call(this, -1, e));
  __privateSet(this, _incrementBtn, createElement("button", { class: "number-input-stepper", html: "▶" }));
  __privateGet(this, _incrementBtn).tabIndex = -1;
  __privateGet(this, _incrementBtn).addEventListener("click", (e) => __privateMethod(this, _NumberInput_instances, handleStep_fn).call(this, 1, e));
  stepperContainer.appendChild(__privateGet(this, _decrementBtn));
  stepperContainer.appendChild(__privateGet(this, _incrementBtn));
  container.appendChild(__privateGet(this, _labelEl));
  container.appendChild(__privateGet(this, _input));
  container.appendChild(stepperContainer);
  this.shadowRoot.appendChild(container);
};
updateDisplay_fn = function() {
  if (__privateGet(this, _input) && !__privateGet(this, _input).matches(":focus")) {
    __privateGet(this, _input).value = __privateGet(this, _value).toFixed(__privateGet(this, _precision));
  }
};
handleInputChange_fn = function() {
  const parsed = parseFloat(__privateGet(this, _input).value);
  if (!isNaN(parsed)) {
    const clamped = __privateMethod(this, _NumberInput_instances, clamp_fn).call(this, parsed);
    if (__privateGet(this, _value) !== clamped) {
      __privateSet(this, _value, clamped);
      emitChange(this, { value: __privateGet(this, _value) });
    }
  }
};
handleBlur_fn = function() {
  const parsed = parseFloat(__privateGet(this, _input).value);
  if (isNaN(parsed)) {
    __privateMethod(this, _NumberInput_instances, updateDisplay_fn).call(this);
  } else {
    __privateSet(this, _value, __privateMethod(this, _NumberInput_instances, clamp_fn).call(this, parsed));
    __privateMethod(this, _NumberInput_instances, updateDisplay_fn).call(this);
  }
};
handleKeyDown_fn = function(event) {
  const multiplier = getMultiplier(event);
  const key = event.key;
  if (key === "ArrowUp") {
    event.preventDefault();
    __privateMethod(this, _NumberInput_instances, adjustValue_fn).call(this, __privateGet(this, _step) * multiplier);
  } else if (key === "ArrowDown") {
    event.preventDefault();
    __privateMethod(this, _NumberInput_instances, adjustValue_fn).call(this, -__privateGet(this, _step) * multiplier);
  } else if (key === "Enter") {
    event.preventDefault();
    __privateGet(this, _input).blur();
  } else if (key === "Escape") {
    event.preventDefault();
    __privateMethod(this, _NumberInput_instances, updateDisplay_fn).call(this);
    __privateGet(this, _input).blur();
  }
};
handleStep_fn = function(direction, event) {
  const multiplier = getMultiplier(event);
  __privateMethod(this, _NumberInput_instances, adjustValue_fn).call(this, direction * __privateGet(this, _step) * multiplier);
};
adjustValue_fn = function(delta) {
  const newValue = __privateMethod(this, _NumberInput_instances, clamp_fn).call(this, __privateGet(this, _value) + delta);
  if (__privateGet(this, _value) !== newValue) {
    __privateSet(this, _value, newValue);
    __privateMethod(this, _NumberInput_instances, updateDisplay_fn).call(this);
    emitChange(this, { value: __privateGet(this, _value) });
  }
};
clamp_fn = function(value) {
  return Math.max(__privateGet(this, _min), Math.min(__privateGet(this, _max), value));
};
startDrag_fn = function(event) {
  event.preventDefault();
  __privateSet(this, _isDragging, true);
  __privateSet(this, _dragStartX, event.clientX);
  __privateSet(this, _dragStartValue, __privateGet(this, _value));
  if (__privateGet(this, _labelEl)) {
    __privateGet(this, _labelEl).classList.add("dragging");
  }
  document.body.style.cursor = "ew-resize";
  document.addEventListener("pointermove", __privateGet(this, _onDragMove));
  document.addEventListener("pointerup", __privateGet(this, _onDragEnd));
  document.addEventListener("pointercancel", __privateGet(this, _onDragEnd));
};
__publicField(NumberInput, "styles", [controlsSheet, numberInputCSS]);
function getMultiplier(event) {
  if (event.shiftKey) {
    return SHIFT_MULTIPLIER;
  }
  if (event.ctrlKey || event.metaKey) {
    return CTRL_MULTIPLIER;
  }
  return 1;
}
customElements.define("number-input", NumberInput);
