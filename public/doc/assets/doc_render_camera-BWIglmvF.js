import { d as doc, t as text, s as section, a as action, l as logger, c as code } from "./runtime-DOmi4lo7.js";
import { C as Camera } from "./camera-DKv4MCkL.js";
import "./perky_module-DrWJO8l1.js";
import "./registry-CF_H4IOw.js";
import "./observable_map-BPZFGUWq.js";
import "./observable_set-BOSKLaPv.js";
import "./utils-DVCexGPz.js";
import "./inflector-BxOpyWLP.js";
import "./easing-1o033h_w.js";
const camera_doc = doc("Camera", () => {
  text(`
        Viewport control for 2D rendering. Handles position, zoom, rotation,
        coordinate conversion, frustum culling, follow targets, animated transitions,
        and screen effects like shake.
    `);
  section("Basic Setup", () => {
    text(`
            Create a camera with a position, zoom level, and viewport size.
            \`unitsInView\` defines how many world units fit in the viewport.
        `);
    action("Camera properties", () => {
      const camera2 = new Camera({
        x: 0,
        y: 0,
        zoom: 1,
        unitsInView: 10,
        viewportWidth: 800,
        viewportHeight: 600
      });
      logger.log("Position:", camera2.x, camera2.y);
      logger.log("Zoom:", camera2.zoom);
      logger.log("Pixels per unit:", camera2.pixelsPerUnit);
    });
    code("Units in view modes", () => {
      new Camera({ unitsInView: 10 });
      new Camera({ unitsInView: { width: 16 } });
      new Camera({ unitsInView: { width: 16, height: 9 } });
    });
  });
  section("Position and Zoom", () => {
    text("Move the camera and change zoom. Methods return the camera for chaining.");
    action("Set position and zoom", () => {
      const camera2 = new Camera({ unitsInView: 10, viewportWidth: 800, viewportHeight: 600 });
      camera2.setPosition(5, 3);
      logger.log("Position:", camera2.x, camera2.y);
      camera2.setZoom(2);
      logger.log("Zoom:", camera2.zoom);
      logger.log("Pixels per unit:", camera2.pixelsPerUnit);
    });
  });
  section("Coordinate Conversion", () => {
    text(`
            Convert between world coordinates (game units) and screen coordinates
            (pixels). Essential for input handling and UI positioning.
        `);
    action("World to screen", () => {
      const camera2 = new Camera({
        unitsInView: 10,
        viewportWidth: 800,
        viewportHeight: 600
      });
      const screen = camera2.worldToScreen(0, 0);
      logger.log("World (0, 0) → Screen:", screen.x, screen.y);
      const screen2 = camera2.worldToScreen(5, 3);
      logger.log("World (5, 3) → Screen:", screen2.x, screen2.y);
    });
    action("Screen to world", () => {
      const camera2 = new Camera({
        unitsInView: 10,
        viewportWidth: 800,
        viewportHeight: 600
      });
      const world = camera2.screenToWorld(400, 300);
      logger.log("Screen (400, 300) → World:", world.x, world.y);
      const world2 = camera2.screenToWorld(0, 0);
      logger.log("Screen (0, 0) → World:", world2.x.toFixed(2), world2.y.toFixed(2));
    });
  });
  section("Follow Target", () => {
    text(`
            Make the camera follow a target object. The \`speed\` parameter
            controls how quickly the camera catches up (0 = no movement, 1 = instant).
        `);
    code("Follow a player", () => {
      const camera2 = new Camera();
      camera2.follow(player, 0.1);
      camera2.stopFollow();
    });
  });
  section("Animated Transitions", () => {
    text(`
            Smoothly animate the camera to a new position, zoom, or rotation.
            Uses easing functions from [[Easing@math]].
        `);
    code("Animate to position", () => {
      camera.animateTo({ x: 10, y: 5, zoom: 2 }, {
        duration: 1,
        easing: "easeOutQuad",
        onComplete: () => logger.log("Transition done")
      });
      camera.transitionTo(otherCamera, { duration: 0.5 });
      camera.cancelTransition();
    });
  });
  section("Screen Shake", () => {
    text("Apply a screen shake effect with configurable intensity and duration.");
    action("Shake parameters", () => {
      const camera2 = new Camera({ unitsInView: 10 });
      camera2.shake({ intensity: 0.5, duration: 0.3, decay: true });
      logger.log("Effects active:", camera2.effects.length);
      camera2.clearEffects();
      logger.log("Effects after clear:", camera2.effects.length);
    });
    code("Custom effect", () => {
      camera.animate((deltaTime, elapsed, total) => {
        camera.offsetZoom = Math.sin(elapsed * 10) * 0.1;
        return elapsed >= total;
      }, {
        duration: 2,
        onComplete: () => {
          camera.offsetZoom = 0;
        }
      });
    });
  });
  section("Frustum Culling", () => {
    text(`
            Check whether an object's bounds are visible in the current viewport.
            Used by renderers to skip off-screen objects.
        `);
    action("Visibility check", () => {
      const camera2 = new Camera({
        unitsInView: 10,
        viewportWidth: 800,
        viewportHeight: 600
      });
      const visible = camera2.isVisible({
        minX: -1,
        maxX: 1,
        minY: -1,
        maxY: 1,
        width: 2,
        height: 2
      });
      logger.log("Center object visible:", visible);
      const offscreen = camera2.isVisible({
        minX: 100,
        maxX: 102,
        minY: 100,
        maxY: 102,
        width: 2,
        height: 2
      });
      logger.log("Far object visible:", offscreen);
    });
  });
});
export {
  camera_doc as default
};
