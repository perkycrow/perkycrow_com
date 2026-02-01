import { d as doc, t as text, s as section, c as code } from "./runtime-DOmi4lo7.js";
import { M as Manifest } from "./manifest-D91-_JTr.js";
import { S as SourceManager } from "./source_manager-k7LyJEiO.js";
import { T as TextureSystem } from "./texture_system-BkxYEMIE.js";
import { l as loaders } from "./loaders-DdncYhBP.js";
import { R as Registry } from "./registry-CF_H4IOw.js";
import "./perky_module-DrWJO8l1.js";
import "./observable_set-BOSKLaPv.js";
import "./utils-DVCexGPz.js";
import "./inflector-BxOpyWLP.js";
import "./asset-DgAYMWu3.js";
import "./source_loader-CBYKn62_.js";
import "./texture_atlas_manager-CGiofXV5.js";
import "./texture_region-Buaf2v24.js";
import "./shelf_packer-Cr1tslJC.js";
import "./spritesheet-MeS99rNQ.js";
import "./observable_map-BPZFGUWq.js";
function rewriteUrls(data, basePath) {
  const rewritten = { ...data, assets: {} };
  for (const [id, asset] of Object.entries(data.assets)) {
    rewritten.assets[id] = {
      ...asset,
      url: asset.url.replace("./", basePath)
    };
  }
  return rewritten;
}
async function loadManifest(manifestData2, basePath) {
  const data = rewriteUrls(manifestData2, basePath);
  const manifest2 = new Manifest({ data });
  const sourceManager = new SourceManager({
    loaders: new Registry(loaders),
    manifest: manifest2
  });
  await sourceManager.loadAll();
  return manifest2;
}
function buildTextureSystem(manifest2) {
  const textureSystem = new TextureSystem();
  const imageAssets = manifest2.getAssetsByType("image");
  textureSystem.buildFromAssets(imageAssets);
  const spritesheetAssets = manifest2.getAssetsByType("spritesheet");
  for (const asset of spritesheetAssets) {
    if (asset.source) {
      textureSystem.registerSpritesheet(asset.id, asset.source);
    }
  }
  return textureSystem;
}
function collectAnimators(manifest2) {
  const animatorAssets = manifest2.getAssetsByType("animator");
  const animators = {};
  for (const asset of animatorAssets) {
    if (asset.source) {
      animators[asset.id] = asset.source;
    }
  }
  return animators;
}
function getStudioConfig(manifest2, tool) {
  return manifest2.getConfig(`studio.${tool}`) || {};
}
function getBackgroundImage(manifest2, studioConfig) {
  const backgroundId = studioConfig.background;
  const backgroundAsset = backgroundId ? manifest2.getAsset(backgroundId) : null;
  return (backgroundAsset == null ? void 0 : backgroundAsset.source) || null;
}
const launcher_doc = doc("Launcher", { advanced: true }, () => {
  text(`
        Shared utilities for studio entry points. Handles manifest loading,
        texture system construction, and animator collection. Used by both
        the hub ([[HubView@studio]]) and the animator editor
        ([[AnimatorView@studio/animator]]).
    `);
  section("loadManifest", () => {
    text(`
            Loads and resolves a game manifest. Optionally rewrites asset URLs
            with a base path prefix, then loads all sources via a
            [[SourceManager@application]].
        `);
    code("Usage", async () => {
      await loadManifest(manifestData, "../game/");
    });
  });
  section("buildTextureSystem", () => {
    text(`
            Creates a [[TextureSystem@render/textures]] from a loaded manifest.
            Registers all image assets and spritesheets so they can be
            queried by name.
        `);
    code("Usage", () => {
      buildTextureSystem(manifest);
    });
  });
  section("collectAnimators", () => {
    text(`
            Extracts all animator assets from the manifest into a plain object
            keyed by asset id.
        `);
    code("Usage", () => {
      collectAnimators(manifest);
    });
  });
  section("getStudioConfig / getBackgroundImage", () => {
    text(`
            Helper accessors for studio-specific manifest configuration.
            \`getStudioConfig\` reads the \`studio.<tool>\` config block.
            \`getBackgroundImage\` resolves the background asset source
            from the studio config.
        `);
    code("Usage", () => {
      const config = getStudioConfig(manifest, "animator");
      getBackgroundImage(manifest, config);
    });
  });
});
export {
  launcher_doc as default
};
