import { d as doc, t as text, s as section, c as code, a as action, l as logger } from "./runtime-DOmi4lo7.js";
import { n as normalizeParams, r as replaceUrlFilename, b as removeFileExtension, l as loaders } from "./loaders-DdncYhBP.js";
const loaders_doc = doc("Loaders", { advanced: true }, () => {
  text(`
        Built-in asset loaders for Perky applications.
        Each loader handles a specific asset type (image, json, audio, etc.) and is used
        by [[SourceManager@application]] to fetch and process assets from a [[Manifest@application]].
    `);
  section("Available Loaders", () => {
    text("The default loader registry maps asset types to loader functions.");
    code("Loader registry", () => {
      loaders.response;
      loaders.blob;
      loaders.image;
      loaders.text;
      loaders.json;
      loaders.arrayBuffer;
      loaders.audio;
      loaders.font;
      loaders.spritesheet;
      loaders.animator;
    });
  });
  section("normalizeParams", () => {
    text("Normalizes loader input. Accepts either a URL string or an object with `url` and `config`.");
    action("String input", () => {
      const result = normalizeParams("/sprites/hero.png");
      logger.log("url:", result.url);
      logger.log("config:", JSON.stringify(result.config));
    });
    action("Object input", () => {
      const result = normalizeParams({
        url: "/data/levels.json",
        config: { credentials: "include" }
      });
      logger.log("url:", result.url);
      logger.log("config:", JSON.stringify(result.config));
    });
  });
  section("URL Helpers", () => {
    text("Utility functions for manipulating asset URLs.");
    action("replaceUrlFilename", () => {
      const original = "/assets/sprites/hero.json";
      const replaced = replaceUrlFilename(original, "hero.png");
      logger.log("original:", original);
      logger.log("replaced:", replaced);
    });
    action("removeFileExtension", () => {
      logger.log(removeFileExtension("hero.png"));
      logger.log(removeFileExtension("data.level.json"));
      logger.log(removeFileExtension("readme"));
    });
  });
  section("Custom Loaders", () => {
    text(`
            You can register custom loaders for new asset types.
            A loader is an async function that receives params (\`{url, config}\`) and returns the loaded source.
        `);
    code("Custom loader example", () => {
      const csvLoader = async ({ url }) => {
        const response = await fetch(url);
        const content = await response.text();
        return content.split("\n").map((line) => line.split(","));
      };
      app.loaders.set("csv", csvLoader);
    });
  });
});
export {
  loaders_doc as default
};
