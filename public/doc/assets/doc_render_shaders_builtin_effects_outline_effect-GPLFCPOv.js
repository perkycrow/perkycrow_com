import { d as doc, t as text, s as section, a as action, l as logger } from "./runtime-DOmi4lo7.js";
import { O as OutlineEffect } from "./outline_effect-BukJkiIl.js";
import "./shader_effect-DOeCHK4c.js";
const outline_effect_doc = doc("OutlineEffect (Shader)", { advanced: true }, () => {
  text(`
        GPU-side outline effect for sprites. Extends [[ShaderEffect@render/shaders]]
        and injects a GLSL fragment snippet that samples neighboring texels to
        detect edges, then draws a white outline around the sprite's silhouette.

        This is the shader-level counterpart to [[OutlineEffect@render/sprite_effects]]
        which operates at a higher level. Use this one for GPU-accelerated outlines
        that compose with other shader effects.
    `);
  section("How It Works", () => {
    text(`
            The fragment snippet checks if the current texel is transparent
            (\`alpha < 0.5\`). If any of its four cardinal neighbors has alpha,
            the texel is on the edge and gets colored white. The \`width\`
            parameter controls how far the sampling reaches (scaled by texel
            size).
        `);
  });
  section("Configuration", () => {
    text("The only parameter is `width`, which defaults to `0.02`.");
    action("Default outline", () => {
      const effect = new OutlineEffect();
      logger.log("type:", effect.type);
      logger.log("width:", effect.width);
      logger.log("params:", effect.getParams());
    });
    action("Custom width", () => {
      const effect = new OutlineEffect({ width: 0.05 });
      logger.log("width:", effect.width);
      logger.log("params:", effect.getParams());
    });
  });
});
export {
  outline_effect_doc as default
};
