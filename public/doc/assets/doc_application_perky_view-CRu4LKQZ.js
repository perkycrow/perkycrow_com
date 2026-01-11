import { d as doc, t as text, s as section, c as code, l as logger } from "./runtime-D8el-yK6.js";
const perky_view_doc = doc("PerkyView", { advanced: true }, () => {
  text(`
        DOM element wrapper that handles mounting, resizing, and fullscreen mode.
        Used internally by Application but can be used standalone.
    `);
  section("Creation", () => {
    text("PerkyView wraps a DOM element and provides size/visibility utilities.");
    code("Basic creation", () => {
      const view = new PerkyView({ $id: "myView" });
      logger.log(view.element.tagName);
    });
    code("With custom element", () => {
      const canvas = document.createElement("canvas");
      new PerkyView({
        $id: "canvasView",
        element: canvas
      });
    });
    code("Mount to container", () => {
      const view = new PerkyView({ $id: "demo" });
      const container = document.getElementById("app");
      view.mount(container);
      logger.log(view.mounted);
      logger.log(view.width, view.height);
    });
  });
  section("Size", () => {
    text("Access and modify the element dimensions.");
    code("Size properties", () => {
      const view = new PerkyView({ $id: "demo" });
      logger.log(view.width);
      logger.log(view.height);
      logger.log(view.size);
      logger.log(view.aspectRatio);
    });
    code("setSize", () => {
      const view = new PerkyView({ $id: "demo" });
      view.setSize({ width: 800, height: 600 });
      view.setSize({ width: 100, height: 100, unit: "%" });
    });
    code("fit", () => {
      const view = new PerkyView({ $id: "demo" });
      view.fit();
      view.fit(someElement);
    });
  });
  section("Visibility", () => {
    text("Show and hide the view element.");
    code("hide / show", () => {
      const view = new PerkyView({ $id: "demo" });
      logger.log(view.isVisible());
      view.hide();
      logger.log(view.isVisible());
      view.show();
      logger.log(view.isVisible());
    });
    code("display property", () => {
      const view = new PerkyView({ $id: "demo" });
      view.display = "flex";
      logger.log(view.display);
    });
  });
  section("CSS Classes", () => {
    text("Manipulate CSS classes on the element.");
    code("addClass / removeClass / hasClass", () => {
      const view = new PerkyView({ $id: "demo" });
      view.addClass("active");
      logger.log(view.hasClass("active"));
      view.removeClass("active");
      logger.log(view.hasClass("active"));
    });
  });
  section("Fullscreen", () => {
    text(`
            PerkyView supports fullscreen mode via the Fullscreen API.
            The \`displayMode\` property tracks the current state.
        `);
    code("Fullscreen methods", () => {
      const view = new PerkyView({ $id: "demo" });
      view.enterFullscreenMode();
      view.exitFullscreenMode();
      view.toggleFullscreen();
      view.setDisplayMode("fullscreen");
      view.setDisplayMode("normal");
    });
    code("displayMode event", () => {
      const view = new PerkyView({ $id: "demo" });
      view.on("displayMode:changed", ({ mode }) => {
        logger.log("mode changed:", mode);
      });
      logger.log(view.displayMode);
    });
  });
  section("Mount / Dismount", () => {
    text("Attach and detach the view from a container element.");
    code("mount / dismount", () => {
      const view = new PerkyView({ $id: "demo" });
      const container = document.getElementById("app");
      view.on("mount", () => logger.log("mounted"));
      view.on("dismount", () => logger.log("dismounted"));
      view.mount(container);
      logger.log(view.container === container);
      logger.log(view.mounted);
      view.dismount();
      logger.log(view.mounted);
    });
  });
  section("Resize Observer", () => {
    text("PerkyView emits resize events when the element size changes.");
    code("Resize event", () => {
      const view = new PerkyView({ $id: "demo" });
      view.on("resize", ({ width, height }) => {
        logger.log("resized:", width, height);
      });
      view.setSize({ width: 300, height: 100 });
    });
  });
});
export {
  perky_view_doc as default
};
