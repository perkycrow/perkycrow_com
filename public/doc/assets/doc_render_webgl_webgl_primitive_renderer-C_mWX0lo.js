import { d as doc, t as text, s as section, c as code } from "./runtime-DOmi4lo7.js";
const webgl_primitive_renderer_doc = doc("WebGLPrimitiveRenderer", { advanced: true }, () => {
  text(`
        Base class for WebGL renderers that draw geometric primitives (circles,
        rectangles). Extends [[WebGLObjectRenderer@render/webgl]] with a shared vertex
        buffer and automatic primitive shader setup.

        Subclasses override \`renderObject(object, opacity)\` to emit vertices
        for their specific shape. The base \`flush()\` handles program binding
        and projection/view uniforms.
    `);
  section("How It Works", () => {
    text(`
            On \`init()\`, a GPU vertex buffer is created. When \`flush()\` is called,
            the primitive shader is bound with projection and view matrices, then
            each collected object is passed to \`renderObject()\`.

            Subclasses write vertices into the shared buffer and issue draw calls
            per object. See [[WebGLCircleRenderer@render/webgl]] and
            [[WebGLRectangleRenderer@render/webgl]] for concrete implementations.
        `);
    code("Subclass pattern", () => {
    });
  });
  section("Disposal", () => {
    text(`
            \`dispose()\` deletes the vertex buffer and calls through to
            the base class cleanup.
        `);
  });
});
export {
  webgl_primitive_renderer_doc as default
};
