import { d as doc, t as text, s as section, c as code, l as logger } from "./runtime-DVl2nrG4.js";
import { V as Vec2Control } from "./vec2_control-DaZZ91Xh.js";
import { V as Vec2 } from "./vec2-BvD8ope7.js";
import "./input_control-DjL2rkDf.js";
const vec2_control_doc = doc("Vec2Control", { advanced: true }, () => {
  text(`
        Input control for 2D vector values. Extends [[InputControl@input]] to handle [[Vec2@math]] objects,
        commonly used for joystick axes or mouse movement.
    `);
  section("Basic Usage", () => {
    text(`
            Create a Vec2Control and update its value with Vec2 objects.
        `);
    code("Simple Vec2 control", () => {
      const control = new Vec2Control({
        device: null,
        name: "joystick",
        value: new Vec2(0, 0)
      });
      control.on("updated", (newValue, oldValue) => {
        logger.log(`Joystick moved: (${newValue.x}, ${newValue.y})`);
      });
      control.setValue(new Vec2(0.5, -0.3));
    });
  });
  section("Auto Conversion", () => {
    text(`
            Vec2Control automatically converts plain objects to [[Vec2@math]] instances.
        `);
    code("Object to Vec2", () => {
      const control = new Vec2Control({
        device: null,
        name: "mouse",
        value: new Vec2()
      });
      control.setValue({ x: 100, y: 200 });
      logger.log(control.value instanceof Vec2);
      logger.log(control.value.x, control.value.y);
    });
  });
  section("Equality Check", () => {
    text(`
            Only emits 'updated' event when the value actually changes.
            Uses Vec2.equals() for comparison.
        `);
    code("Change detection", () => {
      const control = new Vec2Control({
        device: null,
        name: "stick",
        value: new Vec2(0, 0)
      });
      let updateCount = 0;
      control.on("updated", () => {
        updateCount++;
      });
      control.setValue(new Vec2(1, 1));
      control.setValue(new Vec2(1, 1));
      control.setValue(new Vec2(2, 2));
      logger.log(updateCount);
    });
  });
});
export {
  vec2_control_doc as default
};
