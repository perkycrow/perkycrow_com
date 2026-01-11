var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { d as doc, t as text, s as section, c as code, f as container, l as logger } from "./runtime-D8el-yK6.js";
import { A as ActionController } from "./action_controller-B-qnPr9A.js";
import "./action_controller_inspector-DfZMvPsl.js";
import "./perky_module-BJShv6RO.js";
import "./registry-DalNpkO9.js";
import "./observable_map-PG-iVMD3.js";
import "./observable_set-CrYi1grl.js";
import "./utils-CPyB8f8f.js";
import "./inflector--UCXb4XA.js";
import "./perky_explorer_details-D8GqtAXy.js";
import "./perky_explorer_styles-CwXl8xPy.js";
const action_controller_inspector_doc = doc("ActionControllerInspector", { advanced: true }, () => {
  text(`
        Visual inspector for [[ActionController@application]] modules. Displays all registered
        actions with execute buttons. Used in [[PerkyExplorer@editor]] devtools.
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
            - "propagable" badge for actions in \`static propagable\` (see [[ActionController@application#propagable-actions]])
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
