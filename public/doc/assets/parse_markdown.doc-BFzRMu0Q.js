import { d as doc, t as text, s as section, c as code, a as action, l as logger } from "./runtime-DOmi4lo7.js";
import { p as parseMarkdown } from "./main-Ay6DwDKg.js";
import "./preload-helper-BbOs9S9B.js";
import "./editor_component-KitFp2Fu.js";
import "./dom_utils-DTpHkHXB.js";
import "./utils-DVCexGPz.js";
import "./inflector-BxOpyWLP.js";
import "./vec2_log_renderer-CHeUJOoI.js";
import "./vec2-BvD8ope7.js";
const parse_markdown_doc = doc("Parse Markdown", { advanced: true }, () => {
  text(`
        Lightweight markdown parser for doc content.
        Converts a subset of markdown to HTML for rendering in doc pages.
    `);
  section("Supported Syntax", () => {
    text(`
            Handles the most common inline and block formatting:
            - \`**bold**\` → **bold**
            - \`*italic*\` → *italic*
            - Backtick inline code
            - Double-bracket cross-reference links
            - Unordered lists with \`- \` prefix
            - Horizontal rules with \`---\`
            - Paragraphs separated by blank lines
        `);
  });
  section("parseMarkdown", () => {
    text(`
            Takes a markdown string and returns an HTML string.
            Paragraphs are separated by double newlines.
        `);
    code("Basic usage", () => {
      parseMarkdown("Hello **world**");
      parseMarkdown("Use `code` here");
    });
    action("Parse markdown", () => {
      const html = parseMarkdown(`
                First paragraph with **bold** and *italic*.

                Second paragraph with \`inline code\`.

                - Item one
                - Item two
            `);
      logger.log(html);
    });
  });
  section("Cross-References", () => {
    text(`
            Double-bracket syntax creates links to other doc pages.
            The link format supports page type, category, and section anchors.
        `);
    code("Link syntax", () => {
      parseMarkdown("See [[Logger]]");
      parseMarkdown("See [[Logger:api]]");
      parseMarkdown("See [[Application@application]]");
      parseMarkdown("See [[Logger#Events]]");
    });
  });
});
export {
  parse_markdown_doc as default
};
