import { d as doc, t as text, s as section, a as action, l as logger } from "./runtime-DOmi4lo7.js";
import { p as parseColor } from "./color_utils-4JeeBuMN.js";
const color_utils_doc = doc("ColorUtils", { advanced: true }, () => {
  text(`
        Utility for parsing color strings into normalized RGBA objects.
        Used internally by WebGL renderers to convert CSS-style colors into
        GPU-friendly values (0 to 1 range).
    `);
  section("Hex Colors", () => {
    text("Parses 6-digit hex strings into normalized RGBA.");
    action("Parse hex colors", () => {
      logger.log(parseColor("#ff0000"));
      logger.log(parseColor("#00ff00"));
      logger.log(parseColor("#ffffff"));
    });
  });
  section("HSL Colors", () => {
    text("Parses `hsl(h, s%, l%)` strings with automatic RGB conversion.");
    action("Parse HSL colors", () => {
      logger.log(parseColor("hsl(0, 100, 50)"));
      logger.log(parseColor("hsl(120, 50, 50)"));
      logger.log(parseColor("hsl(0, 0, 100)"));
    });
  });
  section("Fallback", () => {
    text("Unrecognized formats return black.");
    action("Invalid input", () => {
      logger.log(parseColor("not-a-color"));
    });
  });
});
export {
  color_utils_doc as default
};
