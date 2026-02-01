var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _Stage_instances, createWorld_fn, createWorldView_fn;
import { d as doc, t as text, s as section, c as code, a as action, l as logger } from "./runtime-DOmi4lo7.js";
import { P as PerkyModule } from "./perky_module-DrWJO8l1.js";
import { W as WorldView } from "./world_view-BIfTYyH3.js";
import { W as World } from "./world-puEwPQwr.js";
import "./registry-CF_H4IOw.js";
import "./observable_map-BPZFGUWq.js";
import "./observable_set-BOSKLaPv.js";
import "./utils-DVCexGPz.js";
import "./inflector-BxOpyWLP.js";
import "./group_2d-B-hGIEMS.js";
import "./object_2d-DKcr5oBk.js";
import "./transform-DC3tDXed.js";
import "./auto_view-DDTLPjwG.js";
import "./entity_view-IA5mL-_k.js";
class Stage extends PerkyModule {
  constructor(options = {}) {
    super(options);
    __privateAdd(this, _Stage_instances);
    this.game = options.game;
    __privateMethod(this, _Stage_instances, createWorld_fn).call(this);
    __privateMethod(this, _Stage_instances, createWorldView_fn).call(this);
  }
  update() {
  }
  render() {
  }
}
_Stage_instances = new WeakSet();
createWorld_fn = function() {
  const WorldClass = this.constructor.World;
  if (!WorldClass) {
    return;
  }
  this.create(WorldClass, { $bind: "world" });
};
createWorldView_fn = function() {
  const WorldViewClass = this.constructor.WorldView;
  if (!this.world || !WorldViewClass) {
    return;
  }
  this.create(WorldViewClass, {
    $bind: "worldView",
    world: this.world,
    game: this.game
  });
};
__publicField(Stage, "$category", "stage");
__publicField(Stage, "World", null);
__publicField(Stage, "WorldView", WorldView);
const stage_doc = doc("Stage", () => {
  text(`
        A stage represents a distinct phase of your game — a level, a menu, a cutscene.
        Subclass Stage to define a World and WorldView pair, and override update/render
        for stage-specific logic.
    `);
  section("Basic Usage", () => {
    text(`
            Extend Stage and set a static \`World\` class. The stage automatically
            creates the world and its view on construction.
        `);
    code("Defining a stage", () => {
    });
    action("Stage with world", () => {
      class LevelStage extends Stage {
      }
      __publicField(LevelStage, "World", World);
      const stage = new LevelStage({ game: {} });
      logger.log("has world:", stage.world !== void 0);
      logger.log("has worldView:", stage.worldView !== void 0);
    });
  });
  section("World and WorldView", () => {
    text(`
            Stage creates a [[World@game]] and [[WorldView@game]] from the static class properties.
            If \`World\` is null (default), no world or view is created.
            If \`WorldView\` is null, a world is created without a view.
        `);
    action("No world by default", () => {
      const stage = new Stage({ game: {} });
      logger.log("world:", stage.world);
      logger.log("worldView:", stage.worldView);
    });
    action("Custom WorldView", () => {
      class MyWorldView extends WorldView {
        onStart() {
          super.onStart();
          logger.log("Custom world view started");
        }
      }
      class MyStage extends Stage {
      }
      __publicField(MyStage, "World", World);
      __publicField(MyStage, "WorldView", MyWorldView);
      const app = new PerkyModule();
      const stage = app.create(MyStage, { game: {} });
      logger.log("worldView type:", stage.worldView.constructor.name);
    });
  });
  section("Subclassing", () => {
    text(`
            Override update and render for stage-specific behavior.
            Access the world through \`this.world\` and the game through \`this.game\`.
        `);
    code("Game stage example", () => {
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
  stage_doc as default
};
