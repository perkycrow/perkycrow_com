import { d as doc, t as text, s as section, a as action, l as logger } from "./runtime-DOmi4lo7.js";
import { d as detectCollision, i as isBoxVsBox, a as isCircleVsCircle, b as isBoxVsCircle } from "./collision_detector-Cho9AUWv.js";
import { B as BoxShape } from "./box_shape-CWzcqXFu.js";
import { C as CircleShape } from "./circle_shape-BiEBFeak.js";
const collision_detector_doc = doc("CollisionDetector", () => {
  text(`
        Pure functions for detecting collisions between shapes.
        Supports box-box, circle-circle, and box-circle pairs.
        Returns collision info (depth, normal, contact point) or null.
    `);
  section("Box vs Box", () => {
    action("Overlapping boxes", () => {
      const a = new BoxShape({ width: 40, height: 40, x: 0, y: 0 });
      const b = new BoxShape({ width: 40, height: 40, x: 30, y: 0 });
      const result = detectCollision(a, b);
      logger.log("depth:", result.depth);
      logger.log("normal:", result.normal);
      logger.log("contact:", result.contactPoint);
    });
    action("No collision", () => {
      const a = new BoxShape({ width: 20, height: 20, x: 0, y: 0 });
      const b = new BoxShape({ width: 20, height: 20, x: 100, y: 0 });
      logger.log("result:", detectCollision(a, b));
    });
  });
  section("Circle vs Circle", () => {
    action("Overlapping circles", () => {
      const a = new CircleShape({ radius: 20, x: 0, y: 0 });
      const b = new CircleShape({ radius: 20, x: 30, y: 0 });
      const result = detectCollision(a, b);
      logger.log("depth:", result.depth);
      logger.log("normal:", result.normal);
      logger.log("contact:", result.contactPoint);
    });
    action("No collision", () => {
      const a = new CircleShape({ radius: 10, x: 0, y: 0 });
      const b = new CircleShape({ radius: 10, x: 50, y: 0 });
      logger.log("result:", detectCollision(a, b));
    });
  });
  section("Box vs Circle", () => {
    action("Circle hitting box", () => {
      const box = new BoxShape({ width: 60, height: 60, x: 0, y: 0 });
      const circle = new CircleShape({ radius: 15, x: 35, y: 0 });
      const result = detectCollision(box, circle);
      logger.log("depth:", result.depth);
      logger.log("normal:", result.normal);
      logger.log("contact:", result.contactPoint);
    });
  });
  section("Shape Type Checks", () => {
    text("Helper functions to identify shape pair types.");
    action("Type checks", () => {
      const box = new BoxShape();
      const circle = new CircleShape();
      logger.log("box vs box:", isBoxVsBox(box, box));
      logger.log("circle vs circle:", isCircleVsCircle(circle, circle));
      logger.log("box vs circle:", isBoxVsCircle(box, circle));
    });
  });
});
export {
  collision_detector_doc as default
};
