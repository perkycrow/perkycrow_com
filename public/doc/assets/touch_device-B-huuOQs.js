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
var _touchstartListener, _touchmoveListener, _touchendListener, _touchcancelListener, _activeTouch, _startX, _startY, _currentY, _touchStartTime, _swipeReferenceY, _TouchDevice_instances, createControls_fn, handleTouchstart_fn, handleTouchmove_fn, handleTouchend_fn, detectTap_fn, findChangedTouch_fn, handleTouchcancel_fn, releaseAllSwipes_fn, findActiveTouch_fn, isTouchActive_fn;
import { I as InputDevice } from "./input_device-RRNXl4Xf.js";
import { B as ButtonControl } from "./button_control-Q2dzl7fd.js";
import { V as Vec2Control } from "./vec2_control-DQfblh8Q.js";
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
export {
  TouchDevice as T
};
