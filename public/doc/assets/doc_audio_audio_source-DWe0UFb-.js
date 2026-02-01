import { d as doc, t as text, s as section, c as code, b as container, l as logger } from "./runtime-DOmi4lo7.js";
import { A as AudioSystem } from "./audio_system-Dshh0pc9.js";
import "./perky_module-DrWJO8l1.js";
import "./registry-CF_H4IOw.js";
import "./observable_map-BPZFGUWq.js";
import "./observable_set-BOSKLaPv.js";
import "./utils-DVCexGPz.js";
import "./inflector-BxOpyWLP.js";
import "./audio_context-BeUTJY33.js";
import "./audio_channel-DIVR2dMU.js";
import "./audio_unlock-DF5uB3Ac.js";
const audio_source_doc = doc("AudioSource", { advanced: true }, () => {
  text(`
        Represents a single playing sound in the audio system.
        Created by [[AudioSystem]] when you call \`play()\`, \`playAt()\`, or \`playOscillator()\`.
        Supports volume, loop, playback rate, fade effects, and spatial positioning.
        Extends [[PerkyModule]].
    `);
  section("Properties", () => {
    text("Each AudioSource exposes its current playback state.");
    code("Playback state", () => {
      const source = audioSystem.play("click", {
        channel: "sfx",
        loop: true,
        volume: 0.8
      });
      source.playing;
      source.loop;
      source.volume;
      source.playbackRate;
      source.currentTime;
      source.channel;
      source.spatial;
    });
  });
  section("Volume and Playback Rate", () => {
    text("Adjust volume and speed of a playing sound.");
    container({ title: "Volume and rate control", height: 200 }, async (ctx) => {
      const audio = new AudioSystem();
      audio.start();
      await audio.unlock();
      let source = null;
      ctx.action("Play Oscillator", () => {
        if (source) {
          source.stop();
        }
        source = audio.playOscillator({ type: "sine", frequency: 440, duration: null });
        logger.log("Playing sine wave");
      });
      ctx.slider("Volume", { min: 0, max: 1, default: 1, step: 0.1 }, (value) => {
        if (source) {
          source.setVolume(value);
        }
      });
      ctx.slider("Playback Rate", { min: 0.5, max: 2, default: 1, step: 0.1 }, (value) => {
        if (source) {
          source.setPlaybackRate(value);
        }
      });
      ctx.action("Stop", () => {
        if (source) {
          source.stop();
          source = null;
        }
      });
      ctx.setApp(audio);
    });
  });
  section("Fading", () => {
    text("Smoothly fade volume in or out over a duration.");
    code("Fade examples", () => {
      const source = audioSystem.play("bgm", { channel: "music", loop: true });
      source.fadeIn(2);
      source.fadeOut(1);
      source.fadeOut(1, false);
    });
  });
  section("Spatial Audio", () => {
    text(`
            Spatial sources are created with \`playAt()\` and position sound in 2D space.
            Distance from the listener affects perceived volume.
        `);
    code("Spatial source", () => {
      const source = audioSystem.playAt("footstep", 5, 3, {
        refDistance: 1,
        maxDistance: 20,
        rolloffFactor: 1
      });
      source.x;
      source.y;
      source.spatial;
      source.refDistance;
      source.maxDistance;
      source.rolloffFactor;
      source.setPosition(10, 5);
      source.getPosition();
    });
  });
  section("Events", () => {
    text("AudioSource emits events during its lifecycle.");
    code("Event handling", () => {
      const source = audioSystem.play("click");
      source.on("play", () => {
        logger.log("Playback started");
      });
      source.on("stop", () => {
        logger.log("Manually stopped");
      });
      source.on("ended", () => {
        logger.log("Playback finished naturally");
      });
    });
  });
});
export {
  audio_source_doc as default
};
