var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { d as doc, t as text, s as section, c as code, l as logger } from "./runtime-DVl2nrG4.js";
import { S as SourceManager } from "./source_manager-B_kglfgl.js";
import { M as Manifest } from "./manifest-cI-BMjRV.js";
import { R as Registry } from "./registry-fw3VIFkv.js";
import "./perky_module-H-JzEFBm.js";
import "./observable_set-BMifQRYa.js";
import "./utils-CPyB8f8f.js";
import "./inflector--UCXb4XA.js";
import "./asset-CuLWpPYs.js";
import "./observable_map-C8tnEId_.js";
const source_manager_doc = doc("SourceManager", () => {
  text(`
        Handles asset loading for Perky applications.
        Uses type-specific loaders to fetch and process assets from [[Manifest@application]].
        Extends [[PerkyModule]] and emits progress events during loading.
    `);
  section("Basic Usage", () => {
    text(`
            SourceManager requires a manifest (asset registry) and loaders (type-specific load functions).
            It's typically created automatically by [[Application@application]].
        `);
    code("Setup with Application", () => {
      class MyGame extends Application {
      }
      __publicField(MyGame, "manifest", {
        assets: {
          hero: { type: "image", url: "/hero.png", tags: ["preload"] }
        }
      });
      const game = new MyGame({ $id: "game" });
      game.preload();
    });
  });
  section("Loading Methods", () => {
    text("Three methods for loading assets: single asset, by tag, or all assets.");
    code("loadAsset", () => {
      app.loadAsset("hero").then(() => {
        app.getSource("hero");
      });
    });
    code("loadTag", () => {
      app.loadTag("preload").then(() => {
      });
    });
    code("loadAll", () => {
      app.loadAll().then(() => {
      });
    });
  });
  section("Loading Events", () => {
    text(`
            SourceManager emits events during the loading process.
            When installed on a host, events are prefixed with \`loader:\`.
        `);
    code("Event handling", () => {
      app.on("loader:progress", ({ loaded, total, asset }) => {
        const percent = Math.round(loaded / total * 100);
        logger.log(`Loading: ${percent}% - ${asset.id}`);
      });
      app.on("loader:complete", (assets) => {
        logger.log(`Loaded ${assets.length} assets`);
      });
      app.on("loader:error", ({ asset, error }) => {
        logger.error(`Failed to load ${asset.id}:`, error);
      });
    });
  });
  section("Custom Loaders", () => {
    text(`
            Loaders are functions that receive asset params and return the loaded source.
            Each asset type needs a corresponding loader.
        `);
    code("Loader function signature", () => {
      const imageLoader = async ({ url }) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve(img);
          img.onerror = reject;
          img.src = url;
        });
      };
      const jsonLoader = async ({ url }) => {
        const response = await fetch(url);
        return response.json();
      };
      new Registry({
        image: imageLoader,
        json: jsonLoader
      });
    });
    code("Using custom loaders", () => {
      const manifest = new Manifest({
        data: {
          assets: {
            data: { type: "json", url: "/data.json" }
          }
        }
      });
      new SourceManager({
        manifest,
        loaders: {
          json: async ({ url }) => {
            const res = await fetch(url);
            return res.json();
          }
        }
      });
    });
  });
  section("Host Delegation", () => {
    text(`
            When installed on a host module, SourceManager delegates its methods.
            This allows the host to use \`loadAsset\`, \`loadTag\`, etc. directly.
        `);
    code("Delegated methods", () => {
    });
    code("Delegated events", () => {
    });
  });
});
export {
  source_manager_doc as default
};
