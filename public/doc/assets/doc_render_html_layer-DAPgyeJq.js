import { d as doc, t as text, s as section, c as code, a as action, l as logger } from "./runtime-DOmi4lo7.js";
import { H as HTMLLayer } from "./html_layer-BdWoJ3oM.js";
import { C as Camera } from "./camera-DKv4MCkL.js";
import "./layer-BMQTRr4-.js";
import "./perky_module-DrWJO8l1.js";
import "./registry-CF_H4IOw.js";
import "./observable_map-BPZFGUWq.js";
import "./observable_set-BOSKLaPv.js";
import "./utils-DVCexGPz.js";
import "./inflector-BxOpyWLP.js";
import "./dom_utils-DTpHkHXB.js";
import "./easing-1o033h_w.js";
const html_layer_doc = doc("HTMLLayer", () => {
  text(`
        DOM-based render layer for HTML elements positioned in world space.
        Extends [[Layer@render]]. Useful for labels, health bars, tooltips, or
        anything easier to build with HTML than canvas. Managed by [[RenderSystem@render]].
    `);
  section("Creation", () => {
    text("Create an HTML layer with optional content and class name.");
    code("Basic layer", () => {
      new HTMLLayer({ $id: "ui" });
    });
    code("With options", () => {
      new HTMLLayer({
        $id: "labels",
        className: "game-labels",
        zIndex: 10,
        pointerEvents: "none"
      });
    });
  });
  section("Content", () => {
    text("Set the layer content as a string or DOM element.");
    action("String content", () => {
      const layer2 = new HTMLLayer({ $id: "test" });
      layer2.setContent('<div style="color:#fff">Hello</div>');
      logger.log("innerHTML:", layer2.div.innerHTML);
    });
    action("DOM element", () => {
      const layer2 = new HTMLLayer({ $id: "test" });
      const el = document.createElement("span");
      el.textContent = "world";
      layer2.setContent(el);
      logger.log("children:", layer2.div.children.length);
    });
  });
  section("CSS Classes and Styles", () => {
    text("Manipulate classes and inline styles. All methods return `this` for chaining.");
    action("addClass / removeClass", () => {
      const layer2 = new HTMLLayer({ $id: "test" });
      layer2.addClass("active").addClass("highlighted");
      logger.log("classes:", layer2.div.className);
      layer2.removeClass("highlighted");
      logger.log("after remove:", layer2.div.className);
    });
    action("setStyle", () => {
      const layer2 = new HTMLLayer({ $id: "test" });
      layer2.setStyle("background", "#1a1a2e");
      logger.log("background:", layer2.div.style.background);
    });
  });
  section("World Elements", () => {
    text(`
            Place DOM elements at world coordinates. The layer converts world positions
            to screen positions using the camera and updates transforms each frame.
        `);
    action("createWorldElement / removeWorldElement", () => {
      const camera = new Camera({
        $id: "main",
        viewportWidth: 800,
        viewportHeight: 600,
        unitsInView: 10
      });
      const layer2 = new HTMLLayer({ $id: "test", camera });
      const el = layer2.createWorldElement("label", 0, 0);
      logger.log("world elements:", layer2.worldElements.length);
      layer2.removeWorldElement(el);
      logger.log("after remove:", layer2.worldElements.length);
    });
    code("World element options", () => {
      layer.createWorldElement("HP: 100", 5, 3, {
        offsetX: 0,
        offsetY: -20,
        autoCenter: true,
        pointerEvents: "none"
      });
    });
  });
  section("Unit Conversion", () => {
    text("Convert between CSS pixels and world units using the camera.");
    action("cssToWorldUnits / worldUnitsToCss", () => {
      const camera = new Camera({
        $id: "main",
        viewportWidth: 800,
        viewportHeight: 600,
        unitsInView: 10
      });
      const layer2 = new HTMLLayer({ $id: "test", camera });
      logger.log("100px in world:", layer2.cssToWorldUnits(100));
      logger.log("1 unit in css:", layer2.worldUnitsToCss(1));
    });
  });
});
export {
  html_layer_doc as default
};
