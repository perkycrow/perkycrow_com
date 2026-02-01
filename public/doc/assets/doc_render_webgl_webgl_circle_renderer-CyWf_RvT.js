import { d as doc, t as text, s as section, c as code } from "./runtime-DOmi4lo7.js";
const webgl_circle_renderer_doc = doc("WebGLCircleRenderer", { advanced: true }, () => {
  text(`
        WebGL renderer for [[Circle@render]] objects. Extends
        [[WebGLPrimitiveRenderer@render/webgl]] and generates a triangle fan
        from 32 segments to approximate a filled circle.

        Registered automatically — circles in the scene graph are routed here
        by the renderer registry when using the WebGL backend.
    `);
  section("Rendering", () => {
    text(`
            Each circle is drawn as a triangle fan. The center vertex sits at
            the anchor-adjusted origin, and 32 perimeter vertices are transformed
            through the object's world matrix. Color is parsed from the circle's
            CSS color string into normalized RGBA via [[parseColor@render/webgl/color_utils]].
        `);
    code("How circles are drawn", () => {
      const circle = new Circle({ radius: 20, color: "#ff0000" });
      circle.setPosition(100, 100);
      webglRenderer.render(scene);
    });
  });
});
export {
  webgl_circle_renderer_doc as default
};
