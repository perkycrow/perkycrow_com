import { d as doc, t as text, s as section, c as code, e as action } from "./runtime-BzVMxcO0.js";
import { A as ActionDispatcher } from "./action_dispatcher-BAmZU9M8.js";
import { A as ActionController } from "./action_controller-kjsNLxEn.js";
import { l as logger } from "./logger-Wk9ggM8V.js";
import "./perky_module-BA31rvZo.js";
import "./notifier-BaRt7qG0.js";
import "./utils-CUtPxZ7p.js";
const action_dispatcher_doc = doc("ActionDispatcher", () => {
  text(`
        Manages action controllers and dispatches actions to them.
        Controllers are organized in a stack - actions propagate from top to bottom.
    `);
  section("Basic Setup", () => {
    text(`
            Create an ActionDispatcher and register controllers with \`register()\`.
            Add actions to controllers and execute them.
        `);
    code("Creation", () => {
      const dispatcher = new ActionDispatcher({ $id: "dispatcher" });
      const main = dispatcher.register("main");
      main.addAction("jump", () => {
        console.log("Jump!");
      });
      dispatcher.setActive("main");
      dispatcher.execute("jump");
    });
    action("Add and execute action", () => {
      const dispatcher = new ActionDispatcher({ $id: "dispatcher" });
      const main = dispatcher.register("main");
      main.addAction("greet", (name) => {
        logger.log("Hello,", name);
      });
      dispatcher.setActive("main");
      dispatcher.execute("greet", "World");
      dispatcher.dispose();
    });
  });
  section("Controllers", () => {
    text(`
            Register multiple controllers to organize actions by context.
            Use \`setActive\` to control which controllers receive actions.
        `);
    code("Multiple controllers", () => {
      const dispatcher = new ActionDispatcher({ $id: "dispatcher" });
      const gameCtrl = dispatcher.register("game");
      gameCtrl.addAction("pause", () => console.log("Paused"));
      const menuCtrl = dispatcher.register("menu");
      menuCtrl.addAction("select", () => console.log("Selected"));
      dispatcher.setActive(["game", "menu"]);
    });
    action("Controller stack", () => {
      const dispatcher = new ActionDispatcher({ $id: "dispatcher" });
      dispatcher.register("game");
      dispatcher.register("menu");
      logger.log("Initial active:", dispatcher.getActive());
      dispatcher.pushActive("game");
      logger.log("After push game:", dispatcher.getActive());
      dispatcher.pushActive("menu");
      logger.log("After push menu:", dispatcher.getActive());
      dispatcher.popActive();
      logger.log("After pop:", dispatcher.getActive());
      dispatcher.dispose();
    });
  });
  section("Direct Execution", () => {
    text(`
            Use \`executeTo\` to target a specific controller directly,
            bypassing the active stack propagation.
        `);
    action("executeTo", () => {
      const dispatcher = new ActionDispatcher({ $id: "dispatcher" });
      const ctrl = dispatcher.register("myController");
      ctrl.addAction("test", () => {
        logger.log("Action executed on myController");
      });
      dispatcher.setActive("myController");
      dispatcher.executeTo("myController", "test");
      dispatcher.dispose();
    });
  });
  section("Custom Controllers", () => {
    text(`
            Extend \`ActionController\` to create custom controllers.
            Public methods automatically become executable actions.
        `);
    code("Custom controller class", () => {
      class GameController extends ActionController {
        shoot() {
          console.log("Shooting!");
        }
        jump(height = 1) {
          console.log(`Jumping ${height} units`);
        }
        setSpeed(speed) {
          this.speed = speed;
        }
      }
      const dispatcher = new ActionDispatcher({ $id: "dispatcher" });
      dispatcher.register("game", GameController);
      dispatcher.setActive("game");
      dispatcher.execute("shoot");
      dispatcher.execute("jump", 2);
    });
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
      dispatcher.dispose();
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
      dispatcher.dispose();
    });
  });
});
export {
  action_dispatcher_doc as default
};
