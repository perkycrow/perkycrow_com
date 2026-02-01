import { d as doc, t as text, s as section, c as code, a as action, l as logger } from "./runtime-DOmi4lo7.js";
import { C as CanvasLayer } from "./canvas_layer-DcxDFtNS.js";
import { G as Group2D } from "./group_2d-B-hGIEMS.js";
import { R as Rectangle } from "./rectangle-CaoTFuaL.js";
import "./layer-BMQTRr4-.js";
import "./perky_module-DrWJO8l1.js";
import "./registry-CF_H4IOw.js";
import "./observable_map-BPZFGUWq.js";
import "./observable_set-BOSKLaPv.js";
import "./utils-DVCexGPz.js";
import "./inflector-BxOpyWLP.js";
import "./canvas_renderer-D3d2kygu.js";
import "./base_renderer-D4JWfabm.js";
import "./camera-DKv4MCkL.js";
import "./easing-1o033h_w.js";
import "./traverse-C3LohcEy.js";
import "./canvas_object_renderer-DluJQ6Jr.js";
import "./circle-CP_IlbCy.js";
import "./object_2d-DKcr5oBk.js";
import "./transform-DC3tDXed.js";
import "./sprite-Dhc4lLUh.js";
import "./texture_region-Buaf2v24.js";
import "./shader_effect-DOeCHK4c.js";
import "./canvas_debug_gizmo_renderer-DFq6beKS.js";
import "./webgl_renderer-CFGo2rO2.js";
import "./shader_registry-BAQG-ymA.js";
import "./shader_program-CRf-39vH.js";
import "./shader_effect_registry-bkHO5-19.js";
import "./sprite_shader-C1tJ_XZn.js";
import "./primitive_shader-BA0SbuCR.js";
import "./framebuffer_manager-B0HWqNfE.js";
import "./fullscreen_quad-D-y8CRUH.js";
import "./color_utils-4JeeBuMN.js";
import "./render_group-CKFaLjca.js";
const canvas_layer_doc = doc("CanvasLayer", () => {
  text(`
        Render layer that creates a \`<canvas>\` element and instantiates a renderer.
        Extends [[Layer@render]]. Supports both Canvas 2D and WebGL backends via the
        \`rendererType\` option. Managed by [[RenderSystem@render]].
    `);
  section("Creation", () => {
    text("Create a canvas layer with a renderer type and optional settings.");
    code("Canvas 2D layer", () => {
      new CanvasLayer({
        $id: "game",
        rendererType: "canvas",
        width: 800,
        height: 600,
        backgroundColor: "#1a1a2e"
      });
    });
    code("WebGL layer", () => {
      new CanvasLayer({
        $id: "effects",
        rendererType: "webgl",
        width: 800,
        height: 600,
        pixelRatio: 2
      });
    });
  });
  section("Content", () => {
    text(`
            Set the scene to render with \`setContent\`. The layer renders its content
            on each \`render()\` call. If the renderer has render groups, those take priority.
        `);
    action("setContent and render", () => {
      const layer = new CanvasLayer({
        $id: "test",
        rendererType: "canvas",
        width: 400,
        height: 300,
        backgroundColor: "#16213e"
      });
      const scene2 = new Group2D();
      scene2.add(new Rectangle({ width: 4, height: 2, color: "#e94560" }));
      layer.setContent(scene2);
      layer.render();
      logger.log("content set and rendered");
    });
  });
  section("Resize", () => {
    text("Resizing recalculates the viewport and updates the renderer dimensions.");
    action("resize", () => {
      const layer = new CanvasLayer({
        $id: "test",
        rendererType: "canvas",
        width: 800,
        height: 600
      });
      logger.log("before:", layer.renderer.width, "x", layer.renderer.height);
      layer.resize(1024, 768);
      logger.log("after:", layer.renderer.width, "x", layer.renderer.height);
    });
  });
  section("Auto Render", () => {
    text(`
            When \`autoRender\` is true (default), [[RenderSystem@render]] calls \`render()\`
            on this layer automatically each frame. Set to false for manual control.
        `);
    code("Manual render", () => {
      const layer = new CanvasLayer({
        $id: "game",
        rendererType: "canvas",
        autoRender: false
      });
      layer.setContent(scene);
      layer.render();
    });
  });
});
export {
  canvas_layer_doc as default
};
