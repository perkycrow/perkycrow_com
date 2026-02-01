import { d as doc, t as text, s as section, c as code, a as action, l as logger } from "./runtime-DOmi4lo7.js";
import { i as isAudioUnlocked, o as onAudioUnlock } from "./audio_unlock-DF5uB3Ac.js";
const audio_unlock_doc = doc("AudioUnlock", () => {
  text(`
        Handles the browser's audio unlock requirement. Browsers block audio playback
        until a user interaction (click, touch, keydown, gamepad connect). This module
        listens for the first interaction and fires registered callbacks.
        [[AudioSystem]] uses it internally to resume the \`AudioContext\`.
    `);
  section("Usage", () => {
    text(`
            Register a callback with \`onAudioUnlock()\`. If the audio is already unlocked,
            the callback fires immediately. Otherwise it queues until the first user interaction.
        `);
    code("Register a callback", () => {
      onAudioUnlock(() => {
        logger.log("Audio is ready");
      });
    });
  });
  section("Check Unlock State", () => {
    text("Use `isAudioUnlocked()` to check whether the browser audio has been unlocked.");
    action("Check state", () => {
      logger.log("Audio unlocked:", isAudioUnlocked());
    });
  });
});
export {
  audio_unlock_doc as default
};
