import { d as doc, t as text, s as section, c as code, a as action, l as logger } from "./runtime-DOmi4lo7.js";
import { I as InputControl } from "./input_control-BiNc-VBj.js";
import { V as Vec3 } from "./vec3-sFzF6jYJ.js";
const { VALUE, OLD_VALUE } = InputControl;
class Vec3Control extends InputControl {
  getDefaultValue() {
    return new Vec3();
  }
  setValue(value, event = null) {
    if (!(value instanceof Vec3)) {
      value = new Vec3(value);
    }
    if (this[VALUE] && this[VALUE].equals(value)) {
      return false;
    }
    this[OLD_VALUE] = this[VALUE];
    this[VALUE] = new Vec3(value);
    this.emit("updated", this[VALUE], this[OLD_VALUE], event);
    return true;
  }
}
const vec3_control_doc = doc("Vec3Control", { advanced: true }, () => {
  text(`
        Input control for 3D vector values. Extends [[InputControl@input]] to handle [[Vec3@math]] objects.
        Works the same as [[Vec2Control@input]] but with an additional z component.
    `);
  section("Basic Usage", () => {
    text(`
            Create a Vec3Control and update its value with Vec3 objects.
        `);
    code("Simple Vec3 control", () => {
      const control = new Vec3Control({
        device: null,
        name: "position",
        value: new Vec3(0, 0, 0)
      });
      control.on("updated", (newValue, oldValue) => {
        logger.log(`Moved: (${newValue.x}, ${newValue.y}, ${newValue.z})`);
      });
      control.setValue(new Vec3(1, 2, 3));
    });
  });
  section("Auto Conversion", () => {
    text(`
            Vec3Control automatically converts plain objects to [[Vec3@math]] instances.
        `);
    code("Object to Vec3", () => {
      const control = new Vec3Control({
        device: null,
        name: "sensor"
      });
      control.setValue({ x: 10, y: 20, z: 30 });
      logger.log(control.value instanceof Vec3);
      logger.log(control.value.x, control.value.y, control.value.z);
    });
  });
  section("Equality Check", () => {
    text(`
            Only emits \`updated\` when the value actually changes.
            Uses Vec3.equals() for comparison.
        `);
    action("Change detection", () => {
      const control = new Vec3Control({
        device: null,
        name: "gyro"
      });
      let updateCount = 0;
      control.on("updated", () => {
        updateCount++;
      });
      control.setValue(new Vec3(1, 1, 1));
      control.setValue(new Vec3(1, 1, 1));
      control.setValue(new Vec3(2, 2, 2));
      logger.log("Updates:", updateCount);
    });
  });
});
export {
  vec3_control_doc as default
};
