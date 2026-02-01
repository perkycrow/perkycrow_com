import { d as doc, t as text, s as section, g as see, c as code } from "./runtime-DOmi4lo7.js";
const discovery_doc = doc("Discovery", { advanced: true }, () => {
  text(`
        Build step that crawls the project for .doc.js and .guide.js files.
        Produces JSON index files consumed by the doc viewer and the static page generator.
    `);
  section("What It Generates", () => {
    text(`
            Running discovery produces four outputs:
            - docs.json — index of all docs and guides with titles, categories, and flags
            - api.json — structured API metadata extracted from source files
            - tests.json — test structure extracted from .test.js files
            - sources/ — extracted source code per doc file as JSON
        `);
    see("Doc Page", { section: "Tabs" });
  });
  section("Ordering", () => {
    text(`
            Categories and items within categories are sorted using order.json.
            Items not listed in order.json appear alphabetically after the ordered ones.
            Featured docs sort before non-featured within the same position.
        `);
    code("order.json structure", () => {
    });
  });
  section("Doc Metadata", () => {
    text(`
            Each discovered doc file is parsed for metadata.
            The title comes from the first argument of the doc() call.
            Options like featured and advanced are extracted from the second argument.
        `);
    code("Doc entry", () => {
    });
  });
});
export {
  discovery_doc as default
};
