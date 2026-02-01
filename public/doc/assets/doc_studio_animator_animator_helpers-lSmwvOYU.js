import { d as doc, t as text, s as section, c as code } from "./runtime-DOmi4lo7.js";
function inferSpritesheetName(animatorConfig) {
  var _a, _b;
  const animations = animatorConfig == null ? void 0 : animatorConfig.animations;
  if (!animations) {
    return null;
  }
  const firstAnim = Object.values(animations)[0];
  if (firstAnim == null ? void 0 : firstAnim.source) {
    return firstAnim.source.split(":")[0];
  }
  if ((_b = (_a = firstAnim == null ? void 0 : firstAnim.frames) == null ? void 0 : _a[0]) == null ? void 0 : _b.source) {
    return firstAnim.frames[0].source.split(":")[0];
  }
  return null;
}
function buildAnimationConfig(anim, spritesheetName) {
  var _a;
  const config = {
    fps: anim.fps,
    loop: anim.loop
  };
  if ((_a = anim.motion) == null ? void 0 : _a.enabled) {
    config.motion = {
      mode: anim.motion.mode || "sidescroller",
      direction: anim.motion.direction || "e"
    };
  }
  config.frames = anim.frames.map((frame) => {
    var _a2;
    const fc = {};
    if (frame.source) {
      fc.source = frame.source;
    } else if (frame.name) {
      fc.source = `${spritesheetName}:${frame.name}`;
    }
    if (frame.duration && frame.duration !== 1) {
      fc.duration = frame.duration;
    }
    if ((_a2 = frame.events) == null ? void 0 : _a2.length) {
      fc.events = [...frame.events];
    }
    return fc;
  });
  return config;
}
const animator_helpers_doc = doc("Animator Helpers", { advanced: true }, () => {
  text(`
        Utility functions used by the [[AnimatorView@studio/animator]] to serialize animation
        data and extract metadata from animator configurations.
    `);
  section("inferSpritesheetName", () => {
    text(`
            Extracts the spritesheet name from an animator config by looking at the first
            animation's source field. Returns the part before the colon in source strings
            like \`"spritesheet:frame_0"\`.
        `);
    code("Usage", () => {
      const config = {
        animations: {
          idle: { source: "player:idle_0" }
        }
      };
      inferSpritesheetName(config);
      inferSpritesheetName(null);
    });
  });
  section("buildAnimationConfig", () => {
    text(`
            Converts an animation object into a serializable config. Includes fps,
            loop, playback mode, motion settings, and frame data. Only includes
            optional fields when they differ from defaults.
        `);
    code("Usage", () => {
      const anim = {
        fps: 12,
        loop: true,
        motion: { enabled: false },
        frames: [
          { source: "player:idle_0", duration: 1, events: [] }
        ]
      };
      const config = buildAnimationConfig(anim, "player");
      config.frames.length;
    });
  });
});
export {
  animator_helpers_doc as default
};
