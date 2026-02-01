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
class VignettePass extends RenderPass {
}
__publicField(VignettePass, "$name", "vignettePass");
__publicField(VignettePass, "shaderDefinition", {
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
            precision highp float;
            uniform sampler2D uTexture;
            uniform float uIntensity;
            uniform float uSmoothness;
            uniform float uRoundness;
            uniform vec3 uColor;
            in vec2 vTexCoord;
            out vec4 fragColor;

            float dither(vec2 coord) {
                return (fract(sin(dot(coord, vec2(12.9898, 78.233))) * 43758.5453) - 0.5) / 255.0;
            }

            void main() {
                vec4 color = texture(uTexture, vTexCoord);
                vec2 uv = vTexCoord * 2.0 - 1.0;

                uv.x *= mix(1.0, 0.7, uRoundness);

                float dist = dot(uv, uv);

                float vignette = 1.0 - dist * uIntensity;
                vignette = smoothstep(0.0, uSmoothness, vignette);

                vec3 finalColor = mix(uColor, color.rgb, vignette);
                finalColor += dither(gl_FragCoord.xy);

                fragColor = vec4(finalColor, color.a);
            }
        `,
  uniforms: ["uTexture", "uIntensity", "uSmoothness", "uRoundness", "uColor"],
  attributes: ["aPosition", "aTexCoord"]
});
__publicField(VignettePass, "defaultUniforms", {
  uIntensity: 0.4,
  uSmoothness: 0.8,
  uRoundness: 0.5,
  uColor: [0, 0, 0]
});
__publicField(VignettePass, "uniformConfig", {
  uIntensity: { min: 0, max: 1, step: 0.01 },
  uSmoothness: { min: 0, max: 2, step: 0.01 },
  uRoundness: { min: 0, max: 1, step: 0.01 },
  uColor: { type: "color" }
});
const vignette_pass_doc = doc("VignettePass", { advanced: true }, () => {
  text(`
        Darkens the edges of the screen to draw attention to the center. Extends
        [[RenderPass@render/postprocessing]] with a vignette fragment shader that
        supports configurable intensity, smoothness, roundness, and color.
    `);
  section("Uniforms", () => {
    text(`
            - \`uIntensity\` — how strong the darkening is (0 = off, 1 = full).
            - \`uSmoothness\` — transition width between dark and light.
            - \`uRoundness\` — 0 = wide ellipse, 1 = circular.
            - \`uColor\` — vignette color as an RGB array (default black).
        `);
    action("Default values", () => {
      const pass = new VignettePass();
      logger.log("intensity:", pass.uniforms.uIntensity);
      logger.log("smoothness:", pass.uniforms.uSmoothness);
      logger.log("roundness:", pass.uniforms.uRoundness);
      logger.log("color:", pass.uniforms.uColor);
    });
    code("Customize", () => {
      const pass = new VignettePass();
      pass.setUniform("uIntensity", 0.6);
      pass.setUniform("uSmoothness", 1.2);
      pass.setUniform("uColor", [0.1, 0, 0.05]);
    });
  });
});
export {
  vignette_pass_doc as default
};
