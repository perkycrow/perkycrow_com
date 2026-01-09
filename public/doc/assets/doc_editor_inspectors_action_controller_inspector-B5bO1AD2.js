var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { d as doc, t as text, s as section, c as code, f as container } from "./runtime-xB3_cpHX.js";
import { A as ActionController } from "./action_controller-DJ2Gg4wl.js";
import "./action_controller_inspector-CqKIGwoI.js";
import { l as logger } from "./logger-Wk9ggM8V.js";
import "./perky_module-CcyM7f0C.js";
import "./notifier-BaRt7qG0.js";
import "./registry-DkFDcuAy.js";
import "./observable_map-DbdPsVuP.js";
import "./observable_set-CjEWA0bY.js";
import "./utils-D9Z65BTh.js";
import "./inflector--UCXb4XA.js";
import "./perky_explorer_details-blS-_Re2.js";
import "./perky_explorer_styles-C0ezRuWU.js";
const action_controller_inspector_doc = doc("ActionControllerInspector", () => {
  text(`
        Visual inspector for ActionController modules. Displays all registered
        actions with execute buttons. Used in PerkyExplorer devtools.
    `);
  section("Basic Usage", () => {
    text(`
            Create the inspector and set a module with \`setModule()\`.
            The inspector displays all actions with "Run" buttons.
        `);
    code("Setup", () => {
      const inspector = document.createElement("action-controller-inspector");
      const controller = new ActionController({ $id: "main" });
      controller.addAction("save", () => logger.log("Saving..."));
      inspector.setModule(controller);
      document.body.appendChild(inspector);
    });
    container({ title: "Inspector demo", height: 280, preset: "inspector" }, (ctx) => {
      class GameController extends ActionController {
        shoot() {
          logger.log("Shooting!");
        }
        jump(height = 1) {
          logger.log(`Jumping ${height} units`);
        }
        move(x, y) {
          logger.log(`Moving to ${x}, ${y}`);
        }
        heal() {
          logger.log("Healing...");
        }
      }
      __publicField(GameController, "propagable", ["move"]);
      const controller = new GameController({ $id: "game" });
      const inspector = document.createElement("action-controller-inspector");
      inspector.setModule(controller);
      ctx.container.appendChild(inspector);
      ctx.setApp(controller);
    });
  });
  section("Features", () => {
    text(`
            The inspector shows:
            - Action count header
            - Each action with its name
            - "propagable" badge for actions in \`static propagable\`
            - "Run" button to execute actions directly
        `);
    container({ title: "With propagable actions", height: 200, preset: "inspector" }, (ctx) => {
      class MenuController extends ActionController {
        select() {
          logger.log("Selected!");
        }
        navigate() {
          logger.log("Navigating...");
        }
        back() {
          logger.log("Going back...");
        }
      }
      __publicField(MenuController, "propagable", ["navigate", "back"]);
      const controller = new MenuController({ $id: "menu" });
      const inspector = document.createElement("action-controller-inspector");
      inspector.setModule(controller);
      ctx.container.appendChild(inspector);
      ctx.setApp(controller);
    });
  });
  section("Empty State", () => {
    text("When a controller has no actions, an empty message is shown.");
    container({ title: "No actions", height: 120, preset: "inspector" }, (ctx) => {
      const controller = new ActionController({ $id: "empty" });
      const inspector = document.createElement("action-controller-inspector");
      inspector.setModule(controller);
      ctx.container.appendChild(inspector);
      ctx.setApp(controller);
    });
  });
});
export {
  action_controller_inspector_doc as default
};
