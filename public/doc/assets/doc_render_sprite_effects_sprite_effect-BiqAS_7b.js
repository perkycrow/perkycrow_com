import { d as doc, t as text, s as section, a as action, l as logger, c as code } from "./runtime-DOmi4lo7.js";
import { S as SpriteEffect } from "./sprite_effect-D5CqI1nO.js";
const sprite_effect_doc = doc("SpriteEffect", () => {
  text(`
        Base class for all sprite visual effects.
        Subclass this to create custom effects that modify how sprites are rendered.
        See [[SpriteEffectStack@render]] for managing effects on sprites.
    `);
  section("Creating an Effect", () => {
    text("Effects are simple objects with an enabled state and a type identifier.");
    action("Default effect", () => {
      const effect = new SpriteEffect();
      logger.log("type:", effect.type);
      logger.log("enabled:", effect.enabled);
    });
    action("Created disabled", () => {
      const effect = new SpriteEffect({ enabled: false });
      logger.log("enabled:", effect.enabled);
    });
  });
  section("Enabled", () => {
    text("Toggle effects on and off at runtime without removing them from the stack.");
    action("Toggle enabled", () => {
      const effect = new SpriteEffect();
      logger.log("default:", effect.enabled);
      effect.enabled = false;
      logger.log("after disable:", effect.enabled);
      effect.enabled = true;
      logger.log("after enable:", effect.enabled);
    });
  });
  section("Subclassing", () => {
    text(`
            Override these methods to create a custom effect:

            - \`getHints()\` — return an object with effect parameters for the shader.
            - \`update()\` — called each frame to animate effect properties.
            - \`dispose()\` — clean up resources.
        `);
    code("Custom effect skeleton", () => {
    });
  });
});
export {
  sprite_effect_doc as default
};
