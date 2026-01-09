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
var _keydownListener, _keyupListener, _blurListener, _KeyboardDevice_instances, handleKeydown_fn, handleKeyup_fn, handleBlur_fn;
import { I as InputDevice, B as ButtonControl } from "./button_control-4gs7TZGw.js";
class KeyboardDevice extends InputDevice {
  constructor(params = {}) {
    super(params);
    __privateAdd(this, _KeyboardDevice_instances);
    __privateAdd(this, _keydownListener);
    __privateAdd(this, _keyupListener);
    __privateAdd(this, _blurListener);
    this.shouldPreventDefault = params.shouldPreventDefault;
    __privateSet(this, _keydownListener, __privateMethod(this, _KeyboardDevice_instances, handleKeydown_fn).bind(this));
    __privateSet(this, _keyupListener, __privateMethod(this, _KeyboardDevice_instances, handleKeyup_fn).bind(this));
    __privateSet(this, _blurListener, __privateMethod(this, _KeyboardDevice_instances, handleBlur_fn).bind(this));
  }
  onStart() {
    this.container.addEventListener("keydown", __privateGet(this, _keydownListener), true);
    this.container.addEventListener("keyup", __privateGet(this, _keyupListener), true);
    this.container.addEventListener("blur", __privateGet(this, _blurListener));
  }
  onStop() {
    this.container.removeEventListener("keydown", __privateGet(this, _keydownListener), true);
    this.container.removeEventListener("keyup", __privateGet(this, _keyupListener), true);
    this.container.removeEventListener("blur", __privateGet(this, _blurListener));
  }
}
_keydownListener = new WeakMap();
_keyupListener = new WeakMap();
_blurListener = new WeakMap();
_KeyboardDevice_instances = new WeakSet();
handleKeydown_fn = function(event) {
  if (shouldIgnoreEvent(event)) {
    return;
  }
  const keyName = getKeyName(event);
  const control = this.findOrCreateControl(ButtonControl, {
    name: keyName
  });
  this.preventDefault(event, control);
  if (!control.isPressed) {
    control.press(event);
  }
};
handleKeyup_fn = function(event) {
  if (shouldIgnoreEvent(event)) {
    return;
  }
  const keyName = getKeyName(event);
  const control = this.getControl(keyName);
  this.preventDefault(event, control);
  if (control && control.isPressed) {
    control.release(event);
  }
};
handleBlur_fn = function() {
  this.pressedNames.forEach((keyName) => {
    const control = this.getControl(keyName);
    if (control && control.isPressed) {
      control.release();
    }
  });
};
__publicField(KeyboardDevice, "$name", "keyboard");
function getKeyName(event) {
  return event.code;
}
function shouldIgnoreEvent(event) {
  const path = event.composedPath();
  for (const element of path) {
    if (element.tagName) {
      const tagName = element.tagName.toLowerCase();
      if (tagName === "input" || tagName === "textarea") {
        return true;
      }
      if (element.isContentEditable) {
        return true;
      }
    }
  }
  return false;
}
export {
  KeyboardDevice as K
};
