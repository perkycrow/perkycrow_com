import { d as doc, t as text, s as section, c as code, a as action, l as logger } from "./runtime-DOmi4lo7.js";
import { A as AutoView } from "./auto_view-DDTLPjwG.js";
import { E as Entity } from "./entity-CLtZfNQW.js";
import { C as Circle } from "./circle-CP_IlbCy.js";
import { R as Rectangle } from "./rectangle-CaoTFuaL.js";
import "./entity_view-IA5mL-_k.js";
import "./perky_module-DrWJO8l1.js";
import "./registry-CF_H4IOw.js";
import "./observable_map-BPZFGUWq.js";
import "./observable_set-BOSKLaPv.js";
import "./utils-DVCexGPz.js";
import "./inflector-BxOpyWLP.js";
import "./vec2-BvD8ope7.js";
import "./object_2d-DKcr5oBk.js";
import "./transform-DC3tDXed.js";
const auto_view_doc = doc("AutoView", () => {
  text(`
        Used internally by [[WorldView@game]] when you register an Object2D class
        directly instead of a custom [[EntityView@game]].
        Creates the render object and syncs properties based on a config.
    `);
  section("How It Works", () => {
    text(`
            When you register an entity class with an Object2D class in WorldView,
            AutoView is used behind the scenes. It creates the render object and
            applies sync bindings each frame.
        `);
    code("WorldView registration", () => {
    });
  });
  section("Sync Bindings", () => {
    text(`
            AutoView supports two types of sync bindings:
            - **String binding**: Maps an entity property name to a render object property
            - **Function binding**: Computes a value from the entity each frame
        `);
    action("String bindings", () => {
      class Spinner extends Entity {
        constructor(options = {}) {
          super(options);
          this.angle = 0;
        }
      }
      const entity = new Spinner({ x: 0, y: 0 });
      entity.angle = 1.5;
      const view = new AutoView(entity, {
        ObjectClass: Rectangle,
        config: {
          width: 2,
          height: 0.5,
          sync: { rotation: "angle" }
        }
      });
      view.sync();
      logger.log("rotation:", view.root.rotation);
    });
    action("Function bindings", () => {
      class HealthOrb extends Entity {
        constructor(options = {}) {
          super(options);
          this.health = options.health ?? 100;
          this.maxHealth = 100;
        }
      }
      const entity = new HealthOrb({ x: 0, y: 0, health: 50 });
      const view = new AutoView(entity, {
        ObjectClass: Circle,
        config: {
          radius: 1,
          sync: { opacity: (e) => e.health / e.maxHealth }
        }
      });
      view.sync();
      logger.log("opacity:", view.root.opacity);
    });
  });
  section("API", () => {
    code("Constructor", () => {
    });
    code("Methods", () => {
    });
  });
});
export {
  auto_view_doc as default
};
