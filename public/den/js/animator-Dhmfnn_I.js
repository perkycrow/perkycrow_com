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
var __privateWrapper = (obj, member, setter, getter) => ({
  set _(value) {
    __privateSet(obj, member, value, setter);
  },
  get _() {
    return __privateGet(obj, member, getter);
  }
});
var _closeBtn, _contentEl, _dragStartX, _currentTranslate, _isDragging, _SideDrawer_instances, position_get, buildDOM_fn, setupSwipeToClose_fn, onPointerDown_fn, _value, _options, _focusedIndex, _isOpen, _buttonEl, _labelEl, _chevronEl, _dropdownEl, _handleOutsideClick, _handleKeyDown, _SelectInput_instances, handleOpenKeyDown_fn, buildDOM_fn2, renderOptions_fn, updateDisplay_fn, toggle_fn, open_fn, close_fn, positionDropdown_fn, selectIndex_fn, moveFocus_fn, updateFocusedOption_fn, scrollToFocused_fn, _triggerEl, _menuEl, _items, _handleOutsideClick2, _DropdownMenu_instances, buildDOM_fn3, renderItems_fn, _context, _animatorName, _animatorConfig, _animator, _spritesheet, _selectedAnimation, _isCustom, _store, _appLayout, _containerEl, _previewSectionEl, _previewEl, _timelineEl, _framesDrawerEl, _editorDrawerEl, _spritesheetSettingsDrawerEl, _spritesheetEl, _selectedFrameIndex, _drawerMode, _headerAnimSelect, _drawerAnimSelect, _anchor, _anchorEditor, _animationSettings, _backgroundImage, _AnimatorView_instances, initAnimator_fn, buildDOM_fn4, render_fn, createPreviewSection_fn, buildHeaderControls_fn, buildDrawers_fn, toggleFramesDrawer_fn, toggleAnimationSettings_fn, openSpritesheetSettings_fn, openAnimationSettings_fn, syncDrawerAnimSelect_fn, updateEditorDrawer_fn, addFrameToTimeline_fn, setupTimelineEvents_fn, handleFrameSelect_fn, updateForSelectedAnimation_fn, handleFrameDrop_fn, handleFrameMove_fn, handleFrameDelete_fn, handleFrameDuration_fn, exportToClipboard_fn, saveCustomAnimator_fn, exportPerkyFile_fn, buildAnimatorConfig_fn;
import { c as createElement, b as createStyleSheet, d as adoptStyleSheets, l as logger } from "./shelf_packer--IBfIqnG.js";
import { P as PerkyStore, l as loadManifest, g as getStudioConfig, a as getBackgroundImage, b as buildTextureSystem, c as collectAnimators } from "./overlay-DaU5ku9E.js";
import { E as EditorComponent, d as TextureRegion, I as ICONS, T as TextureSystem, m as manifestData } from "./devtools_icons-CkXJWoC9.js";
import { e as controlsSheet, f as emitChange, c as SpriteAnimator } from "./spritesheet_viewer-BPbdQpFl.js";
const SWIPE_THRESHOLD = 50;
class SideDrawer extends EditorComponent {
  constructor() {
    super();
    __privateAdd(this, _SideDrawer_instances);
    __privateAdd(this, _closeBtn, null);
    __privateAdd(this, _contentEl, null);
    __privateAdd(this, _dragStartX, 0);
    __privateAdd(this, _currentTranslate, 0);
    __privateAdd(this, _isDragging, false);
    __privateMethod(this, _SideDrawer_instances, buildDOM_fn).call(this);
  }
  static get observedAttributes() {
    return ["open"];
  }
  get isOpen() {
    return this.hasAttribute("open");
  }
  open() {
    if (!this.isOpen) {
      this.setAttribute("open", "");
      this.dispatchEvent(new CustomEvent("open", { bubbles: true }));
    }
  }
  close() {
    if (this.isOpen) {
      this.removeAttribute("open");
      this.dispatchEvent(new CustomEvent("close", { bubbles: true }));
    }
  }
  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }
}
_closeBtn = new WeakMap();
_contentEl = new WeakMap();
_dragStartX = new WeakMap();
_currentTranslate = new WeakMap();
_isDragging = new WeakMap();
_SideDrawer_instances = new WeakSet();
position_get = function() {
  return this.getAttribute("position") || "left";
};
buildDOM_fn = function() {
  __privateSet(this, _closeBtn, createElement("button", { class: "drawer-close", html: "✕" }));
  __privateGet(this, _closeBtn).addEventListener("click", () => this.close());
  __privateSet(this, _contentEl, createElement("div", { class: "drawer-content" }));
  const slot = document.createElement("slot");
  __privateGet(this, _contentEl).appendChild(slot);
  this.shadowRoot.appendChild(__privateGet(this, _closeBtn));
  this.shadowRoot.appendChild(__privateGet(this, _contentEl));
  __privateMethod(this, _SideDrawer_instances, setupSwipeToClose_fn).call(this);
};
setupSwipeToClose_fn = function() {
  this.addEventListener("pointerdown", (e) => __privateMethod(this, _SideDrawer_instances, onPointerDown_fn).call(this, e));
};
onPointerDown_fn = function(e) {
  const interactive = "button, input, select, textarea, slider-input, number-input, toggle-input, select-input";
  if (e.target.closest(interactive)) {
    return;
  }
  __privateSet(this, _isDragging, true);
  __privateSet(this, _dragStartX, e.clientX);
  __privateSet(this, _currentTranslate, 0);
  this.classList.add("dragging");
  this.setPointerCapture(e.pointerId);
  const onPointerMove = (moveEvent) => {
    if (!__privateGet(this, _isDragging)) {
      return;
    }
    const deltaX = moveEvent.clientX - __privateGet(this, _dragStartX);
    if (__privateGet(this, _SideDrawer_instances, position_get) === "left") {
      __privateSet(this, _currentTranslate, Math.min(0, deltaX));
    } else {
      __privateSet(this, _currentTranslate, Math.max(0, deltaX));
    }
    this.style.transform = `translateX(${__privateGet(this, _currentTranslate)}px)`;
  };
  const onPointerUp = () => {
    __privateSet(this, _isDragging, false);
    this.classList.remove("dragging");
    this.style.transform = "";
    const shouldClose = Math.abs(__privateGet(this, _currentTranslate)) > SWIPE_THRESHOLD;
    if (shouldClose) {
      this.close();
    }
    this.removeEventListener("pointermove", onPointerMove);
    this.removeEventListener("pointerup", onPointerUp);
    this.removeEventListener("pointercancel", onPointerUp);
  };
  this.addEventListener("pointermove", onPointerMove);
  this.addEventListener("pointerup", onPointerUp);
  this.addEventListener("pointercancel", onPointerUp);
};
__publicField(SideDrawer, "styles", `
        :host {
            position: absolute;
            top: var(--drawer-top, 0);
            bottom: var(--drawer-bottom, 0);
            width: 280px;
            background: var(--bg-secondary);
            display: flex;
            flex-direction: column;
            transition: transform 0.25s ease-out;
            z-index: 100;
            touch-action: pan-y;
        }

        :host(.dragging) {
            transition: none;
        }

        :host([position="left"]) {
            left: 0;
            transform: translateX(-100%);
        }

        :host([position="right"]) {
            right: 0;
            transform: translateX(100%);
        }

        :host([open][position="left"]),
        :host([open][position="right"]) {
            transform: translateX(0);
        }

        .drawer-close {
            position: absolute;
            top: var(--spacing-sm);
            appearance: none;
            background: var(--bg-tertiary);
            border: none;
            color: var(--fg-muted);
            width: 28px;
            height: 28px;
            border-radius: var(--radius-md);
            font-size: 14px;
            cursor: pointer;
            transition: background var(--transition-fast), color var(--transition-fast);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1;
        }

        :host([position="left"]) .drawer-close {
            right: var(--spacing-sm);
        }

        :host([position="right"]) .drawer-close {
            left: var(--spacing-sm);
        }

        .drawer-close:hover {
            background: var(--bg-hover);
            color: var(--fg-primary);
        }

        .drawer-content {
            flex: 1;
            min-height: 0;
            padding: var(--spacing-md);
            box-sizing: border-box;
            overflow: hidden;
        }

        :host([no-padding]) .drawer-content {
            padding: 0;
        }
    `);
