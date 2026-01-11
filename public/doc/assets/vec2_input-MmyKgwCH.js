var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _value, _step, _precision, _label, _min, _max, _input, _labelEl, _decrementBtn, _incrementBtn, _isDragging, _dragStartX, _dragStartValue, _onDragMove, _onDragEnd, _NumberInput_instances, buildDOM_fn, updateDisplay_fn, handleInputChange_fn, handleBlur_fn, handleKeyDown_fn, handleStep_fn, adjustValue_fn, clamp_fn, startDrag_fn, _vec2, _xInput, _yInput, _label2, _labelEl2, _Vec2Input_instances, buildDOM_fn2, updateDisplay_fn2, handleChange_fn;
import { e as emitChange, h as handleAttributeChange, c as createInputStyles } from "./base_input-DkF2Qlwh.js";
const SHIFT_MULTIPLIER = 10;
const CTRL_MULTIPLIER = 0.1;
const DRAG_SENSITIVITY = 0.5;
const numberStyles = createInputStyles(`
    .number-input-container {
        display: flex;
        align-items: center;
        gap: 6px;
        flex: 1;
        min-width: 0;
        background: var(--bg-primary);
        border: 1px solid var(--border);
        border-radius: 4px;
        padding: 0 2px 0 8px;
        height: 26px;
        transition: border-color 0.15s;
    }

    .number-input-container:focus-within {
        border-color: var(--accent);
    }

    .number-input-label {
        font-size: 11px;
        color: var(--fg-muted);
        cursor: ew-resize;
        user-select: none;
        min-width: 10px;
        text-transform: lowercase;
    }

    .number-input-label:hover {
        color: var(--accent);
    }

    .number-input-label.dragging {
        color: var(--accent);
    }

    .number-input-field {
        flex: 1;
        background: transparent;
        border: none;
        color: var(--fg-primary);
        font-size: 11px;
        font-family: var(--font-mono);
        min-width: 0;
        text-align: right;
        padding: 0;
    }

    .number-input-field:focus {
        outline: none;
    }

    .number-input-steppers {
        display: flex;
        gap: 1px;
    }

    .number-input-stepper {
        background: var(--bg-hover);
        border: none;
        color: var(--fg-muted);
        cursor: pointer;
        font-size: 7px;
        width: 14px;
        height: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.1s, color 0.1s;
    }

    .number-input-stepper:first-child {
        border-radius: 2px 0 0 2px;
    }

    .number-input-stepper:last-child {
        border-radius: 0 2px 2px 0;
    }

    .number-input-stepper:hover {
        background: var(--bg-selected);
        color: var(--fg-primary);
    }

    .number-input-stepper:active {
        background: var(--accent);
        color: var(--bg-primary);
    }
`);
function getMultiplier(event) {
  if (event.shiftKey) {
    return SHIFT_MULTIPLIER;
  }
  if (event.ctrlKey || event.metaKey) {
    return CTRL_MULTIPLIER;
  }
  return 1;
}
class NumberInput extends HTMLElement {
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
      __privateGet(this, _labelEl).classList.remove("dragging");
      document.body.style.cursor = "";
      document.removeEventListener("mousemove", __privateGet(this, _onDragMove));
      document.removeEventListener("mouseup", __privateGet(this, _onDragEnd));
    });
    this.attachShadow({ mode: "open" });
    __privateMethod(this, _NumberInput_instances, buildDOM_fn).call(this);
  }
  static get observedAttributes() {
    return ["value", "step", "precision", "label", "min", "max"];
  }
  connectedCallback() {
    __privateMethod(this, _NumberInput_instances, updateDisplay_fn).call(this);
  }
  disconnectedCallback() {
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
  const style = document.createElement("style");
  style.textContent = numberStyles;
  this.shadowRoot.appendChild(style);
  const container = document.createElement("div");
  container.className = "number-input-container";
  __privateSet(this, _labelEl, document.createElement("span"));
  __privateGet(this, _labelEl).className = "number-input-label";
  __privateGet(this, _labelEl).textContent = __privateGet(this, _label);
  __privateGet(this, _labelEl).addEventListener("mousedown", (e) => __privateMethod(this, _NumberInput_instances, startDrag_fn).call(this, e));
  __privateSet(this, _input, document.createElement("input"));
  __privateGet(this, _input).className = "number-input-field";
  __privateGet(this, _input).type = "text";
  __privateGet(this, _input).inputMode = "decimal";
  __privateGet(this, _input).addEventListener("input", () => __privateMethod(this, _NumberInput_instances, handleInputChange_fn).call(this));
  __privateGet(this, _input).addEventListener("keydown", (e) => __privateMethod(this, _NumberInput_instances, handleKeyDown_fn).call(this, e));
  __privateGet(this, _input).addEventListener("blur", () => __privateMethod(this, _NumberInput_instances, handleBlur_fn).call(this));
  __privateGet(this, _input).addEventListener("focus", () => __privateGet(this, _input).select());
  const stepperContainer = document.createElement("div");
  stepperContainer.className = "number-input-steppers";
  __privateSet(this, _decrementBtn, document.createElement("button"));
  __privateGet(this, _decrementBtn).className = "number-input-stepper";
  __privateGet(this, _decrementBtn).innerHTML = "◀";
  __privateGet(this, _decrementBtn).tabIndex = -1;
  __privateGet(this, _decrementBtn).addEventListener("click", (e) => __privateMethod(this, _NumberInput_instances, handleStep_fn).call(this, -1, e));
  __privateSet(this, _incrementBtn, document.createElement("button"));
  __privateGet(this, _incrementBtn).className = "number-input-stepper";
  __privateGet(this, _incrementBtn).innerHTML = "▶";
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
  __privateGet(this, _labelEl).classList.add("dragging");
  document.body.style.cursor = "ew-resize";
  document.addEventListener("mousemove", __privateGet(this, _onDragMove));
  document.addEventListener("mouseup", __privateGet(this, _onDragEnd));
};
customElements.define("number-input", NumberInput);
const vec2Styles = createInputStyles(`
    :host {
        display: block;
        width: 100%;
        box-sizing: border-box;
    }

    .vec2-input-container {
        display: flex;
        flex-direction: column;
        gap: 4px;
        width: 100%;
    }

    .vec2-input-label {
        font-size: 10px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        color: var(--fg-muted);
    }

    .vec2-input-label:empty {
        display: none;
    }

    .vec2-inputs {
        display: flex;
        gap: 8px;
        width: 100%;
    }

    .vec2-inputs number-input {
        flex: 1;
        min-width: 0;
    }
`);
class Vec2Input extends HTMLElement {
  constructor() {
    super();
    __privateAdd(this, _Vec2Input_instances);
    __privateAdd(this, _vec2, null);
    __privateAdd(this, _xInput, null);
    __privateAdd(this, _yInput, null);
    __privateAdd(this, _label2, "");
    __privateAdd(this, _labelEl2, null);
    this.attachShadow({ mode: "open" });
    __privateMethod(this, _Vec2Input_instances, buildDOM_fn2).call(this);
  }
  static get observedAttributes() {
    return ["label"];
  }
  connectedCallback() {
    __privateMethod(this, _Vec2Input_instances, updateDisplay_fn2).call(this);
  }
  attributeChangedCallback(name, oldValue, newValue) {
    handleAttributeChange(this, name, oldValue, newValue);
  }
  get value() {
    return __privateGet(this, _vec2);
  }
  set value(vec2) {
    __privateSet(this, _vec2, vec2);
    __privateMethod(this, _Vec2Input_instances, updateDisplay_fn2).call(this);
  }
  setLabel(val) {
    __privateSet(this, _label2, val);
    if (__privateGet(this, _labelEl2)) {
      __privateGet(this, _labelEl2).textContent = __privateGet(this, _label2);
    }
  }
}
_vec2 = new WeakMap();
_xInput = new WeakMap();
_yInput = new WeakMap();
_label2 = new WeakMap();
_labelEl2 = new WeakMap();
_Vec2Input_instances = new WeakSet();
buildDOM_fn2 = function() {
  const style = document.createElement("style");
  style.textContent = vec2Styles;
  this.shadowRoot.appendChild(style);
  const container = document.createElement("div");
  container.className = "vec2-input-container";
  __privateSet(this, _labelEl2, document.createElement("span"));
  __privateGet(this, _labelEl2).className = "vec2-input-label";
  __privateGet(this, _labelEl2).textContent = __privateGet(this, _label2);
  const inputs = document.createElement("div");
  inputs.className = "vec2-inputs";
  __privateSet(this, _xInput, document.createElement("number-input"));
  __privateGet(this, _xInput).setAttribute("label", "x");
  __privateGet(this, _xInput).setAttribute("step", "0.1");
  __privateGet(this, _xInput).setAttribute("precision", "2");
  __privateGet(this, _xInput).addEventListener("change", (e) => __privateMethod(this, _Vec2Input_instances, handleChange_fn).call(this, "x", e.detail.value));
  __privateSet(this, _yInput, document.createElement("number-input"));
  __privateGet(this, _yInput).setAttribute("label", "y");
  __privateGet(this, _yInput).setAttribute("step", "0.1");
  __privateGet(this, _yInput).setAttribute("precision", "2");
  __privateGet(this, _yInput).addEventListener("change", (e) => __privateMethod(this, _Vec2Input_instances, handleChange_fn).call(this, "y", e.detail.value));
  inputs.appendChild(__privateGet(this, _xInput));
  inputs.appendChild(__privateGet(this, _yInput));
  container.appendChild(__privateGet(this, _labelEl2));
  container.appendChild(inputs);
  this.shadowRoot.appendChild(container);
};
updateDisplay_fn2 = function() {
  if (!__privateGet(this, _vec2)) {
    return;
  }
  __privateGet(this, _xInput).value = __privateGet(this, _vec2).x;
  __privateGet(this, _yInput).value = __privateGet(this, _vec2).y;
};
handleChange_fn = function(axis, value) {
  if (!__privateGet(this, _vec2)) {
    return;
  }
  __privateGet(this, _vec2)[axis] = value;
  emitChange(this, { value: __privateGet(this, _vec2), axis, componentValue: value });
};
customElements.define("vec2-input", Vec2Input);
