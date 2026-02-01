import { d as doc, t as text, s as section, c as code, a as action, l as logger } from "./runtime-DOmi4lo7.js";
import { S as SourceLoader } from "./source_loader-CBYKn62_.js";
import { A as Asset } from "./asset-DgAYMWu3.js";
import "./perky_module-DrWJO8l1.js";
import "./registry-CF_H4IOw.js";
import "./observable_map-BPZFGUWq.js";
import "./observable_set-BOSKLaPv.js";
import "./utils-DVCexGPz.js";
import "./inflector-BxOpyWLP.js";
const source_loader_doc = doc("SourceLoader", { advanced: true }, () => {
  text(`
        Handles the actual loading queue for a batch of assets.
        Takes a list of [[Asset@application]] instances and a set of type-specific loaders,
        then loads them in parallel while tracking progress.
        Used internally by [[SourceManager@application]].
    `);
  section("Basic Usage", () => {
    text("Create a SourceLoader with assets and loaders, then call `load()`.");
    code("Loading assets", () => {
      const assets2 = [
        new Asset({ id: "config", type: "json", url: "/config.json" }),
        new Asset({ id: "hero", type: "image", url: "/hero.png" })
      ];
      const loaders2 = {
        json: async ({ url }) => (await fetch(url)).json(),
        image: async ({ url }) => {
          const img = new Image();
          img.src = url;
          return img;
        }
      };
      const loader2 = new SourceLoader(assets2, loaders2);
      loader2.on("progress", (progress, { asset: asset2 }) => {
        logger.log(`${Math.round(progress * 100)}% - loaded ${asset2.id}`);
      });
      loader2.on("complete", (loadedAssets) => {
        logger.log(`Done! Loaded ${loadedAssets.length} assets`);
      });
      loader2.load();
    });
  });
  section("Progress Tracking", () => {
    text("Track loading progress with built-in properties.");
    action("Progress properties", () => {
      const assets2 = [
        new Asset({ id: "a", type: "json", source: { ready: true } }),
        new Asset({ id: "b", type: "json", url: "/b.json" }),
        new Asset({ id: "c", type: "json", url: "/c.json" })
      ];
      const loader2 = new SourceLoader(assets2, { json: async () => ({}) });
      logger.log("assetCount:", loader2.assetCount);
      logger.log("loadedCount:", loader2.loadedCount);
      logger.log("progress:", loader2.progress);
    });
  });
  section("Events", () => {
    text("SourceLoader emits events during the loading lifecycle.");
    code("Event handling", () => {
      loader.on("progress", (progress, { asset: asset2, source }) => {
      });
      loader.on("complete", (assets2) => {
      });
      loader.on("error", (asset2, error) => {
      });
    });
  });
  section("Deduplication", () => {
    text(`
            If the same asset is requested multiple times before it finishes loading,
            SourceLoader deduplicates the requests. Only one fetch is made per asset.
        `);
    code("Concurrent loads", () => {
      const loader2 = new SourceLoader(assets, loaders);
      loader2.loadAsset(asset);
      loader2.loadAsset(asset);
    });
  });
});
export {
  source_loader_doc as default
};
