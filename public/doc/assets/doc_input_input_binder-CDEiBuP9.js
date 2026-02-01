import { d as doc, t as text, s as section, a as action, l as logger, c as code } from "./runtime-DOmi4lo7.js";
import { I as InputBinder } from "./input_binder-DslDp1y0.js";
import "./perky_module-DrWJO8l1.js";
import "./registry-CF_H4IOw.js";
import "./observable_map-BPZFGUWq.js";
import "./observable_set-BOSKLaPv.js";
import "./utils-DVCexGPz.js";
import "./inflector-BxOpyWLP.js";
import "./input_binding-CfW7yBsk.js";
import "./composite_binding-CzFNM38-.js";
const input_binder_doc = doc("InputBinder", () => {
  text(`
        Maps device+control pairs to named actions. Used by [[InputSystem]] to
        decouple game logic from specific keys and buttons. Supports single bindings
        and composite (combo) bindings.
    `);
  section("Basic Binding", () => {
    text(`
            Bind a control to an action name. The device is auto-detected from the
            control name when not specified.
        `);
    action("Bind and query", () => {
      const binder2 = new InputBinder({ $id: "binder" });
      binder2.bindInput({ controlName: "Space", actionName: "jump" });
      binder2.bindInput({ controlName: "KeyW", actionName: "moveUp" });
      logger.log("Has jump:", binder2.hasBinding({ actionName: "jump" }));
      logger.log("All bindings:", binder2.getAllBindings().length);
    });
    code("With explicit device", () => {
      binder.bindInput({
        deviceName: "mouse",
        controlName: "leftButton",
        actionName: "shoot",
        eventType: "pressed"
      });
    });
  });
  section("Querying Bindings", () => {
    text("Look up bindings by action name or by input device+control.");
    action("Query methods", () => {
      const binder2 = new InputBinder({ $id: "binder" });
      binder2.bindInput({ controlName: "Space", actionName: "jump" });
      binder2.bindInput({ controlName: "KeyW", actionName: "moveUp" });
      binder2.bindInput({ controlName: "ArrowUp", actionName: "moveUp" });
      const jumpBindings = binder2.getBindingsForAction("jump");
      logger.log("Jump bindings:", jumpBindings.length);
      const moveBindings = binder2.getBindingsForAction("moveUp");
      logger.log("MoveUp bindings:", moveBindings.length);
      const spaceBindings = binder2.getBindingsForInput({
        deviceName: "keyboard",
        controlName: "Space",
        eventType: "pressed"
      });
      logger.log("Space bindings:", spaceBindings.length);
    });
  });
  section("Combo Bindings", () => {
    text(`
            Use \`bindCombo()\` to require multiple keys pressed simultaneously.
            The binding only triggers when all controls are active.
        `);
    action("Bind a combo", () => {
      const binder2 = new InputBinder({ $id: "binder" });
      binder2.bindCombo(["ControlLeft", "KeyS"], "save");
      binder2.bindCombo(["ShiftLeft", "KeyZ"], "undo");
      logger.log("Has save:", binder2.hasBinding({ actionName: "save" }));
      logger.log("All bindings:", binder2.getAllBindings().length);
    });
  });
  section("Unbinding", () => {
    text("Remove specific bindings or clear everything.");
    action("Unbind and clear", () => {
      const binder2 = new InputBinder({ $id: "binder" });
      binder2.bindInput({ controlName: "Space", actionName: "jump" });
      binder2.bindInput({ controlName: "KeyW", actionName: "moveUp" });
      logger.log("Before unbind:", binder2.getAllBindings().length);
      binder2.unbind({ actionName: "jump" });
      logger.log("After unbind:", binder2.getAllBindings().length);
      binder2.clearBindings();
      logger.log("After clear:", binder2.getAllBindings().length);
    });
  });
  section("Import and Export", () => {
    text(`
            Serialize bindings to JSON-friendly format and restore them later.
            Useful for saving user-customized key mappings.
        `);
    action("Export and import", () => {
      const binder2 = new InputBinder({ $id: "binder" });
      binder2.bindInput({ controlName: "Space", actionName: "jump" });
      binder2.bindInput({ controlName: "KeyW", actionName: "moveUp" });
      const exported = binder2.export();
      logger.log("Exported bindings:", exported.bindings.length);
      const binder22 = new InputBinder({ $id: "binder2", inputBinder: binder2 });
      logger.log("Imported bindings:", binder22.getAllBindings().length);
    });
  });
  section("Controller Names", () => {
    text(`
            Bindings can include a \`controllerName\` for multiplayer scenarios
            where different players share the same device.
        `);
    code("Multiplayer bindings", () => {
      binder.bindInput({
        controlName: "KeyW",
        actionName: "moveUp",
        controllerName: "player1"
      });
      binder.bindInput({
        controlName: "ArrowUp",
        actionName: "moveUp",
        controllerName: "player2"
      });
      binder.getBindingsForAction("moveUp", "player1");
    });
  });
});
export {
  input_binder_doc as default
};
