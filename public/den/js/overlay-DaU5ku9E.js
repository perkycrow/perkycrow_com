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
var _db, _dbName, _headerEl, _titleEl, _menuBtn, _closeBtn, _contentEl, _footerEl, _AppLayout_instances, buildDOM_fn, updateTitle_fn, updateButtonVisibility_fn, emitEvent_fn, _backdrop, _container, _Overlay_instances, buildDOM_fn2;
import { M as Manifest, S as SourceManager, R as Registry, l as loaders, T as TextureSystem, E as EditorComponent } from "./devtools_icons-CkXJWoC9.js";
import { c as createElement } from "./shelf_packer--IBfIqnG.js";
function rewriteUrls(data, basePath) {
  if (!basePath) {
    return data;
  }
  const rewritten = { ...data, assets: {} };
  for (const [id, asset] of Object.entries(data.assets)) {
    rewritten.assets[id] = {
      ...asset,
      url: asset.url.replace("./", basePath)
    };
  }
  return rewritten;
}
async function loadManifest(manifestData, basePath) {
  const data = rewriteUrls(manifestData, basePath);
  const manifest = new Manifest({ data });
  const sourceManager = new SourceManager({
    loaders: new Registry(loaders),
    manifest
  });
  await sourceManager.loadAll();
  return manifest;
}
function buildTextureSystem(manifest) {
  const textureSystem = new TextureSystem();
  const imageAssets = manifest.getAssetsByType("image");
  textureSystem.buildFromAssets(imageAssets);
  const spritesheetAssets = manifest.getAssetsByType("spritesheet");
  for (const asset of spritesheetAssets) {
    if (asset.source) {
      textureSystem.registerSpritesheet(asset.id, asset.source);
    }
  }
  return textureSystem;
}
function collectAnimators(manifest) {
  const animatorAssets = manifest.getAssetsByType("animator");
  const animators = {};
  for (const asset of animatorAssets) {
    if (asset.source) {
      animators[asset.id] = asset.source;
    }
  }
  return animators;
}
function getStudioConfig(manifest, tool) {
  return manifest.getConfig(`studio.${tool}`) || {};
}
function getBackgroundImage(manifest, studioConfig) {
  const backgroundId = studioConfig.background;
  const backgroundAsset = backgroundId ? manifest.getAsset(backgroundId) : null;
  return (backgroundAsset == null ? void 0 : backgroundAsset.source) || null;
}
function blobToArrayBuffer(blob) {
  if (typeof blob.arrayBuffer === "function") {
    return blob.arrayBuffer();
  }
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsArrayBuffer(blob);
  });
}
async function compress(blob) {
  if (typeof CompressionStream === "undefined") {
    return blob;
  }
  if (typeof blob.stream !== "function") {
    const buffer = await blobToArrayBuffer(blob);
    const stream2 = new Response(buffer).body.pipeThrough(new CompressionStream("gzip"));
    return new Response(stream2).blob();
  }
  const stream = blob.stream().pipeThrough(new CompressionStream("gzip"));
  return new Response(stream).blob();
}
async function decompress(blob) {
  if (typeof DecompressionStream === "undefined") {
    return blob;
  }
  if (typeof blob.stream !== "function") {
    const buffer = await blobToArrayBuffer(blob);
    const stream2 = new Response(buffer).body.pipeThrough(new DecompressionStream("gzip"));
    return new Response(stream2).blob();
  }
  const stream = blob.stream().pipeThrough(new DecompressionStream("gzip"));
  return new Response(stream).blob();
}
async function pack(files, { compress: shouldCompress = true } = {}) {
  const header = {
    files: files.map((f) => ({
      name: f.name,
      size: f.blob.size,
      type: f.blob.type
    }))
  };
  const headerBytes = new TextEncoder().encode(JSON.stringify(header));
  const headerSize = new Uint32Array([headerBytes.length]);
  const blob = new Blob([headerSize, headerBytes, ...files.map((f) => f.blob)]);
  return shouldCompress ? compress(blob) : blob;
}
async function unpack(blob, { compressed = true } = {}) {
  const data = compressed ? await decompress(blob) : blob;
  const buffer = await blobToArrayBuffer(data);
  const headerSize = new Uint32Array(buffer, 0, 1)[0];
  const headerBytes = new Uint8Array(buffer, 4, headerSize);
  const header = JSON.parse(new TextDecoder().decode(headerBytes));
  let offset = 4 + headerSize;
  return header.files.map((file) => {
    const fileBlob = new Blob([buffer.slice(offset, offset + file.size)], { type: file.type });
    offset += file.size;
    return { name: file.name, blob: fileBlob };
  });
}
const DB_PREFIX = "perky-";
const STORE_NAME = "resources";
const DB_VERSION = 1;
const META_FILENAME = "meta.json";
class PerkyStore {
  constructor(dbName = "studio") {
    __privateAdd(this, _db, null);
    __privateAdd(this, _dbName);
    __privateSet(this, _dbName, `${DB_PREFIX}${dbName}`);
  }
  async open() {
    if (__privateGet(this, _db)) {
      return __privateGet(this, _db);
    }
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(__privateGet(this, _dbName), DB_VERSION);
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          const store = db.createObjectStore(STORE_NAME, { keyPath: "id" });
          store.createIndex("type", "type", { unique: false });
        }
      };
      request.onsuccess = (event) => {
        __privateSet(this, _db, event.target.result);
        resolve(__privateGet(this, _db));
      };
      request.onerror = () => {
        reject(new Error("Failed to open database"));
      };
    });
  }
  async list(type = null) {
    const db = await this.open();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, "readonly");
      const store = transaction.objectStore(STORE_NAME);
      const request = type ? store.index("type").getAll(type) : store.getAll();
      request.onsuccess = () => {
        const items = request.result.map((item) => ({
          id: item.id,
          type: item.type,
          name: item.name,
          createdAt: item.createdAt,
          updatedAt: item.updatedAt
        }));
        resolve(items);
      };
      request.onerror = () => {
        reject(new Error("Failed to list resources"));
      };
    });
  }
  async get(id) {
    const db = await this.open();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, "readonly");
      const store = transaction.objectStore(STORE_NAME);
      const request = store.get(id);
      request.onsuccess = async () => {
        const item = request.result;
        if (!item) {
          resolve(null);
          return;
        }
        const allFiles = await unpack(item.blob);
        const files = allFiles.filter((f) => f.name !== META_FILENAME);
        resolve({
          id: item.id,
          type: item.type,
          name: item.name,
          files,
          createdAt: item.createdAt,
          updatedAt: item.updatedAt
        });
      };
      request.onerror = () => {
        reject(new Error("Failed to get resource"));
      };
    });
  }
  async save(id, data) {
    const db = await this.open();
    const { type, name, files } = data;
    if (!type) {
      throw new Error("Resource type is required");
    }
    const meta = {
      type,
      name: name || id,
      version: 1
    };
    const allFiles = [
      { name: META_FILENAME, blob: new Blob([JSON.stringify(meta)], { type: "application/json" }) },
      ...files
    ];
    const blob = await pack(allFiles);
    const now = Date.now();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, "readwrite");
      const store = transaction.objectStore(STORE_NAME);
      const getRequest = store.get(id);
      getRequest.onsuccess = () => {
        const existing = getRequest.result;
        const record = {
          id,
          type,
          name: name || id,
          blob,
          createdAt: (existing == null ? void 0 : existing.createdAt) || now,
          updatedAt: now
        };
        const putRequest = store.put(record);
        putRequest.onsuccess = () => {
          resolve({ id, type, name: record.name });
        };
        putRequest.onerror = () => {
          reject(new Error("Failed to save resource"));
        };
      };
      getRequest.onerror = () => {
        reject(new Error("Failed to save resource"));
      };
    });
  }
  async delete(id) {
    const db = await this.open();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, "readwrite");
      const store = transaction.objectStore(STORE_NAME);
      const request = store.delete(id);
      request.onsuccess = () => {
        resolve();
      };
      request.onerror = () => {
        reject(new Error("Failed to delete resource"));
      };
    });
  }
  async export(id) {
    const db = await this.open();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, "readonly");
      const store = transaction.objectStore(STORE_NAME);
      const request = store.get(id);
      request.onsuccess = () => {
        const item = request.result;
        if (!item) {
          reject(new Error("Resource not found"));
          return;
        }
        const url = URL.createObjectURL(item.blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${item.name}.perky`;
        a.click();
        URL.revokeObjectURL(url);
        resolve();
      };
      request.onerror = () => {
        reject(new Error("Failed to export resource"));
      };
    });
  }
  async import(file) {
    const blob = file instanceof Blob ? file : new Blob([await file.arrayBuffer()]);
    const allFiles = await unpack(blob);
    const metaFile = allFiles.find((f) => f.name === META_FILENAME);
    if (!metaFile) {
      throw new Error("Invalid .perky file: missing meta.json");
    }
    const metaText = await blobToText(metaFile.blob);
    const meta = JSON.parse(metaText);
    if (!meta.type || !meta.name) {
      throw new Error("Invalid .perky file: meta.json must have type and name");
    }
    const files = allFiles.filter((f) => f.name !== META_FILENAME);
    const id = `${meta.name}${capitalize(meta.type)}`;
    await this.save(id, {
      type: meta.type,
      name: meta.name,
      files
    });
    return { id, type: meta.type, name: meta.name };
  }
}
_db = new WeakMap();
_dbName = new WeakMap();
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
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
class AppLayout extends EditorComponent {
  constructor() {
    super(...arguments);
    __privateAdd(this, _AppLayout_instances);
    __privateAdd(this, _headerEl, null);
    __privateAdd(this, _titleEl, null);
    __privateAdd(this, _menuBtn, null);
    __privateAdd(this, _closeBtn, null);
    __privateAdd(this, _contentEl, null);
    __privateAdd(this, _footerEl, null);
  }
  onConnected() {
    __privateMethod(this, _AppLayout_instances, buildDOM_fn).call(this);
    __privateMethod(this, _AppLayout_instances, updateButtonVisibility_fn).call(this);
  }
  static get observedAttributes() {
    return ["title", "no-header", "no-footer", "no-menu", "no-close"];
  }
  attributeChangedCallback(name) {
    if (name === "title") {
      __privateMethod(this, _AppLayout_instances, updateTitle_fn).call(this);
    } else if (name === "no-menu" || name === "no-close") {
      __privateMethod(this, _AppLayout_instances, updateButtonVisibility_fn).call(this);
    }
  }
  get title() {
    return this.getAttribute("title") || "";
  }
  set title(value) {
    this.setAttribute("title", value);
  }
  setTitle(value) {
    this.title = value;
  }
}
_headerEl = new WeakMap();
_titleEl = new WeakMap();
_menuBtn = new WeakMap();
_closeBtn = new WeakMap();
_contentEl = new WeakMap();
_footerEl = new WeakMap();
_AppLayout_instances = new WeakSet();
buildDOM_fn = function() {
  __privateSet(this, _headerEl, createElement("header", { class: "header" }));
  const headerStart = createElement("div", { class: "header-start" });
  __privateSet(this, _menuBtn, createElement("button", { class: "header-btn menu-btn", html: "≡" }));
  __privateGet(this, _menuBtn).addEventListener("click", () => __privateMethod(this, _AppLayout_instances, emitEvent_fn).call(this, "menu"));
  headerStart.appendChild(__privateGet(this, _menuBtn));
  const headerStartSlot = createElement("slot", { name: "header-start" });
  headerStart.appendChild(headerStartSlot);
  const headerCenter = createElement("div", { class: "header-center" });
  __privateSet(this, _titleEl, createElement("span", { class: "title" }));
  headerCenter.appendChild(__privateGet(this, _titleEl));
  const headerCenterSlot = createElement("slot", { name: "header-center" });
  headerCenter.appendChild(headerCenterSlot);
  const headerEnd = createElement("div", { class: "header-end" });
  const headerEndSlot = createElement("slot", { name: "header-end" });
  headerEnd.appendChild(headerEndSlot);
  __privateSet(this, _closeBtn, createElement("button", { class: "header-btn close-btn", html: "✕" }));
  __privateGet(this, _closeBtn).addEventListener("click", () => __privateMethod(this, _AppLayout_instances, emitEvent_fn).call(this, "close"));
  headerEnd.appendChild(__privateGet(this, _closeBtn));
  __privateGet(this, _headerEl).appendChild(headerStart);
  __privateGet(this, _headerEl).appendChild(headerCenter);
  __privateGet(this, _headerEl).appendChild(headerEnd);
  __privateSet(this, _contentEl, createElement("main", { class: "content" }));
  const contentSlot = createElement("slot");
  __privateGet(this, _contentEl).appendChild(contentSlot);
  const overlayContainer = createElement("div", { class: "overlay-container" });
  const overlaySlot = createElement("slot", { name: "overlay" });
  overlayContainer.appendChild(overlaySlot);
  __privateGet(this, _contentEl).appendChild(overlayContainer);
  __privateSet(this, _footerEl, createElement("footer", { class: "footer" }));
  const footerStart = createElement("div", { class: "footer-start" });
  const footerStartSlot = createElement("slot", { name: "footer-start" });
  footerStart.appendChild(footerStartSlot);
  const footerCenter = createElement("div", { class: "footer-center" });
  const footerCenterSlot = createElement("slot", { name: "footer-center" });
  footerCenter.appendChild(footerCenterSlot);
  const footerEnd = createElement("div", { class: "footer-end" });
  const footerEndSlot = createElement("slot", { name: "footer-end" });
  footerEnd.appendChild(footerEndSlot);
  __privateGet(this, _footerEl).appendChild(footerStart);
  __privateGet(this, _footerEl).appendChild(footerCenter);
  __privateGet(this, _footerEl).appendChild(footerEnd);
  this.shadowRoot.appendChild(__privateGet(this, _headerEl));
  this.shadowRoot.appendChild(__privateGet(this, _contentEl));
  this.shadowRoot.appendChild(__privateGet(this, _footerEl));
  __privateMethod(this, _AppLayout_instances, updateTitle_fn).call(this);
};
updateTitle_fn = function() {
  if (__privateGet(this, _titleEl)) {
    __privateGet(this, _titleEl).textContent = this.title;
  }
};
updateButtonVisibility_fn = function() {
  if (__privateGet(this, _menuBtn)) {
    __privateGet(this, _menuBtn).classList.toggle("hidden", this.hasAttribute("no-menu"));
  }
  if (__privateGet(this, _closeBtn)) {
    __privateGet(this, _closeBtn).classList.toggle("hidden", this.hasAttribute("no-close"));
  }
};
emitEvent_fn = function(name) {
  this.dispatchEvent(new CustomEvent(name, { bubbles: true }));
};
__publicField(AppLayout, "styles", `
    :host {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        background: var(--bg-primary);
        color: var(--fg-primary);
        font-family: var(--font-mono);
        overflow: hidden;
    }


    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-height: var(--touch-target);
        padding: 0 var(--spacing-md);
        background: var(--bg-secondary);
        flex-shrink: 0;
        gap: var(--spacing-md);
    }

    .header-start {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
    }

    .header-center {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
        flex: 1;
        justify-content: center;
    }

    .header-end {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
    }

    .title {
        font-size: var(--font-size-lg);
        font-weight: 500;
        color: var(--fg-primary);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .title:empty {
        display: none;
    }

    .header-btn {
        appearance: none;
        background: transparent;
        border: none;
        color: var(--fg-secondary);
        font-size: 18px;
        width: var(--touch-target);
        height: var(--touch-target);
        min-width: var(--touch-target);
        min-height: var(--touch-target);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border-radius: var(--radius-md);
        transition: background var(--transition-fast), color var(--transition-fast);
        padding: 0;
    }

    .header-btn:hover {
        background: var(--bg-hover);
        color: var(--fg-primary);
    }

    .header-btn:active {
        background: var(--bg-selected);
    }

    .header-btn.hidden {
        display: none;
    }


    .content {
        flex: 1;
        overflow: auto;
        position: relative;
    }

    ::slotted(*) {
        height: 100%;
    }


    .footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-height: var(--touch-target);
        padding: var(--spacing-sm) var(--spacing-md);
        padding-bottom: max(var(--spacing-sm), env(safe-area-inset-bottom));
        background: var(--bg-secondary);
        border-top: 1px solid var(--border);
        flex-shrink: 0;
        gap: var(--spacing-md);
    }

    .footer-start {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
    }

    .footer-center {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
        flex: 1;
        justify-content: center;
    }

    .footer-end {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
    }

    :host([no-footer]) .footer {
        display: none;
    }

    :host([no-header]) .header {
        display: none;
    }


    .overlay-container {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        z-index: 100;
    }

    .overlay-container ::slotted(*) {
        pointer-events: auto;
    }
    `);
customElements.define("app-layout", AppLayout);
class Overlay extends EditorComponent {
  constructor() {
    super();
    __privateAdd(this, _Overlay_instances);
    __privateAdd(this, _backdrop, null);
    __privateAdd(this, _container, null);
    __privateMethod(this, _Overlay_instances, buildDOM_fn2).call(this);
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
_backdrop = new WeakMap();
_container = new WeakMap();
_Overlay_instances = new WeakSet();
buildDOM_fn2 = function() {
  __privateSet(this, _backdrop, createElement("div", { class: "backdrop" }));
  __privateGet(this, _backdrop).addEventListener("click", (e) => {
    if (e.target === __privateGet(this, _backdrop) && !this.hasAttribute("no-close-on-backdrop")) {
      this.close();
    }
  });
  __privateSet(this, _container, createElement("div", { class: "container" }));
  const slot = document.createElement("slot");
  __privateGet(this, _container).appendChild(slot);
  this.shadowRoot.appendChild(__privateGet(this, _backdrop));
  this.shadowRoot.appendChild(__privateGet(this, _container));
  this.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !this.hasAttribute("no-close-on-escape")) {
      this.close();
    }
  });
};
__publicField(Overlay, "styles", `
        :host {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 1000;
            font-family: var(--font-mono);
        }

        :host([open]) {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .backdrop {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.6);
            backdrop-filter: blur(4px);
            -webkit-backdrop-filter: blur(4px);
        }

        :host([no-backdrop]) .backdrop {
            background: transparent;
            backdrop-filter: none;
            -webkit-backdrop-filter: none;
        }

        .container {
            position: relative;
            display: flex;
            background: var(--bg-secondary);
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-lg);
            max-width: 90vw;
            max-height: 90vh;
            overflow: hidden;
            animation: overlay-enter 0.15s ease-out;
        }

        @keyframes overlay-enter {
            from {
                opacity: 0;
                transform: scale(0.95);
            }
            to {
                opacity: 1;
                transform: scale(1);
            }
        }

        :host([position="top"]) {
            align-items: flex-start;
            padding-top: 10vh;
        }

        :host([position="bottom"]) {
            align-items: flex-end;
            padding-bottom: 10vh;
        }


        :host([fullscreen]) .container {
            width: 100%;
            height: 100%;
            max-width: 100vw;
            max-height: 100vh;
            border-radius: 0;
            border: none;
        }


        :host([context="studio"]) .container {
            border-radius: var(--radius-xl);
        }

        :host([context="studio"][fullscreen]) .container {
            border-radius: 0;
        }
    `);
customElements.define("editor-overlay", Overlay);
export {
  PerkyStore as P,
  getBackgroundImage as a,
  buildTextureSystem as b,
  collectAnimators as c,
  getStudioConfig as g,
  loadManifest as l
};
