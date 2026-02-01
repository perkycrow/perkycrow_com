var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var _bindings;
import { P as PerkyModule } from "./perky_module-DrWJO8l1.js";
import { R as Registry } from "./registry-CF_H4IOw.js";
import { I as InputBinding } from "./input_binding-CfW7yBsk.js";
import { C as CompositeBinding } from "./composite_binding-CzFNM38-.js";
class InputBinder extends PerkyModule {
  constructor(options = {}) {
    super(options);
    __privateAdd(this, _bindings, new Registry());
    const { bindings = [], inputBinder } = options;
    __privateGet(this, _bindings).addIndex("input", (binding) => {
      if (binding instanceof CompositeBinding) {
        const keys = binding.controls.map(({ deviceName, controlName }) => {
          return `${deviceName}:${controlName}:${binding.eventType}`;
        });
        keys.push(`composite:${binding.controlName}:${binding.eventType}`);
        return keys;
      }
      return `${binding.deviceName}:${binding.controlName}:${binding.eventType}`;
    });
    __privateGet(this, _bindings).addIndex("action", (binding) => {
      const controller = binding.controllerName || "";
      return `${binding.actionName}:${binding.eventType}:${controller}`;
    });
    __privateGet(this, _bindings).addIndex("actionAll", (binding) => {
      return `${binding.actionName}:${binding.eventType}`;
    });
    if (inputBinder) {
      this.import(inputBinder);
    }
    this.import({ bindings });
  }
  onInstall(host) {
    this.delegateTo(host, [
      "bindInput",
      "unbind",
      "getBinding",
      "hasBinding",
      "getBindingsForInput",
      "getBindingsForAction",
      "getAllBindings",
      "clearBindings",
      "bindCombo"
    ]);
  }
  import(inputBinder) {
    if (typeof inputBinder.export === "function") {
      inputBinder = inputBinder.export();
    }
    if (Array.isArray(inputBinder == null ? void 0 : inputBinder.bindings)) {
      this.importBindings(inputBinder.bindings);
    }
  }
  importBindings(bindings) {
    bindings.forEach((bindingData) => this.bindInput(bindingData));
  }
  bindInput({
    deviceName,
    controlName,
    actionName,
    controllerName = null,
    eventType = "pressed",
    controls = null
  }) {
    let binding;
    if (controls && Array.isArray(controls)) {
      binding = new CompositeBinding({
        controls,
        actionName,
        controllerName,
        eventType
      });
    } else {
      binding = new InputBinding({
        deviceName: deviceName ?? detectDeviceFromControlName(controlName),
        controlName,
        actionName,
        controllerName,
        eventType
      });
    }
    __privateGet(this, _bindings).set(binding.key, binding);
    return binding;
  }
  unbind(params) {
    const binding = this.getBinding(params);
    if (binding) {
      __privateGet(this, _bindings).delete(binding.key);
      this.emit("binding:removed", binding);
      return true;
    }
    return false;
  }
  getBinding(params) {
    const { deviceName, controlName, actionName, controllerName = null, eventType = "pressed" } = params;
    if (deviceName && controlName) {
      const key = keyFor(params);
      return __privateGet(this, _bindings).get(key) || null;
    }
    const bindings = this.getBindingsForAction(actionName, controllerName, eventType);
    return bindings.length > 0 ? bindings[0] : null;
  }
  hasBinding(params) {
    return this.getBinding(params) !== null;
  }
  getBindingsForInput({ deviceName, controlName, eventType }) {
    const key = `${deviceName}:${controlName}:${eventType}`;
    const bindings = __privateGet(this, _bindings).lookup("input", key);
    const directBindings = [];
    const compositeBindings = [];
    for (const binding of bindings) {
      if (binding instanceof CompositeBinding) {
        compositeBindings.push(binding);
      } else {
        directBindings.push(binding);
      }
    }
    return [...directBindings, ...compositeBindings];
  }
  getBindingsForAction(actionName, controllerName = null, eventType = "pressed") {
    if (controllerName === null) {
      const key2 = `${actionName}:${eventType}`;
      return __privateGet(this, _bindings).lookup("actionAll", key2);
    }
    const controller = controllerName || "";
    const key = `${actionName}:${eventType}:${controller}`;
    return __privateGet(this, _bindings).lookup("action", key);
  }
  getAllBindings() {
    return Array.from(__privateGet(this, _bindings).values);
  }
  clearBindings() {
    __privateGet(this, _bindings).clear();
  }
  bindCombo(controls, actionName, controllerName = null, eventType = "pressed") {
    if (!Array.isArray(controls) || controls.length < 2) {
      throw new Error("Controls must be an array with at least 2 controls");
    }
    if (!actionName || typeof actionName !== "string") {
      throw new Error("actionName is required and must be a string");
    }
    const normalizedControls = controls.map((control, index) => {
      if (typeof control === "string") {
        const deviceName = detectDeviceFromControlName(control);
        return { deviceName, controlName: control };
      } else if (control && typeof control === "object" && control.deviceName && control.controlName) {
        return control;
      } else {
        throw new Error(`Control at index ${index} must be a string or object with deviceName and controlName properties`);
      }
    });
    return this.bindInput({
      controls: normalizedControls,
      actionName,
      controllerName,
      eventType
    });
  }
  export() {
    return {
      bindings: this.getAllBindings().map((binding) => {
        const exported = {
          deviceName: binding.deviceName,
          controlName: binding.controlName,
          actionName: binding.actionName,
          controllerName: binding.controllerName,
          eventType: binding.eventType
        };
        if (binding.controls) {
          exported.controls = binding.controls;
        }
        return exported;
      })
    };
  }
}
_bindings = new WeakMap();
__publicField(InputBinder, "$category", "inputBinder");
function keyFor({ deviceName, controlName, actionName, controllerName = null, eventType = "pressed" }) {
  return InputBinding.keyFor({ deviceName, controlName, actionName, controllerName, eventType });
}
const MOUSE_CONTROLS = [
  "leftButton",
  "rightButton",
  "middleButton",
  "backButton",
  "forwardButton",
  "position",
  "navigation"
];
const TOUCH_CONTROLS = [
  "swipeUp",
  "swipeDown",
  "swipeLeft",
  "swipeRight",
  "tap"
];
const GAMEPAD_CONTROL_PATTERNS = [
  /^button\d+$/,
  /^axis\d+$/,
  /^dpad/,
  /^stick/
];
function detectDeviceFromControlName(controlName) {
  if (MOUSE_CONTROLS.includes(controlName)) {
    return "mouse";
  }
  if (TOUCH_CONTROLS.includes(controlName)) {
    return "touch";
  }
  if (GAMEPAD_CONTROL_PATTERNS.some((pattern) => pattern.test(controlName))) {
    return "gamepad";
  }
  return "keyboard";
}
export {
  InputBinder as I
};
