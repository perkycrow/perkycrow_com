import { d as doc, t as text, s as section, c as code, b as container, l as logger } from "./runtime-DOmi4lo7.js";
import "./toggle_input-xvj77i30.js";
import "./editor_component-KitFp2Fu.js";
import "./dom_utils-DTpHkHXB.js";
import "./utils-DVCexGPz.js";
import "./inflector-BxOpyWLP.js";
import "./index-Defq3ZXV.js";
import "./base_input-3TimJ94Y.js";
const toggle_input_doc = doc("ToggleInput", { advanced: true }, () => {
  text(`
        A toggle switch input component. Emits a "change" event with
        \`detail.checked\` when toggled.
    `);
  section("Basic Usage", () => {
    text("Create a toggle and listen for changes.");
    code("Setup", () => {
      const toggle = document.createElement("toggle-input");
      toggle.addEventListener("change", (e) => {
        logger.log("Checked:", e.detail.checked);
      });
      document.body.appendChild(toggle);
    });
    container({ title: "Toggle demo", height: 80, preset: "centered" }, (ctx) => {
      const toggle = document.createElement("toggle-input");
      toggle.addEventListener("change", (e) => {
        logger.log("Checked:", e.detail.checked);
      });
      ctx.container.appendChild(toggle);
    });
  });
  section("With Label", () => {
    text("Use `setLabel()` to add a clickable label next to the toggle.");
    container({ title: "Labeled toggle", height: 80, preset: "centered" }, (ctx) => {
      const toggle = document.createElement("toggle-input");
      toggle.setLabel("Enable feature");
      toggle.addEventListener("change", (e) => {
        logger.log("Feature enabled:", e.detail.checked);
      });
      ctx.container.appendChild(toggle);
    });
  });
  section("Programmatic Control", () => {
    text("Use `setChecked()` to set the state programmatically.");
    container({ title: "Programmatic", height: 80, preset: "centered" }, (ctx) => {
      const toggle = document.createElement("toggle-input");
      toggle.setLabel("Auto-save");
      toggle.addEventListener("change", (e) => {
        logger.log("Auto-save:", e.detail.checked);
      });
      ctx.container.appendChild(toggle);
      ctx.action("Toggle", () => {
        toggle.setChecked(!toggle.checked);
        logger.log("Set to:", toggle.checked);
      });
    });
  });
  section("Initial State", () => {
    text("Set initial checked state with `setChecked(true)`.");
    container({ title: "Initially checked", height: 80, preset: "centered" }, (ctx) => {
      const toggle = document.createElement("toggle-input");
      toggle.setLabel("Notifications");
      toggle.setChecked(true);
      ctx.container.appendChild(toggle);
    });
  });
});
export {
  toggle_input_doc as default
};
