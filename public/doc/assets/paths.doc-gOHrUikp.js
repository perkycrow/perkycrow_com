import { d as doc, t as text, s as section, c as code } from "./runtime-DOmi4lo7.js";
const paths_doc = doc("Paths", { advanced: true }, () => {
  text(`
        URL helpers for the documentation system.
        Builds page URLs for docs, guides, API references, and test pages.
    `);
  section("buildDocUrl", () => {
    text(`
            Builds a URL for a documentation page.
            Resolves the name against the doc registry, falling back to a kebab-case convention.
        `);
    code("Basic usage", () => {
      buildDocUrl({ name: "Logger" });
      buildDocUrl({ name: "Logger", pageType: "api" });
      buildDocUrl({ name: "Logger", section: "Events" });
    });
    code("Guide URLs", () => {
      buildDocUrl({ name: "Foreword", pageType: "guide" });
    });
  });
  section("getTabUrl", () => {
    text(`
            Returns the URL for a tab (doc, api, or test) based on the current page.
            Used by the doc page component to switch between tabs.
        `);
    code("Tab switching", () => {
      getTabUrl("doc");
      getTabUrl("api");
      getTabUrl("test");
    });
  });
  section("docFileToHtml", () => {
    text(`
            Converts a doc file path to an HTML filename.
        `);
    code("Usage", () => {
      docFileToHtml("/core/logger.doc.js");
      docFileToHtml("/core/logger.doc.js", "api");
    });
  });
  section("extractBaseName", () => {
    text(`
            Extracts the base name from an HTML filename by stripping suffixes.
        `);
    code("Usage", () => {
      extractBaseName("core_logger_api.html");
      extractBaseName("core_logger.html");
    });
  });
});
export {
  paths_doc as default
};
