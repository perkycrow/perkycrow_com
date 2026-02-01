import { d as doc, t as text, s as section, c as code, g as see } from "./runtime-DOmi4lo7.js";
const doc_page_doc = doc("Doc Page", { advanced: true }, () => {
  text(`
        Web component that renders documentation pages.
        Handles doc, API, and test tabs with navigation and code highlighting.
    `);
  section("Usage", () => {
    text(`
            The doc-page element is used internally by the doc viewer.
            Set the doc property with a doc data structure.
        `);
    code("Basic usage", () => {
      const docPage2 = document.createElement("doc-page");
      docPage2.doc = {
        title: "My Module",
        blocks: [
          { type: "text", content: "Introduction text." }
        ]
      };
      document.body.appendChild(docPage2);
    });
  });
  section("Properties", () => {
    text("The component accepts several properties to control rendering.");
    code("doc", () => {
      docPage.doc = {
        title: "Module Name",
        blocks: []
      };
    });
    code("api", () => {
      docPage.api = {
        classes: [{ name: "MyClass", methods: [] }],
        functions: [],
        constants: []
      };
    });
    code("tests", () => {
      docPage.tests = {
        describes: [{
          title: "MyClass",
          tests: [{ title: "does something" }]
        }]
      };
    });
    code("sources", () => {
      docPage.sources = {
        "action-0": 'logger.log("hello")',
        "container-1": 'ctx.hint("demo")'
      };
    });
    code("initialTab", () => {
      docPage.initialTab = "api";
    });
  });
  section("Tabs", () => {
    text(`
            Doc pages can have up to three tabs depending on available data:
            - Doc: main documentation with text, code, actions, containers
            - API: auto-generated API reference from source
            - Test: test suite visualization
        `);
    code("Available tabs", () => {
      docPage.availableTabs;
      docPage.activeTab;
    });
  });
  section("Block Types", () => {
    text("The doc tab renders various block types.");
    code("text block", () => {
    });
    code("code block", () => {
    });
    code("action block", () => {
    });
    code("container block", () => {
    });
    code("section block", () => {
    });
    code("see block", () => {
    });
    code("disclaimer block", () => {
    });
  });
  section("Styling", () => {
    text(`
            The component uses Shadow DOM with scoped styles.
            Styles are defined in doc_page.styles.js.
        `);
    see("Doc Runtime", { section: "Container Presets" });
  });
});
export {
  doc_page_doc as default
};
