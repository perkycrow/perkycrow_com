import { d as doc, t as text, s as section, c as code, a as action, i as dedent, l as logger, j as dedentSource } from "./runtime-DOmi4lo7.js";
const dedent_doc = doc("Dedent", { advanced: true }, () => {
  text(`
        Removes common leading whitespace from multi-line strings.
        Used by the doc runtime to clean up template literals in text and code blocks.
    `);
  section("dedent", () => {
    text(`
            Strips the smallest shared indentation from all lines.
            Empty leading and trailing lines are trimmed by default.
        `);
    code("Basic usage", () => {
      dedent(`
                hello
                world
            `);
    });
    action("Dedent a string", (ctx) => {
      const result = dedent(`
                first line
                    indented line
                back to base
            `);
      logger.log(result);
    });
  });
  section("Options", () => {
    text(`
            Pass an options object to control trimming and first-line behavior.
        `);
    code("trimEmptyLines", () => {
      dedent("\n    hello\n", { trimEmptyLines: false });
    });
    code("preserveFirstLine", () => {
      dedent("first\n    second\n    third", { preserveFirstLine: true });
    });
  });
  section("dedentSource", () => {
    text(`
            Shortcut for dedenting source code.
            Preserves the first line and does not trim empty lines.
        `);
    code("Usage", () => {
      dedentSource("function foo() {\n    return 1\n}");
    });
  });
});
export {
  dedent_doc as default
};
