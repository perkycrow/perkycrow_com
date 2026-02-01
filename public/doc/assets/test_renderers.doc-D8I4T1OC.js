import { d as doc, t as text, s as section, c as code } from "./runtime-DOmi4lo7.js";
const test_renderers_doc = doc("Test Renderers", { advanced: true }, () => {
  text(`
        Renderers for the test tab. Creates the DOM structure
        that displays test suites, individual test cases, and
        lifecycle hooks with their source code.
    `);
  section("createDescribeWrapper", () => {
    text(`
            Creates a wrapper element for a describe block. Top-level
            blocks get a root style, nested blocks get a subtitle style.
            Only assigns an id for the first two depth levels (used for
            table-of-contents navigation).
        `);
    code("Usage", () => {
      createDescribeWrapper(describe, "section-id", 0);
      createDescribeWrapper(describe, "nested-id", 2);
    });
  });
  section("addDescribeTocLink", () => {
    text(`
            Appends a table-of-contents link for a describe block.
            Root-level links get an extra class. Skips anything
            deeper than depth 1.
        `);
    code("Usage", () => {
      addDescribeTocLink(tocList, "PerkyModule", "section-id", 0);
      addDescribeTocLink(tocList, "update", "nested-id", 1);
    });
  });
  section("renderTestHook", () => {
    text(`
            Renders a lifecycle hook (beforeEach, afterEach, etc.)
            as a labeled block with optional source code.
        `);
    code("Usage", () => {
      renderTestHook("beforeEach", { source: "game = new Game()" });
    });
  });
  section("renderTest", () => {
    text(`
            Renders a single test case as a code block with the
            test title and source.
        `);
    code("Usage", () => {
      renderTest({ title: "update", source: "expect(game.fps).toBe(60)" });
    });
  });
});
export {
  test_renderers_doc as default
};