customElements.define("side-drawer", SideDrawer);
const selectInputCSS = `
    :host {
        display: inline-block;
        position: relative;
    }

    .select-button {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--spacing-sm);
        background: transparent;
        border: none;
        padding: 0 var(--spacing-sm) 0 var(--spacing-md);
        height: var(--input-height);
        min-width: 100px;
        font-family: var(--font-mono);
        font-size: var(--font-size-sm);
        color: var(--fg-primary);
        cursor: pointer;
        transition: background var(--transition-fast);
        -webkit-tap-highlight-color: transparent;
        user-select: none;
        -webkit-user-select: none;
        border-radius: 0;
    }

    .select-button:hover {
        background: var(--bg-hover);
    }

    .select-button:focus {
        outline: none;
    }

    .select-button.open {
        background: var(--bg-hover);
    }

    .select-label {
        flex: 1;
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .select-chevron {
        font-size: 10px;
        color: var(--fg-muted);
        transition: transform var(--transition-fast);
    }

    .select-button.open .select-chevron {
        transform: rotate(180deg);
    }

    .select-dropdown {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        margin-top: 4px;
        background: var(--bg-secondary);
        border: none;
        border-radius: var(--radius-md);
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        max-height: 240px;
        overflow-y: auto;
        display: none;
    }

    .select-dropdown.open {
        display: block;
    }

    .select-dropdown.above {
        top: auto;
        bottom: 100%;
        margin-top: 0;
        margin-bottom: 4px;
    }

    .select-option {
        display: flex;
        align-items: center;
        padding: var(--spacing-sm) var(--spacing-md);
        color: var(--fg-primary);
        cursor: pointer;
        transition: background var(--transition-fast);
        -webkit-tap-highlight-color: transparent;
    }

    .select-option:first-child {
        border-radius: var(--radius-md) var(--radius-md) 0 0;
    }

    .select-option:last-child {
        border-radius: 0 0 var(--radius-md) var(--radius-md);
    }

    .select-option:hover,
    .select-option.focused {
        background: var(--bg-hover);
    }

    .select-option.selected {
        background: var(--accent);
        color: var(--bg-primary);
    }

    .select-option.selected.focused {
        background: var(--accent-hover, var(--accent));
    }


    :host([context="studio"]) .select-button {
        height: var(--touch-target);
        padding: 0 var(--spacing-md) 0 var(--spacing-lg);
        border-radius: var(--radius-md);
        font-size: var(--font-size-md);
        min-width: 120px;
    }

    :host([context="studio"]) .select-option {
        padding: var(--spacing-md) var(--spacing-lg);
        font-size: var(--font-size-md);
        min-height: var(--touch-target);
    }

    :host([context="studio"]) .select-chevron {
        font-size: 12px;
    }
`;
class SelectInput extends EditorComponent {
  constructor() {
    super();
    __privateAdd(this, _SelectInput_instances);
    __privateAdd(this, _value, null);
    __privateAdd(this, _options, []);
    __privateAdd(this, _focusedIndex, -1);
    __privateAdd(this, _isOpen, false);
    __privateAdd(this, _buttonEl, null);
    __privateAdd(this, _labelEl, null);
    __privateAdd(this, _chevronEl, null);
    __privateAdd(this, _dropdownEl, null);
    __privateAdd(this, _handleOutsideClick, (e) => {
      const path = e.composedPath();
      if (!path.includes(this)) {
        __privateMethod(this, _SelectInput_instances, close_fn).call(this);
      }
    });
    __privateAdd(this, _handleKeyDown, (e) => {
      if (!__privateGet(this, _isOpen)) {
        if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
          e.preventDefault();
          __privateMethod(this, _SelectInput_instances, open_fn).call(this);
        }
        return;
      }
      __privateMethod(this, _SelectInput_instances, handleOpenKeyDown_fn).call(this, e);
    });
    __privateMethod(this, _SelectInput_instances, buildDOM_fn2).call(this);
  }
  onConnected() {
    __privateMethod(this, _SelectInput_instances, updateDisplay_fn).call(this);
  }
  onDisconnected() {
    __privateMethod(this, _SelectInput_instances, close_fn).call(this);
  }
  get value() {
    return __privateGet(this, _value);
  }
  set value(val) {
    if (__privateGet(this, _value) !== val) {
      __privateSet(this, _value, val);
      __privateMethod(this, _SelectInput_instances, updateDisplay_fn).call(this);
    }
  }
  setValue(val) {
    __privateSet(this, _value, val);
    __privateMethod(this, _SelectInput_instances, updateDisplay_fn).call(this);
  }
  setOptions(options) {
    __privateSet(this, _options, options.map((opt) => {
      if (typeof opt === "string") {
        return { value: opt, label: opt };
      }
      return opt;
    }));
    __privateMethod(this, _SelectInput_instances, renderOptions_fn).call(this);
    __privateMethod(this, _SelectInput_instances, updateDisplay_fn).call(this);
  }
}
_value = new WeakMap();
_options = new WeakMap();
_focusedIndex = new WeakMap();
_isOpen = new WeakMap();
_buttonEl = new WeakMap();
_labelEl = new WeakMap();
_chevronEl = new WeakMap();
_dropdownEl = new WeakMap();
_handleOutsideClick = new WeakMap();
_handleKeyDown = new WeakMap();
_SelectInput_instances = new WeakSet();
handleOpenKeyDown_fn = function(e) {
  var _a;
  const keyHandlers = {
    Escape: () => {
      e.preventDefault();
      __privateMethod(this, _SelectInput_instances, close_fn).call(this);
    },
    ArrowDown: () => {
      e.preventDefault();
      __privateMethod(this, _SelectInput_instances, moveFocus_fn).call(this, 1);
    },
    ArrowUp: () => {
      e.preventDefault();
      __privateMethod(this, _SelectInput_instances, moveFocus_fn).call(this, -1);
    },
    Enter: () => {
      e.preventDefault();
      if (__privateGet(this, _focusedIndex) >= 0) {
        __privateMethod(this, _SelectInput_instances, selectIndex_fn).call(this, __privateGet(this, _focusedIndex));
      }
    },
    " ": () => {
      e.preventDefault();
      if (__privateGet(this, _focusedIndex) >= 0) {
        __privateMethod(this, _SelectInput_instances, selectIndex_fn).call(this, __privateGet(this, _focusedIndex));
      }
    },
    Tab: () => __privateMethod(this, _SelectInput_instances, close_fn).call(this)
  };
  (_a = keyHandlers[e.key]) == null ? void 0 : _a.call(keyHandlers);
};
buildDOM_fn2 = function() {
  __privateSet(this, _buttonEl, createElement("button", {
    class: "select-button",
    type: "button"
  }));
  __privateGet(this, _buttonEl).addEventListener("click", () => __privateMethod(this, _SelectInput_instances, toggle_fn).call(this));
  __privateGet(this, _buttonEl).addEventListener("keydown", __privateGet(this, _handleKeyDown));
  __privateSet(this, _labelEl, createElement("span", { class: "select-label" }));
  __privateSet(this, _chevronEl, createElement("span", { class: "select-chevron", text: "▼" }));
  __privateGet(this, _buttonEl).appendChild(__privateGet(this, _labelEl));
  __privateGet(this, _buttonEl).appendChild(__privateGet(this, _chevronEl));
  __privateSet(this, _dropdownEl, createElement("div", { class: "select-dropdown" }));
  this.shadowRoot.appendChild(__privateGet(this, _buttonEl));
  this.shadowRoot.appendChild(__privateGet(this, _dropdownEl));
};
renderOptions_fn = function() {
  __privateGet(this, _dropdownEl).innerHTML = "";
  for (let i = 0; i < __privateGet(this, _options).length; i++) {
    const opt = __privateGet(this, _options)[i];
    const optionEl = createElement("div", {
      class: "select-option",
      text: opt.label
    });
    optionEl.dataset.index = i;
    if (opt.value === __privateGet(this, _value)) {
      optionEl.classList.add("selected");
    }
    optionEl.addEventListener("click", (e) => {
      e.stopPropagation();
      __privateMethod(this, _SelectInput_instances, selectIndex_fn).call(this, i);
    });
    __privateGet(this, _dropdownEl).appendChild(optionEl);
  }
};
updateDisplay_fn = function() {
  const selected = __privateGet(this, _options).find((opt) => opt.value === __privateGet(this, _value));
  __privateGet(this, _labelEl).textContent = selected ? selected.label : "";
  const optionEls = __privateGet(this, _dropdownEl).querySelectorAll(".select-option");
  optionEls.forEach((el, i) => {
    var _a;
    el.classList.toggle("selected", ((_a = __privateGet(this, _options)[i]) == null ? void 0 : _a.value) === __privateGet(this, _value));
  });
};
toggle_fn = function() {
  if (__privateGet(this, _isOpen)) {
    __privateMethod(this, _SelectInput_instances, close_fn).call(this);
  } else {
    __privateMethod(this, _SelectInput_instances, open_fn).call(this);
  }
};
open_fn = function() {
  if (__privateGet(this, _isOpen)) {
    return;
  }
  __privateSet(this, _isOpen, true);
  __privateGet(this, _buttonEl).classList.add("open");
  __privateGet(this, _dropdownEl).classList.add("open");
  __privateMethod(this, _SelectInput_instances, positionDropdown_fn).call(this);
  const selectedIndex = __privateGet(this, _options).findIndex((opt) => opt.value === __privateGet(this, _value));
  __privateSet(this, _focusedIndex, selectedIndex >= 0 ? selectedIndex : 0);
  __privateMethod(this, _SelectInput_instances, updateFocusedOption_fn).call(this);
  requestAnimationFrame(() => {
    document.addEventListener("click", __privateGet(this, _handleOutsideClick));
    document.addEventListener("touchstart", __privateGet(this, _handleOutsideClick));
  });
};
close_fn = function() {
  if (!__privateGet(this, _isOpen)) {
    return;
  }
  __privateSet(this, _isOpen, false);
  __privateSet(this, _focusedIndex, -1);
  __privateGet(this, _buttonEl).classList.remove("open");
  __privateGet(this, _dropdownEl).classList.remove("open", "above");
  document.removeEventListener("click", __privateGet(this, _handleOutsideClick));
  document.removeEventListener("touchstart", __privateGet(this, _handleOutsideClick));
};
positionDropdown_fn = function() {
  const buttonRect = __privateGet(this, _buttonEl).getBoundingClientRect();
  const dropdownHeight = Math.min(240, __privateGet(this, _options).length * 40);
  const spaceBelow = window.innerHeight - buttonRect.bottom;
  const spaceAbove = buttonRect.top;
  if (spaceBelow < dropdownHeight && spaceAbove > spaceBelow) {
    __privateGet(this, _dropdownEl).classList.add("above");
  } else {
    __privateGet(this, _dropdownEl).classList.remove("above");
  }
};
selectIndex_fn = function(index) {
  const opt = __privateGet(this, _options)[index];
  if (!opt) {
    return;
  }
  const oldValue = __privateGet(this, _value);
  __privateSet(this, _value, opt.value);
  __privateMethod(this, _SelectInput_instances, updateDisplay_fn).call(this);
  __privateMethod(this, _SelectInput_instances, close_fn).call(this);
  __privateGet(this, _buttonEl).focus();
  if (oldValue !== __privateGet(this, _value)) {
    emitChange(this, { value: __privateGet(this, _value) });
  }
};
moveFocus_fn = function(direction) {
  const newIndex = __privateGet(this, _focusedIndex) + direction;
  if (newIndex >= 0 && newIndex < __privateGet(this, _options).length) {
    __privateSet(this, _focusedIndex, newIndex);
    __privateMethod(this, _SelectInput_instances, updateFocusedOption_fn).call(this);
    __privateMethod(this, _SelectInput_instances, scrollToFocused_fn).call(this);
  }
};
updateFocusedOption_fn = function() {
  const optionEls = __privateGet(this, _dropdownEl).querySelectorAll(".select-option");
  optionEls.forEach((el, i) => {
    el.classList.toggle("focused", i === __privateGet(this, _focusedIndex));
  });
};
scrollToFocused_fn = function() {
  const optionEls = __privateGet(this, _dropdownEl).querySelectorAll(".select-option");
  const focusedEl = optionEls[__privateGet(this, _focusedIndex)];
  if (focusedEl) {
    focusedEl.scrollIntoView({ block: "nearest" });
  }
};
__publicField(SelectInput, "styles", [controlsSheet, selectInputCSS]);
customElements.define("select-input", SelectInput);
class DropdownMenu extends EditorComponent {
  constructor() {
    super();
    __privateAdd(this, _DropdownMenu_instances);
    __privateAdd(this, _triggerEl, null);
    __privateAdd(this, _menuEl, null);
    __privateAdd(this, _items, []);
    __privateAdd(this, _handleOutsideClick2, (e) => {
      if (!this.contains(e.target)) {
        this.close();
      }
    });
    __privateMethod(this, _DropdownMenu_instances, buildDOM_fn3).call(this);
  }
  onConnected() {
    document.addEventListener("click", __privateGet(this, _handleOutsideClick2));
  }
  onDisconnected() {
    document.removeEventListener("click", __privateGet(this, _handleOutsideClick2));
  }
  setIcon(icon) {
    __privateGet(this, _triggerEl).innerHTML = icon;
  }
  setItems(items) {
    __privateSet(this, _items, items);
    __privateMethod(this, _DropdownMenu_instances, renderItems_fn).call(this);
  }
  open() {
    this.setAttribute("open", "");
  }
  close() {
    this.removeAttribute("open");
  }
  toggle() {
    if (this.hasAttribute("open")) {
      this.close();
    } else {
      this.open();
    }
  }
}
_triggerEl = new WeakMap();
_menuEl = new WeakMap();
_items = new WeakMap();
_handleOutsideClick2 = new WeakMap();
_DropdownMenu_instances = new WeakSet();
buildDOM_fn3 = function() {
  __privateSet(this, _triggerEl, createElement("button", { class: "trigger" }));
  __privateGet(this, _triggerEl).addEventListener("click", (e) => {
    e.stopPropagation();
    this.toggle();
  });
  __privateSet(this, _menuEl, createElement("div", { class: "menu" }));
  this.shadowRoot.appendChild(__privateGet(this, _triggerEl));
  this.shadowRoot.appendChild(__privateGet(this, _menuEl));
};
renderItems_fn = function() {
  __privateGet(this, _menuEl).innerHTML = "";
  for (const item of __privateGet(this, _items)) {
    const btn = createElement("button", { class: "menu-item", text: item.label });
    btn.addEventListener("click", () => {
      this.close();
      this.dispatchEvent(new CustomEvent("select", {
        detail: { value: item.value || item.label }
      }));
      if (item.action) {
        item.action();
      }
    });
    __privateGet(this, _menuEl).appendChild(btn);
  }
};
__publicField(DropdownMenu, "styles", `
        :host {
            position: relative;
            display: inline-block;
        }

        .trigger {
            appearance: none;
            background: var(--bg-tertiary);
            color: var(--fg-secondary);
            border: none;
            border-radius: var(--radius-md);
            padding: 10px;
            font-family: inherit;
            font-size: 16px;
            cursor: pointer;
            transition: background var(--transition-fast), color var(--transition-fast);
            min-height: var(--touch-target);
            min-width: var(--touch-target);
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .trigger:hover {
            background: var(--bg-hover);
            color: var(--fg-primary);
        }

        .trigger:active {
            transform: scale(0.96);
        }

        .trigger svg {
            width: 18px;
            height: 18px;
            stroke: currentColor;
            fill: none;
            stroke-width: 2;
            stroke-linecap: round;
            stroke-linejoin: round;
        }

        .menu {
            position: absolute;
            top: 100%;
            left: 0;
            margin-top: var(--spacing-xs);
            background: var(--bg-secondary);
            border-radius: var(--radius-md);
            box-shadow: var(--shadow-lg);
            min-width: 160px;
            padding: var(--spacing-xs);
            z-index: 1000;
            opacity: 0;
            transform: translateY(-8px);
            pointer-events: none;
            transition: opacity 0.15s, transform 0.15s;
        }

        :host([open]) .menu {
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
        }

        .menu-item {
            appearance: none;
            background: transparent;
            border: none;
            color: var(--fg-primary);
            font-family: inherit;
            font-size: var(--font-size-sm);
            padding: var(--spacing-sm) var(--spacing-md);
            width: 100%;
            text-align: left;
            cursor: pointer;
            border-radius: var(--radius-sm);
            transition: background var(--transition-fast);
            display: flex;
            align-items: center;
            gap: var(--spacing-sm);
        }

        .menu-item:hover {
            background: var(--bg-hover);
        }

        .menu-item:active {
            background: var(--bg-selected);
        }
    `);
