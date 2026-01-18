var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _elapsed, _events, _framesByEvent, _pingpongDirection, _SpriteAnimation_instances, advanceFrame_fn, getNextFrameIndex_fn, getNextForward_fn, getNextReverse_fn, getNextPingpong_fn, emitFrameEvents_fn, updateSpriteFrame_fn;
import { d as doc, t as text, s as section, f as container, c as code, b as action, l as logger } from "./runtime-Bve5cOyN.js";
import { l as loadSpritesheet } from "./loaders-BPPjM6oY.js";
import { P as PerkyModule } from "./perky_module-CDYsQSv9.js";
import { S as Spritesheet } from "./spritesheet-MeS99rNQ.js";
import { S as Sprite } from "./sprite-Do0QfU8k.js";
import { G as Group2D } from "./group_2d-B-hGIEMS.js";
import { W as WebGLRenderer } from "./webgl_renderer-DaG7IDHy.js";
import "./registry-BmMVxDIp.js";
import "./observable_map-CRpP7ZPx.js";
import "./observable_set-BwzSVQHh.js";
import "./utils-Bje3PFeD.js";
import "./inflector-BxOpyWLP.js";
import "./texture_region-Buaf2v24.js";
import "./object_2d-DKcr5oBk.js";
import "./transform-DC3tDXed.js";
import "./traverse-D34r-iXQ.js";
import "./circle-CP_IlbCy.js";
import "./rectangle-CaoTFuaL.js";
class SpriteAnimation extends PerkyModule {
  constructor(options = {}) {
    super(options);
    __privateAdd(this, _SpriteAnimation_instances);
    __privateAdd(this, _elapsed, 0);
    __privateAdd(this, _events, /* @__PURE__ */ new Map());
    __privateAdd(this, _framesByEvent, /* @__PURE__ */ new Map());
    __privateAdd(this, _pingpongDirection, 1);
    const { sprite: sprite2, frames: frames2, fps = 12, loop = true, speed = 1, playbackMode = "forward" } = options;
    this.sprite = sprite2;
    this.frames = Array.isArray(frames2) ? frames2 : [];
    this.fps = fps;
    this.loop = loop;
    this.speed = speed;
    this.playbackMode = playbackMode;
    this.currentIndex = 0;
    this.playing = false;
    this.completed = false;
  }
  get frameDuration() {
    return 1 / this.fps;
  }
  getFrameDuration(index) {
    const frame = this.frames[index];
    const baseDuration = this.frameDuration;
    if (frame && typeof frame.duration === "number") {
      return baseDuration * frame.duration;
    }
    return baseDuration;
  }
  get currentFrameDuration() {
    return this.getFrameDuration(this.currentIndex);
  }
  get totalFrames() {
    return this.frames.length;
  }
  get currentFrame() {
    return this.frames[this.currentIndex] || null;
  }
  get progress() {
    return this.totalFrames > 0 ? this.currentIndex / this.totalFrames : 0;
  }
  play() {
    if (this.playing || this.totalFrames === 0) {
      return this;
    }
    this.playing = true;
    this.completed = false;
    __privateSet(this, _elapsed, 0);
    __privateMethod(this, _SpriteAnimation_instances, updateSpriteFrame_fn).call(this);
    this.emit("play");
    return this;
  }
  pause() {
    if (!this.playing) {
      return this;
    }
    this.playing = false;
    this.emit("pause");
    return this;
  }
  stop() {
    this.playing = false;
    this.currentIndex = 0;
    this.completed = false;
    __privateSet(this, _elapsed, 0);
    __privateMethod(this, _SpriteAnimation_instances, updateSpriteFrame_fn).call(this);
    this.emit("stop");
    return this;
  }
  restart() {
    this.currentIndex = 0;
    this.completed = false;
    __privateSet(this, _elapsed, 0);
    this.playing = true;
    __privateMethod(this, _SpriteAnimation_instances, updateSpriteFrame_fn).call(this);
    this.emit("play");
    return this;
  }
  setFrame(index) {
    if (index >= 0 && index < this.totalFrames) {
      this.currentIndex = index;
      __privateMethod(this, _SpriteAnimation_instances, updateSpriteFrame_fn).call(this);
      this.emit("frameChanged", this.currentFrame, index);
    }
    return this;
  }
  setFrameByName(frameName) {
    const index = this.frames.indexOf(frameName);
    if (index !== -1) {
      this.setFrame(index);
    }
    return this;
  }
  nextFrame() {
    const nextIndex = (this.currentIndex + 1) % this.totalFrames;
    this.setFrame(nextIndex);
    return this;
  }
  previousFrame() {
    const prevIndex = this.currentIndex === 0 ? this.totalFrames - 1 : this.currentIndex - 1;
    this.setFrame(prevIndex);
    return this;
  }
  setFps(fps) {
    this.fps = fps;
    this.emit("fpsChanged", fps);
    return this;
  }
  setLoop(loop) {
    this.loop = loop;
    return this;
  }
  setSpeed(speed) {
    this.speed = speed;
    return this;
  }
  setPlaybackMode(mode) {
    this.playbackMode = mode;
    if (mode === "reverse") {
      __privateSet(this, _pingpongDirection, -1);
    } else {
      __privateSet(this, _pingpongDirection, 1);
    }
    return this;
  }
  addEvent(frameIndex, eventName) {
    if (!__privateGet(this, _events).has(frameIndex)) {
      __privateGet(this, _events).set(frameIndex, []);
    }
    __privateGet(this, _events).get(frameIndex).push(eventName);
    if (!__privateGet(this, _framesByEvent).has(eventName)) {
      __privateGet(this, _framesByEvent).set(eventName, []);
    }
    __privateGet(this, _framesByEvent).get(eventName).push(frameIndex);
    return this;
  }
  removeEvent(frameIndex, eventName) {
    if (!__privateGet(this, _events).has(frameIndex)) {
      return this;
    }
    const events = __privateGet(this, _events).get(frameIndex);
    const index = events.indexOf(eventName);
    if (index !== -1) {
      events.splice(index, 1);
    }
    if (events.length === 0) {
      __privateGet(this, _events).delete(frameIndex);
    }
    if (__privateGet(this, _framesByEvent).has(eventName)) {
      const frames2 = __privateGet(this, _framesByEvent).get(eventName);
      const frameIdx = frames2.indexOf(frameIndex);
      if (frameIdx !== -1) {
        frames2.splice(frameIdx, 1);
      }
      if (frames2.length === 0) {
        __privateGet(this, _framesByEvent).delete(eventName);
      }
    }
    return this;
  }
  clearEvents() {
    __privateGet(this, _events).clear();
    __privateGet(this, _framesByEvent).clear();
    return this;
  }
  getEvents(frameIndex) {
    return __privateGet(this, _events).get(frameIndex) || [];
  }
  getFramesByEvent(eventName) {
    return __privateGet(this, _framesByEvent).get(eventName) || [];
  }
  getSegmentProgress(eventName) {
    const keyframes = this.getFramesByEvent(eventName);
    if (keyframes.length < 2) {
      return 0;
    }
    const current = this.currentIndex;
    for (let i = 0; i < keyframes.length; i++) {
      const start = keyframes[i];
      const end = keyframes[(i + 1) % keyframes.length];
      const isInSegment = end > start ? current >= start && current < end : current >= start || current < end;
      if (isInSegment) {
        const segmentLength = end > start ? end - start : this.totalFrames - start + end;
        const position = current >= start ? current - start : this.totalFrames - start + current;
        return position / segmentLength;
      }
    }
    return 0;
  }
  seekToFrame(index) {
    if (index >= 0 && index < this.totalFrames) {
      this.currentIndex = index;
      __privateSet(this, _elapsed, 0);
      __privateMethod(this, _SpriteAnimation_instances, updateSpriteFrame_fn).call(this);
    }
    return this;
  }
  seekToProgress(progress) {
    const clampedProgress = Math.max(0, Math.min(1, progress));
    const targetIndex = Math.floor(clampedProgress * this.totalFrames);
    return this.seekToFrame(Math.min(targetIndex, this.totalFrames - 1));
  }
  update(deltaTime) {
    if (!this.playing || this.completed) {
      return;
    }
    __privateSet(this, _elapsed, __privateGet(this, _elapsed) + deltaTime * this.speed);
    while (__privateGet(this, _elapsed) >= this.currentFrameDuration) {
      __privateSet(this, _elapsed, __privateGet(this, _elapsed) - this.currentFrameDuration);
      __privateMethod(this, _SpriteAnimation_instances, advanceFrame_fn).call(this);
      if (this.completed) {
        break;
      }
    }
  }
  onDispose() {
    this.playing = false;
    this.sprite = null;
    this.frames = [];
    __privateGet(this, _events).clear();
    __privateGet(this, _framesByEvent).clear();
  }
}
_elapsed = new WeakMap();
_events = new WeakMap();
_framesByEvent = new WeakMap();
_pingpongDirection = new WeakMap();
_SpriteAnimation_instances = new WeakSet();
advanceFrame_fn = function() {
  const previousIndex = this.currentIndex;
  const nextIndex = __privateMethod(this, _SpriteAnimation_instances, getNextFrameIndex_fn).call(this);
  if (nextIndex === null) {
    this.playing = false;
    this.completed = true;
    this.emit("complete");
    return;
  }
  this.currentIndex = nextIndex;
  __privateMethod(this, _SpriteAnimation_instances, emitFrameEvents_fn).call(this, previousIndex, this.currentIndex);
  __privateMethod(this, _SpriteAnimation_instances, updateSpriteFrame_fn).call(this);
  this.emit("frameChanged", this.currentFrame, this.currentIndex);
};
getNextFrameIndex_fn = function() {
  const lastIndex = this.totalFrames - 1;
  if (this.playbackMode === "forward") {
    return __privateMethod(this, _SpriteAnimation_instances, getNextForward_fn).call(this, lastIndex);
  }
  if (this.playbackMode === "reverse") {
    return __privateMethod(this, _SpriteAnimation_instances, getNextReverse_fn).call(this, lastIndex);
  }
  if (this.playbackMode === "pingpong") {
    return __privateMethod(this, _SpriteAnimation_instances, getNextPingpong_fn).call(this, lastIndex);
  }
  return __privateMethod(this, _SpriteAnimation_instances, getNextForward_fn).call(this, lastIndex);
};
getNextForward_fn = function(lastIndex) {
  if (this.currentIndex < lastIndex) {
    return this.currentIndex + 1;
  }
  if (this.loop) {
    this.emit("loop");
    return 0;
  }
  return null;
};
getNextReverse_fn = function(lastIndex) {
  if (this.currentIndex > 0) {
    return this.currentIndex - 1;
  }
  if (this.loop) {
    this.emit("loop");
    return lastIndex;
  }
  return null;
};
getNextPingpong_fn = function(lastIndex) {
  const nextIndex = this.currentIndex + __privateGet(this, _pingpongDirection);
  if (nextIndex >= 0 && nextIndex <= lastIndex) {
    return nextIndex;
  }
  __privateSet(this, _pingpongDirection, __privateGet(this, _pingpongDirection) * -1);
  this.emit("bounce", __privateGet(this, _pingpongDirection));
  if (!this.loop && this.currentIndex === 0) {
    return null;
  }
  return this.currentIndex + __privateGet(this, _pingpongDirection);
};
emitFrameEvents_fn = function(previousIndex, currentIndex) {
  const events = __privateGet(this, _events).get(currentIndex);
  if (events) {
    for (const eventName of events) {
      this.emit("event", eventName, currentIndex);
      this.emit(`event:${eventName}`, currentIndex);
    }
  }
};
updateSpriteFrame_fn = function() {
  if (!this.sprite || !this.currentFrame) {
    return;
  }
  if (this.currentFrame.region) {
    this.sprite.region = this.currentFrame.region;
  } else {
    this.sprite.region = this.currentFrame;
  }
};
const sprite_animation_doc = doc("SpriteAnimation", () => {
  text(`
        Frame-based animation controller for [[Sprite@render]].
        Manages frame sequencing, timing, playback modes, and animation events.
        Extends [[PerkyModule@core]].
    `);
  section("Live Demo", () => {
    text("Interactive animation with frame navigation and playback controls.");
    container({ title: "Animation playback", height: 350 }, async (ctx) => {
      const source = await loadSpritesheet("./assets/spritesheets/red.json");
      const spritesheet2 = new Spritesheet(source);
      const renderer = new WebGLRenderer({
        container: ctx.container,
        autoFit: true,
        backgroundColor: "#1a1a2e"
      });
      const scene = new Group2D();
      const sprite2 = new Sprite({
        image: spritesheet2.images[0],
        width: 8,
        height: 8,
        anchorX: 0.5,
        anchorY: 0.5
      });
      scene.add(sprite2);
      const animation = new SpriteAnimation({
        sprite: sprite2,
        frames: spritesheet2.getAnimationRegions("skip"),
        fps: 12,
        loop: true
      });
      renderer.render(scene);
      const frameLabel = ctx.label(`Frame: 0 / ${animation.totalFrames - 1}`, { overlay: true });
      const frameSlider = ctx.slider("frame", {
        min: 0,
        max: animation.totalFrames - 1,
        step: 1
      }, (value) => {
        animation.setFrame(value);
        renderer.render(scene);
      });
      animation.on("frameChanged", () => {
        frameLabel.textContent = `Frame: ${animation.currentIndex} / ${animation.totalFrames - 1}`;
        frameSlider.set(animation.currentIndex);
        renderer.render(scene);
      });
      ctx.action("Next", () => {
        animation.nextFrame();
      });
      ctx.action("Previous", () => {
        animation.previousFrame();
      });
      ctx.setApp(renderer, scene);
    });
    container({ title: "Playback modes", height: 300 }, async (ctx) => {
      const source = await loadSpritesheet("./assets/spritesheets/red.json");
      const spritesheet2 = new Spritesheet(source);
      const renderer = new WebGLRenderer({
        container: ctx.container,
        autoFit: true,
        backgroundColor: "#16213e"
      });
      const scene = new Group2D();
      const sprite2 = new Sprite({
        image: spritesheet2.images[0],
        width: 8,
        height: 8,
        anchorX: 0.5,
        anchorY: 0.5
      });
      scene.add(sprite2);
      let playbackMode = "forward";
      const animation = new SpriteAnimation({
        sprite: sprite2,
        frames: spritesheet2.getAnimationRegions("skip"),
        fps: 10,
        loop: true,
        playbackMode
      });
      renderer.render(scene);
      ctx.slider("frame", { min: 0, max: animation.totalFrames - 1, step: 1, default: 0 }, (value) => {
        animation.setFrame(value);
        renderer.render(scene);
      });
      ctx.action("Forward", () => {
        playbackMode = "forward";
        animation.setPlaybackMode(playbackMode);
      });
      ctx.action("Reverse", () => {
        playbackMode = "reverse";
        animation.setPlaybackMode(playbackMode);
      });
      ctx.action("Ping-pong", () => {
        playbackMode = "pingpong";
        animation.setPlaybackMode(playbackMode);
      });
      ctx.setApp(renderer, scene);
    });
  });
  section("Creation", () => {
    text("Create an animation with frames and timing options.");
    code("Basic animation", () => {
      new SpriteAnimation({
        sprite: mySprite,
        frames: [frame1, frame2, frame3, frame4],
        fps: 12
      });
    });
    code("Full options", () => {
      new SpriteAnimation({
        sprite: mySprite,
        frames,
        fps: 24,
        loop: true,
        speed: 1,
        playbackMode: "forward"
      });
    });
    code("Frame structure", () => {
    });
  });
  section("Playback", () => {
    text("Control animation playback with play, pause, stop, and restart.");
    action("play / pause / stop", () => {
      const animation = new SpriteAnimation({
        frames: [{}, {}, {}],
        fps: 12
      });
      animation.play();
      logger.log("playing:", animation.playing);
      animation.pause();
      logger.log("after pause:", animation.playing);
      animation.play();
      animation.stop();
      logger.log("after stop:", animation.playing, "index:", animation.currentIndex);
    });
    action("restart", () => {
      const animation = new SpriteAnimation({
        frames: [{}, {}, {}, {}],
        fps: 12
      });
      animation.play();
      animation.setFrame(2);
      logger.log("at frame:", animation.currentIndex);
      animation.restart();
      logger.log("after restart:", animation.currentIndex, "playing:", animation.playing);
    });
    code("Method chaining", () => {
      const animation = new SpriteAnimation({ frames, fps: 12 });
      animation.setSpeed(1.5).setLoop(true).play();
    });
  });
  section("Playback Modes", () => {
    text(`
            Three playback modes control how frames advance:
            - \`'forward'\`: Frames play 0 → last, then loop or complete
            - \`'reverse'\`: Frames play last → 0, then loop or complete
            - \`'pingpong'\`: Frames bounce back and forth (0 → last → 0)
        `);
    action("setPlaybackMode", () => {
      const animation = new SpriteAnimation({
        frames: [{}, {}, {}, {}],
        fps: 12
      });
      animation.setPlaybackMode("forward");
      logger.log("forward mode:", animation.playbackMode);
      animation.setPlaybackMode("reverse");
      logger.log("reverse mode:", animation.playbackMode);
      animation.setPlaybackMode("pingpong");
      logger.log("pingpong mode:", animation.playbackMode);
    });
    code("Playback mode constants", () => {
      new SpriteAnimation({
        frames: walkFrames,
        playbackMode: "pingpong"
      });
    });
  });
  section("Frame Navigation", () => {
    text("Navigate to specific frames manually.");
    action("setFrame", () => {
      const animation = new SpriteAnimation({
        frames: [{}, {}, {}, {}],
        fps: 12
      });
      animation.setFrame(2);
      logger.log("currentIndex:", animation.currentIndex);
      logger.log("currentFrame:", animation.currentFrame ? "set" : "null");
    });
    action("nextFrame / previousFrame", () => {
      const animation = new SpriteAnimation({
        frames: [{}, {}, {}, {}],
        fps: 12
      });
      animation.setFrame(1);
      logger.log("start:", animation.currentIndex);
      animation.nextFrame();
      logger.log("after next:", animation.currentIndex);
      animation.previousFrame();
      logger.log("after previous:", animation.currentIndex);
    });
    action("seekToFrame / seekToProgress", () => {
      const animation = new SpriteAnimation({
        frames: [{}, {}, {}, {}],
        fps: 12
      });
      animation.seekToFrame(3);
      logger.log("seekToFrame(3):", animation.currentIndex);
      animation.seekToProgress(0.5);
      logger.log("seekToProgress(0.5):", animation.currentIndex);
      animation.seekToProgress(0);
      logger.log("seekToProgress(0):", animation.currentIndex);
    });
  });
  section("Timing", () => {
    text("Control animation speed with FPS, speed multiplier, and per-frame duration.");
    action("fps / setFps", () => {
      const animation = new SpriteAnimation({
        frames: [{}, {}, {}],
        fps: 12
      });
      logger.log("fps:", animation.fps);
      logger.log("frameDuration:", animation.frameDuration, "seconds");
      animation.setFps(24);
      logger.log("after setFps(24):", animation.frameDuration, "seconds");
    });
    action("speed / setSpeed", () => {
      const animation = new SpriteAnimation({
        frames: [{}, {}, {}],
        fps: 12,
        speed: 1
      });
      logger.log("default speed:", animation.speed);
      animation.setSpeed(2);
      logger.log("2x speed:", animation.speed);
      animation.setSpeed(0.5);
      logger.log("half speed:", animation.speed);
    });
    code("Per-frame duration", () => {
      const frames2 = [
        { region: { x: 0, y: 0, w: 32, h: 32 }, duration: 1 },
        { region: { x: 32, y: 0, w: 32, h: 32 }, duration: 3 },
        // 3x longer
        { region: { x: 64, y: 0, w: 32, h: 32 }, duration: 1 }
      ];
      new SpriteAnimation({ frames: frames2, fps: 12 });
    });
  });
  section("Looping", () => {
    text("Control whether the animation loops or completes after playing once.");
    action("loop / setLoop", () => {
      const animation = new SpriteAnimation({
        frames: [{}, {}, {}],
        fps: 12,
        loop: true
      });
      logger.log("default loop:", animation.loop);
      animation.setLoop(false);
      logger.log("after setLoop(false):", animation.loop);
    });
    code("Non-looping animation", () => {
      const deathAnimation = new SpriteAnimation({
        sprite: mySprite,
        frames: deathFrames,
        fps: 12,
        loop: false
      });
      deathAnimation.on("complete", () => {
        sprite.dispose();
      });
      deathAnimation.play();
    });
  });
  section("Events", () => {
    text(`
            SpriteAnimation emits events during playback:
            - \`play\`: Animation started
            - \`pause\`: Animation paused
            - \`stop\`: Animation stopped
            - \`complete\`: Non-looping animation finished
            - \`loop\`: Animation looped back to start
            - \`bounce\`: Pingpong animation changed direction
            - \`frameChanged\`: Current frame changed
            - \`fpsChanged\`: FPS was modified
        `);
    code("Listening to events", () => {
      const animation = new SpriteAnimation({ frames, fps: 12 });
      animation.on("play", () => {
        logger.log("Animation started");
      });
      animation.on("complete", () => {
        logger.log("Animation finished");
      });
      animation.on("loop", () => {
        logger.log("Animation looped");
      });
      animation.on("frameChanged", (frame, index) => {
        logger.log("Now on frame", index);
      });
    });
  });
  section("Frame Events", () => {
    text("Trigger custom events when specific frames are reached.");
    action("addEvent / removeEvent", () => {
      const animation = new SpriteAnimation({
        frames: [{}, {}, {}, {}, {}],
        fps: 12
      });
      animation.addEvent(2, "footstep");
      animation.addEvent(4, "footstep");
      animation.addEvent(3, "attack");
      logger.log("events at frame 2:", animation.getEvents(2));
      logger.log("events at frame 3:", animation.getEvents(3));
      logger.log("events at frame 4:", animation.getEvents(4));
      animation.removeEvent(2, "footstep");
      logger.log("after remove:", animation.getEvents(2));
    });
    action("clearEvents", () => {
      const animation = new SpriteAnimation({
        frames: [{}, {}, {}, {}],
        fps: 12
      });
      animation.addEvent(0, "start");
      animation.addEvent(1, "middle");
      animation.addEvent(3, "end");
      animation.clearEvents();
      logger.log("events at 0:", animation.getEvents(0));
      logger.log("events at 1:", animation.getEvents(1));
      logger.log("events at 3:", animation.getEvents(3));
    });
    code("Frame event usage", () => {
      const walkAnimation = new SpriteAnimation({
        sprite: playerSprite,
        frames: walkFrames,
        fps: 12
      });
      walkAnimation.addEvent(2, "footstep");
      walkAnimation.addEvent(6, "footstep");
      walkAnimation.on("event:footstep", (frameIndex) => {
        playSound("footstep.wav");
      });
      walkAnimation.on("event", (eventName, frameIndex) => {
        logger.log(`Event "${eventName}" at frame ${frameIndex}`);
      });
    });
  });
  section("Progress", () => {
    text("Query animation progress and state.");
    action("progress / totalFrames", () => {
      const animation = new SpriteAnimation({
        frames: [{}, {}, {}, {}, {}],
        fps: 12
      });
      logger.log("totalFrames:", animation.totalFrames);
      animation.setFrame(0);
      logger.log("progress at 0:", animation.progress);
      animation.setFrame(2);
      logger.log("progress at 2:", animation.progress);
      animation.setFrame(4);
      logger.log("progress at 4:", animation.progress);
    });
    action("State properties", () => {
      const animation = new SpriteAnimation({
        frames: [{}, {}, {}],
        fps: 12,
        loop: false
      });
      logger.log("playing:", animation.playing);
      logger.log("completed:", animation.completed);
      animation.play();
      logger.log("after play - playing:", animation.playing);
    });
  });
  section("Update Loop", () => {
    text("Call update() each frame with delta time to advance the animation.");
    code("Manual update", () => {
      const animation = new SpriteAnimation({
        sprite: mySprite,
        frames,
        fps: 12
      });
      animation.play();
    });
    code("With Perky engine", () => {
      const sprite2 = new Sprite({ image: spritesheet });
      const animation = new SpriteAnimation({
        sprite: sprite2,
        frames: walkFrames,
        fps: 12
      });
      engine.add(animation);
      animation.play();
    });
  });
});
export {
  sprite_animation_doc as default
};
