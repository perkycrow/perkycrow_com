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
var _headerEl, _titleEl, _contentEl, _collapseBtn, _isDragging, _dragStartX, _dragStartY, _initialX, _initialY, _Panel_instances, buildDOM_fn, updateTitle_fn, updateCollapseIcon_fn, handleDragStart_fn, emitEvent_fn;
import { d as doc, t as text, s as section, b as container } from "./runtime-DOmi4lo7.js";
import { E as EditorComponent } from "./editor_component-KitFp2Fu.js";
import { c as createElement } from "./dom_utils-DTpHkHXB.js";
import "./utils-DVCexGPz.js";
import "./inflector-BxOpyWLP.js";
class Panel extends EditorComponent {
  constructor() {
    super();
    __privateAdd(this, _Panel_instances);
    __privateAdd(this, _headerEl, null);
    __privateAdd(this, _titleEl, null);
    __privateAdd(this, _contentEl, null);
    __privateAdd(this, _collapseBtn, null);
    __privateAdd(this, _isDragging, false);
    __privateAdd(this, _dragStartX, 0);
    __privateAdd(this, _dragStartY, 0);
    __privateAdd(this, _initialX, 0);
    __privateAdd(this, _initialY, 0);
    __privateMethod(this, _Panel_instances, buildDOM_fn).call(this);
  }
  onConnected() {
    __privateMethod(this, _Panel_instances, updateCollapseIcon_fn).call(this);
  }
  static get observedAttributes() {
    return ["title", "collapsed", "floating"];
  }
  attributeChangedCallback(name) {
    if (name === "title") {
      __privateMethod(this, _Panel_instances, updateTitle_fn).call(this);
    } else if (name === "collapsed") {
      __privateMethod(this, _Panel_instances, updateCollapseIcon_fn).call(this);
    }
  }
  get title() {
    return this.getAttribute("title") || "";
  }
  set title(value) {
    this.setAttribute("title", value);
  }
  get collapsed() {
    return this.hasAttribute("collapsed");
  }
  set collapsed(value) {
    if (value) {
      this.setAttribute("collapsed", "");
    } else {
      this.removeAttribute("collapsed");
    }
  }
  get floating() {
    return this.hasAttribute("floating");
  }
  set floating(value) {
    if (value) {
      this.setAttribute("floating", "");
    } else {
      this.removeAttribute("floating");
    }
  }
  toggle() {
    this.collapsed = !this.collapsed;
  }
}
_headerEl = new WeakMap();
_titleEl = new WeakMap();
_contentEl = new WeakMap();
_collapseBtn = new WeakMap();
_isDragging = new WeakMap();
_dragStartX = new WeakMap();
_dragStartY = new WeakMap();
_initialX = new WeakMap();
_initialY = new WeakMap();
_Panel_instances = new WeakSet();
buildDOM_fn = function() {
  __privateSet(this, _headerEl, createElement("div", { class: "panel-header" }));
  __privateGet(this, _headerEl).addEventListener("pointerdown", (e) => __privateMethod(this, _Panel_instances, handleDragStart_fn).call(this, e));
  __privateSet(this, _titleEl, createElement("span", { class: "panel-title", text: this.title }));
  const actions = createElement("div", { class: "panel-actions" });
  __privateSet(this, _collapseBtn, createElement("button", { class: "panel-btn", html: "−" }));
  __privateGet(this, _collapseBtn).addEventListener("click", (e) => {
    e.stopPropagation();
    this.toggle();
  });
  const closeBtn = createElement("button", { class: "panel-btn", html: "✕" });
  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    __privateMethod(this, _Panel_instances, emitEvent_fn).call(this, "close");
  });
  actions.appendChild(__privateGet(this, _collapseBtn));
  actions.appendChild(closeBtn);
  __privateGet(this, _headerEl).appendChild(__privateGet(this, _titleEl));
  __privateGet(this, _headerEl).appendChild(actions);
  __privateSet(this, _contentEl, createElement("div", { class: "panel-content" }));
  const slot = document.createElement("slot");
  __privateGet(this, _contentEl).appendChild(slot);
  this.shadowRoot.appendChild(__privateGet(this, _headerEl));
  this.shadowRoot.appendChild(__privateGet(this, _contentEl));
  __privateMethod(this, _Panel_instances, updateTitle_fn).call(this);
};
updateTitle_fn = function() {
  if (__privateGet(this, _titleEl)) {
    __privateGet(this, _titleEl).textContent = this.title;
  }
};
updateCollapseIcon_fn = function() {
  if (__privateGet(this, _collapseBtn)) {
    __privateGet(this, _collapseBtn).innerHTML = this.collapsed ? "+" : "−";
  }
};
handleDragStart_fn = function(e) {
  if (!this.floating || e.target.closest(".panel-btn")) {
    return;
  }
  __privateSet(this, _isDragging, true);
  __privateSet(this, _dragStartX, e.clientX);
  __privateSet(this, _dragStartY, e.clientY);
  __privateSet(this, _initialX, this.offsetLeft);
  __privateSet(this, _initialY, this.offsetTop);
  __privateGet(this, _headerEl).setPointerCapture(e.pointerId);
  const handleMove = (moveEvent) => {
    if (!__privateGet(this, _isDragging)) {
      return;
    }
    const deltaX = moveEvent.clientX - __privateGet(this, _dragStartX);
    const deltaY = moveEvent.clientY - __privateGet(this, _dragStartY);
    this.style.left = `${__privateGet(this, _initialX) + deltaX}px`;
    this.style.top = `${__privateGet(this, _initialY) + deltaY}px`;
  };
  const handleEnd = () => {
    __privateSet(this, _isDragging, false);
    __privateGet(this, _headerEl).removeEventListener("pointermove", handleMove);
    __privateGet(this, _headerEl).removeEventListener("pointerup", handleEnd);
    __privateGet(this, _headerEl).removeEventListener("pointercancel", handleEnd);
  };
  __privateGet(this, _headerEl).addEventListener("pointermove", handleMove);
  __privateGet(this, _headerEl).addEventListener("pointerup", handleEnd);
  __privateGet(this, _headerEl).addEventListener("pointercancel", handleEnd);
};
emitEvent_fn = function(name) {
  this.dispatchEvent(new CustomEvent(name, { bubbles: true }));
};
__publicField(Panel, "styles", `
        :host {
            display: block;
            background: var(--bg-secondary);
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            overflow: hidden;
            font-family: var(--font-mono);
            box-shadow: var(--shadow-md);
        }

        :host([floating]) {
            position: absolute;
            min-width: 200px;
            min-height: 100px;
            resize: both;
            overflow: auto;
        }

        :host([collapsed]) {
            height: auto !important;
            min-height: 0;
            resize: none;
        }

        :host([collapsed]) .panel-content {
            display: none;
        }


        .panel-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 32px;
            padding: 0 var(--spacing-sm);
            background: var(--bg-tertiary);
            border-bottom: 1px solid var(--border);
            cursor: default;
            user-select: none;
            -webkit-user-select: none;
            gap: var(--spacing-xs);
        }

        :host([floating]) .panel-header {
            cursor: grab;
        }

        :host([floating]) .panel-header:active {
            cursor: grabbing;
        }

        .panel-title {
            font-size: var(--font-size-sm);
            font-weight: 500;
            color: var(--fg-primary);
            flex: 1;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .panel-actions {
            display: flex;
            align-items: center;
            gap: 2px;
        }

        .panel-btn {
            appearance: none;
            background: transparent;
            border: none;
            color: var(--fg-muted);
            font-size: 12px;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            border-radius: var(--radius-sm);
            transition: background var(--transition-fast), color var(--transition-fast);
            padding: 0;
        }

        .panel-btn:hover {
            background: var(--bg-hover);
            color: var(--fg-primary);
        }

        .panel-btn:active {
            background: var(--bg-selected);
        }


        .panel-content {
            padding: var(--spacing-sm);
            overflow: auto;
            max-height: 400px;
        }

        :host([no-padding]) .panel-content {
            padding: 0;
        }


        :host([context="studio"]) .panel-header {
            height: var(--touch-target);
            padding: 0 var(--spacing-md);
        }

        :host([context="studio"]) .panel-title {
            font-size: var(--font-size-md);
        }

        :host([context="studio"]) .panel-btn {
            width: var(--touch-target);
            height: var(--touch-target);
            font-size: 16px;
        }

        :host([context="studio"]) .panel-content {
            padding: var(--spacing-md);
        }

        :host([context="studio"][no-padding]) .panel-content {
            padding: 0;
        }
    `);
