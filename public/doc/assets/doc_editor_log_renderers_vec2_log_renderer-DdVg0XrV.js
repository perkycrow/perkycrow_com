import { d as doc, t as text, s as section, c as code, b as action, l as logger } from "./runtime-DVl2nrG4.js";
import { V as Vec2 } from "./vec2-BvD8ope7.js";
import "./vec2_log_renderer-CHeUJOoI.js";
const vec2_log_renderer_doc = doc("Vec2LogRenderer", { advanced: true }, () => {
  text(`
        Custom log renderer for [[Vec2@math]] objects. Displays vector components
        in a formatted badge when logged to [[PerkyLogger@editor]].
    `);
  section("Basic Usage", () => {
    text(`
            Import the renderer to register it. Vec2 objects logged via
            \`logger.log()\` will display with formatted x/y values.
        `);
    code("Setup", () => {
      const position = new Vec2(10, 20);
      logger.log("Position:", position);
    });
    action("Log Vec2", () => {
      const position = new Vec2(100, 250);
      logger.log("Position:", position);
    });
  });
  section("Decimal Formatting", () => {
    text("Float values are rounded to 2 decimal places for readability.");
    action("Log floats", () => {
      const velocity = new Vec2(3.14159, -2.71828);
      logger.log("Velocity:", velocity);
    });
  });
  section("Multiple Vectors", () => {
    text("Multiple Vec2 objects can be logged in a single call.");
    action("Log multiple", () => {
      const start = new Vec2(0, 0);
      const end = new Vec2(100, 50);
      logger.log("From", start, "to", end);
    });
  });
});
export {
  vec2_log_renderer_doc as default
};
