import { d as doc, t as text, s as section, c as code, a as action, l as logger } from "./runtime-DOmi4lo7.js";
import { R as RenderSystem } from "./render_system-B3O06c33.js";
import "./perky_module-DrWJO8l1.js";
import "./registry-CF_H4IOw.js";
import "./observable_map-BPZFGUWq.js";
import "./observable_set-BOSKLaPv.js";
import "./utils-DVCexGPz.js";
import "./inflector-BxOpyWLP.js";
import "./perky_view-Bn-e_bN5.js";
import "./dom_utils-DTpHkHXB.js";
import "./canvas_layer-DcxDFtNS.js";
import "./layer-BMQTRr4-.js";
import "./canvas_renderer-D3d2kygu.js";
import "./base_renderer-D4JWfabm.js";
import "./camera-DKv4MCkL.js";
import "./easing-1o033h_w.js";
import "./traverse-C3LohcEy.js";
import "./canvas_object_renderer-DluJQ6Jr.js";
import "./circle-CP_IlbCy.js";
import "./object_2d-DKcr5oBk.js";
import "./transform-DC3tDXed.js";
import "./rectangle-CaoTFuaL.js";
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
import "./html_layer-BdWoJ3oM.js";
const render_system_doc = doc("RenderSystem", () => {
  text(`
        Manages cameras and layers for rendering. Creates a DOM container, handles
        resizing, and orchestrates render calls across all layers.
        Extends [[PerkyModule@core]]. Install it on an [[Application@application]]
        or use standalone.
    `);
  section("Creation", () => {
    text("Create a render system with optional dimensions, cameras, and layers.");
    code("Basic setup", () => {
      new RenderSystem({
        width: 800,
        height: 600
      });
    });
    code("With layers", () => {
      new RenderSystem({
        layers: [
          { name: "game", type: "canvas" },
          { name: "ui", type: "html" }
        ]
      });
    });
  });
  section("Cameras", () => {
    text(`
            A default "main" camera is created automatically unless you provide one.
            Create additional cameras for split-screen, minimaps, or UI layers.
        `);
    action("createCamera / getCamera", () => {
      const rs = new RenderSystem();
      const main = rs.getCamera("main");
      logger.log("main camera:", main.$id);
      rs.createCamera("minimap", { unitsInView: 50 });
      const minimap = rs.getCamera("minimap");
      logger.log("minimap:", minimap.$id);
    });
    action("setCamera", () => {
      const rs = new RenderSystem();
      rs.setCamera("main", { unitsInView: 20, zoom: 2 });
      const cam = rs.getCamera("main");
      logger.log("zoom:", cam.zoom);
    });
  });
  section("Layers", () => {
    text(`
            Layers are stacked render targets. Canvas layers use a \`<canvas>\` with
            a 2D or WebGL renderer. HTML layers host DOM elements in world space.
        `);
    action("createLayer / getLayer", () => {
      const rs = new RenderSystem();
      rs.createLayer("game", "canvas", { backgroundColor: "#1a1a2e" });
      rs.createLayer("ui", "html", { zIndex: 10 });
      const game = rs.getLayer("game");
      const ui = rs.getLayer("ui");
      logger.log("game layer:", game.$id);
      logger.log("ui layer:", ui.$id);
    });
    action("removeLayer", () => {
      const rs = new RenderSystem();
      rs.createLayer("temp", "canvas");
      logger.log("before:", rs.childrenByCategory("layer").length);
      rs.removeLayer("temp");
      logger.log("after:", rs.childrenByCategory("layer").length);
    });
    action("showLayer / hideLayer", () => {
      const rs = new RenderSystem();
      rs.createLayer("debug", "canvas");
      rs.hideLayer("debug");
      logger.log("visible:", rs.getLayer("debug").visible);
      rs.showLayer("debug");
      logger.log("visible:", rs.getLayer("debug").visible);
    });
  });
  section("Rendering", () => {
    text(`
            Call \`render()\` to render all auto-render canvas layers and update
            all auto-update HTML layers. Use \`renderLayer()\` for a single layer.
        `);
    code("Render all", () => {
      renderSystem.render();
    });
    code("Render one layer", () => {
      renderSystem.renderLayer("game");
    });
  });
  section("Resizing", () => {
    text(`
            By default, the system auto-resizes when a resize event is emitted.
            Disable auto-resize for fixed dimensions.
        `);
    action("Manual resize", () => {
      const rs = new RenderSystem({ width: 800, height: 600 });
      rs.disableAutoResize();
      rs.resize(1024, 768);
      logger.log("width:", rs.layerWidth, "height:", rs.layerHeight);
    });
  });
});
export {
  render_system_doc as default
};
