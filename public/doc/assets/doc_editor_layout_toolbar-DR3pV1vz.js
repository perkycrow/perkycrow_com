var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _Toolbar_instances, buildDOM_fn;
import { d as doc, t as text, s as section, b as container } from "./runtime-DOmi4lo7.js";
import { E as EditorComponent } from "./editor_component-KitFp2Fu.js";
import { c as createElement } from "./dom_utils-DTpHkHXB.js";
import "./editor_button-DcpPKk4k.js";
import "./utils-DVCexGPz.js";
import "./inflector-BxOpyWLP.js";
import "./index-Defq3ZXV.js";
class Toolbar extends EditorComponent {
  constructor() {
    super();
    __privateAdd(this, _Toolbar_instances);
    __privateMethod(this, _Toolbar_instances, buildDOM_fn).call(this);
  }
  static get observedAttributes() {
    return ["variant"];
  }
}
_Toolbar_instances = new WeakSet();
buildDOM_fn = function() {
  const start = createElement("div", { class: "toolbar-section toolbar-start" });
  const startSlot = createElement("slot", { name: "start" });
  start.appendChild(startSlot);
  const center = createElement("div", { class: "toolbar-section toolbar-center" });
  const centerSlot = createElement("slot", { name: "center" });
  center.appendChild(centerSlot);
  const defaultSlot = document.createElement("slot");
  center.appendChild(defaultSlot);
  const end = createElement("div", { class: "toolbar-section toolbar-end" });
  const endSlot = createElement("slot", { name: "end" });
  end.appendChild(endSlot);
  this.shadowRoot.appendChild(start);
  this.shadowRoot.appendChild(center);
  this.shadowRoot.appendChild(end);
};
__publicField(Toolbar, "styles", `
        :host {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 36px;
            padding: 0 var(--spacing-sm);
            background: var(--bg-secondary);
            border-bottom: 1px solid var(--border);
            gap: var(--spacing-sm);
            font-family: var(--font-mono);
        }

        :host([variant="compact"]) {
            height: 28px;
            padding: 0 var(--spacing-xs);
        }

        :host([variant="footer"]) {
            border-bottom: none;
            border-top: 1px solid var(--border);
        }

        :host([no-border]) {
            border: none;
        }

        .toolbar-section {
            display: flex;
            align-items: center;
            gap: var(--spacing-xs);
        }

        .toolbar-start {
            justify-content: flex-start;
        }

        .toolbar-center {
            flex: 1;
            justify-content: center;
        }

        .toolbar-end {
            justify-content: flex-end;
        }


        .toolbar-separator {
            width: 1px;
            height: 16px;
            background: var(--border);
            margin: 0 var(--spacing-xs);
        }


        :host([context="studio"]) {
            height: var(--touch-target);
            padding: 0 var(--spacing-md);
            gap: var(--spacing-md);
        }

        :host([context="studio"]) .toolbar-section {
            gap: var(--spacing-sm);
        }

        :host([context="studio"]) .toolbar-separator {
            height: 24px;
            margin: 0 var(--spacing-sm);
        }
    `);
