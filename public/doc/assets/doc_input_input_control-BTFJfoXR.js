import { d as doc, t as text, s as section, c as code, l as logger } from "./runtime-D8el-yK6.js";
import { I as InputControl } from "./input_control-D_nDTzNu.js";
const input_control_doc = doc("InputControl", { advanced: true }, () => {
  text(`
        Base class for input controls. Represents a single input value (button, axis, etc.)
        and notifies listeners when the value changes.
    `);
  section("Basic Usage", () => {
    text(`
            Create a control and listen for value changes.
        `);
    code("Simple control", () => {
      const control = new InputControl({
        device: null,
        name: "jump",
        value: 0
      });
      control.on("updated", (newValue, oldValue) => {
        logger.log(`Value changed: ${oldValue} -> ${newValue}`);
      });
      control.setValue(1);
    });
  });
  section("Value Management", () => {
    text(`
            Access current and previous values, or reset to default.
        `);
    code("Value tracking", () => {
      const control = new InputControl({
        device: null,
        name: "axis",
        value: 0
      });
      control.setValue(0.5);
      control.setValue(0.8);
      logger.log(control.value);
      logger.log(control.oldValue);
      control.reset();
      logger.log(control.value);
    });
  });
});
export {
  input_control_doc as default
};
