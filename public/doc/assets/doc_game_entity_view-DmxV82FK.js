import { d as doc, t as text, s as section, c as code, b as action, l as logger } from "./runtime-Bve5cOyN.js";
import { E as EntityView } from "./entity_view-IA5mL-_k.js";
import { E as Entity } from "./entity-Ef6FMHia.js";
import { G as Group2D } from "./group_2d-B-hGIEMS.js";
import { C as Circle } from "./circle-CP_IlbCy.js";
import "./perky_module-CDYsQSv9.js";
import "./registry-BmMVxDIp.js";
import "./observable_map-CRpP7ZPx.js";
import "./observable_set-BwzSVQHh.js";
import "./utils-Bje3PFeD.js";
import "./inflector-BxOpyWLP.js";
import "./vec2-BvD8ope7.js";
import "./object_2d-DKcr5oBk.js";
import "./transform-DC3tDXed.js";
const entity_view_doc = doc("EntityView", () => {
  text(`
        Base class for visual representations of entities.
        Subclass EntityView when you need custom rendering logic or complex visuals.
        For simple cases, use [[WorldView@game]] auto-registration with Object2D classes instead.
    `);
  section("Basic Structure", () => {
    text(`
            An EntityView connects an [[Entity@game]] to a render graph node.
            Override the constructor to build your visual hierarchy.
        `);
    code("Minimal view", () => {
    });
    code("Complex view", () => {
    });
  });
  section("Sync", () => {
    text(`
            The sync method is called each frame to update the render object.
            By default it copies x/y from entity to root. Override for custom behavior.
        `);
    action("Default sync", () => {
      const entity2 = new Entity({ x: 5, y: 3 });
      const view = new EntityView(entity2, {});
      view.root = new Circle({ radius: 1 });
      logger.log("before sync:");
      logger.log("  root.x:", view.root.x);
      logger.log("  root.y:", view.root.y);
      view.sync();
      logger.log("after sync:");
      logger.log("  root.x:", view.root.x);
      logger.log("  root.y:", view.root.y);
    });
    code("Custom sync", () => {
    });
  });
  section("Dispose", () => {
    text(`
            Called when the entity is removed from the world.
            Removes the root from its parent group and cleans up references.
        `);
    action("Dispose behavior", () => {
      const entity2 = new Entity({ x: 0, y: 0 });
      const group = new Group2D();
      const view = new EntityView(entity2, { group });
      view.root = new Circle({ radius: 1 });
      group.add(view.root);
      logger.log("before dispose:");
      logger.log("  group children:", group.children.length);
      logger.log("  view.root:", view.root !== null);
      view.dispose();
      logger.log("after dispose:");
      logger.log("  group children:", group.children.length);
      logger.log("  view.root:", view.root);
    });
  });
  section("API", () => {
    code("Constructor", () => {
      const view = new EntityView(entity, context);
      view.root = new Circle({ radius: 1 });
    });
    code("Properties", () => {
    });
    code("Methods", () => {
    });
  });
});
export {
  entity_view_doc as default
};
