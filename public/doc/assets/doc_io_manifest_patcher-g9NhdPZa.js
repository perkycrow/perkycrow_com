import { d as doc, t as text, s as section, a as action, l as logger, c as code } from "./runtime-DOmi4lo7.js";
function applyOverrides(manifestData, overrides) {
  const assets = { ...manifestData.assets };
  for (const { id, source } of overrides) {
    if (assets[id]) {
      assets[id] = { ...assets[id], source };
    }
  }
  return { ...manifestData, assets };
}
const manifest_patcher_doc = doc("ManifestPatcher", { advanced: true }, () => {
  text(`
        Bridges Studio and the game at runtime. Loads custom assets from IndexedDB
        via [[PerkyStore@perky_store]] and patches them into the game manifest so they
        override the built-in versions. Used by games that support the \`?studio\` URL parameter.
    `);
  section("applyOverrides", () => {
    text("Applies a list of overrides to a manifest data object. Each override replaces the source of a matching asset by id.");
    action("Override an asset", () => {
      const manifest = {
        assets: {
          player: { type: "spritesheet", source: "/assets/player.json" },
          enemy: { type: "spritesheet", source: "/assets/enemy.json" }
        }
      };
      const overrides = [
        { id: "player", source: { custom: true } }
      ];
      const patched = applyOverrides(manifest, overrides);
      logger.log("player source:", JSON.stringify(patched.assets.player.source));
      logger.log("enemy source:", patched.assets.enemy.source);
    });
    action("Non-matching overrides are ignored", () => {
      const manifest = {
        assets: {
          player: { type: "spritesheet", source: "/assets/player.json" }
        }
      };
      const overrides = [
        { id: "unknown", source: { custom: true } }
      ];
      const patched = applyOverrides(manifest, overrides);
      logger.log("player unchanged:", patched.assets.player.source);
      logger.log("unknown added:", patched.assets.unknown === void 0);
    });
  });
  section("loadStudioOverrides", () => {
    text(`
            Reads all animator resources from [[PerkyStore@perky_store]], extracts their
            configuration files, and builds an override list. Each animator produces an
            override for its config, and optionally one for its spritesheet if present.
        `);
    code("Typical usage", async () => {
      const overrides = await loadStudioOverrides();
      applyOverrides(originalManifest, overrides);
    });
  });
});
export {
  manifest_patcher_doc as default
};
