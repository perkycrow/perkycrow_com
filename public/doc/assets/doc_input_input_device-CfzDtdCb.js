import { d as doc, t as text, s as section, a as action, l as logger, c as code } from "./runtime-DOmi4lo7.js";
import { I as InputDevice } from "./input_device-BRob1gB9.js";
import { B as ButtonControl } from "./button_control-n2KtTtYs.js";
import "./perky_module-DrWJO8l1.js";
import "./registry-CF_H4IOw.js";
import "./observable_map-BPZFGUWq.js";
import "./observable_set-BOSKLaPv.js";
import "./utils-DVCexGPz.js";
import "./inflector-BxOpyWLP.js";
import "./input_control-BiNc-VBj.js";
const input_device_doc = doc("InputDevice", { advanced: true }, () => {
  text(`
        Base class for input devices. Manages a registry of controls and emits events
        when they change. Extended by [[KeyboardDevice@input]], [[MouseDevice@input]],
        and [[TouchDevice@input]].
    `);
  section("Registering Controls", () => {
    text(`
            Register controls on the device. Each control must have a unique name.
        `);
    action("Register and query", () => {
      const device = new InputDevice();
      const button = new ButtonControl({ device, name: "fire" });
      device.registerControl(button);
      logger.log("Has fire:", device.getControl("fire") !== void 0);
      logger.log("Value:", device.getValueFor("fire"));
    });
  });
  section("Press State", () => {
    text(`
            Track which controls are currently pressed and query their state.
        `);
    action("Check pressed state", () => {
      const device = new InputDevice();
      const jump = new ButtonControl({ device, name: "jump" });
      device.registerControl(jump);
      logger.log("Before press:", device.isPressed("jump"));
      jump.press();
      logger.log("After press:", device.isPressed("jump"));
      const pressed = device.getPressedControls();
      logger.log("Pressed controls:", pressed.map((c) => c.name));
    });
  });
  section("Events", () => {
    text(`
            Devices emit \`control:pressed\`, \`control:released\`, and \`control:updated\`
            when their controls change.
        `);
    action("Listen for events", () => {
      const device = new InputDevice();
      device.on("control:pressed", (control) => {
        logger.log("Pressed:", control.name);
      });
      device.on("control:released", (control) => {
        logger.log("Released:", control.name);
      });
      const button = new ButtonControl({ device, name: "action" });
      device.registerControl(button);
      button.press();
      button.release();
    });
  });
  section("Find or Create", () => {
    text(`
            Use \`findOrCreateControl()\` to lazily create controls on first use.
            Returns the existing control if one with the same name is already registered.
        `);
    code("Lazy creation", () => {
      const device = new InputDevice();
      const control = device.findOrCreateControl(ButtonControl, { name: "fire" });
      const same = device.findOrCreateControl(ButtonControl, { name: "fire" });
      logger.log(control === same);
    });
  });
});
export {
  input_device_doc as default
};