customElements.define("editor-panel", Panel);
const panel_doc = doc("Panel", { advanced: true }, () => {
  text(`
        A floating or docked panel for editor tools.
        Supports dragging, collapsing, and closing.
    `);
  section("Basic Panel", () => {
    text("A simple docked panel with title and content.");
    container({ title: "Docked panel", height: 200, preset: "inspector" }, (ctx) => {
      const panel = document.createElement("editor-panel");
      panel.title = "Properties";
      panel.style.width = "250px";
      const content = document.createElement("div");
      content.style.cssText = "color:#888;font-size:12px;";
      content.textContent = "Panel content goes here";
      panel.appendChild(content);
      ctx.container.appendChild(panel);
    });
  });
  section("Floating Panel", () => {
    text(`
            Use the \`floating\` attribute for draggable panels.
            Drag the header to move the panel.
        `);
    container({ title: "Floating panel", height: 300, preset: "inspector" }, (ctx) => {
      ctx.container.style.position = "relative";
      const panel = document.createElement("editor-panel");
      panel.title = "Inspector";
      panel.setAttribute("floating", "");
      panel.style.cssText = "left:20px;top:20px;width:200px;height:150px;";
      const content = document.createElement("div");
      content.style.cssText = "color:#888;font-size:12px;";
      content.textContent = "Drag the header to move";
      panel.appendChild(content);
      ctx.container.appendChild(panel);
    });
  });
  section("Collapsible", () => {
    text("Click the minus button to collapse/expand the panel.");
    container({ title: "Collapsible panel", height: 200, preset: "inspector" }, (ctx) => {
      const panel = document.createElement("editor-panel");
      panel.title = "Layers";
      panel.style.width = "250px";
      const list = document.createElement("div");
      list.style.cssText = "display:flex;flex-direction:column;gap:4px;";
      list.innerHTML = `
                <div style="padding:4px 8px;background:#24242a;border-radius:4px;font-size:12px;color:#e4e4e8;">Layer 1</div>
                <div style="padding:4px 8px;background:#24242a;border-radius:4px;font-size:12px;color:#e4e4e8;">Layer 2</div>
                <div style="padding:4px 8px;background:#24242a;border-radius:4px;font-size:12px;color:#e4e4e8;">Layer 3</div>
            `;
      panel.appendChild(list);
      ctx.container.appendChild(panel);
    });
  });
  section("Multiple Panels", () => {
    text("Panels can be stacked vertically.");
    container({ title: "Stacked panels", height: 350, preset: "inspector" }, (ctx) => {
      const wrapper = document.createElement("div");
      wrapper.style.cssText = "display:flex;flex-direction:column;gap:8px;width:250px;";
      const panel1 = document.createElement("editor-panel");
      panel1.title = "Transform";
      panel1.innerHTML = '<div style="color:#888;font-size:12px;">Position, rotation, scale</div>';
      const panel2 = document.createElement("editor-panel");
      panel2.title = "Sprite";
      panel2.innerHTML = '<div style="color:#888;font-size:12px;">Texture, frame, tint</div>';
      const panel3 = document.createElement("editor-panel");
      panel3.title = "Animation";
      panel3.setAttribute("collapsed", "");
      panel3.innerHTML = '<div style="color:#888;font-size:12px;">Clips, keyframes</div>';
      wrapper.appendChild(panel1);
      wrapper.appendChild(panel2);
      wrapper.appendChild(panel3);
      ctx.container.appendChild(wrapper);
    });
  });
  section("Events", () => {
    text(`
            Panels emit events:
            - \`close\` - When close button (✕) is clicked
        `);
    container({ title: "Event handling", height: 200, preset: "inspector" }, (ctx) => {
      const panel = document.createElement("editor-panel");
      panel.title = "Closable Panel";
      panel.style.width = "250px";
      const log = document.createElement("div");
      log.style.cssText = "color:#888;font-size:12px;";
      log.textContent = "Click close button (✕)...";
      panel.appendChild(log);
      panel.addEventListener("close", () => {
        log.textContent = "❌ Close clicked!";
      });
      ctx.container.appendChild(panel);
    });
  });
  section("No Padding", () => {
    text("Use `no-padding` attribute for full-bleed content.");
    container({ title: "No padding", height: 200, preset: "inspector" }, (ctx) => {
      const panel = document.createElement("editor-panel");
      panel.title = "Preview";
      panel.setAttribute("no-padding", "");
      panel.style.width = "250px";
      const preview = document.createElement("div");
      preview.style.cssText = "height:100px;background:#0d0d10;display:flex;align-items:center;justify-content:center;color:#888;font-size:12px;";
      preview.textContent = "Full bleed content";
      panel.appendChild(preview);
      ctx.container.appendChild(panel);
    });
  });
});
export {
  panel_doc as default
};
