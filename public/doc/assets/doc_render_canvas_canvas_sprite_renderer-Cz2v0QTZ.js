import { d as doc, t as text, s as section, c as code } from "./runtime-DOmi4lo7.js";
const canvas_sprite_renderer_doc = doc("CanvasSpriteRenderer", { advanced: true }, () => {
  text(`
        Canvas 2D renderer for [[Sprite@render]] objects. Extends [[CanvasObjectRenderer@render/canvas]]
        and is registered automatically by [[CanvasRenderer@canvas_renderer]].
    `);
  section("Handled Types", () => {
    text("Renders [[Sprite@render]] objects. The renderer checks the static `handles` getter to match object types.");
    code("Registration", () => {
    });
  });
  section("Rendering", () => {
    text(`
            Draws the sprite's current texture region onto the canvas context.
            Skips rendering if the region or image is missing or not yet loaded.
            The image is flipped vertically to match the Y-up coordinate system.
        `);
    code("Render call", () => {
    });
  });
});
export {
  canvas_sprite_renderer_doc as default
};
