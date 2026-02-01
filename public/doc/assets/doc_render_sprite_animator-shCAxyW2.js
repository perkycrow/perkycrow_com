var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { d as doc, t as text, s as section, c as code } from "./runtime-DOmi4lo7.js";
import { P as PerkyModule } from "./perky_module-DrWJO8l1.js";
import { S as SpriteAnimation } from "./sprite_animation-RlEegjwj.js";
import "./registry-CF_H4IOw.js";
import "./observable_map-BPZFGUWq.js";
import "./observable_set-BOSKLaPv.js";
import "./utils-DVCexGPz.js";
import "./inflector-BxOpyWLP.js";
class SpriteAnimator extends PerkyModule {
  constructor({ sprite, config, textureSystem } = {}) {
    super();
    this.sprite = sprite;
    this.textureSystem = textureSystem;
    this.current = null;
    const resolvedConfig = config || {
      anchor: this.constructor.anchor,
      animations: this.constructor.animations
    };
    this.anchor = resolvedConfig.anchor || { x: 0.5, y: 0.5 };
    if (resolvedConfig.animations) {
      this.loadConfig(resolvedConfig.animations);
    }
  }
  loadConfig(config) {
    for (const [name, animConfig] of Object.entries(config)) {
      const frames = this.resolveFrames(animConfig);
      const animation = this.create(SpriteAnimation, {
        $id: name,
        sprite: this.sprite,
        frames,
        fps: animConfig.fps ?? 12,
        loop: animConfig.loop ?? true,
        playbackMode: animConfig.playbackMode ?? "forward"
      });
      if (animConfig.motion) {
        animation.motion = animConfig.motion;
      }
      registerFrameEvents(animation, frames);
    }
  }
  resolveFrames(animConfig) {
    if (animConfig.source) {
      return this.resolveSourceFrames(animConfig.source);
    }
    if (animConfig.frames) {
      return animConfig.frames.map((frame) => this.resolveFrame(frame));
    }
    return [];
  }
  resolveSourceFrames(source) {
    var _a;
    const [spritesheetName, animationName] = source.split(":");
    const spritesheet = (_a = this.textureSystem) == null ? void 0 : _a.getSpritesheet(spritesheetName);
    if (!spritesheet) {
      return [];
    }
    const frameNames = spritesheet.getAnimation(animationName) || [];
    return frameNames.map((frameName) => ({
      region: spritesheet.getRegion(frameName),
      name: frameName
    }));
  }
  resolveFrame(frameConfig) {
    var _a, _b;
    if (frameConfig.region) {
      return {
        region: (_a = this.textureSystem) == null ? void 0 : _a.getRegion(frameConfig.region),
        duration: frameConfig.duration,
        events: frameConfig.events
      };
    }
    if (!frameConfig.source) {
      return { region: null };
    }
    const [spritesheetName, frameName] = frameConfig.source.split(":");
    const spritesheet = (_b = this.textureSystem) == null ? void 0 : _b.getSpritesheet(spritesheetName);
    if (!spritesheet) {
      return { region: null };
    }
    const region = spritesheet.getRegion(frameName);
    return {
      region,
      name: frameName,
      source: frameConfig.source,
      duration: frameConfig.duration,
      events: frameConfig.events
    };
  }
  play(name) {
    var _a;
    if (this.current) {
      this.current.stop();
    }
    this.current = this.getChild(name);
    (_a = this.current) == null ? void 0 : _a.restart();
    return this.current;
  }
  get(name) {
    return this.getChild(name);
  }
  update(deltaTime) {
    if (this.current) {
      this.current.update(deltaTime);
    }
  }
}
__publicField(SpriteAnimator, "$category", "spriteAnimator");
function registerFrameEvents(animation, frames) {
  frames.forEach((frame, index) => {
    if (frame.events) {
      for (const eventName of frame.events) {
        animation.addEvent(index, eventName);
      }
    }
  });
}
const sprite_animator_doc = doc("SpriteAnimator", () => {
  text(`
        Container for sprite animations. Extends [[PerkyModule@core]] and manages
        multiple [[SpriteAnimation@render]] children. Resolves animation frames from
        spritesheets or direct texture regions through [[TextureSystem@render/textures]].
    `);
  section("Configuration", () => {
    text(`
            Animations are defined in a config object where each key is an animation name.
            Frames can come from a spritesheet source or be listed individually.
        `);
    code("Source-based config", () => {
      new SpriteAnimator({
        config: {
          animations: {
            idle: {
              source: "character:idle",
              fps: 8,
              loop: true
            },
            run: {
              source: "character:run",
              fps: 12,
              playbackMode: "forward"
            }
          }
        }
      });
    });
    code("Frame-based config", () => {
      new SpriteAnimator({
        config: {
          animations: {
            attack: {
              frames: [
                { source: "character:attack_01", duration: 100 },
                { source: "character:attack_02", duration: 80 },
                { source: "character:attack_03", events: ["hit"] }
              ],
              fps: 10,
              loop: false
            }
          }
        }
      });
    });
  });
  section("Playback", () => {
    text(`
            Use \`play(name)\` to switch animations. The previous animation is stopped
            and the new one starts from the beginning. Call \`update(deltaTime)\` each
            frame to advance the current animation.
        `);
    code("Playing animations", () => {
      const animator = new SpriteAnimator();
      animator.play("idle");
      animator.play("run");
    });
  });
  section("Retrieving Animations", () => {
    text("Use `get(name)` to access a specific animation child.");
    code("Getting an animation", () => {
      const animator = new SpriteAnimator();
      animator.get("idle");
    });
  });
  section("Frame Events", () => {
    text(`
            Frames can trigger named events when reached during playback.
            Define events in the frame config and listen on the [[SpriteAnimation@render]] instance.
        `);
    code("Frame events config", () => {
      const animator = new SpriteAnimator({
        config: {
          animations: {
            attack: {
              frames: [
                { source: "hero:swing_01" },
                { source: "hero:swing_02", events: ["hit"] },
                { source: "hero:swing_03" }
              ]
            }
          }
        }
      });
      animator.get("attack");
    });
  });
});
export {
  sprite_animator_doc as default
};