customElements.define("editor-toolbar", Toolbar);
const toolbar_doc = doc("Toolbar", { advanced: true }, () => {
  text(`
        A horizontal toolbar with start, center, and end slots.
        Used for tool bars, status bars, and action areas.
    `);
  section("Basic Toolbar", () => {
    text("Simple toolbar with buttons.");
    container({ title: "Basic toolbar", height: 80, preset: "inspector" }, (ctx) => {
      const toolbar = document.createElement("editor-toolbar");
      const btn1 = document.createElement("editor-button");
      btn1.textContent = "◀";
      btn1.setAttribute("icon", "");
      btn1.setAttribute("slot", "start");
      toolbar.appendChild(btn1);
      const btn2 = document.createElement("editor-button");
      btn2.textContent = "▶";
      btn2.setAttribute("icon", "");
      toolbar.appendChild(btn2);
      const btn3 = document.createElement("editor-button");
      btn3.textContent = "■";
      btn3.setAttribute("icon", "");
      toolbar.appendChild(btn3);
      const btn4 = document.createElement("editor-button");
      btn4.textContent = "Export";
      btn4.variant = "primary";
      btn4.setAttribute("slot", "end");
      toolbar.appendChild(btn4);
      ctx.container.appendChild(toolbar);
    });
  });
  section("Slots", () => {
    text("Use `start`, `center`, and `end` slots to position items.");
    container({ title: "Slot positions", height: 80, preset: "inspector" }, (ctx) => {
      const toolbar = document.createElement("editor-toolbar");
      const left = document.createElement("span");
      left.setAttribute("slot", "start");
      left.style.cssText = "color:#888;font-size:12px;";
      left.textContent = "Start";
      toolbar.appendChild(left);
      const middle = document.createElement("span");
      middle.setAttribute("slot", "center");
      middle.style.cssText = "color:#888;font-size:12px;";
      middle.textContent = "Center";
      toolbar.appendChild(middle);
      const right = document.createElement("span");
      right.setAttribute("slot", "end");
      right.style.cssText = "color:#888;font-size:12px;";
      right.textContent = "End";
      toolbar.appendChild(right);
      ctx.container.appendChild(toolbar);
    });
  });
  section("Compact Variant", () => {
    text('Use `variant="compact"` for smaller toolbars.');
    container({ title: "Compact toolbar", height: 80, preset: "inspector" }, (ctx) => {
      const toolbar = document.createElement("editor-toolbar");
      toolbar.setAttribute("variant", "compact");
      const label = document.createElement("span");
      label.style.cssText = "color:#888;font-size:11px;";
      label.textContent = "Frame: 1/24";
      toolbar.appendChild(label);
      const btn = document.createElement("editor-button");
      btn.textContent = "⚙";
      btn.setAttribute("icon", "");
      btn.setAttribute("variant", "ghost");
      btn.setAttribute("slot", "end");
      toolbar.appendChild(btn);
      ctx.container.appendChild(toolbar);
    });
  });
  section("Footer Variant", () => {
    text('Use `variant="footer"` for bottom toolbars.');
    container({ title: "Footer toolbar", height: 80, preset: "inspector" }, (ctx) => {
      const toolbar = document.createElement("editor-toolbar");
      toolbar.setAttribute("variant", "footer");
      const status = document.createElement("span");
      status.setAttribute("slot", "start");
      status.style.cssText = "color:#888;font-size:12px;";
      status.textContent = "Ready";
      toolbar.appendChild(status);
      const version = document.createElement("span");
      version.setAttribute("slot", "end");
      version.style.cssText = "color:#666;font-size:11px;";
      version.textContent = "v1.0.0";
      toolbar.appendChild(version);
      ctx.container.appendChild(toolbar);
    });
  });
  section("Animation Controls", () => {
    text("Example toolbar for animation playback.");
    container({ title: "Animation toolbar", height: 80, preset: "inspector" }, (ctx) => {
      const toolbar = document.createElement("editor-toolbar");
      const frame = document.createElement("span");
      frame.setAttribute("slot", "start");
      frame.style.cssText = "color:#888;font-size:12px;font-variant-numeric:tabular-nums;";
      frame.textContent = "1 / 24";
      toolbar.appendChild(frame);
      const prev = document.createElement("editor-button");
      prev.textContent = "⏮";
      prev.setAttribute("icon", "");
      prev.setAttribute("variant", "ghost");
      toolbar.appendChild(prev);
      const play = document.createElement("editor-button");
      play.textContent = "▶";
      play.setAttribute("icon", "");
      toolbar.appendChild(play);
      const next = document.createElement("editor-button");
      next.textContent = "⏭";
      next.setAttribute("icon", "");
      next.setAttribute("variant", "ghost");
      toolbar.appendChild(next);
      const fps = document.createElement("span");
      fps.setAttribute("slot", "end");
      fps.style.cssText = "color:#666;font-size:11px;";
      fps.textContent = "12 fps";
      toolbar.appendChild(fps);
      ctx.container.appendChild(toolbar);
    });
  });
});
export {
  toolbar_doc as default
};
