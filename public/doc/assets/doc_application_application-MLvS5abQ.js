var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { d as doc, t as text, s as section, c as code, b as action, l as logger, f as container } from "./runtime-DVl2nrG4.js";
import { A as Application } from "./application-zEdJ0wVH.js";
import { A as ActionController } from "./action_controller-qQy9LzFs.js";
import "./perky_module-H-JzEFBm.js";
import "./registry-fw3VIFkv.js";
import "./observable_map-C8tnEId_.js";
import "./observable_set-BMifQRYa.js";
import "./utils-CPyB8f8f.js";
import "./inflector--UCXb4XA.js";
import "./manifest-cI-BMjRV.js";
import "./asset-CuLWpPYs.js";
import "./action_dispatcher-DpDm2V4P.js";
import "./perky_view-CN9royc5.js";
import "./keyboard_device-Dp2i0pYE.js";
import "./input_device-DsSbmKk4.js";
import "./button_control-GwmS055y.js";
import "./input_control-DjL2rkDf.js";
import "./mouse_device-BkRwicR2.js";
import "./vec2_control-DaZZ91Xh.js";
import "./vec2-BvD8ope7.js";
import "./touch_device-CANxcEMF.js";
import "./source_manager-B_kglfgl.js";
const application_doc = doc("Application", { featured: true }, () => {
  text(`
        Main entry point for Perky applications.
        Extends [[PerkyModule]] with built-in systems for view, input, assets, and actions.
    `);
  section("Creation", () => {
    code("Subclass with manifest", () => {
      class MyGame extends Application {
        configureApplication() {
          this.setConfig("debug", true);
        }
      }
      __publicField(MyGame, "manifest", {
        config: { title: "My Game" },
        assets: {
          hero: { type: "sprite", url: "/hero.png", tags: ["preload"] }
        }
      });
      const game = new MyGame({ $id: "game" });
      game.mount(document.getElementById("app"));
      game.start();
    });
  });
  section("Built-in Systems", () => {
    text(`
            Application automatically creates these child modules:

            - \`manifest\` - [[Manifest@application]] for config and assets
            - \`actionDispatcher\` - [[ActionDispatcher]] for action routing
            - \`perkyView\` - [[PerkyView@application]] for DOM and display
            - \`sourceManager\` - [[SourceManager@application]] for asset loading
            - \`inputSystem\` - [[InputSystem@input]] for keyboard, mouse, touch
        `);
  });
  section("Configuration", () => {
    text("Config methods are delegated from [[Manifest@application]].");
    action("setConfig / getConfig", () => {
      const app2 = new Application({ $id: "demo" });
      app2.setConfig("game.title", "My Game");
      logger.log("title:", app2.getConfig("game.title"));
      app2.setConfig("debug", true);
      logger.log("debug:", app2.getConfig("debug"));
    });
  });
  section("Assets", () => {
    text("Asset methods are delegated from [[Manifest@application]] and [[SourceManager@application]].");
    container({ title: "Load and display assets", height: 200, preset: "centered" }, (ctx) => {
      const updateDisplay = ctx.display((content) => content || "Loading...");
      const app2 = new Application({
        $id: "demo",
        manifest: {
          assets: {
            shroom: { type: "image", url: "./assets/images/shroom.png", tags: ["preload"] }
          }
        }
      });
      app2.addAsset({ id: "spore", type: "image", url: "./assets/images/spore.png", tags: ["preload"] });
      app2.start();
      app2.on("loader:complete", () => {
        const wrapper = document.createElement("div");
        wrapper.style.cssText = "display:flex;gap:20px;align-items:center";
        const img1 = app2.getSource("shroom");
        const img2 = app2.getSource("spore");
        img1.style.width = "80px";
        img2.style.width = "80px";
        wrapper.appendChild(img1);
        wrapper.appendChild(img2);
        updateDisplay(wrapper);
      });
      app2.preload();
      ctx.setApp(app2);
    });
    code("Loading events", () => {
      const app2 = new Application({ $id: "demo" });
      app2.on("loader:progress", ({ loaded, total }) => {
        logger.log(`Loading: ${loaded}/${total}`);
      });
      app2.on("loader:complete", () => {
        logger.log("All assets loaded");
      });
      app2.on("loader:error", ({ asset, error }) => {
        logger.error(`Failed to load ${asset.id}:`, error);
      });
    });
  });
  section("View", () => {
    text("View methods are delegated from [[PerkyView@application]].");
    container({ title: "Resize events", height: 200, preset: "centered" }, (ctx) => {
      const app2 = new Application({ $id: "demo" });
      app2.mount(ctx.container);
      app2.start();
      app2.on("resize", ({ width, height }) => {
        logger.log("resize:", width, "×", height);
      });
      ctx.slider("Height", { min: 100, max: 400, default: 200, step: 10 }, (h) => {
        ctx.container.style.height = h + "px";
      });
      ctx.setApp(app2);
    });
    code("mount / dismount", () => {
      const app2 = new Application({ $id: "demo" });
      const el = document.getElementById("app");
      app2.mount(el);
      logger.log(app2.mounted);
      logger.log(app2.element);
      app2.dismount();
    });
  });
  section("Input", () => {
    text("Input methods are delegated from [[InputSystem@input]].");
    container({ title: "Move the box", height: 200, preset: "interactive" }, (ctx) => {
      ctx.hint("Use WASD or arrow keys");
      const app2 = new Application({ $id: "demo" });
      app2.mount(ctx.container);
      app2.start();
      const box = ctx.box({ size: 40 });
      const w = ctx.container.offsetWidth;
      const h = ctx.container.offsetHeight;
      let x = w / 2;
      let y = h / 2;
      app2.bindInput({ controlName: "KeyW", actionName: "moveUp" });
      app2.bindInput({ controlName: "KeyS", actionName: "moveDown" });
      app2.bindInput({ controlName: "KeyA", actionName: "moveLeft" });
      app2.bindInput({ controlName: "KeyD", actionName: "moveRight" });
      app2.bindInput({ controlName: "ArrowUp", actionName: "moveUp" });
      app2.bindInput({ controlName: "ArrowDown", actionName: "moveDown" });
      app2.bindInput({ controlName: "ArrowLeft", actionName: "moveLeft" });
      app2.bindInput({ controlName: "ArrowRight", actionName: "moveRight" });
      const speed = 3;
      const loop = () => {
        const dir = app2.getDirection("move");
        x = Math.max(20, Math.min(w - 20, x + dir.x * speed));
        y = Math.max(20, Math.min(h - 20, y - dir.y * speed));
        box.style.left = x + "px";
        box.style.top = y + "px";
        requestAnimationFrame(loop);
      };
      loop();
      ctx.setApp(app2);
    });
    container({ title: "Action events", height: 150, preset: "interactive-alt" }, (ctx) => {
      ctx.hint("Press C to change color");
      const app2 = new Application({ $id: "demo" });
      app2.mount(ctx.container);
      app2.start();
      const box = ctx.box({ size: 60 });
      const colors = ["#4a9eff", "#ff4a4a", "#4aff4a", "#ffff4a", "#ff4aff"];
      let colorIndex = 0;
      app2.bindInput({ controlName: "KeyC", actionName: "color", eventType: "pressed" });
      app2.on("input:triggered", () => {
        colorIndex = (colorIndex + 1) % colors.length;
        box.style.background = colors[colorIndex];
      });
      ctx.setApp(app2);
    });
    code("Input bindings", () => {
      const app2 = new Application({ $id: "demo" });
      app2.bindInput({
        controlName: "KeyJ",
        actionName: "jump",
        eventType: "pressed"
      });
      if (app2.isActionPressed("jump")) ;
      app2.on("input:triggered", (binding) => {
        logger.log("Action triggered:", binding.actionName);
      });
    });
  });
  section("Actions", () => {
    text("Action methods are delegated from [[ActionDispatcher]].");
    action("addAction / execute", () => {
      const app2 = new Application({ $id: "demo" });
      app2.addAction("greet", () => {
        logger.log("Hello!");
      });
      app2.execute("greet");
    });
    container({ title: "Custom controller", height: 150, preset: "interactive-alt" }, (ctx) => {
      ctx.hint("Press G to greet, F to farewell");
      const app2 = new Application({ $id: "demo" });
      app2.mount(ctx.container);
      app2.start();
      class GreetController extends ActionController {
        greet() {
          logger.log("Hello!");
        }
        farewell() {
          logger.log("Goodbye!");
        }
      }
      app2.registerController("greeter", GreetController);
      app2.pushActiveController("greeter");
      app2.bindInput({ controlName: "KeyG", actionName: "greet" });
      app2.bindInput({ controlName: "KeyF", actionName: "farewell" });
      ctx.setApp(app2);
    });
    code("Controller with bindings", () => {
      class GameController extends ActionController {
        moveUp() {
          logger.log("up");
        }
        moveDown() {
          logger.log("down");
        }
        shoot() {
          logger.log("shoot");
        }
      }
      __publicField(GameController, "bindings", {
        moveUp: ["KeyW", "ArrowUp"],
        moveDown: ["KeyS", "ArrowDown"],
        shoot: "Space"
      });
      app.registerController("game", GameController);
    });
  });
});
export {
  application_doc as default
};
