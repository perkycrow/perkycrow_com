import { d as doc, t as text, s as section, c as code, a as action, l as logger } from "./runtime-DOmi4lo7.js";
import { P as PerkyModule } from "./perky_module-DrWJO8l1.js";
import { W as World } from "./world-puEwPQwr.js";
import { E as Entity } from "./entity-CLtZfNQW.js";
import "./registry-CF_H4IOw.js";
import "./observable_map-BPZFGUWq.js";
import "./observable_set-BOSKLaPv.js";
import "./utils-DVCexGPz.js";
import "./inflector-BxOpyWLP.js";
import "./vec2-BvD8ope7.js";
const world_doc = doc("World", () => {
  text(`
        Container for game entities. Extends [[PerkyModule@core]] to manage
        entity lifecycle and updates. Provides hooks for game-specific logic.
    `);
  section("Basic Usage", () => {
    text(`
            Create a World and add entities to it using the inherited create method.
        `);
    code("Creating entities", () => {
      const app = new PerkyModule();
      const world = app.create(World);
      class Player extends Entity {
      }
      class Enemy extends Entity {
      }
      world.create(Player, { x: 0, y: 0 });
      world.create(Enemy, { x: 5, y: 0 });
    });
    action("Entities list", () => {
      const app = new PerkyModule();
      const world = app.create(World);
      class Ball extends Entity {
      }
      world.create(Ball, { x: 0, y: 0 });
      world.create(Ball, { x: 1, y: 0 });
      world.create(Ball, { x: 2, y: 0 });
      logger.log("entity count:", world.entities.length);
      for (const entity of world.entities) {
        logger.log("  entity at:", entity.x, entity.y);
      }
    });
  });
  section("Update Loop", () => {
    text(`
            Call update() each frame to update all entities.
            Override preUpdate and postUpdate for game-specific logic.
        `);
    code("Update cycle", () => {
    });
    action("Entity updates", () => {
      const app = new PerkyModule();
      const world = app.create(World);
      class MovingEntity extends Entity {
        update(deltaTime) {
          this.x += this.velocity.x * deltaTime;
          this.y += this.velocity.y * deltaTime;
        }
      }
      const entity = world.create(MovingEntity, { x: 0, y: 0 });
      entity.velocity.x = 10;
      app.start();
      logger.log("before:", entity.x);
      world.update(0.1, {});
      logger.log("after:", entity.x);
    });
  });
  section("Entity Management", () => {
    text(`
            Entities are managed as children with category 'entity'.
            Use inherited methods from [[PerkyModule@core]] to add, remove, and query entities.
        `);
    action("Remove entities", () => {
      const app = new PerkyModule();
      const world = app.create(World);
      class Ball extends Entity {
      }
      world.create(Ball, { $id: "ball1" });
      world.create(Ball, { $id: "ball2" });
      logger.log("before:", world.entities.length);
      world.removeChild("ball1");
      logger.log("after:", world.entities.length);
    });
    action("Query by tags", () => {
      const app = new PerkyModule();
      const world = app.create(World);
      world.create(Entity, { $tags: ["enemy", "flying"] });
      world.create(Entity, { $tags: ["enemy", "ground"] });
      world.create(Entity, { $tags: ["friendly"] });
      const enemies = world.childrenByTags("enemy");
      logger.log("enemies:", enemies.length);
      const flying = world.childrenByTags("flying");
      logger.log("flying:", flying.length);
    });
  });
  section("Subclassing", () => {
    text(`
            Create game-specific worlds by subclassing.
            Add spawn methods, collision handling, and game rules.
        `);
    code("Game world example", () => {
    });
  });
  section("API", () => {
    code("Properties", () => {
    });
    code("Methods", () => {
    });
    code("Inherited from PerkyModule", () => {
    });
  });
});
export {
  world_doc as default
};
