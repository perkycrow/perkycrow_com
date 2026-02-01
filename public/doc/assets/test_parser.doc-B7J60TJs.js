import { d as doc, t as text, s as section, c as code } from "./runtime-DOmi4lo7.js";
const test_parser_doc = doc("Test Parser", { advanced: true }, () => {
  text(`
        Extracts test structure from .test.js files using Acorn. Produces
        structured metadata for the Test tab in the doc viewer.
    `);
  section("parseTestFile", () => {
    text(`
            Parses test source code into an AST and extracts all top-level
            describe blocks with their nested tests, hooks, and sub-describes.
        `);
    code("Usage", () => {
      const result = parseTestFile(source, "/core/logger.test.js");
      result.file;
      result.describes[0].title;
      result.describes[0].tests[0];
    });
    code("Result structure", () => {
    });
  });
  section("getTestsForFile", () => {
    text(`
            Higher-level wrapper around parseTestFile. Returns the parsed
            result if any describe blocks were found, or null otherwise.
        `);
    code("Usage", () => {
      const tests = getTestsForFile(source, "/core/logger.test.js");
      tests.describes.length;
    });
  });
});
export {
  test_parser_doc as default
};
