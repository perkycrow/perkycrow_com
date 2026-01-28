const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./devtools_command_palette-D9JFsQ1l.js","./devtools_icons-CkXJWoC9.js","./shelf_packer--IBfIqnG.js","./spritesheet_viewer-BPbdQpFl.js","./preload-helper-BbOs9S9B.js"])))=>i.map(i=>d[i]);
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
var _ApplicationManager_instances, findApp_fn, _actions, _actionList, _engine, _ActionController_instances, defineResourceGetters_fn, _activeControllers, _ActionDispatcher_instances, isControllerActive_fn, _resizeObserver, _previousStyles, _onFullscreenChange, _previousDisplay, _PerkyView_instances, setupResizeObserver_fn, setupFullscreenEvents_fn, requestFullscreen_fn, dispatchDisplayModeChanged_fn, _bindings, _InputDevice_instances, initEvents_fn, _keydownListener, _keyupListener, _blurListener, _KeyboardDevice_instances, handleKeydown_fn, handleKeyup_fn, handleBlur_fn, _mousedownListener, _mouseupListener, _mousemoveListener, _contextmenuListener, _wheelListener, _MouseDevice_instances, createControls_fn, handleMousedown_fn, handleMouseup_fn, handleMousemove_fn, handleContextmenu_fn, handleWheel_fn, _touchstartListener, _touchmoveListener, _touchendListener, _touchcancelListener, _activeTouch, _startX, _startY, _currentX, _currentY, _touchStartTime, _TouchDevice_instances, createControls_fn2, handleTouchstart_fn, handleTouchmove_fn, updateVerticalSwipes_fn, updateHorizontalSwipes_fn, handleTouchend_fn, detectTap_fn, findChangedTouch_fn, handleTouchcancel_fn, releaseAllSwipes_fn, findActiveTouch_fn, isTouchActive_fn, _InputSystem_instances, getControlsFromBinding_fn, initEvents_fn2, handleInputEvent_fn, _Application_instances, createMainController_fn, autoRegisterBindings_fn, _paused, _fpsLimited, _context, _collected, _rendererRegistry, _renderers, _debugGizmoRenderer, _CanvasRenderer_instances, setupDefaultRenderers_fn, _RenderSystem_instances, configureDimensions_fn, setupInitialLayers_fn, setupResizeListener_fn, _context2, _masterGain, _suspended, _pendingDecodes, _masterVolume, _AudioContext_instances, processPendingDecodes_fn, _audioContext, _gainNode, _volume, _muted, _sources, _AudioChannel_instances, updateGain_fn, _audioContext2, _channel, _gainNode2, _pannerNode, _sourceNode, _playing, _loop, _volume2, _playbackRate, _startTime, _pauseTime, _x, _y, _spatial, _refDistance, _maxDistance, _rolloffFactor, _AudioSource_instances, initSpatialOptions_fn, updatePannerPosition_fn, updateGain_fn2, setupNodes_fn, configurePanner_fn, cleanupSourceNode_fn, _audioContext3, _buffers, _pendingAudio, _unlocked, _AudioSystem_instances, loadPendingAudio_fn, applyConfig_fn, _functionBindings, _stringBindings, _AutoView_instances, compileBindings_fn, _classRegistry, _matcherRegistry, _views, _WorldView_instances, bindWorldEvents_fn, handleEntitySet_fn, handleEntityDelete_fn, disposeAllViews_fn, resolveViews_fn, _Game_instances, createWorld_fn, createWorldView_fn, onUpdate_fn, onRender_fn, setupPostPasses_fn, listenForLateAssets_fn, buildTextureAtlases_fn, buildSpritesheets_fn, updateActiveControllers_fn, createRenderSystem_fn, buildRenderSystemConfig_fn, createAudioSystem_fn, _program, _enabled, _a, _width, _color, _HitboxDebug_instances, getCollidableEntities_fn, updateVisual_fn, createVisual_fn, createCircle_fn, getColorForEntity_fn, _WaveProgressBar_instances, showDayAnnouncement_fn, hideDayAnnouncement_fn, updateDayLabel_fn, updateWave_fn, updateProgress_fn, applyStyles_fn, _WaveSystem_instances, startNextWave_fn, startNextDay_fn, _enabled2, _program2, _uniforms, _RenderPass_instances, applyUniform_fn, _state, _depth, _expanded, _selected, _contentEl, _toggleEl, _childrenEl, _domBuilt, _BaseTreeNode_instances, ensureDOM_fn, buildDOM_fn, updateDepth_fn, updateToggle_fn, updateSelectedState_fn, updateChildrenVisibility_fn, handleToggleClick_fn, handleNodeClick_fn, handleContextMenu_fn, getSelectDetail_fn, getToggleDetail_fn, _module, _childNodes, _isSystemModule, _PerkyExplorerNode_instances, getExplorer_fn, bindModuleEvents_fn, updateStatus_fn, updateId_fn, updateCategory_fn, updateSystemClass_fn, clearChildNodes_fn, removeChildNode_fn, handleChildAdded_fn, handleChildRemoved_fn, _object, _childNodes2, _labelEl, _propsEl, _SceneTreeNode_instances, ensureContentElements_fn, updateLabel_fn, updateProps_fn, handleEntityClick_fn, _module2, _gridEl, _actionsEl, _Object2DInspector_instances, render_fn, _content, _worldRenderer, _headerEl, _treeEl, _rootNode, _detailsEl, _selectedObject, _refreshTimeout, _SceneTreeSidebar_instances, bindEvents_fn, scheduleRefresh_fn, clearRefreshTimeout_fn, buildDOM_fn2, createHeader_fn, createTree_fn, handleNodeSelect_fn, updateDetails_fn, updateInspector_fn, _module3, _titleEl, _contentEl2, _PerkyExplorerDetails_instances, buildDOM_fn3, render_fn2, renderEmpty_fn, renderTitle_fn, renderContent_fn, renderCustomInspector_fn, renderInspectMethod_fn, renderDefaultGrid_fn, _BaseRendererInspector_instances, update_fn, _fpsValueEl, _screenFpsValueEl, _statusValueEl, _toggleBtn, _fpsLimitCheckbox, _fpsSlider, _fpsSliderValue, _GameLoopInspector_instances, handleToggle_fn, handleLimitChange_fn, handleSliderChange_fn, bindEvents_fn2, updateAll_fn, updateFps_fn, updateSlider_fn, updateSliderState_fn, updateStatus_fn2, _activeCountEl, _activeSizeEl, _zombieCountEl, _zombieSizeEl, _progressBarEl, _progressValueEl, _totalSizeEl, _autoFlushEl, _maxSizeEl, _TextureManagerInspector_instances, handleFlush_fn, handleFlushStale_fn, bindEvents_fn3, updateAll_fn2, _vec2, _xInput, _yInput, _label, _labelEl2, _Vec2Input_instances, buildDOM_fn4, updateDisplay_fn, syncContext_fn, handleChange_fn, _positionInput, _CanvasLayerInspector_instances, update_fn2, openSceneTree_fn, _WorldViewInspector_instances, update_fn3, openSceneTree_fn2, _WebGLCanvasInspector_instances, update_fn4, renderPostProcessing_fn, _RenderGroupInspector_instances, update_fn5, renderBlendModeSelector_fn, renderPostPasses_fn, _sectionsState, _filterState, _typeGroupsState, _mainContainer, _assetsListContainer, _ManifestInspector_instances, update_fn6, updateAssetsList_fn, applyFilters_fn, createSection_fn, createConfigSection_fn, createDataGrid_fn, createFiltersBar_fn, createAssetsSection_fn, createTypeGroup_fn, _viewMode, _containerEl, _InputBinderInspector_instances, update_fn7, createHeader_fn2, _containerEl2, _ActionControllerInspector_instances, update_fn8, createActionCard_fn, _containerEl3, _ActionDispatcherInspector_instances, update_fn9, createControllerGroup_fn, toggleController_fn, _unlockedValueEl, _channelsValueEl, _volumeInput, _unlockBtn, _AudioSystemInspector_instances, handleVolumeChange_fn, handleUnlock_fn, bindEvents_fn4, updateAll_fn3, updateUnlocked_fn, updateChannels_fn, updateVolume_fn, _mutedValueEl, _sourcesValueEl, _volumeInput2, _muteBtn, _AudioChannelInspector_instances, handleVolumeChange_fn2, handleToggleMute_fn, bindEvents_fn5, updateAll_fn4, updateMuted_fn, updateSources_fn, updateVolume_fn2, _sectionsState2, _atlasExpandState, _mainContainer2, _TextureSystemInspector_instances, update_fn10, createStatsSection_fn, createAtlasesSection_fn, createSection_fn2, createAtlasCard_fn, _menuEl, _actions2, _module4, _ExplorerContextMenu_instances, buildDOM_fn5, renderActions_fn, positionMenu_fn, _handleOutsideClick, _handleKeyDown, _module5, _isMinimized, _isCollapsed, _sceneTreeMode, _focusMode, _embedded, _showSystemModules, _systemCategories, _containerEl4, _sidebarEl, _explorerEl, _minimizedEl, _headerEl2, _treeEl2, _rootNode2, _detailsEl2, _collapseBtnEl, _minimizeBtnEl, _layersBtnEl, _selectedModule, _rootModule, _contextMenuEl, _PerkyExplorer_instances, buildDOM_fn6, createMinimizedView_fn, createExpandedView_fn, createSceneTreeView_fn, createHeader_fn3, createTree_fn2, handleNodeSelect_fn2, handleNodeContextMenu_fn, ensureContextMenu_fn, updateViewState_fn, toggleCollapse_fn, updateCollapseState_fn, updateLayersButton_fn, updateTreeVisibility_fn, showEmptyState_fn, hideEmptyState_fn, updateDetails_fn2, refresh_fn, openSceneTree_fn3, closeSceneTree_fn, navigateToEntity_fn, expandParentsToNode_fn, updateEmbeddedMode_fn, updateHeaderControls_fn, _explorerEl2, _ExplorerTool_instances, buildDOM_fn7, _containerEl5, _registeredListEl, _runningListEl, _appManager, _AppsTool_instances, buildDOM_fn8, refresh_fn2, refreshRegistered_fn, refreshRunning_fn, createRunningItem_fn, startApp_fn, stopApp_fn, disposeApp_fn, _sidebarOpen, _activeTool, _commandPaletteOpen, _loggerOpen, _module6, _appManager2, _toolManager, _state2, _dockEl, _toolButtons, _loggerButton, _commandPaletteButton, _minimized, _DevToolsDock_instances, expand_fn, buildDOM_fn9, render_fn3, renderMinimized_fn, renderExpanded_fn, createToolButton_fn, updateActiveStates_fn, updateLoggerState_fn, _state3, _sidebarEl2, _headerEl3, _titleEl2, _titleIconEl, _titleTextEl, _closeBtn, _actionsEl2, _contentEl3, _currentToolEl, _currentToolId, _DevToolsSidebar_instances, buildDOM_fn10, createHeader_fn4, updateHeaderActions_fn, loadTool_fn, show_fn, hide_fn, _maxEntries, _position, _timestamp, _theme, _entries, _containerEl6, _contentEl4, _controlsEl, _opacityToggle, _isPinned, _onLog, _onClear, _onSpacer, _onTitle, _PerkyLogger_instances, handleMaxEntries_fn, handlePosition_fn, handleTimestamp_fn, handleTheme_fn, handleAttributeChange_fn, buildDOM_fn11, togglePin_fn, copyAllLogs_fn, updateControlsVisibility_fn, bindLoggerEvents_fn, replayHistory_fn, replayEntry_fn, unbindLoggerEvents_fn, handleLog_fn, updateClasses_fn, scrollToBottom_fn, _state4, _dockEl2, _sidebarEl3, _loggerEl, _commandPaletteEl, _keyboardHandler, _PerkyDevTools_instances, buildDOM_fn12, setupKeyboard_fn, cleanupKeyboard_fn, showCommandPalette_fn, hideCommandPalette_fn, _headerEl4, _contentEl5, _isDragging, _isResizing, _dragOffset, _x2, _y2, _width2, _height, _minWidth, _minHeight, _resizable, _onPointerMove, _onPointerUp, _title, _icon, _ToolWindow_instances, buildDOM_fn13, setupDrag_fn, setupResize_fn, cleanupWindowListeners_fn, applyPosition_fn, _registry, _instances, _container, _nextZIndex, _nextInstanceId, _nextX, _nextY, _cascadeOffset, _ToolManager_instances, handleClose_fn, bringToFront_fn, advanceCascade_fn, _params, _options, _contentEl6, _FoobarTool_instances, buildDOM_fn14, render_fn4, _contentEl7, _timelineEl, _previewEl, _spritesheetViewerEl, _animators, _animatorConfig, _animator, _spritesheet, _selectedAnimation, _SpriteAnimatorTool_instances, buildDOM_fn15, getDefaultAnimatorName_fn, selectAnimator_fn, resolveAnimator_fn, resolveSpritesheet_fn, render_fn5, renderNoAnimator_fn, renderAnimator_fn, setupAnimatorSelect_fn, setupExportAllButton_fn, exportAnimatorToClipboard_fn, buildFullConfig_fn, buildAnimationConfig_fn, renderAnimationSelect_fn, renderAnimationInfo_fn, setupTimeline_fn, handleFrameDrop_fn, handleFrameMove_fn, handleFrameDelete_fn, handleFrameDuration_fn, setupPreview_fn, setupSpritesheetViewer_fn;
import { l as logger, c as createElement, u as uniqueId, N as Notifier, f as formatNumber$1, a as formatBytes, p as pluralize, b as createStyleSheet } from "./shelf_packer--IBfIqnG.js";
import { P as PerkyModule, R as Registry, M as Manifest, S as SourceManager, l as loaders, T as TextureSystem, m as manifestData, E as EditorComponent, I as ICONS, e as editorScrollbarStyles, a as editorButtonStyles, b as editorBaseStyles, c as editorHeaderStyles } from "./devtools_icons-CkXJWoC9.js";
import { C as Circle, R as Rectangle, S as Sprite, B as BaseRenderer, t as traverseAndCollect, W as WebGLRenderer, a as Camera, G as Group2D, O as Object2D, E as Easing, b as ShaderEffect, c as SpriteAnimator, d as WebGLTextureManager, e as controlsSheet, h as handleAttributeChange, f as emitChange, g as RenderGroup } from "./spritesheet_viewer-BPbdQpFl.js";
import { _ as __vitePreload } from "./preload-helper-BbOs9S9B.js";
class ApplicationManager extends PerkyModule {
  constructor() {
    super(...arguments);
    __privateAdd(this, _ApplicationManager_instances);
    __publicField(this, "constructors", new Registry());
  }
  register(name, Application2) {
    if (this.constructors.has(name)) {
      throw new Error(`Application "${name}" is already registered.`);
    }
    this.constructors.set(name, Application2);
  }
  unregister(name) {
    if (this.constructors.has(name)) {
      this.constructors.delete(name);
    }
  }
  createApp(name, params = {}) {
    if (!this.constructors.has(name)) {
      throw new Error(`Application "${name}" is not registered.`);
    }
    const Application2 = this.constructors.get(name);
    const options = {
      ...params,
      $category: "application"
    };
    return this.create(Application2, options);
  }
  async spawn(name, params = {}) {
    const { preload = true, ...appParams } = params;
    const app = this.createApp(name, appParams);
    if (preload === "all") {
      await app.loadAll();
    } else if (preload === true) {
      await app.preload();
    }
    if (params.container) {
      app.mount(params.container);
    }
    app.start();
    return app;
  }
  startApp(nameOrId) {
    const app = __privateMethod(this, _ApplicationManager_instances, findApp_fn).call(this, nameOrId);
    if (app) {
      app.start();
    }
  }
  stopApp(nameOrId) {
    const app = __privateMethod(this, _ApplicationManager_instances, findApp_fn).call(this, nameOrId);
    if (app) {
      app.stop();
    }
  }
  execute(nameOrId, method, ...args) {
    const app = __privateMethod(this, _ApplicationManager_instances, findApp_fn).call(this, nameOrId);
    if (app) {
      app.execute(method, ...args);
    }
  }
  disposeApp(nameOrId) {
    const app = __privateMethod(this, _ApplicationManager_instances, findApp_fn).call(this, nameOrId);
    if (app) {
      this.removeChild(app.$id);
    }
  }
  list(grep = null) {
    const apps = this.children;
    if (grep) {
      return apps.filter((app) => app.$name && app.$name.includes(grep));
    }
    return apps;
  }
}
_ApplicationManager_instances = new WeakSet();
findApp_fn = function(nameOrId) {
  let app = this.getChild(nameOrId);
  if (!app) {
    app = this.children.find((child) => child.$id === nameOrId);
  }
  return app || null;
};
const _ActionController = class _ActionController extends PerkyModule {
  constructor(options = {}) {
    super(options);
    __privateAdd(this, _ActionController_instances);
    __privateAdd(this, _actions, new Registry());
    __privateAdd(this, _actionList, []);
    __privateAdd(this, _engine, null);
    __privateSet(this, _actionList, extractPrototypeMethods(this));
    __privateMethod(this, _ActionController_instances, defineResourceGetters_fn).call(this);
  }
  get engine() {
    var _a2, _b;
    return __privateGet(this, _engine) ?? ((_a2 = this.host) == null ? void 0 : _a2.engine) ?? ((_b = this.host) == null ? void 0 : _b.host) ?? this.host;
  }
  set engine(value) {
    __privateSet(this, _engine, value);
  }
  addAction(actionName, action) {
    if (!__privateGet(this, _actionList).includes(actionName)) {
      __privateGet(this, _actionList).push(actionName);
    }
    return __privateGet(this, _actions).set(actionName, action);
  }
  getAction(actionName) {
    return __privateGet(this, _actions).get(actionName);
  }
  removeAction(actionName) {
    return __privateGet(this, _actions).delete(actionName);
  }
  hasAction(actionName) {
    return this.getAction(actionName) !== void 0 || typeof this[actionName] === "function";
  }
  shouldPropagate(actionName) {
    const ControllerClass = this.constructor;
    return ControllerClass.propagable && Array.isArray(ControllerClass.propagable) ? ControllerClass.propagable.includes(actionName) : false;
  }
  listActions() {
    return [...__privateGet(this, _actionList)];
  }
  listActionsWithParams() {
    const result = [];
    for (const actionName of __privateGet(this, _actionList)) {
      const action = this.getAction(actionName) || this[actionName];
      const params = typeof action === "function" ? extractFunctionParams(action) : [];
      result.push({ name: actionName, params });
    }
    return result;
  }
  execute(actionName, ...args) {
    const action = this.getAction(actionName) || this[actionName];
    if (typeof action === "function") {
      action.call(this, ...args);
    }
    this.emit(actionName, ...args);
    this.emit("action", actionName, ...args);
  }
  static normalizeBindings(controllerName) {
    const bindings = this.bindings;
    const normalized = [];
    for (const [actionName, bindingDef] of Object.entries(bindings)) {
      const bindingConfigs = normalizeBindingDefinition(bindingDef);
      for (const config of bindingConfigs) {
        normalized.push({
          action: actionName,
          key: config.key,
          scoped: config.scoped ?? false,
          eventType: config.eventType ?? "pressed",
          controllerName: config.scoped ? controllerName : null
        });
      }
    }
    return normalized;
  }
};
_actions = new WeakMap();
_actionList = new WeakMap();
_engine = new WeakMap();
_ActionController_instances = new WeakSet();
defineResourceGetters_fn = function() {
  for (const name of this.constructor.resources) {
    if (this[name] === void 0) {
      let override;
      Object.defineProperty(this, name, {
        get: () => {
          var _a2;
          return override === void 0 ? (_a2 = this.engine) == null ? void 0 : _a2[name] : override;
        },
        set: (value) => {
          override = value;
        },
        configurable: true
      });
    }
  }
};
__publicField(_ActionController, "propagable", []);
__publicField(_ActionController, "bindings", {});
__publicField(_ActionController, "resources", []);
__publicField(_ActionController, "$category", "actionController");
__publicField(_ActionController, "actionControllerMethods", _ActionController.perkyModuleMethods.concat([
  "addAction",
  "getAction",
  "removeAction",
  "hasAction",
  "shouldPropagate",
  "listActions",
  "listActionsWithParams",
  "execute",
  "engine"
]));
let ActionController = _ActionController;
const internalMethods = new Set(ActionController.actionControllerMethods);
function isInternalMethod(methodName) {
  return internalMethods.has(methodName);
}
const ignoredPrefixes = ["_", "#", "on", "update", "get", "check"];
function extractPrototypeMethods(instance) {
  const methods = [];
  const proto = Object.getPrototypeOf(instance);
  const propertyNames = Object.getOwnPropertyNames(proto);
  for (const method of propertyNames) {
    if (method === "constructor") {
      continue;
    }
    if (ignoredPrefixes.some((prefix) => method.startsWith(prefix))) {
      continue;
    }
    if (isInternalMethod(method)) {
      continue;
    }
    const descriptor = Object.getOwnPropertyDescriptor(proto, method);
    if (descriptor && typeof descriptor.value === "function") {
      methods.push(method);
    }
  }
  return methods;
}
function normalizeBindingDefinition(bindingDef) {
  if (typeof bindingDef === "string") {
    return [{ key: bindingDef }];
  }
  if (Array.isArray(bindingDef)) {
    return bindingDef.map((key) => ({ key }));
  }
  if (typeof bindingDef === "object" && bindingDef !== null) {
    const keys = Array.isArray(bindingDef.keys) ? bindingDef.keys : [bindingDef.keys];
    return keys.map((key) => ({
      key,
      scoped: bindingDef.scoped ?? false,
      eventType: bindingDef.eventType ?? "pressed"
    }));
  }
  return [];
}
function extractFunctionParams(fn) {
  const fnStr = fn.toString();
  const match = fnStr.match(/^[^(]*\(([^)]*)\)/);
  if (!match || !match[1]) {
    return [];
  }
  return match[1].split(",").map((p) => {
    const trimmed = p.trim();
    if (trimmed.startsWith("...")) {
      return null;
    }
    const parts = trimmed.split("=").map((s) => s.trim());
    const name = parts[0];
    const defaultValue = parts[1] ?? null;
    return { name, defaultValue };
  }).filter((p) => p && p.name);
}
class ActionDispatcher extends PerkyModule {
  constructor() {
    super(...arguments);
    __privateAdd(this, _ActionDispatcher_instances);
    __privateAdd(this, _activeControllers, []);
  }
  onInstall(host) {
    this.listenTo(host, "input:triggered", this.dispatchAction.bind(this));
    this.delegateTo(host, {
      register: "registerController",
      unregister: "unregisterController",
      getController: "getController",
      list: "listControllers",
      setActive: "setActiveControllers",
      getActive: "getActiveControllers",
      pushActive: "pushActiveController",
      popActive: "popActiveController",
      clearActive: "clearActiveControllers",
      execute: "execute",
      executeTo: "executeTo",
      dispatchAction: "dispatchAction",
      listActions: "listAllActions",
      mainController: "mainController",
      addAction: "addAction",
      removeAction: "removeAction"
    });
  }
  get engine() {
    return this.host;
  }
  get mainController() {
    const controllers = this.listControllers();
    return controllers.length > 0 ? this.getController(controllers[0]) : null;
  }
  addAction(actionName, action) {
    if (!this.mainController) {
      logger.warn("No main controller available. Cannot add action.");
      return false;
    }
    return this.mainController.addAction(actionName, action);
  }
  removeAction(actionName) {
    if (!this.mainController) {
      logger.warn("No main controller available. Cannot remove action.");
      return false;
    }
    return this.mainController.removeAction(actionName);
  }
  register(nameOrController, ControllerOrOptions = ActionController, maybeOptions = {}) {
    let name;
    let Controller;
    let options;
    if (typeof nameOrController === "string") {
      name = nameOrController;
      Controller = ControllerOrOptions;
      options = maybeOptions;
    } else if (typeof nameOrController === "function") {
      Controller = nameOrController;
      options = typeof ControllerOrOptions === "object" ? ControllerOrOptions : {};
      name = options.name || Controller.$name || resolveControllerName(Controller);
    } else {
      return null;
    }
    const controller = this.create(Controller, {
      $id: name,
      $category: "controller"
    });
    if (options.active !== false && __privateGet(this, _activeControllers).length === 1) {
      this.pushActive(name);
    }
    this.emit("controller:set", name, controller);
    return controller;
  }
  unregister(name) {
    const controller = this.getChild(name);
    if (!controller) {
      return false;
    }
    const stackIndex = __privateGet(this, _activeControllers).indexOf(name);
    if (stackIndex !== -1) {
      __privateGet(this, _activeControllers).splice(stackIndex, 1);
    }
    return this.removeChild(name);
  }
  getController(name) {
    return this.getChild(name);
  }
  setActive(names) {
    const nameArray = Array.isArray(names) ? names : [names];
    for (const name of nameArray) {
      if (!this.hasChild(name)) {
        logger.warn(`Controller "${name}" not found. Cannot set as active controller.`);
        return false;
      }
    }
    __privateSet(this, _activeControllers, [...nameArray]);
    this.emit("controllers:activated", nameArray);
    return true;
  }
  getActive() {
    return [...__privateGet(this, _activeControllers)];
  }
  pushActive(name) {
    if (!this.hasChild(name)) {
      logger.warn(`Controller "${name}" not found`);
      return false;
    }
    if (__privateGet(this, _activeControllers).includes(name)) {
      return false;
    }
    __privateGet(this, _activeControllers).push(name);
    this.emit("controller:pushed", name, __privateGet(this, _activeControllers).length);
    return true;
  }
  popActive() {
    if (__privateGet(this, _activeControllers).length === 0) {
      logger.warn("Active controllers stack is empty");
      return null;
    }
    const popped = __privateGet(this, _activeControllers).pop();
    this.emit("controller:popped", popped, __privateGet(this, _activeControllers).length);
    return popped;
  }
  clearActive() {
    __privateSet(this, _activeControllers, []);
    this.emit("controllers:cleared");
  }
  execute(actionName, ...args) {
    if (__privateGet(this, _activeControllers).length === 0) {
      logger.warn("No active controllers");
      return;
    }
    const registry = this.childrenRegistry;
    for (let i = __privateGet(this, _activeControllers).length - 1; i >= 0; i--) {
      const controllerName = __privateGet(this, _activeControllers)[i];
      const controller = registry.get(controllerName);
      if (!controller) {
        logger.warn(`Controller "${controllerName}" not found in registry but present in active stack`);
        continue;
      }
      const hasAction = controller.hasAction(actionName);
      controller.execute(actionName, ...args);
      if (hasAction && !controller.shouldPropagate(actionName)) {
        return;
      }
    }
  }
  executeTo(name, actionName, ...args) {
    const controller = this.getController(name);
    if (controller && __privateMethod(this, _ActionDispatcher_instances, isControllerActive_fn).call(this, name)) {
      if (typeof controller.execute === "function") {
        controller.execute(actionName, ...args);
      } else if (typeof controller[actionName] === "function") {
        controller[actionName](...args);
      }
    }
  }
  dispatchAction(binding, ...args) {
    if (binding.controllerName) {
      this.executeTo(binding.controllerName, binding.actionName, ...args);
    } else {
      this.execute(binding.actionName, ...args);
    }
  }
  listControllers() {
    return this.listNamesFor("controller");
  }
  listAllActions() {
    const allActions = /* @__PURE__ */ new Map();
    const registry = this.childrenRegistry;
    for (const [name, controller] of registry.entries) {
      if (typeof controller.listActionsWithParams === "function") {
        allActions.set(name, controller.listActionsWithParams());
      } else if (typeof controller.listActions === "function") {
        allActions.set(name, controller.listActions().map((n) => ({ name: n, params: [] })));
      }
    }
    return allActions;
  }
}
_activeControllers = new WeakMap();
_ActionDispatcher_instances = new WeakSet();
isControllerActive_fn = function(controllerName) {
  return __privateGet(this, _activeControllers).includes(controllerName);
};
__publicField(ActionDispatcher, "$category", "actionDispatcher");
function resolveControllerName(Controller) {
  const className = Controller.name || "controller";
  return className.replace(/Controller$/, "").replace(/^[A-Z]/, (c) => c.toLowerCase());
}
class PerkyView extends PerkyModule {
  constructor(params = {}) {
    super(params);
    __privateAdd(this, _PerkyView_instances);
    __privateAdd(this, _resizeObserver, null);
    __privateAdd(this, _previousStyles, {});
    __privateAdd(this, _onFullscreenChange, null);
    __privateAdd(this, _previousDisplay, null);
    __publicField(this, "displayMode", "normal");
    this.element = params.element ? params.element : this.constructor.defaultElement(params);
    if (params.position) {
      applyPositionStyle(this.element, params.position);
    }
    if (params.container) {
      this.mount(params.container);
    }
    if (params.className) {
      this.addClass(params.className);
    }
    __privateMethod(this, _PerkyView_instances, setupResizeObserver_fn).call(this);
    __privateMethod(this, _PerkyView_instances, setupFullscreenEvents_fn).call(this);
  }
  onInstall(host) {
    this.delegateTo(host, [
      "element",
      "mount",
      "dismount",
      "mounted",
      "displayMode",
      "setDisplayMode",
      "enterFullscreenMode",
      "exitFullscreenMode",
      "toggleFullscreen"
    ]);
    this.delegateEventsTo(host, [
      "resize",
      "mount",
      "dismount",
      "displayMode:changed"
    ]);
  }
  get container() {
    return this.element.parentElement;
  }
  get width() {
    return this.element.offsetWidth;
  }
  get height() {
    return this.element.offsetHeight;
  }
  get size() {
    return {
      width: this.width,
      height: this.height
    };
  }
  get aspectRatio() {
    const { width, height } = this.size;
    return height > 0 ? width / height : 0;
  }
  addClass(className) {
    this.element.classList.add(className);
  }
  removeClass(className) {
    this.element.classList.remove(className);
  }
  hasClass(className) {
    return this.element.classList.contains(className);
  }
  setSize({ width, height, unit = "px" }) {
    Object.assign(this.element.style, {
      width: `${width}${unit}`,
      height: `${height}${unit}`
    });
    this.emit("resize", { width, height });
  }
  fit(element = this.container) {
    const { width, height } = element.getBoundingClientRect();
    this.setSize({ width, height });
  }
  mount(container) {
    if (!container) {
      throw new Error("Container element is required");
    }
    if (this.container && this.container !== container) {
      this.container.removeChild(this.element);
    }
    container.appendChild(this.element);
    this.emit("mount", { container });
    if (__privateGet(this, _resizeObserver)) {
      __privateGet(this, _resizeObserver).observe(this.element);
    }
  }
  dismount() {
    if (this.container) {
      this.container.removeChild(this.element);
      this.emit("dismount", { container: this.container });
    }
    if (__privateGet(this, _resizeObserver)) {
      __privateGet(this, _resizeObserver).disconnect();
    }
  }
  get mounted() {
    return Boolean(this.container && this.container.contains(this.element));
  }
  static defaultElement(params) {
    const element = createElement("div", {
      id: params.id || uniqueId("perky_view", "perky_view"),
      class: params.className || "perky-view"
    });
    const styles = {
      display: "block",
      overflow: "hidden",
      position: "relative",
      width: "100%",
      height: "100%",
      ...this.defaultStyles(params)
    };
    Object.assign(element.style, styles);
    return element;
  }
  static defaultStyles() {
    return {};
  }
  isVisible() {
    return this.element.style.display !== "none";
  }
  onDispose() {
    this.exitFullscreenMode();
    if (__privateGet(this, _resizeObserver)) {
      __privateGet(this, _resizeObserver).disconnect();
      __privateSet(this, _resizeObserver, null);
    }
    if (__privateGet(this, _onFullscreenChange)) {
      document.removeEventListener("fullscreenchange", __privateGet(this, _onFullscreenChange));
    }
    this.dismount();
  }
  get html() {
    return this.element.innerHTML;
  }
  get display() {
    return this.element.style.display;
  }
  set display(display) {
    this.element.style.display = display;
  }
  hide() {
    if (this.display && this.display !== "none") {
      __privateSet(this, _previousDisplay, this.display);
    }
    this.display = "none";
  }
  show() {
    if (__privateGet(this, _previousDisplay)) {
      this.display = __privateGet(this, _previousDisplay);
      __privateSet(this, _previousDisplay, null);
    } else {
      this.display = "";
    }
  }
  setDisplayMode(mode) {
    const modes = {
      normal: () => this.exitFullscreenMode(),
      fullscreen: () => this.enterFullscreenMode()
    };
    if (modes[mode]) {
      modes[mode]();
    }
  }
  enterFullscreenMode() {
    if (this.displayMode === "fullscreen") {
      return;
    }
    this.displayMode = "fullscreen";
    document.body.classList.add("fullscreen-mode");
    __privateSet(this, _previousStyles, {
      position: this.element.style.position,
      top: this.element.style.top,
      left: this.element.style.left,
      width: this.element.style.width,
      height: this.element.style.height,
      zIndex: this.element.style.zIndex
    });
    Object.assign(this.element.style, {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100vw",
      height: "100vh",
      zIndex: "10000"
    });
    __privateMethod(this, _PerkyView_instances, requestFullscreen_fn).call(this);
  }
  exitFullscreenMode() {
    if (this.displayMode === "normal") {
      return;
    }
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
    this.displayMode = "normal";
    document.body.style.overflow = "";
    document.body.classList.remove("fullscreen-mode");
    Object.assign(this.element.style, __privateGet(this, _previousStyles));
    __privateSet(this, _previousStyles, {});
    __privateMethod(this, _PerkyView_instances, dispatchDisplayModeChanged_fn).call(this, "normal");
  }
  toggleFullscreen() {
    const mode = this.displayMode;
    if (mode === "fullscreen") {
      this.exitFullscreenMode();
    } else {
      this.enterFullscreenMode();
    }
  }
}
_resizeObserver = new WeakMap();
_previousStyles = new WeakMap();
_onFullscreenChange = new WeakMap();
_previousDisplay = new WeakMap();
_PerkyView_instances = new WeakSet();
setupResizeObserver_fn = function() {
  __privateSet(this, _resizeObserver, new ResizeObserver((entries) => {
    for (const entry of entries) {
      const { width, height } = entry.contentRect;
      if (this.mounted) {
        this.emit("resize", { width, height });
      }
    }
  }));
  if (this.element) {
    __privateGet(this, _resizeObserver).observe(this.element);
  }
};
setupFullscreenEvents_fn = function() {
  const onFullscreenChange = () => {
    if (document.fullscreenElement === this.element) {
      this.displayMode = "fullscreen";
      document.body.style.overflow = "hidden";
      __privateMethod(this, _PerkyView_instances, dispatchDisplayModeChanged_fn).call(this, "fullscreen");
    } else if (this.displayMode === "fullscreen") {
      this.exitFullscreenMode();
    }
  };
  document.addEventListener("fullscreenchange", onFullscreenChange);
  __privateSet(this, _onFullscreenChange, onFullscreenChange);
};
requestFullscreen_fn = function() {
  if (this.element.requestFullscreen) {
    this.element.requestFullscreen();
  }
};
dispatchDisplayModeChanged_fn = function(mode) {
  this.emit("displayMode:changed", { mode });
};
__publicField(PerkyView, "$category", "perkyView");
function applyPositionStyle(element, position) {
  element.style.position = position;
  if (position === "absolute") {
    element.style.top = "0";
    element.style.left = "0";
  }
}
class InputBinding {
  constructor({
    deviceName,
    controlName,
    actionName,
    controllerName = null,
    eventType = "pressed"
  }) {
    this.deviceName = deviceName;
    this.controlName = controlName;
    this.actionName = actionName;
    this.controllerName = controllerName;
    this.eventType = eventType;
  }
  get key() {
    return InputBinding.keyFor({
      deviceName: this.deviceName,
      controlName: this.controlName,
      actionName: this.actionName,
      controllerName: this.controllerName,
      eventType: this.eventType
    });
  }
  static keyFor({ deviceName, controlName, actionName, controllerName = null, eventType = "pressed" }) {
    if (controllerName) {
      return `${deviceName}:${controlName}:${eventType}:${actionName}:${controllerName}`;
    }
    return `${deviceName}:${controlName}:${eventType}:${actionName}`;
  }
  matches({ deviceName, controlName, eventType }) {
    return this.deviceName === deviceName && this.controlName === controlName && this.eventType === eventType;
  }
  updateInput({ deviceName, controlName }) {
    this.deviceName = deviceName;
    this.controlName = controlName;
  }
}
class CompositeBinding extends InputBinding {
  constructor({
    controls,
    actionName,
    controllerName = null,
    eventType = "pressed"
  }) {
    if (!Array.isArray(controls) || controls.length < 2) {
      throw new Error("CompositeBinding requires an array of at least 2 controls");
    }
    super({
      deviceName: "composite",
      controlName: CompositeBinding.generateControlName(controls),
      actionName,
      controllerName,
      eventType
    });
    this.controls = controls;
  }
  static generateControlName(controls) {
    const controlNames = controls.map((c) => `${c.deviceName}:${c.controlName}`).join("+");
    return `combo(${controlNames})`;
  }
  matches({ deviceName, controlName, eventType }) {
    if (deviceName === "composite" && controlName === this.controlName && eventType === this.eventType) {
      return true;
    }
    return this.controls.some((c) => {
      return c.deviceName === deviceName && c.controlName === controlName;
    }) && eventType === this.eventType;
  }
  shouldTrigger(inputSystem) {
    return this.controls.every(({ deviceName, controlName }) => {
      return inputSystem.isPressed(deviceName, controlName);
    });
  }
}
class InputBinder extends PerkyModule {
  constructor(options = {}) {
    super(options);
    __privateAdd(this, _bindings, new Registry());
    const { bindings = [], inputBinder } = options;
    __privateGet(this, _bindings).addIndex("input", (binding) => {
      if (binding instanceof CompositeBinding) {
        const keys = binding.controls.map(({ deviceName, controlName }) => {
          return `${deviceName}:${controlName}:${binding.eventType}`;
        });
        keys.push(`composite:${binding.controlName}:${binding.eventType}`);
        return keys;
      }
      return `${binding.deviceName}:${binding.controlName}:${binding.eventType}`;
    });
    __privateGet(this, _bindings).addIndex("action", (binding) => {
      const controller = binding.controllerName || "";
      return `${binding.actionName}:${binding.eventType}:${controller}`;
    });
    __privateGet(this, _bindings).addIndex("actionAll", (binding) => {
      return `${binding.actionName}:${binding.eventType}`;
    });
    if (inputBinder) {
      this.import(inputBinder);
    }
    this.import({ bindings });
  }
  onInstall(host) {
    this.delegateTo(host, [
      "bindInput",
      "unbind",
      "getBinding",
      "hasBinding",
      "getBindingsForInput",
      "getBindingsForAction",
      "getAllBindings",
      "clearBindings",
      "bindCombo"
    ]);
  }
  import(inputBinder) {
    if (typeof inputBinder.export === "function") {
      inputBinder = inputBinder.export();
    }
    if (Array.isArray(inputBinder == null ? void 0 : inputBinder.bindings)) {
      this.importBindings(inputBinder.bindings);
    }
  }
  importBindings(bindings) {
    bindings.forEach((bindingData) => this.bindInput(bindingData));
  }
  bindInput({
    deviceName,
    controlName,
    actionName,
    controllerName = null,
    eventType = "pressed",
    controls = null
  }) {
    let binding;
    if (controls && Array.isArray(controls)) {
      binding = new CompositeBinding({
        controls,
        actionName,
        controllerName,
        eventType
      });
    } else {
      binding = new InputBinding({
        deviceName: deviceName ?? detectDeviceFromControlName(controlName),
        controlName,
        actionName,
        controllerName,
        eventType
      });
    }
    __privateGet(this, _bindings).set(binding.key, binding);
    return binding;
  }
  unbind(params) {
    const binding = this.getBinding(params);
    if (binding) {
      __privateGet(this, _bindings).delete(binding.key);
      this.emit("binding:removed", binding);
      return true;
    }
    return false;
  }
  getBinding(params) {
    const { deviceName, controlName, actionName, controllerName = null, eventType = "pressed" } = params;
    if (deviceName && controlName) {
      const key = keyFor(params);
      return __privateGet(this, _bindings).get(key) || null;
    }
    const bindings = this.getBindingsForAction(actionName, controllerName, eventType);
    return bindings.length > 0 ? bindings[0] : null;
  }
  hasBinding(params) {
    return this.getBinding(params) !== null;
  }
  getBindingsForInput({ deviceName, controlName, eventType }) {
    const key = `${deviceName}:${controlName}:${eventType}`;
    const bindings = __privateGet(this, _bindings).lookup("input", key);
    const directBindings = [];
    const compositeBindings = [];
    for (const binding of bindings) {
      if (binding instanceof CompositeBinding) {
        compositeBindings.push(binding);
      } else {
        directBindings.push(binding);
      }
    }
    return [...directBindings, ...compositeBindings];
  }
  getBindingsForAction(actionName, controllerName = null, eventType = "pressed") {
    if (controllerName === null) {
      const key2 = `${actionName}:${eventType}`;
      return __privateGet(this, _bindings).lookup("actionAll", key2);
    }
    const controller = controllerName || "";
    const key = `${actionName}:${eventType}:${controller}`;
    return __privateGet(this, _bindings).lookup("action", key);
  }
  getAllBindings() {
    return Array.from(__privateGet(this, _bindings).values);
  }
  clearBindings() {
    __privateGet(this, _bindings).clear();
  }
  bindCombo(controls, actionName, controllerName = null, eventType = "pressed") {
    if (!Array.isArray(controls) || controls.length < 2) {
      throw new Error("Controls must be an array with at least 2 controls");
    }
    if (!actionName || typeof actionName !== "string") {
      throw new Error("actionName is required and must be a string");
    }
    const normalizedControls = controls.map((control, index) => {
      if (typeof control === "string") {
        const deviceName = detectDeviceFromControlName(control);
        return { deviceName, controlName: control };
      } else if (control && typeof control === "object" && control.deviceName && control.controlName) {
        return control;
      } else {
        throw new Error(`Control at index ${index} must be a string or object with deviceName and controlName properties`);
      }
    });
    return this.bindInput({
      controls: normalizedControls,
      actionName,
      controllerName,
      eventType
    });
  }
  export() {
    return {
      bindings: this.getAllBindings().map((binding) => {
        const exported = {
          deviceName: binding.deviceName,
          controlName: binding.controlName,
          actionName: binding.actionName,
          controllerName: binding.controllerName,
          eventType: binding.eventType
        };
        if (binding.controls) {
          exported.controls = binding.controls;
        }
        return exported;
      })
    };
  }
}
_bindings = new WeakMap();
__publicField(InputBinder, "$category", "inputBinder");
function keyFor({ deviceName, controlName, actionName, controllerName = null, eventType = "pressed" }) {
  return InputBinding.keyFor({ deviceName, controlName, actionName, controllerName, eventType });
}
const MOUSE_CONTROLS = [
  "leftButton",
  "rightButton",
  "middleButton",
  "backButton",
  "forwardButton",
  "position",
  "navigation"
];
const TOUCH_CONTROLS = [
  "swipeUp",
  "swipeDown",
  "swipeLeft",
  "swipeRight",
  "tap"
];
const GAMEPAD_CONTROL_PATTERNS = [
  /^button\d+$/,
  /^axis\d+$/,
  /^dpad/,
  /^stick/
];
function detectDeviceFromControlName(controlName) {
  if (MOUSE_CONTROLS.includes(controlName)) {
    return "mouse";
  }
  if (TOUCH_CONTROLS.includes(controlName)) {
    return "touch";
  }
  if (GAMEPAD_CONTROL_PATTERNS.some((pattern) => pattern.test(controlName))) {
    return "gamepad";
  }
  return "keyboard";
}
class InputDevice extends PerkyModule {
  constructor(options = {}) {
    super(options);
    __privateAdd(this, _InputDevice_instances);
    const { container = window } = options;
    this.container = container;
    this.controls = new Registry();
    this.pressedNames = /* @__PURE__ */ new Set();
    __privateMethod(this, _InputDevice_instances, initEvents_fn).call(this);
  }
  onInstall(host) {
    this.delegateEventsTo(host, ["control:pressed", "control:released", "control:updated"]);
  }
  registerControl(control) {
    if (!(control && control.name)) {
      throw new Error("Control must have a name");
    }
    if (this.controls.has(control.name)) {
      return false;
    }
    this.controls.set(control.name, control);
    return true;
  }
  getControl(name) {
    return this.controls.get(name);
  }
  getValueFor(controlName) {
    const control = this.getControl(controlName);
    return control ? control.value : void 0;
  }
  isPressed(controlName) {
    return this.pressedNames.has(controlName);
  }
  getPressedControls() {
    const results = [];
    for (const controlName of this.pressedNames) {
      const control = this.getControl(controlName);
      if (control) {
        results.push(control);
      }
    }
    return results;
  }
  findOrCreateControl(Control, params = {}) {
    const controlName = params.name;
    if (!controlName) {
      throw new Error("Control must have a name");
    }
    let control = this.controls.get(controlName);
    if (control) {
      return control;
    }
    control = new Control({
      device: this,
      name: controlName,
      ...params
    });
    if (this.registerControl(control)) {
      return control;
    }
    return null;
  }
  shouldPreventDefaultFor(event, control) {
    if (!this.shouldPreventDefault) {
      return false;
    }
    if (typeof this.shouldPreventDefault === "function") {
      return this.shouldPreventDefault(event, control, this);
    }
    return true;
  }
  preventDefault(event, control) {
    if (control && event && this.shouldPreventDefaultFor(event, control)) {
      if (typeof event.preventDefault === "function") {
        event.preventDefault();
      }
      if (typeof event.stopPropagation === "function") {
        event.stopPropagation();
      }
    }
  }
  onDispose() {
    this.controls.clear();
  }
}
_InputDevice_instances = new WeakSet();
initEvents_fn = function() {
  const device = this;
  const controlListeners = /* @__PURE__ */ new WeakMap();
  const createListeners = (control) => ({
    pressed(event) {
      device.pressedNames.add(control.name);
      device.emit("control:pressed", control, event, device);
      device.preventDefault(event, control);
    },
    released(event) {
      device.pressedNames.delete(control.name);
      device.emit("control:released", control, event, device);
      device.preventDefault(event, control);
    },
    updated(value, oldValue, event) {
      device.emit("control:updated", control, value, oldValue, event, device);
    }
  });
  this.controls.on("set", (key, control) => {
    const listeners = createListeners(control);
    controlListeners.set(control, listeners);
    control.on("pressed", listeners.pressed);
    control.on("released", listeners.released);
    control.on("updated", listeners.updated);
  });
  this.controls.on("delete", (key, control) => {
    const listeners = controlListeners.get(control);
    if (listeners) {
      control.off("pressed", listeners.pressed);
      control.off("released", listeners.released);
      control.off("updated", listeners.updated);
      controlListeners.delete(control);
    }
    device.pressedNames.delete(control.name);
  });
};
__publicField(InputDevice, "$category", "inputDevice");
const VALUE$2 = Symbol("value");
const OLD_VALUE$2 = Symbol("oldValue");
class InputControl extends Notifier {
  constructor({ device, name, value }) {
    super();
    this.device = device;
    this.name = name;
    this[OLD_VALUE$2] = null;
    this[VALUE$2] = value ?? this.getDefaultValue();
  }
  set value(value) {
    this.setValue(value);
  }
  setValue(value, event = null) {
    if (value === this[VALUE$2]) {
      return false;
    }
    this[OLD_VALUE$2] = this[VALUE$2];
    this[VALUE$2] = value;
    this.emit("updated", this[VALUE$2], this[OLD_VALUE$2], event);
    return true;
  }
  get value() {
    return this[VALUE$2];
  }
  get oldValue() {
    return this[OLD_VALUE$2];
  }
  getDefaultValue() {
    return 0;
  }
  reset() {
    this.value = this.getDefaultValue();
  }
}
__publicField(InputControl, "VALUE", VALUE$2);
__publicField(InputControl, "OLD_VALUE", OLD_VALUE$2);
class ButtonControl extends InputControl {
  constructor(params = {}) {
    super(params);
    this.pressThreshold = params.pressThreshold ?? this.constructor.defaultPressThreshold;
  }
  setValue(value, event = null) {
    this.lastEvent = event;
    if (super.setValue(value, event)) {
      if (this.isPressed && !this.wasPressed) {
        this.emit("pressed", this.lastEvent);
      }
      if (!this.isPressed && this.wasPressed) {
        this.emit("released", this.lastEvent);
      }
      return true;
    }
    return false;
  }
  get isPressed() {
    return this.value >= this.pressThreshold;
  }
  get wasPressed() {
    return this.oldValue >= this.pressThreshold;
  }
  press(event = null) {
    this.setValue(1, event);
  }
  release(event = null) {
    this.setValue(0, event);
  }
}
__publicField(ButtonControl, "defaultPressThreshold", 0.1);
class KeyboardDevice extends InputDevice {
  constructor(params = {}) {
    super(params);
    __privateAdd(this, _KeyboardDevice_instances);
    __privateAdd(this, _keydownListener);
    __privateAdd(this, _keyupListener);
    __privateAdd(this, _blurListener);
    this.shouldPreventDefault = params.shouldPreventDefault;
    __privateSet(this, _keydownListener, __privateMethod(this, _KeyboardDevice_instances, handleKeydown_fn).bind(this));
    __privateSet(this, _keyupListener, __privateMethod(this, _KeyboardDevice_instances, handleKeyup_fn).bind(this));
    __privateSet(this, _blurListener, __privateMethod(this, _KeyboardDevice_instances, handleBlur_fn).bind(this));
  }
  onStart() {
    this.container.addEventListener("keydown", __privateGet(this, _keydownListener), true);
    this.container.addEventListener("keyup", __privateGet(this, _keyupListener), true);
    this.container.addEventListener("blur", __privateGet(this, _blurListener));
  }
  onStop() {
    this.container.removeEventListener("keydown", __privateGet(this, _keydownListener), true);
    this.container.removeEventListener("keyup", __privateGet(this, _keyupListener), true);
    this.container.removeEventListener("blur", __privateGet(this, _blurListener));
  }
}
_keydownListener = new WeakMap();
_keyupListener = new WeakMap();
_blurListener = new WeakMap();
_KeyboardDevice_instances = new WeakSet();
handleKeydown_fn = function(event) {
  if (shouldIgnoreEvent(event)) {
    return;
  }
  const keyName = getKeyName(event);
  const control = this.findOrCreateControl(ButtonControl, {
    name: keyName
  });
  this.preventDefault(event, control);
  if (!control.isPressed) {
    control.press(event);
  }
};
handleKeyup_fn = function(event) {
  if (shouldIgnoreEvent(event)) {
    return;
  }
  const keyName = getKeyName(event);
  const control = this.getControl(keyName);
  this.preventDefault(event, control);
  if (control && control.isPressed) {
    control.release(event);
  }
};
handleBlur_fn = function() {
  this.pressedNames.forEach((keyName) => {
    const control = this.getControl(keyName);
    if (control && control.isPressed) {
      control.release();
    }
  });
};
__publicField(KeyboardDevice, "$name", "keyboard");
function getKeyName(event) {
  return event.code;
}
function shouldIgnoreEvent(event) {
  const path = event.composedPath();
  for (const element of path) {
    if (element.tagName) {
      const tagName = element.tagName.toLowerCase();
      if (tagName === "input" || tagName === "textarea") {
        return true;
      }
      if (element.isContentEditable) {
        return true;
      }
    }
  }
  return false;
}
class Vec2 {
  constructor(x = 0, y = 0) {
    if (typeof x === "object") {
      if (Array.isArray(x)) {
        this.x = x[0] ?? 0;
        this.y = x[1] ?? 0;
      } else {
        this.x = x.x ?? 0;
        this.y = x.y ?? 0;
      }
    } else {
      this.x = x;
      this.y = y;
    }
  }
  set(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }
  setX(x) {
    this.x = x;
    return this;
  }
  setY(y) {
    this.y = y;
    return this;
  }
  setScalar(scalar) {
    this.x = scalar;
    this.y = scalar;
    return this;
  }
  copy(v) {
    this.x = v.x;
    this.y = v.y;
    return this;
  }
  clone() {
    return new Vec2(this.x, this.y);
  }
  add(v) {
    this.x += v.x;
    this.y += v.y;
    return this;
  }
  addScalar(s) {
    this.x += s;
    this.y += s;
    return this;
  }
  addVectors(a, b) {
    this.x = a.x + b.x;
    this.y = a.y + b.y;
    return this;
  }
  addScaledVector(v, s) {
    this.x += v.x * s;
    this.y += v.y * s;
    return this;
  }
  sub(v) {
    this.x -= v.x;
    this.y -= v.y;
    return this;
  }
  subScalar(s) {
    this.x -= s;
    this.y -= s;
    return this;
  }
  subVectors(a, b) {
    this.x = a.x - b.x;
    this.y = a.y - b.y;
    return this;
  }
  multiply(v) {
    this.x *= v.x;
    this.y *= v.y;
    return this;
  }
  multiplyScalar(scalar) {
    this.x *= scalar;
    this.y *= scalar;
    return this;
  }
  divide(v) {
    this.x /= v.x;
    this.y /= v.y;
    return this;
  }
  divideScalar(scalar) {
    return this.multiplyScalar(1 / scalar);
  }
  dot(v) {
    return this.x * v.x + this.y * v.y;
  }
  cross(v) {
    return this.x * v.y - this.y * v.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.lengthSq());
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(v) {
    const denominator = Math.sqrt(this.lengthSq() * v.lengthSq());
    if (denominator === 0) {
      return Math.PI / 2;
    }
    const theta = this.dot(v) / denominator;
    return Math.acos(Math.max(-1, Math.min(1, theta)));
  }
  distanceTo(v) {
    return Math.sqrt(this.distanceToSquared(v));
  }
  distanceToSquared(v) {
    const dx = this.x - v.x;
    const dy = this.y - v.y;
    return dx * dx + dy * dy;
  }
  manhattanDistanceTo(v) {
    return Math.abs(this.x - v.x) + Math.abs(this.y - v.y);
  }
  setLength(length) {
    return this.normalize().multiplyScalar(length);
  }
  lerp(v, alpha) {
    this.x += (v.x - this.x) * alpha;
    this.y += (v.y - this.y) * alpha;
    return this;
  }
  lerpVectors(v1, v2, alpha) {
    this.x = v1.x + (v2.x - v1.x) * alpha;
    this.y = v1.y + (v2.y - v1.y) * alpha;
    return this;
  }
  equals(v) {
    return v.x === this.x && v.y === this.y;
  }
  fromArray(array, offset = 0) {
    this.x = array[offset];
    this.y = array[offset + 1];
    return this;
  }
  toArray(array = [], offset = 0) {
    array[offset] = this.x;
    array[offset + 1] = this.y;
    return array;
  }
  negate() {
    this.x = -this.x;
    this.y = -this.y;
    return this;
  }
  min(v) {
    this.x = Math.min(this.x, v.x);
    this.y = Math.min(this.y, v.y);
    return this;
  }
  max(v) {
    this.x = Math.max(this.x, v.x);
    this.y = Math.max(this.y, v.y);
    return this;
  }
  clamp(min, max) {
    this.x = Math.max(min.x, Math.min(max.x, this.x));
    this.y = Math.max(min.y, Math.min(max.y, this.y));
    return this;
  }
  clampScalar(minVal, maxVal) {
    this.x = Math.max(minVal, Math.min(maxVal, this.x));
    this.y = Math.max(minVal, Math.min(maxVal, this.y));
    return this;
  }
  clampLength(min, max) {
    const length = this.length();
    return this.divideScalar(length || 1).multiplyScalar(
      Math.max(min, Math.min(max, length))
    );
  }
  floor() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this;
  }
  ceil() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this;
  }
  round() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  }
  roundToZero() {
    this.x = Math.trunc(this.x);
    this.y = Math.trunc(this.y);
    return this;
  }
  rotateAround(center, angle) {
    const c = Math.cos(angle);
    const s = Math.sin(angle);
    const x = this.x - center.x;
    const y = this.y - center.y;
    this.x = x * c - y * s + center.x;
    this.y = x * s + y * c + center.y;
    return this;
  }
  random() {
    this.x = Math.random();
    this.y = Math.random();
    return this;
  }
  getComponent(index) {
    if (index === 0) {
      return this.x;
    } else if (index === 1) {
      return this.y;
    }
    throw new Error(`index out of range: ${index}`);
  }
  setComponent(index, value) {
    if (index === 0) {
      this.x = value;
    } else if (index === 1) {
      this.y = value;
    } else {
      throw new Error(`index out of range: ${index}`);
    }
    return this;
  }
  get width() {
    return this.x;
  }
  set width(value) {
    this.x = value;
  }
  get height() {
    return this.y;
  }
  set height(value) {
    this.y = value;
  }
  get isVector2() {
    return true;
  }
  *[Symbol.iterator]() {
    yield this.x;
    yield this.y;
  }
}
const { VALUE: VALUE$1, OLD_VALUE: OLD_VALUE$1 } = InputControl;
class Vec2Control extends InputControl {
  getDefaultValue() {
    return new Vec2();
  }
  setValue(value, event = null) {
    if (!(value instanceof Vec2)) {
      value = new Vec2(value);
    }
    if (this[VALUE$1] && this[VALUE$1].equals(value)) {
      return false;
    }
    this[OLD_VALUE$1] = this[VALUE$1];
    this[VALUE$1] = new Vec2(value);
    this.emit("updated", this[VALUE$1], this[OLD_VALUE$1], event);
    return true;
  }
}
const { VALUE, OLD_VALUE } = InputControl;
class NavigationControl extends InputControl {
  getDefaultValue() {
    return { deltaX: 0, deltaY: 0, deltaZ: 0, event: null };
  }
  setValue(wheelEvent, event = null) {
    const delta = {
      deltaX: wheelEvent.deltaX || 0,
      deltaY: wheelEvent.deltaY || 0,
      deltaZ: wheelEvent.deltaZ || 0,
      event: wheelEvent
    };
    this[OLD_VALUE] = this[VALUE];
    this[VALUE] = delta;
    this.emit("updated", this[VALUE], this[OLD_VALUE], event);
    return true;
  }
  get deltaY() {
    return this.value.deltaY;
  }
  get deltaX() {
    return this.value.deltaX;
  }
  get deltaZ() {
    return this.value.deltaZ;
  }
  get event() {
    return this.value.event;
  }
  get isTrackpadPinchZoom() {
    return this.event && (this.event.ctrlKey || this.event.metaKey);
  }
  get isMouseWheelZoom() {
    if (!this.event || this.isTrackpadPinchZoom) {
      return false;
    }
    const isVerticalOnly = Math.abs(this.deltaX) <= 0.1;
    const isSignificantVertical = Math.abs(this.deltaY) >= 10;
    return isVerticalOnly && isSignificantVertical;
  }
  get isTrackpadPan() {
    if (!this.event || this.isTrackpadPinchZoom) {
      return false;
    }
    return Math.abs(this.deltaX) > 0.1 || Math.abs(this.deltaY) > 0.1;
  }
}
class MouseDevice extends InputDevice {
  constructor(params = {}) {
    super(params);
    __privateAdd(this, _MouseDevice_instances);
    __privateAdd(this, _mousedownListener);
    __privateAdd(this, _mouseupListener);
    __privateAdd(this, _mousemoveListener);
    __privateAdd(this, _contextmenuListener);
    __privateAdd(this, _wheelListener);
    this.shouldPreventDefault = params.shouldPreventDefault;
    __privateMethod(this, _MouseDevice_instances, createControls_fn).call(this);
    __privateSet(this, _mousedownListener, __privateMethod(this, _MouseDevice_instances, handleMousedown_fn).bind(this));
    __privateSet(this, _mouseupListener, __privateMethod(this, _MouseDevice_instances, handleMouseup_fn).bind(this));
    __privateSet(this, _mousemoveListener, __privateMethod(this, _MouseDevice_instances, handleMousemove_fn).bind(this));
    __privateSet(this, _contextmenuListener, __privateMethod(this, _MouseDevice_instances, handleContextmenu_fn).bind(this));
    __privateSet(this, _wheelListener, __privateMethod(this, _MouseDevice_instances, handleWheel_fn).bind(this));
  }
  onStart() {
    this.container.addEventListener("mousedown", __privateGet(this, _mousedownListener));
    this.container.addEventListener("mouseup", __privateGet(this, _mouseupListener));
    this.container.addEventListener("mousemove", __privateGet(this, _mousemoveListener));
    this.container.addEventListener("contextmenu", __privateGet(this, _contextmenuListener));
    this.container.addEventListener("wheel", __privateGet(this, _wheelListener), { passive: false });
  }
  onStop() {
    this.container.removeEventListener("mousedown", __privateGet(this, _mousedownListener));
    this.container.removeEventListener("mouseup", __privateGet(this, _mouseupListener));
    this.container.removeEventListener("mousemove", __privateGet(this, _mousemoveListener));
    this.container.removeEventListener("contextmenu", __privateGet(this, _contextmenuListener));
    this.container.removeEventListener("wheel", __privateGet(this, _wheelListener), { passive: false });
  }
}
_mousedownListener = new WeakMap();
_mouseupListener = new WeakMap();
_mousemoveListener = new WeakMap();
_contextmenuListener = new WeakMap();
_wheelListener = new WeakMap();
_MouseDevice_instances = new WeakSet();
createControls_fn = function() {
  this.registerControl(new ButtonControl({
    device: this,
    name: "leftButton"
  }));
  this.registerControl(new ButtonControl({
    device: this,
    name: "rightButton"
  }));
  this.registerControl(new ButtonControl({
    device: this,
    name: "middleButton"
  }));
  this.registerControl(new ButtonControl({
    device: this,
    name: "backButton"
  }));
  this.registerControl(new ButtonControl({
    device: this,
    name: "forwardButton"
  }));
  this.registerControl(new Vec2Control({
    device: this,
    name: "position"
  }));
  this.registerControl(new NavigationControl({
    device: this,
    name: "navigation"
  }));
};
handleMousedown_fn = function(event) {
  const buttonName = getButtonName(event.button);
  const control = this.getControl(buttonName);
  this.preventDefault(event, control);
  if (control && !control.isPressed) {
    control.press(event);
  }
};
handleMouseup_fn = function(event) {
  const buttonName = getButtonName(event.button);
  const control = this.getControl(buttonName);
  this.preventDefault(event, control);
  if (control && control.isPressed) {
    control.release(event);
  }
};
handleMousemove_fn = function(event) {
  const positionControl = this.getControl("position");
  positionControl.setValue({
    x: event.clientX,
    y: event.clientY
  }, event);
};
handleContextmenu_fn = function(event) {
  const rightButtonControl = this.getControl("rightButton");
  this.preventDefault(event, rightButtonControl);
};
handleWheel_fn = function(event) {
  const navigationControl = this.getControl("navigation");
  this.preventDefault(event, navigationControl);
  navigationControl.setValue(event, event);
};
__publicField(MouseDevice, "$name", "mouse");
const BUTTON_NAMES = {
  0: "leftButton",
  1: "middleButton",
  2: "rightButton",
  3: "backButton",
  4: "forwardButton"
};
function getButtonName(button) {
  return BUTTON_NAMES[button] || `button${button}`;
}
class TouchDevice extends InputDevice {
  constructor(params = {}) {
    super(params);
    __privateAdd(this, _TouchDevice_instances);
    __privateAdd(this, _touchstartListener);
    __privateAdd(this, _touchmoveListener);
    __privateAdd(this, _touchendListener);
    __privateAdd(this, _touchcancelListener);
    __privateAdd(this, _activeTouch, null);
    __privateAdd(this, _startX, 0);
    __privateAdd(this, _startY, 0);
    __privateAdd(this, _currentX, 0);
    __privateAdd(this, _currentY, 0);
    __privateAdd(this, _touchStartTime, 0);
    this.swipeThreshold = params.swipeThreshold ?? 30;
    this.tapThreshold = params.tapThreshold ?? 20;
    this.tapMaxDuration = params.tapMaxDuration ?? 300;
    this.shouldPreventDefault = params.shouldPreventDefault;
    __privateMethod(this, _TouchDevice_instances, createControls_fn2).call(this);
    __privateSet(this, _touchstartListener, __privateMethod(this, _TouchDevice_instances, handleTouchstart_fn).bind(this));
    __privateSet(this, _touchmoveListener, __privateMethod(this, _TouchDevice_instances, handleTouchmove_fn).bind(this));
    __privateSet(this, _touchendListener, __privateMethod(this, _TouchDevice_instances, handleTouchend_fn).bind(this));
    __privateSet(this, _touchcancelListener, __privateMethod(this, _TouchDevice_instances, handleTouchcancel_fn).bind(this));
  }
  onStart() {
    this.container.addEventListener("touchstart", __privateGet(this, _touchstartListener), { passive: false });
    this.container.addEventListener("touchmove", __privateGet(this, _touchmoveListener), { passive: false });
    this.container.addEventListener("touchend", __privateGet(this, _touchendListener));
    this.container.addEventListener("touchcancel", __privateGet(this, _touchcancelListener));
  }
  onStop() {
    this.container.removeEventListener("touchstart", __privateGet(this, _touchstartListener));
    this.container.removeEventListener("touchmove", __privateGet(this, _touchmoveListener));
    this.container.removeEventListener("touchend", __privateGet(this, _touchendListener));
    this.container.removeEventListener("touchcancel", __privateGet(this, _touchcancelListener));
  }
}
_touchstartListener = new WeakMap();
_touchmoveListener = new WeakMap();
_touchendListener = new WeakMap();
_touchcancelListener = new WeakMap();
_activeTouch = new WeakMap();
_startX = new WeakMap();
_startY = new WeakMap();
_currentX = new WeakMap();
_currentY = new WeakMap();
_touchStartTime = new WeakMap();
_TouchDevice_instances = new WeakSet();
createControls_fn2 = function() {
  this.registerControl(new ButtonControl({
    device: this,
    name: "swipeUp"
  }));
  this.registerControl(new ButtonControl({
    device: this,
    name: "swipeDown"
  }));
  this.registerControl(new ButtonControl({
    device: this,
    name: "swipeLeft"
  }));
  this.registerControl(new ButtonControl({
    device: this,
    name: "swipeRight"
  }));
  this.registerControl(new Vec2Control({
    device: this,
    name: "position"
  }));
  this.registerControl(new Vec2Control({
    device: this,
    name: "delta"
  }));
  this.registerControl(new ButtonControl({
    device: this,
    name: "tap"
  }));
};
handleTouchstart_fn = function(event) {
  if (__privateGet(this, _activeTouch) !== null) {
    return;
  }
  const touch = event.touches[0];
  __privateSet(this, _activeTouch, touch.identifier);
  __privateSet(this, _startX, touch.clientX);
  __privateSet(this, _startY, touch.clientY);
  __privateSet(this, _currentX, touch.clientX);
  __privateSet(this, _currentY, touch.clientY);
  __privateSet(this, _touchStartTime, Date.now());
  const positionControl = this.getControl("position");
  positionControl.setValue({
    x: touch.clientX,
    y: touch.clientY
  }, event);
  this.preventDefault(event, positionControl);
};
handleTouchmove_fn = function(event) {
  const touch = __privateMethod(this, _TouchDevice_instances, findActiveTouch_fn).call(this, event.touches);
  if (!touch) {
    return;
  }
  const previousX = __privateGet(this, _currentX);
  const previousY = __privateGet(this, _currentY);
  __privateSet(this, _currentX, touch.clientX);
  __privateSet(this, _currentY, touch.clientY);
  const positionControl = this.getControl("position");
  positionControl.setValue({
    x: touch.clientX,
    y: touch.clientY
  }, event);
  const deltaControl = this.getControl("delta");
  deltaControl.setValue({
    x: __privateGet(this, _currentX) - previousX,
    y: __privateGet(this, _currentY) - previousY
  }, event);
  __privateMethod(this, _TouchDevice_instances, updateVerticalSwipes_fn).call(this, event);
  __privateMethod(this, _TouchDevice_instances, updateHorizontalSwipes_fn).call(this, event);
  this.preventDefault(event, positionControl);
};
updateVerticalSwipes_fn = function(event) {
  const deltaY = __privateGet(this, _startY) - __privateGet(this, _currentY);
  const swipeUpControl = this.getControl("swipeUp");
  const swipeDownControl = this.getControl("swipeDown");
  if (deltaY > this.swipeThreshold) {
    if (!swipeUpControl.isPressed) {
      swipeUpControl.press(event);
    }
  } else if (swipeUpControl.isPressed) {
    swipeUpControl.release(event);
  }
  if (deltaY < -this.swipeThreshold) {
    if (!swipeDownControl.isPressed) {
      swipeDownControl.press(event);
    }
  } else if (swipeDownControl.isPressed) {
    swipeDownControl.release(event);
  }
};
updateHorizontalSwipes_fn = function(event) {
  const deltaX = __privateGet(this, _startX) - __privateGet(this, _currentX);
  const swipeLeftControl = this.getControl("swipeLeft");
  const swipeRightControl = this.getControl("swipeRight");
  if (deltaX > this.swipeThreshold) {
    if (!swipeLeftControl.isPressed) {
      swipeLeftControl.press(event);
    }
  } else if (swipeLeftControl.isPressed) {
    swipeLeftControl.release(event);
  }
  if (deltaX < -this.swipeThreshold) {
    if (!swipeRightControl.isPressed) {
      swipeRightControl.press(event);
    }
  } else if (swipeRightControl.isPressed) {
    swipeRightControl.release(event);
  }
};
handleTouchend_fn = function(event) {
  if (!__privateMethod(this, _TouchDevice_instances, isTouchActive_fn).call(this, event.changedTouches)) {
    return;
  }
  const touch = __privateMethod(this, _TouchDevice_instances, findChangedTouch_fn).call(this, event.changedTouches);
  if (touch) {
    __privateMethod(this, _TouchDevice_instances, detectTap_fn).call(this, touch, event);
  }
  __privateMethod(this, _TouchDevice_instances, releaseAllSwipes_fn).call(this, event);
  __privateSet(this, _activeTouch, null);
};
detectTap_fn = function(touch, event) {
  const duration = Date.now() - __privateGet(this, _touchStartTime);
  const deltaX = Math.abs(touch.clientX - __privateGet(this, _startX));
  const deltaY = Math.abs(touch.clientY - __privateGet(this, _startY));
  const distance = Math.max(deltaX, deltaY);
  if (duration <= this.tapMaxDuration && distance <= this.tapThreshold) {
    const tapControl = this.getControl("tap");
    tapControl.press(event);
    tapControl.release(event);
  }
};
findChangedTouch_fn = function(changedTouches) {
  for (let i = 0; i < changedTouches.length; i++) {
    if (changedTouches[i].identifier === __privateGet(this, _activeTouch)) {
      return changedTouches[i];
    }
  }
  return null;
};
handleTouchcancel_fn = function(event) {
  if (!__privateMethod(this, _TouchDevice_instances, isTouchActive_fn).call(this, event.changedTouches)) {
    return;
  }
  __privateMethod(this, _TouchDevice_instances, releaseAllSwipes_fn).call(this, event);
  __privateSet(this, _activeTouch, null);
};
releaseAllSwipes_fn = function(event) {
  const swipeUpControl = this.getControl("swipeUp");
  const swipeDownControl = this.getControl("swipeDown");
  const swipeLeftControl = this.getControl("swipeLeft");
  const swipeRightControl = this.getControl("swipeRight");
  if (swipeUpControl.isPressed) {
    swipeUpControl.release(event);
  }
  if (swipeDownControl.isPressed) {
    swipeDownControl.release(event);
  }
  if (swipeLeftControl.isPressed) {
    swipeLeftControl.release(event);
  }
  if (swipeRightControl.isPressed) {
    swipeRightControl.release(event);
  }
};
findActiveTouch_fn = function(touches) {
  for (let i = 0; i < touches.length; i++) {
    if (touches[i].identifier === __privateGet(this, _activeTouch)) {
      return touches[i];
    }
  }
  return null;
};
isTouchActive_fn = function(changedTouches) {
  for (let i = 0; i < changedTouches.length; i++) {
    if (changedTouches[i].identifier === __privateGet(this, _activeTouch)) {
      return true;
    }
  }
  return false;
};
__publicField(TouchDevice, "$name", "touch");
class InputSystem extends PerkyModule {
  constructor(options = {}) {
    const { bindings = [] } = options;
    super(options);
    __privateAdd(this, _InputSystem_instances);
    this.create(InputBinder, {
      $bind: "inputBinder",
      bindings
    });
    __privateMethod(this, _InputSystem_instances, initEvents_fn2).call(this);
  }
  onInstall(host) {
    this.registerDevice(KeyboardDevice, {
      $id: "keyboard",
      $bind: "keyboard"
    });
    this.registerDevice(MouseDevice, {
      $id: "mouse",
      $bind: "mouse",
      container: host.element
    });
    this.registerDevice(TouchDevice, {
      $id: "touch",
      $bind: "touch",
      container: host.element,
      shouldPreventDefault: true
    });
    this.delegateTo(host, [
      "registerDevice",
      "unregisterDevice",
      "getDevice",
      "isPressed",
      "isPressedAny",
      "getAllPressed",
      "getValueFor",
      "getValueAny",
      "addControl",
      "getControl",
      "getControlAny",
      "getPressedControls"
    ]);
    this.delegateTo(host, [
      "inputBinder",
      "bindInput",
      "unbind",
      "getBinding",
      "hasBinding",
      "getBindingsForInput",
      "getBindingsForAction",
      "getAllBindings",
      "clearBindings",
      "bindCombo"
    ]);
    this.delegateTo(host, [
      "isKeyPressed",
      "isMousePressed",
      "isTouchPressed",
      "getKeyValue",
      "getMouseValue",
      "getTouchValue",
      "isActionPressed",
      "getActionControls",
      "getInputValue",
      "getInputValueAny",
      "getDirection"
    ]);
    this.delegateEventsTo(host, ["input:triggered"]);
  }
  registerDevice(DeviceClass, options = {}) {
    return this.create(DeviceClass, options);
  }
  getDevice(name) {
    return this.getChild(name);
  }
  isPressed(deviceName, controlName) {
    const device = this.getDevice(deviceName);
    return device ? device.isPressed(controlName) : false;
  }
  getValueFor(deviceName, controlName) {
    const device = this.getDevice(deviceName);
    return device ? device.getValueFor(controlName) : void 0;
  }
  getControl(deviceName, controlName) {
    const device = this.getDevice(deviceName);
    return device ? device.getControl(controlName) ?? null : null;
  }
  listDeviceNames() {
    return this.listNamesFor("inputDevice");
  }
  isPressedAny(controlName) {
    const deviceNames = this.listDeviceNames();
    for (const name of deviceNames) {
      const device = this.getChild(name);
      if (device && device.isPressed(controlName)) {
        return true;
      }
    }
    return false;
  }
  getValueAny(controlName) {
    const deviceNames = this.listDeviceNames();
    for (const name of deviceNames) {
      const device = this.getChild(name);
      if (device) {
        const value = device.getValueFor(controlName);
        if (value !== void 0) {
          return value;
        }
      }
    }
    return void 0;
  }
  getControlAny(controlName) {
    const deviceNames = this.listDeviceNames();
    for (const name of deviceNames) {
      const device = this.getChild(name);
      if (device) {
        const control = device.getControl(controlName);
        if (control) {
          return control;
        }
      }
    }
    return null;
  }
  getAllPressed(controlName) {
    const results = [];
    const deviceNames = this.listDeviceNames();
    for (const name of deviceNames) {
      const device = this.getChild(name);
      if (device && device.isPressed(controlName)) {
        results.push(device);
      }
    }
    return results;
  }
  getPressedControls(deviceName) {
    const device = this.getDevice(deviceName);
    return device ? device.getPressedControls() : [];
  }
  getAllValues(controlName) {
    const results = [];
    const deviceNames = this.listDeviceNames();
    for (const name of deviceNames) {
      const device = this.getChild(name);
      if (device) {
        const value = device.getValueFor(controlName);
        if (value !== void 0) {
          results.push({ device, value });
        }
      }
    }
    return results;
  }
  addControl(deviceNameOrControl, ControlOrParams = {}, params = {}) {
    if (typeof deviceNameOrControl === "string") {
      const device = this.getDevice(deviceNameOrControl);
      if (!device) {
        throw new Error(`Device '${deviceNameOrControl}' not found`);
      }
      return device.findOrCreateControl(ControlOrParams, params);
    } else if (typeof deviceNameOrControl === "function") {
      return this.addControlToFirst(deviceNameOrControl, ControlOrParams);
    }
    return null;
  }
  addControlToFirst(Control, params = {}) {
    const deviceNames = this.listDeviceNames();
    const firstDevice = deviceNames.length > 0 ? this.getChild(deviceNames[0]) : null;
    if (!firstDevice) {
      throw new Error("No devices available");
    }
    return firstDevice.findOrCreateControl(Control, params);
  }
  addControlToAll(Control, params = {}) {
    const results = [];
    const deviceNames = this.listDeviceNames();
    for (const name of deviceNames) {
      const device = this.getChild(name);
      if (device) {
        const control = device.findOrCreateControl(Control, params);
        results.push({ device, control });
      }
    }
    return results;
  }
  deviceKeyFor(device) {
    return this.childrenRegistry.keyFor(device);
  }
  getInputValue(deviceName, controlName) {
    return this.getValueFor(deviceName, controlName);
  }
  getInputValueAny(controlName) {
    return this.getValueAny(controlName);
  }
  isKeyPressed(keyName) {
    return this.isPressed("keyboard", keyName);
  }
  isMousePressed(buttonName) {
    return this.isPressed("mouse", buttonName);
  }
  getKeyValue(keyName) {
    return this.getInputValue("keyboard", keyName);
  }
  getMouseValue(buttonName) {
    return this.getInputValue("mouse", buttonName);
  }
  isTouchPressed(controlName) {
    return this.isPressed("touch", controlName);
  }
  getTouchValue(controlName) {
    return this.getInputValue("touch", controlName);
  }
  isActionPressed(actionName, controllerName = null) {
    const bindings = this.inputBinder.getBindingsForAction(actionName, controllerName, "pressed");
    for (const binding of bindings) {
      if (typeof binding.shouldTrigger === "function") {
        if (binding.shouldTrigger(this)) {
          return true;
        }
      } else if (this.isPressed(binding.deviceName, binding.controlName)) {
        return true;
      }
    }
    return false;
  }
  getActionControls(actionName, controllerName = null) {
    const bindings = this.inputBinder.getBindingsForAction(actionName, controllerName, "pressed");
    const controls = [];
    for (const binding of bindings) {
      controls.push(...__privateMethod(this, _InputSystem_instances, getControlsFromBinding_fn).call(this, binding));
    }
    return controls;
  }
  getDirection(name = "move") {
    const up = name + "Up";
    const down = name + "Down";
    const left = name + "Left";
    const right = name + "Right";
    const x = (this.isActionPressed(right) ? 1 : 0) - (this.isActionPressed(left) ? 1 : 0);
    const y = (this.isActionPressed(up) ? 1 : 0) - (this.isActionPressed(down) ? 1 : 0);
    const vec = new Vec2(x, y);
    return vec.length() > 0 ? vec.clone().normalize() : vec;
  }
}
_InputSystem_instances = new WeakSet();
getControlsFromBinding_fn = function(binding) {
  const controls = [];
  if (binding.controls && Array.isArray(binding.controls)) {
    for (const { deviceName, controlName } of binding.controls) {
      const control = this.getControl(deviceName, controlName);
      if (control) {
        controls.push(control);
      }
    }
  } else {
    const control = this.getControl(binding.deviceName, binding.controlName);
    if (control) {
      controls.push(control);
    }
  }
  return controls;
};
initEvents_fn2 = function() {
  this.on("control:pressed", __privateMethod(this, _InputSystem_instances, handleInputEvent_fn).bind(this, "pressed"));
  this.on("control:released", __privateMethod(this, _InputSystem_instances, handleInputEvent_fn).bind(this, "released"));
};
handleInputEvent_fn = function(eventType, control, event, device) {
  const deviceName = this.deviceKeyFor(device);
  const matchingBindings = this.inputBinder.getBindingsForInput({
    deviceName,
    controlName: control.name,
    eventType
  });
  matchingBindings.forEach((binding) => {
    if (typeof binding.shouldTrigger !== "function" || binding.shouldTrigger(this)) {
      this.emit("input:triggered", binding, event, device);
    }
  });
};
__publicField(InputSystem, "$category", "inputSystem");
class Application extends PerkyModule {
  constructor(options = {}) {
    var _a2;
    super(options);
    __privateAdd(this, _Application_instances);
    const manifestData2 = options.manifest || this.constructor.manifest || {};
    this.create(Manifest, {
      $bind: "manifest",
      data: manifestData2.export ? manifestData2.export() : manifestData2
    });
    this.create(ActionDispatcher, {
      $bind: "actionDispatcher"
    });
    this.create(PerkyView, {
      $bind: "perkyView",
      className: "perky-application"
    });
    this.create(SourceManager, {
      $bind: "sourceManager",
      loaders: new Registry(loaders),
      manifest: this.manifest
    });
    this.create(InputSystem, {
      $bind: "inputSystem",
      bindings: options.bindings
    });
    this.actionDispatcher.on("controller:set", __privateMethod(this, _Application_instances, autoRegisterBindings_fn).bind(this));
    __privateMethod(this, _Application_instances, createMainController_fn).call(this);
    (_a2 = this.configureApplication) == null ? void 0 : _a2.call(this, options);
  }
  async preload() {
    return this.loadTag("preload");
  }
}
_Application_instances = new WeakSet();
createMainController_fn = function() {
  const ControllerClass = this.constructor.ActionController;
  if (ControllerClass) {
    const controller = this.registerController(ControllerClass);
    this.setActiveControllers(controller.$id);
  }
};
autoRegisterBindings_fn = function(controllerName, controller) {
  var _a2;
  const Controller = controller.constructor;
  const bindings = ((_a2 = Controller.normalizeBindings) == null ? void 0 : _a2.call(Controller, controllerName)) || [];
  for (const binding of bindings) {
    this.bindInput({
      controlName: binding.key,
      actionName: binding.action,
      controllerName: binding.controllerName,
      eventType: binding.eventType
    });
  }
};
__publicField(Application, "$category", "application");
__publicField(Application, "$eagerStart", false);
__publicField(Application, "ActionController", ActionController);
class GameLoop extends PerkyModule {
  constructor(params = {}) {
    super(params);
    __privateAdd(this, _paused, false);
    __privateAdd(this, _fpsLimited, false);
    this.lastTime = 0;
    this.accumulator = 0;
    this.maxFrameSkip = params.maxFrameSkip || 5;
    this.frameCount = 0;
    this.screenFrameCount = 0;
    this.lastFpsUpdate = 0;
    this.fps = params.fps ?? 60;
    this.frameInterval = 1e3 / this.fps;
    __privateSet(this, _fpsLimited, params.fpsLimited ?? false);
  }
  onInstall(host) {
    this.delegateTo(host, [
      "paused",
      "pause",
      "resume",
      "setFps",
      "getFps",
      "getCurrentFps",
      "getScreenFps",
      "fpsLimited",
      "setFpsLimited"
    ]);
    this.delegateEventsTo(host, [
      "update",
      "render",
      "pause",
      "resume",
      "changed:fps",
      "changed:fpsLimited"
    ]);
  }
  get paused() {
    return __privateGet(this, _paused);
  }
  set paused(value) {
    __privateSet(this, _paused, value);
  }
  get running() {
    return super.running && !__privateGet(this, _paused);
  }
  onStart() {
    __privateSet(this, _paused, false);
    this.lastTime = performance.now();
    this.accumulator = 0;
    this.frameCount = 0;
    this.lastFpsUpdate = this.lastTime;
    requestAnimationFrame((time) => update(this, time));
  }
  pause(...args) {
    if (!this.started || __privateGet(this, _paused)) {
      return false;
    }
    __privateSet(this, _paused, true);
    this.emit("pause", ...args);
    return true;
  }
  resume(...args) {
    if (!this.started || !__privateGet(this, _paused)) {
      return false;
    }
    __privateSet(this, _paused, false);
    this.lastTime = performance.now();
    this.emit("resume", ...args);
    requestAnimationFrame((time) => update(this, time));
    return true;
  }
  getFps() {
    return this.fps;
  }
  setFps(fps) {
    this.fps = fps;
    this.frameInterval = 1e3 / fps;
    this.emit("changed:fps", fps);
  }
  getCurrentFps() {
    return this.currentFps || 0;
  }
  getScreenFps() {
    return this.screenFps || 0;
  }
  get fpsLimited() {
    return __privateGet(this, _fpsLimited);
  }
  setFpsLimited(value) {
    __privateSet(this, _fpsLimited, value);
    this.emit("changed:fpsLimited", value);
  }
}
_paused = new WeakMap();
_fpsLimited = new WeakMap();
__publicField(GameLoop, "$category", "gameLoop");
function update(gameLoop, currentTime) {
  if (!gameLoop.started || gameLoop.paused) {
    return false;
  }
  const deltaTime = currentTime - gameLoop.lastTime;
  gameLoop.lastTime = currentTime;
  gameLoop.screenFrameCount++;
  if (gameLoop.fpsLimited) {
    const { frameInterval, maxFrameSkip } = gameLoop;
    gameLoop.accumulator += Math.min(deltaTime, frameInterval * maxFrameSkip);
    while (gameLoop.accumulator >= frameInterval) {
      gameLoop.emit("update", frameInterval / 1e3);
      gameLoop.accumulator -= frameInterval;
      gameLoop.frameCount++;
    }
    const frameProgress = gameLoop.accumulator / frameInterval;
    gameLoop.emit("render", frameProgress, gameLoop.currentFps, gameLoop.screenFps);
  } else {
    gameLoop.emit("update", deltaTime / 1e3);
    gameLoop.emit("render", 1, gameLoop.currentFps, gameLoop.screenFps);
    gameLoop.frameCount++;
  }
  if (currentTime - gameLoop.lastFpsUpdate >= 1e3) {
    gameLoop.currentFps = gameLoop.frameCount;
    gameLoop.screenFps = gameLoop.screenFrameCount;
    gameLoop.frameCount = 0;
    gameLoop.screenFrameCount = 0;
    gameLoop.lastFpsUpdate = currentTime;
  }
  requestAnimationFrame((time) => update(gameLoop, time));
  return true;
}
class Layer extends PerkyModule {
  constructor(options = {}) {
    super(options);
    this.zIndex = options.zIndex ?? 0;
    this.visible = options.visible ?? true;
    this.opacity = options.opacity ?? 1;
    this.pointerEvents = options.pointerEvents ?? "auto";
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
  mount(container) {
    this.container = container;
    if (this.element) {
      container.appendChild(this.element);
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
class CanvasObjectRenderer {
  constructor() {
    __privateAdd(this, _context, null);
    __privateAdd(this, _collected, []);
  }
  static get handles() {
    return [];
  }
  get ctx() {
    var _a2;
    return ((_a2 = __privateGet(this, _context)) == null ? void 0 : _a2.ctx) || null;
  }
  get context() {
    return __privateGet(this, _context);
  }
  init(context) {
    __privateSet(this, _context, context);
  }
  reset() {
    __privateSet(this, _collected, []);
  }
  collect(object, opacity, hints = null) {
    __privateGet(this, _collected).push({ object, opacity, hints });
  }
  flush() {
    const ctx = this.ctx;
    for (const { object, opacity, hints } of __privateGet(this, _collected)) {
      ctx.save();
      const m = object.worldMatrix;
      ctx.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
      ctx.globalAlpha = opacity;
      if (hints == null ? void 0 : hints.filter) {
        ctx.filter = hints.filter;
      }
      this.render(object, ctx, hints);
      ctx.restore();
    }
  }
  render() {
  }
  dispose() {
    __privateSet(this, _collected, []);
    __privateSet(this, _context, null);
  }
}
_context = new WeakMap();
_collected = new WeakMap();
class CanvasCircleRenderer extends CanvasObjectRenderer {
  static get handles() {
    return [Circle];
  }
  render(circle, ctx) {
    const offsetX = -circle.radius * 2 * circle.anchorX + circle.radius;
    const offsetY = -circle.radius * 2 * circle.anchorY + circle.radius;
    ctx.beginPath();
    ctx.arc(offsetX, offsetY, circle.radius, 0, Math.PI * 2);
    ctx.fillStyle = circle.color;
    ctx.fill();
    if (circle.strokeWidth > 0) {
      ctx.strokeStyle = circle.strokeColor;
      ctx.lineWidth = circle.strokeWidth;
      ctx.stroke();
    }
  }
}
class CanvasRectangleRenderer extends CanvasObjectRenderer {
  static get handles() {
    return [Rectangle];
  }
  render(rect, ctx) {
    const offsetX = -rect.width * rect.anchorX;
    const offsetY = -rect.height * rect.anchorY;
    if (rect.color && rect.color !== "transparent") {
      ctx.fillStyle = rect.color;
      ctx.fillRect(offsetX, offsetY, rect.width, rect.height);
    }
    if (rect.strokeWidth > 0) {
      ctx.strokeStyle = rect.strokeColor;
      ctx.lineWidth = rect.strokeWidth;
      ctx.strokeRect(offsetX, offsetY, rect.width, rect.height);
    }
  }
}
class CanvasSpriteRenderer extends CanvasObjectRenderer {
  static get handles() {
    return [Sprite];
  }
  render(sprite, ctx) {
    const region = sprite.region;
    if (!region || !region.image) {
      return;
    }
    const img = region.image;
    if (!img.complete || img.naturalWidth === 0) {
      return;
    }
    const { x, y, width: w, height: h } = region.bounds;
    const bounds = sprite.getBounds();
    ctx.save();
    ctx.scale(1, -1);
    ctx.drawImage(
      img,
      x,
      y,
      w,
      h,
      bounds.minX,
      -bounds.maxY,
      bounds.width,
      bounds.height
    );
    ctx.restore();
  }
}
class CanvasDebugGizmoRenderer extends CanvasObjectRenderer {
  static get handles() {
    return [];
  }
  collectGizmo(object, opacity) {
    this.collect(object, opacity, null);
  }
  flush() {
    const ctx = this.ctx;
    for (const { object, opacity } of this.collected) {
      ctx.save();
      ctx.globalAlpha = opacity;
      const m = object.worldMatrix;
      ctx.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
      this.renderGizmos(object, ctx);
      ctx.restore();
    }
  }
  get collected() {
    return this.constructor.prototype._collected || [];
  }
  collect(object, opacity, hints) {
    if (!this.constructor.prototype._collected) {
      this.constructor.prototype._collected = [];
    }
    this.constructor.prototype._collected.push({ object, opacity, hints });
  }
  reset() {
    this.constructor.prototype._collected = [];
  }
  renderGizmos(object, ctx) {
    const gizmos = object.debugGizmos;
    if (!gizmos) {
      return;
    }
    const bounds = object.getBounds();
    const hasSize = bounds.width > 0 || bounds.height > 0;
    if (gizmos.bounds && hasSize) {
      this.renderBounds(ctx, bounds);
    }
    if (gizmos.anchor) {
      this.renderAnchor(ctx, object, bounds);
    }
    if (gizmos.pivot) {
      this.renderPivot(ctx, object);
    }
    if (gizmos.origin) {
      this.renderOrigin(ctx);
    }
  }
  renderBounds(ctx, bounds) {
    ctx.strokeStyle = "rgba(0, 255, 0, 0.8)";
    ctx.lineWidth = 0.02;
    ctx.setLineDash([0.05, 0.05]);
    ctx.strokeRect(bounds.minX, bounds.minY, bounds.width, bounds.height);
    ctx.setLineDash([]);
  }
  renderAnchor(ctx, object, bounds) {
    const anchorX = bounds.minX + object.anchorX * bounds.width;
    const anchorY = bounds.minY + object.anchorY * bounds.height;
    const size = 0.08;
    ctx.strokeStyle = "rgba(255, 255, 0, 1)";
    ctx.lineWidth = 0.02;
    ctx.beginPath();
    ctx.moveTo(anchorX - size, anchorY);
    ctx.lineTo(anchorX + size, anchorY);
    ctx.moveTo(anchorX, anchorY - size);
    ctx.lineTo(anchorX, anchorY + size);
    ctx.stroke();
    ctx.fillStyle = "rgba(255, 255, 0, 0.5)";
    ctx.beginPath();
    ctx.arc(anchorX, anchorY, size * 0.5, 0, Math.PI * 2);
    ctx.fill();
  }
  renderPivot(ctx, object) {
    const pivotX = object.pivotX;
    const pivotY = object.pivotY;
    const size = 0.06;
    ctx.strokeStyle = "rgba(255, 0, 255, 1)";
    ctx.lineWidth = 0.02;
    ctx.beginPath();
    ctx.arc(pivotX, pivotY, size, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(pivotX - size * 1.5, pivotY);
    ctx.lineTo(pivotX + size * 1.5, pivotY);
    ctx.moveTo(pivotX, pivotY - size * 1.5);
    ctx.lineTo(pivotX, pivotY + size * 1.5);
    ctx.stroke();
  }
  renderOrigin(ctx) {
    const size = 0.1;
    ctx.strokeStyle = "rgba(255, 0, 0, 1)";
    ctx.lineWidth = 0.025;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(size * 2, 0);
    ctx.stroke();
    ctx.strokeStyle = "rgba(0, 255, 0, 1)";
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, size * 2);
    ctx.stroke();
    ctx.fillStyle = "rgba(255, 255, 255, 1)";
    ctx.beginPath();
    ctx.arc(0, 0, 0.03, 0, Math.PI * 2);
    ctx.fill();
  }
}
class CanvasRenderer extends BaseRenderer {
  constructor(options = {}) {
    super(options);
    __privateAdd(this, _CanvasRenderer_instances);
    __privateAdd(this, _rendererRegistry, /* @__PURE__ */ new Map());
    __privateAdd(this, _renderers, []);
    __privateAdd(this, _debugGizmoRenderer, null);
    this.ctx = this.canvas.getContext("2d");
    __privateMethod(this, _CanvasRenderer_instances, setupDefaultRenderers_fn).call(this);
    this.applyPixelRatio();
    this.backgroundColor = options.backgroundColor ?? null;
    this.enableCulling = options.enableCulling ?? false;
    this.enableDebugGizmos = options.enableDebugGizmos ?? true;
    this.stats = {
      totalObjects: 0,
      renderedObjects: 0,
      culledObjects: 0
    };
  }
  registerRenderer(renderer) {
    renderer.init({ ctx: this.ctx, canvas: this.canvas });
    for (const ObjectClass of renderer.constructor.handles) {
      __privateGet(this, _rendererRegistry).set(ObjectClass, renderer);
    }
    if (!__privateGet(this, _renderers).includes(renderer)) {
      __privateGet(this, _renderers).push(renderer);
    }
    return this;
  }
  unregisterRenderer(renderer) {
    for (const ObjectClass of renderer.constructor.handles) {
      if (__privateGet(this, _rendererRegistry).get(ObjectClass) === renderer) {
        __privateGet(this, _rendererRegistry).delete(ObjectClass);
      }
    }
    const index = __privateGet(this, _renderers).indexOf(renderer);
    if (index !== -1) {
      __privateGet(this, _renderers).splice(index, 1);
    }
    renderer.dispose();
    return this;
  }
  onDispose() {
    for (const renderer of __privateGet(this, _renderers)) {
      renderer.dispose();
    }
    __privateSet(this, _renderers, []);
    __privateGet(this, _rendererRegistry).clear();
    if (__privateGet(this, _debugGizmoRenderer)) {
      __privateGet(this, _debugGizmoRenderer).dispose();
      __privateSet(this, _debugGizmoRenderer, null);
    }
    super.onDispose();
    this.ctx = null;
  }
  render(scene) {
    const ctx = this.ctx;
    this.stats.totalObjects = 0;
    this.stats.renderedObjects = 0;
    this.stats.culledObjects = 0;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    if (this.backgroundColor && this.backgroundColor !== "transparent") {
      ctx.fillStyle = this.backgroundColor;
      ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
    this.camera.update();
    ctx.save();
    this.camera.applyToContext(ctx, this.pixelRatio);
    scene.updateWorldMatrix(false);
    for (const renderer of __privateGet(this, _renderers)) {
      renderer.reset();
    }
    const debugGizmoRenderer = this.enableDebugGizmos ? __privateGet(this, _debugGizmoRenderer) : null;
    if (debugGizmoRenderer) {
      debugGizmoRenderer.reset();
    }
    traverseAndCollect(scene, __privateGet(this, _rendererRegistry), {
      camera: this.camera,
      enableCulling: this.enableCulling,
      stats: this.stats,
      debugGizmoRenderer
    });
    for (const renderer of __privateGet(this, _renderers)) {
      renderer.flush();
    }
    if (debugGizmoRenderer) {
      debugGizmoRenderer.flush();
    }
    ctx.restore();
  }
}
_rendererRegistry = new WeakMap();
_renderers = new WeakMap();
_debugGizmoRenderer = new WeakMap();
_CanvasRenderer_instances = new WeakSet();
setupDefaultRenderers_fn = function() {
  this.registerRenderer(new CanvasCircleRenderer());
  this.registerRenderer(new CanvasRectangleRenderer());
  this.registerRenderer(new CanvasSpriteRenderer());
  __privateSet(this, _debugGizmoRenderer, new CanvasDebugGizmoRenderer());
  __privateGet(this, _debugGizmoRenderer).init({ ctx: this.ctx, canvas: this.canvas });
};
__publicField(CanvasRenderer, "$name", "canvasRenderer");
const RENDERERS = {
  canvas: CanvasRenderer,
  webgl: WebGLRenderer
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
    return this;
  }
  render() {
    var _a2;
    if (((_a2 = this.renderer.renderGroups) == null ? void 0 : _a2.length) > 0) {
      this.renderer.render();
    } else if (this.content) {
      this.renderer.render(this.content);
    }
    return this;
  }
  resize(width, height) {
    const vp = this.calculateViewport(width, height);
    this.renderer.resize(vp.width, vp.height);
    this.applyViewport();
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
    const el = createElement("div", {
      html: content,
      style: {
        position: "absolute",
        pointerEvents: options.pointerEvents ?? "auto",
        willChange: "transform",
        left: "0",
        top: "0"
      }
    });
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
  mount(container) {
    return this.view.mount(container);
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
    return this.create(Camera, options);
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
    if (cameraOption instanceof Camera) {
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
  getRenderer(name) {
    return this.getLayer(name).renderer;
  }
  getHTML(name) {
    return this.getLayer(name).element;
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
  render() {
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
      "getRenderer",
      "getHTML",
      "removeLayer",
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
    var _a2, _b;
    if ((_b = (_a2 = this.view) == null ? void 0 : _a2.element) == null ? void 0 : _b.parentElement) {
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
class AudioContext {
  constructor() {
    __privateAdd(this, _AudioContext_instances);
    __privateAdd(this, _context2, null);
    __privateAdd(this, _masterGain, null);
    __privateAdd(this, _suspended, true);
    __privateAdd(this, _pendingDecodes, []);
    __privateAdd(this, _masterVolume, 1);
  }
  get context() {
    return __privateGet(this, _context2);
  }
  get masterGain() {
    return __privateGet(this, _masterGain);
  }
  get currentTime() {
    var _a2;
    return ((_a2 = __privateGet(this, _context2)) == null ? void 0 : _a2.currentTime) ?? 0;
  }
  get suspended() {
    return __privateGet(this, _suspended);
  }
  get sampleRate() {
    var _a2;
    return ((_a2 = __privateGet(this, _context2)) == null ? void 0 : _a2.sampleRate) ?? 44100;
  }
  get listener() {
    var _a2;
    return ((_a2 = __privateGet(this, _context2)) == null ? void 0 : _a2.listener) ?? null;
  }
  init() {
    if (__privateGet(this, _context2)) {
      return __privateGet(this, _context2);
    }
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) {
      throw new Error("Web Audio API is not supported in this browser");
    }
    __privateSet(this, _context2, new AudioContextClass());
    __privateSet(this, _masterGain, __privateGet(this, _context2).createGain());
    __privateGet(this, _masterGain).gain.setValueAtTime(__privateGet(this, _masterVolume), __privateGet(this, _context2).currentTime);
    __privateGet(this, _masterGain).connect(__privateGet(this, _context2).destination);
    __privateSet(this, _suspended, __privateGet(this, _context2).state === "suspended");
    if (__privateGet(this, _context2).state === "running") {
      __privateMethod(this, _AudioContext_instances, processPendingDecodes_fn).call(this);
    }
    return __privateGet(this, _context2);
  }
  async resume() {
    if (!__privateGet(this, _context2)) {
      this.init();
    }
    if (__privateGet(this, _context2).state === "suspended") {
      await __privateGet(this, _context2).resume();
      __privateSet(this, _suspended, false);
    }
    return this;
  }
  suspend() {
    if (__privateGet(this, _context2) && __privateGet(this, _context2).state === "running") {
      __privateGet(this, _context2).suspend();
      __privateSet(this, _suspended, true);
    }
    return this;
  }
  setMasterVolume(value) {
    __privateSet(this, _masterVolume, Math.max(0, Math.min(1, value)));
    if (__privateGet(this, _masterGain)) {
      __privateGet(this, _masterGain).gain.setValueAtTime(
        __privateGet(this, _masterVolume),
        __privateGet(this, _context2).currentTime
      );
    }
    return this;
  }
  getMasterVolume() {
    return __privateGet(this, _masterVolume);
  }
  createGain() {
    this.init();
    return __privateGet(this, _context2).createGain();
  }
  createOscillator() {
    this.init();
    return __privateGet(this, _context2).createOscillator();
  }
  createBufferSource() {
    this.init();
    return __privateGet(this, _context2).createBufferSource();
  }
  createPanner() {
    this.init();
    return __privateGet(this, _context2).createPanner();
  }
  createStereoPanner() {
    this.init();
    return __privateGet(this, _context2).createStereoPanner();
  }
  async decodeAudioData(arrayBuffer) {
    this.init();
    if (__privateGet(this, _context2).state === "suspended") {
      return new Promise((resolve, reject) => {
        __privateGet(this, _pendingDecodes).push({ buffer: arrayBuffer, resolve, reject });
      });
    }
    return __privateGet(this, _context2).decodeAudioData(arrayBuffer);
  }
  setListenerPosition(x, y, z = 0) {
    this.init();
    const listener = __privateGet(this, _context2).listener;
    if (listener.positionX) {
      listener.positionX.setValueAtTime(x, __privateGet(this, _context2).currentTime);
      listener.positionY.setValueAtTime(y, __privateGet(this, _context2).currentTime);
      listener.positionZ.setValueAtTime(z, __privateGet(this, _context2).currentTime);
    } else if (listener.setPosition) {
      listener.setPosition(x, y, z);
    }
    return this;
  }
  getListenerPosition() {
    var _a2;
    if (!((_a2 = __privateGet(this, _context2)) == null ? void 0 : _a2.listener)) {
      return { x: 0, y: 0, z: 0 };
    }
    const listener = __privateGet(this, _context2).listener;
    if (listener.positionX) {
      return {
        x: listener.positionX.value,
        y: listener.positionY.value,
        z: listener.positionZ.value
      };
    }
    return { x: 0, y: 0, z: 0 };
  }
  dispose() {
    if (__privateGet(this, _context2)) {
      __privateGet(this, _context2).close();
      __privateSet(this, _context2, null);
      __privateSet(this, _masterGain, null);
    }
  }
}
_context2 = new WeakMap();
_masterGain = new WeakMap();
_suspended = new WeakMap();
_pendingDecodes = new WeakMap();
_masterVolume = new WeakMap();
_AudioContext_instances = new WeakSet();
processPendingDecodes_fn = function() {
  for (const pending of __privateGet(this, _pendingDecodes)) {
    __privateGet(this, _context2).decodeAudioData(pending.buffer).then(pending.resolve).catch(pending.reject);
  }
  __privateSet(this, _pendingDecodes, []);
};
class AudioChannel extends PerkyModule {
  constructor(options = {}) {
    super(options);
    __privateAdd(this, _AudioChannel_instances);
    __privateAdd(this, _audioContext, null);
    __privateAdd(this, _gainNode, null);
    __privateAdd(this, _volume, 1);
    __privateAdd(this, _muted, false);
    __privateAdd(this, _sources, /* @__PURE__ */ new Map());
    __privateSet(this, _audioContext, options.audioContext);
    __privateSet(this, _volume, options.volume ?? 1);
  }
  get volume() {
    return __privateGet(this, _volume);
  }
  set volume(value) {
    __privateSet(this, _volume, Math.max(0, Math.min(1, value)));
    __privateMethod(this, _AudioChannel_instances, updateGain_fn).call(this);
  }
  get muted() {
    return __privateGet(this, _muted);
  }
  set muted(value) {
    __privateSet(this, _muted, Boolean(value));
    __privateMethod(this, _AudioChannel_instances, updateGain_fn).call(this);
  }
  get gainNode() {
    if (!__privateGet(this, _gainNode) && __privateGet(this, _audioContext)) {
      __privateSet(this, _gainNode, __privateGet(this, _audioContext).createGain());
      __privateGet(this, _gainNode).connect(__privateGet(this, _audioContext).masterGain);
      __privateMethod(this, _AudioChannel_instances, updateGain_fn).call(this);
    }
    return __privateGet(this, _gainNode);
  }
  get sources() {
    return Array.from(__privateGet(this, _sources).values());
  }
  get sourceCount() {
    return __privateGet(this, _sources).size;
  }
  onInstall() {
  }
  onDispose() {
    this.stopAll();
    if (__privateGet(this, _gainNode)) {
      __privateGet(this, _gainNode).disconnect();
      __privateSet(this, _gainNode, null);
    }
  }
  registerSource(source) {
    if (!source || !source.$id) {
      return false;
    }
    __privateGet(this, _sources).set(source.$id, source);
    this.emit("source:added", source);
    return true;
  }
  unregisterSource(source) {
    if (!source || !__privateGet(this, _sources).has(source.$id)) {
      return false;
    }
    __privateGet(this, _sources).delete(source.$id);
    this.emit("source:removed", source);
    return true;
  }
  getSource(id) {
    return __privateGet(this, _sources).get(id) || null;
  }
  hasSource(id) {
    return __privateGet(this, _sources).has(id);
  }
  stopAll() {
    for (const source of __privateGet(this, _sources).values()) {
      if (source.stop) {
        source.stop();
      }
    }
    __privateGet(this, _sources).clear();
  }
  setVolume(value) {
    this.volume = value;
    this.emit("volume:changed", __privateGet(this, _volume));
    return this;
  }
  getVolume() {
    return __privateGet(this, _volume);
  }
  mute() {
    this.muted = true;
    this.emit("muted");
    return this;
  }
  unmute() {
    this.muted = false;
    this.emit("unmuted");
    return this;
  }
  toggleMute() {
    if (__privateGet(this, _muted)) {
      this.unmute();
    } else {
      this.mute();
    }
    return this;
  }
}
_audioContext = new WeakMap();
_gainNode = new WeakMap();
_volume = new WeakMap();
_muted = new WeakMap();
_sources = new WeakMap();
_AudioChannel_instances = new WeakSet();
updateGain_fn = function() {
  var _a2;
  if (__privateGet(this, _gainNode) && ((_a2 = __privateGet(this, _audioContext)) == null ? void 0 : _a2.context)) {
    const effectiveVolume = __privateGet(this, _muted) ? 0 : __privateGet(this, _volume);
    __privateGet(this, _gainNode).gain.setValueAtTime(
      effectiveVolume,
      __privateGet(this, _audioContext).context.currentTime
    );
  }
};
__publicField(AudioChannel, "$category", "audioChannel");
class AudioSource extends PerkyModule {
  constructor(options = {}) {
    super(options);
    __privateAdd(this, _AudioSource_instances);
    __privateAdd(this, _audioContext2, null);
    __privateAdd(this, _channel, null);
    __privateAdd(this, _gainNode2, null);
    __privateAdd(this, _pannerNode, null);
    __privateAdd(this, _sourceNode, null);
    __privateAdd(this, _playing, false);
    __privateAdd(this, _loop, false);
    __privateAdd(this, _volume2, 1);
    __privateAdd(this, _playbackRate, 1);
    __privateAdd(this, _startTime, 0);
    __privateAdd(this, _pauseTime, 0);
    __privateAdd(this, _x, 0);
    __privateAdd(this, _y, 0);
    __privateAdd(this, _spatial, false);
    __privateAdd(this, _refDistance, 1);
    __privateAdd(this, _maxDistance, 10);
    __privateAdd(this, _rolloffFactor, 1);
    __privateSet(this, _audioContext2, options.audioContext);
    __privateSet(this, _channel, options.channel);
    __privateSet(this, _loop, options.loop ?? false);
    __privateSet(this, _volume2, options.volume ?? 1);
    __privateSet(this, _playbackRate, options.playbackRate ?? 1);
    __privateSet(this, _spatial, options.spatial ?? false);
    __privateMethod(this, _AudioSource_instances, initSpatialOptions_fn).call(this, options);
  }
  get playing() {
    return __privateGet(this, _playing);
  }
  get loop() {
    return __privateGet(this, _loop);
  }
  set loop(value) {
    __privateSet(this, _loop, Boolean(value));
    if (__privateGet(this, _sourceNode) && "loop" in __privateGet(this, _sourceNode)) {
      __privateGet(this, _sourceNode).loop = __privateGet(this, _loop);
    }
  }
  get volume() {
    return __privateGet(this, _volume2);
  }
  set volume(value) {
    __privateSet(this, _volume2, Math.max(0, Math.min(1, value)));
    __privateMethod(this, _AudioSource_instances, updateGain_fn2).call(this);
  }
  get playbackRate() {
    return __privateGet(this, _playbackRate);
  }
  set playbackRate(value) {
    __privateSet(this, _playbackRate, Math.max(0.1, Math.min(10, value)));
    if (__privateGet(this, _sourceNode) && "playbackRate" in __privateGet(this, _sourceNode)) {
      __privateGet(this, _sourceNode).playbackRate.setValueAtTime(
        __privateGet(this, _playbackRate),
        __privateGet(this, _audioContext2).context.currentTime
      );
    }
  }
  get channel() {
    return __privateGet(this, _channel);
  }
  get gainNode() {
    return __privateGet(this, _gainNode2);
  }
  get sourceNode() {
    return __privateGet(this, _sourceNode);
  }
  get currentTime() {
    if (!__privateGet(this, _playing)) {
      return __privateGet(this, _pauseTime);
    }
    return __privateGet(this, _audioContext2).currentTime - __privateGet(this, _startTime);
  }
  get x() {
    return __privateGet(this, _x);
  }
  set x(value) {
    __privateSet(this, _x, value);
    __privateMethod(this, _AudioSource_instances, updatePannerPosition_fn).call(this);
  }
  get y() {
    return __privateGet(this, _y);
  }
  set y(value) {
    __privateSet(this, _y, value);
    __privateMethod(this, _AudioSource_instances, updatePannerPosition_fn).call(this);
  }
  get spatial() {
    return __privateGet(this, _spatial);
  }
  get refDistance() {
    return __privateGet(this, _refDistance);
  }
  get maxDistance() {
    return __privateGet(this, _maxDistance);
  }
  get rolloffFactor() {
    return __privateGet(this, _rolloffFactor);
  }
  playBuffer(buffer, offset = 0) {
    var _a2;
    if (!__privateGet(this, _audioContext2) || !buffer) {
      return false;
    }
    this.stop();
    __privateMethod(this, _AudioSource_instances, setupNodes_fn).call(this);
    __privateSet(this, _sourceNode, __privateGet(this, _audioContext2).createBufferSource());
    __privateGet(this, _sourceNode).buffer = buffer;
    __privateGet(this, _sourceNode).loop = __privateGet(this, _loop);
    __privateGet(this, _sourceNode).playbackRate.setValueAtTime(
      __privateGet(this, _playbackRate),
      __privateGet(this, _audioContext2).context.currentTime
    );
    __privateGet(this, _sourceNode).connect(__privateGet(this, _gainNode2));
    __privateGet(this, _sourceNode).onended = () => {
      var _a3;
      if (__privateGet(this, _playing) && !__privateGet(this, _loop)) {
        __privateSet(this, _playing, false);
        this.emit("ended");
        (_a3 = __privateGet(this, _channel)) == null ? void 0 : _a3.unregisterSource(this);
      }
    };
    __privateGet(this, _sourceNode).start(0, offset);
    __privateSet(this, _startTime, __privateGet(this, _audioContext2).currentTime - offset);
    __privateSet(this, _playing, true);
    (_a2 = __privateGet(this, _channel)) == null ? void 0 : _a2.registerSource(this);
    this.emit("play");
    return true;
  }
  playOscillator(type = "sine", frequency = 440, duration = null) {
    var _a2;
    if (!__privateGet(this, _audioContext2)) {
      return false;
    }
    this.stop();
    __privateMethod(this, _AudioSource_instances, setupNodes_fn).call(this);
    __privateSet(this, _sourceNode, __privateGet(this, _audioContext2).createOscillator());
    __privateGet(this, _sourceNode).type = type;
    __privateGet(this, _sourceNode).frequency.setValueAtTime(
      frequency,
      __privateGet(this, _audioContext2).context.currentTime
    );
    __privateGet(this, _sourceNode).connect(__privateGet(this, _gainNode2));
    __privateGet(this, _sourceNode).onended = () => {
      var _a3;
      if (__privateGet(this, _playing)) {
        __privateSet(this, _playing, false);
        this.emit("ended");
        (_a3 = __privateGet(this, _channel)) == null ? void 0 : _a3.unregisterSource(this);
      }
    };
    __privateGet(this, _sourceNode).start();
    __privateSet(this, _startTime, __privateGet(this, _audioContext2).currentTime);
    __privateSet(this, _playing, true);
    if (duration !== null && duration > 0) {
      __privateGet(this, _sourceNode).stop(__privateGet(this, _audioContext2).context.currentTime + duration);
    }
    (_a2 = __privateGet(this, _channel)) == null ? void 0 : _a2.registerSource(this);
    this.emit("play");
    return true;
  }
  stop() {
    var _a2;
    if (!__privateGet(this, _playing)) {
      return false;
    }
    __privateSet(this, _playing, false);
    __privateSet(this, _pauseTime, 0);
    if (__privateGet(this, _sourceNode)) {
      try {
        __privateGet(this, _sourceNode).stop();
      } catch {
      }
    }
    __privateMethod(this, _AudioSource_instances, cleanupSourceNode_fn).call(this);
    if (__privateGet(this, _pannerNode)) {
      __privateGet(this, _pannerNode).disconnect();
      __privateSet(this, _pannerNode, null);
    }
    if (__privateGet(this, _gainNode2)) {
      __privateGet(this, _gainNode2).disconnect();
      __privateSet(this, _gainNode2, null);
    }
    (_a2 = __privateGet(this, _channel)) == null ? void 0 : _a2.unregisterSource(this);
    this.emit("stop");
    return true;
  }
  setPosition(x, y) {
    __privateSet(this, _x, x);
    __privateSet(this, _y, y);
    __privateMethod(this, _AudioSource_instances, updatePannerPosition_fn).call(this);
    return this;
  }
  getPosition() {
    return { x: __privateGet(this, _x), y: __privateGet(this, _y) };
  }
  setVolume(value) {
    this.volume = value;
    return this;
  }
  getVolume() {
    return __privateGet(this, _volume2);
  }
  setLoop(value) {
    this.loop = value;
    return this;
  }
  setPlaybackRate(value) {
    this.playbackRate = value;
    return this;
  }
  fadeIn(duration = 1) {
    var _a2;
    if (!__privateGet(this, _gainNode2) || !((_a2 = __privateGet(this, _audioContext2)) == null ? void 0 : _a2.context)) {
      return this;
    }
    const ctx = __privateGet(this, _audioContext2).context;
    __privateGet(this, _gainNode2).gain.setValueAtTime(0, ctx.currentTime);
    __privateGet(this, _gainNode2).gain.linearRampToValueAtTime(__privateGet(this, _volume2), ctx.currentTime + duration);
    return this;
  }
  fadeOut(duration = 1, stopAfter = true) {
    var _a2;
    if (!__privateGet(this, _gainNode2) || !((_a2 = __privateGet(this, _audioContext2)) == null ? void 0 : _a2.context)) {
      return this;
    }
    const ctx = __privateGet(this, _audioContext2).context;
    __privateGet(this, _gainNode2).gain.setValueAtTime(__privateGet(this, _gainNode2).gain.value, ctx.currentTime);
    __privateGet(this, _gainNode2).gain.linearRampToValueAtTime(0, ctx.currentTime + duration);
    if (stopAfter) {
      setTimeout(() => this.stop(), duration * 1e3);
    }
    return this;
  }
  onDispose() {
    this.stop();
  }
}
_audioContext2 = new WeakMap();
_channel = new WeakMap();
_gainNode2 = new WeakMap();
_pannerNode = new WeakMap();
_sourceNode = new WeakMap();
_playing = new WeakMap();
_loop = new WeakMap();
_volume2 = new WeakMap();
_playbackRate = new WeakMap();
_startTime = new WeakMap();
_pauseTime = new WeakMap();
_x = new WeakMap();
_y = new WeakMap();
_spatial = new WeakMap();
_refDistance = new WeakMap();
_maxDistance = new WeakMap();
_rolloffFactor = new WeakMap();
_AudioSource_instances = new WeakSet();
initSpatialOptions_fn = function(options) {
  __privateSet(this, _x, options.x ?? 0);
  __privateSet(this, _y, options.y ?? 0);
  __privateSet(this, _refDistance, options.refDistance ?? 1);
  __privateSet(this, _maxDistance, options.maxDistance ?? 10);
  __privateSet(this, _rolloffFactor, options.rolloffFactor ?? 1);
};
updatePannerPosition_fn = function() {
  var _a2;
  if (__privateGet(this, _pannerNode) && ((_a2 = __privateGet(this, _audioContext2)) == null ? void 0 : _a2.context)) {
    const ctx = __privateGet(this, _audioContext2).context;
    __privateGet(this, _pannerNode).positionX.setValueAtTime(__privateGet(this, _x), ctx.currentTime);
    __privateGet(this, _pannerNode).positionY.setValueAtTime(__privateGet(this, _y), ctx.currentTime);
  }
};
updateGain_fn2 = function() {
  var _a2;
  if (__privateGet(this, _gainNode2) && ((_a2 = __privateGet(this, _audioContext2)) == null ? void 0 : _a2.context)) {
    __privateGet(this, _gainNode2).gain.setValueAtTime(
      __privateGet(this, _volume2),
      __privateGet(this, _audioContext2).context.currentTime
    );
  }
};
setupNodes_fn = function() {
  var _a2;
  if (!__privateGet(this, _audioContext2)) {
    return false;
  }
  __privateSet(this, _gainNode2, __privateGet(this, _audioContext2).createGain());
  __privateMethod(this, _AudioSource_instances, updateGain_fn2).call(this);
  let outputNode = __privateGet(this, _gainNode2);
  if (__privateGet(this, _spatial)) {
    __privateSet(this, _pannerNode, __privateGet(this, _audioContext2).createPanner());
    __privateMethod(this, _AudioSource_instances, configurePanner_fn).call(this);
    __privateGet(this, _gainNode2).connect(__privateGet(this, _pannerNode));
    outputNode = __privateGet(this, _pannerNode);
  }
  if ((_a2 = __privateGet(this, _channel)) == null ? void 0 : _a2.gainNode) {
    outputNode.connect(__privateGet(this, _channel).gainNode);
  } else {
    outputNode.connect(__privateGet(this, _audioContext2).masterGain);
  }
  return true;
};
configurePanner_fn = function() {
  if (!__privateGet(this, _pannerNode)) {
    return;
  }
  __privateGet(this, _pannerNode).panningModel = "HRTF";
  __privateGet(this, _pannerNode).distanceModel = "linear";
  __privateGet(this, _pannerNode).refDistance = __privateGet(this, _refDistance);
  __privateGet(this, _pannerNode).maxDistance = __privateGet(this, _maxDistance);
  __privateGet(this, _pannerNode).rolloffFactor = __privateGet(this, _rolloffFactor);
  __privateMethod(this, _AudioSource_instances, updatePannerPosition_fn).call(this);
};
cleanupSourceNode_fn = function() {
  if (__privateGet(this, _sourceNode)) {
    try {
      __privateGet(this, _sourceNode).disconnect();
    } catch {
    }
    __privateSet(this, _sourceNode, null);
  }
};
__publicField(AudioSource, "$category", "audioSource");
__publicField(AudioSource, "$lifecycle", false);
const unlockEvents = ["click", "touchstart", "keydown"];
let unlocked = false;
let pendingCallbacks = [];
function handleUnlock() {
  if (unlocked) {
    return;
  }
  unlocked = true;
  for (const callback of pendingCallbacks) {
    callback();
  }
  pendingCallbacks = [];
  cleanup();
}
function cleanup() {
  for (const event of unlockEvents) {
    document.removeEventListener(event, handleUnlock, true);
  }
  window.removeEventListener("gamepadconnected", handleUnlock);
}
for (const event of unlockEvents) {
  document.addEventListener(event, handleUnlock, true);
}
window.addEventListener("gamepadconnected", handleUnlock);
function onAudioUnlock(callback) {
  if (unlocked) {
    callback();
  } else {
    pendingCallbacks.push(callback);
  }
}
class AudioSystem extends PerkyModule {
  constructor(options = {}) {
    super(options);
    __privateAdd(this, _AudioSystem_instances);
    __privateAdd(this, _audioContext3, null);
    __privateAdd(this, _buffers, /* @__PURE__ */ new Map());
    __privateAdd(this, _pendingAudio, /* @__PURE__ */ new Map());
    __privateAdd(this, _unlocked, false);
    __privateSet(this, _audioContext3, new AudioContext());
    const defaultChannels = options.channels ?? ["music", "sfx", "ambiance"];
    for (const channelName of defaultChannels) {
      this.createChannel(channelName);
    }
  }
  get audioContext() {
    return __privateGet(this, _audioContext3);
  }
  get unlocked() {
    return __privateGet(this, _unlocked);
  }
  get currentTime() {
    return __privateGet(this, _audioContext3).currentTime;
  }
  get masterVolume() {
    return __privateGet(this, _audioContext3).getMasterVolume();
  }
  set masterVolume(value) {
    __privateGet(this, _audioContext3).setMasterVolume(value);
  }
  onInstall(host) {
    this.delegateTo(host, {
      play: "playSound",
      playAt: "playSoundAt",
      stop: "stopSound",
      unlock: "unlockAudio",
      setVolume: "setVolume",
      getVolume: "getVolume"
    });
    this.delegateEventsTo(host, [
      "audio:play",
      "audio:stop",
      "audio:unlocked"
    ], "audio");
    if (host.sourceManager) {
      this.listenTo(host.sourceManager, "loader:progress", (_progress, { asset, source }) => {
        if (asset.type === "audio" && (source == null ? void 0 : source.type) === "deferred_audio") {
          __privateGet(this, _pendingAudio).set(asset.id, source.url);
        }
      });
    }
    __privateMethod(this, _AudioSystem_instances, applyConfig_fn).call(this);
  }
  onStart() {
    onAudioUnlock(() => this.unlock());
  }
  onStop() {
    if (__privateGet(this, _unlocked)) {
      __privateGet(this, _audioContext3).suspend();
    }
  }
  onDispose() {
    this.stopAll();
    __privateGet(this, _buffers).clear();
    __privateGet(this, _audioContext3).dispose();
  }
  async unlock() {
    if (__privateGet(this, _unlocked)) {
      return true;
    }
    try {
      await __privateGet(this, _audioContext3).resume();
      __privateSet(this, _unlocked, true);
      await __privateMethod(this, _AudioSystem_instances, loadPendingAudio_fn).call(this);
      this.emit("audio:unlocked");
      return true;
    } catch {
      return false;
    }
  }
  createChannel(name, options = {}) {
    return this.create(AudioChannel, {
      $id: name,
      $bind: name,
      audioContext: __privateGet(this, _audioContext3),
      ...options
    });
  }
  getChannel(name) {
    return this.getChild(name);
  }
  hasChannel(name) {
    return this.hasChild(name);
  }
  listChannels() {
    return this.listNamesFor("audioChannel");
  }
  registerBuffer(id, buffer) {
    __privateGet(this, _buffers).set(id, buffer);
    this.emit("buffer:registered", id, buffer);
  }
  async registerArrayBuffer(id, arrayBuffer) {
    try {
      const audioBuffer = await __privateGet(this, _audioContext3).decodeAudioData(arrayBuffer);
      this.registerBuffer(id, audioBuffer);
      return audioBuffer;
    } catch (e) {
      this.emit("buffer:error", id, e);
      return null;
    }
  }
  getBuffer(id) {
    return __privateGet(this, _buffers).get(id) || null;
  }
  hasBuffer(id) {
    return __privateGet(this, _buffers).has(id);
  }
  async loadBuffer(id, url) {
    try {
      const response = await fetch(url);
      const arrayBuffer = await response.arrayBuffer();
      return this.registerArrayBuffer(id, arrayBuffer);
    } catch (e) {
      this.emit("buffer:error", id, e);
      return null;
    }
  }
  play(bufferId, options = {}) {
    if (!__privateGet(this, _unlocked)) {
      return null;
    }
    const buffer = __privateGet(this, _buffers).get(bufferId);
    if (!buffer) {
      return null;
    }
    const channelName = options.channel ?? "sfx";
    const channel = this.getChannel(channelName);
    const sourceId = options.$id ?? uniqueId(this.childrenRegistry, bufferId);
    const source = new AudioSource({
      $id: sourceId,
      audioContext: __privateGet(this, _audioContext3),
      channel,
      loop: options.loop ?? false,
      volume: options.volume ?? 1,
      playbackRate: options.playbackRate ?? 1
    });
    source.playBuffer(buffer, options.offset ?? 0);
    this.emit("audio:play", sourceId, bufferId, options);
    return source;
  }
  playAt(bufferId, x, y, options = {}) {
    return this.play(bufferId, {
      ...options,
      spatial: true,
      x,
      y
    });
  }
  playOscillator(options = {}) {
    if (!__privateGet(this, _unlocked)) {
      return null;
    }
    const channel = this.getChannel(options.channel ?? "sfx");
    const sourceId = options.$id ?? uniqueId(this.childrenRegistry, "oscillator");
    const source = new AudioSource({
      ...options,
      $id: sourceId,
      audioContext: __privateGet(this, _audioContext3),
      channel
    });
    source.playOscillator(options.type, options.frequency, options.duration);
    this.emit("audio:play", sourceId, "oscillator", options);
    return source;
  }
  playOscillatorAt(x, y, options = {}) {
    return this.playOscillator({
      ...options,
      spatial: true,
      x,
      y
    });
  }
  stop(sourceId) {
    for (const channelName of this.listChannels()) {
      const channel = this.getChannel(channelName);
      const source = channel == null ? void 0 : channel.getSource(sourceId);
      if (source) {
        source.stop();
        this.emit("audio:stop", sourceId);
        return true;
      }
    }
    return false;
  }
  stopChannel(channelName) {
    const channel = this.getChannel(channelName);
    if (channel) {
      channel.stopAll();
      return true;
    }
    return false;
  }
  stopAll() {
    for (const channelName of this.listChannels()) {
      this.stopChannel(channelName);
    }
  }
  setVolume(value) {
    this.masterVolume = value;
    this.emit("volume:changed", value);
    return this;
  }
  getVolume() {
    return this.masterVolume;
  }
  setChannelVolume(channelName, value) {
    const channel = this.getChannel(channelName);
    if (channel) {
      channel.setVolume(value);
    }
    return this;
  }
  getChannelVolume(channelName) {
    const channel = this.getChannel(channelName);
    return channel ? channel.getVolume() : 0;
  }
  muteChannel(channelName) {
    const channel = this.getChannel(channelName);
    if (channel) {
      channel.mute();
    }
    return this;
  }
  unmuteChannel(channelName) {
    const channel = this.getChannel(channelName);
    if (channel) {
      channel.unmute();
    }
    return this;
  }
  setListenerPosition(x, y) {
    __privateGet(this, _audioContext3).setListenerPosition(x, y, 0);
    return this;
  }
  getListenerPosition() {
    const pos = __privateGet(this, _audioContext3).getListenerPosition();
    return { x: pos.x, y: pos.y };
  }
}
_audioContext3 = new WeakMap();
_buffers = new WeakMap();
_pendingAudio = new WeakMap();
_unlocked = new WeakMap();
_AudioSystem_instances = new WeakSet();
loadPendingAudio_fn = async function() {
  const promises = [];
  for (const [id, url] of __privateGet(this, _pendingAudio)) {
    promises.push(this.loadBuffer(id, url));
  }
  __privateGet(this, _pendingAudio).clear();
  await Promise.all(promises);
};
applyConfig_fn = function() {
  var _a2, _b;
  const audioConfig = (_b = (_a2 = this.host) == null ? void 0 : _a2.getConfig) == null ? void 0 : _b.call(_a2, "audio");
  if (!audioConfig) {
    return;
  }
  if (audioConfig.masterVolume !== void 0) {
    this.setVolume(audioConfig.masterVolume);
  }
  if (audioConfig.channels) {
    Object.entries(audioConfig.channels).forEach(([channelName, channelConfig]) => {
      if (channelConfig.volume !== void 0) {
        this.setChannelVolume(channelName, channelConfig.volume);
      }
      if (channelConfig.muted) {
        this.muteChannel(channelName);
      }
    });
  }
};
__publicField(AudioSystem, "$category", "audioSystem");
class World extends PerkyModule {
  get entities() {
    return this.childrenByCategory("entity");
  }
  update(deltaTime, context) {
    if (!this.started) {
      return;
    }
    this.preUpdate(deltaTime, context);
    for (const entity of this.entities) {
      if (entity.started) {
        entity.update(deltaTime);
      }
    }
    this.postUpdate(deltaTime, context);
  }
  preUpdate() {
  }
  postUpdate() {
  }
}
__publicField(World, "$category", "world");
class EntityView {
  constructor(entity, context) {
    this.entity = entity;
    this.context = context;
    this.root = null;
  }
  sync() {
    if (this.root) {
      this.root.x = this.entity.x;
      this.root.y = this.entity.y;
    }
  }
  dispose() {
    if (this.root && this.context.group) {
      this.context.group.remove(this.root);
    }
    this.root = null;
    this.entity = null;
    this.context = null;
  }
}
class AutoView extends EntityView {
  constructor(entity, context) {
    super(entity, context);
    __privateAdd(this, _AutoView_instances);
    __privateAdd(this, _functionBindings, null);
    __privateAdd(this, _stringBindings, null);
    const config = context.config || {};
    const { sync, ...objectOptions } = config;
    __privateMethod(this, _AutoView_instances, compileBindings_fn).call(this, sync);
    const ObjectClass = context.ObjectClass;
    this.root = new ObjectClass({
      x: entity.x,
      y: entity.y,
      ...objectOptions
    });
  }
  sync() {
    super.sync();
    if (__privateGet(this, _stringBindings)) {
      for (let i = 0; i < __privateGet(this, _stringBindings).length; i++) {
        const { prop, entityProp } = __privateGet(this, _stringBindings)[i];
        this.root[prop] = this.entity[entityProp];
      }
    }
    if (__privateGet(this, _functionBindings)) {
      for (let i = 0; i < __privateGet(this, _functionBindings).length; i++) {
        const { prop, fn } = __privateGet(this, _functionBindings)[i];
        this.root[prop] = fn(this.entity);
      }
    }
  }
}
_functionBindings = new WeakMap();
_stringBindings = new WeakMap();
_AutoView_instances = new WeakSet();
compileBindings_fn = function(sync) {
  if (!sync) {
    return;
  }
  for (const [prop, binding] of Object.entries(sync)) {
    if (prop === "x" || prop === "y") {
      continue;
    }
    if (typeof binding === "function") {
      if (!__privateGet(this, _functionBindings)) {
        __privateSet(this, _functionBindings, []);
      }
      __privateGet(this, _functionBindings).push({ prop, fn: binding });
    } else if (typeof binding === "string") {
      if (!__privateGet(this, _stringBindings)) {
        __privateSet(this, _stringBindings, []);
      }
      __privateGet(this, _stringBindings).push({ prop, entityProp: binding });
    }
  }
};
class WorldView extends PerkyModule {
  constructor(options = {}) {
    super(options);
    __privateAdd(this, _WorldView_instances);
    __privateAdd(this, _classRegistry, /* @__PURE__ */ new Map());
    __privateAdd(this, _matcherRegistry, []);
    __privateAdd(this, _views, /* @__PURE__ */ new Map());
    this.world = options.world;
    this.game = options.game;
    this.rootGroup = new Group2D();
  }
  onStart() {
    __privateMethod(this, _WorldView_instances, bindWorldEvents_fn).call(this);
  }
  onStop() {
    __privateMethod(this, _WorldView_instances, disposeAllViews_fn).call(this);
  }
  register(classOrMatcher, View, config = null) {
    const isObject2D = isObject2DClass(View);
    const registration = isObject2D ? { View: AutoView, config, ObjectClass: View } : { View, config };
    if (typeof classOrMatcher === "function" && classOrMatcher.prototype) {
      const isClass = classOrMatcher.toString().startsWith("class ") || Object.getOwnPropertyNames(classOrMatcher.prototype).length > 1;
      if (isClass) {
        __privateGet(this, _classRegistry).set(classOrMatcher, registration);
        return this;
      }
    }
    __privateGet(this, _matcherRegistry).push({ matcher: classOrMatcher, ...registration });
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
  getViews(entityId) {
    return __privateGet(this, _views).get(entityId) || [];
  }
  updateViews(deltaTime) {
    var _a2;
    for (const views of __privateGet(this, _views).values()) {
      for (const view of views) {
        (_a2 = view.update) == null ? void 0 : _a2.call(view, deltaTime);
      }
    }
  }
  syncViews() {
    for (const views of __privateGet(this, _views).values()) {
      for (const view of views) {
        view.sync();
      }
    }
  }
  setupRenderGroups() {
    const gameRenderer = this.game.getRenderer("game");
    gameRenderer.appendRenderGroup({
      $name: "entities",
      content: this.rootGroup
    });
  }
  update(deltaTime) {
    this.updateViews(deltaTime);
  }
  sync() {
    this.syncViews();
  }
}
_classRegistry = new WeakMap();
_matcherRegistry = new WeakMap();
_views = new WeakMap();
_WorldView_instances = new WeakSet();
bindWorldEvents_fn = function() {
  if (!this.world) {
    return;
  }
  this.listenTo(this.world, "entity:set", (id, entity) => __privateMethod(this, _WorldView_instances, handleEntitySet_fn).call(this, entity));
  this.listenTo(this.world, "entity:delete", (id) => __privateMethod(this, _WorldView_instances, handleEntityDelete_fn).call(this, id));
  for (const entity of this.world.entities) {
    __privateMethod(this, _WorldView_instances, handleEntitySet_fn).call(this, entity);
  }
};
handleEntitySet_fn = function(entity) {
  const registrations = __privateMethod(this, _WorldView_instances, resolveViews_fn).call(this, entity);
  if (registrations.length === 0) {
    return;
  }
  const views = [];
  for (const { View, config, ObjectClass } of registrations) {
    const context = {
      game: this.game,
      world: this.world,
      group: this.rootGroup,
      config,
      ObjectClass
    };
    const view = new View(entity, context);
    if (view.root) {
      view.root.$entity = entity;
      view.root.$view = view;
      view.root.$viewName = ObjectClass ? ObjectClass.name : View.name;
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
function isObject2DClass(Class) {
  if (!Class || typeof Class !== "function") {
    return false;
  }
  let proto = Class.prototype;
  while (proto) {
    if (proto.constructor === Object2D) {
      return true;
    }
    proto = Object.getPrototypeOf(proto);
  }
  return false;
}
class GameController extends ActionController {
  get game() {
    return this.engine;
  }
  spawn(Entity2, options = {}) {
    var _a2;
    return (_a2 = this.world) == null ? void 0 : _a2.create(Entity2, options);
  }
}
__publicField(GameController, "resources", ["world", "renderer", "camera"]);
class Game extends Application {
  constructor(params = {}) {
    var _a2;
    super(params);
    __privateAdd(this, _Game_instances);
    this.create(GameLoop, { $bind: "gameLoop" });
    __privateMethod(this, _Game_instances, createRenderSystem_fn).call(this, params);
    __privateMethod(this, _Game_instances, createAudioSystem_fn).call(this, params);
    this.create(TextureSystem, {
      $bind: "textureSystem",
      fallback: (id) => this.getSource(id),
      ...params.textureSystem
    });
    this.on("update", __privateMethod(this, _Game_instances, onUpdate_fn));
    this.on("render", __privateMethod(this, _Game_instances, onRender_fn));
    __privateMethod(this, _Game_instances, createWorld_fn).call(this);
    __privateMethod(this, _Game_instances, createWorldView_fn).call(this);
    (_a2 = this.configureGame) == null ? void 0 : _a2.call(this, params);
  }
  update() {
  }
  render() {
  }
  onStart() {
    __privateMethod(this, _Game_instances, buildTextureAtlases_fn).call(this);
    __privateMethod(this, _Game_instances, buildSpritesheets_fn).call(this);
    __privateMethod(this, _Game_instances, listenForLateAssets_fn).call(this);
    __privateMethod(this, _Game_instances, setupPostPasses_fn).call(this);
  }
}
_Game_instances = new WeakSet();
createWorld_fn = function() {
  const WorldClass = this.constructor.World;
  if (WorldClass) {
    this.world = this.create(WorldClass);
  }
};
createWorldView_fn = function() {
  this.camera = this.renderSystem.getCamera("main");
  const WorldViewClass = this.constructor.WorldView;
  if (WorldViewClass) {
    this.create(WorldViewClass, {
      $bind: "worldView",
      world: this.world,
      game: this
    });
  }
};
onUpdate_fn = function(deltaTime) {
  __privateMethod(this, _Game_instances, updateActiveControllers_fn).call(this, deltaTime);
  this.update(deltaTime);
  for (const worldView of this.childrenByCategory("worldView")) {
    worldView.update(deltaTime);
  }
};
onRender_fn = function() {
  var _a2;
  for (const worldView of this.childrenByCategory("worldView")) {
    worldView.sync();
  }
  this.render();
  (_a2 = this.renderSystem) == null ? void 0 : _a2.render();
};
setupPostPasses_fn = function() {
  const postPasses = this.constructor.postPasses;
  if (!postPasses || postPasses.length === 0) {
    return;
  }
  const renderer = this.getRenderer("game");
  if (!(renderer == null ? void 0 : renderer.addPostPass)) {
    return;
  }
  for (const PassClass of postPasses) {
    renderer.addPostPass(PassClass);
  }
};
listenForLateAssets_fn = function() {
  if (!this.textureSystem) {
    return;
  }
  this.on("asset:loaded", (asset) => {
    this.textureSystem.addFromAsset(asset);
  });
};
buildTextureAtlases_fn = function() {
  if (!this.textureSystem) {
    return;
  }
  const assets = this.getAllAssets();
  this.textureSystem.buildFromAssets(assets);
};
buildSpritesheets_fn = function() {
  if (!this.textureSystem) {
    return;
  }
  const assets = this.getAllAssets();
  for (const asset of assets) {
    if (asset.type === "spritesheet" && asset.source) {
      this.textureSystem.registerSpritesheet(asset.id, asset.source);
    }
  }
};
updateActiveControllers_fn = function(deltaTime) {
  const activeControllers = this.getActiveControllers();
  for (const controllerName of activeControllers) {
    const controller = this.getController(controllerName);
    if (controller && typeof controller.update === "function") {
      controller.update(this, deltaTime);
    }
  }
};
createRenderSystem_fn = function(params) {
  const RenderSystemClass = this.constructor.RenderSystem;
  if (!RenderSystemClass) {
    return;
  }
  const config = __privateMethod(this, _Game_instances, buildRenderSystemConfig_fn).call(this, params);
  this.create(RenderSystemClass, {
    $bind: "renderSystem",
    ...config
  });
};
buildRenderSystemConfig_fn = function(params) {
  if (params.renderSystem) {
    return params.renderSystem;
  }
  const cameraConfig = this.constructor.camera;
  const layersConfig = this.constructor.layers;
  const layerConfig = this.constructor.layer;
  let layers;
  if (layersConfig) {
    layers = layersConfig;
  } else {
    layers = [
      {
        name: "game",
        camera: "main",
        ...layerConfig
      }
    ];
  }
  return {
    cameras: {
      main: cameraConfig
    },
    layers
  };
};
createAudioSystem_fn = function(params) {
  const AudioSystemClass = this.constructor.AudioSystem;
  if (!AudioSystemClass) {
    return;
  }
  this.create(AudioSystemClass, {
    $bind: "audioSystem",
    ...params.audioSystem
  });
};
__publicField(Game, "World", World);
__publicField(Game, "WorldView", WorldView);
__publicField(Game, "ActionController", GameController);
__publicField(Game, "RenderSystem", RenderSystem);
__publicField(Game, "AudioSystem", AudioSystem);
__publicField(Game, "camera", { unitsInView: { width: 10, height: 10 } });
__publicField(Game, "layer", { type: "webgl" });
__publicField(Game, "postPasses", []);
class RenderTransform {
  constructor(options = {}) {
    this.enabled = options.enabled ?? true;
  }
  init() {
  }
  apply(context, matrices) {
    return matrices;
  }
  getProgram() {
    return null;
  }
  applyUniforms() {
  }
  dispose() {
  }
}
const SHADOW_VERTEX = `#version 300 es
in vec2 aPosition;
in vec2 aTexCoord;
in float aOpacity;
in float aAnchorY;

uniform mat3 uProjectionMatrix;
uniform mat3 uViewMatrix;
uniform mat3 uModelMatrix;

uniform float uShadowSkewX;
uniform float uShadowScaleY;
uniform float uShadowOffsetY;

out vec2 vTexCoord;
out float vOpacity;

void main() {


    float distFromAnchor = aPosition.y - aAnchorY;


    vec2 shadowPos = aPosition;
    shadowPos.x += uShadowSkewX * distFromAnchor;
    shadowPos.y = aAnchorY + distFromAnchor * uShadowScaleY + uShadowOffsetY;

    vec3 worldPos = uModelMatrix * vec3(shadowPos, 1.0);
    vec3 viewPos = uViewMatrix * worldPos;
    vec3 clipPos = uProjectionMatrix * viewPos;

    gl_Position = vec4(clipPos.xy, 0.0, 1.0);
    vTexCoord = aTexCoord;
    vOpacity = aOpacity;
}
`;
const SHADOW_FRAGMENT = `#version 300 es
precision mediump float;

uniform sampler2D uTexture;
uniform vec4 uShadowColor;

in vec2 vTexCoord;
in float vOpacity;

out vec4 fragColor;

void main() {
    vec4 texColor = texture(uTexture, vTexCoord);

    float alpha = texColor.a * vOpacity * uShadowColor.a;
    fragColor = vec4(uShadowColor.rgb, alpha);
}
`;
const SHADOW_SHADER_DEF = {
  vertex: SHADOW_VERTEX,
  fragment: SHADOW_FRAGMENT,
  uniforms: [
    "uProjectionMatrix",
    "uViewMatrix",
    "uModelMatrix",
    "uShadowSkewX",
    "uShadowScaleY",
    "uShadowOffsetY",
    "uTexture",
    "uShadowColor"
  ],
  attributes: ["aPosition", "aTexCoord", "aOpacity", "aAnchorY"]
};
class ShadowTransform extends RenderTransform {
  constructor(options = {}) {
    super(options);
    __privateAdd(this, _program, null);
    this.skewX = options.skewX ?? 0.5;
    this.scaleY = options.scaleY ?? -0.3;
    this.offsetY = options.offsetY ?? 0;
    this.color = options.color ?? [0, 0, 0, 0.4];
  }
  init(context) {
    __privateSet(this, _program, context.shaderRegistry.register("shadow", SHADOW_SHADER_DEF));
  }
  getProgram() {
    return __privateGet(this, _program);
  }
  applyUniforms(gl, program) {
    gl.uniform1f(program.uniforms.uShadowSkewX, this.skewX);
    gl.uniform1f(program.uniforms.uShadowScaleY, this.scaleY);
    gl.uniform1f(program.uniforms.uShadowOffsetY, this.offsetY);
    gl.uniform4fv(program.uniforms.uShadowColor, this.color);
  }
  getPropertyConfig() {
    return this.constructor.propertyConfig;
  }
  dispose() {
    __privateSet(this, _program, null);
  }
}
_program = new WeakMap();
__publicField(ShadowTransform, "propertyConfig", {
  skewX: { min: -2, max: 2, step: 0.05 },
  scaleY: { min: -1, max: 0, step: 0.05 },
  offsetY: { min: -0.5, max: 0.5, step: 0.01 },
  color: { type: "color" }
});
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
class CircleHitbox {
  constructor(options = {}) {
    this.type = "circle";
    this.radius = options.radius ?? 0.2;
    this.offsetX = options.offsetX ?? 0;
    this.offsetY = options.offsetY ?? 0;
  }
}
class CapsuleHitbox {
  constructor(options = {}) {
    this.type = "capsule";
    this.radius = options.radius ?? 0.2;
    this.height = options.height ?? 0.4;
    this.offsetX = options.offsetX ?? 0;
    this.offsetY = options.offsetY ?? 0;
  }
  get topY() {
    return this.offsetY + this.height / 2;
  }
  get bottomY() {
    return this.offsetY - this.height / 2;
  }
}
function testHitbox(hitboxA, posA, hitboxB, posB) {
  const typeA = hitboxA.type;
  const typeB = hitboxB.type;
  if (typeA === "circle" && typeB === "circle") {
    return testCircleCircle(hitboxA, posA, hitboxB, posB);
  }
  if (typeA === "capsule" && typeB === "circle") {
    return testCapsuleCircle(hitboxA, posA, hitboxB, posB);
  }
  if (typeA === "circle" && typeB === "capsule") {
    return testCapsuleCircle(hitboxB, posB, hitboxA, posA);
  }
  if (typeA === "capsule" && typeB === "capsule") {
    return testCapsuleCapsule(hitboxA, posA, hitboxB, posB);
  }
  return false;
}
function testCircleCircle(hitboxA, posA, hitboxB, posB) {
  const ax = posA.x + hitboxA.offsetX;
  const ay = posA.y + hitboxA.offsetY;
  const bx = posB.x + hitboxB.offsetX;
  const by = posB.y + hitboxB.offsetY;
  const dx = ax - bx;
  const dy = ay - by;
  const distSq = dx * dx + dy * dy;
  const minDist = hitboxA.radius + hitboxB.radius;
  return distSq < minDist * minDist;
}
function testCapsuleCircle(capsule, capsulePos, circle, circlePos) {
  const cx = circlePos.x + circle.offsetX;
  const cy = circlePos.y + circle.offsetY;
  const capsuleX = capsulePos.x + capsule.offsetX;
  const capsuleTopY = capsulePos.y + capsule.topY;
  const capsuleBottomY = capsulePos.y + capsule.bottomY;
  const closestY = Math.max(capsuleBottomY, Math.min(capsuleTopY, cy));
  const dx = cx - capsuleX;
  const dy = cy - closestY;
  const distSq = dx * dx + dy * dy;
  const minDist = capsule.radius + circle.radius;
  return distSq < minDist * minDist;
}
function testCapsuleCapsule(capsuleA, posA, capsuleB, posB) {
  const ax = posA.x + capsuleA.offsetX;
  const aTopY = posA.y + capsuleA.topY;
  const aBottomY = posA.y + capsuleA.bottomY;
  const bx = posB.x + capsuleB.offsetX;
  const bTopY = posB.y + capsuleB.topY;
  const bBottomY = posB.y + capsuleB.bottomY;
  const overlapTop = Math.min(aTopY, bTopY);
  const overlapBottom = Math.max(aBottomY, bBottomY);
  let closestAY;
  let closestBY;
  if (overlapTop >= overlapBottom) {
    const midY = (overlapTop + overlapBottom) / 2;
    closestAY = Math.max(aBottomY, Math.min(aTopY, midY));
    closestBY = Math.max(bBottomY, Math.min(bTopY, midY));
  } else if (aTopY < bBottomY) {
    closestAY = aTopY;
    closestBY = bBottomY;
  } else {
    closestAY = aBottomY;
    closestBY = bTopY;
  }
  const dx = ax - bx;
  const dy = closestAY - closestBY;
  const distSq = dx * dx + dy * dy;
  const minDist = capsuleA.radius + capsuleB.radius;
  return distSq < minDist * minDist;
}
class Player extends Entity {
  constructor(params = {}) {
    super(params);
    const { maxSpeed = 3, acceleration = 25, boundaries = { min: -1.25, max: 1.15 } } = params;
    this.maxSpeed = maxSpeed;
    this.acceleration = acceleration;
    this.boundaries = boundaries;
    this.shootCooldown = 0;
    this.shootCooldownDuration = 0.35;
    this.shootRecoilTimer = 0;
    this.shootRecoilDuration = 0.1;
    this.stunTimer = 0;
    this.isStunned = false;
    this.hitbox = new CapsuleHitbox({
      radius: 0.25,
      height: 0.5,
      offsetY: 0.45
    });
  }
  move(direction) {
    this.direction = direction;
  }
  canShoot() {
    return this.shootCooldown <= 0 && !this.isStunned;
  }
  hit(impactDirection) {
    this.emit("hit", { direction: impactDirection });
  }
  stun(duration) {
    this.isStunned = true;
    this.stunTimer = duration;
    this.emit("stunned", { duration });
  }
  update(deltaTime) {
    updateStunTimer(this, deltaTime);
    updateShootCooldown(this, deltaTime);
    updateRecoilTimer(this, deltaTime);
    applyMovement(this, deltaTime);
    clampVelocity(this);
    applyVelocity(this, deltaTime);
    clampToBoundaries(this);
  }
}
function updateShootCooldown(player, deltaTime) {
  if (player.shootCooldown > 0) {
    player.shootCooldown -= deltaTime;
  }
}
function updateRecoilTimer(player, deltaTime) {
  if (player.shootRecoilTimer > 0) {
    player.shootRecoilTimer -= deltaTime;
  }
}
function applyMovement(player, deltaTime) {
  var _a2;
  if (player.isStunned) {
    player.velocity.multiplyScalar(Math.pow(0.1, deltaTime * 60));
    return;
  }
  if (((_a2 = player.direction) == null ? void 0 : _a2.length()) > 0) {
    const accel = player.direction.clone().multiplyScalar(player.acceleration * deltaTime);
    player.velocity.add(accel);
  } else {
    player.velocity.multiplyScalar(Math.pow(0.01, deltaTime * 60));
  }
}
function clampVelocity(player) {
  if (player.velocity.length() > player.maxSpeed) {
    player.velocity.normalize().multiplyScalar(player.maxSpeed);
  }
  if (player.velocity.length() < 0.01) {
    player.velocity.set(0, 0);
  }
}
function applyVelocity(player, deltaTime) {
  player.position.add(player.velocity.clone().multiplyScalar(deltaTime));
}
function clampToBoundaries(player) {
  if (player.position.y > player.boundaries.max) {
    player.position.y = player.boundaries.max;
    player.velocity.y = 0;
  } else if (player.position.y < player.boundaries.min) {
    player.position.y = player.boundaries.min;
    player.velocity.y = 0;
  }
}
function updateStunTimer(player, deltaTime) {
  if (player.stunTimer > 0) {
    player.stunTimer -= deltaTime;
    if (player.stunTimer <= 0) {
      player.isStunned = false;
    }
  }
}
class Projectile extends Entity {
  constructor(params = {}) {
    super(params);
    const {
      velocityX = 6,
      velocityY = 2.5,
      gravity = -8,
      drag = 0.5,
      source = "player",
      sprite = "brick",
      spin = true,
      size = 0.25
    } = params;
    this.velocity.set(velocityX, velocityY);
    this.gravity = gravity;
    this.drag = drag;
    this.alive = true;
    this.source = source;
    this.sprite = sprite;
    this.spin = spin;
    this.size = size;
    this.rotation = 0;
    this.spinSpeed = -15;
    this.time = 0;
    this.hitbox = new CircleHitbox({
      radius: 0.15
    });
  }
  update(deltaTime) {
    this.velocity.y += this.gravity * deltaTime;
    const speed = Math.sqrt(this.velocity.x ** 2 + this.velocity.y ** 2);
    const dragForce = this.drag * speed * deltaTime;
    if (speed > 0.1) {
      this.velocity.x -= this.velocity.x / speed * dragForce * 0.3;
    }
    this.position.add(this.velocity.clone().multiplyScalar(deltaTime));
    this.time += deltaTime;
    if (this.spin) {
      this.rotation += this.spinSpeed * deltaTime;
    }
    if (this.position.y < -3 || this.position.x > 5 || this.position.x < -5) {
      this.alive = false;
    }
  }
}
__publicField(Projectile, "$tags", ["projectile"]);
class Enemy extends Entity {
  constructor(params = {}) {
    super(params);
    const {
      maxSpeed = 3,
      boundaries = { min: -0.85, max: 1.55 },
      hp = 3
    } = params;
    this.velocity.set(-maxSpeed, 0);
    this.maxSpeed = maxSpeed;
    this.boundaries = boundaries;
    this.alive = true;
    this.hp = hp;
    this.maxHp = hp;
    this.knockbackVelocity = { x: 0, y: 0 };
    this.knockbackFriction = 8;
    this.isStunned = false;
    this.stunTimer = 0;
    this.stunDuration = 0.15;
    this.hitFlashTimer = 0;
    this.hitFlashDuration = 0.1;
  }
  get damageRatio() {
    return 1 - this.hp / this.maxHp;
  }
  hit(impactDirection = { x: 1, y: 0 }, knockbackForce = 3) {
    this.hp -= 1;
    this.knockbackVelocity.x = impactDirection.x * knockbackForce;
    this.knockbackVelocity.y = impactDirection.y * knockbackForce * 0.5;
    this.isStunned = true;
    this.stunTimer = this.stunDuration;
    this.hitFlashTimer = this.hitFlashDuration;
    if (this.hp <= 0) {
      this.alive = false;
      return true;
    }
    return false;
  }
  update(deltaTime) {
    this.updateTimers(deltaTime);
    this.applyKnockback(deltaTime);
    this.applyMovement(deltaTime);
    this.clampToBoundaries();
    this.checkDeath();
  }
  updateTimers(deltaTime) {
    if (this.hitFlashTimer > 0) {
      this.hitFlashTimer -= deltaTime;
    }
    if (this.isStunned) {
      this.stunTimer -= deltaTime;
      if (this.stunTimer <= 0) {
        this.isStunned = false;
      }
    }
  }
  applyKnockback(deltaTime) {
    const hasKnockback = Math.abs(this.knockbackVelocity.x) > 0.01 || Math.abs(this.knockbackVelocity.y) > 0.01;
    if (hasKnockback) {
      this.position.x += this.knockbackVelocity.x * deltaTime;
      this.position.y += this.knockbackVelocity.y * deltaTime;
      const friction = Math.exp(-this.knockbackFriction * deltaTime);
      this.knockbackVelocity.x *= friction;
      this.knockbackVelocity.y *= friction;
    }
  }
  applyMovement(deltaTime) {
    if (this.isStunned) {
      return;
    }
    this.position.add(this.velocity.clone().multiplyScalar(deltaTime));
  }
  clampToBoundaries() {
    if (this.position.y > this.boundaries.max) {
      this.position.y = this.boundaries.max;
    } else if (this.position.y < this.boundaries.min) {
      this.position.y = this.boundaries.min;
    }
  }
  checkDeath() {
    if (this.position.x < -2.5) {
      this.alive = false;
    }
  }
}
__publicField(Enemy, "$tags", ["enemy"]);
class PigEnemy extends Enemy {
  constructor(params = {}) {
    super(params);
    this.hitbox = new CapsuleHitbox({
      radius: 0.2,
      height: 0.4,
      offsetY: 0.4
    });
    this.shuffleTimer = 0;
    this.shuffleDuration = 0.8 + Math.random() * 0.6;
    this.shuffleProgress = Math.random();
    this.minSpeedRatio = 0.15;
    this.maxSpeedRatio = 1;
    this.speedMultiplier = 1;
    this.updateShuffleForDamage();
  }
  updateShuffleForDamage() {
    const hpLost = this.maxHp - this.hp;
    if (hpLost === 0) {
      this.shuffleDuration = 0.8 + Math.random() * 0.6;
      this.minSpeedRatio = 0.2;
      this.maxSpeedRatio = 1;
      this.speedMultiplier = 1;
    } else if (hpLost === 1) {
      this.shuffleDuration = 1.2 + Math.random() * 0.8;
      this.minSpeedRatio = 0.05;
      this.maxSpeedRatio = 1.1;
      this.speedMultiplier = 1;
    } else {
      this.shuffleDuration = 0.4 + Math.random() * 0.3;
      this.minSpeedRatio = 0.3;
      this.maxSpeedRatio = 1.3;
      this.speedMultiplier = 2;
    }
  }
  hit(impactDirection = { x: 1, y: 0 }, knockbackForce = 3) {
    const isDead = super.hit(impactDirection, knockbackForce);
    this.updateShuffleForDamage();
    return isDead;
  }
  applyMovement(deltaTime) {
    if (this.isStunned) {
      return;
    }
    this.shuffleTimer += deltaTime;
    this.shuffleProgress = this.shuffleTimer / this.shuffleDuration % 1;
    const wave = Math.sin(this.shuffleProgress * Math.PI * 2);
    const easedWave = Easing.easeInOutQuad((wave + 1) / 2);
    const speedRatio = this.minSpeedRatio + easedWave * (this.maxSpeedRatio - this.minSpeedRatio);
    this.position.add(this.velocity.clone().multiplyScalar(deltaTime * speedRatio * this.speedMultiplier));
  }
}
__publicField(PigEnemy, "$tags", ["enemy", "pig"]);
class RedEnemy extends Enemy {
  constructor(params = {}) {
    super({
      maxSpeed: 2,
      hp: 2,
      ...params
    });
    this.hitbox = new CapsuleHitbox({
      radius: 0.2,
      height: 0.4,
      offsetY: 0.35
    });
    this.state = "hopping";
    this.stateTimer = 0;
    this.hopDuration = 0.4;
    this.hopPauseDuration = 0.15;
    this.hopProgress = 0;
    this.hopCount = 0;
    this.hopsBeforeStop = 3 + Math.floor(Math.random() * 3);
    this.stopDuration = 0.8;
    this.throwDelay = 0.3;
    this.hasThrown = false;
  }
  applyMovement(deltaTime) {
    if (this.isStunned) {
      return;
    }
    this.stateTimer += deltaTime;
    this[this.state](deltaTime);
  }
  hopping(deltaTime) {
    this.hopProgress = Math.min(1, this.stateTimer / this.hopDuration);
    const hopCurve = Math.sin(this.hopProgress * Math.PI);
    const speedMultiplier = 0.25 + hopCurve * 1.5;
    this.position.add(this.velocity.clone().multiplyScalar(deltaTime * speedMultiplier));
    if (this.stateTimer >= this.hopDuration) {
      this.hopCount++;
      this.stateTimer = 0;
      if (this.hopCount >= this.hopsBeforeStop) {
        this.state = "stopping";
        this.hopCount = 0;
        this.hasThrown = false;
      } else {
        this.state = "hopPause";
      }
    }
  }
  hopPause() {
    if (this.stateTimer >= this.hopPauseDuration) {
      this.state = "hopping";
      this.stateTimer = 0;
    }
  }
  stopping() {
    if (!this.hasThrown && this.stateTimer >= this.throwDelay) {
      this.throwPie();
      this.hasThrown = true;
    }
    if (this.stateTimer >= this.stopDuration) {
      this.state = "hopping";
      this.stateTimer = 0;
      this.hopsBeforeStop = 3 + Math.floor(Math.random() * 3);
    }
  }
  throwPie() {
    const sprites = ["pie", "cake"];
    const sprite = sprites[Math.floor(Math.random() * sprites.length)];
    this.emit("throw:pie", {
      x: this.position.x,
      y: this.position.y + 0.25,
      sprite
    });
  }
  hit(impactDirection = { x: 1, y: 0 }, knockbackForce = 3) {
    const isDead = super.hit(impactDirection, knockbackForce);
    if (this.state === "stopping") {
      this.state = "hopping";
      this.stateTimer = 0;
      this.hopCount = 0;
    }
    return isDead;
  }
}
__publicField(RedEnemy, "$tags", ["enemy", "red"]);
class GrannyEnemy extends Enemy {
  constructor(params = {}) {
    super({
      maxSpeed: 0.3,
      hp: 4,
      ...params
    });
    this.hitbox = new CircleHitbox({
      radius: 0.3,
      offsetY: 0.3
    });
    this.state = "walking";
    this.stateTimer = 0;
    this.walkDuration = 2.5 + Math.random() * 1.5;
    this.stepTimer = 0;
    this.stepDuration = 0.6;
    this.stepProgress = 0;
    this.chargeDuration = 0.8;
    this.fireballCount = 3;
    this.fireballDelay = 0.15;
    this.fireballsFired = 0;
    this.fireballTimer = 0;
  }
  applyMovement(deltaTime) {
    if (this.isStunned) {
      return;
    }
    this.stateTimer += deltaTime;
    this[this.state](deltaTime);
  }
  walking(deltaTime) {
    this.stepTimer += deltaTime;
    this.stepProgress = this.stepTimer / this.stepDuration % 1;
    const stepCurve = Math.sin(this.stepProgress * Math.PI);
    const speedMultiplier = 0.3 + stepCurve * 0.7;
    this.position.add(this.velocity.clone().multiplyScalar(deltaTime * speedMultiplier));
    if (this.stateTimer >= this.walkDuration) {
      this.state = "charging";
      this.stateTimer = 0;
      this.fireballsFired = 0;
      this.fireballTimer = 0;
    }
  }
  charging() {
    if (this.stateTimer >= this.chargeDuration) {
      this.state = "firing";
      this.stateTimer = 0;
    }
  }
  firing() {
    this.fireballTimer += this.stateTimer - (this.fireballTimer > 0 ? this.fireballTimer : 0);
    const expectedFireballs = Math.floor(this.stateTimer / this.fireballDelay);
    while (this.fireballsFired < expectedFireballs && this.fireballsFired < this.fireballCount) {
      this.fireFireball();
      this.fireballsFired++;
    }
    if (this.fireballsFired >= this.fireballCount) {
      this.state = "walking";
      this.stateTimer = 0;
      this.walkDuration = 2 + Math.random() * 1.5;
    }
  }
  fireFireball() {
    const spreadAngle = (this.fireballsFired - (this.fireballCount - 1) / 2) * 0.3;
    this.emit("throw:fireball", {
      x: this.position.x,
      y: this.position.y,
      angle: spreadAngle
    });
  }
  hit(impactDirection = { x: 1, y: 0 }, knockbackForce = 3) {
    const isDead = super.hit(impactDirection, knockbackForce);
    if (this.state === "charging" || this.state === "firing") {
      this.state = "walking";
      this.stateTimer = 0;
      this.fireballsFired = 0;
    }
    return isDead;
  }
}
__publicField(GrannyEnemy, "$tags", ["enemy", "granny"]);
class AmalgamEnemy extends Enemy {
  constructor(params = {}) {
    super({
      maxSpeed: 0.5,
      hp: 6,
      ...params
    });
    this.hitbox = new CapsuleHitbox({
      radius: 0.25,
      height: 0.6,
      offsetY: 0.5
    });
    this.state = "stalking";
    this.stateTimer = 0;
    this.stalkDuration = 2 + Math.random();
    this.laneChangeSpeed = 1.5;
    this.targetY = this.position.y;
    this.fearChargeDuration = 1.2;
    this.fearActiveDuration = 0.8;
    this.fearRadius = 1.5;
    this.fearProgress = 0;
    this.stepTimer = 0;
    this.stepDuration = 0.5;
    this.stepProgress = 0;
  }
  applyMovement(deltaTime) {
    if (this.isStunned) {
      return;
    }
    this.stateTimer += deltaTime;
    this[this.state](deltaTime);
  }
  stalking(deltaTime) {
    this.stepTimer += deltaTime;
    this.stepProgress = this.stepTimer / this.stepDuration % 1;
    const stepCurve = Math.sin(this.stepProgress * Math.PI);
    const speedMultiplier = 0.4 + stepCurve * 0.6;
    this.position.add(this.velocity.clone().multiplyScalar(deltaTime * speedMultiplier));
    const yDiff = this.targetY - this.position.y;
    if (Math.abs(yDiff) > 0.05) {
      const yMove = Math.sign(yDiff) * Math.min(Math.abs(yDiff), this.laneChangeSpeed * deltaTime);
      this.position.y += yMove;
    }
    if (this.stateTimer >= this.stalkDuration) {
      this.state = "fearCharging";
      this.stateTimer = 0;
      this.fearProgress = 0;
    }
  }
  fearCharging() {
    this.fearProgress = Math.min(1, this.stateTimer / this.fearChargeDuration);
    if (this.stateTimer >= this.fearChargeDuration) {
      this.state = "fearActive";
      this.stateTimer = 0;
      this.emitFear();
    }
  }
  fearActive() {
    if (this.stateTimer >= this.fearActiveDuration) {
      this.state = "stalking";
      this.stateTimer = 0;
      this.stalkDuration = 1.5 + Math.random();
      this.fearProgress = 0;
    }
  }
  emitFear() {
    this.emit("fear:pulse", {
      x: this.position.x,
      y: this.position.y,
      radius: this.fearRadius
    });
  }
  setTargetY(y) {
    this.targetY = Math.max(this.boundaries.min, Math.min(this.boundaries.max, y));
  }
  hit(impactDirection = { x: 1, y: 0 }, knockbackForce = 3) {
    const isDead = super.hit(impactDirection, knockbackForce);
    if (this.state === "fearCharging" || this.state === "fearActive") {
      this.state = "stalking";
      this.stateTimer = 0;
      this.fearProgress = 0;
    }
    return isDead;
  }
}
__publicField(AmalgamEnemy, "$tags", ["enemy", "amalgam"]);
class DenWorld extends World {
  constructor(options = {}) {
    super(options);
    this.addTagsIndex(["enemy"]);
    this.addTagsIndex(["projectile"]);
    this.addTagsIndex(["amalgam"]);
  }
  preUpdate(deltaTime, context) {
    const direction = context.getDirection("move");
    this.player.move(direction);
  }
  postUpdate() {
    this.updateAmalgamTracking();
    this.checkCollisions();
    this.cleanup();
  }
  updateAmalgamTracking() {
    if (!this.player) {
      return;
    }
    const amalgams = this.childrenByTags("amalgam");
    for (const amalgam of amalgams) {
      if (amalgam.alive && amalgam.state === "stalking") {
        amalgam.setTargetY(this.player.y);
      }
    }
  }
  spawnPlayer(options = {}) {
    return this.create(Player, {
      $id: "player",
      $bind: "player",
      x: options.x || 0,
      y: options.y || 0
    });
  }
  spawnProjectile(options = {}) {
    return this.create(Projectile, {
      x: options.x || 0,
      y: options.y || 0,
      velocityX: options.velocityX ?? 7,
      velocityY: options.velocityY ?? 0.6,
      gravity: options.gravity ?? -1.8,
      source: options.source || "player"
    });
  }
  spawnEnemyProjectile(options = {}) {
    return this.create(Projectile, {
      x: options.x || 0,
      y: options.y || 0,
      velocityX: options.velocityX ?? -5,
      velocityY: options.velocityY ?? 0.8,
      gravity: options.gravity ?? -1.5,
      source: "enemy",
      sprite: options.sprite,
      spin: options.spin,
      size: options.size
    });
  }
  spawnPigEnemy(options = {}) {
    return this.create(PigEnemy, {
      x: options.x || 0,
      y: options.y || 0,
      maxSpeed: options.maxSpeed || 0.5
    });
  }
  spawnRedEnemy(options = {}) {
    const enemy = this.create(RedEnemy, {
      x: options.x || 0,
      y: options.y || 0,
      maxSpeed: options.maxSpeed || 0.5
    });
    enemy.on("throw:pie", ({ x, y, sprite }) => {
      this.spawnEnemyProjectile({ x, y, sprite, size: 0.15 });
    });
    return enemy;
  }
  spawnGrannyEnemy(options = {}) {
    const enemy = this.create(GrannyEnemy, {
      x: options.x || 0,
      y: options.y || 0,
      maxSpeed: options.maxSpeed || 0.3
    });
    enemy.on("throw:fireball", ({ x, y, angle }) => {
      this.spawnEnemyProjectile({
        x,
        y,
        velocityX: -4 * Math.cos(angle),
        velocityY: Math.sin(angle) * 2,
        sprite: "fireball",
        spin: false,
        size: 0.4
      });
    });
    return enemy;
  }
  spawnAmalgamEnemy(options = {}) {
    const enemy = this.create(AmalgamEnemy, {
      x: options.x || 0,
      y: options.y || 0,
      maxSpeed: options.maxSpeed || 0.5
    });
    enemy.on("fear:pulse", ({ x, y, radius }) => {
      if (this.player && this.player.alive) {
        const dx = this.player.x - x;
        const dy = this.player.y - y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < radius) {
          this.player.stun(0.8);
          this.emit("player:feared", { x, y, radius });
        }
      }
    });
    return enemy;
  }
  checkCollisions() {
    const projectiles = this.childrenByTags("projectile");
    const enemies = this.childrenByTags("enemy");
    for (const projectile of projectiles) {
      if (!projectile.alive) {
        continue;
      }
      if (projectile.source === "player") {
        this.checkProjectileVsEnemies(projectile, enemies);
      } else {
        this.checkProjectileVsPlayer(projectile);
      }
    }
  }
  checkProjectileVsEnemies(projectile, enemies) {
    for (const enemy of enemies) {
      if (!enemy.alive) {
        continue;
      }
      if (testCollision(projectile, enemy)) {
        this.handleEnemyHit(projectile, enemy);
        break;
      }
    }
  }
  checkProjectileVsPlayer(projectile) {
    if (!this.player || !this.player.alive) {
      return;
    }
    if (testCollision(projectile, this.player)) {
      this.handlePlayerHit(projectile);
    }
  }
  handleEnemyHit(projectile, enemy) {
    projectile.alive = false;
    const impactDirection = {
      x: projectile.velocity.x > 0 ? 1 : -1,
      y: projectile.velocity.y * 0.3
    };
    const killed = enemy.hit(impactDirection, 2.5);
    this.emit("enemy:hit", {
      enemy,
      x: enemy.x,
      y: enemy.y + 0.4,
      direction: impactDirection
    });
    if (killed) {
      this.emit("enemy:destroyed", enemy);
    }
  }
  handlePlayerHit(projectile) {
    projectile.alive = false;
    const impactDirection = {
      x: projectile.velocity.x > 0 ? 1 : -1,
      y: projectile.velocity.y * 0.3
    };
    this.player.hit(impactDirection);
    this.emit("player:hit", {
      x: this.player.x,
      y: this.player.y,
      direction: impactDirection
    });
  }
  cleanup() {
    const entities = this.entities;
    for (const entity of entities) {
      if (entity.alive === false) {
        this.removeChild(entity.$id);
      }
    }
  }
}
function testCollision(entityA, entityB) {
  return testHitbox(entityA.hitbox, entityA.position, entityB.hitbox, entityB.position);
}
class DenController extends GameController {
  constructor(options = {}) {
    super(options);
    this.currentWave = 0;
    this.currentDay = 0;
    this.spawnTimer = 0;
    this.nextSpawnTime = 0;
    this.isSpawning = false;
  }
  setFps(fps = 60) {
    this.game.setFpsLimited(true);
    this.game.setFps(fps);
  }
  update(game, deltaTime) {
    this.world.update(deltaTime, game);
    this.updateWaveSpawning(deltaTime);
  }
  onWaveStart(wave, dayNumber) {
    this.currentWave = wave;
    this.currentDay = dayNumber;
    this.spawnTimer = 0;
    this.nextSpawnTime = this.getNextSpawnTime();
    if (wave === 3) {
      this.spawnAmalgamEnemy({
        x: 3.5,
        y: 0,
        maxSpeed: 0.4
      });
    }
  }
  setSpawning(isSpawning) {
    this.isSpawning = isSpawning;
  }
  getSpawnConfig() {
    const settings = this.constructor.waveSettings;
    const ratios = this.constructor.waveSpawnRatios[this.currentWave];
    const dayFactor = Math.min(this.currentDay, 10);
    const intervalDecrease = dayFactor * settings.spawnIntervalDecreasePerDay;
    const minInterval = Math.max(0.3, settings.baseSpawnInterval.min - intervalDecrease);
    const maxInterval = Math.max(0.5, settings.baseSpawnInterval.max - intervalDecrease);
    const enemySpeed = settings.baseEnemySpeed + dayFactor * settings.speedGrowthPerDay;
    return {
      enemySpeed,
      spawnInterval: { min: minInterval, max: maxInterval },
      spawnY: settings.spawnY,
      ratios
    };
  }
  getNextSpawnTime() {
    const config = this.getSpawnConfig();
    return config.spawnInterval.min + Math.random() * (config.spawnInterval.max - config.spawnInterval.min);
  }
  updateWaveSpawning(deltaTime) {
    if (!this.isSpawning) {
      return;
    }
    this.spawnTimer += deltaTime;
    if (this.spawnTimer >= this.nextSpawnTime) {
      const config = this.getSpawnConfig();
      this.spawnTimer = 0;
      this.nextSpawnTime = this.getNextSpawnTime();
      const randomY = config.spawnY.min + Math.random() * (config.spawnY.max - config.spawnY.min);
      const roll = Math.random();
      if (roll < config.ratios.granny) {
        this.spawnGrannyEnemy({
          x: 3.5,
          y: randomY,
          maxSpeed: config.enemySpeed * 0.6
        });
      } else if (roll < config.ratios.granny + config.ratios.red) {
        this.spawnRedEnemy({
          x: 3.5,
          y: randomY,
          maxSpeed: config.enemySpeed * 1.5
        });
      } else {
        this.spawnPigEnemy({
          x: 3.5,
          y: randomY,
          maxSpeed: config.enemySpeed
        });
      }
    }
  }
  shoot() {
    var _a2;
    const player = this.world.player;
    if (!player.canShoot()) {
      return;
    }
    player.shootCooldown = player.shootCooldownDuration;
    player.shootRecoilTimer = player.shootRecoilDuration;
    this.world.spawnProjectile({
      x: player.x + 0.3,
      y: player.y + 0.4
    });
    (_a2 = this.denAudio) == null ? void 0 : _a2.playShoot();
  }
  spawnPlayer(options = {}) {
    return this.world.spawnPlayer(options);
  }
  spawnPigEnemy(options = {}) {
    return this.world.spawnPigEnemy(options);
  }
  spawnRedEnemy(options = {}) {
    return this.world.spawnRedEnemy(options);
  }
  spawnGrannyEnemy(options = {}) {
    return this.world.spawnGrannyEnemy(options);
  }
  spawnAmalgamEnemy(options = {}) {
    return this.world.spawnAmalgamEnemy(options);
  }
  toggleHitboxDebug() {
    return this.renderer.toggleHitboxDebug();
  }
}
__publicField(DenController, "bindings", {
  moveUp: ["KeyW", "ArrowUp", "swipeUp"],
  moveDown: ["KeyS", "ArrowDown", "swipeDown"],
  shoot: ["Space", "tap"]
});
__publicField(DenController, "resources", ["world", "renderer", "denAudio"]);
__publicField(DenController, "waveSettings", {
  baseEnemySpeed: 0.4,
  speedGrowthPerDay: 0.05,
  baseSpawnInterval: { min: 1.2, max: 2 },
  spawnIntervalDecreasePerDay: 0.1,
  spawnY: { min: -1.9, max: 0.6 }
});
__publicField(DenController, "waveSpawnRatios", [
  { pig: 1 / 2, red: 1 / 2, granny: 0 },
  { pig: 2 / 3, red: 1 / 3, granny: 0 },
  { pig: 5 / 10, red: 3 / 10, granny: 2 / 10 },
  { pig: 5 / 10, red: 3 / 10, granny: 2 / 10 }
]);
class SpriteEffect {
  constructor(options = {}) {
    __privateAdd(this, _enabled, true);
    __privateSet(this, _enabled, options.enabled ?? true);
  }
  get enabled() {
    return __privateGet(this, _enabled);
  }
  set enabled(value) {
    __privateSet(this, _enabled, value);
  }
  get type() {
    return this.constructor.type;
  }
  getHints() {
    return null;
  }
  update() {
  }
  dispose() {
  }
}
_enabled = new WeakMap();
__publicField(SpriteEffect, "type", "base");
let OutlineEffect$1 = (_a = class extends SpriteEffect {
  constructor(options = {}) {
    super(options);
    __privateAdd(this, _width, 0.02);
    __privateAdd(this, _color, [1, 1, 1, 1]);
    if (options.width !== void 0) {
      __privateSet(this, _width, options.width);
    }
    if (options.color !== void 0) {
      __privateSet(this, _color, options.color);
    }
  }
  get width() {
    return __privateGet(this, _width);
  }
  set width(value) {
    __privateSet(this, _width, value);
  }
  get color() {
    return __privateGet(this, _color);
  }
  set color(value) {
    __privateSet(this, _color, value);
  }
  getHints() {
    return {
      width: __privateGet(this, _width),
      color: __privateGet(this, _color)
    };
  }
}, _width = new WeakMap(), _color = new WeakMap(), __publicField(_a, "type", "outline"), _a);
class PlayerView extends EntityView {
  constructor(entity, context) {
    super(entity, context);
    this.regions = {
      right: context.game.getRegion("wolf_right"),
      up: context.game.getRegion("wolf_up"),
      down: context.game.getRegion("wolf_down")
    };
    this.root = new Sprite({
      region: this.regions.right,
      x: entity.x,
      y: entity.y,
      width: 1,
      height: 1,
      anchorY: 0.05
    });
    this.root.effects.add(new OutlineEffect$1({
      width: 0.03,
      color: [1, 1, 0, 1]
    }));
  }
  sync() {
    super.sync();
    const velocity = this.entity.velocity;
    if (Math.abs(velocity.y) > 0.1) {
      this.root.region = velocity.y > 0 ? this.regions.up : this.regions.down;
    } else {
      this.root.region = this.regions.right;
    }
    if (this.entity.shootRecoilTimer > 0) {
      const t = this.entity.shootRecoilTimer / this.entity.shootRecoilDuration;
      this.root.scaleX = 1 - t * 0.08;
      this.root.scaleY = 1 + t * 0.05;
    } else {
      this.root.scaleX = 1;
      this.root.scaleY = 1;
    }
  }
}
class ImpactSquashEffect extends SpriteEffect {
  constructor(options = {}) {
    super(options);
    this.duration = options.duration ?? 0.25;
    this.intensity = options.intensity ?? 0.4;
    this.impactDirection = options.impactDirection ?? { x: 1, y: 0 };
    this.timer = 0;
    this.active = false;
  }
  trigger(impactDirection = { x: 1, y: 0 }) {
    this.impactDirection = impactDirection;
    this.timer = this.duration;
    this.active = true;
  }
  update(deltaTime) {
    if (!this.active) {
      return;
    }
    this.timer -= deltaTime;
    if (this.timer <= 0) {
      this.timer = 0;
      this.active = false;
    }
  }
  getHints() {
    if (!this.active) {
      return null;
    }
    const progress = 1 - this.timer / this.duration;
    const eased = Easing.easeOutElastic(progress);
    const squashAmount = (1 - eased) * this.intensity;
    const dirX = Math.abs(this.impactDirection.x);
    const dirY = Math.abs(this.impactDirection.y);
    const isHorizontal = dirX > dirY;
    if (isHorizontal) {
      return {
        scaleX: 1 - squashAmount,
        scaleY: 1 + squashAmount * 0.5
      };
    }
    return {
      scaleX: 1 + squashAmount * 0.5,
      scaleY: 1 - squashAmount
    };
  }
}
__publicField(ImpactSquashEffect, "type", "impact_squash");
class ChromaticEffect extends ShaderEffect {
  constructor(options = {}) {
    super(options);
    __publicField(this, "intensity", 0.5);
    this.intensity = options.intensity ?? 0.5;
  }
}
__publicField(ChromaticEffect, "shader", {
  params: ["intensity"],
  uniforms: [],
  fragment: `
            if (intensity > 0.0) {
                vec2 offset = texelSize * intensity * 50.0;
                color.r = texture(uTexture, texCoord + vec2(offset.x, 0.0)).r;
                color.b = texture(uTexture, texCoord - vec2(offset.x, 0.0)).b;
            }
        `
});
class EnemyView extends EntityView {
  constructor(entity, context) {
    super(entity, context);
    const config = context.config || {};
    const region = context.game.getRegion(config.image);
    this.baseScaleX = config.width ?? 1;
    this.baseScaleY = config.height ?? 1;
    this.root = new Sprite({
      region,
      x: entity.x,
      y: entity.y,
      width: this.baseScaleX,
      height: this.baseScaleY,
      anchorX: config.anchorX ?? 0.5,
      anchorY: config.anchorY ?? 0.05
    });
    this.impactSquash = new ImpactSquashEffect({
      duration: 0.4,
      intensity: 0.6
    });
    this.chromaticEffect = new ChromaticEffect({ intensity: 0 });
    this.root.effects.add(this.chromaticEffect);
    this.lastHp = entity.hp;
  }
  update(deltaTime) {
    if (this.entity.hp < this.lastHp) {
      this.impactSquash.trigger({ x: 1, y: 0 });
      this.lastHp = this.entity.hp;
    }
    this.impactSquash.update(deltaTime);
  }
  sync() {
    if (!this.root) {
      return;
    }
    this.syncPosition();
    this.syncHitFlash();
    this.syncStun();
    this.syncSquash();
  }
  syncPosition() {
    this.root.x = this.entity.x;
    this.root.y = this.entity.y;
    this.root.setDepth(-this.entity.y);
  }
  syncHitFlash() {
    if (this.entity.hitFlashTimer > 0) {
      const flashIntensity = this.entity.hitFlashTimer / this.entity.hitFlashDuration;
      this.root.tint = [1, 0.2, 0.2, flashIntensity * 0.7];
      this.chromaticEffect.intensity = flashIntensity * 0.5;
    } else {
      this.root.tint = null;
      this.chromaticEffect.intensity = 0;
    }
  }
  syncStun() {
    if (this.entity.isStunned) {
      const shake = Math.sin(Date.now() * 0.05) * 0.02;
      this.root.x += shake;
    }
  }
  syncSquash() {
    const squashHints = this.impactSquash.getHints();
    if (squashHints) {
      this.root.scaleX = this.baseScaleX * squashHints.scaleX;
      this.root.scaleY = this.baseScaleY * squashHints.scaleY;
    } else {
      this.root.scaleX = this.baseScaleX;
      this.root.scaleY = this.baseScaleY;
    }
  }
}
class WaveEffect extends ShaderEffect {
  constructor(options = {}) {
    super(options);
    __publicField(this, "amplitude", 0.5);
    __publicField(this, "phase", 0);
    this.amplitude = options.amplitude ?? 0.5;
    this.phase = options.phase ?? 0;
  }
}
__publicField(WaveEffect, "shader", {
  params: ["amplitude", "phase"],
  fragment: `
            float wave = sin(texCoord.x * 10.0 + phase) * amplitude;
            vec2 distorted = texCoord + vec2(0.0, wave * 0.05);
            if (distorted.x < uvMin.x || distorted.x > uvMax.x || distorted.y < uvMin.y || distorted.y > uvMax.y) {
                discard;
            }
            color = texture(uTexture, distorted);
        `
});
class PigEnemyView extends EnemyView {
  constructor(entity, context) {
    super(entity, context);
    this.waveEffect = new WaveEffect({ amplitude: 0.1 });
    this.root.effects.add(this.waveEffect);
  }
  sync() {
    super.sync();
    this.syncWave();
  }
  syncWave() {
    this.waveEffect.phase = this.entity.shuffleProgress * Math.PI * 2;
  }
}
class RedEnemyView extends EnemyView {
  constructor(entity, context) {
    super(entity, context);
    const animatorConfig = context.game.getSource("redAnimator");
    this.animator = new SpriteAnimator({
      sprite: this.root,
      config: animatorConfig,
      textureSystem: context.game.textureSystem
    });
    this.root.anchorX = this.animator.anchor.x;
    this.root.anchorY = this.animator.anchor.y;
    this.animator.get("throw").on("event:release", () => {
      logger.log("throw released");
    });
    this.hopHeight = 0.06;
  }
  update(deltaTime) {
    super.update(deltaTime);
    this.animator.update(deltaTime);
  }
  sync() {
    super.sync();
    this.syncAnimation();
    this.syncAnimationSpeed();
    this.syncHop();
  }
  syncHop() {
    const skipAnim = this.animator.get("skip");
    if (this.animator.current !== skipAnim) {
      return;
    }
    const t = skipAnim.getSegmentProgress("hop");
    const hop = 4 * t * (1 - t);
    this.root.y += hop * this.hopHeight;
  }
  syncAnimation() {
    const state = this.entity.state;
    const skipAnim = this.animator.get("skip");
    const throwAnim = this.animator.get("throw");
    if (state === "stopping") {
      if (this.animator.current !== throwAnim) {
        this.animator.play("throw");
      }
    } else if (this.animator.current !== skipAnim) {
      this.animator.play("skip");
    }
  }
  syncAnimationSpeed() {
    const anim = this.animator.current;
    if (anim) {
      anim.speed = 1;
    }
  }
}
class GrannyEnemyView extends EnemyView {
  constructor(entity, context) {
    super(entity, context);
    this.baseY = 0;
    this.chargeGlow = 0;
  }
  sync() {
    super.sync();
    this.syncWalkerAnimation();
    this.syncChargeAnimation();
    this.syncFireAnimation();
  }
  syncWalkerAnimation() {
    if (this.entity.state !== "walking") {
      return;
    }
    const progress = this.entity.stepProgress;
    const leanForward = Math.sin(progress * Math.PI) * 0.08;
    this.root.rotation = -leanForward;
    const bobHeight = Math.abs(Math.sin(progress * Math.PI * 2)) * 0.03;
    this.root.y = this.entity.y - bobHeight;
    const squashPhase = Math.sin(progress * Math.PI * 2);
    const squash = 1 + squashPhase * 0.05;
    const stretch = 1 - squashPhase * 0.03;
    this.root.scaleX = this.baseScaleX * squash;
    this.root.scaleY = this.baseScaleY * stretch;
    const shuffle = Math.sin(progress * Math.PI * 4) * 0.01;
    this.root.x = this.entity.x + shuffle;
  }
  syncChargeAnimation() {
    if (this.entity.state !== "charging") {
      this.chargeGlow = 0;
      return;
    }
    const chargeProgress = this.entity.stateTimer / this.entity.chargeDuration;
    const shake = Math.sin(Date.now() * 0.03) * chargeProgress * 0.03;
    this.root.x = this.entity.x + shake;
    this.root.y = this.entity.y;
    const breathe = 1 + Math.sin(chargeProgress * Math.PI * 4) * 0.05 * chargeProgress;
    this.root.scaleX = this.baseScaleX * breathe;
    this.root.scaleY = this.baseScaleY * breathe;
    this.root.rotation = Math.sin(chargeProgress * Math.PI * 6) * 0.05 * chargeProgress;
    this.chargeGlow = chargeProgress;
    this.root.tint = [1, 0.5 + chargeProgress * 0.5, 0.2, chargeProgress * 0.3];
  }
  syncFireAnimation() {
    if (this.entity.state !== "firing") {
      if (this.chargeGlow > 0) {
        this.chargeGlow = 0;
        this.root.tint = null;
      }
      return;
    }
    const fireProgress = this.entity.fireballsFired / this.entity.fireballCount;
    const recoil = Math.sin(this.entity.stateTimer * 30) * 0.02 * (1 - fireProgress);
    this.root.x = this.entity.x + recoil * 0.5;
    this.root.y = this.entity.y;
    this.root.scaleX = this.baseScaleX * (1 + (1 - fireProgress) * 0.1);
    this.root.scaleY = this.baseScaleY * (1 - (1 - fireProgress) * 0.05);
    this.root.rotation = 0.1 * (1 - fireProgress);
    const glowIntensity = (1 - fireProgress) * 0.4;
    this.root.tint = glowIntensity > 0.01 ? [1, 0.6, 0.3, glowIntensity] : null;
  }
}
class AmalgamEnemyView extends EnemyView {
  constructor(entity, context) {
    super(entity, context);
    this.eyeGlow = 0;
    this.baseY = 0;
  }
  sync() {
    super.sync();
    this.syncStalkingAnimation();
    this.syncFearCharge();
    this.syncFearActive();
  }
  syncStalkingAnimation() {
    if (this.entity.state !== "stalking") {
      return;
    }
    const progress = this.entity.stepProgress;
    const sway = Math.sin(progress * Math.PI * 2) * 0.03;
    this.root.rotation = sway;
    const bob = Math.abs(Math.sin(progress * Math.PI * 2)) * 0.02;
    this.root.y = this.entity.y - bob;
    const breathe = 1 + Math.sin(progress * Math.PI) * 0.03;
    this.root.scaleX = this.baseScaleX * breathe;
    this.root.scaleY = this.baseScaleY * (2 - breathe);
  }
  syncFearCharge() {
    if (this.entity.state !== "fearCharging") {
      this.eyeGlow = 0;
      return;
    }
    const chargeProgress = this.entity.fearProgress;
    const shake = Math.sin(Date.now() * 0.04) * chargeProgress * 0.04;
    this.root.x = this.entity.x + shake;
    this.root.y = this.entity.y;
    const pulse = 1 + Math.sin(chargeProgress * Math.PI * 6) * 0.08 * chargeProgress;
    this.root.scaleX = this.baseScaleX * pulse;
    this.root.scaleY = this.baseScaleY * pulse;
    this.root.rotation = Math.sin(chargeProgress * Math.PI * 8) * 0.06 * chargeProgress;
    this.eyeGlow = chargeProgress;
    const red = 1;
    const green = 0.2 + (1 - chargeProgress) * 0.3;
    const blue = 0.1;
    const intensity = chargeProgress * 0.5;
    this.root.tint = [red, green, blue, intensity];
  }
  syncFearActive() {
    if (this.entity.state !== "fearActive") {
      if (this.eyeGlow > 0 && this.entity.state !== "fearCharging") {
        this.eyeGlow = 0;
        this.root.tint = null;
      }
      return;
    }
    const activeProgress = this.entity.stateTimer / this.entity.fearActiveDuration;
    const fadeOut = 1 - activeProgress;
    const pulse = Math.sin(activeProgress * Math.PI * 4) * 0.05 * fadeOut;
    this.root.scaleX = this.baseScaleX * (1.1 + pulse);
    this.root.scaleY = this.baseScaleY * (1.1 - pulse * 0.5);
    this.root.x = this.entity.x;
    this.root.y = this.entity.y;
    this.root.rotation = 0;
    const intensity = fadeOut * 0.6;
    this.root.tint = intensity > 0.01 ? [1, 0.3, 0.2, intensity] : null;
  }
}
const SOURCE_COLORS = {
  player: "#3a2a1a",
  enemy: "#cc3333"
};
class ProjectileView extends EntityView {
  constructor(entity, context) {
    super(entity, context);
    const config = context.config || {};
    const sprite = entity.sprite || config.image;
    if (sprite) {
      const region = context.game.getRegion(sprite);
      this.root = new Sprite({
        x: entity.x,
        y: entity.y,
        region,
        width: entity.size,
        height: entity.size,
        anchorX: 0.5,
        anchorY: 0.5
      });
      if (!entity.spin) {
        this.waveEffect = new WaveEffect({ amplitude: 0.3 });
        this.root.effects.add(this.waveEffect);
      }
    } else {
      const color = SOURCE_COLORS[entity.source] || config.color || "#3a2a1a";
      this.root = new Circle({
        x: entity.x,
        y: entity.y,
        radius: config.radius ?? 0.08,
        color
      });
    }
  }
  sync() {
    if (this.root) {
      this.root.x = this.entity.x;
      this.root.y = this.entity.y;
      if (this.entity.spin) {
        this.root.rotation = this.entity.rotation;
      } else if (this.waveEffect) {
        this.waveEffect.phase = this.entity.time * 15;
      }
    }
  }
}
const DEFAULT_CONFIG = {
  count: 6,
  minSpeed: 2,
  maxSpeed: 5,
  minSize: 0.03,
  maxSize: 0.08,
  lifetime: 0.4,
  gravity: -8,
  colors: ["#8B4513", "#A0522D", "#D2691E", "#CD853F"]
};
class ImpactParticles extends PerkyModule {
  constructor(options = {}) {
    super(options);
    this.particles = [];
    this.particleGroup = new Group2D();
    this.config = { ...DEFAULT_CONFIG, ...options };
  }
  spawn(x, y, direction = { x: 1, y: 0 }) {
    const { count, minSpeed, maxSpeed, minSize, maxSize, lifetime, colors } = this.config;
    for (let i = 0; i < count; i++) {
      const angle = Math.atan2(direction.y, direction.x) + (Math.random() - 0.5) * 1.5;
      const speed = minSpeed + Math.random() * (maxSpeed - minSpeed);
      const particle = {
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed + Math.random() * 2,
        size: minSize + Math.random() * (maxSize - minSize),
        lifetime,
        maxLifetime: lifetime,
        color: colors[Math.floor(Math.random() * colors.length)],
        shape: null
      };
      particle.shape = new Circle({
        x: particle.x,
        y: particle.y,
        radius: particle.size,
        color: particle.color
      });
      this.particleGroup.addChild(particle.shape);
      this.particles.push(particle);
    }
  }
  update(deltaTime) {
    const { gravity } = this.config;
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const particle = this.particles[i];
      particle.vy += gravity * deltaTime;
      particle.x += particle.vx * deltaTime;
      particle.y += particle.vy * deltaTime;
      particle.lifetime -= deltaTime;
      const lifeRatio = particle.lifetime / particle.maxLifetime;
      const currentSize = particle.size * lifeRatio;
      particle.shape.x = particle.x;
      particle.shape.y = particle.y;
      particle.shape.radius = currentSize;
      if (particle.lifetime <= 0) {
        this.particleGroup.remove(particle.shape);
        this.particles.splice(i, 1);
      }
    }
  }
}
__publicField(ImpactParticles, "$category", "impactParticles");
class OutlineEffect extends ShaderEffect {
  constructor(options = {}) {
    super(options);
    __publicField(this, "width", 0.02);
    this.width = options.width ?? 0.02;
  }
}
__publicField(OutlineEffect, "shader", {
  params: ["width"],
  uniforms: [],
  fragment: `
            if (width > 0.0 && color.a < 0.5) {
                vec2 offset = texelSize * width * 100.0;

                float neighborAlpha = 0.0;
                neighborAlpha += texture(uTexture, texCoord + vec2(-offset.x, 0.0)).a;
                neighborAlpha += texture(uTexture, texCoord + vec2(offset.x, 0.0)).a;
                neighborAlpha += texture(uTexture, texCoord + vec2(0.0, -offset.y)).a;
                neighborAlpha += texture(uTexture, texCoord + vec2(0.0, offset.y)).a;

                if (neighborAlpha > 0.0) {
                    color = vec4(1.0, 1.0, 1.0, 1.0);
                }
            }
        `
});
class HitboxDebug {
  constructor(world) {
    __privateAdd(this, _HitboxDebug_instances);
    this.world = world;
    this.enabled = false;
    this.group = new Group2D();
    this.visuals = /* @__PURE__ */ new Map();
  }
  toggle() {
    this.enabled = !this.enabled;
    if (!this.enabled) {
      this.clear();
    }
    return this.enabled;
  }
  setEnabled(enabled) {
    this.enabled = enabled;
    if (!this.enabled) {
      this.clear();
    }
  }
  clear() {
    for (const visual of this.visuals.values()) {
      for (const circle of visual) {
        this.group.remove(circle);
      }
    }
    this.visuals.clear();
  }
  update() {
    if (!this.enabled) {
      return;
    }
    const entities = __privateMethod(this, _HitboxDebug_instances, getCollidableEntities_fn).call(this);
    const currentIds = /* @__PURE__ */ new Set();
    for (const entity of entities) {
      currentIds.add(entity.$id);
      __privateMethod(this, _HitboxDebug_instances, updateVisual_fn).call(this, entity);
    }
    for (const [id, visual] of this.visuals) {
      if (!currentIds.has(id)) {
        for (const circle of visual) {
          this.group.remove(circle);
        }
        this.visuals.delete(id);
      }
    }
  }
}
_HitboxDebug_instances = new WeakSet();
getCollidableEntities_fn = function() {
  const entities = [];
  const player = this.world.player;
  if (player && player.alive !== false) {
    entities.push(player);
  }
  const enemies = this.world.childrenByTags("enemy");
  for (const enemy of enemies) {
    if (enemy.alive !== false) {
      entities.push(enemy);
    }
  }
  const projectiles = this.world.childrenByTags("projectile");
  for (const projectile of projectiles) {
    if (projectile.alive !== false) {
      entities.push(projectile);
    }
  }
  return entities;
};
updateVisual_fn = function(entity) {
  let visual = this.visuals.get(entity.$id);
  if (!visual) {
    visual = __privateMethod(this, _HitboxDebug_instances, createVisual_fn).call(this, entity);
    this.visuals.set(entity.$id, visual);
    for (const circle of visual) {
      this.group.addChild(circle);
    }
  }
  const hitbox = entity.hitbox;
  const baseX = entity.x + hitbox.offsetX;
  const baseY = entity.y + hitbox.offsetY;
  if (hitbox.type === "circle") {
    visual[0].x = baseX;
    visual[0].y = baseY;
  } else if (hitbox.type === "capsule") {
    visual[0].x = baseX;
    visual[0].y = entity.y + hitbox.topY;
    visual[1].x = baseX;
    visual[1].y = entity.y + hitbox.bottomY;
  }
};
createVisual_fn = function(entity) {
  const hitbox = entity.hitbox;
  const color = __privateMethod(this, _HitboxDebug_instances, getColorForEntity_fn).call(this, entity);
  if (hitbox.type === "circle") {
    return [__privateMethod(this, _HitboxDebug_instances, createCircle_fn).call(this, hitbox.radius, color)];
  }
  if (hitbox.type === "capsule") {
    return [
      __privateMethod(this, _HitboxDebug_instances, createCircle_fn).call(this, hitbox.radius, color),
      __privateMethod(this, _HitboxDebug_instances, createCircle_fn).call(this, hitbox.radius, color)
    ];
  }
  return [];
};
createCircle_fn = function(radius, color) {
  return new Circle({
    radius,
    color,
    strokeColor: color,
    strokeWidth: 0.02,
    anchorX: 0.5,
    anchorY: 0.5,
    opacity: 0.2
  });
};
getColorForEntity_fn = function(entity) {
  var _a2, _b;
  if (entity === this.world.player) {
    return "#00ff00";
  }
  if ((_a2 = entity.$tags) == null ? void 0 : _a2.includes("enemy")) {
    return "#ff0000";
  }
  if ((_b = entity.$tags) == null ? void 0 : _b.includes("projectile")) {
    return entity.source === "player" ? "#ffff00" : "#ff6600";
  }
  return "#ffffff";
};
const _WaveProgressBar = class _WaveProgressBar extends PerkyModule {
  constructor(options = {}) {
    super(options);
    __privateAdd(this, _WaveProgressBar_instances);
    this.game = options.game;
    this.currentDay = 0;
    this.root = createElement("div", {
      class: "wave-progress",
      html: `
            <div class="wave-progress-label"><span class="wave-name">Dawn</span> - <span class="day-label">Day 1</span></div>
            <div class="wave-progress-track">
                <div class="wave-progress-fill"></div>
            </div>
            <div class="day-announcement" style="display: none;">
                <span class="day-number">Day 1</span>
            </div>
        `
    });
    this.nameEl = this.root.querySelector(".wave-name");
    this.dayLabelEl = this.root.querySelector(".day-label");
    this.fillEl = this.root.querySelector(".wave-progress-fill");
    this.dayAnnouncementEl = this.root.querySelector(".day-announcement");
    this.dayNumberEl = this.root.querySelector(".day-number");
    __privateMethod(this, _WaveProgressBar_instances, applyStyles_fn).call(this);
  }
  onStart() {
    if (!this.game) {
      return;
    }
    this.listenTo(this.game, "wave:start", ({ wave, dayNumber }) => {
      __privateMethod(this, _WaveProgressBar_instances, updateWave_fn).call(this, wave, dayNumber);
    });
    this.listenTo(this.game, "wave:tick", ({ progress }) => {
      __privateMethod(this, _WaveProgressBar_instances, updateProgress_fn).call(this, progress);
    });
    this.listenTo(this.game, "day:announce", ({ dayNumber }) => {
      __privateMethod(this, _WaveProgressBar_instances, showDayAnnouncement_fn).call(this, dayNumber);
    });
    this.listenTo(this.game, "day:start", ({ dayNumber }) => {
      __privateMethod(this, _WaveProgressBar_instances, hideDayAnnouncement_fn).call(this);
      __privateMethod(this, _WaveProgressBar_instances, updateDayLabel_fn).call(this, dayNumber);
    });
  }
  mount(container) {
    if (container instanceof HTMLElement) {
      container.appendChild(this.root);
    } else if (container.div) {
      container.div.appendChild(this.root);
    }
  }
  onDispose() {
    var _a2;
    if ((_a2 = this.root) == null ? void 0 : _a2.parentNode) {
      this.root.parentNode.removeChild(this.root);
    }
  }
};
_WaveProgressBar_instances = new WeakSet();
showDayAnnouncement_fn = function(dayNumber) {
  this.dayNumberEl.textContent = `Day ${dayNumber + 1}`;
  this.dayAnnouncementEl.style.display = "block";
};
hideDayAnnouncement_fn = function() {
  this.dayAnnouncementEl.style.display = "none";
};
updateDayLabel_fn = function(dayNumber) {
  this.dayLabelEl.textContent = `Day ${dayNumber + 1}`;
};
updateWave_fn = function(wave, dayNumber) {
  const phaseName = _WaveProgressBar.phaseNames[wave] || "Dawn";
  this.nameEl.textContent = phaseName;
  __privateMethod(this, _WaveProgressBar_instances, updateDayLabel_fn).call(this, dayNumber);
  __privateMethod(this, _WaveProgressBar_instances, updateProgress_fn).call(this, 0);
};
updateProgress_fn = function(progress) {
  this.fillEl.style.width = `${progress * 100}%`;
};
applyStyles_fn = function() {
  const style = createElement("style", { text: `
            .wave-progress {
                position: absolute;
                bottom: 7%;
                left: 50%;
                transform: translateX(-50%);
                width: 18%;
                text-align: center;
                font-family: 'Segoe UI', system-ui, sans-serif;
                container-type: inline-size;
            }

            .wave-progress-label {
                color: rgba(180, 150, 110, 0.85);
                font-size: 3.5cqi;
                font-weight: 500;
                letter-spacing: 0.3cqi;
                text-transform: uppercase;
                margin-bottom: 1.2cqi;
            }

            .wave-progress-label .wave-name {
                font-weight: 600;
                color: rgba(210, 175, 120, 0.9);
            }

            .wave-progress-track {
                width: 100%;
                height: 1.2cqi;
                background: rgba(0, 0, 0, 0.25);
                border-radius: 0.6cqi;
                overflow: hidden;
            }

            .wave-progress-fill {
                height: 100%;
                width: 0%;
                background: rgba(200, 160, 90, 0.7);
                border-radius: 0.6cqi;
                transition: width 0.4s ease-out;
            }

            .day-announcement {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                text-align: center;
            }

            .day-number {
                font-size: 48px;
                font-weight: 700;
                color: #fff;
                text-shadow: 0 4px 12px rgba(0, 0, 0, 0.8);
                letter-spacing: 4px;
                text-transform: uppercase;
            }
        ` });
  this.root.appendChild(style);
};
__publicField(_WaveProgressBar, "phaseNames", ["Dawn", "Day", "Dusk", "Night"]);
let WaveProgressBar = _WaveProgressBar;
class WaveSystem extends PerkyModule {
  constructor() {
    super(...arguments);
    __privateAdd(this, _WaveSystem_instances);
    __publicField(this, "wavesPerDay", 4);
    __publicField(this, "spawnDurations", [25, 25, 25, 25]);
    __publicField(this, "announcementDuration", 3);
    __publicField(this, "wave", 0);
    __publicField(this, "day", 0);
    __publicField(this, "timeOfDay", 0);
    __publicField(this, "elapsedTime", 0);
    __publicField(this, "paused", false);
    __publicField(this, "waitingForClear", false);
  }
  get isSpawning() {
    return this.progress < 1;
  }
  get progress() {
    const duration = this.spawnDurations[this.wave] || 25;
    return Math.min(this.elapsedTime / duration, 1);
  }
  update(delta) {
    if (this.paused) {
      return;
    }
    if (this.waitingForClear) {
      return;
    }
    if (this.isSpawning) {
      this.elapsedTime += delta;
      const waveStartTimeOfDay = this.wave * (1 / this.wavesPerDay);
      this.timeOfDay = waveStartTimeOfDay + this.progress * (1 / this.wavesPerDay);
    }
    this.emit("tick", {
      wave: this.wave,
      day: this.day,
      progress: this.progress,
      timeOfDay: this.timeOfDay,
      isSpawning: this.isSpawning
    });
  }
  checkClear(enemyCount) {
    if (!this.waitingForClear) {
      if (!this.isSpawning && enemyCount > 0) {
        this.waitingForClear = true;
        this.emit("spawning:end", { wave: this.wave, day: this.day });
      }
      return;
    }
    if (enemyCount === 0) {
      this.waitingForClear = false;
      this.emit("wave:clear", { wave: this.wave, day: this.day });
      __privateMethod(this, _WaveSystem_instances, startNextWave_fn).call(this);
    }
  }
  reset() {
    this.wave = 0;
    this.day = 0;
    this.timeOfDay = 0;
    this.elapsedTime = 0;
    this.paused = false;
    this.waitingForClear = false;
  }
}
_WaveSystem_instances = new WeakSet();
startNextWave_fn = function() {
  const nextWave = this.wave + 1;
  if (nextWave >= this.wavesPerDay) {
    __privateMethod(this, _WaveSystem_instances, startNextDay_fn).call(this);
  } else {
    this.wave = nextWave;
    this.elapsedTime = 0;
    this.emit("wave:start", { wave: this.wave, day: this.day });
  }
};
startNextDay_fn = function() {
  this.day++;
  this.wave = 0;
  this.timeOfDay = 0;
  this.elapsedTime = 0;
  this.paused = true;
  this.emit("day:announce", { day: this.day });
  setTimeout(() => {
    this.paused = false;
    this.emit("day:start", { day: this.day });
    this.emit("wave:start", { wave: 0, day: this.day });
  }, this.announcementDuration * 1e3);
};
__publicField(WaveSystem, "$category", "waveSystem");
class RenderPass extends PerkyModule {
  constructor(options = {}) {
    super(options);
    __privateAdd(this, _RenderPass_instances);
    __privateAdd(this, _enabled2, true);
    __privateAdd(this, _program2, null);
    __privateAdd(this, _uniforms, {});
    __privateSet(this, _uniforms, { ...this.constructor.defaultUniforms });
  }
  get enabled() {
    return __privateGet(this, _enabled2);
  }
  set enabled(value) {
    __privateSet(this, _enabled2, value);
  }
  get program() {
    return __privateGet(this, _program2);
  }
  get uniforms() {
    return __privateGet(this, _uniforms);
  }
  init(shaderRegistry) {
    const definition = this.constructor.shaderDefinition;
    if (!definition) {
      throw new Error(`${this.constructor.name}.shaderDefinition must be defined`);
    }
    const id = `pass_${this.constructor.name}_${Date.now()}`;
    __privateSet(this, _program2, shaderRegistry.register(id, definition));
  }
  setUniform(name, value) {
    __privateGet(this, _uniforms)[name] = value;
    return this;
  }
  render(gl, inputTexture, fullscreenQuad) {
    if (!__privateGet(this, _enabled2) || !__privateGet(this, _program2)) {
      return;
    }
    __privateGet(this, _program2).use();
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, inputTexture);
    __privateGet(this, _program2).setUniform1i("uTexture", 0);
    this.applyUniforms();
    fullscreenQuad.draw(gl, __privateGet(this, _program2));
  }
  applyUniforms() {
    for (const [name, value] of Object.entries(__privateGet(this, _uniforms))) {
      __privateMethod(this, _RenderPass_instances, applyUniform_fn).call(this, name, value);
    }
  }
  onDispose() {
    __privateSet(this, _program2, null);
    __privateSet(this, _uniforms, {});
  }
}
_enabled2 = new WeakMap();
_program2 = new WeakMap();
_uniforms = new WeakMap();
_RenderPass_instances = new WeakSet();
applyUniform_fn = function(name, value) {
  var _a2;
  if (typeof value === "number") {
    __privateGet(this, _program2).setUniform1f(name, value);
    return;
  }
  if (!Array.isArray(value)) {
    return;
  }
  const setters = {
    2: () => __privateGet(this, _program2).setUniform2f(name, value[0], value[1]),
    3: () => __privateGet(this, _program2).setUniform3f(name, value[0], value[1], value[2]),
    4: () => __privateGet(this, _program2).setUniform4f(name, value)
  };
  (_a2 = setters[value.length]) == null ? void 0 : _a2.call(setters);
};
__publicField(RenderPass, "$category", "renderPass");
__publicField(RenderPass, "$lifecycle", false);
__publicField(RenderPass, "shaderDefinition", null);
__publicField(RenderPass, "defaultUniforms", {});
__publicField(RenderPass, "uniformConfig", {});
class VignettePass extends RenderPass {
}
__publicField(VignettePass, "$name", "vignettePass");
__publicField(VignettePass, "shaderDefinition", {
  vertex: `#version 300 es
            in vec2 aPosition;
            in vec2 aTexCoord;
            out vec2 vTexCoord;
            void main() {
                gl_Position = vec4(aPosition, 0.0, 1.0);
                vTexCoord = aTexCoord;
            }
        `,
  fragment: `#version 300 es
            precision highp float;
            uniform sampler2D uTexture;
            uniform float uIntensity;
            uniform float uSmoothness;
            uniform float uRoundness;
            uniform vec3 uColor;
            in vec2 vTexCoord;
            out vec4 fragColor;

            float dither(vec2 coord) {
                return (fract(sin(dot(coord, vec2(12.9898, 78.233))) * 43758.5453) - 0.5) / 255.0;
            }

            void main() {
                vec4 color = texture(uTexture, vTexCoord);
                vec2 uv = vTexCoord * 2.0 - 1.0;

                uv.x *= mix(1.0, 0.7, uRoundness);

                float dist = dot(uv, uv);

                float vignette = 1.0 - dist * uIntensity;
                vignette = smoothstep(0.0, uSmoothness, vignette);

                vec3 finalColor = mix(uColor, color.rgb, vignette);
                finalColor += dither(gl_FragCoord.xy);

                fragColor = vec4(finalColor, color.a);
            }
        `,
  uniforms: ["uTexture", "uIntensity", "uSmoothness", "uRoundness", "uColor"],
  attributes: ["aPosition", "aTexCoord"]
});
__publicField(VignettePass, "defaultUniforms", {
  uIntensity: 0.4,
  uSmoothness: 0.8,
  uRoundness: 0.5,
  uColor: [0, 0, 0]
});
__publicField(VignettePass, "uniformConfig", {
  uIntensity: { min: 0, max: 1, step: 0.01 },
  uSmoothness: { min: 0, max: 2, step: 0.01 },
  uRoundness: { min: 0, max: 1, step: 0.01 },
  uColor: { type: "color" }
});
class DayNightPass extends RenderPass {
  setProgress(progress) {
    this.setUniform("uDayNightProgress", (progress % 1 + 1) % 1);
  }
  setDawn() {
    this.setProgress(0);
  }
  setDay() {
    this.setProgress(0.25);
  }
  setDusk() {
    this.setProgress(0.5);
  }
  setNight() {
    this.setProgress(0.75);
  }
  static getShadowParams(progress) {
    const p = (progress % 1 + 1) % 1;
    const sunProgress = 0.29 + (p - 0.25) * 1.68;
    if (sunProgress < 0 || sunProgress > 1) {
      return { skewX: 0, scaleY: -0.3, offsetY: 0, color: [0, 0, 0, 0.1] };
    }
    const angle = sunProgress * Math.PI;
    const sunX = -Math.cos(angle) * 2.95;
    const sunY = Math.sin(angle) * 2.325;
    return {
      skewX: -sunX * 0.25,
      scaleY: -0.2 - sunY * 0.12,
      offsetY: 0,
      color: [0, 0, 0, 0.1 + sunY * 0.1]
    };
  }
}
__publicField(DayNightPass, "$name", "dayNightPass");
__publicField(DayNightPass, "shaderDefinition", {
  vertex: `#version 300 es
            in vec2 aPosition;
            in vec2 aTexCoord;
            out vec2 vTexCoord;
            void main() {
                gl_Position = vec4(aPosition, 0.0, 1.0);
                vTexCoord = aTexCoord;
            }
        `,
  fragment: `#version 300 es
            precision mediump float;
            uniform sampler2D uTexture;
            uniform float uDayNightProgress;
            uniform float uAspectRatio;
            uniform float uTime;
            in vec2 vTexCoord;
            out vec4 fragColor;

            // ─────────────────────────────────────────────────────────────
            // Constants
            // ─────────────────────────────────────────────────────────────
            const float PI = 3.14159265;
            const vec2 WORLD_SIZE = vec2(7.0, 5.0);
            const vec2 SUN_ARC = vec2(2.95, 2.325);
            const float SUN_RADIUS = 0.15;
            // Terrain hills (fixed geometry)
            const vec2 HILL1 = vec2(-4.5, -20.68);
            const float HILL1_R = 22.65;
            const vec2 HILL2 = vec2(3.55, -14.0);
            const float HILL2_R = 15.95;
            const float CAMERA_RATIO = 1.4;
            // Lighting constants
            const float SKY_EXTRA_DARKNESS = 0.35;
            const float MAX_DARKNESS = 0.85;
            const vec3 SUN_COLOR_HIGH = vec3(1.0, 0.95, 0.85);
            const vec3 SUN_COLOR_LOW = vec3(1.0, 0.5, 0.2);
            const vec3 GOLDEN_TINT = vec3(1.0, 0.75, 0.55);

            // ─────────────────────────────────────────────────────────────
            // Ambiance based on sun position (not time!)
            // ─────────────────────────────────────────────────────────────
            // Night: sun fully below terrain
            const vec3 TINT_NIGHT = vec3(0.5, 0.65, 1.0);
            const float DARK_NIGHT = 0.2;  // Reduced - we use color shift instead
            const float TINT_STR_NIGHT = 0.35;
            const float STARS_NIGHT = 1.2;

            // Purkinje effect: night vision shifts sensitivity toward blue-green
            const vec3 PURKINJE_WEIGHTS = vec3(0.1, 0.5, 0.4);
            const float PURKINJE_STRENGTH = 0.4;

            // Selective desaturation: warm colors fade more at night
            const float DESAT_WARM = 0.6;   // How much to desaturate reds/oranges
            const float DESAT_COOL = 0.1;   // Keep blues/greens more vivid

            // Dawn: warm golden/orange sunrise
            const vec3 TINT_DAWN = vec3(1.0, 0.8, 0.6);
            const float DARK_DAWN = 0.1;
            const float TINT_STR_DAWN = 0.45;

            // Dusk: cool purple/pink sunset
            const vec3 TINT_DUSK = vec3(0.9, 0.6, 0.8);
            const float DARK_DUSK = 0.15;
            const float TINT_STR_DUSK = 0.5;

            // Rays dawn: golden orange rays
            const vec3 TINT_RAYS_DAWN = vec3(1.0, 0.7, 0.4);
            const float DARK_RAYS = 0.05;
            const float TINT_STR_RAYS = 0.55;

            // Rays dusk: purple/magenta rays
            const vec3 TINT_RAYS_DUSK = vec3(0.95, 0.5, 0.6);

            // Day: sun fully in sky
            const vec3 TINT_DAY = vec3(1.0, 1.0, 1.0);
            const float DARK_DAY = 0.0;
            const float TINT_STR_DAY = 0.0;

            // How far above/below terrain for horizon effect (smaller = faster transition to day)
            const float HORIZON_RANGE = 0.4;

            // Sun disc/halo - stylized illustrative style
            const float SUN_DISC_SIZE = 0.035;        // Size of solid sun disc
            const float SUN_DISC_EDGE = 0.006;        // Soft edge thickness (larger = softer)
            const float HALO_SIZE = 0.010;            // Halo extends this far beyond disc
            const float HALO_STRENGTH = 0.2;          // Halo opacity

            // Stars
            const float STAR_GRID_SIZE = 60.0;
            const float STAR_THRESHOLD = 0.92;

            // Fog/haze (atmospheric depth)
            const vec3 FOG_COLOR_NIGHT = vec3(0.45, 0.55, 0.75);
            const vec3 FOG_COLOR_DAY = vec3(0.85, 0.88, 0.92);
            const float FOG_STRENGTH = 0.25;
            const float FOG_START_Y = 0.15;
            const float FOG_END_Y = 0.85;
            const float HAZE_START_Y = 0.50;
            const float HAZE_END_Y = 0.88;
            const float HAZE_STRENGTH = 0.30;

            // Grain
            const float GRAIN_AMOUNT_DAY = 0.015;
            const float GRAIN_AMOUNT_NIGHT = 0.02;

            // DEBUG: uncomment to visualize sun radius and terrain intersection
            // #define DEBUG_SUN_RADIUS
            // DEBUG: uncomment to visualize hill circles
            // #define DEBUG_HILLS
            // DEBUG: uncomment to visualize sun trajectory
            // #define DEBUG_SUN_PATH

            // ─────────────────────────────────────────────────────────────
            // Utilities
            // ─────────────────────────────────────────────────────────────
            float random(vec2 st) {
                return fract(sin(dot(st, vec2(12.9898, 78.233))) * 43758.5453);
            }

            float grain(vec2 uv, float time) {
                vec2 p = uv * vec2(1280.0, 720.0);
                float t = floor(time) + random(floor(p) * 0.01);
                return random(floor(p) + t) - 0.5;
            }

            // ─────────────────────────────────────────────────────────────
            // Coordinate transforms
            // ─────────────────────────────────────────────────────────────
            void getScreenWorldParams(out vec2 margin, out vec2 scale) {
                float ratio = uAspectRatio / CAMERA_RATIO;
                float wider = step(CAMERA_RATIO, uAspectRatio);  // 1 if wider, 0 if taller
                float taller = 1.0 - wider;
                margin = vec2(
                    wider * (1.0 - 1.0/ratio) * 0.5,
                    taller * (1.0 - ratio) * 0.5
                );
                scale = vec2(
                    mix(1.0, ratio, wider),
                    mix(1.0, 1.0/ratio, taller)
                );
            }

            vec2 screenToWorld(vec2 uv) {
                vec2 margin, scale;
                getScreenWorldParams(margin, scale);
                return ((uv - margin) * scale - 0.5) * WORLD_SIZE;
            }

            vec2 worldToScreen(vec2 w) {
                vec2 margin, scale;
                getScreenWorldParams(margin, scale);
                return (w / WORLD_SIZE + 0.5) / scale + margin;
            }

            // ─────────────────────────────────────────────────────────────
            // Terrain
            // ─────────────────────────────────────────────────────────────
            float hillHeight(vec2 center, float radius, float x) {
                float dx = x - center.x;
                float rSq = radius * radius;
                return center.y + sqrt(rSq - dx * dx);
            }

            float terrainHeight(float x) {
                return max(hillHeight(HILL1, HILL1_R, x), hillHeight(HILL2, HILL2_R, x));
            }

            // Smooth terrain detection with anti-aliasing
            float terrainFactor(vec2 world) {
                float terrain = terrainHeight(world.x);
                // Use screen-space derivative for smooth edge
                float pixelSize = fwidth(world.y) * 2.0;
                return smoothstep(terrain - pixelSize, terrain + pixelSize, world.y);
            }

            // ─────────────────────────────────────────────────────────────
            // Sun calculations
            // ─────────────────────────────────────────────────────────────
            struct SunData {
                vec2 pos;
                vec3 color;
                float terrainY;
                float top;
                float bottom;
                float intersectStrength;  // 0 when not intersecting, 0-1 when intersecting
                float duskFactor;         // 0=dawn, 1=dusk - precomputed for reuse
            };

            vec2 calcSunPos(float progress) {
                float a = progress * PI;
                return vec2(-cos(a), sin(a)) * SUN_ARC;
            }

            vec3 calcSunColor(float y) {
                float h = 1.0 - smoothstep(0.3, 1.5, y);
                return mix(SUN_COLOR_HIGH, SUN_COLOR_LOW, h);
            }

            SunData getSunDataFromProgress(float progress) {
                SunData s;
                s.pos = calcSunPos(progress);
                s.color = calcSunColor(s.pos.y);
                s.terrainY = terrainHeight(s.pos.x);
                s.top = s.pos.y + SUN_RADIUS;
                s.bottom = s.pos.y - SUN_RADIUS;
                // Branchless intersection strength calculation
                // Returns 0 when not intersecting, 0-1 based on overlap depth
                float belowTerrain = s.terrainY - s.bottom;  // How far bottom is below terrain
                float aboveTerrain = s.top - s.terrainY;     // How far top is above terrain
                float isIntersecting = step(0.0, belowTerrain) * step(0.0, aboveTerrain);
                s.intersectStrength = min(belowTerrain, aboveTerrain) / SUN_RADIUS * isIntersecting;
                // Precompute dusk factor (0=dawn, 1=dusk) - reused in ambiance and sun disc
                s.duskFactor = smoothstep(0.35, 0.65, progress);
                return s;
            }

            // ─────────────────────────────────────────────────────────────
            // Ambiance calculations (based on sun position, not time!)
            // ─────────────────────────────────────────────────────────────

            struct Ambiance {
                float darkness;
                float tintStrength;
                vec3 tintColor;
                float starsIntensity;
                float nightFactor;  // 0=day, 1=full night - for Purkinje/desat effects
            };

            // Calculate ambiance from sun position relative to terrain
            // Uses precomputed SunData for efficiency
            Ambiance getAmbianceFromSun(SunData sun) {
                Ambiance a;

                // Sun position relative to terrain
                float aboveTerrain = sun.bottom - sun.terrainY;  // positive = fully in sky
                float belowTerrain = sun.terrainY - sun.top;     // positive = fully below

                // Smooth blend factors
                float nightFactor = smoothstep(0.0, HORIZON_RANGE, belowTerrain);
                float dayFactor = smoothstep(0.0, HORIZON_RANGE, aboveTerrain);
                float raysFactor = sun.intersectStrength;

                // Interpolate horizon colors between dawn and dusk (use precomputed duskFactor)
                vec3 horizonTint = mix(TINT_DAWN, TINT_DUSK, sun.duskFactor);
                float horizonDark = mix(DARK_DAWN, DARK_DUSK, sun.duskFactor);
                float horizonTintStr = mix(TINT_STR_DAWN, TINT_STR_DUSK, sun.duskFactor);

                // Mix ambiance based on sun state
                // Start with night/day/horizon blend
                a.tintColor = mix(
                    mix(horizonTint, TINT_NIGHT, nightFactor),
                    TINT_DAY,
                    dayFactor
                );
                a.darkness = mix(
                    mix(horizonDark, DARK_NIGHT, nightFactor),
                    DARK_DAY,
                    dayFactor
                );
                a.tintStrength = mix(
                    mix(horizonTintStr, TINT_STR_NIGHT, nightFactor),
                    TINT_STR_DAY,
                    dayFactor
                );

                // Override with rays ambiance when sun intersects terrain
                vec3 raysTint = mix(TINT_RAYS_DAWN, TINT_RAYS_DUSK, sun.duskFactor);
                a.tintColor = mix(a.tintColor, raysTint, raysFactor);
                a.darkness = mix(a.darkness, DARK_RAYS, raysFactor);
                a.tintStrength = mix(a.tintStrength, TINT_STR_RAYS, raysFactor);

                // Stars only at night
                a.starsIntensity = STARS_NIGHT * nightFactor;

                // Export night factor for Purkinje/desaturation effects
                a.nightFactor = nightFactor;

                return a;
            }

            // ─────────────────────────────────────────────────────────────
            // Color utilities
            // ─────────────────────────────────────────────────────────────
            // Attempt branchless HSL conversion - IQ style
            // HSV to RGB is cheaper and similar for our use case (night desaturation)
            vec3 rgbToHsv(vec3 c) {
                vec4 K = vec4(0.0, -1.0/3.0, 2.0/3.0, -1.0);
                vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
                vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
                float d = q.x - min(q.w, q.y);
                float e = 1.0e-10;
                return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
            }

            vec3 hsvToRgb(vec3 c) {
                vec3 p = abs(fract(c.xxx + vec3(1.0, 2.0/3.0, 1.0/3.0)) * 6.0 - 3.0);
                return c.z * mix(vec3(1.0), clamp(p - 1.0, 0.0, 1.0), c.y);
            }

            // Apply Purkinje shift: boost blue-green perception at night
            vec3 applyPurkinje(vec3 rgb, float nightFactor) {
                float lum = dot(rgb, vec3(0.299, 0.587, 0.114));
                float purkinjeL = dot(rgb, PURKINJE_WEIGHTS);
                float shiftedL = mix(lum, purkinjeL, nightFactor * PURKINJE_STRENGTH);
                // Preserve relative color but shift luminance perception
                vec3 normalized = rgb / max(lum, 0.001);
                return normalized * shiftedL;
            }

            // Selective desaturation: warm colors lose saturation at night
            vec3 applyNightDesaturation(vec3 rgb, float nightFactor) {
                vec3 hsv = rgbToHsv(rgb);
                // Hue 0-0.15 = red/orange (warm), 0.5-0.7 = blue/cyan (cool)
                float warmness = 1.0 - smoothstep(0.0, 0.2, hsv.x) * smoothstep(0.5, 0.15, hsv.x);
                // More desaturation for warm colors
                float desat = mix(DESAT_COOL, DESAT_WARM, warmness);
                hsv.y *= 1.0 - desat * nightFactor;
                return hsvToRgb(hsv);
            }

            // ─────────────────────────────────────────────────────────────
            // Effects
            // ─────────────────────────────────────────────────────────────
            float rayPattern(float angle, float dist) {
                // Main rays - evenly spaced
                float mainRays = smoothstep(0.2, 0.5, sin(angle * 10.0));
                // Secondary rays - offset, dimmer
                float secondaryRays = smoothstep(0.3, 0.6, sin(angle * 10.0 + 0.5)) * 0.4;
                // Variation in intensity per ray
                float variation = 0.7 + 0.3 * sin(angle * 5.0);
                return (mainRays + secondaryRays) * variation * 0.4;
            }

            vec3 applyGoldenHour(vec3 rgb, float sunY, float sunProgress) {
                float golden = 1.0 - smoothstep(0.3, 1.5, sunY);
                float sunFade = smoothstep(0.0, 0.1, sunProgress) * smoothstep(1.0, 0.9, sunProgress);
                return rgb * mix(vec3(1.0), GOLDEN_TINT, golden * 0.4 * sunFade);
            }

            vec3 applySunDisc(vec3 rgb, vec2 uv, SunData sun, float sunProgress) {
                vec2 sunScreen = worldToScreen(sun.pos);
                vec2 diff = (uv - sunScreen) * vec2(uAspectRatio, 1.0);
                float d = length(diff);

                // Defined sun disc with soft edge
                float disc = 1.0 - smoothstep(SUN_DISC_SIZE - SUN_DISC_EDGE, SUN_DISC_SIZE, d);

                // Halo: smooth gradient fade (no hard edge)
                float haloEnd = SUN_DISC_SIZE + HALO_SIZE;
                float halo = smoothstep(haloEnd, SUN_DISC_SIZE, d) * HALO_STRENGTH;
                halo *= (1.0 - disc);
                // Fade halo when sun leaves intersection
                halo *= sun.intersectStrength;

                // Dawn vs Dusk color tinting (use precomputed duskFactor)
                vec3 dawnTint = vec3(1.0, 0.85, 0.6);   // Warm orange-yellow
                vec3 duskTint = vec3(1.0, 0.7, 0.75);   // Soft pink-orange

                // Low sun = more tinted, high sun = whiter
                float lowSunFactor = 1.0 - smoothstep(0.0, 1.2, sun.pos.y);
                vec3 horizonTint = mix(dawnTint, duskTint, sun.duskFactor);

                // Apply tint based on sun height
                vec3 discColor = mix(sun.color, horizonTint, lowSunFactor * 0.5);
                vec3 haloColor = mix(sun.color, horizonTint, lowSunFactor * 0.7);

                // Reduce intensity - sun should be visible but not glaring
                discColor *= 0.7;
                haloColor *= 0.6;

                // Fade effects at sunrise/sunset edges
                float edgeFade = smoothstep(0.0, 0.15, sunProgress) * smoothstep(1.0, 0.85, sunProgress);

                // Combine: solid disc + attached halo glow
                vec3 result = discColor * disc + haloColor * halo;
                return rgb + result * edgeFade;
            }

            vec3 applyRays(vec3 rgb, vec2 world, SunData sun, float skyBlend) {
                vec2 rayOrigin = vec2(sun.pos.x, sun.terrainY);
                vec2 toPixel = world - rayOrigin;
                float dist = length(toPixel);
                float angle = atan(toPixel.y, toPixel.x);

                // Warm color for rays
                float lowSunFactor = 1.0 - smoothstep(0.0, 1.5, sun.pos.y);
                vec3 rayColor = mix(sun.color, vec3(1.0, 0.7, 0.5), lowSunFactor * 0.4);

                // Subtle shimmer based on progress
                float shimmer = sin(uDayNightProgress * 50.0) * 0.05 + 0.95;

                // === Sky rays ===
                float upwardBias = smoothstep(-0.3, 1.0, toPixel.y / max(dist, 0.01));
                float skyAtmoFalloff = exp(-dist * 0.6) * smoothstep(0.0, 0.4, dist);
                float skyAtmoGlow = skyAtmoFalloff * upwardBias * 0.25;
                float pattern = rayPattern(angle, dist);
                float skyRayFalloff = exp(-dist * 0.5) * smoothstep(0.1, 0.5, dist);
                float skyStylizedRays = pattern * skyRayFalloff * upwardBias * 0.4;
                float skyCombined = (skyAtmoGlow + skyStylizedRays) * sun.intersectStrength * shimmer;

                // === Ground rays ===
                vec2 stretchedPixel = toPixel * vec2(0.6, 1.0);
                float stretchedAngle = atan(stretchedPixel.y, stretchedPixel.x);
                float radialFade = smoothstep(4.0, 0.0, abs(world.x - sun.pos.x));
                float groundAtmoGlow = exp(-dist * 0.4) * radialFade * 0.2;
                float groundPattern = rayPattern(stretchedAngle, dist);
                float groundStylizedRays = groundPattern * exp(-dist * 0.5) * radialFade * 0.1;
                float bottomFade = smoothstep(-1.5, 0.8, world.y);
                float groundCombined = (groundAtmoGlow + groundStylizedRays) * sun.intersectStrength * shimmer * bottomFade;

                // Blend sky and ground contributions
                float combined = mix(groundCombined, skyCombined, skyBlend);
                vec3 glowColor = rayColor * combined;

                // Soft screen-ish blend (works for both, slightly stronger on ground)
                float screenFactor = mix(0.3, 0.0, skyBlend);
                return rgb + glowColor * (1.0 - rgb * screenFactor);
            }

            vec3 applyStars(vec3 rgb, vec2 uv, float baseLum, float starsIntensity) {
                vec2 aspectUV = vec2(uv.x * uAspectRatio, uv.y);
                // Slow drift based on progress
                vec2 starUV = aspectUV + vec2(0.008, 0.003) * uDayNightProgress * 100.0;
                vec2 gridUV = starUV * STAR_GRID_SIZE;
                vec2 cell = floor(gridUV);

                // Single random call, derive others with cheap ops (IQ technique)
                float rBase = random(cell);
                float isStar = step(STAR_THRESHOLD, rBase);

                vec2 cellUV = fract(gridUV);
                // Derive star position from base random using fract arithmetic
                vec2 starPos = fract(vec2(rBase * 17.31, rBase * 43.17));
                float star = smoothstep(0.12, 0.0, length(cellUV - starPos));

                // Twinkle: derive phase and speed from rBase
                float phase = fract(rBase * 127.1) * 6.28;
                float speed = 0.3 + fract(rBase * 311.7) * 0.4;
                float twinkle = sin(uDayNightProgress * speed * 100.0 + phase) * 0.15 + 0.85;

                rgb += vec3(starsIntensity * star * twinkle * smoothstep(0.5, 1.0, baseLum) * isStar);

                return rgb;
            }

            // ─────────────────────────────────────────────────────────────
            // Debug visualization
            // ─────────────────────────────────────────────────────────────
            #ifdef DEBUG_HILLS
            vec3 debugHills(vec3 rgb, vec2 world) {
                float d1 = length(world - HILL1);
                float d2 = length(world - HILL2);
                if (d1 < HILL1_R) rgb = mix(rgb, vec3(1.0, 0.0, 0.0), 0.3);
                if (d2 < HILL2_R) rgb = mix(rgb, vec3(0.0, 0.0, 1.0), 0.3);
                return rgb;
            }
            #endif

            #ifdef DEBUG_SUN_RADIUS
            vec3 debugSun(vec3 rgb, vec2 world, SunData sun) {
                float distToSun = length(world - sun.pos);
                if (abs(distToSun - SUN_RADIUS) < 0.004) return vec3(1.0, 1.0, 0.0);
                if (distToSun < 0.006) return vec3(1.0, 0.0, 0.0);
                if (abs(world.x - sun.pos.x) < 0.004 && abs(world.y - sun.terrainY) < 0.006) return vec3(0.0, 1.0, 0.0);
                if (abs(world.y - sun.bottom) < 0.002 && abs(world.x - sun.pos.x) < 0.3) return vec3(0.0, 1.0, 1.0);
                if (abs(world.y - sun.top) < 0.002 && abs(world.x - sun.pos.x) < 0.3) return vec3(1.0, 0.0, 1.0);
                if (sun.intersectStrength > 0.0 && abs(world.x - sun.pos.x) < 0.01 && world.y > sun.terrainY && world.y < sun.terrainY + 0.02) return vec3(1.0);
                return rgb;
            }
            #endif

            #ifdef DEBUG_SUN_PATH
            vec3 debugSunPath(vec3 rgb, vec2 world, float sunProgress) {
                float minDist = 1000.0;

                // Sample trajectory to find closest point
                for (float p = 0.0; p <= 1.0; p += 0.01) {
                    vec2 sunPos = calcSunPos(p);
                    float d = length(world - sunPos);
                    if (d < minDist) {
                        minDist = d;
                    }
                }

                // Draw trajectory line (yellow)
                if (minDist < 0.04) {
                    rgb = mix(rgb, vec3(1.0, 1.0, 0.0), 0.8);
                }

                // Draw markers at key positions
                // Dawn intersection (progress ~0) - cyan
                vec2 dawnPos = calcSunPos(0.0);
                if (length(world - dawnPos) < 0.08) {
                    rgb = mix(rgb, vec3(0.0, 1.0, 1.0), 0.9);
                }

                // Dusk intersection (progress ~1) - magenta
                vec2 duskPos = calcSunPos(1.0);
                if (length(world - duskPos) < 0.08) {
                    rgb = mix(rgb, vec3(1.0, 0.0, 1.0), 0.9);
                }

                // Zenith (progress = 0.5) - white
                vec2 zenithPos = calcSunPos(0.5);
                if (length(world - zenithPos) < 0.08) {
                    rgb = mix(rgb, vec3(1.0, 1.0, 1.0), 0.9);
                }

                // Current sun position - red circle (only if sun is visible)
                if (sunProgress >= 0.0 && sunProgress <= 1.0) {
                    vec2 currentPos = calcSunPos(sunProgress);
                    float distToCurrent = length(world - currentPos);
                    if (distToCurrent < SUN_RADIUS + 0.02 && distToCurrent > SUN_RADIUS - 0.02) {
                        rgb = mix(rgb, vec3(1.0, 0.0, 0.0), 0.9);
                    }
                }

                // Draw terrain intersection points (green dots where sun touches hills)
                for (float p = 0.0; p <= 1.0; p += 0.01) {
                    vec2 sunPos = calcSunPos(p);
                    float terrainY = terrainHeight(sunPos.x);
                    float sunBottom = sunPos.y - SUN_RADIUS;
                    float sunTop = sunPos.y + SUN_RADIUS;

                    // Check if sun intersects terrain at this progress
                    if (sunBottom < terrainY && sunTop > terrainY) {
                        vec2 intersectPoint = vec2(sunPos.x, terrainY);
                        if (length(world - intersectPoint) < 0.06) {
                            rgb = mix(rgb, vec3(0.0, 1.0, 0.0), 0.9);
                        }
                    }
                }

                return rgb;
            }
            #endif

            // ─────────────────────────────────────────────────────────────
            // Main
            // ─────────────────────────────────────────────────────────────
            void main() {
                vec4 color = texture(uTexture, vTexCoord);
                vec2 world = screenToWorld(vTexCoord);
                float skyBlend = terrainFactor(world);  // Smooth 0-1 transition at terrain edge

                // Calculate sun position from progress
                // Game waves: 0-0.25=dawn, 0.25-0.5=day, 0.5-0.75=dusk, 0.75-1=night
                // We want: end of dawn (0.25) = sun at intersection
                //          start of dusk (0.5) = sun at intersection
                float sunProgress = 0.29 + (uDayNightProgress - 0.25) * 1.68;
                float clampedSunProgress = clamp(sunProgress, 0.0, 1.0);

                // Get sun data (clamp to valid range)
                SunData sun = getSunDataFromProgress(clampedSunProgress);

                // Get ambiance based on sun position
                // Always use sun-based ambiance - it handles below-horizon naturally
                Ambiance ambiance = getAmbianceFromSun(sun);

                // Sky detection (combine blueness + luminance to avoid matching blue sprites)
                float blueness = color.b - max(color.r, color.g);
                float lum = dot(color.rgb, vec3(0.299, 0.587, 0.114));
                float skyFactor = smoothstep(-0.08, 0.15, blueness) * smoothstep(0.25, 0.55, lum);

                // Sprite protection: reduce ambiance effects on non-sky elements
                // skyFactor ~1 for sky, ~0 for sprites/characters
                float spriteProtection = 1.0 - skyFactor;
                float effectStrength = 1.0 - spriteProtection * 0.6; // sprites get ~40% of the effect

                // Start with original color
                vec3 rgb = color.rgb;

                // Apply night vision effects (Purkinje + selective desaturation)
                // nightFactor naturally fades to 0 during day, no branch needed
                float nightEffect = ambiance.nightFactor * effectStrength;
                rgb = applyPurkinje(rgb, nightEffect);
                rgb = applyNightDesaturation(rgb, nightEffect);

                // Apply reduced darkness (contrast preservation)
                // Sprites receive less darkness to stay readable
                float baseDarkness = ambiance.darkness * effectStrength;
                float darkness = min(baseDarkness + skyFactor * SKY_EXTRA_DARKNESS, MAX_DARKNESS);
                rgb *= (1.0 - darkness);

                // Apply color tint (reduced on sprites)
                float tintStrength = ambiance.tintStrength * effectStrength;
                rgb = mix(rgb, rgb * ambiance.tintColor, tintStrength);

                // Sun effects - use sunVisibleFactor instead of branch
                float sunVisibleFactor = step(0.0, sunProgress) * step(sunProgress, 1.0);

                // Golden hour - multiply by sky factor (blueness > 0 means sky)
                float skyness = step(0.0, blueness);
                vec3 goldenRgb = applyGoldenHour(rgb, sun.pos.y, sunProgress);
                rgb = mix(rgb, goldenRgb, skyness * sunVisibleFactor);

                // Sun disc - already uses skyBlend for smooth transition
                vec3 sunDiscEffect = applySunDisc(vec3(0.0), vTexCoord, sun, sunProgress);
                rgb += sunDiscEffect * skyBlend * sunVisibleFactor;

                // Rays - intersectStrength naturally fades to 0 when not intersecting
                rgb = applyRays(rgb, world, sun, skyBlend);

                #ifdef DEBUG_SUN_RADIUS
                rgb = debugSun(rgb, world, sun);
                #endif

                #ifdef DEBUG_HILLS
                rgb = debugHills(rgb, world);
                #endif

                #ifdef DEBUG_SUN_PATH
                rgb = debugSunPath(rgb, world, sunProgress);
                #endif

                // Stars - starsIntensity fades to 0 during day, skyBlend handles terrain
                // No branch needed, just multiply by all factors
                float starsFactor = step(0.0, blueness) * ambiance.starsIntensity * skyBlend;
                float baseLum = dot(color.rgb, vec3(0.299, 0.587, 0.114));
                rgb = applyStars(rgb, vTexCoord, baseLum, starsFactor);

                // Fog/haze (atmospheric depth)
                vec3 fogColor = mix(FOG_COLOR_DAY, FOG_COLOR_NIGHT, ambiance.nightFactor);
                float fogAmount = smoothstep(FOG_START_Y, FOG_END_Y, vTexCoord.y) * FOG_STRENGTH;
                fogAmount *= effectStrength;
                rgb = mix(rgb, fogColor, fogAmount);

                // Horizon haze (stronger in sky areas)
                float haze = smoothstep(HAZE_START_Y, HAZE_END_Y, vTexCoord.y) * HAZE_STRENGTH;
                haze *= skyBlend * (0.6 + 0.4 * ambiance.nightFactor);
                rgb = mix(rgb, fogColor, haze);

                // Grain (subtle, more visible at night)
                float grainAmount = mix(GRAIN_AMOUNT_DAY, GRAIN_AMOUNT_NIGHT, ambiance.nightFactor);
                rgb += grain(vTexCoord, uTime * 60.0) * grainAmount;

                fragColor = vec4(clamp(rgb, 0.0, 1.0), color.a);
            }
        `,
  uniforms: ["uTexture", "uDayNightProgress", "uAspectRatio", "uTime"],
  attributes: ["aPosition", "aTexCoord"]
});
__publicField(DayNightPass, "defaultUniforms", {
  uDayNightProgress: 0,
  uAspectRatio: 1,
  uTime: 0
});
__publicField(DayNightPass, "uniformConfig", {
  uDayNightProgress: { min: 0, max: 1, step: 0.01 }
});
class DefendTheDen extends Game {
  get dayNightPass() {
    var _a2;
    return (_a2 = this.getRenderer("game")) == null ? void 0 : _a2.getPass("dayNightPass");
  }
  configureGame() {
    const gameRenderer = this.getRenderer("game");
    const gameLayer = this.getLayer("game");
    this.worldView.register(Player, PlayerView).register(PigEnemy, PigEnemyView, { image: "pig", width: 1, height: 1 }).register(RedEnemy, RedEnemyView, { image: "red", width: 1, height: 1 }).register(GrannyEnemy, GrannyEnemyView, { image: "granny", width: 1, height: 1 }).register(AmalgamEnemy, AmalgamEnemyView, { image: "amalgam", width: 1.2, height: 1.2 }).register(Projectile, ProjectileView);
    gameRenderer.registerShaderEffect(ChromaticEffect);
    gameRenderer.registerShaderEffect(OutlineEffect);
    gameRenderer.registerShaderEffect(WaveEffect);
    this.impactParticles = this.create(ImpactParticles, {
      count: 8,
      minSpeed: 3,
      maxSpeed: 6,
      lifetime: 0.35
    });
    this.hitboxDebug = new HitboxDebug(this.world);
    this.waveSystem = this.create(WaveSystem, { $bind: "waveSystem" });
    this.waveSystem.on("tick", ({ wave, day, progress, timeOfDay, isSpawning }) => {
      var _a2, _b, _c;
      (_a2 = this.dayNightPass) == null ? void 0 : _a2.setUniform("uAspectRatio", gameLayer.canvas.width / gameLayer.canvas.height);
      (_b = this.dayNightPass) == null ? void 0 : _b.setUniform("uTime", performance.now() / 1e3);
      (_c = this.dayNightPass) == null ? void 0 : _c.setProgress(timeOfDay);
      this.updateShadows(timeOfDay);
      const denController = this.getController("den");
      denController.setSpawning(isSpawning);
      this.emit("wave:tick", { wave, progress, dayNumber: day, timeOfDay, isSpawning });
    });
    this.waveSystem.on("wave:start", ({ wave, day }) => {
      const denController = this.getController("den");
      denController.onWaveStart(wave, day);
      this.emit("wave:start", { wave, dayNumber: day });
    });
    this.waveSystem.on("day:start", ({ day }) => {
      this.emit("day:start", { dayNumber: day });
    });
    this.waveSystem.on("day:announce", ({ day }) => {
      const denController = this.getController("den");
      denController.setSpawning(false);
      this.emit("day:announce", { dayNumber: day });
    });
    this.waveSystem.on("spawning:end", () => {
      const denController = this.getController("den");
      denController.setSpawning(false);
    });
    this.on("update", (delta) => {
      this.waveSystem.update(delta);
      this.impactParticles.update(delta);
      const enemyCount = this.world.childrenByTags("enemy").length;
      this.waveSystem.checkClear(enemyCount);
    });
    const uiLayer = this.getHTML("ui");
    const waveProgressBar = this.create(WaveProgressBar, {
      $id: "waveProgress",
      game: this
    });
    waveProgressBar.mount(uiLayer);
    this.on("day:announce", () => {
      this.playSound("howl", { channel: "sfx", volume: 0.6 });
    });
    this.world.on("enemy:hit", ({ x, y, direction }) => {
      this.playSoundAt("wound", x, y, { volume: 0.4 });
      this.impactParticles.spawn(x, y, direction);
    });
    this.world.on("enemy:destroyed", ({ x, y }) => {
      this.playSoundAt("wound", x, y, { volume: 0.3 });
    });
    this.world.on("player:hit", ({ x, y }) => {
      this.playSoundAt("wound", x, y, { volume: 0.4 });
    });
  }
  setupRenderGroups() {
    const gameRenderer = this.getRenderer("game");
    this.backgroundGroup = new Group2D();
    this.entitiesGroup = new Group2D();
    this.shadowTransform = new ShadowTransform({
      skewX: 0.1,
      scaleY: -0.5,
      offsetY: 0,
      color: [0, 0, 0, 0.3]
    });
    this.entitiesGroup.addChild(this.worldView.rootGroup);
    this.entitiesGroup.addChild(this.impactParticles.particleGroup);
    gameRenderer.setRenderGroups([
      {
        $name: "background",
        content: this.backgroundGroup
      },
      {
        $name: "shadows",
        content: this.entitiesGroup,
        renderTransform: this.shadowTransform
      },
      {
        $name: "entities",
        content: this.entitiesGroup
      },
      {
        $name: "hitboxDebug",
        content: this.hitboxDebug.group
      }
    ]);
  }
  buildBackground() {
    const backgroundRegion = this.getRegion("background");
    const backgroundHeight = 5;
    const backgroundWidth = backgroundRegion.width / backgroundRegion.height * backgroundHeight;
    const background = new Sprite({
      region: backgroundRegion,
      x: 0,
      y: 0,
      width: backgroundWidth,
      height: backgroundHeight
    });
    this.backgroundGroup.addChild(background);
  }
  onStart() {
    super.onStart();
    this.setupRenderGroups();
    this.buildBackground();
    this.execute("spawnPlayer", { x: -2.5 });
    this.emit("wave:start", { wave: 0, dayNumber: 0 });
    this.emit("day:start", { dayNumber: 0 });
  }
  render() {
    this.worldView.syncViews();
    this.hitboxDebug.update();
    this.getRenderer("game").setUniform("uTime", performance.now() / 1e3);
  }
  setHitboxDebug(enabled) {
    this.hitboxDebug.setEnabled(enabled);
  }
  toggleHitboxDebug() {
    return this.hitboxDebug.toggle();
  }
  updateShadows(timeOfDay) {
    if (!this.shadowTransform) {
      return;
    }
    const shadowParams = DayNightPass.getShadowParams(timeOfDay);
    this.shadowTransform.skewX = shadowParams.skewX;
    this.shadowTransform.scaleY = shadowParams.scaleY;
    this.shadowTransform.offsetY = shadowParams.offsetY;
    this.shadowTransform.color = shadowParams.color;
  }
}
__publicField(DefendTheDen, "$name", "defendTheDen");
__publicField(DefendTheDen, "manifest", manifestData);
__publicField(DefendTheDen, "World", DenWorld);
__publicField(DefendTheDen, "ActionController", DenController);
__publicField(DefendTheDen, "camera", { unitsInView: { width: 7, height: 5 } });
__publicField(DefendTheDen, "layers", [
  {
    name: "game",
    type: "webgl",
    camera: "main",
    pixelRatio: 1.5,
    backgroundColor: "#000000",
    enableCulling: true
  },
  {
    name: "ui",
    type: "html",
    camera: "main",
    pointerEvents: "none"
  }
]);
__publicField(DefendTheDen, "postPasses", [DayNightPass, VignettePass]);
const toolRegistry = /* @__PURE__ */ new Map();
function registerTool(Tool) {
  if (!Tool.toolId) {
    throw new Error("Tool must have a static toolId property");
  }
  toolRegistry.set(Tool.toolId, Tool);
}
function getTool(toolId) {
  return toolRegistry.get(toolId);
}
function getAllTools() {
  return Array.from(toolRegistry.values());
}
function getToolsByLocation(location) {
  return getAllTools().filter((Tool) => Tool.location === location).sort((a, b) => (a.order || 100) - (b.order || 100));
}
function getSidebarTools() {
  return getToolsByLocation("sidebar");
}
class BaseTool extends EditorComponent {
  constructor() {
    super(...arguments);
    __privateAdd(this, _state, null);
  }
  get state() {
    return __privateGet(this, _state);
  }
  setState(state) {
    __privateSet(this, _state, state);
    this.onStateSet(state);
  }
  onStateSet() {
  }
  onActivate() {
  }
  onDeactivate() {
  }
  getHeaderActions() {
    return [];
  }
  static register() {
    registerTool(this);
  }
}
_state = new WeakMap();
__publicField(BaseTool, "toolId", "base");
__publicField(BaseTool, "toolName", "Base Tool");
__publicField(BaseTool, "toolIcon", ICONS.wrench);
__publicField(BaseTool, "location", "sidebar");
__publicField(BaseTool, "order", 100);
const explorerStyles = `
    *, *::before, *::after {
        box-sizing: border-box;
    }

    :host {
        display: block;
        font-family: var(--font-mono);
        font-size: 12px;
        position: fixed;
        right: 10px;
        top: 10px;
        width: 320px;
        max-height: calc(100vh - 20px);
        z-index: 9999;
    }


    .explorer {
        background: var(--bg-primary);
        border: 1px solid var(--border);
        border-radius: 6px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
        overflow-y: auto;
        overflow-x: hidden;
        display: flex;
        flex-direction: column;
        max-height: inherit;
    }

    .explorer::-webkit-scrollbar {
        width: 6px;
    }

    .explorer::-webkit-scrollbar-track {
        background: var(--bg-primary);
    }

    .explorer::-webkit-scrollbar-thumb {
        background: var(--border);
        border-radius: 3px;
    }

    .explorer-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 12px;
        background: var(--bg-secondary);
        border-bottom: 1px solid var(--border);
        cursor: pointer;
        user-select: none;
        position: sticky;
        top: 0;
        z-index: 1;
    }

    .explorer-title {
        display: flex;
        align-items: center;
        gap: 8px;
        color: var(--fg-primary);
        font-weight: 500;
    }

    .explorer-title-icon {
        font-size: 14px;
    }

    .explorer-buttons {
        display: flex;
        gap: 4px;
    }

    .explorer-btn {
        background: var(--bg-hover);
        border: none;
        border-radius: 4px;
        color: var(--fg-secondary);
        padding: 4px 8px;
        cursor: pointer;
        font-family: inherit;
        font-size: 11px;
        transition: background 0.15s, color 0.15s;
    }

    .explorer-btn:hover {
        background: var(--bg-selected);
        color: var(--fg-primary);
    }

    .explorer-btn-icon {
        padding: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .explorer-btn-icon svg {
        width: 14px;
        height: 14px;
    }

    .explorer-btn.active {
        background: var(--accent);
        color: var(--bg-primary);
    }

    .explorer-btn.active:hover {
        filter: brightness(1.1);
    }

    .explorer-tree {
        flex-shrink: 0;
        padding: 8px 0;
        min-height: 100px;
    }

    .explorer-tree::-webkit-scrollbar {
        width: 6px;
    }

    .explorer-tree::-webkit-scrollbar-track {
        background: var(--bg-primary);
    }

    .explorer-tree::-webkit-scrollbar-thumb {
        background: var(--border);
        border-radius: 3px;
    }

    .explorer-minimized {
        height: 36px;
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 0 12px;
        background: var(--bg-primary);
        border: 1px solid var(--border);
        border-radius: 6px;
        cursor: pointer;
        font-size: 12px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
        color: var(--fg-primary);
    }

    .explorer-minimized:hover {
        background: var(--bg-secondary);
    }

    .explorer-back-button {
        display: none;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        background: var(--bg-hover);
        border-radius: 4px;
        color: var(--fg-secondary);
        font-size: 12px;
        transition: background 0.15s, color 0.15s;
    }

    .explorer-minimized.back-mode {
        background: var(--bg-secondary);
        border: none;
        border-bottom: 1px solid var(--border);
        border-radius: 0;
        box-shadow: none;
    }

    .explorer-minimized.back-mode .explorer-back-button {
        display: flex;
    }

    .explorer-minimized:hover .explorer-back-button {
        background: var(--bg-selected);
        color: var(--fg-primary);
    }

    .hidden {
        display: none !important;
    }

    .explorer-empty {
        padding: 20px;
        text-align: center;
        color: var(--fg-muted);
    }
`;
const nodeStyles = `
    :host {
        display: block;
        cursor: pointer;
    }

    .node-content {
        display: flex;
        align-items: center;
        padding: 4px 12px;
        padding-left: calc(12px + var(--depth, 0) * 16px);
        gap: 6px;
        transition: background 0.1s;
    }

    .node-content:hover {
        background: var(--bg-hover);
    }

    .node-content.selected {
        background: var(--bg-selected);
    }

    .node-toggle {
        width: 16px;
        height: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--fg-muted);
        font-size: 10px;
        flex-shrink: 0;
    }

    .node-toggle.has-children {
        cursor: pointer;
    }

    .node-toggle.has-children:hover {
        color: var(--fg-primary);
    }

    .node-status {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        flex-shrink: 0;
    }

    .node-status.started {
        background: var(--status-started);
        box-shadow: 0 0 4px var(--status-started);
    }

    .node-status.stopped {
        background: var(--status-stopped);
    }

    .node-status.disposed {
        background: var(--status-disposed);
    }

    .node-status.static {
        background: var(--fg-muted);
        opacity: 0.5;
    }

    .node-id {
        color: var(--fg-primary);
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .node-category {
        color: var(--fg-muted);
        font-size: 10px;
        flex-shrink: 0;
    }

    .node-content {
        position: relative;
    }

    .node-system-icon {
        position: absolute;
        left: 11px;
        top: 50%;
        transform: translateY(calc(-50% + 1px));
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .node-system-icon svg {
        width: 8px;
        height: 8px;
        fill: var(--fg-muted);
        opacity: 0.4;
    }

    .node-children {
        display: none;
    }

    .node-children.expanded {
        display: block;
    }
`;
const detailsStyles = `
    :host {
        display: block;
        flex-shrink: 0;
        border-top: 1px solid var(--border);
        background: var(--bg-secondary);
        padding: 10px 12px;
    }

    .details-title {
        color: var(--fg-primary);
        font-weight: 500;
        margin-bottom: 8px;
        display: flex;
        align-items: center;
        gap: 6px;
    }

    .details-status {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        flex-shrink: 0;
    }

    .details-status.started {
        background: var(--status-started);
        box-shadow: 0 0 4px var(--status-started);
    }

    .details-status.stopped {
        background: var(--status-stopped);
    }

    .details-status.disposed {
        background: var(--status-disposed);
    }

    .details-status.static {
        background: var(--fg-muted);
        opacity: 0.5;
    }

    .details-grid {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 4px 12px;
        font-size: 11px;
    }

    .details-label {
        color: var(--fg-muted);
    }

    .details-value {
        color: var(--fg-secondary);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .details-value.accent {
        color: var(--accent);
    }

    .details-tags {
        display: flex;
        gap: 4px;
        flex-wrap: wrap;
    }

    .details-tag {
        background: var(--bg-hover);
        padding: 2px 6px;
        border-radius: 3px;
        font-size: 10px;
    }

    .details-empty {
        color: var(--fg-muted);
        font-style: italic;
    }

    .details-content > * + * {
        margin-top: 12px;
        padding-top: 12px;
        border-top: 1px solid var(--border);
    }
`;
const inspectorStyles = `
    .inspector-grid {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 4px 12px;
        font-size: 11px;
    }

    .inspector-label {
        color: var(--fg-muted);
    }

    .inspector-value {
        color: var(--fg-secondary);
    }

    .inspector-value.accent {
        color: var(--accent);
        font-weight: 500;
    }

    .inspector-value.running {
        color: var(--status-started);
    }

    .inspector-value.paused {
        color: var(--status-stopped);
    }

    .inspector-separator {
        grid-column: 1 / -1;
        height: 1px;
        background: var(--border);
        margin: 6px 0;
    }

    .inspector-actions {
        display: flex;
        gap: 6px;
        margin-top: 10px;
    }

    .inspector-btn {
        flex: 1;
        height: 28px;
        padding: 0 12px;
        background: var(--bg-hover);
        border: 1px solid var(--border);
        border-radius: 4px;
        color: var(--fg-secondary);
        cursor: pointer;
        font-family: inherit;
        font-size: 11px;
        font-weight: 400;
        line-height: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        transition: all 0.15s ease;
    }

    .inspector-btn:hover {
        background: var(--bg-selected);
        color: var(--fg-primary);
        border-color: var(--fg-muted);
    }

    .inspector-btn:active {
        transform: scale(0.98);
    }

    .inspector-btn.primary {
        background: var(--accent);
        border-color: var(--accent);
        color: var(--bg-primary);
        font-weight: 500;
    }

    .inspector-btn.primary:hover {
        filter: brightness(1.1);
        border-color: var(--accent);
    }

    .inspector-btn:disabled {
        opacity: 0.4;
        cursor: not-allowed;
        pointer-events: none;
    }

    .inspector-select {
        width: 100%;
        padding: 6px 10px;
        background: var(--bg-primary);
        border: 1px solid var(--border);
        border-radius: 4px;
        color: var(--fg-secondary);
        font-family: inherit;
        font-size: 11px;
        cursor: pointer;
        transition: border-color 0.15s, color 0.15s;
    }

    .inspector-select:hover {
        border-color: var(--fg-muted);
        color: var(--fg-primary);
    }

    .inspector-select:focus {
        outline: none;
        border-color: var(--accent);
    }

    .inspector-row {
        grid-column: 1 / -1;
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 12px;
        align-items: center;
    }

    .inspector-row-label {
        color: var(--fg-muted);
        font-size: 11px;
    }

    .inspector-color-swatch {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 1px solid var(--border);
        cursor: pointer;
        transition: border-color 0.15s;
    }

    .inspector-color-swatch:hover {
        border-color: var(--fg-muted);
    }
`;
const panelStyles = `
    .panel-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 12px;
        background: var(--bg-secondary);
        border-bottom: 1px solid var(--border);
        cursor: pointer;
        user-select: none;
    }

    .panel-title {
        display: flex;
        align-items: center;
        gap: 8px;
        color: var(--fg-primary);
        font-weight: 500;
    }

    .panel-title-icon {
        font-size: 14px;
    }

    .panel-buttons {
        display: flex;
        gap: 4px;
    }

    .panel-btn {
        background: var(--bg-hover);
        border: none;
        border-radius: 4px;
        color: var(--fg-secondary);
        padding: 4px 8px;
        cursor: pointer;
        font-family: inherit;
        font-size: 11px;
        transition: background 0.15s, color 0.15s;
    }

    .panel-btn:hover {
        background: var(--bg-selected);
        color: var(--fg-primary);
    }

    .panel-tree {
        flex: 1;
        overflow-y: auto;
        padding: 8px 0;
        min-height: 100px;
    }

    .panel-tree::-webkit-scrollbar {
        width: 6px;
    }

    .panel-tree::-webkit-scrollbar-track {
        background: var(--bg-primary);
    }

    .panel-tree::-webkit-scrollbar-thumb {
        background: var(--border);
        border-radius: 3px;
    }

    .panel-empty {
        padding: 20px;
        text-align: center;
        color: var(--fg-muted);
    }
`;
class BaseTreeNode extends EditorComponent {
  constructor() {
    super(...arguments);
    __privateAdd(this, _BaseTreeNode_instances);
    __privateAdd(this, _depth, 0);
    __privateAdd(this, _expanded, false);
    __privateAdd(this, _selected, false);
    __privateAdd(this, _contentEl, null);
    __privateAdd(this, _toggleEl, null);
    __privateAdd(this, _childrenEl, null);
    __privateAdd(this, _domBuilt, false);
  }
  onConnected() {
    __privateMethod(this, _BaseTreeNode_instances, ensureDOM_fn).call(this);
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
    __privateMethod(this, _BaseTreeNode_instances, ensureDOM_fn).call(this);
    __privateMethod(this, _BaseTreeNode_instances, updateDepth_fn).call(this);
  }
  setExpanded(expanded) {
    __privateSet(this, _expanded, expanded);
    __privateMethod(this, _BaseTreeNode_instances, ensureDOM_fn).call(this);
    __privateMethod(this, _BaseTreeNode_instances, updateChildrenVisibility_fn).call(this);
    __privateMethod(this, _BaseTreeNode_instances, updateToggle_fn).call(this);
  }
  setSelected(selected) {
    __privateSet(this, _selected, selected);
    __privateMethod(this, _BaseTreeNode_instances, ensureDOM_fn).call(this);
    __privateMethod(this, _BaseTreeNode_instances, updateSelectedState_fn).call(this);
  }
  expand() {
    this.setExpanded(true);
  }
  collapse() {
    this.setExpanded(false);
  }
  updateAll() {
    __privateMethod(this, _BaseTreeNode_instances, ensureDOM_fn).call(this);
    __privateMethod(this, _BaseTreeNode_instances, updateDepth_fn).call(this);
    this.renderNodeContent();
    __privateMethod(this, _BaseTreeNode_instances, updateToggle_fn).call(this);
    this.updateChildren();
    __privateMethod(this, _BaseTreeNode_instances, updateChildrenVisibility_fn).call(this);
  }
  updateChildren() {
    __privateMethod(this, _BaseTreeNode_instances, ensureDOM_fn).call(this);
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
_domBuilt = new WeakMap();
_BaseTreeNode_instances = new WeakSet();
ensureDOM_fn = function() {
  if (__privateGet(this, _domBuilt)) {
    return;
  }
  __privateSet(this, _domBuilt, true);
  __privateMethod(this, _BaseTreeNode_instances, buildDOM_fn).call(this);
};
buildDOM_fn = function() {
  __privateSet(this, _contentEl, createElement("div", { class: "node-content" }));
  __privateSet(this, _toggleEl, createElement("div", { class: "node-toggle" }));
  __privateGet(this, _toggleEl).addEventListener("click", (e) => {
    e.stopPropagation();
    __privateMethod(this, _BaseTreeNode_instances, handleToggleClick_fn).call(this);
  });
  __privateGet(this, _contentEl).appendChild(__privateGet(this, _toggleEl));
  __privateGet(this, _contentEl).addEventListener("click", () => __privateMethod(this, _BaseTreeNode_instances, handleNodeClick_fn).call(this));
  __privateGet(this, _contentEl).addEventListener("contextmenu", (e) => __privateMethod(this, _BaseTreeNode_instances, handleContextMenu_fn).call(this, e));
  __privateSet(this, _childrenEl, createElement("div", { class: "node-children" }));
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
__publicField(BaseTreeNode, "styles", nodeStyles);
class PerkyExplorerNode extends BaseTreeNode {
  constructor() {
    super(...arguments);
    __privateAdd(this, _PerkyExplorerNode_instances);
    __privateAdd(this, _module, null);
    __privateAdd(this, _childNodes, /* @__PURE__ */ new Map());
    __privateAdd(this, _isSystemModule, false);
  }
  onDisconnected() {
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
    return this.getChildren().length > 0;
  }
  getChildren() {
    if (!__privateGet(this, _module)) {
      return [];
    }
    const explorer = __privateMethod(this, _PerkyExplorerNode_instances, getExplorer_fn).call(this);
    if (!explorer || explorer.showSystemModules || this.depth > 0) {
      return __privateGet(this, _module).children;
    }
    return __privateGet(this, _module).children.filter((child) => !explorer.isSystemModule(child));
  }
  createChildNode(child) {
    const childNode = document.createElement("perky-explorer-node");
    const explorer = __privateMethod(this, _PerkyExplorerNode_instances, getExplorer_fn).call(this);
    if (explorer == null ? void 0 : explorer.isSystemModule(child)) {
      childNode.setSystemModule(true);
    }
    childNode.setModule(child, this.depth + 1);
    __privateGet(this, _childNodes).set(child.$id, childNode);
    return childNode;
  }
  renderNodeContent() {
    __privateMethod(this, _PerkyExplorerNode_instances, updateStatus_fn).call(this);
    __privateMethod(this, _PerkyExplorerNode_instances, updateId_fn).call(this);
    __privateMethod(this, _PerkyExplorerNode_instances, updateCategory_fn).call(this);
    __privateMethod(this, _PerkyExplorerNode_instances, updateSystemClass_fn).call(this);
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
    const filteredChildren = this.getChildren();
    for (const child of filteredChildren) {
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
  setSystemModule(value) {
    __privateSet(this, _isSystemModule, value);
    __privateMethod(this, _PerkyExplorerNode_instances, updateSystemClass_fn).call(this);
  }
}
_module = new WeakMap();
_childNodes = new WeakMap();
_isSystemModule = new WeakMap();
_PerkyExplorerNode_instances = new WeakSet();
getExplorer_fn = function() {
  let current = this;
  while (current) {
    if (current.tagName === "PERKY-EXPLORER") {
      return current;
    }
    const root = current.getRootNode();
    if (root && root.host) {
      current = root.host;
    } else {
      current = current.parentElement;
    }
  }
  return null;
};
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
    statusEl = createElement("div", { class: "node-status" });
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
    idEl = createElement("div", { class: "node-id" });
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
    categoryEl = createElement("div", { class: "node-category" });
    this.contentEl.appendChild(categoryEl);
  }
  categoryEl.textContent = __privateGet(this, _module).$category;
};
updateSystemClass_fn = function() {
  if (!this.contentEl) {
    return;
  }
  let iconEl = this.contentEl.querySelector(".node-system-icon");
  if (__privateGet(this, _isSystemModule)) {
    if (!iconEl) {
      iconEl = createElement("span", {
        class: "node-system-icon",
        html: ICONS.system,
        title: "System module"
      });
      this.contentEl.appendChild(iconEl);
    }
  } else if (iconEl) {
    iconEl.remove();
  }
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
class SceneTreeNode extends BaseTreeNode {
  constructor() {
    super(...arguments);
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
    var _a2;
    return ((_a2 = __privateGet(this, _object)) == null ? void 0 : _a2.children) || [];
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
    __privateSet(this, _labelEl, createElement("div", { class: "node-label" }));
    this.contentEl.appendChild(__privateGet(this, _labelEl));
  }
  if (!__privateGet(this, _propsEl)) {
    __privateSet(this, _propsEl, createElement("div", { class: "node-props" }));
    __privateGet(this, _propsEl).addEventListener("click", (e) => {
      var _a2;
      if ((_a2 = __privateGet(this, _object)) == null ? void 0 : _a2.$entity) {
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
    const x = formatNumber$1(obj.x);
    const y = formatNumber$1(obj.y);
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
__publicField(SceneTreeNode, "styles", `
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
    `);
customElements.define("scene-tree-node", SceneTreeNode);
class BaseInspector extends EditorComponent {
  constructor() {
    super(...arguments);
    __privateAdd(this, _module2, null);
    __privateAdd(this, _gridEl, null);
    __privateAdd(this, _actionsEl, null);
  }
  setModule(module) {
    var _a2;
    this.cleanListeners();
    __privateSet(this, _module2, module);
    (_a2 = this.onModuleSet) == null ? void 0 : _a2.call(this, module);
  }
  getModule() {
    return __privateGet(this, _module2);
  }
  get module() {
    return __privateGet(this, _module2);
  }
  get gridEl() {
    return __privateGet(this, _gridEl);
  }
  get actionsEl() {
    return __privateGet(this, _actionsEl);
  }
  buildDOM() {
    __privateSet(this, _gridEl, createElement("div", { class: "inspector-grid" }));
    __privateSet(this, _actionsEl, createElement("div", { class: "inspector-actions" }));
    this.shadowRoot.appendChild(__privateGet(this, _gridEl));
    this.shadowRoot.appendChild(__privateGet(this, _actionsEl));
  }
  addRow(label, value, isAccent = false) {
    const labelEl = createElement("div", { class: "inspector-label", text: label });
    const valueEl = createElement("div", { class: `inspector-value ${isAccent ? "accent" : ""}` });
    const displayValue = typeof value === "function" ? value() : value;
    valueEl.textContent = String(displayValue);
    valueEl.title = String(displayValue);
    __privateGet(this, _gridEl).appendChild(labelEl);
    __privateGet(this, _gridEl).appendChild(valueEl);
    return valueEl;
  }
  addSeparator() {
    const sep = createElement("div", { class: "inspector-separator" });
    __privateGet(this, _gridEl).appendChild(sep);
  }
  createButton(icon, text, onClick) {
    const btn = createElement("button", { class: "inspector-btn", text: icon ? `${icon} ${text}` : text });
    btn.addEventListener("click", onClick);
    return btn;
  }
  clearContent() {
    __privateGet(this, _gridEl).innerHTML = "";
    __privateGet(this, _actionsEl).innerHTML = "";
  }
}
_module2 = new WeakMap();
_gridEl = new WeakMap();
_actionsEl = new WeakMap();
__publicField(BaseInspector, "styles", `
    :host {
        display: block;
    }
    ${inspectorStyles}
    `);
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
  this.addRow("opacity", formatNumber$1(obj.opacity));
  this.addSeparator();
  this.addRow("x", formatNumber$1(obj.x));
  this.addRow("y", formatNumber$1(obj.y));
  this.addRow("rotation", formatNumber$1(obj.rotation) + " rad");
  this.addSeparator();
  this.addRow("scaleX", formatNumber$1(obj.scaleX));
  this.addRow("scaleY", formatNumber$1(obj.scaleY));
  this.addSeparator();
  this.addRow("pivotX", formatNumber$1(obj.pivotX));
  this.addRow("pivotY", formatNumber$1(obj.pivotY));
  this.addRow("anchorX", formatNumber$1(obj.anchorX));
  this.addRow("anchorY", formatNumber$1(obj.anchorY));
  if (obj.children && obj.children.length > 0) {
    this.addSeparator();
    this.addRow("children", obj.children.length, true);
  }
};
customElements.define("object-2d-inspector", Object2DInspector);
const DEBOUNCE_MS = 100;
class SceneTreeSidebar extends EditorComponent {
  constructor() {
    super(...arguments);
    __privateAdd(this, _SceneTreeSidebar_instances);
    __privateAdd(this, _content, null);
    __privateAdd(this, _worldRenderer, null);
    __privateAdd(this, _headerEl, null);
    __privateAdd(this, _treeEl, null);
    __privateAdd(this, _rootNode, null);
    __privateAdd(this, _detailsEl, null);
    __privateAdd(this, _selectedObject, null);
    __privateAdd(this, _refreshTimeout, null);
  }
  onConnected() {
    __privateMethod(this, _SceneTreeSidebar_instances, buildDOM_fn2).call(this);
  }
  onDisconnected() {
    __privateMethod(this, _SceneTreeSidebar_instances, clearRefreshTimeout_fn).call(this);
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
  __privateSet(this, _headerEl, __privateMethod(this, _SceneTreeSidebar_instances, createHeader_fn).call(this));
  __privateSet(this, _treeEl, __privateMethod(this, _SceneTreeSidebar_instances, createTree_fn).call(this));
  __privateSet(this, _detailsEl, createElement("div", { class: "panel-details" }));
  this.shadowRoot.appendChild(__privateGet(this, _headerEl));
  this.shadowRoot.appendChild(__privateGet(this, _treeEl));
  this.shadowRoot.appendChild(__privateGet(this, _detailsEl));
};
createHeader_fn = function() {
  const header = createElement("div", { class: "panel-header" });
  const title = createElement("div", { class: "panel-title", html: '<span class="panel-title-icon">🎬</span> Scene Tree' });
  const buttons = createElement("div", { class: "panel-buttons" });
  const refreshBtn = createElement("button", { class: "panel-btn", text: "↻", title: "Refresh" });
  refreshBtn.addEventListener("click", () => this.refresh());
  const closeBtn = createElement("button", { class: "panel-btn", text: "✕", title: "Close" });
  closeBtn.addEventListener("click", () => this.close());
  buttons.appendChild(refreshBtn);
  buttons.appendChild(closeBtn);
  header.appendChild(title);
  header.appendChild(buttons);
  return header;
};
createTree_fn = function() {
  const tree = createElement("div", { class: "panel-tree" });
  __privateSet(this, _rootNode, createElement("scene-tree-node", { style: { display: "none" } }));
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
    const empty = createElement("div", { class: "panel-empty", text: "Select an object to inspect" });
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
__publicField(SceneTreeSidebar, "styles", `
    ${panelStyles}

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
    `);
customElements.define("scene-tree-sidebar", SceneTreeSidebar);
const inspectorRegistry = /* @__PURE__ */ new Set();
class PerkyExplorerDetails extends EditorComponent {
  constructor() {
    super(...arguments);
    __privateAdd(this, _PerkyExplorerDetails_instances);
    __privateAdd(this, _module3, null);
    __privateAdd(this, _titleEl, null);
    __privateAdd(this, _contentEl2, null);
  }
  onConnected() {
    __privateMethod(this, _PerkyExplorerDetails_instances, buildDOM_fn3).call(this);
  }
  setModule(module) {
    __privateSet(this, _module3, module);
    __privateMethod(this, _PerkyExplorerDetails_instances, render_fn2).call(this);
  }
  getModule() {
    return __privateGet(this, _module3);
  }
  clear() {
    __privateSet(this, _module3, null);
    __privateMethod(this, _PerkyExplorerDetails_instances, render_fn2).call(this);
  }
  static registerInspector(Inspector) {
    inspectorRegistry.add(Inspector);
  }
  static unregisterInspector(Inspector) {
    inspectorRegistry.delete(Inspector);
  }
}
_module3 = new WeakMap();
_titleEl = new WeakMap();
_contentEl2 = new WeakMap();
_PerkyExplorerDetails_instances = new WeakSet();
buildDOM_fn3 = function() {
  __privateSet(this, _titleEl, createElement("div", { class: "details-title" }));
  __privateSet(this, _contentEl2, createElement("div", { class: "details-content" }));
  this.shadowRoot.appendChild(__privateGet(this, _titleEl));
  this.shadowRoot.appendChild(__privateGet(this, _contentEl2));
};
render_fn2 = function() {
  if (!__privateGet(this, _module3)) {
    __privateMethod(this, _PerkyExplorerDetails_instances, renderEmpty_fn).call(this);
    return;
  }
  __privateMethod(this, _PerkyExplorerDetails_instances, renderTitle_fn).call(this);
  __privateMethod(this, _PerkyExplorerDetails_instances, renderContent_fn).call(this);
};
renderEmpty_fn = function() {
  __privateGet(this, _titleEl).textContent = "";
  __privateGet(this, _contentEl2).innerHTML = "";
  const empty = createElement("div", {
    class: "details-empty",
    text: "Select a module to inspect"
  });
  __privateGet(this, _contentEl2).appendChild(empty);
};
renderTitle_fn = function() {
  __privateGet(this, _titleEl).innerHTML = "";
  const statusDot = createElement("div", {
    class: `details-status ${__privateGet(this, _module3).$status}`
  });
  const focusBtn = createElement("button", {
    class: "details-focus-btn",
    html: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle></svg>',
    title: "Focus on this module"
  });
  focusBtn.onclick = () => {
    this.dispatchEvent(new CustomEvent("focus:module", {
      detail: { module: __privateGet(this, _module3) },
      bubbles: true,
      composed: true
    }));
  };
  __privateGet(this, _titleEl).appendChild(statusDot);
  __privateGet(this, _titleEl).appendChild(document.createTextNode(__privateGet(this, _module3).$id));
  __privateGet(this, _titleEl).appendChild(focusBtn);
};
renderContent_fn = function() {
  __privateGet(this, _contentEl2).innerHTML = "";
  const matchingInspectors = findAllInspectors(__privateGet(this, _module3));
  if (matchingInspectors.length > 0) {
    for (const Inspector of matchingInspectors) {
      __privateMethod(this, _PerkyExplorerDetails_instances, renderCustomInspector_fn).call(this, Inspector);
    }
  } else if (typeof __privateGet(this, _module3).inspect === "function") {
    __privateMethod(this, _PerkyExplorerDetails_instances, renderInspectMethod_fn).call(this);
  } else {
    __privateMethod(this, _PerkyExplorerDetails_instances, renderDefaultGrid_fn).call(this);
  }
};
renderCustomInspector_fn = function(Inspector) {
  const inspector = new Inspector();
  inspector.setModule(__privateGet(this, _module3));
  __privateGet(this, _contentEl2).appendChild(inspector);
};
renderInspectMethod_fn = function() {
  const inspectData = __privateGet(this, _module3).inspect();
  const grid = createGrid();
  for (const [key, value] of Object.entries(inspectData)) {
    addGridRow(grid, key, formatValue$2(value));
  }
  __privateGet(this, _contentEl2).appendChild(grid);
};
renderDefaultGrid_fn = function() {
  const module = __privateGet(this, _module3);
  const grid = createGrid();
  addGridRow(grid, "$name", module.$name);
  addGridRow(grid, "$category", module.$category);
  const tags = module.$tags;
  if (tags && tags.length > 0) {
    addGridRow(grid, "$tags", formatTags(tags));
  }
  addGridRow(grid, "children", module.children.length, true);
  __privateGet(this, _contentEl2).appendChild(grid);
};
__publicField(PerkyExplorerDetails, "styles", `
    ${detailsStyles}

    .details-focus-btn {
        background: none;
        border: none;
        color: var(--fg-secondary);
        cursor: pointer;
        font-size: 14px;
        margin-left: auto;
        opacity: 0.5;
        padding: 4px;
        transition: opacity 0.2s, color 0.2s;
    }
    .details-focus-btn:hover {
        opacity: 1;
        color: var(--fg-primary);
    }
    `);
function findAllInspectors(module) {
  const matches = [];
  for (const Inspector of inspectorRegistry) {
    if (typeof Inspector.matches === "function" && Inspector.matches(module)) {
      matches.push(Inspector);
    }
  }
  return matches;
}
function createGrid() {
  return createElement("div", { class: "details-grid" });
}
function addGridRow(grid, label, value, isAccent = false) {
  const labelEl = createElement("div", {
    class: "details-label",
    text: label
  });
  const valueEl = createElement("div", {
    class: `details-value ${isAccent ? "accent" : ""}`.trim()
  });
  if (value instanceof HTMLElement) {
    valueEl.appendChild(value);
  } else {
    valueEl.textContent = String(value);
    valueEl.title = String(value);
  }
  grid.appendChild(labelEl);
  grid.appendChild(valueEl);
}
function formatValue$2(value) {
  if (value === null || value === void 0) {
    return "(none)";
  }
  if (Array.isArray(value)) {
    return value.length > 0 ? value.join(", ") : "(empty)";
  }
  if (typeof value === "object") {
    return JSON.stringify(value);
  }
  return String(value);
}
function formatTags(tags) {
  const container = createElement("div", { class: "details-tags" });
  for (const tag of tags) {
    const tagEl = createElement("span", {
      class: "details-tag",
      text: tag
    });
    container.appendChild(tagEl);
  }
  return container;
}
customElements.define("perky-explorer-details", PerkyExplorerDetails);
function createToggle(label, checked, onChange) {
  const container = document.createElement("div");
  container.style.cssText = "grid-column: 1 / -1;";
  const toggle = document.createElement("toggle-input");
  toggle.checked = checked;
  toggle.setAttribute("label", label);
  toggle.addEventListener("change", (e) => onChange(e.detail.checked));
  container.appendChild(toggle);
  return container;
}
function createSlider(label, value, options, onChange) {
  const { min, max, step } = options;
  const container = document.createElement("div");
  container.style.cssText = "grid-column: 1 / -1;";
  const slider = document.createElement("slider-input");
  slider.setAttribute("label", label);
  slider.setAttribute("min", min);
  slider.setAttribute("max", max);
  slider.setAttribute("step", step);
  slider.value = value;
  slider.addEventListener("change", (e) => onChange(e.detail.value));
  container.appendChild(slider);
  return container;
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
  var _a2, _b;
  const defaults = pass.constructor.defaultUniforms || ((_a2 = pass.getDefaultUniforms) == null ? void 0 : _a2.call(pass)) || {};
  const configs = pass.constructor.uniformConfig || ((_b = pass.getUniformConfig) == null ? void 0 : _b.call(pass)) || {};
  const currentUniforms = pass.uniforms || {};
  return Object.entries(defaults).filter(([, defaultValue]) => typeof defaultValue === "number").map(([name, defaultValue]) => ({
    name,
    defaultValue,
    currentValue: currentUniforms[name] ?? defaultValue,
    config: configs[name] || { min: 0, max: defaultValue * 2 || 1, step: 0.01 }
  }));
}
function renderUniformSlider(container, pass, uniform) {
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
  container.appendChild(slider);
}
function renderTransformProperty(container, transform, name, config) {
  if (config.type === "color") {
    const row = createColorRow(name, transform[name], (newColor) => {
      transform[name] = newColor;
    });
    container.appendChild(row);
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
    container.appendChild(slider);
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
  const section = document.createElement("div");
  section.className = "pass-section";
  const header = document.createElement("div");
  header.className = "pass-header";
  const toggle = document.createElement("toggle-input");
  toggle.checked = pass.enabled;
  toggle.setAttribute("label", pass.constructor.name);
  toggle.addEventListener("change", (e) => {
    pass.enabled = e.detail.checked;
  });
  header.appendChild(toggle);
  section.appendChild(header);
  const uniforms = getEditableUniforms(pass);
  if (uniforms.length > 0) {
    const uniformsEl = document.createElement("div");
    uniformsEl.className = "pass-uniforms";
    for (const uniform of uniforms) {
      renderUniformSlider(uniformsEl, pass, uniform);
    }
    section.appendChild(uniformsEl);
  }
  gridEl.appendChild(section);
}
function renderTransform(gridEl, addRow, transform) {
  var _a2;
  if (!transform) {
    addRow("transform", "none");
    return;
  }
  const section = document.createElement("div");
  section.className = "pass-section";
  const header = document.createElement("div");
  header.className = "pass-header";
  const toggle = document.createElement("toggle-input");
  toggle.checked = transform.enabled;
  toggle.setAttribute("label", transform.constructor.name);
  toggle.addEventListener("change", (e) => {
    transform.enabled = e.detail.checked;
  });
  header.appendChild(toggle);
  section.appendChild(header);
  const config = ((_a2 = transform.getPropertyConfig) == null ? void 0 : _a2.call(transform)) || {};
  const propertyNames = Object.keys(config);
  if (propertyNames.length > 0) {
    const propsEl = document.createElement("div");
    propsEl.className = "pass-uniforms";
    for (const name of propertyNames) {
      const propConfig = config[name];
      renderTransformProperty(propsEl, transform, name, propConfig);
    }
    section.appendChild(propsEl);
  }
  gridEl.appendChild(section);
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
class GameLoopInspector extends BaseInspector {
  constructor() {
    super();
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
    const controlsEl = createElement("div", { class: "fps-controls" });
    const limitRow = createElement("div", { class: "fps-limit-row" });
    __privateSet(this, _fpsLimitCheckbox, createElement("input", {
      type: "checkbox",
      class: "fps-limit-checkbox",
      id: "fps-limit-checkbox"
    }));
    __privateGet(this, _fpsLimitCheckbox).addEventListener("change", () => __privateMethod(this, _GameLoopInspector_instances, handleLimitChange_fn).call(this));
    const limitLabel = createElement("label", {
      class: "fps-limit-label",
      text: "Limit FPS",
      attrs: { for: "fps-limit-checkbox" }
    });
    limitRow.appendChild(__privateGet(this, _fpsLimitCheckbox));
    limitRow.appendChild(limitLabel);
    const sliderRow = createElement("div", { class: "fps-slider-row" });
    __privateSet(this, _fpsSlider, createElement("input", {
      type: "range",
      class: "fps-slider",
      min: "15",
      max: "144",
      value: "60"
    }));
    __privateGet(this, _fpsSlider).addEventListener("input", () => __privateMethod(this, _GameLoopInspector_instances, handleSliderChange_fn).call(this));
    __privateSet(this, _fpsSliderValue, createElement("span", { class: "fps-slider-value", text: "60" }));
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
  var _a2, _b, _c;
  __privateMethod(this, _GameLoopInspector_instances, updateFps_fn).call(this, ((_a2 = this.module) == null ? void 0 : _a2.getCurrentFps()) || 0, ((_b = this.module) == null ? void 0 : _b.getScreenFps()) || 0);
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
__publicField(GameLoopInspector, "styles", `
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
    `);
customElements.define("game-loop-inspector", GameLoopInspector);
PerkyExplorerDetails.registerInspector(GameLoopInspector);
class TextureManagerInspector extends BaseInspector {
  constructor() {
    super();
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
    const stats = createElement("div", { class: "inspector-stats" });
    const activeCard = createStatCard$1("Active", "0", "0 B", "active");
    __privateSet(this, _activeCountEl, activeCard.querySelector(".stat-value"));
    __privateSet(this, _activeSizeEl, activeCard.querySelector(".stat-sub"));
    const zombieCard = createStatCard$1("Zombies", "0", "0 B", "zombie");
    __privateSet(this, _zombieCountEl, zombieCard.querySelector(".stat-value"));
    __privateSet(this, _zombieSizeEl, zombieCard.querySelector(".stat-sub"));
    stats.appendChild(activeCard);
    stats.appendChild(zombieCard);
    const progressSection = createElement("div", { class: "progress-section" });
    const progressHeader = createElement("div", { class: "progress-header" });
    const progressLabel = createElement("span", {
      class: "progress-label",
      text: "Zombie pool usage"
    });
    __privateSet(this, _progressValueEl, createElement("span", {
      class: "progress-value",
      text: "0%"
    }));
    progressHeader.appendChild(progressLabel);
    progressHeader.appendChild(__privateGet(this, _progressValueEl));
    const progressBarContainer = createElement("div", { class: "progress-bar-container" });
    __privateSet(this, _progressBarEl, createElement("div", {
      class: "progress-bar low",
      style: { width: "0%" }
    }));
    progressBarContainer.appendChild(__privateGet(this, _progressBarEl));
    progressSection.appendChild(progressHeader);
    progressSection.appendChild(progressBarContainer);
    const divider = createElement("div", { class: "divider" });
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
__publicField(TextureManagerInspector, "styles", `
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
    `);
function createStatCard$1(label, value, sub, className = "") {
  const card = createElement("div", { class: "stat-card" });
  const labelEl = createElement("div", { class: "stat-label", text: label });
  const valueEl = createElement("div", {
    class: `stat-value ${className}`,
    text: value
  });
  const subEl = createElement("div", { class: "stat-sub", text: sub });
  card.appendChild(labelEl);
  card.appendChild(valueEl);
  card.appendChild(subEl);
  return card;
}
function createInfoRow(label) {
  const row = createElement("div", { class: "info-row" });
  const labelEl = createElement("span", { class: "info-label", text: label });
  const valueEl = createElement("span", { class: "info-value" });
  row.appendChild(labelEl);
  row.appendChild(valueEl);
  return row;
}
customElements.define("texture-manager-inspector", TextureManagerInspector);
PerkyExplorerDetails.registerInspector(TextureManagerInspector);
const vec2InputCSS = `
    :host {
        display: block;
        width: 100%;
    }

    .vec2-input-container {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-xs);
        width: 100%;
    }

    .vec2-input-label {
        font-size: var(--font-size-xs);
        text-transform: uppercase;
        letter-spacing: 0.5px;
        color: var(--fg-muted);
    }

    .vec2-input-label:empty {
        display: none;
    }

    .vec2-inputs {
        display: flex;
        gap: var(--spacing-sm);
        width: 100%;
    }

    .vec2-inputs number-input {
        flex: 1;
        min-width: 0;
    }


    :host([context="studio"]) .vec2-input-container {
        gap: var(--spacing-sm);
    }

    :host([context="studio"]) .vec2-input-label {
        font-size: var(--font-size-sm);
    }

    :host([context="studio"]) .vec2-inputs {
        gap: var(--spacing-md);
    }

    :host([context="studio"]) .vec2-inputs number-input {
        --input-height: var(--touch-target);
    }
`;
class Vec2Input extends EditorComponent {
  constructor() {
    super();
    __privateAdd(this, _Vec2Input_instances);
    __privateAdd(this, _vec2, null);
    __privateAdd(this, _xInput, null);
    __privateAdd(this, _yInput, null);
    __privateAdd(this, _label, "");
    __privateAdd(this, _labelEl2, null);
    __privateMethod(this, _Vec2Input_instances, buildDOM_fn4).call(this);
  }
  static get observedAttributes() {
    return ["label"];
  }
  onConnected() {
    __privateMethod(this, _Vec2Input_instances, updateDisplay_fn).call(this);
    __privateMethod(this, _Vec2Input_instances, syncContext_fn).call(this);
  }
  attributeChangedCallback(name, oldValue, newValue) {
    handleAttributeChange(this, name, oldValue, newValue);
    if (name === "context") {
      __privateMethod(this, _Vec2Input_instances, syncContext_fn).call(this);
    }
  }
  get value() {
    return __privateGet(this, _vec2);
  }
  set value(vec2) {
    __privateSet(this, _vec2, vec2);
    __privateMethod(this, _Vec2Input_instances, updateDisplay_fn).call(this);
  }
  setLabel(val) {
    __privateSet(this, _label, val);
    if (__privateGet(this, _labelEl2)) {
      __privateGet(this, _labelEl2).textContent = __privateGet(this, _label);
    }
  }
}
_vec2 = new WeakMap();
_xInput = new WeakMap();
_yInput = new WeakMap();
_label = new WeakMap();
_labelEl2 = new WeakMap();
_Vec2Input_instances = new WeakSet();
buildDOM_fn4 = function() {
  const container = createElement("div", { class: "vec2-input-container" });
  __privateSet(this, _labelEl2, createElement("span", {
    class: "vec2-input-label",
    text: __privateGet(this, _label)
  }));
  const inputs = createElement("div", { class: "vec2-inputs" });
  __privateSet(this, _xInput, createElement("number-input", {
    attrs: { label: "x", step: "0.1", precision: "2" }
  }));
  __privateGet(this, _xInput).addEventListener("change", (e) => __privateMethod(this, _Vec2Input_instances, handleChange_fn).call(this, "x", e.detail.value));
  __privateSet(this, _yInput, createElement("number-input", {
    attrs: { label: "y", step: "0.1", precision: "2" }
  }));
  __privateGet(this, _yInput).addEventListener("change", (e) => __privateMethod(this, _Vec2Input_instances, handleChange_fn).call(this, "y", e.detail.value));
  inputs.appendChild(__privateGet(this, _xInput));
  inputs.appendChild(__privateGet(this, _yInput));
  container.appendChild(__privateGet(this, _labelEl2));
  container.appendChild(inputs);
  this.shadowRoot.appendChild(container);
};
updateDisplay_fn = function() {
  if (!__privateGet(this, _vec2)) {
    return;
  }
  __privateGet(this, _xInput).value = __privateGet(this, _vec2).x;
  __privateGet(this, _yInput).value = __privateGet(this, _vec2).y;
};
syncContext_fn = function() {
  var _a2, _b, _c, _d;
  const context = this.getAttribute("context");
  if (context) {
    (_a2 = __privateGet(this, _xInput)) == null ? void 0 : _a2.setAttribute("context", context);
    (_b = __privateGet(this, _yInput)) == null ? void 0 : _b.setAttribute("context", context);
  } else {
    (_c = __privateGet(this, _xInput)) == null ? void 0 : _c.removeAttribute("context");
    (_d = __privateGet(this, _yInput)) == null ? void 0 : _d.removeAttribute("context");
  }
};
handleChange_fn = function(axis, value) {
  if (!__privateGet(this, _vec2)) {
    return;
  }
  __privateGet(this, _vec2)[axis] = value;
  emitChange(this, { value: __privateGet(this, _vec2), axis, componentValue: value });
};
__publicField(Vec2Input, "styles", [controlsSheet, vec2InputCSS]);
customElements.define("vec2-input", Vec2Input);
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
    __privateSet(this, _positionInput, createElement("vec2-input", { attrs: { label: "Position" } }));
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
  var _a2, _b;
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
  const contentCount = ((_b = (_a2 = layer.content) == null ? void 0 : _a2.children) == null ? void 0 : _b.length) ?? 0;
  this.addRow("content", layer.content ? `${layer.content.constructor.name} (${contentCount})` : "(none)", true);
  if (layer.content) {
    const sceneTreeBtn = this.createButton("🎬", "Scene Tree", () => __privateMethod(this, _CanvasLayerInspector_instances, openSceneTree_fn).call(this));
    sceneTreeBtn.classList.add("primary");
    this.actionsEl.appendChild(sceneTreeBtn);
  }
};
openSceneTree_fn = function() {
  var _a2;
  if (!((_a2 = this.module) == null ? void 0 : _a2.content)) {
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
class WorldViewInspector extends BaseInspector {
  constructor() {
    super();
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
  var _a2, _b, _c, _d;
  if (!this.module) {
    return;
  }
  this.clearContent();
  const worldView = this.module;
  this.addRow("world", ((_a2 = worldView.world) == null ? void 0 : _a2.$id) || "(none)");
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
  var _a2;
  if (!((_a2 = this.module) == null ? void 0 : _a2.rootGroup)) {
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
__publicField(WorldViewInspector, "styles", `
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
    `);
customElements.define("world-view-inspector", WorldViewInspector);
PerkyExplorerDetails.registerInspector(WorldViewInspector);
class WebGLCanvasInspector extends BaseInspector {
  constructor() {
    super(passStyles);
    __privateAdd(this, _WebGLCanvasInspector_instances);
    this.buildDOM();
  }
  static matches(module) {
    return module instanceof WebGLRenderer;
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
    const noPassesEl = createElement("div", {
      class: "no-passes",
      text: "No post-processing passes"
    });
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
  var _a2;
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
    const childCount = ((_a2 = group.content.children) == null ? void 0 : _a2.length) || 0;
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
  const row = createElement("div", { class: "inspector-row" });
  const label = createElement("span", {
    class: "inspector-row-label",
    text: "blendMode"
  });
  const select = createElement("select", { class: "inspector-select" });
  const modes = ["normal", "additive", "multiply"];
  for (const mode of modes) {
    const option = createElement("option", {
      value: mode,
      text: mode,
      selected: group.blendMode === mode
    });
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
    const noPassesEl = createElement("div", {
      class: "no-passes",
      text: "No post-processing passes"
    });
    this.gridEl.appendChild(noPassesEl);
    return;
  }
  for (const pass of passes) {
    renderPass(this.gridEl, pass);
  }
};
customElements.define("render-group-inspector", RenderGroupInspector);
PerkyExplorerDetails.registerInspector(RenderGroupInspector);
class ManifestInspector extends BaseInspector {
  constructor() {
    super();
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
  const container = createElement("div");
  __privateSet(this, _mainContainer, container);
  container.appendChild(__privateMethod(this, _ManifestInspector_instances, createConfigSection_fn).call(this));
  container.appendChild(__privateMethod(this, _ManifestInspector_instances, createAssetsSection_fn).call(this));
  this.gridEl.style.display = "none";
  this.shadowRoot.insertBefore(container, this.gridEl);
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
  const section = createElement("div", { class: "section" });
  const header = createElement("div", { class: "section-header" });
  const titleEl = createElement("div", { class: "section-title", text: title });
  if (count !== null) {
    const countEl = createElement("span", { class: "section-count", text: count });
    titleEl.appendChild(countEl);
  }
  const toggle = createElement("span", {
    class: `section-toggle ${__privateGet(this, _sectionsState)[key] ? "" : "collapsed"}`,
    text: "▼"
  });
  header.appendChild(titleEl);
  header.appendChild(toggle);
  const content = createElement("div", {
    class: `section-content ${__privateGet(this, _sectionsState)[key] ? "" : "collapsed"}`
  });
  header.addEventListener("click", () => {
    __privateGet(this, _sectionsState)[key] = !__privateGet(this, _sectionsState)[key];
    toggle.classList.toggle("collapsed");
    content.classList.toggle("collapsed");
  });
  section.appendChild(header);
  section.appendChild(content);
  return { section, content };
};
createConfigSection_fn = function() {
  const config = this.module.getConfig();
  const entries = Object.entries(config);
  const { section, content } = __privateMethod(this, _ManifestInspector_instances, createSection_fn).call(this, "Config", "config", entries.length);
  if (entries.length === 0) {
    content.innerHTML = '<div class="empty-message">No config defined</div>';
  } else {
    const grid = __privateMethod(this, _ManifestInspector_instances, createDataGrid_fn).call(this, config);
    content.appendChild(grid);
  }
  return section;
};
createDataGrid_fn = function(data, depth = 0) {
  const grid = createElement("div", { class: "data-grid" });
  if (depth > 0) {
    grid.style.marginLeft = `${depth * 12}px`;
  }
  for (const [key, value] of Object.entries(data)) {
    const keyEl = createElement("div", { class: "data-key", text: key });
    const valueEl = createElement("div", { class: "data-value" });
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
  const container = createElement("div", { class: "filters-container" });
  const searchContainer = createElement("div", { class: "search-container" });
  if (__privateGet(this, _filterState).searchQuery) {
    searchContainer.classList.add("has-value");
  }
  const searchBar = createElement("input", {
    type: "text",
    class: "search-bar",
    placeholder: "Search by name, id, type or tag...",
    value: __privateGet(this, _filterState).searchQuery
  });
  const clearButton = createElement("div", {
    class: "search-clear",
    text: "×",
    title: "Clear search"
  });
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
  container.appendChild(searchContainer);
  const quickFilters = createElement("div", { class: "filter-buttons" });
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
  container.appendChild(quickFilters);
  return container;
};
createAssetsSection_fn = function() {
  const allAssets = this.module.getAllAssets();
  const hasActiveSearch = __privateGet(this, _filterState).searchQuery.length > 0;
  const { section, content } = __privateMethod(this, _ManifestInspector_instances, createSection_fn).call(this, "Assets", "assets", allAssets.length);
  if (allAssets.length === 0) {
    content.innerHTML = '<div class="empty-message">No assets defined</div>';
    return section;
  }
  content.appendChild(__privateMethod(this, _ManifestInspector_instances, createFiltersBar_fn).call(this, allAssets));
  const assetsListContainer = createElement("div");
  __privateSet(this, _assetsListContainer, assetsListContainer);
  content.appendChild(assetsListContainer);
  const filteredAssets = __privateMethod(this, _ManifestInspector_instances, applyFilters_fn).call(this, allAssets);
  if (filteredAssets.length === 0) {
    assetsListContainer.innerHTML = '<div class="empty-message">No assets match the current filters</div>';
    return section;
  }
  const assetsByType = groupAssetsByType(filteredAssets);
  for (const [type, assets] of Object.entries(assetsByType)) {
    const group = __privateMethod(this, _ManifestInspector_instances, createTypeGroup_fn).call(this, type, assets, hasActiveSearch);
    assetsListContainer.appendChild(group);
  }
  return section;
};
createTypeGroup_fn = function(type, assets, hasActiveSearch) {
  const group = createElement("div", { class: "asset-type-group" });
  const typeHeader = createElement("div", {
    class: "asset-type-header",
    style: { cursor: "pointer" },
    text: `${type} (${assets.length})`
  });
  const isCollapsed = __privateGet(this, _typeGroupsState)[type] === false;
  const typeContent = createElement("div", {
    style: { display: isCollapsed ? "none" : "block" }
  });
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
__publicField(ManifestInspector, "styles", `
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
    `);
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
  const chip = createElement("div", {
    class: "filter-button",
    html: `${label}<span class="count">${count}</span>`
  });
  chip.addEventListener("click", onClick);
  return chip;
}
function createAssetHeader(asset) {
  const header = createElement("div", { class: "asset-header" });
  const icon = createElement("span", { class: "asset-icon", html: getAssetIcon(asset) });
  const name = createElement("span", { class: "asset-name", text: asset.name || asset.id });
  const typeBadge = createElement("span", { class: "asset-type-badge", text: asset.type });
  header.appendChild(icon);
  header.appendChild(name);
  header.appendChild(typeBadge);
  return header;
}
function createAssetDetails(asset) {
  const details = createElement("div", { class: "asset-details" });
  addAssetRow(details, "id", asset.id);
  if (asset.url) {
    const urlValue = createElement("a", {
      class: "asset-link",
      href: asset.url,
      text: asset.url,
      attrs: { target: "_blank" }
    });
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
  const tagsContainer = createElement("div", { class: "asset-tags" });
  for (const tag of asset.tags) {
    const tagEl = createElement("span", { class: "asset-tag", text: tag });
    tagsContainer.appendChild(tagEl);
  }
  return tagsContainer;
}
function createAssetConfig(asset, createDataGrid) {
  if (!asset.config || Object.keys(asset.config).length === 0) {
    return null;
  }
  const configSection = createElement("div", { class: "asset-config" });
  const configTitle = createElement("div", { class: "config-title", text: "Config" });
  configSection.appendChild(configTitle);
  configSection.appendChild(createDataGrid(asset.config));
  return configSection;
}
function createAssetCard(asset, createDataGrid, hasActiveSearch = false) {
  const card = createElement("div", { class: "asset-card" });
  const header = createAssetHeader(asset);
  card.appendChild(header);
  const isCollapsed = !hasActiveSearch;
  const detailsContainer = createElement("div", {
    style: { display: hasActiveSearch ? "block" : "none" }
  });
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
function addAssetRow(container, label, value) {
  const labelEl = createElement("div", { class: "asset-label", text: label });
  const valueEl = createElement("div", { class: "asset-value", text: value });
  container.appendChild(labelEl);
  container.appendChild(valueEl);
}
function addAssetRowElement(container, label, element) {
  const labelEl = createElement("div", { class: "asset-label", text: label });
  const valueEl = createElement("div", { class: "asset-value" });
  valueEl.appendChild(element);
  container.appendChild(labelEl);
  container.appendChild(valueEl);
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
  var _a2;
  const type = ((_a2 = asset.type) == null ? void 0 : _a2.toLowerCase()) || "";
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
  const preview = createElement("div", { class: "asset-preview" });
  const img = createElement("img", { src, alt: asset.name || asset.id });
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
  const preview = createElement("div", { class: "asset-preview" });
  const audio = createElement("audio", {
    src: audioSrc,
    attrs: { controlsList: "nodownload" }
  });
  audio.controls = true;
  audio.preload = "metadata";
  preview.appendChild(audio);
  return preview;
}
customElements.define("manifest-inspector", ManifestInspector);
PerkyExplorerDetails.registerInspector(ManifestInspector);
class InputBinderInspector extends BaseInspector {
  constructor() {
    super();
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
    const empty = createElement("div", { class: "empty-message", text: "No input bindings defined" });
    __privateGet(this, _containerEl).appendChild(empty);
    return;
  }
  const list = createElement("div", { class: "bindings-list" });
  if (__privateGet(this, _viewMode) === "action") {
    renderByAction(list, bindings);
  } else {
    renderByDevice(list, bindings);
  }
  __privateGet(this, _containerEl).appendChild(list);
};
createHeader_fn2 = function(count) {
  const header = createElement("div", { class: "bindings-header" });
  const countEl = createElement("div", {
    class: "bindings-count",
    html: `<strong>${count}</strong> binding${count === 1 ? "" : "s"}`
  });
  const toggle = createElement("div", { class: "view-toggle" });
  const actionBtn = createElement("button", {
    class: `view-btn ${__privateGet(this, _viewMode) === "action" ? "active" : ""}`,
    text: "By Action"
  });
  actionBtn.addEventListener("click", () => {
    __privateSet(this, _viewMode, "action");
    __privateMethod(this, _InputBinderInspector_instances, update_fn7).call(this);
  });
  const deviceBtn = createElement("button", {
    class: `view-btn ${__privateGet(this, _viewMode) === "device" ? "active" : ""}`,
    text: "By Device"
  });
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
__publicField(InputBinderInspector, "styles", `
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
    `);
function renderByAction(container, bindings) {
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
    container.appendChild(group);
  }
}
function renderByDevice(container, bindings) {
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
    container.appendChild(group);
  }
}
function createGroup(name, bindings) {
  const group = createElement("div", { class: "binding-group" });
  const header = createElement("div", { class: "group-header" });
  const nameEl = createElement("span", { class: "group-name", text: name });
  const count = createElement("span", { class: "group-count", text: bindings.length });
  header.appendChild(nameEl);
  header.appendChild(count);
  group.appendChild(header);
  for (const binding of bindings) {
    group.appendChild(createBindingCard(binding));
  }
  return group;
}
function createBindingCard(binding) {
  const card = createElement("div", { class: "binding-card" });
  const isComposite = binding instanceof CompositeBinding;
  const row = createElement("div", { class: "binding-row" });
  const input = createElement("div", { class: "binding-input" });
  if (isComposite) {
    const comboLabel = createElement("span", { class: "control-name", text: "Combo" });
    input.appendChild(comboLabel);
  } else {
    const device = createElement("span", { class: "device-badge", text: binding.deviceName });
    const control = createElement("span", { class: "control-name", text: binding.controlName });
    input.appendChild(device);
    input.appendChild(control);
  }
  const arrow = createElement("span", { class: "binding-arrow", text: "→" });
  const action = createElement("div", { class: "binding-action" });
  const actionName = createElement("span", { class: "action-name", text: binding.actionName });
  action.appendChild(actionName);
  if (binding.controllerName) {
    const controller = createElement("span", { class: "controller-badge", text: binding.controllerName });
    action.appendChild(controller);
  }
  const eventBadge = createElement("span", { class: `event-badge ${binding.eventType}`, text: binding.eventType });
  action.appendChild(eventBadge);
  row.appendChild(input);
  row.appendChild(arrow);
  row.appendChild(action);
  card.appendChild(row);
  if (isComposite && binding.controls) {
    const comboControls = createElement("div", { class: "combo-controls" });
    binding.controls.forEach((ctrl, index) => {
      if (index > 0) {
        const plus = createElement("span", { class: "combo-plus", text: "+" });
        comboControls.appendChild(plus);
      }
      const control = createElement("div", { class: "combo-control" });
      const device = createElement("span", { class: "device-badge", text: ctrl.deviceName });
      const name = createElement("span", { class: "control-name", text: ctrl.controlName });
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
class ActionControllerInspector extends BaseInspector {
  constructor() {
    super();
    __privateAdd(this, _ActionControllerInspector_instances);
    __privateAdd(this, _containerEl2, null);
    this.buildDOM();
  }
  static matches(module) {
    return module instanceof ActionController;
  }
  buildDOM() {
    super.buildDOM();
    __privateSet(this, _containerEl2, document.createElement("div"));
    this.shadowRoot.insertBefore(__privateGet(this, _containerEl2), this.gridEl);
    this.gridEl.style.display = "none";
  }
  onModuleSet(module) {
    if (module) {
      __privateMethod(this, _ActionControllerInspector_instances, update_fn8).call(this);
    }
  }
}
_containerEl2 = new WeakMap();
_ActionControllerInspector_instances = new WeakSet();
update_fn8 = function() {
  if (!this.module) {
    return;
  }
  __privateGet(this, _containerEl2).innerHTML = "";
  const actions = this.module.listActions();
  const header = createHeader$1(actions.length);
  __privateGet(this, _containerEl2).appendChild(header);
  if (actions.length === 0) {
    const empty = createElement("div", { class: "empty-message", text: "No actions defined" });
    __privateGet(this, _containerEl2).appendChild(empty);
    return;
  }
  const list = createElement("div", { class: "actions-list" });
  for (const actionName of actions) {
    const card = __privateMethod(this, _ActionControllerInspector_instances, createActionCard_fn).call(this, actionName);
    list.appendChild(card);
  }
  __privateGet(this, _containerEl2).appendChild(list);
};
createActionCard_fn = function(actionName) {
  const card = createElement("div", { class: "action-card" });
  const nameEl = createElement("span", { class: "action-name", text: actionName });
  const rightSide = createElement("div", {
    style: { display: "flex", alignItems: "center", gap: "6px" }
  });
  const isPropagable = this.module.shouldPropagate(actionName);
  if (isPropagable) {
    const badge = createElement("span", { class: "action-badge propagable", text: "propagable" });
    rightSide.appendChild(badge);
  }
  const executeBtn = createElement("button", { class: "execute-btn", text: "▶ Run" });
  executeBtn.addEventListener("click", () => {
    this.module.execute(actionName);
  });
  rightSide.appendChild(executeBtn);
  card.appendChild(nameEl);
  card.appendChild(rightSide);
  return card;
};
__publicField(ActionControllerInspector, "styles", `
    .actions-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 8px;
    }

    .actions-count {
        font-size: 11px;
        color: var(--fg-muted);
    }

    .actions-count strong {
        color: var(--fg-primary);
    }

    .actions-list {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .action-card {
        background: var(--bg-hover);
        border-radius: 4px;
        padding: 8px 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
    }

    .action-name {
        font-size: 11px;
        font-weight: 600;
        color: var(--accent);
        font-family: var(--font-mono);
    }

    .action-badge {
        font-size: 9px;
        padding: 2px 6px;
        border-radius: 4px;
        background: var(--bg-primary);
        color: var(--fg-muted);
    }

    .action-badge.propagable {
        background: var(--status-started);
        color: var(--bg-primary);
    }

    .execute-btn {
        background: var(--bg-primary);
        border: 1px solid var(--border);
        border-radius: 4px;
        padding: 3px 8px;
        font-size: 9px;
        color: var(--fg-muted);
        cursor: pointer;
        transition: all 0.15s;
    }

    .execute-btn:hover {
        background: var(--accent);
        color: var(--bg-primary);
        border-color: var(--accent);
    }

    .empty-message {
        color: var(--fg-muted);
        font-size: 11px;
        font-style: italic;
        text-align: center;
        padding: 16px;
    }
    `);
function createHeader$1(count) {
  const header = createElement("div", { class: "actions-header" });
  const countEl = createElement("div", {
    class: "actions-count",
    html: `<strong>${count}</strong> ${pluralize("action", count)}`
  });
  header.appendChild(countEl);
  return header;
}
customElements.define("action-controller-inspector", ActionControllerInspector);
PerkyExplorerDetails.registerInspector(ActionControllerInspector);
class ActionDispatcherInspector extends BaseInspector {
  constructor() {
    super();
    __privateAdd(this, _ActionDispatcherInspector_instances);
    __privateAdd(this, _containerEl3, null);
    this.buildDOM();
  }
  static matches(module) {
    return module instanceof ActionDispatcher;
  }
  buildDOM() {
    super.buildDOM();
    __privateSet(this, _containerEl3, document.createElement("div"));
    this.shadowRoot.insertBefore(__privateGet(this, _containerEl3), this.gridEl);
    this.gridEl.style.display = "none";
  }
  onModuleSet(module) {
    if (module) {
      __privateMethod(this, _ActionDispatcherInspector_instances, update_fn9).call(this);
    }
  }
}
_containerEl3 = new WeakMap();
_ActionDispatcherInspector_instances = new WeakSet();
update_fn9 = function() {
  if (!this.module) {
    return;
  }
  __privateGet(this, _containerEl3).innerHTML = "";
  const actionsMap = this.module.listAllActions();
  let totalActions = 0;
  for (const actions of actionsMap.values()) {
    totalActions += actions.length;
  }
  const header = createHeader(totalActions, actionsMap.size);
  __privateGet(this, _containerEl3).appendChild(header);
  if (actionsMap.size === 0) {
    const empty = createElement("div", { class: "empty-message", text: "No controllers registered" });
    __privateGet(this, _containerEl3).appendChild(empty);
    return;
  }
  for (const [controllerName, actions] of actionsMap) {
    const group = __privateMethod(this, _ActionDispatcherInspector_instances, createControllerGroup_fn).call(this, controllerName, actions);
    __privateGet(this, _containerEl3).appendChild(group);
  }
};
createControllerGroup_fn = function(controllerName, actions) {
  const isActive = this.module.getActive().includes(controllerName);
  const group = createElement("div", { class: isActive ? "controller-group" : "controller-group group-inactive" });
  const header = createElement("div", { class: "group-header" });
  const nameEl = createElement("span", { class: "group-name", text: controllerName });
  const toggle = document.createElement("toggle-input");
  toggle.setChecked(isActive);
  toggle.addEventListener("change", (e) => {
    __privateMethod(this, _ActionDispatcherInspector_instances, toggleController_fn).call(this, controllerName, e.detail.checked);
  });
  header.appendChild(nameEl);
  header.appendChild(toggle);
  group.appendChild(header);
  if (actions.length === 0) {
    const empty = createElement("div", { class: "empty-message", text: "No actions" });
    group.appendChild(empty);
  } else {
    const list = createElement("div", { class: "actions-list" });
    for (const action of actions) {
      const card = createActionCard(action.name, controllerName, this.module);
      list.appendChild(card);
    }
    group.appendChild(list);
  }
  return group;
};
toggleController_fn = function(controllerName, active) {
  const currentActive = this.module.getActive();
  if (active) {
    if (!currentActive.includes(controllerName)) {
      this.module.setActive([...currentActive, controllerName]);
    }
  } else {
    this.module.setActive(currentActive.filter((name) => name !== controllerName));
  }
  __privateMethod(this, _ActionDispatcherInspector_instances, update_fn9).call(this);
};
__publicField(ActionDispatcherInspector, "styles", `
    .actions-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 8px;
    }

    .actions-count {
        font-size: 11px;
        color: var(--fg-muted);
    }

    .actions-count strong {
        color: var(--fg-primary);
    }

    .controller-group {
        margin-bottom: 12px;
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

    .group-inactive .group-name {
        opacity: 0.4;
    }

    .group-inactive .actions-list {
        opacity: 0.3;
        pointer-events: none;
    }

    .actions-list {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .action-card {
        background: var(--bg-hover);
        border-radius: 4px;
        padding: 8px 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
    }

    .action-name {
        font-size: 11px;
        font-weight: 600;
        color: var(--accent);
        font-family: var(--font-mono);
    }

    .execute-btn {
        background: var(--bg-primary);
        border: 1px solid var(--border);
        border-radius: 4px;
        padding: 3px 8px;
        font-size: 9px;
        color: var(--fg-muted);
        cursor: pointer;
        transition: all 0.15s;
    }

    .execute-btn:hover {
        background: var(--accent);
        color: var(--bg-primary);
        border-color: var(--accent);
    }

    .empty-message {
        color: var(--fg-muted);
        font-size: 11px;
        font-style: italic;
        text-align: center;
        padding: 16px;
    }
    `);
function createHeader(totalActions, controllerCount) {
  const header = createElement("div", { class: "actions-header" });
  const countEl = createElement("div", {
    class: "actions-count",
    html: `<strong>${totalActions}</strong> ${pluralize("action", totalActions)} in <strong>${controllerCount}</strong> ${pluralize("controller", controllerCount)}`
  });
  header.appendChild(countEl);
  return header;
}
function createActionCard(actionName, controllerName, dispatcher) {
  const card = createElement("div", { class: "action-card" });
  const nameEl = createElement("span", { class: "action-name", text: actionName });
  const executeBtn = createElement("button", { class: "execute-btn", text: "▶ Run" });
  executeBtn.addEventListener("click", () => {
    dispatcher.executeTo(controllerName, actionName);
  });
  card.appendChild(nameEl);
  card.appendChild(executeBtn);
  return card;
}
customElements.define("action-dispatcher-inspector", ActionDispatcherInspector);
PerkyExplorerDetails.registerInspector(ActionDispatcherInspector);
class AudioSystemInspector extends BaseInspector {
  constructor() {
    super();
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
    const controlsEl = createElement("div", { class: "volume-controls" });
    __privateSet(this, _volumeInput, createElement("slider-input", {
      attrs: { label: "Master Volume", min: "0", max: "1", step: "0.01", value: "1" }
    }));
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
  var _a2;
  __privateMethod(this, _AudioSystemInspector_instances, updateUnlocked_fn).call(this);
  __privateMethod(this, _AudioSystemInspector_instances, updateChannels_fn).call(this);
  __privateMethod(this, _AudioSystemInspector_instances, updateVolume_fn).call(this, ((_a2 = this.module) == null ? void 0 : _a2.masterVolume) ?? 1);
};
updateUnlocked_fn = function() {
  if (!this.module) {
    return;
  }
  const unlocked2 = this.module.unlocked;
  __privateGet(this, _unlockedValueEl).textContent = unlocked2 ? "true" : "false";
  __privateGet(this, _unlockedValueEl).className = `inspector-value ${unlocked2 ? "accent" : ""}`;
  if (__privateGet(this, _unlockBtn)) {
    if (unlocked2) {
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
__publicField(AudioSystemInspector, "styles", `
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
    `);
customElements.define("audio-system-inspector", AudioSystemInspector);
PerkyExplorerDetails.registerInspector(AudioSystemInspector);
class AudioChannelInspector extends BaseInspector {
  constructor() {
    super();
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
    const controlsEl = createElement("div", { class: "volume-controls" });
    __privateSet(this, _volumeInput2, createElement("slider-input", {
      attrs: { label: "Volume", min: "0", max: "1", step: "0.01", value: "1" }
    }));
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
  var _a2;
  __privateMethod(this, _AudioChannelInspector_instances, updateMuted_fn).call(this);
  __privateMethod(this, _AudioChannelInspector_instances, updateSources_fn).call(this);
  __privateMethod(this, _AudioChannelInspector_instances, updateVolume_fn2).call(this, ((_a2 = this.module) == null ? void 0 : _a2.volume) ?? 1);
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
__publicField(AudioChannelInspector, "styles", `
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
    `);
customElements.define("audio-channel-inspector", AudioChannelInspector);
PerkyExplorerDetails.registerInspector(AudioChannelInspector);
class TextureSystemInspector extends BaseInspector {
  constructor() {
    super();
    __privateAdd(this, _TextureSystemInspector_instances);
    __privateAdd(this, _sectionsState2, {
      atlases: true
    });
    __privateAdd(this, _atlasExpandState, {});
    __privateAdd(this, _mainContainer2, null);
    this.buildDOM();
  }
  static matches(module) {
    return module instanceof TextureSystem;
  }
  onModuleSet(module) {
    if (module) {
      __privateMethod(this, _TextureSystemInspector_instances, update_fn10).call(this);
    }
  }
}
_sectionsState2 = new WeakMap();
_atlasExpandState = new WeakMap();
_mainContainer2 = new WeakMap();
_TextureSystemInspector_instances = new WeakSet();
update_fn10 = function() {
  if (!this.module) {
    return;
  }
  if (__privateGet(this, _mainContainer2) && __privateGet(this, _mainContainer2).parentNode) {
    __privateGet(this, _mainContainer2).remove();
  }
  this.clearContent();
  const container = createElement("div");
  __privateSet(this, _mainContainer2, container);
  container.appendChild(__privateMethod(this, _TextureSystemInspector_instances, createStatsSection_fn).call(this));
  container.appendChild(__privateMethod(this, _TextureSystemInspector_instances, createAtlasesSection_fn).call(this));
  this.gridEl.style.display = "none";
  this.shadowRoot.insertBefore(container, this.gridEl);
};
createStatsSection_fn = function() {
  const stats = createElement("div", { class: "stats-grid" });
  const atlases = this.module.atlases;
  const regionCount = this.module.regionCount;
  let totalPixels = 0;
  for (const atlas of atlases) {
    totalPixels += atlas.width * atlas.height;
  }
  const totalMB = (totalPixels * 4 / 1024 / 1024).toFixed(2);
  stats.appendChild(createStatCard(atlases.length, "Atlases"));
  stats.appendChild(createStatCard(regionCount, "Regions"));
  stats.appendChild(createStatCard(`${totalMB}MB`, "Memory"));
  return stats;
};
createAtlasesSection_fn = function() {
  const atlases = this.module.atlases;
  const { section, content } = __privateMethod(this, _TextureSystemInspector_instances, createSection_fn2).call(this, "Atlases", "atlases", atlases.length);
  if (atlases.length === 0) {
    content.innerHTML = '<div class="empty-message">No atlases created yet</div>';
    return section;
  }
  const atlasList = createElement("div", { class: "atlas-list" });
  atlases.forEach((atlas, index) => {
    atlasList.appendChild(__privateMethod(this, _TextureSystemInspector_instances, createAtlasCard_fn).call(this, atlas, index));
  });
  content.appendChild(atlasList);
  return section;
};
createSection_fn2 = function(title, key, count = null) {
  const section = createElement("div", { class: "section" });
  const header = createElement("div", { class: "section-header" });
  const titleEl = createElement("div", { class: "section-title", text: title });
  if (count !== null) {
    const countEl = createElement("span", { class: "section-count", text: count });
    titleEl.appendChild(countEl);
  }
  const toggle = createElement("span", {
    class: `section-toggle ${__privateGet(this, _sectionsState2)[key] ? "" : "collapsed"}`,
    text: "▼"
  });
  header.appendChild(titleEl);
  header.appendChild(toggle);
  const content = createElement("div", {
    class: `section-content ${__privateGet(this, _sectionsState2)[key] ? "" : "collapsed"}`
  });
  header.addEventListener("click", () => {
    __privateGet(this, _sectionsState2)[key] = !__privateGet(this, _sectionsState2)[key];
    toggle.classList.toggle("collapsed");
    content.classList.toggle("collapsed");
  });
  section.appendChild(header);
  section.appendChild(content);
  return { section, content };
};
createAtlasCard_fn = function(atlas, index) {
  const card = createElement("div", { class: "atlas-card" });
  const header = createElement("div", { class: "atlas-header" });
  const titleContainer = createElement("div", { class: "atlas-title" });
  const toggle = createElement("span", { class: "atlas-toggle", text: "▼" });
  const name = createElement("span", { class: "atlas-name", text: `Atlas ${index + 1}` });
  const badge = createElement("span", { class: "atlas-badge", text: `${atlas.width}×${atlas.height}` });
  titleContainer.appendChild(toggle);
  titleContainer.appendChild(name);
  const regionCount = createElement("span", { class: "atlas-badge", text: `${atlas.regionCount} regions` });
  header.appendChild(titleContainer);
  const badges = createElement("div", { style: { display: "flex", gap: "4px" } });
  badges.appendChild(regionCount);
  badges.appendChild(badge);
  header.appendChild(badges);
  const content = createElement("div", { class: "atlas-content" });
  const isCollapsed = __privateGet(this, _atlasExpandState)[index] === false;
  if (isCollapsed) {
    toggle.classList.add("collapsed");
    content.classList.add("collapsed");
  }
  header.addEventListener("click", () => {
    __privateGet(this, _atlasExpandState)[index] = content.classList.contains("collapsed");
    toggle.classList.toggle("collapsed");
    content.classList.toggle("collapsed");
  });
  const preview = createElement("div", { class: "atlas-preview" });
  const canvas = atlas.canvas;
  if (canvas) {
    const displayCanvas = createElement("canvas", {
      attrs: { width: canvas.width, height: canvas.height }
    });
    const ctx = displayCanvas.getContext("2d");
    ctx.drawImage(canvas, 0, 0);
    preview.appendChild(displayCanvas);
  }
  content.appendChild(preview);
  content.appendChild(createRegionsList(atlas));
  card.appendChild(header);
  card.appendChild(content);
  return card;
};
__publicField(TextureSystemInspector, "styles", `
    .stats-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 8px;
        margin-bottom: 16px;
    }

    .stat-card {
        background: var(--bg-hover);
        border-radius: 4px;
        padding: 8px;
        text-align: center;
    }

    .stat-value {
        font-size: 18px;
        font-weight: 600;
        color: var(--accent);
    }

    .stat-label {
        font-size: 9px;
        color: var(--fg-muted);
        text-transform: uppercase;
        margin-top: 2px;
    }

    .atlas-list {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .atlas-card {
        background: var(--bg-hover);
        border-radius: 4px;
        overflow: hidden;
    }

    .atlas-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px 10px;
        cursor: pointer;
        user-select: none;
    }

    .atlas-header:hover {
        background: var(--bg-primary);
    }

    .atlas-title {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .atlas-toggle {
        font-size: 8px;
        color: var(--fg-muted);
        transition: transform 0.2s;
    }

    .atlas-toggle.collapsed {
        transform: rotate(-90deg);
    }

    .atlas-name {
        font-size: 11px;
        font-weight: 600;
        color: var(--fg-primary);
    }

    .atlas-badge {
        font-size: 9px;
        background: var(--bg-primary);
        padding: 2px 6px;
        border-radius: 4px;
        color: var(--fg-muted);
    }

    .atlas-content {
        border-top: 1px solid var(--border);
    }

    .atlas-content.collapsed {
        display: none;
    }

    .atlas-preview {
        padding: 8px;
        background: var(--bg-primary);
        display: flex;
        justify-content: center;
    }

    .atlas-preview canvas {
        max-width: 100%;
        max-height: 200px;
        object-fit: contain;
        border: 1px solid var(--border);
        background: repeating-conic-gradient(#333 0% 25%, #444 0% 50%) 50% / 8px 8px;
    }

    .regions-section {
        padding: 8px;
        border-top: 1px solid var(--border);
    }

    .regions-header {
        font-size: 9px;
        color: var(--fg-muted);
        text-transform: uppercase;
        margin-bottom: 6px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .regions-list {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
    }

    .region-tag {
        font-size: 9px;
        background: var(--bg-primary);
        color: var(--fg-secondary);
        padding: 2px 6px;
        border-radius: 4px;
        cursor: default;
    }

    .region-tag:hover {
        color: var(--fg-primary);
        background: var(--border);
    }

    .region-tag .region-size {
        color: var(--fg-muted);
        margin-left: 4px;
        font-size: 8px;
    }

    .empty-message {
        color: var(--fg-muted);
        font-size: 10px;
        font-style: italic;
        padding: 12px;
        text-align: center;
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
    `);
function createStatCard(value, label) {
  const card = createElement("div", { class: "stat-card" });
  const valueEl = createElement("div", { class: "stat-value", text: value });
  const labelEl = createElement("div", { class: "stat-label", text: label });
  card.appendChild(valueEl);
  card.appendChild(labelEl);
  return card;
}
function createRegionsList(atlas) {
  const section = createElement("div", { class: "regions-section" });
  const header = createElement("div", { class: "regions-header", text: "Regions" });
  const list = createElement("div", { class: "regions-list" });
  const regions = atlas.getAllRegions();
  for (const [id, region] of regions) {
    const tag = createElement("span", {
      class: "region-tag",
      title: `${id} (${region.width}×${region.height})`
    });
    const nameSpan = createElement("span", { text: id });
    const sizeSpan = createElement("span", { class: "region-size", text: `${region.width}×${region.height}` });
    tag.appendChild(nameSpan);
    tag.appendChild(sizeSpan);
    list.appendChild(tag);
  }
  section.appendChild(header);
  section.appendChild(list);
  return section;
}
customElements.define("texture-system-inspector", TextureSystemInspector);
PerkyExplorerDetails.registerInspector(TextureSystemInspector);
const menuStyles = `
    :host {
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
class ExplorerContextMenu extends EditorComponent {
  constructor() {
    super(...arguments);
    __privateAdd(this, _ExplorerContextMenu_instances);
    __privateAdd(this, _menuEl, null);
    __privateAdd(this, _actions2, []);
    __privateAdd(this, _module4, null);
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
  }
  onConnected() {
    __privateMethod(this, _ExplorerContextMenu_instances, buildDOM_fn5).call(this);
  }
  show(actions, module, position) {
    __privateSet(this, _actions2, actions);
    __privateSet(this, _module4, module);
    __privateMethod(this, _ExplorerContextMenu_instances, renderActions_fn).call(this);
    __privateMethod(this, _ExplorerContextMenu_instances, positionMenu_fn).call(this, position.x, position.y);
    this.style.display = "block";
    document.addEventListener("click", __privateGet(this, _handleOutsideClick));
    document.addEventListener("contextmenu", __privateGet(this, _handleOutsideClick));
    document.addEventListener("keydown", __privateGet(this, _handleKeyDown));
  }
  hide() {
    this.style.display = "none";
    __privateSet(this, _actions2, []);
    __privateSet(this, _module4, null);
    document.removeEventListener("click", __privateGet(this, _handleOutsideClick));
    document.removeEventListener("contextmenu", __privateGet(this, _handleOutsideClick));
    document.removeEventListener("keydown", __privateGet(this, _handleKeyDown));
  }
}
_menuEl = new WeakMap();
_actions2 = new WeakMap();
_module4 = new WeakMap();
_ExplorerContextMenu_instances = new WeakSet();
buildDOM_fn5 = function() {
  __privateSet(this, _menuEl, createElement("div", { class: "context-menu" }));
  __privateGet(this, _menuEl).addEventListener("contextmenu", (e) => {
    e.preventDefault();
    e.stopPropagation();
  });
  this.shadowRoot.appendChild(__privateGet(this, _menuEl));
  this.style.display = "none";
};
renderActions_fn = function() {
  __privateGet(this, _menuEl).innerHTML = "";
  for (const action of __privateGet(this, _actions2)) {
    if (action.separator) {
      const separator = createElement("div", { class: "context-menu-separator" });
      __privateGet(this, _menuEl).appendChild(separator);
      continue;
    }
    const item = createElement("div", { class: "context-menu-item" });
    if (action.disabled) {
      item.classList.add("disabled");
    }
    if (action.danger) {
      item.classList.add("danger");
    }
    const icon = createElement("span", { class: "context-menu-icon" });
    if (action.iconSvg) {
      icon.innerHTML = action.iconSvg;
    } else {
      icon.textContent = action.icon || "";
    }
    const label = createElement("span", { class: "context-menu-label", text: action.label });
    item.appendChild(icon);
    item.appendChild(label);
    if (!action.disabled) {
      item.addEventListener("click", (e) => {
        e.stopPropagation();
        const module = __privateGet(this, _module4);
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
__publicField(ExplorerContextMenu, "styles", menuStyles);
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
      var _a2;
      return (_a2 = callbacks.onFocus) == null ? void 0 : _a2.call(callbacks, module);
    }
  });
  actions.push({
    iconSvg: ICONS.inspect,
    label: "Inspect",
    action: () => {
      var _a2;
      logger.info(module);
      (_a2 = callbacks.onInspect) == null ? void 0 : _a2.call(callbacks);
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
const DEFAULT_SYSTEM_CATEGORIES = [
  "actionDispatcher",
  "inputSystem",
  "renderSystem",
  "sourceManager",
  "perkyView",
  "gameLoop",
  "textureSystem",
  "audioSystem",
  "manifest"
];
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
class PerkyExplorer extends EditorComponent {
  constructor() {
    super(...arguments);
    __privateAdd(this, _PerkyExplorer_instances);
    __privateAdd(this, _module5, null);
    __privateAdd(this, _isMinimized, false);
    __privateAdd(this, _isCollapsed, false);
    __privateAdd(this, _sceneTreeMode, false);
    __privateAdd(this, _focusMode, false);
    __privateAdd(this, _embedded, false);
    __privateAdd(this, _showSystemModules, false);
    __privateAdd(this, _systemCategories, [...DEFAULT_SYSTEM_CATEGORIES]);
    __privateAdd(this, _containerEl4, null);
    __privateAdd(this, _sidebarEl, null);
    __privateAdd(this, _explorerEl, null);
    __privateAdd(this, _minimizedEl, null);
    __privateAdd(this, _headerEl2, null);
    __privateAdd(this, _treeEl2, null);
    __privateAdd(this, _rootNode2, null);
    __privateAdd(this, _detailsEl2, null);
    __privateAdd(this, _collapseBtnEl, null);
    __privateAdd(this, _minimizeBtnEl, null);
    __privateAdd(this, _layersBtnEl, null);
    __privateAdd(this, _selectedModule, null);
    __privateAdd(this, _rootModule, null);
    __privateAdd(this, _contextMenuEl, null);
  }
  onConnected() {
    __privateMethod(this, _PerkyExplorer_instances, buildDOM_fn6).call(this);
  }
  onDisconnected() {
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
  get systemCategories() {
    return __privateGet(this, _systemCategories);
  }
  set systemCategories(value) {
    __privateSet(this, _systemCategories, value);
    __privateMethod(this, _PerkyExplorer_instances, refresh_fn).call(this);
  }
  get showSystemModules() {
    return __privateGet(this, _showSystemModules);
  }
  set showSystemModules(value) {
    __privateSet(this, _showSystemModules, value);
    __privateMethod(this, _PerkyExplorer_instances, updateLayersButton_fn).call(this);
    __privateMethod(this, _PerkyExplorer_instances, refresh_fn).call(this);
    this.dispatchEvent(new CustomEvent("showSystemModules:change", {
      detail: { showSystemModules: value }
    }));
  }
  isSystemModule(module) {
    return module && __privateGet(this, _systemCategories).includes(module.$category);
  }
  setModule(module) {
    __privateSet(this, _module5, module);
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
    return __privateGet(this, _module5);
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
_module5 = new WeakMap();
_isMinimized = new WeakMap();
_isCollapsed = new WeakMap();
_sceneTreeMode = new WeakMap();
_focusMode = new WeakMap();
_embedded = new WeakMap();
_showSystemModules = new WeakMap();
_systemCategories = new WeakMap();
_containerEl4 = new WeakMap();
_sidebarEl = new WeakMap();
_explorerEl = new WeakMap();
_minimizedEl = new WeakMap();
_headerEl2 = new WeakMap();
_treeEl2 = new WeakMap();
_rootNode2 = new WeakMap();
_detailsEl2 = new WeakMap();
_collapseBtnEl = new WeakMap();
_minimizeBtnEl = new WeakMap();
_layersBtnEl = new WeakMap();
_selectedModule = new WeakMap();
_rootModule = new WeakMap();
_contextMenuEl = new WeakMap();
_PerkyExplorer_instances = new WeakSet();
buildDOM_fn6 = function() {
  __privateSet(this, _containerEl4, createElement("div", { class: "explorer-container" }));
  __privateSet(this, _minimizedEl, __privateMethod(this, _PerkyExplorer_instances, createMinimizedView_fn).call(this));
  __privateSet(this, _explorerEl, __privateMethod(this, _PerkyExplorer_instances, createExpandedView_fn).call(this));
  __privateSet(this, _sidebarEl, __privateMethod(this, _PerkyExplorer_instances, createSceneTreeView_fn).call(this));
  __privateGet(this, _containerEl4).appendChild(__privateGet(this, _minimizedEl));
  __privateGet(this, _containerEl4).appendChild(__privateGet(this, _explorerEl));
  __privateGet(this, _containerEl4).appendChild(__privateGet(this, _sidebarEl));
  this.shadowRoot.appendChild(__privateGet(this, _containerEl4));
  __privateMethod(this, _PerkyExplorer_instances, updateViewState_fn).call(this);
  __privateMethod(this, _PerkyExplorer_instances, updateTreeVisibility_fn).call(this);
};
createMinimizedView_fn = function() {
  const container = createElement("div", { class: "explorer-minimized" });
  const backButton = createElement("span", {
    class: "explorer-back-button",
    text: "←"
  });
  container.appendChild(backButton);
  container.addEventListener("click", () => {
    if (__privateGet(this, _sceneTreeMode)) {
      __privateMethod(this, _PerkyExplorer_instances, closeSceneTree_fn).call(this);
    } else if (__privateGet(this, _focusMode)) {
      this.focusModule(__privateGet(this, _module5));
    } else {
      __privateSet(this, _isMinimized, false);
      __privateMethod(this, _PerkyExplorer_instances, updateViewState_fn).call(this);
    }
  });
  return container;
};
createExpandedView_fn = function() {
  const explorer = createElement("div", { class: "explorer" });
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
  const header = createElement("div", { class: "explorer-header" });
  const title = createElement("div", {
    class: "explorer-title",
    html: '<span class="explorer-title-icon">📦</span> Perky Explorer'
  });
  const buttons = createElement("div", { class: "explorer-buttons" });
  const refreshBtn = createElement("button", {
    class: "explorer-btn",
    text: "↻",
    title: "Refresh"
  });
  refreshBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    __privateMethod(this, _PerkyExplorer_instances, refresh_fn).call(this);
  });
  __privateSet(this, _collapseBtnEl, createElement("button", {
    class: "explorer-btn",
    text: "−",
    title: "Collapse"
  }));
  __privateGet(this, _collapseBtnEl).addEventListener("click", (e) => {
    e.stopPropagation();
    __privateMethod(this, _PerkyExplorer_instances, toggleCollapse_fn).call(this);
  });
  __privateSet(this, _minimizeBtnEl, createElement("button", {
    class: "explorer-btn",
    text: "◻",
    title: "Minimize"
  }));
  __privateGet(this, _minimizeBtnEl).addEventListener("click", (e) => {
    e.stopPropagation();
    __privateSet(this, _isMinimized, true);
    __privateMethod(this, _PerkyExplorer_instances, updateViewState_fn).call(this);
  });
  __privateSet(this, _layersBtnEl, createElement("button", {
    class: "explorer-btn explorer-btn-icon",
    html: ICONS.layers,
    title: "Show system modules"
  }));
  __privateGet(this, _layersBtnEl).addEventListener("click", (e) => {
    e.stopPropagation();
    this.showSystemModules = !__privateGet(this, _showSystemModules);
  });
  buttons.appendChild(refreshBtn);
  buttons.appendChild(__privateGet(this, _layersBtnEl));
  buttons.appendChild(__privateGet(this, _collapseBtnEl));
  buttons.appendChild(__privateGet(this, _minimizeBtnEl));
  header.appendChild(title);
  header.appendChild(buttons);
  header.addEventListener("click", () => __privateMethod(this, _PerkyExplorer_instances, toggleCollapse_fn).call(this));
  return header;
};
createTree_fn2 = function() {
  const tree = createElement("div", { class: "explorer-tree" });
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
  if (module === __privateGet(this, _rootModule)) {
    actions.push({ separator: true });
    actions.push({
      iconSvg: ICONS.layers,
      label: __privateGet(this, _showSystemModules) ? "Hide system modules" : "Show system modules",
      action: () => {
        this.showSystemModules = !__privateGet(this, _showSystemModules);
      }
    });
  }
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
updateLayersButton_fn = function() {
  if (!__privateGet(this, _layersBtnEl)) {
    return;
  }
  if (__privateGet(this, _showSystemModules)) {
    __privateGet(this, _layersBtnEl).classList.add("active");
    __privateGet(this, _layersBtnEl).title = "Hide system modules";
  } else {
    __privateGet(this, _layersBtnEl).classList.remove("active");
    __privateGet(this, _layersBtnEl).title = "Show system modules";
  }
};
updateTreeVisibility_fn = function() {
  if (__privateGet(this, _module5)) {
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
  const empty = createElement("div", {
    class: "explorer-empty",
    text: "No module attached. Use setModule() to explore."
  });
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
  const isRoot = __privateGet(this, _rootModule) && __privateGet(this, _module5) && __privateGet(this, _rootModule).$id === __privateGet(this, _module5).$id;
  __privateSet(this, _focusMode, __privateGet(this, _rootModule) && !isRoot);
  __privateMethod(this, _PerkyExplorer_instances, updateViewState_fn).call(this);
  if (__privateGet(this, _focusMode)) {
    __privateGet(this, _headerEl2).querySelector(".explorer-title").textContent = __privateGet(this, _rootModule).$id;
  } else {
    __privateGet(this, _headerEl2).querySelector(".explorer-title").innerHTML = '<span class="explorer-title-icon">📦</span> Perky Explorer';
  }
};
__publicField(PerkyExplorer, "observedAttributes", ["embedded"]);
__publicField(PerkyExplorer, "styles", `${explorerStyles} ${containerStyles}`);
PerkyExplorer.registerActionProvider = registerActionProvider;
customElements.define("perky-explorer", PerkyExplorer);
class ExplorerTool extends BaseTool {
  constructor() {
    super(...arguments);
    __privateAdd(this, _ExplorerTool_instances);
    __privateAdd(this, _explorerEl2, null);
  }
  onConnected() {
    __privateMethod(this, _ExplorerTool_instances, buildDOM_fn7).call(this);
  }
  onStateSet(state) {
    if (__privateGet(this, _explorerEl2) && state.module) {
      __privateGet(this, _explorerEl2).setModule(state.module);
    }
    state.addEventListener("module:change", (e) => {
      if (__privateGet(this, _explorerEl2)) {
        __privateGet(this, _explorerEl2).setModule(e.detail.module);
      }
    });
  }
  onActivate() {
    var _a2;
    if (__privateGet(this, _explorerEl2) && ((_a2 = this.state) == null ? void 0 : _a2.module)) {
      __privateGet(this, _explorerEl2).setModule(this.state.module);
    }
  }
  getHeaderActions() {
    var _a2, _b;
    return [
      {
        icon: ICONS.layers,
        title: ((_a2 = __privateGet(this, _explorerEl2)) == null ? void 0 : _a2.showSystemModules) ? "Hide system modules" : "Show system modules",
        active: ((_b = __privateGet(this, _explorerEl2)) == null ? void 0 : _b.showSystemModules) || false,
        onClick: () => {
          if (__privateGet(this, _explorerEl2)) {
            __privateGet(this, _explorerEl2).showSystemModules = !__privateGet(this, _explorerEl2).showSystemModules;
          }
        }
      }
    ];
  }
}
_explorerEl2 = new WeakMap();
_ExplorerTool_instances = new WeakSet();
buildDOM_fn7 = function() {
  var _a2;
  __privateSet(this, _explorerEl2, document.createElement("perky-explorer"));
  __privateGet(this, _explorerEl2).embedded = true;
  __privateGet(this, _explorerEl2).addEventListener("inspect", () => {
    var _a3;
    return (_a3 = this.state) == null ? void 0 : _a3.openLogger();
  });
  __privateGet(this, _explorerEl2).addEventListener("showSystemModules:change", () => {
    this.dispatchEvent(new CustomEvent("headeractions:change", { bubbles: true, composed: true }));
  });
  this.shadowRoot.appendChild(__privateGet(this, _explorerEl2));
  if ((_a2 = this.state) == null ? void 0 : _a2.module) {
    __privateGet(this, _explorerEl2).setModule(this.state.module);
  }
};
__publicField(ExplorerTool, "toolId", "explorer");
__publicField(ExplorerTool, "toolName", "Explorer");
__publicField(ExplorerTool, "toolIcon", ICONS.explorer);
__publicField(ExplorerTool, "location", "sidebar");
__publicField(ExplorerTool, "order", 10);
__publicField(ExplorerTool, "styles", `
    :host {
        display: block;
        height: 100%;
        overflow: auto;
    }

    :host::-webkit-scrollbar {
        width: 6px;
    }

    :host::-webkit-scrollbar-track {
        background: #1a1a1e;
    }

    :host::-webkit-scrollbar-thumb {
        background: #38383e;
        border-radius: 3px;
    }

    perky-explorer {
        height: auto;
    }
    `);
ExplorerTool.register();
customElements.define("explorer-tool", ExplorerTool);
class AppsTool extends BaseTool {
  constructor() {
    super(...arguments);
    __privateAdd(this, _AppsTool_instances);
    __privateAdd(this, _containerEl5, null);
    __privateAdd(this, _registeredListEl, null);
    __privateAdd(this, _runningListEl, null);
    __privateAdd(this, _appManager, null);
  }
  onConnected() {
    __privateMethod(this, _AppsTool_instances, buildDOM_fn8).call(this);
  }
  onStateSet(state) {
    __privateSet(this, _appManager, state.appManager);
    __privateMethod(this, _AppsTool_instances, refresh_fn2).call(this);
    state.addEventListener("appmanager:change", (e) => {
      __privateSet(this, _appManager, e.detail.appManager);
      __privateMethod(this, _AppsTool_instances, refresh_fn2).call(this);
    });
  }
  onActivate() {
    __privateMethod(this, _AppsTool_instances, refresh_fn2).call(this);
  }
}
_containerEl5 = new WeakMap();
_registeredListEl = new WeakMap();
_runningListEl = new WeakMap();
_appManager = new WeakMap();
_AppsTool_instances = new WeakSet();
buildDOM_fn8 = function() {
  __privateSet(this, _containerEl5, createElement("div", { class: "apps-container" }));
  const registeredSection = createSection("Registered Apps", "registered");
  __privateSet(this, _registeredListEl, registeredSection.querySelector(".apps-list"));
  const runningSection = createSection("Running Apps", "running");
  __privateSet(this, _runningListEl, runningSection.querySelector(".apps-list"));
  __privateGet(this, _containerEl5).appendChild(registeredSection);
  __privateGet(this, _containerEl5).appendChild(runningSection);
  this.shadowRoot.appendChild(__privateGet(this, _containerEl5));
};
refresh_fn2 = function() {
  __privateMethod(this, _AppsTool_instances, refreshRegistered_fn).call(this);
  __privateMethod(this, _AppsTool_instances, refreshRunning_fn).call(this);
};
refreshRegistered_fn = function() {
  if (!__privateGet(this, _registeredListEl)) {
    return;
  }
  __privateGet(this, _registeredListEl).innerHTML = "";
  if (!__privateGet(this, _appManager)) {
    __privateGet(this, _registeredListEl).innerHTML = '<div class="apps-empty">No AppManager connected</div>';
    return;
  }
  const registered = Array.from(__privateGet(this, _appManager).constructors.keys);
  if (registered.length === 0) {
    __privateGet(this, _registeredListEl).innerHTML = '<div class="apps-empty">No apps registered</div>';
    return;
  }
  for (const name of registered) {
    const item = createRegisteredItem(name);
    __privateGet(this, _registeredListEl).appendChild(item);
  }
};
refreshRunning_fn = function() {
  if (!__privateGet(this, _runningListEl)) {
    return;
  }
  __privateGet(this, _runningListEl).innerHTML = "";
  if (!__privateGet(this, _appManager)) {
    __privateGet(this, _runningListEl).innerHTML = '<div class="apps-empty">No AppManager connected</div>';
    return;
  }
  const running = __privateGet(this, _appManager).list();
  if (running.length === 0) {
    __privateGet(this, _runningListEl).innerHTML = '<div class="apps-empty">No apps running</div>';
    return;
  }
  for (const app of running) {
    const item = __privateMethod(this, _AppsTool_instances, createRunningItem_fn).call(this, app);
    __privateGet(this, _runningListEl).appendChild(item);
  }
};
createRunningItem_fn = function(app) {
  const item = createElement("div", { class: "apps-item" });
  const info = createElement("div", { class: "apps-item-info" });
  const status = createElement("span", { class: `apps-item-status ${getStatusClass(app)}` });
  const nameEl = createElement("span", { class: "apps-item-name", text: app.$id });
  const typeEl = createElement("span", { class: "apps-item-type", text: app.constructor.name });
  info.appendChild(status);
  info.appendChild(nameEl);
  info.appendChild(typeEl);
  const actions = createElement("div", { class: "apps-item-actions" });
  if (app.$status === "started") {
    const stopBtn = createElement("button", { class: "editor-btn", text: "Stop" });
    stopBtn.addEventListener("click", () => __privateMethod(this, _AppsTool_instances, stopApp_fn).call(this, app.$id));
    actions.appendChild(stopBtn);
  } else if (app.$status === "stopped") {
    const startBtn = createElement("button", { class: "editor-btn", text: "Start" });
    startBtn.addEventListener("click", () => __privateMethod(this, _AppsTool_instances, startApp_fn).call(this, app.$id));
    actions.appendChild(startBtn);
  }
  const disposeBtn = createElement("button", { class: "editor-btn", text: "Dispose" });
  disposeBtn.addEventListener("click", () => __privateMethod(this, _AppsTool_instances, disposeApp_fn).call(this, app.$id));
  actions.appendChild(disposeBtn);
  item.appendChild(info);
  item.appendChild(actions);
  return item;
};
startApp_fn = function(id) {
  if (!__privateGet(this, _appManager)) {
    return;
  }
  __privateGet(this, _appManager).startApp(id);
  __privateMethod(this, _AppsTool_instances, refresh_fn2).call(this);
};
stopApp_fn = function(id) {
  if (!__privateGet(this, _appManager)) {
    return;
  }
  __privateGet(this, _appManager).stopApp(id);
  __privateMethod(this, _AppsTool_instances, refresh_fn2).call(this);
};
disposeApp_fn = function(id) {
  if (!__privateGet(this, _appManager)) {
    return;
  }
  __privateGet(this, _appManager).disposeApp(id);
  __privateMethod(this, _AppsTool_instances, refresh_fn2).call(this);
};
__publicField(AppsTool, "toolId", "apps");
__publicField(AppsTool, "toolName", "Applications");
__publicField(AppsTool, "toolIcon", ICONS.apps);
__publicField(AppsTool, "location", "sidebar");
__publicField(AppsTool, "order", 20);
__publicField(AppsTool, "styles", `
    ${editorScrollbarStyles}
    ${editorButtonStyles}
    ${editorBaseStyles}

    :host {
        display: block;
        height: 100%;
        overflow: auto;
    }

    .apps-container {
        padding: 12px;
    }

    .apps-section {
        margin-bottom: 16px;
    }

    .apps-section:last-child {
        margin-bottom: 0;
    }

    .apps-section-header {
        font-size: 10px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        color: var(--fg-muted);
        margin-bottom: 8px;
        padding-bottom: 4px;
        border-bottom: 1px solid var(--border);
    }

    .apps-list {
        display: flex;
        flex-direction: column;
        gap: 6px;
    }

    .apps-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px 10px;
        background: var(--bg-secondary);
        border-radius: 4px;
        gap: 8px;
    }

    .apps-item:hover {
        background: var(--bg-hover);
    }

    .apps-item-info {
        display: flex;
        align-items: center;
        gap: 8px;
        flex: 1;
        min-width: 0;
    }

    .apps-item-status {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        flex-shrink: 0;
    }

    .apps-item-status.started {
        background: var(--status-success);
        box-shadow: 0 0 4px var(--status-success);
    }

    .apps-item-status.stopped {
        background: var(--status-error);
    }

    .apps-item-status.disposed {
        background: var(--status-muted);
    }

    .apps-item-name {
        color: var(--fg-primary);
        font-size: 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .apps-item-type {
        color: var(--fg-muted);
        font-size: 10px;
        flex-shrink: 0;
    }

    .apps-item-actions {
        display: flex;
        gap: 4px;
        flex-shrink: 0;
    }

    .apps-empty {
        color: var(--fg-muted);
        font-size: 11px;
        font-style: italic;
        padding: 8px 0;
    }
    `);
function createSection(title, type) {
  const section = createElement("div", { class: "apps-section" });
  const header = createElement("div", { class: "apps-section-header", text: title });
  const list = createElement("div", { class: "apps-list", attrs: { "data-type": type } });
  section.appendChild(header);
  section.appendChild(list);
  return section;
}
function createRegisteredItem(name) {
  const item = createElement("div", { class: "apps-item" });
  const info = createElement("div", { class: "apps-item-info" });
  const nameEl = createElement("span", { class: "apps-item-name", text: name });
  info.appendChild(nameEl);
  item.appendChild(info);
  return item;
}
function getStatusClass(app) {
  if (app.$status === "started") {
    return "started";
  }
  if (app.$status === "stopped") {
    return "stopped";
  }
  if (app.$status === "disposed") {
    return "disposed";
  }
  return "";
}
AppsTool.register();
customElements.define("apps-tool", AppsTool);
class DevToolsState extends EventTarget {
  constructor() {
    super(...arguments);
    __privateAdd(this, _sidebarOpen, false);
    __privateAdd(this, _activeTool, null);
    __privateAdd(this, _commandPaletteOpen, false);
    __privateAdd(this, _loggerOpen, false);
    __privateAdd(this, _module6, null);
    __privateAdd(this, _appManager2, null);
    __privateAdd(this, _toolManager, null);
  }
  get sidebarOpen() {
    return __privateGet(this, _sidebarOpen);
  }
  get activeTool() {
    return __privateGet(this, _activeTool);
  }
  get commandPaletteOpen() {
    return __privateGet(this, _commandPaletteOpen);
  }
  get loggerOpen() {
    return __privateGet(this, _loggerOpen);
  }
  get module() {
    return __privateGet(this, _module6);
  }
  get appManager() {
    return __privateGet(this, _appManager2);
  }
  get toolManager() {
    return __privateGet(this, _toolManager);
  }
  openTool(toolId) {
    const wasOpen = __privateGet(this, _sidebarOpen);
    const previousTool = __privateGet(this, _activeTool);
    __privateSet(this, _activeTool, toolId);
    __privateSet(this, _sidebarOpen, true);
    if (previousTool !== toolId) {
      this.dispatchEvent(new CustomEvent("tool:change", {
        detail: { toolId, previousTool }
      }));
    }
    if (!wasOpen) {
      this.dispatchEvent(new CustomEvent("sidebar:open"));
    }
  }
  closeSidebar() {
    if (!__privateGet(this, _sidebarOpen)) {
      return;
    }
    __privateSet(this, _sidebarOpen, false);
    this.dispatchEvent(new CustomEvent("sidebar:close"));
  }
  toggleSidebar() {
    if (__privateGet(this, _sidebarOpen)) {
      this.closeSidebar();
    } else if (__privateGet(this, _activeTool)) {
      this.openTool(__privateGet(this, _activeTool));
    }
  }
  toggleTool(toolId) {
    if (__privateGet(this, _sidebarOpen) && __privateGet(this, _activeTool) === toolId) {
      this.closeSidebar();
    } else {
      this.openTool(toolId);
    }
  }
  openCommandPalette() {
    if (__privateGet(this, _commandPaletteOpen)) {
      return;
    }
    __privateSet(this, _commandPaletteOpen, true);
    this.dispatchEvent(new CustomEvent("commandpalette:open"));
  }
  closeCommandPalette() {
    if (!__privateGet(this, _commandPaletteOpen)) {
      return;
    }
    __privateSet(this, _commandPaletteOpen, false);
    this.dispatchEvent(new CustomEvent("commandpalette:close"));
  }
  toggleCommandPalette() {
    if (__privateGet(this, _commandPaletteOpen)) {
      this.closeCommandPalette();
    } else {
      this.openCommandPalette();
    }
  }
  openLogger() {
    if (__privateGet(this, _loggerOpen)) {
      return;
    }
    __privateSet(this, _loggerOpen, true);
    this.dispatchEvent(new CustomEvent("logger:open"));
  }
  closeLogger() {
    if (!__privateGet(this, _loggerOpen)) {
      return;
    }
    __privateSet(this, _loggerOpen, false);
    this.dispatchEvent(new CustomEvent("logger:close"));
  }
  toggleLogger() {
    if (__privateGet(this, _loggerOpen)) {
      this.closeLogger();
    } else {
      this.openLogger();
    }
  }
  setModule(module) {
    const previousModule = __privateGet(this, _module6);
    __privateSet(this, _module6, module);
    this.dispatchEvent(new CustomEvent("module:change", {
      detail: { module, previousModule }
    }));
  }
  setAppManager(appManager) {
    const previousAppManager = __privateGet(this, _appManager2);
    __privateSet(this, _appManager2, appManager);
    this.dispatchEvent(new CustomEvent("appmanager:change", {
      detail: { appManager, previousAppManager }
    }));
  }
  setToolManager(toolManager) {
    const previousToolManager = __privateGet(this, _toolManager);
    __privateSet(this, _toolManager, toolManager);
    this.dispatchEvent(new CustomEvent("toolmanager:change", {
      detail: { toolManager, previousToolManager }
    }));
  }
}
_sidebarOpen = new WeakMap();
_activeTool = new WeakMap();
_commandPaletteOpen = new WeakMap();
_loggerOpen = new WeakMap();
_module6 = new WeakMap();
_appManager2 = new WeakMap();
_toolManager = new WeakMap();
const dockStyles = `
    .devtools-dock {
        position: fixed;
        top: 10px;
        right: 10px;
        display: flex;
        flex-direction: row;
        gap: 4px;
        padding: 6px;
        background: var(--bg-secondary);
        border: 1px solid var(--border);
        border-radius: 8px;
        z-index: 9999;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    }

    .dock-button {
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-size: 18px;
        transition: background 0.15s, transform 0.1s;
        color: var(--fg-primary);
    }

    .dock-button svg {
        width: 20px;
        height: 20px;
        stroke: currentColor;
        stroke-width: 2;
        fill: none;
    }

    .dock-button:hover {
        background: var(--bg-hover);
    }

    .dock-button.active {
        background: var(--accent);
        color: var(--bg-primary);
    }

    .dock-button:active {
        transform: scale(0.95);
    }

    .dock-separator {
        width: 1px;
        background: var(--border);
        margin: 0 4px;
    }

    .devtools-dock.sidebar-open {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom: none;
    }

    .devtools-dock.minimized {
        background: var(--bg-secondary);
        border: none;
        box-shadow: none;
        padding: 0;
        border-radius: 50%;
    }

    .devtools-dock.minimized .dock-button {
        width: 48px;
        height: 48px;
        background: transparent;
        color: var(--fg-primary);
        transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .devtools-dock.minimized .dock-button:hover {
        transform: scale(1.1);
        color: var(--accent);
    }

    .devtools-dock.minimized .dock-button svg {
        width: 32px;
        height: 32px;
        stroke: none;
        fill: currentColor;
    }
`;
const sidebarStyles = `
    .devtools-sidebar {
        position: fixed;
        top: 58px;
        right: 10px;
        bottom: 10px;
        width: 320px;
        background: var(--bg-primary);
        border: 1px solid var(--border);
        border-top: none;
        border-radius: 8px 0 8px 8px;
        z-index: 9998;
        display: flex;
        flex-direction: column;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        overflow: hidden;
    }

    .sidebar-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 12px;
        background: var(--bg-secondary);
        border-bottom: 1px solid var(--border);
    }

    .sidebar-title {
        font-size: 13px;
        font-weight: 500;
        color: var(--fg-primary);
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .sidebar-title-icon {
        font-size: 16px;
        display: flex;
        align-items: center;
    }

    .sidebar-title-icon svg {
        width: 16px;
        height: 16px;
        stroke: currentColor;
        stroke-width: 2;
        fill: none;
    }

    .sidebar-close {
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        color: var(--fg-muted);
        font-size: 16px;
        transition: background 0.15s, color 0.15s;
    }

    .sidebar-close:hover {
        background: var(--bg-hover);
        color: var(--fg-primary);
    }

    .sidebar-actions {
        display: flex;
        gap: 4px;
        margin-left: auto;
        margin-right: 8px;
    }

    .sidebar-action-btn {
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        color: var(--fg-muted);
        transition: background 0.15s, color 0.15s;
    }

    .sidebar-action-btn svg {
        width: 14px;
        height: 14px;
        stroke: currentColor;
        stroke-width: 2;
        fill: none;
    }

    .sidebar-action-btn:hover {
        background: var(--bg-hover);
        color: var(--fg-primary);
    }

    .sidebar-action-btn.active {
        background: var(--accent);
        color: var(--bg-primary);
    }

    .sidebar-action-btn.active:hover {
        filter: brightness(1.1);
    }

    .sidebar-content {
        flex: 1;
        overflow: auto;
    }
`;
const commandPaletteStyles = `
    .command-palette-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 10000;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        padding-top: 15vh;
    }

    .command-palette-overlay.hidden {
        display: none;
    }

    .command-palette-container {
        width: 500px;
        max-width: 90vw;
        background: var(--bg-primary);
        border: 1px solid var(--border);
        border-radius: 12px;
        box-shadow: 0 8px 40px rgba(0, 0, 0, 0.4);
        overflow: hidden;
    }

    .command-palette-input-wrapper {
        display: flex;
        align-items: center;
        padding: 12px 16px;
        gap: 12px;
        border-bottom: 1px solid var(--border);
    }

    .command-palette-icon {
        font-size: 18px;
        color: var(--fg-muted);
    }

    .command-palette-input {
        flex: 1;
        background: transparent;
        border: none;
        color: var(--fg-primary);
        font-size: 16px;
        font-family: var(--font-mono);
        outline: none;
    }

    .command-palette-input::placeholder {
        color: var(--fg-muted);
    }

    .command-palette-results {
        max-height: 300px;
        overflow-y: auto;
    }

    .command-palette-result {
        display: flex;
        align-items: center;
        padding: 10px 16px;
        gap: 12px;
        cursor: pointer;
        transition: background 0.1s;
    }

    .command-palette-result:hover,
    .command-palette-result.selected {
        background: var(--bg-hover);
    }

    .command-palette-result.selected {
        background: var(--bg-selected);
    }

    .command-palette-result-icon {
        font-size: 18px;
        width: 24px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--fg-muted);
    }

    .command-palette-result-icon svg {
        width: 18px;
        height: 18px;
        stroke: currentColor;
        stroke-width: 2;
        fill: none;
    }

    .command-palette-result-text {
        flex: 1;
    }

    .command-palette-result-title {
        font-size: 14px;
        color: var(--fg-primary);
    }

    .command-palette-placeholder {
        color: var(--fg-muted);
        font-style: italic;
    }

    .command-palette-result-subtitle {
        font-size: 11px;
        color: var(--fg-muted);
        margin-top: 2px;
    }

    .command-palette-result-shortcut {
        font-size: 11px;
        color: var(--fg-muted);
        padding: 2px 6px;
        background: var(--bg-secondary);
        border-radius: 4px;
    }

    .command-palette-empty,
    .command-palette-hint {
        padding: 20px 16px;
        text-align: center;
        color: var(--fg-muted);
        font-size: 13px;
    }

    .command-palette-section-title {
        padding: 8px 16px 4px;
        font-size: 10px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        color: var(--fg-muted);
    }
`;
class DevToolsDock extends EditorComponent {
  constructor() {
    super(...arguments);
    __privateAdd(this, _DevToolsDock_instances);
    __privateAdd(this, _state2, null);
    __privateAdd(this, _dockEl, null);
    __privateAdd(this, _toolButtons, /* @__PURE__ */ new Map());
    __privateAdd(this, _loggerButton, null);
    __privateAdd(this, _commandPaletteButton, null);
    __privateAdd(this, _minimized, true);
  }
  onConnected() {
    __privateMethod(this, _DevToolsDock_instances, buildDOM_fn9).call(this);
  }
  setState(state) {
    __privateSet(this, _state2, state);
    state.addEventListener("tool:change", () => __privateMethod(this, _DevToolsDock_instances, updateActiveStates_fn).call(this));
    state.addEventListener("sidebar:open", () => __privateMethod(this, _DevToolsDock_instances, expand_fn).call(this));
    state.addEventListener("sidebar:close", () => __privateMethod(this, _DevToolsDock_instances, updateActiveStates_fn).call(this));
    state.addEventListener("logger:open", () => __privateMethod(this, _DevToolsDock_instances, expand_fn).call(this));
    state.addEventListener("logger:close", () => __privateMethod(this, _DevToolsDock_instances, updateLoggerState_fn).call(this));
  }
  refreshTools() {
    __privateMethod(this, _DevToolsDock_instances, render_fn3).call(this);
  }
}
_state2 = new WeakMap();
_dockEl = new WeakMap();
_toolButtons = new WeakMap();
_loggerButton = new WeakMap();
_commandPaletteButton = new WeakMap();
_minimized = new WeakMap();
_DevToolsDock_instances = new WeakSet();
expand_fn = function() {
  if (__privateGet(this, _minimized)) {
    __privateSet(this, _minimized, false);
    __privateMethod(this, _DevToolsDock_instances, render_fn3).call(this);
  } else {
    __privateMethod(this, _DevToolsDock_instances, updateActiveStates_fn).call(this);
    __privateMethod(this, _DevToolsDock_instances, updateLoggerState_fn).call(this);
  }
};
buildDOM_fn9 = function() {
  __privateSet(this, _dockEl, createElement("div", { class: "devtools-dock" }));
  __privateMethod(this, _DevToolsDock_instances, render_fn3).call(this);
  this.shadowRoot.appendChild(__privateGet(this, _dockEl));
};
render_fn3 = function() {
  if (!__privateGet(this, _dockEl)) {
    return;
  }
  __privateGet(this, _dockEl).innerHTML = "";
  __privateGet(this, _toolButtons).clear();
  __privateGet(this, _dockEl).classList.toggle("minimized", __privateGet(this, _minimized));
  if (__privateGet(this, _minimized)) {
    __privateMethod(this, _DevToolsDock_instances, renderMinimized_fn).call(this);
  } else {
    __privateMethod(this, _DevToolsDock_instances, renderExpanded_fn).call(this);
  }
};
renderMinimized_fn = function() {
  const crowBtn = createDockButton(
    "",
    "Open DevTools",
    () => {
      var _a2, _b, _c;
      __privateSet(this, _minimized, false);
      __privateMethod(this, _DevToolsDock_instances, render_fn3).call(this);
      (_a2 = __privateGet(this, _state2)) == null ? void 0 : _a2.toggleTool("explorer");
      if (!((_b = __privateGet(this, _state2)) == null ? void 0 : _b.sidebarOpen)) {
        (_c = __privateGet(this, _state2)) == null ? void 0 : _c.toggleSidebar();
      }
    }
  );
  crowBtn.innerHTML = ICONS.crow;
  __privateGet(this, _dockEl).appendChild(crowBtn);
};
renderExpanded_fn = function() {
  const tools = getSidebarTools();
  for (const Tool of tools) {
    const button = __privateMethod(this, _DevToolsDock_instances, createToolButton_fn).call(this, Tool);
    __privateGet(this, _toolButtons).set(Tool.toolId, button);
    __privateGet(this, _dockEl).appendChild(button);
  }
  if (tools.length > 0) {
    const separator = createElement("div", { class: "dock-separator" });
    __privateGet(this, _dockEl).appendChild(separator);
  }
  __privateSet(this, _loggerButton, createDockButton(
    ICONS.logger,
    "Logger",
    () => {
      var _a2;
      (_a2 = __privateGet(this, _state2)) == null ? void 0 : _a2.toggleLogger();
    }
  ));
  __privateGet(this, _dockEl).appendChild(__privateGet(this, _loggerButton));
  __privateSet(this, _commandPaletteButton, createDockButton(
    ICONS.terminal,
    "Command Palette (Ctrl+K)",
    () => {
      var _a2;
      (_a2 = __privateGet(this, _state2)) == null ? void 0 : _a2.toggleCommandPalette();
    }
  ));
  __privateGet(this, _dockEl).appendChild(__privateGet(this, _commandPaletteButton));
  const docsButton = createDockButton(
    ICONS.book,
    "Open Documentation",
    () => {
      window.open("https://perkycrow.com/doc", "_blank");
    }
  );
  __privateGet(this, _dockEl).appendChild(docsButton);
  const separator2 = createElement("div", { class: "dock-separator" });
  __privateGet(this, _dockEl).appendChild(separator2);
  const collapseBtn = createDockButton(
    ICONS.chevronLeft,
    "Collapse Dock",
    () => {
      var _a2, _b;
      __privateSet(this, _minimized, true);
      __privateMethod(this, _DevToolsDock_instances, render_fn3).call(this);
      if ((_a2 = __privateGet(this, _state2)) == null ? void 0 : _a2.sidebarOpen) {
        __privateGet(this, _state2).closeSidebar();
      }
      if ((_b = __privateGet(this, _state2)) == null ? void 0 : _b.loggerOpen) {
        __privateGet(this, _state2).closeLogger();
      }
    }
  );
  __privateGet(this, _dockEl).appendChild(collapseBtn);
  __privateMethod(this, _DevToolsDock_instances, updateActiveStates_fn).call(this);
  __privateMethod(this, _DevToolsDock_instances, updateLoggerState_fn).call(this);
};
createToolButton_fn = function(Tool) {
  const button = createDockButton(Tool.toolIcon, Tool.toolName, () => {
    var _a2;
    (_a2 = __privateGet(this, _state2)) == null ? void 0 : _a2.toggleTool(Tool.toolId);
  });
  button.dataset.toolId = Tool.toolId;
  return button;
};
updateActiveStates_fn = function() {
  var _a2, _b;
  const activeTool = (_a2 = __privateGet(this, _state2)) == null ? void 0 : _a2.activeTool;
  const sidebarOpen = (_b = __privateGet(this, _state2)) == null ? void 0 : _b.sidebarOpen;
  __privateGet(this, _dockEl).classList.toggle("sidebar-open", sidebarOpen);
  for (const [toolId, button] of __privateGet(this, _toolButtons)) {
    const isActive = sidebarOpen && activeTool === toolId;
    button.classList.toggle("active", isActive);
  }
};
updateLoggerState_fn = function() {
  var _a2;
  if (__privateGet(this, _loggerButton)) {
    __privateGet(this, _loggerButton).classList.toggle("active", (_a2 = __privateGet(this, _state2)) == null ? void 0 : _a2.loggerOpen);
  }
};
__publicField(DevToolsDock, "styles", `
    ${editorBaseStyles}
    ${dockStyles}
    `);
function createDockButton(icon, title, onClick) {
  const button = createElement("button", { class: "dock-button", html: icon, title });
  button.addEventListener("click", onClick);
  return button;
}
customElements.define("devtools-dock", DevToolsDock);
class DevToolsSidebar extends EditorComponent {
  constructor() {
    super(...arguments);
    __privateAdd(this, _DevToolsSidebar_instances);
    __privateAdd(this, _state3, null);
    __privateAdd(this, _sidebarEl2, null);
    __privateAdd(this, _headerEl3, null);
    __privateAdd(this, _titleEl2, null);
    __privateAdd(this, _titleIconEl, null);
    __privateAdd(this, _titleTextEl, null);
    __privateAdd(this, _closeBtn, null);
    __privateAdd(this, _actionsEl2, null);
    __privateAdd(this, _contentEl3, null);
    __privateAdd(this, _currentToolEl, null);
    __privateAdd(this, _currentToolId, null);
  }
  onConnected() {
    __privateMethod(this, _DevToolsSidebar_instances, buildDOM_fn10).call(this);
  }
  setState(state) {
    __privateSet(this, _state3, state);
    state.addEventListener("tool:change", (e) => {
      __privateMethod(this, _DevToolsSidebar_instances, loadTool_fn).call(this, e.detail.toolId);
    });
    state.addEventListener("sidebar:open", () => {
      __privateMethod(this, _DevToolsSidebar_instances, show_fn).call(this);
    });
    state.addEventListener("sidebar:close", () => {
      __privateMethod(this, _DevToolsSidebar_instances, hide_fn).call(this);
    });
    if (state.sidebarOpen && state.activeTool) {
      __privateMethod(this, _DevToolsSidebar_instances, loadTool_fn).call(this, state.activeTool);
      __privateMethod(this, _DevToolsSidebar_instances, show_fn).call(this);
    }
  }
}
_state3 = new WeakMap();
_sidebarEl2 = new WeakMap();
_headerEl3 = new WeakMap();
_titleEl2 = new WeakMap();
_titleIconEl = new WeakMap();
_titleTextEl = new WeakMap();
_closeBtn = new WeakMap();
_actionsEl2 = new WeakMap();
_contentEl3 = new WeakMap();
_currentToolEl = new WeakMap();
_currentToolId = new WeakMap();
_DevToolsSidebar_instances = new WeakSet();
buildDOM_fn10 = function() {
  __privateSet(this, _sidebarEl2, createElement("div", { class: "devtools-sidebar hidden" }));
  __privateSet(this, _headerEl3, __privateMethod(this, _DevToolsSidebar_instances, createHeader_fn4).call(this));
  __privateSet(this, _contentEl3, createSidebarContent());
  __privateGet(this, _sidebarEl2).appendChild(__privateGet(this, _headerEl3));
  __privateGet(this, _sidebarEl2).appendChild(__privateGet(this, _contentEl3));
  this.shadowRoot.appendChild(__privateGet(this, _sidebarEl2));
};
createHeader_fn4 = function() {
  const header = createElement("div", { class: "sidebar-header" });
  __privateSet(this, _titleEl2, createElement("div", { class: "sidebar-title" }));
  __privateSet(this, _titleIconEl, createElement("span", { class: "sidebar-title-icon" }));
  __privateSet(this, _titleTextEl, createElement("span"));
  __privateGet(this, _titleEl2).appendChild(__privateGet(this, _titleIconEl));
  __privateGet(this, _titleEl2).appendChild(__privateGet(this, _titleTextEl));
  __privateSet(this, _actionsEl2, createElement("div", { class: "sidebar-actions" }));
  __privateSet(this, _closeBtn, createElement("button", {
    class: "sidebar-close",
    text: "×",
    attrs: { title: "Close" }
  }));
  __privateGet(this, _closeBtn).addEventListener("click", () => {
    var _a2;
    (_a2 = __privateGet(this, _state3)) == null ? void 0 : _a2.closeSidebar();
  });
  header.appendChild(__privateGet(this, _titleEl2));
  header.appendChild(__privateGet(this, _actionsEl2));
  header.appendChild(__privateGet(this, _closeBtn));
  return header;
};
updateHeaderActions_fn = function() {
  var _a2;
  __privateGet(this, _actionsEl2).innerHTML = "";
  if (!((_a2 = __privateGet(this, _currentToolEl)) == null ? void 0 : _a2.getHeaderActions)) {
    return;
  }
  const actions = __privateGet(this, _currentToolEl).getHeaderActions();
  for (const action of actions) {
    const btn = createElement("button", { class: "sidebar-action-btn" });
    if (action.active) {
      btn.classList.add("active");
    }
    btn.innerHTML = action.icon;
    btn.title = action.title;
    btn.addEventListener("click", () => {
      action.onClick();
      __privateMethod(this, _DevToolsSidebar_instances, updateHeaderActions_fn).call(this);
    });
    __privateGet(this, _actionsEl2).appendChild(btn);
  }
};
loadTool_fn = function(toolId) {
  var _a2, _b, _c, _d;
  if (__privateGet(this, _currentToolId) === toolId && __privateGet(this, _currentToolEl)) {
    return;
  }
  if (__privateGet(this, _currentToolEl)) {
    (_b = (_a2 = __privateGet(this, _currentToolEl)).onDeactivate) == null ? void 0 : _b.call(_a2);
    __privateGet(this, _contentEl3).removeChild(__privateGet(this, _currentToolEl));
    __privateSet(this, _currentToolEl, null);
  }
  const Tool = getTool(toolId);
  if (!Tool) {
    logger.warn(`Tool not found: ${toolId}`);
    return;
  }
  __privateGet(this, _titleIconEl).innerHTML = Tool.toolIcon;
  __privateGet(this, _titleTextEl).textContent = Tool.toolName;
  __privateSet(this, _currentToolEl, new Tool());
  __privateGet(this, _currentToolEl).setState(__privateGet(this, _state3));
  __privateSet(this, _currentToolId, toolId);
  __privateGet(this, _currentToolEl).addEventListener("headeractions:change", () => {
    __privateMethod(this, _DevToolsSidebar_instances, updateHeaderActions_fn).call(this);
  });
  __privateGet(this, _contentEl3).appendChild(__privateGet(this, _currentToolEl));
  (_d = (_c = __privateGet(this, _currentToolEl)).onActivate) == null ? void 0 : _d.call(_c);
  __privateMethod(this, _DevToolsSidebar_instances, updateHeaderActions_fn).call(this);
};
show_fn = function() {
  var _a2;
  (_a2 = __privateGet(this, _sidebarEl2)) == null ? void 0 : _a2.classList.remove("hidden");
};
hide_fn = function() {
  var _a2, _b, _c;
  (_a2 = __privateGet(this, _sidebarEl2)) == null ? void 0 : _a2.classList.add("hidden");
  if (__privateGet(this, _currentToolEl)) {
    (_c = (_b = __privateGet(this, _currentToolEl)).onDeactivate) == null ? void 0 : _c.call(_b);
  }
};
__publicField(DevToolsSidebar, "styles", `
    ${editorHeaderStyles}
    ${editorButtonStyles}
    ${editorScrollbarStyles}
    ${editorBaseStyles}
    ${sidebarStyles}
    `);
function createSidebarContent() {
  return createElement("div", { class: "sidebar-content" });
}
customElements.define("devtools-sidebar", DevToolsSidebar);
const renderers = [];
function registerLogRenderer(renderer) {
  renderers.push(renderer);
}
function getLogRenderer(item) {
  for (const renderer of renderers) {
    if (renderer.match(item)) {
      return renderer;
    }
  }
  return null;
}
function renderLogItem(item) {
  const renderer = getLogRenderer(item);
  if (renderer) {
    return renderer.render(item);
  }
  return null;
}
const MAX_PREVIEW_KEYS = 5;
const MAX_STRING_LENGTH$1 = 50;
function formatString$2(str) {
  const truncated = str.length > MAX_STRING_LENGTH$1 ? str.slice(0, MAX_STRING_LENGTH$1) + "..." : str;
  return `"${truncated}"`;
}
function formatObject$2(obj) {
  var _a2;
  if (Array.isArray(obj)) {
    return `Array(${obj.length})`;
  }
  const name = (_a2 = obj.constructor) == null ? void 0 : _a2.name;
  return name && name !== "Object" ? name : "{...}";
}
function formatValue$1(value) {
  if (value === null) {
    return "null";
  }
  if (value === void 0) {
    return "undefined";
  }
  if (typeof value === "string") {
    return formatString$2(value);
  }
  if (typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }
  if (typeof value === "function") {
    return "f()";
  }
  if (typeof value === "object") {
    return formatObject$2(value);
  }
  return String(value);
}
function createPreview$1(obj) {
  const keys = Object.keys(obj);
  const previewKeys = keys.slice(0, MAX_PREVIEW_KEYS);
  const parts = previewKeys.map((key) => `${key}: ${formatValue$1(obj[key])}`);
  if (keys.length > MAX_PREVIEW_KEYS) {
    parts.push("...");
  }
  return `{${parts.join(", ")}}`;
}
function renderExpandedContent$2(obj, container) {
  const keys = Object.keys(obj);
  const methods = [];
  const properties = [];
  for (const key of keys) {
    if (typeof obj[key] === "function") {
      methods.push(key);
    } else {
      properties.push(key);
    }
  }
  for (const key of properties) {
    const row = createElement("div", { class: "log-object-row" });
    const keyEl = createElement("span", { class: "log-object-key", text: key });
    const separator = createElement("span", { class: "log-object-separator", text: ": " });
    const valueEl = createElement("span", { class: "log-object-value" });
    const customRender = renderLogItem(obj[key]);
    if (customRender) {
      valueEl.appendChild(customRender);
    } else {
      valueEl.textContent = formatValue$1(obj[key]);
    }
    row.appendChild(keyEl);
    row.appendChild(separator);
    row.appendChild(valueEl);
    container.appendChild(row);
  }
  if (methods.length > 0) {
    const row = createElement("div", { class: "log-object-row log-object-methods-row" });
    const keyEl = createElement("span", { class: "log-object-key", text: "methods" });
    const separator = createElement("span", { class: "log-object-separator", text: ": " });
    const valueEl = createElement("span", { class: "log-object-value log-object-methods" });
    for (let i = 0; i < methods.length; i++) {
      const methodSpan = createElement("span", { class: "log-object-method-name", text: methods[i] });
      valueEl.appendChild(methodSpan);
      if (i < methods.length - 1) {
        valueEl.appendChild(document.createTextNode(", "));
      }
    }
    row.appendChild(keyEl);
    row.appendChild(separator);
    row.appendChild(valueEl);
    container.appendChild(row);
  }
}
const objectLogRenderer = {
  match(item) {
    var _a2;
    return item !== null && typeof item === "object" && !Array.isArray(item) && ((_a2 = item.constructor) == null ? void 0 : _a2.name) === "Object";
  },
  render(obj) {
    const container = document.createElement("span");
    container.className = "log-object";
    const toggle = document.createElement("span");
    toggle.className = "log-object-toggle";
    toggle.textContent = "▶";
    const preview = document.createElement("span");
    preview.className = "log-object-preview";
    preview.textContent = createPreview$1(obj);
    const expanded = document.createElement("div");
    expanded.className = "log-object-expanded";
    expanded.style.display = "none";
    let isExpanded = false;
    let hasRenderedContent = false;
    const header = document.createElement("span");
    header.className = "log-object-header";
    header.style.cursor = "pointer";
    header.appendChild(toggle);
    header.appendChild(preview);
    header.addEventListener("click", () => {
      isExpanded = !isExpanded;
      if (isExpanded && !hasRenderedContent) {
        renderExpandedContent$2(obj, expanded);
        hasRenderedContent = true;
      }
      toggle.textContent = isExpanded ? "▼" : "▶";
      expanded.style.display = isExpanded ? "block" : "none";
      preview.style.display = isExpanded ? "none" : "inline";
    });
    container.appendChild(header);
    container.appendChild(expanded);
    return container;
  }
};
registerLogRenderer(objectLogRenderer);
const MAX_PREVIEW_ITEMS = 5;
function formatString$1(str) {
  const truncated = str.length > 20 ? str.slice(0, 20) + "..." : str;
  return `"${truncated}"`;
}
function formatObject$1(obj) {
  var _a2;
  if (Array.isArray(obj)) {
    return `Array(${obj.length})`;
  }
  return ((_a2 = obj.constructor) == null ? void 0 : _a2.name) || "Object";
}
function getItemLabel(item) {
  if (item === null) {
    return "null";
  }
  if (item === void 0) {
    return "undefined";
  }
  if (typeof item === "string") {
    return formatString$1(item);
  }
  if (typeof item === "number" || typeof item === "boolean") {
    return String(item);
  }
  if (typeof item === "object") {
    return formatObject$1(item);
  }
  return String(item);
}
function createPreview(arr) {
  const previewItems = arr.slice(0, MAX_PREVIEW_ITEMS);
  const parts = previewItems.map(getItemLabel);
  if (arr.length > MAX_PREVIEW_ITEMS) {
    parts.push(`... +${arr.length - MAX_PREVIEW_ITEMS} more`);
  }
  return `(${arr.length}) [${parts.join(", ")}]`;
}
function renderExpandedContent$1(arr, container) {
  for (let i = 0; i < arr.length; i++) {
    const row = createElement("div", { class: "log-array-row" });
    const indexEl = createElement("span", { class: "log-array-index", text: i });
    const separator = createElement("span", { class: "log-array-separator", text: ": " });
    const valueEl = createElement("span", { class: "log-array-value" });
    const customRender = renderLogItem(arr[i]);
    if (customRender) {
      valueEl.appendChild(customRender);
    } else {
      valueEl.textContent = getItemLabel(arr[i]);
    }
    row.appendChild(indexEl);
    row.appendChild(separator);
    row.appendChild(valueEl);
    container.appendChild(row);
  }
  const lengthRow = createElement("div", { class: "log-array-row log-array-length", text: `length: ${arr.length}` });
  container.appendChild(lengthRow);
}
const arrayLogRenderer = {
  match(item) {
    return Array.isArray(item);
  },
  render(arr) {
    const container = document.createElement("span");
    container.className = "log-array";
    const toggle = document.createElement("span");
    toggle.className = "log-array-toggle";
    toggle.textContent = "▶";
    const preview = document.createElement("span");
    preview.className = "log-array-preview";
    preview.textContent = createPreview(arr);
    const expanded = document.createElement("div");
    expanded.className = "log-array-expanded";
    expanded.style.display = "none";
    let isExpanded = false;
    let hasRenderedContent = false;
    const header = document.createElement("span");
    header.className = "log-array-header";
    header.style.cursor = "pointer";
    header.appendChild(toggle);
    header.appendChild(preview);
    header.addEventListener("click", () => {
      isExpanded = !isExpanded;
      if (isExpanded && !hasRenderedContent) {
        renderExpandedContent$1(arr, expanded);
        hasRenderedContent = true;
      }
      toggle.textContent = isExpanded ? "▼" : "▶";
      expanded.style.display = isExpanded ? "block" : "none";
      preview.style.display = isExpanded ? "none" : "inline";
    });
    container.appendChild(header);
    container.appendChild(expanded);
    return container;
  }
};
registerLogRenderer(arrayLogRenderer);
const IGNORED_KEYS = /* @__PURE__ */ new Set([
  "options",
  "host",
  "children",
  "childrenRegistry",
  "tags",
  "started",
  "disposed",
  "installed",
  "running"
]);
function createCompactLabel(module, container) {
  var _a2;
  const name = module.$name || ((_a2 = module.constructor) == null ? void 0 : _a2.name) || "Module";
  const category = module.$category || "";
  const id = module.$id || "";
  const nameSpan = createElement("span", {
    class: "log-module-name",
    text: name === id ? name : `${name} #${id}`
  });
  container.appendChild(nameSpan);
  if (category && category !== name && category !== id) {
    const categorySpan = createElement("span", {
      class: "log-module-category",
      text: ` (${category})`
    });
    container.appendChild(categorySpan);
  }
}
function getPropertyKeys(module) {
  const keys = [];
  for (const key of Object.keys(module)) {
    if (!IGNORED_KEYS.has(key) && !key.startsWith("_")) {
      keys.push(key);
    }
  }
  return keys;
}
const MAX_STRING_LENGTH = 30;
function formatString(str) {
  const truncated = str.length > MAX_STRING_LENGTH ? str.slice(0, MAX_STRING_LENGTH) + "..." : str;
  return `"${truncated}"`;
}
function formatObject(obj) {
  var _a2;
  if (Array.isArray(obj)) {
    return `Array(${obj.length})`;
  }
  return ((_a2 = obj.constructor) == null ? void 0 : _a2.name) || "{...}";
}
function formatValue(value) {
  if (value === null) {
    return "null";
  }
  if (value === void 0) {
    return "undefined";
  }
  if (typeof value === "string") {
    return formatString(value);
  }
  if (typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }
  if (typeof value === "function") {
    return "f()";
  }
  if (typeof value === "object") {
    return formatObject(value);
  }
  return String(value);
}
function createRow(className, keyText, valueContent) {
  const row = createElement("div", { class: className });
  const keyEl = createElement("span", { class: "log-module-key", text: keyText });
  const separator = createElement("span", { class: "log-module-separator", text: ": " });
  const valueEl = createElement("span", { class: "log-module-value" });
  if (typeof valueContent === "string") {
    valueEl.textContent = valueContent;
  } else if (valueContent instanceof Node) {
    valueEl.appendChild(valueContent);
  }
  row.appendChild(keyEl);
  row.appendChild(separator);
  row.appendChild(valueEl);
  return { row, valueEl };
}
function renderMetaSection(module) {
  var _a2, _b;
  const metaSection = createElement("div", { class: "log-module-meta" });
  const metaItems = [
    { label: "$id", value: module.$id },
    { label: "$name", value: module.$name },
    { label: "$category", value: module.$category },
    { label: "$status", value: module.$status },
    { label: "$tags", value: ((_a2 = module.$tags) == null ? void 0 : _a2.join(", ")) || "(none)" },
    { label: "children", value: ((_b = module.children) == null ? void 0 : _b.length) || 0 }
  ];
  for (const { label, value } of metaItems) {
    const { row, valueEl } = createRow("log-module-row log-module-meta-row", label, String(value));
    valueEl.className = "log-module-value log-module-meta-value";
    metaSection.appendChild(row);
  }
  return metaSection;
}
function renderPropsSection(module, properties) {
  const propsSection = createElement("div", { class: "log-module-props" });
  for (const key of properties) {
    const customRender = renderLogItem(module[key]);
    const content = customRender || formatValue(module[key]);
    const { row, valueEl } = createRow("log-module-row", key, content);
    if (!customRender) {
      valueEl.textContent = content;
    }
    propsSection.appendChild(row);
  }
  return propsSection;
}
function renderMethodsSection(methods) {
  const methodsSection = createElement("div", { class: "log-module-methods" });
  const { row, valueEl } = createRow("log-module-row log-module-methods-row", "methods", "");
  for (let i = 0; i < methods.length; i++) {
    const methodSpan = createElement("span", {
      class: "log-module-method-name",
      text: methods[i]
    });
    valueEl.appendChild(methodSpan);
    if (i < methods.length - 1) {
      valueEl.appendChild(document.createTextNode(", "));
    }
  }
  methodsSection.appendChild(row);
  return methodsSection;
}
function separatePropertiesAndMethods(module) {
  const propsKeys = getPropertyKeys(module);
  const methods = [];
  const properties = [];
  for (const key of propsKeys) {
    if (typeof module[key] === "function") {
      methods.push(key);
    } else {
      properties.push(key);
    }
  }
  return { methods, properties };
}
function renderExpandedContent(module, container) {
  container.appendChild(renderMetaSection(module));
  const { methods, properties } = separatePropertiesAndMethods(module);
  if (properties.length > 0) {
    container.appendChild(renderPropsSection(module, properties));
  }
  if (methods.length > 0) {
    container.appendChild(renderMethodsSection(methods));
  }
}
const perkyModuleLogRenderer = {
  match(item) {
    return item !== null && typeof item === "object" && typeof item.$id !== "undefined" && typeof item.$name !== "undefined" && typeof item.$category !== "undefined";
  },
  render(module) {
    const container = document.createElement("span");
    container.className = "log-module";
    const toggle = document.createElement("span");
    toggle.className = "log-module-toggle";
    toggle.textContent = "▶";
    const label = document.createElement("span");
    label.className = "log-module-label";
    createCompactLabel(module, label);
    const expanded = document.createElement("div");
    expanded.className = "log-module-expanded";
    expanded.style.display = "none";
    let isExpanded = false;
    let hasRenderedContent = false;
    const header = document.createElement("span");
    header.className = "log-module-header";
    header.style.cursor = "pointer";
    header.appendChild(toggle);
    header.appendChild(label);
    header.addEventListener("click", () => {
      isExpanded = !isExpanded;
      if (isExpanded && !hasRenderedContent) {
        renderExpandedContent(module, expanded);
        hasRenderedContent = true;
      }
      toggle.textContent = isExpanded ? "▼" : "▶";
      expanded.style.display = isExpanded ? "block" : "none";
    });
    container.appendChild(header);
    container.appendChild(expanded);
    return container;
  }
};
registerLogRenderer(perkyModuleLogRenderer);
function formatNumber(n) {
  if (Number.isInteger(n)) {
    return String(n);
  }
  return n.toFixed(2);
}
const vec2LogRenderer = {
  match(item) {
    return item instanceof Vec2 || (item == null ? void 0 : item.isVector2);
  },
  render(vec) {
    const container = document.createElement("span");
    container.className = "log-vec2";
    const label = document.createElement("span");
    label.className = "log-vec2-label";
    label.textContent = "Vec2";
    const values = document.createElement("span");
    values.className = "log-vec2-values";
    const xEl = document.createElement("span");
    xEl.className = "log-vec2-component";
    xEl.innerHTML = `<span class="log-vec2-key">x</span><span class="log-vec2-value">${formatNumber(vec.x)}</span>`;
    const yEl = document.createElement("span");
    yEl.className = "log-vec2-component";
    yEl.innerHTML = `<span class="log-vec2-key">y</span><span class="log-vec2-value">${formatNumber(vec.y)}</span>`;
    values.appendChild(xEl);
    values.appendChild(yEl);
    container.appendChild(label);
    container.appendChild(values);
    return container;
  }
};
registerLogRenderer(vec2LogRenderer);
class PerkyLogger extends EditorComponent {
  constructor() {
    super(...arguments);
    __privateAdd(this, _PerkyLogger_instances);
    __privateAdd(this, _maxEntries, 50);
    __privateAdd(this, _position, "bottom");
    __privateAdd(this, _timestamp, false);
    __privateAdd(this, _theme, "");
    __privateAdd(this, _entries, []);
    __privateAdd(this, _containerEl6, null);
    __privateAdd(this, _contentEl4, null);
    __privateAdd(this, _controlsEl, null);
    __privateAdd(this, _opacityToggle, null);
    __privateAdd(this, _isPinned, true);
    __privateAdd(this, _onLog, null);
    __privateAdd(this, _onClear, null);
    __privateAdd(this, _onSpacer, null);
    __privateAdd(this, _onTitle, null);
  }
  onConnected() {
    __privateMethod(this, _PerkyLogger_instances, buildDOM_fn11).call(this);
    __privateMethod(this, _PerkyLogger_instances, bindLoggerEvents_fn).call(this);
  }
  onDisconnected() {
    __privateMethod(this, _PerkyLogger_instances, unbindLoggerEvents_fn).call(this);
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) {
      return;
    }
    __privateMethod(this, _PerkyLogger_instances, handleAttributeChange_fn).call(this, name, newValue);
  }
  get maxEntries() {
    return __privateGet(this, _maxEntries);
  }
  set maxEntries(value) {
    __privateSet(this, _maxEntries, value);
    this.setAttribute("max-entries", value);
  }
  get position() {
    return __privateGet(this, _position);
  }
  set position(value) {
    __privateSet(this, _position, value);
    this.setAttribute("position", value);
    __privateMethod(this, _PerkyLogger_instances, updateClasses_fn).call(this);
  }
  get timestamp() {
    return __privateGet(this, _timestamp);
  }
  set timestamp(value) {
    __privateSet(this, _timestamp, value);
    if (value) {
      this.setAttribute("timestamp", "");
    } else {
      this.removeAttribute("timestamp");
    }
  }
  get theme() {
    return __privateGet(this, _theme);
  }
  set theme(value) {
    __privateSet(this, _theme, value);
    if (value) {
      this.setAttribute("theme", value);
    } else {
      this.removeAttribute("theme");
    }
  }
  get entries() {
    return __privateGet(this, _entries);
  }
  log(message, type = "info", format = "text", timestamp = null) {
    const entry = createElement("div", { class: `logger-entry log-${type}` });
    const indicator = createElement("span", { class: "logger-indicator" });
    entry.appendChild(indicator);
    const messageElement = createElement("span", { class: "logger-message" });
    processMessage(messageElement, message, format);
    entry.appendChild(messageElement);
    const time = timestamp ? new Date(timestamp) : /* @__PURE__ */ new Date();
    const timestampEl = createElement("span", {
      class: "logger-timestamp",
      text: time.toLocaleTimeString()
    });
    entry.appendChild(timestampEl);
    const copyBtn = createElement("button", {
      class: "logger-copy-btn",
      html: COPY_ICON,
      title: "Copy log entry"
    });
    copyBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const text = extractFormattedText(messageElement);
      copyToClipboard(`[${timestampEl.textContent}] ${text}`);
    });
    entry.appendChild(copyBtn);
    __privateGet(this, _entries).push(entry);
    while (__privateGet(this, _entries).length > __privateGet(this, _maxEntries)) {
      const removed = __privateGet(this, _entries).shift();
      if (removed.parentNode) {
        removed.parentNode.removeChild(removed);
      }
    }
    if (__privateGet(this, _contentEl4)) {
      __privateGet(this, _contentEl4).appendChild(entry);
      __privateGet(this, _contentEl4).scrollTop = __privateGet(this, _contentEl4).scrollHeight;
    }
    __privateMethod(this, _PerkyLogger_instances, updateControlsVisibility_fn).call(this);
    return entry;
  }
  info(...messages) {
    return this.log(formatMessage(...messages), "info");
  }
  notice(...messages) {
    return this.log(formatMessage(...messages), "notice");
  }
  warn(...messages) {
    return this.log(formatMessage(...messages), "warn");
  }
  error(...messages) {
    return this.log(formatMessage(...messages), "error");
  }
  success(...messages) {
    return this.log(formatMessage(...messages), "success");
  }
  spacer() {
    const entry = createElement("div", { class: "logger-entry logger-spacer" });
    __privateGet(this, _entries).push(entry);
    if (__privateGet(this, _contentEl4)) {
      __privateGet(this, _contentEl4).appendChild(entry);
    }
  }
  title(title) {
    const entry = createElement("div", {
      class: "logger-entry logger-title-entry",
      text: title
    });
    __privateGet(this, _entries).push(entry);
    if (__privateGet(this, _contentEl4)) {
      __privateGet(this, _contentEl4).appendChild(entry);
    }
  }
  clear() {
    __privateSet(this, _entries, []);
    if (__privateGet(this, _contentEl4)) {
      __privateGet(this, _contentEl4).innerHTML = "";
    }
    __privateMethod(this, _PerkyLogger_instances, updateControlsVisibility_fn).call(this);
  }
}
_maxEntries = new WeakMap();
_position = new WeakMap();
_timestamp = new WeakMap();
_theme = new WeakMap();
_entries = new WeakMap();
_containerEl6 = new WeakMap();
_contentEl4 = new WeakMap();
_controlsEl = new WeakMap();
_opacityToggle = new WeakMap();
_isPinned = new WeakMap();
_onLog = new WeakMap();
_onClear = new WeakMap();
_onSpacer = new WeakMap();
_onTitle = new WeakMap();
_PerkyLogger_instances = new WeakSet();
handleMaxEntries_fn = function(value) {
  __privateSet(this, _maxEntries, parseInt(value, 10) || 50);
};
handlePosition_fn = function(value) {
  __privateSet(this, _position, value || "bottom");
  __privateMethod(this, _PerkyLogger_instances, updateClasses_fn).call(this);
};
handleTimestamp_fn = function(value) {
  __privateSet(this, _timestamp, value !== null && value !== "false");
};
handleTheme_fn = function(value) {
  __privateSet(this, _theme, value || "");
};
handleAttributeChange_fn = function(name, value) {
  var _a2;
  const handlers = {
    "max-entries": __privateMethod(this, _PerkyLogger_instances, handleMaxEntries_fn),
    position: __privateMethod(this, _PerkyLogger_instances, handlePosition_fn),
    timestamp: __privateMethod(this, _PerkyLogger_instances, handleTimestamp_fn),
    theme: __privateMethod(this, _PerkyLogger_instances, handleTheme_fn)
  };
  (_a2 = handlers[name]) == null ? void 0 : _a2.call(this, value);
};
buildDOM_fn11 = function() {
  const wrapper = createElement("div", { class: "logger-wrapper" });
  __privateSet(this, _controlsEl, createElement("div", { class: "logger-controls" }));
  const clearBtn = createElement("button", {
    class: "logger-btn",
    html: CLEAR_ICON,
    title: "Clear logs"
  });
  clearBtn.addEventListener("click", () => this.clear());
  __privateGet(this, _controlsEl).appendChild(clearBtn);
  const copyAllBtn = createElement("button", {
    class: "logger-btn",
    html: COPY_ICON,
    title: "Copy all logs"
  });
  copyAllBtn.addEventListener("click", () => __privateMethod(this, _PerkyLogger_instances, copyAllLogs_fn).call(this));
  __privateGet(this, _controlsEl).appendChild(copyAllBtn);
  __privateSet(this, _opacityToggle, createElement("button", {
    class: "logger-btn pinned",
    html: EYE_ICON,
    title: "Toggle opacity"
  }));
  __privateGet(this, _opacityToggle).addEventListener("click", () => __privateMethod(this, _PerkyLogger_instances, togglePin_fn).call(this));
  __privateGet(this, _controlsEl).appendChild(__privateGet(this, _opacityToggle));
  wrapper.appendChild(__privateGet(this, _controlsEl));
  __privateSet(this, _containerEl6, document.createElement("div"));
  __privateMethod(this, _PerkyLogger_instances, updateClasses_fn).call(this);
  __privateSet(this, _contentEl4, createLoggerContent());
  __privateGet(this, _containerEl6).appendChild(__privateGet(this, _contentEl4));
  wrapper.appendChild(__privateGet(this, _containerEl6));
  this.shadowRoot.appendChild(wrapper);
};
togglePin_fn = function() {
  __privateSet(this, _isPinned, !__privateGet(this, _isPinned));
  __privateGet(this, _opacityToggle).classList.toggle("pinned", __privateGet(this, _isPinned));
  __privateGet(this, _containerEl6).classList.toggle("logger-faded", !__privateGet(this, _isPinned));
};
copyAllLogs_fn = function() {
  const allText = __privateGet(this, _entries).map((entry) => {
    if (entry.classList.contains("logger-spacer")) {
      return "---";
    }
    if (entry.classList.contains("logger-title-entry")) {
      return `=== ${entry.textContent} ===`;
    }
    const message = entry.querySelector(".logger-message");
    const timestamp = entry.querySelector(".logger-timestamp");
    if (message && timestamp) {
      const formattedText = extractFormattedText(message);
      return `[${timestamp.textContent}] ${formattedText}`;
    }
    return "";
  }).filter((text) => text).join("\n\n");
  copyToClipboard(allText);
};
updateControlsVisibility_fn = function() {
  if (!__privateGet(this, _controlsEl)) {
    return;
  }
  const hasEntries = __privateGet(this, _entries).length > 0;
  __privateGet(this, _controlsEl).classList.toggle("has-entries", hasEntries);
};
bindLoggerEvents_fn = function() {
  __privateMethod(this, _PerkyLogger_instances, replayHistory_fn).call(this);
  __privateSet(this, _onLog, ({ type, items, timestamp }) => __privateMethod(this, _PerkyLogger_instances, handleLog_fn).call(this, type, items, timestamp));
  __privateSet(this, _onClear, () => this.clear());
  __privateSet(this, _onSpacer, () => this.spacer());
  __privateSet(this, _onTitle, ({ title }) => this.title(title));
  logger.on("log", __privateGet(this, _onLog));
  logger.on("clear", __privateGet(this, _onClear));
  logger.on("spacer", __privateGet(this, _onSpacer));
  logger.on("title", __privateGet(this, _onTitle));
};
replayHistory_fn = function() {
  for (const entry of logger.history) {
    __privateMethod(this, _PerkyLogger_instances, replayEntry_fn).call(this, entry);
  }
  __privateMethod(this, _PerkyLogger_instances, scrollToBottom_fn).call(this);
};
replayEntry_fn = function(entry) {
  var _a2;
  const handlers = {
    log: () => __privateMethod(this, _PerkyLogger_instances, handleLog_fn).call(this, entry.type, entry.items, entry.timestamp),
    clear: () => this.clear(),
    spacer: () => this.spacer(),
    title: () => this.title(entry.title)
  };
  (_a2 = handlers[entry.event]) == null ? void 0 : _a2.call(handlers);
};
unbindLoggerEvents_fn = function() {
  logger.off("log", __privateGet(this, _onLog));
  logger.off("clear", __privateGet(this, _onClear));
  logger.off("spacer", __privateGet(this, _onSpacer));
  logger.off("title", __privateGet(this, _onTitle));
};
handleLog_fn = function(type, items, timestamp) {
  const fragment = document.createDocumentFragment();
  items.forEach((item, index) => {
    if (index > 0) {
      fragment.appendChild(document.createTextNode(" "));
    }
    const rendered = renderLogItem(item);
    if (rendered) {
      fragment.appendChild(rendered);
    } else if (typeof item === "object" && item !== null) {
      fragment.appendChild(document.createTextNode(JSON.stringify(item)));
    } else {
      fragment.appendChild(document.createTextNode(String(item)));
    }
  });
  this.log(fragment, type, "element", timestamp);
};
updateClasses_fn = function() {
  if (!__privateGet(this, _containerEl6)) {
    return;
  }
  __privateGet(this, _containerEl6).className = `logger logger-${__privateGet(this, _position)}`;
};
scrollToBottom_fn = function() {
  if (__privateGet(this, _contentEl4)) {
    __privateGet(this, _contentEl4).scrollTop = __privateGet(this, _contentEl4).scrollHeight;
  }
};
__publicField(PerkyLogger, "observedAttributes", ["max-entries", "position", "timestamp", "theme"]);
__publicField(PerkyLogger, "styles", `
    ${editorScrollbarStyles}
    ${editorBaseStyles}

    :host {
        display: block;
        font-family: var(--font-mono);
        font-size: 12px;
        --logger-width: calc(100% - 20px);
        --logger-margin: 0 10px 10px;
        --logger-padding: 0;
        --logger-border: 1px solid var(--border);
        --logger-border-radius: 6px;
        --logger-bg: var(--bg-primary);
    }

    .logger-wrapper {
        width: var(--logger-width);
        margin: var(--logger-margin);
        position: relative;
    }

    .logger-controls {
        display: flex;
        gap: 2px;
        background: var(--logger-bg);
        padding: 4px 6px;
        border: var(--logger-border);
        border-bottom: none;
        border-radius: var(--logger-border-radius) var(--logger-border-radius) 0 0;
        width: fit-content;
        margin-left: auto;
        margin-right: 10px;
        box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
        opacity: 0;
        transition: opacity 0.2s ease;
        pointer-events: none;
    }

    .logger-wrapper:hover .logger-controls {
        opacity: 1;
        pointer-events: auto;
    }

    .logger {
        border-radius: var(--logger-border-radius);
        overflow: hidden;
        z-index: 100;
        position: relative;
        background: var(--logger-bg);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
        border: var(--logger-border);
        color: var(--fg-primary);
        padding: var(--logger-padding);
        transition: opacity 0.2s ease;
    }

    .logger-faded {
        opacity: 0.4;
    }

    .logger-faded:hover {
        opacity: 1;
    }

    .logger-btn {
        width: 20px;
        height: 20px;
        padding: 3px;
        background: transparent;
        border: none;
        cursor: pointer;
        color: var(--fg-muted);
        opacity: 0.5;
        transition: opacity 0.15s, color 0.15s;
    }

    .logger-btn:hover {
        opacity: 1;
    }

    .logger-btn.pinned {
        color: var(--accent);
        opacity: 0.8;
    }

    .logger-btn.pinned:hover {
        opacity: 1;
    }

    .logger-btn svg {
        width: 100%;
        height: 100%;
    }

    .logger-content {
        max-height: min(250px, 25vh);
        overflow-y: auto;
    }

    .logger-entry {
        padding: 3px 12px;
        display: flex;
        align-items: flex-start;
        gap: 8px;
        font-size: 10px;
        line-height: 1.4;
    }

    .logger-indicator {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        flex-shrink: 0;
        background: var(--fg-muted);
        opacity: 0.5;
        position: relative;
        top: 0.45em;
    }

    .log-info .logger-indicator {
        background: var(--fg-muted);
        opacity: 0.5;
    }

    .log-notice .logger-indicator {
        background: var(--fg-muted);
        opacity: 0.3;
    }

    .log-warn .logger-indicator {
        background: var(--status-warning);
        opacity: 1;
    }

    .log-error .logger-indicator {
        background: var(--status-error);
        opacity: 1;
        box-shadow: 0 0 4px var(--status-error);
    }

    .log-success .logger-indicator {
        background: var(--status-success);
        opacity: 1;
    }

    .logger-timestamp {
        color: var(--fg-muted);
        font-size: 10px;
        flex-shrink: 0;
        opacity: 0;
        transition: opacity 0.15s;
        margin-top: 1px;
    }

    .logger-entry:hover .logger-timestamp {
        opacity: 1;
    }

    .logger-copy-btn {
        width: 14px;
        height: 14px;
        padding: 2px;
        background: transparent;
        border: none;
        cursor: pointer;
        color: var(--fg-muted);
        opacity: 0;
        transition: opacity 0.15s, color 0.15s;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .logger-copy-btn svg {
        width: 100%;
        height: 100%;
    }

    .logger-entry:hover .logger-copy-btn {
        opacity: 0.5;
    }

    .logger-copy-btn:hover {
        opacity: 1 !important;
        color: var(--accent);
    }

    .logger-message {
        flex-grow: 1;
        word-break: break-word;
        color: var(--fg-secondary);
    }

    .log-error .logger-message {
        color: var(--fg-primary);
    }

    .logger-spacer {
        height: 1px;
        background: var(--border);
        margin: 4px 12px;
        padding: 0;
        gap: 0;
    }

    .logger-title-entry {
        padding: 6px 12px 2px;
        font-size: 9px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        color: var(--fg-muted);
    }


    .log-vec2 {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        background: var(--bg-hover);
        padding: 2px 8px;
        border-radius: 4px;
        font-size: 10px;
    }

    .log-vec2-label {
        color: var(--fg-muted);
        font-weight: 500;
    }

    .log-vec2-values {
        display: inline-flex;
        gap: 8px;
    }

    .log-vec2-component {
        display: inline-flex;
        gap: 4px;
    }

    .log-vec2-key {
        color: var(--fg-muted);
    }

    .log-vec2-value {
        color: var(--accent);
    }


    .log-object,
    .log-array,
    .log-module {
        display: inline-block;
        vertical-align: top;
    }

    .log-object-header,
    .log-array-header,
    .log-module-header {
        display: inline-flex;
        align-items: center;
        gap: 4px;
    }

    .log-object-toggle,
    .log-array-toggle,
    .log-module-toggle {
        color: var(--fg-muted);
        font-size: 8px;
        width: 10px;
        user-select: none;
    }

    .log-object-preview,
    .log-array-preview {
        color: var(--fg-secondary);
    }

    .log-object-expanded,
    .log-array-expanded,
    .log-module-expanded {
        margin-left: 14px;
        padding: 4px 0;
        border-left: 1px solid var(--border);
        padding-left: 8px;
    }

    .log-object-row,
    .log-array-row,
    .log-module-row {
        display: flex;
        gap: 4px;
        padding: 1px 0;
    }

    .log-object-key,
    .log-module-key {
        color: var(--accent);
    }

    .log-array-index {
        color: var(--fg-muted);
        min-width: 20px;
    }

    .log-object-separator,
    .log-array-separator,
    .log-module-separator {
        color: var(--fg-muted);
    }

    .log-object-value,
    .log-array-value,
    .log-module-value {
        color: var(--fg-secondary);
    }

    .log-array-length {
        color: var(--fg-muted);
        font-style: italic;
    }


    .log-module-label {
        color: var(--fg-primary);
        background: var(--bg-hover);
        padding: 2px 8px;
        border-radius: 4px;
    }

    .log-module-category {
        color: var(--fg-muted);
        font-size: 0.9em;
    }

    .log-module-meta {
        border-bottom: 1px solid var(--border);
        padding-bottom: 4px;
        margin-bottom: 4px;
    }

    .log-module-meta-row .log-module-key {
        color: var(--fg-muted);
    }

    .log-module-meta-value {
        color: var(--fg-secondary);
    }

    .log-object-methods-row,
    .log-module-methods-row {
        flex-wrap: wrap;
    }

    .log-object-method-name,
    .log-module-method-name {
        white-space: nowrap;
    }

    @media (max-width: 1024px) {
        .logger-content {
            max-height: 150px;
        }

        .logger-controls.has-entries {
            opacity: 1;
            pointer-events: auto;
        }
    }
    `);
function createLoggerContent() {
  return createElement("div", { class: "logger-content" });
}
function processMessage(messageElement, message, format) {
  if (format === "text") {
    messageElement.textContent = message;
  } else if (format === "html") {
    messageElement.innerHTML = message;
  } else if (format === "element") {
    messageElement.appendChild(message);
  }
}
function formatMessage(...messages) {
  return messages.map((m) => typeof m === "object" ? JSON.stringify(m, null, 2) : m).join(" ");
}
function extractFormattedText(element) {
  const rows = element.querySelectorAll(".log-object-row, .log-array-row, .log-module-row, .log-module-meta-row");
  if (rows.length === 0) {
    return element.textContent.trim();
  }
  const getRowDepth = (row) => {
    let depth = 0;
    let parent = row.parentElement;
    while (parent && parent !== row.closest(".logger-message")) {
      if (parent.classList.contains("log-object-expanded") || parent.classList.contains("log-array-expanded") || parent.classList.contains("log-module-expanded")) {
        depth++;
      }
      parent = parent.parentElement;
    }
    return depth;
  };
  const lines = Array.from(rows).map((row) => {
    const depth = getRowDepth(row);
    const indent = "  ".repeat(depth);
    return indent + row.textContent.trim();
  });
  return lines.join("\n");
}
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).catch((err) => {
    logger.error("Failed to copy to clipboard:", err);
  });
}
const EYE_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>';
const CLEAR_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>';
const COPY_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>';
customElements.define("perky-logger", PerkyLogger);
class PerkyDevTools extends EditorComponent {
  constructor() {
    super(...arguments);
    __privateAdd(this, _PerkyDevTools_instances);
    __privateAdd(this, _state4, new DevToolsState());
    __privateAdd(this, _dockEl2, null);
    __privateAdd(this, _sidebarEl3, null);
    __privateAdd(this, _loggerEl, null);
    __privateAdd(this, _commandPaletteEl, null);
    __privateAdd(this, _keyboardHandler, null);
  }
  get state() {
    return __privateGet(this, _state4);
  }
  get logger() {
    return __privateGet(this, _loggerEl);
  }
  onConnected() {
    __privateMethod(this, _PerkyDevTools_instances, buildDOM_fn12).call(this);
    __privateMethod(this, _PerkyDevTools_instances, setupKeyboard_fn).call(this);
  }
  onDisconnected() {
    __privateMethod(this, _PerkyDevTools_instances, cleanupKeyboard_fn).call(this);
  }
  setModule(module) {
    __privateGet(this, _state4).setModule(module);
  }
  setAppManager(appManager) {
    __privateGet(this, _state4).setAppManager(appManager);
  }
  setToolManager(toolManager) {
    __privateGet(this, _state4).setToolManager(toolManager);
  }
  openTool(toolId) {
    __privateGet(this, _state4).openTool(toolId);
  }
  closeSidebar() {
    __privateGet(this, _state4).closeSidebar();
  }
  toggleLogger() {
    __privateGet(this, _state4).toggleLogger();
  }
  toggleCommandPalette() {
    __privateGet(this, _state4).toggleCommandPalette();
  }
  refreshTools() {
    var _a2;
    (_a2 = __privateGet(this, _dockEl2)) == null ? void 0 : _a2.refreshTools();
  }
}
_state4 = new WeakMap();
_dockEl2 = new WeakMap();
_sidebarEl3 = new WeakMap();
_loggerEl = new WeakMap();
_commandPaletteEl = new WeakMap();
_keyboardHandler = new WeakMap();
_PerkyDevTools_instances = new WeakSet();
buildDOM_fn12 = function() {
  __privateSet(this, _dockEl2, document.createElement("devtools-dock"));
  __privateGet(this, _dockEl2).setState(__privateGet(this, _state4));
  __privateSet(this, _sidebarEl3, document.createElement("devtools-sidebar"));
  __privateGet(this, _sidebarEl3).setState(__privateGet(this, _state4));
  __privateSet(this, _loggerEl, document.createElement("perky-logger"));
  __privateGet(this, _loggerEl).classList.add("devtools-logger", "hidden");
  __privateGet(this, _state4).addEventListener("logger:open", () => {
    __privateGet(this, _loggerEl).classList.remove("hidden");
  });
  __privateGet(this, _state4).addEventListener("logger:close", () => {
    __privateGet(this, _loggerEl).classList.add("hidden");
  });
  __privateGet(this, _state4).addEventListener("sidebar:open", () => {
    __privateGet(this, _loggerEl).classList.add("sidebar-open");
  });
  __privateGet(this, _state4).addEventListener("sidebar:close", () => {
    __privateGet(this, _loggerEl).classList.remove("sidebar-open");
  });
  if (__privateGet(this, _state4).sidebarOpen) {
    __privateGet(this, _loggerEl).classList.add("sidebar-open");
  }
  __privateGet(this, _state4).addEventListener("commandpalette:open", () => {
    __privateMethod(this, _PerkyDevTools_instances, showCommandPalette_fn).call(this);
  });
  __privateGet(this, _state4).addEventListener("commandpalette:close", () => {
    __privateMethod(this, _PerkyDevTools_instances, hideCommandPalette_fn).call(this);
  });
  this.shadowRoot.appendChild(__privateGet(this, _dockEl2));
  this.shadowRoot.appendChild(__privateGet(this, _sidebarEl3));
  this.shadowRoot.appendChild(__privateGet(this, _loggerEl));
};
setupKeyboard_fn = function() {
  __privateSet(this, _keyboardHandler, (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      __privateGet(this, _state4).toggleCommandPalette();
    }
    if (e.key === "Escape" && __privateGet(this, _state4).commandPaletteOpen) {
      e.preventDefault();
      __privateGet(this, _state4).closeCommandPalette();
    }
  });
  document.addEventListener("keydown", __privateGet(this, _keyboardHandler));
};
cleanupKeyboard_fn = function() {
  if (__privateGet(this, _keyboardHandler)) {
    document.removeEventListener("keydown", __privateGet(this, _keyboardHandler));
    __privateSet(this, _keyboardHandler, null);
  }
};
showCommandPalette_fn = async function() {
  if (!__privateGet(this, _commandPaletteEl)) {
    const { default: DevToolsCommandPalette } = await __vitePreload(async () => {
      const { default: DevToolsCommandPalette2 } = await import("./devtools_command_palette-D9JFsQ1l.js");
      return { default: DevToolsCommandPalette2 };
    }, true ? __vite__mapDeps([0,1,2,3,4]) : void 0, import.meta.url);
    __privateSet(this, _commandPaletteEl, new DevToolsCommandPalette());
    __privateGet(this, _commandPaletteEl).setState(__privateGet(this, _state4));
    this.shadowRoot.appendChild(__privateGet(this, _commandPaletteEl));
  }
  __privateGet(this, _commandPaletteEl).show();
};
hideCommandPalette_fn = function() {
  var _a2;
  (_a2 = __privateGet(this, _commandPaletteEl)) == null ? void 0 : _a2.hide();
};
__publicField(PerkyDevTools, "styles", `
    :host {
        display: contents;
    }

    .devtools-logger {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 9997;
        transition: right 0.2s ease;
    }

    .devtools-logger.sidebar-open {
        right: 330px;
    }

    .devtools-logger.hidden {
        display: none;
    }
    `);
customElements.define("perky-devtools", PerkyDevTools);
class ToolWindow extends EditorComponent {
  constructor() {
    super(...arguments);
    __privateAdd(this, _ToolWindow_instances);
    __privateAdd(this, _headerEl4, null);
    __privateAdd(this, _contentEl5, null);
    __privateAdd(this, _isDragging, false);
    __privateAdd(this, _isResizing, false);
    __privateAdd(this, _dragOffset, { x: 0, y: 0 });
    __privateAdd(this, _x2, 20);
    __privateAdd(this, _y2, 20);
    __privateAdd(this, _width2, 450);
    __privateAdd(this, _height, 350);
    __privateAdd(this, _minWidth, 200);
    __privateAdd(this, _minHeight, 150);
    __privateAdd(this, _resizable, true);
    __privateAdd(this, _onPointerMove, null);
    __privateAdd(this, _onPointerUp, null);
    __privateAdd(this, _title, "Tool");
    __privateAdd(this, _icon, "");
  }
  onConnected() {
    __privateMethod(this, _ToolWindow_instances, buildDOM_fn13).call(this);
    __privateMethod(this, _ToolWindow_instances, setupDrag_fn).call(this);
    __privateMethod(this, _ToolWindow_instances, setupResize_fn).call(this);
    __privateMethod(this, _ToolWindow_instances, applyPosition_fn).call(this);
  }
  onDisconnected() {
    __privateMethod(this, _ToolWindow_instances, cleanupWindowListeners_fn).call(this);
  }
  setResizable(resizable) {
    __privateSet(this, _resizable, resizable);
    const handle = this.shadowRoot.querySelector(".tool-window-resize");
    if (handle) {
      handle.style.display = resizable ? "block" : "none";
    }
  }
  bringToFront() {
    this.dispatchEvent(new CustomEvent("focus", { bubbles: true }));
  }
  close() {
    this.dispatchEvent(new CustomEvent("close", { bubbles: true }));
    this.remove();
  }
  setTitle(title) {
    __privateSet(this, _title, title);
    const titleEl = this.shadowRoot.querySelector(".tool-window-title");
    if (titleEl) {
      titleEl.textContent = title;
    }
  }
  setIcon(iconSvg) {
    __privateSet(this, _icon, iconSvg || "");
    const iconEl = this.shadowRoot.querySelector(".tool-window-icon");
    if (iconEl) {
      iconEl.innerHTML = __privateGet(this, _icon);
    }
  }
  setPosition(x, y) {
    __privateSet(this, _x2, x);
    __privateSet(this, _y2, y);
    __privateMethod(this, _ToolWindow_instances, applyPosition_fn).call(this);
  }
  setSize(width, height) {
    __privateSet(this, _width2, width);
    __privateSet(this, _height, height);
    __privateMethod(this, _ToolWindow_instances, applyPosition_fn).call(this);
  }
}
_headerEl4 = new WeakMap();
_contentEl5 = new WeakMap();
_isDragging = new WeakMap();
_isResizing = new WeakMap();
_dragOffset = new WeakMap();
_x2 = new WeakMap();
_y2 = new WeakMap();
_width2 = new WeakMap();
_height = new WeakMap();
_minWidth = new WeakMap();
_minHeight = new WeakMap();
_resizable = new WeakMap();
_onPointerMove = new WeakMap();
_onPointerUp = new WeakMap();
_title = new WeakMap();
_icon = new WeakMap();
_ToolWindow_instances = new WeakSet();
buildDOM_fn13 = function() {
  const container = createElement("div", { class: "tool-window" });
  __privateSet(this, _headerEl4, createElement("div", { class: "tool-window-header" }));
  const iconEl = createElement("span", { class: "tool-window-icon", html: __privateGet(this, _icon) });
  __privateGet(this, _headerEl4).appendChild(iconEl);
  const titleEl = createElement("span", { class: "tool-window-title", text: __privateGet(this, _title) });
  __privateGet(this, _headerEl4).appendChild(titleEl);
  const closeBtn = createElement("button", { class: "tool-window-close", html: "×" });
  closeBtn.addEventListener("click", () => this.close());
  __privateGet(this, _headerEl4).appendChild(closeBtn);
  container.appendChild(__privateGet(this, _headerEl4));
  __privateSet(this, _contentEl5, createElement("div", { class: "tool-window-content" }));
  __privateGet(this, _contentEl5).appendChild(document.createElement("slot"));
  container.appendChild(__privateGet(this, _contentEl5));
  const resizeHandle = createElement("div", { class: "tool-window-resize" });
  container.appendChild(resizeHandle);
  this.shadowRoot.appendChild(container);
};
setupDrag_fn = function() {
  const startDrag = (e) => {
    if (e.target.closest(".tool-window-close")) {
      return;
    }
    __privateSet(this, _isDragging, true);
    __privateSet(this, _dragOffset, {
      x: e.clientX - __privateGet(this, _x2),
      y: e.clientY - __privateGet(this, _y2)
    });
    this.bringToFront();
  };
  __privateGet(this, _headerEl4).addEventListener("pointerdown", startDrag);
  __privateSet(this, _onPointerMove, (e) => {
    if (!__privateGet(this, _isDragging) && !__privateGet(this, _isResizing)) {
      return;
    }
    if (__privateGet(this, _isDragging)) {
      __privateSet(this, _x2, e.clientX - __privateGet(this, _dragOffset).x);
      __privateSet(this, _y2, e.clientY - __privateGet(this, _dragOffset).y);
      __privateMethod(this, _ToolWindow_instances, applyPosition_fn).call(this);
    }
    if (__privateGet(this, _isResizing)) {
      __privateSet(this, _width2, Math.max(__privateGet(this, _minWidth), e.clientX - __privateGet(this, _x2)));
      __privateSet(this, _height, Math.max(__privateGet(this, _minHeight), e.clientY - __privateGet(this, _y2)));
      __privateMethod(this, _ToolWindow_instances, applyPosition_fn).call(this);
    }
  });
  __privateSet(this, _onPointerUp, () => {
    __privateSet(this, _isDragging, false);
    __privateSet(this, _isResizing, false);
  });
  window.addEventListener("pointermove", __privateGet(this, _onPointerMove));
  window.addEventListener("pointerup", __privateGet(this, _onPointerUp));
  window.addEventListener("pointercancel", __privateGet(this, _onPointerUp));
};
setupResize_fn = function() {
  const handle = this.shadowRoot.querySelector(".tool-window-resize");
  const startResize = (e) => {
    if (!__privateGet(this, _resizable)) {
      return;
    }
    e.stopPropagation();
    __privateSet(this, _isResizing, true);
    this.bringToFront();
  };
  handle.addEventListener("pointerdown", startResize);
};
cleanupWindowListeners_fn = function() {
  if (__privateGet(this, _onPointerMove)) {
    window.removeEventListener("pointermove", __privateGet(this, _onPointerMove));
  }
  if (__privateGet(this, _onPointerUp)) {
    window.removeEventListener("pointerup", __privateGet(this, _onPointerUp));
    window.removeEventListener("pointercancel", __privateGet(this, _onPointerUp));
  }
};
applyPosition_fn = function() {
  this.style.left = `${__privateGet(this, _x2)}px`;
  this.style.top = `${__privateGet(this, _y2)}px`;
  this.style.width = `${__privateGet(this, _width2)}px`;
  this.style.height = `${__privateGet(this, _height)}px`;
};
__publicField(ToolWindow, "styles", `
    :host {
        position: fixed;
        z-index: 1000;
        display: block;
    }

    .tool-window {
        display: flex;
        flex-direction: column;
        height: 100%;
        background: var(--bg-primary);
        border: 1px solid var(--border);
        border-radius: 8px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
        overflow: hidden;
    }

    .tool-window-header {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 12px;
        background: var(--bg-secondary);
        border-bottom: 1px solid var(--border);
        cursor: grab;
        user-select: none;
    }

    .tool-window-header:active {
        cursor: grabbing;
    }

    .tool-window-icon {
        width: 14px;
        height: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--fg-muted);
    }

    .tool-window-icon:empty {
        display: none;
    }

    .tool-window-icon svg {
        width: 100%;
        height: 100%;
    }

    .tool-window-title {
        font-size: 12px;
        font-weight: 500;
        color: var(--fg-primary);
    }

    .tool-window-close {
        width: 20px;
        height: 20px;
        margin-left: auto;
        border: none;
        background: transparent;
        color: var(--fg-muted);
        font-size: 16px;
        cursor: pointer;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .tool-window-close:hover {
        background: var(--bg-hover);
        color: var(--fg-primary);
    }

    .tool-window-content {
        flex: 1;
        overflow: auto;
        padding: 8px;
    }

    .tool-window-resize {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 16px;
        height: 16px;
        cursor: se-resize;
    }

    .tool-window-resize::before {
        content: '';
        position: absolute;
        bottom: 4px;
        right: 4px;
        width: 8px;
        height: 8px;
        border-right: 2px solid var(--fg-muted);
        border-bottom: 2px solid var(--fg-muted);
        opacity: 0.5;
    }
    `);
__publicField(ToolWindow, "observedAttributes", ["title", "width", "height", "x", "y"]);
customElements.define("tool-window", ToolWindow);
class ToolManager {
  constructor(container = document.body) {
    __privateAdd(this, _ToolManager_instances);
    __privateAdd(this, _registry, /* @__PURE__ */ new Map());
    __privateAdd(this, _instances, /* @__PURE__ */ new Map());
    __privateAdd(this, _container, null);
    __privateAdd(this, _nextZIndex, 1e3);
    __privateAdd(this, _nextInstanceId, 1);
    __privateAdd(this, _nextX, 20);
    __privateAdd(this, _nextY, 20);
    __privateAdd(this, _cascadeOffset, 30);
    __privateSet(this, _container, container);
  }
  register(ToolClass, options = {}) {
    if (!ToolClass.toolId) {
      throw new Error("Tool must have a static toolId");
    }
    __privateGet(this, _registry).set(ToolClass.toolId, { ToolClass, options });
  }
  unregister(toolId) {
    __privateGet(this, _registry).delete(toolId);
  }
  open(toolId, params = {}) {
    var _a2, _b, _c;
    const entry = __privateGet(this, _registry).get(toolId);
    if (!entry) {
      logger.warn(`Tool "${toolId}" not found in registry`);
      return null;
    }
    const { ToolClass, options } = entry;
    const instanceId = `${toolId}-${__privateWrapper(this, _nextInstanceId)._++}`;
    const windowEl = new ToolWindow();
    windowEl.setTitle(ToolClass.toolName || toolId);
    windowEl.setIcon(ToolClass.toolIcon);
    windowEl.setPosition(__privateGet(this, _nextX), __privateGet(this, _nextY));
    const width = ToolClass.defaultWidth || 400;
    const height = ToolClass.defaultHeight || 300;
    windowEl.setSize(width, height);
    const resizable = ToolClass.resizable !== false;
    windowEl.setResizable(resizable);
    __privateMethod(this, _ToolManager_instances, advanceCascade_fn).call(this);
    const toolEl = new ToolClass();
    (_a2 = toolEl.setOptions) == null ? void 0 : _a2.call(toolEl, options);
    (_b = toolEl.setParams) == null ? void 0 : _b.call(toolEl, params);
    windowEl.appendChild(toolEl);
    windowEl.addEventListener("close", () => {
      __privateMethod(this, _ToolManager_instances, handleClose_fn).call(this, instanceId);
    });
    windowEl.addEventListener("focus", () => {
      __privateMethod(this, _ToolManager_instances, bringToFront_fn).call(this, instanceId);
    });
    __privateGet(this, _container).appendChild(windowEl);
    __privateGet(this, _instances).set(instanceId, { window: windowEl, tool: toolEl });
    __privateMethod(this, _ToolManager_instances, bringToFront_fn).call(this, instanceId);
    (_c = toolEl.onOpen) == null ? void 0 : _c.call(toolEl);
    return instanceId;
  }
  close(instanceId) {
    var _a2, _b;
    const instance = __privateGet(this, _instances).get(instanceId);
    if (!instance) {
      return;
    }
    (_b = (_a2 = instance.tool).onClose) == null ? void 0 : _b.call(_a2);
    instance.window.remove();
    __privateGet(this, _instances).delete(instanceId);
  }
  closeAll(toolId = null) {
    for (const [instanceId] of __privateGet(this, _instances)) {
      if (toolId === null || instanceId.startsWith(toolId + "-")) {
        this.close(instanceId);
      }
    }
  }
  get(instanceId) {
    const instance = __privateGet(this, _instances).get(instanceId);
    return (instance == null ? void 0 : instance.tool) || null;
  }
  listTools() {
    return Array.from(__privateGet(this, _registry).entries()).map(([id, { ToolClass }]) => ({
      id,
      name: ToolClass.toolName || id,
      icon: ToolClass.toolIcon || "🔧"
    }));
  }
  listInstances() {
    return Array.from(__privateGet(this, _instances).keys());
  }
  has(toolId) {
    return __privateGet(this, _registry).has(toolId);
  }
  isOpen(instanceId) {
    return __privateGet(this, _instances).has(instanceId);
  }
}
_registry = new WeakMap();
_instances = new WeakMap();
_container = new WeakMap();
_nextZIndex = new WeakMap();
_nextInstanceId = new WeakMap();
_nextX = new WeakMap();
_nextY = new WeakMap();
_cascadeOffset = new WeakMap();
_ToolManager_instances = new WeakSet();
handleClose_fn = function(instanceId) {
  var _a2, _b;
  const instance = __privateGet(this, _instances).get(instanceId);
  if (instance) {
    (_b = (_a2 = instance.tool).onClose) == null ? void 0 : _b.call(_a2);
    __privateGet(this, _instances).delete(instanceId);
  }
};
bringToFront_fn = function(instanceId) {
  const instance = __privateGet(this, _instances).get(instanceId);
  if (instance) {
    __privateWrapper(this, _nextZIndex)._++;
    instance.window.style.zIndex = __privateGet(this, _nextZIndex);
  }
};
advanceCascade_fn = function() {
  __privateSet(this, _nextX, __privateGet(this, _nextX) + __privateGet(this, _cascadeOffset));
  __privateSet(this, _nextY, __privateGet(this, _nextY) + __privateGet(this, _cascadeOffset));
  if (__privateGet(this, _nextX) > 400) {
    __privateSet(this, _nextX, 100);
    __privateSet(this, _nextY, 100);
  }
};
class BaseFloatingTool extends EditorComponent {
  constructor() {
    super(...arguments);
    __privateAdd(this, _params, {});
    __privateAdd(this, _options, {});
  }
  setOptions(options) {
    var _a2;
    __privateSet(this, _options, options);
    (_a2 = this.onOptionsSet) == null ? void 0 : _a2.call(this, options);
  }
  get options() {
    return __privateGet(this, _options);
  }
  setParams(params) {
    var _a2;
    __privateSet(this, _params, params);
    (_a2 = this.onParamsSet) == null ? void 0 : _a2.call(this, params);
  }
  get params() {
    return __privateGet(this, _params);
  }
  onOptionsSet() {
  }
  onParamsSet() {
  }
  onOpen() {
  }
  onClose() {
  }
  static buildStyles(...customStyles) {
    return `
            ${editorBaseStyles}
            ${editorScrollbarStyles}
            ${customStyles.join("\n")}
        `;
  }
  static buildStyleSheet(...customStyles) {
    return createStyleSheet(this.buildStyles(...customStyles));
  }
  setupStyles() {
  }
}
_params = new WeakMap();
_options = new WeakMap();
__publicField(BaseFloatingTool, "toolId", "baseFloating");
__publicField(BaseFloatingTool, "toolName", "Base Tool");
__publicField(BaseFloatingTool, "toolIcon", ICONS.wrench);
__publicField(BaseFloatingTool, "defaultWidth", 400);
__publicField(BaseFloatingTool, "defaultHeight", 250);
__publicField(BaseFloatingTool, "resizable", true);
const _FoobarTool = class _FoobarTool extends BaseFloatingTool {
  constructor() {
    super(...arguments);
    __privateAdd(this, _FoobarTool_instances);
    __privateAdd(this, _contentEl6, null);
  }
  onConnected() {
    __privateMethod(this, _FoobarTool_instances, buildDOM_fn14).call(this);
  }
  onParamsSet() {
    __privateMethod(this, _FoobarTool_instances, render_fn4).call(this);
  }
  onOpen() {
    logger.info(`${this.constructor.toolName} opened!`);
  }
  onClose() {
    logger.info(`${this.constructor.toolName} closed!`);
  }
};
_contentEl6 = new WeakMap();
_FoobarTool_instances = new WeakSet();
buildDOM_fn14 = function() {
  __privateSet(this, _contentEl6, createElement("div", { class: "foobar-content" }));
  this.shadowRoot.appendChild(__privateGet(this, _contentEl6));
  __privateMethod(this, _FoobarTool_instances, render_fn4).call(this);
};
render_fn4 = function() {
  if (!__privateGet(this, _contentEl6)) {
    return;
  }
  const paramsJson = JSON.stringify(this.params, null, 2);
  __privateGet(this, _contentEl6).innerHTML = `
            <h3>Foobar Tool</h3>
            <p>Params received:</p>
            <pre class="foobar-params">${paramsJson}</pre>
            <button class="foobar-btn">Click me!</button>
        `;
  const btn = __privateGet(this, _contentEl6).querySelector(".foobar-btn");
  btn.addEventListener("click", () => {
    alert("Foobar button clicked!");
  });
};
__publicField(_FoobarTool, "toolId", "foobar");
__publicField(_FoobarTool, "toolName", "Foobar Test");
__publicField(_FoobarTool, "toolIcon", ICONS.flask);
__publicField(_FoobarTool, "defaultWidth", 400);
__publicField(_FoobarTool, "defaultHeight", 250);
__publicField(_FoobarTool, "styles", _FoobarTool.buildStyleSheet(`
        .foobar-content {
            color: var(--fg-primary);
            font-family: var(--font-mono);
            font-size: 12px;
        }

        .foobar-content h3 {
            margin: 0 0 12px 0;
            font-size: 14px;
            color: var(--fg-primary);
        }

        .foobar-content p {
            margin: 0 0 8px 0;
            color: var(--fg-secondary);
        }

        .foobar-params {
            background: var(--bg-secondary);
            padding: 12px;
            border-radius: 4px;
            color: var(--accent);
            margin: 0 0 16px 0;
            overflow: auto;
        }

        .foobar-btn {
            background: var(--accent);
            color: var(--bg-primary);
            border: none;
            padding: 8px 16px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 12px;
            font-weight: 500;
        }

        .foobar-btn:hover {
            opacity: 0.9;
        }
    `));
let FoobarTool = _FoobarTool;
customElements.define("foobar-tool", FoobarTool);
const _SpriteAnimatorTool = class _SpriteAnimatorTool extends BaseFloatingTool {
  constructor() {
    super(...arguments);
    __privateAdd(this, _SpriteAnimatorTool_instances);
    __privateAdd(this, _contentEl7, null);
    __privateAdd(this, _timelineEl, null);
    __privateAdd(this, _previewEl, null);
    __privateAdd(this, _spritesheetViewerEl, null);
    __privateAdd(this, _animators, {});
    __privateAdd(this, _animatorConfig, null);
    __privateAdd(this, _animator, null);
    __privateAdd(this, _spritesheet, null);
    __privateAdd(this, _selectedAnimation, null);
  }
  onConnected() {
    __privateMethod(this, _SpriteAnimatorTool_instances, buildDOM_fn15).call(this);
  }
  onOptionsSet() {
    __privateSet(this, _animators, this.options.animators || {});
  }
  onParamsSet() {
    const { animator, animatorName, spritesheet } = this.params;
    const resolvedName = animatorName || __privateMethod(this, _SpriteAnimatorTool_instances, getDefaultAnimatorName_fn).call(this);
    __privateMethod(this, _SpriteAnimatorTool_instances, selectAnimator_fn).call(this, resolvedName, { animator, spritesheet });
  }
};
_contentEl7 = new WeakMap();
_timelineEl = new WeakMap();
_previewEl = new WeakMap();
_spritesheetViewerEl = new WeakMap();
_animators = new WeakMap();
_animatorConfig = new WeakMap();
_animator = new WeakMap();
_spritesheet = new WeakMap();
_selectedAnimation = new WeakMap();
_SpriteAnimatorTool_instances = new WeakSet();
buildDOM_fn15 = function() {
  __privateSet(this, _contentEl7, createElement("div", { class: "animator-content" }));
  this.shadowRoot.appendChild(__privateGet(this, _contentEl7));
  __privateMethod(this, _SpriteAnimatorTool_instances, render_fn5).call(this);
};
getDefaultAnimatorName_fn = function() {
  const animatorNames = Object.keys(__privateGet(this, _animators));
  return animatorNames.length > 0 ? animatorNames[0] : null;
};
selectAnimator_fn = function(name, { animator, spritesheet } = {}) {
  const animatorConfig = name ? __privateGet(this, _animators)[name] : null;
  __privateSet(this, _animatorConfig, animatorConfig || null);
  __privateSet(this, _animator, __privateMethod(this, _SpriteAnimatorTool_instances, resolveAnimator_fn).call(this, animator, animatorConfig));
  __privateSet(this, _spritesheet, __privateMethod(this, _SpriteAnimatorTool_instances, resolveSpritesheet_fn).call(this, spritesheet, animatorConfig));
  __privateSet(this, _selectedAnimation, null);
  __privateMethod(this, _SpriteAnimatorTool_instances, render_fn5).call(this);
};
resolveAnimator_fn = function(animator, animatorConfig) {
  if (animator) {
    return animator;
  }
  const { textureSystem } = this.params;
  if (animatorConfig && textureSystem) {
    return new SpriteAnimator({
      sprite: null,
      config: animatorConfig,
      textureSystem
    });
  }
  return null;
};
resolveSpritesheet_fn = function(spritesheet, animatorConfig) {
  if (spritesheet) {
    return spritesheet;
  }
  const { textureSystem } = this.params;
  if (animatorConfig && textureSystem) {
    const spritesheetId = animatorConfig.spritesheet;
    return spritesheetId ? textureSystem.getSpritesheet(spritesheetId) : null;
  }
  return null;
};
render_fn5 = function() {
  if (!__privateGet(this, _contentEl7)) {
    return;
  }
  if (!__privateGet(this, _animator)) {
    __privateMethod(this, _SpriteAnimatorTool_instances, renderNoAnimator_fn).call(this);
    return;
  }
  __privateMethod(this, _SpriteAnimatorTool_instances, renderAnimator_fn).call(this);
};
renderNoAnimator_fn = function() {
  __privateGet(this, _contentEl7).innerHTML = `
            <div class="no-animator">
                <p>No animator provided</p>
                <p class="hint">Open with: animatorClass + textureSystem</p>
            </div>
        `;
};
renderAnimator_fn = function() {
  const animations = __privateGet(this, _animator).children;
  if (!__privateGet(this, _selectedAnimation) && animations.length > 0) {
    __privateSet(this, _selectedAnimation, animations[0]);
  }
  const hasAnimators = Object.keys(__privateGet(this, _animators)).length > 0;
  __privateGet(this, _contentEl7).innerHTML = `
            ${hasAnimators ? `
            <div class="animator-topbar">
                <select class="animator-select"></select>
                <button class="export-all-btn" title="Copy animator config to clipboard">Export</button>
            </div>
            ` : ""}
            <div class="animator-header">
                <select class="animation-select"></select>
                <div class="animation-info"></div>
            </div>
            <div class="animator-main">
                <div class="animator-left">
                    <animation-preview></animation-preview>
                </div>
                <div class="animator-right">
                    <animation-timeline></animation-timeline>
                    <spritesheet-viewer></spritesheet-viewer>
                </div>
            </div>
        `;
  if (hasAnimators) {
    __privateMethod(this, _SpriteAnimatorTool_instances, setupAnimatorSelect_fn).call(this);
    __privateMethod(this, _SpriteAnimatorTool_instances, setupExportAllButton_fn).call(this);
  }
  __privateMethod(this, _SpriteAnimatorTool_instances, renderAnimationSelect_fn).call(this, animations);
  __privateMethod(this, _SpriteAnimatorTool_instances, renderAnimationInfo_fn).call(this);
  __privateMethod(this, _SpriteAnimatorTool_instances, setupPreview_fn).call(this);
  __privateMethod(this, _SpriteAnimatorTool_instances, setupTimeline_fn).call(this);
  __privateMethod(this, _SpriteAnimatorTool_instances, setupSpritesheetViewer_fn).call(this);
};
setupAnimatorSelect_fn = function() {
  const select = __privateGet(this, _contentEl7).querySelector(".animator-select");
  for (const [name, animatorEntry] of Object.entries(__privateGet(this, _animators))) {
    const option = createElement("option", { text: name, attrs: { value: name } });
    option.selected = animatorEntry === __privateGet(this, _animatorConfig);
    select.appendChild(option);
  }
  select.addEventListener("change", (e) => {
    __privateMethod(this, _SpriteAnimatorTool_instances, selectAnimator_fn).call(this, e.target.value);
  });
};
setupExportAllButton_fn = function() {
  const btn = __privateGet(this, _contentEl7).querySelector(".export-all-btn");
  btn.addEventListener("click", () => __privateMethod(this, _SpriteAnimatorTool_instances, exportAnimatorToClipboard_fn).call(this));
};
exportAnimatorToClipboard_fn = function() {
  if (!__privateGet(this, _animator)) {
    return;
  }
  const fullConfig = __privateMethod(this, _SpriteAnimatorTool_instances, buildFullConfig_fn).call(this);
  const text = `static animations = ${JSON.stringify(fullConfig, null, 4)}`;
  navigator.clipboard.writeText(text).then(() => {
    const btn = __privateGet(this, _contentEl7).querySelector(".export-all-btn");
    const original = btn.textContent;
    btn.textContent = "Copied!";
    setTimeout(() => {
      btn.textContent = original;
    }, 1500);
  });
};
buildFullConfig_fn = function() {
  const config = {};
  for (const anim of __privateGet(this, _animator).children) {
    config[anim.$id] = __privateMethod(this, _SpriteAnimatorTool_instances, buildAnimationConfig_fn).call(this, anim);
  }
  return config;
};
buildAnimationConfig_fn = function(anim) {
  const config = {
    fps: anim.fps,
    loop: anim.loop
  };
  if (anim.playbackMode !== "forward") {
    config.playbackMode = anim.playbackMode;
  }
  config.frames = anim.frames.map((frame) => {
    var _a2;
    const frameConfig = {};
    if (frame.source) {
      frameConfig.source = frame.source;
    } else if (frame.name) {
      frameConfig.source = `${((_a2 = __privateGet(this, _spritesheet)) == null ? void 0 : _a2.$id) || "spritesheet"}:${frame.name}`;
    }
    if (frame.duration && frame.duration !== 1) {
      frameConfig.duration = frame.duration;
    }
    if (frame.events && frame.events.length > 0) {
      frameConfig.events = [...frame.events];
    }
    return frameConfig;
  });
  return config;
};
renderAnimationSelect_fn = function(animations) {
  const select = __privateGet(this, _contentEl7).querySelector(".animation-select");
  for (const anim of animations) {
    const option = createElement("option", { text: anim.$id, attrs: { value: anim.$id } });
    option.selected = anim === __privateGet(this, _selectedAnimation);
    select.appendChild(option);
  }
  select.addEventListener("change", (e) => {
    var _a2, _b;
    __privateSet(this, _selectedAnimation, __privateGet(this, _animator).get(e.target.value));
    __privateMethod(this, _SpriteAnimatorTool_instances, renderAnimationInfo_fn).call(this);
    (_a2 = __privateGet(this, _timelineEl)) == null ? void 0 : _a2.setFrames(__privateGet(this, _selectedAnimation).frames);
    (_b = __privateGet(this, _previewEl)) == null ? void 0 : _b.setAnimation(__privateGet(this, _selectedAnimation));
  });
};
renderAnimationInfo_fn = function() {
  const infoEl = __privateGet(this, _contentEl7).querySelector(".animation-info");
  if (!__privateGet(this, _selectedAnimation)) {
    infoEl.textContent = "";
    return;
  }
  const anim = __privateGet(this, _selectedAnimation);
  infoEl.innerHTML = `
            <label class="info-item">
                loop: <input type="checkbox" class="loop-input" ${anim.loop ? "checked" : ""}>
            </label>
            <label class="info-item">
                mode: <select class="playback-select">
                    <option value="forward" ${anim.playbackMode === "forward" ? "selected" : ""}>forward</option>
                    <option value="reverse" ${anim.playbackMode === "reverse" ? "selected" : ""}>reverse</option>
                    <option value="pingpong" ${anim.playbackMode === "pingpong" ? "selected" : ""}>pingpong</option>
                </select>
            </label>
            <span class="info-item frames-count">frames: ${anim.totalFrames}</span>
        `;
  const fpsInput = createElement("number-input", { class: "fps-input" });
  fpsInput.setLabel("fps");
  fpsInput.setValue(anim.fps);
  fpsInput.setStep(1);
  fpsInput.setPrecision(0);
  fpsInput.setMin(1);
  fpsInput.setMax(60);
  infoEl.insertBefore(fpsInput, infoEl.firstChild);
  setupAnimationInfoListeners(infoEl, anim);
};
setupTimeline_fn = function() {
  __privateSet(this, _timelineEl, __privateGet(this, _contentEl7).querySelector("animation-timeline"));
  if (__privateGet(this, _selectedAnimation)) {
    __privateGet(this, _timelineEl).setFrames(__privateGet(this, _selectedAnimation).frames);
  }
  __privateGet(this, _timelineEl).addEventListener("frameclick", (e) => {
    var _a2;
    (_a2 = __privateGet(this, _previewEl)) == null ? void 0 : _a2.setCurrentIndex(e.detail.index);
  });
  __privateGet(this, _timelineEl).addEventListener("framedrop", (e) => {
    __privateMethod(this, _SpriteAnimatorTool_instances, handleFrameDrop_fn).call(this, e.detail);
  });
  __privateGet(this, _timelineEl).addEventListener("framemove", (e) => {
    __privateMethod(this, _SpriteAnimatorTool_instances, handleFrameMove_fn).call(this, e.detail);
  });
  __privateGet(this, _timelineEl).addEventListener("framedelete", (e) => {
    __privateMethod(this, _SpriteAnimatorTool_instances, handleFrameDelete_fn).call(this, e.detail);
  });
  __privateGet(this, _timelineEl).addEventListener("frameduration", (e) => {
    __privateMethod(this, _SpriteAnimatorTool_instances, handleFrameDuration_fn).call(this, e.detail);
  });
};
handleFrameDrop_fn = function({ index, frameName }) {
  if (!__privateGet(this, _selectedAnimation) || !__privateGet(this, _spritesheet)) {
    return;
  }
  const region = __privateGet(this, _spritesheet).getRegion(frameName);
  if (!region) {
    return;
  }
  const newFrame = { region, name: frameName };
  __privateGet(this, _selectedAnimation).frames.splice(index, 0, newFrame);
  __privateGet(this, _timelineEl).setFrames(__privateGet(this, _selectedAnimation).frames);
  __privateMethod(this, _SpriteAnimatorTool_instances, renderAnimationInfo_fn).call(this);
};
handleFrameMove_fn = function({ fromIndex, toIndex }) {
  if (!__privateGet(this, _selectedAnimation)) {
    return;
  }
  const frames = __privateGet(this, _selectedAnimation).frames;
  const [movedFrame] = frames.splice(fromIndex, 1);
  const insertIndex = fromIndex < toIndex ? toIndex - 1 : toIndex;
  frames.splice(insertIndex, 0, movedFrame);
  __privateGet(this, _timelineEl).setFrames(frames);
};
handleFrameDelete_fn = function({ index }) {
  if (!__privateGet(this, _selectedAnimation)) {
    return;
  }
  const frames = __privateGet(this, _selectedAnimation).frames;
  if (index < 0 || index >= frames.length) {
    return;
  }
  frames.splice(index, 1);
  __privateGet(this, _timelineEl).setFrames(frames);
  __privateMethod(this, _SpriteAnimatorTool_instances, renderAnimationInfo_fn).call(this);
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
setupPreview_fn = function() {
  __privateSet(this, _previewEl, __privateGet(this, _contentEl7).querySelector("animation-preview"));
  if (__privateGet(this, _selectedAnimation)) {
    __privateGet(this, _previewEl).setAnimation(__privateGet(this, _selectedAnimation));
  }
  __privateGet(this, _previewEl).addEventListener("frame", (e) => {
    var _a2;
    (_a2 = __privateGet(this, _timelineEl)) == null ? void 0 : _a2.setCurrentIndex(e.detail.index);
  });
  __privateGet(this, _previewEl).addEventListener("stop", () => {
    var _a2;
    (_a2 = __privateGet(this, _timelineEl)) == null ? void 0 : _a2.setCurrentIndex(0);
  });
};
setupSpritesheetViewer_fn = function() {
  __privateSet(this, _spritesheetViewerEl, __privateGet(this, _contentEl7).querySelector("spritesheet-viewer"));
  if (__privateGet(this, _spritesheet)) {
    __privateGet(this, _spritesheetViewerEl).setSpritesheet(__privateGet(this, _spritesheet));
  }
};
__publicField(_SpriteAnimatorTool, "toolId", "spriteAnimator");
__publicField(_SpriteAnimatorTool, "toolName", "Sprite Animator");
__publicField(_SpriteAnimatorTool, "toolIcon", ICONS.clapperboard);
__publicField(_SpriteAnimatorTool, "defaultWidth", 600);
__publicField(_SpriteAnimatorTool, "defaultHeight", 450);
__publicField(_SpriteAnimatorTool, "styles", _SpriteAnimatorTool.buildStyleSheet(`
        .animator-content {
            color: var(--fg-primary);
            font-family: var(--font-mono);
            font-size: 12px;
            display: flex;
            flex-direction: column;
            height: 100%;
            gap: 12px;
        }

        .no-animator {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
            color: var(--fg-muted);
            gap: 8px;
        }

        .no-animator .hint {
            font-size: 10px;
            color: var(--fg-muted);
        }

        .animator-topbar {
            display: flex;
            align-items: center;
            gap: 12px;
            flex-shrink: 0;
            padding-bottom: 8px;
            border-bottom: 1px solid var(--bg-hover);
        }

        .animator-topbar .animator-select {
            flex: 1;
        }

        .export-all-btn {
            width: 100px;
            background: var(--bg-hover);
            color: var(--fg-secondary);
            border: none;
            border-radius: 4px;
            padding: 6px 12px;
            font-family: inherit;
            font-size: 11px;
            cursor: pointer;
            transition: background 0.15s, color 0.15s;
        }

        .export-all-btn:hover {
            background: var(--bg-selected);
            color: var(--fg-primary);
        }

        .animator-header {
            display: flex;
            align-items: center;
            gap: 12px;
            flex-shrink: 0;
        }

        .animator-select,
        .animation-select {
            background: var(--bg-secondary);
            color: var(--fg-primary);
            border: none;
            border-radius: 4px;
            padding: 6px 10px;
            font-family: inherit;
            font-size: 12px;
            cursor: pointer;
            transition: background 0.15s;
        }

        .animator-select:hover,
        .animation-select:hover {
            background: var(--bg-hover);
        }

        .animator-select:focus,
        .animation-select:focus {
            outline: none;
            background: var(--bg-hover);
        }

        .animation-info {
            display: flex;
            gap: 16px;
            color: var(--fg-secondary);
            font-size: 11px;
            flex: 1;
            align-items: center;
        }

        .info-item {
            display: flex;
            align-items: center;
            gap: 6px;
            color: var(--fg-muted);
        }

        .info-item input[type="checkbox"] {
            accent-color: var(--accent);
        }

        .info-item select {
            background: transparent;
            color: var(--fg-secondary);
            border: none;
            padding: 2px 4px;
            font-family: inherit;
            font-size: 11px;
            cursor: pointer;
            transition: color 0.15s;
        }

        .info-item select:hover {
            color: var(--fg-primary);
        }

        .info-item select:focus {
            outline: none;
            color: var(--fg-primary);
        }

        .fps-input {
            width: 90px;
        }

        .frames-count {
            margin-left: auto;
        }

        .animator-main {
            display: flex;
            gap: 12px;
            flex: 1;
            min-height: 0;
        }

        .animator-left {
            flex-shrink: 0;
        }

        .animator-right {
            display: flex;
            flex-direction: column;
            gap: 12px;
            flex: 1;
            min-width: 0;
        }

        animation-timeline {
            flex-shrink: 0;
        }

        spritesheet-viewer {
            flex: 1;
            min-height: 80px;
        }
    `));
let SpriteAnimatorTool = _SpriteAnimatorTool;
function setupAnimationInfoListeners(infoEl, anim) {
  const fpsInput = infoEl.querySelector(".fps-input");
  const loopInput = infoEl.querySelector(".loop-input");
  const playbackSelect = infoEl.querySelector(".playback-select");
  fpsInput.addEventListener("change", (e) => {
    anim.setFps(e.detail.value);
  });
  loopInput.addEventListener("change", (e) => {
    anim.setLoop(e.target.checked);
  });
  playbackSelect.addEventListener("change", (e) => {
    anim.setPlaybackMode(e.target.value);
  });
}
customElements.define("sprite-animator-tool", SpriteAnimatorTool);
async function init() {
  const appManager = new ApplicationManager();
  appManager.register("defendTheDen", DefendTheDen);
  appManager.start();
  const container = document.getElementById("den");
  const app = await appManager.spawn("defendTheDen", {
    container,
    preload: "all"
  });
  const devtools = new PerkyDevTools();
  document.body.appendChild(devtools);
  devtools.setModule(app);
  devtools.setAppManager(appManager);
  const animatorConfigs = {};
  const manifest = app.manifest;
  const animatorAssets = manifest.getAssetsByType("animator");
  for (const asset of animatorAssets) {
    if (asset.source) {
      animatorConfigs[asset.id] = asset.source;
    }
  }
  const toolManager = new ToolManager();
  toolManager.register(FoobarTool);
  toolManager.register(SpriteAnimatorTool, {
    animators: animatorConfigs
  });
  devtools.setToolManager(toolManager);
  window.defendTheDen = app;
  window.appManager = appManager;
  window.devtools = devtools;
  window.toolManager = toolManager;
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
export {
  commandPaletteStyles as c,
  getAllTools as g
};
