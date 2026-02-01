import { d as doc, t as text, s as section, c as code, a as action, l as logger } from "./runtime-DOmi4lo7.js";
import { R as RenderPass } from "./render_pass-BS2aKKkd.js";
import "./perky_module-DrWJO8l1.js";
import "./registry-CF_H4IOw.js";
import "./observable_map-BPZFGUWq.js";
import "./observable_set-BOSKLaPv.js";
import "./utils-DVCexGPz.js";
import "./inflector-BxOpyWLP.js";
const render_pass_doc = doc("RenderPass", { advanced: true }, () => {
  text(`
        Base class for post-processing passes. Extends [[PerkyModule@core]] with shader
        compilation, uniform management, and a standard render method that draws a
        fullscreen quad with the input texture.

        Subclass this to create custom passes like vignette, bloom, or color grading.
    `);
  section("Creating a Pass", () => {
    text(`
            Define a static \`shaderDefinition\` with vertex/fragment GLSL, uniforms, and
            attributes. Set \`defaultUniforms\` for initial values and \`uniformConfig\` for
            inspector metadata.
        `);
    code("Subclass example", () => {
    });
  });
  section("Uniforms", () => {
    text(`
            Read and write uniform values with \`uniforms\` and \`setUniform()\`.
            Values are applied automatically during \`render()\`. Supports floats,
            vec2, vec3, and vec4 (as arrays).
        `);
    action("Default uniforms", () => {
      const pass2 = new RenderPass();
      logger.log("uniforms:", pass2.uniforms);
      logger.log("enabled:", pass2.enabled);
    });
    code("Set a uniform", () => {
      pass.setUniform("uIntensity", 0.5);
      pass.setUniform("uColor", [1, 0, 0]);
    });
  });
  section("Enable / Disable", () => {
    text("Toggle a pass on or off. Disabled passes are skipped during rendering.");
    action("Toggle enabled", () => {
      const pass2 = new RenderPass();
      logger.log("enabled:", pass2.enabled);
      pass2.enabled = false;
      logger.log("enabled:", pass2.enabled);
    });
  });
});
export {
  render_pass_doc as default
};
