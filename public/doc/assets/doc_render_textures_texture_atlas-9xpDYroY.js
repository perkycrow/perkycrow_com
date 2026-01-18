import { d as doc, t as text, s as section, f as container, c as code, l as logger } from "./runtime-Bve5cOyN.js";
import { T as TextureAtlasManager, a as TextureAtlas } from "./texture_atlas_manager-SSrHAie-.js";
import { e as pluralize } from "./utils-Bje3PFeD.js";
import "./texture_region-Buaf2v24.js";
import "./inflector-BxOpyWLP.js";
const texture_atlas_doc = doc("TextureAtlas", { advanced: true }, () => {
  text(`
        Dynamic texture atlas that packs multiple images into a single texture.
        Uses a shelf-packing algorithm to efficiently arrange images.
        Useful for batching draw calls by combining multiple sprites into one texture.
    `);
  section("Atlas Preview", () => {
    text(`
            Pack multiple images into atlases using [[TextureAtlasManager@render/textures]].
            When one atlas is full, a new one is created automatically.
        `);
    container({ title: "Generated atlases", height: 420, scrollable: true, preset: "centered" }, (ctx) => {
      const manager = new TextureAtlasManager({ atlasSize: 512 });
      const images = [
        { name: "logo", src: "./assets/images/logo.png", scale: 0.5 },
        { name: "shroom", src: "./assets/images/shroom.png", scale: 0.5 },
        { name: "spore", src: "./assets/images/spore.png", scale: 1 },
        { name: "next", src: "./assets/images/next.png", scale: 0.5 },
        { name: "restart", src: "./assets/images/restart.png", scale: 0.5 }
      ];
      let loaded = 0;
      const loadedImages = [];
      const wrapper = ctx.column({ gap: 8 });
      const infoLabel = ctx.label("Loading images...", { parent: wrapper });
      const atlasesRow = ctx.row({ gap: 12, parent: wrapper });
      function scaleImage(img, scale) {
        const w = Math.floor(img.width * scale);
        const h = Math.floor(img.height * scale);
        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        canvas.getContext("2d").drawImage(img, 0, 0, w, h);
        return canvas;
      }
      function buildAtlases() {
        const scaled = loadedImages.map(({ name, img, scale }) => ({
          name,
          canvas: scaleImage(img, scale)
        }));
        scaled.sort((a, b) => b.canvas.height - a.canvas.height);
        for (const { name, canvas } of scaled) {
          manager.add(name, canvas);
        }
        manager.atlases.forEach((atlas, i) => {
          const col = ctx.column({ parent: atlasesRow });
          ctx.label(`Atlas ${i + 1} (${pluralize("region", atlas.regionCount, true)}${atlas.full ? ", full" : ""})`, { parent: col });
          ctx.canvas(atlas.canvas, { maxWidth: 300, parent: col });
        });
        infoLabel.textContent = `Total: ${pluralize("atlas", manager.atlasCount, true)} | ${pluralize("region", manager.regionCount, true)}`;
      }
      images.forEach(({ name, src, scale }) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          loadedImages.push({ name, img, scale });
          loaded++;
          infoLabel.textContent = `Loading ${loaded}/${images.length}...`;
          if (loaded === images.length) {
            buildAtlases();
          }
        };
      });
    });
  });
  section("Basic Usage", () => {
    text("Create an atlas and add images to it.");
    code("Creating and using an atlas", () => {
      const atlas = new TextureAtlas({
        width: 1024,
        height: 1024,
        padding: 1
      });
      atlas.add("sprite-id", imageElement);
      atlas.get("sprite-id");
      if (atlas.canFit(128, 128)) ;
    });
  });
  section("Properties", () => {
    text(`
            - \`width\` / \`height\` - Atlas dimensions in pixels
            - \`padding\` - Space between packed images (default: 1)
            - \`canvas\` - The underlying canvas element
            - \`dirty\` - True if atlas was modified since last markClean()
            - \`full\` - True if no more images can be packed
            - \`regionCount\` - Number of images in the atlas
        `);
    code("Checking atlas state", () => {
      const atlas = new TextureAtlas({ width: 512, height: 512 });
      atlas.add("image1", img1);
      atlas.add("image2", img2);
      logger.log(atlas.regionCount);
      logger.log(atlas.full);
      logger.log(atlas.dirty);
      atlas.markClean();
      logger.log(atlas.dirty);
    });
  });
  section("Clearing and Disposal", () => {
    text("Clear the atlas to reuse it, or dispose when done.");
    code("Clear vs dispose", () => {
      const atlas = new TextureAtlas();
      atlas.clear();
      atlas.dispose();
    });
  });
});
export {
  texture_atlas_doc as default
};
