var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { I as InputControl } from "./input_control-kVon1KiC.js";
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
  ButtonControl as B
};
