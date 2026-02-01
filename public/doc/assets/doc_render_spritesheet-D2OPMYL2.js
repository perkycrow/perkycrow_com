import { d as doc, t as text, s as section, c as code, b as container } from "./runtime-DOmi4lo7.js";
import { a as loadSpritesheet } from "./loaders-DdncYhBP.js";
import { S as Spritesheet } from "./spritesheet-MeS99rNQ.js";
import "./texture_region-Buaf2v24.js";
const spritesheet_doc = doc("Spritesheet", () => {
  text(`
        Manages spritesheet data including frames and animations.
        Parses JSON atlas data and provides easy access to [[TextureRegion@render/textures]] objects.
    `);
  section("Loading a Spritesheet", () => {
    text("Create a Spritesheet from an image and JSON atlas data.");
    code("Basic usage", () => {
      new Spritesheet({
        image,
        data
      });
    });
    code("Multiple atlas images", () => {
      new Spritesheet({
        images: [image0, image1],
        data
      });
    });
    code("JSON format", () => {
    });
  });
  section("Accessing Frames", () => {
    text("Get individual frames or groups of frames by name.");
    container({ title: "Frame access demo", height: 250, preset: "centered" }, async (ctx) => {
      const wrapper = ctx.column({ gap: 12 });
      const source = await loadSpritesheet("./assets/spritesheets/red.json");
      const spritesheet2 = new Spritesheet(source);
      ctx.label(`Frames: ${spritesheet2.listFrames().length}`, { parent: wrapper });
      ctx.label(`Animations: ${spritesheet2.listAnimations().join(", ")}`, { parent: wrapper });
      const frame = spritesheet2.getFrame("throw/1");
      if (frame) {
        ctx.label(`Frame 'throw/1': ${frame.frame.w}x${frame.frame.h}px`, { parent: wrapper });
      }
      const region = spritesheet2.getRegion("throw/1");
      if (region) {
        const canvas = document.createElement("canvas");
        canvas.width = region.width;
        canvas.height = region.height;
        const cctx = canvas.getContext("2d");
        cctx.drawImage(
          region.image,
          region.x,
          region.y,
          region.width,
          region.height,
          0,
          0,
          region.width,
          region.height
        );
        ctx.canvas(canvas, { maxWidth: 100, parent: wrapper });
      }
    });
    code("getFrame / getRegion", () => {
      spritesheet.getFrame("hero/idle");
      spritesheet.getRegion("hero/idle");
    });
    code("getFrames / getRegions", () => {
      spritesheet.getFrames(["a", "c"]);
      spritesheet.getFrames();
      spritesheet.getRegions(["a", "b", "c"]);
    });
  });
  section("Animations", () => {
    text(`
            Spritesheets can define named animations as arrays of frame names.
            Use these with [[SpriteAnimation@render]] for playback.
        `);
    container({ title: "Animation frames", height: 200, preset: "centered" }, async (ctx) => {
      const wrapper = ctx.row({ gap: 8 });
      const source = await loadSpritesheet("./assets/spritesheets/red.json");
      const spritesheet2 = new Spritesheet(source);
      const regions = spritesheet2.getAnimationRegions("throw");
      for (const region of regions.slice(0, 4)) {
        const canvas = document.createElement("canvas");
        canvas.width = region.width;
        canvas.height = region.height;
        const cctx = canvas.getContext("2d");
        cctx.drawImage(
          region.image,
          region.x,
          region.y,
          region.width,
          region.height,
          0,
          0,
          region.width,
          region.height
        );
        ctx.canvas(canvas, { maxWidth: 80, parent: wrapper });
      }
    });
    code("getAnimation / getAnimationRegions", () => {
      spritesheet.getAnimation("walk");
      spritesheet.getAnimationRegions("walk");
    });
    code("With SpriteAnimation", () => {
      const sprite = new Sprite({
        image: spritesheet.images[0]
      });
      const animation = new SpriteAnimation({
        sprite,
        frames: spritesheet.getAnimationRegions("walk"),
        fps: 12,
        loop: true
      });
      animation.play();
    });
  });
  section("Listing Contents", () => {
    text("Inspect what frames and animations are available.");
    code("listFrames / listAnimations", () => {
      spritesheet.listFrames();
      spritesheet.listAnimations();
    });
  });
  section("Properties", () => {
    text(`
            - \`images\` - Array of source images
            - \`data\` - The parsed JSON atlas data
            - \`animations\` - Object mapping animation names to frame arrays
            - \`framesMap\` - Internal Map of frame name to frame data
        `);
    code("Accessing properties", () => {
      spritesheet.images[0];
      Object.keys(spritesheet.animations);
      spritesheet.data.meta;
    });
  });
});
export {
  spritesheet_doc as default
};
