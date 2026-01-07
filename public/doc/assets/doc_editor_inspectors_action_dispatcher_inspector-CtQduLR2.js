import { d as doc, t as text, s as section, c as code, f as container } from "./runtime-CM36Pd9c.js";
import { A as ActionDispatcher } from "./action_dispatcher-DnKE6KZm.js";
import { A as ActionController } from "./action_controller-BKl2uYjt.js";
import "./action_dispatcher_inspector-CXLcEDVW.js";
import { l as logger } from "./logger-DMogC8ed.js";
import "./perky_module-8S_KnZAY.js";
import "./utils-BTvKfW7M.js";
import "./perky_explorer_details-blS-_Re2.js";
import "./perky_explorer_styles-C0ezRuWU.js";
import "./toggle_input-Do276pUG.js";
import "./base_input-C1WyeWNO.js";
const action_dispatcher_inspector_doc = doc("ActionDispatcherInspector", () => {
  text(`
        Visual inspector for ActionDispatcher modules. Displays all registered
        controllers and their actions grouped by controller. Used in PerkyExplorer devtools.
    `);
  section("Basic Usage", () => {
    text(`
            Create the inspector and set a dispatcher with \`setModule()\`.
            Actions are grouped by controller with "Run" buttons.
        `);
    code("Setup", () => {
      const inspector = document.createElement("action-dispatcher-inspector");
      const dispatcher = new ActionDispatcher({ $id: "dispatcher" });
      const main = dispatcher.register("main");
      main.addAction("save", () => logger.log("Saving..."));
      inspector.setModule(dispatcher);
      document.body.appendChild(inspector);
    });
    container({ title: "Inspector demo", height: 350, preset: "inspector" }, (ctx) => {
      class GameController extends ActionController {
        shoot() {
          logger.log("Shooting!");
        }
        jump() {
          logger.log("Jumping!");
        }
        pause() {
          logger.log("Game paused");
        }
      }
      const dispatcher = new ActionDispatcher({ $id: "dispatcher" });
      const main = dispatcher.register("main");
      main.addAction("save", () => logger.log("Saving..."));
      main.addAction("load", () => logger.log("Loading..."));
      dispatcher.register("game", GameController);
      dispatcher.setActive(["main", "game"]);
      const inspector = document.createElement("action-dispatcher-inspector");
      inspector.setModule(dispatcher);
      ctx.container.appendChild(inspector);
      ctx.setApp(dispatcher);
    });
  });
  section("Active Controllers", () => {
    text(`
            Each controller has a toggle to activate or deactivate it.
            Only active controllers can execute actions via the "Run" button.
        `);
    container({ title: "Toggle controllers", height: 400, preset: "inspector" }, (ctx) => {
      class PlayerController extends ActionController {
        move() {
          logger.log("Player moving");
        }
        attack() {
          logger.log("Player attacking");
        }
      }
      class UIController extends ActionController {
        openMenu() {
          logger.log("Menu opened");
        }
        closeMenu() {
          logger.log("Menu closed");
        }
        showInventory() {
          logger.log("Inventory shown");
        }
      }
      const dispatcher = new ActionDispatcher({ $id: "dispatcher" });
      dispatcher.register("player", PlayerController);
      dispatcher.register("ui", UIController);
      const system = dispatcher.register("system");
      system.addAction("quit", () => logger.log("Quitting..."));
      dispatcher.setActive(["player"]);
      const inspector = document.createElement("action-dispatcher-inspector");
      inspector.setModule(dispatcher);
      ctx.container.appendChild(inspector);
      setTimeout(() => {
        dispatcher.setActive(["player", "ui"]);
        inspector.setModule(dispatcher);
      }, 500);
      ctx.setApp(dispatcher);
    });
  });
  section("Empty State", () => {
    text("When no controllers are registered, an empty message is shown.");
    container({ title: "No controllers", height: 120, preset: "inspector" }, (ctx) => {
      const dispatcher = new ActionDispatcher({ $id: "empty", main: false });
      const inspector = document.createElement("action-dispatcher-inspector");
      inspector.setModule(dispatcher);
      ctx.container.appendChild(inspector);
      ctx.setApp(dispatcher);
    });
  });
});
export {
  action_dispatcher_inspector_doc as default
};
