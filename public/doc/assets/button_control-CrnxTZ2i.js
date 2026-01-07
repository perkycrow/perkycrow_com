var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _InputDevice_instances, initEvents_fn;
import { P as PerkyModule, R as Registry } from "./perky_module-8S_KnZAY.js";
import { N as Notifier } from "./runtime-CM36Pd9c.js";
class InputDevice extends PerkyModule {
  constructor(options = {}) {
    super(options);
    __privateAdd(this, _InputDevice_instances);
    const { container = window } = options;
    this.container = container;
    this.controls = new Registry();
    this.pressedNames = /* @__PURE__ */ new Set();
    __privateMethod(this, _InputDevice_instances, initEvents_fn).call(this);
  }
  onInstall(host) {
    this.delegateEventsTo(host, ["control:pressed", "control:released", "control:updated"]);
  }
  registerControl(control) {
    if (!(control && control.name)) {
      throw new Error("Control must have a name");
    }
    if (this.controls.has(control.name)) {
      return false;
    }
    this.controls.set(control.name, control);
    return true;
  }
  getControl(name) {
    return this.controls.get(name);
  }
  getValueFor(controlName) {
    const control = this.getControl(controlName);
    return control ? control.value : void 0;
  }
  isPressed(controlName) {
    return this.pressedNames.has(controlName);
  }
  getPressedControls() {
    const results = [];
    for (const controlName of this.pressedNames) {
      const control = this.getControl(controlName);
      if (control) {
        results.push(control);
      }
    }
    return results;
  }
  findOrCreateControl(Control, params = {}) {
    const controlName = params.name;
    if (!controlName) {
      throw new Error("Control must have a name");
    }
    let control = this.controls.get(controlName);
    if (control) {
      return control;
    }
    control = new Control({
      device: this,
      name: controlName,
      ...params
    });
    if (this.registerControl(control)) {
      return control;
    }
    return null;
  }
  shouldPreventDefaultFor(event, control) {
    if (!this.shouldPreventDefault) {
      return false;
    }
    if (typeof this.shouldPreventDefault === "function") {
      return this.shouldPreventDefault(event, control, this);
    }
    return true;
  }
  preventDefault(event, control) {
    if (control && event && this.shouldPreventDefaultFor(event, control)) {
      if (typeof event.preventDefault === "function") {
        event.preventDefault();
      }
      if (typeof event.stopPropagation === "function") {
        event.stopPropagation();
      }
    }
  }
  onDispose() {
    this.controls.clear();
  }
}
_InputDevice_instances = new WeakSet();
initEvents_fn = function() {
  const device = this;
  const controlListeners = /* @__PURE__ */ new WeakMap();
  const createListeners = (control) => ({
    pressed(event) {
      device.pressedNames.add(control.name);
      device.emit("control:pressed", control, event, device);
      device.preventDefault(event, control);
    },
    released(event) {
      device.pressedNames.delete(control.name);
      device.emit("control:released", control, event, device);
      device.preventDefault(event, control);
    },
    updated(value, oldValue, event) {
      device.emit("control:updated", control, value, oldValue, event, device);
    }
  });
  this.controls.on("set", (key, control) => {
    const listeners = createListeners(control);
    controlListeners.set(control, listeners);
    control.on("pressed", listeners.pressed);
    control.on("released", listeners.released);
    control.on("updated", listeners.updated);
  });
  this.controls.on("delete", (key, control) => {
    const listeners = controlListeners.get(control);
    if (listeners) {
      control.off("pressed", listeners.pressed);
      control.off("released", listeners.released);
      control.off("updated", listeners.updated);
      controlListeners.delete(control);
    }
    device.pressedNames.delete(control.name);
  });
};
__publicField(InputDevice, "$category", "inputDevice");
const VALUE = Symbol("value");
const OLD_VALUE = Symbol("oldValue");
class InputControl extends Notifier {
  constructor({ device, name, value }) {
    super();
    this.device = device;
    this.name = name;
    this[OLD_VALUE] = null;
    this[VALUE] = value ?? this.getDefaultValue();
  }
  set value(value) {
    this.setValue(value);
  }
  setValue(value, event = null) {
    if (value === this[VALUE]) {
      return false;
    }
    this[OLD_VALUE] = this[VALUE];
    this[VALUE] = value;
    this.emit("updated", this[VALUE], this[OLD_VALUE], event);
    return true;
  }
  get value() {
    return this[VALUE];
  }
  get oldValue() {
    return this[OLD_VALUE];
  }
  getDefaultValue() {
    return 0;
  }
  reset() {
    this.value = this.getDefaultValue();
  }
}
__publicField(InputControl, "VALUE", VALUE);
__publicField(InputControl, "OLD_VALUE", OLD_VALUE);
class ButtonControl extends InputControl {
  constructor(params = {}) {
    super(params);
    this.pressThreshold = params.pressThreshold ?? this.constructor.defaultPressThreshold;
  }
  setValue(value, event = null) {
    this.lastEvent = event;
    if (super.setValue(value, event)) {
      if (this.isPressed && !this.wasPressed) {
        this.emit("pressed", this.lastEvent);
      }
      if (!this.isPressed && this.wasPressed) {
        this.emit("released", this.lastEvent);
      }
      return true;
    }
    return false;
  }
  get isPressed() {
    return this.value >= this.pressThreshold;
  }
  get wasPressed() {
    return this.oldValue >= this.pressThreshold;
  }
  press(event = null) {
    this.setValue(1, event);
  }
  release(event = null) {
    this.setValue(0, event);
  }
}
__publicField(ButtonControl, "defaultPressThreshold", 0.1);
export {
  ButtonControl as B,
  InputDevice as I,
  InputControl as a
};
