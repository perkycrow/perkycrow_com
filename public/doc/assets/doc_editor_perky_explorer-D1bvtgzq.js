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
var _RenderSystem_instances, configureDimensions_fn, setupInitialLayers_fn, setupResizeListener_fn, _Game_instances, updateActiveControllers_fn, _depth, _expanded, _selected, _contentEl, _toggleEl, _childrenEl, _customStyles, _BaseTreeNode_instances, buildDOM_fn, updateDepth_fn, updateToggle_fn, updateSelectedState_fn, updateChildrenVisibility_fn, handleToggleClick_fn, handleNodeClick_fn, handleContextMenu_fn, getSelectDetail_fn, getToggleDetail_fn, _module, _childNodes, _PerkyExplorerNode_instances, bindModuleEvents_fn, updateStatus_fn, updateId_fn, updateCategory_fn, clearChildNodes_fn, removeChildNode_fn, handleChildAdded_fn, handleChildRemoved_fn, _object, _childNodes2, _labelEl, _propsEl, _SceneTreeNode_instances, ensureContentElements_fn, updateLabel_fn, updateProps_fn, handleEntityClick_fn, _Object2DInspector_instances, render_fn, _content, _worldRenderer, _headerEl, _treeEl, _rootNode, _detailsEl, _selectedObject, _refreshTimeout, _SceneTreeSidebar_instances, bindEvents_fn, scheduleRefresh_fn, clearRefreshTimeout_fn, buildDOM_fn2, createHeader_fn, createTree_fn, handleNodeSelect_fn, updateDetails_fn, updateInspector_fn, _value, _min, _max, _step, _label, _slider, _labelEl2, _valueEl, _SliderInput_instances, buildDOM_fn3, updateDisplay_fn, handleInput_fn, clamp_fn, _BaseRendererInspector_instances, update_fn, _fpsValueEl, _screenFpsValueEl, _statusValueEl, _toggleBtn, _fpsLimitCheckbox, _fpsSlider, _fpsSliderValue, _GameLoopInspector_instances, handleToggle_fn, handleLimitChange_fn, handleSliderChange_fn, bindEvents_fn2, updateAll_fn, updateFps_fn, updateSlider_fn, updateSliderState_fn, updateStatus_fn2, _activeCountEl, _activeSizeEl, _zombieCountEl, _zombieSizeEl, _progressBarEl, _progressValueEl, _totalSizeEl, _autoFlushEl, _maxSizeEl, _TextureManagerInspector_instances, handleFlush_fn, handleFlushStale_fn, bindEvents_fn3, updateAll_fn2, _positionInput, _CanvasLayerInspector_instances, update_fn2, openSceneTree_fn, _classRegistry, _matcherRegistry, _views, _WorldView_instances, handleEntitySet_fn, handleEntityDelete_fn, disposeAllViews_fn, resolveViews_fn, _WorldViewInspector_instances, update_fn3, openSceneTree_fn2, _WebGLCanvasInspector_instances, update_fn4, renderPostProcessing_fn, _RenderGroupInspector_instances, update_fn5, renderBlendModeSelector_fn, renderPostPasses_fn, _sectionsState, _filterState, _typeGroupsState, _mainContainer, _assetsListContainer, _ManifestInspector_instances, update_fn6, updateAssetsList_fn, applyFilters_fn, createSection_fn, createConfigSection_fn, createDataGrid_fn, createFiltersBar_fn, createAssetsSection_fn, createTypeGroup_fn, _viewMode, _containerEl, _InputBinderInspector_instances, update_fn7, createHeader_fn2, _unlockedValueEl, _channelsValueEl, _volumeInput, _unlockBtn, _AudioSystemInspector_instances, handleVolumeChange_fn, handleUnlock_fn, bindEvents_fn4, updateAll_fn3, updateUnlocked_fn, updateChannels_fn, updateVolume_fn, _mutedValueEl, _sourcesValueEl, _volumeInput2, _muteBtn, _AudioChannelInspector_instances, handleVolumeChange_fn2, handleToggleMute_fn, bindEvents_fn5, updateAll_fn4, updateMuted_fn, updateSources_fn, updateVolume_fn2, _menuEl, _actions, _module2, _ExplorerContextMenu_instances, buildDOM_fn4, renderActions_fn, positionMenu_fn, _handleOutsideClick, _handleKeyDown, _module3, _isMinimized, _isCollapsed, _sceneTreeMode, _focusMode, _embedded, _containerEl2, _sidebarEl, _explorerEl, _minimizedEl, _headerEl2, _treeEl2, _rootNode2, _detailsEl2, _collapseBtnEl, _minimizeBtnEl, _selectedModule, _rootModule, _contextMenuEl, _PerkyExplorer_instances, buildDOM_fn5, createMinimizedView_fn, createExpandedView_fn, createSceneTreeView_fn, createHeader_fn3, createTree_fn2, handleNodeSelect_fn2, handleNodeContextMenu_fn, ensureContextMenu_fn, updateViewState_fn, toggleCollapse_fn, updateCollapseState_fn, updateTreeVisibility_fn, showEmptyState_fn, hideEmptyState_fn, updateDetails_fn2, refresh_fn, openSceneTree_fn3, closeSceneTree_fn, navigateToEntity_fn, expandParentsToNode_fn, updateEmbeddedMode_fn, updateHeaderControls_fn;
import { l as logger, d as doc, t as text, s as section, a as code, c as container } from "./runtime-fo08JO-D.js";
import { A as Application } from "./application-uZtfUbOo.js";
import { G as GameLoop } from "./game_loop-BdnbQPe7.js";
import { P as PerkyModule } from "./perky_module-CkaIwr9A.js";
import { P as PerkyView, a as InputBinder, C as CompositeBinding } from "./perky_view-Bf6RrpbI.js";
import { C as Canvas2D } from "./canvas_2d-O8wjcR4N.js";
import { W as WebGLCanvas2D, a as WebGLTextureManager, R as RenderGroup } from "./webgl_canvas_2d-w09QC7YK.js";
import { a as Camera2D, O as Object2D, B as BaseRenderer, G as Group2D } from "./group_2d-Dd5LnD3m.js";
import { B as BaseEditorComponent, a as BaseInspector, P as PerkyExplorerDetails } from "./perky_explorer_details-blS-_Re2.js";
import { c as cssVariables, n as nodeStyles, p as panelStyles, e as explorerStyles } from "./perky_explorer_styles-C0ezRuWU.js";
import { l as formatNumber, m as formatBytes } from "./utils-BpNYNExF.js";
import { h as handleAttributeChange, c as createInputStyles, e as emitChange } from "./base_input-C1WyeWNO.js";
import "./toggle_input-Do276pUG.js";
import { V as Vec2 } from "./vec2-BvD8ope7.js";
import "./vec2_input-BFMiN3vt.js";
import { M as Manifest } from "./manifest-BaIFh7Bc.js";
import "./action_controller_inspector-3o3Wuge1.js";
import "./action_dispatcher_inspector-BWFakDTm.js";
import { A as AudioSystem, a as AudioChannel } from "./audio_system-DVE_SO8b.js";
import "./action_dispatcher-HqIaiYhY.js";
import "./action_controller-zm38c-Aj.js";
import "./registry-DALkxrLq.js";
import "./observable_map-9lTkWJ54.js";
import "./observable_set-DHce3bnl.js";
import "./keyboard_device-DN2iCFrT.js";
import "./button_control-cWplzqSr.js";
import "./input_control-CaSdpqwi.js";
import "./mouse_device-DFqWxZ6q.js";
import "./vec2_control-DUZhV8hb.js";
import "./inflector--UCXb4XA.js";
class Layer extends PerkyModule {
  constructor(options = {}) {
    super(options);
    this.zIndex = options.zIndex ?? 0;
    this.visible = options.visible ?? true;
    this.opacity = options.opacity ?? 1;
    this.pointerEvents = options.pointerEvents ?? "auto";
    this.dirty = true;
    this.element = null;
    this.container = null;
    this.viewport = options.viewport ?? {
      x: 0,
      y: 0,
      width: "100%",
      height: "100%",
      anchor: "top-left"
    };
    this.resolvedViewport = { x: 0, y: 0, width: 0, height: 0 };
  }
  calculateViewport(containerWidth, containerHeight) {
    const vp = this.viewport;
    const width = typeof vp.width === "string" && vp.width.endsWith("%") ? parseFloat(vp.width) / 100 * containerWidth : parseFloat(vp.width);
    const height = typeof vp.height === "string" && vp.height.endsWith("%") ? parseFloat(vp.height) / 100 * containerHeight : parseFloat(vp.height);
    let x = typeof vp.x === "string" && vp.x.endsWith("%") ? parseFloat(vp.x) / 100 * containerWidth : parseFloat(vp.x);
    let y = typeof vp.y === "string" && vp.y.endsWith("%") ? parseFloat(vp.y) / 100 * containerHeight : parseFloat(vp.y);
    const anchor = vp.anchor || "top-left";
    if (anchor.includes("right")) {
      x = containerWidth - width - x;
    }
    if (anchor.includes("bottom")) {
      y = containerHeight - height - y;
    }
    this.resolvedViewport.x = x;
    this.resolvedViewport.y = y;
    this.resolvedViewport.width = width;
    this.resolvedViewport.height = height;
    return this.resolvedViewport;
  }
  applyViewport() {
    if (!this.element) {
      return this;
    }
    const vp = this.resolvedViewport;
    this.element.style.left = `${vp.x}px`;
    this.element.style.top = `${vp.y}px`;
    this.element.style.width = `${vp.width}px`;
    this.element.style.height = `${vp.height}px`;
    return this;
  }
  setZIndex(zIndex) {
    this.zIndex = zIndex;
    if (this.element) {
      this.element.style.zIndex = zIndex;
    }
    return this;
  }
  setVisible(visible) {
    this.visible = visible;
    if (this.element) {
      this.element.style.display = visible ? "block" : "none";
    }
    return this;
  }
  setOpacity(opacity) {
    this.opacity = opacity;
    if (this.element) {
      this.element.style.opacity = opacity;
    }
    return this;
  }
  setPointerEvents(value) {
    this.pointerEvents = value;
    if (this.element) {
      this.element.style.pointerEvents = value;
    }
    return this;
  }
  markDirty() {
    this.dirty = true;
    return this;
  }
  markClean() {
    this.dirty = false;
    return this;
  }
  mount(container2) {
    this.container = container2;
    if (this.element) {
      container2.appendChild(this.element);
    }
    return this;
  }
  unmount() {
    if (this.element && this.element.parentElement) {
      this.element.parentElement.removeChild(this.element);
    }
    this.container = null;
    return this;
  }
  resize(width, height) {
    this.calculateViewport(width, height);
    this.applyViewport();
    return this;
  }
  onDispose() {
    this.unmount();
    this.element = null;
  }
}
__publicField(Layer, "$category", "layer");
const RENDERERS = {
  canvas: Canvas2D,
  webgl: WebGLCanvas2D
};
class CanvasLayer extends Layer {
  constructor(options = {}) {
    super(options);
    this.canvas = document.createElement("canvas");
    this.element = this.canvas;
    this.rendererType = options.rendererType ?? "canvas";
    this.applyStyles();
    const width = options.width ?? 800;
    const height = options.height ?? 600;
    const pixelRatio = options.pixelRatio ?? 1;
    const vp = this.calculateViewport(width, height);
    const camera = options.camera;
    if (camera) {
      camera.viewportWidth = vp.width;
      camera.viewportHeight = vp.height;
      camera.pixelRatio ?? (camera.pixelRatio = 1);
    }
    const RendererClass = RENDERERS[this.rendererType];
    if (!RendererClass) {
      throw new Error(`Unknown renderer type: "${this.rendererType}"`);
    }
    this.create(RendererClass, {
      $bind: "renderer",
      canvas: this.canvas,
      width: vp.width,
      height: vp.height,
      pixelRatio,
      camera,
      showGrid: options.showGrid ?? false,
      gridStep: options.gridStep,
      gridOpacity: options.gridOpacity,
      gridColor: options.gridColor,
      backgroundColor: options.backgroundColor,
      enableCulling: options.enableCulling ?? false
    });
    this.content = null;
    this.autoRender = options.autoRender ?? true;
    this.applyViewport();
  }
  applyStyles() {
    this.canvas.style.position = "absolute";
    this.canvas.style.top = "0";
    this.canvas.style.left = "0";
    this.canvas.style.zIndex = this.zIndex;
    this.canvas.style.opacity = this.opacity;
    this.canvas.style.pointerEvents = this.pointerEvents;
    this.canvas.style.display = this.visible ? "block" : "none";
  }
  setContent(content) {
    this.content = content;
    this.markDirty();
    return this;
  }
  render() {
    var _a;
    if (!this.dirty) {
      return this;
    }
    if (((_a = this.renderer.renderGroups) == null ? void 0 : _a.length) > 0) {
      this.renderer.render();
    } else if (this.content) {
      this.renderer.render(this.content);
    }
    this.markClean();
    return this;
  }
  resize(width, height) {
    const vp = this.calculateViewport(width, height);
    this.renderer.resize(vp.width, vp.height);
    this.applyViewport();
    this.markDirty();
    return this;
  }
}
class HTMLLayer extends Layer {
  constructor(options = {}) {
    super(options);
    this.div = document.createElement("div");
    this.element = this.div;
    this.applyStyles();
    if (options.content) {
      this.setContent(options.content);
    }
    if (options.className) {
      this.div.className = options.className;
    }
    this.worldElements = [];
    this.camera = options.camera ?? null;
    this.autoUpdate = options.autoUpdate ?? true;
    this.updateThreshold = options.updateThreshold ?? 0.5;
    this.applyViewport();
  }
  applyStyles() {
    this.div.style.position = "absolute";
    this.div.style.top = "0";
    this.div.style.left = "0";
    this.div.style.width = "100%";
    this.div.style.height = "100%";
    this.div.style.zIndex = this.zIndex;
    this.div.style.opacity = this.opacity;
    this.div.style.pointerEvents = this.pointerEvents;
    this.div.style.display = this.visible ? "block" : "none";
  }
  setContent(content) {
    if (typeof content === "string") {
      this.div.innerHTML = content;
    } else if (content instanceof HTMLElement) {
      this.div.innerHTML = "";
      this.div.appendChild(content);
    }
    return this;
  }
  addClass(className) {
    this.div.classList.add(className);
    return this;
  }
  removeClass(className) {
    this.div.classList.remove(className);
    return this;
  }
  setStyle(property, value) {
    this.div.style[property] = value;
    return this;
  }
  resize(width, height) {
    const vp = this.calculateViewport(width, height);
    this.div.style.width = `${vp.width}px`;
    this.div.style.height = `${vp.height}px`;
    this.applyViewport();
    return this;
  }
  setCamera(camera) {
    this.camera = camera;
    return this;
  }
  createWorldElement(content, worldX, worldY, options = {}) {
    const el = document.createElement("div");
    el.innerHTML = content;
    el.style.position = "absolute";
    el.style.pointerEvents = options.pointerEvents ?? "auto";
    el.style.willChange = "transform";
    el.style.left = "0";
    el.style.top = "0";
    const worldEl = {
      element: el,
      worldX,
      worldY,
      offsetX: options.offsetX ?? 0,
      offsetY: options.offsetY ?? 0,
      worldOffsetX: options.worldOffsetX ?? 0,
      worldOffsetY: options.worldOffsetY ?? 0,
      worldScaleX: options.worldScaleX ?? 1,
      worldScaleY: options.worldScaleY ?? 1,
      autoCenter: options.autoCenter ?? false,
      inheritTransform: options.inheritTransform ?? false,
      targetObject: options.targetObject ?? null,
      lastScreenX: null,
      lastScreenY: null,
      lastZoom: null,
      visible: true
    };
    this.div.appendChild(el);
    this.worldElements.push(worldEl);
    if (worldEl.autoCenter) {
      requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        if (this.camera) {
          const ppu = this.camera.pixelsPerUnit;
          if (worldEl.autoCenter === true || worldEl.autoCenter === "x") {
            worldEl.worldOffsetX = -(rect.width / 2) / ppu;
          }
          if (worldEl.autoCenter === true || worldEl.autoCenter === "y") {
            worldEl.worldOffsetY = rect.height / 2 / ppu;
          }
        }
      });
    }
    return el;
  }
  removeWorldElement(element) {
    const index = this.worldElements.findIndex((w) => w.element === element);
    if (index !== -1) {
      this.worldElements.splice(index, 1);
      if (element.parentElement) {
        element.parentElement.removeChild(element);
      }
    }
    return this;
  }
  updateElementWorldPosition(element, worldX, worldY) {
    const worldEl = this.worldElements.find((w) => w.element === element);
    if (worldEl) {
      worldEl.worldX = worldX;
      worldEl.worldY = worldY;
    }
    return this;
  }
  setElementTarget(element, targetObject) {
    const worldEl = this.worldElements.find((w) => w.element === element);
    if (worldEl) {
      worldEl.targetObject = targetObject;
    }
    return this;
  }
  updateWorldElements(force = false) {
    if (!this.camera || this.worldElements.length === 0) {
      return this;
    }
    const ctx = {
      camera: this.camera,
      ppu: this.camera.pixelsPerUnit,
      zoomChanged: force || this.worldElements.some((el) => el.lastZoom !== this.camera.zoom),
      force,
      threshold: this.updateThreshold
    };
    this.worldElements.forEach((worldEl) => {
      updateSingleWorldElement(worldEl, ctx);
    });
    return this;
  }
  cssToWorldUnits(pixels) {
    if (!this.camera) {
      return 0;
    }
    const ppu = this.camera.pixelsPerUnit;
    return pixels / ppu;
  }
  worldUnitsToCss(units) {
    if (!this.camera) {
      return 0;
    }
    const ppu = this.camera.pixelsPerUnit;
    return units * ppu;
  }
}
function syncTargetPosition(worldEl) {
  if (worldEl.targetObject) {
    worldEl.worldX = worldEl.targetObject.x;
    worldEl.worldY = worldEl.targetObject.y;
  }
}
function updateAutoCenter(worldEl, ppu) {
  const rect = worldEl.element.getBoundingClientRect();
  if (worldEl.autoCenter === true || worldEl.autoCenter === "x") {
    worldEl.worldOffsetX = -(rect.width / 2) / ppu;
  }
  if (worldEl.autoCenter === true || worldEl.autoCenter === "y") {
    worldEl.worldOffsetY = rect.height / 2 / ppu;
  }
}
function computeFinalPosition(worldEl, camera, ppu) {
  const screen = camera.worldToScreenCSS(worldEl.worldX, worldEl.worldY);
  const worldOffsetXPx = worldEl.worldOffsetX * ppu;
  const worldOffsetYPx = -worldEl.worldOffsetY * ppu;
  return {
    x: screen.x + worldEl.offsetX + worldOffsetXPx,
    y: screen.y + worldEl.offsetY + worldOffsetYPx
  };
}
function isElementVisible(finalX, finalY, camera) {
  return finalX >= -100 && finalX <= camera.viewportWidth + 100 && finalY >= -100 && finalY <= camera.viewportHeight + 100;
}
function shouldSkipUpdate(worldEl, final, force, threshold) {
  if (force || worldEl.lastScreenX === null) {
    return false;
  }
  const dx = Math.abs(final.x - worldEl.lastScreenX);
  const dy = Math.abs(final.y - worldEl.lastScreenY);
  return dx < threshold && dy < threshold;
}
function setElementVisibility(worldEl, visible) {
  if (worldEl.visible !== visible) {
    worldEl.element.style.display = visible ? "block" : "none";
    worldEl.visible = visible;
  }
}
function shouldInheritTransform(worldEl) {
  return worldEl.inheritTransform && worldEl.targetObject;
}
function computeTransformScale(worldEl) {
  let scaleX = worldEl.worldScaleX;
  let scaleY = worldEl.worldScaleY;
  let rotationDeg = 0;
  if (shouldInheritTransform(worldEl)) {
    scaleX *= worldEl.targetObject.scaleX || 1;
    scaleY *= worldEl.targetObject.scaleY || 1;
    rotationDeg = -(worldEl.targetObject.rotation || 0) * (180 / Math.PI);
  }
  return { scaleX, scaleY, rotationDeg, needsScale: scaleX !== 1 || scaleY !== 1 };
}
function buildTransformString(finalX, finalY, transform) {
  let str = `translate(${finalX}px, ${finalY}px)`;
  if (transform.rotationDeg !== 0) {
    str += ` rotate(${transform.rotationDeg}deg)`;
  }
  if (transform.needsScale) {
    str += ` scale(${transform.scaleX}, ${transform.scaleY})`;
  }
  return str;
}
function updateSingleWorldElement(worldEl, ctx) {
  syncTargetPosition(worldEl);
  if (worldEl.autoCenter && ctx.zoomChanged) {
    updateAutoCenter(worldEl, ctx.ppu);
  }
  const final = computeFinalPosition(worldEl, ctx.camera, ctx.ppu);
  if (!isElementVisible(final.x, final.y, ctx.camera)) {
    setElementVisibility(worldEl, false);
    worldEl.lastZoom = ctx.camera.zoom;
    return;
  }
  if (shouldSkipUpdate(worldEl, final, ctx.force, ctx.threshold)) {
    worldEl.lastZoom = ctx.camera.zoom;
    return;
  }
  setElementVisibility(worldEl, true);
  const transform = computeTransformScale(worldEl);
  worldEl.element.style.transform = buildTransformString(final.x, final.y, transform);
  worldEl.lastScreenX = final.x;
  worldEl.lastScreenY = final.y;
  worldEl.lastZoom = ctx.camera.zoom;
}
class RenderSystem extends PerkyModule {
  constructor(options = {}) {
    super(options);
    __privateAdd(this, _RenderSystem_instances);
    this.create(PerkyView, {
      $bind: "view",
      className: options.className || "render-system-container",
      position: "absolute"
    });
    if (options.container) {
      this.mount(options.container);
    }
    __privateMethod(this, _RenderSystem_instances, configureDimensions_fn).call(this, options);
    this.setupCameras(options.cameras);
    __privateMethod(this, _RenderSystem_instances, setupInitialLayers_fn).call(this, options.layers);
    __privateMethod(this, _RenderSystem_instances, setupResizeListener_fn).call(this);
  }
  get element() {
    return this.view.element;
  }
  get container() {
    return this.view.container;
  }
  mount(container2) {
    return this.view.mount(container2);
  }
  dismount() {
    return this.view.dismount();
  }
  get mounted() {
    return this.view.mounted;
  }
  setupCameras(camerasConfig = {}) {
    const hasMainInConfig = "main" in camerasConfig;
    if (!hasMainInConfig) {
      this.createCamera("main", {
        unitsInView: 10,
        viewportWidth: this.layerWidth,
        viewportHeight: this.layerHeight
      });
    }
    Object.entries(camerasConfig).forEach(([id, config]) => {
      this.createCamera(id, config);
    });
    return this;
  }
  createCamera(id, config = {}) {
    const options = {
      $id: id,
      viewportWidth: this.layerWidth,
      viewportHeight: this.layerHeight,
      ...config
    };
    return this.create(Camera2D, options);
  }
  getCamera(id = "main") {
    const camera = this.getChild(id);
    if (!camera || camera.$category !== "camera") {
      throw new Error(`Camera "${id}" not found`);
    }
    return camera;
  }
  setCamera(id, config) {
    const existing = this.getChild(id);
    if (existing && existing.$category === "camera") {
      this.removeChild(id);
    }
    return this.createCamera(id, config);
  }
  resolveCamera(cameraOption) {
    if (!cameraOption) {
      return null;
    }
    if (typeof cameraOption === "string") {
      return this.getCamera(cameraOption);
    }
    if (cameraOption instanceof Camera2D) {
      return cameraOption;
    }
    if (typeof cameraOption === "object") {
      return this.createCamera(cameraOption.$id, cameraOption);
    }
    return null;
  }
  createLayer(name, type = "canvas", options = {}) {
    if (this.childrenRegistry.has(name)) {
      throw new Error(`Layer "${name}" already exists`);
    }
    const camera = this.resolveCamera(options.camera);
    const layerOptions = {
      $id: name,
      $category: "layer",
      ...options,
      width: this.layerWidth,
      height: this.layerHeight,
      camera,
      layerManager: this
    };
    let LayerClass;
    if (type === "canvas" || type === "webgl") {
      LayerClass = CanvasLayer;
      layerOptions.rendererType = type;
    } else if (type === "html") {
      LayerClass = HTMLLayer;
    } else {
      throw new Error(`Unknown layer type: "${type}"`);
    }
    const layer = this.create(LayerClass, layerOptions);
    layer.mount(this.element);
    this.sortLayers();
    return layer;
  }
  getLayer(name) {
    return this.getChild(name);
  }
  getCanvas(name) {
    const layer = this.getLayer(name);
    if (layer instanceof CanvasLayer) {
      return layer;
    }
    throw new Error(`Layer "${name}" is not a canvas layer`);
  }
  getHTML(name) {
    const layer = this.getLayer(name);
    if (layer instanceof HTMLLayer) {
      return layer;
    }
    throw new Error(`Layer "${name}" is not an HTML layer`);
  }
  removeLayer(name) {
    return this.removeChild(name);
  }
  sortLayers() {
    const sorted = this.childrenByCategory("layer").sort((a, b) => a.zIndex - b.zIndex);
    sorted.forEach((layer) => {
      if (layer.element && layer.element.parentElement) {
        this.element.appendChild(layer.element);
      }
    });
    return this;
  }
  resize(width, height) {
    this.layerWidth = width;
    this.layerHeight = height;
    this.childrenByCategory("camera").forEach((camera) => {
      camera.viewportWidth = width;
      camera.viewportHeight = height;
    });
    this.childrenByCategory("layer").forEach((layer) => {
      layer.resize(width, height);
    });
    return this;
  }
  resizeToContainer() {
    const width = this.view.element.clientWidth;
    const height = this.view.element.clientHeight;
    if (width > 0 && height > 0) {
      return this.resize(width, height);
    }
    return this;
  }
  enableAutoResize() {
    this.autoResizeEnabled = true;
    return this;
  }
  disableAutoResize() {
    this.autoResizeEnabled = false;
    return this;
  }
  renderAll() {
    this.childrenByCategory("layer").forEach((layer) => {
      if (layer instanceof CanvasLayer && layer.autoRender) {
        layer.render();
      }
      if (layer instanceof HTMLLayer && layer.autoUpdate) {
        layer.updateWorldElements();
      }
    });
    return this;
  }
  renderLayer(name) {
    const layer = this.getLayer(name);
    if (layer instanceof CanvasLayer) {
      layer.render();
    }
    return this;
  }
  markAllDirty() {
    this.childrenByCategory("layer").forEach((layer) => layer.markDirty());
    return this;
  }
  showLayer(name) {
    const layer = this.getLayer(name);
    if (layer) {
      layer.setVisible(true);
    }
    return this;
  }
  hideLayer(name) {
    const layer = this.getLayer(name);
    if (layer) {
      layer.setVisible(false);
    }
    return this;
  }
  onInstall(host) {
    this.delegateTo(host, [
      "createLayer",
      "getLayer",
      "getCanvas",
      "getHTML",
      "removeLayer",
      "renderAll",
      "renderLayer",
      "showLayer",
      "hideLayer",
      "createCamera",
      "getCamera",
      "setCamera"
    ]);
    if (host.element) {
      this.mount(host.element);
    } else if (host.mounted !== void 0) {
      this.listenToOnce(host, "mount", () => {
        this.mount(host.element);
      });
    }
  }
  onDispose() {
    var _a, _b;
    if ((_b = (_a = this.view) == null ? void 0 : _a.element) == null ? void 0 : _b.parentElement) {
      this.view.element.parentElement.removeChild(this.view.element);
    }
  }
}
_RenderSystem_instances = new WeakSet();
configureDimensions_fn = function(options) {
  this.layerWidth = options.width ?? 800;
  this.layerHeight = options.height ?? 600;
  const hasExplicitDimensions = options.width !== void 0 || options.height !== void 0;
  this.autoResizeEnabled = options.autoResize ?? !hasExplicitDimensions;
};
setupInitialLayers_fn = function(layers) {
  if (layers) {
    layers.forEach((layerConfig) => {
      this.createLayer(layerConfig.name, layerConfig.type, layerConfig);
    });
  }
};
setupResizeListener_fn = function() {
  this.on("resize", ({ width, height }) => {
    if (this.autoResizeEnabled) {
      this.resize(width, height);
    }
  });
};
__publicField(RenderSystem, "$category", "renderSystem");
class Game extends Application {
  constructor(params = {}) {
    var _a;
    super(params);
    __privateAdd(this, _Game_instances);
    this.create(GameLoop, { $bind: "gameLoop" });
    this.create(RenderSystem, {
      $bind: "renderSystem",
      ...params.renderSystem
    });
    this.on("update", __privateMethod(this, _Game_instances, updateActiveControllers_fn));
    (_a = this.configureGame) == null ? void 0 : _a.call(this, params);
  }
}
_Game_instances = new WeakSet();
updateActiveControllers_fn = function(deltaTime) {
  const activeControllers = this.getActiveControllers();
  for (const controllerName of activeControllers) {
    const controller = this.getController(controllerName);
    if (controller && typeof controller.update === "function") {
      controller.update(this, deltaTime);
    }
  }
};
class BaseTreeNode extends BaseEditorComponent {
  constructor(customStyles2 = "") {
    super();
    __privateAdd(this, _BaseTreeNode_instances);
    __privateAdd(this, _depth, 0);
    __privateAdd(this, _expanded, false);
    __privateAdd(this, _selected, false);
    __privateAdd(this, _contentEl, null);
    __privateAdd(this, _toggleEl, null);
    __privateAdd(this, _childrenEl, null);
    __privateAdd(this, _customStyles, "");
    __privateSet(this, _customStyles, customStyles2);
    __privateMethod(this, _BaseTreeNode_instances, buildDOM_fn).call(this);
  }
  getItem() {
    throw new Error("getItem() must be implemented by subclass");
  }
  hasChildren() {
    throw new Error("hasChildren() must be implemented by subclass");
  }
  getChildren() {
    throw new Error("getChildren() must be implemented by subclass");
  }
  createChildNode() {
    throw new Error("createChildNode() must be implemented by subclass");
  }
  renderNodeContent() {
    throw new Error("renderNodeContent() must be implemented by subclass");
  }
  get depth() {
    return __privateGet(this, _depth);
  }
  get expanded() {
    return __privateGet(this, _expanded);
  }
  get selected() {
    return __privateGet(this, _selected);
  }
  get contentEl() {
    return __privateGet(this, _contentEl);
  }
  get toggleEl() {
    return __privateGet(this, _toggleEl);
  }
  get childrenEl() {
    return __privateGet(this, _childrenEl);
  }
  setDepth(depth) {
    __privateSet(this, _depth, depth);
    __privateMethod(this, _BaseTreeNode_instances, updateDepth_fn).call(this);
  }
  setExpanded(expanded) {
    __privateSet(this, _expanded, expanded);
    __privateMethod(this, _BaseTreeNode_instances, updateChildrenVisibility_fn).call(this);
    __privateMethod(this, _BaseTreeNode_instances, updateToggle_fn).call(this);
  }
  setSelected(selected) {
    __privateSet(this, _selected, selected);
    __privateMethod(this, _BaseTreeNode_instances, updateSelectedState_fn).call(this);
  }
  expand() {
    this.setExpanded(true);
  }
  collapse() {
    this.setExpanded(false);
  }
  updateAll() {
    __privateMethod(this, _BaseTreeNode_instances, updateDepth_fn).call(this);
    this.renderNodeContent();
    __privateMethod(this, _BaseTreeNode_instances, updateToggle_fn).call(this);
    this.updateChildren();
    __privateMethod(this, _BaseTreeNode_instances, updateChildrenVisibility_fn).call(this);
  }
  updateChildren() {
    this.clearChildNodes();
    const children = this.getChildren();
    for (const child of children) {
      const childNode = this.createChildNode(child);
      childNode.setDepth(__privateGet(this, _depth) + 1);
      __privateGet(this, _childrenEl).appendChild(childNode);
    }
  }
  clearChildNodes() {
    __privateGet(this, _childrenEl).innerHTML = "";
  }
  refreshToggle() {
    __privateMethod(this, _BaseTreeNode_instances, updateToggle_fn).call(this);
  }
  findNode(predicate) {
    if (predicate(this)) {
      return this;
    }
    const childNodeTag = this.constructor.childNodeTag;
    if (!childNodeTag) {
      return null;
    }
    const children = this.shadowRoot.querySelectorAll(childNodeTag);
    for (const child of children) {
      const found = child.findNode(predicate);
      if (found) {
        return found;
      }
    }
    return null;
  }
  traverse(fn) {
    fn(this);
    const childNodeTag = this.constructor.childNodeTag;
    if (!childNodeTag) {
      return;
    }
    const children = this.shadowRoot.querySelectorAll(childNodeTag);
    for (const child of children) {
      child.traverse(fn);
    }
  }
  deselectAll() {
    this.traverse((node) => node.setSelected(false));
  }
  emitSelect() {
    this.dispatchEvent(new CustomEvent("node:select", {
      bubbles: true,
      composed: true,
      detail: __privateMethod(this, _BaseTreeNode_instances, getSelectDetail_fn).call(this)
    }));
  }
  emitToggle() {
    this.dispatchEvent(new CustomEvent("node:toggle", {
      bubbles: true,
      composed: true,
      detail: __privateMethod(this, _BaseTreeNode_instances, getToggleDetail_fn).call(this)
    }));
  }
  getSelectDetail() {
    return {};
  }
  getToggleDetail() {
    return { expanded: __privateGet(this, _expanded) };
  }
  emitContextMenu(e) {
    this.dispatchEvent(new CustomEvent("node:contextmenu", {
      bubbles: true,
      composed: true,
      detail: {
        ...this.getSelectDetail(),
        x: e.clientX,
        y: e.clientY
      }
    }));
  }
}
_depth = new WeakMap();
_expanded = new WeakMap();
_selected = new WeakMap();
_contentEl = new WeakMap();
_toggleEl = new WeakMap();
_childrenEl = new WeakMap();
_customStyles = new WeakMap();
_BaseTreeNode_instances = new WeakSet();
buildDOM_fn = function() {
  const style = document.createElement("style");
  style.textContent = `:host { ${cssVariables} } ${nodeStyles} ${__privateGet(this, _customStyles)}`;
  this.shadowRoot.appendChild(style);
  __privateSet(this, _contentEl, document.createElement("div"));
  __privateGet(this, _contentEl).className = "node-content";
  __privateSet(this, _toggleEl, document.createElement("div"));
  __privateGet(this, _toggleEl).className = "node-toggle";
  __privateGet(this, _toggleEl).addEventListener("click", (e) => {
    e.stopPropagation();
    __privateMethod(this, _BaseTreeNode_instances, handleToggleClick_fn).call(this);
  });
  __privateGet(this, _contentEl).appendChild(__privateGet(this, _toggleEl));
  __privateGet(this, _contentEl).addEventListener("click", () => __privateMethod(this, _BaseTreeNode_instances, handleNodeClick_fn).call(this));
  __privateGet(this, _contentEl).addEventListener("contextmenu", (e) => __privateMethod(this, _BaseTreeNode_instances, handleContextMenu_fn).call(this, e));
  __privateSet(this, _childrenEl, document.createElement("div"));
  __privateGet(this, _childrenEl).className = "node-children";
  this.shadowRoot.appendChild(__privateGet(this, _contentEl));
  this.shadowRoot.appendChild(__privateGet(this, _childrenEl));
};
updateDepth_fn = function() {
  __privateGet(this, _contentEl).style.setProperty("--depth", __privateGet(this, _depth));
};
updateToggle_fn = function() {
  if (!__privateGet(this, _toggleEl)) {
    return;
  }
  if (this.hasChildren()) {
    __privateGet(this, _toggleEl).classList.add("has-children");
    __privateGet(this, _toggleEl).textContent = __privateGet(this, _expanded) ? "▼" : "▶";
  } else {
    __privateGet(this, _toggleEl).classList.remove("has-children");
    __privateGet(this, _toggleEl).textContent = "";
  }
};
updateSelectedState_fn = function() {
  if (!__privateGet(this, _contentEl)) {
    return;
  }
  if (__privateGet(this, _selected)) {
    __privateGet(this, _contentEl).classList.add("selected");
  } else {
    __privateGet(this, _contentEl).classList.remove("selected");
  }
};
updateChildrenVisibility_fn = function() {
  if (!__privateGet(this, _childrenEl)) {
    return;
  }
  if (__privateGet(this, _expanded)) {
    __privateGet(this, _childrenEl).classList.add("expanded");
  } else {
    __privateGet(this, _childrenEl).classList.remove("expanded");
  }
};
handleToggleClick_fn = function() {
  __privateSet(this, _expanded, !__privateGet(this, _expanded));
  __privateMethod(this, _BaseTreeNode_instances, updateChildrenVisibility_fn).call(this);
  __privateMethod(this, _BaseTreeNode_instances, updateToggle_fn).call(this);
  this.emitToggle();
};
handleNodeClick_fn = function() {
  this.emitSelect();
};
handleContextMenu_fn = function(e) {
  e.preventDefault();
  e.stopPropagation();
  this.emitContextMenu(e);
};
getSelectDetail_fn = function() {
  return this.getSelectDetail();
};
getToggleDetail_fn = function() {
  return this.getToggleDetail();
};
__publicField(BaseTreeNode, "childNodeTag", null);
class PerkyExplorerNode extends BaseTreeNode {
  constructor() {
    super();
    __privateAdd(this, _PerkyExplorerNode_instances);
    __privateAdd(this, _module, null);
    __privateAdd(this, _childNodes, /* @__PURE__ */ new Map());
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    __privateMethod(this, _PerkyExplorerNode_instances, clearChildNodes_fn).call(this);
  }
  setModule(module, depth = 0) {
    this.setSelected(false);
    this.cleanListeners();
    __privateSet(this, _module, module);
    this.setDepth(depth);
    if (module) {
      __privateMethod(this, _PerkyExplorerNode_instances, bindModuleEvents_fn).call(this);
      this.updateAll();
    }
  }
  getModule() {
    return __privateGet(this, _module);
  }
  getItem() {
    return __privateGet(this, _module);
  }
  hasChildren() {
    return __privateGet(this, _module) && __privateGet(this, _module).children.length > 0;
  }
  getChildren() {
    return __privateGet(this, _module) ? __privateGet(this, _module).children : [];
  }
  createChildNode(child) {
    const childNode = document.createElement("perky-explorer-node");
    childNode.setModule(child, this.depth + 1);
    __privateGet(this, _childNodes).set(child.$id, childNode);
    return childNode;
  }
  renderNodeContent() {
    __privateMethod(this, _PerkyExplorerNode_instances, updateStatus_fn).call(this);
    __privateMethod(this, _PerkyExplorerNode_instances, updateId_fn).call(this);
    __privateMethod(this, _PerkyExplorerNode_instances, updateCategory_fn).call(this);
  }
  getSelectDetail() {
    return { module: __privateGet(this, _module) };
  }
  getToggleDetail() {
    return { module: __privateGet(this, _module), expanded: this.expanded };
  }
  updateChildren() {
    if (!__privateGet(this, _module)) {
      return;
    }
    const currentIds = new Set(__privateGet(this, _childNodes).keys());
    const moduleChildren = __privateGet(this, _module).children;
    for (const child of moduleChildren) {
      if (!__privateGet(this, _childNodes).has(child.$id)) {
        const childNode = this.createChildNode(child);
        this.childrenEl.appendChild(childNode);
      }
      currentIds.delete(child.$id);
    }
    for (const removedId of currentIds) {
      __privateMethod(this, _PerkyExplorerNode_instances, removeChildNode_fn).call(this, removedId);
    }
  }
  clearChildNodes() {
    __privateMethod(this, _PerkyExplorerNode_instances, clearChildNodes_fn).call(this);
  }
}
_module = new WeakMap();
_childNodes = new WeakMap();
_PerkyExplorerNode_instances = new WeakSet();
bindModuleEvents_fn = function() {
  if (!__privateGet(this, _module)) {
    return;
  }
  const module = __privateGet(this, _module);
  this.listenTo(module, "start", () => __privateMethod(this, _PerkyExplorerNode_instances, updateStatus_fn).call(this));
  this.listenTo(module, "stop", () => __privateMethod(this, _PerkyExplorerNode_instances, updateStatus_fn).call(this));
  const registry = module.childrenRegistry;
  if (registry) {
    this.listenTo(registry, "set", (id, child) => __privateMethod(this, _PerkyExplorerNode_instances, handleChildAdded_fn).call(this, id, child));
    this.listenTo(registry, "delete", (id) => __privateMethod(this, _PerkyExplorerNode_instances, handleChildRemoved_fn).call(this, id));
  }
  this.listenTo(module, "$id:changed", () => __privateMethod(this, _PerkyExplorerNode_instances, updateId_fn).call(this));
  this.listenTo(module, "$category:changed", () => __privateMethod(this, _PerkyExplorerNode_instances, updateCategory_fn).call(this));
};
updateStatus_fn = function() {
  if (!__privateGet(this, _module)) {
    return;
  }
  let statusEl = this.contentEl.querySelector(".node-status");
  if (!statusEl) {
    statusEl = document.createElement("div");
    statusEl.className = "node-status";
    this.contentEl.insertBefore(statusEl, this.toggleEl.nextSibling);
  }
  const status = __privateGet(this, _module).$status;
  statusEl.className = `node-status ${status}`;
  statusEl.title = status.charAt(0).toUpperCase() + status.slice(1);
};
updateId_fn = function() {
  if (!__privateGet(this, _module)) {
    return;
  }
  let idEl = this.contentEl.querySelector(".node-id");
  if (!idEl) {
    idEl = document.createElement("div");
    idEl.className = "node-id";
    this.contentEl.appendChild(idEl);
  }
  idEl.textContent = __privateGet(this, _module).$id;
  idEl.title = __privateGet(this, _module).$id;
};
updateCategory_fn = function() {
  if (!__privateGet(this, _module)) {
    return;
  }
  let categoryEl = this.contentEl.querySelector(".node-category");
  if (!categoryEl) {
    categoryEl = document.createElement("div");
    categoryEl.className = "node-category";
    this.contentEl.appendChild(categoryEl);
  }
  categoryEl.textContent = __privateGet(this, _module).$category;
};
clearChildNodes_fn = function() {
  for (const childNode of __privateGet(this, _childNodes).values()) {
    childNode.remove();
  }
  __privateGet(this, _childNodes).clear();
};
removeChildNode_fn = function(childId) {
  const childNode = __privateGet(this, _childNodes).get(childId);
  if (childNode) {
    childNode.remove();
    __privateGet(this, _childNodes).delete(childId);
  }
};
handleChildAdded_fn = function(id, child) {
  if (!__privateGet(this, _childNodes).has(id)) {
    const childNode = this.createChildNode(child);
    this.childrenEl.appendChild(childNode);
    this.refreshToggle();
  }
};
handleChildRemoved_fn = function(id) {
  __privateMethod(this, _PerkyExplorerNode_instances, removeChildNode_fn).call(this, id);
  this.refreshToggle();
};
__publicField(PerkyExplorerNode, "childNodeTag", "perky-explorer-node");
customElements.define("perky-explorer-node", PerkyExplorerNode);
const sceneTreeNodeStyles = `
    .node-label {
        color: var(--fg-primary);
        font-weight: 500;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .node-props {
        color: var(--fg-muted);
        font-size: 10px;
        margin-left: 6px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .node-props.has-entity {
        color: var(--accent);
        cursor: pointer;
    }

    .node-props.has-entity:hover {
        text-decoration: underline;
    }
`;
class SceneTreeNode extends BaseTreeNode {
  constructor() {
    super(sceneTreeNodeStyles);
    __privateAdd(this, _SceneTreeNode_instances);
    __privateAdd(this, _object, null);
    __privateAdd(this, _childNodes2, []);
    __privateAdd(this, _labelEl, null);
    __privateAdd(this, _propsEl, null);
  }
  setObject(object, depth = 0) {
    this.setSelected(false);
    __privateSet(this, _object, object);
    this.setDepth(depth);
    this.updateAll();
  }
  getObject() {
    return __privateGet(this, _object);
  }
  refresh() {
    this.updateAll();
  }
  getItem() {
    return __privateGet(this, _object);
  }
  hasChildren() {
    return __privateGet(this, _object) && __privateGet(this, _object).children && __privateGet(this, _object).children.length > 0;
  }
  getChildren() {
    var _a;
    return ((_a = __privateGet(this, _object)) == null ? void 0 : _a.children) || [];
  }
  createChildNode(child) {
    const childNode = document.createElement("scene-tree-node");
    childNode.setObject(child, this.depth + 1);
    __privateGet(this, _childNodes2).push(childNode);
    return childNode;
  }
  renderNodeContent() {
    __privateMethod(this, _SceneTreeNode_instances, ensureContentElements_fn).call(this);
    __privateMethod(this, _SceneTreeNode_instances, updateLabel_fn).call(this);
    __privateMethod(this, _SceneTreeNode_instances, updateProps_fn).call(this);
  }
  getSelectDetail() {
    return { object: __privateGet(this, _object) };
  }
  getToggleDetail() {
    return { object: __privateGet(this, _object), expanded: this.expanded };
  }
  clearChildNodes() {
    for (const childNode of __privateGet(this, _childNodes2)) {
      childNode.remove();
    }
    __privateSet(this, _childNodes2, []);
  }
}
_object = new WeakMap();
_childNodes2 = new WeakMap();
_labelEl = new WeakMap();
_propsEl = new WeakMap();
_SceneTreeNode_instances = new WeakSet();
ensureContentElements_fn = function() {
  if (!__privateGet(this, _labelEl)) {
    __privateSet(this, _labelEl, document.createElement("div"));
    __privateGet(this, _labelEl).className = "node-label";
    this.contentEl.appendChild(__privateGet(this, _labelEl));
  }
  if (!__privateGet(this, _propsEl)) {
    __privateSet(this, _propsEl, document.createElement("div"));
    __privateGet(this, _propsEl).className = "node-props";
    __privateGet(this, _propsEl).addEventListener("click", (e) => {
      var _a;
      if ((_a = __privateGet(this, _object)) == null ? void 0 : _a.$entity) {
        e.stopPropagation();
        __privateMethod(this, _SceneTreeNode_instances, handleEntityClick_fn).call(this);
      }
    });
    this.contentEl.appendChild(__privateGet(this, _propsEl));
  }
};
updateLabel_fn = function() {
  if (!__privateGet(this, _object) || !__privateGet(this, _labelEl)) {
    return;
  }
  const obj = __privateGet(this, _object);
  if (obj.$rendererName) {
    __privateGet(this, _labelEl).textContent = obj.$rendererName;
    __privateGet(this, _labelEl).title = `Renderer: ${obj.$rendererName}`;
  } else {
    __privateGet(this, _labelEl).textContent = obj.constructor.name;
  }
};
updateProps_fn = function() {
  if (!__privateGet(this, _object) || !__privateGet(this, _propsEl)) {
    return;
  }
  const obj = __privateGet(this, _object);
  if (obj.$entity) {
    __privateGet(this, _propsEl).textContent = `→ ${obj.$entity.$id}`;
    __privateGet(this, _propsEl).title = `Entity: ${obj.$entity.$id} (${obj.$entity.constructor.name})`;
    __privateGet(this, _propsEl).classList.add("has-entity");
  } else {
    const x = formatNumber(obj.x);
    const y = formatNumber(obj.y);
    __privateGet(this, _propsEl).textContent = `(${x}, ${y})`;
    __privateGet(this, _propsEl).title = `x: ${obj.x}, y: ${obj.y}, rotation: ${obj.rotation}, scale: (${obj.scaleX}, ${obj.scaleY})`;
    __privateGet(this, _propsEl).classList.remove("has-entity");
  }
};
handleEntityClick_fn = function() {
  this.dispatchEvent(new CustomEvent("navigate:entity", {
    bubbles: true,
    composed: true,
    detail: { entity: __privateGet(this, _object).$entity }
  }));
};
__publicField(SceneTreeNode, "childNodeTag", "scene-tree-node");
customElements.define("scene-tree-node", SceneTreeNode);
class Object2DInspector extends BaseInspector {
  constructor() {
    super();
    __privateAdd(this, _Object2DInspector_instances);
    this.buildDOM();
  }
  static matches(object) {
    return object instanceof Object2D;
  }
  onModuleSet(module) {
    if (module) {
      __privateMethod(this, _Object2DInspector_instances, render_fn).call(this);
    }
  }
}
_Object2DInspector_instances = new WeakSet();
render_fn = function() {
  if (!this.module) {
    return;
  }
  this.clearContent();
  const obj = this.module;
  this.addRow("class", obj.constructor.name, true);
  this.addRow("visible", obj.visible ? "yes" : "no");
  this.addRow("opacity", formatNumber(obj.opacity));
  this.addSeparator();
  this.addRow("x", formatNumber(obj.x));
  this.addRow("y", formatNumber(obj.y));
  this.addRow("rotation", formatNumber(obj.rotation) + " rad");
  this.addSeparator();
  this.addRow("scaleX", formatNumber(obj.scaleX));
  this.addRow("scaleY", formatNumber(obj.scaleY));
  this.addSeparator();
  this.addRow("pivotX", formatNumber(obj.pivotX));
  this.addRow("pivotY", formatNumber(obj.pivotY));
  this.addRow("anchorX", formatNumber(obj.anchorX));
  this.addRow("anchorY", formatNumber(obj.anchorY));
  if (obj.children && obj.children.length > 0) {
    this.addSeparator();
    this.addRow("children", obj.children.length, true);
  }
};
customElements.define("object-2d-inspector", Object2DInspector);
const DEBOUNCE_MS = 100;
const sidebarExtraStyles = `
    :host {
        display: block;
        width: 320px;
        background: var(--bg-primary);
        overflow: hidden;
        font-family: var(--font-mono);
        font-size: 12px;
        max-height: calc(100vh - 20px);
        display: flex;
        flex-direction: column;
    }

    .panel-tree {
        max-height: 300px;
    }

    .panel-details {
        border-top: 1px solid var(--border);
        background: var(--bg-secondary);
        padding: 10px 12px;
    }

    .panel-empty {
        color: var(--fg-muted);
        font-style: italic;
    }
`;
class SceneTreeSidebar extends BaseEditorComponent {
  constructor() {
    super();
    __privateAdd(this, _SceneTreeSidebar_instances);
    __privateAdd(this, _content, null);
    __privateAdd(this, _worldRenderer, null);
    __privateAdd(this, _headerEl, null);
    __privateAdd(this, _treeEl, null);
    __privateAdd(this, _rootNode, null);
    __privateAdd(this, _detailsEl, null);
    __privateAdd(this, _selectedObject, null);
    __privateAdd(this, _refreshTimeout, null);
    __privateMethod(this, _SceneTreeSidebar_instances, buildDOM_fn2).call(this);
  }
  disconnectedCallback() {
    __privateMethod(this, _SceneTreeSidebar_instances, clearRefreshTimeout_fn).call(this);
    super.disconnectedCallback();
  }
  setContent(content, worldRenderer = null) {
    this.cleanListeners();
    __privateSet(this, _content, content);
    __privateSet(this, _worldRenderer, worldRenderer);
    __privateSet(this, _selectedObject, null);
    if (__privateGet(this, _rootNode)) {
      if (content) {
        __privateGet(this, _rootNode).setObject(content, 0);
        __privateGet(this, _rootNode).setExpanded(true);
        __privateGet(this, _rootNode).style.display = "";
      } else {
        __privateGet(this, _rootNode).style.display = "none";
      }
    }
    if (worldRenderer) {
      __privateMethod(this, _SceneTreeSidebar_instances, bindEvents_fn).call(this);
    }
    __privateMethod(this, _SceneTreeSidebar_instances, updateDetails_fn).call(this);
  }
  getContent() {
    return __privateGet(this, _content);
  }
  close() {
    this.cleanListeners();
    this.dispatchEvent(new CustomEvent("sidebar:close", {
      bubbles: true,
      composed: true
    }));
  }
  refresh() {
    if (__privateGet(this, _content) && __privateGet(this, _rootNode)) {
      __privateGet(this, _rootNode).setObject(__privateGet(this, _content), 0);
      __privateGet(this, _rootNode).setExpanded(true);
    }
    if (__privateGet(this, _selectedObject)) {
      const node = __privateGet(this, _rootNode).findNode((n) => n.getObject() === __privateGet(this, _selectedObject));
      if (node) {
        node.setSelected(true);
      }
      __privateMethod(this, _SceneTreeSidebar_instances, updateInspector_fn).call(this);
    }
  }
}
_content = new WeakMap();
_worldRenderer = new WeakMap();
_headerEl = new WeakMap();
_treeEl = new WeakMap();
_rootNode = new WeakMap();
_detailsEl = new WeakMap();
_selectedObject = new WeakMap();
_refreshTimeout = new WeakMap();
_SceneTreeSidebar_instances = new WeakSet();
bindEvents_fn = function() {
  if (!__privateGet(this, _worldRenderer)) {
    return;
  }
  this.listenTo(__privateGet(this, _worldRenderer), "view:added", () => __privateMethod(this, _SceneTreeSidebar_instances, scheduleRefresh_fn).call(this));
  this.listenTo(__privateGet(this, _worldRenderer), "view:removed", () => __privateMethod(this, _SceneTreeSidebar_instances, scheduleRefresh_fn).call(this));
  this.listenTo(__privateGet(this, _worldRenderer), "dispose", () => this.close());
};
scheduleRefresh_fn = function() {
  if (__privateGet(this, _refreshTimeout)) {
    return;
  }
  __privateSet(this, _refreshTimeout, setTimeout(() => {
    __privateSet(this, _refreshTimeout, null);
    this.refresh();
  }, DEBOUNCE_MS));
};
clearRefreshTimeout_fn = function() {
  if (__privateGet(this, _refreshTimeout)) {
    clearTimeout(__privateGet(this, _refreshTimeout));
    __privateSet(this, _refreshTimeout, null);
  }
};
buildDOM_fn2 = function() {
  const style = document.createElement("style");
  style.textContent = `:host { ${cssVariables} } ${panelStyles} ${sidebarExtraStyles}`;
  this.shadowRoot.appendChild(style);
  __privateSet(this, _headerEl, __privateMethod(this, _SceneTreeSidebar_instances, createHeader_fn).call(this));
  __privateSet(this, _treeEl, __privateMethod(this, _SceneTreeSidebar_instances, createTree_fn).call(this));
  __privateSet(this, _detailsEl, document.createElement("div"));
  __privateGet(this, _detailsEl).className = "panel-details";
  this.shadowRoot.appendChild(__privateGet(this, _headerEl));
  this.shadowRoot.appendChild(__privateGet(this, _treeEl));
  this.shadowRoot.appendChild(__privateGet(this, _detailsEl));
};
createHeader_fn = function() {
  const header = document.createElement("div");
  header.className = "panel-header";
  const title = document.createElement("div");
  title.className = "panel-title";
  title.innerHTML = '<span class="panel-title-icon">🎬</span> Scene Tree';
  const buttons = document.createElement("div");
  buttons.className = "panel-buttons";
  const refreshBtn = document.createElement("button");
  refreshBtn.className = "panel-btn";
  refreshBtn.textContent = "↻";
  refreshBtn.title = "Refresh";
  refreshBtn.addEventListener("click", () => this.refresh());
  const closeBtn = document.createElement("button");
  closeBtn.className = "panel-btn";
  closeBtn.textContent = "✕";
  closeBtn.title = "Close";
  closeBtn.addEventListener("click", () => this.close());
  buttons.appendChild(refreshBtn);
  buttons.appendChild(closeBtn);
  header.appendChild(title);
  header.appendChild(buttons);
  return header;
};
createTree_fn = function() {
  const tree = document.createElement("div");
  tree.className = "panel-tree";
  __privateSet(this, _rootNode, document.createElement("scene-tree-node"));
  __privateGet(this, _rootNode).style.display = "none";
  __privateGet(this, _rootNode).addEventListener("node:select", (e) => {
    __privateMethod(this, _SceneTreeSidebar_instances, handleNodeSelect_fn).call(this, e.detail.object);
  });
  __privateGet(this, _rootNode).addEventListener("navigate:entity", (e) => {
    this.dispatchEvent(new CustomEvent("navigate:entity", {
      bubbles: true,
      composed: true,
      detail: e.detail
    }));
  });
  tree.appendChild(__privateGet(this, _rootNode));
  return tree;
};
handleNodeSelect_fn = function(object) {
  if (__privateGet(this, _selectedObject)) {
    __privateGet(this, _rootNode).deselectAll();
  }
  __privateSet(this, _selectedObject, object);
  const selectedNode = __privateGet(this, _rootNode).findNode((n) => n.getObject() === object);
  if (selectedNode) {
    selectedNode.setSelected(true);
  }
  __privateMethod(this, _SceneTreeSidebar_instances, updateInspector_fn).call(this);
};
updateDetails_fn = function() {
  if (__privateGet(this, _selectedObject)) {
    __privateMethod(this, _SceneTreeSidebar_instances, updateInspector_fn).call(this);
  } else {
    __privateGet(this, _detailsEl).innerHTML = "";
    const empty = document.createElement("div");
    empty.className = "panel-empty";
    empty.textContent = "Select an object to inspect";
    __privateGet(this, _detailsEl).appendChild(empty);
  }
};
updateInspector_fn = function() {
  __privateGet(this, _detailsEl).innerHTML = "";
  if (__privateGet(this, _selectedObject)) {
    const inspector = new Object2DInspector();
    inspector.setModule(__privateGet(this, _selectedObject));
    __privateGet(this, _detailsEl).appendChild(inspector);
  }
};
customElements.define("scene-tree-sidebar", SceneTreeSidebar);
const sliderStyles = createInputStyles(`
    .slider-input-container {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .slider-input-label {
        font-size: 10px;
        color: var(--fg-muted);
        min-width: 60px;
    }

    .slider-input-label:empty {
        display: none;
    }

    .slider-input-track {
        flex: 1;
        height: 4px;
        -webkit-appearance: none;
        appearance: none;
        background: transparent;
        cursor: pointer;
    }

    .slider-input-track::-webkit-slider-runnable-track {
        height: 4px;
        background: var(--bg-hover);
        border-radius: 2px;
    }

    .slider-input-track::-moz-range-track {
        height: 4px;
        background: var(--bg-hover);
        border-radius: 2px;
        border: none;
    }

    .slider-input-track::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 12px;
        height: 12px;
        background: var(--accent);
        border-radius: 50%;
        cursor: pointer;
        margin-top: -4px;
        transition: transform 0.1s, box-shadow 0.1s;
    }

    .slider-input-track::-webkit-slider-thumb:hover {
        transform: scale(1.2);
        box-shadow: 0 0 6px var(--accent);
    }

    .slider-input-track::-moz-range-thumb {
        width: 12px;
        height: 12px;
        background: var(--accent);
        border: none;
        border-radius: 50%;
        cursor: pointer;
    }

    .slider-input-value {
        font-size: 10px;
        color: var(--fg-secondary);
        min-width: 32px;
        text-align: right;
        font-variant-numeric: tabular-nums;
    }
`);
function formatSliderValue(value) {
  if (Math.abs(value) < 0.01) {
    return value.toFixed(3);
  }
  return value.toFixed(2);
}
class SliderInput extends HTMLElement {
  constructor() {
    super();
    __privateAdd(this, _SliderInput_instances);
    __privateAdd(this, _value, 0);
    __privateAdd(this, _min, 0);
    __privateAdd(this, _max, 100);
    __privateAdd(this, _step, 1);
    __privateAdd(this, _label, "");
    __privateAdd(this, _slider, null);
    __privateAdd(this, _labelEl2, null);
    __privateAdd(this, _valueEl, null);
    this.attachShadow({ mode: "open" });
    __privateMethod(this, _SliderInput_instances, buildDOM_fn3).call(this);
  }
  static get observedAttributes() {
    return ["value", "min", "max", "step", "label"];
  }
  connectedCallback() {
    __privateMethod(this, _SliderInput_instances, updateDisplay_fn).call(this);
  }
  attributeChangedCallback(name, oldValue, newValue) {
    handleAttributeChange(this, name, oldValue, newValue);
  }
  get value() {
    return __privateGet(this, _value);
  }
  set value(val) {
    const newValue = __privateMethod(this, _SliderInput_instances, clamp_fn).call(this, parseFloat(val) || 0);
    if (__privateGet(this, _value) !== newValue) {
      __privateSet(this, _value, newValue);
      __privateMethod(this, _SliderInput_instances, updateDisplay_fn).call(this);
    }
  }
  setValue(val) {
    __privateSet(this, _value, val);
    __privateMethod(this, _SliderInput_instances, updateDisplay_fn).call(this);
  }
  setMin(val) {
    __privateSet(this, _min, val);
    if (__privateGet(this, _slider)) {
      __privateGet(this, _slider).min = __privateGet(this, _min);
    }
  }
  setMax(val) {
    __privateSet(this, _max, val);
    if (__privateGet(this, _slider)) {
      __privateGet(this, _slider).max = __privateGet(this, _max);
    }
  }
  setStep(val) {
    __privateSet(this, _step, val);
    if (__privateGet(this, _slider)) {
      __privateGet(this, _slider).step = __privateGet(this, _step);
    }
  }
  setLabel(val) {
    __privateSet(this, _label, val);
    if (__privateGet(this, _labelEl2)) {
      __privateGet(this, _labelEl2).textContent = __privateGet(this, _label);
    }
  }
}
_value = new WeakMap();
_min = new WeakMap();
_max = new WeakMap();
_step = new WeakMap();
_label = new WeakMap();
_slider = new WeakMap();
_labelEl2 = new WeakMap();
_valueEl = new WeakMap();
_SliderInput_instances = new WeakSet();
buildDOM_fn3 = function() {
  const style = document.createElement("style");
  style.textContent = sliderStyles;
  this.shadowRoot.appendChild(style);
  const container2 = document.createElement("div");
  container2.className = "slider-input-container";
  __privateSet(this, _labelEl2, document.createElement("span"));
  __privateGet(this, _labelEl2).className = "slider-input-label";
  __privateGet(this, _labelEl2).textContent = __privateGet(this, _label);
  __privateSet(this, _slider, document.createElement("input"));
  __privateGet(this, _slider).type = "range";
  __privateGet(this, _slider).className = "slider-input-track";
  __privateGet(this, _slider).min = __privateGet(this, _min);
  __privateGet(this, _slider).max = __privateGet(this, _max);
  __privateGet(this, _slider).step = __privateGet(this, _step);
  __privateGet(this, _slider).addEventListener("input", () => __privateMethod(this, _SliderInput_instances, handleInput_fn).call(this));
  __privateSet(this, _valueEl, document.createElement("span"));
  __privateGet(this, _valueEl).className = "slider-input-value";
  container2.appendChild(__privateGet(this, _labelEl2));
  container2.appendChild(__privateGet(this, _slider));
  container2.appendChild(__privateGet(this, _valueEl));
  this.shadowRoot.appendChild(container2);
};
updateDisplay_fn = function() {
  if (__privateGet(this, _slider)) {
    __privateGet(this, _slider).value = __privateGet(this, _value);
  }
  if (__privateGet(this, _valueEl)) {
    __privateGet(this, _valueEl).textContent = formatSliderValue(__privateGet(this, _value));
  }
};
handleInput_fn = function() {
  const newValue = parseFloat(__privateGet(this, _slider).value);
  if (__privateGet(this, _value) !== newValue) {
    __privateSet(this, _value, newValue);
    __privateGet(this, _valueEl).textContent = formatSliderValue(__privateGet(this, _value));
    emitChange(this, { value: __privateGet(this, _value) });
  }
};
clamp_fn = function(value) {
  return Math.max(__privateGet(this, _min), Math.min(__privateGet(this, _max), value));
};
customElements.define("slider-input", SliderInput);
function createToggle(label, checked, onChange) {
  const container2 = document.createElement("div");
  container2.style.cssText = "grid-column: 1 / -1;";
  const toggle = document.createElement("toggle-input");
  toggle.checked = checked;
  toggle.setAttribute("label", label);
  toggle.addEventListener("change", (e) => onChange(e.detail.checked));
  container2.appendChild(toggle);
  return container2;
}
function createSlider(label, value, options, onChange) {
  const { min, max, step } = options;
  const container2 = document.createElement("div");
  container2.style.cssText = "grid-column: 1 / -1;";
  const slider = document.createElement("slider-input");
  slider.setAttribute("label", label);
  slider.setAttribute("min", min);
  slider.setAttribute("max", max);
  slider.setAttribute("step", step);
  slider.value = value;
  slider.addEventListener("change", (e) => onChange(e.detail.value));
  container2.appendChild(slider);
  return container2;
}
function createColorRow(name, color, onChange) {
  const row = document.createElement("div");
  row.className = "inspector-row";
  const label = document.createElement("span");
  label.className = "inspector-row-label";
  label.textContent = name;
  const colorInput = document.createElement("input");
  colorInput.type = "color";
  colorInput.style.cssText = "position: absolute; opacity: 0; pointer-events: none;";
  const swatch = document.createElement("div");
  swatch.className = "inspector-color-swatch";
  const toHex = (v) => Math.round(v * 255).toString(16).padStart(2, "0");
  const updateSwatch = () => {
    swatch.style.backgroundColor = `rgba(${color[0] * 255}, ${color[1] * 255}, ${color[2] * 255}, ${color[3]})`;
  };
  updateSwatch();
  colorInput.value = `#${toHex(color[0])}${toHex(color[1])}${toHex(color[2])}`;
  swatch.addEventListener("click", () => colorInput.click());
  colorInput.addEventListener("input", (e) => {
    const hex = e.target.value;
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;
    color[0] = r;
    color[1] = g;
    color[2] = b;
    updateSwatch();
    onChange([r, g, b, color[3]]);
  });
  row.appendChild(label);
  row.appendChild(colorInput);
  row.appendChild(swatch);
  return row;
}
function getEditableUniforms(pass) {
  var _a, _b;
  const defaults = pass.constructor.defaultUniforms || ((_a = pass.getDefaultUniforms) == null ? void 0 : _a.call(pass)) || {};
  const configs = pass.constructor.uniformConfig || ((_b = pass.getUniformConfig) == null ? void 0 : _b.call(pass)) || {};
  const currentUniforms = pass.uniforms || {};
  return Object.entries(defaults).filter(([, defaultValue]) => typeof defaultValue === "number").map(([name, defaultValue]) => ({
    name,
    defaultValue,
    currentValue: currentUniforms[name] ?? defaultValue,
    config: configs[name] || { min: 0, max: defaultValue * 2 || 1, step: 0.01 }
  }));
}
function renderUniformSlider(container2, pass, uniform) {
  const { min, max, step } = uniform.config;
  const slider = document.createElement("slider-input");
  slider.setAttribute("label", uniform.name.replace(/^u/, ""));
  slider.setAttribute("min", min);
  slider.setAttribute("max", max);
  slider.setAttribute("step", step);
  slider.value = uniform.currentValue;
  slider.addEventListener("change", (e) => {
    pass.setUniform(uniform.name, e.detail.value);
  });
  container2.appendChild(slider);
}
function renderTransformProperty(container2, transform, name, config) {
  if (config.type === "color") {
    const row = createColorRow(name, transform[name], (newColor) => {
      transform[name] = newColor;
    });
    container2.appendChild(row);
  } else {
    const slider = document.createElement("slider-input");
    slider.setAttribute("label", name);
    slider.setAttribute("min", config.min ?? 0);
    slider.setAttribute("max", config.max ?? 1);
    slider.setAttribute("step", config.step ?? 0.01);
    slider.value = transform[name];
    slider.addEventListener("change", (e) => {
      transform[name] = e.detail.value;
    });
    container2.appendChild(slider);
  }
}
const passStyles = `
    .pass-section {
        grid-column: 1 / -1;
        margin-top: 8px;
    }

    .pass-header {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 6px 0;
        border-bottom: 1px solid var(--border);
        margin-bottom: 8px;
    }

    .pass-uniforms {
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding-left: 4px;
    }

    .no-passes {
        color: var(--fg-muted);
        font-style: italic;
        padding: 8px 0;
    }
`;
function renderPass(gridEl, pass) {
  const section2 = document.createElement("div");
  section2.className = "pass-section";
  const header = document.createElement("div");
  header.className = "pass-header";
  const toggle = document.createElement("toggle-input");
  toggle.checked = pass.enabled;
  toggle.setAttribute("label", pass.constructor.name);
  toggle.addEventListener("change", (e) => {
    pass.enabled = e.detail.checked;
  });
  header.appendChild(toggle);
  section2.appendChild(header);
  const uniforms = getEditableUniforms(pass);
  if (uniforms.length > 0) {
    const uniformsEl = document.createElement("div");
    uniformsEl.className = "pass-uniforms";
    for (const uniform of uniforms) {
      renderUniformSlider(uniformsEl, pass, uniform);
    }
    section2.appendChild(uniformsEl);
  }
  gridEl.appendChild(section2);
}
function renderTransform(gridEl, addRow, transform) {
  var _a;
  if (!transform) {
    addRow("transform", "none");
    return;
  }
  const section2 = document.createElement("div");
  section2.className = "pass-section";
  const header = document.createElement("div");
  header.className = "pass-header";
  const toggle = document.createElement("toggle-input");
  toggle.checked = transform.enabled;
  toggle.setAttribute("label", transform.constructor.name);
  toggle.addEventListener("change", (e) => {
    transform.enabled = e.detail.checked;
  });
  header.appendChild(toggle);
  section2.appendChild(header);
  const config = ((_a = transform.getPropertyConfig) == null ? void 0 : _a.call(transform)) || {};
  const propertyNames = Object.keys(config);
  if (propertyNames.length > 0) {
    const propsEl = document.createElement("div");
    propsEl.className = "pass-uniforms";
    for (const name of propertyNames) {
      const propConfig = config[name];
      renderTransformProperty(propsEl, transform, name, propConfig);
    }
    section2.appendChild(propsEl);
  }
  gridEl.appendChild(section2);
}
class BaseRendererInspector extends BaseInspector {
  constructor() {
    super();
    __privateAdd(this, _BaseRendererInspector_instances);
    this.buildDOM();
  }
  static matches(module) {
    return module instanceof BaseRenderer;
  }
  onModuleSet(module) {
    if (module) {
      __privateMethod(this, _BaseRendererInspector_instances, update_fn).call(this);
    }
  }
}
_BaseRendererInspector_instances = new WeakSet();
update_fn = function() {
  if (!this.module) {
    return;
  }
  this.clearContent();
  const renderer = this.module;
  this.addRow("canvas", `${renderer.canvas.width}×${renderer.canvas.height}`);
  this.addRow("display", `${renderer.displayWidth}×${renderer.displayHeight}`);
  this.addSeparator();
  const slider = createSlider(
    "pixelRatio",
    renderer.pixelRatio,
    { min: 0.25, max: 3, step: 0.25 },
    (value) => renderer.setPixelRatio(value)
  );
  this.gridEl.appendChild(slider);
};
customElements.define("base-renderer-inspector", BaseRendererInspector);
PerkyExplorerDetails.registerInspector(BaseRendererInspector);
const customStyles$6 = `
    .fps-controls {
        grid-column: 1 / -1;
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-top: 8px;
        padding-top: 8px;
        border-top: 1px solid var(--border);
    }

    .fps-limit-row {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .fps-limit-checkbox {
        width: 14px;
        height: 14px;
        accent-color: var(--accent);
        cursor: pointer;
    }

    .fps-limit-label {
        color: var(--fg-secondary);
        font-size: 11px;
        cursor: pointer;
        user-select: none;
    }

    .fps-slider-row {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .fps-slider {
        flex: 1;
        height: 4px;
        accent-color: var(--accent);
        cursor: pointer;
    }

    .fps-slider:disabled {
        opacity: 0.4;
        cursor: not-allowed;
    }

    .fps-slider-value {
        min-width: 32px;
        color: var(--fg-secondary);
        font-size: 11px;
        text-align: right;
    }
`;
class GameLoopInspector extends BaseInspector {
  constructor() {
    super(customStyles$6);
    __privateAdd(this, _GameLoopInspector_instances);
    __privateAdd(this, _fpsValueEl, null);
    __privateAdd(this, _screenFpsValueEl, null);
    __privateAdd(this, _statusValueEl, null);
    __privateAdd(this, _toggleBtn, null);
    __privateAdd(this, _fpsLimitCheckbox, null);
    __privateAdd(this, _fpsSlider, null);
    __privateAdd(this, _fpsSliderValue, null);
    this.buildDOM();
  }
  static matches(module) {
    return module instanceof GameLoop;
  }
  onModuleSet(module) {
    if (module) {
      __privateMethod(this, _GameLoopInspector_instances, bindEvents_fn2).call(this);
      __privateMethod(this, _GameLoopInspector_instances, updateAll_fn).call(this);
    }
  }
  buildDOM() {
    super.buildDOM();
    __privateSet(this, _fpsValueEl, this.addRow("fps", "0"));
    __privateSet(this, _screenFpsValueEl, this.addRow("screen fps", "0"));
    __privateSet(this, _statusValueEl, this.addRow("status", "stopped"));
    const controlsEl = document.createElement("div");
    controlsEl.className = "fps-controls";
    const limitRow = document.createElement("div");
    limitRow.className = "fps-limit-row";
    __privateSet(this, _fpsLimitCheckbox, document.createElement("input"));
    __privateGet(this, _fpsLimitCheckbox).type = "checkbox";
    __privateGet(this, _fpsLimitCheckbox).className = "fps-limit-checkbox";
    __privateGet(this, _fpsLimitCheckbox).id = "fps-limit-checkbox";
    __privateGet(this, _fpsLimitCheckbox).addEventListener("change", () => __privateMethod(this, _GameLoopInspector_instances, handleLimitChange_fn).call(this));
    const limitLabel = document.createElement("label");
    limitLabel.className = "fps-limit-label";
    limitLabel.htmlFor = "fps-limit-checkbox";
    limitLabel.textContent = "Limit FPS";
    limitRow.appendChild(__privateGet(this, _fpsLimitCheckbox));
    limitRow.appendChild(limitLabel);
    const sliderRow = document.createElement("div");
    sliderRow.className = "fps-slider-row";
    __privateSet(this, _fpsSlider, document.createElement("input"));
    __privateGet(this, _fpsSlider).type = "range";
    __privateGet(this, _fpsSlider).className = "fps-slider";
    __privateGet(this, _fpsSlider).min = "15";
    __privateGet(this, _fpsSlider).max = "144";
    __privateGet(this, _fpsSlider).value = "60";
    __privateGet(this, _fpsSlider).addEventListener("input", () => __privateMethod(this, _GameLoopInspector_instances, handleSliderChange_fn).call(this));
    __privateSet(this, _fpsSliderValue, document.createElement("span"));
    __privateGet(this, _fpsSliderValue).className = "fps-slider-value";
    __privateGet(this, _fpsSliderValue).textContent = "60";
    sliderRow.appendChild(__privateGet(this, _fpsSlider));
    sliderRow.appendChild(__privateGet(this, _fpsSliderValue));
    controlsEl.appendChild(limitRow);
    controlsEl.appendChild(sliderRow);
    this.gridEl.appendChild(controlsEl);
    __privateSet(this, _toggleBtn, this.createButton("⏸", "Pause", () => __privateMethod(this, _GameLoopInspector_instances, handleToggle_fn).call(this)));
    this.actionsEl.appendChild(__privateGet(this, _toggleBtn));
  }
}
_fpsValueEl = new WeakMap();
_screenFpsValueEl = new WeakMap();
_statusValueEl = new WeakMap();
_toggleBtn = new WeakMap();
_fpsLimitCheckbox = new WeakMap();
_fpsSlider = new WeakMap();
_fpsSliderValue = new WeakMap();
_GameLoopInspector_instances = new WeakSet();
handleToggle_fn = function() {
  if (!this.module) {
    return;
  }
  if (this.module.paused) {
    this.module.resume();
  } else {
    this.module.pause();
  }
};
handleLimitChange_fn = function() {
  if (!this.module) {
    return;
  }
  this.module.setFpsLimited(__privateGet(this, _fpsLimitCheckbox).checked);
  __privateMethod(this, _GameLoopInspector_instances, updateSliderState_fn).call(this);
};
handleSliderChange_fn = function() {
  if (!this.module) {
    return;
  }
  const fps = parseInt(__privateGet(this, _fpsSlider).value, 10);
  this.module.setFps(fps);
  __privateGet(this, _fpsSliderValue).textContent = fps;
};
bindEvents_fn2 = function() {
  if (!this.module) {
    return;
  }
  this.listenTo(this.module, "render", (_, fps, screenFps) => __privateMethod(this, _GameLoopInspector_instances, updateFps_fn).call(this, fps, screenFps));
  this.listenTo(this.module, "pause", () => __privateMethod(this, _GameLoopInspector_instances, updateStatus_fn2).call(this));
  this.listenTo(this.module, "resume", () => __privateMethod(this, _GameLoopInspector_instances, updateStatus_fn2).call(this));
  this.listenTo(this.module, "start", () => __privateMethod(this, _GameLoopInspector_instances, updateStatus_fn2).call(this));
  this.listenTo(this.module, "stop", () => __privateMethod(this, _GameLoopInspector_instances, updateStatus_fn2).call(this));
  this.listenTo(this.module, "changed:fps", (fps) => __privateMethod(this, _GameLoopInspector_instances, updateSlider_fn).call(this, fps));
  this.listenTo(this.module, "changed:fpsLimited", () => __privateMethod(this, _GameLoopInspector_instances, updateSliderState_fn).call(this));
};
updateAll_fn = function() {
  var _a, _b, _c;
  __privateMethod(this, _GameLoopInspector_instances, updateFps_fn).call(this, ((_a = this.module) == null ? void 0 : _a.getCurrentFps()) || 0, ((_b = this.module) == null ? void 0 : _b.getScreenFps()) || 0);
  __privateMethod(this, _GameLoopInspector_instances, updateStatus_fn2).call(this);
  __privateMethod(this, _GameLoopInspector_instances, updateSlider_fn).call(this, ((_c = this.module) == null ? void 0 : _c.fps) || 60);
  __privateMethod(this, _GameLoopInspector_instances, updateSliderState_fn).call(this);
};
updateFps_fn = function(fps, screenFps) {
  __privateGet(this, _fpsValueEl).textContent = fps;
  __privateGet(this, _fpsValueEl).className = "inspector-value accent";
  __privateGet(this, _screenFpsValueEl).textContent = screenFps;
  __privateGet(this, _screenFpsValueEl).className = "inspector-value";
};
updateSlider_fn = function(fps) {
  __privateGet(this, _fpsSlider).value = fps;
  __privateGet(this, _fpsSliderValue).textContent = fps;
};
updateSliderState_fn = function() {
  if (!this.module) {
    return;
  }
  const isLimited = this.module.fpsLimited;
  __privateGet(this, _fpsLimitCheckbox).checked = isLimited;
  __privateGet(this, _fpsSlider).disabled = !isLimited;
};
updateStatus_fn2 = function() {
  if (!this.module) {
    return;
  }
  const { started, paused } = this.module;
  let status = "stopped";
  let statusClass = "";
  if (started && !paused) {
    status = "running";
    statusClass = "running";
  } else if (started && paused) {
    status = "paused";
    statusClass = "paused";
  }
  __privateGet(this, _statusValueEl).textContent = status;
  __privateGet(this, _statusValueEl).className = `inspector-value ${statusClass}`;
  __privateGet(this, _toggleBtn).disabled = !started;
  if (started && !paused) {
    __privateGet(this, _toggleBtn).textContent = "⏸ Pause";
    __privateGet(this, _toggleBtn).classList.add("primary");
  } else if (started && paused) {
    __privateGet(this, _toggleBtn).textContent = "▶ Resume";
    __privateGet(this, _toggleBtn).classList.remove("primary");
  } else {
    __privateGet(this, _toggleBtn).textContent = "⏸ Pause";
    __privateGet(this, _toggleBtn).classList.remove("primary");
  }
};
customElements.define("game-loop-inspector", GameLoopInspector);
PerkyExplorerDetails.registerInspector(GameLoopInspector);
function createStatCard(label, value, sub, className = "") {
  const card = document.createElement("div");
  card.className = "stat-card";
  const labelEl = document.createElement("div");
  labelEl.className = "stat-label";
  labelEl.textContent = label;
  const valueEl = document.createElement("div");
  valueEl.className = `stat-value ${className}`;
  valueEl.textContent = value;
  const subEl = document.createElement("div");
  subEl.className = "stat-sub";
  subEl.textContent = sub;
  card.appendChild(labelEl);
  card.appendChild(valueEl);
  card.appendChild(subEl);
  return card;
}
function createInfoRow(label) {
  const row = document.createElement("div");
  row.className = "info-row";
  const labelEl = document.createElement("span");
  labelEl.className = "info-label";
  labelEl.textContent = label;
  const valueEl = document.createElement("span");
  valueEl.className = "info-value";
  row.appendChild(labelEl);
  row.appendChild(valueEl);
  return row;
}
const customStyles$5 = `
    .inspector-stats {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
        margin-bottom: 10px;
    }

    .stat-card {
        background: var(--bg-hover);
        border-radius: 4px;
        padding: 8px 10px;
    }

    .stat-label {
        font-size: 9px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        color: var(--fg-muted);
        margin-bottom: 2px;
    }

    .stat-value {
        font-size: 14px;
        font-weight: 600;
        color: var(--fg-primary);
    }

    .stat-value.active {
        color: var(--status-started);
    }

    .stat-value.zombie {
        color: var(--status-warning);
    }

    .stat-sub {
        font-size: 10px;
        color: var(--fg-muted);
        margin-top: 1px;
    }

    .progress-section {
        margin-bottom: 10px;
    }

    .progress-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 4px;
    }

    .progress-label {
        font-size: 10px;
        color: var(--fg-muted);
    }

    .progress-value {
        font-size: 10px;
        color: var(--fg-secondary);
        font-family: var(--font-mono);
    }

    .progress-bar-container {
        height: 6px;
        background: var(--bg-primary);
        border-radius: 3px;
        overflow: hidden;
    }

    .progress-bar {
        height: 100%;
        background: var(--accent);
        border-radius: 3px;
        transition: width 0.3s ease, background 0.3s ease;
        min-width: 2px;
    }

    .progress-bar.low {
        background: var(--status-started);
    }

    .progress-bar.medium {
        background: var(--status-warning);
    }

    .progress-bar.high {
        background: var(--status-stopped);
    }

    .divider {
        height: 1px;
        background: var(--border);
        margin: 10px 0;
    }

    .info-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 11px;
        padding: 3px 0;
    }

    .info-label {
        color: var(--fg-muted);
    }

    .info-value {
        color: var(--fg-secondary);
        font-family: var(--font-mono);
    }

    .info-value.enabled {
        color: var(--status-started);
    }

    .info-value.disabled {
        color: var(--fg-muted);
    }
`;
class TextureManagerInspector extends BaseInspector {
  constructor() {
    super(customStyles$5);
    __privateAdd(this, _TextureManagerInspector_instances);
    __privateAdd(this, _activeCountEl, null);
    __privateAdd(this, _activeSizeEl, null);
    __privateAdd(this, _zombieCountEl, null);
    __privateAdd(this, _zombieSizeEl, null);
    __privateAdd(this, _progressBarEl, null);
    __privateAdd(this, _progressValueEl, null);
    __privateAdd(this, _totalSizeEl, null);
    __privateAdd(this, _autoFlushEl, null);
    __privateAdd(this, _maxSizeEl, null);
    this.buildDOM();
  }
  static matches(module) {
    return module instanceof WebGLTextureManager;
  }
  onModuleSet(module) {
    if (module) {
      __privateMethod(this, _TextureManagerInspector_instances, bindEvents_fn3).call(this);
      __privateMethod(this, _TextureManagerInspector_instances, updateAll_fn2).call(this);
    }
  }
  buildDOM() {
    super.buildDOM();
    const stats = document.createElement("div");
    stats.className = "inspector-stats";
    const activeCard = createStatCard("Active", "0", "0 B", "active");
    __privateSet(this, _activeCountEl, activeCard.querySelector(".stat-value"));
    __privateSet(this, _activeSizeEl, activeCard.querySelector(".stat-sub"));
    const zombieCard = createStatCard("Zombies", "0", "0 B", "zombie");
    __privateSet(this, _zombieCountEl, zombieCard.querySelector(".stat-value"));
    __privateSet(this, _zombieSizeEl, zombieCard.querySelector(".stat-sub"));
    stats.appendChild(activeCard);
    stats.appendChild(zombieCard);
    const progressSection = document.createElement("div");
    progressSection.className = "progress-section";
    const progressHeader = document.createElement("div");
    progressHeader.className = "progress-header";
    const progressLabel = document.createElement("span");
    progressLabel.className = "progress-label";
    progressLabel.textContent = "Zombie pool usage";
    __privateSet(this, _progressValueEl, document.createElement("span"));
    __privateGet(this, _progressValueEl).className = "progress-value";
    __privateGet(this, _progressValueEl).textContent = "0%";
    progressHeader.appendChild(progressLabel);
    progressHeader.appendChild(__privateGet(this, _progressValueEl));
    const progressBarContainer = document.createElement("div");
    progressBarContainer.className = "progress-bar-container";
    __privateSet(this, _progressBarEl, document.createElement("div"));
    __privateGet(this, _progressBarEl).className = "progress-bar low";
    __privateGet(this, _progressBarEl).style.width = "0%";
    progressBarContainer.appendChild(__privateGet(this, _progressBarEl));
    progressSection.appendChild(progressHeader);
    progressSection.appendChild(progressBarContainer);
    const divider = document.createElement("div");
    divider.className = "divider";
    const infoSection = document.createElement("div");
    const totalRow = createInfoRow("Total memory");
    __privateSet(this, _totalSizeEl, totalRow.querySelector(".info-value"));
    const maxRow = createInfoRow("Max zombie size");
    __privateSet(this, _maxSizeEl, maxRow.querySelector(".info-value"));
    const autoFlushRow = createInfoRow("Auto flush");
    __privateSet(this, _autoFlushEl, autoFlushRow.querySelector(".info-value"));
    infoSection.appendChild(totalRow);
    infoSection.appendChild(maxRow);
    infoSection.appendChild(autoFlushRow);
    const flushBtn = this.createButton("🗑", "Flush All", () => __privateMethod(this, _TextureManagerInspector_instances, handleFlush_fn).call(this));
    const flushStaleBtn = this.createButton("🧹", "Flush Stale", () => __privateMethod(this, _TextureManagerInspector_instances, handleFlushStale_fn).call(this));
    this.actionsEl.appendChild(flushBtn);
    this.actionsEl.appendChild(flushStaleBtn);
    this.shadowRoot.insertBefore(stats, this.gridEl);
    this.shadowRoot.insertBefore(progressSection, this.gridEl);
    this.shadowRoot.insertBefore(divider, this.gridEl);
    this.shadowRoot.insertBefore(infoSection, this.gridEl);
    this.gridEl.style.display = "none";
  }
}
_activeCountEl = new WeakMap();
_activeSizeEl = new WeakMap();
_zombieCountEl = new WeakMap();
_zombieSizeEl = new WeakMap();
_progressBarEl = new WeakMap();
_progressValueEl = new WeakMap();
_totalSizeEl = new WeakMap();
_autoFlushEl = new WeakMap();
_maxSizeEl = new WeakMap();
_TextureManagerInspector_instances = new WeakSet();
handleFlush_fn = function() {
  if (!this.module) {
    return;
  }
  const result = this.module.flush();
  if (result.count > 0) {
    logger.info(`[TextureManager] Flushed ${result.count} textures (${formatBytes(result.size)})`);
  }
  __privateMethod(this, _TextureManagerInspector_instances, updateAll_fn2).call(this);
};
handleFlushStale_fn = function() {
  if (!this.module) {
    return;
  }
  const result = this.module.flushStale();
  if (result.count > 0) {
    logger.info(`[TextureManager] Flushed ${result.count} stale textures (${formatBytes(result.size)})`);
  }
  __privateMethod(this, _TextureManagerInspector_instances, updateAll_fn2).call(this);
};
bindEvents_fn3 = function() {
  if (!this.module) {
    return;
  }
  const events = ["create", "zombie", "resurrect", "delete", "flush", "flushStale", "flushIfFull"];
  for (const event of events) {
    this.listenTo(this.module, event, () => __privateMethod(this, _TextureManagerInspector_instances, updateAll_fn2).call(this));
  }
};
updateAll_fn2 = function() {
  if (!this.module) {
    return;
  }
  const stats = this.module.stats;
  __privateGet(this, _activeCountEl).textContent = stats.activeCount;
  __privateGet(this, _activeSizeEl).textContent = formatBytes(stats.activeSize);
  __privateGet(this, _zombieCountEl).textContent = stats.zombieCount;
  __privateGet(this, _zombieSizeEl).textContent = formatBytes(stats.zombieSize);
  __privateGet(this, _totalSizeEl).textContent = formatBytes(stats.totalSize);
  __privateGet(this, _maxSizeEl).textContent = formatBytes(this.module.maxZombieSize);
  const usagePercent = this.module.maxZombieSize > 0 ? stats.zombieSize / this.module.maxZombieSize * 100 : 0;
  __privateGet(this, _progressValueEl).textContent = `${usagePercent.toFixed(1)}%`;
  __privateGet(this, _progressBarEl).style.width = `${Math.min(usagePercent, 100)}%`;
  __privateGet(this, _progressBarEl).classList.remove("low", "medium", "high");
  if (usagePercent > 75) {
    __privateGet(this, _progressBarEl).classList.add("high");
  } else if (usagePercent > 40) {
    __privateGet(this, _progressBarEl).classList.add("medium");
  } else {
    __privateGet(this, _progressBarEl).classList.add("low");
  }
  const autoFlushEnabled = this.module.autoFlushEnabled;
  __privateGet(this, _autoFlushEl).textContent = autoFlushEnabled ? "Enabled" : "Disabled";
  __privateGet(this, _autoFlushEl).className = `info-value ${autoFlushEnabled ? "enabled" : "disabled"}`;
};
customElements.define("texture-manager-inspector", TextureManagerInspector);
PerkyExplorerDetails.registerInspector(TextureManagerInspector);
class Entity extends PerkyModule {
  constructor(options = {}) {
    super(options);
    const { x = 0, y = 0 } = options;
    this.position = new Vec2(x, y);
    this.velocity = new Vec2(0, 0);
  }
  get x() {
    return this.position.x;
  }
  set x(value) {
    this.position.x = value;
  }
  get y() {
    return this.position.y;
  }
  set y(value) {
    this.position.y = value;
  }
  update() {
  }
}
__publicField(Entity, "$category", "entity");
class EntityInspector extends BaseInspector {
  constructor() {
    super();
    __privateAdd(this, _positionInput, null);
    this.buildDOM();
  }
  static matches(module) {
    return module instanceof Entity;
  }
  buildDOM() {
    super.buildDOM();
    __privateSet(this, _positionInput, document.createElement("vec2-input"));
    __privateGet(this, _positionInput).setAttribute("label", "Position");
    this.shadowRoot.insertBefore(__privateGet(this, _positionInput), this.gridEl);
  }
  onModuleSet(module) {
    if (module) {
      __privateGet(this, _positionInput).value = module.position;
    }
  }
}
_positionInput = new WeakMap();
customElements.define("entity-inspector", EntityInspector);
PerkyExplorerDetails.registerInspector(EntityInspector);
class CanvasLayerInspector extends BaseInspector {
  constructor() {
    super();
    __privateAdd(this, _CanvasLayerInspector_instances);
    this.buildDOM();
  }
  static matches(module) {
    return module instanceof CanvasLayer;
  }
  onModuleSet(module) {
    if (module) {
      __privateMethod(this, _CanvasLayerInspector_instances, update_fn2).call(this);
    }
  }
}
_CanvasLayerInspector_instances = new WeakSet();
update_fn2 = function() {
  var _a, _b;
  if (!this.module) {
    return;
  }
  this.clearContent();
  const layer = this.module;
  this.addRow("rendererType", layer.rendererType);
  this.addRow("zIndex", layer.zIndex);
  this.addRow("visible", layer.visible ? "yes" : "no");
  this.addRow("opacity", layer.opacity);
  this.addRow("autoRender", layer.autoRender ? "yes" : "no");
  if (layer.renderer) {
    this.addRow("renderer", layer.renderer.constructor.name);
  }
  const contentCount = ((_b = (_a = layer.content) == null ? void 0 : _a.children) == null ? void 0 : _b.length) ?? 0;
  this.addRow("content", layer.content ? `${layer.content.constructor.name} (${contentCount})` : "(none)", true);
  if (layer.content) {
    const sceneTreeBtn = this.createButton("🎬", "Scene Tree", () => __privateMethod(this, _CanvasLayerInspector_instances, openSceneTree_fn).call(this));
    sceneTreeBtn.classList.add("primary");
    this.actionsEl.appendChild(sceneTreeBtn);
  }
};
openSceneTree_fn = function() {
  var _a;
  if (!((_a = this.module) == null ? void 0 : _a.content)) {
    return;
  }
  this.dispatchEvent(new CustomEvent("open:scene-tree", {
    bubbles: true,
    composed: true,
    detail: { content: this.module.content }
  }));
};
customElements.define("canvas-layer-inspector", CanvasLayerInspector);
PerkyExplorerDetails.registerInspector(CanvasLayerInspector);
class WorldView extends PerkyModule {
  constructor(options = {}) {
    super(options);
    __privateAdd(this, _WorldView_instances);
    __privateAdd(this, _classRegistry, /* @__PURE__ */ new Map());
    __privateAdd(this, _matcherRegistry, []);
    __privateAdd(this, _views, /* @__PURE__ */ new Map());
    this.world = options.world;
    this.game = options.game;
    this.rootGroup = new Group2D({ name: "world" });
  }
  register(classOrMatcher, View, config = null) {
    if (typeof classOrMatcher === "function" && classOrMatcher.prototype) {
      const isClass = classOrMatcher.toString().startsWith("class ") || Object.getOwnPropertyNames(classOrMatcher.prototype).length > 1;
      if (isClass) {
        __privateGet(this, _classRegistry).set(classOrMatcher, { View, config });
        return this;
      }
    }
    __privateGet(this, _matcherRegistry).push({ matcher: classOrMatcher, View, config });
    return this;
  }
  unregister(classOrMatcher) {
    if (__privateGet(this, _classRegistry).has(classOrMatcher)) {
      __privateGet(this, _classRegistry).delete(classOrMatcher);
      return true;
    }
    const index = __privateGet(this, _matcherRegistry).findIndex((entry) => entry.matcher === classOrMatcher);
    if (index !== -1) {
      __privateGet(this, _matcherRegistry).splice(index, 1);
      return true;
    }
    return false;
  }
  clearRegistry() {
    __privateGet(this, _classRegistry).clear();
    __privateGet(this, _matcherRegistry).length = 0;
    return this;
  }
  onStart() {
    if (!this.world) {
      return;
    }
    this.listenTo(this.world, "entity:set", (id, entity) => __privateMethod(this, _WorldView_instances, handleEntitySet_fn).call(this, entity));
    this.listenTo(this.world, "entity:delete", (id) => __privateMethod(this, _WorldView_instances, handleEntityDelete_fn).call(this, id));
    for (const entity of this.world.entities) {
      __privateMethod(this, _WorldView_instances, handleEntitySet_fn).call(this, entity);
    }
  }
  onStop() {
    __privateMethod(this, _WorldView_instances, disposeAllViews_fn).call(this);
  }
  sync(deltaTime = 0) {
    for (const views of __privateGet(this, _views).values()) {
      for (const view of views) {
        view.sync(deltaTime);
      }
    }
  }
  getViews(entityId) {
    return __privateGet(this, _views).get(entityId) || [];
  }
}
_classRegistry = new WeakMap();
_matcherRegistry = new WeakMap();
_views = new WeakMap();
_WorldView_instances = new WeakSet();
handleEntitySet_fn = function(entity) {
  const registrations = __privateMethod(this, _WorldView_instances, resolveViews_fn).call(this, entity);
  if (registrations.length === 0) {
    return;
  }
  const views = [];
  for (const { View, config } of registrations) {
    const context = {
      game: this.game,
      world: this.world,
      group: this.rootGroup,
      config
    };
    const view = new View(entity, context);
    if (view.root) {
      view.root.$entity = entity;
      view.root.$view = view;
      view.root.$viewName = View.name;
      this.rootGroup.addChild(view.root);
    }
    views.push(view);
  }
  __privateGet(this, _views).set(entity.$id, views);
  this.emit("view:added", entity.$id, views);
};
handleEntityDelete_fn = function(entityId) {
  const views = __privateGet(this, _views).get(entityId);
  if (views) {
    this.emit("view:removed", entityId, views);
    for (const view of views) {
      view.dispose();
    }
    __privateGet(this, _views).delete(entityId);
  }
};
disposeAllViews_fn = function() {
  for (const views of __privateGet(this, _views).values()) {
    for (const view of views) {
      view.dispose();
    }
  }
  __privateGet(this, _views).clear();
};
resolveViews_fn = function(entity) {
  const results = [];
  const EntityClass = entity.constructor;
  const classRegistration = __privateGet(this, _classRegistry).get(EntityClass);
  if (classRegistration) {
    results.push(classRegistration);
  }
  for (const entry of __privateGet(this, _matcherRegistry)) {
    if (entry.matcher(entity)) {
      results.push(entry);
    }
  }
  return results;
};
__publicField(WorldView, "$category", "worldView");
const customStyles$4 = `
    .view-list {
        margin-top: 8px;
        padding-top: 8px;
        border-top: 1px solid var(--border);
    }

    .view-list-title {
        color: var(--fg-secondary);
        font-size: 10px;
        margin-bottom: 6px;
        text-transform: uppercase;
    }

    .view-item {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 4px 0;
        color: var(--fg-primary);
        font-size: 11px;
    }

    .view-count {
        color: var(--fg-muted);
        font-size: 10px;
    }
`;
class WorldViewInspector extends BaseInspector {
  constructor() {
    super(customStyles$4);
    __privateAdd(this, _WorldViewInspector_instances);
    this.buildDOM();
  }
  static matches(module) {
    return module instanceof WorldView;
  }
  onModuleSet(module) {
    if (module) {
      __privateMethod(this, _WorldViewInspector_instances, update_fn3).call(this);
    }
  }
}
_WorldViewInspector_instances = new WeakSet();
update_fn3 = function() {
  var _a, _b, _c, _d;
  if (!this.module) {
    return;
  }
  this.clearContent();
  const worldView = this.module;
  this.addRow("world", ((_a = worldView.world) == null ? void 0 : _a.$id) || "(none)");
  this.addRow("game", ((_b = worldView.game) == null ? void 0 : _b.$id) || "(none)");
  const entityCount = ((_d = (_c = worldView.rootGroup) == null ? void 0 : _c.children) == null ? void 0 : _d.length) ?? 0;
  this.addRow("entities", entityCount, true);
  if (worldView.rootGroup && entityCount > 0) {
    const sceneTreeBtn = this.createButton("🎬", "Scene Tree", () => __privateMethod(this, _WorldViewInspector_instances, openSceneTree_fn2).call(this));
    sceneTreeBtn.classList.add("primary");
    this.actionsEl.appendChild(sceneTreeBtn);
  }
};
openSceneTree_fn2 = function() {
  var _a;
  if (!((_a = this.module) == null ? void 0 : _a.rootGroup)) {
    return;
  }
  this.dispatchEvent(new CustomEvent("open:scene-tree", {
    bubbles: true,
    composed: true,
    detail: {
      content: this.module.rootGroup,
      worldView: this.module
    }
  }));
};
customElements.define("world-view-inspector", WorldViewInspector);
PerkyExplorerDetails.registerInspector(WorldViewInspector);
class WebGLCanvasInspector extends BaseInspector {
  constructor() {
    super(passStyles);
    __privateAdd(this, _WebGLCanvasInspector_instances);
    this.buildDOM();
  }
  static matches(module) {
    return module instanceof WebGLCanvas2D;
  }
  onModuleSet(module) {
    if (module) {
      __privateMethod(this, _WebGLCanvasInspector_instances, update_fn4).call(this);
    }
  }
}
_WebGLCanvasInspector_instances = new WeakSet();
update_fn4 = function() {
  if (!this.module) {
    return;
  }
  this.clearContent();
  const renderer = this.module;
  this.addRow("type", "WebGL2");
  this.addRow("canvas", `${renderer.canvas.width}×${renderer.canvas.height}`);
  this.addRow("pixelRatio", renderer.pixelRatio);
  this.addRow("backgroundColor", renderer.backgroundColor || "transparent");
  this.addRow("culling", renderer.enableCulling ? "enabled" : "disabled");
  this.addSeparator();
  __privateMethod(this, _WebGLCanvasInspector_instances, renderPostProcessing_fn).call(this);
};
renderPostProcessing_fn = function() {
  const postProcessor = this.module.postProcessor;
  if (!postProcessor) {
    return;
  }
  const passes = postProcessor.passes;
  this.addRow("post-processing", postProcessor.enabled ? "enabled" : "disabled");
  this.addRow("passes", passes.length.toString(), true);
  if (passes.length === 0) {
    const noPassesEl = document.createElement("div");
    noPassesEl.className = "no-passes";
    noPassesEl.textContent = "No post-processing passes";
    this.gridEl.appendChild(noPassesEl);
    return;
  }
  for (const pass of passes) {
    renderPass(this.gridEl, pass);
  }
};
customElements.define("webgl-canvas-inspector", WebGLCanvasInspector);
PerkyExplorerDetails.registerInspector(WebGLCanvasInspector);
class RenderGroupInspector extends BaseInspector {
  constructor() {
    super(passStyles);
    __privateAdd(this, _RenderGroupInspector_instances);
    this.buildDOM();
  }
  static matches(module) {
    return module instanceof RenderGroup;
  }
  onModuleSet(module) {
    if (module) {
      __privateMethod(this, _RenderGroupInspector_instances, update_fn5).call(this);
    }
  }
}
_RenderGroupInspector_instances = new WeakSet();
update_fn5 = function() {
  var _a;
  if (!this.module) {
    return;
  }
  this.clearContent();
  const group = this.module;
  const visibleToggle = createToggle("visible", group.visible, (value) => {
    group.visible = value;
  });
  this.gridEl.appendChild(visibleToggle);
  this.addRow("name", group.$name);
  this.addRow("status", group.started ? "started" : "stopped");
  this.addSeparator();
  const opacitySlider = createSlider("opacity", group.opacity, { min: 0, max: 1, step: 0.01 }, (value) => {
    group.opacity = value;
  });
  this.gridEl.appendChild(opacitySlider);
  __privateMethod(this, _RenderGroupInspector_instances, renderBlendModeSelector_fn).call(this, group);
  this.addSeparator();
  if (group.content) {
    this.addRow("content", group.content.name || group.content.constructor.name);
    const childCount = ((_a = group.content.children) == null ? void 0 : _a.length) || 0;
    this.addRow("children", childCount.toString());
  } else {
    this.addRow("content", "none");
  }
  this.addSeparator();
  renderTransform(this.gridEl, this.addRow.bind(this), group.renderTransform);
  this.addSeparator();
  __privateMethod(this, _RenderGroupInspector_instances, renderPostPasses_fn).call(this, group);
};
renderBlendModeSelector_fn = function(group) {
  const row = document.createElement("div");
  row.className = "inspector-row";
  const label = document.createElement("span");
  label.className = "inspector-row-label";
  label.textContent = "blendMode";
  const select = document.createElement("select");
  select.className = "inspector-select";
  const modes = ["normal", "additive", "multiply"];
  for (const mode of modes) {
    const option = document.createElement("option");
    option.value = mode;
    option.textContent = mode;
    option.selected = group.blendMode === mode;
    select.appendChild(option);
  }
  select.addEventListener("change", () => {
    group.blendMode = select.value;
  });
  row.appendChild(label);
  row.appendChild(select);
  this.gridEl.appendChild(row);
};
renderPostPasses_fn = function(group) {
  const passes = group.postPasses || [];
  this.addRow("post-passes", passes.length.toString(), true);
  if (passes.length === 0) {
    const noPassesEl = document.createElement("div");
    noPassesEl.className = "no-passes";
    noPassesEl.textContent = "No post-processing passes";
    this.gridEl.appendChild(noPassesEl);
    return;
  }
  for (const pass of passes) {
    renderPass(this.gridEl, pass);
  }
};
customElements.define("render-group-inspector", RenderGroupInspector);
PerkyExplorerDetails.registerInspector(RenderGroupInspector);
function matchesSearch(asset, query) {
  const lowerQuery = query.toLowerCase();
  if ((asset.id || "").toLowerCase().includes(lowerQuery)) {
    return true;
  }
  if ((asset.name || "").toLowerCase().includes(lowerQuery)) {
    return true;
  }
  if ((asset.type || "").toLowerCase().includes(lowerQuery)) {
    return true;
  }
  if (asset.tags && asset.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))) {
    return true;
  }
  return false;
}
const customStyles$3 = `
    .filters-container {
        margin-bottom: 12px;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .search-container {
        position: relative;
        width: 100%;
    }

    .search-bar {
        width: 100%;
        padding: 6px 28px 6px 8px;
        background: var(--bg-hover);
        border: 1px solid var(--border);
        border-radius: 4px;
        color: var(--fg-primary);
        font-size: 11px;
        outline: none;
        box-sizing: border-box;
    }

    .search-clear {
        position: absolute;
        right: 6px;
        top: 50%;
        transform: translateY(-50%);
        width: 16px;
        height: 16px;
        display: none;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: var(--fg-muted);
        font-size: 14px;
        line-height: 1;
        user-select: none;
        border-radius: 2px;
    }

    .search-clear:hover {
        color: var(--fg-primary);
        background: var(--bg-primary);
    }

    .search-container.has-value .search-clear {
        display: flex;
    }

    .search-bar:focus {
        border-color: var(--accent);
    }

    .search-bar::placeholder {
        color: var(--fg-muted);
    }

    .filter-buttons {
        display: flex;
        gap: 4px;
        flex-wrap: wrap;
    }

    .filter-button {
        padding: 4px 8px;
        background: var(--bg-hover);
        border: 1px solid var(--border);
        border-radius: 4px;
        font-size: 10px;
        color: var(--fg-secondary);
        cursor: pointer;
        user-select: none;
        transition: all 0.2s;
    }

    .filter-button:hover {
        background: var(--bg-primary);
        color: var(--fg-primary);
    }

    .filter-button.active {
        background: var(--accent);
        color: var(--bg-primary);
        border-color: var(--accent);
    }

    .filter-button .count {
        opacity: 0.7;
        margin-left: 4px;
    }

    .section {
        margin-bottom: 12px;
    }

    .section-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 6px 0;
        border-bottom: 1px solid var(--border);
        margin-bottom: 8px;
        cursor: pointer;
        user-select: none;
    }

    .section-header:hover {
        color: var(--fg-primary);
    }

    .section-title {
        font-size: 10px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        color: var(--fg-muted);
        display: flex;
        align-items: center;
        gap: 6px;
    }

    .section-count {
        background: var(--bg-hover);
        padding: 1px 6px;
        border-radius: 8px;
        font-size: 9px;
        color: var(--fg-secondary);
    }

    .section-toggle {
        font-size: 10px;
        color: var(--fg-muted);
        transition: transform 0.2s;
    }

    .section-toggle.collapsed {
        transform: rotate(-90deg);
    }

    .section-content {
        display: block;
    }

    .section-content.collapsed {
        display: none;
    }

    .data-grid {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 4px 12px;
        font-size: 11px;
    }

    .data-key {
        color: var(--fg-muted);
    }

    .data-value {
        color: var(--fg-secondary);
        word-break: break-all;
    }

    .empty-message {
        color: var(--fg-muted);
        font-size: 10px;
        font-style: italic;
    }

    .asset-list {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .asset-type-group {
        margin-bottom: 8px;
    }

    .asset-type-header {
        font-size: 10px;
        color: var(--accent);
        margin-bottom: 6px;
        text-transform: capitalize;
    }

    .asset-card {
        background: var(--bg-hover);
        border-radius: 4px;
        padding: 8px;
        margin-bottom: 6px;
    }

    .asset-card.collapsed {
        padding-bottom: 8px;
    }

    .asset-header {
        display: flex;
        align-items: center;
        gap: 8px;
        position: relative;
    }

    .asset-header:not(.collapsed) {
        margin-bottom: 6px;
    }

    .asset-header::before {
        content: '▼';
        font-size: 8px;
        color: var(--fg-muted);
        transition: transform 0.2s;
        margin-right: 2px;
    }

    .asset-header.collapsed::before {
        transform: rotate(-90deg);
    }

    .asset-icon {
        width: 14px;
        height: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }

    .asset-icon svg {
        width: 100%;
        height: 100%;
        color: var(--fg-muted);
    }

    .asset-name {
        font-size: 11px;
        font-weight: 600;
        color: var(--fg-primary);
        flex: 1;
    }

    .asset-type-badge {
        font-size: 9px;
        background: var(--bg-primary);
        padding: 2px 6px;
        border-radius: 4px;
        color: var(--fg-muted);
    }

    .asset-details {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 2px 8px;
        font-size: 10px;
    }

    .asset-label {
        color: var(--fg-muted);
    }

    .asset-value {
        color: var(--fg-secondary);
        word-break: break-all;
    }

    .asset-link {
        color: var(--accent);
        text-decoration: none;
    }

    .asset-link:hover {
        text-decoration: underline;
    }

    .asset-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        margin-top: 6px;
    }

    .asset-tag {
        font-size: 9px;
        background: var(--bg-primary);
        color: var(--accent);
        padding: 2px 6px;
        border-radius: 8px;
    }

    .asset-preview {
        margin-top: 8px;
        max-width: 100%;
        border-radius: 4px;
        overflow: hidden;
    }

    .asset-preview img {
        max-width: 100%;
        max-height: 80px;
        object-fit: contain;
        display: block;
        background: var(--bg-primary);
    }

    .asset-preview audio {
        width: 100%;
        height: 32px;
        outline: none;
    }

    .asset-preview audio::-webkit-media-controls-panel {
        background-color: var(--bg-primary);
    }

    .asset-config {
        margin-top: 6px;
        padding-top: 6px;
        border-top: 1px solid var(--border);
    }

    .config-title {
        font-size: 9px;
        color: var(--fg-muted);
        text-transform: uppercase;
        margin-bottom: 4px;
    }
`;
class ManifestInspector extends BaseInspector {
  constructor() {
    super(customStyles$3);
    __privateAdd(this, _ManifestInspector_instances);
    __privateAdd(this, _sectionsState, {
      config: true,
      assets: true
    });
    __privateAdd(this, _filterState, {
      searchQuery: ""
    });
    __privateAdd(this, _typeGroupsState, {});
    __privateAdd(this, _mainContainer, null);
    __privateAdd(this, _assetsListContainer, null);
    this.buildDOM();
  }
  static matches(module) {
    return module instanceof Manifest;
  }
  onModuleSet(module) {
    if (module) {
      __privateMethod(this, _ManifestInspector_instances, update_fn6).call(this, false);
    }
  }
}
_sectionsState = new WeakMap();
_filterState = new WeakMap();
_typeGroupsState = new WeakMap();
_mainContainer = new WeakMap();
_assetsListContainer = new WeakMap();
_ManifestInspector_instances = new WeakSet();
update_fn6 = function(onlyAssetsList = false) {
  if (!this.module) {
    return;
  }
  if (onlyAssetsList && __privateGet(this, _assetsListContainer)) {
    __privateMethod(this, _ManifestInspector_instances, updateAssetsList_fn).call(this);
    return;
  }
  if (__privateGet(this, _mainContainer) && __privateGet(this, _mainContainer).parentNode) {
    __privateGet(this, _mainContainer).remove();
  }
  this.clearContent();
  const container2 = document.createElement("div");
  __privateSet(this, _mainContainer, container2);
  container2.appendChild(__privateMethod(this, _ManifestInspector_instances, createConfigSection_fn).call(this));
  container2.appendChild(__privateMethod(this, _ManifestInspector_instances, createAssetsSection_fn).call(this));
  this.gridEl.style.display = "none";
  this.shadowRoot.insertBefore(container2, this.gridEl);
};
updateAssetsList_fn = function() {
  if (!__privateGet(this, _assetsListContainer)) {
    return;
  }
  __privateGet(this, _assetsListContainer).innerHTML = "";
  const allAssets = this.module.getAllAssets();
  const filteredAssets = __privateMethod(this, _ManifestInspector_instances, applyFilters_fn).call(this, allAssets);
  const hasActiveSearch = __privateGet(this, _filterState).searchQuery.length > 0;
  if (filteredAssets.length === 0) {
    __privateGet(this, _assetsListContainer).innerHTML = '<div class="empty-message">No assets match the current filters</div>';
    return;
  }
  const assetsByType = groupAssetsByType(filteredAssets);
  for (const [type, assets] of Object.entries(assetsByType)) {
    const group = __privateMethod(this, _ManifestInspector_instances, createTypeGroup_fn).call(this, type, assets, hasActiveSearch);
    __privateGet(this, _assetsListContainer).appendChild(group);
  }
};
applyFilters_fn = function(assets) {
  if (!__privateGet(this, _filterState).searchQuery) {
    return assets;
  }
  return assets.filter((asset) => matchesSearch(asset, __privateGet(this, _filterState).searchQuery));
};
createSection_fn = function(title, key, count = null) {
  const section2 = document.createElement("div");
  section2.className = "section";
  const header = document.createElement("div");
  header.className = "section-header";
  const titleEl = document.createElement("div");
  titleEl.className = "section-title";
  titleEl.textContent = title;
  if (count !== null) {
    const countEl = document.createElement("span");
    countEl.className = "section-count";
    countEl.textContent = count;
    titleEl.appendChild(countEl);
  }
  const toggle = document.createElement("span");
  toggle.className = `section-toggle ${__privateGet(this, _sectionsState)[key] ? "" : "collapsed"}`;
  toggle.textContent = "▼";
  header.appendChild(titleEl);
  header.appendChild(toggle);
  const content = document.createElement("div");
  content.className = `section-content ${__privateGet(this, _sectionsState)[key] ? "" : "collapsed"}`;
  header.addEventListener("click", () => {
    __privateGet(this, _sectionsState)[key] = !__privateGet(this, _sectionsState)[key];
    toggle.classList.toggle("collapsed");
    content.classList.toggle("collapsed");
  });
  section2.appendChild(header);
  section2.appendChild(content);
  return { section: section2, content };
};
createConfigSection_fn = function() {
  const config = this.module.getConfig();
  const entries = Object.entries(config);
  const { section: section2, content } = __privateMethod(this, _ManifestInspector_instances, createSection_fn).call(this, "Config", "config", entries.length);
  if (entries.length === 0) {
    content.innerHTML = '<div class="empty-message">No config defined</div>';
  } else {
    const grid = __privateMethod(this, _ManifestInspector_instances, createDataGrid_fn).call(this, config);
    content.appendChild(grid);
  }
  return section2;
};
createDataGrid_fn = function(data, depth = 0) {
  const grid = document.createElement("div");
  grid.className = "data-grid";
  if (depth > 0) {
    grid.style.marginLeft = `${depth * 12}px`;
  }
  for (const [key, value] of Object.entries(data)) {
    const keyEl = document.createElement("div");
    keyEl.className = "data-key";
    keyEl.textContent = key;
    const valueEl = document.createElement("div");
    valueEl.className = "data-value";
    if (value && typeof value === "object" && !Array.isArray(value)) {
      valueEl.appendChild(__privateMethod(this, _ManifestInspector_instances, createDataGrid_fn).call(this, value, depth + 1));
    } else if (Array.isArray(value)) {
      valueEl.textContent = `[${value.join(", ")}]`;
    } else {
      valueEl.textContent = String(value);
    }
    grid.appendChild(keyEl);
    grid.appendChild(valueEl);
  }
  return grid;
};
createFiltersBar_fn = function(allAssets) {
  const container2 = document.createElement("div");
  container2.className = "filters-container";
  const searchContainer = document.createElement("div");
  searchContainer.className = "search-container";
  if (__privateGet(this, _filterState).searchQuery) {
    searchContainer.classList.add("has-value");
  }
  const searchBar = document.createElement("input");
  searchBar.type = "text";
  searchBar.className = "search-bar";
  searchBar.placeholder = "Search by name, id, type or tag...";
  searchBar.value = __privateGet(this, _filterState).searchQuery;
  const clearButton = document.createElement("div");
  clearButton.className = "search-clear";
  clearButton.textContent = "×";
  clearButton.title = "Clear search";
  const updateSearch = (value) => {
    searchBar.value = value;
    __privateGet(this, _filterState).searchQuery = value;
    if (value) {
      searchContainer.classList.add("has-value");
    } else {
      searchContainer.classList.remove("has-value");
    }
    __privateMethod(this, _ManifestInspector_instances, update_fn6).call(this);
  };
  searchBar.addEventListener("input", (e) => {
    __privateGet(this, _filterState).searchQuery = e.target.value;
    if (e.target.value) {
      searchContainer.classList.add("has-value");
    } else {
      searchContainer.classList.remove("has-value");
    }
    __privateMethod(this, _ManifestInspector_instances, update_fn6).call(this, true);
  });
  clearButton.addEventListener("click", () => {
    updateSearch("");
    searchBar.focus();
  });
  searchContainer.appendChild(searchBar);
  searchContainer.appendChild(clearButton);
  container2.appendChild(searchContainer);
  const quickFilters = document.createElement("div");
  quickFilters.className = "filter-buttons";
  const typeStats = getTypeStats(allAssets);
  for (const [type, count] of Object.entries(typeStats)) {
    const chip = createFilterChip(type, count, () => {
      updateSearch(type);
      searchBar.focus();
    });
    quickFilters.appendChild(chip);
  }
  const tagStats = getTagStats(allAssets);
  if (Object.keys(tagStats).length > 0) {
    for (const [tag, count] of Object.entries(tagStats)) {
      const chip = createFilterChip(`#${tag}`, count, () => {
        updateSearch(tag);
        searchBar.focus();
      });
      quickFilters.appendChild(chip);
    }
  }
  container2.appendChild(quickFilters);
  return container2;
};
createAssetsSection_fn = function() {
  const allAssets = this.module.getAllAssets();
  const hasActiveSearch = __privateGet(this, _filterState).searchQuery.length > 0;
  const { section: section2, content } = __privateMethod(this, _ManifestInspector_instances, createSection_fn).call(this, "Assets", "assets", allAssets.length);
  if (allAssets.length === 0) {
    content.innerHTML = '<div class="empty-message">No assets defined</div>';
    return section2;
  }
  content.appendChild(__privateMethod(this, _ManifestInspector_instances, createFiltersBar_fn).call(this, allAssets));
  const assetsListContainer = document.createElement("div");
  __privateSet(this, _assetsListContainer, assetsListContainer);
  content.appendChild(assetsListContainer);
  const filteredAssets = __privateMethod(this, _ManifestInspector_instances, applyFilters_fn).call(this, allAssets);
  if (filteredAssets.length === 0) {
    assetsListContainer.innerHTML = '<div class="empty-message">No assets match the current filters</div>';
    return section2;
  }
  const assetsByType = groupAssetsByType(filteredAssets);
  for (const [type, assets] of Object.entries(assetsByType)) {
    const group = __privateMethod(this, _ManifestInspector_instances, createTypeGroup_fn).call(this, type, assets, hasActiveSearch);
    assetsListContainer.appendChild(group);
  }
  return section2;
};
createTypeGroup_fn = function(type, assets, hasActiveSearch) {
  const group = document.createElement("div");
  group.className = "asset-type-group";
  const typeHeader = document.createElement("div");
  typeHeader.className = "asset-type-header";
  typeHeader.style.cursor = "pointer";
  typeHeader.textContent = `${type} (${assets.length})`;
  const isCollapsed = __privateGet(this, _typeGroupsState)[type] === false;
  const typeContent = document.createElement("div");
  typeContent.style.display = isCollapsed ? "none" : "block";
  typeHeader.addEventListener("click", () => {
    __privateGet(this, _typeGroupsState)[type] = typeContent.style.display === "none";
    typeContent.style.display = typeContent.style.display === "none" ? "block" : "none";
  });
  for (const asset of assets) {
    typeContent.appendChild(createAssetCard(asset, (data) => __privateMethod(this, _ManifestInspector_instances, createDataGrid_fn).call(this, data), hasActiveSearch));
  }
  group.appendChild(typeHeader);
  group.appendChild(typeContent);
  return group;
};
function groupAssetsByType(assets) {
  const grouped = {};
  for (const asset of assets) {
    const type = asset.type || "unknown";
    if (!grouped[type]) {
      grouped[type] = [];
    }
    grouped[type].push(asset);
  }
  return grouped;
}
function getTypeStats(assets) {
  const stats = {};
  for (const asset of assets) {
    const type = asset.type || "unknown";
    stats[type] = (stats[type] || 0) + 1;
  }
  return stats;
}
function getTagStats(assets) {
  const stats = {};
  for (const asset of assets) {
    if (asset.tags) {
      for (const tag of asset.tags) {
        stats[tag] = (stats[tag] || 0) + 1;
      }
    }
  }
  return stats;
}
function createFilterChip(label, count, onClick) {
  const chip = document.createElement("div");
  chip.className = "filter-button";
  chip.innerHTML = `${label}<span class="count">${count}</span>`;
  chip.addEventListener("click", onClick);
  return chip;
}
function createAssetHeader(asset) {
  const header = document.createElement("div");
  header.className = "asset-header";
  const icon = document.createElement("span");
  icon.className = "asset-icon";
  icon.innerHTML = getAssetIcon(asset);
  const name = document.createElement("span");
  name.className = "asset-name";
  name.textContent = asset.name || asset.id;
  const typeBadge = document.createElement("span");
  typeBadge.className = "asset-type-badge";
  typeBadge.textContent = asset.type;
  header.appendChild(icon);
  header.appendChild(name);
  header.appendChild(typeBadge);
  return header;
}
function createAssetDetails(asset) {
  const details = document.createElement("div");
  details.className = "asset-details";
  addAssetRow(details, "id", asset.id);
  if (asset.url) {
    const urlValue = document.createElement("a");
    urlValue.className = "asset-link";
    urlValue.href = asset.url;
    urlValue.target = "_blank";
    urlValue.textContent = asset.url;
    addAssetRowElement(details, "url", urlValue);
  }
  if (asset.loaded) {
    addAssetRow(details, "loaded", "Yes");
  }
  return details;
}
function createAssetTags(asset) {
  if (!asset.tags || asset.tags.length === 0) {
    return null;
  }
  const tagsContainer = document.createElement("div");
  tagsContainer.className = "asset-tags";
  for (const tag of asset.tags) {
    const tagEl = document.createElement("span");
    tagEl.className = "asset-tag";
    tagEl.textContent = tag;
    tagsContainer.appendChild(tagEl);
  }
  return tagsContainer;
}
function createAssetConfig(asset, createDataGrid) {
  if (!asset.config || Object.keys(asset.config).length === 0) {
    return null;
  }
  const configSection = document.createElement("div");
  configSection.className = "asset-config";
  const configTitle = document.createElement("div");
  configTitle.className = "config-title";
  configTitle.textContent = "Config";
  configSection.appendChild(configTitle);
  configSection.appendChild(createDataGrid(asset.config));
  return configSection;
}
function createAssetCard(asset, createDataGrid, hasActiveSearch = false) {
  const card = document.createElement("div");
  card.className = "asset-card";
  const header = createAssetHeader(asset);
  card.appendChild(header);
  const detailsContainer = document.createElement("div");
  const isCollapsed = !hasActiveSearch;
  detailsContainer.style.display = hasActiveSearch ? "block" : "none";
  if (isCollapsed) {
    header.classList.add("collapsed");
    card.classList.add("collapsed");
  }
  detailsContainer.appendChild(createAssetDetails(asset));
  const tags = createAssetTags(asset);
  if (tags) {
    detailsContainer.appendChild(tags);
  }
  const config = createAssetConfig(asset, createDataGrid);
  if (config) {
    detailsContainer.appendChild(config);
  }
  const preview = createSourcePreview(asset);
  if (preview) {
    detailsContainer.appendChild(preview);
  }
  card.appendChild(detailsContainer);
  header.style.cursor = "pointer";
  header.addEventListener("click", () => {
    const isHidden = detailsContainer.style.display === "none";
    detailsContainer.style.display = isHidden ? "block" : "none";
    header.classList.toggle("collapsed");
    card.classList.toggle("collapsed");
  });
  return card;
}
function addAssetRow(container2, label, value) {
  const labelEl = document.createElement("div");
  labelEl.className = "asset-label";
  labelEl.textContent = label;
  const valueEl = document.createElement("div");
  valueEl.className = "asset-value";
  valueEl.textContent = value;
  container2.appendChild(labelEl);
  container2.appendChild(valueEl);
}
function addAssetRowElement(container2, label, element) {
  const labelEl = document.createElement("div");
  labelEl.className = "asset-label";
  labelEl.textContent = label;
  const valueEl = document.createElement("div");
  valueEl.className = "asset-value";
  valueEl.appendChild(element);
  container2.appendChild(labelEl);
  container2.appendChild(valueEl);
}
const ASSET_ICONS = {
  image: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>',
  audio: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>',
  font: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line></svg>',
  shader: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>',
  scene: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m22.7 19-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"></path></svg>',
  script: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
  data: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>',
  default: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>'
};
const ASSET_ICON_PATTERNS = [
  { keywords: ["texture", "image", "sprite"], key: "image" },
  { keywords: ["audio", "sound", "music"], key: "audio" },
  { keywords: ["font"], key: "font" },
  { keywords: ["shader"], key: "shader" },
  { keywords: ["scene"], key: "scene" },
  { keywords: ["script"], key: "script" },
  { keywords: ["data", "json"], key: "data" }
];
function getAssetIcon(asset) {
  var _a;
  const type = ((_a = asset.type) == null ? void 0 : _a.toLowerCase()) || "";
  for (const { keywords, key } of ASSET_ICON_PATTERNS) {
    if (keywords.some((keyword) => type.includes(keyword))) {
      return ASSET_ICONS[key];
    }
  }
  return ASSET_ICONS.default;
}
function getImageSrc(source) {
  if (source instanceof HTMLImageElement) {
    return source.src;
  }
  if (source instanceof HTMLCanvasElement) {
    return source.toDataURL();
  }
  return null;
}
function createSourcePreview(asset) {
  if (asset.type === "audio") {
    return createAudioPreview(asset);
  }
  const source = asset.source;
  const src = getImageSrc(source);
  if (!src) {
    return null;
  }
  const preview = document.createElement("div");
  preview.className = "asset-preview";
  const img = document.createElement("img");
  img.src = src;
  img.alt = asset.name || asset.id;
  preview.appendChild(img);
  return preview;
}
function createAudioPreview(asset) {
  const source = asset.source;
  let audioSrc = null;
  if (source instanceof HTMLAudioElement) {
    audioSrc = source.src;
  } else if (asset.url) {
    audioSrc = asset.url;
  }
  if (!audioSrc) {
    return null;
  }
  const preview = document.createElement("div");
  preview.className = "asset-preview";
  const audio = document.createElement("audio");
  audio.controls = true;
  audio.preload = "metadata";
  audio.src = audioSrc;
  audio.setAttribute("controlsList", "nodownload");
  preview.appendChild(audio);
  return preview;
}
customElements.define("manifest-inspector", ManifestInspector);
PerkyExplorerDetails.registerInspector(ManifestInspector);
const customStyles$2 = `
    .bindings-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 8px;
    }

    .bindings-count {
        font-size: 11px;
        color: var(--fg-muted);
    }

    .bindings-count strong {
        color: var(--fg-primary);
    }

    .view-toggle {
        display: flex;
        gap: 4px;
    }

    .view-btn {
        background: var(--bg-hover);
        border: none;
        border-radius: 4px;
        padding: 4px 8px;
        font-size: 10px;
        color: var(--fg-muted);
        cursor: pointer;
        transition: all 0.15s;
    }

    .view-btn:hover {
        background: var(--bg-primary);
        color: var(--fg-secondary);
    }

    .view-btn.active {
        background: var(--accent);
        color: var(--bg-primary);
    }

    .bindings-list {
        display: flex;
        flex-direction: column;
        gap: 6px;
    }

    .binding-group {
        margin-bottom: 8px;
    }

    .group-header {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 4px 0;
        border-bottom: 1px solid var(--border);
        margin-bottom: 6px;
    }

    .group-name {
        font-size: 10px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        color: var(--fg-muted);
        flex: 1;
    }

    .group-count {
        font-size: 9px;
        background: var(--bg-hover);
        padding: 2px 6px;
        border-radius: 8px;
        color: var(--fg-secondary);
    }

    .binding-card {
        background: var(--bg-hover);
        border-radius: 4px;
        padding: 8px;
        display: flex;
        flex-direction: column;
        gap: 6px;
    }

    .binding-row {
        display: flex;
        align-items: center;
        gap: 8px;
    }


    .binding-input {
        flex: 1;
        display: flex;
        align-items: center;
        gap: 4px;
    }

    .device-badge {
        font-size: 9px;
        background: var(--bg-primary);
        padding: 2px 6px;
        border-radius: 4px;
        color: var(--fg-muted);
    }

    .control-name {
        font-size: 11px;
        font-weight: 600;
        color: var(--fg-primary);
        font-family: var(--font-mono);
    }

    .binding-arrow {
        color: var(--fg-muted);
        font-size: 10px;
    }

    .binding-action {
        display: flex;
        align-items: center;
        gap: 4px;
    }

    .action-name {
        font-size: 11px;
        color: var(--accent);
        font-weight: 500;
    }

    .controller-badge {
        font-size: 9px;
        background: var(--status-warning);
        color: var(--bg-primary);
        padding: 2px 6px;
        border-radius: 4px;
    }

    .event-badge {
        font-size: 9px;
        padding: 2px 6px;
        border-radius: 4px;
    }

    .event-badge.pressed {
        background: var(--status-started);
        color: var(--bg-primary);
    }

    .event-badge.released {
        background: var(--status-stopped);
        color: var(--bg-primary);
    }

    .combo-controls {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        margin-left: 28px;
    }

    .combo-control {
        display: flex;
        align-items: center;
        gap: 4px;
        background: var(--bg-primary);
        padding: 3px 6px;
        border-radius: 4px;
        font-size: 10px;
    }

    .combo-control .device-badge {
        font-size: 8px;
        padding: 1px 4px;
    }

    .combo-control .control-name {
        font-size: 10px;
    }

    .combo-plus {
        color: var(--fg-muted);
        font-size: 10px;
    }

    .empty-message {
        color: var(--fg-muted);
        font-size: 11px;
        font-style: italic;
        text-align: center;
        padding: 16px;
    }
`;
class InputBinderInspector extends BaseInspector {
  constructor() {
    super(customStyles$2);
    __privateAdd(this, _InputBinderInspector_instances);
    __privateAdd(this, _viewMode, "action");
    __privateAdd(this, _containerEl, null);
    this.buildDOM();
  }
  static matches(module) {
    return module instanceof InputBinder;
  }
  buildDOM() {
    super.buildDOM();
    __privateSet(this, _containerEl, document.createElement("div"));
    this.shadowRoot.insertBefore(__privateGet(this, _containerEl), this.gridEl);
    this.gridEl.style.display = "none";
  }
  onModuleSet(module) {
    if (module) {
      __privateMethod(this, _InputBinderInspector_instances, update_fn7).call(this);
    }
  }
}
_viewMode = new WeakMap();
_containerEl = new WeakMap();
_InputBinderInspector_instances = new WeakSet();
update_fn7 = function() {
  if (!this.module) {
    return;
  }
  __privateGet(this, _containerEl).innerHTML = "";
  const bindings = this.module.getAllBindings();
  const header = __privateMethod(this, _InputBinderInspector_instances, createHeader_fn2).call(this, bindings.length);
  __privateGet(this, _containerEl).appendChild(header);
  if (bindings.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-message";
    empty.textContent = "No input bindings defined";
    __privateGet(this, _containerEl).appendChild(empty);
    return;
  }
  const list = document.createElement("div");
  list.className = "bindings-list";
  if (__privateGet(this, _viewMode) === "action") {
    renderByAction(list, bindings);
  } else {
    renderByDevice(list, bindings);
  }
  __privateGet(this, _containerEl).appendChild(list);
};
createHeader_fn2 = function(count) {
  const header = document.createElement("div");
  header.className = "bindings-header";
  const countEl = document.createElement("div");
  countEl.className = "bindings-count";
  countEl.innerHTML = `<strong>${count}</strong> binding${count === 1 ? "" : "s"}`;
  const toggle = document.createElement("div");
  toggle.className = "view-toggle";
  const actionBtn = document.createElement("button");
  actionBtn.className = `view-btn ${__privateGet(this, _viewMode) === "action" ? "active" : ""}`;
  actionBtn.textContent = "By Action";
  actionBtn.addEventListener("click", () => {
    __privateSet(this, _viewMode, "action");
    __privateMethod(this, _InputBinderInspector_instances, update_fn7).call(this);
  });
  const deviceBtn = document.createElement("button");
  deviceBtn.className = `view-btn ${__privateGet(this, _viewMode) === "device" ? "active" : ""}`;
  deviceBtn.textContent = "By Device";
  deviceBtn.addEventListener("click", () => {
    __privateSet(this, _viewMode, "device");
    __privateMethod(this, _InputBinderInspector_instances, update_fn7).call(this);
  });
  toggle.appendChild(actionBtn);
  toggle.appendChild(deviceBtn);
  header.appendChild(countEl);
  header.appendChild(toggle);
  return header;
};
function renderByAction(container2, bindings) {
  const groups = /* @__PURE__ */ new Map();
  for (const binding of bindings) {
    const key = binding.actionName;
    if (!groups.has(key)) {
      groups.set(key, []);
    }
    groups.get(key).push(binding);
  }
  for (const [actionName, groupBindings] of groups) {
    const group = createGroup(actionName, groupBindings);
    container2.appendChild(group);
  }
}
function renderByDevice(container2, bindings) {
  const groups = /* @__PURE__ */ new Map();
  for (const binding of bindings) {
    const key = binding.deviceName;
    if (!groups.has(key)) {
      groups.set(key, []);
    }
    groups.get(key).push(binding);
  }
  for (const [deviceName, groupBindings] of groups) {
    const group = createGroup(deviceName, groupBindings);
    container2.appendChild(group);
  }
}
function createGroup(name, bindings) {
  const group = document.createElement("div");
  group.className = "binding-group";
  const header = document.createElement("div");
  header.className = "group-header";
  const nameEl = document.createElement("span");
  nameEl.className = "group-name";
  nameEl.textContent = name;
  const count = document.createElement("span");
  count.className = "group-count";
  count.textContent = bindings.length;
  header.appendChild(nameEl);
  header.appendChild(count);
  group.appendChild(header);
  for (const binding of bindings) {
    group.appendChild(createBindingCard(binding));
  }
  return group;
}
function createBindingCard(binding) {
  const card = document.createElement("div");
  card.className = "binding-card";
  const isComposite = binding instanceof CompositeBinding;
  const row = document.createElement("div");
  row.className = "binding-row";
  const input = document.createElement("div");
  input.className = "binding-input";
  if (isComposite) {
    const comboLabel = document.createElement("span");
    comboLabel.className = "control-name";
    comboLabel.textContent = "Combo";
    input.appendChild(comboLabel);
  } else {
    const device = document.createElement("span");
    device.className = "device-badge";
    device.textContent = binding.deviceName;
    const control = document.createElement("span");
    control.className = "control-name";
    control.textContent = binding.controlName;
    input.appendChild(device);
    input.appendChild(control);
  }
  const arrow = document.createElement("span");
  arrow.className = "binding-arrow";
  arrow.textContent = "→";
  const action = document.createElement("div");
  action.className = "binding-action";
  const actionName = document.createElement("span");
  actionName.className = "action-name";
  actionName.textContent = binding.actionName;
  action.appendChild(actionName);
  if (binding.controllerName) {
    const controller = document.createElement("span");
    controller.className = "controller-badge";
    controller.textContent = binding.controllerName;
    action.appendChild(controller);
  }
  const eventBadge = document.createElement("span");
  eventBadge.className = `event-badge ${binding.eventType}`;
  eventBadge.textContent = binding.eventType;
  action.appendChild(eventBadge);
  row.appendChild(input);
  row.appendChild(arrow);
  row.appendChild(action);
  card.appendChild(row);
  if (isComposite && binding.controls) {
    const comboControls = document.createElement("div");
    comboControls.className = "combo-controls";
    binding.controls.forEach((ctrl, index) => {
      if (index > 0) {
        const plus = document.createElement("span");
        plus.className = "combo-plus";
        plus.textContent = "+";
        comboControls.appendChild(plus);
      }
      const control = document.createElement("div");
      control.className = "combo-control";
      const device = document.createElement("span");
      device.className = "device-badge";
      device.textContent = ctrl.deviceName;
      const name = document.createElement("span");
      name.className = "control-name";
      name.textContent = ctrl.controlName;
      control.appendChild(device);
      control.appendChild(name);
      comboControls.appendChild(control);
    });
    card.appendChild(comboControls);
  }
  return card;
}
customElements.define("input-binder-inspector", InputBinderInspector);
PerkyExplorerDetails.registerInspector(InputBinderInspector);
const ICONS = {
  inspect: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',
  clipboard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>',
  volume: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>',
  volumeMuted: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>',
  audio: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>'
};
const customStyles$1 = `
    .volume-controls {
        grid-column: 1 / -1;
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-top: 8px;
        padding-top: 8px;
        border-top: 1px solid var(--border);
    }

    .volume-icon {
        width: 14px;
        height: 14px;
        display: inline-block;
        vertical-align: middle;
        margin-right: 4px;
    }
`;
class AudioSystemInspector extends BaseInspector {
  constructor() {
    super(customStyles$1);
    __privateAdd(this, _AudioSystemInspector_instances);
    __privateAdd(this, _unlockedValueEl, null);
    __privateAdd(this, _channelsValueEl, null);
    __privateAdd(this, _volumeInput, null);
    __privateAdd(this, _unlockBtn, null);
    this.buildDOM();
  }
  static matches(module) {
    return module instanceof AudioSystem;
  }
  onModuleSet(module) {
    if (module) {
      __privateMethod(this, _AudioSystemInspector_instances, bindEvents_fn4).call(this);
      __privateMethod(this, _AudioSystemInspector_instances, updateAll_fn3).call(this);
    }
  }
  buildDOM() {
    super.buildDOM();
    __privateSet(this, _unlockedValueEl, this.addRow("unlocked", "false"));
    __privateSet(this, _channelsValueEl, this.addRow("channels", "0"));
    const controlsEl = document.createElement("div");
    controlsEl.className = "volume-controls";
    __privateSet(this, _volumeInput, document.createElement("slider-input"));
    __privateGet(this, _volumeInput).setAttribute("label", "Master Volume");
    __privateGet(this, _volumeInput).setAttribute("min", "0");
    __privateGet(this, _volumeInput).setAttribute("max", "1");
    __privateGet(this, _volumeInput).setAttribute("step", "0.01");
    __privateGet(this, _volumeInput).setAttribute("value", "1");
    __privateGet(this, _volumeInput).addEventListener("change", (e) => __privateMethod(this, _AudioSystemInspector_instances, handleVolumeChange_fn).call(this, e));
    controlsEl.appendChild(__privateGet(this, _volumeInput));
    this.gridEl.appendChild(controlsEl);
    __privateSet(this, _unlockBtn, this.createButton("", "Unlock Audio", () => __privateMethod(this, _AudioSystemInspector_instances, handleUnlock_fn).call(this)));
    __privateGet(this, _unlockBtn).innerHTML = `<span class="volume-icon">${ICONS.audio}</span> Unlock Audio`;
    this.actionsEl.appendChild(__privateGet(this, _unlockBtn));
  }
}
_unlockedValueEl = new WeakMap();
_channelsValueEl = new WeakMap();
_volumeInput = new WeakMap();
_unlockBtn = new WeakMap();
_AudioSystemInspector_instances = new WeakSet();
handleVolumeChange_fn = function(e) {
  if (!this.module) {
    return;
  }
  this.module.setVolume(e.detail.value);
};
handleUnlock_fn = function() {
  if (!this.module) {
    return;
  }
  this.module.unlock();
};
bindEvents_fn4 = function() {
  if (!this.module) {
    return;
  }
  this.listenTo(this.module, "audio:unlocked", () => __privateMethod(this, _AudioSystemInspector_instances, updateUnlocked_fn).call(this));
  this.listenTo(this.module, "volume:changed", (volume) => __privateMethod(this, _AudioSystemInspector_instances, updateVolume_fn).call(this, volume));
  this.listenTo(this.module, "child:added", () => __privateMethod(this, _AudioSystemInspector_instances, updateChannels_fn).call(this));
  this.listenTo(this.module, "child:removed", () => __privateMethod(this, _AudioSystemInspector_instances, updateChannels_fn).call(this));
};
updateAll_fn3 = function() {
  var _a;
  __privateMethod(this, _AudioSystemInspector_instances, updateUnlocked_fn).call(this);
  __privateMethod(this, _AudioSystemInspector_instances, updateChannels_fn).call(this);
  __privateMethod(this, _AudioSystemInspector_instances, updateVolume_fn).call(this, ((_a = this.module) == null ? void 0 : _a.masterVolume) ?? 1);
};
updateUnlocked_fn = function() {
  if (!this.module) {
    return;
  }
  const unlocked = this.module.unlocked;
  __privateGet(this, _unlockedValueEl).textContent = unlocked ? "true" : "false";
  __privateGet(this, _unlockedValueEl).className = `inspector-value ${unlocked ? "accent" : ""}`;
  if (__privateGet(this, _unlockBtn)) {
    if (unlocked) {
      __privateGet(this, _unlockBtn).style.display = "none";
    } else {
      __privateGet(this, _unlockBtn).style.display = "";
      __privateGet(this, _unlockBtn).classList.add("primary");
    }
  }
};
updateChannels_fn = function() {
  if (!this.module) {
    return;
  }
  const channels = this.module.listChannels();
  __privateGet(this, _channelsValueEl).textContent = `${channels.length} (${channels.join(", ")})`;
};
updateVolume_fn = function(volume) {
  if (__privateGet(this, _volumeInput)) {
    __privateGet(this, _volumeInput).setValue(volume);
  }
};
customElements.define("audio-system-inspector", AudioSystemInspector);
PerkyExplorerDetails.registerInspector(AudioSystemInspector);
const customStyles = `
    .volume-controls {
        grid-column: 1 / -1;
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-top: 8px;
        padding-top: 8px;
        border-top: 1px solid var(--border);
    }

    .volume-icon {
        width: 14px;
        height: 14px;
        display: inline-block;
        vertical-align: middle;
        margin-right: 4px;
    }
`;
class AudioChannelInspector extends BaseInspector {
  constructor() {
    super(customStyles);
    __privateAdd(this, _AudioChannelInspector_instances);
    __privateAdd(this, _mutedValueEl, null);
    __privateAdd(this, _sourcesValueEl, null);
    __privateAdd(this, _volumeInput2, null);
    __privateAdd(this, _muteBtn, null);
    this.buildDOM();
  }
  static matches(module) {
    return module instanceof AudioChannel;
  }
  onModuleSet(module) {
    if (module) {
      __privateMethod(this, _AudioChannelInspector_instances, bindEvents_fn5).call(this);
      __privateMethod(this, _AudioChannelInspector_instances, updateAll_fn4).call(this);
    }
  }
  buildDOM() {
    super.buildDOM();
    __privateSet(this, _mutedValueEl, this.addRow("muted", "false"));
    __privateSet(this, _sourcesValueEl, this.addRow("sources", "0"));
    const controlsEl = document.createElement("div");
    controlsEl.className = "volume-controls";
    __privateSet(this, _volumeInput2, document.createElement("slider-input"));
    __privateGet(this, _volumeInput2).setAttribute("label", "Volume");
    __privateGet(this, _volumeInput2).setAttribute("min", "0");
    __privateGet(this, _volumeInput2).setAttribute("max", "1");
    __privateGet(this, _volumeInput2).setAttribute("step", "0.01");
    __privateGet(this, _volumeInput2).setAttribute("value", "1");
    __privateGet(this, _volumeInput2).addEventListener("change", (e) => __privateMethod(this, _AudioChannelInspector_instances, handleVolumeChange_fn2).call(this, e));
    controlsEl.appendChild(__privateGet(this, _volumeInput2));
    this.gridEl.appendChild(controlsEl);
    __privateSet(this, _muteBtn, this.createButton("", "Mute", () => __privateMethod(this, _AudioChannelInspector_instances, handleToggleMute_fn).call(this)));
    __privateGet(this, _muteBtn).innerHTML = `<span class="volume-icon">${ICONS.volumeMuted}</span> Mute`;
    this.actionsEl.appendChild(__privateGet(this, _muteBtn));
  }
}
_mutedValueEl = new WeakMap();
_sourcesValueEl = new WeakMap();
_volumeInput2 = new WeakMap();
_muteBtn = new WeakMap();
_AudioChannelInspector_instances = new WeakSet();
handleVolumeChange_fn2 = function(e) {
  if (!this.module) {
    return;
  }
  this.module.setVolume(e.detail.value);
};
handleToggleMute_fn = function() {
  if (!this.module) {
    return;
  }
  this.module.toggleMute();
};
bindEvents_fn5 = function() {
  if (!this.module) {
    return;
  }
  this.listenTo(this.module, "volume:changed", (volume) => __privateMethod(this, _AudioChannelInspector_instances, updateVolume_fn2).call(this, volume));
  this.listenTo(this.module, "muted", () => __privateMethod(this, _AudioChannelInspector_instances, updateMuted_fn).call(this));
  this.listenTo(this.module, "unmuted", () => __privateMethod(this, _AudioChannelInspector_instances, updateMuted_fn).call(this));
  this.listenTo(this.module, "source:added", () => __privateMethod(this, _AudioChannelInspector_instances, updateSources_fn).call(this));
  this.listenTo(this.module, "source:removed", () => __privateMethod(this, _AudioChannelInspector_instances, updateSources_fn).call(this));
};
updateAll_fn4 = function() {
  var _a;
  __privateMethod(this, _AudioChannelInspector_instances, updateMuted_fn).call(this);
  __privateMethod(this, _AudioChannelInspector_instances, updateSources_fn).call(this);
  __privateMethod(this, _AudioChannelInspector_instances, updateVolume_fn2).call(this, ((_a = this.module) == null ? void 0 : _a.volume) ?? 1);
};
updateMuted_fn = function() {
  if (!this.module) {
    return;
  }
  const muted = this.module.muted;
  __privateGet(this, _mutedValueEl).textContent = muted ? "true" : "false";
  __privateGet(this, _mutedValueEl).className = `inspector-value ${muted ? "accent" : ""}`;
  if (muted) {
    __privateGet(this, _muteBtn).innerHTML = `<span class="volume-icon">${ICONS.volume}</span> Unmute`;
    __privateGet(this, _muteBtn).classList.add("primary");
  } else {
    __privateGet(this, _muteBtn).innerHTML = `<span class="volume-icon">${ICONS.volumeMuted}</span> Mute`;
    __privateGet(this, _muteBtn).classList.remove("primary");
  }
};
updateSources_fn = function() {
  if (!this.module) {
    return;
  }
  const count = this.module.sourceCount;
  __privateGet(this, _sourcesValueEl).textContent = count;
  __privateGet(this, _sourcesValueEl).className = `inspector-value ${count > 0 ? "accent" : ""}`;
};
updateVolume_fn2 = function(volume) {
  if (__privateGet(this, _volumeInput2)) {
    __privateGet(this, _volumeInput2).setValue(volume);
  }
};
customElements.define("audio-channel-inspector", AudioChannelInspector);
PerkyExplorerDetails.registerInspector(AudioChannelInspector);
class ExplorerContextMenu extends BaseEditorComponent {
  constructor() {
    super();
    __privateAdd(this, _ExplorerContextMenu_instances);
    __privateAdd(this, _menuEl, null);
    __privateAdd(this, _actions, []);
    __privateAdd(this, _module2, null);
    __privateAdd(this, _handleOutsideClick, (e) => {
      if (e.type === "contextmenu") {
        e.preventDefault();
      }
      this.hide();
    });
    __privateAdd(this, _handleKeyDown, (e) => {
      if (e.key === "Escape") {
        this.hide();
      }
    });
    __privateMethod(this, _ExplorerContextMenu_instances, buildDOM_fn4).call(this);
  }
  show(actions, module, position) {
    __privateSet(this, _actions, actions);
    __privateSet(this, _module2, module);
    __privateMethod(this, _ExplorerContextMenu_instances, renderActions_fn).call(this);
    __privateMethod(this, _ExplorerContextMenu_instances, positionMenu_fn).call(this, position.x, position.y);
    this.style.display = "block";
    document.addEventListener("click", __privateGet(this, _handleOutsideClick));
    document.addEventListener("contextmenu", __privateGet(this, _handleOutsideClick));
    document.addEventListener("keydown", __privateGet(this, _handleKeyDown));
  }
  hide() {
    this.style.display = "none";
    __privateSet(this, _actions, []);
    __privateSet(this, _module2, null);
    document.removeEventListener("click", __privateGet(this, _handleOutsideClick));
    document.removeEventListener("contextmenu", __privateGet(this, _handleOutsideClick));
    document.removeEventListener("keydown", __privateGet(this, _handleKeyDown));
  }
}
_menuEl = new WeakMap();
_actions = new WeakMap();
_module2 = new WeakMap();
_ExplorerContextMenu_instances = new WeakSet();
buildDOM_fn4 = function() {
  const style = document.createElement("style");
  style.textContent = menuStyles;
  this.shadowRoot.appendChild(style);
  __privateSet(this, _menuEl, document.createElement("div"));
  __privateGet(this, _menuEl).className = "context-menu";
  __privateGet(this, _menuEl).addEventListener("contextmenu", (e) => {
    e.preventDefault();
    e.stopPropagation();
  });
  this.shadowRoot.appendChild(__privateGet(this, _menuEl));
  this.style.display = "none";
};
renderActions_fn = function() {
  __privateGet(this, _menuEl).innerHTML = "";
  for (const action of __privateGet(this, _actions)) {
    if (action.separator) {
      const separator = document.createElement("div");
      separator.className = "context-menu-separator";
      __privateGet(this, _menuEl).appendChild(separator);
      continue;
    }
    const item = document.createElement("div");
    item.className = "context-menu-item";
    if (action.disabled) {
      item.classList.add("disabled");
    }
    if (action.danger) {
      item.classList.add("danger");
    }
    const icon = document.createElement("span");
    icon.className = "context-menu-icon";
    if (action.iconSvg) {
      icon.innerHTML = action.iconSvg;
    } else {
      icon.textContent = action.icon || "";
    }
    const label = document.createElement("span");
    label.className = "context-menu-label";
    label.textContent = action.label;
    item.appendChild(icon);
    item.appendChild(label);
    if (!action.disabled) {
      item.addEventListener("click", (e) => {
        e.stopPropagation();
        const module = __privateGet(this, _module2);
        this.hide();
        action.action(module);
      });
    }
    __privateGet(this, _menuEl).appendChild(item);
  }
};
positionMenu_fn = function(x, y) {
  const menuRect = __privateGet(this, _menuEl).getBoundingClientRect();
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  let finalX = x;
  let finalY = y;
  if (x + menuRect.width > viewportWidth) {
    finalX = viewportWidth - menuRect.width - 10;
  }
  if (y + menuRect.height > viewportHeight) {
    finalY = viewportHeight - menuRect.height - 10;
  }
  this.style.left = `${Math.max(10, finalX)}px`;
  this.style.top = `${Math.max(10, finalY)}px`;
};
_handleOutsideClick = new WeakMap();
_handleKeyDown = new WeakMap();
const menuStyles = `
    :host {
        ${cssVariables}
        position: fixed;
        z-index: 10000;
    }

    .context-menu {
        background: var(--bg-primary);
        border: 1px solid var(--border);
        border-radius: 4px;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);
        min-width: 140px;
        padding: 3px 0;
        font-family: var(--font-mono);
        font-size: 11px;
    }

    .context-menu-item {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 5px 10px;
        color: var(--fg-primary);
        cursor: pointer;
        transition: background 0.1s;
    }

    .context-menu-item:hover {
        background: var(--bg-hover);
    }

    .context-menu-item.disabled {
        color: var(--fg-muted);
        cursor: not-allowed;
    }

    .context-menu-item.disabled:hover {
        background: transparent;
    }

    .context-menu-item.danger {
        color: var(--status-stopped);
    }

    .context-menu-item.danger:hover {
        background: rgba(248, 113, 113, 0.15);
    }

    .context-menu-icon {
        width: 14px;
        text-align: center;
        flex-shrink: 0;
        font-size: 10px;
    }

    .context-menu-label {
        flex: 1;
    }

    .context-menu-separator {
        height: 1px;
        background: var(--border);
        margin: 3px 6px;
    }
`;
customElements.define("explorer-context-menu", ExplorerContextMenu);
const actionProviders = [];
function registerActionProvider(provider) {
  actionProviders.push(provider);
}
function getActionsForModule(module, callbacks = {}) {
  const actions = [];
  addDefaultActions(actions, module, callbacks);
  for (const provider of actionProviders) {
    if (provider.matches(module)) {
      const providerActions = provider.getActions(module, callbacks);
      if (providerActions.length > 0) {
        actions.push({ separator: true });
        actions.push(...providerActions);
      }
    }
  }
  return actions;
}
function addDefaultActions(actions, module, callbacks) {
  const isStatic = module.$status === "static";
  const isStarted = module.$status === "started";
  const isDisposed = module.$status === "disposed";
  actions.push({
    iconSvg: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle></svg>',
    label: "Focus",
    action: () => {
      var _a;
      return (_a = callbacks.onFocus) == null ? void 0 : _a.call(callbacks, module);
    }
  });
  actions.push({
    iconSvg: ICONS.inspect,
    label: "Inspect",
    action: () => {
      var _a;
      logger.info(module);
      (_a = callbacks.onInspect) == null ? void 0 : _a.call(callbacks);
    }
  });
  const selector = buildSelector(module);
  actions.push({
    iconSvg: ICONS.clipboard,
    label: "Copy selector",
    action: () => navigator.clipboard.writeText(selector)
  });
  actions.push({ separator: true });
  if (isStarted) {
    actions.push({
      icon: "⏹",
      label: "Stop",
      disabled: isStatic,
      action: () => module.stop()
    });
  } else {
    actions.push({
      icon: "▶",
      label: "Start",
      disabled: isStatic || isDisposed,
      action: () => module.start()
    });
  }
  actions.push({
    icon: "🗑",
    label: "Dispose",
    danger: true,
    disabled: isDisposed,
    action: () => module.dispose()
  });
}
registerActionProvider({
  matches: (module) => module instanceof GameLoop,
  getActions: (module) => {
    const isPaused = module.paused;
    const isStarted = module.started;
    return [
      {
        icon: isPaused ? "▶" : "⏸",
        label: isPaused ? "Resume" : "Pause",
        disabled: !isStarted,
        action: () => {
          if (isPaused) {
            module.resume();
          } else {
            module.pause();
          }
        }
      }
    ];
  }
});
function buildSelector(module) {
  const parts = [];
  let current = module;
  while (current && current.host) {
    parts.unshift(`#${current.$id}`);
    current = current.host;
  }
  return parts.join(" ");
}
class PerkyExplorer extends BaseEditorComponent {
  constructor() {
    super(...arguments);
    __privateAdd(this, _PerkyExplorer_instances);
    __privateAdd(this, _module3, null);
    __privateAdd(this, _isMinimized, false);
    __privateAdd(this, _isCollapsed, false);
    __privateAdd(this, _sceneTreeMode, false);
    __privateAdd(this, _focusMode, false);
    __privateAdd(this, _embedded, false);
    __privateAdd(this, _containerEl2, null);
    __privateAdd(this, _sidebarEl, null);
    __privateAdd(this, _explorerEl, null);
    __privateAdd(this, _minimizedEl, null);
    __privateAdd(this, _headerEl2, null);
    __privateAdd(this, _treeEl2, null);
    __privateAdd(this, _rootNode2, null);
    __privateAdd(this, _detailsEl2, null);
    __privateAdd(this, _collapseBtnEl, null);
    __privateAdd(this, _minimizeBtnEl, null);
    __privateAdd(this, _selectedModule, null);
    __privateAdd(this, _rootModule, null);
    __privateAdd(this, _contextMenuEl, null);
  }
  connectedCallback() {
    __privateMethod(this, _PerkyExplorer_instances, buildDOM_fn5).call(this);
  }
  disconnectedCallback() {
    if (__privateGet(this, _contextMenuEl) && __privateGet(this, _contextMenuEl).parentNode) {
      __privateGet(this, _contextMenuEl).parentNode.removeChild(__privateGet(this, _contextMenuEl));
    }
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) {
      return;
    }
    if (name === "embedded") {
      __privateSet(this, _embedded, newValue !== null);
      __privateMethod(this, _PerkyExplorer_instances, updateEmbeddedMode_fn).call(this);
    }
  }
  get embedded() {
    return __privateGet(this, _embedded);
  }
  set embedded(value) {
    __privateSet(this, _embedded, value);
    if (value) {
      this.setAttribute("embedded", "");
    } else {
      this.removeAttribute("embedded");
    }
    __privateMethod(this, _PerkyExplorer_instances, updateEmbeddedMode_fn).call(this);
  }
  setModule(module) {
    __privateSet(this, _module3, module);
    __privateSet(this, _rootModule, module);
    __privateSet(this, _selectedModule, null);
    if (__privateGet(this, _rootNode2)) {
      __privateGet(this, _rootNode2).setModule(module, 0);
      if (module) {
        __privateGet(this, _rootNode2).setExpanded(true);
      }
    }
    __privateMethod(this, _PerkyExplorer_instances, updateTreeVisibility_fn).call(this);
    __privateMethod(this, _PerkyExplorer_instances, updateDetails_fn2).call(this);
    __privateMethod(this, _PerkyExplorer_instances, updateHeaderControls_fn).call(this);
    __privateMethod(this, _PerkyExplorer_instances, closeSceneTree_fn).call(this);
  }
  getModule() {
    return __privateGet(this, _module3);
  }
  focusModule(module) {
    if (!module) {
      return;
    }
    __privateSet(this, _rootModule, module);
    __privateGet(this, _rootNode2).setModule(module, 0);
    __privateGet(this, _rootNode2).setExpanded(true);
    __privateMethod(this, _PerkyExplorer_instances, updateHeaderControls_fn).call(this);
    if (__privateGet(this, _selectedModule)) {
      const node = __privateGet(this, _rootNode2).findNode((n) => n.getModule() === __privateGet(this, _selectedModule));
      if (node) {
        node.setSelected(true);
      } else {
        __privateMethod(this, _PerkyExplorer_instances, handleNodeSelect_fn2).call(this, module);
      }
    }
  }
}
_module3 = new WeakMap();
_isMinimized = new WeakMap();
_isCollapsed = new WeakMap();
_sceneTreeMode = new WeakMap();
_focusMode = new WeakMap();
_embedded = new WeakMap();
_containerEl2 = new WeakMap();
_sidebarEl = new WeakMap();
_explorerEl = new WeakMap();
_minimizedEl = new WeakMap();
_headerEl2 = new WeakMap();
_treeEl2 = new WeakMap();
_rootNode2 = new WeakMap();
_detailsEl2 = new WeakMap();
_collapseBtnEl = new WeakMap();
_minimizeBtnEl = new WeakMap();
_selectedModule = new WeakMap();
_rootModule = new WeakMap();
_contextMenuEl = new WeakMap();
_PerkyExplorer_instances = new WeakSet();
buildDOM_fn5 = function() {
  const style = document.createElement("style");
  style.textContent = explorerStyles + containerStyles;
  this.shadowRoot.appendChild(style);
  __privateSet(this, _containerEl2, document.createElement("div"));
  __privateGet(this, _containerEl2).className = "explorer-container";
  __privateSet(this, _minimizedEl, __privateMethod(this, _PerkyExplorer_instances, createMinimizedView_fn).call(this));
  __privateSet(this, _explorerEl, __privateMethod(this, _PerkyExplorer_instances, createExpandedView_fn).call(this));
  __privateSet(this, _sidebarEl, __privateMethod(this, _PerkyExplorer_instances, createSceneTreeView_fn).call(this));
  __privateGet(this, _containerEl2).appendChild(__privateGet(this, _minimizedEl));
  __privateGet(this, _containerEl2).appendChild(__privateGet(this, _explorerEl));
  __privateGet(this, _containerEl2).appendChild(__privateGet(this, _sidebarEl));
  this.shadowRoot.appendChild(__privateGet(this, _containerEl2));
  __privateMethod(this, _PerkyExplorer_instances, updateViewState_fn).call(this);
  __privateMethod(this, _PerkyExplorer_instances, updateTreeVisibility_fn).call(this);
};
createMinimizedView_fn = function() {
  const container2 = document.createElement("div");
  container2.className = "explorer-minimized";
  const backButton = document.createElement("span");
  backButton.className = "explorer-back-button";
  backButton.textContent = "←";
  container2.appendChild(backButton);
  container2.addEventListener("click", () => {
    if (__privateGet(this, _sceneTreeMode)) {
      __privateMethod(this, _PerkyExplorer_instances, closeSceneTree_fn).call(this);
    } else if (__privateGet(this, _focusMode)) {
      this.focusModule(__privateGet(this, _module3));
    } else {
      __privateSet(this, _isMinimized, false);
      __privateMethod(this, _PerkyExplorer_instances, updateViewState_fn).call(this);
    }
  });
  return container2;
};
createExpandedView_fn = function() {
  const explorer = document.createElement("div");
  explorer.className = "explorer";
  __privateSet(this, _headerEl2, __privateMethod(this, _PerkyExplorer_instances, createHeader_fn3).call(this));
  __privateSet(this, _treeEl2, __privateMethod(this, _PerkyExplorer_instances, createTree_fn2).call(this));
  __privateSet(this, _detailsEl2, document.createElement("perky-explorer-details"));
  __privateGet(this, _detailsEl2).addEventListener("open:scene-tree", (e) => {
    __privateMethod(this, _PerkyExplorer_instances, openSceneTree_fn3).call(this, e.detail.content, e.detail.worldRenderer);
  });
  __privateGet(this, _detailsEl2).addEventListener("focus:module", (e) => {
    this.focusModule(e.detail.module);
  });
  explorer.appendChild(__privateGet(this, _headerEl2));
  explorer.appendChild(__privateGet(this, _treeEl2));
  explorer.appendChild(__privateGet(this, _detailsEl2));
  return explorer;
};
createSceneTreeView_fn = function() {
  const sidebar = document.createElement("scene-tree-sidebar");
  sidebar.classList.add("hidden");
  sidebar.addEventListener("sidebar:close", () => __privateMethod(this, _PerkyExplorer_instances, closeSceneTree_fn).call(this));
  sidebar.addEventListener("navigate:entity", (e) => {
    __privateMethod(this, _PerkyExplorer_instances, navigateToEntity_fn).call(this, e.detail.entity);
  });
  return sidebar;
};
createHeader_fn3 = function() {
  const header = document.createElement("div");
  header.className = "explorer-header";
  const title = document.createElement("div");
  title.className = "explorer-title";
  title.innerHTML = '<span class="explorer-title-icon">📦</span> Perky Explorer';
  const buttons = document.createElement("div");
  buttons.className = "explorer-buttons";
  const refreshBtn = document.createElement("button");
  refreshBtn.className = "explorer-btn";
  refreshBtn.textContent = "↻";
  refreshBtn.title = "Refresh";
  refreshBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    __privateMethod(this, _PerkyExplorer_instances, refresh_fn).call(this);
  });
  __privateSet(this, _collapseBtnEl, document.createElement("button"));
  __privateGet(this, _collapseBtnEl).className = "explorer-btn";
  __privateGet(this, _collapseBtnEl).textContent = "−";
  __privateGet(this, _collapseBtnEl).title = "Collapse";
  __privateGet(this, _collapseBtnEl).addEventListener("click", (e) => {
    e.stopPropagation();
    __privateMethod(this, _PerkyExplorer_instances, toggleCollapse_fn).call(this);
  });
  __privateSet(this, _minimizeBtnEl, document.createElement("button"));
  __privateGet(this, _minimizeBtnEl).className = "explorer-btn";
  __privateGet(this, _minimizeBtnEl).textContent = "◻";
  __privateGet(this, _minimizeBtnEl).title = "Minimize";
  __privateGet(this, _minimizeBtnEl).addEventListener("click", (e) => {
    e.stopPropagation();
    __privateSet(this, _isMinimized, true);
    __privateMethod(this, _PerkyExplorer_instances, updateViewState_fn).call(this);
  });
  buttons.appendChild(refreshBtn);
  buttons.appendChild(__privateGet(this, _collapseBtnEl));
  buttons.appendChild(__privateGet(this, _minimizeBtnEl));
  header.appendChild(title);
  header.appendChild(buttons);
  header.addEventListener("click", () => __privateMethod(this, _PerkyExplorer_instances, toggleCollapse_fn).call(this));
  return header;
};
createTree_fn2 = function() {
  const tree = document.createElement("div");
  tree.className = "explorer-tree";
  __privateSet(this, _rootNode2, document.createElement("perky-explorer-node"));
  __privateGet(this, _rootNode2).addEventListener("node:select", (e) => {
    __privateMethod(this, _PerkyExplorer_instances, handleNodeSelect_fn2).call(this, e.detail.module);
  });
  __privateGet(this, _rootNode2).addEventListener("node:contextmenu", (e) => {
    __privateMethod(this, _PerkyExplorer_instances, handleNodeContextMenu_fn).call(this, e.detail);
  });
  tree.appendChild(__privateGet(this, _rootNode2));
  return tree;
};
handleNodeSelect_fn2 = function(module) {
  if (__privateGet(this, _selectedModule)) {
    __privateGet(this, _rootNode2).deselectAll();
  }
  __privateSet(this, _selectedModule, module);
  const selectedNode = __privateGet(this, _rootNode2).findNode((n) => n.getModule() === module);
  if (selectedNode) {
    selectedNode.setSelected(true);
  }
  __privateMethod(this, _PerkyExplorer_instances, closeSceneTree_fn).call(this);
  __privateGet(this, _detailsEl2).setModule(module);
};
handleNodeContextMenu_fn = function(detail) {
  const { module, x, y } = detail;
  if (!module) {
    return;
  }
  __privateMethod(this, _PerkyExplorer_instances, ensureContextMenu_fn).call(this);
  const actions = getActionsForModule(module, {
    onFocus: (m) => this.focusModule(m),
    onInspect: () => this.dispatchEvent(new CustomEvent("inspect"))
  });
  __privateGet(this, _contextMenuEl).show(actions, module, { x, y });
};
ensureContextMenu_fn = function() {
  if (!__privateGet(this, _contextMenuEl)) {
    __privateSet(this, _contextMenuEl, new ExplorerContextMenu());
    document.body.appendChild(__privateGet(this, _contextMenuEl));
  }
};
updateViewState_fn = function() {
  if (__privateGet(this, _sceneTreeMode)) {
    __privateGet(this, _minimizedEl).classList.remove("hidden");
    __privateGet(this, _minimizedEl).classList.add("back-mode");
    __privateGet(this, _explorerEl).classList.add("hidden");
    __privateGet(this, _sidebarEl).classList.remove("hidden");
  } else if (__privateGet(this, _focusMode)) {
    __privateGet(this, _minimizedEl).classList.remove("hidden");
    __privateGet(this, _minimizedEl).classList.add("back-mode");
    __privateGet(this, _explorerEl).classList.remove("hidden");
    __privateGet(this, _sidebarEl).classList.add("hidden");
  } else if (__privateGet(this, _isMinimized)) {
    __privateGet(this, _minimizedEl).classList.remove("hidden");
    __privateGet(this, _minimizedEl).classList.remove("back-mode");
    __privateGet(this, _explorerEl).classList.add("hidden");
    __privateGet(this, _sidebarEl).classList.add("hidden");
  } else {
    __privateGet(this, _minimizedEl).classList.add("hidden");
    __privateGet(this, _minimizedEl).classList.remove("back-mode");
    __privateGet(this, _explorerEl).classList.remove("hidden");
    __privateGet(this, _sidebarEl).classList.add("hidden");
  }
};
toggleCollapse_fn = function() {
  __privateSet(this, _isCollapsed, !__privateGet(this, _isCollapsed));
  __privateMethod(this, _PerkyExplorer_instances, updateCollapseState_fn).call(this);
};
updateCollapseState_fn = function() {
  if (__privateGet(this, _isCollapsed)) {
    __privateGet(this, _treeEl2).classList.add("hidden");
    __privateGet(this, _detailsEl2).classList.add("hidden");
    __privateGet(this, _collapseBtnEl).textContent = "+";
    __privateGet(this, _collapseBtnEl).title = "Expand";
  } else {
    __privateGet(this, _treeEl2).classList.remove("hidden");
    __privateGet(this, _detailsEl2).classList.remove("hidden");
    __privateGet(this, _collapseBtnEl).textContent = "−";
    __privateGet(this, _collapseBtnEl).title = "Collapse";
  }
};
updateTreeVisibility_fn = function() {
  if (__privateGet(this, _module3)) {
    __privateMethod(this, _PerkyExplorer_instances, hideEmptyState_fn).call(this);
  } else {
    __privateMethod(this, _PerkyExplorer_instances, showEmptyState_fn).call(this);
  }
};
showEmptyState_fn = function() {
  const existing = __privateGet(this, _treeEl2).querySelector(".explorer-empty");
  if (existing) {
    return;
  }
  const empty = document.createElement("div");
  empty.className = "explorer-empty";
  empty.textContent = "No module attached. Use setModule() to explore.";
  __privateGet(this, _treeEl2).appendChild(empty);
  __privateGet(this, _rootNode2).style.display = "none";
};
hideEmptyState_fn = function() {
  const existing = __privateGet(this, _treeEl2).querySelector(".explorer-empty");
  if (existing) {
    existing.remove();
  }
  __privateGet(this, _rootNode2).style.display = "";
};
updateDetails_fn2 = function() {
  if (__privateGet(this, _selectedModule)) {
    __privateGet(this, _detailsEl2).setModule(__privateGet(this, _selectedModule));
  } else {
    __privateGet(this, _detailsEl2).clear();
  }
};
refresh_fn = function() {
  if (__privateGet(this, _rootModule)) {
    __privateGet(this, _rootNode2).setModule(__privateGet(this, _rootModule), 0);
    __privateGet(this, _rootNode2).setExpanded(true);
  }
  if (__privateGet(this, _selectedModule)) {
    const node = __privateGet(this, _rootNode2).findNode((n) => n.getModule() === __privateGet(this, _selectedModule));
    if (node) {
      node.setSelected(true);
    }
    __privateGet(this, _detailsEl2).setModule(__privateGet(this, _selectedModule));
  }
};
openSceneTree_fn3 = function(content, worldRenderer = null) {
  __privateSet(this, _sceneTreeMode, true);
  __privateGet(this, _sidebarEl).setContent(content, worldRenderer);
  __privateMethod(this, _PerkyExplorer_instances, updateViewState_fn).call(this);
};
closeSceneTree_fn = function() {
  __privateSet(this, _sceneTreeMode, false);
  __privateMethod(this, _PerkyExplorer_instances, updateViewState_fn).call(this);
};
navigateToEntity_fn = function(entity) {
  __privateMethod(this, _PerkyExplorer_instances, closeSceneTree_fn).call(this);
  const node = __privateGet(this, _rootNode2).findNode((n) => n.getModule() === entity);
  if (node) {
    if (__privateGet(this, _selectedModule)) {
      __privateGet(this, _rootNode2).deselectAll();
    }
    __privateSet(this, _selectedModule, entity);
    node.setSelected(true);
    __privateGet(this, _detailsEl2).setModule(entity);
    __privateMethod(this, _PerkyExplorer_instances, expandParentsToNode_fn).call(this, node);
  }
};
expandParentsToNode_fn = function(targetNode) {
  const expandPath = (node) => {
    const childNodeTag = node.constructor.childNodeTag;
    if (!childNodeTag) {
      return false;
    }
    const children = node.shadowRoot.querySelectorAll(childNodeTag);
    for (const child of children) {
      if (child === targetNode || child.findNode((n) => n === targetNode)) {
        node.setExpanded(true);
        expandPath(child);
        return true;
      }
    }
    return false;
  };
  expandPath(__privateGet(this, _rootNode2));
};
updateEmbeddedMode_fn = function() {
  if (!__privateGet(this, _minimizedEl) || !__privateGet(this, _minimizeBtnEl)) {
    return;
  }
  if (__privateGet(this, _embedded)) {
    __privateGet(this, _minimizedEl).classList.add("hidden");
    __privateGet(this, _minimizeBtnEl).classList.add("hidden");
    __privateSet(this, _isMinimized, false);
    __privateMethod(this, _PerkyExplorer_instances, updateViewState_fn).call(this);
  } else {
    __privateGet(this, _minimizeBtnEl).classList.remove("hidden");
  }
};
updateHeaderControls_fn = function() {
  const isRoot = __privateGet(this, _rootModule) && __privateGet(this, _module3) && __privateGet(this, _rootModule).$id === __privateGet(this, _module3).$id;
  __privateSet(this, _focusMode, __privateGet(this, _rootModule) && !isRoot);
  __privateMethod(this, _PerkyExplorer_instances, updateViewState_fn).call(this);
  if (__privateGet(this, _focusMode)) {
    __privateGet(this, _headerEl2).querySelector(".explorer-title").textContent = __privateGet(this, _rootModule).$id;
  } else {
    __privateGet(this, _headerEl2).querySelector(".explorer-title").innerHTML = '<span class="explorer-title-icon">📦</span> Perky Explorer';
  }
};
__publicField(PerkyExplorer, "observedAttributes", ["embedded"]);
const containerStyles = `
    .explorer-container {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 10px;
    }

    :host([embedded]) {
        position: static;
        width: 100%;
        max-height: none;
        right: auto;
        top: auto;
    }

    :host([embedded]) .explorer-container {
        align-items: stretch;
    }

    :host([embedded]) .explorer {
        max-height: none;
        border: none;
        border-radius: 0;
        box-shadow: none;
        width: 100%;
    }

    :host([embedded]) .explorer-header {
        display: none;
    }

    :host([embedded]) .explorer-tree {
        max-height: none;
    }
`;
PerkyExplorer.registerActionProvider = registerActionProvider;
customElements.define("perky-explorer", PerkyExplorer);
const perky_explorer_doc = doc("PerkyExplorer", () => {
  text(`
        Visual inspector for exploring Perky module trees.
        Displays the hierarchy of modules, their properties, and allows navigation.
    `);
  section("Basic Usage", () => {
    text(`
            Create a PerkyExplorer and attach it to a module using \`setModule()\`.
            Use the \`embedded\` attribute for integration in containers.
        `);
    code("Standalone", () => {
      const explorer = document.createElement("perky-explorer");
      document.body.appendChild(explorer);
    });
    container({ title: "Embedded explorer", height: 400, scrollable: true }, (ctx) => {
      const explorer = document.createElement("perky-explorer");
      explorer.embedded = true;
      ctx.container.appendChild(explorer);
      const game = new Game({ $id: "myGame" });
      explorer.setModule(game);
      setTimeout(() => game.start(), 1e3);
      ctx.setApp(game);
    });
  });
  section("Embedded Mode", () => {
    text(`
            The \`embedded\` attribute removes the header and minimize button,
            making the explorer suitable for integration in panels or containers.
        `);
    code("Enable embedded mode", () => {
      const explorer = document.createElement("perky-explorer");
      explorer.embedded = true;
    });
  });
  section("Navigation", () => {
    text(`
            Click on nodes to select them and view their details.
            Use \`focusModule()\` to zoom into a specific module.
        `);
    code("Focus on a module", () => {
      document.createElement("perky-explorer");
    });
  });
});
export {
  perky_explorer_doc as default
};
