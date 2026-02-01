import { d as doc, t as text, s as section, c as code, b as container, l as logger } from "./runtime-DOmi4lo7.js";
import { A as ActionDispatcher } from "./action_dispatcher-CVnn-6BB.js";
import { A as ActionController } from "./action_controller-DyFDDS26.js";
import "./action_dispatcher_inspector-B2MXLo9l.js";
import "./perky_module-DrWJO8l1.js";
import "./registry-CF_H4IOw.js";
import "./observable_map-BPZFGUWq.js";
import "./observable_set-BOSKLaPv.js";
import "./utils-DVCexGPz.js";
import "./inflector-BxOpyWLP.js";
import "./perky_explorer_details-D5Cvv771.js";
import "./editor_component-KitFp2Fu.js";
import "./dom_utils-DTpHkHXB.js";
import "./toggle_input-xvj77i30.js";
import "./index-Defq3ZXV.js";
import "./base_input-3TimJ94Y.js";
const action_dispatcher_inspector_doc = doc("ActionDispatcherInspector", { advanced: true }, () => {
  text(`
        Visual inspector for [[ActionDispatcher]] modules. Displays all registered
        controllers and their actions grouped by controller. Used in [[PerkyExplorer@editor]] devtools.
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
      const dispatcher = new ActionDispatcher({ $id: "empty" });
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
