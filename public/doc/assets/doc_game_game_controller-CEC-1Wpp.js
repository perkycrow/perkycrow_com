import { d as doc, t as text, s as section, c as code, a as action, l as logger } from "./runtime-DOmi4lo7.js";
import { G as GameController } from "./game_controller-B3gVyaDK.js";
import { E as Entity } from "./entity-CLtZfNQW.js";
import "./action_controller-DyFDDS26.js";
import "./perky_module-DrWJO8l1.js";
import "./registry-CF_H4IOw.js";
import "./observable_map-BPZFGUWq.js";
import "./observable_set-BOSKLaPv.js";
import "./utils-DVCexGPz.js";
import "./inflector-BxOpyWLP.js";
import "./vec2-BvD8ope7.js";
const game_controller_doc = doc("GameController", () => {
  text(`
        Extends [[ActionController@core]] with game-specific conveniences.
        Provides access to world, renderer, and camera as resources,
        plus a spawn shorthand for creating entities.
    `);
  section("Basic Usage", () => {
    text(`
            Extend GameController and define action methods.
            Use \`this.world\`, \`this.renderer\`, and \`this.camera\` to interact with the game.
        `);
    code("Custom controller", () => {
    });
  });
  section("Spawn", () => {
    text(`
            The spawn method is a shorthand for \`this.world.create(Entity, options)\`.
            Returns the created entity, or undefined if no world is available.
        `);
    action("Spawn entities", () => {
      const controller = new GameController({ $id: "battle" });
      logger.log("spawn without world:", controller.spawn(Entity));
    });
  });
  section("Resources", () => {
    text(`
            GameController declares three static resources: \`world\`, \`renderer\`, and \`camera\`.
            These are automatically resolved from the game when the controller is installed
            on an [[ActionDispatcher@core]].
        `);
    code("Available resources", () => {
    });
  });
  section("API", () => {
    code("Static properties", () => {
    });
    code("Properties", () => {
    });
    code("Methods", () => {
    });
  });
});
export {
  game_controller_doc as default
};
