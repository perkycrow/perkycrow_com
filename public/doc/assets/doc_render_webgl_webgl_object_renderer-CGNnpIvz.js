import { d as doc, t as text, s as section, c as code } from "./runtime-DOmi4lo7.js";
const webgl_object_renderer_doc = doc("WebGLObjectRenderer", { advanced: true }, () => {
  text(`
        Base class for all WebGL object renderers. Provides the collect/flush
        pattern: during scene traversal, objects are collected with their opacity
        and hints, then flushed in a single batch at the end of the frame.

        Subclass this to create renderers for new object types. Register them
        with the WebGL renderer via its renderer registry.
    `);
  section("Lifecycle", () => {
    text(`
            The renderer lifecycle follows three steps each frame:

            1. \`reset()\` — clears the collected objects list
            2. \`collect(object, opacity, hints)\` — called for each visible object during traversal
            3. \`flush(matrices)\` — draws everything at once, override this in subclasses
        `);
    code("Subclass example", () => {
    });
  });
  section("handles", () => {
    text(`
            Static getter that returns an array of object classes this renderer
            handles. The renderer registry uses this to route objects to the
            correct renderer during traversal.
        `);
    code("Declaring handles", () => {
    });
  });
  section("Disposal", () => {
    text(`
            Call \`dispose()\` to release GPU resources. The base implementation
            clears the collected list and nulls the GL context. Subclasses should
            clean up their own buffers and call \`super.dispose()\`.
        `);
  });
});
export {
  webgl_object_renderer_doc as default
};
