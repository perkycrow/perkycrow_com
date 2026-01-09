var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { N as Notifier } from "./runtime-COHOMYgI.js";
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
export {
  InputControl as I
};
