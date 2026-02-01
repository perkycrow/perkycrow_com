import { d as doc, t as text, s as section, c as code } from "./runtime-DOmi4lo7.js";
const canvas_circle_renderer_doc = doc("CanvasCircleRenderer", { advanced: true }, () => {
  text(`
        Canvas 2D renderer for [[Circle@render]] objects. Extends [[CanvasObjectRenderer@render/canvas]]
        and is registered automatically by [[CanvasRenderer@canvas_renderer]].
    `);
  section("Handled Types", () => {
    text("Renders [[Circle@render]] objects.");
    code("Registration", () => {
    });
  });
  section("Rendering", () => {
    text(`
            Draws a filled circle using \`ctx.arc\`. Applies the anchor offset so
            the circle is positioned relative to its anchor point. Adds a stroke
            if \`strokeWidth\` is greater than zero.
        `);
    code("Render call", () => {
    });
  });
});
export {
  canvas_circle_renderer_doc as default
};
