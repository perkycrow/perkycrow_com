import { d as doc, t as text, s as section, a as action, l as logger, c as code } from "./runtime-DOmi4lo7.js";
import { P as PerkyModule } from "./perky_module-DrWJO8l1.js";
import { W as World } from "./world-puEwPQwr.js";
import { E as Entity } from "./entity-CLtZfNQW.js";
import "./registry-CF_H4IOw.js";
import "./observable_map-BPZFGUWq.js";
import "./observable_set-BOSKLaPv.js";
import "./utils-DVCexGPz.js";
import "./inflector-BxOpyWLP.js";
import "./vec2-BvD8ope7.js";
const entity_doc = doc("Entity", () => {
  text(`
        Base class for game objects in a [[World@game]].
        Provides position and velocity vectors. Subclass to add game-specific behavior.
    `);
  section("Basic Usage", () => {
    text(`
            Create entities directly or through a World.
        `);
    action("Create entity", () => {
      const entity = new Entity({ x: 5, y: 3 });
      logger.log("x:", entity.x);
      logger.log("y:", entity.y);
      logger.log("position:", entity.position.x, entity.position.y);
    });
    action("In a World", () => {
      const app = new PerkyModule();
      const world = app.create(World);
      const entity = world.create(Entity, { x: 10, y: 20 });
      logger.log("x:", entity.x);
      logger.log("y:", entity.y);
    });
  });
  section("Position & Velocity", () => {
    text(`
            Position and velocity are [[Vec2@math]] instances.
            Shorthand x/y properties access position directly.
        `);
    action("Position access", () => {
      const entity = new Entity({ x: 0, y: 0 });
      entity.x = 5;
      entity.y = 3;
      logger.log("via x/y:", entity.x, entity.y);
      logger.log("via position:", entity.position.x, entity.position.y);
      entity.position.set(10, 20);
      logger.log("after set:", entity.x, entity.y);
    });
    action("Velocity", () => {
      const entity = new Entity();
      entity.velocity.set(2, -1);
      logger.log("velocity:", entity.velocity.x, entity.velocity.y);
    });
  });
  section("Subclassing", () => {
    text(`
            Extend Entity to create game-specific objects.
            Override update() for per-frame behavior.
        `);
    code("Custom entity", () => {
    });
    code("With physics", () => {
    });
  });
  section("API", () => {
    code("Constructor", () => {
      new Entity({
        x: 0,
        // Initial x position (default: 0)
        y: 0
        // Initial y position (default: 0)
      });
    });
    code("Properties", () => {
    });
    code("Methods", () => {
    });
  });
});
export {
  entity_doc as default
};
