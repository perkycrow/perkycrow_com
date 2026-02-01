import { d as doc, t as text, s as section, c as code, a as action, l as logger } from "./runtime-DOmi4lo7.js";
import { c as createElement, s as setStyle, d as setAttributes } from "./dom_utils-DTpHkHXB.js";
import "./utils-DVCexGPz.js";
import "./inflector-BxOpyWLP.js";
const dom_utils_doc = doc("DOM Utils", () => {
  text(`
        Low-level DOM helpers for creating and configuring elements.
        Reduces boilerplate when building UI components.
    `);
  section("createElement", () => {
    text(`
            Creates an element with common properties in a single call.
            Accepts tag name, class, text, html, style, and any direct attribute
            like \`id\`, \`type\`, \`value\`, \`placeholder\`, etc.
        `);
    code("Basic usage", () => {
      createElement("div", { class: "container" });
      createElement("button", { text: "Click me", class: "btn" });
      createElement("input", { type: "text", placeholder: "Name" });
    });
    code("With styles and attributes", () => {
      createElement("div", {
        class: "panel",
        style: { background: "#1a1a2e", padding: "12px" },
        attrs: { "data-role": "sidebar", "aria-label": "Navigation" }
      });
    });
  });
  section("setStyle", () => {
    text("Applies styles to an element. Accepts an object or a CSS string.");
    action("Object syntax", () => {
      const el = createElement("div");
      setStyle(el, { color: "red", fontSize: "14px" });
      logger.log("color:", el.style.color);
      logger.log("fontSize:", el.style.fontSize);
    });
    action("String syntax", () => {
      const el = createElement("div");
      setStyle(el, "display:flex;gap:8px;");
      logger.log("cssText:", el.style.cssText);
    });
  });
  section("setAttributes", () => {
    text(`
            Sets HTML attributes on an element.
            Automatically converts camelCase keys to kebab-case.
        `);
    action("Example", () => {
      const el = createElement("div");
      setAttributes(el, { dataValue: "42", ariaHidden: "true" });
      logger.log("data-value:", el.getAttribute("data-value"));
      logger.log("aria-hidden:", el.getAttribute("aria-hidden"));
    });
  });
});
export {
  dom_utils_doc as default
};
