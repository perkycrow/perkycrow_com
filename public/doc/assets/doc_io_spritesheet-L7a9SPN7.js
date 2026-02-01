import { d as doc, t as text, s as section, a as action, l as logger } from "./runtime-DOmi4lo7.js";
import { i as isAnimationGroup, p as parseAnimationName, f as findAnimationGroups, a as parseFrameNumber, c as countFrames, b as packFramesIntoAtlases, n as nextPowerOfTwo, d as buildJsonData, M as MAX_ATLAS_SIZE, P as PADDING } from "./spritesheet-Cxa07hsx.js";
import "./utils-DVCexGPz.js";
import "./inflector-BxOpyWLP.js";
import "./shelf_packer-Cr1tslJC.js";
import "./canvas-BKhKokj7.js";
import "./preload-helper-BbOs9S9B.js";
import "./psd-Bk5qgwWq.js";
import "./binary_reader-CGN852Tr.js";
const spritesheet_doc = doc("Spritesheet", { advanced: true }, () => {
  text(`
        Frame extraction and atlas packing utilities for the PSD-to-spritesheet pipeline.
        Finds animation groups in a PSD layer tree, extracts numbered frames, packs them
        into atlases using shelf packing, and builds the JSON metadata.
        Used internally by PsdConverter.
    `);
  section("Animation Groups", () => {
    text(`
            PSD groups named \`anim - idle\`, \`anim run\`, etc. are recognized as animation groups.
            The prefix \`anim\` followed by a separator and the animation name is the convention.
        `);
    action("isAnimationGroup", () => {
      logger.log("anim - idle:", isAnimationGroup("anim - idle"));
      logger.log("anim run:", isAnimationGroup("anim run"));
      logger.log("background:", isAnimationGroup("background"));
      logger.log("Anim-Jump:", isAnimationGroup("Anim-Jump"));
    });
    action("parseAnimationName", () => {
      logger.log("anim - idle:", parseAnimationName("anim - idle"));
      logger.log("anim run fast:", parseAnimationName("anim run fast"));
      logger.log("Anim-Jump:", parseAnimationName("Anim-Jump"));
    });
  });
  section("Finding Groups in a Tree", () => {
    text("Traverses a PSD layer tree and collects all animation groups.");
    action("findAnimationGroups", () => {
      const tree = [
        { type: "group", name: "anim - idle", children: [] },
        {
          type: "group",
          name: "background",
          children: [
            { type: "group", name: "anim - walk", children: [] }
          ]
        },
        { type: "layer", name: "overlay" }
      ];
      const groups = findAnimationGroups(tree);
      for (const group of groups) {
        logger.log("found:", group.name);
      }
    });
  });
  section("Frame Parsing", () => {
    text("Frame layers are numbered: `1`, `2 detail`, `3`. The number prefix identifies the frame order.");
    action("parseFrameNumber", () => {
      logger.log("1:", parseFrameNumber("1"));
      logger.log("2 detail:", parseFrameNumber("2 detail"));
      logger.log("background:", parseFrameNumber("background"));
      logger.log("03 extra:", parseFrameNumber("03 extra"));
    });
    action("countFrames", () => {
      const group = {
        children: [
          { type: "layer", name: "1" },
          { type: "layer", name: "2" },
          { type: "layer", name: "3" },
          { type: "layer", name: "shadow" },
          { type: "group", name: "sub" }
        ]
      };
      logger.log("frame count:", countFrames(group));
    });
  });
  section("Atlas Packing", () => {
    text(`
            Frames are packed into atlas images using a shelf packing algorithm.
            If frames don't fit in one atlas, additional atlases are created.
            Max atlas size is ${MAX_ATLAS_SIZE}px with ${PADDING}px padding between frames.
        `);
    action("packFramesIntoAtlases", () => {
      const frames = [
        { filename: "idle/1", width: 64, height: 64, pixels: null },
        { filename: "idle/2", width: 64, height: 64, pixels: null },
        { filename: "walk/1", width: 64, height: 64, pixels: null },
        { filename: "walk/2", width: 64, height: 64, pixels: null }
      ];
      const atlases = packFramesIntoAtlases(frames, 256);
      logger.log("atlas count:", atlases.length);
      logger.log("frames in first atlas:", atlases[0].frames.length);
      for (const frame of atlases[0].frames) {
        logger.log(`${frame.filename} at (${frame.x}, ${frame.y})`);
      }
    });
  });
  section("Utilities", () => {
    action("nextPowerOfTwo", () => {
      logger.log("10 →", nextPowerOfTwo(10));
      logger.log("33 →", nextPowerOfTwo(33));
      logger.log("128 →", nextPowerOfTwo(128));
      logger.log("500 →", nextPowerOfTwo(500));
      logger.log("2000 →", nextPowerOfTwo(2e3));
    });
  });
  section("JSON Output", () => {
    text("Builds the spritesheet JSON metadata from packed atlases and animation data.");
    action("buildJsonData", () => {
      const atlases = [{
        frames: [
          { filename: "idle/1", x: 0, y: 0, width: 64, height: 64 },
          { filename: "idle/2", x: 65, y: 0, width: 64, height: 64 }
        ],
        finalHeight: 64
      }];
      const animations = {
        idle: { frames: ["idle/1", "idle/2"], fps: 8 }
      };
      const json = buildJsonData(atlases, animations, "hero");
      logger.log("frames:", json.frames.length);
      logger.log("animations:", Object.keys(json.animations));
      logger.log("images:", json.meta.images.length);
    });
  });
});
export {
  spritesheet_doc as default
};
