import { d as doc, t as text, s as section, c as code } from "./runtime-DOmi4lo7.js";
const doc_parser_doc = doc("Doc Parser", { advanced: true }, () => {
  text(`
        Parses .doc.js and .guide.js files to extract their block structure without executing them.
        Used by the discovery step to produce source JSON for the viewer.
    `);
  section("parseDocFile", () => {
    text(`
            Reads a doc file from disk and returns an array of extracted blocks.
            Each block has a type, title (if applicable), and its source code as a string.
        `);
    code("Basic usage", () => {
      parseDocFile("/path/to/logger.doc.js");
    });
  });
  section("Block Types", () => {
    text(`
            The parser extracts code, action, container, and setup blocks.
            Text and section blocks are not extracted since they contain no executable source.
        `);
    code("Extracted block structure", () => {
    });
  });
  section("Source Extraction", () => {
    text(`
            Block bodies are extracted from the AST, stripped of their surrounding braces,
            and dedented. Lines containing ctx.setApp() calls are filtered out since
            those are internal wiring not useful in the displayed source.
        `);
  });
});
export {
  doc_parser_doc as default
};
