import { d as doc, t as text, s as section, c as code, f as container } from "./runtime-xB3_cpHX.js";
import { K as KeyboardDevice } from "./keyboard_device-DYWAPKqs.js";
import "./button_control-4gs7TZGw.js";
import "./perky_module-BD8xZ4RH.js";
import "./notifier-BaRt7qG0.js";
import "./registry-DkFDcuAy.js";
import "./observable_map-DbdPsVuP.js";
import "./observable_set-CjEWA0bY.js";
import "./utils-1YvUtnPG.js";
import "./inflector--UCXb4XA.js";
import "./input_control-Bm8lg0DB.js";
const keyboard_device_doc = doc("KeyboardDevice", () => {
  text(`
        Keyboard input device. Listens for keydown/keyup events and creates
        ButtonControl instances dynamically for each key pressed.
    `);
  section("Basic Setup", () => {
    text(`
            Create a KeyboardDevice attached to a container element.
            The device must be started to begin listening for events.
        `);
    code("Creation", () => {
      const keyboard = new KeyboardDevice({
        container: document.body
      });
      keyboard.start();
    });
    container({ title: "Interactive keyboard", height: 150, preset: "interactive" }, (ctx) => {
      ctx.container.style.cursor = "pointer";
      ctx.hint("Click here, then press keys");
      const updateDisplay = ctx.display((name) => name ?? "");
      const keyboard = new KeyboardDevice({
        container: ctx.container
      });
      keyboard.on("control:pressed", (control) => {
        updateDisplay(control.name);
      });
      keyboard.on("control:released", () => {
        updateDisplay("");
      });
      keyboard.start();
      ctx.setApp(keyboard);
    });
  });
  section("Key Names", () => {
    text(`
            Keys are identified by their \`event.code\` value (physical key position).
            Examples: \`KeyA\`, \`Space\`, \`ArrowUp\`, \`ShiftLeft\`.
        `);
    container({ title: "Key codes", height: 150, preset: "interactive-alt" }, (ctx) => {
      ctx.hint("Press any key to see its code");
      const updateDisplay = ctx.display((name) => name ?? "");
      const keyboard = new KeyboardDevice({
        container: ctx.container
      });
      keyboard.on("control:pressed", (control) => {
        updateDisplay(control.name);
      });
      keyboard.start();
      ctx.setApp(keyboard);
    });
  });
  section("Querying State", () => {
    text("Check if specific keys are pressed or get all pressed keys.");
    container({ title: "Multiple keys", height: 180, preset: "interactive" }, (ctx) => {
      ctx.hint("Hold multiple keys");
      const keyboard = new KeyboardDevice({
        container: ctx.container
      });
      const updateDisplay = ctx.display(() => {
        return keyboard.getPressedControls().map((c) => c.name);
      });
      keyboard.on("control:pressed", updateDisplay);
      keyboard.on("control:released", updateDisplay);
      keyboard.start();
      ctx.setApp(keyboard);
    });
    code("API methods", () => {
      const keyboard = new KeyboardDevice();
      keyboard.start();
      keyboard.isPressed("Space");
      keyboard.getPressedControls();
      keyboard.getValueFor("KeyW");
    });
  });
  section("Prevent Default", () => {
    text(`
            Use \`shouldPreventDefault\` to stop browser default behavior.
            Can be a boolean or a function for fine-grained control.
        `);
    code("Prevent all", () => {
      new KeyboardDevice({
        shouldPreventDefault: true
      });
    });
    code("Selective prevention", () => {
      new KeyboardDevice({
        shouldPreventDefault: (event, control) => {
          return ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Space"].includes(control.name);
        }
      });
    });
  });
});
export {
  keyboard_device_doc as default
};
