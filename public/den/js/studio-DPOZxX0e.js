var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _overlay, _step, _psd, _converter, _store, _fileInput, _aspectRatioLocked, _aspectRatio, _existingNames, _elements, _PsdImporter_instances, reset_fn, buildDOM_fn, buildHeader_fn, buildBody_fn, buildDropStep_fn, buildPreviewStep_fn, buildProgressStep_fn, toggleAspectLock_fn, handleWidthChange_fn, handleHeightChange_fn, syncDimension_fn, updateStep_fn, updateHeader_fn, handleBack_fn, handleDrop_fn, handleFileSelect_fn, loadFile_fn, populatePreview_fn, validateName_fn, onProgress_fn, handleCreate_fn, showError_fn, _overlay2, _conflicts, _choices, _resolvePromise, _ConflictResolver_instances, buildDOM_fn2, renderConflicts_fn, createConflictItem_fn, createVersionCard_fn, selectVersion_fn, applyChoices_fn, _popoverEl, _isOpen, _boundClose, _StorageInfo_instances, buildDOM_fn3, toggle_fn, open_fn, close_fn, onOutsideClick_fn, refreshContent_fn, _manifest, _animators, _customAnimators, _textureSystem, _appLayout, _contentEl, _psdImporter, _thumbnails, _customMeta, _store2, _conflictResolver, _selectionMode, _selectedItems, _selectBtn, _exportBtn, _deleteBtn, _revertBtn, _HubView_instances, buildDOM_fn4, buildHeaderActions_fn, render_fn, loadCustomAnimators_fn, reconcile_fn, compareVersions_fn, resolveConflicts_fn, deleteCustom_fn, createAnimatorCard_fn, createNewAnimatorCard_fn, openPsdImporter_fn, handleImportComplete_fn, createThumbnail_fn, getFirstFrameRegion_fn, resolveRegion_fn, openAnimator_fn, toggleSelectionMode_fn, toggleItemSelection_fn, updateActionButtons_fn, importFile_fn, exportSelected_fn, revertSelected_fn, deleteSelected_fn;
import { b as createStyleSheet, d as adoptStyleSheets, c as createElement, a as formatBytes, p as pluralize, l as logger } from "./preload-helper-CeD19KcA.js";
import { P as PsdConverter, l as loadManifest, b as buildTextureSystem, c as collectAnimators } from "./psd_converter-WjySAn51.js";
import { E as EditorComponent, d as PerkyStore, I as ICONS, m as manifestData } from "./perky_store-zqg6msJT.js";
import { f as findAnimationGroups, e as extractFramesFromGroup, p as putPixels } from "./spritesheet-BBD5cSQg.js";
const styles$2 = createStyleSheet(`
    :host {
        display: contents;
    }

    .importer-content {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }

    .importer-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: var(--spacing-lg);
        border-bottom: 1px solid var(--border);
        background: var(--bg-secondary);
    }

    .header-btn {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
        padding: var(--spacing-sm) var(--spacing-md);
        background: transparent;
        border: none;
        color: var(--accent);
        font-size: var(--font-size-md);
        font-family: var(--font-mono);
        cursor: pointer;
        border-radius: var(--radius-md);
        min-height: var(--touch-target);
        -webkit-tap-highlight-color: transparent;
    }

    .header-btn:active {
        background: var(--bg-hover);
    }

    .header-btn:disabled {
        opacity: 0.5;
        pointer-events: none;
    }

    .header-btn.primary {
        background: var(--accent);
        color: var(--bg-primary);
    }

    .header-title {
        font-size: var(--font-size-lg);
        font-weight: 600;
        color: var(--fg-primary);
    }

    .importer-body {
        flex: 1;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
    }

    .step {
        display: none;
        height: 100%;
    }

    .step.active {
        display: flex;
        flex-direction: column;
    }

    .drop-zone {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: var(--spacing-xl);
        border: 2px dashed var(--border);
        border-radius: var(--radius-lg);
        cursor: pointer;
        transition: border-color var(--transition-normal), background var(--transition-normal);
        -webkit-tap-highlight-color: transparent;
    }

    .drop-zone:active,
    .drop-zone.dragover {
        border-color: var(--accent);
        background: var(--bg-hover);
    }

    .drop-zone-icon {
        width: 48px;
        height: 48px;
        margin-bottom: var(--spacing-lg);
        opacity: 0.6;
        color: var(--fg-muted);
    }

    .drop-zone-text {
        font-size: var(--font-size-lg);
        color: var(--fg-primary);
        margin-bottom: var(--spacing-sm);
    }

    .drop-zone-hint {
        font-size: var(--font-size-sm);
        color: var(--fg-muted);
    }

    .preview-section {
        padding: var(--spacing-xl);
    }

    .preview-canvas-container {
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--bg-primary);
        border-radius: var(--radius-lg);
        padding: var(--spacing-xl);
        margin-bottom: var(--spacing-lg);
        min-height: 150px;
    }

    .preview-canvas {
        max-width: 100%;
        max-height: 200px;
        image-rendering: pixelated;
    }

    .preview-dimensions {
        text-align: center;
        font-size: var(--font-size-sm);
        color: var(--fg-muted);
        margin-bottom: var(--spacing-xl);
    }

    .section-title {
        font-size: 13px;
        font-weight: 600;
        color: var(--fg-muted);
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: var(--spacing-md);
    }

    .animation-tags {
        display: flex;
        flex-wrap: wrap;
        gap: var(--spacing-sm);
        margin-bottom: var(--spacing-xl);
    }

    .animation-tag {
        display: flex;
        align-items: center;
        gap: var(--spacing-xs);
        padding: var(--spacing-sm) var(--spacing-md);
        background: var(--bg-secondary);
        border-radius: var(--radius-md);
        font-size: var(--font-size-sm);
        color: var(--fg-primary);
    }

    .animation-tag span {
        color: var(--fg-muted);
    }

    .settings-row {
        display: flex;
        align-items: center;
        gap: var(--spacing-md);
        margin-bottom: var(--spacing-md);
    }

    .settings-label {
        flex: 0 0 100px;
        font-size: var(--font-size-sm);
        color: var(--fg-muted);
    }

    .settings-input {
        flex: 1;
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
    }

    .size-input {
        width: 80px;
        padding: var(--spacing-sm) var(--spacing-md);
        background: var(--bg-primary);
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        color: var(--fg-primary);
        font-family: var(--font-mono);
        font-size: var(--font-size-md);
        min-height: var(--touch-target);
    }

    .size-separator {
        color: var(--fg-muted);
    }

    .link-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: var(--touch-target);
        height: var(--touch-target);
        background: transparent;
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        color: var(--fg-muted);
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
    }

    .link-btn:active {
        background: var(--bg-hover);
    }

    .link-btn.active {
        color: var(--accent);
        border-color: var(--accent);
    }

    .link-btn svg {
        width: 18px;
        height: 18px;
    }

    .resize-select {
        flex: 1;
        padding: var(--spacing-sm) var(--spacing-md);
        background: var(--bg-primary);
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        color: var(--fg-primary);
        font-family: var(--font-mono);
        font-size: var(--font-size-md);
        min-height: var(--touch-target);
    }

    .name-section {
        padding: var(--spacing-xl);
    }

    .name-input {
        width: 100%;
        padding: var(--spacing-md);
        background: var(--bg-primary);
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        color: var(--fg-primary);
        font-family: var(--font-mono);
        font-size: var(--font-size-lg);
        min-height: var(--touch-target);
        margin-bottom: var(--spacing-lg);
    }

    .name-input:focus {
        outline: none;
        border-color: var(--accent);
    }

    .output-info {
        background: var(--bg-secondary);
        border-radius: var(--radius-md);
        padding: var(--spacing-lg);
        margin-bottom: var(--spacing-xl);
    }

    .output-info-title {
        font-size: var(--font-size-sm);
        color: var(--fg-muted);
        margin-bottom: var(--spacing-sm);
    }

    .output-item {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
        font-size: var(--font-size-md);
        color: var(--fg-primary);
        padding: var(--spacing-xs) 0;
    }

    .output-item-icon {
        width: 16px;
        height: 16px;
        opacity: 0.6;
    }

    .create-btn {
        width: 100%;
        padding: var(--spacing-lg);
        background: var(--accent);
        border: none;
        border-radius: var(--radius-md);
        color: var(--bg-primary);
        font-family: var(--font-mono);
        font-size: var(--font-size-lg);
        font-weight: 600;
        cursor: pointer;
        min-height: var(--touch-target);
        -webkit-tap-highlight-color: transparent;
    }

    .create-btn:active {
        opacity: 0.9;
    }

    .create-btn:disabled {
        opacity: 0.5;
        pointer-events: none;
    }

    .progress-section {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: var(--spacing-xl);
    }

    .progress-bar-container {
        width: 100%;
        max-width: 300px;
        height: 8px;
        background: var(--bg-primary);
        border-radius: 4px;
        overflow: hidden;
        margin-bottom: var(--spacing-lg);
    }

    .progress-bar {
        height: 100%;
        background: var(--accent);
        transition: width 0.2s ease;
    }

    .progress-text {
        font-size: var(--font-size-md);
        color: var(--fg-muted);
    }

    .error-message {
        color: var(--error);
        font-size: var(--font-size-sm);
        padding: var(--spacing-md);
        background: var(--bg-secondary);
        border-radius: var(--radius-md);
        margin: var(--spacing-md) var(--spacing-xl);
    }

    .hidden {
        display: none !important;
    }
`);
class PsdImporter extends EditorComponent {
  constructor() {
    super(...arguments);
    __privateAdd(this, _PsdImporter_instances);
    __privateAdd(this, _overlay, null);
    __privateAdd(this, _step, "drop");
    __privateAdd(this, _psd, null);
    __privateAdd(this, _converter, new PsdConverter());
    __privateAdd(this, _store, new PerkyStore());
    __privateAdd(this, _fileInput, null);
    __privateAdd(this, _aspectRatioLocked, true);
    __privateAdd(this, _aspectRatio, 1);
    __privateAdd(this, _existingNames, /* @__PURE__ */ new Set());
    __privateAdd(this, _elements, {});
  }
  onConnected() {
    adoptStyleSheets(this.shadowRoot, styles$2);
    __privateGet(this, _converter).on("progress", ({ stage, percent }) => __privateMethod(this, _PsdImporter_instances, onProgress_fn).call(this, stage, percent));
    __privateMethod(this, _PsdImporter_instances, buildDOM_fn).call(this);
  }
  open() {
    __privateMethod(this, _PsdImporter_instances, reset_fn).call(this);
    __privateGet(this, _overlay).open();
  }
  close() {
    __privateGet(this, _overlay).close();
  }
  setExistingNames(names) {
    __privateSet(this, _existingNames, new Set(names.map((n) => n.toLowerCase())));
  }
}
_overlay = new WeakMap();
_step = new WeakMap();
_psd = new WeakMap();
_converter = new WeakMap();
_store = new WeakMap();
_fileInput = new WeakMap();
_aspectRatioLocked = new WeakMap();
_aspectRatio = new WeakMap();
_existingNames = new WeakMap();
_elements = new WeakMap();
_PsdImporter_instances = new WeakSet();
reset_fn = function() {
  __privateSet(this, _step, "drop");
  __privateSet(this, _psd, null);
  __privateSet(this, _aspectRatioLocked, true);
  __privateMethod(this, _PsdImporter_instances, updateStep_fn).call(this);
};
buildDOM_fn = function() {
  __privateSet(this, _overlay, createElement("editor-overlay", {
    attrs: { fullscreen: "", "no-close-on-backdrop": "" }
  }));
  const content = createElement("div", { class: "importer-content" });
  content.appendChild(__privateMethod(this, _PsdImporter_instances, buildHeader_fn).call(this));
  content.appendChild(__privateMethod(this, _PsdImporter_instances, buildBody_fn).call(this));
  __privateGet(this, _overlay).appendChild(content);
  this.shadowRoot.appendChild(__privateGet(this, _overlay));
  __privateMethod(this, _PsdImporter_instances, updateStep_fn).call(this);
};
buildHeader_fn = function() {
  const header = createElement("div", { class: "importer-header" });
  __privateGet(this, _elements).backBtn = createElement("button", {
    class: "header-btn",
    html: "← Cancel"
  });
  __privateGet(this, _elements).backBtn.addEventListener("click", () => __privateMethod(this, _PsdImporter_instances, handleBack_fn).call(this));
  __privateGet(this, _elements).title = createElement("span", { class: "header-title", text: "Import PSD" });
  const spacer = createElement("div", { class: "header-btn" });
  spacer.style.visibility = "hidden";
  header.appendChild(__privateGet(this, _elements).backBtn);
  header.appendChild(__privateGet(this, _elements).title);
  header.appendChild(spacer);
  return header;
};
buildBody_fn = function() {
  const body = createElement("div", { class: "importer-body" });
  body.appendChild(__privateMethod(this, _PsdImporter_instances, buildDropStep_fn).call(this));
  body.appendChild(__privateMethod(this, _PsdImporter_instances, buildPreviewStep_fn).call(this));
  body.appendChild(__privateMethod(this, _PsdImporter_instances, buildProgressStep_fn).call(this));
  return body;
};
buildDropStep_fn = function() {
  const step = createElement("div", { class: "step", attrs: { "data-step": "drop" } });
  __privateSet(this, _fileInput, createElement("input", {
    attrs: { type: "file", accept: ".psd,image/vnd.adobe.photoshop,image/x-photoshop,application/x-photoshop,application/photoshop" }
  }));
  __privateGet(this, _fileInput).style.display = "none";
  __privateGet(this, _fileInput).addEventListener("change", (e) => __privateMethod(this, _PsdImporter_instances, handleFileSelect_fn).call(this, e));
  const dropZone = createElement("div", { class: "drop-zone" });
  const icon = createElement("div", { class: "drop-zone-icon", html: ICONS.folder });
  const text = createElement("div", { class: "drop-zone-text", text: "Tap to select PSD" });
  const hint = createElement("div", { class: "drop-zone-hint", text: "or drag and drop" });
  dropZone.appendChild(icon);
  dropZone.appendChild(text);
  dropZone.appendChild(hint);
  dropZone.addEventListener("click", () => __privateGet(this, _fileInput).click());
  dropZone.addEventListener("dragover", (e) => handleDragOver(e, dropZone));
  dropZone.addEventListener("dragleave", () => dropZone.classList.remove("dragover"));
  dropZone.addEventListener("drop", (e) => __privateMethod(this, _PsdImporter_instances, handleDrop_fn).call(this, e, dropZone));
  step.appendChild(__privateGet(this, _fileInput));
  step.appendChild(dropZone);
  return step;
};
buildPreviewStep_fn = function() {
  const step = createElement("div", { class: "step", attrs: { "data-step": "preview" } });
  const section = createElement("div", { class: "preview-section" });
  __privateGet(this, _elements).previewContainer = createElement("div", { class: "preview-canvas-container" });
  __privateGet(this, _elements).previewDimensions = createElement("div", { class: "preview-dimensions" });
  section.appendChild(__privateGet(this, _elements).previewContainer);
  section.appendChild(__privateGet(this, _elements).previewDimensions);
  section.appendChild(createElement("div", { class: "section-title", text: "Animations" }));
  __privateGet(this, _elements).animationTags = createElement("div", { class: "animation-tags" });
  section.appendChild(__privateGet(this, _elements).animationTags);
  section.appendChild(createElement("div", { class: "section-title", text: "Export Settings" }));
  const sizeRow = createElement("div", { class: "settings-row" });
  sizeRow.appendChild(createElement("span", { class: "settings-label", text: "Output Size" }));
  const sizeInput = createElement("div", { class: "settings-input" });
  __privateGet(this, _elements).widthInput = createElement("input", {
    class: "size-input",
    attrs: { type: "number", placeholder: "" }
  });
  __privateGet(this, _elements).widthInput.addEventListener("input", () => __privateMethod(this, _PsdImporter_instances, handleWidthChange_fn).call(this));
  __privateGet(this, _elements).heightInput = createElement("input", {
    class: "size-input",
    attrs: { type: "number", placeholder: "" }
  });
  __privateGet(this, _elements).heightInput.addEventListener("input", () => __privateMethod(this, _PsdImporter_instances, handleHeightChange_fn).call(this));
  __privateGet(this, _elements).linkBtn = createElement("button", { class: "link-btn active", html: ICONS.link });
  __privateGet(this, _elements).linkBtn.addEventListener("click", () => __privateMethod(this, _PsdImporter_instances, toggleAspectLock_fn).call(this));
  sizeInput.appendChild(__privateGet(this, _elements).widthInput);
  sizeInput.appendChild(createElement("span", { class: "size-separator", text: "×" }));
  sizeInput.appendChild(__privateGet(this, _elements).heightInput);
  sizeInput.appendChild(__privateGet(this, _elements).linkBtn);
  sizeRow.appendChild(sizeInput);
  section.appendChild(sizeRow);
  const resizeRow = createElement("div", { class: "settings-row" });
  resizeRow.appendChild(createElement("span", { class: "settings-label", text: "Resize Mode" }));
  const resizeInput = createElement("div", { class: "settings-input" });
  __privateGet(this, _elements).resizeMode = createElement("select", { class: "resize-select" });
  __privateGet(this, _elements).resizeMode.innerHTML = `
            <option value="smooth" selected>Smooth</option>
            <option value="nearest">Nearest Neighbor</option>
        `;
  resizeInput.appendChild(__privateGet(this, _elements).resizeMode);
  resizeRow.appendChild(resizeInput);
  section.appendChild(resizeRow);
  section.appendChild(createElement("div", { class: "section-title", text: "Animator Name" }));
  __privateGet(this, _elements).nameInput = createElement("input", {
    class: "name-input",
    attrs: { type: "text", placeholder: "Enter name..." }
  });
  __privateGet(this, _elements).nameInput.addEventListener("input", () => __privateMethod(this, _PsdImporter_instances, validateName_fn).call(this));
  section.appendChild(__privateGet(this, _elements).nameInput);
  __privateGet(this, _elements).outputInfo = createElement("div", { class: "output-info" });
  section.appendChild(__privateGet(this, _elements).outputInfo);
  __privateGet(this, _elements).errorMessage = createElement("div", { class: "error-message hidden" });
  section.appendChild(__privateGet(this, _elements).errorMessage);
  __privateGet(this, _elements).createBtn = createElement("button", {
    class: "create-btn",
    text: "Create Animator"
  });
  __privateGet(this, _elements).createBtn.addEventListener("click", () => __privateMethod(this, _PsdImporter_instances, handleCreate_fn).call(this));
  section.appendChild(__privateGet(this, _elements).createBtn);
  step.appendChild(section);
  return step;
};
buildProgressStep_fn = function() {
  const step = createElement("div", { class: "step", attrs: { "data-step": "progress" } });
  const section = createElement("div", { class: "progress-section" });
  const barContainer = createElement("div", { class: "progress-bar-container" });
  __privateGet(this, _elements).progressBar = createElement("div", { class: "progress-bar" });
  __privateGet(this, _elements).progressBar.style.width = "0%";
  barContainer.appendChild(__privateGet(this, _elements).progressBar);
  section.appendChild(barContainer);
  __privateGet(this, _elements).progressText = createElement("div", { class: "progress-text", text: "Preparing..." });
  section.appendChild(__privateGet(this, _elements).progressText);
  step.appendChild(section);
  return step;
};
toggleAspectLock_fn = function() {
  __privateSet(this, _aspectRatioLocked, !__privateGet(this, _aspectRatioLocked));
  if (__privateGet(this, _aspectRatioLocked)) {
    __privateGet(this, _elements).linkBtn.classList.add("active");
    __privateGet(this, _elements).linkBtn.innerHTML = ICONS.link;
  } else {
    __privateGet(this, _elements).linkBtn.classList.remove("active");
    __privateGet(this, _elements).linkBtn.innerHTML = ICONS.unlink;
  }
};
handleWidthChange_fn = function() {
  __privateMethod(this, _PsdImporter_instances, syncDimension_fn).call(this, "width");
};
handleHeightChange_fn = function() {
  __privateMethod(this, _PsdImporter_instances, syncDimension_fn).call(this, "height");
};
syncDimension_fn = function(source) {
  if (!__privateGet(this, _aspectRatioLocked) || !__privateGet(this, _psd)) {
    return;
  }
  const sourceInput = source === "width" ? __privateGet(this, _elements).widthInput : __privateGet(this, _elements).heightInput;
  const targetInput = source === "width" ? __privateGet(this, _elements).heightInput : __privateGet(this, _elements).widthInput;
  const value = parseInt(sourceInput.value, 10);
  if (value > 0) {
    const computed = source === "width" ? Math.round(value / __privateGet(this, _aspectRatio)) : Math.round(value * __privateGet(this, _aspectRatio));
    targetInput.value = computed;
  }
};
updateStep_fn = function() {
  const steps = this.shadowRoot.querySelectorAll(".step");
  steps.forEach((s) => s.classList.remove("active"));
  const current = this.shadowRoot.querySelector(`[data-step="${__privateGet(this, _step)}"]`);
  if (current) {
    current.classList.add("active");
  }
  __privateMethod(this, _PsdImporter_instances, updateHeader_fn).call(this);
};
updateHeader_fn = function() {
  var _a;
  const headers = {
    drop: { backText: "← Cancel", title: "Import PSD" },
    preview: { backText: "← Back", title: ((_a = __privateGet(this, _psd)) == null ? void 0 : _a.filename) || "Preview" },
    progress: { backText: null, title: "Creating..." }
  };
  const config = headers[__privateGet(this, _step)];
  if (config) {
    if (config.backText) {
      __privateGet(this, _elements).backBtn.innerHTML = config.backText;
      __privateGet(this, _elements).backBtn.classList.remove("hidden");
    } else {
      __privateGet(this, _elements).backBtn.classList.add("hidden");
    }
    __privateGet(this, _elements).title.textContent = config.title;
  }
};
handleBack_fn = function() {
  const actions = {
    drop: () => this.close(),
    preview: () => {
      __privateSet(this, _step, "drop");
      __privateSet(this, _psd, null);
    }
  };
  const action = actions[__privateGet(this, _step)];
  if (action) {
    action();
  }
  __privateMethod(this, _PsdImporter_instances, updateStep_fn).call(this);
};
handleDrop_fn = function(e, dropZone) {
  e.preventDefault();
  dropZone.classList.remove("dragover");
  const file = e.dataTransfer.files[0];
  if (file && file.name.endsWith(".psd")) {
    __privateMethod(this, _PsdImporter_instances, loadFile_fn).call(this, file);
  }
};
handleFileSelect_fn = function(e) {
  const file = e.target.files[0];
  if (file) {
    __privateMethod(this, _PsdImporter_instances, loadFile_fn).call(this, file);
  }
};
loadFile_fn = async function(file) {
  try {
    const buffer = await file.arrayBuffer();
    const psd = __privateGet(this, _converter).parse(buffer);
    psd.filename = file.name.replace(".psd", "");
    const animations = __privateGet(this, _converter).getAnimationInfo(psd);
    if (animations.length === 0) {
      __privateMethod(this, _PsdImporter_instances, showError_fn).call(this, 'No animation groups found. Use "anim - name" folder naming.');
      return;
    }
    __privateSet(this, _psd, psd);
    __privateSet(this, _aspectRatio, psd.width / psd.height);
    __privateMethod(this, _PsdImporter_instances, populatePreview_fn).call(this, psd, animations);
    __privateSet(this, _step, "preview");
    __privateMethod(this, _PsdImporter_instances, updateStep_fn).call(this);
  } catch (error) {
    __privateMethod(this, _PsdImporter_instances, showError_fn).call(this, `Failed to parse PSD: ${error.message}`);
  }
};
populatePreview_fn = function(psd, animations) {
  __privateGet(this, _elements).previewContainer.innerHTML = "";
  const groups = findAnimationGroups(psd.tree);
  if (groups.length > 0) {
    const firstGroup = groups[0];
    const frames = extractFramesFromGroup(firstGroup, psd.width, psd.height);
    if (frames.length > 0) {
      const frame = frames[0];
      const canvas = createElement("canvas", { class: "preview-canvas" });
      canvas.width = frame.width;
      canvas.height = frame.height;
      const ctx = canvas.getContext("2d");
      putPixels(ctx, frame);
      __privateGet(this, _elements).previewContainer.appendChild(canvas);
    }
  }
  __privateGet(this, _elements).previewDimensions.textContent = `${psd.width} × ${psd.height}`;
  __privateGet(this, _elements).widthInput.placeholder = psd.width;
  __privateGet(this, _elements).heightInput.placeholder = psd.height;
  __privateGet(this, _elements).widthInput.value = "";
  __privateGet(this, _elements).heightInput.value = "";
  __privateGet(this, _elements).animationTags.innerHTML = "";
  for (const anim of animations) {
    const tag = createElement("div", { class: "animation-tag" });
    tag.innerHTML = `${anim.name}<span>${anim.frameCount}f</span>`;
    __privateGet(this, _elements).animationTags.appendChild(tag);
  }
  __privateGet(this, _elements).nameInput.value = psd.filename || "";
  __privateGet(this, _elements).errorMessage.classList.add("hidden");
  __privateMethod(this, _PsdImporter_instances, validateName_fn).call(this);
};
validateName_fn = function() {
  const name = sanitizeName(__privateGet(this, _elements).nameInput.value);
  const animatorName = `${name}Animator`.toLowerCase();
  const isDuplicate = __privateGet(this, _existingNames).has(animatorName);
  const isValid = name.length > 0 && !isDuplicate;
  __privateGet(this, _elements).outputInfo.innerHTML = `
            <div class="output-info-title">This will create:</div>
            <div class="output-item"><span class="output-item-icon">${ICONS.image}</span> ${name || "..."}Spritesheet</div>
            <div class="output-item"><span class="output-item-icon">${ICONS.film}</span> ${name || "..."}Animator</div>
        `;
  if (isDuplicate) {
    __privateGet(this, _elements).errorMessage.textContent = `"${name}Animator" already exists`;
    __privateGet(this, _elements).errorMessage.classList.remove("hidden");
  } else {
    __privateGet(this, _elements).errorMessage.classList.add("hidden");
  }
  __privateGet(this, _elements).createBtn.disabled = !isValid;
};
onProgress_fn = function(stage, percent) {
  const messages = {
    extracting: "Extracting frames...",
    resizing: "Resizing...",
    packing: "Packing atlas...",
    compositing: "Compositing...",
    finalizing: "Finalizing...",
    complete: "Complete!"
  };
  __privateGet(this, _elements).progressBar.style.width = `${percent}%`;
  __privateGet(this, _elements).progressText.textContent = messages[stage] || stage;
};
handleCreate_fn = async function() {
  const name = sanitizeName(__privateGet(this, _elements).nameInput.value);
  if (!name) {
    return;
  }
  __privateSet(this, _step, "progress");
  __privateMethod(this, _PsdImporter_instances, updateStep_fn).call(this);
  try {
    const targetWidth = parseInt(__privateGet(this, _elements).widthInput.value, 10) || null;
    const targetHeight = parseInt(__privateGet(this, _elements).heightInput.value, 10) || null;
    const nearest = __privateGet(this, _elements).resizeMode.value === "nearest";
    const result = await __privateGet(this, _converter).convert(__privateGet(this, _psd), {
      targetWidth,
      targetHeight,
      nearest,
      name
    });
    const files = await buildPerkyFiles(result);
    const animatorId = `${name}Animator`;
    await __privateGet(this, _store).save(animatorId, {
      type: "animator",
      name,
      files
    });
    this.dispatchEvent(new CustomEvent("complete", {
      bubbles: true,
      detail: { ...result, id: animatorId }
    }));
    this.close();
  } catch (error) {
    __privateSet(this, _step, "preview");
    __privateMethod(this, _PsdImporter_instances, updateStep_fn).call(this);
    __privateMethod(this, _PsdImporter_instances, showError_fn).call(this, `Conversion failed: ${error.message}`);
  }
};
showError_fn = function(message) {
  __privateGet(this, _elements).errorMessage.textContent = message;
  __privateGet(this, _elements).errorMessage.classList.remove("hidden");
};
customElements.define("psd-importer", PsdImporter);
function handleDragOver(e, dropZone) {
  e.preventDefault();
  dropZone.classList.add("dragover");
}
function sanitizeName(name) {
  return name.replace(/[^a-zA-Z0-9_]/g, "").replace(/^[0-9]/, "");
}
function canvasToBlob(canvas) {
  return new Promise((resolve) => {
    canvas.toBlob(resolve, "image/png");
  });
}
async function buildPerkyFiles(result) {
  const { name, spritesheetName, spritesheetJson, animatorConfig, atlases } = result;
  const files = [];
  files.push({
    name: `${name}Animator.json`,
    blob: new Blob([JSON.stringify(animatorConfig)], { type: "application/json" })
  });
  files.push({
    name: `${spritesheetName}.json`,
    blob: new Blob([JSON.stringify(spritesheetJson)], { type: "application/json" })
  });
  for (let i = 0; i < atlases.length; i++) {
    const atlas = atlases[i];
    const pngBlob = await canvasToBlob(atlas.canvas);
    files.push({
      name: `${spritesheetName}_${i}.png`,
      blob: pngBlob
    });
  }
  return files;
}
const styles$1 = createStyleSheet(`
    :host {
        display: block;
    }

    .conflict-content {
        padding: var(--spacing-xl);
        max-width: 560px;
        width: 90vw;
    }

    .conflict-title {
        font-size: 18px;
        font-weight: 600;
        color: var(--fg-primary);
        margin-bottom: var(--spacing-sm);
    }

    .conflict-subtitle {
        font-size: var(--font-size-md);
        color: var(--fg-muted);
        margin-bottom: var(--spacing-xl);
        line-height: 1.4;
    }

    .conflict-list {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-xl);
        margin-bottom: var(--spacing-xl);
    }

    .conflict-item {
        background: var(--bg-secondary);
        border-radius: var(--radius-lg);
        padding: var(--spacing-lg);
    }

    .conflict-name {
        font-size: var(--font-size-lg);
        font-weight: 600;
        color: var(--fg-primary);
        margin-bottom: var(--spacing-md);
    }

    .conflict-columns {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--spacing-md);
    }

    .version-card {
        padding: var(--spacing-lg);
        border-radius: var(--radius-md);
        border: 2px solid var(--border, #333);
        cursor: pointer;
        transition: border-color var(--transition-normal), background var(--transition-normal);
        -webkit-tap-highlight-color: transparent;
        min-height: var(--touch-target, 44px);
        display: flex;
        flex-direction: column;
        gap: var(--spacing-xs);
    }

    .version-card:hover {
        background: var(--bg-hover);
    }

    .version-card.selected {
        border-color: var(--accent);
        background: color-mix(in srgb, var(--accent) 8%, transparent);
    }

    .version-label {
        font-size: var(--font-size-md);
        font-weight: 600;
        color: var(--fg-primary);
    }

    .version-card.selected .version-label {
        color: var(--accent);
    }

    .version-detail {
        font-size: var(--font-size-sm);
        color: var(--fg-muted);
    }

    .version-date {
        font-size: var(--font-size-sm);
        color: var(--fg-muted);
        margin-top: var(--spacing-xs);
    }

    .conflict-actions {
        display: flex;
        justify-content: flex-end;
    }

    .continue-btn {
        padding: var(--spacing-md) var(--spacing-xl);
        background: var(--accent);
        color: var(--bg-primary);
        border: none;
        border-radius: var(--radius-md);
        font-size: var(--font-size-md);
        font-family: var(--font-mono);
        font-weight: 600;
        cursor: pointer;
        min-height: var(--touch-target, 44px);
        transition: opacity var(--transition-normal);
    }

    .continue-btn:hover {
        opacity: 0.9;
    }

    .continue-btn:active {
        opacity: 0.8;
    }
`);
class ConflictResolver extends EditorComponent {
  constructor() {
    super(...arguments);
    __privateAdd(this, _ConflictResolver_instances);
    __privateAdd(this, _overlay2, null);
    __privateAdd(this, _conflicts, []);
    __privateAdd(this, _choices, /* @__PURE__ */ new Map());
    __privateAdd(this, _resolvePromise, null);
  }
  onConnected() {
    adoptStyleSheets(this.shadowRoot, styles$1);
    __privateMethod(this, _ConflictResolver_instances, buildDOM_fn2).call(this);
  }
  resolve(conflicts) {
    __privateSet(this, _conflicts, conflicts);
    __privateGet(this, _choices).clear();
    for (const conflict of conflicts) {
      __privateGet(this, _choices).set(conflict.id, "custom");
    }
    __privateMethod(this, _ConflictResolver_instances, renderConflicts_fn).call(this);
    __privateGet(this, _overlay2).open();
    return new Promise((resolve) => {
      __privateSet(this, _resolvePromise, resolve);
    });
  }
}
_overlay2 = new WeakMap();
_conflicts = new WeakMap();
_choices = new WeakMap();
_resolvePromise = new WeakMap();
_ConflictResolver_instances = new WeakSet();
buildDOM_fn2 = function() {
  __privateSet(this, _overlay2, createElement("editor-overlay", {
    attrs: { fullscreen: "" }
  }));
  this.shadowRoot.appendChild(__privateGet(this, _overlay2));
};
renderConflicts_fn = function() {
  __privateGet(this, _overlay2).innerHTML = "";
  const content = createElement("div", { class: "conflict-content" });
  content.appendChild(createElement("div", {
    class: "conflict-title",
    text: "Updates Available"
  }));
  content.appendChild(createElement("div", {
    class: "conflict-subtitle",
    text: "Some animators have been updated in the game. You also have local changes on these animators. Which version would you like to keep?"
  }));
  const list = createElement("div", { class: "conflict-list" });
  for (const conflict of __privateGet(this, _conflicts)) {
    list.appendChild(__privateMethod(this, _ConflictResolver_instances, createConflictItem_fn).call(this, conflict));
  }
  content.appendChild(list);
  const actions = createElement("div", { class: "conflict-actions" });
  const continueBtn = createElement("button", {
    class: "continue-btn",
    text: "Continue"
  });
  continueBtn.addEventListener("click", () => __privateMethod(this, _ConflictResolver_instances, applyChoices_fn).call(this));
  actions.appendChild(continueBtn);
  content.appendChild(actions);
  __privateGet(this, _overlay2).appendChild(content);
};
createConflictItem_fn = function(conflict) {
  const item = createElement("div", { class: "conflict-item" });
  item.appendChild(createElement("div", { class: "conflict-name", text: conflict.name }));
  const columns = createElement("div", { class: "conflict-columns" });
  const customCard = __privateMethod(this, _ConflictResolver_instances, createVersionCard_fn).call(this, conflict.id, "custom", "My version", "Local changes", conflict.customDate, true);
  const gameCard = __privateMethod(this, _ConflictResolver_instances, createVersionCard_fn).call(this, conflict.id, "game", "Native version", "Game update", conflict.gameDate, false);
  columns.appendChild(customCard);
  columns.appendChild(gameCard);
  item.appendChild(columns);
  return item;
};
createVersionCard_fn = function(conflictId, value, label, detail, date, selected) {
  const card = createElement("div", { class: "version-card" });
  if (selected) {
    card.classList.add("selected");
  }
  card.appendChild(createElement("div", { class: "version-label", text: label }));
  card.appendChild(createElement("div", { class: "version-detail", text: detail }));
  if (date) {
    card.appendChild(createElement("div", {
      class: "version-date",
      text: formatDate(date)
    }));
  }
  card.addEventListener("click", () => {
    __privateMethod(this, _ConflictResolver_instances, selectVersion_fn).call(this, conflictId, value, card);
  });
  return card;
};
selectVersion_fn = function(conflictId, value, selectedCard) {
  __privateGet(this, _choices).set(conflictId, value);
  const columns = selectedCard.parentElement;
  for (const card of columns.children) {
    card.classList.remove("selected");
  }
  selectedCard.classList.add("selected");
};
applyChoices_fn = function() {
  __privateGet(this, _overlay2).close();
  const result = __privateGet(this, _conflicts).map((conflict) => ({
    id: conflict.id,
    choice: __privateGet(this, _choices).get(conflict.id) || "custom"
  }));
  if (__privateGet(this, _resolvePromise)) {
    __privateGet(this, _resolvePromise).call(this, result);
    __privateSet(this, _resolvePromise, null);
  }
};
customElements.define("conflict-resolver", ConflictResolver);
function formatDate(timestamp) {
  if (!timestamp) {
    return "";
  }
  const date = new Date(timestamp);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${day}/${month} ${hours}:${minutes}`;
}
const styles = createStyleSheet(`
    :host {
        display: block;
        position: relative;
    }

    .title-btn {
        background: none;
        border: none;
        font-size: var(--font-size-lg);
        font-weight: 500;
        color: var(--fg-primary);
        font-family: var(--font-mono);
        cursor: pointer;
        padding: 4px 8px;
        border-radius: var(--radius-md);
        -webkit-tap-highlight-color: transparent;
        transition: background var(--transition-normal);
    }

    .title-btn:hover {
        background: var(--bg-hover);
    }

    .title-btn:active {
        background: var(--bg-secondary);
    }

    .popover {
        position: absolute;
        top: 100%;
        left: 0;
        margin-top: var(--spacing-sm);
        background: var(--bg-secondary);
        border: 1px solid var(--border, #333);
        border-radius: var(--radius-lg);
        padding: var(--spacing-lg);
        min-width: 240px;
        z-index: 100;
        opacity: 0;
        pointer-events: none;
        transition: opacity var(--transition-normal);
    }

    .popover.open {
        opacity: 1;
        pointer-events: auto;
    }

    .popover-section {
        margin-bottom: var(--spacing-md);
    }

    .popover-section:last-child {
        margin-bottom: 0;
    }

    .popover-label {
        font-size: var(--font-size-sm);
        color: var(--fg-muted);
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: var(--spacing-xs);
    }

    .popover-value {
        font-size: var(--font-size-md);
        color: var(--fg-primary);
        font-weight: 500;
    }

    .storage-bar {
        height: 6px;
        background: var(--bg-primary);
        border-radius: 3px;
        margin-top: var(--spacing-sm);
        overflow: hidden;
    }

    .storage-fill {
        height: 100%;
        background: var(--accent);
        border-radius: 3px;
        transition: width var(--transition-normal);
    }
`);
class StorageInfo extends EditorComponent {
  constructor() {
    super(...arguments);
    __privateAdd(this, _StorageInfo_instances);
    __privateAdd(this, _popoverEl, null);
    __privateAdd(this, _isOpen, false);
    __privateAdd(this, _boundClose, null);
  }
  onConnected() {
    adoptStyleSheets(this.shadowRoot, styles);
    __privateMethod(this, _StorageInfo_instances, buildDOM_fn3).call(this);
    __privateSet(this, _boundClose, (e) => __privateMethod(this, _StorageInfo_instances, onOutsideClick_fn).call(this, e));
  }
  onDisconnected() {
    document.removeEventListener("pointerdown", __privateGet(this, _boundClose));
  }
}
_popoverEl = new WeakMap();
_isOpen = new WeakMap();
_boundClose = new WeakMap();
_StorageInfo_instances = new WeakSet();
buildDOM_fn3 = function() {
  const btn = createElement("button", {
    class: "title-btn",
    text: "Perky Studio"
  });
  btn.addEventListener("click", () => __privateMethod(this, _StorageInfo_instances, toggle_fn).call(this));
  __privateSet(this, _popoverEl, createElement("div", { class: "popover" }));
  this.shadowRoot.appendChild(btn);
  this.shadowRoot.appendChild(__privateGet(this, _popoverEl));
};
toggle_fn = function() {
  if (__privateGet(this, _isOpen)) {
    __privateMethod(this, _StorageInfo_instances, close_fn).call(this);
  } else {
    __privateMethod(this, _StorageInfo_instances, open_fn).call(this);
  }
};
open_fn = async function() {
  __privateSet(this, _isOpen, true);
  await __privateMethod(this, _StorageInfo_instances, refreshContent_fn).call(this);
  __privateGet(this, _popoverEl).classList.add("open");
  requestAnimationFrame(() => {
    document.addEventListener("pointerdown", __privateGet(this, _boundClose));
  });
};
close_fn = function() {
  __privateSet(this, _isOpen, false);
  __privateGet(this, _popoverEl).classList.remove("open");
  document.removeEventListener("pointerdown", __privateGet(this, _boundClose));
};
onOutsideClick_fn = function(e) {
  if (!this.contains(e.target)) {
    __privateMethod(this, _StorageInfo_instances, close_fn).call(this);
  }
};
refreshContent_fn = async function() {
  __privateGet(this, _popoverEl).innerHTML = "";
  const storage = await estimateStorage();
  __privateGet(this, _popoverEl).appendChild(
    buildSection("Storage", `${storage.usedText} / ${storage.totalText}`)
  );
  const bar = createElement("div", { class: "storage-bar" });
  const fill = createElement("div", { class: "storage-fill" });
  fill.style.width = `${storage.percent}%`;
  bar.appendChild(fill);
  __privateGet(this, _popoverEl).appendChild(bar);
};
customElements.define("storage-info", StorageInfo);
function buildSection(label, value) {
  const section = createElement("div", { class: "popover-section" });
  section.appendChild(createElement("div", { class: "popover-label", text: label }));
  section.appendChild(createElement("div", { class: "popover-value", text: value }));
  return section;
}
async function estimateStorage() {
  try {
    const estimate = await navigator.storage.estimate();
    const used = estimate.usage || 0;
    const total = estimate.quota || 0;
    const percent = total > 0 ? Math.min(100, used / total * 100) : 0;
    return {
      used,
      total,
      percent: Math.round(percent * 10) / 10,
      usedText: formatBytes(used),
      totalText: formatBytes(total)
    };
  } catch {
    return { used: 0, total: 0, percent: 0, usedText: "—", totalText: "—" };
  }
}
const hubViewStyles = createStyleSheet(`
    :host {
        display: block;
        height: 100%;
        width: 100%;
    }

    .hub-content {
        padding: var(--spacing-xl);
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
    }

    .section-title {
        font-size: 13px;
        font-weight: 600;
        color: var(--fg-muted);
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: var(--spacing-lg);
        padding-left: var(--spacing-sm);
    }

    .animator-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
        gap: var(--spacing-lg);
    }

    .animator-card {
        background: var(--bg-secondary);
        border-radius: var(--radius-lg);
        overflow: hidden;
        cursor: pointer;
        transition: transform var(--transition-normal), background var(--transition-normal);
        -webkit-tap-highlight-color: transparent;
    }

    .animator-card:hover {
        background: var(--bg-hover);
        transform: scale(1.02);
    }

    .animator-card:active {
        transform: scale(0.98);
    }

    .card-preview {
        aspect-ratio: 1;
        background: var(--bg-primary);
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }

    .card-preview canvas {
        max-width: 80%;
        max-height: 80%;
        image-rendering: pixelated;
    }

    .card-preview .placeholder {
        width: 48px;
        height: 48px;
        background: var(--bg-hover);
        border-radius: var(--radius-md);
    }

    .card-info {
        padding: var(--spacing-md);
    }

    .card-title {
        font-size: var(--font-size-lg);
        font-weight: 500;
        color: var(--fg-primary);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .card-meta {
        font-size: var(--font-size-sm);
        color: var(--fg-muted);
        margin-top: 2px;
    }

    .create-card {
        border: 2px dashed var(--border);
        background: transparent;
    }

    .create-card:hover {
        border-color: var(--accent);
        background: var(--bg-hover);
    }

    .create-card .card-preview {
        background: transparent;
    }

    .create-icon {
        font-size: 32px;
        color: var(--fg-muted);
    }

    .create-card:hover .create-icon {
        color: var(--accent);
    }

    .card-badge {
        position: absolute;
        top: var(--spacing-sm);
        right: var(--spacing-sm);
        padding: 2px 6px;
        font-size: 10px;
        font-weight: 600;
        text-transform: uppercase;
        background: var(--accent);
        color: var(--bg-primary);
        border-radius: var(--radius-sm);
    }

    .card-badge.modified {
        background: var(--warning, #f90);
    }

    .card-preview {
        position: relative;
    }

    .card-checkbox {
        position: absolute;
        top: var(--spacing-sm);
        right: var(--spacing-sm);
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: 2px solid var(--fg-muted);
        background: var(--bg-secondary);
        display: none;
        align-items: center;
        justify-content: center;
        transition: all var(--transition-fast);
    }

    :host([selection-mode]) .card-checkbox {
        display: flex;
    }

    :host([selection-mode]) .card-badge {
        display: none;
    }

    .card-checkbox.selected {
        background: var(--accent);
        border-color: var(--accent);
    }

    .card-checkbox.selected::after {
        content: '';
        width: 8px;
        height: 8px;
        background: var(--bg-primary);
        border-radius: 50%;
    }

    :host([selection-mode]) .animator-card:not(.selectable) {
        opacity: 0.5;
        pointer-events: none;
    }

    :host([selection-mode]) .create-card {
        display: none;
    }

    .header-actions {
        display: flex;
        gap: 8px;
    }

    .header-actions button {
        padding: 8px 12px;
        background: transparent;
        border: none;
        color: var(--accent);
        font-size: var(--font-size-md);
        font-family: var(--font-mono);
        cursor: pointer;
        border-radius: var(--radius-md);
        min-height: 44px;
    }

    .header-actions button:disabled {
        opacity: 0.3;
        cursor: default;
    }

    .header-actions .danger {
        color: #f66;
    }

    .header-actions .warning {
        color: var(--warning, #f90);
    }

    .default-actions {
        display: flex;
        gap: 8px;
    }

    .selection-actions {
        display: none;
    }

    :host([selection-mode]) .default-actions {
        display: none;
    }

    :host([selection-mode]) .selection-actions {
        display: flex;
        gap: 8px;
    }
`);
class HubView extends EditorComponent {
  constructor() {
    super(...arguments);
    __privateAdd(this, _HubView_instances);
    __privateAdd(this, _manifest, null);
    __privateAdd(this, _animators, {});
    __privateAdd(this, _customAnimators, {});
    __privateAdd(this, _textureSystem, null);
    __privateAdd(this, _appLayout, null);
    __privateAdd(this, _contentEl, null);
    __privateAdd(this, _psdImporter, null);
    __privateAdd(this, _thumbnails, /* @__PURE__ */ new Map());
    __privateAdd(this, _customMeta, /* @__PURE__ */ new Map());
    __privateAdd(this, _store2, new PerkyStore());
    __privateAdd(this, _conflictResolver, null);
    __privateAdd(this, _selectionMode, false);
    __privateAdd(this, _selectedItems, /* @__PURE__ */ new Set());
    __privateAdd(this, _selectBtn, null);
    __privateAdd(this, _exportBtn, null);
    __privateAdd(this, _deleteBtn, null);
    __privateAdd(this, _revertBtn, null);
  }
  onConnected() {
    adoptStyleSheets(this.shadowRoot, hubViewStyles);
    __privateMethod(this, _HubView_instances, buildDOM_fn4).call(this);
  }
  setContext({ manifest, animators, textureSystem }) {
    __privateSet(this, _manifest, manifest);
    __privateSet(this, _animators, animators || {});
    __privateSet(this, _textureSystem, textureSystem);
    if (this.isConnected) {
      __privateMethod(this, _HubView_instances, render_fn).call(this);
    }
  }
}
_manifest = new WeakMap();
_animators = new WeakMap();
_customAnimators = new WeakMap();
_textureSystem = new WeakMap();
_appLayout = new WeakMap();
_contentEl = new WeakMap();
_psdImporter = new WeakMap();
_thumbnails = new WeakMap();
_customMeta = new WeakMap();
_store2 = new WeakMap();
_conflictResolver = new WeakMap();
_selectionMode = new WeakMap();
_selectedItems = new WeakMap();
_selectBtn = new WeakMap();
_exportBtn = new WeakMap();
_deleteBtn = new WeakMap();
_revertBtn = new WeakMap();
_HubView_instances = new WeakSet();
buildDOM_fn4 = function() {
  __privateSet(this, _appLayout, createElement("app-layout", {
    attrs: { "no-menu": "", "no-close": "", "no-footer": "" }
  }));
  const storageInfo = document.createElement("storage-info");
  storageInfo.setAttribute("slot", "header-start");
  __privateGet(this, _appLayout).appendChild(storageInfo);
  const headerActions = __privateMethod(this, _HubView_instances, buildHeaderActions_fn).call(this);
  headerActions.setAttribute("slot", "header-end");
  __privateGet(this, _appLayout).appendChild(headerActions);
  __privateSet(this, _contentEl, createElement("div", { class: "hub-content" }));
  __privateGet(this, _appLayout).appendChild(__privateGet(this, _contentEl));
  this.shadowRoot.appendChild(__privateGet(this, _appLayout));
  __privateMethod(this, _HubView_instances, render_fn).call(this);
};
buildHeaderActions_fn = function() {
  const container = createElement("div", { class: "header-actions" });
  const defaultActions = createElement("div", { class: "default-actions" });
  const previewBtn = createElement("button", { text: "▶ Preview" });
  previewBtn.addEventListener("click", () => {
    window.location.href = "../index.html?studio";
  });
  const importBtn = createElement("button", { text: "Import" });
  importBtn.addEventListener("click", () => __privateMethod(this, _HubView_instances, importFile_fn).call(this));
  defaultActions.appendChild(previewBtn);
  defaultActions.appendChild(importBtn);
  const selectionActions = createElement("div", { class: "selection-actions" });
  __privateSet(this, _exportBtn, createElement("button", { text: "Export" }));
  __privateGet(this, _exportBtn).addEventListener("click", () => __privateMethod(this, _HubView_instances, exportSelected_fn).call(this));
  __privateSet(this, _revertBtn, createElement("button", { text: "Revert", class: "warning" }));
  __privateGet(this, _revertBtn).addEventListener("click", () => __privateMethod(this, _HubView_instances, revertSelected_fn).call(this));
  __privateSet(this, _deleteBtn, createElement("button", { text: "Delete", class: "danger" }));
  __privateGet(this, _deleteBtn).addEventListener("click", () => __privateMethod(this, _HubView_instances, deleteSelected_fn).call(this));
  selectionActions.appendChild(__privateGet(this, _exportBtn));
  selectionActions.appendChild(__privateGet(this, _revertBtn));
  selectionActions.appendChild(__privateGet(this, _deleteBtn));
  __privateSet(this, _selectBtn, createElement("button", { text: "Select" }));
  __privateGet(this, _selectBtn).addEventListener("click", () => __privateMethod(this, _HubView_instances, toggleSelectionMode_fn).call(this));
  container.appendChild(defaultActions);
  container.appendChild(selectionActions);
  container.appendChild(__privateGet(this, _selectBtn));
  return container;
};
render_fn = async function() {
  await __privateMethod(this, _HubView_instances, loadCustomAnimators_fn).call(this);
  await __privateMethod(this, _HubView_instances, reconcile_fn).call(this);
  const hasCustoms = Object.keys(__privateGet(this, _customAnimators)).length > 0;
  __privateGet(this, _selectBtn).style.display = hasCustoms ? "block" : "none";
  const section = createElement("div", { class: "section" });
  section.appendChild(createElement("h2", { class: "section-title", text: "Animators" }));
  const grid = createElement("div", { class: "animator-grid" });
  const renderedCustoms = /* @__PURE__ */ new Set();
  for (const [name, config] of Object.entries(__privateGet(this, _animators))) {
    if (__privateGet(this, _customAnimators)[name]) {
      grid.appendChild(__privateMethod(this, _HubView_instances, createAnimatorCard_fn).call(this, name, __privateGet(this, _customAnimators)[name], "modified"));
      renderedCustoms.add(name);
    } else {
      grid.appendChild(__privateMethod(this, _HubView_instances, createAnimatorCard_fn).call(this, name, config, "game"));
    }
  }
  for (const [name, config] of Object.entries(__privateGet(this, _customAnimators))) {
    if (!renderedCustoms.has(name)) {
      grid.appendChild(__privateMethod(this, _HubView_instances, createAnimatorCard_fn).call(this, name, config, "custom"));
    }
  }
  grid.appendChild(__privateMethod(this, _HubView_instances, createNewAnimatorCard_fn).call(this));
  section.appendChild(grid);
  __privateGet(this, _contentEl).innerHTML = "";
  __privateGet(this, _contentEl).appendChild(section);
};
loadCustomAnimators_fn = async function() {
  const resources = await __privateGet(this, _store2).list("animator");
  for (const resource of resources) {
    if (__privateGet(this, _customAnimators)[resource.id]) {
      continue;
    }
    const full = await __privateGet(this, _store2).get(resource.id);
    if (!full) {
      continue;
    }
    const configFile = full.files.find((f) => f.name.endsWith("Animator.json"));
    if (!configFile) {
      continue;
    }
    const configText = await blobToText(configFile.blob);
    const config = JSON.parse(configText);
    __privateGet(this, _customAnimators)[resource.id] = config;
    __privateGet(this, _customMeta).set(resource.id, { updatedAt: resource.updatedAt || 0 });
    if (!__privateGet(this, _thumbnails).has(resource.id)) {
      const thumbnail = await extractThumbnailFromPerky(full.files);
      if (thumbnail) {
        __privateGet(this, _thumbnails).set(resource.id, thumbnail);
      }
    }
  }
};
reconcile_fn = async function() {
  const synced = [];
  const conflicts = [];
  for (const id of Object.keys(__privateGet(this, _customAnimators))) {
    const state = __privateMethod(this, _HubView_instances, compareVersions_fn).call(this, id);
    if (state === "synced") {
      synced.push(id);
    } else if (state === "conflict") {
      conflicts.push(id);
    }
  }
  for (const id of synced) {
    await __privateMethod(this, _HubView_instances, deleteCustom_fn).call(this, id);
  }
  if (conflicts.length > 0) {
    await __privateMethod(this, _HubView_instances, resolveConflicts_fn).call(this, conflicts);
  }
};
compareVersions_fn = function(id) {
  var _a, _b, _c, _d;
  if (!__privateGet(this, _animators)[id]) {
    return "custom-only";
  }
  const gameUpdatedAt = ((_c = (_b = (_a = __privateGet(this, _manifest)) == null ? void 0 : _a.getAsset) == null ? void 0 : _b.call(_a, id)) == null ? void 0 : _c.updatedAt) || 0;
  const customUpdatedAt = ((_d = __privateGet(this, _customMeta).get(id)) == null ? void 0 : _d.updatedAt) || 0;
  if (gameUpdatedAt >= customUpdatedAt) {
    return "synced";
  }
  const lastSeen = getLastSeenGameUpdate(id);
  if (lastSeen >= gameUpdatedAt) {
    return "modified";
  }
  return "conflict";
};
resolveConflicts_fn = async function(ids) {
  var _a, _b, _c;
  if (!__privateGet(this, _conflictResolver)) {
    __privateSet(this, _conflictResolver, document.createElement("conflict-resolver"));
    this.shadowRoot.appendChild(__privateGet(this, _conflictResolver));
  }
  const conflicts = ids.map((id) => {
    var _a2, _b2, _c2, _d;
    return {
      id,
      name: id,
      customDate: ((_a2 = __privateGet(this, _customMeta).get(id)) == null ? void 0 : _a2.updatedAt) || 0,
      gameDate: ((_d = (_c2 = (_b2 = __privateGet(this, _manifest)) == null ? void 0 : _b2.getAsset) == null ? void 0 : _c2.call(_b2, id)) == null ? void 0 : _d.updatedAt) || 0
    };
  });
  const choices = await __privateGet(this, _conflictResolver).resolve(conflicts);
  for (const { id, choice } of choices) {
    if (choice === "game") {
      await __privateMethod(this, _HubView_instances, deleteCustom_fn).call(this, id);
    } else {
      const gameUpdatedAt = ((_c = (_b = (_a = __privateGet(this, _manifest)) == null ? void 0 : _a.getAsset) == null ? void 0 : _b.call(_a, id)) == null ? void 0 : _c.updatedAt) || 0;
      setLastSeenGameUpdate(id, gameUpdatedAt);
    }
  }
};
deleteCustom_fn = async function(id) {
  await __privateGet(this, _store2).delete(id);
  delete __privateGet(this, _customAnimators)[id];
  __privateGet(this, _customMeta).delete(id);
  __privateGet(this, _thumbnails).delete(id);
  localStorage.removeItem(`${SEEN_KEY_PREFIX}${id}`);
};
createAnimatorCard_fn = function(name, config, state = "game") {
  const card = createElement("div", { class: "animator-card" });
  const isCustom = state === "custom" || state === "modified";
  if (isCustom) {
    card.classList.add("selectable");
    card.dataset.name = name;
  }
  const preview = createElement("div", { class: "card-preview" });
  const thumbnail = __privateMethod(this, _HubView_instances, createThumbnail_fn).call(this, name, config);
  preview.appendChild(thumbnail);
  if (state === "custom") {
    preview.appendChild(createElement("div", { class: "card-badge", text: "New" }));
  } else if (state === "modified") {
    preview.appendChild(createElement("div", { class: "card-badge modified", text: "Modified" }));
  }
  if (isCustom) {
    const checkbox = createElement("div", { class: "card-checkbox" });
    checkbox.dataset.name = name;
    preview.appendChild(checkbox);
  }
  const info = createElement("div", { class: "card-info" });
  info.appendChild(createElement("div", { class: "card-title", text: name }));
  const animCount = config.animations ? Object.keys(config.animations).length : 0;
  info.appendChild(createElement("div", {
    class: "card-meta",
    text: pluralize("animation", animCount, true)
  }));
  card.appendChild(preview);
  card.appendChild(info);
  card.addEventListener("click", () => {
    if (__privateGet(this, _selectionMode) && isCustom) {
      const checkbox = card.querySelector(".card-checkbox");
      checkbox.classList.toggle("selected");
      __privateMethod(this, _HubView_instances, toggleItemSelection_fn).call(this, name);
    } else if (!__privateGet(this, _selectionMode)) {
      __privateMethod(this, _HubView_instances, openAnimator_fn).call(this, name, isCustom);
    }
  });
  return card;
};
createNewAnimatorCard_fn = function() {
  const card = createElement("div", { class: "animator-card create-card" });
  const preview = createElement("div", { class: "card-preview" });
  preview.appendChild(createElement("div", { class: "create-icon", text: "+" }));
  const info = createElement("div", { class: "card-info" });
  info.appendChild(createElement("div", { class: "card-title", text: "New Animator" }));
  info.appendChild(createElement("div", { class: "card-meta", text: "Import from PSD" }));
  card.appendChild(preview);
  card.appendChild(info);
  card.addEventListener("click", () => __privateMethod(this, _HubView_instances, openPsdImporter_fn).call(this));
  return card;
};
openPsdImporter_fn = function() {
  if (!__privateGet(this, _psdImporter)) {
    __privateSet(this, _psdImporter, document.createElement("psd-importer"));
    __privateGet(this, _psdImporter).addEventListener("complete", (e) => __privateMethod(this, _HubView_instances, handleImportComplete_fn).call(this, e));
    this.shadowRoot.appendChild(__privateGet(this, _psdImporter));
  }
  const existingNames = [
    ...Object.keys(__privateGet(this, _animators)),
    ...Object.keys(__privateGet(this, _customAnimators))
  ];
  __privateGet(this, _psdImporter).setExistingNames(existingNames);
  __privateGet(this, _psdImporter).open();
};
handleImportComplete_fn = function(e) {
  var _a;
  const { name, animatorConfig, atlases } = e.detail;
  const animatorName = `${name}Animator`;
  __privateGet(this, _customAnimators)[animatorName] = animatorConfig;
  if ((atlases == null ? void 0 : atlases.length) > 0 && atlases[0].canvas && ((_a = atlases[0].frames) == null ? void 0 : _a.length) > 0) {
    const atlas = atlases[0];
    const firstFrame = atlas.frames[0];
    const thumbCanvas = document.createElement("canvas");
    thumbCanvas.width = firstFrame.width;
    thumbCanvas.height = firstFrame.height;
    const ctx = thumbCanvas.getContext("2d");
    ctx.drawImage(
      atlas.canvas,
      firstFrame.x,
      firstFrame.y,
      firstFrame.width,
      firstFrame.height,
      0,
      0,
      firstFrame.width,
      firstFrame.height
    );
    __privateGet(this, _thumbnails).set(animatorName, thumbCanvas);
  }
  __privateMethod(this, _HubView_instances, render_fn).call(this);
  this.dispatchEvent(new CustomEvent("animatorcreated", {
    bubbles: true,
    detail: e.detail
  }));
};
createThumbnail_fn = function(name, config) {
  const cached = __privateGet(this, _thumbnails).get(name);
  if (cached) {
    const canvas2 = document.createElement("canvas");
    canvas2.width = cached.width;
    canvas2.height = cached.height;
    const ctx2 = canvas2.getContext("2d");
    ctx2.drawImage(cached, 0, 0);
    return canvas2;
  }
  const region = __privateMethod(this, _HubView_instances, getFirstFrameRegion_fn).call(this, config);
  if (!region) {
    return createElement("div", { class: "placeholder" });
  }
  const canvas = document.createElement("canvas");
  canvas.width = region.width;
  canvas.height = region.height;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(
    region.image,
    region.x,
    region.y,
    region.width,
    region.height,
    0,
    0,
    region.width,
    region.height
  );
  return canvas;
};
getFirstFrameRegion_fn = function(config) {
  var _a;
  if (!config.animations || !__privateGet(this, _textureSystem)) {
    return null;
  }
  const firstAnim = getFirstAnimation(config);
  if (!((_a = firstAnim == null ? void 0 : firstAnim.frames) == null ? void 0 : _a.length)) {
    return null;
  }
  const source = getFrameSource(firstAnim.frames[0]);
  if (!source) {
    return null;
  }
  return __privateMethod(this, _HubView_instances, resolveRegion_fn).call(this, source, config.spritesheet);
};
resolveRegion_fn = function(source, defaultSpritesheet) {
  const [spritesheetName, frameName] = source.includes(":") ? source.split(":") : [defaultSpritesheet, source];
  const spritesheet = __privateGet(this, _textureSystem).getSpritesheet(spritesheetName);
  return (spritesheet == null ? void 0 : spritesheet.getRegion(frameName)) || null;
};
openAnimator_fn = function(name, isCustom = false) {
  this.dispatchEvent(new CustomEvent("navigate", { detail: { name, isCustom } }));
  const url = isCustom ? `animator.html?id=${encodeURIComponent(name)}&custom=1` : `animator.html?id=${encodeURIComponent(name)}`;
  window.location.href = url;
};
toggleSelectionMode_fn = function() {
  __privateSet(this, _selectionMode, !__privateGet(this, _selectionMode));
  __privateGet(this, _selectedItems).clear();
  if (__privateGet(this, _selectionMode)) {
    this.setAttribute("selection-mode", "");
    __privateGet(this, _selectBtn).textContent = "Done";
  } else {
    this.removeAttribute("selection-mode");
    __privateGet(this, _selectBtn).textContent = "Select";
  }
  __privateMethod(this, _HubView_instances, updateActionButtons_fn).call(this);
};
toggleItemSelection_fn = function(name) {
  if (__privateGet(this, _selectedItems).has(name)) {
    __privateGet(this, _selectedItems).delete(name);
  } else {
    __privateGet(this, _selectedItems).add(name);
  }
  __privateMethod(this, _HubView_instances, updateActionButtons_fn).call(this);
};
updateActionButtons_fn = function() {
  const hasSelection = __privateGet(this, _selectedItems).size > 0;
  __privateGet(this, _exportBtn).disabled = !hasSelection;
  __privateGet(this, _deleteBtn).disabled = !hasSelection;
  const hasModified = [...__privateGet(this, _selectedItems)].some((id) => __privateGet(this, _animators)[id]);
  __privateGet(this, _revertBtn).disabled = !hasModified;
};
importFile_fn = async function() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".perky";
  input.addEventListener("change", async () => {
    const file = input.files[0];
    if (!file) {
      return;
    }
    await __privateGet(this, _store2).import(file);
    __privateMethod(this, _HubView_instances, render_fn).call(this);
  });
  input.click();
};
exportSelected_fn = async function() {
  for (const name of __privateGet(this, _selectedItems)) {
    await __privateGet(this, _store2).export(name);
  }
};
revertSelected_fn = async function() {
  const revertable = [...__privateGet(this, _selectedItems)].filter((id) => __privateGet(this, _animators)[id]);
  if (revertable.length === 0) {
    return;
  }
  const message = revertable.length === 1 ? `Revert "${revertable[0]}" to native version?` : `Revert ${revertable.length} animators to native version?`;
  if (!confirm(message)) {
    return;
  }
  for (const id of revertable) {
    await __privateMethod(this, _HubView_instances, deleteCustom_fn).call(this, id);
  }
  __privateGet(this, _selectedItems).clear();
  __privateMethod(this, _HubView_instances, toggleSelectionMode_fn).call(this);
  __privateMethod(this, _HubView_instances, render_fn).call(this);
};
deleteSelected_fn = async function() {
  const count = __privateGet(this, _selectedItems).size;
  const message = count === 1 ? `Delete "${[...__privateGet(this, _selectedItems)][0]}"?` : `Delete ${count} animators?`;
  if (!confirm(message)) {
    return;
  }
  for (const name of __privateGet(this, _selectedItems)) {
    await __privateGet(this, _store2).delete(name);
    delete __privateGet(this, _customAnimators)[name];
    __privateGet(this, _thumbnails).delete(name);
  }
  __privateGet(this, _selectedItems).clear();
  __privateMethod(this, _HubView_instances, toggleSelectionMode_fn).call(this);
  __privateMethod(this, _HubView_instances, render_fn).call(this);
};
customElements.define("hub-view", HubView);
function getFirstAnimation(config) {
  const firstKey = Object.keys(config.animations)[0];
  return config.animations[firstKey];
}
function getFrameSource(frame) {
  return typeof frame === "string" ? frame : frame.source;
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
async function extractThumbnailFromPerky(files) {
  const spritesheetJsonFile = files.find((f) => f.name.endsWith("Spritesheet.json"));
  if (!spritesheetJsonFile) {
    return null;
  }
  const spritesheetJson = JSON.parse(await blobToText(spritesheetJsonFile.blob));
  const firstFrameName = Object.keys(spritesheetJson.frames)[0];
  if (!firstFrameName) {
    return null;
  }
  const frame = spritesheetJson.frames[firstFrameName];
  const pngFile = files.find((f) => f.name.endsWith("_0.png"));
  if (!pngFile) {
    return null;
  }
  const image = await blobToImage(pngFile.blob);
  const canvas = document.createElement("canvas");
  canvas.width = frame.frame.w;
  canvas.height = frame.frame.h;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(
    image,
    frame.frame.x,
    frame.frame.y,
    frame.frame.w,
    frame.frame.h,
    0,
    0,
    frame.frame.w,
    frame.frame.h
  );
  return canvas;
}
const SEEN_KEY_PREFIX = "perky-seen-game-";
function getLastSeenGameUpdate(id) {
  return Number(localStorage.getItem(`${SEEN_KEY_PREFIX}${id}`)) || 0;
}
function setLastSeenGameUpdate(id, timestamp) {
  localStorage.setItem(`${SEEN_KEY_PREFIX}${id}`, String(timestamp));
}
async function init() {
  const container = document.getElementById("app");
  try {
    const manifest = await loadManifest(manifestData, "../");
    const textureSystem = buildTextureSystem(manifest);
    const animators = collectAnimators(manifest);
    container.innerHTML = "";
    const hubView = document.createElement("hub-view");
    hubView.setContext({ manifest, animators, textureSystem });
    container.appendChild(hubView);
  } catch (error) {
    container.innerHTML = `<div class="loading" style="color: #f66;">Error: ${error.message}</div>`;
    logger.error(error);
  }
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
