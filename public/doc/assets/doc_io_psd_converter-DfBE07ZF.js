import { N as Notifier, d as doc, t as text, s as section, c as code, a as action, l as logger } from "./runtime-DOmi4lo7.js";
import { p as parsePsd } from "./psd-Bk5qgwWq.js";
import { c as calculateResizeDimensions } from "./canvas-BKhKokj7.js";
import { c as countFrames, p as parseAnimationName, e as extractFramesFromGroup, r as resizeFrames, b as packFramesIntoAtlases, M as MAX_ATLAS_SIZE, n as nextPowerOfTwo, g as compositeAtlas, d as buildJsonData, f as findAnimationGroups } from "./spritesheet-Cxa07hsx.js";
import "./binary_reader-CGN852Tr.js";
import "./preload-helper-BbOs9S9B.js";
import "./utils-DVCexGPz.js";
import "./inflector-BxOpyWLP.js";
import "./shelf_packer-Cr1tslJC.js";
class PsdConverter extends Notifier {
  parse(buffer2) {
    return parse(buffer2);
  }
  getAnimationGroups(psd2) {
    return getAnimationGroups(psd2);
  }
  getAnimationInfo(psd2) {
    const groups = getAnimationGroups(psd2);
    return groups.map((group) => ({
      name: parseAnimationName(group.name),
      frameCount: countFrames(group)
    }));
  }
  async convert(psd2, options = {}) {
    const {
      targetWidth = null,
      targetHeight = null,
      nearest = false,
      name = psd2.filename || "sprite"
    } = options;
    this.emit("progress", { stage: "extracting", percent: 0 });
    const resize = calculateResizeDimensions(
      psd2.width,
      psd2.height,
      targetWidth,
      targetHeight
    );
    const animGroups = getAnimationGroups(psd2);
    let frames = [];
    const animations = {};
    for (const group of animGroups) {
      const animName = parseAnimationName(group.name);
      const groupFrames = extractFramesFromGroup(group, psd2.width, psd2.height);
      frames = frames.concat(groupFrames);
      animations[animName] = groupFrames.map((f) => f.filename);
    }
    this.emit("progress", { stage: "resizing", percent: 20 });
    frames = await resizeFrames(frames, {
      psdWidth: psd2.width,
      psdHeight: psd2.height,
      targetWidth: resize.width,
      targetHeight: resize.height,
      nearest
    });
    this.emit("progress", { stage: "packing", percent: 40 });
    const atlases = packFramesIntoAtlases(frames, MAX_ATLAS_SIZE);
    this.emit("progress", { stage: "compositing", percent: 60 });
    for (const atlas of atlases) {
      const usedHeight = atlas.packer.currentY;
      atlas.finalHeight = nextPowerOfTwo(usedHeight);
      atlas.canvas = await compositeAtlas(
        atlas.frames,
        MAX_ATLAS_SIZE,
        atlas.finalHeight
      );
    }
    this.emit("progress", { stage: "finalizing", percent: 80 });
    const spritesheetName = `${name}Spritesheet`;
    const spritesheetJson = buildJsonData(atlases, animations, name);
    const animatorConfig = buildAnimatorConfig(spritesheetName, animations);
    this.emit("progress", { stage: "complete", percent: 100 });
    return {
      atlases,
      spritesheetJson,
      animatorConfig,
      name,
      spritesheetName
    };
  }
  buildAnimatorConfig(spritesheetName, animations) {
    return buildAnimatorConfig(spritesheetName, animations);
  }
}
function parse(buffer2) {
  return parsePsd(new Uint8Array(buffer2));
}
function getAnimationGroups(psd2) {
  return findAnimationGroups(psd2.tree);
}
function buildAnimatorConfig(spritesheetName, animations) {
  const config = {
    spritesheet: spritesheetName,
    anchor: { x: 0.5, y: 0.5 },
    animations: {}
  };
  for (const [animName, frameNames] of Object.entries(animations)) {
    config.animations[animName] = {
      fps: 10,
      loop: true,
      frames: frameNames.map((frameName) => ({
        source: `${spritesheetName}:${frameName}`
      }))
    };
  }
  return config;
}
const psd_converter_doc = doc("PsdConverter", { advanced: true }, () => {
  text(`
        Orchestrates the full PSD-to-spritesheet pipeline. Parses a PSD file,
        extracts animation frames, resizes them, packs into atlases, and builds
        JSON metadata. Extends [[Notifier@core]] and emits progress events
        throughout the conversion.
    `);
  section("Parsing", () => {
    text("Parses a raw ArrayBuffer into a PSD structure using the parser from `psd.js`.");
    code("Parse a PSD file", () => {
      const converter2 = new PsdConverter();
      const psd2 = converter2.parse(buffer);
      psd2.width;
      psd2.height;
      psd2.tree;
    });
  });
  section("Animation Info", () => {
    text("Inspects the PSD tree to find animation groups and frame counts before running the full conversion.");
    action("getAnimationGroups", () => {
      logger.log('getAnimationGroups returns PSD groups named "anim - ..."');
      logger.log("getAnimationInfo returns [{name, frameCount}, ...]");
    });
    code("Inspect animations", () => {
      const converter2 = new PsdConverter();
      converter2.getAnimationGroups(psd);
      converter2.getAnimationInfo(psd);
    });
  });
  section("Conversion", () => {
    text(`
            The \`convert\` method runs the full pipeline: extract frames, resize,
            pack into atlases, composite, and build JSON. Emits progress events
            at each stage: extracting, resizing, packing, compositing, finalizing, complete.
        `);
    code("Full conversion", async () => {
      const converter2 = new PsdConverter();
      converter2.on("progress", ({ stage, percent }) => {
      });
      const result = await converter2.convert(psd, {
        targetWidth: 256,
        name: "hero"
      });
      result.atlases;
      result.spritesheetJson;
      result.animatorConfig;
      result.name;
      result.spritesheetName;
    });
  });
  section("Animator Config", () => {
    text(`
            Builds an animator configuration object from the conversion result.
            Each animation defaults to 10 fps with looping enabled.
        `);
    code("Config structure", () => {
      converter.buildAnimatorConfig("heroSpritesheet", {
        idle: ["idle_1", "idle_2"],
        run: ["run_1", "run_2", "run_3"]
      });
    });
  });
});
export {
  psd_converter_doc as default
};
