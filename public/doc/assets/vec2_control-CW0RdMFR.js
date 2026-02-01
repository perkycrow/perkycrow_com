import { I as InputControl } from "./input_control-BiNc-VBj.js";
import { V as Vec2 } from "./vec2-BvD8ope7.js";
const { VALUE, OLD_VALUE } = InputControl;
class Vec2Control extends InputControl {
  getDefaultValue() {
    return new Vec2();
  }
  setValue(value, event = null) {
    if (!(value instanceof Vec2)) {
      value = new Vec2(value);
    }
    if (this[VALUE] && this[VALUE].equals(value)) {
      return false;
    }
    this[OLD_VALUE] = this[VALUE];
    this[VALUE] = new Vec2(value);
    this.emit("updated", this[VALUE], this[OLD_VALUE], event);
    return true;
  }
}
export {
  Vec2Control as V
};
