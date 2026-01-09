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
var _bindings, _touchstartListener, _touchmoveListener, _touchendListener, _touchcancelListener, _activeTouch, _startX, _startY, _currentY, _touchStartTime, _swipeReferenceY, _TouchDevice_instances, createControls_fn, handleTouchstart_fn, handleTouchmove_fn, handleTouchend_fn, detectTap_fn, findChangedTouch_fn, handleTouchcancel_fn, releaseAllSwipes_fn, findActiveTouch_fn, isTouchActive_fn, _InputSystem_instances, getControlsFromBinding_fn, initEvents_fn, handleInputEvent_fn, _resizeObserver, _previousStyles, _onFullscreenChange, _previousDisplay, _PerkyView_instances, setupResizeObserver_fn, setupFullscreenEvents_fn, requestFullscreen_fn, dispatchDisplayModeChanged_fn;
import { P as PerkyModule } from "./perky_module-CkaIwr9A.js";
import { R as Registry } from "./registry-DALkxrLq.js";
import { K as KeyboardDevice } from "./keyboard_device-DN2iCFrT.js";
import { M as MouseDevice } from "./mouse_device-DFqWxZ6q.js";
import { I as InputDevice, B as ButtonControl } from "./button_control-cWplzqSr.js";
import { V as Vec2Control } from "./vec2_control-DUZhV8hb.js";
import { V as Vec2 } from "./vec2-BvD8ope7.js";
import { u as uniqueId } from "./utils-BpNYNExF.js";
class InputBinding {
  constructor({
    deviceName,
    controlName,
    actionName,
    controllerName = null,
    eventType = "pressed"
  }) {
    this.deviceName = deviceName;
    this.controlName = controlName;
    this.actionName = actionName;
    this.controllerName = controllerName;
    this.eventType = eventType;
  }
  get key() {
    return InputBinding.keyFor({
      deviceName: this.deviceName,
      controlName: this.controlName,
      actionName: this.actionName,
      controllerName: this.controllerName,
      eventType: this.eventType
    });
  }
  static keyFor({ deviceName, controlName, actionName, controllerName = null, eventType = "pressed" }) {
    if (controllerName) {
      return `${deviceName}:${controlName}:${eventType}:${actionName}:${controllerName}`;
    }
    return `${deviceName}:${controlName}:${eventType}:${actionName}`;
  }
  matches({ deviceName, controlName, eventType }) {
    return this.deviceName === deviceName && this.controlName === controlName && this.eventType === eventType;
  }
  updateInput({ deviceName, controlName }) {
    this.deviceName = deviceName;
    this.controlName = controlName;
  }
}
class CompositeBinding extends InputBinding {
  constructor({
    controls,
    actionName,
    controllerName = null,
    eventType = "pressed"
  }) {
    if (!Array.isArray(controls) || controls.length < 2) {
      throw new Error("CompositeBinding requires an array of at least 2 controls");
    }
    super({
      deviceName: "composite",
      controlName: CompositeBinding.generateControlName(controls),
      actionName,
      controllerName,
      eventType
    });
    this.controls = controls;
  }
  static generateControlName(controls) {
    const controlNames = controls.map((c) => `${c.deviceName}:${c.controlName}`).join("+");
    return `combo(${controlNames})`;
  }
  matches({ deviceName, controlName, eventType }) {
    if (deviceName === "composite" && controlName === this.controlName && eventType === this.eventType) {
      return true;
    }
    return this.controls.some((c) => {
      return c.deviceName === deviceName && c.controlName === controlName;
    }) && eventType === this.eventType;
  }
  shouldTrigger(inputSystem) {
    return this.controls.every(({ deviceName, controlName }) => {
      return inputSystem.isPressed(deviceName, controlName);
    });
  }
}
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
class TouchDevice extends InputDevice {
  constructor(params = {}) {
    super(params);
    __privateAdd(this, _TouchDevice_instances);
    __privateAdd(this, _touchstartListener);
    __privateAdd(this, _touchmoveListener);
    __privateAdd(this, _touchendListener);
    __privateAdd(this, _touchcancelListener);
    __privateAdd(this, _activeTouch, null);
    __privateAdd(this, _startX, 0);
    __privateAdd(this, _startY, 0);
    __privateAdd(this, _currentY, 0);
    __privateAdd(this, _touchStartTime, 0);
    __privateAdd(this, _swipeReferenceY, 0);
    this.swipeThreshold = params.swipeThreshold ?? 30;
    this.tapThreshold = params.tapThreshold ?? 20;
    this.tapMaxDuration = params.tapMaxDuration ?? 300;
    this.shouldPreventDefault = params.shouldPreventDefault;
    __privateMethod(this, _TouchDevice_instances, createControls_fn).call(this);
    __privateSet(this, _touchstartListener, __privateMethod(this, _TouchDevice_instances, handleTouchstart_fn).bind(this));
    __privateSet(this, _touchmoveListener, __privateMethod(this, _TouchDevice_instances, handleTouchmove_fn).bind(this));
    __privateSet(this, _touchendListener, __privateMethod(this, _TouchDevice_instances, handleTouchend_fn).bind(this));
    __privateSet(this, _touchcancelListener, __privateMethod(this, _TouchDevice_instances, handleTouchcancel_fn).bind(this));
  }
  onStart() {
    this.container.addEventListener("touchstart", __privateGet(this, _touchstartListener), { passive: false });
    this.container.addEventListener("touchmove", __privateGet(this, _touchmoveListener), { passive: false });
    this.container.addEventListener("touchend", __privateGet(this, _touchendListener));
    this.container.addEventListener("touchcancel", __privateGet(this, _touchcancelListener));
  }
  onStop() {
    this.container.removeEventListener("touchstart", __privateGet(this, _touchstartListener));
    this.container.removeEventListener("touchmove", __privateGet(this, _touchmoveListener));
    this.container.removeEventListener("touchend", __privateGet(this, _touchendListener));
    this.container.removeEventListener("touchcancel", __privateGet(this, _touchcancelListener));
  }
}
_touchstartListener = new WeakMap();
_touchmoveListener = new WeakMap();
_touchendListener = new WeakMap();
_touchcancelListener = new WeakMap();
_activeTouch = new WeakMap();
_startX = new WeakMap();
_startY = new WeakMap();
_currentY = new WeakMap();
_touchStartTime = new WeakMap();
_swipeReferenceY = new WeakMap();
_TouchDevice_instances = new WeakSet();
createControls_fn = function() {
  this.registerControl(new ButtonControl({
    device: this,
    name: "swipeUp"
  }));
  this.registerControl(new ButtonControl({
    device: this,
    name: "swipeDown"
  }));
  this.registerControl(new Vec2Control({
    device: this,
    name: "position"
  }));
  this.registerControl(new Vec2Control({
    device: this,
    name: "delta"
  }));
  this.registerControl(new ButtonControl({
    device: this,
    name: "tap"
  }));
};
handleTouchstart_fn = function(event) {
  if (__privateGet(this, _activeTouch) !== null) {
    return;
  }
  const touch = event.touches[0];
  __privateSet(this, _activeTouch, touch.identifier);
  __privateSet(this, _startX, touch.clientX);
  __privateSet(this, _startY, touch.clientY);
  __privateSet(this, _currentY, touch.clientY);
  __privateSet(this, _swipeReferenceY, touch.clientY);
  __privateSet(this, _touchStartTime, Date.now());
  const positionControl = this.getControl("position");
  positionControl.setValue({
    x: touch.clientX,
    y: touch.clientY
  }, event);
  this.preventDefault(event, positionControl);
};
handleTouchmove_fn = function(event) {
  const touch = __privateMethod(this, _TouchDevice_instances, findActiveTouch_fn).call(this, event.touches);
  if (!touch) {
    return;
  }
  const previousY = __privateGet(this, _currentY);
  __privateSet(this, _currentY, touch.clientY);
  const positionControl = this.getControl("position");
  positionControl.setValue({
    x: touch.clientX,
    y: touch.clientY
  }, event);
  const deltaControl = this.getControl("delta");
  deltaControl.setValue({
    x: 0,
    y: __privateGet(this, _currentY) - previousY
  }, event);
  const deltaY = __privateGet(this, _swipeReferenceY) - __privateGet(this, _currentY);
  const swipeUpControl = this.getControl("swipeUp");
  const swipeDownControl = this.getControl("swipeDown");
  if (deltaY > this.swipeThreshold) {
    if (!swipeUpControl.isPressed) {
      swipeUpControl.press(event);
    }
    if (swipeDownControl.isPressed) {
      swipeDownControl.release(event);
      __privateSet(this, _swipeReferenceY, __privateGet(this, _currentY));
    }
  } else if (deltaY < -this.swipeThreshold) {
    if (!swipeDownControl.isPressed) {
      swipeDownControl.press(event);
    }
    if (swipeUpControl.isPressed) {
      swipeUpControl.release(event);
      __privateSet(this, _swipeReferenceY, __privateGet(this, _currentY));
    }
  }
  this.preventDefault(event, positionControl);
};
handleTouchend_fn = function(event) {
  if (!__privateMethod(this, _TouchDevice_instances, isTouchActive_fn).call(this, event.changedTouches)) {
    return;
  }
  const touch = __privateMethod(this, _TouchDevice_instances, findChangedTouch_fn).call(this, event.changedTouches);
  if (touch) {
    __privateMethod(this, _TouchDevice_instances, detectTap_fn).call(this, touch, event);
  }
  __privateMethod(this, _TouchDevice_instances, releaseAllSwipes_fn).call(this, event);
  __privateSet(this, _activeTouch, null);
};
detectTap_fn = function(touch, event) {
  const duration = Date.now() - __privateGet(this, _touchStartTime);
  const deltaX = Math.abs(touch.clientX - __privateGet(this, _startX));
  const deltaY = Math.abs(touch.clientY - __privateGet(this, _startY));
  const distance = Math.max(deltaX, deltaY);
  if (duration <= this.tapMaxDuration && distance <= this.tapThreshold) {
    const tapControl = this.getControl("tap");
    tapControl.press(event);
    tapControl.release(event);
  }
};
findChangedTouch_fn = function(changedTouches) {
  for (let i = 0; i < changedTouches.length; i++) {
    if (changedTouches[i].identifier === __privateGet(this, _activeTouch)) {
      return changedTouches[i];
    }
  }
  return null;
};
handleTouchcancel_fn = function(event) {
  if (!__privateMethod(this, _TouchDevice_instances, isTouchActive_fn).call(this, event.changedTouches)) {
    return;
  }
  __privateMethod(this, _TouchDevice_instances, releaseAllSwipes_fn).call(this, event);
  __privateSet(this, _activeTouch, null);
};
releaseAllSwipes_fn = function(event) {
  const swipeUpControl = this.getControl("swipeUp");
  const swipeDownControl = this.getControl("swipeDown");
  if (swipeUpControl.isPressed) {
    swipeUpControl.release(event);
  }
  if (swipeDownControl.isPressed) {
    swipeDownControl.release(event);
  }
};
findActiveTouch_fn = function(touches) {
  for (let i = 0; i < touches.length; i++) {
    if (touches[i].identifier === __privateGet(this, _activeTouch)) {
      return touches[i];
    }
  }
  return null;
};
isTouchActive_fn = function(changedTouches) {
  for (let i = 0; i < changedTouches.length; i++) {
    if (changedTouches[i].identifier === __privateGet(this, _activeTouch)) {
      return true;
    }
  }
  return false;
};
__publicField(TouchDevice, "$name", "touch");
class InputSystem extends PerkyModule {
  constructor(options = {}) {
    const { bindings = [] } = options;
    super(options);
    __privateAdd(this, _InputSystem_instances);
    this.create(InputBinder, {
      $bind: "inputBinder",
      bindings
    });
    __privateMethod(this, _InputSystem_instances, initEvents_fn).call(this);
  }
  onInstall(host) {
    this.registerDevice(KeyboardDevice, {
      $id: "keyboard",
      $bind: "keyboard"
    });
    this.registerDevice(MouseDevice, {
      $id: "mouse",
      $bind: "mouse",
      container: host.element
    });
    this.registerDevice(TouchDevice, {
      $id: "touch",
      $bind: "touch",
      container: host.element
    });
    this.delegateTo(host, [
      "registerDevice",
      "unregisterDevice",
      "getDevice",
      "isPressed",
      "isPressedAny",
      "getAllPressed",
      "getValueFor",
      "getValueAny",
      "addControl",
      "getControl",
      "getControlAny",
      "getPressedControls"
    ]);
    this.delegateTo(host, [
      "inputBinder",
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
    this.delegateTo(host, [
      "isKeyPressed",
      "isMousePressed",
      "isTouchPressed",
      "getKeyValue",
      "getMouseValue",
      "getTouchValue",
      "isActionPressed",
      "getActionControls",
      "getInputValue",
      "getInputValueAny",
      "getDirection"
    ]);
    this.delegateEventsTo(host, ["input:triggered"]);
  }
  registerDevice(DeviceClass, options = {}) {
    return this.create(DeviceClass, options);
  }
  getDevice(name) {
    return this.getChild(name);
  }
  isPressed(deviceName, controlName) {
    const device = this.getDevice(deviceName);
    return device ? device.isPressed(controlName) : false;
  }
  getValueFor(deviceName, controlName) {
    const device = this.getDevice(deviceName);
    return device ? device.getValueFor(controlName) : void 0;
  }
  getControl(deviceName, controlName) {
    const device = this.getDevice(deviceName);
    return device ? device.getControl(controlName) ?? null : null;
  }
  listDeviceNames() {
    return this.listNamesFor("inputDevice");
  }
  isPressedAny(controlName) {
    const deviceNames = this.listDeviceNames();
    for (const name of deviceNames) {
      const device = this.getChild(name);
      if (device && device.isPressed(controlName)) {
        return true;
      }
    }
    return false;
  }
  getValueAny(controlName) {
    const deviceNames = this.listDeviceNames();
    for (const name of deviceNames) {
      const device = this.getChild(name);
      if (device) {
        const value = device.getValueFor(controlName);
        if (value !== void 0) {
          return value;
        }
      }
    }
    return void 0;
  }
  getControlAny(controlName) {
    const deviceNames = this.listDeviceNames();
    for (const name of deviceNames) {
      const device = this.getChild(name);
      if (device) {
        const control = device.getControl(controlName);
        if (control) {
          return control;
        }
      }
    }
    return null;
  }
  getAllPressed(controlName) {
    const results = [];
    const deviceNames = this.listDeviceNames();
    for (const name of deviceNames) {
      const device = this.getChild(name);
      if (device && device.isPressed(controlName)) {
        results.push(device);
      }
    }
    return results;
  }
  getPressedControls(deviceName) {
    const device = this.getDevice(deviceName);
    return device ? device.getPressedControls() : [];
  }
  getAllValues(controlName) {
    const results = [];
    const deviceNames = this.listDeviceNames();
    for (const name of deviceNames) {
      const device = this.getChild(name);
      if (device) {
        const value = device.getValueFor(controlName);
        if (value !== void 0) {
          results.push({ device, value });
        }
      }
    }
    return results;
  }
  addControl(deviceNameOrControl, ControlOrParams = {}, params = {}) {
    if (typeof deviceNameOrControl === "string") {
      const device = this.getDevice(deviceNameOrControl);
      if (!device) {
        throw new Error(`Device '${deviceNameOrControl}' not found`);
      }
      return device.findOrCreateControl(ControlOrParams, params);
    } else if (typeof deviceNameOrControl === "function") {
      return this.addControlToFirst(deviceNameOrControl, ControlOrParams);
    }
    return null;
  }
  addControlToFirst(Control, params = {}) {
    const deviceNames = this.listDeviceNames();
    const firstDevice = deviceNames.length > 0 ? this.getChild(deviceNames[0]) : null;
    if (!firstDevice) {
      throw new Error("No devices available");
    }
    return firstDevice.findOrCreateControl(Control, params);
  }
  addControlToAll(Control, params = {}) {
    const results = [];
    const deviceNames = this.listDeviceNames();
    for (const name of deviceNames) {
      const device = this.getChild(name);
      if (device) {
        const control = device.findOrCreateControl(Control, params);
        results.push({ device, control });
      }
    }
    return results;
  }
  deviceKeyFor(device) {
    return this.childrenRegistry.keyFor(device);
  }
  getInputValue(deviceName, controlName) {
    return this.getValueFor(deviceName, controlName);
  }
  getInputValueAny(controlName) {
    return this.getValueAny(controlName);
  }
  isKeyPressed(keyName) {
    return this.isPressed("keyboard", keyName);
  }
  isMousePressed(buttonName) {
    return this.isPressed("mouse", buttonName);
  }
  getKeyValue(keyName) {
    return this.getInputValue("keyboard", keyName);
  }
  getMouseValue(buttonName) {
    return this.getInputValue("mouse", buttonName);
  }
  isTouchPressed(controlName) {
    return this.isPressed("touch", controlName);
  }
  getTouchValue(controlName) {
    return this.getInputValue("touch", controlName);
  }
  isActionPressed(actionName, controllerName = null) {
    const bindings = this.inputBinder.getBindingsForAction(actionName, controllerName, "pressed");
    for (const binding of bindings) {
      if (typeof binding.shouldTrigger === "function") {
        if (binding.shouldTrigger(this)) {
          return true;
        }
      } else if (this.isPressed(binding.deviceName, binding.controlName)) {
        return true;
      }
    }
    return false;
  }
  getActionControls(actionName, controllerName = null) {
    const bindings = this.inputBinder.getBindingsForAction(actionName, controllerName, "pressed");
    const controls = [];
    for (const binding of bindings) {
      controls.push(...__privateMethod(this, _InputSystem_instances, getControlsFromBinding_fn).call(this, binding));
    }
    return controls;
  }
  getDirection(name = "move") {
    const up = name + "Up";
    const down = name + "Down";
    const left = name + "Left";
    const right = name + "Right";
    const x = (this.isActionPressed(right) ? 1 : 0) - (this.isActionPressed(left) ? 1 : 0);
    const y = (this.isActionPressed(up) ? 1 : 0) - (this.isActionPressed(down) ? 1 : 0);
    const vec = new Vec2(x, y);
    return vec.length() > 0 ? vec.clone().normalize() : vec;
  }
}
_InputSystem_instances = new WeakSet();
getControlsFromBinding_fn = function(binding) {
  const controls = [];
  if (binding.controls && Array.isArray(binding.controls)) {
    for (const { deviceName, controlName } of binding.controls) {
      const control = this.getControl(deviceName, controlName);
      if (control) {
        controls.push(control);
      }
    }
  } else {
    const control = this.getControl(binding.deviceName, binding.controlName);
    if (control) {
      controls.push(control);
    }
  }
  return controls;
};
initEvents_fn = function() {
  this.on("control:pressed", __privateMethod(this, _InputSystem_instances, handleInputEvent_fn).bind(this, "pressed"));
  this.on("control:released", __privateMethod(this, _InputSystem_instances, handleInputEvent_fn).bind(this, "released"));
};
handleInputEvent_fn = function(eventType, control, event, device) {
  const deviceName = this.deviceKeyFor(device);
  const matchingBindings = this.inputBinder.getBindingsForInput({
    deviceName,
    controlName: control.name,
    eventType
  });
  matchingBindings.forEach((binding) => {
    if (typeof binding.shouldTrigger !== "function" || binding.shouldTrigger(this)) {
      this.emit("input:triggered", binding, event, device);
    }
  });
};
__publicField(InputSystem, "$category", "inputSystem");
class PerkyView extends PerkyModule {
  constructor(params = {}) {
    super(params);
    __privateAdd(this, _PerkyView_instances);
    __privateAdd(this, _resizeObserver, null);
    __privateAdd(this, _previousStyles, {});
    __privateAdd(this, _onFullscreenChange, null);
    __privateAdd(this, _previousDisplay, null);
    __publicField(this, "displayMode", "normal");
    this.element = params.element ? params.element : this.constructor.defaultElement(params);
    if (params.position) {
      applyPositionStyle(this.element, params.position);
    }
    if (params.container) {
      this.mount(params.container);
    }
    if (params.className) {
      this.addClass(params.className);
    }
    __privateMethod(this, _PerkyView_instances, setupResizeObserver_fn).call(this);
    __privateMethod(this, _PerkyView_instances, setupFullscreenEvents_fn).call(this);
  }
  onInstall(host) {
    this.delegateTo(host, [
      "element",
      "mount",
      "dismount",
      "mounted",
      "displayMode",
      "setDisplayMode",
      "enterFullscreenMode",
      "exitFullscreenMode",
      "toggleFullscreen"
    ]);
    this.delegateEventsTo(host, [
      "resize",
      "mount",
      "dismount",
      "displayMode:changed"
    ]);
  }
  get container() {
    return this.element.parentElement;
  }
  get width() {
    return this.element.offsetWidth;
  }
  get height() {
    return this.element.offsetHeight;
  }
  get size() {
    return {
      width: this.width,
      height: this.height
    };
  }
  get aspectRatio() {
    const { width, height } = this.size;
    return height > 0 ? width / height : 0;
  }
  addClass(className) {
    this.element.classList.add(className);
  }
  removeClass(className) {
    this.element.classList.remove(className);
  }
  hasClass(className) {
    return this.element.classList.contains(className);
  }
  setSize({ width, height, unit = "px" }) {
    Object.assign(this.element.style, {
      width: `${width}${unit}`,
      height: `${height}${unit}`
    });
    this.emit("resize", { width, height });
  }
  fit(element = this.container) {
    const { width, height } = element.getBoundingClientRect();
    this.setSize({ width, height });
  }
  mount(container) {
    if (!container) {
      throw new Error("Container element is required");
    }
    if (this.container && this.container !== container) {
      this.container.removeChild(this.element);
    }
    container.appendChild(this.element);
    this.emit("mount", { container });
    if (__privateGet(this, _resizeObserver)) {
      __privateGet(this, _resizeObserver).observe(this.element);
    }
  }
  dismount() {
    if (this.container) {
      this.container.removeChild(this.element);
      this.emit("dismount", { container: this.container });
    }
    if (__privateGet(this, _resizeObserver)) {
      __privateGet(this, _resizeObserver).disconnect();
    }
  }
  get mounted() {
    return Boolean(this.container && this.container.contains(this.element));
  }
  static defaultElement(params) {
    const element = document.createElement("div");
    element.id = params.id || uniqueId("perky_view", "perky_view");
    element.className = params.className || "perky-view";
    const styles = {
      display: "block",
      overflow: "hidden",
      position: "relative",
      width: "100%",
      height: "100%",
      ...this.defaultStyles(params)
    };
    Object.assign(element.style, styles);
    return element;
  }
  static defaultStyles() {
    return {};
  }
  isVisible() {
    return this.element.style.display !== "none";
  }
  onDispose() {
    this.exitFullscreenMode();
    if (__privateGet(this, _resizeObserver)) {
      __privateGet(this, _resizeObserver).disconnect();
      __privateSet(this, _resizeObserver, null);
    }
    if (__privateGet(this, _onFullscreenChange)) {
      document.removeEventListener("fullscreenchange", __privateGet(this, _onFullscreenChange));
    }
    this.dismount();
  }
  get html() {
    return this.element.innerHTML;
  }
  get display() {
    return this.element.style.display;
  }
  set display(display) {
    this.element.style.display = display;
  }
  hide() {
    if (this.display && this.display !== "none") {
      __privateSet(this, _previousDisplay, this.display);
    }
    this.display = "none";
  }
  show() {
    if (__privateGet(this, _previousDisplay)) {
      this.display = __privateGet(this, _previousDisplay);
      __privateSet(this, _previousDisplay, null);
    } else {
      this.display = "";
    }
  }
  setDisplayMode(mode) {
    const modes = {
      normal: () => this.exitFullscreenMode(),
      fullscreen: () => this.enterFullscreenMode()
    };
    if (modes[mode]) {
      modes[mode]();
    }
  }
  enterFullscreenMode() {
    if (this.displayMode === "fullscreen") {
      return;
    }
    this.displayMode = "fullscreen";
    document.body.classList.add("fullscreen-mode");
    __privateSet(this, _previousStyles, {
      position: this.element.style.position,
      top: this.element.style.top,
      left: this.element.style.left,
      width: this.element.style.width,
      height: this.element.style.height,
      zIndex: this.element.style.zIndex
    });
    Object.assign(this.element.style, {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100vw",
      height: "100vh",
      zIndex: "10000"
    });
    __privateMethod(this, _PerkyView_instances, requestFullscreen_fn).call(this);
  }
  exitFullscreenMode() {
    if (this.displayMode === "normal") {
      return;
    }
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
    this.displayMode = "normal";
    document.body.style.overflow = "";
    document.body.classList.remove("fullscreen-mode");
    Object.assign(this.element.style, __privateGet(this, _previousStyles));
    __privateSet(this, _previousStyles, {});
    __privateMethod(this, _PerkyView_instances, dispatchDisplayModeChanged_fn).call(this, "normal");
  }
  toggleFullscreen() {
    const mode = this.displayMode;
    if (mode === "fullscreen") {
      this.exitFullscreenMode();
    } else {
      this.enterFullscreenMode();
    }
  }
}
_resizeObserver = new WeakMap();
_previousStyles = new WeakMap();
_onFullscreenChange = new WeakMap();
_previousDisplay = new WeakMap();
_PerkyView_instances = new WeakSet();
setupResizeObserver_fn = function() {
  __privateSet(this, _resizeObserver, new ResizeObserver((entries) => {
    for (const entry of entries) {
      const { width, height } = entry.contentRect;
      if (this.mounted) {
        this.emit("resize", { width, height });
      }
    }
  }));
  if (this.element) {
    __privateGet(this, _resizeObserver).observe(this.element);
  }
};
setupFullscreenEvents_fn = function() {
  const onFullscreenChange = () => {
    if (document.fullscreenElement === this.element) {
      this.displayMode = "fullscreen";
      document.body.style.overflow = "hidden";
      __privateMethod(this, _PerkyView_instances, dispatchDisplayModeChanged_fn).call(this, "fullscreen");
    } else if (this.displayMode === "fullscreen") {
      this.exitFullscreenMode();
    }
  };
  document.addEventListener("fullscreenchange", onFullscreenChange);
  __privateSet(this, _onFullscreenChange, onFullscreenChange);
};
requestFullscreen_fn = function() {
  if (this.element.requestFullscreen) {
    this.element.requestFullscreen();
  }
};
dispatchDisplayModeChanged_fn = function(mode) {
  this.emit("displayMode:changed", { mode });
};
__publicField(PerkyView, "$category", "perkyView");
function applyPositionStyle(element, position) {
  element.style.position = position;
  if (position === "absolute") {
    element.style.top = "0";
    element.style.left = "0";
  }
}
export {
  CompositeBinding as C,
  InputSystem as I,
  PerkyView as P,
  InputBinder as a
};
