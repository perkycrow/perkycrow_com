import { d as doc, t as text, s as section, c as code } from "./runtime-DOmi4lo7.js";
import { C as CanvasObjectRenderer } from "./canvas_object_renderer-DluJQ6Jr.js";
const canvas_object_renderer_doc = doc("CanvasObjectRenderer", { advanced: true }, () => {
  text(`
        Base class for Canvas 2D object renderers. Each renderer declares which object types
        it handles via the static \`handles\` getter. [[CanvasRenderer@canvas_renderer]] uses this
        to route objects during traversal.
    `);
  section("Lifecycle", () => {
    text(`
            A renderer is initialized with a render context via \`init()\`, then participates in the
            collect/flush cycle each frame. \`collect()\` gathers objects during traversal.
            \`flush()\` draws them all at once. \`reset()\` clears the collected list between frames.
        `);
    code("Collect and flush", () => {
      const renderer = new CanvasObjectRenderer();
      renderer.reset();
    });
  });
  section("Subclassing", () => {
    text(`
            Override the \`render(object, ctx, hints)\` method to draw a specific object type.
            The base \`flush()\` applies world matrix transforms and opacity before calling
            \`render()\` for each collected object.
        `);
    code("Handled types", () => {
    });
  });
});
export {
  canvas_object_renderer_doc as default
};
