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
var _mousedownListener, _mouseupListener, _mousemoveListener, _contextmenuListener, _wheelListener, _MouseDevice_instances, createControls_fn, handleMousedown_fn, handleMouseup_fn, handleMousemove_fn, handleContextmenu_fn, handleWheel_fn;
import { I as InputDevice, B as ButtonControl } from "./button_control-4gs7TZGw.js";
import { V as Vec2Control } from "./vec2_control-89KZna8m.js";
import { I as InputControl } from "./input_control-Bm8lg0DB.js";
const { VALUE, OLD_VALUE } = InputControl;
class NavigationControl extends InputControl {
  getDefaultValue() {
    return { deltaX: 0, deltaY: 0, deltaZ: 0, event: null };
  }
  setValue(wheelEvent, event = null) {
    const delta = {
      deltaX: wheelEvent.deltaX || 0,
      deltaY: wheelEvent.deltaY || 0,
      deltaZ: wheelEvent.deltaZ || 0,
      event: wheelEvent
    };
    this[OLD_VALUE] = this[VALUE];
    this[VALUE] = delta;
    this.emit("updated", this[VALUE], this[OLD_VALUE], event);
    return true;
  }
  get deltaY() {
    return this.value.deltaY;
  }
  get deltaX() {
    return this.value.deltaX;
  }
  get deltaZ() {
    return this.value.deltaZ;
  }
  get event() {
    return this.value.event;
  }
  get isTrackpadPinchZoom() {
    return this.event && (this.event.ctrlKey || this.event.metaKey);
  }
  get isMouseWheelZoom() {
    if (!this.event || this.isTrackpadPinchZoom) {
      return false;
    }
    const isVerticalOnly = Math.abs(this.deltaX) <= 0.1;
    const isSignificantVertical = Math.abs(this.deltaY) >= 10;
    return isVerticalOnly && isSignificantVertical;
  }
  get isTrackpadPan() {
    if (!this.event || this.isTrackpadPinchZoom) {
      return false;
    }
    return Math.abs(this.deltaX) > 0.1 || Math.abs(this.deltaY) > 0.1;
  }
}
class MouseDevice extends InputDevice {
  constructor(params = {}) {
    super(params);
    __privateAdd(this, _MouseDevice_instances);
    __privateAdd(this, _mousedownListener);
    __privateAdd(this, _mouseupListener);
    __privateAdd(this, _mousemoveListener);
    __privateAdd(this, _contextmenuListener);
    __privateAdd(this, _wheelListener);
    this.shouldPreventDefault = params.shouldPreventDefault;
    __privateMethod(this, _MouseDevice_instances, createControls_fn).call(this);
    __privateSet(this, _mousedownListener, __privateMethod(this, _MouseDevice_instances, handleMousedown_fn).bind(this));
    __privateSet(this, _mouseupListener, __privateMethod(this, _MouseDevice_instances, handleMouseup_fn).bind(this));
    __privateSet(this, _mousemoveListener, __privateMethod(this, _MouseDevice_instances, handleMousemove_fn).bind(this));
    __privateSet(this, _contextmenuListener, __privateMethod(this, _MouseDevice_instances, handleContextmenu_fn).bind(this));
    __privateSet(this, _wheelListener, __privateMethod(this, _MouseDevice_instances, handleWheel_fn).bind(this));
  }
  onStart() {
    this.container.addEventListener("mousedown", __privateGet(this, _mousedownListener));
    this.container.addEventListener("mouseup", __privateGet(this, _mouseupListener));
    this.container.addEventListener("mousemove", __privateGet(this, _mousemoveListener));
    this.container.addEventListener("contextmenu", __privateGet(this, _contextmenuListener));
    this.container.addEventListener("wheel", __privateGet(this, _wheelListener), { passive: false });
  }
  onStop() {
    this.container.removeEventListener("mousedown", __privateGet(this, _mousedownListener));
    this.container.removeEventListener("mouseup", __privateGet(this, _mouseupListener));
    this.container.removeEventListener("mousemove", __privateGet(this, _mousemoveListener));
    this.container.removeEventListener("contextmenu", __privateGet(this, _contextmenuListener));
    this.container.removeEventListener("wheel", __privateGet(this, _wheelListener), { passive: false });
  }
}
_mousedownListener = new WeakMap();
_mouseupListener = new WeakMap();
_mousemoveListener = new WeakMap();
_contextmenuListener = new WeakMap();
_wheelListener = new WeakMap();
_MouseDevice_instances = new WeakSet();
createControls_fn = function() {
  this.registerControl(new ButtonControl({
    device: this,
    name: "leftButton"
  }));
  this.registerControl(new ButtonControl({
    device: this,
    name: "rightButton"
  }));
  this.registerControl(new ButtonControl({
    device: this,
    name: "middleButton"
  }));
  this.registerControl(new ButtonControl({
    device: this,
    name: "backButton"
  }));
  this.registerControl(new ButtonControl({
    device: this,
    name: "forwardButton"
  }));
  this.registerControl(new Vec2Control({
    device: this,
    name: "position"
  }));
  this.registerControl(new NavigationControl({
    device: this,
    name: "navigation"
  }));
};
handleMousedown_fn = function(event) {
  const buttonName = getButtonName(event.button);
  const control = this.getControl(buttonName);
  this.preventDefault(event, control);
  if (control && !control.isPressed) {
    control.press(event);
  }
};
handleMouseup_fn = function(event) {
  const buttonName = getButtonName(event.button);
  const control = this.getControl(buttonName);
  this.preventDefault(event, control);
  if (control && control.isPressed) {
    control.release(event);
  }
};
handleMousemove_fn = function(event) {
  const positionControl = this.getControl("position");
  positionControl.setValue({
    x: event.clientX,
    y: event.clientY
  }, event);
};
handleContextmenu_fn = function(event) {
  const rightButtonControl = this.getControl("rightButton");
  this.preventDefault(event, rightButtonControl);
};
handleWheel_fn = function(event) {
  const navigationControl = this.getControl("navigation");
  this.preventDefault(event, navigationControl);
  navigationControl.setValue(event, event);
};
__publicField(MouseDevice, "$name", "mouse");
const BUTTON_NAMES = {
  0: "leftButton",
  1: "middleButton",
  2: "rightButton",
  3: "backButton",
  4: "forwardButton"
};
function getButtonName(button) {
  return BUTTON_NAMES[button] || `button${button}`;
}
export {
  MouseDevice as M
};
