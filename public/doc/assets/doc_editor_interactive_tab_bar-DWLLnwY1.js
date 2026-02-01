var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _container, _value, _tabs, _TabBar_instances, buildDOM_fn, renderTabs_fn, setupSlottedTabs_fn, selectTab_fn, updateActiveState_fn;
import { d as doc, t as text, s as section, b as container, l as logger } from "./runtime-DOmi4lo7.js";
import { E as EditorComponent } from "./editor_component-KitFp2Fu.js";
import { c as createElement, d as setAttributes } from "./dom_utils-DTpHkHXB.js";
import "./utils-DVCexGPz.js";
import "./inflector-BxOpyWLP.js";
class TabBar extends EditorComponent {
  constructor() {
    super();
    __privateAdd(this, _TabBar_instances);
    __privateAdd(this, _container, null);
    __privateAdd(this, _value, null);
    __privateAdd(this, _tabs, []);
    __privateMethod(this, _TabBar_instances, buildDOM_fn).call(this);
  }
  onConnected() {
    __privateMethod(this, _TabBar_instances, setupSlottedTabs_fn).call(this);
  }
  static get observedAttributes() {
    return ["value"];
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "value" && newValue !== oldValue) {
      __privateSet(this, _value, newValue);
      __privateMethod(this, _TabBar_instances, updateActiveState_fn).call(this);
    }
  }
  get value() {
    return __privateGet(this, _value);
  }
  set value(val) {
    if (__privateGet(this, _value) !== val) {
      __privateSet(this, _value, val);
      this.setAttribute("value", val);
      __privateMethod(this, _TabBar_instances, updateActiveState_fn).call(this);
    }
  }
  setTabs(tabs) {
    __privateSet(this, _tabs, tabs);
    __privateMethod(this, _TabBar_instances, renderTabs_fn).call(this);
  }
}
_container = new WeakMap();
_value = new WeakMap();
_tabs = new WeakMap();
_TabBar_instances = new WeakSet();
buildDOM_fn = function() {
  __privateSet(this, _container, createElement("div", {
    style: "display:contents;"
  }));
  const slot = createElement("slot", { name: "tab" });
  slot.addEventListener("slotchange", () => __privateMethod(this, _TabBar_instances, setupSlottedTabs_fn).call(this));
  this.shadowRoot.appendChild(__privateGet(this, _container));
  this.shadowRoot.appendChild(slot);
};
renderTabs_fn = function() {
  __privateGet(this, _container).innerHTML = "";
  for (const tab of __privateGet(this, _tabs)) {
    const btn = createElement("button", {
      class: "tab",
      text: tab.label
    });
    btn.dataset.value = tab.value;
    if (tab.value === __privateGet(this, _value)) {
      btn.classList.add("active");
    }
    btn.addEventListener("click", () => __privateMethod(this, _TabBar_instances, selectTab_fn).call(this, tab.value));
    __privateGet(this, _container).appendChild(btn);
  }
};
setupSlottedTabs_fn = function() {
  const slot = this.shadowRoot.querySelector('slot[name="tab"]');
  const slottedButtons = slot.assignedElements();
  for (const btn of slottedButtons) {
    btn.setAttributes({
      "aria-selected": btn.dataset.value === __privateGet(this, _value) ? "true" : "false"
    });
    if (!btn.dataset.tabListenerAttached) {
      btn.addEventListener("click", () => __privateMethod(this, _TabBar_instances, selectTab_fn).call(this, btn.dataset.value));
      btn.dataset.tabListenerAttached = "true";
    }
  }
};
selectTab_fn = function(value) {
  if (__privateGet(this, _value) === value) {
    return;
  }
  __privateSet(this, _value, value);
  setAttributes(this, { value });
  __privateMethod(this, _TabBar_instances, updateActiveState_fn).call(this);
  this.dispatchEvent(new CustomEvent("change", {
    bubbles: true,
    detail: { value }
  }));
};
updateActiveState_fn = function() {
  const buttons = __privateGet(this, _container).querySelectorAll(".tab");
  for (const btn of buttons) {
    btn.classList.toggle("active", btn.dataset.value === __privateGet(this, _value));
  }
  const slot = this.shadowRoot.querySelector('slot[name="tab"]');
  const slottedButtons = slot.assignedElements();
  for (const btn of slottedButtons) {
    setAttributes(btn, {
      "aria-selected": btn.dataset.value === __privateGet(this, _value) ? "true" : "false"
    });
  }
};
__publicField(TabBar, "styles", `
        :host {
            display: inline-flex;
            background: var(--bg-tertiary);
            border-radius: var(--radius-md);
            padding: 2px;
            gap: 2px;
            font-family: var(--font-mono);
        }

        .tab {
            appearance: none;
            background: transparent;
            border: none;
            color: var(--fg-muted);
            font-size: var(--font-size-sm);
            font-family: inherit;
            padding: var(--spacing-xs) var(--spacing-sm);
            border-radius: var(--radius-sm);
            cursor: pointer;
            transition: background var(--transition-fast), color var(--transition-fast);
            white-space: nowrap;
        }

        .tab:hover {
            color: var(--fg-secondary);
        }

        .tab.active {
            background: var(--bg-primary);
            color: var(--fg-primary);
            box-shadow: var(--shadow-sm);
        }


        ::slotted(button) {
            appearance: none;
            background: transparent;
            border: none;
            color: var(--fg-muted);
            font-size: var(--font-size-sm);
            font-family: var(--font-mono);
            padding: var(--spacing-xs) var(--spacing-sm);
            border-radius: var(--radius-sm);
            cursor: pointer;
            transition: background var(--transition-fast), color var(--transition-fast);
            white-space: nowrap;
        }

        ::slotted(button:hover) {
            color: var(--fg-secondary);
        }

        ::slotted(button[aria-selected="true"]) {
            background: var(--bg-primary);
            color: var(--fg-primary);
            box-shadow: var(--shadow-sm);
        }


        :host([context="studio"]) {
            padding: 4px;
            gap: 4px;
            border-radius: var(--radius-lg);
        }

        :host([context="studio"]) .tab {
            font-size: var(--font-size-md);
            padding: var(--spacing-sm) var(--spacing-md);
            min-height: var(--touch-target);
            border-radius: var(--radius-md);
        }

        :host([context="studio"]) ::slotted(button) {
            font-size: var(--font-size-md);
            padding: var(--spacing-sm) var(--spacing-md);
            min-height: var(--touch-target);
            border-radius: var(--radius-md);
        }
    `);
