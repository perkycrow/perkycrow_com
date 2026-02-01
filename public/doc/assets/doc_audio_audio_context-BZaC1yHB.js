import { d as doc, t as text, s as section, a as action, l as logger, c as code } from "./runtime-DOmi4lo7.js";
import { A as AudioContext } from "./audio_context-BeUTJY33.js";
const audio_context_doc = doc("AudioContext", () => {
  text(`
        Thin wrapper around the Web Audio API's \`AudioContext\`. Lazy-initializes on first use.
        Handles the master gain node, audio node creation, data decoding, and listener
        positioning for spatial audio.
    `);
  section("Initialization", () => {
    text(`
            The context is created lazily. Call \`init()\` explicitly or let it happen
            on first node creation. Repeated calls are safe — it returns the existing context.
        `);
    action("Init and inspect", () => {
      const ctx = new AudioContext();
      ctx.init();
      logger.log("Sample rate:", ctx.sampleRate);
      logger.log("Current time:", ctx.currentTime);
      logger.log("Suspended:", ctx.suspended);
      ctx.dispose();
    });
  });
  section("Master Volume", () => {
    text("Controls the gain on the master output node. Values are clamped between 0 and 1.");
    action("Volume control", () => {
      const ctx = new AudioContext();
      ctx.init();
      ctx.setMasterVolume(0.5);
      logger.log("Master volume:", ctx.getMasterVolume());
      ctx.setMasterVolume(1);
      logger.log("Master volume:", ctx.getMasterVolume());
      ctx.dispose();
    });
  });
  section("Suspend and Resume", () => {
    text(`
            Suspend pauses audio processing to save resources. Resume restarts it
            and processes any queued \`decodeAudioData\` calls.
        `);
    code("Suspend and resume", async () => {
      const ctx = new AudioContext();
      ctx.init();
      ctx.suspend();
      ctx.suspended;
      await ctx.resume();
      ctx.suspended;
      ctx.dispose();
    });
  });
  section("Node Creation", () => {
    text("Convenience methods to create Web Audio nodes. Each calls `init()` if needed.");
    code("Available factories", () => {
      const ctx = new AudioContext();
      ctx.createGain();
      ctx.createOscillator();
      ctx.createBufferSource();
      ctx.createPanner();
      ctx.createStereoPanner();
      ctx.dispose();
    });
  });
  section("Listener Position", () => {
    text("Set and get the listener position for spatial audio.");
    action("Listener position", () => {
      const ctx = new AudioContext();
      ctx.init();
      ctx.setListenerPosition(5, 3, 0);
      const pos = ctx.getListenerPosition();
      logger.log("Listener:", pos.x, pos.y, pos.z);
      ctx.dispose();
    });
  });
});
export {
  audio_context_doc as default
};
