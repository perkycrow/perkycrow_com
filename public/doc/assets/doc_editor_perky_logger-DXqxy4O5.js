import { d as doc, t as text, c as code, s as section, a as action, l as logger } from "./runtime-DOmi4lo7.js";
import { V as Vec2 } from "./vec2-BvD8ope7.js";
const perky_logger_doc = doc("PerkyLogger", { advanced: true }, () => {
  text(`
        Web component for displaying log messages.
        Automatically syncs with the global \`logger\` instance.
    `);
  code("Usage", () => {
    logger.log("Hello world");
  });
  section("Log types", () => {
    text("Different log types have different visual indicators.");
    action("info", () => {
      logger.info("This is an info message");
    });
    action("notice", () => {
      logger.notice("This is a notice message");
    });
    action("warn", () => {
      logger.warn("This is a warning message");
    });
    action("error", () => {
      logger.error("This is an error message");
    });
    action("success", () => {
      logger.success("This is a success message");
    });
  });
  section("Formatting", () => {
    text("The logger supports titles and spacers for organization.");
    action("title", () => {
      logger.title("Section Title");
      logger.log("Content under title");
    });
    action("spacer", () => {
      logger.log("Before spacer");
      logger.spacer();
      logger.log("After spacer");
    });
    action("clear", () => {
      logger.clear();
      logger.log("Logger cleared");
    });
  });
  section("Rich objects", () => {
    text("Objects, arrays, and [[Vec2@math]] are rendered with special formatting.");
    action("Object", () => {
      logger.log("user:", { name: "Alice", age: 30, active: true });
    });
    action("Array", () => {
      logger.log("items:", ["sword", "shield", "potion"]);
    });
    action("Vec2", () => {
      const position = new Vec2(100, 200);
      logger.log("position:", position);
    });
    action("Nested", () => {
      logger.log("data:", {
        player: { name: "Bob", pos: new Vec2(10, 20) },
        inventory: ["gold", "key"]
      });
    });
  });
  section("Multiple arguments", () => {
    text("All log methods accept multiple arguments.");
    action("Multiple values", () => {
      const x = 42;
      const y = "hello";
      logger.log("x:", x, "y:", y);
    });
    action("Mixed types", () => {
      logger.info("Position:", new Vec2(5, 10), "Score:", 100);
    });
  });
});
export {
  perky_logger_doc as default
};
