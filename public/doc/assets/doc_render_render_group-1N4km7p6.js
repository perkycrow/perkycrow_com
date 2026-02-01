import { d as doc, t as text, s as section, a as action, l as logger, c as code } from "./runtime-DOmi4lo7.js";
import { R as RenderGroup, B as BLEND_MODES } from "./render_group-CKFaLjca.js";
import "./perky_module-DrWJO8l1.js";
import "./registry-CF_H4IOw.js";
import "./observable_map-BPZFGUWq.js";
import "./observable_set-BOSKLaPv.js";
import "./utils-DVCexGPz.js";
import "./inflector-BxOpyWLP.js";
const render_group_doc = doc("RenderGroup", () => {
  text(`
        WebGL-only. Encapsulates a scene graph rendered to its own framebuffer.
        Supports blend modes (normal, additive, multiply) and per-group post-processing
        passes. Installed as a child of a [[WebGLRenderer@webgl_renderer]].
    `);
  section("Creation", () => {
    text("Create a render group with optional blend mode, post-processing passes, and render transform.");
    action("Default render group", () => {
      const group2 = new RenderGroup();
      logger.log("blend mode:", group2.blendMode);
      logger.log("visible:", group2.visible);
      logger.log("opacity:", group2.opacity);
    });
    action("With options", () => {
      const group2 = new RenderGroup({
        blendMode: BLEND_MODES.additive,
        opacity: 0.8,
        visible: true
      });
      logger.log("blend mode:", group2.blendMode);
      logger.log("opacity:", group2.opacity);
    });
  });
  section("Blend Modes", () => {
    text("Available blend modes are `normal`, `additive`, and `multiply`.");
    action("List blend modes", () => {
      for (const [name, value] of Object.entries(BLEND_MODES)) {
        logger.log(name, "→", value);
      }
    });
  });
  section("Post-Processing Passes", () => {
    text(`
            Each group can have its own post-processing passes that are applied
            after rendering its content to the framebuffer.
        `);
    code("Adding a pass", () => {
      group.addPostPass(vignettePass);
      group.hasActivePasses();
    });
    code("Removing a pass", () => {
      group.removePostPass(vignettePass);
    });
  });
  section("Lifecycle", () => {
    text(`
            When installed on a renderer, the group initializes its passes and
            allocates a framebuffer. On dispose, all passes are cleaned up and
            the framebuffer is released.
        `);
  });
});
export {
  render_group_doc as default
};
