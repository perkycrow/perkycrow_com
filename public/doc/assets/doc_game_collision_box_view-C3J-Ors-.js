import { d as doc, t as text, s as section, c as code, a as action, l as logger } from "./runtime-DOmi4lo7.js";
import { E as EntityView } from "./entity_view-IA5mL-_k.js";
import { R as Rectangle } from "./rectangle-CaoTFuaL.js";
import { E as Entity } from "./entity-CLtZfNQW.js";
import "./object_2d-DKcr5oBk.js";
import "./transform-DC3tDXed.js";
import "./perky_module-DrWJO8l1.js";
import "./registry-CF_H4IOw.js";
import "./observable_map-BPZFGUWq.js";
import "./observable_set-BOSKLaPv.js";
import "./utils-DVCexGPz.js";
import "./inflector-BxOpyWLP.js";
import "./vec2-BvD8ope7.js";
class CollisionBoxView extends EntityView {
  constructor(entity, context) {
    super(entity, context);
    const config = context.config || {};
    this.root = new Rectangle({
      x: entity.x,
      y: entity.y,
      width: config.width ?? 1,
      height: config.height ?? 1,
      color: "transparent",
      strokeColor: config.strokeColor ?? "#ff0000",
      strokeWidth: config.strokeWidth ?? 2
    });
  }
}
const collision_box_view_doc = doc("CollisionBoxView", () => {
  text(`
        Debug view that renders a rectangle outline around an entity.
        Useful for visualizing collision boundaries during development.
    `);
  section("Usage", () => {
    text(`
            Register CollisionBoxView in a [[WorldView@game]] to show collision boxes
            for specific entities.
        `);
    code("Register with WorldView", () => {
    });
    action("Create directly", () => {
      const entity = new Entity({ x: 5, y: 3 });
      const view = new CollisionBoxView(entity, {
        config: {
          width: 2,
          height: 1.5,
          strokeColor: "#00ff00",
          strokeWidth: 3
        }
      });
      logger.log("root width:", view.root.width);
      logger.log("root height:", view.root.height);
      logger.log("stroke color:", view.root.strokeColor);
      logger.log("stroke width:", view.root.strokeWidth);
      logger.log("fill color:", view.root.color);
    });
  });
  section("API", () => {
    code("Constructor", () => {
    });
  });
});
export {
  collision_box_view_doc as default
};
