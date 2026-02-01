import { d as doc, t as text, s as section, c as code } from "./runtime-DOmi4lo7.js";
const canvas_rectangle_renderer_doc = doc("CanvasRectangleRenderer", { advanced: true }, () => {
  text(`
        Canvas 2D renderer for [[Rectangle@render]] objects. Extends [[CanvasObjectRenderer@render/canvas]]
        and is registered automatically by [[CanvasRenderer@canvas_renderer]].
    `);
  section("Handled Types", () => {
    text("Renders [[Rectangle@render]] objects.");
    code("Registration", () => {
    });
  });
  section("Rendering", () => {
    text(`
            Draws a filled rectangle using \`ctx.fillRect\`. Applies the anchor offset
            so the rectangle is positioned relative to its anchor point. Skips the fill
            if the color is \`null\` or \`'transparent'\`. Adds a stroke if \`strokeWidth\`
            is greater than zero.
        `);
    code("Render call", () => {
    });
  });
});
export {
  canvas_rectangle_renderer_doc as default
};
