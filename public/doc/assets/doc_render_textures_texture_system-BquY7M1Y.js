import { d as doc, t as text, s as section, f as container, c as code } from "./runtime-D8el-yK6.js";
import { T as TextureSystem } from "./texture_system-BhrVNTo1.js";
import { e as pluralize } from "./utils-CPyB8f8f.js";
import "./perky_module-BJShv6RO.js";
import "./registry-DalNpkO9.js";
import "./observable_map-PG-iVMD3.js";
import "./observable_set-CrYi1grl.js";
import "./texture_atlas_manager-CIhOxnHz.js";
import "./texture_region-Buaf2v24.js";
import "./inflector--UCXb4XA.js";
const texture_system_doc = doc("TextureSystem", { advanced: true }, () => {
  text(`
        High-level texture management system that automatically packs images
        into texture atlases. Integrates with the renderer to optimize draw calls
        by batching sprites that share the same atlas texture.
    `);
  section("Live Demo", () => {
    text("Add images to the texture system and see how they are packed into atlases.");
    container({ title: "Texture system in action", height: 420, scrollable: true, preset: "centered" }, (ctx) => {
      const system = new TextureSystem({ atlasSize: 512 });
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
      function buildSystem() {
        const scaled = loadedImages.map(({ name, img, scale }) => ({
          name,
          canvas: scaleImage(img, scale)
        }));
        scaled.sort((a, b) => b.canvas.height - a.canvas.height);
        for (const { name, canvas } of scaled) {
          system.addRegion(name, canvas);
        }
        system.atlases.forEach((atlas, i) => {
          const col = ctx.column({ parent: atlasesRow });
          ctx.label(`Atlas ${i + 1} (${pluralize("region", atlas.regionCount, true)})`, { parent: col });
          ctx.canvas(atlas.canvas, { maxWidth: 300, parent: col });
        });
        infoLabel.textContent = `TextureSystem: ${pluralize("region", system.regionCount, true)} in ${pluralize("atlas", system.atlases.length, true)}`;
      }
      images.forEach(({ name, src, scale }) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          loadedImages.push({ name, img, scale });
          loaded++;
          infoLabel.textContent = `Loading ${loaded}/${images.length}...`;
          if (loaded === images.length) {
            buildSystem();
          }
        };
      });
    });
  });
  section("Basic Usage", () => {
    text("Create a texture system and add images to it.");
    code("Adding regions", () => {
      const textureSystem = new TextureSystem({
        atlasSize: 2048
        // Optional, default is 2048
      });
      textureSystem.addRegion("player", playerImage);
      textureSystem.addRegions({
        enemy: enemyImage,
        bullet: bulletImage,
        explosion: explosionImage
      });
      textureSystem.getRegion("player");
      if (textureSystem.hasRegion("player")) ;
    });
  });
  section("Manual Atlases", () => {
    text(`
            For pre-made spritesheets with known frame positions,
            use \`registerManualAtlas\` to define regions without repacking.
        `);
    code("Registering a spritesheet", () => {
      const textureSystem = new TextureSystem();
      const frames = {
        idle: { x: 0, y: 0, w: 64, h: 64 },
        run1: { x: 64, y: 0, w: 64, h: 64 },
        run2: { x: 128, y: 0, w: 64, h: 64 },
        jump: { x: 192, y: 0, w: 64, h: 64 }
      };
      textureSystem.registerManualAtlas("hero", spritesheetImage, frames);
      textureSystem.getRegion("hero:idle");
      textureSystem.getRegion("hero:run1");
    });
  });
  section("Integration", () => {
    text(`
            TextureSystem is a [[PerkyModule@core]] that can be installed on a host.
            When installed, it delegates key methods to the host for convenience.
        `);
    code("As a module", () => {
      host.addRegion("sprite", image);
      host.getRegion("sprite");
    });
  });
  section("Dirty Tracking", () => {
    text(`
            The system tracks which atlases have been modified since the last
            GPU upload. This allows efficient texture updates.
        `);
    code("Syncing with GPU", () => {
      const textureSystem = new TextureSystem();
      textureSystem.addRegion("a", imageA);
      textureSystem.addRegion("b", imageB);
      const dirtyAtlases = textureSystem.getDirtyAtlases();
      for (const atlas of dirtyAtlases) {
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, atlas.canvas);
      }
      textureSystem.markAllClean();
    });
  });
});
export {
  texture_system_doc as default
};
