import { d as doc, t as text, s as section, c as code, a as action, l as logger } from "./runtime-DOmi4lo7.js";
import { A as AudioChannel } from "./audio_channel-DIVR2dMU.js";
import "./perky_module-DrWJO8l1.js";
import "./registry-CF_H4IOw.js";
import "./observable_map-BPZFGUWq.js";
import "./observable_set-BOSKLaPv.js";
import "./utils-DVCexGPz.js";
import "./inflector-BxOpyWLP.js";
const audio_channel_doc = doc("AudioChannel", () => {
  text(`
        A named audio bus with its own gain node. Routes through the master gain
        of [[AudioSystem]]. Tracks active sources and provides volume and mute controls.
    `);
  section("Basic Usage", () => {
    text(`
            AudioChannels are typically created by [[AudioSystem]] (music, sfx, ambiance
            by default). Each channel has independent volume and mute state.
        `);
    code("Access via AudioSystem", () => {
      const channel2 = audioSystem.getChannel("music");
      channel2.volume;
      channel2.muted;
      channel2.sources;
    });
  });
  section("Volume Control", () => {
    text("Set volume as a value between 0 and 1. Values are clamped automatically.");
    action("Volume methods", () => {
      const channel2 = new AudioChannel({ $id: "sfx" });
      channel2.setVolume(0.5);
      logger.log("Volume:", channel2.getVolume());
      channel2.setVolume(1);
      logger.log("Volume:", channel2.getVolume());
      channel2.volume = 0.8;
      logger.log("Volume:", channel2.volume);
    });
  });
  section("Mute", () => {
    text("Mute and unmute without losing the volume setting.");
    action("Mute toggle", () => {
      const channel2 = new AudioChannel({ $id: "music" });
      channel2.setVolume(0.7);
      channel2.mute();
      logger.log("Muted:", channel2.muted);
      channel2.unmute();
      logger.log("Muted:", channel2.muted);
      channel2.toggleMute();
      logger.log("Muted:", channel2.muted);
    });
  });
  section("Source Management", () => {
    text(`
            Channels track their active sources. Sources are registered when they
            start playing and unregistered when they stop.
        `);
    action("Register and query sources", () => {
      const channel2 = new AudioChannel({ $id: "sfx" });
      const fakeSource = { $id: "explosion_1", stop() {
      } };
      channel2.registerSource(fakeSource);
      logger.log("Source count:", channel2.sourceCount);
      logger.log("Has source:", channel2.hasSource("explosion_1"));
      channel2.unregisterSource(fakeSource);
      logger.log("Source count:", channel2.sourceCount);
    });
    code("Stop all sources", () => {
      channel.stopAll();
      channel.sourceCount;
    });
  });
  section("Events", () => {
    text("Channels emit events for volume changes, mute state, and source lifecycle.");
    code("Event list", () => {
      channel.on("volume:changed", (volume) => {
      });
      channel.on("muted", () => {
      });
      channel.on("unmuted", () => {
      });
      channel.on("source:added", (source) => {
      });
      channel.on("source:removed", (source) => {
      });
    });
  });
});
export {
  audio_channel_doc as default
};
