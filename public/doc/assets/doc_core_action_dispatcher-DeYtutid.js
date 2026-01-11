var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { d as doc, t as text, s as section, b as action, l as logger } from "./runtime-D8el-yK6.js";
import { A as ActionDispatcher } from "./action_dispatcher-DkrI7RVZ.js";
import { A as ActionController } from "./action_controller-B-qnPr9A.js";
import "./perky_module-BJShv6RO.js";
import "./registry-DalNpkO9.js";
import "./observable_map-PG-iVMD3.js";
import "./observable_set-CrYi1grl.js";
import "./utils-CPyB8f8f.js";
import "./inflector--UCXb4XA.js";
const action_dispatcher_doc = doc("ActionDispatcher", { advanced: true }, () => {
  text(`
        Manages action controllers and dispatches actions to them.
        Controllers are organized in a stack - actions propagate from top to bottom.
    `);
  section("Basic Setup", () => {
    text(`
            Create an ActionDispatcher and register controllers with \`register()\`.
            Add actions to controllers and execute them.
        `);
    action("Add and execute action", () => {
      const dispatcher = new ActionDispatcher({ $id: "dispatcher" });
      const main = dispatcher.register("main");
      main.addAction("greet", (name) => {
        logger.log("Hello,", name);
      });
      dispatcher.setActive("main");
      dispatcher.execute("greet", "World");
    });
  });
  section("Controller Stack", () => {
    text(`
            Register multiple controllers to organize actions by context.
            Use \`pushActive\` and \`popActive\` to manage the stack.
        `);
    action("Stack operations", () => {
      const dispatcher = new ActionDispatcher({ $id: "dispatcher" });
      dispatcher.register("game");
      dispatcher.register("menu");
      logger.log("Initial:", dispatcher.getActive());
      dispatcher.pushActive("game");
      logger.log("After push game:", dispatcher.getActive());
      dispatcher.pushActive("menu");
      logger.log("After push menu:", dispatcher.getActive());
      dispatcher.popActive();
      logger.log("After pop:", dispatcher.getActive());
    });
  });
  section("Custom Controllers", () => {
    text(`
            Extend \`ActionController\` to create custom controllers.
            Public methods automatically become executable actions.
        `);
    action("Methods as actions", () => {
      class PlayerController extends ActionController {
        shoot() {
          logger.log("Player shoots!");
        }
        heal(amount = 10) {
          logger.log(`Healing ${amount} HP`);
        }
      }
      const dispatcher = new ActionDispatcher({ $id: "dispatcher" });
      dispatcher.register("player", PlayerController);
      dispatcher.setActive("player");
      dispatcher.execute("shoot");
      dispatcher.execute("heal", 25);
    });
  });
  section("Direct Execution", () => {
    text(`
            Use \`executeTo\` to target a specific controller directly,
            bypassing the stack propagation.
        `);
    action("executeTo", () => {
      const dispatcher = new ActionDispatcher({ $id: "dispatcher" });
      const ctrl = dispatcher.register("myController");
      ctrl.addAction("test", () => {
        logger.log("Action executed on myController");
      });
      dispatcher.setActive("myController");
      dispatcher.executeTo("myController", "test");
    });
  });
  section("Listing Actions", () => {
    text("Query registered controllers and their actions.");
    action("List all actions", () => {
      class GameController extends ActionController {
        shoot() {
        }
        jump() {
        }
      }
      const dispatcher = new ActionDispatcher({ $id: "dispatcher" });
      const main = dispatcher.register("main");
      main.addAction("save", () => {
      });
      main.addAction("load", () => {
      });
      dispatcher.register("game", GameController);
      const actionsMap = dispatcher.listAllActions();
      for (const [controllerName, actions] of actionsMap) {
        logger.log(`${controllerName}:`, actions.map((a) => a.name).join(", "));
      }
    });
  });
  section("Propagation", () => {
    text(`
            Actions propagate through the controller stack from top to bottom.
            By default, an action stops at the first controller that handles it.
            Use \`static propagable\` to let actions continue to lower controllers
            (see [[ActionController#Propagation]]).
        `);
    action("Propagation demo", () => {
      class GameController extends ActionController {
        move() {
          logger.log("Game: player moves");
        }
        jump() {
          logger.log("Game: player jumps");
        }
      }
      class MenuController extends ActionController {
        move() {
          logger.log("Menu: navigate");
        }
        confirm() {
          logger.log("Menu: confirm selection");
        }
      }
      __publicField(MenuController, "propagable", ["move"]);
      const dispatcher = new ActionDispatcher({ $id: "dispatcher" });
      dispatcher.register("game", GameController);
      dispatcher.register("menu", MenuController);
      dispatcher.setActive(["game", "menu"]);
      logger.log("--- move action (propagates) ---");
      dispatcher.execute("move");
      logger.log("--- confirm action (stops at menu) ---");
      dispatcher.execute("confirm");
      logger.log("--- jump action (only on game) ---");
      dispatcher.execute("jump");
    });
  });
});
export {
  action_dispatcher_doc as default
};