customElements.define("dropdown-menu", DropdownMenu);
const animatorViewStyles = createStyleSheet(`
    :host {
        display: block;
        height: 100%;
        background: var(--bg-primary);
        color: var(--fg-primary);
        font-family: var(--font-mono);
        font-size: 12px;
        position: relative;
    }

    app-layout {
        height: 100%;
    }

    .animator-container {
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow: hidden;
        position: relative;
    }

    .empty {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        color: var(--fg-muted);
    }


    .preview-section {
        flex: 1;
        min-height: 200px;
        overflow: hidden;
        position: relative;
    }

    .preview-section animation-preview {
        width: 100%;
        height: 100%;
    }


    .header-controls {
        display: flex;
        align-items: center;
        gap: var(--spacing-md);
    }

    .toolbar-btn {
        appearance: none;
        background: var(--bg-tertiary);
        color: var(--fg-secondary);
        border: none;
        border-radius: var(--radius-md);
        padding: 10px 16px;
        font-family: inherit;
        font-size: 13px;
        font-weight: 500;
        cursor: pointer;
        transition: background var(--transition-fast), color var(--transition-fast), transform 0.1s;
        min-height: var(--touch-target);
        min-width: var(--touch-target);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .toolbar-btn:hover {
        background: var(--bg-hover);
        color: var(--fg-primary);
    }

    .toolbar-btn:active {
        transform: scale(0.96);
    }

    .toolbar-btn svg {
        width: 18px;
        height: 18px;
        stroke: currentColor;
        fill: none;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
    }

    .toolbar-btn-primary {
        background: var(--accent);
        color: var(--bg-primary);
        font-size: 20px;
        font-weight: 400;
    }

    .toolbar-btn-primary:hover {
        background: var(--accent-hover);
        color: var(--bg-primary);
    }

    .toolbar-toggle {
        font-size: 16px;
    }

    .toolbar-toggle.active {
        background: var(--accent);
        color: var(--bg-primary);
    }

    .toolbar-btn.success {
        background: var(--status-success);
        color: var(--bg-primary);
    }


    .timeline-section {
        flex-shrink: 0;
        background: var(--bg-secondary);
        padding: var(--spacing-md) var(--spacing-lg);
        min-height: 120px;
        overflow: hidden;
        max-width: 100%;
    }
`);
const frameEditorStyles = createStyleSheet(`
    .frame-editor {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-lg);
    }

    .frame-editor-preview {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--spacing-sm);
    }

    .frame-editor-canvas {
        background: var(--bg-tertiary);
        border-radius: var(--radius-md);
        image-rendering: pixelated;
        image-rendering: crisp-edges;
    }

    .frame-editor-name {
        font-size: var(--font-size-sm);
        color: var(--fg-muted);
        text-align: center;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .frame-editor-section {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-sm);
    }

    .frame-editor-label {
        font-size: var(--font-size-sm);
        font-weight: 500;
        color: var(--fg-secondary);
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .frame-editor-duration {
        display: flex;
        align-items: center;
        gap: var(--spacing-md);
    }

    .frame-editor-duration slider-input {
        flex: 1;
        min-width: 0;
    }

    .frame-editor-duration number-input {
        flex-shrink: 0;
    }

    .frame-editor-events {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-sm);
    }

    .event-chip {
        display: inline-flex;
        align-items: center;
        gap: var(--spacing-xs);
        background: var(--bg-tertiary);
        border-radius: var(--radius-md);
        padding: var(--spacing-xs) var(--spacing-sm);
        font-size: var(--font-size-sm);
        color: var(--fg-primary);
    }

    .event-chip-remove {
        appearance: none;
        background: transparent;
        border: none;
        color: var(--fg-muted);
        font-size: 14px;
        width: 20px;
        height: 20px;
        padding: 0;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: var(--radius-sm);
        transition: background var(--transition-fast), color var(--transition-fast);
    }

    .event-chip-remove:hover {
        background: var(--status-error);
        color: white;
    }

    .event-suggestions {
        display: flex;
        flex-wrap: wrap;
        gap: var(--spacing-xs);
    }

    .event-suggestion {
        appearance: none;
        background: transparent;
        border: 1px dashed var(--border);
        border-radius: var(--radius-md);
        padding: var(--spacing-xs) var(--spacing-sm);
        font-size: var(--font-size-sm);
        font-family: var(--font-mono);
        color: var(--fg-muted);
        cursor: pointer;
        transition: background var(--transition-fast), color var(--transition-fast), border-color var(--transition-fast);
    }

    .event-suggestion:hover {
        background: var(--bg-hover);
        border-color: var(--fg-muted);
        color: var(--fg-primary);
    }

    .event-add-row {
        display: flex;
        gap: var(--spacing-sm);
        margin-top: var(--spacing-xs);
    }

    .event-input {
        flex: 1;
        background: var(--bg-tertiary);
        border: none;
        border-radius: var(--radius-md);
        padding: var(--spacing-sm) var(--spacing-md);
        font-size: var(--font-size-sm);
        font-family: var(--font-mono);
        color: var(--fg-primary);
        min-height: var(--touch-target);
    }

    .event-input:focus {
        outline: 1px solid var(--accent);
    }

    .event-input::placeholder {
        color: var(--fg-muted);
    }

    .event-add-btn {
        appearance: none;
        background: var(--accent);
        border: none;
        border-radius: var(--radius-md);
        padding: var(--spacing-sm) var(--spacing-md);
        font-size: var(--font-size-sm);
        font-family: var(--font-mono);
        font-weight: 500;
        color: var(--bg-primary);
        cursor: pointer;
        min-height: var(--touch-target);
        min-width: var(--touch-target);
        transition: background var(--transition-fast);
    }

    .event-add-btn:hover {
        background: var(--accent-hover);
    }
`);
const settingsStyles = createStyleSheet(`
    .animation-settings {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-lg);
        padding-top: calc(28px + var(--spacing-sm));
    }

    .settings-section {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-sm);
    }

    .settings-label {
        font-size: var(--font-size-sm);
        font-weight: 500;
        color: var(--fg-secondary);
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .settings-row {
        display: flex;
        align-items: center;
        gap: var(--spacing-md);
    }

    .settings-row slider-input {
        flex: 1;
        min-width: 0;
    }

    .settings-row number-input {
        flex-shrink: 0;
    }

    .direction-pad {
        display: grid;
        grid-template-columns: repeat(3, 36px);
        grid-template-rows: repeat(3, 36px);
        gap: 2px;
        justify-content: start;
    }

    .direction-btn {
        appearance: none;
        background: var(--bg-tertiary);
        border: 1px solid var(--border);
        border-radius: var(--radius-sm);
        color: var(--fg-muted);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background var(--transition-fast), color var(--transition-fast), border-color var(--transition-fast);
    }

    .direction-btn:hover {
        background: var(--bg-hover);
        color: var(--fg-primary);
    }

    .direction-btn.active {
        background: var(--accent);
        border-color: var(--accent);
        color: var(--bg-primary);
    }

    .direction-btn svg {
        width: 16px;
        height: 16px;
        stroke: currentColor;
        fill: none;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
    }

    .direction-btn.center {
        background: transparent;
        border-color: transparent;
        cursor: default;
    }

    .spritesheet-settings {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-lg);
        padding-top: calc(28px + var(--spacing-sm));
    }

    .anchor-preview-wrapper {
        position: relative;
        background: var(--bg-tertiary);
        border-radius: var(--radius-md);
        overflow: hidden;
        width: 100%;
        aspect-ratio: 1;
    }

    .anchor-preview-canvas {
        display: block;
        image-rendering: pixelated;
        image-rendering: crisp-edges;
    }

    .anchor-handle {
        position: absolute;
        width: 12px;
        height: 12px;
        background: var(--accent);
        border: 2px solid white;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        cursor: grab;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        z-index: 1;
    }

    .anchor-handle:active {
        cursor: grabbing;
    }

    .anchor-inputs {
        gap: var(--spacing-md);
    }

    .anchor-inputs number-input {
        flex: 1;
    }
`);
function inferSpritesheetName(animatorConfig) {
  var _a, _b;
  const animations = animatorConfig == null ? void 0 : animatorConfig.animations;
  if (!animations) {
    return null;
  }
  const firstAnim = Object.values(animations)[0];
  if (firstAnim == null ? void 0 : firstAnim.source) {
    return firstAnim.source.split(":")[0];
  }
  if ((_b = (_a = firstAnim == null ? void 0 : firstAnim.frames) == null ? void 0 : _a[0]) == null ? void 0 : _b.source) {
    return firstAnim.frames[0].source.split(":")[0];
  }
  return null;
}
function collectEventSuggestions(animator, excludeEvents) {
  const allEvents = /* @__PURE__ */ new Set();
  for (const anim of animator.children) {
    for (const frame of anim.frames) {
      const events = frame.events || [];
      events.forEach((event) => allEvents.add(event));
    }
  }
  excludeEvents.forEach((event) => allEvents.delete(event));
  return Array.from(allEvents).slice(0, 6);
}
function buildAnimationConfig(anim, spritesheet) {
  var _a;
  const config = {
    fps: anim.fps,
    loop: anim.loop
  };
  if (anim.playbackMode !== "forward") {
    config.playbackMode = anim.playbackMode;
  }
  if ((_a = anim.motion) == null ? void 0 : _a.enabled) {
    config.motion = {
      mode: anim.motion.mode || "sidescroller",
      direction: anim.motion.direction || "e"
    };
  }
  config.frames = anim.frames.map((frame) => {
    var _a2;
    const fc = {};
    if (frame.source) {
      fc.source = frame.source;
    } else if (frame.name) {
      fc.source = `${(spritesheet == null ? void 0 : spritesheet.$id) || "spritesheet"}:${frame.name}`;
    }
    if (frame.duration && frame.duration !== 1) {
      fc.duration = frame.duration;
    }
    if ((_a2 = frame.events) == null ? void 0 : _a2.length) {
      fc.events = [...frame.events];
    }
    return fc;
  });
  return config;
}
function buildFramePreview(frame) {
  const section = document.createElement("div");
  section.className = "frame-editor-preview";
  const canvas = document.createElement("canvas");
  canvas.width = 120;
  canvas.height = 120;
  canvas.className = "frame-editor-canvas";
  const region = frame.region;
  if (region == null ? void 0 : region.image) {
    const ctx = canvas.getContext("2d");
    const scale = Math.min(120 / region.width, 120 / region.height);
    const w = region.width * scale;
    const h = region.height * scale;
    const x = (120 - w) / 2;
    const y = (120 - h) / 2;
    ctx.drawImage(region.image, region.x, region.y, region.width, region.height, x, y, w, h);
  }
  const name = document.createElement("div");
  name.className = "frame-editor-name";
  name.textContent = frame.name || "Unnamed frame";
  name.title = frame.name || "";
  section.appendChild(canvas);
  section.appendChild(name);
  return section;
}
function buildFrameEditor(frame, { onFramesUpdate, getSuggestions }) {
  const container = document.createElement("div");
  container.className = "frame-editor";
  container.appendChild(buildFramePreview(frame));
  container.appendChild(buildDurationSection(frame, onFramesUpdate));
  container.appendChild(buildEventsSection(frame, { onFramesUpdate, getSuggestions }));
  return container;
}
function buildDurationSection(frame, onUpdate) {
  const section = document.createElement("div");
  section.className = "frame-editor-section";
  const label = document.createElement("div");
  label.className = "frame-editor-label";
  label.textContent = "Duration multiplier";
  section.appendChild(label);
  const controls = document.createElement("div");
  controls.className = "frame-editor-duration";
  const slider = document.createElement("slider-input");
  slider.setAttribute("context", "studio");
  slider.setAttribute("no-value", "");
  slider.setAttribute("no-label", "");
  slider.setValue(frame.duration || 1);
  slider.setMin(0.5);
  slider.setMax(3);
  slider.setStep(0.1);
  const numberInput = document.createElement("number-input");
  numberInput.setAttribute("context", "studio");
  numberInput.setValue(frame.duration || 1);
  numberInput.setStep(0.1);
  numberInput.setPrecision(2);
  numberInput.setMin(0.1);
  numberInput.setMax(10);
  const updateDuration = (value) => {
    frame.duration = value;
    onUpdate == null ? void 0 : onUpdate();
  };
  slider.addEventListener("change", (e) => {
    numberInput.setValue(e.detail.value);
    updateDuration(e.detail.value);
  });
  numberInput.addEventListener("change", (e) => {
    slider.setValue(Math.min(3, Math.max(0.5, e.detail.value)));
    updateDuration(e.detail.value);
  });
  controls.appendChild(slider);
  controls.appendChild(numberInput);
  section.appendChild(controls);
  return section;
}
function buildEventsSection(frame, { onFramesUpdate, getSuggestions }) {
  const section = document.createElement("div");
  section.className = "frame-editor-section";
  const label = document.createElement("div");
  label.className = "frame-editor-label";
  label.textContent = "Events";
  section.appendChild(label);
  const eventsContainer = document.createElement("div");
  eventsContainer.className = "frame-editor-events";
  const renderEvents = () => {
    eventsContainer.innerHTML = "";
    const currentEvents = frame.events || [];
    for (const event of currentEvents) {
      const chip = document.createElement("div");
      chip.className = "event-chip";
      const chipText = document.createElement("span");
      chipText.textContent = event;
      const removeBtn = document.createElement("button");
      removeBtn.className = "event-chip-remove";
      removeBtn.innerHTML = "&times;";
      removeBtn.addEventListener("click", () => {
        frame.events = currentEvents.filter((e) => e !== event);
        onFramesUpdate == null ? void 0 : onFramesUpdate();
        renderEvents();
      });
      chip.appendChild(chipText);
      chip.appendChild(removeBtn);
      eventsContainer.appendChild(chip);
    }
    const suggestions = (getSuggestions == null ? void 0 : getSuggestions(currentEvents)) || [];
    if (suggestions.length > 0) {
      const suggestionsEl = document.createElement("div");
      suggestionsEl.className = "event-suggestions";
      for (const suggestion of suggestions) {
        const btn = document.createElement("button");
        btn.className = "event-suggestion";
        btn.textContent = suggestion;
        btn.addEventListener("click", () => {
          if (!frame.events) {
            frame.events = [];
          }
          frame.events.push(suggestion);
          onFramesUpdate == null ? void 0 : onFramesUpdate();
          renderEvents();
        });
        suggestionsEl.appendChild(btn);
      }
      eventsContainer.appendChild(suggestionsEl);
    }
    const addRow = document.createElement("div");
    addRow.className = "event-add-row";
    const input = document.createElement("input");
    input.type = "text";
    input.className = "event-input";
    input.placeholder = "New event...";
    const addBtn = document.createElement("button");
    addBtn.className = "event-add-btn";
    addBtn.textContent = "Add";
    addBtn.addEventListener("click", () => {
      const value = input.value.trim();
      if (value) {
        if (!frame.events) {
          frame.events = [];
        }
        if (!frame.events.includes(value)) {
          frame.events.push(value);
          onFramesUpdate == null ? void 0 : onFramesUpdate();
          renderEvents();
        }
        input.value = "";
      }
    });
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        addBtn.click();
      }
    });
    addRow.appendChild(input);
    addRow.appendChild(addBtn);
    eventsContainer.appendChild(addRow);
  };
  renderEvents();
  section.appendChild(eventsContainer);
  return section;
}
function buildAnchorEditor(spritesheet, anchor, onChange) {
  const container = document.createElement("div");
  container.className = "spritesheet-settings";
  const anchorSection = document.createElement("div");
  anchorSection.className = "settings-section";
  const anchorLabel = document.createElement("div");
  anchorLabel.className = "settings-label";
  anchorLabel.textContent = "Anchor";
  anchorSection.appendChild(anchorLabel);
  const { wrapper, canvas, handle } = buildAnchorPreview(spritesheet, anchor, onChange);
  anchorSection.appendChild(wrapper);
  const { row, xInput, yInput } = buildAnchorInputs(anchor, (axis, value) => {
    anchor[axis] = value;
    renderAnchorPreview(canvas, handle, anchor, getFirstFrameData(spritesheet));
    onChange == null ? void 0 : onChange(anchor);
  });
  anchorSection.appendChild(row);
  container.appendChild(anchorSection);
  return {
    container,
    syncInputs: () => {
      xInput.setValue(anchor.x);
      yInput.setValue(anchor.y);
    },
    updatePreview: () => {
      renderAnchorPreview(canvas, handle, anchor, getFirstFrameData(spritesheet));
    }
  };
}
function buildAnchorPreview(spritesheet, anchor, onChange) {
  const wrapper = document.createElement("div");
  wrapper.className = "anchor-preview-wrapper";
  const canvas = document.createElement("canvas");
  canvas.className = "anchor-preview-canvas";
  wrapper.appendChild(canvas);
  const handle = document.createElement("div");
  handle.className = "anchor-handle";
  wrapper.appendChild(handle);
  requestAnimationFrame(() => {
    const rect = wrapper.getBoundingClientRect();
    const size = Math.floor(rect.width);
    canvas.width = size;
    canvas.height = size;
    renderAnchorPreview(canvas, handle, anchor, getFirstFrameData(spritesheet));
  });
  setupAnchorDrag({ canvas, handle, anchor, onChange });
  return { wrapper, canvas, handle };
}
function renderAnchorPreview(canvas, handle, anchor, frameData) {
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (!frameData) {
    return;
  }
  const { image, region } = frameData;
  const scale = Math.min(
    (canvas.width - 20) / region.width,
    (canvas.height - 20) / region.height
  );
  const drawWidth = region.width * scale;
  const drawHeight = region.height * scale;
  const offsetX = (canvas.width - drawWidth) / 2;
  const offsetY = (canvas.height - drawHeight) / 2;
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(
    image,
    region.x,
    region.y,
    region.width,
    region.height,
    offsetX,
    offsetY,
    drawWidth,
    drawHeight
  );
  const anchorX = offsetX + anchor.x * drawWidth;
  const anchorY = offsetY + (1 - anchor.y) * drawHeight;
  handle.style.left = `${anchorX}px`;
  handle.style.top = `${anchorY}px`;
  handle.dataset.offsetX = offsetX;
  handle.dataset.offsetY = offsetY;
  handle.dataset.drawWidth = drawWidth;
  handle.dataset.drawHeight = drawHeight;
}
function getFirstFrameData(spritesheet) {
  if (!spritesheet) {
    return null;
  }
  const frames = spritesheet.getFrames();
  if (!frames.length) {
    return null;
  }
  const firstFrame = frames[0];
  return {
    image: firstFrame.image,
    region: firstFrame.region
  };
}
function setupAnchorDrag({ canvas, handle, anchor, onChange }) {
  let isDragging = false;
  const updateAnchor = (e) => {
    const rect = canvas.getBoundingClientRect();
    const offsetX = parseFloat(handle.dataset.offsetX) || 0;
    const offsetY = parseFloat(handle.dataset.offsetY) || 0;
    const drawWidth = parseFloat(handle.dataset.drawWidth) || 1;
    const drawHeight = parseFloat(handle.dataset.drawHeight) || 1;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const anchorX = Math.max(0, Math.min(1, (x - offsetX) / drawWidth));
    const anchorY = Math.max(0, Math.min(1, 1 - (y - offsetY) / drawHeight));
    anchor.x = Math.round(anchorX * 100) / 100;
    anchor.y = Math.round(anchorY * 100) / 100;
    onChange == null ? void 0 : onChange(anchor);
  };
  handle.addEventListener("pointerdown", (e) => {
    isDragging = true;
    handle.setPointerCapture(e.pointerId);
  });
  handle.addEventListener("pointermove", (e) => {
    if (isDragging) {
      updateAnchor(e);
    }
  });
  handle.addEventListener("pointerup", () => {
    isDragging = false;
  });
  canvas.addEventListener("click", updateAnchor);
}
function buildAnchorInputs(anchor, onChange) {
  const row = document.createElement("div");
  row.className = "settings-row anchor-inputs";
  const xInput = document.createElement("number-input");
  xInput.setAttribute("context", "studio");
  xInput.setLabel("X");
  xInput.setValue(anchor.x);
  xInput.setStep(0.01);
  xInput.setPrecision(2);
  xInput.setMin(0);
  xInput.setMax(1);
  xInput.addEventListener("change", (e) => {
    onChange == null ? void 0 : onChange("x", e.detail.value);
  });
  const yInput = document.createElement("number-input");
  yInput.setAttribute("context", "studio");
  yInput.setLabel("Y");
  yInput.setValue(anchor.y);
  yInput.setStep(0.01);
  yInput.setPrecision(2);
  yInput.setMin(0);
  yInput.setMax(1);
  yInput.addEventListener("change", (e) => {
    onChange == null ? void 0 : onChange("y", e.detail.value);
  });
  row.appendChild(xInput);
  row.appendChild(yInput);
  return { row, xInput, yInput };
}
function buildAnimationSettings(animator, selectedAnimation, callbacks) {
  const container = document.createElement("div");
  container.className = "animation-settings";
  const animSection = document.createElement("div");
  animSection.className = "settings-section";
  const animLabel = document.createElement("div");
  animLabel.className = "settings-label";
  animLabel.textContent = "Animation";
  animSection.appendChild(animLabel);
  const animSelect = document.createElement("select-input");
  animSelect.setAttribute("context", "studio");
  const animOptions = animator.children.map((anim) => ({ value: anim.$id, label: anim.$id }));
  animSelect.setOptions(animOptions);
  animSelect.setValue(selectedAnimation == null ? void 0 : selectedAnimation.$id);
  animSelect.addEventListener("change", (e) => {
    var _a;
    (_a = callbacks.onAnimationChange) == null ? void 0 : _a.call(callbacks, e.detail.value);
  });
  animSection.appendChild(animSelect);
  container.appendChild(animSection);
  buildAnimationSettingsContent(container, selectedAnimation, callbacks);
  return {
    container,
    animSelect,
    rebuild: (animation) => {
      const sections = container.querySelectorAll("[data-setting]");
      sections.forEach((s) => s.remove());
      buildAnimationSettingsContent(container, animation, callbacks);
    }
  };
}
function buildAnimationSettingsContent(container, animation, callbacks) {
  if (!animation) {
    return;
  }
  const motion = animation.motion || {};
  const hasMotion = motion.enabled || motion.mode;
  const currentMode = hasMotion ? motion.mode || "sidescroller" : "none";
  const motionSection = document.createElement("div");
  motionSection.className = "settings-section";
  motionSection.dataset.setting = "motion";
  const motionLabel = document.createElement("div");
  motionLabel.className = "settings-label";
  motionLabel.textContent = "Motion";
  motionSection.appendChild(motionLabel);
  const motionOptions = document.createElement("div");
  motionOptions.className = "motion-options";
  motionOptions.style.display = currentMode === "none" ? "none" : "flex";
  motionOptions.style.flexDirection = "column";
  motionOptions.style.gap = "var(--spacing-md)";
  motionOptions.style.marginTop = "var(--spacing-md)";
  const modeSelect = document.createElement("select-input");
  modeSelect.setAttribute("context", "studio");
  modeSelect.setOptions([
    { value: "none", label: "None" },
    { value: "sidescroller", label: "Sidescroller" },
    { value: "topdown", label: "Top-down" }
  ]);
  modeSelect.setValue(currentMode);
  modeSelect.addEventListener("change", (e) => {
    var _a;
    if (!animation.motion) {
      animation.motion = {};
    }
    const isEnabled = e.detail.value !== "none";
    animation.motion.enabled = isEnabled;
    animation.motion.mode = isEnabled ? e.detail.value : animation.motion.mode;
    motionOptions.style.display = isEnabled ? "flex" : "none";
    rebuildDirectionPad(directionPad, animation, callbacks);
    (_a = callbacks.onMotionChange) == null ? void 0 : _a.call(callbacks, animation.motion);
  });
  motionSection.appendChild(modeSelect);
  const dirSubSection = document.createElement("div");
  dirSubSection.className = "settings-section";
  const dirLabel = document.createElement("div");
  dirLabel.className = "settings-label";
  dirLabel.textContent = "Direction";
  dirSubSection.appendChild(dirLabel);
  const directionPad = document.createElement("div");
  directionPad.className = "direction-pad";
  rebuildDirectionPad(directionPad, animation, callbacks);
  dirSubSection.appendChild(directionPad);
  motionOptions.appendChild(dirSubSection);
  const speedSubSection = document.createElement("div");
  speedSubSection.className = "settings-section";
  const speedLabel = document.createElement("div");
  speedLabel.className = "settings-label";
  speedLabel.textContent = "Speed";
  speedSubSection.appendChild(speedLabel);
  const speedInput = document.createElement("slider-input");
  speedInput.setAttribute("context", "studio");
  speedInput.setAttribute("min", "0.01");
  speedInput.setAttribute("max", "3");
  speedInput.setAttribute("step", "0.01");
  speedInput.setValue(motion.speed ?? 1);
  speedInput.addEventListener("change", (e) => {
    var _a;
    if (!animation.motion) {
      animation.motion = {};
    }
    animation.motion.speed = e.detail.value;
    (_a = callbacks.onMotionUpdate) == null ? void 0 : _a.call(callbacks, animation.motion);
  });
  speedSubSection.appendChild(speedInput);
  motionOptions.appendChild(speedSubSection);
  motionSection.appendChild(motionOptions);
  container.appendChild(motionSection);
}
function rebuildDirectionPad(pad, animation, callbacks) {
  pad.innerHTML = "";
  const motion = animation.motion || {};
  const mode = motion.mode || "sidescroller";
  const direction = motion.direction || "e";
  const arrows = {
    nw: "↖",
    n: "↑",
    ne: "↗",
    w: "←",
    center: "",
    e: "→",
    sw: "↙",
    s: "↓",
    se: "↘"
  };
  const sideDirections = ["n", "e", "s", "w"];
  const topDownDirections = ["nw", "n", "ne", "w", "e", "sw", "s", "se"];
  const activeDirections = mode === "topdown" ? topDownDirections : sideDirections;
  const layout = ["nw", "n", "ne", "w", "center", "e", "sw", "s", "se"];
  for (const pos of layout) {
    const btn = document.createElement("button");
    btn.className = "direction-btn";
    if (pos === "center") {
      btn.classList.add("center");
    } else if (activeDirections.includes(pos)) {
      btn.textContent = arrows[pos];
      if (direction === pos) {
        btn.classList.add("active");
      }
      btn.addEventListener("click", () => {
        var _a;
        if (!animation.motion) {
          animation.motion = {};
        }
        animation.motion.direction = pos;
        rebuildDirectionPad(pad, animation, callbacks);
        (_a = callbacks.onMotionChange) == null ? void 0 : _a.call(callbacks, animation.motion);
      });
    } else {
      btn.style.visibility = "hidden";
    }
    pad.appendChild(btn);
  }
}
class AnimatorView extends EditorComponent {
  constructor() {
    super(...arguments);
    __privateAdd(this, _AnimatorView_instances);
    __privateAdd(this, _context, null);
    __privateAdd(this, _animatorName, null);
    __privateAdd(this, _animatorConfig, null);
    __privateAdd(this, _animator, null);
    __privateAdd(this, _spritesheet, null);
    __privateAdd(this, _selectedAnimation, null);
    __privateAdd(this, _isCustom, false);
    __privateAdd(this, _store, new PerkyStore());
    __privateAdd(this, _appLayout, null);
    __privateAdd(this, _containerEl, null);
    __privateAdd(this, _previewSectionEl, null);
    __privateAdd(this, _previewEl, null);
    __privateAdd(this, _timelineEl, null);
    __privateAdd(this, _framesDrawerEl, null);
    __privateAdd(this, _editorDrawerEl, null);
    __privateAdd(this, _spritesheetSettingsDrawerEl, null);
    __privateAdd(this, _spritesheetEl, null);
    __privateAdd(this, _selectedFrameIndex, -1);
    __privateAdd(this, _drawerMode, null);
    __privateAdd(this, _headerAnimSelect, null);
    __privateAdd(this, _drawerAnimSelect, null);
    __privateAdd(this, _anchor, { x: 0.5, y: 0.5 });
    __privateAdd(this, _anchorEditor, null);
    __privateAdd(this, _animationSettings, null);
    __privateAdd(this, _backgroundImage, null);
  }
  onConnected() {
    __privateMethod(this, _AnimatorView_instances, buildDOM_fn4).call(this);
    if (__privateGet(this, _context) && __privateGet(this, _animatorConfig)) {
      __privateMethod(this, _AnimatorView_instances, initAnimator_fn).call(this);
    }
  }
  setContext({ textureSystem, animatorConfig, animatorName, backgroundImage, studioConfig, isCustom }) {
    __privateSet(this, _context, { textureSystem, studioConfig });
    __privateSet(this, _animatorConfig, animatorConfig);
    __privateSet(this, _animatorName, animatorName || "animator");
    __privateSet(this, _backgroundImage, backgroundImage || null);
    __privateSet(this, _isCustom, isCustom || false);
    if (this.isConnected && __privateGet(this, _animatorConfig)) {
      __privateMethod(this, _AnimatorView_instances, initAnimator_fn).call(this);
    }
  }
}
_context = new WeakMap();
_animatorName = new WeakMap();
_animatorConfig = new WeakMap();
_animator = new WeakMap();
_spritesheet = new WeakMap();
_selectedAnimation = new WeakMap();
_isCustom = new WeakMap();
_store = new WeakMap();
_appLayout = new WeakMap();
_containerEl = new WeakMap();
_previewSectionEl = new WeakMap();
_previewEl = new WeakMap();
_timelineEl = new WeakMap();
_framesDrawerEl = new WeakMap();
_editorDrawerEl = new WeakMap();
_spritesheetSettingsDrawerEl = new WeakMap();
_spritesheetEl = new WeakMap();
_selectedFrameIndex = new WeakMap();
_drawerMode = new WeakMap();
_headerAnimSelect = new WeakMap();
_drawerAnimSelect = new WeakMap();
_anchor = new WeakMap();
_anchorEditor = new WeakMap();
_animationSettings = new WeakMap();
_backgroundImage = new WeakMap();
_AnimatorView_instances = new WeakSet();
initAnimator_fn = function() {
  if (!__privateGet(this, _animatorConfig)) {
    return;
  }
  __privateSet(this, _animator, new SpriteAnimator({
    sprite: null,
    config: __privateGet(this, _animatorConfig),
    textureSystem: __privateGet(this, _context).textureSystem
  }));
  const spritesheetName = inferSpritesheetName(__privateGet(this, _animatorConfig));
  __privateSet(this, _spritesheet, spritesheetName ? __privateGet(this, _context).textureSystem.getSpritesheet(spritesheetName) : null);
  __privateSet(this, _anchor, __privateGet(this, _animatorConfig).anchor || { x: 0.5, y: 0.5 });
  __privateSet(this, _selectedAnimation, __privateGet(this, _animator).children[0] || null);
  __privateMethod(this, _AnimatorView_instances, render_fn).call(this);
};
buildDOM_fn4 = function() {
  adoptStyleSheets(this.shadowRoot, animatorViewStyles, frameEditorStyles, settingsStyles);
  __privateSet(this, _appLayout, createElement("app-layout", {
    attrs: { "no-menu": "", "no-close": "", "no-footer": "" }
  }));
  __privateSet(this, _containerEl, createElement("div", { class: "animator-container" }));
  __privateGet(this, _appLayout).appendChild(__privateGet(this, _containerEl));
  this.shadowRoot.appendChild(__privateGet(this, _appLayout));
};
render_fn = function() {
  __privateGet(this, _appLayout).querySelectorAll("[slot]").forEach((el) => el.remove());
  __privateGet(this, _containerEl).innerHTML = "";
  if (!__privateGet(this, _animator)) {
    __privateGet(this, _containerEl).innerHTML = '<div class="empty">No animator loaded</div>';
    return;
  }
  __privateMethod(this, _AnimatorView_instances, buildHeaderControls_fn).call(this);
  __privateSet(this, _previewSectionEl, __privateMethod(this, _AnimatorView_instances, createPreviewSection_fn).call(this));
  __privateGet(this, _containerEl).appendChild(__privateGet(this, _previewSectionEl));
  __privateSet(this, _timelineEl, createElement("animation-timeline", { class: "timeline-section" }));
  if (__privateGet(this, _selectedAnimation)) {
    __privateGet(this, _timelineEl).setFrames(__privateGet(this, _selectedAnimation).frames);
  }
  __privateMethod(this, _AnimatorView_instances, setupTimelineEvents_fn).call(this);
  __privateGet(this, _containerEl).appendChild(__privateGet(this, _timelineEl));
  __privateMethod(this, _AnimatorView_instances, buildDrawers_fn).call(this);
};
createPreviewSection_fn = function() {
  var _a, _b;
  const section = createElement("div", { class: "preview-section" });
  __privateSet(this, _previewEl, document.createElement("animation-preview"));
  if (__privateGet(this, _selectedAnimation)) {
    __privateGet(this, _previewEl).setAnimation(__privateGet(this, _selectedAnimation));
    __privateGet(this, _previewEl).setMotion(__privateGet(this, _selectedAnimation).motion);
    __privateGet(this, _previewEl).setAnchor(__privateGet(this, _anchor));
  }
  if (__privateGet(this, _backgroundImage)) {
    __privateGet(this, _previewEl).setBackgroundImage(__privateGet(this, _backgroundImage));
    const backgroundRegion = TextureRegion.fromImage(__privateGet(this, _backgroundImage));
    __privateGet(this, _previewEl).setBackgroundRegion(backgroundRegion);
  }
  const unitsInView = (_a = __privateGet(this, _context).studioConfig) == null ? void 0 : _a.unitsInView;
  if (unitsInView) {
    __privateGet(this, _previewEl).setUnitsInView(unitsInView);
  }
  const size = (_b = __privateGet(this, _animatorConfig)) == null ? void 0 : _b.size;
  if (size) {
    __privateGet(this, _previewEl).setSize(size);
  }
  __privateGet(this, _previewEl).addEventListener("frame", (e) => {
    var _a2;
    (_a2 = __privateGet(this, _timelineEl)) == null ? void 0 : _a2.setCurrentIndex(e.detail.index);
  });
  __privateGet(this, _previewEl).addEventListener("settingsrequest", () => {
    __privateMethod(this, _AnimatorView_instances, toggleAnimationSettings_fn).call(this);
  });
  section.appendChild(__privateGet(this, _previewEl));
  return section;
};
buildHeaderControls_fn = function() {
  var _a;
  const headerStart = createElement("div", {
    class: "header-controls",
    attrs: { slot: "header-start" }
  });
  const backBtn = createElement("button", {
    class: "toolbar-btn",
    html: ICONS.chevronLeft,
    title: "Back to gallery"
  });
  backBtn.addEventListener("click", () => {
    window.location.href = "index.html";
  });
  headerStart.appendChild(backBtn);
  const settingsMenu = document.createElement("dropdown-menu");
  settingsMenu.setIcon(ICONS.wrench);
  const menuItems = [
    { label: "Animation Settings", action: () => __privateMethod(this, _AnimatorView_instances, openAnimationSettings_fn).call(this) },
    { label: "Anchor Settings", action: () => __privateMethod(this, _AnimatorView_instances, openSpritesheetSettings_fn).call(this) },
    { label: "Copy to Clipboard", action: () => __privateMethod(this, _AnimatorView_instances, exportToClipboard_fn).call(this) }
  ];
  if (__privateGet(this, _isCustom)) {
    menuItems.push({ label: "Save", action: () => __privateMethod(this, _AnimatorView_instances, saveCustomAnimator_fn).call(this) });
    menuItems.push({ label: "Export .perky", action: () => __privateMethod(this, _AnimatorView_instances, exportPerkyFile_fn).call(this) });
  }
  settingsMenu.setItems(menuItems);
  headerStart.appendChild(settingsMenu);
  __privateSet(this, _headerAnimSelect, createElement("select-input", { attrs: { context: "studio" } }));
  const animOptions = __privateGet(this, _animator).children.map((anim) => ({ value: anim.$id, label: anim.$id }));
  __privateGet(this, _headerAnimSelect).setOptions(animOptions);
  __privateGet(this, _headerAnimSelect).setValue((_a = __privateGet(this, _selectedAnimation)) == null ? void 0 : _a.$id);
  __privateGet(this, _headerAnimSelect).addEventListener("change", (e) => {
    __privateSet(this, _selectedAnimation, __privateGet(this, _animator).getChild(e.detail.value));
    __privateMethod(this, _AnimatorView_instances, updateForSelectedAnimation_fn).call(this);
    __privateMethod(this, _AnimatorView_instances, syncDrawerAnimSelect_fn).call(this);
  });
  headerStart.appendChild(__privateGet(this, _headerAnimSelect));
  __privateGet(this, _appLayout).appendChild(headerStart);
  if (__privateGet(this, _selectedAnimation)) {
    const headerEnd = createElement("div", {
      class: "header-controls",
      attrs: { slot: "header-end" }
    });
    const anim = __privateGet(this, _selectedAnimation);
    const fpsInput = createElement("number-input", { attrs: { context: "studio" } });
    fpsInput.setLabel("FPS");
    fpsInput.setValue(anim.fps);
    fpsInput.setStep(1);
    fpsInput.setPrecision(0);
    fpsInput.setMin(1);
    fpsInput.setMax(60);
    fpsInput.addEventListener("change", (e) => {
      anim.setFps(e.detail.value);
    });
    const loopToggle = createElement("toggle-input", { attrs: { context: "studio" } });
    loopToggle.setLabel("Loop");
    loopToggle.setChecked(anim.loop);
    loopToggle.addEventListener("change", (e) => {
      anim.setLoop(e.detail.checked);
    });
    const modeSelect = createElement("select-input", { attrs: { context: "studio" } });
    modeSelect.setOptions([
      { value: "forward", label: "Forward" },
      { value: "reverse", label: "Reverse" },
      { value: "pingpong", label: "Ping-pong" }
    ]);
    modeSelect.setValue(anim.playbackMode);
    modeSelect.addEventListener("change", (e) => {
      anim.setPlaybackMode(e.detail.value);
    });
    headerEnd.appendChild(fpsInput);
    headerEnd.appendChild(loopToggle);
    headerEnd.appendChild(modeSelect);
    __privateGet(this, _appLayout).appendChild(headerEnd);
  }
};
buildDrawers_fn = function() {
  __privateSet(this, _framesDrawerEl, createElement("side-drawer", { attrs: { position: "left" } }));
  __privateSet(this, _spritesheetEl, document.createElement("spritesheet-viewer"));
  if (__privateGet(this, _spritesheet)) {
    __privateGet(this, _spritesheetEl).setSpritesheet(__privateGet(this, _spritesheet));
  }
  __privateGet(this, _spritesheetEl).addEventListener("frameclick", (e) => {
    __privateMethod(this, _AnimatorView_instances, addFrameToTimeline_fn).call(this, e.detail);
  });
  __privateGet(this, _framesDrawerEl).appendChild(__privateGet(this, _spritesheetEl));
  __privateGet(this, _previewSectionEl).appendChild(__privateGet(this, _framesDrawerEl));
  __privateSet(this, _editorDrawerEl, createElement("side-drawer", { attrs: { position: "right" } }));
  __privateGet(this, _previewSectionEl).appendChild(__privateGet(this, _editorDrawerEl));
  __privateSet(this, _spritesheetSettingsDrawerEl, createElement("side-drawer", { attrs: { position: "right" } }));
  __privateGet(this, _previewSectionEl).appendChild(__privateGet(this, _spritesheetSettingsDrawerEl));
};
toggleFramesDrawer_fn = function() {
  var _a;
  (_a = __privateGet(this, _framesDrawerEl)) == null ? void 0 : _a.toggle();
};
toggleAnimationSettings_fn = function() {
  if (__privateGet(this, _editorDrawerEl).isOpen && __privateGet(this, _drawerMode) === "settings") {
    __privateGet(this, _editorDrawerEl).close();
  } else {
    __privateMethod(this, _AnimatorView_instances, openAnimationSettings_fn).call(this);
  }
};
openSpritesheetSettings_fn = function() {
  __privateGet(this, _editorDrawerEl).close();
  __privateGet(this, _spritesheetSettingsDrawerEl).innerHTML = "";
  __privateSet(this, _anchorEditor, buildAnchorEditor(__privateGet(this, _spritesheet), __privateGet(this, _anchor), (anchor) => {
    var _a;
    __privateGet(this, _anchorEditor).syncInputs();
    __privateGet(this, _anchorEditor).updatePreview();
    (_a = __privateGet(this, _previewEl)) == null ? void 0 : _a.setAnchor(anchor);
  }));
  __privateGet(this, _spritesheetSettingsDrawerEl).appendChild(__privateGet(this, _anchorEditor).container);
  __privateGet(this, _spritesheetSettingsDrawerEl).open();
};
openAnimationSettings_fn = function() {
  var _a;
  __privateGet(this, _spritesheetSettingsDrawerEl).close();
  __privateSet(this, _selectedFrameIndex, -1);
  (_a = __privateGet(this, _timelineEl)) == null ? void 0 : _a.clearSelection();
  __privateSet(this, _drawerMode, "settings");
  __privateGet(this, _editorDrawerEl).innerHTML = "";
  __privateSet(this, _animationSettings, buildAnimationSettings(__privateGet(this, _animator), __privateGet(this, _selectedAnimation), {
    onAnimationChange: (animId) => {
      var _a2;
      __privateSet(this, _selectedAnimation, __privateGet(this, _animator).getChild(animId));
      __privateMethod(this, _AnimatorView_instances, updateForSelectedAnimation_fn).call(this);
      (_a2 = __privateGet(this, _headerAnimSelect)) == null ? void 0 : _a2.setValue(animId);
      __privateGet(this, _animationSettings).rebuild(__privateGet(this, _selectedAnimation));
    },
    onMotionChange: (motion) => {
      var _a2;
      (_a2 = __privateGet(this, _previewEl)) == null ? void 0 : _a2.setMotion(motion);
    },
    onMotionUpdate: (motion) => {
      var _a2;
      (_a2 = __privateGet(this, _previewEl)) == null ? void 0 : _a2.updateMotion(motion);
    }
  }));
  __privateSet(this, _drawerAnimSelect, __privateGet(this, _animationSettings).animSelect);
  __privateGet(this, _editorDrawerEl).appendChild(__privateGet(this, _animationSettings).container);
  __privateGet(this, _editorDrawerEl).open();
};
syncDrawerAnimSelect_fn = function() {
  var _a, _b;
  if (__privateGet(this, _drawerAnimSelect) && __privateGet(this, _drawerMode) === "settings") {
    __privateGet(this, _drawerAnimSelect).setValue((_a = __privateGet(this, _selectedAnimation)) == null ? void 0 : _a.$id);
    (_b = __privateGet(this, _animationSettings)) == null ? void 0 : _b.rebuild(__privateGet(this, _selectedAnimation));
  }
};
updateEditorDrawer_fn = function() {
  var _a, _b, _c;
  if (__privateGet(this, _selectedFrameIndex) < 0) {
    if (__privateGet(this, _drawerMode) === "frame") {
      (_a = __privateGet(this, _editorDrawerEl)) == null ? void 0 : _a.close();
      __privateSet(this, _drawerMode, null);
    }
    return;
  }
  const frame = (_b = __privateGet(this, _selectedAnimation)) == null ? void 0 : _b.frames[__privateGet(this, _selectedFrameIndex)];
  if (!frame) {
    if (__privateGet(this, _drawerMode) === "frame") {
      (_c = __privateGet(this, _editorDrawerEl)) == null ? void 0 : _c.close();
      __privateSet(this, _drawerMode, null);
    }
    return;
  }
  __privateSet(this, _drawerMode, "frame");
  __privateGet(this, _editorDrawerEl).innerHTML = "";
  const frameEditor = buildFrameEditor(frame, {
    onFramesUpdate: () => {
      __privateGet(this, _timelineEl).setFrames(__privateGet(this, _selectedAnimation).frames);
    },
    getSuggestions: (excludeEvents) => {
      return collectEventSuggestions(__privateGet(this, _animator), excludeEvents);
    }
  });
  __privateGet(this, _editorDrawerEl).appendChild(frameEditor);
  __privateGet(this, _editorDrawerEl).open();
};
addFrameToTimeline_fn = function({ name, region }) {
  if (!__privateGet(this, _selectedAnimation) || !region) {
    return;
  }
  __privateGet(this, _selectedAnimation).frames.push({ region, name });
  __privateGet(this, _timelineEl).setFrames(__privateGet(this, _selectedAnimation).frames);
  requestAnimationFrame(() => {
    var _a;
    const frames = (_a = __privateGet(this, _timelineEl).shadowRoot) == null ? void 0 : _a.querySelectorAll(".frame");
    const lastFrame = frames == null ? void 0 : frames[frames.length - 1];
    if (lastFrame) {
      lastFrame.classList.add("just-added");
      lastFrame.addEventListener("animationend", () => {
        lastFrame.classList.remove("just-added");
      }, { once: true });
    }
  });
};
setupTimelineEvents_fn = function() {
  __privateGet(this, _timelineEl).addEventListener("frameclick", (e) => {
    var _a;
    (_a = __privateGet(this, _previewEl)) == null ? void 0 : _a.setCurrentIndex(e.detail.index);
  });
  __privateGet(this, _timelineEl).addEventListener("framedrop", (e) => {
    __privateMethod(this, _AnimatorView_instances, handleFrameDrop_fn).call(this, e.detail);
  });
  __privateGet(this, _timelineEl).addEventListener("framemove", (e) => {
    __privateMethod(this, _AnimatorView_instances, handleFrameMove_fn).call(this, e.detail);
  });
  __privateGet(this, _timelineEl).addEventListener("framedelete", (e) => {
    __privateMethod(this, _AnimatorView_instances, handleFrameDelete_fn).call(this, e.detail);
  });
  __privateGet(this, _timelineEl).addEventListener("frameduration", (e) => {
    __privateMethod(this, _AnimatorView_instances, handleFrameDuration_fn).call(this, e.detail);
  });
  __privateGet(this, _timelineEl).addEventListener("frameselect", (e) => {
    __privateMethod(this, _AnimatorView_instances, handleFrameSelect_fn).call(this, e.detail);
  });
  __privateGet(this, _timelineEl).addEventListener("addrequest", () => {
    __privateMethod(this, _AnimatorView_instances, toggleFramesDrawer_fn).call(this);
  });
};
handleFrameSelect_fn = function({ index }) {
  __privateSet(this, _selectedFrameIndex, index);
  __privateMethod(this, _AnimatorView_instances, updateEditorDrawer_fn).call(this);
};
updateForSelectedAnimation_fn = function() {
  var _a, _b, _c;
  if (__privateGet(this, _selectedAnimation)) {
    (_a = __privateGet(this, _timelineEl)) == null ? void 0 : _a.setFrames(__privateGet(this, _selectedAnimation).frames);
    (_b = __privateGet(this, _previewEl)) == null ? void 0 : _b.setAnimation(__privateGet(this, _selectedAnimation));
    (_c = __privateGet(this, _previewEl)) == null ? void 0 : _c.setMotion(__privateGet(this, _selectedAnimation).motion);
  }
  __privateGet(this, _appLayout).querySelectorAll('[slot^="header"]').forEach((el) => el.remove());
  __privateMethod(this, _AnimatorView_instances, buildHeaderControls_fn).call(this);
};
handleFrameDrop_fn = function({ index, frameName }) {
  if (!__privateGet(this, _selectedAnimation) || !__privateGet(this, _spritesheet)) {
    return;
  }
  const region = __privateGet(this, _spritesheet).getRegion(frameName);
  if (!region) {
    return;
  }
  __privateGet(this, _selectedAnimation).frames.splice(index, 0, { region, name: frameName });
  __privateGet(this, _timelineEl).setFrames(__privateGet(this, _selectedAnimation).frames);
};
handleFrameMove_fn = function({ fromIndex, toIndex }) {
  if (!__privateGet(this, _selectedAnimation)) {
    return;
  }
  const frames = __privateGet(this, _selectedAnimation).frames;
  const [moved] = frames.splice(fromIndex, 1);
  const insertIndex = fromIndex < toIndex ? toIndex - 1 : toIndex;
  frames.splice(insertIndex, 0, moved);
  __privateGet(this, _timelineEl).setFrames(frames);
  __privateGet(this, _timelineEl).flashMovedFrame(insertIndex);
};
handleFrameDelete_fn = function({ index }) {
  if (!__privateGet(this, _selectedAnimation)) {
    return;
  }
  if (__privateGet(this, _selectedFrameIndex) === index) {
    __privateSet(this, _selectedFrameIndex, -1);
    __privateGet(this, _timelineEl).clearSelection();
    __privateMethod(this, _AnimatorView_instances, updateEditorDrawer_fn).call(this);
  } else if (__privateGet(this, _selectedFrameIndex) > index) {
    __privateWrapper(this, _selectedFrameIndex)._--;
  }
  __privateGet(this, _selectedAnimation).frames.splice(index, 1);
  __privateGet(this, _timelineEl).setFrames(__privateGet(this, _selectedAnimation).frames);
};
handleFrameDuration_fn = function({ index, duration }) {
  if (!__privateGet(this, _selectedAnimation)) {
    return;
  }
  const frame = __privateGet(this, _selectedAnimation).frames[index];
  if (frame) {
    frame.duration = duration;
    __privateGet(this, _timelineEl).setFrames(__privateGet(this, _selectedAnimation).frames);
  }
};
exportToClipboard_fn = function() {
  if (!__privateGet(this, _animator)) {
    return;
  }
  const animations = {};
  for (const anim of __privateGet(this, _animator).children) {
    animations[anim.$id] = buildAnimationConfig(anim, __privateGet(this, _spritesheet));
  }
  const lines = [];
  lines.push(`static anchor = {x: ${__privateGet(this, _anchor).x}, y: ${__privateGet(this, _anchor).y}}`);
  lines.push("");
  lines.push(`static animations = ${JSON.stringify(animations, null, 4)}`);
  navigator.clipboard.writeText(lines.join("\n"));
};
saveCustomAnimator_fn = async function() {
  if (!__privateGet(this, _isCustom) || !__privateGet(this, _animator)) {
    return;
  }
  const animatorConfig = __privateMethod(this, _AnimatorView_instances, buildAnimatorConfig_fn).call(this);
  const resource = await __privateGet(this, _store).get(__privateGet(this, _animatorName));
  if (!resource) {
    return;
  }
  const configFile = resource.files.find((f) => f.name.endsWith("Animator.json"));
  if (configFile) {
    configFile.blob = new Blob([JSON.stringify(animatorConfig)], { type: "application/json" });
  }
  await __privateGet(this, _store).save(__privateGet(this, _animatorName), {
    type: "animator",
    name: resource.name,
    files: resource.files
  });
};
exportPerkyFile_fn = async function() {
  if (!__privateGet(this, _isCustom)) {
    return;
  }
  await __privateGet(this, _store).export(__privateGet(this, _animatorName));
};
buildAnimatorConfig_fn = function() {
  const spritesheetName = inferSpritesheetName(__privateGet(this, _animatorConfig));
  const animations = {};
  for (const anim of __privateGet(this, _animator).children) {
    animations[anim.$id] = buildAnimationConfig(anim, __privateGet(this, _spritesheet));
  }
  return {
    spritesheet: spritesheetName,
    anchor: { ...__privateGet(this, _anchor) },
    animations
  };
};
customElements.define("animator-view", AnimatorView);
async function launchAnimatorStudio(manifestData2, container, options = {}) {
  try {
    const manifest = await loadManifest(manifestData2, options.basePath);
    const studioConfig = getStudioConfig(manifest, "animator");
    const backgroundImage = getBackgroundImage(manifest, studioConfig);
    const animatorData = await resolveAnimatorData(manifest, options);
    if (!animatorData.animatorConfig) {
      container.innerHTML = '<div class="loading" style="color: #f66;">No animator found</div>';
      return;
    }
    container.innerHTML = "";
    const animatorView = document.createElement("animator-view");
    animatorView.setContext({
      ...animatorData,
      backgroundImage,
      studioConfig
    });
    container.appendChild(animatorView);
  } catch (error) {
    container.innerHTML = `<div class="loading" style="color: #f66;">Error: ${error.message}</div>`;
    logger.error(error);
  }
}
async function resolveAnimatorData(manifest, options) {
  if (options.isCustom && options.animatorId) {
    const customData = await loadCustomAnimator(options.animatorId);
    if (customData) {
      return {
        textureSystem: customData.textureSystem,
        animatorConfig: customData.animatorConfig,
        animatorName: options.animatorId,
        isCustom: true
      };
    }
  }
  return loadGameAnimator(manifest, options.animatorId);
}
function loadGameAnimator(manifest, animatorId) {
  const textureSystem = buildTextureSystem(manifest);
  const animators = collectAnimators(manifest);
  const result = { textureSystem, animatorConfig: null, animatorName: null, isCustom: false };
  if (animatorId && animators[animatorId]) {
    result.animatorConfig = animators[animatorId];
    result.animatorName = animatorId;
    return result;
  }
  const firstKey = Object.keys(animators)[0];
  if (firstKey) {
    result.animatorConfig = animators[firstKey];
    result.animatorName = firstKey;
  }
  return result;
}
async function loadCustomAnimator(animatorId) {
  const store = new PerkyStore();
  const resource = await store.get(animatorId);
  if (!resource) {
    return null;
  }
  const configFile = resource.files.find((f) => f.name.endsWith("Animator.json"));
  const spritesheetJsonFile = resource.files.find((f) => f.name.endsWith("Spritesheet.json"));
  const pngFiles = resource.files.filter((f) => f.name.endsWith(".png")).sort((a, b) => a.name.localeCompare(b.name));
  if (!configFile || !spritesheetJsonFile || pngFiles.length === 0) {
    return null;
  }
  const configText = await blobToText(configFile.blob);
  const animatorConfig = JSON.parse(configText);
  const spritesheetText = await blobToText(spritesheetJsonFile.blob);
  const spritesheetData = JSON.parse(spritesheetText);
  const images = await Promise.all(pngFiles.map((f) => blobToImage(f.blob)));
  const textureSystem = new TextureSystem();
  const spritesheetName = spritesheetJsonFile.name.replace(".json", "");
  textureSystem.registerSpritesheet(spritesheetName, {
    images,
    data: spritesheetData
  });
  return { textureSystem, animatorConfig };
}
function blobToText(blob) {
  if (typeof blob.text === "function") {
    return blob.text();
  }
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsText(blob);
  });
}
function blobToImage(blob) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(blob);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Failed to load image"));
    };
    img.src = url;
  });
}
async function init() {
  const container = document.getElementById("app");
  const params = new URLSearchParams(window.location.search);
  const animatorId = params.get("id");
  const isCustom = params.get("custom") === "1";
  await launchAnimatorStudio(manifestData, container, {
    basePath: "../",
    animatorId,
    isCustom
  });
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