customElements.define("tab-bar", TabBar);
const tab_bar_doc = doc("TabBar", { advanced: true }, () => {
  text(`
        Tab selector for switching between views or modes.
        Emits "change" events with \`detail.value\`.
    `);
  section("Programmatic", () => {
    text("Use `setTabs()` to create tabs from data.");
    container({ title: "Programmatic tabs", height: 100, preset: "centered" }, (ctx) => {
      const tabBar = document.createElement("tab-bar");
      tabBar.setTabs([
        { value: "sprites", label: "Sprites" },
        { value: "animations", label: "Animations" },
        { value: "settings", label: "Settings" }
      ]);
      tabBar.value = "sprites";
      tabBar.addEventListener("change", (e) => {
        logger.log("Selected:", e.detail.value);
      });
      ctx.container.appendChild(tabBar);
    });
  });
  section("Slotted", () => {
    text("Or use slots for custom tab content.");
    container({ title: "Slotted tabs", height: 100, preset: "centered" }, (ctx) => {
      const tabBar = document.createElement("tab-bar");
      tabBar.value = "edit";
      const tab1 = document.createElement("button");
      tab1.setAttribute("slot", "tab");
      tab1.dataset.value = "edit";
      tab1.textContent = "✏️ Edit";
      tabBar.appendChild(tab1);
      const tab2 = document.createElement("button");
      tab2.setAttribute("slot", "tab");
      tab2.dataset.value = "preview";
      tab2.textContent = "👁️ Preview";
      tabBar.appendChild(tab2);
      tabBar.addEventListener("change", (e) => {
        logger.log("Mode:", e.detail.value);
      });
      ctx.container.appendChild(tabBar);
    });
  });
  section("View Switcher", () => {
    text("Example: switching between different view modes.");
    container({ title: "View switcher", height: 150, preset: "centered" }, (ctx) => {
      const col = ctx.column({ gap: 16 });
      const tabBar = document.createElement("tab-bar");
      tabBar.setTabs([
        { value: "grid", label: "⊞ Grid" },
        { value: "list", label: "☰ List" },
        { value: "tree", label: "⊟ Tree" }
      ]);
      tabBar.value = "grid";
      col.appendChild(tabBar);
      const preview = document.createElement("div");
      preview.style.cssText = "padding:16px;background:#1a1a1e;border-radius:8px;color:#888;font-size:12px;text-align:center;";
      preview.textContent = "Grid view";
      col.appendChild(preview);
      tabBar.addEventListener("change", (e) => {
        preview.textContent = `${e.detail.value.charAt(0).toUpperCase() + e.detail.value.slice(1)} view`;
      });
    });
  });
  section("Studio Context", () => {
    text('Use `context="studio"` for larger touch-friendly tabs.');
    container({ title: "Studio tabs", height: 120, preset: "centered" }, (ctx) => {
      const tabBar = document.createElement("tab-bar");
      tabBar.setAttribute("context", "studio");
      tabBar.setTabs([
        { value: "draw", label: "Draw" },
        { value: "animate", label: "Animate" },
        { value: "export", label: "Export" }
      ]);
      tabBar.value = "draw";
      tabBar.addEventListener("change", (e) => {
        logger.log("Tab:", e.detail.value);
      });
      ctx.container.appendChild(tabBar);
    });
  });
});
export {
  tab_bar_doc as default
};
