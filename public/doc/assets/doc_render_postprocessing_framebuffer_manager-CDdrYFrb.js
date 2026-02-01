import { d as doc, t as text, s as section, c as code } from "./runtime-DOmi4lo7.js";
import { F as FramebufferManager } from "./framebuffer_manager-B0HWqNfE.js";
const framebuffer_manager_doc = doc("FramebufferManager", { advanced: true }, () => {
  text(`
        Manages WebGL2 framebuffers for post-processing. Provides an MSAA scene buffer,
        a resolve target, a ping-pong pair for chaining passes, and named buffers for
        custom render targets.
    `);
  section("Pipeline", () => {
    text(`
            The typical flow:

            1. \`bindSceneBuffer()\` — render the scene into the MSAA framebuffer.
            2. \`resolveSceneBuffer()\` — blit MSAA into a regular texture.
            3. For each pass: \`bindPingPong()\`, render, \`swapAndGetTexture()\`.
            4. \`bindScreen()\` — final output to the default framebuffer.
        `);
    code("Post-processing loop", () => {
      const fbm2 = new FramebufferManager(gl, 800, 600);
      fbm2.bindSceneBuffer();
      fbm2.resolveSceneBuffer();
      fbm2.resetPingPong();
      let input = fbm2.getSceneTexture();
      for (const pass of passes) {
        fbm2.bindPingPong();
        pass.render(gl, input, fullscreenQuad);
        input = fbm2.swapAndGetTexture();
      }
      fbm2.bindScreen();
    });
  });
  section("Named Buffers", () => {
    text(`
            Create additional framebuffer/texture pairs by name. Useful for render groups
            or multi-pass techniques that need intermediate storage.
        `);
    code("Named buffer usage", () => {
      const fbm2 = new FramebufferManager(gl, 800, 600);
      fbm2.getOrCreateBuffer("shadow");
      fbm2.bindBuffer("shadow");
      fbm2.getBufferTexture("shadow");
      fbm2.disposeBuffer("shadow");
    });
  });
  section("Resize and Disposal", () => {
    text(`
            Call \`resize()\` when the canvas dimensions change — all framebuffers are
            recreated. Call \`dispose()\` to free all GPU resources.
        `);
    code("Resize", () => {
      fbm.resize(1024, 768);
    });
  });
});
export {
  framebuffer_manager_doc as default
};
