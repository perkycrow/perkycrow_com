import { d as doc, t as text, s as section, c as code, g as see } from "./runtime-DOmi4lo7.js";
const doc_viewer_doc = doc("Doc Viewer", { advanced: true }, () => {
  text(`
        Browser-side controller for the documentation site.
        Loads JSON indexes, builds the sidebar, handles navigation,
        search, and the advanced docs toggle. Dynamically imports
        doc modules when the user clicks one.
    `);
  section("DocViewer", () => {
    text(`
            Main class that drives the documentation viewer.
            Instantiated once on DOMContentLoaded. Expects a page
            with specific DOM elements: a container for doc pages,
            a navigation sidebar, and a search input.
        `);
    code("Initialization", () => {
      const viewer2 = new DocViewer();
      viewer2.init();
    });
  });
  section("init", () => {
    text(`
            Loads metadata (docs.json, api.json, tests.json), sets up
            navigation and search, then routes to the current page
            based on the URL.
        `);
  });
  section("Navigation", () => {
    text(`
            The sidebar has two sections — Docs and Guides — toggled
            by a switcher. Nav items are grouped by category and
            support an advanced toggle that hides less common entries.
        `);
    code("switchSection", () => {
      viewer.switchSection("guides");
    });
  });
  section("Search", () => {
    text(`
            Filters nav items by title or category as the user types.
            When a search is active, the advanced toggle is disabled
            and all items become visible so nothing is hidden from results.
        `);
  });
  section("Routing", () => {
    text(`
            Routes are derived from the URL filename. Doc pages follow
            the pattern \`category_name.html\`, API pages end with
            \`_api.html\`, test pages with \`_test.html\`, and guides
            start with \`guide_\`.
        `);
    see("Doc Page");
    see("Doc Registry");
  });
});
export {
  doc_viewer_doc as default
};
