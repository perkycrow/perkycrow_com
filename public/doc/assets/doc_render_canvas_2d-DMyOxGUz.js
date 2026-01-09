import { d as doc, t as text, s as section, c as container, a as code, l as logger } from "./runtime-COHOMYgI.js";
import { C as Canvas2D } from "./canvas_2d-CsoXZrPI.js";
import { G as Group2D, R as Rectangle, C as Circle } from "./group_2d-CuV-Qxhx.js";
import "./perky_module-D39KZVAf.js";
import "./registry-iaRsBBCR.js";
import "./observable_map-lMBFP72i.js";
import "./observable_set-DwK8EaeK.js";
import "./utils-CF4a2IhA.js";
import "./inflector--UCXb4XA.js";
const canvas_2d_doc = doc("Canvas2D", () => {
  text(`
        Canvas 2D renderer using the native Canvas API. Renders scenes with rectangles,
        circles, images, sprites, and supports debug gizmos and frustum culling.
    `);
  section("Basic Setup", () => {
    text(`
            Create a renderer and mount it to a container.
            The renderer automatically creates a canvas element.
        `);
    container({ title: "Simple rectangle", height: 200 }, (ctx) => {
      const renderer = new Canvas2D({
        container: ctx.container,
        autoFit: true,
        backgroundColor: "#1a1a2e"
      });
      const scene2 = new Group2D();
      const rect = new Rectangle({
        width: 4,
        height: 2,
        color: "#e94560",
        x: 0,
        y: 0
      });
      scene2.add(rect);
      renderer.render(scene2);
      ctx.setApp(renderer, scene2);
    });
  });
  section("Shapes", () => {
    text("Render multiple shapes with different colors and positions.");
    container({ title: "Circles and rectangles", height: 200 }, (ctx) => {
      const renderer = new Canvas2D({
        container: ctx.container,
        autoFit: true,
        backgroundColor: "#16213e"
      });
      const scene2 = new Group2D();
      scene2.add(new Rectangle({
        width: 3,
        height: 3,
        color: "#e94560",
        x: -5,
        y: 0
      }));
      scene2.add(new Circle({
        radius: 1.5,
        color: "#0f3460",
        x: 0,
        y: 0
      }));
      scene2.add(new Rectangle({
        width: 2,
        height: 4,
        color: "#533483",
        x: 5,
        y: 0
      }));
      renderer.render(scene2);
      ctx.setApp(renderer, scene2);
    });
  });
  section("Transformations", () => {
    text("Objects support position, rotation, scale, and anchor point.");
    container({ title: "Rotated shapes", height: 200 }, (ctx) => {
      const renderer = new Canvas2D({
        container: ctx.container,
        autoFit: true,
        backgroundColor: "#1a1a2e"
      });
      const scene2 = new Group2D();
      const rect1 = new Rectangle({
        width: 3,
        height: 1.5,
        color: "#e94560",
        x: -5,
        y: 0
      });
      const rect2 = new Rectangle({
        width: 3,
        height: 1.5,
        color: "#0f3460",
        x: 0,
        y: 0
      });
      const rect3 = new Rectangle({
        width: 3,
        height: 1.5,
        color: "#533483",
        x: 5,
        y: 0
      });
      scene2.add(rect1, rect2, rect3);
      ctx.slider("rotation", { min: -180, max: 180, default: 0 }, (value) => {
        const rad = value * Math.PI / 180;
        rect1.rotation = rad;
        rect2.rotation = rad;
        rect3.rotation = rad;
        renderer.render(scene2);
      });
      ctx.setApp(renderer, scene2);
    });
  });
  section("Groups", () => {
    text("Group objects together to apply transformations to all children.");
    container({ title: "Nested groups", height: 200 }, (ctx) => {
      const renderer = new Canvas2D({
        container: ctx.container,
        autoFit: true,
        backgroundColor: "#1a1a2e"
      });
      const scene2 = new Group2D();
      const group = new Group2D({ x: 0, y: 0 });
      group.add(new Rectangle({
        width: 2.5,
        height: 2.5,
        color: "#e94560",
        x: -3,
        y: 0
      }));
      group.add(new Rectangle({
        width: 2.5,
        height: 2.5,
        color: "#0f3460",
        x: 3,
        y: 0
      }));
      scene2.add(group);
      ctx.slider("rotation", { min: -180, max: 180, default: 0 }, (value) => {
        group.rotation = value * Math.PI / 180;
        renderer.render(scene2);
      });
      ctx.slider("scale", { min: 0.5, max: 2, default: 1 }, (value) => {
        group.scaleX = value;
        group.scaleY = value;
        renderer.render(scene2);
      });
      ctx.setApp(renderer, scene2);
    });
  });
  section("Camera", () => {
    text("The camera controls the view position and zoom level.");
    container({ title: "Camera zoom", height: 200 }, (ctx) => {
      const renderer = new Canvas2D({
        container: ctx.container,
        autoFit: true,
        backgroundColor: "#16213e"
      });
      const scene2 = new Group2D();
      for (let i = 0; i < 5; i++) {
        scene2.add(new Circle({
          radius: 1,
          color: `hsl(${i * 60}, 70%, 50%)`,
          x: (i - 2) * 3,
          y: 0
        }));
      }
      ctx.slider("zoom", { min: 0.5, max: 3, default: 1 }, (value) => {
        renderer.camera.zoom = value;
        renderer.render(scene2);
      });
      ctx.slider("pan X", { min: -10, max: 10, default: 0 }, (value) => {
        renderer.camera.x = value;
        renderer.render(scene2);
      });
      ctx.setApp(renderer, scene2);
    });
    container({ title: "Camera pan", height: 200 }, (ctx) => {
      const renderer = new Canvas2D({
        container: ctx.container,
        autoFit: true,
        backgroundColor: "#16213e"
      });
      const scene2 = new Group2D();
      scene2.add(new Rectangle({
        width: 4,
        height: 4,
        color: "#e94560",
        x: 0,
        y: 0
      }));
      scene2.add(new Circle({
        radius: 1.2,
        color: "#533483",
        x: 0,
        y: 0
      }));
      ctx.action("Center", () => {
        renderer.camera.x = 0;
        renderer.camera.y = 0;
        renderer.render(scene2);
      });
      ctx.action("Offset (3, 2)", () => {
        renderer.camera.x = 3;
        renderer.camera.y = 2;
        renderer.render(scene2);
      });
      ctx.setApp(renderer, scene2);
    });
  });
  section("Debug Gizmos", () => {
    text("Enable debug gizmos to visualize bounding boxes and object origins.");
    container({ title: "Debug visualization", height: 200 }, (ctx) => {
      const renderer = new Canvas2D({
        container: ctx.container,
        autoFit: true,
        backgroundColor: "#1a1a2e",
        enableDebugGizmos: true
      });
      const scene2 = new Group2D();
      const rect = new Rectangle({
        width: 4,
        height: 2,
        color: "#e94560",
        x: -3,
        y: 0,
        debugGizmo: true
      });
      const circle = new Circle({
        radius: 1.5,
        color: "#0f3460",
        x: 3,
        y: 0,
        debugGizmo: true
      });
      scene2.add(rect, circle);
      renderer.render(scene2);
      ctx.action("Gizmos On", () => {
        rect.debugGizmo = true;
        circle.debugGizmo = true;
        renderer.render(scene2);
      });
      ctx.action("Gizmos Off", () => {
        rect.debugGizmo = false;
        circle.debugGizmo = false;
        renderer.render(scene2);
      });
      ctx.setApp(renderer, scene2);
    });
  });
  section("Culling", () => {
    text(`
            Enable frustum culling to skip rendering objects outside the view.
            Useful for large scenes with many objects.
        `);
    container({ title: "Culling stats", height: 200 }, (ctx) => {
      const renderer = new Canvas2D({
        container: ctx.container,
        autoFit: true,
        backgroundColor: "#16213e",
        enableCulling: true
      });
      const scene2 = new Group2D();
      for (let i = 0; i < 20; i++) {
        scene2.add(new Circle({
          radius: 0.8,
          color: `hsl(${i * 18}, 70%, 50%)`,
          x: (i - 10) * 2.5,
          y: 0
        }));
      }
      const updateInfo = ctx.info(() => {
        renderer.render(scene2);
        return `rendered: ${renderer.stats.renderedObjects} / ${renderer.stats.totalObjects}`;
      });
      ctx.slider("pan X", { min: -15, max: 15, default: 0 }, (value) => {
        renderer.camera.x = value;
        updateInfo();
      });
      ctx.setApp(renderer, scene2);
    });
    code("Culling options", () => {
      const renderer = new Canvas2D({
        enableCulling: true
      });
      renderer.render(scene);
      logger.log(renderer.stats.totalObjects);
      logger.log(renderer.stats.renderedObjects);
      logger.log(renderer.stats.culledObjects);
    });
  });
  section("Background", () => {
    text("Set a background color or use transparent.");
    code("Background options", () => {
      const renderer1 = new Canvas2D({
        backgroundColor: "#1a1a2e"
      });
      new Canvas2D({
        backgroundColor: null
      });
      renderer1.backgroundColor = "#ff0000";
    });
  });
});
export {
  canvas_2d_doc as default
};
