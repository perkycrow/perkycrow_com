var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var _paused, _fpsLimited;
import { d as doc, t as text, s as section, c as code, b as action } from "./runtime-cNJO0S24.js";
import { P as PerkyModule } from "./perky_module-uJdyZ-t_.js";
import { l as logger } from "./logger-CkRtvmLl.js";
import "./utils-DXBRLumH.js";
class GameLoop extends PerkyModule {
  constructor(params = {}) {
    super(params);
    __privateAdd(this, _paused, false);
    __privateAdd(this, _fpsLimited, false);
    this.lastTime = 0;
    this.accumulator = 0;
    this.maxFrameSkip = params.maxFrameSkip || 5;
    this.frameCount = 0;
    this.screenFrameCount = 0;
    this.lastFpsUpdate = 0;
    this.fps = params.fps ?? 60;
    this.frameInterval = 1e3 / this.fps;
    __privateSet(this, _fpsLimited, params.fpsLimited ?? false);
  }
  onInstall(host) {
    this.delegateTo(host, [
      "paused",
      "pause",
      "resume",
      "setFps",
      "getFps",
      "getCurrentFps",
      "getScreenFps",
      "fpsLimited",
      "setFpsLimited"
    ]);
    this.delegateEventsTo(host, [
      "update",
      "render",
      "pause",
      "resume",
      "changed:fps",
      "changed:fpsLimited"
    ]);
  }
  get paused() {
    return __privateGet(this, _paused);
  }
  set paused(value) {
    __privateSet(this, _paused, value);
  }
  get running() {
    return super.running && !__privateGet(this, _paused);
  }
  onStart() {
    __privateSet(this, _paused, false);
    this.lastTime = performance.now();
    this.accumulator = 0;
    this.frameCount = 0;
    this.lastFpsUpdate = this.lastTime;
    requestAnimationFrame((time) => update(this, time));
  }
  pause(...args) {
    if (!this.started || __privateGet(this, _paused)) {
      return false;
    }
    __privateSet(this, _paused, true);
    this.emit("pause", ...args);
    return true;
  }
  resume(...args) {
    if (!this.started || !__privateGet(this, _paused)) {
      return false;
    }
    __privateSet(this, _paused, false);
    this.lastTime = performance.now();
    this.emit("resume", ...args);
    requestAnimationFrame((time) => update(this, time));
    return true;
  }
  getFps() {
    return this.fps;
  }
  setFps(fps) {
    this.fps = fps;
    this.frameInterval = 1e3 / fps;
    this.emit("changed:fps", fps);
  }
  getCurrentFps() {
    return this.currentFps || 0;
  }
  getScreenFps() {
    return this.screenFps || 0;
  }
  get fpsLimited() {
    return __privateGet(this, _fpsLimited);
  }
  setFpsLimited(value) {
    __privateSet(this, _fpsLimited, value);
    this.emit("changed:fpsLimited", value);
  }
}
_paused = new WeakMap();
_fpsLimited = new WeakMap();
__publicField(GameLoop, "$category", "gameLoop");
function update(gameLoop, currentTime) {
  if (!gameLoop.started || gameLoop.paused) {
    return false;
  }
  const deltaTime = currentTime - gameLoop.lastTime;
  gameLoop.lastTime = currentTime;
  gameLoop.screenFrameCount++;
  if (gameLoop.fpsLimited) {
    const { frameInterval, maxFrameSkip } = gameLoop;
    gameLoop.accumulator += Math.min(deltaTime, frameInterval * maxFrameSkip);
    while (gameLoop.accumulator >= frameInterval) {
      gameLoop.emit("update", frameInterval / 1e3);
      gameLoop.accumulator -= frameInterval;
      gameLoop.frameCount++;
    }
    const frameProgress = gameLoop.accumulator / frameInterval;
    gameLoop.emit("render", frameProgress, gameLoop.currentFps, gameLoop.screenFps);
  } else {
    gameLoop.emit("update", deltaTime / 1e3);
    gameLoop.emit("render", 1, gameLoop.currentFps, gameLoop.screenFps);
    gameLoop.frameCount++;
  }
  if (currentTime - gameLoop.lastFpsUpdate >= 1e3) {
    gameLoop.currentFps = gameLoop.frameCount;
    gameLoop.screenFps = gameLoop.screenFrameCount;
    gameLoop.frameCount = 0;
    gameLoop.screenFrameCount = 0;
    gameLoop.lastFpsUpdate = currentTime;
  }
  requestAnimationFrame((time) => update(gameLoop, time));
  return true;
}
const game_loop_doc = doc("GameLoop", { context: "game" }, () => {
  text(`
        GameLoop manages the main update and render cycle of your game.
        It provides fixed timestep updates, FPS limiting, pause/resume functionality,
        and frame interpolation for smooth rendering.
    `);
  section("Basic Usage", () => {
    code("Creating a GameLoop", () => {
      const gameLoop = new GameLoop();
      gameLoop.on("update", (deltaTime) => {
        logger.log(`Update: ${deltaTime.toFixed(3)}s`);
      });
      gameLoop.on("render", (progress, fps, screenFps) => {
        logger.log(`Render: fps=${fps}, screen=${screenFps}`);
      });
    });
    action("Start the loop", () => {
      const gameLoop = new GameLoop();
      gameLoop.on("update", (dt) => {
        logger.log(`Update: ${dt.toFixed(3)}s`);
      });
      let frameCount = 0;
      gameLoop.on("render", (progress, fps) => {
        frameCount++;
        if (frameCount <= 5) {
          logger.log(`Frame ${frameCount}, FPS: ${fps}`);
        }
        if (frameCount === 5) {
          gameLoop.stop();
          logger.log("Stopped after 5 frames");
        }
      });
      gameLoop.start();
    });
  });
  section("Pause and Resume", () => {
    text(`
            The game loop can be paused and resumed at any time.
            When paused, no update or render events are emitted.
        `);
    action("Pause and resume", () => {
      const gameLoop = new GameLoop();
      gameLoop.on("pause", () => logger.log("Game paused"));
      gameLoop.on("resume", () => logger.log("Game resumed"));
      let updates = 0;
      gameLoop.on("update", () => {
        updates++;
        if (updates === 3) {
          gameLoop.pause();
          setTimeout(() => {
            gameLoop.resume();
          }, 500);
        }
        if (updates === 6) {
          gameLoop.stop();
          logger.log(`Total updates: ${updates}`);
        }
      });
      gameLoop.start();
    });
    code("Check paused state", () => {
      const gameLoop = new GameLoop();
      if (gameLoop.paused) {
        logger.log("Game is paused");
      }
    });
  });
  section("FPS Control", () => {
    text(`
            By default, the game loop runs as fast as possible (typically 60fps on most displays).
            You can limit the FPS to a specific value using **fpsLimited** mode.
        `);
    code("Set target FPS", () => {
      const gameLoop = new GameLoop({
        fps: 30,
        fpsLimited: true
      });
      gameLoop.setFps(60);
      gameLoop.setFpsLimited(true);
    });
    action("Monitor FPS", () => {
      const gameLoop = new GameLoop();
      let checks = 0;
      gameLoop.on("render", () => {
        checks++;
        if (checks % 60 === 0) {
          logger.log(`Current FPS: ${gameLoop.getCurrentFps()}`);
          logger.log(`Screen FPS: ${gameLoop.getScreenFps()}`);
        }
        if (checks >= 180) {
          gameLoop.stop();
        }
      });
      gameLoop.start();
    });
  });
  section("Fixed Timestep", () => {
    text(`
            When **fpsLimited** is enabled, the game loop uses a fixed timestep.
            This means updates happen at a consistent rate regardless of frame rate,
            which is important for physics and game logic.

            The **render** event receives a **progress** value (0-1) indicating
            how far between updates we are, useful for interpolation.
        `);
    action("Fixed timestep example", () => {
      const gameLoop = new GameLoop({
        fps: 10,
        fpsLimited: true
      });
      let position = 0;
      const velocity = 100;
      gameLoop.on("update", (dt) => {
        position += velocity * dt;
        logger.log(`Position: ${position.toFixed(1)}`);
      });
      let frames = 0;
      gameLoop.on("render", (progress) => {
        frames++;
        const interpolated = position + velocity * (1 / 10) * progress;
        if (frames <= 10) {
          logger.log(`Render pos: ${interpolated.toFixed(1)} (progress: ${progress.toFixed(2)})`);
        }
        if (frames >= 30) {
          gameLoop.stop();
        }
      });
      gameLoop.start();
    });
  });
  section("Events", () => {
    text(`
            GameLoop emits several events:
            - **update(deltaTime)** - Called for game logic updates
            - **render(progress, fps, screenFps)** - Called for rendering
            - **pause** - When the game is paused
            - **resume** - When the game is resumed
            - **changed:fps** - When FPS target changes
            - **changed:fpsLimited** - When FPS limiting is toggled
        `);
    code("Listen to all events", () => {
      const gameLoop = new GameLoop();
      gameLoop.on("update", (dt) => {
      });
      gameLoop.on("render", (progress) => {
      });
      gameLoop.on("pause", () => {
      });
      gameLoop.on("resume", () => {
      });
      gameLoop.on("changed:fps", (fps) => {
      });
      gameLoop.on("changed:fpsLimited", (limited) => {
      });
    });
  });
  section("Integration with Application", () => {
    text(`
            When installed on an Application, GameLoop delegates its methods
            and events to the host, making them accessible directly.
        `);
    code("Using with Application", () => {
    });
  });
});
export {
  game_loop_doc as default
};
