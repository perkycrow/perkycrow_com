var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { d as doc, t as text, s as section, a as action, l as logger, c as code } from "./runtime-DOmi4lo7.js";
import { R as RenderPass } from "./render_pass-BS2aKKkd.js";
import "./perky_module-DrWJO8l1.js";
import "./registry-CF_H4IOw.js";
import "./observable_map-BPZFGUWq.js";
import "./observable_set-BOSKLaPv.js";
import "./utils-DVCexGPz.js";
import "./inflector-BxOpyWLP.js";
class ColorGradePass extends RenderPass {
}
__publicField(ColorGradePass, "shaderDefinition", {
  vertex: `#version 300 es
            in vec2 aPosition;
            in vec2 aTexCoord;
            out vec2 vTexCoord;
            void main() {
                gl_Position = vec4(aPosition, 0.0, 1.0);
                vTexCoord = aTexCoord;
            }
        `,
  fragment: `#version 300 es
            precision mediump float;
            uniform sampler2D uTexture;
            uniform float uBrightness;
            uniform float uContrast;
            uniform float uSaturation;
            in vec2 vTexCoord;
            out vec4 fragColor;
            void main() {
                vec4 color = texture(uTexture, vTexCoord);
                vec3 rgb = color.rgb + uBrightness;
                rgb = (rgb - 0.5) * uContrast + 0.5;
                float gray = dot(rgb, vec3(0.299, 0.587, 0.114));
                rgb = mix(vec3(gray), rgb, uSaturation);
                fragColor = vec4(clamp(rgb, 0.0, 1.0), color.a);
            }
        `,
  uniforms: ["uTexture", "uBrightness", "uContrast", "uSaturation"],
  attributes: ["aPosition", "aTexCoord"]
});
__publicField(ColorGradePass, "defaultUniforms", {
  uBrightness: 0,
  uContrast: 1,
  uSaturation: 1
});
__publicField(ColorGradePass, "uniformConfig", {
  uBrightness: { min: -0.5, max: 0.5, step: 0.01 },
  uContrast: { min: 0.5, max: 1.5, step: 0.01 },
  uSaturation: { min: 0, max: 2, step: 0.01 }
});
const color_grade_pass_doc = doc("ColorGradePass", { advanced: true }, () => {
  text(`
        Adjusts brightness, contrast, and saturation of the rendered scene. Extends
        [[RenderPass@render/postprocessing]] with a simple color grading fragment shader.
    `);
  section("Uniforms", () => {
    text(`
            - \`uBrightness\` — additive brightness offset (-0.5 to 0.5).
            - \`uContrast\` — contrast multiplier (0.5 to 1.5, 1.0 = neutral).
            - \`uSaturation\` — saturation multiplier (0 = grayscale, 1.0 = neutral, 2.0 = vivid).
        `);
    action("Default values", () => {
      const pass = new ColorGradePass();
      logger.log("brightness:", pass.uniforms.uBrightness);
      logger.log("contrast:", pass.uniforms.uContrast);
      logger.log("saturation:", pass.uniforms.uSaturation);
    });
    code("Desaturated look", () => {
      const pass = new ColorGradePass();
      pass.setUniform("uBrightness", -0.05);
      pass.setUniform("uContrast", 1.1);
      pass.setUniform("uSaturation", 0.6);
    });
  });
});
export {
  color_grade_pass_doc as default
};
