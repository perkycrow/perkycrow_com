import { d as doc, t as text, s as section, c as code, b as container, l as logger } from "./runtime-DOmi4lo7.js";
import { I as InputSystem } from "./input_system-CExLXbtT.js";
import { P as PerkyModule } from "./perky_module-DrWJO8l1.js";
import { P as PerkyView } from "./perky_view-Bn-e_bN5.js";
import "./input_binder-DslDp1y0.js";
import "./registry-CF_H4IOw.js";
import "./observable_map-BPZFGUWq.js";
import "./input_binding-CfW7yBsk.js";
import "./composite_binding-CzFNM38-.js";
import "./keyboard_device-DhWXHTRz.js";
import "./input_device-BRob1gB9.js";
import "./button_control-n2KtTtYs.js";
import "./input_control-BiNc-VBj.js";
import "./mouse_device-CM8oUMnh.js";
import "./vec2_control-CW0RdMFR.js";
import "./vec2-BvD8ope7.js";
import "./navigation_control-BhgO3nPA.js";
import "./touch_device-BSs8ql2L.js";
import "./observable_set-BOSKLaPv.js";
import "./utils-DVCexGPz.js";
import "./inflector-BxOpyWLP.js";
import "./dom_utils-DTpHkHXB.js";
const input_system_doc = doc("InputSystem", { featured: true }, () => {
  text(`
        Manages input devices (keyboard, mouse, touch) and input bindings.
        Extends [[PerkyModule]] and delegates methods to its host when installed.
    `);
  section("Basic Usage", () => {
    text(`
            InputSystem is typically created as part of an [[Application]].
            When installed on a host with an element, it registers default devices:
            [[KeyboardDevice]], [[MouseDevice]], [[TouchDevice]].
        `);
    code("With Application", () => {
      const app2 = new Application({ $id: "game" });
      app2.inputSystem;
      app2.keyboard;
      app2.mouse;
      app2.touch;
    });
    code("Standalone", () => {
      const host = new PerkyModule({ $id: "host" });
      host.create(PerkyView, { $bind: "perkyView" });
      host.create(InputSystem, {
        $bind: "inputSystem"
      });
      host.start();
    });
  });
  section("Checking Input State", () => {
    text("Query the current state of keys, mouse buttons, or touch points.");
    container({ title: "Keyboard state", height: 150, preset: "interactive" }, (ctx) => {
      ctx.hint("Click here, then press keys");
      const updateDisplay = ctx.display((keys) => (keys == null ? void 0 : keys.length) ? keys : "No keys pressed");
      const host = new PerkyModule({ $id: "host" });
      host.create(PerkyView, {
        $bind: "perkyView",
        container: ctx.container
      });
      const inputSystem2 = host.create(InputSystem, { $bind: "inputSystem" });
      host.start();
      const update = () => {
        const pressed = inputSystem2.keyboard.getPressedControls();
        updateDisplay(pressed.map((c) => c.name));
      };
      inputSystem2.on("control:pressed", update);
      inputSystem2.on("control:released", update);
      ctx.setApp(host);
    });
    code("Query methods", () => {
      app.isKeyPressed("Space");
      app.isMousePressed("leftButton");
      app.isTouchPressed("tap");
      app.isPressedAny("Space");
      app.getKeyValue("KeyW");
      app.getMouseValue("leftButton");
    });
    code("Device methods", () => {
      inputSystem.isPressed("keyboard", "Space");
      inputSystem.isPressed("mouse", "leftButton");
      inputSystem.isPressed("touch", "tap");
      inputSystem.getValueFor("keyboard", "KeyW");
      inputSystem.getPressedControls("keyboard");
    });
  });
  section("Input Bindings", () => {
    text(`
            Bind physical inputs to named actions.
            This decouples game logic from specific keys/buttons.
        `);
    container({ title: "Action bindings", height: 180, preset: "interactive-alt" }, (ctx) => {
      ctx.hint("Press J to jump, K to kick");
      const updateDisplay = ctx.display((msg) => msg || "Waiting...");
      const host = new PerkyModule({ $id: "host" });
      host.create(PerkyView, {
        $bind: "perkyView",
        container: ctx.container
      });
      host.create(InputSystem, { $bind: "inputSystem" });
      host.start();
      host.bindInput({ controlName: "KeyJ", actionName: "jump", eventType: "pressed" });
      host.bindInput({ controlName: "KeyK", actionName: "kick", eventType: "pressed" });
      host.on("input:triggered", (binding) => {
        updateDisplay(`Action: ${binding.actionName}`);
        setTimeout(() => updateDisplay("Waiting..."), 500);
      });
      ctx.setApp(host);
    });
    code("bindInput / isActionPressed", () => {
      app.bindInput({
        controlName: "Space",
        actionName: "jump",
        eventType: "pressed"
      });
      if (app.isActionPressed("jump")) {
        player.jump();
      }
      app.hasBinding({ actionName: "jump" });
    });
    code("Binding options", () => {
      inputSystem.bindInput({
        controlName: "Space",
        actionName: "jump",
        eventType: "pressed"
        // or 'released'
      });
      inputSystem.bindInput({
        deviceName: "mouse",
        controlName: "leftButton",
        actionName: "shoot",
        eventType: "pressed"
      });
      inputSystem.bindInput({
        controlName: "KeyW",
        actionName: "moveUp",
        controllerName: "player1"
      });
    });
  });
  section("Direction Helper", () => {
    text(`
            \`getDirection()\` returns a normalized [[Vec2]] based on action bindings.
            Expects actions named \`{name}Up\`, \`{name}Down\`, \`{name}Left\`, \`{name}Right\`.
        `);
    container({ title: "WASD direction", height: 180, preset: "interactive" }, (ctx) => {
      ctx.hint("Use WASD or arrow keys");
      const updateDisplay = ctx.display((dir) => dir || "Direction: (0, 0)");
      const host = new PerkyModule({ $id: "host" });
      host.create(PerkyView, {
        $bind: "perkyView",
        container: ctx.container
      });
      const inputSystem2 = host.create(InputSystem, { $bind: "inputSystem" });
      host.start();
      host.bindInput({ controlName: "KeyW", actionName: "moveUp" });
      host.bindInput({ controlName: "KeyS", actionName: "moveDown" });
      host.bindInput({ controlName: "KeyA", actionName: "moveLeft" });
      host.bindInput({ controlName: "KeyD", actionName: "moveRight" });
      host.bindInput({ controlName: "ArrowUp", actionName: "moveUp" });
      host.bindInput({ controlName: "ArrowDown", actionName: "moveDown" });
      host.bindInput({ controlName: "ArrowLeft", actionName: "moveLeft" });
      host.bindInput({ controlName: "ArrowRight", actionName: "moveRight" });
      const update = () => {
        const dir = host.getDirection("move");
        updateDisplay(`Direction: (${dir.x.toFixed(1)}, ${dir.y.toFixed(1)})`);
      };
      inputSystem2.on("control:pressed", update);
      inputSystem2.on("control:released", update);
      ctx.setApp(host);
    });
    code("Usage in game loop", () => {
      const dir = app.getDirection("move");
      player.x += dir.x * speed * deltaTime;
      player.y += dir.y * speed * deltaTime;
    });
  });
  section("Events", () => {
    text("Listen for input events at the device or action level.");
    code("Device events", () => {
      inputSystem.on("control:pressed", (control, event, device) => {
        logger.log(`${control.name} pressed on ${device.$id}`);
      });
      inputSystem.on("control:released", (control, event, device) => {
        logger.log(`${control.name} released`);
      });
    });
    code("Action events", () => {
      app.on("input:triggered", (binding, event, device) => {
        logger.log(`Action: ${binding.actionName}`);
        if (binding.actionName === "jump") {
          player.jump();
        }
      });
    });
  });
  section("Managing Bindings", () => {
    text("Query and manage input bindings.");
    code("Binding queries", () => {
      app.bindInput({ controlName: "Space", actionName: "jump" });
      app.bindInput({ controlName: "KeyW", actionName: "moveUp" });
      app.hasBinding({ actionName: "jump" });
      app.getAllBindings();
      app.getBindingsForAction("jump");
      app.getBindingsForInput({ deviceName: "keyboard", controlName: "Space", eventType: "pressed" });
    });
    code("Unbind / clear", () => {
      inputSystem.unbind({ actionName: "jump" });
      inputSystem.clearBindings();
    });
  });
  section("Custom Devices", () => {
    text("Register additional input devices.");
    code("Register device", () => {
      inputSystem.registerDevice(GamepadDevice, {
        $id: "gamepad",
        $bind: "gamepad"
      });
      inputSystem.isPressed("gamepad", "button0");
    });
    code("Remove device", () => {
      inputSystem.removeChild("gamepad");
    });
  });
});
export {
  input_system_doc as default
};
