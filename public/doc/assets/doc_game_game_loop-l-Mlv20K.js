import { d as doc, t as text, s as section, c as code, e as action } from "./runtime-BzVMxcO0.js";
import { G as GameLoop } from "./game_loop-B95Cpswa.js";
import { l as logger } from "./logger-Wk9ggM8V.js";
import "./perky_module-BA31rvZo.js";
import "./notifier-BaRt7qG0.js";
import "./utils-CUtPxZ7p.js";
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
