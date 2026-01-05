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
var _listenersFor, _externalListeners, _map, _values, _keyByValue, _ObservableMap_instances, removeFromValues_fn, _indexes, _Registry_instances, handleSet_fn, handleDelete_fn, addToIndex_fn, removeFromIndex_fn, _set, _pluralRules, _singularRules, _uncountables, _irregularPlurals, _irregularSingles, _Inflector_instances, sanitizeWord_fn, replaceWord_fn, checkWord_fn, loadIrregulars_fn, loadPlurals_fn, loadSingulars_fn, loadUncountables_fn, _id, _name, _category, _bind, _host, _started, _disposed, _installed, _eagerStart, _lifecycle, _childrenRegistry, _tags, _tagIndexes, _delegations, _eventDelegations, _PerkyModule_instances, addChild_fn, setupTagIndexListeners_fn, _ApplicationManager_instances, findApp_fn, _data, _Manifest_instances, initAssets_fn, exportAssets_fn, _actions, _actionList, _history, _maxHistory, _consoleOutput, _Logger_instances, record_fn, trimHistory_fn, _activeControllers, _ActionDispatcher_instances, setupMainController_fn, isControllerActive_fn, _resizeObserver, _previousStyles, _onFullscreenChange, _previousDisplay, _PerkyView_instances, setupResizeObserver_fn, setupFullscreenEvents_fn, requestFullscreen_fn, dispatchDisplayModeChanged_fn, _loadingPromises, _SourceManager_instances, setupLoaderEvents_fn, _bindings, _InputDevice_instances, initEvents_fn, _keydownListener, _keyupListener, _blurListener, _KeyboardDevice_instances, handleKeydown_fn, handleKeyup_fn, handleBlur_fn, _mousedownListener, _mouseupListener, _mousemoveListener, _contextmenuListener, _wheelListener, _MouseDevice_instances, createControls_fn, handleMousedown_fn, handleMouseup_fn, handleMousemove_fn, handleContextmenu_fn, handleWheel_fn, _touchstartListener, _touchmoveListener, _touchendListener, _touchcancelListener, _activeTouch, _startX, _startY, _currentY, _touchStartTime, _swipeReferenceY, _TouchDevice_instances, createControls_fn2, handleTouchstart_fn, handleTouchmove_fn, handleTouchend_fn, detectTap_fn, findChangedTouch_fn, handleTouchcancel_fn, releaseAllSwipes_fn, findActiveTouch_fn, isTouchActive_fn, _InputSystem_instances, getControlsFromBinding_fn, initEvents_fn2, handleInputEvent_fn, _Application_instances, autoRegisterBindings_fn, _paused, _fpsLimited, _resizeObserver2, _autoFitEnabled, _BaseRenderer_instances, updateAutoFitObserver_fn, refreshAutoFit_fn, _context, _collected, _x, _y, _rotation, _scaleX, _scaleY, _pivotX, _pivotY, _localMatrix, _worldMatrix, _dirty, _sortedChildren, _childrenNeedSort, _enabled, _effects, _tint, _effects2, _debugGizmos, _rendererRegistry, _renderers, _debugGizmoRenderer, _Canvas2D_instances, setupDefaultRenderers_fn, _gl, _program, _uniforms, _attributes, _ShaderProgram_instances, createShader_fn, createProgram_fn, _gl2, _programs, _defaults, _gl3, _shaderRegistry, _effects3, _shaderCache, _uniformValues, _uniformTypes, _ShaderEffectRegistry_instances, collectUniforms_fn, parseUniform_fn, compileShader_fn, _gl4, _width, _height, _samples, _msaaFramebuffer, _msaaRenderbuffer, _sceneFramebuffer, _sceneTexture, _pingPongFramebuffers, _pingPongTextures, _currentPingPong, _namedBuffers, _FramebufferManager_instances, createFramebuffers_fn, createMSAAFramebuffer_fn, createResolveFramebuffer_fn, createFramebuffer_fn, resizeNamedBuffers_fn, deleteFramebuffers_fn, _vertexBuffer, _texCoordBuffer, _FullscreenQuad_instances, createBuffers_fn, _gl5, _shaderRegistry2, _framebufferManager, _fullscreenQuad, _passes, _enabled2, _gl6, _active, _zombies, _zombieSize, _flushInterval, _WebGLTextureManager_instances, resurrect_fn, createEntry_fn, createTexture_fn, deleteTexture_fn, _initialized, _RenderGroup_instances, initTransform_fn, initPasses_fn, _gl7, _context2, _collected2, _tempCorners, _tempTexCoords, _WebGLSpriteBatch_instances, ensureTexture_fn, writeVertices_fn, bindOptionalAttributes_fn, _spriteBatch, _shaderEffectRegistry, _WebGLSpriteRenderer_instances, groupByShaderEffects_fn, getProgramForEffects_fn, _vertexBuffer2, _vertexBuffer3, _gizmoObjects, _rendererRegistry2, _renderers2, _shaderRegistry3, _shaderEffectRegistry2, _postProcessor, _debugGizmoRenderer2, _compositeQuad, _compositeProgram, _WebGLCanvas2D_instances, setupWebGL_fn, setupBuiltinShaders_fn, setupDefaultRenderers_fn2, setupCompositeShader_fn, getMatrices_fn, renderSingleScene_fn, renderWithGroups_fn, renderGroupsToTextures_fn, renderGroupToTexture_fn, compositeGroups_fn, drawAllGroups_fn, drawGroup_fn, resetStats_fn, clearWithBackground_fn, applyGroupPasses_fn, applyBlendMode_fn, _RenderSystem_instances, configureDimensions_fn, setupInitialLayers_fn, setupResizeListener_fn, _Game_instances, updateActiveControllers_fn, _world, _classRegistry, _matcherRegistry, _views, _WorldView_instances, handleEntitySet_fn, handleEntityDelete_fn, disposeAllViews_fn, resolveViews_fn, _program2, _enabled3, _a, _width2, _color, _HitboxDebug_instances, getCollidableEntities_fn, updateVisual_fn, createVisual_fn, createCircle_fn, getColorForEntity_fn, _GameRenderer_instances, registerViews_fn, registerShaderEffects_fn, buildScene_fn, setupRenderGroups_fn, _WaveProgressBar_instances, showDayAnnouncement_fn, hideDayAnnouncement_fn, updateDayLabel_fn, updateWave_fn, updateProgress_fn, applyStyles_fn, _enabled4, _program3, _uniforms2, _RenderPass_instances, applyUniform_fn, _DefendTheDen_instances, updateShadows_fn, checkWaveClear_fn, startNextWave_fn, _listeners, _state, _depth, _expanded, _selected, _contentEl, _toggleEl, _childrenEl, _customStyles, _BaseTreeNode_instances, buildDOM_fn, updateDepth_fn, updateToggle_fn, updateSelectedState_fn, updateChildrenVisibility_fn, handleToggleClick_fn, handleNodeClick_fn, handleContextMenu_fn, getSelectDetail_fn, getToggleDetail_fn, _module, _childNodes, _PerkyExplorerNode_instances, bindModuleEvents_fn, updateStatus_fn, updateId_fn, updateCategory_fn, clearChildNodes_fn, removeChildNode_fn, handleChildAdded_fn, handleChildRemoved_fn, _object, _childNodes2, _labelEl, _propsEl, _SceneTreeNode_instances, ensureContentElements_fn, updateLabel_fn, updateProps_fn, handleEntityClick_fn, _module2, _gridEl, _actionsEl, _customStyles2, _BaseInspector_instances, getStyles_fn, _Object2DInspector_instances, render_fn, _content, _worldRenderer, _headerEl, _treeEl, _rootNode, _detailsEl, _selectedObject, _refreshTimeout, _SceneTreeSidebar_instances, bindEvents_fn, scheduleRefresh_fn, clearRefreshTimeout_fn, buildDOM_fn2, createHeader_fn, createTree_fn, handleNodeSelect_fn, updateDetails_fn, updateInspector_fn, _module3, _titleEl, _contentEl2, _PerkyExplorerDetails_instances, buildDOM_fn3, render_fn2, renderEmpty_fn, renderTitle_fn, renderContent_fn, renderCustomInspector_fn, renderInspectMethod_fn, renderDefaultGrid_fn, _value, _min, _max, _step, _label, _slider, _labelEl2, _valueEl, _SliderInput_instances, buildDOM_fn4, updateDisplay_fn, handleInput_fn, clamp_fn, _checked, _label2, _toggle, _labelEl3, _ToggleInput_instances, buildDOM_fn5, updateDisplay_fn2, handleClick_fn, _BaseRendererInspector_instances, update_fn, _fpsValueEl, _screenFpsValueEl, _statusValueEl, _toggleBtn, _fpsLimitCheckbox, _fpsSlider, _fpsSliderValue, _GameLoopInspector_instances, handleToggle_fn, handleLimitChange_fn, handleSliderChange_fn, bindEvents_fn2, updateAll_fn, updateFps_fn, updateSlider_fn, updateSliderState_fn, updateStatus_fn2, _activeCountEl, _activeSizeEl, _zombieCountEl, _zombieSizeEl, _progressBarEl, _progressValueEl, _totalSizeEl, _autoFlushEl, _maxSizeEl, _TextureManagerInspector_instances, handleFlush_fn, handleFlushStale_fn, bindEvents_fn3, updateAll_fn2, _value2, _step2, _precision, _label3, _min2, _max2, _input, _labelEl4, _decrementBtn, _incrementBtn, _isDragging, _dragStartX, _dragStartValue, _onDragMove, _onDragEnd, _NumberInput_instances, buildDOM_fn6, updateDisplay_fn3, handleInputChange_fn, handleBlur_fn2, handleKeyDown_fn, handleStep_fn, adjustValue_fn, clamp_fn2, startDrag_fn, _vec2, _xInput, _yInput, _label4, _labelEl5, _Vec2Input_instances, buildDOM_fn7, updateDisplay_fn4, handleChange_fn, _positionInput, _CanvasLayerInspector_instances, update_fn2, openSceneTree_fn, _WorldViewInspector_instances, update_fn3, openSceneTree_fn2, _WebGLCanvasInspector_instances, update_fn4, renderPostProcessing_fn, _RenderGroupInspector_instances, update_fn5, renderBlendModeSelector_fn, renderPostPasses_fn, _sectionsState, _ManifestInspector_instances, update_fn6, createSection_fn, createConfigSection_fn, createDataGrid_fn, createAssetsSection_fn, _viewMode, _containerEl, _InputBinderInspector_instances, update_fn7, createHeader_fn2, _containerEl2, _ActionControllerInspector_instances, update_fn8, createActionCard_fn, _containerEl3, _ActionDispatcherInspector_instances, update_fn9, createControllerGroup_fn, _menuEl, _actions2, _module4, _ExplorerContextMenu_instances, buildDOM_fn8, renderActions_fn, positionMenu_fn, _handleOutsideClick, _handleKeyDown, _module5, _isMinimized, _isCollapsed, _sceneTreeMode, _focusMode, _embedded, _containerEl4, _sidebarEl, _explorerEl, _minimizedEl, _headerEl2, _treeEl2, _rootNode2, _detailsEl2, _collapseBtnEl, _minimizeBtnEl, _selectedModule, _rootModule, _contextMenuEl, _PerkyExplorer_instances, buildDOM_fn9, createMinimizedView_fn, createExpandedView_fn, createSceneTreeView_fn, createHeader_fn3, createTree_fn2, handleNodeSelect_fn2, handleNodeContextMenu_fn, ensureContextMenu_fn, updateViewState_fn, toggleCollapse_fn, updateCollapseState_fn, updateTreeVisibility_fn, showEmptyState_fn, hideEmptyState_fn, updateDetails_fn2, refresh_fn, openSceneTree_fn3, closeSceneTree_fn, navigateToEntity_fn, expandParentsToNode_fn, updateEmbeddedMode_fn, updateHeaderControls_fn, _explorerEl2, _ExplorerTool_instances, buildDOM_fn10, _containerEl5, _registeredListEl, _runningListEl, _appManager, _AppsTool_instances, buildDOM_fn11, refresh_fn2, refreshRegistered_fn, refreshRunning_fn, createRunningItem_fn, startApp_fn, stopApp_fn, disposeApp_fn, _sidebarOpen, _activeTool, _commandPaletteOpen, _loggerOpen, _module6, _appManager2, _state2, _dockEl, _toolButtons, _loggerButton, _commandPaletteButton, _minimized, _DevToolsDock_instances, expand_fn, buildDOM_fn12, render_fn3, renderMinimized_fn, renderExpanded_fn, createToolButton_fn, updateActiveStates_fn, updateLoggerState_fn, _state3, _sidebarEl2, _headerEl3, _titleEl2, _titleIconEl, _titleTextEl, _closeBtn, _contentEl3, _currentToolEl, _currentToolId, _DevToolsSidebar_instances, buildDOM_fn13, createHeader_fn4, loadTool_fn, show_fn, hide_fn, _maxEntries, _position, _timestamp, _theme, _entries, _containerEl6, _contentEl4, _onLog, _onClear, _onSpacer, _onTitle, _PerkyLogger_instances, handleMaxEntries_fn, handlePosition_fn, handleTimestamp_fn, handleTheme_fn, handleAttributeChange_fn, buildDOM_fn14, bindLoggerEvents_fn, replayHistory_fn, replayEntry_fn, unbindLoggerEvents_fn, handleLog_fn, updateClasses_fn, scrollToBottom_fn, _state4, _dockEl2, _sidebarEl3, _loggerEl, _commandPaletteEl, _keyboardHandler, _PerkyDevTools_instances, buildDOM_fn15, setupKeyboard_fn, cleanupKeyboard_fn, showCommandPalette_fn, hideCommandPalette_fn;
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
class Notifier {
  constructor() {
    __privateAdd(this, _listenersFor, {});
    __privateAdd(this, _externalListeners, []);
  }
  getListenersFor(name) {
    return __privateGet(this, _listenersFor)[name];
  }
  on(name, listener) {
    if (typeof listener !== "function") {
      throw new TypeError("Listener must be a function");
    }
    if (!__privateGet(this, _listenersFor)[name]) {
      __privateGet(this, _listenersFor)[name] = [];
    }
    __privateGet(this, _listenersFor)[name].push(listener);
    return listener;
  }
  once(name, listener) {
    if (typeof listener !== "function") {
      throw new TypeError("Listener must be a function");
    }
    const onceWrapper = (...args) => {
      listener(...args);
      this.off(name, onceWrapper);
    };
    return this.on(name, onceWrapper);
  }
  off(name, listener) {
    const listeners = this.getListenersFor(name);
    if (typeof listener === "undefined") {
      return this.removeListenersFor(name);
    } else if (Array.isArray(listeners)) {
      const index = listeners.indexOf(listener);
      if (index !== -1) {
        listeners.splice(index, 1);
        return true;
      }
    }
    return false;
  }
  emit(name, ...args) {
    const listeners = this.getListenersFor(name);
    if (!listeners) {
      return;
    }
    const listenersCopy = [...listeners];
    for (const listener of listenersCopy) {
      listener.call(this, ...args);
    }
  }
  emitter(name) {
    return (...args) => this.emit(name, ...args);
  }
  listenTo(target, eventName, callback) {
    target.on(eventName, callback);
    __privateGet(this, _externalListeners).push({ target, eventName, callback });
  }
  listenToOnce(target, eventName, callback) {
    const onceWrapper = (...args) => {
      callback(...args);
      target.off(eventName, onceWrapper);
      const index = __privateGet(this, _externalListeners).findIndex(
        (l) => l.target === target && l.eventName === eventName && l.callback === onceWrapper
      );
      if (index !== -1) {
        __privateGet(this, _externalListeners).splice(index, 1);
      }
    };
    target.on(eventName, onceWrapper);
    __privateGet(this, _externalListeners).push({ target, eventName, callback: onceWrapper });
  }
  cleanExternalListeners() {
    __privateGet(this, _externalListeners).forEach(({ target, eventName, callback }) => {
      target.off(eventName, callback);
    });
    __privateSet(this, _externalListeners, []);
  }
  removeListeners() {
    Object.keys(__privateGet(this, _listenersFor)).forEach((name) => this.removeListenersFor(name));
  }
  removeListenersFor(name) {
    const listeners = this.getListenersFor(name);
    if (listeners) {
      listeners.length = 0;
      delete __privateGet(this, _listenersFor)[name];
      return true;
    }
    return false;
  }
  delegateEvents(target, events, namespace) {
    if (!target || !Array.isArray(events) && typeof events !== "object") {
      return;
    }
    const eventArray = Array.isArray(events) ? events : Object.keys(events);
    eventArray.forEach((event) => {
      this.listenTo(target, event, (...args) => {
        const prefixedEvent = namespace ? `${namespace}:${event}` : event;
        this.emit(prefixedEvent, ...args);
      });
    });
  }
}
_listenersFor = new WeakMap();
_externalListeners = new WeakMap();
__publicField(Notifier, "notifierMethods", [
  "getListenersFor",
  "on",
  "once",
  "off",
  "emit",
  "emitter",
  "listenTo",
  "listenToOnce",
  "cleanExternalListeners",
  "removeListeners",
  "removeListenersFor",
  "delegateEvents"
]);
class ObservableMap extends Notifier {
  constructor(collection) {
    super();
    __privateAdd(this, _ObservableMap_instances);
    __privateAdd(this, _map, /* @__PURE__ */ new Map());
    __privateAdd(this, _values, /* @__PURE__ */ new Set());
    __privateAdd(this, _keyByValue, /* @__PURE__ */ new Map());
    if (collection) {
      this.addCollection(collection);
    }
  }
  get size() {
    return __privateGet(this, _map).size;
  }
  get entries() {
    return Array.from(__privateGet(this, _map).entries());
  }
  get keys() {
    return __privateGet(this, _map).keys();
  }
  get values() {
    return __privateGet(this, _map).values();
  }
  get all() {
    return Array.from(__privateGet(this, _map).values());
  }
  get map() {
    return __privateGet(this, _map);
  }
  get(key) {
    return __privateGet(this, _map).get(key);
  }
  has(key) {
    return __privateGet(this, _map).has(key);
  }
  hasValue(value) {
    return __privateGet(this, _values).has(value);
  }
  keyFor(value) {
    return __privateGet(this, _keyByValue).get(value);
  }
  hasEntry(key, value) {
    return this.get(key) === value;
  }
  isKeyOf(key, value) {
    return this.keyFor(value) === key;
  }
  forEach(callbackFn, thisArg) {
    __privateGet(this, _map).forEach(callbackFn, thisArg);
  }
  set(key, value) {
    const exists = __privateGet(this, _map).has(key);
    const oldValue = exists ? __privateGet(this, _map).get(key) : void 0;
    const isReplacing = exists && oldValue !== value;
    __privateGet(this, _map).set(key, value);
    __privateGet(this, _values).add(value);
    __privateGet(this, _keyByValue).set(value, key);
    if (isReplacing) {
      __privateMethod(this, _ObservableMap_instances, removeFromValues_fn).call(this, oldValue);
      this.emit("delete", key, oldValue);
    }
    this.emit("set", key, value, oldValue);
    return true;
  }
  delete(key) {
    const exists = __privateGet(this, _map).has(key);
    if (!exists) {
      return false;
    }
    const value = __privateGet(this, _map).get(key);
    const deleted = __privateGet(this, _map).delete(key);
    if (deleted) {
      __privateMethod(this, _ObservableMap_instances, removeFromValues_fn).call(this, value);
      this.emit("delete", key, value);
    }
    return deleted;
  }
  updateKey(oldKey, newKey, item) {
    if (!this.has(oldKey)) {
      return false;
    }
    if (oldKey === newKey) {
      return false;
    }
    const value = this.get(oldKey);
    if (item !== void 0 && value !== item) {
      return false;
    }
    __privateGet(this, _map).delete(oldKey);
    __privateGet(this, _map).set(newKey, value);
    this.emit("key:updated", oldKey, newKey, value);
    return true;
  }
  clear() {
    if (__privateGet(this, _map).size > 0) {
      const itemsToDelete = Array.from(__privateGet(this, _map).entries());
      itemsToDelete.forEach(([key, value]) => {
        this.emit("delete", key, value);
      });
      __privateGet(this, _map).clear();
      __privateGet(this, _values).clear();
      __privateGet(this, _keyByValue).clear();
      this.emit("clear");
    }
  }
  addCollection(collection) {
    if (!collection || typeof collection !== "object") {
      return false;
    }
    if (typeof collection.forEach === "function") {
      collection.forEach((value, key) => {
        this.set(key, value);
      });
    } else {
      for (const key in collection) {
        if (Object.prototype.hasOwnProperty.call(collection, key)) {
          this.set(key, collection[key]);
        }
      }
    }
    return true;
  }
  toObject() {
    const object = {};
    __privateGet(this, _map).forEach((value, key) => {
      object[key] = value;
    });
    return object;
  }
}
_map = new WeakMap();
_values = new WeakMap();
_keyByValue = new WeakMap();
_ObservableMap_instances = new WeakSet();
removeFromValues_fn = function(value) {
  for (const [, v] of __privateGet(this, _map)) {
    if (v === value) {
      return;
    }
  }
  __privateGet(this, _values).delete(value);
  __privateGet(this, _keyByValue).delete(value);
};
class Registry extends ObservableMap {
  constructor(collection) {
    super(collection);
    __privateAdd(this, _Registry_instances);
    __privateAdd(this, _indexes, /* @__PURE__ */ new Map());
    this.on("set", __privateMethod(this, _Registry_instances, handleSet_fn));
    this.on("delete", __privateMethod(this, _Registry_instances, handleDelete_fn));
  }
  addIndex(name, keyFunction) {
    if (keyFunction === void 0) {
      keyFunction = name;
    }
    if (typeof keyFunction === "string") {
      const propertyName = keyFunction;
      keyFunction = (item) => item[propertyName];
    }
    if (typeof keyFunction !== "function") {
      return false;
    }
    const index = {
      keyFn: keyFunction,
      data: /* @__PURE__ */ new Map()
    };
    __privateGet(this, _indexes).set(name, index);
    for (const value of this.map.values()) {
      __privateMethod(this, _Registry_instances, addToIndex_fn).call(this, name, value);
    }
    return true;
  }
  lookup(indexName, key) {
    const index = __privateGet(this, _indexes).get(indexName);
    if (!index) {
      throw new Error(`Index '${indexName}' does not exist`);
    }
    const items = index.data.get(key);
    return items ? Array.from(items) : [];
  }
  lookupKeys(indexName, key) {
    const itemsSet = new Set(this.lookup(indexName, key));
    if (itemsSet.size === 0) {
      return [];
    }
    const keys = [];
    for (const [k, v] of this.map.entries()) {
      if (itemsSet.has(v)) {
        keys.push(k);
      }
    }
    return keys;
  }
  hasIndex(name) {
    return __privateGet(this, _indexes).has(name);
  }
  removeIndex(name) {
    return __privateGet(this, _indexes).delete(name);
  }
  updateIndexFor(item, indexName, oldKeys, newKeys) {
    if (!this.hasValue(item)) {
      return false;
    }
    const index = __privateGet(this, _indexes).get(indexName);
    if (!index) {
      return false;
    }
    const oldKeysArray = Array.isArray(oldKeys) ? oldKeys : [oldKeys];
    const newKeysArray = Array.isArray(newKeys) ? newKeys : [newKeys];
    for (const oldKey of oldKeysArray) {
      const items = index.data.get(oldKey);
      if (items) {
        items.delete(item);
        if (items.size === 0) {
          index.data.delete(oldKey);
        }
      }
    }
    for (const newKey of newKeysArray) {
      if (!index.data.has(newKey)) {
        index.data.set(newKey, /* @__PURE__ */ new Set());
      }
      index.data.get(newKey).add(item);
    }
    return true;
  }
  refreshIndexFor(value, indexName) {
    if (!this.hasValue(value)) {
      return false;
    }
    const index = __privateGet(this, _indexes).get(indexName);
    if (!index) {
      return false;
    }
    for (const [key, items] of index.data.entries()) {
      if (items.has(value)) {
        items.delete(value);
        if (items.size === 0) {
          index.data.delete(key);
        }
      }
    }
    __privateMethod(this, _Registry_instances, addToIndex_fn).call(this, indexName, value);
    return true;
  }
}
_indexes = new WeakMap();
_Registry_instances = new WeakSet();
handleSet_fn = function(key, value) {
  for (const indexName of __privateGet(this, _indexes).keys()) {
    __privateMethod(this, _Registry_instances, addToIndex_fn).call(this, indexName, value);
  }
};
handleDelete_fn = function(key, value) {
  for (const indexName of __privateGet(this, _indexes).keys()) {
    __privateMethod(this, _Registry_instances, removeFromIndex_fn).call(this, indexName, value);
  }
};
addToIndex_fn = function(indexName, value) {
  const index = __privateGet(this, _indexes).get(indexName);
  if (!index) {
    return;
  }
  const keys = getKeysForValue(index.keyFn, value);
  for (const key of keys) {
    if (!index.data.has(key)) {
      index.data.set(key, /* @__PURE__ */ new Set());
    }
    const items = index.data.get(key);
    items.add(value);
  }
};
removeFromIndex_fn = function(indexName, value) {
  const index = __privateGet(this, _indexes).get(indexName);
  if (!index) {
    return;
  }
  const keys = getKeysForValue(index.keyFn, value);
  for (const key of keys) {
    const items = index.data.get(key);
    if (!items) {
      continue;
    }
    items.delete(value);
    if (items.size === 0) {
      index.data.delete(key);
    }
  }
};
function getKeysForValue(keyFn, value) {
  const result = keyFn(value);
  if (Array.isArray(result)) {
    return result;
  }
  if (result === null || result === void 0) {
    return [];
  }
  return [result];
}
class ObservableSet extends Notifier {
  constructor(values) {
    super();
    __privateAdd(this, _set, /* @__PURE__ */ new Set());
    if (values) {
      for (const value of values) {
        __privateGet(this, _set).add(value);
      }
    }
  }
  get size() {
    return __privateGet(this, _set).size;
  }
  add(value) {
    if (!__privateGet(this, _set).has(value)) {
      __privateGet(this, _set).add(value);
      this.emit("add", value);
    }
    return this;
  }
  delete(value) {
    const deleted = __privateGet(this, _set).delete(value);
    if (deleted) {
      this.emit("delete", value);
    }
    return deleted;
  }
  clear() {
    if (__privateGet(this, _set).size > 0) {
      const values = Array.from(__privateGet(this, _set));
      __privateGet(this, _set).clear();
      this.emit("clear", values);
    }
  }
  has(value) {
    return __privateGet(this, _set).has(value);
  }
  values() {
    return __privateGet(this, _set).values();
  }
  keys() {
    return __privateGet(this, _set).keys();
  }
  entries() {
    return __privateGet(this, _set).entries();
  }
  forEach(callbackFn, thisArg) {
    __privateGet(this, _set).forEach(callbackFn, thisArg);
  }
  [Symbol.iterator]() {
    return __privateGet(this, _set)[Symbol.iterator]();
  }
  toArray() {
    return Array.from(__privateGet(this, _set));
  }
}
_set = new WeakMap();
function sanitizeRule(rule) {
  if (typeof rule === "string") {
    return new RegExp("^" + rule + "$", "i");
  }
  return rule;
}
function restoreCase(word, token) {
  if (word === token) {
    return token;
  }
  if (word === word.toLowerCase()) {
    return token.toLowerCase();
  }
  if (word === word.toUpperCase()) {
    return token.toUpperCase();
  }
  if (word[0] === word[0].toUpperCase()) {
    return token.charAt(0).toUpperCase() + token.slice(1).toLowerCase();
  }
  return token.toLowerCase();
}
function interpolate(str, args) {
  return str.replace(/\$(\d{1,2})/g, (_, index) => args[index] ?? "");
}
function replace(word, rule) {
  return word.replace(rule[0], function(match) {
    const result = interpolate(rule[1], arguments);
    if (match === "") {
      return restoreCase(word[arguments[arguments.length - 2] - 1], result);
    }
    return restoreCase(match, result);
  });
}
class Inflector {
  constructor() {
    __privateAdd(this, _Inflector_instances);
    __privateAdd(this, _pluralRules, []);
    __privateAdd(this, _singularRules, []);
    __privateAdd(this, _uncountables, {});
    __privateAdd(this, _irregularPlurals, {});
    __privateAdd(this, _irregularSingles, {});
    __privateMethod(this, _Inflector_instances, loadIrregulars_fn).call(this);
    __privateMethod(this, _Inflector_instances, loadPlurals_fn).call(this);
    __privateMethod(this, _Inflector_instances, loadSingulars_fn).call(this);
    __privateMethod(this, _Inflector_instances, loadUncountables_fn).call(this);
  }
  plural(word) {
    return __privateMethod(this, _Inflector_instances, replaceWord_fn).call(this, __privateGet(this, _irregularSingles), __privateGet(this, _irregularPlurals), __privateGet(this, _pluralRules))(word);
  }
  singular(word) {
    return __privateMethod(this, _Inflector_instances, replaceWord_fn).call(this, __privateGet(this, _irregularPlurals), __privateGet(this, _irregularSingles), __privateGet(this, _singularRules))(word);
  }
  isPlural(word) {
    return __privateMethod(this, _Inflector_instances, checkWord_fn).call(this, __privateGet(this, _irregularSingles), __privateGet(this, _irregularPlurals), __privateGet(this, _pluralRules))(word);
  }
  isSingular(word) {
    return __privateMethod(this, _Inflector_instances, checkWord_fn).call(this, __privateGet(this, _irregularPlurals), __privateGet(this, _irregularSingles), __privateGet(this, _singularRules))(word);
  }
  pluralize(word, count, inclusive) {
    const pluralized = count === 1 ? this.singular(word) : this.plural(word);
    return (inclusive ? count + " " : "") + pluralized;
  }
  toCamelCase(string) {
    return string.replace(/[-_\s]([a-z])/g, (match, letter) => letter.toUpperCase()).replace(/^[A-Z]/, (letter) => letter.toLowerCase());
  }
  toPascalCase(string) {
    return this.toCamelCase(string).replace(/^[a-z]/, (letter) => letter.toUpperCase());
  }
  toSnakeCase(string) {
    return string.replace(/[-\s]/g, "_").replace(/([A-Z])([A-Z][a-z])/g, "$1_$2").replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase().replace(/^_/, "");
  }
  toKebabCase(string) {
    return string.replace(/[_\s]/g, "-").replace(/([A-Z])([A-Z][a-z])/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase().replace(/^-/, "");
  }
  addPluralRule(rule, replacement) {
    __privateGet(this, _pluralRules).push([sanitizeRule(rule), replacement]);
  }
  addSingularRule(rule, replacement) {
    __privateGet(this, _singularRules).push([sanitizeRule(rule), replacement]);
  }
  addUncountableRule(word) {
    if (typeof word === "string") {
      __privateGet(this, _uncountables)[word.toLowerCase()] = true;
      return;
    }
    this.addPluralRule(word, "$0");
    this.addSingularRule(word, "$0");
  }
  addIrregularRule(single, pluralForm) {
    const s = single.toLowerCase();
    const p = pluralForm.toLowerCase();
    __privateGet(this, _irregularSingles)[s] = p;
    __privateGet(this, _irregularPlurals)[p] = s;
  }
}
_pluralRules = new WeakMap();
_singularRules = new WeakMap();
_uncountables = new WeakMap();
_irregularPlurals = new WeakMap();
_irregularSingles = new WeakMap();
_Inflector_instances = new WeakSet();
sanitizeWord_fn = function(token, word, rules) {
  if (!token.length || Object.hasOwn(__privateGet(this, _uncountables), token)) {
    return word;
  }
  for (let i = rules.length - 1; i >= 0; i--) {
    const rule = rules[i];
    if (rule[0].test(word)) {
      return replace(word, rule);
    }
  }
  return word;
};
replaceWord_fn = function(replaceMap, keepMap, rules) {
  return (word) => {
    const token = word.toLowerCase();
    if (Object.hasOwn(keepMap, token)) {
      return restoreCase(word, token);
    }
    if (Object.hasOwn(replaceMap, token)) {
      return restoreCase(word, replaceMap[token]);
    }
    return __privateMethod(this, _Inflector_instances, sanitizeWord_fn).call(this, token, word, rules);
  };
};
checkWord_fn = function(replaceMap, keepMap, rules) {
  return (word) => {
    const token = word.toLowerCase();
    if (Object.hasOwn(keepMap, token)) {
      return true;
    }
    if (Object.hasOwn(replaceMap, token)) {
      return false;
    }
    return __privateMethod(this, _Inflector_instances, sanitizeWord_fn).call(this, token, token, rules) === token;
  };
};
loadIrregulars_fn = function() {
  const irregulars = [
    ["I", "we"],
    ["me", "us"],
    ["he", "they"],
    ["she", "they"],
    ["them", "them"],
    ["myself", "ourselves"],
    ["yourself", "yourselves"],
    ["itself", "themselves"],
    ["herself", "themselves"],
    ["himself", "themselves"],
    ["themself", "themselves"],
    ["is", "are"],
    ["was", "were"],
    ["has", "have"],
    ["this", "these"],
    ["that", "those"],
    ["my", "our"],
    ["its", "their"],
    ["his", "their"],
    ["her", "their"],
    ["echo", "echoes"],
    ["dingo", "dingoes"],
    ["volcano", "volcanoes"],
    ["tornado", "tornadoes"],
    ["torpedo", "torpedoes"],
    ["genus", "genera"],
    ["viscus", "viscera"],
    ["stigma", "stigmata"],
    ["stoma", "stomata"],
    ["dogma", "dogmata"],
    ["lemma", "lemmata"],
    ["schema", "schemata"],
    ["anathema", "anathemata"],
    ["ox", "oxen"],
    ["axe", "axes"],
    ["die", "dice"],
    ["yes", "yeses"],
    ["foot", "feet"],
    ["eave", "eaves"],
    ["goose", "geese"],
    ["tooth", "teeth"],
    ["quiz", "quizzes"],
    ["human", "humans"],
    ["proof", "proofs"],
    ["carve", "carves"],
    ["valve", "valves"],
    ["looey", "looies"],
    ["thief", "thieves"],
    ["groove", "grooves"],
    ["pickaxe", "pickaxes"],
    ["passerby", "passersby"],
    ["canvas", "canvases"]
  ];
  for (const [single, pluralForm] of irregulars) {
    this.addIrregularRule(single, pluralForm);
  }
};
loadPlurals_fn = function() {
  const plurals = [
    [/s?$/i, "s"],
    [/[^\x20-\x7F]$/i, "$0"],
    [/([^aeiou]ese)$/i, "$1"],
    [/(ax|test)is$/i, "$1es"],
    [/(alias|[^aou]us|t[lm]as|gas|ris)$/i, "$1es"],
    [/(e[mn]u)s?$/i, "$1s"],
    [/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i, "$1"],
    [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, "$1i"],
    [/(alumn|alg|vertebr)(?:a|ae)$/i, "$1ae"],
    [/(seraph|cherub)(?:im)?$/i, "$1im"],
    [/(her|at|gr)o$/i, "$1oes"],
    [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i, "$1a"],
    [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i, "$1a"],
    [/sis$/i, "ses"],
    [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, "$1$2ves"],
    [/([^aeiouy]|qu)y$/i, "$1ies"],
    [/([^ch][ieo][ln])ey$/i, "$1ies"],
    [/(x|ch|ss|sh|zz)$/i, "$1es"],
    [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, "$1ices"],
    [/\b((?:tit)?m|l)(?:ice|ouse)$/i, "$1ice"],
    [/(pe)(?:rson|ople)$/i, "$1ople"],
    [/(child)(?:ren)?$/i, "$1ren"],
    [/eaux$/i, "$0"],
    [/m[ae]n$/i, "men"],
    ["thou", "you"]
  ];
  for (const [rule, replacement] of plurals) {
    this.addPluralRule(rule, replacement);
  }
};
loadSingulars_fn = function() {
  const singulars = [
    [/s$/i, ""],
    [/(ss)$/i, "$1"],
    [/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i, "$1fe"],
    [/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, "$1f"],
    [/ies$/i, "y"],
    [/(dg|ss|ois|lk|ok|wn|mb|th|ch|ec|oal|is|ck|ix|sser|ts|wb)ies$/i, "$1ie"],
    [/\b(l|(?:neck|cross|hog|aun)?t|coll|faer|food|gen|goon|group|hipp|junk|vegg|(?:pork)?p|charl|calor|cut)ies$/i, "$1ie"],
    [/\b(mon|smil)ies$/i, "$1ey"],
    [/\b((?:tit)?m|l)ice$/i, "$1ouse"],
    [/(seraph|cherub)im$/i, "$1"],
    [/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i, "$1"],
    [/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i, "$1sis"],
    [/(movie|twelve|abuse|e[mn]u)s$/i, "$1"],
    [/(test)(?:is|es)$/i, "$1is"],
    [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, "$1us"],
    [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i, "$1um"],
    [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i, "$1on"],
    [/(alumn|alg|vertebr)ae$/i, "$1a"],
    [/(cod|mur|sil|vert|ind)ices$/i, "$1ex"],
    [/(matr|append)ices$/i, "$1ix"],
    [/(pe)(rson|ople)$/i, "$1rson"],
    [/(child)ren$/i, "$1"],
    [/(eau)x?$/i, "$1"],
    [/men$/i, "man"]
  ];
  for (const [rule, replacement] of singulars) {
    this.addSingularRule(rule, replacement);
  }
};
loadUncountables_fn = function() {
  const uncountables = [
    "adulthood",
    "advice",
    "agenda",
    "aid",
    "aircraft",
    "alcohol",
    "ammo",
    "analytics",
    "anime",
    "athletics",
    "audio",
    "bison",
    "blood",
    "bream",
    "buffalo",
    "butter",
    "carp",
    "cash",
    "chassis",
    "chess",
    "clothing",
    "cod",
    "commerce",
    "cooperation",
    "corps",
    "debris",
    "diabetes",
    "digestion",
    "elk",
    "energy",
    "equipment",
    "excretion",
    "expertise",
    "firmware",
    "flounder",
    "fun",
    "gallows",
    "garbage",
    "graffiti",
    "hardware",
    "headquarters",
    "health",
    "herpes",
    "highjinks",
    "homework",
    "housework",
    "information",
    "jeans",
    "justice",
    "kudos",
    "labour",
    "literature",
    "machinery",
    "mackerel",
    "mail",
    "media",
    "mews",
    "moose",
    "music",
    "mud",
    "manga",
    "news",
    "only",
    "personnel",
    "pike",
    "plankton",
    "pliers",
    "police",
    "pollution",
    "premises",
    "rain",
    "research",
    "rice",
    "salmon",
    "scissors",
    "series",
    "sewage",
    "shambles",
    "shrimp",
    "software",
    "staff",
    "swine",
    "tennis",
    "traffic",
    "transportation",
    "trout",
    "tuna",
    "wealth",
    "welfare",
    "whiting",
    "wildebeest",
    "wildlife",
    "you",
    /pok[eé]mon$/i,
    /[^aeiou]ese$/i,
    /deer$/i,
    /fish$/i,
    /measles$/i,
    /o[iu]s$/i,
    /pox$/i,
    /sheep$/i
  ];
  for (const word of uncountables) {
    this.addUncountableRule(word);
  }
};
const inflector = new Inflector();
function toSnakeCase(string) {
  return inflector.toSnakeCase(string);
}
const idCounter = {};
function uniqueId(collection, prefix) {
  if (!prefix) {
    prefix = collection;
    collection = "default";
  }
  if (!idCounter[collection]) {
    idCounter[collection] = {};
  }
  if (!idCounter[collection][prefix]) {
    idCounter[collection][prefix] = 0;
  }
  const current = idCounter[collection][prefix];
  idCounter[collection][prefix]++;
  return current === 0 ? prefix : `${prefix}_${current}`;
}
function pluralize(word, count, inclusive) {
  return inflector.pluralize(word, count, inclusive);
}
function setDefaults(data, defaults) {
  return deepMerge(defaults, data);
}
function getNestedValue(obj, path) {
  if (!path) {
    return obj;
  }
  const parts = path.split(".");
  let current = obj;
  for (const part of parts) {
    if (current === void 0 || current === null) {
      return void 0;
    }
    current = current[part];
  }
  return current;
}
function setNestedValue(obj, path, value) {
  const parts = path.split(".");
  let current = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    const part = parts[i];
    if (!current[part]) {
      current[part] = {};
    }
    current = current[part];
  }
  current[parts[parts.length - 1]] = value;
  return obj;
}
function deepMerge(target, source) {
  return deepMergeInternal(target, source, /* @__PURE__ */ new WeakSet());
}
function deepMergeInternal(target, source, seen2) {
  if (!source) {
    return target;
  }
  if (typeof source === "object" && source !== null) {
    if (seen2.has(source)) {
      return source;
    }
    seen2.add(source);
  }
  const sourceIsArray = Array.isArray(source);
  const targetIsArray = Array.isArray(target);
  if (sourceIsArray !== targetIsArray) {
    return cloneIfNeeded(source, seen2);
  }
  if (sourceIsArray) {
    return mergeArrays(target, source, seen2);
  }
  return mergeObject(target, source, seen2);
}
function isNonNullObject(value) {
  return Boolean(value) && typeof value === "object";
}
function isSpecial(value) {
  const stringValue = Object.prototype.toString.call(value);
  return stringValue === "[object RegExp]" || stringValue === "[object Date]";
}
function isMergeableObject(value) {
  return isNonNullObject(value) && !isSpecial(value);
}
function emptyTarget(value) {
  return Array.isArray(value) ? [] : {};
}
function cloneIfNeeded(value, seen2) {
  return isMergeableObject(value) ? deepMergeInternal(emptyTarget(value), value, seen2) : value;
}
function mergeArrays(target, source, seen2) {
  return target.concat(source).map((element) => cloneIfNeeded(element, seen2));
}
function getKeys(target) {
  const symbols = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter((symbol) => Object.propertyIsEnumerable.call(target, symbol)) : [];
  return Object.keys(target).concat(symbols);
}
function mergeObject(target, source, seen2) {
  const destination = {};
  if (isMergeableObject(target)) {
    getKeys(target).forEach((key) => {
      destination[key] = cloneIfNeeded(target[key], seen2);
    });
  }
  getKeys(source).forEach((key) => {
    if (key in target && isMergeableObject(source[key])) {
      destination[key] = deepMergeInternal(target[key], source[key], seen2);
    } else {
      destination[key] = cloneIfNeeded(source[key], seen2);
    }
  });
  return destination;
}
function formatNumber$1(n) {
  if (typeof n !== "number") {
    return String(n);
  }
  return Number.isInteger(n) ? String(n) : n.toFixed(2);
}
function formatBytes(bytes) {
  if (bytes === 0) {
    return "0 B";
  }
  const units = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  const value = bytes / Math.pow(1024, i);
  return `${value.toFixed(i > 1 ? 2 : 0)} ${units[i]}`;
}
function delegateProperties(receiver, source, names) {
  if (Array.isArray(names)) {
    names.forEach((name) => delegateProperty(receiver, source, name, name));
  } else if (typeof names === "object") {
    Object.entries(names).forEach(([sourceName, receiverName]) => {
      delegateProperty(receiver, source, sourceName, receiverName);
    });
  }
}
function delegateProperty(receiver, source, sourceName, receiverName) {
  const descriptor = Object.getOwnPropertyDescriptor(source, sourceName);
  if (descriptor && (descriptor.get || descriptor.set)) {
    Object.defineProperty(receiver, receiverName, {
      get: descriptor.get ? descriptor.get.bind(source) : void 0,
      set: descriptor.set ? descriptor.set.bind(source) : void 0,
      enumerable: true,
      configurable: true
    });
  } else if (typeof source[sourceName] === "function") {
    receiver[receiverName] = source[sourceName].bind(source);
  } else {
    Object.defineProperty(receiver, receiverName, {
      get: () => source[sourceName],
      set: (value) => {
        source[sourceName] = value;
      },
      enumerable: true,
      configurable: true
    });
  }
}
class PerkyModule extends Notifier {
  constructor(options = {}) {
    super();
    __privateAdd(this, _PerkyModule_instances);
    __privateAdd(this, _id);
    __privateAdd(this, _name);
    __privateAdd(this, _category);
    __privateAdd(this, _bind);
    __privateAdd(this, _host, null);
    __privateAdd(this, _started, false);
    __privateAdd(this, _disposed, false);
    __privateAdd(this, _installed, false);
    __privateAdd(this, _eagerStart);
    __privateAdd(this, _lifecycle);
    __privateAdd(this, _childrenRegistry, null);
    __privateAdd(this, _tags, null);
    __privateAdd(this, _tagIndexes, /* @__PURE__ */ new Map());
    __privateAdd(this, _delegations, []);
    __privateAdd(this, _eventDelegations, []);
    this.options = { ...options };
    __privateSet(this, _name, options.$name || this.constructor.$name || this.constructor.name);
    __privateSet(this, _id, options.$id || __privateGet(this, _name));
    __privateSet(this, _category, options.$category || this.constructor.$category);
    __privateSet(this, _bind, options.$bind);
    __privateSet(this, _eagerStart, (options.$eagerStart ?? this.constructor.$eagerStart) !== false);
    __privateSet(this, _lifecycle, (options.$lifecycle ?? this.constructor.$lifecycle) !== false);
    __privateSet(this, _tags, new ObservableSet([
      ...this.constructor.$tags,
      ...options.$tags || []
    ]));
    __privateSet(this, _childrenRegistry, new Registry());
    __privateGet(this, _childrenRegistry).addIndex("$category");
  }
  get $id() {
    return __privateGet(this, _id);
  }
  set $id(newId) {
    const oldId = __privateGet(this, _id);
    if (oldId !== newId) {
      __privateSet(this, _id, newId);
      this.emit("$id:changed", newId, oldId);
    }
  }
  get $name() {
    return __privateGet(this, _name);
  }
  set $name(newName) {
    const oldName = __privateGet(this, _name);
    if (oldName !== newName) {
      __privateSet(this, _name, newName);
      this.emit("$name:changed", newName, oldName);
    }
  }
  get $category() {
    return __privateGet(this, _category);
  }
  set $category(newCategory) {
    const oldCategory = __privateGet(this, _category);
    if (oldCategory !== newCategory) {
      __privateSet(this, _category, newCategory);
      this.emit("$category:changed", newCategory, oldCategory);
    }
  }
  get $bind() {
    return __privateGet(this, _bind);
  }
  set $bind(newBind) {
    const oldBind = __privateGet(this, _bind);
    if (oldBind !== newBind) {
      __privateSet(this, _bind, newBind);
      this.emit("$bind:changed", newBind, oldBind);
    }
  }
  get host() {
    return __privateGet(this, _host);
  }
  get started() {
    return __privateGet(this, _started);
  }
  get disposed() {
    return __privateGet(this, _disposed);
  }
  get installed() {
    return __privateGet(this, _installed);
  }
  get $eagerStart() {
    return __privateGet(this, _eagerStart);
  }
  get $lifecycle() {
    return __privateGet(this, _lifecycle);
  }
  get $status() {
    if (!__privateGet(this, _lifecycle)) {
      return "static";
    }
    if (__privateGet(this, _disposed)) {
      return "disposed";
    }
    if (__privateGet(this, _started)) {
      return "started";
    }
    return "stopped";
  }
  get running() {
    return __privateGet(this, _started);
  }
  start() {
    var _a2;
    if (__privateGet(this, _started)) {
      return false;
    }
    __privateSet(this, _started, true);
    (_a2 = this.onStart) == null ? void 0 : _a2.call(this);
    this.emit("start");
    return true;
  }
  stop() {
    var _a2;
    if (!__privateGet(this, _started)) {
      return false;
    }
    __privateSet(this, _started, false);
    (_a2 = this.onStop) == null ? void 0 : _a2.call(this);
    this.emit("stop");
    return true;
  }
  dispose() {
    var _a2;
    if (__privateGet(this, _disposed)) {
      return false;
    }
    __privateSet(this, _disposed, true);
    this.stop();
    this.cleanExternalListeners();
    __privateGet(this, _childrenRegistry).forEach((child) => {
      if (child && !child.disposed) {
        child.dispose();
      }
    });
    __privateGet(this, _childrenRegistry).clear();
    (_a2 = this.onDispose) == null ? void 0 : _a2.call(this);
    this.emit("dispose");
    this.removeListeners();
    return true;
  }
  install(host, options) {
    var _a2;
    if (__privateGet(this, _installed)) {
      return this.uninstall();
    }
    __privateSet(this, _host, host);
    if (this.$bind) {
      host[this.$bind] = this;
    }
    __privateSet(this, _installed, true);
    (_a2 = this.onInstall) == null ? void 0 : _a2.call(this, host, options);
    return true;
  }
  uninstall() {
    var _a2;
    if (!__privateGet(this, _installed)) {
      return false;
    }
    this.cleanDelegations();
    this.cleanEventDelegations();
    (_a2 = this.onUninstall) == null ? void 0 : _a2.call(this, __privateGet(this, _host));
    __privateSet(this, _installed, false);
    __privateSet(this, _host, null);
    return true;
  }
  get children() {
    return __privateGet(this, _childrenRegistry).all;
  }
  get childrenRegistry() {
    return __privateGet(this, _childrenRegistry);
  }
  create(Child, options = {}) {
    options.$category || (options.$category = Child.$category);
    options.$name || (options.$name = Child.$name || options.$category);
    options.$id || (options.$id = uniqueId(__privateGet(this, _childrenRegistry), options.$name));
    options.$lifecycle = options.$lifecycle ?? Child.$lifecycle ?? true;
    options.$eagerStart = options.$eagerStart ?? Child.$eagerStart ?? true;
    return __privateMethod(this, _PerkyModule_instances, addChild_fn).call(this, new Child(options), options);
  }
  getChild(name) {
    return __privateGet(this, _childrenRegistry).get(name) || null;
  }
  hasChild(name) {
    return __privateGet(this, _childrenRegistry).has(name);
  }
  removeChild(name) {
    const child = __privateGet(this, _childrenRegistry).get(name);
    if (!child) {
      return false;
    }
    unregisterChild(this, child);
    return true;
  }
  listNamesFor(key, indexName = "$category") {
    return __privateGet(this, _childrenRegistry).lookupKeys(indexName, key);
  }
  lookup(indexName, key) {
    return __privateGet(this, _childrenRegistry).lookup(indexName, key);
  }
  childrenByCategory(category) {
    return this.lookup("$category", category);
  }
  get $tags() {
    return __privateGet(this, _tags).toArray();
  }
  set $tags(newTags) {
    __privateGet(this, _tags).clear();
    if (Array.isArray(newTags)) {
      newTags.forEach((tag) => __privateGet(this, _tags).add(tag));
    }
  }
  get tags() {
    return __privateGet(this, _tags);
  }
  hasTag(tag) {
    return __privateGet(this, _tags).has(tag);
  }
  addTag(tag) {
    if (__privateGet(this, _tags).has(tag)) {
      return false;
    }
    __privateGet(this, _tags).add(tag);
    return true;
  }
  removeTag(tag) {
    return __privateGet(this, _tags).delete(tag);
  }
  hasTags(tags) {
    if (typeof tags === "string") {
      return this.hasTag(tags);
    }
    return Array.isArray(tags) && tags.every((tag) => __privateGet(this, _tags).has(tag));
  }
  childrenByTags(tags) {
    const tagArray = Array.isArray(tags) ? tags : [tags];
    if (tagArray.length === 0) {
      return [];
    }
    const indexKey = getTagIndexKey(tagArray);
    if (__privateGet(this, _tagIndexes).has(indexKey)) {
      return __privateGet(this, _childrenRegistry).lookup(indexKey, indexKey);
    }
    return __privateGet(this, _childrenRegistry).all.filter(
      (child) => tagArray.every((tag) => {
        var _a2;
        return (_a2 = child.$tags) == null ? void 0 : _a2.includes(tag);
      })
    );
  }
  addTagsIndex(tags) {
    if (!Array.isArray(tags) || tags.length === 0) {
      return false;
    }
    const indexKey = getTagIndexKey(tags);
    if (__privateGet(this, _tagIndexes).has(indexKey)) {
      return false;
    }
    __privateGet(this, _childrenRegistry).addIndex(indexKey, (child) => {
      const hasAllTags = tags.every((tag) => {
        var _a2;
        return (_a2 = child.tags) == null ? void 0 : _a2.has(tag);
      });
      return hasAllTags ? indexKey : null;
    });
    __privateGet(this, _tagIndexes).set(indexKey, tags);
    __privateGet(this, _childrenRegistry).forEach((child) => {
      if (child.tags) {
        __privateMethod(this, _PerkyModule_instances, setupTagIndexListeners_fn).call(this, child);
      }
    });
    return true;
  }
  removeTagsIndex(tags) {
    const indexKey = getTagIndexKey(tags);
    if (!__privateGet(this, _tagIndexes).has(indexKey)) {
      return false;
    }
    __privateGet(this, _childrenRegistry).removeIndex(indexKey);
    __privateGet(this, _tagIndexes).delete(indexKey);
    return true;
  }
  delegateTo(host, names) {
    delegateProperties(host, this, names);
    const propertyNames = Array.isArray(names) ? names : Object.values(names);
    __privateGet(this, _delegations).push({ host, propertyNames });
  }
  cleanDelegations() {
    for (const { host, propertyNames } of __privateGet(this, _delegations)) {
      for (const name of propertyNames) {
        delete host[name];
      }
    }
    __privateGet(this, _delegations).length = 0;
  }
  delegateEventsTo(host, events, namespace) {
    const eventArray = Array.isArray(events) ? events : Object.keys(events);
    const callbacks = [];
    for (const event of eventArray) {
      const prefixedEvent = namespace ? `${namespace}:${event}` : event;
      const callback = (...args) => host.emit(prefixedEvent, ...args);
      this.on(event, callback);
      callbacks.push({ event, callback });
    }
    __privateGet(this, _eventDelegations).push({ callbacks });
  }
  cleanEventDelegations() {
    for (const { callbacks } of __privateGet(this, _eventDelegations)) {
      for (const { event, callback } of callbacks) {
        this.off(event, callback);
      }
    }
    __privateGet(this, _eventDelegations).length = 0;
  }
}
_id = new WeakMap();
_name = new WeakMap();
_category = new WeakMap();
_bind = new WeakMap();
_host = new WeakMap();
_started = new WeakMap();
_disposed = new WeakMap();
_installed = new WeakMap();
_eagerStart = new WeakMap();
_lifecycle = new WeakMap();
_childrenRegistry = new WeakMap();
_tags = new WeakMap();
_tagIndexes = new WeakMap();
_delegations = new WeakMap();
_eventDelegations = new WeakMap();
_PerkyModule_instances = new WeakSet();
addChild_fn = function(child, options = {}) {
  unregisterExisting(this, child.$id);
  child.install(this, options);
  __privateGet(this, _childrenRegistry).set(child.$id, child);
  setupLifecycle(this, child, options);
  __privateMethod(this, _PerkyModule_instances, setupTagIndexListeners_fn).call(this, child);
  this.emit(`${child.$category}:set`, child.$id, child);
  child.emit("registered", this, child.$id);
  return child;
};
setupTagIndexListeners_fn = function(child) {
  if (__privateGet(this, _tagIndexes).size === 0 || !child.tags) {
    return;
  }
  const refreshAllIndexes = () => {
    for (const indexKey of __privateGet(this, _tagIndexes).keys()) {
      __privateGet(this, _childrenRegistry).refreshIndexFor(child, indexKey);
    }
  };
  child.listenTo(child.tags, "add", refreshAllIndexes);
  child.listenTo(child.tags, "delete", refreshAllIndexes);
  child.listenTo(child.tags, "clear", refreshAllIndexes);
};
// === STATIC ===
__publicField(PerkyModule, "$category", "perkyModule");
__publicField(PerkyModule, "$name", null);
__publicField(PerkyModule, "$lifecycle", true);
__publicField(PerkyModule, "$eagerStart", true);
__publicField(PerkyModule, "$tags", []);
__publicField(PerkyModule, "perkyModuleMethods", Notifier.notifierMethods.concat([
  "start",
  "stop",
  "dispose",
  "install",
  "uninstall",
  "create",
  "getChild",
  "hasChild",
  "removeChild",
  "listNamesFor",
  "lookup",
  "childrenByCategory",
  "hasTag",
  "addTag",
  "removeTag",
  "hasTags",
  "childrenByTags",
  "addTagsIndex",
  "removeTagsIndex",
  "delegateTo",
  "cleanDelegations",
  "delegateEventsTo",
  "cleanEventDelegations"
]));
function setupLifecycle(host, child, options) {
  const { $lifecycle = true } = options;
  if (!$lifecycle) {
    return;
  }
  const childrenRegistry = host.childrenRegistry;
  if (host.started && child.$eagerStart) {
    child.start();
  }
  child.listenTo(host, "start", () => {
    child.start();
  });
  child.listenTo(host, "stop", () => {
    child.stop();
  });
  child.listenTo(host, "dispose", () => {
    if (childrenRegistry.hasEntry(child.$id, child)) {
      unregisterChild(host, child);
    }
  });
  child.once("dispose", () => {
    if (childrenRegistry.hasEntry(child.$id, child)) {
      unregisterChild(host, child);
    }
  });
  child.on("$category:changed", (newCategory, oldCategory) => {
    childrenRegistry.updateIndexFor(child, "$category", oldCategory, newCategory);
  });
  child.on("$id:changed", (newId, oldId) => {
    childrenRegistry.updateKey(oldId, newId, child);
  });
  child.on("$bind:changed", (newBind, oldBind) => {
    if (oldBind && host[oldBind] === child) {
      delete host[oldBind];
    }
    if (newBind) {
      host[newBind] = child;
    }
  });
}
function unregisterExisting(host, childName) {
  const children = host.childrenRegistry;
  if (children.has(childName)) {
    unregisterChild(host, children.get(childName));
  }
}
function unregisterChild(host, child) {
  if (host.childrenRegistry.hasEntry(child.$id, child)) {
    host.childrenRegistry.delete(child.$id);
  }
  if (child.$bind && host[child.$bind] === child) {
    delete host[child.$bind];
  }
  child.uninstall();
  host.emit(`${child.$category}:delete`, child.$id, child);
  child.emit("unregistered", host, child.$id);
  child.dispose();
}
function getTagIndexKey(tags) {
  return [...tags].sort().join("_");
}
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
    const { preload: preload2 = true, ...appParams } = params;
    const app = this.createApp(name, appParams);
    if (preload2 === "all") {
      await app.loadAll();
    } else if (preload2 === true) {
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
class Asset {
  constructor(params = {}) {
    this.type = params.type;
    this.name = params.name;
    this.id = params.id || guessId(params);
    this.name ?? (this.name = this.id);
    this.url = params.url || params.path;
    this.source = params.source;
    this.tags = params.tags || [];
    this.config = params.config || {};
  }
  get loaded() {
    return Boolean(this.source);
  }
  hasTag(tag) {
    return Array.isArray(this.tags) && this.tags.includes(tag);
  }
  export() {
    const exported = {
      type: this.type,
      id: this.id,
      name: this.name,
      tags: this.tags,
      config: this.config
    };
    if (this.url) {
      exported.url = this.url;
    } else if (this.source) {
      exported.source = this.source;
    }
    return exported;
  }
}
function guessId(params) {
  return uniqueId("assets", params.id || (params.name ? toSnakeCase(params.name) : params.type));
}
class Manifest extends PerkyModule {
  constructor(params = {}) {
    const { data = {}, ...moduleParams } = params;
    super(moduleParams);
    __privateAdd(this, _Manifest_instances);
    __privateAdd(this, _data);
    __privateSet(this, _data, setDefaults(data, {
      config: {},
      assets: {}
    }));
    this.assets = new Registry();
    this.assets.addIndex("type", (asset) => asset.type);
    this.assets.addIndex("tags", (asset) => asset.tags);
    __privateMethod(this, _Manifest_instances, initAssets_fn).call(this);
  }
  onInstall(host) {
    this.delegateTo(host, [
      "getConfig",
      "setConfig",
      "addAsset",
      "getAsset",
      "getAssets",
      "getAssetsByType",
      "getAssetsByTag",
      "getSource",
      "getAllAssets"
    ]);
    this.delegateTo(host, {
      export: "exportManifest",
      import: "importManifest"
    });
  }
  import(jsonData) {
    if (typeof jsonData === "string") {
      try {
        __privateSet(this, _data, JSON.parse(jsonData));
      } catch (error) {
        throw new Error(`Failed to parse manifest JSON: ${error.message}`);
      }
    } else if (jsonData && typeof jsonData === "object") {
      __privateSet(this, _data, jsonData);
    } else {
      throw new Error("Invalid manifest data: must be a JSON string or object");
    }
    this.assets.clear();
    __privateMethod(this, _Manifest_instances, initAssets_fn).call(this);
    return this;
  }
  export() {
    return deepMerge({}, {
      config: __privateGet(this, _data).config,
      assets: __privateMethod(this, _Manifest_instances, exportAssets_fn).call(this)
    });
  }
  getConfig(path) {
    if (path === void 0) {
      return __privateGet(this, _data).config;
    }
    return getNestedValue(__privateGet(this, _data).config, path);
  }
  setConfig(path, value) {
    setNestedValue(__privateGet(this, _data).config, path, value);
    return this;
  }
  addAsset(assetData) {
    validateAssetInput(assetData);
    const asset = prepareAsset(assetData);
    this.assets.set(asset.id, asset);
    return asset;
  }
  getAsset(id) {
    return this.assets.get(id) || null;
  }
  getSource(id) {
    const asset = this.getAsset(id);
    if (!asset) {
      return null;
    }
    return asset.source;
  }
  getAssetsByType(type) {
    return this.assets.lookup("type", type);
  }
  getAssetsByTag(tag) {
    if (!tag || typeof tag !== "string") {
      return [];
    }
    return this.assets.lookup("tags", tag);
  }
  getAssets() {
    return this.assets.all;
  }
  getAllAssets() {
    return this.assets.all;
  }
  hasAsset(id) {
    return this.assets.has(id);
  }
  removeAsset(id) {
    return this.assets.delete(id);
  }
}
_data = new WeakMap();
_Manifest_instances = new WeakSet();
initAssets_fn = function() {
  const { assets } = __privateGet(this, _data);
  if (!assets || typeof assets !== "object") {
    return;
  }
  Object.entries(assets).forEach(([id, assetData]) => {
    if (!assetData.id) {
      assetData.id = id;
    }
    const asset = prepareAsset(assetData);
    this.assets.set(asset.id, asset);
  });
};
exportAssets_fn = function() {
  const exported = {};
  for (const asset of this.assets.all) {
    exported[asset.id] = asset.export();
  }
  return exported;
};
__publicField(Manifest, "$category", "manifest");
__publicField(Manifest, "$lifecycle", false);
function validateAssetInput(assetData) {
  if (!assetData || typeof assetData !== "object") {
    throw new Error("Asset must be an object or Asset instance");
  }
}
function prepareAsset(assetData) {
  if (assetData instanceof Asset) {
    return assetData;
  }
  const asset = new Asset(assetData);
  if (!asset.id) {
    throw new Error("Asset must have an id");
  }
  return asset;
}
const _ActionController = class _ActionController extends PerkyModule {
  constructor(options = {}) {
    super(options);
    __privateAdd(this, _actions, new Registry());
    __privateAdd(this, _actionList, []);
    this.context = {};
    __privateSet(this, _actionList, extractPrototypeMethods(this));
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
__publicField(_ActionController, "propagable", []);
__publicField(_ActionController, "bindings", {});
__publicField(_ActionController, "$category", "actionController");
__publicField(_ActionController, "actionControllerMethods", _ActionController.perkyModuleMethods.concat([
  "addAction",
  "getAction",
  "removeAction",
  "hasAction",
  "shouldPropagate",
  "listActions",
  "execute",
  "context"
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
const CONSOLE_METHODS = {
  info: "info",
  warn: "warn",
  error: "error",
  notice: "log",
  success: "log"
};
class Logger extends Notifier {
  constructor() {
    super(...arguments);
    __privateAdd(this, _Logger_instances);
    __privateAdd(this, _history, []);
    __privateAdd(this, _maxHistory, 100);
    __privateAdd(this, _consoleOutput, true);
  }
  get history() {
    return __privateGet(this, _history);
  }
  get maxHistory() {
    return __privateGet(this, _maxHistory);
  }
  set maxHistory(value) {
    __privateSet(this, _maxHistory, value);
    __privateMethod(this, _Logger_instances, trimHistory_fn).call(this);
  }
  get consoleOutput() {
    return __privateGet(this, _consoleOutput);
  }
  set consoleOutput(value) {
    __privateSet(this, _consoleOutput, value);
  }
  log(type, ...items) {
    const entry = { event: "log", type, items, timestamp: Date.now() };
    __privateMethod(this, _Logger_instances, record_fn).call(this, entry);
    this.emit("log", entry);
    if (__privateGet(this, _consoleOutput)) {
      const method = CONSOLE_METHODS[type] || "log";
      console[method](...items);
    }
  }
  info(...items) {
    this.log("info", ...items);
  }
  notice(...items) {
    this.log("notice", ...items);
  }
  warn(...items) {
    this.log("warn", ...items);
  }
  error(...items) {
    this.log("error", ...items);
  }
  success(...items) {
    this.log("success", ...items);
  }
  clear() {
    const entry = { event: "clear", timestamp: Date.now() };
    __privateMethod(this, _Logger_instances, record_fn).call(this, entry);
    this.emit("clear", entry);
  }
  spacer() {
    const entry = { event: "spacer", timestamp: Date.now() };
    __privateMethod(this, _Logger_instances, record_fn).call(this, entry);
    this.emit("spacer", entry);
  }
  title(title) {
    const entry = { event: "title", title, timestamp: Date.now() };
    __privateMethod(this, _Logger_instances, record_fn).call(this, entry);
    this.emit("title", entry);
  }
  clearHistory() {
    __privateSet(this, _history, []);
  }
}
_history = new WeakMap();
_maxHistory = new WeakMap();
_consoleOutput = new WeakMap();
_Logger_instances = new WeakSet();
record_fn = function(entry) {
  __privateGet(this, _history).push(entry);
  __privateMethod(this, _Logger_instances, trimHistory_fn).call(this);
};
trimHistory_fn = function() {
  while (__privateGet(this, _history).length > __privateGet(this, _maxHistory)) {
    __privateGet(this, _history).shift();
  }
};
const logger = new Logger();
class ActionDispatcher extends PerkyModule {
  constructor() {
    super(...arguments);
    __privateAdd(this, _ActionDispatcher_instances);
    __privateAdd(this, _activeControllers, []);
    __publicField(this, "mainControllerName", null);
  }
  onInstall(host, options) {
    __privateMethod(this, _ActionDispatcher_instances, setupMainController_fn).call(this, options);
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
    return this.getController(this.mainControllerName);
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
  register(name, Controller = ActionController) {
    return this.create(Controller, {
      $id: name,
      $category: "controller"
    });
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
setupMainController_fn = function(options) {
  const mainOption = options.main ?? true;
  if (mainOption !== false) {
    const mainName = typeof mainOption === "string" ? mainOption : "main";
    this.mainControllerName = mainName;
    this.register(mainName);
    this.setActive(mainName);
  }
};
isControllerActive_fn = function(controllerName) {
  return __privateGet(this, _activeControllers).includes(controllerName);
};
__publicField(ActionDispatcher, "$category", "actionDispatcher");
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
    const element = document.createElement("div");
    element.id = params.id || uniqueId("perky_view", "perky_view");
    element.className = params.className || "perky-view";
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
class SourceLoader extends PerkyModule {
  constructor(assets, loaders2) {
    super();
    __privateAdd(this, _loadingPromises, {});
    this.loaders = loaders2 instanceof Registry ? loaders2 : new Registry(loaders2);
    this.assets = assets;
  }
  get assetCount() {
    return this.assets.length;
  }
  get loadedCount() {
    return this.assets.filter((asset) => asset.loaded).length;
  }
  get progress() {
    if (this.assetCount === 0) {
      return 1;
    }
    return this.loadedCount / this.assetCount;
  }
  async load() {
    if (this.loading) {
      return false;
    }
    this.loading = true;
    const promises = this.assets.map((asset) => {
      return this.loadAsset(asset);
    });
    await Promise.all(promises);
    this.loading = false;
    this.emit("complete", this.assets);
    return this.assets;
  }
  async loadAsset(asset) {
    const assetKey = `${asset.type}:${asset.id}`;
    if (asset.loaded) {
      return asset;
    }
    if (__privateGet(this, _loadingPromises)[assetKey]) {
      return __privateGet(this, _loadingPromises)[assetKey];
    }
    const loader = this.loaders.get(asset.type);
    if (!loader) {
      throw new Error(`No loader found for asset type: ${asset.type}`);
    }
    const params = asset.url ? {
      url: asset.url,
      config: asset.config || {}
    } : asset;
    __privateGet(this, _loadingPromises)[assetKey] = Promise.resolve().then(() => loader(params)).then((source) => {
      asset.source = source;
      delete __privateGet(this, _loadingPromises)[assetKey];
      this.emit("progress", this.progress, { asset, source });
      return asset;
    }).catch((error) => {
      delete __privateGet(this, _loadingPromises)[assetKey];
      this.emit("error", asset, error);
      throw error;
    });
    return __privateGet(this, _loadingPromises)[assetKey];
  }
}
_loadingPromises = new WeakMap();
class SourceManager extends PerkyModule {
  constructor(options = {}) {
    super(options);
    __privateAdd(this, _SourceManager_instances);
    this.loaders = options.loaders;
    this.manifest = options.manifest;
  }
  onInstall(host) {
    this.delegateTo(host, ["loadAsset", "loadTag", "loadAll", "loaders"]);
    this.delegateEventsTo(host, [
      "loader:progress",
      "loader:complete",
      "loader:error"
    ]);
  }
  async loadAsset(id) {
    const asset = this.manifest.getAsset(id);
    if (!asset) {
      throw new Error(`Asset not found: ${id}`);
    }
    const sourceLoader = new SourceLoader([asset], this.loaders);
    __privateMethod(this, _SourceManager_instances, setupLoaderEvents_fn).call(this, sourceLoader);
    await sourceLoader.load();
    return sourceLoader;
  }
  async loadTag(tag) {
    const assets = this.manifest.getAssetsByTag(tag);
    const sourceLoader = new SourceLoader(assets, this.loaders);
    __privateMethod(this, _SourceManager_instances, setupLoaderEvents_fn).call(this, sourceLoader);
    await sourceLoader.load();
    return sourceLoader;
  }
  async loadAll() {
    const assets = this.manifest.getAllAssets();
    const sourceLoader = new SourceLoader(assets, this.loaders);
    __privateMethod(this, _SourceManager_instances, setupLoaderEvents_fn).call(this, sourceLoader);
    await sourceLoader.load();
    return sourceLoader;
  }
}
_SourceManager_instances = new WeakSet();
setupLoaderEvents_fn = function(loader) {
  this.delegateEvents(loader, [
    "progress",
    "complete",
    "error"
  ], "loader");
};
__publicField(SourceManager, "$category", "sourceManager");
function normalizeParams(params) {
  if (typeof params === "string") {
    return { url: params, config: {} };
  }
  return {
    url: params.url,
    config: params.config || {}
  };
}
function checkResponse(response, url) {
  if (!response.ok) {
    throw new Error(`HTTP Error ${response.status} (${response.statusText}) for ${url}`);
  }
}
async function loadResponse(params) {
  const { url, config } = normalizeParams(params);
  return fetch(url, config);
}
async function loadBlob(params) {
  const { url } = normalizeParams(params);
  const response = await loadResponse(params);
  checkResponse(response, url);
  return response.blob();
}
async function loadImage(params) {
  const blob = await loadBlob(params);
  const url = URL.createObjectURL(blob);
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = function() {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = function() {
      URL.revokeObjectURL(url);
      const normalizedParams = normalizeParams(params);
      reject(new Error(`Failed to load image: ${normalizedParams.url}`));
    };
    img.src = url;
  });
}
async function loadText(params) {
  const { url } = normalizeParams(params);
  const response = await loadResponse(params);
  checkResponse(response, url);
  return response.text();
}
async function loadJson(params) {
  const { url } = normalizeParams(params);
  const response = await loadResponse(params);
  checkResponse(response, url);
  return response.json();
}
async function loadArrayBuffer(params) {
  const { url } = normalizeParams(params);
  const response = await loadResponse(params);
  checkResponse(response, url);
  return response.arrayBuffer();
}
let sharedAudioContext = null;
function getAudioContext() {
  if (!sharedAudioContext) {
    sharedAudioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  return sharedAudioContext;
}
async function loadAudio(params) {
  const arrayBuffer = await loadArrayBuffer(params);
  const audioContext = getAudioContext();
  return new Promise((resolve, reject) => {
    audioContext.decodeAudioData(
      arrayBuffer,
      function(decodedData) {
        resolve(decodedData);
      },
      function(error) {
        reject(new Error("Failed to decode audio data: " + (error ? error.message : "Unknown error")));
      }
    );
  });
}
function loadFont(params) {
  const { url, config } = normalizeParams(params);
  const {
    name,
    family = name,
    style = "normal",
    weight = "normal"
  } = config;
  const fontName = family || name;
  const font = new FontFace(fontName, `url(${url})`, { style, weight });
  return font.load().then(() => {
    document.fonts.add(font);
    return font;
  }).catch((error) => {
    throw new Error(`Failed to load font "${fontName}": ${error.message}`);
  });
}
const loaders = {
  response: loadResponse,
  blob: loadBlob,
  image: loadImage,
  text: loadText,
  json: loadJson,
  arrayBuffer: loadArrayBuffer,
  audio: loadAudio,
  font: loadFont
};
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
    __privateAdd(this, _currentY, 0);
    __privateAdd(this, _touchStartTime, 0);
    __privateAdd(this, _swipeReferenceY, 0);
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
_currentY = new WeakMap();
_touchStartTime = new WeakMap();
_swipeReferenceY = new WeakMap();
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
  __privateSet(this, _currentY, touch.clientY);
  __privateSet(this, _swipeReferenceY, touch.clientY);
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
  const previousY = __privateGet(this, _currentY);
  __privateSet(this, _currentY, touch.clientY);
  const positionControl = this.getControl("position");
  positionControl.setValue({
    x: touch.clientX,
    y: touch.clientY
  }, event);
  const deltaControl = this.getControl("delta");
  deltaControl.setValue({
    x: 0,
    y: __privateGet(this, _currentY) - previousY
  }, event);
  const deltaY = __privateGet(this, _swipeReferenceY) - __privateGet(this, _currentY);
  const swipeUpControl = this.getControl("swipeUp");
  const swipeDownControl = this.getControl("swipeDown");
  if (deltaY > this.swipeThreshold) {
    if (!swipeUpControl.isPressed) {
      swipeUpControl.press(event);
    }
    if (swipeDownControl.isPressed) {
      swipeDownControl.release(event);
      __privateSet(this, _swipeReferenceY, __privateGet(this, _currentY));
    }
  } else if (deltaY < -this.swipeThreshold) {
    if (!swipeDownControl.isPressed) {
      swipeDownControl.press(event);
    }
    if (swipeUpControl.isPressed) {
      swipeUpControl.release(event);
      __privateSet(this, _swipeReferenceY, __privateGet(this, _currentY));
    }
  }
  this.preventDefault(event, positionControl);
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
  if (swipeUpControl.isPressed) {
    swipeUpControl.release(event);
  }
  if (swipeDownControl.isPressed) {
    swipeDownControl.release(event);
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
      container: host.element
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
    const manifestData = options.manifest || this.constructor.manifest || {};
    this.create(Manifest, {
      $bind: "manifest",
      data: manifestData.export ? manifestData.export() : manifestData
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
    (_a2 = this.configureApplication) == null ? void 0 : _a2.call(this, options);
  }
  async preload() {
    return this.loadTag("preload");
  }
}
_Application_instances = new WeakSet();
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
const Easing = {
  linear: (t) => t,
  easeInQuad: (t) => t * t,
  easeOutQuad: (t) => t * (2 - t),
  easeInOutQuad: (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
  easeInCubic: (t) => t * t * t,
  easeOutCubic: (t) => --t * t * t + 1,
  easeInOutCubic: (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  easeInQuart: (t) => t * t * t * t,
  easeOutQuart: (t) => 1 - --t * t * t * t,
  easeInOutQuart: (t) => t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t,
  easeInQuint: (t) => t * t * t * t * t,
  easeOutQuint: (t) => 1 + --t * t * t * t * t,
  easeInOutQuint: (t) => t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t,
  easeInSine: (t) => 1 - Math.cos(t * Math.PI / 2),
  easeOutSine: (t) => Math.sin(t * Math.PI / 2),
  easeInOutSine: (t) => -(Math.cos(Math.PI * t) - 1) / 2,
  easeInExpo: (t) => t === 0 ? 0 : Math.pow(2, 10 * (t - 1)),
  easeOutExpo: (t) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
  easeInOutExpo: (t) => {
    if (t === 0) {
      return 0;
    }
    if (t === 1) {
      return 1;
    }
    if (t < 0.5) {
      return Math.pow(2, 20 * t - 10) / 2;
    }
    return (2 - Math.pow(2, -20 * t + 10)) / 2;
  },
  easeInCirc: (t) => 1 - Math.sqrt(1 - t * t),
  easeOutCirc: (t) => Math.sqrt(1 - --t * t),
  easeInOutCirc: (t) => t < 0.5 ? (1 - Math.sqrt(1 - 4 * t * t)) / 2 : (Math.sqrt(1 - Math.pow(-2 * t + 2, 2)) + 1) / 2,
  easeInBack: (t) => 2.70158 * t * t * t - 1.70158 * t * t,
  easeOutBack: (t) => 1 + 2.70158 * Math.pow(t - 1, 3) + 1.70158 * Math.pow(t - 1, 2),
  easeInOutBack: (t) => {
    const c = 1.70158 * 1.525;
    return t < 0.5 ? Math.pow(2 * t, 2) * ((c + 1) * 2 * t - c) / 2 : (Math.pow(2 * t - 2, 2) * ((c + 1) * (t * 2 - 2) + c) + 2) / 2;
  },
  easeInElastic: (t) => {
    if (t === 0) {
      return 0;
    }
    if (t === 1) {
      return 1;
    }
    return -Math.pow(2, 10 * t - 10) * Math.sin((t * 10 - 10.75) * (2 * Math.PI) / 3);
  },
  easeOutElastic: (t) => {
    if (t === 0) {
      return 0;
    }
    if (t === 1) {
      return 1;
    }
    return Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * (2 * Math.PI) / 3) + 1;
  },
  easeInOutElastic: (t) => {
    if (t === 0) {
      return 0;
    }
    if (t === 1) {
      return 1;
    }
    if (t < 0.5) {
      return -(Math.pow(2, 20 * t - 10) * Math.sin((20 * t - 11.125) * (2 * Math.PI) / 4.5)) / 2;
    }
    return Math.pow(2, -20 * t + 10) * Math.sin((20 * t - 11.125) * (2 * Math.PI) / 4.5) / 2 + 1;
  },
  easeInBounce: (t) => 1 - Easing.easeOutBounce(1 - t),
  easeOutBounce: (t) => {
    if (t < 1 / 2.75) {
      return 7.5625 * t * t;
    } else if (t < 2 / 2.75) {
      return 7.5625 * (t -= 1.5 / 2.75) * t + 0.75;
    } else if (t < 2.5 / 2.75) {
      return 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375;
    }
    return 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
  },
  easeInOutBounce: (t) => t < 0.5 ? (1 - Easing.easeOutBounce(1 - 2 * t)) / 2 : (1 + Easing.easeOutBounce(2 * t - 1)) / 2,
  resolve(easing) {
    if (typeof easing === "function") {
      return easing;
    }
    if (typeof easing === "string" && Easing[easing]) {
      return Easing[easing];
    }
    return Easing.linear;
  },
  lerp(start, end, t, easing = "linear") {
    const easedT = Easing.resolve(easing)(t);
    return start + (end - start) * easedT;
  }
};
class Camera2D extends PerkyModule {
  constructor(options = {}) {
    super(options);
    this.x = options.x ?? 0;
    this.y = options.y ?? 0;
    this.zoom = options.zoom ?? 1;
    this.rotation = options.rotation ?? 0;
    const unitsInView = options.unitsInView ?? 10;
    if (typeof unitsInView === "number") {
      this.unitsInView = { height: unitsInView };
    } else {
      this.unitsInView = unitsInView;
    }
    this.viewportWidth = options.viewportWidth ?? 800;
    this.viewportHeight = options.viewportHeight ?? 600;
    this.pixelRatio = options.pixelRatio ?? 1;
    this.followTarget = null;
    this.followSpeed = 0.1;
    this.offsetX = 0;
    this.offsetY = 0;
    this.offsetZoom = 0;
    this.offsetRotation = 0;
    this.transition = null;
    this.effects = [];
  }
  get pixelsPerUnit() {
    const effectiveZoom = this.zoom + this.offsetZoom;
    if (this.unitsInView.width && this.unitsInView.height) {
      const ppuForWidth = this.viewportWidth / this.unitsInView.width;
      const ppuForHeight = this.viewportHeight / this.unitsInView.height;
      return Math.min(ppuForWidth, ppuForHeight) * effectiveZoom;
    } else if (this.unitsInView.width) {
      return this.viewportWidth / this.unitsInView.width * effectiveZoom;
    } else {
      return this.viewportHeight / this.unitsInView.height * effectiveZoom;
    }
  }
  get effectiveX() {
    return this.x + this.offsetX;
  }
  get effectiveY() {
    return this.y + this.offsetY;
  }
  get effectiveRotation() {
    return this.rotation + this.offsetRotation;
  }
  setUnitsInView(units) {
    if (typeof units === "number") {
      this.unitsInView = { height: units };
    } else {
      this.unitsInView = units;
    }
    return this;
  }
  setZoom(zoom) {
    this.zoom = zoom;
    return this;
  }
  setPosition(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }
  follow(target, speed = 0.1) {
    this.followTarget = target;
    this.followSpeed = speed;
    return this;
  }
  stopFollow() {
    this.followTarget = null;
    return this;
  }
  animateTo(config, options = {}) {
    const duration = options.duration ?? 1;
    const easing = options.easing ?? "easeOutQuad";
    const onComplete = options.onComplete ?? null;
    this.transition = {
      startX: this.x,
      startY: this.y,
      startZoom: this.zoom,
      startRotation: this.rotation,
      targetX: config.x ?? this.x,
      targetY: config.y ?? this.y,
      targetZoom: config.zoom ?? this.zoom,
      targetRotation: config.rotation ?? this.rotation,
      duration,
      elapsed: 0,
      easing: Easing.resolve(easing),
      onComplete
    };
    return this;
  }
  transitionTo(otherCamera, options = {}) {
    return this.animateTo({
      x: otherCamera.x,
      y: otherCamera.y,
      zoom: otherCamera.zoom,
      rotation: otherCamera.rotation
    }, options);
  }
  cancelTransition() {
    this.transition = null;
    return this;
  }
  animate(handler, options = {}) {
    const effect = {
      handler,
      duration: options.duration ?? Infinity,
      elapsed: 0,
      onComplete: options.onComplete ?? null
    };
    this.effects.push(effect);
    return this;
  }
  shake(options = {}) {
    const intensity = options.intensity ?? 0.5;
    const duration = options.duration ?? 0.3;
    const decay = options.decay ?? true;
    return this.animate((deltaTime, elapsed, total) => {
      const progress = elapsed / total;
      const factor = decay ? 1 - progress : 1;
      this.offsetX = (Math.random() - 0.5) * 2 * intensity * factor;
      this.offsetY = (Math.random() - 0.5) * 2 * intensity * factor;
      return progress >= 1;
    }, {
      duration,
      onComplete: () => {
        this.offsetX = 0;
        this.offsetY = 0;
      }
    });
  }
  clearEffects() {
    this.effects = [];
    this.offsetX = 0;
    this.offsetY = 0;
    this.offsetZoom = 0;
    this.offsetRotation = 0;
    return this;
  }
  update(deltaTime = 0) {
    if (this.followTarget) {
      const dx = this.followTarget.x - this.x;
      const dy = this.followTarget.y - this.y;
      this.x += dx * this.followSpeed;
      this.y += dy * this.followSpeed;
    }
    if (!deltaTime) {
      return;
    }
    if (this.transition) {
      this.transition.elapsed += deltaTime;
      const t = Math.min(this.transition.elapsed / this.transition.duration, 1);
      const easedT = this.transition.easing(t);
      this.x = this.transition.startX + (this.transition.targetX - this.transition.startX) * easedT;
      this.y = this.transition.startY + (this.transition.targetY - this.transition.startY) * easedT;
      this.zoom = this.transition.startZoom + (this.transition.targetZoom - this.transition.startZoom) * easedT;
      this.rotation = this.transition.startRotation + (this.transition.targetRotation - this.transition.startRotation) * easedT;
      if (t >= 1) {
        const onComplete = this.transition.onComplete;
        this.transition = null;
        if (onComplete) {
          onComplete();
        }
      }
    }
    for (let i = this.effects.length - 1; i >= 0; i--) {
      const effect = this.effects[i];
      effect.elapsed += deltaTime;
      const done = effect.handler(deltaTime, effect.elapsed, effect.duration);
      if (done) {
        if (effect.onComplete) {
          effect.onComplete();
        }
        this.effects.splice(i, 1);
      }
    }
  }
  worldToScreen(worldX, worldY) {
    const ppu = this.pixelsPerUnit;
    const rotation = this.effectiveRotation;
    let dx = worldX - this.effectiveX;
    let dy = worldY - this.effectiveY;
    if (rotation !== 0) {
      const cos = Math.cos(-rotation);
      const sin = Math.sin(-rotation);
      const rotatedX = dx * cos - dy * sin;
      const rotatedY = dx * sin + dy * cos;
      dx = rotatedX;
      dy = rotatedY;
    }
    const screenX = dx * ppu + this.viewportWidth / 2;
    const screenY = -dy * ppu + this.viewportHeight / 2;
    return { x: screenX, y: screenY };
  }
  worldToScreenCSS(worldX, worldY) {
    return this.worldToScreen(worldX, worldY);
  }
  screenToWorld(screenX, screenY) {
    const ppu = this.pixelsPerUnit;
    const rotation = this.effectiveRotation;
    let dx = (screenX - this.viewportWidth / 2) / ppu;
    let dy = -((screenY - this.viewportHeight / 2) / ppu);
    if (rotation !== 0) {
      const cos = Math.cos(rotation);
      const sin = Math.sin(rotation);
      const rotatedX = dx * cos - dy * sin;
      const rotatedY = dx * sin + dy * cos;
      dx = rotatedX;
      dy = rotatedY;
    }
    const worldX = dx + this.effectiveX;
    const worldY = dy + this.effectiveY;
    return { x: worldX, y: worldY };
  }
  isVisible(bounds) {
    if (!bounds || bounds.width === 0 && bounds.height === 0) {
      return false;
    }
    const halfWidth = this.viewportWidth / (2 * this.pixelsPerUnit);
    const halfHeight = this.viewportHeight / (2 * this.pixelsPerUnit);
    const cameraMinX = this.effectiveX - halfWidth;
    const cameraMaxX = this.effectiveX + halfWidth;
    const cameraMinY = this.effectiveY - halfHeight;
    const cameraMaxY = this.effectiveY + halfHeight;
    return !(bounds.maxX < cameraMinX || bounds.minX > cameraMaxX || bounds.maxY < cameraMinY || bounds.minY > cameraMaxY);
  }
  applyToContext(ctx, pixelRatio = 1) {
    const physicalWidth = this.viewportWidth * pixelRatio;
    const physicalHeight = this.viewportHeight * pixelRatio;
    const rotation = this.effectiveRotation;
    ctx.translate(physicalWidth / 2, physicalHeight / 2);
    if (rotation !== 0) {
      ctx.rotate(-rotation);
    }
    const ppu = this.pixelsPerUnit * pixelRatio;
    ctx.scale(ppu, -ppu);
    ctx.translate(-this.effectiveX, -this.effectiveY);
  }
}
__publicField(Camera2D, "$category", "camera");
class BaseRenderer extends PerkyModule {
  constructor(options = {}) {
    super(options);
    __privateAdd(this, _BaseRenderer_instances);
    __privateAdd(this, _resizeObserver2, null);
    __privateAdd(this, _autoFitEnabled, false);
    this.canvas = options.canvas || document.createElement("canvas");
    this.pixelRatio = options.pixelRatio ?? 1;
    this.displayWidth = options.width ?? this.canvas.width;
    this.displayHeight = options.height ?? this.canvas.height;
    this.camera = options.camera ?? new Camera2D({
      viewportWidth: this.displayWidth,
      viewportHeight: this.displayHeight,
      pixelRatio: 1
    });
    if (options.container) {
      this.container = options.container;
    }
    if (options.autoFit) {
      this.autoFitEnabled = true;
    }
  }
  get container() {
    var _a2;
    return (_a2 = this.canvas) == null ? void 0 : _a2.parentElement;
  }
  set container(value) {
    if (value) {
      value.appendChild(this.canvas);
      __privateMethod(this, _BaseRenderer_instances, refreshAutoFit_fn).call(this);
    }
  }
  get autoFitEnabled() {
    return __privateGet(this, _autoFitEnabled);
  }
  set autoFitEnabled(value) {
    if (__privateGet(this, _autoFitEnabled) === value) {
      return;
    }
    __privateSet(this, _autoFitEnabled, value);
    __privateMethod(this, _BaseRenderer_instances, updateAutoFitObserver_fn).call(this);
  }
  applyPixelRatio() {
    this.canvas.width = this.displayWidth * this.pixelRatio;
    this.canvas.height = this.displayHeight * this.pixelRatio;
    this.canvas.style.width = `${this.displayWidth}px`;
    this.canvas.style.height = `${this.displayHeight}px`;
    if (this.camera) {
      this.camera.viewportWidth = this.displayWidth;
      this.camera.viewportHeight = this.displayHeight;
    }
  }
  setPixelRatio(ratio) {
    this.pixelRatio = ratio;
    this.applyPixelRatio();
    return this;
  }
  resize(width, height) {
    this.displayWidth = width;
    this.displayHeight = height;
    this.applyPixelRatio();
    return this;
  }
  resizeToContainer() {
    const parent = this.canvas.parentElement;
    if (!parent) {
      return this;
    }
    const width = parent.clientWidth;
    const height = parent.clientHeight;
    if (width > 0 && height > 0) {
      return this.resize(width, height);
    }
    return this;
  }
  onDispose() {
    this.autoFitEnabled = false;
    if (this.canvas && this.canvas.parentElement) {
      this.canvas.parentElement.removeChild(this.canvas);
    }
    this.canvas = null;
    this.camera = null;
  }
}
_resizeObserver2 = new WeakMap();
_autoFitEnabled = new WeakMap();
_BaseRenderer_instances = new WeakSet();
updateAutoFitObserver_fn = function() {
  if (__privateGet(this, _resizeObserver2)) {
    __privateGet(this, _resizeObserver2).disconnect();
    __privateSet(this, _resizeObserver2, null);
  }
  if (!__privateGet(this, _autoFitEnabled) || !this.container) {
    return;
  }
  __privateSet(this, _resizeObserver2, new ResizeObserver((entries) => {
    for (const entry of entries) {
      const { width, height } = entry.contentRect;
      if (width > 0 && height > 0) {
        this.resize(width, height);
      }
    }
  }));
  __privateGet(this, _resizeObserver2).observe(this.container);
  const { clientWidth, clientHeight } = this.container;
  if (clientWidth > 0 && clientHeight > 0) {
    this.resize(clientWidth, clientHeight);
  }
};
refreshAutoFit_fn = function() {
  if (__privateGet(this, _autoFitEnabled)) {
    __privateMethod(this, _BaseRenderer_instances, updateAutoFitObserver_fn).call(this);
  }
};
__publicField(BaseRenderer, "$category", "renderer");
function traverseAndCollect(object, rendererRegistry, options = {}) {
  const ctx = {
    rendererRegistry,
    camera: options.camera ?? null,
    enableCulling: options.enableCulling ?? false,
    stats: options.stats ?? null,
    debugGizmoRenderer: options.debugGizmoRenderer ?? null
  };
  traverseNode(object, ctx, 1);
}
function traverseNode(object, ctx, parentOpacity) {
  if (!object.visible) {
    return;
  }
  if (ctx.stats) {
    ctx.stats.totalObjects++;
  }
  if (ctx.enableCulling && ctx.camera) {
    const worldBounds = object.getWorldBounds();
    if (!ctx.camera.isVisible(worldBounds)) {
      if (ctx.stats) {
        ctx.stats.culledObjects++;
      }
      return;
    }
  }
  if (ctx.stats) {
    ctx.stats.renderedObjects++;
  }
  const effectiveOpacity = parentOpacity * object.opacity;
  const renderer = ctx.rendererRegistry.get(object.constructor);
  if (renderer) {
    renderer.collect(object, effectiveOpacity, object.renderHints);
  }
  if (ctx.debugGizmoRenderer && object.debugGizmos) {
    ctx.debugGizmoRenderer.collectGizmo(object, effectiveOpacity);
  }
  const sortedChildren = object.getSortedChildren ? object.getSortedChildren() : object.children;
  for (let i = 0, len = sortedChildren.length; i < len; i++) {
    traverseNode(sortedChildren[i], ctx, effectiveOpacity);
  }
}
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
class Transform2D {
  constructor() {
    __privateAdd(this, _x, 0);
    __privateAdd(this, _y, 0);
    __privateAdd(this, _rotation, 0);
    __privateAdd(this, _scaleX, 1);
    __privateAdd(this, _scaleY, 1);
    __privateAdd(this, _pivotX, 0);
    __privateAdd(this, _pivotY, 0);
    __privateAdd(this, _localMatrix);
    __privateAdd(this, _worldMatrix);
    __privateAdd(this, _dirty);
    __privateAdd(this, _sortedChildren);
    __privateAdd(this, _childrenNeedSort);
    this.parent = null;
    this.children = [];
    __privateSet(this, _sortedChildren, null);
    __privateSet(this, _childrenNeedSort, false);
    __privateSet(this, _localMatrix, [1, 0, 0, 1, 0, 0]);
    __privateSet(this, _worldMatrix, [1, 0, 0, 1, 0, 0]);
    __privateSet(this, _dirty, true);
  }
  get x() {
    return __privateGet(this, _x);
  }
  set x(value) {
    if (__privateGet(this, _x) !== value) {
      __privateSet(this, _x, value);
      this.markDirty();
    }
  }
  get y() {
    return __privateGet(this, _y);
  }
  set y(value) {
    if (__privateGet(this, _y) !== value) {
      __privateSet(this, _y, value);
      this.markDirty();
    }
  }
  get rotation() {
    return __privateGet(this, _rotation);
  }
  set rotation(value) {
    if (__privateGet(this, _rotation) !== value) {
      __privateSet(this, _rotation, value);
      this.markDirty();
    }
  }
  get scaleX() {
    return __privateGet(this, _scaleX);
  }
  set scaleX(value) {
    if (__privateGet(this, _scaleX) !== value) {
      __privateSet(this, _scaleX, value);
      this.markDirty();
    }
  }
  get scaleY() {
    return __privateGet(this, _scaleY);
  }
  set scaleY(value) {
    if (__privateGet(this, _scaleY) !== value) {
      __privateSet(this, _scaleY, value);
      this.markDirty();
    }
  }
  get pivotX() {
    return __privateGet(this, _pivotX);
  }
  set pivotX(value) {
    if (__privateGet(this, _pivotX) !== value) {
      __privateSet(this, _pivotX, value);
      this.markDirty();
    }
  }
  get pivotY() {
    return __privateGet(this, _pivotY);
  }
  set pivotY(value) {
    if (__privateGet(this, _pivotY) !== value) {
      __privateSet(this, _pivotY, value);
      this.markDirty();
    }
  }
  get worldMatrix() {
    return __privateGet(this, _worldMatrix);
  }
  add(...children) {
    children.forEach((child) => {
      if (child.parent) {
        child.parent.remove(child);
      }
      this.children.push(child);
      child.parent = this;
      child.markDirty();
    });
    this.markChildrenNeedSort();
    return this;
  }
  remove(child) {
    const index = this.children.indexOf(child);
    if (index !== -1) {
      this.children.splice(index, 1);
      child.parent = null;
      child.markDirty();
    }
    this.markChildrenNeedSort();
    return this;
  }
  markChildrenNeedSort() {
    __privateSet(this, _childrenNeedSort, true);
    __privateSet(this, _sortedChildren, null);
  }
  getSortedChildren() {
    if (__privateGet(this, _childrenNeedSort) || !__privateGet(this, _sortedChildren)) {
      __privateSet(this, _sortedChildren, this.children.slice().sort((a, b) => (a.depth ?? 0) - (b.depth ?? 0)));
      __privateSet(this, _childrenNeedSort, false);
    }
    return __privateGet(this, _sortedChildren);
  }
  markDirty() {
    __privateSet(this, _dirty, true);
    this.children.forEach((child) => child.markDirty());
  }
  updateLocalMatrix() {
    const cos = Math.cos(this.rotation);
    const sin = Math.sin(this.rotation);
    const px = -this.pivotX;
    const py = -this.pivotY;
    const a = cos * this.scaleX;
    const b = sin * this.scaleX;
    const c = -sin * this.scaleY;
    const d = cos * this.scaleY;
    __privateGet(this, _localMatrix)[0] = a;
    __privateGet(this, _localMatrix)[1] = b;
    __privateGet(this, _localMatrix)[2] = c;
    __privateGet(this, _localMatrix)[3] = d;
    __privateGet(this, _localMatrix)[4] = this.x + (px * a + py * c);
    __privateGet(this, _localMatrix)[5] = this.y + (px * b + py * d);
  }
  updateWorldMatrix(force = false) {
    if (__privateGet(this, _dirty) || force) {
      this.updateLocalMatrix();
      if (this.parent) {
        multiplyMatrices(__privateGet(this.parent, _worldMatrix), __privateGet(this, _localMatrix), __privateGet(this, _worldMatrix));
      } else {
        __privateSet(this, _worldMatrix, [...__privateGet(this, _localMatrix)]);
      }
      __privateSet(this, _dirty, false);
    }
    this.children.forEach((child) => child.updateWorldMatrix(force));
  }
  transformPoint(point, matrix = __privateGet(this, _worldMatrix)) {
    return {
      x: matrix[0] * point.x + matrix[2] * point.y + matrix[4],
      y: matrix[1] * point.x + matrix[3] * point.y + matrix[5]
    };
  }
}
_x = new WeakMap();
_y = new WeakMap();
_rotation = new WeakMap();
_scaleX = new WeakMap();
_scaleY = new WeakMap();
_pivotX = new WeakMap();
_pivotY = new WeakMap();
_localMatrix = new WeakMap();
_worldMatrix = new WeakMap();
_dirty = new WeakMap();
_sortedChildren = new WeakMap();
_childrenNeedSort = new WeakMap();
function multiplyMatrices(a, b, out) {
  const a0 = a[0];
  const a1 = a[1];
  const a2 = a[2];
  const a3 = a[3];
  const a4 = a[4];
  const a5 = a[5];
  out[0] = a0 * b[0] + a2 * b[1];
  out[1] = a1 * b[0] + a3 * b[1];
  out[2] = a0 * b[2] + a2 * b[3];
  out[3] = a1 * b[2] + a3 * b[3];
  out[4] = a0 * b[4] + a2 * b[5] + a4;
  out[5] = a1 * b[4] + a3 * b[5] + a5;
}
class ShaderEffect {
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
    return this.constructor.name;
  }
  getParams() {
    const { params } = this.constructor.shader;
    return params.map((name) => this[name] ?? 0);
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
__publicField(ShaderEffect, "shader", {
  params: [],
  uniforms: [],
  fragment: ""
});
class SpriteEffectStack {
  constructor() {
    __privateAdd(this, _effects, []);
    __privateSet(this, _effects, []);
  }
  get effects() {
    return __privateGet(this, _effects);
  }
  get count() {
    return __privateGet(this, _effects).length;
  }
  add(effect) {
    if (this.has(effect.constructor)) {
      return this;
    }
    __privateGet(this, _effects).push(effect);
    return this;
  }
  remove(EffectClass) {
    const index = __privateGet(this, _effects).findIndex((e) => e.constructor === EffectClass);
    if (index !== -1) {
      const effect = __privateGet(this, _effects)[index];
      effect.dispose();
      __privateGet(this, _effects).splice(index, 1);
    }
    return this;
  }
  get(EffectClass) {
    return __privateGet(this, _effects).find((e) => e.constructor === EffectClass) || null;
  }
  has(EffectClass) {
    return __privateGet(this, _effects).some((e) => e.constructor === EffectClass);
  }
  clear() {
    for (const effect of __privateGet(this, _effects)) {
      effect.dispose();
    }
    __privateSet(this, _effects, []);
    return this;
  }
  getHints() {
    const hints = {};
    for (const effect of __privateGet(this, _effects)) {
      if (!effect.enabled) {
        continue;
      }
      const effectHints = effect.getHints();
      if (effectHints) {
        hints[effect.type] = effectHints;
      }
    }
    return Object.keys(hints).length > 0 ? hints : null;
  }
  update(deltaTime) {
    for (const effect of __privateGet(this, _effects)) {
      if (effect.enabled) {
        effect.update(deltaTime);
      }
    }
  }
  dispose() {
    this.clear();
  }
  getShaderEffectTypes() {
    const types = [];
    for (const effect of __privateGet(this, _effects)) {
      if (effect.enabled && effect instanceof ShaderEffect) {
        types.push(effect.type);
      }
    }
    return types;
  }
  getShaderEffectParams() {
    const params = [0, 0, 0, 0];
    let offset = 0;
    for (const effect of __privateGet(this, _effects)) {
      if (!effect.enabled || !(effect instanceof ShaderEffect)) {
        continue;
      }
      const effectParams = effect.getParams();
      for (let i = 0; i < effectParams.length && offset + i < 4; i++) {
        params[offset + i] = effectParams[i];
      }
      offset += effectParams.length;
    }
    return params;
  }
}
_effects = new WeakMap();
class Object2D extends Transform2D {
  constructor(options = {}) {
    super();
    __privateAdd(this, _tint, null);
    __privateAdd(this, _effects2, null);
    __privateAdd(this, _debugGizmos, null);
    this.visible = options.visible ?? true;
    this.opacity = options.opacity ?? 1;
    this.depth = options.depth ?? 0;
    this.anchorX = options.anchorX ?? 0.5;
    this.anchorY = options.anchorY ?? 0.5;
    if (options.debugGizmos !== void 0) {
      __privateSet(this, _debugGizmos, options.debugGizmos);
    }
    if (options.tint !== void 0) {
      __privateSet(this, _tint, options.tint);
    }
    if (options.x !== void 0) {
      this.x = options.x;
    }
    if (options.y !== void 0) {
      this.y = options.y;
    }
    if (options.rotation !== void 0) {
      this.rotation = options.rotation;
    }
    if (options.scaleX !== void 0) {
      this.scaleX = options.scaleX;
    }
    if (options.scaleY !== void 0) {
      this.scaleY = options.scaleY;
    }
    if (options.pivotX !== void 0) {
      this.pivotX = options.pivotX;
    }
    if (options.pivotY !== void 0) {
      this.pivotY = options.pivotY;
    }
  }
  get tint() {
    return __privateGet(this, _tint);
  }
  set tint(value) {
    __privateSet(this, _tint, value);
  }
  get effects() {
    if (!__privateGet(this, _effects2)) {
      __privateSet(this, _effects2, new SpriteEffectStack());
    }
    return __privateGet(this, _effects2);
  }
  get debugGizmos() {
    return __privateGet(this, _debugGizmos);
  }
  set debugGizmos(value) {
    __privateSet(this, _debugGizmos, value);
  }
  showDebugGizmos(options = {}) {
    __privateSet(this, _debugGizmos, {
      bounds: options.bounds ?? true,
      anchor: options.anchor ?? true,
      pivot: options.pivot ?? true,
      origin: options.origin ?? true
    });
    return this;
  }
  hideDebugGizmos() {
    __privateSet(this, _debugGizmos, null);
    return this;
  }
  setPosition(x, y) {
    this.x = x;
    this.y = y;
    this.markDirty();
    return this;
  }
  setRotation(rotation) {
    this.rotation = rotation;
    this.markDirty();
    return this;
  }
  setScale(scaleX, scaleY = scaleX) {
    this.scaleX = scaleX;
    this.scaleY = scaleY;
    this.markDirty();
    return this;
  }
  setOpacity(opacity) {
    this.opacity = opacity;
    this.markDirty();
    return this;
  }
  setVisible(visible) {
    this.visible = visible;
    this.markDirty();
    return this;
  }
  setDepth(depth) {
    if (this.depth !== depth) {
      this.depth = depth;
      if (this.parent) {
        this.parent.markChildrenNeedSort();
      }
      this.markDirty();
    }
    return this;
  }
  setAnchor(x, y = x) {
    this.anchorX = x;
    this.anchorY = y;
    this.markDirty();
    return this;
  }
  setPivot(x, y) {
    this.pivotX = x;
    this.pivotY = y;
    this.markDirty();
    return this;
  }
  getBounds() {
    return {
      minX: 0,
      minY: 0,
      maxX: 0,
      maxY: 0,
      width: 0,
      height: 0
    };
  }
  getWorldBounds() {
    const localBounds = this.getBounds();
    if (localBounds.width === 0 && localBounds.height === 0) {
      return localBounds;
    }
    const corners = [
      { x: localBounds.minX, y: localBounds.minY },
      { x: localBounds.maxX, y: localBounds.minY },
      { x: localBounds.minX, y: localBounds.maxY },
      { x: localBounds.maxX, y: localBounds.maxY }
    ];
    const transformedCorners = corners.map((corner) => this.transformPoint(corner));
    const xs = transformedCorners.map((c) => c.x);
    const ys = transformedCorners.map((c) => c.y);
    const minX = Math.min(...xs);
    const minY = Math.min(...ys);
    const maxX = Math.max(...xs);
    const maxY = Math.max(...ys);
    return {
      minX,
      minY,
      maxX,
      maxY,
      width: maxX - minX,
      height: maxY - minY
    };
  }
  get renderHints() {
    const hasTint = __privateGet(this, _tint) !== null;
    const hasEffects = __privateGet(this, _effects2) !== null && __privateGet(this, _effects2).count > 0;
    if (!hasTint && !hasEffects) {
      return null;
    }
    const hints = {};
    if (hasTint) {
      hints.tint = __privateGet(this, _tint);
    }
    if (hasEffects) {
      const effectHints = __privateGet(this, _effects2).getHints();
      if (effectHints) {
        hints.effects = effectHints;
      }
      const shaderEffectTypes = __privateGet(this, _effects2).getShaderEffectTypes();
      if (shaderEffectTypes.length > 0) {
        hints.shaderEffectTypes = shaderEffectTypes;
        hints.effectParams = __privateGet(this, _effects2).getShaderEffectParams();
      }
    }
    return hints;
  }
  render() {
  }
}
_tint = new WeakMap();
_effects2 = new WeakMap();
_debugGizmos = new WeakMap();
class Circle extends Object2D {
  constructor(options = {}) {
    super(options);
    this.radius = options.radius ?? 10;
    this.color = options.color ?? "#000000";
    this.strokeColor = options.strokeColor ?? "#000000";
    this.strokeWidth = options.strokeWidth ?? 0;
  }
  setRadius(radius) {
    this.radius = radius;
    return this;
  }
  getBounds() {
    const size = this.radius * 2;
    const offsetX = -size * this.anchorX;
    const offsetY = -size * this.anchorY;
    return {
      minX: offsetX,
      minY: offsetY,
      maxX: offsetX + size,
      maxY: offsetY + size,
      width: size,
      height: size
    };
  }
}
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
class Rectangle extends Object2D {
  constructor(options = {}) {
    super(options);
    this.width = options.width ?? 10;
    this.height = options.height ?? 10;
    this.color = options.color ?? "#000000";
    this.strokeColor = options.strokeColor ?? "#000000";
    this.strokeWidth = options.strokeWidth ?? 0;
  }
  getBounds() {
    const offsetX = -this.width * this.anchorX;
    const offsetY = -this.height * this.anchorY;
    return {
      minX: offsetX,
      minY: offsetY,
      maxX: offsetX + this.width,
      maxY: offsetY + this.height,
      width: this.width,
      height: this.height
    };
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
class Image2D extends Object2D {
  constructor(options = {}) {
    super(options);
    this.image = options.image ?? null;
    this.width = options.width ?? 10;
    this.height = options.height ?? 10;
  }
  getBounds() {
    const offsetX = -this.width * this.anchorX;
    const offsetY = -this.height * this.anchorY;
    return {
      minX: offsetX,
      minY: offsetY,
      maxX: offsetX + this.width,
      maxY: offsetY + this.height,
      width: this.width,
      height: this.height
    };
  }
}
class CanvasImageRenderer extends CanvasObjectRenderer {
  static get handles() {
    return [Image2D];
  }
  render(image, ctx) {
    if (image.image && image.image.complete) {
      const offsetX = -image.width * image.anchorX;
      const offsetY = -image.height * image.anchorY;
      ctx.save();
      ctx.scale(1, -1);
      ctx.drawImage(
        image.image,
        offsetX,
        -offsetY - image.height,
        image.width,
        image.height
      );
      ctx.restore();
    }
  }
}
class Sprite2D extends Object2D {
  constructor(options = {}) {
    super(options);
    this.image = options.image || null;
    this.currentFrame = options.frame || null;
    this.width = options.width ?? null;
    this.height = options.height ?? null;
    this.animations = /* @__PURE__ */ new Map();
    this.currentAnimation = null;
  }
  setFrame(frame) {
    this.currentFrame = frame;
  }
  addAnimation(name, animation) {
    this.animations.set(name, animation);
  }
  play(name) {
    const animation = this.animations.get(name);
    if (animation) {
      if (this.currentAnimation && this.currentAnimation !== animation) {
        this.currentAnimation.stop();
      }
      this.currentAnimation = animation;
      this.currentAnimation.play();
    }
  }
  stop() {
    if (this.currentAnimation) {
      this.currentAnimation.stop();
      this.currentAnimation = null;
    }
  }
  getBounds() {
    if (!this.currentFrame) {
      return super.getBounds();
    }
    const { w, h } = this.currentFrame.frame;
    let renderW = w;
    let renderH = h;
    if (this.width !== null) {
      renderW = this.width;
      renderH = h / w * renderW;
    } else if (this.height !== null) {
      renderH = this.height;
      renderW = w / h * renderH;
    }
    const offsetX = -renderW * this.anchorX;
    const offsetY = -renderH * this.anchorY;
    return {
      minX: offsetX,
      minY: offsetY,
      maxX: offsetX + renderW,
      maxY: offsetY + renderH,
      width: renderW,
      height: renderH
    };
  }
}
class CanvasSpriteRenderer extends CanvasObjectRenderer {
  static get handles() {
    return [Sprite2D];
  }
  render(sprite, ctx) {
    const img = sprite.image || (sprite.currentFrame ? sprite.currentFrame.image : null);
    if (img && img.complete && img.naturalWidth > 0 && sprite.currentFrame) {
      const { x, y, w, h } = sprite.currentFrame.frame;
      let renderW = w;
      let renderH = h;
      if (sprite.width !== null) {
        renderW = sprite.width;
        renderH = h / w * renderW;
      } else if (sprite.height !== null) {
        renderH = sprite.height;
        renderW = w / h * renderH;
      }
      const offsetX = -renderW * sprite.anchorX;
      const offsetY = -renderH * sprite.anchorY;
      ctx.save();
      ctx.scale(1, -1);
      ctx.drawImage(
        img,
        x,
        y,
        w,
        h,
        offsetX,
        -offsetY - renderH,
        renderW,
        renderH
      );
      ctx.restore();
    }
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
class Canvas2D extends BaseRenderer {
  constructor(options = {}) {
    super(options);
    __privateAdd(this, _Canvas2D_instances);
    __privateAdd(this, _rendererRegistry, /* @__PURE__ */ new Map());
    __privateAdd(this, _renderers, []);
    __privateAdd(this, _debugGizmoRenderer, null);
    this.ctx = this.canvas.getContext("2d");
    __privateMethod(this, _Canvas2D_instances, setupDefaultRenderers_fn).call(this);
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
_Canvas2D_instances = new WeakSet();
setupDefaultRenderers_fn = function() {
  this.registerRenderer(new CanvasCircleRenderer());
  this.registerRenderer(new CanvasRectangleRenderer());
  this.registerRenderer(new CanvasImageRenderer());
  this.registerRenderer(new CanvasSpriteRenderer());
  __privateSet(this, _debugGizmoRenderer, new CanvasDebugGizmoRenderer());
  __privateGet(this, _debugGizmoRenderer).init({ ctx: this.ctx, canvas: this.canvas });
};
__publicField(Canvas2D, "$name", "canvas2D");
class ShaderProgram {
  constructor(gl, vertexSource, fragmentSource) {
    __privateAdd(this, _ShaderProgram_instances);
    __privateAdd(this, _gl, null);
    __privateAdd(this, _program, null);
    __privateAdd(this, _uniforms, {});
    __privateAdd(this, _attributes, {});
    __privateSet(this, _gl, gl);
    __privateSet(this, _program, __privateMethod(this, _ShaderProgram_instances, createProgram_fn).call(this, vertexSource, fragmentSource));
  }
  get program() {
    return __privateGet(this, _program);
  }
  get uniforms() {
    return __privateGet(this, _uniforms);
  }
  get attributes() {
    return __privateGet(this, _attributes);
  }
  registerUniform(name) {
    const location = __privateGet(this, _gl).getUniformLocation(__privateGet(this, _program), name);
    __privateGet(this, _uniforms)[name] = location;
    return this;
  }
  registerAttribute(name) {
    const location = __privateGet(this, _gl).getAttribLocation(__privateGet(this, _program), name);
    __privateGet(this, _attributes)[name] = location;
    return this;
  }
  use() {
    __privateGet(this, _gl).useProgram(__privateGet(this, _program));
    return this;
  }
  setUniform1f(name, value) {
    __privateGet(this, _gl).uniform1f(__privateGet(this, _uniforms)[name], value);
    return this;
  }
  setUniform2f(name, x, y) {
    __privateGet(this, _gl).uniform2f(__privateGet(this, _uniforms)[name], x, y);
    return this;
  }
  setUniform3f(name, x, y, z) {
    __privateGet(this, _gl).uniform3f(__privateGet(this, _uniforms)[name], x, y, z);
    return this;
  }
  setUniform4f(name, values) {
    __privateGet(this, _gl).uniform4f(__privateGet(this, _uniforms)[name], values[0], values[1], values[2], values[3]);
    return this;
  }
  setUniform1i(name, value) {
    __privateGet(this, _gl).uniform1i(__privateGet(this, _uniforms)[name], value);
    return this;
  }
  setUniformMatrix3fv(name, transpose, value) {
    __privateGet(this, _gl).uniformMatrix3fv(__privateGet(this, _uniforms)[name], transpose, value);
    return this;
  }
  setUniformMatrix4fv(name, transpose, value) {
    __privateGet(this, _gl).uniformMatrix4fv(__privateGet(this, _uniforms)[name], transpose, value);
    return this;
  }
  dispose() {
    if (__privateGet(this, _program)) {
      __privateGet(this, _gl).deleteProgram(__privateGet(this, _program));
      __privateSet(this, _program, null);
    }
    __privateSet(this, _uniforms, {});
    __privateSet(this, _attributes, {});
    __privateSet(this, _gl, null);
  }
}
_gl = new WeakMap();
_program = new WeakMap();
_uniforms = new WeakMap();
_attributes = new WeakMap();
_ShaderProgram_instances = new WeakSet();
createShader_fn = function(type, source) {
  const gl = __privateGet(this, _gl);
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const error = gl.getShaderInfoLog(shader);
    gl.deleteShader(shader);
    throw new Error(`Shader compilation failed: ${error}`);
  }
  return shader;
};
createProgram_fn = function(vertexSource, fragmentSource) {
  const gl = __privateGet(this, _gl);
  const vertexShader = __privateMethod(this, _ShaderProgram_instances, createShader_fn).call(this, gl.VERTEX_SHADER, vertexSource);
  const fragmentShader = __privateMethod(this, _ShaderProgram_instances, createShader_fn).call(this, gl.FRAGMENT_SHADER, fragmentSource);
  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const error = gl.getProgramInfoLog(program);
    gl.deleteProgram(program);
    throw new Error(`Program linking failed: ${error}`);
  }
  gl.deleteShader(vertexShader);
  gl.deleteShader(fragmentShader);
  return program;
};
class ShaderRegistry {
  constructor(gl) {
    __privateAdd(this, _gl2, null);
    __privateAdd(this, _programs, /* @__PURE__ */ new Map());
    __privateAdd(this, _defaults, /* @__PURE__ */ new Map());
    __privateSet(this, _gl2, gl);
  }
  register(id, { vertex, fragment, uniforms = [], attributes = [] }) {
    const program = new ShaderProgram(__privateGet(this, _gl2), vertex, fragment);
    for (const name of uniforms) {
      program.registerUniform(name);
    }
    for (const name of attributes) {
      program.registerAttribute(name);
    }
    __privateGet(this, _programs).set(id, program);
    return program;
  }
  get(id) {
    return __privateGet(this, _programs).get(id) || null;
  }
  has(id) {
    return __privateGet(this, _programs).has(id);
  }
  setDefault(type, id) {
    __privateGet(this, _defaults).set(type, id);
    return this;
  }
  getDefault(type) {
    const id = __privateGet(this, _defaults).get(type);
    return id ? this.get(id) : null;
  }
  unregister(id) {
    const program = __privateGet(this, _programs).get(id);
    if (program) {
      program.dispose();
      __privateGet(this, _programs).delete(id);
      for (const [type, defaultId] of __privateGet(this, _defaults)) {
        if (defaultId === id) {
          __privateGet(this, _defaults).delete(type);
        }
      }
    }
    return this;
  }
  dispose() {
    for (const program of __privateGet(this, _programs).values()) {
      program.dispose();
    }
    __privateGet(this, _programs).clear();
    __privateGet(this, _defaults).clear();
    __privateSet(this, _gl2, null);
  }
}
_gl2 = new WeakMap();
_programs = new WeakMap();
_defaults = new WeakMap();
const SPRITE_VERTEX = `#version 300 es
in vec2 aPosition;
in vec2 aTexCoord;
in float aOpacity;
in vec4 aTintColor;
in vec4 aEffectParams;

uniform mat3 uProjectionMatrix;
uniform mat3 uViewMatrix;
uniform mat3 uModelMatrix;

out vec2 vTexCoord;
out float vOpacity;
out vec4 vTintColor;
out vec4 vEffectParams;

void main() {
    vec3 worldPos = uModelMatrix * vec3(aPosition, 1.0);
    vec3 viewPos = uViewMatrix * worldPos;
    vec3 clipPos = uProjectionMatrix * viewPos;

    gl_Position = vec4(clipPos.xy, 0.0, 1.0);
    vTexCoord = aTexCoord;
    vOpacity = aOpacity;
    vTintColor = aTintColor;
    vEffectParams = aEffectParams;
}
`;
const SPRITE_FRAGMENT = `#version 300 es
precision mediump float;

uniform sampler2D uTexture;
uniform vec2 uTexelSize;

in vec2 vTexCoord;
in float vOpacity;
in vec4 vTintColor;
in vec4 vEffectParams;

out vec4 fragColor;

void main() {
    vec4 color = texture(uTexture, vTexCoord);

    if (vTintColor.a > 0.0) {
        color.rgb = mix(color.rgb, vTintColor.rgb, vTintColor.a);
    }

    fragColor = vec4(color.rgb, color.a * vOpacity);
}
`;
const SPRITE_SHADER_DEF = {
  vertex: SPRITE_VERTEX,
  fragment: SPRITE_FRAGMENT,
  uniforms: [
    "uProjectionMatrix",
    "uViewMatrix",
    "uModelMatrix",
    "uTexture",
    "uTexelSize"
  ],
  attributes: ["aPosition", "aTexCoord", "aOpacity", "aTintColor", "aEffectParams"]
};
const SPRITE_ATTRIBUTES = ["aPosition", "aTexCoord", "aOpacity", "aTintColor", "aEffectParams"];
const PARAM_SLOTS = ["x", "y", "z", "w"];
const DEFAULT_UNIFORM_TYPES = {
  uTime: "float"
};
class ShaderEffectRegistry {
  constructor(gl, shaderRegistry) {
    __privateAdd(this, _ShaderEffectRegistry_instances);
    __privateAdd(this, _gl3, null);
    __privateAdd(this, _shaderRegistry, null);
    __privateAdd(this, _effects3, /* @__PURE__ */ new Map());
    __privateAdd(this, _shaderCache, /* @__PURE__ */ new Map());
    __privateAdd(this, _uniformValues, /* @__PURE__ */ new Map());
    __privateAdd(this, _uniformTypes, /* @__PURE__ */ new Map());
    __privateSet(this, _gl3, gl);
    __privateSet(this, _shaderRegistry, shaderRegistry);
  }
  setUniform(name, value, type = null) {
    __privateGet(this, _uniformValues).set(name, value);
    if (type) {
      __privateGet(this, _uniformTypes).set(name, type);
    }
    return this;
  }
  getUniform(name) {
    return __privateGet(this, _uniformValues).get(name);
  }
  applyUniforms(gl, program) {
    const uniformSetters = {
      float: (loc, val) => gl.uniform1f(loc, val),
      vec2: (loc, val) => gl.uniform2fv(loc, val),
      vec3: (loc, val) => gl.uniform3fv(loc, val),
      vec4: (loc, val) => gl.uniform4fv(loc, val),
      int: (loc, val) => gl.uniform1i(loc, val)
    };
    for (const [name, value] of __privateGet(this, _uniformValues)) {
      const location = program.uniforms[name];
      if (location === void 0 || location === -1) {
        continue;
      }
      const type = __privateGet(this, _uniformTypes).get(name) || DEFAULT_UNIFORM_TYPES[name] || "float";
      const setter = uniformSetters[type] || uniformSetters.float;
      setter(location, value);
    }
  }
  register(EffectClass) {
    const name = EffectClass.name;
    __privateGet(this, _effects3).set(name, EffectClass);
    return this;
  }
  get(name) {
    return __privateGet(this, _effects3).get(name) || null;
  }
  has(name) {
    return __privateGet(this, _effects3).has(name);
  }
  getShaderForEffects(effectTypes) {
    const sortedTypes = [...effectTypes].sort();
    const cacheKey = sortedTypes.join("|") || "base";
    if (__privateGet(this, _shaderCache).has(cacheKey)) {
      return __privateGet(this, _shaderCache).get(cacheKey);
    }
    const shader = __privateMethod(this, _ShaderEffectRegistry_instances, compileShader_fn).call(this, sortedTypes, cacheKey);
    __privateGet(this, _shaderCache).set(cacheKey, shader);
    return shader;
  }
  dispose() {
    __privateGet(this, _effects3).clear();
    __privateGet(this, _shaderCache).clear();
    __privateGet(this, _uniformValues).clear();
    __privateGet(this, _uniformTypes).clear();
    __privateSet(this, _gl3, null);
    __privateSet(this, _shaderRegistry, null);
  }
}
_gl3 = new WeakMap();
_shaderRegistry = new WeakMap();
_effects3 = new WeakMap();
_shaderCache = new WeakMap();
_uniformValues = new WeakMap();
_uniformTypes = new WeakMap();
_ShaderEffectRegistry_instances = new WeakSet();
collectUniforms_fn = function(effectUniforms, uniforms) {
  for (const uniform of effectUniforms) {
    const { name, type } = __privateMethod(this, _ShaderEffectRegistry_instances, parseUniform_fn).call(this, uniform);
    if (name) {
      uniforms.set(name, type);
    }
  }
};
parseUniform_fn = function(uniform) {
  if (typeof uniform === "string") {
    const type = __privateGet(this, _uniformTypes).get(uniform) || DEFAULT_UNIFORM_TYPES[uniform] || "float";
    return { name: uniform, type };
  }
  if (uniform.name && uniform.type) {
    return { name: uniform.name, type: uniform.type };
  }
  return { name: null, type: null };
};
compileShader_fn = function(effectTypes, cacheKey) {
  var _a2, _b;
  const fragments = [];
  const uniforms = /* @__PURE__ */ new Map([
    ["uTexture", "sampler2D"],
    ["uTexelSize", "vec2"],
    ["uProjectionMatrix", "mat3"],
    ["uViewMatrix", "mat3"],
    ["uModelMatrix", "mat3"]
  ]);
  let paramOffset = 0;
  for (const typeName of effectTypes) {
    const Effect = __privateGet(this, _effects3).get(typeName);
    if ((_a2 = Effect == null ? void 0 : Effect.shader) == null ? void 0 : _a2.fragment) {
      const snippet = wrapSnippet(Effect, paramOffset);
      fragments.push(snippet);
      paramOffset += ((_b = Effect.shader.params) == null ? void 0 : _b.length) || 0;
      __privateMethod(this, _ShaderEffectRegistry_instances, collectUniforms_fn).call(this, Effect.shader.uniforms || [], uniforms);
    }
  }
  const fragmentSource = buildFragment(fragments, uniforms);
  return __privateGet(this, _shaderRegistry).register(`sprite_effect_${cacheKey}`, {
    vertex: SPRITE_VERTEX,
    fragment: fragmentSource,
    uniforms: Array.from(uniforms.keys()),
    attributes: SPRITE_ATTRIBUTES
  });
};
function wrapSnippet(EffectClass, paramOffset) {
  const { params = [], fragment } = EffectClass.shader;
  const name = EffectClass.name;
  const paramDeclarations = params.map((paramName, index) => {
    const globalIndex = paramOffset + index;
    if (globalIndex >= 4) {
      logger.warn(`[ShaderEffect] ${name}: param "${paramName}" exceeds 4 params limit, ignored`);
      return null;
    }
    const slot = PARAM_SLOTS[globalIndex];
    return `float ${paramName} = effectParams.${slot};`;
  }).filter(Boolean).join("\n        ");
  return `
    // === ${name} ===
    {
        ${paramDeclarations}
        ${fragment}
    }
    // === End ${name} ===`;
}
function buildFragment(snippets, uniforms) {
  const uniformDeclarations = Array.from(uniforms.entries()).filter(([name]) => name !== "uTexture" && name !== "uTexelSize").filter(([name]) => !name.startsWith("uProjection") && !name.startsWith("uView") && !name.startsWith("uModel")).map(([name, type]) => `uniform ${type} ${name};`).join("\n");
  return `#version 300 es
precision mediump float;

uniform sampler2D uTexture;
uniform vec2 uTexelSize;
${uniformDeclarations}

in vec2 vTexCoord;
in float vOpacity;
in vec4 vTintColor;
in vec4 vEffectParams;

out vec4 fragColor;

void main() {
    vec4 color = texture(uTexture, vTexCoord);
    vec2 texCoord = vTexCoord;
    vec2 texelSize = uTexelSize;
    vec4 effectParams = vEffectParams;
${snippets.join("\n")}


    if (vTintColor.a > 0.0) {
        color.rgb = mix(color.rgb, vTintColor.rgb, vTintColor.a);
    }

    fragColor = vec4(color.rgb, color.a * vOpacity);
}
`;
}
const PRIMITIVE_VERTEX = `#version 300 es
in vec2 aPosition;
in vec4 aColor;

uniform mat3 uProjectionMatrix;
uniform mat3 uViewMatrix;

out vec4 vColor;

void main() {
    vec3 viewPos = uViewMatrix * vec3(aPosition, 1.0);
    vec3 clipPos = uProjectionMatrix * viewPos;

    gl_Position = vec4(clipPos.xy, 0.0, 1.0);
    vColor = aColor;
}
`;
const PRIMITIVE_FRAGMENT = `#version 300 es
precision mediump float;

in vec4 vColor;

out vec4 fragColor;

void main() {
    fragColor = vColor;
}
`;
const PRIMITIVE_SHADER_DEF = {
  vertex: PRIMITIVE_VERTEX,
  fragment: PRIMITIVE_FRAGMENT,
  uniforms: ["uProjectionMatrix", "uViewMatrix"],
  attributes: ["aPosition", "aColor"]
};
function getFramebufferStatusName(gl, status) {
  const statusNames = {
    [gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT]: "INCOMPLETE_ATTACHMENT",
    [gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT]: "INCOMPLETE_MISSING_ATTACHMENT",
    [gl.FRAMEBUFFER_UNSUPPORTED]: "UNSUPPORTED",
    [gl.FRAMEBUFFER_INCOMPLETE_MULTISAMPLE]: "INCOMPLETE_MULTISAMPLE"
  };
  return statusNames[status] || `UNKNOWN (${status})`;
}
class FramebufferManager {
  constructor(gl, width, height, samples = 4) {
    __privateAdd(this, _FramebufferManager_instances);
    __privateAdd(this, _gl4, null);
    __privateAdd(this, _width, 0);
    __privateAdd(this, _height, 0);
    __privateAdd(this, _samples, 4);
    __privateAdd(this, _msaaFramebuffer, null);
    __privateAdd(this, _msaaRenderbuffer, null);
    __privateAdd(this, _sceneFramebuffer, null);
    __privateAdd(this, _sceneTexture, null);
    __privateAdd(this, _pingPongFramebuffers, []);
    __privateAdd(this, _pingPongTextures, []);
    __privateAdd(this, _currentPingPong, 0);
    __privateAdd(this, _namedBuffers, /* @__PURE__ */ new Map());
    __privateSet(this, _gl4, gl);
    __privateSet(this, _width, width);
    __privateSet(this, _height, height);
    __privateSet(this, _samples, Math.min(samples, gl.getParameter(gl.MAX_SAMPLES)));
    __privateMethod(this, _FramebufferManager_instances, createFramebuffers_fn).call(this);
  }
  get width() {
    return __privateGet(this, _width);
  }
  get height() {
    return __privateGet(this, _height);
  }
  get samples() {
    return __privateGet(this, _samples);
  }
  resize(width, height) {
    if (width === __privateGet(this, _width) && height === __privateGet(this, _height)) {
      return;
    }
    __privateSet(this, _width, width);
    __privateSet(this, _height, height);
    __privateMethod(this, _FramebufferManager_instances, deleteFramebuffers_fn).call(this);
    __privateMethod(this, _FramebufferManager_instances, createFramebuffers_fn).call(this);
    __privateMethod(this, _FramebufferManager_instances, resizeNamedBuffers_fn).call(this);
  }
  resetPingPong() {
    __privateSet(this, _currentPingPong, 0);
  }
  bindSceneBuffer() {
    const gl = __privateGet(this, _gl4);
    gl.bindFramebuffer(gl.FRAMEBUFFER, __privateGet(this, _msaaFramebuffer));
    gl.viewport(0, 0, __privateGet(this, _width), __privateGet(this, _height));
  }
  resolveSceneBuffer() {
    const gl = __privateGet(this, _gl4);
    const width = __privateGet(this, _width);
    const height = __privateGet(this, _height);
    gl.bindFramebuffer(gl.READ_FRAMEBUFFER, __privateGet(this, _msaaFramebuffer));
    gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, __privateGet(this, _sceneFramebuffer));
    gl.blitFramebuffer(
      0,
      0,
      width,
      height,
      0,
      0,
      width,
      height,
      gl.COLOR_BUFFER_BIT,
      gl.NEAREST
    );
    gl.bindFramebuffer(gl.READ_FRAMEBUFFER, null);
    gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, null);
  }
  resolveToBuffer(name) {
    const buffer = __privateGet(this, _namedBuffers).get(name);
    if (!buffer) {
      return false;
    }
    const gl = __privateGet(this, _gl4);
    const width = __privateGet(this, _width);
    const height = __privateGet(this, _height);
    gl.bindFramebuffer(gl.READ_FRAMEBUFFER, __privateGet(this, _msaaFramebuffer));
    gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, buffer.framebuffer);
    gl.blitFramebuffer(
      0,
      0,
      width,
      height,
      0,
      0,
      width,
      height,
      gl.COLOR_BUFFER_BIT,
      gl.NEAREST
    );
    gl.bindFramebuffer(gl.READ_FRAMEBUFFER, null);
    gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, null);
    return true;
  }
  getSceneTexture() {
    return __privateGet(this, _sceneTexture);
  }
  bindPingPong() {
    const gl = __privateGet(this, _gl4);
    gl.bindFramebuffer(gl.FRAMEBUFFER, __privateGet(this, _pingPongFramebuffers)[__privateGet(this, _currentPingPong)]);
    gl.viewport(0, 0, __privateGet(this, _width), __privateGet(this, _height));
  }
  swapAndGetTexture() {
    const texture = __privateGet(this, _pingPongTextures)[__privateGet(this, _currentPingPong)];
    __privateSet(this, _currentPingPong, 1 - __privateGet(this, _currentPingPong));
    return texture;
  }
  getOrCreateBuffer(name) {
    if (!__privateGet(this, _namedBuffers).has(name)) {
      const { framebuffer, texture } = __privateMethod(this, _FramebufferManager_instances, createFramebuffer_fn).call(this);
      __privateGet(this, _namedBuffers).set(name, { framebuffer, texture });
    }
    return __privateGet(this, _namedBuffers).get(name);
  }
  bindBuffer(name) {
    const buffer = __privateGet(this, _namedBuffers).get(name);
    if (!buffer) {
      return false;
    }
    const gl = __privateGet(this, _gl4);
    gl.bindFramebuffer(gl.FRAMEBUFFER, buffer.framebuffer);
    gl.viewport(0, 0, __privateGet(this, _width), __privateGet(this, _height));
    return true;
  }
  getBufferTexture(name) {
    var _a2;
    return ((_a2 = __privateGet(this, _namedBuffers).get(name)) == null ? void 0 : _a2.texture) ?? null;
  }
  disposeBuffer(name) {
    const buffer = __privateGet(this, _namedBuffers).get(name);
    if (!buffer) {
      return false;
    }
    const gl = __privateGet(this, _gl4);
    gl.deleteFramebuffer(buffer.framebuffer);
    gl.deleteTexture(buffer.texture);
    __privateGet(this, _namedBuffers).delete(name);
    return true;
  }
  disposeNamedBuffers() {
    const gl = __privateGet(this, _gl4);
    for (const { framebuffer, texture } of __privateGet(this, _namedBuffers).values()) {
      gl.deleteFramebuffer(framebuffer);
      gl.deleteTexture(texture);
    }
    __privateGet(this, _namedBuffers).clear();
  }
  bindScreen() {
    const gl = __privateGet(this, _gl4);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport(0, 0, __privateGet(this, _width), __privateGet(this, _height));
  }
  dispose() {
    __privateMethod(this, _FramebufferManager_instances, deleteFramebuffers_fn).call(this);
    this.disposeNamedBuffers();
    __privateSet(this, _msaaFramebuffer, null);
    __privateSet(this, _msaaRenderbuffer, null);
    __privateSet(this, _sceneFramebuffer, null);
    __privateSet(this, _sceneTexture, null);
    __privateSet(this, _gl4, null);
  }
}
_gl4 = new WeakMap();
_width = new WeakMap();
_height = new WeakMap();
_samples = new WeakMap();
_msaaFramebuffer = new WeakMap();
_msaaRenderbuffer = new WeakMap();
_sceneFramebuffer = new WeakMap();
_sceneTexture = new WeakMap();
_pingPongFramebuffers = new WeakMap();
_pingPongTextures = new WeakMap();
_currentPingPong = new WeakMap();
_namedBuffers = new WeakMap();
_FramebufferManager_instances = new WeakSet();
createFramebuffers_fn = function() {
  __privateMethod(this, _FramebufferManager_instances, createMSAAFramebuffer_fn).call(this);
  __privateMethod(this, _FramebufferManager_instances, createResolveFramebuffer_fn).call(this);
  for (let i = 0; i < 2; i++) {
    const { framebuffer, texture } = __privateMethod(this, _FramebufferManager_instances, createFramebuffer_fn).call(this);
    __privateGet(this, _pingPongFramebuffers).push(framebuffer);
    __privateGet(this, _pingPongTextures).push(texture);
  }
};
createMSAAFramebuffer_fn = function() {
  const gl = __privateGet(this, _gl4);
  const width = Math.max(1, __privateGet(this, _width));
  const height = Math.max(1, __privateGet(this, _height));
  __privateSet(this, _msaaRenderbuffer, gl.createRenderbuffer());
  gl.bindRenderbuffer(gl.RENDERBUFFER, __privateGet(this, _msaaRenderbuffer));
  gl.renderbufferStorageMultisample(
    gl.RENDERBUFFER,
    __privateGet(this, _samples),
    gl.RGBA8,
    width,
    height
  );
  __privateSet(this, _msaaFramebuffer, gl.createFramebuffer());
  gl.bindFramebuffer(gl.FRAMEBUFFER, __privateGet(this, _msaaFramebuffer));
  gl.framebufferRenderbuffer(
    gl.FRAMEBUFFER,
    gl.COLOR_ATTACHMENT0,
    gl.RENDERBUFFER,
    __privateGet(this, _msaaRenderbuffer)
  );
  const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
  if (status !== gl.FRAMEBUFFER_COMPLETE) {
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.bindRenderbuffer(gl.RENDERBUFFER, null);
    throw new Error(`MSAA Framebuffer not complete: ${getFramebufferStatusName(gl, status)}`);
  }
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  gl.bindRenderbuffer(gl.RENDERBUFFER, null);
};
createResolveFramebuffer_fn = function() {
  const { framebuffer, texture } = __privateMethod(this, _FramebufferManager_instances, createFramebuffer_fn).call(this);
  __privateSet(this, _sceneFramebuffer, framebuffer);
  __privateSet(this, _sceneTexture, texture);
};
createFramebuffer_fn = function() {
  const gl = __privateGet(this, _gl4);
  const width = Math.max(1, __privateGet(this, _width));
  const height = Math.max(1, __privateGet(this, _height));
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texImage2D(
    gl.TEXTURE_2D,
    0,
    gl.RGBA8,
    width,
    height,
    0,
    gl.RGBA,
    gl.UNSIGNED_BYTE,
    null
  );
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  const framebuffer = gl.createFramebuffer();
  gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
  gl.framebufferTexture2D(
    gl.FRAMEBUFFER,
    gl.COLOR_ATTACHMENT0,
    gl.TEXTURE_2D,
    texture,
    0
  );
  const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
  if (status !== gl.FRAMEBUFFER_COMPLETE) {
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.bindTexture(gl.TEXTURE_2D, null);
    throw new Error(`Framebuffer not complete: ${getFramebufferStatusName(gl, status)}`);
  }
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  gl.bindTexture(gl.TEXTURE_2D, null);
  return { framebuffer, texture };
};
resizeNamedBuffers_fn = function() {
  const gl = __privateGet(this, _gl4);
  const names = [...__privateGet(this, _namedBuffers).keys()];
  for (const name of names) {
    const old = __privateGet(this, _namedBuffers).get(name);
    gl.deleteFramebuffer(old.framebuffer);
    gl.deleteTexture(old.texture);
    const { framebuffer, texture } = __privateMethod(this, _FramebufferManager_instances, createFramebuffer_fn).call(this);
    __privateGet(this, _namedBuffers).set(name, { framebuffer, texture });
  }
};
deleteFramebuffers_fn = function() {
  const gl = __privateGet(this, _gl4);
  if (__privateGet(this, _msaaFramebuffer)) {
    gl.deleteFramebuffer(__privateGet(this, _msaaFramebuffer));
    gl.deleteRenderbuffer(__privateGet(this, _msaaRenderbuffer));
  }
  if (__privateGet(this, _sceneFramebuffer)) {
    gl.deleteFramebuffer(__privateGet(this, _sceneFramebuffer));
    gl.deleteTexture(__privateGet(this, _sceneTexture));
  }
  for (let i = 0; i < __privateGet(this, _pingPongFramebuffers).length; i++) {
    gl.deleteFramebuffer(__privateGet(this, _pingPongFramebuffers)[i]);
    gl.deleteTexture(__privateGet(this, _pingPongTextures)[i]);
  }
  __privateSet(this, _pingPongFramebuffers, []);
  __privateSet(this, _pingPongTextures, []);
};
class FullscreenQuad {
  constructor(gl) {
    __privateAdd(this, _FullscreenQuad_instances);
    __privateAdd(this, _vertexBuffer, null);
    __privateAdd(this, _texCoordBuffer, null);
    __privateMethod(this, _FullscreenQuad_instances, createBuffers_fn).call(this, gl);
  }
  draw(gl, program) {
    const positionAttr = program.attributes.aPosition;
    const texCoordAttr = program.attributes.aTexCoord;
    if (positionAttr === void 0 || positionAttr === -1) {
      logger.warn("FullscreenQuad: aPosition attribute not found");
      return;
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, __privateGet(this, _vertexBuffer));
    gl.enableVertexAttribArray(positionAttr);
    gl.vertexAttribPointer(positionAttr, 2, gl.FLOAT, false, 0, 0);
    if (texCoordAttr !== void 0 && texCoordAttr !== -1) {
      gl.bindBuffer(gl.ARRAY_BUFFER, __privateGet(this, _texCoordBuffer));
      gl.enableVertexAttribArray(texCoordAttr);
      gl.vertexAttribPointer(texCoordAttr, 2, gl.FLOAT, false, 0, 0);
    }
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }
  dispose(gl) {
    if (__privateGet(this, _vertexBuffer)) {
      gl.deleteBuffer(__privateGet(this, _vertexBuffer));
      __privateSet(this, _vertexBuffer, null);
    }
    if (__privateGet(this, _texCoordBuffer)) {
      gl.deleteBuffer(__privateGet(this, _texCoordBuffer));
      __privateSet(this, _texCoordBuffer, null);
    }
  }
}
_vertexBuffer = new WeakMap();
_texCoordBuffer = new WeakMap();
_FullscreenQuad_instances = new WeakSet();
createBuffers_fn = function(gl) {
  const vertices = new Float32Array([
    -1,
    -1,
    1,
    -1,
    -1,
    1,
    1,
    1
  ]);
  const texCoords = new Float32Array([
    0,
    0,
    1,
    0,
    0,
    1,
    1,
    1
  ]);
  __privateSet(this, _vertexBuffer, gl.createBuffer());
  gl.bindBuffer(gl.ARRAY_BUFFER, __privateGet(this, _vertexBuffer));
  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
  __privateSet(this, _texCoordBuffer, gl.createBuffer());
  gl.bindBuffer(gl.ARRAY_BUFFER, __privateGet(this, _texCoordBuffer));
  gl.bufferData(gl.ARRAY_BUFFER, texCoords, gl.STATIC_DRAW);
};
class PostProcessor {
  constructor(gl, shaderRegistry, width, height) {
    __privateAdd(this, _gl5, null);
    __privateAdd(this, _shaderRegistry2, null);
    __privateAdd(this, _framebufferManager, null);
    __privateAdd(this, _fullscreenQuad, null);
    __privateAdd(this, _passes, []);
    __privateAdd(this, _enabled2, true);
    __privateSet(this, _gl5, gl);
    __privateSet(this, _shaderRegistry2, shaderRegistry);
    __privateSet(this, _framebufferManager, new FramebufferManager(gl, width, height));
    __privateSet(this, _fullscreenQuad, new FullscreenQuad(gl));
  }
  get enabled() {
    return __privateGet(this, _enabled2);
  }
  set enabled(value) {
    __privateSet(this, _enabled2, value);
  }
  get passes() {
    return __privateGet(this, _passes);
  }
  get framebufferManager() {
    return __privateGet(this, _framebufferManager);
  }
  addPass(pass) {
    pass.init(__privateGet(this, _shaderRegistry2));
    __privateGet(this, _passes).push(pass);
    return this;
  }
  removePass(pass) {
    const index = __privateGet(this, _passes).indexOf(pass);
    if (index !== -1) {
      __privateGet(this, _passes).splice(index, 1);
      pass.dispose();
    }
    return this;
  }
  clearPasses() {
    for (const pass of __privateGet(this, _passes)) {
      pass.dispose();
    }
    __privateSet(this, _passes, []);
    return this;
  }
  resize(width, height) {
    __privateGet(this, _framebufferManager).resize(width, height);
  }
  hasActivePasses() {
    return __privateGet(this, _enabled2) && __privateGet(this, _passes).some((pass) => pass.enabled);
  }
  begin() {
    if (!this.hasActivePasses()) {
      return false;
    }
    __privateGet(this, _framebufferManager).resetPingPong();
    __privateGet(this, _framebufferManager).bindSceneBuffer();
    return true;
  }
  finish() {
    if (!this.hasActivePasses()) {
      return;
    }
    const gl = __privateGet(this, _gl5);
    const activePasses = __privateGet(this, _passes).filter((pass) => pass.enabled);
    __privateGet(this, _framebufferManager).resolveSceneBuffer();
    gl.disable(gl.BLEND);
    let inputTexture = __privateGet(this, _framebufferManager).getSceneTexture();
    for (let i = 0; i < activePasses.length; i++) {
      const isLast = i === activePasses.length - 1;
      if (isLast) {
        __privateGet(this, _framebufferManager).bindScreen();
        gl.clearColor(0, 0, 0, 1);
        gl.clear(gl.COLOR_BUFFER_BIT);
      } else {
        __privateGet(this, _framebufferManager).bindPingPong();
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);
      }
      activePasses[i].render(gl, inputTexture, __privateGet(this, _fullscreenQuad));
      if (!isLast) {
        inputTexture = __privateGet(this, _framebufferManager).swapAndGetTexture();
      }
    }
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
  }
  dispose() {
    this.clearPasses();
    if (__privateGet(this, _framebufferManager)) {
      __privateGet(this, _framebufferManager).dispose();
      __privateSet(this, _framebufferManager, null);
    }
    if (__privateGet(this, _fullscreenQuad)) {
      __privateGet(this, _fullscreenQuad).dispose(__privateGet(this, _gl5));
      __privateSet(this, _fullscreenQuad, null);
    }
    __privateSet(this, _gl5, null);
    __privateSet(this, _shaderRegistry2, null);
  }
}
_gl5 = new WeakMap();
_shaderRegistry2 = new WeakMap();
_framebufferManager = new WeakMap();
_fullscreenQuad = new WeakMap();
_passes = new WeakMap();
_enabled2 = new WeakMap();
class WebGLTextureManager extends PerkyModule {
  constructor(options = {}) {
    super(options);
    __privateAdd(this, _WebGLTextureManager_instances);
    __privateAdd(this, _gl6);
    __privateAdd(this, _active, /* @__PURE__ */ new Map());
    __privateAdd(this, _zombies, /* @__PURE__ */ new Map());
    __privateAdd(this, _zombieSize, 0);
    __privateAdd(this, _flushInterval, null);
    __privateSet(this, _gl6, options.gl);
    this.maxZombieSize = options.maxZombieSize ?? 150 * 1024 * 1024;
    this.maxAge = options.maxAge ?? 15 * 60 * 1e3;
    this.autoFlushInterval = options.autoFlushInterval ?? 60 * 1e3;
    this.autoFlushEnabled = options.autoFlush ?? true;
  }
  onStart() {
    if (this.autoFlushEnabled && this.autoFlushInterval > 0) {
      __privateSet(this, _flushInterval, setInterval(() => {
        this.flushStale();
      }, this.autoFlushInterval));
    }
  }
  onStop() {
    if (__privateGet(this, _flushInterval)) {
      clearInterval(__privateGet(this, _flushInterval));
      __privateSet(this, _flushInterval, null);
    }
  }
  get gl() {
    return __privateGet(this, _gl6);
  }
  acquire(image) {
    if (!image) {
      return null;
    }
    if (__privateGet(this, _active).has(image)) {
      __privateGet(this, _active).get(image).refs++;
      return __privateGet(this, _active).get(image).texture;
    }
    if (__privateGet(this, _zombies).has(image)) {
      return __privateMethod(this, _WebGLTextureManager_instances, resurrect_fn).call(this, image);
    }
    return __privateMethod(this, _WebGLTextureManager_instances, createEntry_fn).call(this, image);
  }
  release(image) {
    const entry = __privateGet(this, _active).get(image);
    if (!entry) {
      return false;
    }
    entry.refs--;
    if (entry.refs <= 0) {
      __privateGet(this, _active).delete(image);
      __privateGet(this, _zombies).set(image, {
        texture: entry.texture,
        size: entry.size,
        lastUsed: Date.now()
      });
      __privateSet(this, _zombieSize, __privateGet(this, _zombieSize) + entry.size);
      this.emit("zombie", image, entry.size);
      this.flushIfFull();
    }
    return true;
  }
  flush() {
    const count = __privateGet(this, _zombies).size;
    const size = __privateGet(this, _zombieSize);
    for (const [, zombie] of __privateGet(this, _zombies)) {
      __privateGet(this, _gl6).deleteTexture(zombie.texture);
    }
    __privateGet(this, _zombies).clear();
    __privateSet(this, _zombieSize, 0);
    if (count > 0) {
      this.emit("flush", count, size);
    }
    return { count, size };
  }
  flushIfFull() {
    if (__privateGet(this, _zombieSize) <= this.maxZombieSize) {
      return { count: 0, size: 0 };
    }
    const targetSize = this.maxZombieSize * 0.5;
    const sorted = [...__privateGet(this, _zombies).entries()].sort((a, b) => a[1].lastUsed - b[1].lastUsed);
    let count = 0;
    let size = 0;
    for (const [image, zombie] of sorted) {
      if (__privateGet(this, _zombieSize) <= targetSize) {
        break;
      }
      __privateMethod(this, _WebGLTextureManager_instances, deleteTexture_fn).call(this, image, zombie);
      count++;
      size += zombie.size;
    }
    if (count > 0) {
      this.emit("flushIfFull", count, size);
    }
    return { count, size };
  }
  flushStale(maxAge = this.maxAge) {
    const now = Date.now();
    let count = 0;
    let size = 0;
    for (const [image, zombie] of __privateGet(this, _zombies)) {
      if (now - zombie.lastUsed > maxAge) {
        __privateMethod(this, _WebGLTextureManager_instances, deleteTexture_fn).call(this, image, zombie);
        count++;
        size += zombie.size;
      }
    }
    if (count > 0) {
      this.emit("flushStale", count, size);
    }
    return { count, size };
  }
  getTexture(image) {
    if (!image) {
      return null;
    }
    const active = __privateGet(this, _active).get(image);
    if (active) {
      return active.texture;
    }
    const zombie = __privateGet(this, _zombies).get(image);
    if (zombie) {
      return zombie.texture;
    }
    return this.acquire(image);
  }
  hasTexture(image) {
    return __privateGet(this, _active).has(image) || __privateGet(this, _zombies).has(image);
  }
  get stats() {
    let activeSize = 0;
    for (const entry of __privateGet(this, _active).values()) {
      activeSize += entry.size;
    }
    return {
      activeCount: __privateGet(this, _active).size,
      activeSize,
      activeSizeMB: (activeSize / (1024 * 1024)).toFixed(2),
      zombieCount: __privateGet(this, _zombies).size,
      zombieSize: __privateGet(this, _zombieSize),
      zombieSizeMB: (__privateGet(this, _zombieSize) / (1024 * 1024)).toFixed(2),
      totalCount: __privateGet(this, _active).size + __privateGet(this, _zombies).size,
      totalSize: activeSize + __privateGet(this, _zombieSize),
      totalSizeMB: ((activeSize + __privateGet(this, _zombieSize)) / (1024 * 1024)).toFixed(2)
    };
  }
  onDispose() {
    this.onStop();
    for (const entry of __privateGet(this, _active).values()) {
      __privateGet(this, _gl6).deleteTexture(entry.texture);
    }
    __privateGet(this, _active).clear();
    for (const zombie of __privateGet(this, _zombies).values()) {
      __privateGet(this, _gl6).deleteTexture(zombie.texture);
    }
    __privateGet(this, _zombies).clear();
    __privateSet(this, _zombieSize, 0);
  }
}
_gl6 = new WeakMap();
_active = new WeakMap();
_zombies = new WeakMap();
_zombieSize = new WeakMap();
_flushInterval = new WeakMap();
_WebGLTextureManager_instances = new WeakSet();
resurrect_fn = function(image) {
  const zombie = __privateGet(this, _zombies).get(image);
  __privateGet(this, _zombies).delete(image);
  __privateSet(this, _zombieSize, __privateGet(this, _zombieSize) - zombie.size);
  __privateGet(this, _active).set(image, {
    texture: zombie.texture,
    refs: 1,
    size: zombie.size
  });
  this.emit("resurrect", image);
  return zombie.texture;
};
createEntry_fn = function(image) {
  const texture = __privateMethod(this, _WebGLTextureManager_instances, createTexture_fn).call(this, image);
  const size = estimateSize(image);
  __privateGet(this, _active).set(image, { texture, refs: 1, size });
  this.emit("create", image, size);
  return texture;
};
createTexture_fn = function(image) {
  const gl = __privateGet(this, _gl6);
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.bindTexture(gl.TEXTURE_2D, null);
  return texture;
};
deleteTexture_fn = function(image, zombie) {
  __privateGet(this, _gl6).deleteTexture(zombie.texture);
  __privateGet(this, _zombies).delete(image);
  __privateSet(this, _zombieSize, __privateGet(this, _zombieSize) - zombie.size);
  this.emit("delete", image, zombie.size);
};
__publicField(WebGLTextureManager, "$category", "textureManager");
function estimateSize(image) {
  if (!image || !image.width || !image.height) {
    return 0;
  }
  return image.width * image.height * 4;
}
function parseColor(colorString) {
  if (colorString.startsWith("#")) {
    const hex = colorString.substring(1);
    const r = parseInt(hex.substring(0, 2), 16) / 255;
    const g = parseInt(hex.substring(2, 4), 16) / 255;
    const b = parseInt(hex.substring(4, 6), 16) / 255;
    return { r, g, b, a: 1 };
  }
  return { r: 0, g: 0, b: 0, a: 1 };
}
const BLEND_MODES = {
  normal: "normal",
  additive: "additive",
  multiply: "multiply"
};
class RenderGroup extends PerkyModule {
  constructor(options = {}) {
    super(options);
    __privateAdd(this, _RenderGroup_instances);
    __privateAdd(this, _initialized, false);
    this.content = options.content ?? null;
    this.postPasses = options.postPasses ?? [];
    this.blendMode = options.blendMode ?? BLEND_MODES.normal;
    this.visible = options.visible ?? true;
    this.opacity = options.opacity ?? 1;
    this.renderTransform = options.renderTransform ?? null;
    __privateSet(this, _initialized, false);
  }
  onInstall() {
    var _a2;
    const renderer = this.host;
    if (!(renderer == null ? void 0 : renderer.gl) || !(renderer == null ? void 0 : renderer.shaderRegistry)) {
      return;
    }
    __privateMethod(this, _RenderGroup_instances, initPasses_fn).call(this, renderer.shaderRegistry);
    __privateMethod(this, _RenderGroup_instances, initTransform_fn).call(this, renderer);
    const fbManager = (_a2 = renderer.postProcessor) == null ? void 0 : _a2.framebufferManager;
    if (fbManager) {
      fbManager.getOrCreateBuffer(this.$name);
    }
  }
  hasActivePasses() {
    return this.postPasses.some((pass) => pass.enabled);
  }
  onDispose() {
    var _a2, _b;
    const fbManager = (_b = (_a2 = this.host) == null ? void 0 : _a2.postProcessor) == null ? void 0 : _b.framebufferManager;
    if (fbManager) {
      fbManager.disposeBuffer(this.$name);
    }
    for (const pass of this.postPasses) {
      pass.dispose();
    }
    this.postPasses = [];
    if (this.renderTransform) {
      this.renderTransform.dispose();
      this.renderTransform = null;
    }
    __privateSet(this, _initialized, false);
  }
  addPostPass(pass) {
    var _a2;
    if (__privateGet(this, _initialized) && ((_a2 = this.host) == null ? void 0 : _a2.shaderRegistry)) {
      pass.init(this.host.shaderRegistry);
    }
    this.postPasses.push(pass);
    this.emit("postPass:added", pass);
    return this;
  }
  removePostPass(pass) {
    const index = this.postPasses.indexOf(pass);
    if (index !== -1) {
      this.postPasses.splice(index, 1);
      pass.dispose();
      this.emit("postPass:removed", pass);
    }
    return this;
  }
}
_initialized = new WeakMap();
_RenderGroup_instances = new WeakSet();
initTransform_fn = function(renderer) {
  if (this.renderTransform) {
    this.renderTransform.init({
      gl: renderer.gl,
      shaderRegistry: renderer.shaderRegistry
    });
  }
};
initPasses_fn = function(shaderRegistry) {
  if (__privateGet(this, _initialized)) {
    return;
  }
  for (const pass of this.postPasses) {
    pass.init(shaderRegistry);
  }
  __privateSet(this, _initialized, true);
};
__publicField(RenderGroup, "$category", "renderGroup");
__publicField(RenderGroup, "$name", "renderGroup");
class WebGLObjectRenderer {
  constructor() {
    __privateAdd(this, _gl7, null);
    __privateAdd(this, _context2, null);
    __privateAdd(this, _collected2, []);
  }
  static get handles() {
    return [];
  }
  get gl() {
    return __privateGet(this, _gl7);
  }
  get context() {
    return __privateGet(this, _context2);
  }
  init(context) {
    __privateSet(this, _gl7, context.gl);
    __privateSet(this, _context2, context);
  }
  reset() {
    __privateSet(this, _collected2, []);
  }
  collect(object, opacity, hints = null) {
    __privateGet(this, _collected2).push({ object, opacity, hints });
  }
  get collected() {
    return __privateGet(this, _collected2);
  }
  flush() {
  }
  dispose() {
    __privateSet(this, _collected2, []);
    __privateSet(this, _gl7, null);
    __privateSet(this, _context2, null);
  }
}
_gl7 = new WeakMap();
_context2 = new WeakMap();
_collected2 = new WeakMap();
const DEFAULT_TEX_COORDS = [0, 1, 1, 1, 1, 0, 0, 0];
const DEFAULT_TINT = [0, 0, 0, 0];
const DEFAULT_EFFECT_PARAMS = [0, 0, 0, 0];
const FLOATS_PER_VERTEX = 14;
function extractImageAndFrame(object) {
  let image = null;
  let frame = null;
  if (object instanceof Image2D) {
    image = object.image;
  } else if (object instanceof Sprite2D) {
    image = object.image || (object.currentFrame ? object.currentFrame.image : null);
    frame = object.currentFrame;
  }
  return { image, frame };
}
function computeTexCoords(frame, image, texCoords) {
  if (frame) {
    const { x, y, w, h } = frame.frame;
    const iw = image.width;
    const ih = image.height;
    const u0 = x / iw;
    const u1 = (x + w) / iw;
    const v0 = y / ih;
    const v1 = (y + h) / ih;
    texCoords[0] = u0;
    texCoords[1] = v1;
    texCoords[2] = u1;
    texCoords[3] = v1;
    texCoords[4] = u1;
    texCoords[5] = v0;
    texCoords[6] = u0;
    texCoords[7] = v0;
  } else {
    texCoords.set(DEFAULT_TEX_COORDS);
  }
}
function getValidTexture(image, textureManager) {
  if (!image || !image.complete || image.naturalWidth === 0) {
    return null;
  }
  return textureManager.getTexture(image);
}
function transformCorners(m, bounds, corners) {
  const { minX, minY, maxX, maxY } = bounds;
  corners[0] = m[0] * minX + m[2] * minY + m[4];
  corners[1] = m[1] * minX + m[3] * minY + m[5];
  corners[2] = m[0] * maxX + m[2] * minY + m[4];
  corners[3] = m[1] * maxX + m[3] * minY + m[5];
  corners[4] = m[0] * maxX + m[2] * maxY + m[4];
  corners[5] = m[1] * maxX + m[3] * maxY + m[5];
  corners[6] = m[0] * minX + m[2] * maxY + m[4];
  corners[7] = m[1] * minX + m[3] * maxY + m[5];
}
class WebGLSpriteBatch {
  constructor(gl, spriteProgram, textureManager, options = {}) {
    __privateAdd(this, _WebGLSpriteBatch_instances);
    __privateAdd(this, _tempCorners, new Float32Array(8));
    __privateAdd(this, _tempTexCoords, new Float32Array(8));
    this.gl = gl;
    this.spriteProgram = spriteProgram;
    this.textureManager = textureManager;
    this.maxSprites = options.maxSprites ?? 1e3;
    this.vertexData = new Float32Array(this.maxSprites * 4 * FLOATS_PER_VERTEX);
    this.indexData = new Uint16Array(this.maxSprites * 6);
    for (let i = 0; i < this.maxSprites; i++) {
      const offset = i * 6;
      const vertexOffset = i * 4;
      this.indexData[offset + 0] = vertexOffset + 0;
      this.indexData[offset + 1] = vertexOffset + 1;
      this.indexData[offset + 2] = vertexOffset + 2;
      this.indexData[offset + 3] = vertexOffset + 0;
      this.indexData[offset + 4] = vertexOffset + 2;
      this.indexData[offset + 5] = vertexOffset + 3;
    }
    this.vertexBuffer = gl.createBuffer();
    this.indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indexData, gl.STATIC_DRAW);
    this.currentTexture = null;
    this.currentTextureSize = { width: 1, height: 1 };
    this.spriteCount = 0;
    this.vertexIndex = 0;
    this.activeProgram = null;
  }
  begin(program = null) {
    this.spriteCount = 0;
    this.vertexIndex = 0;
    this.currentTexture = null;
    this.activeProgram = program;
  }
  addSprite(object, effectiveOpacity, hints = null) {
    const { image, frame } = extractImageAndFrame(object);
    const texture = getValidTexture(image, this.textureManager);
    if (!texture) {
      return;
    }
    __privateMethod(this, _WebGLSpriteBatch_instances, ensureTexture_fn).call(this, texture);
    if (image) {
      this.currentTextureSize.width = image.width || 1;
      this.currentTextureSize.height = image.height || 1;
    }
    const corners = __privateGet(this, _tempCorners);
    const texCoords = __privateGet(this, _tempTexCoords);
    const bounds = object.getBounds();
    transformCorners(object.worldMatrix, bounds, corners);
    computeTexCoords(frame, image, texCoords);
    const localAnchorX = bounds.minX + object.anchorX * bounds.width;
    const localAnchorY = bounds.minY + object.anchorY * bounds.height;
    const m = object.worldMatrix;
    const worldAnchorY = m[1] * localAnchorX + m[3] * localAnchorY + m[5];
    __privateMethod(this, _WebGLSpriteBatch_instances, writeVertices_fn).call(this, {
      corners,
      texCoords,
      opacity: effectiveOpacity,
      hints,
      anchorY: worldAnchorY
    });
  }
  flush(alternateProgram = null) {
    if (this.spriteCount === 0) {
      return;
    }
    const gl = this.gl;
    const program = alternateProgram || this.activeProgram || this.spriteProgram;
    gl.useProgram(program.program);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this.currentTexture);
    gl.uniform1i(program.uniforms.uTexture, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, this.vertexData.subarray(0, this.vertexIndex), gl.DYNAMIC_DRAW);
    const stride = FLOATS_PER_VERTEX * 4;
    gl.enableVertexAttribArray(program.attributes.aPosition);
    gl.vertexAttribPointer(program.attributes.aPosition, 2, gl.FLOAT, false, stride, 0);
    gl.enableVertexAttribArray(program.attributes.aTexCoord);
    gl.vertexAttribPointer(program.attributes.aTexCoord, 2, gl.FLOAT, false, stride, 2 * 4);
    gl.enableVertexAttribArray(program.attributes.aOpacity);
    gl.vertexAttribPointer(program.attributes.aOpacity, 1, gl.FLOAT, false, stride, 4 * 4);
    __privateMethod(this, _WebGLSpriteBatch_instances, bindOptionalAttributes_fn).call(this, program, stride);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
    gl.drawElements(gl.TRIANGLES, this.spriteCount * 6, gl.UNSIGNED_SHORT, 0);
    this.spriteCount = 0;
    this.vertexIndex = 0;
  }
  end(alternateProgram = null) {
    this.flush(alternateProgram);
  }
  dispose() {
    const gl = this.gl;
    gl.deleteBuffer(this.vertexBuffer);
    gl.deleteBuffer(this.indexBuffer);
  }
}
_tempCorners = new WeakMap();
_tempTexCoords = new WeakMap();
_WebGLSpriteBatch_instances = new WeakSet();
ensureTexture_fn = function(texture) {
  if (this.currentTexture !== texture) {
    this.flush();
    this.currentTexture = texture;
  }
  if (this.spriteCount >= this.maxSprites) {
    this.flush();
  }
};
writeVertices_fn = function(sprite) {
  const { corners, texCoords, opacity, hints, anchorY } = sprite;
  const t = (hints == null ? void 0 : hints.tint) || DEFAULT_TINT;
  const ep = (hints == null ? void 0 : hints.effectParams) || DEFAULT_EFFECT_PARAMS;
  for (let i = 0; i < 4; i++) {
    const idx = this.vertexIndex;
    const ci = i * 2;
    this.vertexData[idx] = corners[ci];
    this.vertexData[idx + 1] = corners[ci + 1];
    this.vertexData[idx + 2] = texCoords[ci];
    this.vertexData[idx + 3] = texCoords[ci + 1];
    this.vertexData[idx + 4] = opacity;
    this.vertexData[idx + 5] = anchorY;
    this.vertexData[idx + 6] = t[0];
    this.vertexData[idx + 7] = t[1];
    this.vertexData[idx + 8] = t[2];
    this.vertexData[idx + 9] = t[3];
    this.vertexData[idx + 10] = ep[0];
    this.vertexData[idx + 11] = ep[1];
    this.vertexData[idx + 12] = ep[2];
    this.vertexData[idx + 13] = ep[3];
    this.vertexIndex += FLOATS_PER_VERTEX;
  }
  this.spriteCount++;
};
bindOptionalAttributes_fn = function(program, stride) {
  const gl = this.gl;
  const attrs = program.attributes;
  const optionalAttrs = [
    { name: "aAnchorY", size: 1, offset: 5 * 4 },
    { name: "aTintColor", size: 4, offset: 6 * 4 },
    { name: "aEffectParams", size: 4, offset: 10 * 4 }
  ];
  for (const { name, size, offset } of optionalAttrs) {
    const location = attrs[name];
    if (location !== void 0 && location !== -1) {
      gl.enableVertexAttribArray(location);
      gl.vertexAttribPointer(location, size, gl.FLOAT, false, stride, offset);
    }
  }
};
class WebGLSpriteRenderer extends WebGLObjectRenderer {
  constructor() {
    super(...arguments);
    __privateAdd(this, _WebGLSpriteRenderer_instances);
    __privateAdd(this, _spriteBatch, null);
    __privateAdd(this, _shaderEffectRegistry, null);
  }
  static get handles() {
    return [Image2D, Sprite2D];
  }
  init(context) {
    super.init(context);
    __privateSet(this, _spriteBatch, new WebGLSpriteBatch(
      context.gl,
      context.spriteProgram,
      context.textureManager
    ));
    __privateSet(this, _shaderEffectRegistry, context.shaderEffectRegistry);
  }
  reset(renderContext = null) {
    var _a2;
    super.reset();
    const program = ((_a2 = renderContext == null ? void 0 : renderContext.transform) == null ? void 0 : _a2.getProgram()) || null;
    __privateGet(this, _spriteBatch).begin(program);
  }
  flush(matrices, renderContext = null) {
    const gl = this.gl;
    const transform = renderContext == null ? void 0 : renderContext.transform;
    const identityMatrix = [1, 0, 0, 0, 1, 0, 0, 0, 1];
    const batches = __privateMethod(this, _WebGLSpriteRenderer_instances, groupByShaderEffects_fn).call(this);
    for (const [effectKey, items] of batches) {
      const program = __privateMethod(this, _WebGLSpriteRenderer_instances, getProgramForEffects_fn).call(this, effectKey, transform);
      __privateGet(this, _spriteBatch).begin(program);
      for (const { object, opacity, hints } of items) {
        __privateGet(this, _spriteBatch).addSprite(object, opacity, hints);
      }
      gl.useProgram(program.program);
      gl.uniformMatrix3fv(program.uniforms.uProjectionMatrix, false, matrices.projectionMatrix);
      gl.uniformMatrix3fv(program.uniforms.uViewMatrix, false, matrices.viewMatrix);
      gl.uniformMatrix3fv(program.uniforms.uModelMatrix, false, identityMatrix);
      setEffectUniforms(gl, program, __privateGet(this, _spriteBatch).currentTextureSize);
      if (__privateGet(this, _shaderEffectRegistry)) {
        __privateGet(this, _shaderEffectRegistry).applyUniforms(gl, program);
      }
      if (transform) {
        transform.applyUniforms(gl, program, matrices);
      }
      __privateGet(this, _spriteBatch).end(program);
    }
  }
  dispose() {
    if (__privateGet(this, _spriteBatch)) {
      __privateGet(this, _spriteBatch).dispose();
      __privateSet(this, _spriteBatch, null);
    }
    __privateSet(this, _shaderEffectRegistry, null);
    super.dispose();
  }
}
_spriteBatch = new WeakMap();
_shaderEffectRegistry = new WeakMap();
_WebGLSpriteRenderer_instances = new WeakSet();
groupByShaderEffects_fn = function() {
  var _a2;
  const batches = /* @__PURE__ */ new Map();
  for (const item of this.collected) {
    const effectTypes = ((_a2 = item.hints) == null ? void 0 : _a2.shaderEffectTypes) || [];
    const key = [...effectTypes].sort().join("|");
    if (!batches.has(key)) {
      batches.set(key, []);
    }
    batches.get(key).push(item);
  }
  return batches;
};
getProgramForEffects_fn = function(effectKey, transform) {
  if (transform == null ? void 0 : transform.getProgram()) {
    return transform.getProgram();
  }
  if (!effectKey || !__privateGet(this, _shaderEffectRegistry)) {
    return this.context.spriteProgram;
  }
  const effectTypes = effectKey.split("|").filter(Boolean);
  if (effectTypes.length === 0) {
    return this.context.spriteProgram;
  }
  return __privateGet(this, _shaderEffectRegistry).getShaderForEffects(effectTypes);
};
function setEffectUniforms(gl, program, textureSize) {
  const uTexelSize = program.uniforms.uTexelSize;
  if (uTexelSize !== void 0 && uTexelSize !== -1) {
    gl.uniform2f(uTexelSize, 1 / textureSize.width, 1 / textureSize.height);
  }
}
class WebGLPrimitiveRenderer extends WebGLObjectRenderer {
  constructor() {
    super(...arguments);
    __privateAdd(this, _vertexBuffer2, null);
  }
  get vertexBuffer() {
    return __privateGet(this, _vertexBuffer2);
  }
  init(context) {
    super.init(context);
    __privateSet(this, _vertexBuffer2, context.gl.createBuffer());
  }
  flush(matrices) {
    if (this.collected.length === 0) {
      return;
    }
    const gl = this.gl;
    const program = this.context.primitiveProgram;
    gl.useProgram(program.program);
    gl.uniformMatrix3fv(program.uniforms.uProjectionMatrix, false, matrices.projectionMatrix);
    gl.uniformMatrix3fv(program.uniforms.uViewMatrix, false, matrices.viewMatrix);
    for (const { object, opacity } of this.collected) {
      this.renderObject(object, opacity);
    }
  }
  renderObject() {
  }
  dispose() {
    if (__privateGet(this, _vertexBuffer2)) {
      this.gl.deleteBuffer(__privateGet(this, _vertexBuffer2));
      __privateSet(this, _vertexBuffer2, null);
    }
    super.dispose();
  }
}
_vertexBuffer2 = new WeakMap();
class WebGLCircleRenderer extends WebGLPrimitiveRenderer {
  static get handles() {
    return [Circle];
  }
  renderObject(circle, opacity) {
    const gl = this.gl;
    const program = this.context.primitiveProgram;
    const segments = 32;
    const radius = circle.radius;
    const offsetX = -radius * 2 * circle.anchorX + radius;
    const offsetY = -radius * 2 * circle.anchorY + radius;
    const color = parseColor(circle.color);
    const m = circle.worldMatrix;
    const vertices = [];
    const centerX = m[0] * offsetX + m[2] * offsetY + m[4];
    const centerY = m[1] * offsetX + m[3] * offsetY + m[5];
    vertices.push(centerX, centerY, color.r, color.g, color.b, opacity);
    for (let i = 0; i <= segments; i++) {
      const angle = i / segments * Math.PI * 2;
      const x = offsetX + Math.cos(angle) * radius;
      const y = offsetY + Math.sin(angle) * radius;
      const worldX = m[0] * x + m[2] * y + m[4];
      const worldY = m[1] * x + m[3] * y + m[5];
      vertices.push(worldX, worldY, color.r, color.g, color.b, opacity);
    }
    const vertexData = new Float32Array(vertices);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertexData, gl.DYNAMIC_DRAW);
    const stride = 6 * 4;
    gl.enableVertexAttribArray(program.attributes.aPosition);
    gl.vertexAttribPointer(program.attributes.aPosition, 2, gl.FLOAT, false, stride, 0);
    gl.enableVertexAttribArray(program.attributes.aColor);
    gl.vertexAttribPointer(program.attributes.aColor, 4, gl.FLOAT, false, stride, 2 * 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, segments + 2);
  }
}
class WebGLRectangleRenderer extends WebGLPrimitiveRenderer {
  static get handles() {
    return [Rectangle];
  }
  renderObject(rect, opacity) {
    const gl = this.gl;
    const program = this.context.primitiveProgram;
    const offsetX = -rect.width * rect.anchorX;
    const offsetY = -rect.height * rect.anchorY;
    const m = rect.worldMatrix;
    const corners = [
      { x: offsetX, y: offsetY },
      { x: offsetX + rect.width, y: offsetY },
      { x: offsetX + rect.width, y: offsetY + rect.height },
      { x: offsetX, y: offsetY + rect.height }
    ];
    const worldCorners = corners.map((corner) => ({
      x: m[0] * corner.x + m[2] * corner.y + m[4],
      y: m[1] * corner.x + m[3] * corner.y + m[5]
    }));
    if (rect.color && rect.color !== "transparent") {
      const color = parseColor(rect.color);
      const vertices = [];
      for (const wc of worldCorners) {
        vertices.push(wc.x, wc.y, color.r, color.g, color.b, opacity);
      }
      const vertexData = new Float32Array(vertices);
      gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, vertexData, gl.DYNAMIC_DRAW);
      const stride = 6 * 4;
      gl.enableVertexAttribArray(program.attributes.aPosition);
      gl.vertexAttribPointer(program.attributes.aPosition, 2, gl.FLOAT, false, stride, 0);
      gl.enableVertexAttribArray(program.attributes.aColor);
      gl.vertexAttribPointer(program.attributes.aColor, 4, gl.FLOAT, false, stride, 2 * 4);
      gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    }
    if (rect.strokeWidth > 0) {
      const strokeColor = parseColor(rect.strokeColor);
      const vertices = [];
      for (let i = 0; i < 4; i++) {
        const start = worldCorners[i];
        const end = worldCorners[(i + 1) % 4];
        vertices.push(
          start.x,
          start.y,
          strokeColor.r,
          strokeColor.g,
          strokeColor.b,
          opacity,
          end.x,
          end.y,
          strokeColor.r,
          strokeColor.g,
          strokeColor.b,
          opacity
        );
      }
      const vertexData = new Float32Array(vertices);
      gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, vertexData, gl.DYNAMIC_DRAW);
      const stride = 6 * 4;
      gl.enableVertexAttribArray(program.attributes.aPosition);
      gl.vertexAttribPointer(program.attributes.aPosition, 2, gl.FLOAT, false, stride, 0);
      gl.enableVertexAttribArray(program.attributes.aColor);
      gl.vertexAttribPointer(program.attributes.aColor, 4, gl.FLOAT, false, stride, 2 * 4);
      gl.lineWidth(rect.strokeWidth);
      gl.drawArrays(gl.LINES, 0, 8);
    }
  }
}
class WebGLDebugGizmoRenderer extends WebGLObjectRenderer {
  constructor() {
    super(...arguments);
    __privateAdd(this, _vertexBuffer3, null);
    __privateAdd(this, _gizmoObjects, []);
  }
  static get handles() {
    return [];
  }
  init(context) {
    super.init(context);
    __privateSet(this, _vertexBuffer3, context.gl.createBuffer());
  }
  reset() {
    super.reset();
    __privateSet(this, _gizmoObjects, []);
  }
  collectGizmo(object, opacity) {
    __privateGet(this, _gizmoObjects).push({ object, opacity });
  }
  flush(matrices) {
    if (__privateGet(this, _gizmoObjects).length === 0) {
      return;
    }
    const gl = this.gl;
    const program = this.context.primitiveProgram;
    gl.useProgram(program.program);
    gl.uniformMatrix3fv(program.uniforms.uProjectionMatrix, false, matrices.projectionMatrix);
    gl.uniformMatrix3fv(program.uniforms.uViewMatrix, false, matrices.viewMatrix);
    for (const { object, opacity } of __privateGet(this, _gizmoObjects)) {
      this.renderGizmos(object, opacity);
    }
  }
  renderGizmos(object, opacity) {
    const gizmos = object.debugGizmos;
    if (!gizmos) {
      return;
    }
    const bounds = object.getBounds();
    const hasSize = bounds.width > 0 || bounds.height > 0;
    const m = object.worldMatrix;
    if (gizmos.bounds && hasSize) {
      this.renderBounds(m, bounds, opacity);
    }
    if (gizmos.anchor) {
      this.renderAnchor(m, object, bounds, opacity);
    }
    if (gizmos.pivot) {
      this.renderPivot(m, object, opacity);
    }
    if (gizmos.origin) {
      this.renderOrigin(m, opacity);
    }
  }
  renderBounds(m, bounds, opacity) {
    const corners = [
      { x: bounds.minX, y: bounds.minY },
      { x: bounds.maxX, y: bounds.minY },
      { x: bounds.maxX, y: bounds.maxY },
      { x: bounds.minX, y: bounds.maxY }
    ];
    const transformed = corners.map((p) => ({
      x: m[0] * p.x + m[2] * p.y + m[4],
      y: m[1] * p.x + m[3] * p.y + m[5]
    }));
    const vertices = [];
    const color = { r: 0, g: 1, b: 0 };
    for (let i = 0; i < 4; i++) {
      const p1 = transformed[i];
      const p2 = transformed[(i + 1) % 4];
      vertices.push(p1.x, p1.y, color.r, color.g, color.b, opacity * 0.8);
      vertices.push(p2.x, p2.y, color.r, color.g, color.b, opacity * 0.8);
    }
    this.drawLines(vertices);
  }
  renderAnchor(m, object, bounds, opacity) {
    const anchorX = bounds.minX + object.anchorX * bounds.width;
    const anchorY = bounds.minY + object.anchorY * bounds.height;
    const worldX = m[0] * anchorX + m[2] * anchorY + m[4];
    const worldY = m[1] * anchorX + m[3] * anchorY + m[5];
    const size = 0.08;
    const color = { r: 1, g: 1, b: 0 };
    const vertices = [
      worldX - size,
      worldY,
      color.r,
      color.g,
      color.b,
      opacity,
      worldX + size,
      worldY,
      color.r,
      color.g,
      color.b,
      opacity,
      worldX,
      worldY - size,
      color.r,
      color.g,
      color.b,
      opacity,
      worldX,
      worldY + size,
      color.r,
      color.g,
      color.b,
      opacity
    ];
    this.drawLines(vertices);
    this.drawCircle({ x: worldX, y: worldY, radius: size * 0.5, color, opacity: opacity * 0.5, segments: 12 });
  }
  renderPivot(m, object, opacity) {
    const pivotX = object.pivotX;
    const pivotY = object.pivotY;
    const worldX = m[0] * pivotX + m[2] * pivotY + m[4];
    const worldY = m[1] * pivotX + m[3] * pivotY + m[5];
    const size = 0.06;
    const color = { r: 1, g: 0, b: 1 };
    const vertices = [
      worldX - size * 1.5,
      worldY,
      color.r,
      color.g,
      color.b,
      opacity,
      worldX + size * 1.5,
      worldY,
      color.r,
      color.g,
      color.b,
      opacity,
      worldX,
      worldY - size * 1.5,
      color.r,
      color.g,
      color.b,
      opacity,
      worldX,
      worldY + size * 1.5,
      color.r,
      color.g,
      color.b,
      opacity
    ];
    this.drawLines(vertices);
    this.drawCircleOutline({ x: worldX, y: worldY, radius: size, color, opacity, segments: 16 });
  }
  renderOrigin(m, opacity) {
    const originX = m[4];
    const originY = m[5];
    const size = 0.1;
    const scaleX = Math.sqrt(m[0] * m[0] + m[1] * m[1]);
    const scaleY = Math.sqrt(m[2] * m[2] + m[3] * m[3]);
    const xAxisX = originX + m[0] / scaleX * size * 2;
    const xAxisY = originY + m[1] / scaleX * size * 2;
    const yAxisX = originX + m[2] / scaleY * size * 2;
    const yAxisY = originY + m[3] / scaleY * size * 2;
    const vertices = [
      originX,
      originY,
      1,
      0,
      0,
      opacity,
      xAxisX,
      xAxisY,
      1,
      0,
      0,
      opacity,
      originX,
      originY,
      0,
      1,
      0,
      opacity,
      yAxisX,
      yAxisY,
      0,
      1,
      0,
      opacity
    ];
    this.drawLines(vertices);
    this.drawCircle({ x: originX, y: originY, radius: 0.03, color: { r: 1, g: 1, b: 1 }, opacity, segments: 8 });
  }
  drawLines(vertices) {
    const gl = this.gl;
    const program = this.context.primitiveProgram;
    const vertexData = new Float32Array(vertices);
    gl.bindBuffer(gl.ARRAY_BUFFER, __privateGet(this, _vertexBuffer3));
    gl.bufferData(gl.ARRAY_BUFFER, vertexData, gl.DYNAMIC_DRAW);
    const stride = 6 * 4;
    gl.enableVertexAttribArray(program.attributes.aPosition);
    gl.vertexAttribPointer(program.attributes.aPosition, 2, gl.FLOAT, false, stride, 0);
    gl.enableVertexAttribArray(program.attributes.aColor);
    gl.vertexAttribPointer(program.attributes.aColor, 4, gl.FLOAT, false, stride, 2 * 4);
    gl.drawArrays(gl.LINES, 0, vertices.length / 6);
  }
  drawCircle(options) {
    const { x: cx, y: cy, radius, color, opacity, segments } = options;
    const gl = this.gl;
    const program = this.context.primitiveProgram;
    const vertices = [cx, cy, color.r, color.g, color.b, opacity];
    for (let i = 0; i <= segments; i++) {
      const angle = i / segments * Math.PI * 2;
      const x = cx + Math.cos(angle) * radius;
      const y = cy + Math.sin(angle) * radius;
      vertices.push(x, y, color.r, color.g, color.b, opacity);
    }
    const vertexData = new Float32Array(vertices);
    gl.bindBuffer(gl.ARRAY_BUFFER, __privateGet(this, _vertexBuffer3));
    gl.bufferData(gl.ARRAY_BUFFER, vertexData, gl.DYNAMIC_DRAW);
    const stride = 6 * 4;
    gl.enableVertexAttribArray(program.attributes.aPosition);
    gl.vertexAttribPointer(program.attributes.aPosition, 2, gl.FLOAT, false, stride, 0);
    gl.enableVertexAttribArray(program.attributes.aColor);
    gl.vertexAttribPointer(program.attributes.aColor, 4, gl.FLOAT, false, stride, 2 * 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, segments + 2);
  }
  drawCircleOutline(options) {
    const { x: cx, y: cy, radius, color, opacity, segments } = options;
    const vertices = [];
    for (let i = 0; i < segments; i++) {
      const angle1 = i / segments * Math.PI * 2;
      const angle2 = (i + 1) / segments * Math.PI * 2;
      const x1 = cx + Math.cos(angle1) * radius;
      const y1 = cy + Math.sin(angle1) * radius;
      const x2 = cx + Math.cos(angle2) * radius;
      const y2 = cy + Math.sin(angle2) * radius;
      vertices.push(x1, y1, color.r, color.g, color.b, opacity);
      vertices.push(x2, y2, color.r, color.g, color.b, opacity);
    }
    this.drawLines(vertices);
  }
  dispose() {
    if (__privateGet(this, _vertexBuffer3)) {
      this.gl.deleteBuffer(__privateGet(this, _vertexBuffer3));
      __privateSet(this, _vertexBuffer3, null);
    }
    __privateSet(this, _gizmoObjects, []);
    super.dispose();
  }
}
_vertexBuffer3 = new WeakMap();
_gizmoObjects = new WeakMap();
class WebGLCanvas2D extends BaseRenderer {
  constructor(options = {}) {
    super(options);
    __privateAdd(this, _WebGLCanvas2D_instances);
    __privateAdd(this, _rendererRegistry2, /* @__PURE__ */ new Map());
    __privateAdd(this, _renderers2, []);
    __privateAdd(this, _shaderRegistry3, null);
    __privateAdd(this, _shaderEffectRegistry2, null);
    __privateAdd(this, _postProcessor, null);
    __privateAdd(this, _debugGizmoRenderer2, null);
    __privateAdd(this, _compositeQuad, null);
    __privateAdd(this, _compositeProgram, null);
    __privateMethod(this, _WebGLCanvas2D_instances, setupWebGL_fn).call(this);
    __privateMethod(this, _WebGLCanvas2D_instances, setupDefaultRenderers_fn2).call(this);
    this.applyPixelRatio();
    this.backgroundColor = options.backgroundColor ?? null;
    this.enableCulling = options.enableCulling ?? false;
    this.enableDebugGizmos = options.enableDebugGizmos ?? true;
    this.stats = {
      totalObjects: 0,
      renderedObjects: 0,
      culledObjects: 0,
      drawCalls: 0
    };
  }
  registerRenderer(renderer) {
    const context = {
      gl: this.gl,
      spriteProgram: this.spriteProgram,
      primitiveProgram: this.primitiveProgram,
      textureManager: this.textureManager,
      shaderEffectRegistry: __privateGet(this, _shaderEffectRegistry2)
    };
    renderer.init(context);
    for (const ObjectClass of renderer.constructor.handles) {
      __privateGet(this, _rendererRegistry2).set(ObjectClass, renderer);
    }
    if (!__privateGet(this, _renderers2).includes(renderer)) {
      __privateGet(this, _renderers2).push(renderer);
    }
    return this;
  }
  unregisterRenderer(renderer) {
    for (const ObjectClass of renderer.constructor.handles) {
      if (__privateGet(this, _rendererRegistry2).get(ObjectClass) === renderer) {
        __privateGet(this, _rendererRegistry2).delete(ObjectClass);
      }
    }
    const index = __privateGet(this, _renderers2).indexOf(renderer);
    if (index !== -1) {
      __privateGet(this, _renderers2).splice(index, 1);
    }
    renderer.dispose();
    return this;
  }
  applyPixelRatio() {
    super.applyPixelRatio();
    if (this.gl) {
      this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    }
    if (__privateGet(this, _postProcessor)) {
      __privateGet(this, _postProcessor).resize(this.canvas.width, this.canvas.height);
    }
  }
  get shaderRegistry() {
    return __privateGet(this, _shaderRegistry3);
  }
  get shaderEffectRegistry() {
    return __privateGet(this, _shaderEffectRegistry2);
  }
  registerShaderEffect(EffectClass) {
    return __privateGet(this, _shaderEffectRegistry2).register(EffectClass);
  }
  setUniform(name, value, type = null) {
    __privateGet(this, _shaderEffectRegistry2).setUniform(name, value, type);
    return this;
  }
  getUniform(name) {
    return __privateGet(this, _shaderEffectRegistry2).getUniform(name);
  }
  registerShader(id, definition) {
    return __privateGet(this, _shaderRegistry3).register(id, definition);
  }
  getShader(id) {
    return __privateGet(this, _shaderRegistry3).get(id);
  }
  get postProcessor() {
    return __privateGet(this, _postProcessor);
  }
  addPostPass(pass) {
    __privateGet(this, _postProcessor).addPass(pass);
    return this;
  }
  removePostPass(pass) {
    __privateGet(this, _postProcessor).removePass(pass);
    return this;
  }
  setRenderGroups(configs) {
    this.clearRenderGroups();
    if (!__privateGet(this, _compositeProgram)) {
      __privateMethod(this, _WebGLCanvas2D_instances, setupCompositeShader_fn).call(this);
    }
    if (!__privateGet(this, _compositeQuad)) {
      __privateSet(this, _compositeQuad, new FullscreenQuad(this.gl));
    }
    for (const config of configs) {
      this.create(RenderGroup, config);
    }
    return this;
  }
  clearRenderGroups() {
    const groups = this.renderGroups;
    for (const group of groups) {
      this.removeChild(group.$id);
    }
    return this;
  }
  get renderGroups() {
    return this.childrenByCategory("renderGroup");
  }
  onDispose() {
    for (const renderer of __privateGet(this, _renderers2)) {
      renderer.dispose();
    }
    __privateSet(this, _renderers2, []);
    __privateGet(this, _rendererRegistry2).clear();
    if (__privateGet(this, _debugGizmoRenderer2)) {
      __privateGet(this, _debugGizmoRenderer2).dispose();
      __privateSet(this, _debugGizmoRenderer2, null);
    }
    this.clearRenderGroups();
    if (__privateGet(this, _compositeQuad)) {
      __privateGet(this, _compositeQuad).dispose(this.gl);
      __privateSet(this, _compositeQuad, null);
    }
    if (__privateGet(this, _postProcessor)) {
      __privateGet(this, _postProcessor).dispose();
      __privateSet(this, _postProcessor, null);
    }
    if (__privateGet(this, _shaderEffectRegistry2)) {
      __privateGet(this, _shaderEffectRegistry2).dispose();
      __privateSet(this, _shaderEffectRegistry2, null);
    }
    if (__privateGet(this, _shaderRegistry3)) {
      __privateGet(this, _shaderRegistry3).dispose();
      __privateSet(this, _shaderRegistry3, null);
    }
    super.onDispose();
    this.gl = null;
  }
  render(scene) {
    if (this.renderGroups.length > 0 && !scene) {
      return __privateMethod(this, _WebGLCanvas2D_instances, renderWithGroups_fn).call(this);
    }
    return __privateMethod(this, _WebGLCanvas2D_instances, renderSingleScene_fn).call(this, scene);
  }
}
_rendererRegistry2 = new WeakMap();
_renderers2 = new WeakMap();
_shaderRegistry3 = new WeakMap();
_shaderEffectRegistry2 = new WeakMap();
_postProcessor = new WeakMap();
_debugGizmoRenderer2 = new WeakMap();
_compositeQuad = new WeakMap();
_compositeProgram = new WeakMap();
_WebGLCanvas2D_instances = new WeakSet();
setupWebGL_fn = function() {
  this.gl = this.canvas.getContext("webgl2", {
    alpha: true,
    premultipliedAlpha: false,
    antialias: true,
    preserveDrawingBuffer: false
  });
  if (!this.gl) {
    throw new Error("WebGL2 not supported");
  }
  const gl = this.gl;
  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
  __privateSet(this, _shaderRegistry3, new ShaderRegistry(gl));
  __privateSet(this, _shaderEffectRegistry2, new ShaderEffectRegistry(gl, __privateGet(this, _shaderRegistry3)));
  __privateMethod(this, _WebGLCanvas2D_instances, setupBuiltinShaders_fn).call(this);
  this.create(WebGLTextureManager, {
    $bind: "textureManager",
    gl
  });
  __privateSet(this, _postProcessor, new PostProcessor(
    gl,
    __privateGet(this, _shaderRegistry3),
    this.canvas.width,
    this.canvas.height
  ));
};
setupBuiltinShaders_fn = function() {
  this.spriteProgram = __privateGet(this, _shaderRegistry3).register("sprite", SPRITE_SHADER_DEF);
  this.primitiveProgram = __privateGet(this, _shaderRegistry3).register("primitive", PRIMITIVE_SHADER_DEF);
  __privateGet(this, _shaderRegistry3).setDefault("sprite", "sprite");
  __privateGet(this, _shaderRegistry3).setDefault("primitive", "primitive");
};
setupDefaultRenderers_fn2 = function() {
  this.registerRenderer(new WebGLSpriteRenderer());
  this.registerRenderer(new WebGLCircleRenderer());
  this.registerRenderer(new WebGLRectangleRenderer());
  __privateSet(this, _debugGizmoRenderer2, new WebGLDebugGizmoRenderer());
  __privateGet(this, _debugGizmoRenderer2).init({
    gl: this.gl,
    spriteProgram: this.spriteProgram,
    primitiveProgram: this.primitiveProgram,
    textureManager: this.textureManager,
    shaderEffectRegistry: __privateGet(this, _shaderEffectRegistry2)
  });
};
setupCompositeShader_fn = function() {
  const COMPOSITE_SHADER_DEF = {
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
                uniform float uOpacity;
                in vec2 vTexCoord;
                out vec4 fragColor;
                void main() {
                    vec4 color = texture(uTexture, vTexCoord);

                    float alpha = color.a * uOpacity;
                    fragColor = vec4(color.rgb * uOpacity, alpha);
                }
            `,
    uniforms: ["uTexture", "uOpacity"],
    attributes: ["aPosition", "aTexCoord"]
  };
  __privateSet(this, _compositeProgram, __privateGet(this, _shaderRegistry3).register("_composite", COMPOSITE_SHADER_DEF));
};
getMatrices_fn = function() {
  const w = this.canvas.width;
  const h = this.canvas.height;
  const ppu = this.camera.pixelsPerUnit * this.pixelRatio;
  const projectionMatrix = [
    2 / w,
    0,
    0,
    0,
    2 / h,
    0,
    -1,
    -1,
    1
  ];
  const viewMatrix = [
    ppu,
    0,
    0,
    0,
    ppu,
    0,
    w / 2 - this.camera.x * ppu,
    h / 2 - this.camera.y * ppu,
    1
  ];
  return { projectionMatrix, viewMatrix };
};
renderSingleScene_fn = function(scene) {
  __privateMethod(this, _WebGLCanvas2D_instances, resetStats_fn).call(this);
  const usePostProcessing = __privateGet(this, _postProcessor).begin();
  __privateMethod(this, _WebGLCanvas2D_instances, clearWithBackground_fn).call(this);
  this.camera.update();
  const matrices = __privateMethod(this, _WebGLCanvas2D_instances, getMatrices_fn).call(this);
  scene.updateWorldMatrix(false);
  for (const renderer of __privateGet(this, _renderers2)) {
    renderer.reset();
  }
  const debugGizmoRenderer = this.enableDebugGizmos ? __privateGet(this, _debugGizmoRenderer2) : null;
  if (debugGizmoRenderer) {
    debugGizmoRenderer.reset();
  }
  traverseAndCollect(scene, __privateGet(this, _rendererRegistry2), {
    camera: this.camera,
    enableCulling: this.enableCulling,
    stats: this.stats,
    debugGizmoRenderer
  });
  for (const renderer of __privateGet(this, _renderers2)) {
    renderer.flush(matrices);
  }
  if (debugGizmoRenderer) {
    debugGizmoRenderer.flush(matrices);
  }
  if (usePostProcessing) {
    __privateGet(this, _postProcessor).finish();
  }
};
renderWithGroups_fn = function() {
  __privateMethod(this, _WebGLCanvas2D_instances, resetStats_fn).call(this);
  this.camera.update();
  const matrices = __privateMethod(this, _WebGLCanvas2D_instances, getMatrices_fn).call(this);
  __privateMethod(this, _WebGLCanvas2D_instances, renderGroupsToTextures_fn).call(this, matrices);
  __privateMethod(this, _WebGLCanvas2D_instances, compositeGroups_fn).call(this);
};
renderGroupsToTextures_fn = function(matrices) {
  for (const group of this.renderGroups) {
    if (group.visible && group.content) {
      __privateMethod(this, _WebGLCanvas2D_instances, renderGroupToTexture_fn).call(this, group, matrices);
    }
  }
};
renderGroupToTexture_fn = function(group, matrices) {
  var _a2;
  const gl = this.gl;
  const fbManager = __privateGet(this, _postProcessor).framebufferManager;
  fbManager.getOrCreateBuffer(group.$name);
  fbManager.bindSceneBuffer();
  gl.clearColor(0, 0, 0, 0);
  gl.clear(gl.COLOR_BUFFER_BIT);
  group.content.updateWorldMatrix(false);
  const renderContext = ((_a2 = group.renderTransform) == null ? void 0 : _a2.enabled) ? { transform: group.renderTransform } : null;
  for (const renderer of __privateGet(this, _renderers2)) {
    renderer.reset(renderContext);
  }
  const debugGizmoRenderer = this.enableDebugGizmos ? __privateGet(this, _debugGizmoRenderer2) : null;
  if (debugGizmoRenderer) {
    debugGizmoRenderer.reset();
  }
  traverseAndCollect(group.content, __privateGet(this, _rendererRegistry2), {
    camera: this.camera,
    enableCulling: this.enableCulling,
    stats: this.stats,
    debugGizmoRenderer
  });
  for (const renderer of __privateGet(this, _renderers2)) {
    renderer.flush(matrices, renderContext);
  }
  if (debugGizmoRenderer) {
    debugGizmoRenderer.flush(matrices);
  }
  fbManager.resolveToBuffer(group.$name);
  if (group.hasActivePasses()) {
    __privateMethod(this, _WebGLCanvas2D_instances, applyGroupPasses_fn).call(this, group);
  }
};
compositeGroups_fn = function() {
  const hasGlobalPostProcessing = __privateGet(this, _postProcessor).hasActivePasses();
  const fbManager = __privateGet(this, _postProcessor).framebufferManager;
  if (hasGlobalPostProcessing) {
    fbManager.bindSceneBuffer();
  } else {
    fbManager.bindScreen();
  }
  __privateMethod(this, _WebGLCanvas2D_instances, clearWithBackground_fn).call(this);
  __privateMethod(this, _WebGLCanvas2D_instances, drawAllGroups_fn).call(this);
  this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
  if (hasGlobalPostProcessing) {
    __privateGet(this, _postProcessor).finish();
  }
};
drawAllGroups_fn = function() {
  const gl = this.gl;
  const fbManager = __privateGet(this, _postProcessor).framebufferManager;
  __privateGet(this, _compositeProgram).use();
  gl.activeTexture(gl.TEXTURE0);
  __privateGet(this, _compositeProgram).setUniform1i("uTexture", 0);
  for (const group of this.renderGroups) {
    if (!group.visible || !group.content) {
      continue;
    }
    const texture = fbManager.getBufferTexture(group.$name);
    if (texture) {
      __privateMethod(this, _WebGLCanvas2D_instances, drawGroup_fn).call(this, group, texture);
    }
  }
};
drawGroup_fn = function(group, texture) {
  const gl = this.gl;
  __privateMethod(this, _WebGLCanvas2D_instances, applyBlendMode_fn).call(this, group.blendMode);
  __privateGet(this, _compositeProgram).setUniform1f("uOpacity", group.opacity);
  gl.bindTexture(gl.TEXTURE_2D, texture);
  __privateGet(this, _compositeQuad).draw(gl, __privateGet(this, _compositeProgram));
};
resetStats_fn = function() {
  this.stats.totalObjects = 0;
  this.stats.renderedObjects = 0;
  this.stats.culledObjects = 0;
  this.stats.drawCalls = 0;
};
clearWithBackground_fn = function() {
  const gl = this.gl;
  if (this.backgroundColor && this.backgroundColor !== "transparent") {
    const color = parseColor(this.backgroundColor);
    gl.clearColor(color.r, color.g, color.b, color.a);
  } else {
    gl.clearColor(0, 0, 0, 0);
  }
  gl.clear(gl.COLOR_BUFFER_BIT);
};
applyGroupPasses_fn = function(group) {
  const gl = this.gl;
  const fbManager = __privateGet(this, _postProcessor).framebufferManager;
  const activePasses = group.postPasses.filter((pass) => pass.enabled);
  if (activePasses.length === 0) {
    return;
  }
  gl.disable(gl.BLEND);
  fbManager.resetPingPong();
  fbManager.bindPingPong();
  gl.clearColor(0, 0, 0, 0);
  gl.clear(gl.COLOR_BUFFER_BIT);
  __privateGet(this, _compositeProgram).use();
  gl.activeTexture(gl.TEXTURE0);
  gl.bindTexture(gl.TEXTURE_2D, fbManager.getBufferTexture(group.$name));
  __privateGet(this, _compositeProgram).setUniform1i("uTexture", 0);
  __privateGet(this, _compositeProgram).setUniform1f("uOpacity", 1);
  __privateGet(this, _compositeQuad).draw(gl, __privateGet(this, _compositeProgram));
  let inputTexture = fbManager.swapAndGetTexture();
  for (let i = 0; i < activePasses.length; i++) {
    const isLast = i === activePasses.length - 1;
    if (isLast) {
      fbManager.bindBuffer(group.$name);
    } else {
      fbManager.bindPingPong();
    }
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    activePasses[i].render(gl, inputTexture, __privateGet(this, _compositeQuad));
    if (!isLast) {
      inputTexture = fbManager.swapAndGetTexture();
    }
  }
  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
};
applyBlendMode_fn = function(blendMode) {
  const gl = this.gl;
  const blendFuncs = {
    [BLEND_MODES.additive]: [gl.ONE, gl.ONE],
    [BLEND_MODES.multiply]: [gl.DST_COLOR, gl.ONE_MINUS_SRC_ALPHA],
    [BLEND_MODES.normal]: [gl.ONE, gl.ONE_MINUS_SRC_ALPHA]
  };
  const [src, dst] = blendFuncs[blendMode] || blendFuncs[BLEND_MODES.normal];
  gl.blendFunc(src, dst);
};
__publicField(WebGLCanvas2D, "$name", "webGLCanvas2D");
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
    var _a2;
    if (!this.dirty) {
      return this;
    }
    if (((_a2 = this.renderer.renderGroups) == null ? void 0 : _a2.length) > 0) {
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
class Game extends Application {
  constructor(params = {}) {
    var _a2;
    super(params);
    __privateAdd(this, _Game_instances);
    this.create(GameLoop, { $bind: "gameLoop" });
    this.create(RenderSystem, {
      $bind: "renderSystem",
      ...params.renderSystem
    });
    this.on("update", __privateMethod(this, _Game_instances, updateActiveControllers_fn));
    (_a2 = this.configureGame) == null ? void 0 : _a2.call(this, params);
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
      source = "player"
    } = params;
    this.velocity.set(velocityX, velocityY);
    this.gravity = gravity;
    this.drag = drag;
    this.alive = true;
    this.source = source;
    this.rotation = 0;
    this.spinSpeed = 15;
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
    this.rotation += this.spinSpeed * deltaTime;
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
      maxSpeed: 4,
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
    const speedMultiplier = 0.5 + hopCurve * 1.5;
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
    this.emit("throw:pie", {
      x: this.position.x,
      y: this.position.y
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
      source: "enemy"
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
    enemy.on("throw:pie", ({ x, y }) => {
      this.spawnEnemyProjectile({ x, y });
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
        velocityY: Math.sin(angle) * 2
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
class WorldController extends ActionController {
  constructor() {
    super(...arguments);
    __privateAdd(this, _world, null);
  }
  get world() {
    return __privateGet(this, _world);
  }
  set world(newWorld) {
    const oldWorld = __privateGet(this, _world);
    if (oldWorld && oldWorld !== newWorld) {
      this.emit("world:delete", oldWorld);
    }
    __privateSet(this, _world, newWorld);
    if (newWorld) {
      this.emit("world:set", newWorld);
    }
  }
  spawn(Entity2, options = {}) {
    if (this.world) {
      return this.world.create(Entity2, options);
    }
    return null;
  }
}
_world = new WeakMap();
class GameController extends WorldController {
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
__publicField(GameController, "bindings", {
  moveUp: ["KeyW", "ArrowUp", "swipeUp"],
  moveDown: ["KeyS", "ArrowDown", "swipeDown"],
  shoot: ["Space", "tap"]
});
__publicField(GameController, "waveSettings", {
  baseEnemySpeed: 0.4,
  speedGrowthPerDay: 0.05,
  baseSpawnInterval: { min: 1.2, max: 2 },
  spawnIntervalDecreasePerDay: 0.1,
  spawnY: { min: -1.9, max: 0.6 }
});
__publicField(GameController, "waveSpawnRatios", [
  { pig: 1, red: 0, granny: 0 },
  { pig: 2 / 3, red: 1 / 3, granny: 0 },
  { pig: 5 / 10, red: 3 / 10, granny: 2 / 10 },
  { pig: 5 / 10, red: 3 / 10, granny: 2 / 10 }
]);
class Group2D extends Object2D {
  constructor(options = {}) {
    super(options);
  }
  addChild(...objects) {
    return this.add(...objects);
  }
  getBounds() {
    if (this.children.length === 0) {
      return {
        minX: 0,
        minY: 0,
        maxX: 0,
        maxY: 0,
        width: 0,
        height: 0
      };
    }
    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;
    this.children.forEach((child) => {
      const bounds = child.getBounds();
      if (bounds.width === 0 && bounds.height === 0) {
        return;
      }
      const m = child.worldMatrix;
      const corners = [
        { x: bounds.minX, y: bounds.minY },
        { x: bounds.maxX, y: bounds.minY },
        { x: bounds.minX, y: bounds.maxY },
        { x: bounds.maxX, y: bounds.maxY }
      ];
      corners.forEach((corner) => {
        const x = m[0] * corner.x + m[2] * corner.y + m[4];
        const y = m[1] * corner.x + m[3] * corner.y + m[5];
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);
      });
    });
    if (minX === Infinity) {
      return {
        minX: 0,
        minY: 0,
        maxX: 0,
        maxY: 0,
        width: 0,
        height: 0
      };
    }
    return {
      minX,
      minY,
      maxX,
      maxY,
      width: maxX - minX,
      height: maxY - minY
    };
  }
}
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
    __privateAdd(this, _program2, null);
    this.skewX = options.skewX ?? 0.5;
    this.scaleY = options.scaleY ?? -0.3;
    this.offsetY = options.offsetY ?? 0;
    this.color = options.color ?? [0, 0, 0, 0.4];
  }
  init(context) {
    __privateSet(this, _program2, context.shaderRegistry.register("shadow", SHADOW_SHADER_DEF));
  }
  getProgram() {
    return __privateGet(this, _program2);
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
    __privateSet(this, _program2, null);
  }
}
_program2 = new WeakMap();
__publicField(ShadowTransform, "propertyConfig", {
  skewX: { min: -2, max: 2, step: 0.05 },
  scaleY: { min: -1, max: 0, step: 0.05 },
  offsetY: { min: -0.5, max: 0.5, step: 0.01 },
  color: { type: "color" }
});
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
class SpriteEffect {
  constructor(options = {}) {
    __privateAdd(this, _enabled3, true);
    __privateSet(this, _enabled3, options.enabled ?? true);
  }
  get enabled() {
    return __privateGet(this, _enabled3);
  }
  set enabled(value) {
    __privateSet(this, _enabled3, value);
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
_enabled3 = new WeakMap();
__publicField(SpriteEffect, "type", "base");
let OutlineEffect$1 = (_a = class extends SpriteEffect {
  constructor(options = {}) {
    super(options);
    __privateAdd(this, _width2, 0.02);
    __privateAdd(this, _color, [1, 1, 1, 1]);
    if (options.width !== void 0) {
      __privateSet(this, _width2, options.width);
    }
    if (options.color !== void 0) {
      __privateSet(this, _color, options.color);
    }
  }
  get width() {
    return __privateGet(this, _width2);
  }
  set width(value) {
    __privateSet(this, _width2, value);
  }
  get color() {
    return __privateGet(this, _color);
  }
  set color(value) {
    __privateSet(this, _color, value);
  }
  getHints() {
    return {
      width: __privateGet(this, _width2),
      color: __privateGet(this, _color)
    };
  }
}, _width2 = new WeakMap(), _color = new WeakMap(), __publicField(_a, "type", "outline"), _a);
class PlayerView extends EntityView {
  constructor(entity, context) {
    super(entity, context);
    this.images = {
      right: context.game.getSource("wolf_right"),
      up: context.game.getSource("wolf_up"),
      down: context.game.getSource("wolf_down")
    };
    this.root = new Image2D({
      image: this.images.right,
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
      this.root.image = velocity.y > 0 ? this.images.up : this.images.down;
    } else {
      this.root.image = this.images.right;
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
    const image = context.game.getSource(config.image);
    this.baseScaleX = config.width ?? 1;
    this.baseScaleY = config.height ?? 1;
    this.root = new Image2D({
      image,
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
  sync(deltaTime = 0) {
    if (!this.root) {
      return;
    }
    this.syncDamage(deltaTime);
    this.syncPosition();
    this.syncHitFlash();
    this.syncStun();
    this.syncSquash();
  }
  syncDamage(deltaTime) {
    if (this.entity.hp < this.lastHp) {
      this.impactSquash.trigger({ x: 1, y: 0 });
      this.lastHp = this.entity.hp;
    }
    this.impactSquash.update(deltaTime);
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
            color = texture(uTexture, distorted);
        `
});
class PigEnemyView extends EnemyView {
  constructor(entity, context) {
    super(entity, context);
    this.waveEffect = new WaveEffect({ amplitude: 0.1 });
    this.root.effects.add(this.waveEffect);
  }
  sync(deltaTime = 0) {
    super.sync(deltaTime);
    this.syncWave();
  }
  syncWave() {
    this.waveEffect.phase = this.entity.shuffleProgress * Math.PI * 2;
  }
}
class RedEnemyView extends EnemyView {
  constructor(entity, context) {
    super(entity, context);
    this.baseY = 0;
  }
  sync(deltaTime = 0) {
    super.sync(deltaTime);
    this.syncHop();
    this.syncThrow();
  }
  syncHop() {
    if (this.entity.state === "hopping") {
      const hopCurve = Math.sin(this.entity.hopProgress * Math.PI);
      const jumpHeight = 0.15;
      this.root.y = this.entity.y + hopCurve * jumpHeight;
      const squash = 1 - hopCurve * 0.15;
      const stretch = 1 + hopCurve * 0.2;
      this.root.scaleX = this.baseScaleX * squash;
      this.root.scaleY = this.baseScaleY * stretch;
    } else if (this.entity.state === "hop_pause") {
      this.root.y = this.entity.y;
      this.root.scaleX = this.baseScaleX * 1.1;
      this.root.scaleY = this.baseScaleY * 0.9;
    } else {
      this.root.y = this.entity.y;
      this.root.scaleX = this.baseScaleX;
      this.root.scaleY = this.baseScaleY;
    }
  }
  syncThrow() {
    if (this.entity.state === "stopping") {
      const throwProgress = this.entity.stateTimer / this.entity.throwDelay;
      if (throwProgress < 1 && !this.entity.hasThrown) {
        this.root.scaleX = this.baseScaleX * (1 + Math.sin(throwProgress * Math.PI) * 0.2);
        this.root.scaleY = this.baseScaleY * (1 - Math.sin(throwProgress * Math.PI) * 0.1);
      }
    }
  }
}
class GrannyEnemyView extends EnemyView {
  constructor(entity, context) {
    super(entity, context);
    this.baseY = 0;
    this.chargeGlow = 0;
  }
  sync(deltaTime = 0) {
    super.sync(deltaTime);
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
  sync(deltaTime = 0) {
    super.sync(deltaTime);
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
    const color = SOURCE_COLORS[entity.source] || config.color || "#3a2a1a";
    this.root = new Circle({
      x: entity.x,
      y: entity.y,
      radius: config.radius ?? 0.08,
      color
    });
  }
  sync() {
    if (this.root) {
      this.root.x = this.entity.x;
      this.root.y = this.entity.y;
      this.root.rotation = this.entity.rotation;
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
    this.particleGroup = new Group2D({ name: "particles" });
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
    this.group = new Group2D({ name: "hitboxDebug" });
    this.visuals = /* @__PURE__ */ new Map();
  }
  toggle() {
    this.enabled = !this.enabled;
    if (!this.enabled) {
      this.clear();
    }
    return this.enabled;
  }
  setEnabled(enabled2) {
    this.enabled = enabled2;
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
class GameRenderer extends PerkyModule {
  constructor(options = {}) {
    super(options);
    __privateAdd(this, _GameRenderer_instances);
    this.world = options.world;
    this.game = options.game;
    this.backgroundGroup = new Group2D({ name: "background" });
    this.entitiesGroup = new Group2D({ name: "entities" });
    this.worldView = this.create(WorldView, {
      $id: "worldView",
      world: this.world,
      game: this.game
    });
    this.impactParticles = this.create(ImpactParticles, {
      $id: "impactParticles",
      count: 8,
      minSpeed: 3,
      maxSpeed: 6,
      lifetime: 0.35
    });
    this.hitboxDebug = new HitboxDebug(this.world);
    __privateMethod(this, _GameRenderer_instances, registerViews_fn).call(this);
  }
  onStart() {
    __privateMethod(this, _GameRenderer_instances, registerShaderEffects_fn).call(this);
    __privateMethod(this, _GameRenderer_instances, buildScene_fn).call(this);
    __privateMethod(this, _GameRenderer_instances, setupRenderGroups_fn).call(this);
  }
  render() {
    var _a2;
    const deltaTime = ((_a2 = this.game.clock) == null ? void 0 : _a2.deltaTime) ?? 0.016;
    this.worldView.sync(deltaTime);
    this.impactParticles.update(deltaTime);
    this.hitboxDebug.update();
    const gameLayer = this.game.getCanvas("game");
    gameLayer.renderer.setUniform("uTime", performance.now() / 1e3);
    gameLayer.markDirty();
    gameLayer.render();
  }
  toggleHitboxDebug() {
    return this.hitboxDebug.toggle();
  }
  setHitboxDebug(enabled2) {
    this.hitboxDebug.setEnabled(enabled2);
  }
}
_GameRenderer_instances = new WeakSet();
registerViews_fn = function() {
  this.worldView.register(Player, PlayerView).register(PigEnemy, PigEnemyView, { image: "pig", width: 1, height: 1 }).register(RedEnemy, RedEnemyView, { image: "red", width: 1, height: 1 }).register(GrannyEnemy, GrannyEnemyView, { image: "granny", width: 1, height: 1 }).register(AmalgamEnemy, AmalgamEnemyView, { image: "amalgam", width: 1.2, height: 1.2 }).register(Projectile, ProjectileView, { radius: 0.08, color: "#3a2a1a" });
};
registerShaderEffects_fn = function() {
  const gameLayer = this.game.getCanvas("game");
  gameLayer.renderer.registerShaderEffect(ChromaticEffect);
  gameLayer.renderer.registerShaderEffect(OutlineEffect);
  gameLayer.renderer.registerShaderEffect(WaveEffect);
};
buildScene_fn = function() {
  const backgroundImage = this.game.getSource("background");
  const backgroundHeight = 5;
  const backgroundWidth = backgroundImage.width / backgroundImage.height * backgroundHeight;
  const background = new Image2D({
    image: backgroundImage,
    x: 0,
    y: 0,
    width: backgroundWidth,
    height: backgroundHeight
  });
  this.backgroundGroup.addChild(background);
  this.entitiesGroup.addChild(this.worldView.rootGroup);
  this.entitiesGroup.addChild(this.impactParticles.particleGroup);
  this.listenTo(this.world, "enemy:hit", (data) => {
    this.impactParticles.spawn(data.x, data.y, data.direction);
  });
};
setupRenderGroups_fn = function() {
  const gameLayer = this.game.getCanvas("game");
  this.shadowTransform = new ShadowTransform({
    skewX: 0.1,
    scaleY: -0.5,
    offsetY: 0,
    color: [0, 0, 0, 0.3]
  });
  gameLayer.renderer.setRenderGroups([
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
};
const _WaveProgressBar = class _WaveProgressBar extends PerkyModule {
  constructor(options = {}) {
    super(options);
    __privateAdd(this, _WaveProgressBar_instances);
    this.game = options.game;
    this.currentDay = 0;
    this.root = document.createElement("div");
    this.root.className = "wave-progress";
    this.root.innerHTML = `
            <div class="wave-progress-label"><span class="wave-name">Dawn</span> - <span class="day-label">Day 1</span></div>
            <div class="wave-progress-track">
                <div class="wave-progress-fill"></div>
            </div>
            <div class="day-announcement" style="display: none;">
                <span class="day-number">Day 1</span>
            </div>
        `;
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
  const style = document.createElement("style");
  style.textContent = `
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
        `;
  this.root.appendChild(style);
};
__publicField(_WaveProgressBar, "phaseNames", ["Dawn", "Day", "Dusk", "Night"]);
let WaveProgressBar = _WaveProgressBar;
class RenderPass {
  constructor() {
    __privateAdd(this, _RenderPass_instances);
    __privateAdd(this, _enabled4, true);
    __privateAdd(this, _program3, null);
    __privateAdd(this, _uniforms2, {});
    __privateSet(this, _uniforms2, { ...this.constructor.defaultUniforms });
  }
  get enabled() {
    return __privateGet(this, _enabled4);
  }
  set enabled(value) {
    __privateSet(this, _enabled4, value);
  }
  get program() {
    return __privateGet(this, _program3);
  }
  get uniforms() {
    return __privateGet(this, _uniforms2);
  }
  init(shaderRegistry) {
    const definition = this.constructor.shaderDefinition;
    if (!definition) {
      throw new Error(`${this.constructor.name}.shaderDefinition must be defined`);
    }
    const id = `pass_${this.constructor.name}_${Date.now()}`;
    __privateSet(this, _program3, shaderRegistry.register(id, definition));
  }
  setUniform(name, value) {
    __privateGet(this, _uniforms2)[name] = value;
    return this;
  }
  render(gl, inputTexture, fullscreenQuad) {
    if (!__privateGet(this, _enabled4) || !__privateGet(this, _program3)) {
      return;
    }
    __privateGet(this, _program3).use();
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, inputTexture);
    __privateGet(this, _program3).setUniform1i("uTexture", 0);
    this.applyUniforms();
    fullscreenQuad.draw(gl, __privateGet(this, _program3));
  }
  applyUniforms() {
    for (const [name, value] of Object.entries(__privateGet(this, _uniforms2))) {
      __privateMethod(this, _RenderPass_instances, applyUniform_fn).call(this, name, value);
    }
  }
  dispose() {
    __privateSet(this, _program3, null);
    __privateSet(this, _uniforms2, {});
  }
}
_enabled4 = new WeakMap();
_program3 = new WeakMap();
_uniforms2 = new WeakMap();
_RenderPass_instances = new WeakSet();
applyUniform_fn = function(name, value) {
  var _a2;
  if (typeof value === "number") {
    __privateGet(this, _program3).setUniform1f(name, value);
    return;
  }
  if (!Array.isArray(value)) {
    return;
  }
  const setters = {
    2: () => __privateGet(this, _program3).setUniform2f(name, value[0], value[1]),
    3: () => __privateGet(this, _program3).setUniform3f(name, value[0], value[1], value[2]),
    4: () => __privateGet(this, _program3).setUniform4f(name, value)
  };
  (_a2 = setters[value.length]) == null ? void 0 : _a2.call(setters);
};
__publicField(RenderPass, "shaderDefinition", null);
__publicField(RenderPass, "defaultUniforms", {});
__publicField(RenderPass, "uniformConfig", {});
class VignettePass extends RenderPass {
}
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

                // Sky detection
                float blueness = color.b - max(color.r, color.g);
                float skyFactor = smoothstep(-0.08, 0.15, blueness);

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

                fragColor = vec4(clamp(rgb, 0.0, 1.0), color.a);
            }
        `,
  uniforms: ["uTexture", "uDayNightProgress", "uAspectRatio"],
  attributes: ["aPosition", "aTexCoord"]
});
__publicField(DayNightPass, "defaultUniforms", {
  uDayNightProgress: 0,
  uAspectRatio: 1
});
__publicField(DayNightPass, "uniformConfig", {
  uDayNightProgress: { min: 0, max: 1, step: 0.01 }
});
const manifest = {
  config: {
    name: "Mistbrewer"
  },
  assets: {
    background: { type: "image", url: "./assets/images/background.png" },
    wolf: { type: "image", url: "./assets/images/wolf.png" },
    wolf_right: { type: "image", url: "./assets/images/wolf_right.png" },
    wolf_up: { type: "image", url: "./assets/images/wolf_up.png" },
    wolf_down: { type: "image", url: "./assets/images/wolf_down.png" },
    pig: { type: "image", url: "./assets/images/pig.png" },
    red: { type: "image", url: "./assets/images/red.png" },
    granny: { type: "image", url: "./assets/images/granny.png" },
    amalgam: { type: "image", url: "./assets/images/amalgam.png" }
  }
};
const instances = /* @__PURE__ */ new Map();
let enabled = false;
let cleanupIntervalId = null;
function enableDebug() {
  if (enabled) {
    return;
  }
  enabled = true;
  logger.info("Debug mode enabled");
  if (!cleanupIntervalId) {
    cleanupIntervalId = setInterval(cleanupDeadReferences, 5e3);
  }
}
function disableDebug() {
  if (!enabled) {
    return;
  }
  enabled = false;
  logger.info("Debug mode disabled");
  if (cleanupIntervalId) {
    clearInterval(cleanupIntervalId);
    cleanupIntervalId = null;
  }
}
function isDebugEnabled() {
  return enabled;
}
function trackInstance(className, instance) {
  if (!enabled) {
    return;
  }
  if (!instances.has(className)) {
    instances.set(className, /* @__PURE__ */ new Set());
  }
  instances.get(className).add(new WeakRef(instance));
}
function untrackInstance(className, instance) {
  if (!enabled) {
    return;
  }
  const classInstances = instances.get(className);
  if (!classInstances) {
    return;
  }
  for (const ref of classInstances) {
    if (ref.deref() === instance) {
      classInstances.delete(ref);
      break;
    }
  }
}
function cleanupDeadReferences() {
  if (!enabled) {
    return;
  }
  for (const [, refs] of instances.entries()) {
    for (const ref of refs) {
      if (ref.deref() === void 0) {
        refs.delete(ref);
      }
    }
  }
}
function getInstanceCount(className) {
  if (!enabled) {
    return 0;
  }
  cleanupDeadReferences();
  const classInstances = instances.get(className);
  return classInstances ? classInstances.size : 0;
}
function printDiagnostics() {
  if (!enabled) {
    logger.warn("Debug mode is disabled. Call enableDebug() first.");
    return;
  }
  cleanupDeadReferences();
  console.group("🔍 Memory Diagnostics");
  for (const [className, refs] of instances.entries()) {
    console.log(`${className}: ${refs.size} instances`);
  }
  console.groupEnd();
}
function clearInstances() {
  instances.clear();
}
const debug = {
  enableDebug,
  disableDebug,
  isDebugEnabled,
  trackInstance,
  untrackInstance,
  getInstanceCount,
  printDiagnostics,
  clearInstances
};
debug.enableDebug();
window.debug = debug;
window.logger = logger;
class DefendTheDen extends Game {
  constructor(params = {}) {
    const renderSystemConfig = {
      cameras: {
        main: {
          unitsInView: { width: 7, height: 5 }
        }
      },
      layers: [
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
      ]
    };
    super({
      ...params,
      renderSystem: renderSystemConfig
    });
    __privateAdd(this, _DefendTheDen_instances);
  }
  configureGame() {
    this.world = this.create(DenWorld);
    this.camera = this.renderSystem.getCamera("main");
    this.registerController("game", GameController);
    this.setActiveControllers(["game"]);
    this.renderer = this.create(GameRenderer, {
      $id: "renderer",
      world: this.world,
      game: this
    });
    const gameController = this.getController("game");
    gameController.world = this.world;
    gameController.renderer = this.renderer;
    gameController.game = this;
    const gameLayer = this.getCanvas("game");
    this.dayNightPass = new DayNightPass();
    gameLayer.renderer.addPostPass(this.dayNightPass);
    this.dayNightPass.setNight();
    const vignettePass = new VignettePass();
    gameLayer.renderer.addPostPass(vignettePass);
    this.currentWave = 0;
    this.currentDay = 0;
    this.dayPaused = false;
    this.waitingForClear = false;
    this.waveSpawnDurations = [25, 25, 25, 25];
    this.dayAnnouncementDuration = 3;
    this.timeOfDay = 0;
    this.waveElapsedTime = 0;
    this.on("update", (delta) => {
      this.dayNightPass.setUniform("uAspectRatio", gameLayer.canvas.width / gameLayer.canvas.height);
      if (this.dayPaused) {
        return;
      }
      if (this.waitingForClear) {
        __privateMethod(this, _DefendTheDen_instances, checkWaveClear_fn).call(this);
        return;
      }
      const wave = this.currentWave;
      const dayNumber = this.currentDay;
      const spawnDuration = this.waveSpawnDurations[wave];
      const waveProgress = Math.min(this.waveElapsedTime / spawnDuration, 1);
      const isSpawning = waveProgress < 1;
      if (isSpawning) {
        this.waveElapsedTime += delta;
        const waveStartTimeOfDay = wave * 0.25;
        this.timeOfDay = waveStartTimeOfDay + waveProgress * 0.25;
      }
      const hasEnemies = this.world.childrenByTags("enemy").length > 0;
      if (!isSpawning && hasEnemies) {
        this.waitingForClear = true;
        gameController.setSpawning(false);
        this.emit("wave:tick", { wave, progress: 1, dayNumber, timeOfDay: this.timeOfDay, isSpawning: false });
        return;
      }
      this.dayNightPass.setProgress(this.timeOfDay);
      __privateMethod(this, _DefendTheDen_instances, updateShadows_fn).call(this, this.timeOfDay);
      gameController.setSpawning(isSpawning);
      this.emit("wave:tick", { wave, progress: waveProgress, dayNumber, timeOfDay: this.timeOfDay, isSpawning });
    });
    const uiLayer = this.getHTML("ui");
    const waveProgressBar = this.create(WaveProgressBar, {
      $id: "waveProgress",
      game: this
    });
    waveProgressBar.mount(uiLayer);
    this.on("render", () => {
      this.renderer.render();
    });
  }
  onStart() {
    this.execute("spawnPlayer", { x: -2.5 });
    const gameController = this.getController("game");
    gameController.onWaveStart(0, 0);
    this.emit("wave:start", { wave: 0, dayNumber: 0 });
    this.emit("day:start", { dayNumber: 0 });
  }
  setHitboxDebug(enabled2) {
    this.renderer.setHitboxDebug(enabled2);
  }
}
_DefendTheDen_instances = new WeakSet();
updateShadows_fn = function(timeOfDay) {
  if (!this.renderer.shadowTransform) {
    return;
  }
  const shadowParams = DayNightPass.getShadowParams(timeOfDay);
  this.renderer.shadowTransform.skewX = shadowParams.skewX;
  this.renderer.shadowTransform.scaleY = shadowParams.scaleY;
  this.renderer.shadowTransform.offsetY = shadowParams.offsetY;
  this.renderer.shadowTransform.color = shadowParams.color;
};
checkWaveClear_fn = function() {
  const enemies = this.world.childrenByTags("enemy");
  if (enemies.length === 0) {
    this.waitingForClear = false;
    __privateMethod(this, _DefendTheDen_instances, startNextWave_fn).call(this);
  }
};
startNextWave_fn = function() {
  const nextWave = this.currentWave + 1;
  const gameController = this.getController("game");
  if (nextWave >= 4) {
    this.currentDay++;
    this.currentWave = 0;
    this.timeOfDay = 0;
    this.waveElapsedTime = 0;
    this.dayPaused = true;
    gameController.setSpawning(false);
    this.emit("day:announce", { dayNumber: this.currentDay });
    setTimeout(() => {
      this.dayPaused = false;
      gameController.onWaveStart(0, this.currentDay);
      this.emit("wave:start", { wave: 0, dayNumber: this.currentDay });
      this.emit("day:start", { dayNumber: this.currentDay });
    }, this.dayAnnouncementDuration * 1e3);
  } else {
    this.currentWave = nextWave;
    this.waveElapsedTime = 0;
    gameController.onWaveStart(nextWave, this.currentDay);
    this.emit("wave:start", { wave: nextWave, dayNumber: this.currentDay });
  }
};
__publicField(DefendTheDen, "$name", "defendTheDen");
__publicField(DefendTheDen, "manifest", manifest);
class BaseEditorComponent extends HTMLElement {
  constructor() {
    super();
    __privateAdd(this, _listeners, []);
    this.attachShadow({ mode: "open" });
  }
  disconnectedCallback() {
    this.cleanListeners();
  }
  listenTo(target, eventName, callback) {
    target.on(eventName, callback);
    __privateGet(this, _listeners).push({ target, eventName, callback });
  }
  cleanListeners() {
    for (const { target, eventName, callback } of __privateGet(this, _listeners)) {
      target.off(eventName, callback);
    }
    __privateSet(this, _listeners, []);
  }
}
_listeners = new WeakMap();
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
class BaseTool extends BaseEditorComponent {
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
  static register() {
    registerTool(this);
  }
}
_state = new WeakMap();
__publicField(BaseTool, "toolId", "base");
__publicField(BaseTool, "toolName", "Base Tool");
__publicField(BaseTool, "toolIcon", "🔧");
__publicField(BaseTool, "location", "sidebar");
__publicField(BaseTool, "order", 100);
const ICONS = {
  action: '<svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>',
  start: '<svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>',
  stop: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>',
  close: '<svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',
  spawn: '<svg viewBox="0 0 24 24"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>',
  dispose: '<svg viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>',
  apps: '<svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>',
  explorer: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>',
  logger: '<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>',
  terminal: '<svg viewBox="0 0 24 24"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>',
  chevronLeft: '<svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"></polyline></svg>',
  history: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>',
  crow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M10 5 L14 5"/>
        <path d="M11 5 L11.5 2.5 H13.5 L13 5"/>
        <circle cx="10" cy="10" r="2" />
        <path d="M 12 5 C 9 5 8 7 8 9" />
        <path d="M 8 9 L 3 11 L 8 13" />
        <path d="M 8 13 C 9 16 11 19 14 21" />
        <path d="M 14 5 C 16 6 17 12 17 20" />
    </svg>`
};
const cssVariables = `
    --bg-primary: #1a1a1e;
    --bg-secondary: #24242a;
    --bg-hover: #2e2e36;
    --bg-selected: #3a3a44;
    --fg-primary: #e4e4e8;
    --fg-secondary: #9898a0;
    --fg-muted: #6a6a72;
    --accent: #6b9fff;
    --status-started: #4ade80;
    --status-stopped: #f87171;
    --status-warning: #f59e0b;
    --status-disposed: #6b7280;
    --border: #38383e;
    --font-mono: "Source Code Pro", "SF Mono", "Monaco", monospace;
`;
const explorerStyles = `
    *, *::before, *::after {
        box-sizing: border-box;
    }

    :host {
        ${cssVariables}
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
    __privateSet(this, _labelEl, document.createElement("div"));
    __privateGet(this, _labelEl).className = "node-label";
    this.contentEl.appendChild(__privateGet(this, _labelEl));
  }
  if (!__privateGet(this, _propsEl)) {
    __privateSet(this, _propsEl, document.createElement("div"));
    __privateGet(this, _propsEl).className = "node-props";
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
customElements.define("scene-tree-node", SceneTreeNode);
class BaseInspector extends BaseEditorComponent {
  constructor(customStyles2 = "") {
    super();
    __privateAdd(this, _BaseInspector_instances);
    __privateAdd(this, _module2, null);
    __privateAdd(this, _gridEl, null);
    __privateAdd(this, _actionsEl, null);
    __privateAdd(this, _customStyles2, "");
    __privateSet(this, _customStyles2, customStyles2);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
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
    const style = document.createElement("style");
    style.textContent = __privateMethod(this, _BaseInspector_instances, getStyles_fn).call(this);
    this.shadowRoot.appendChild(style);
    __privateSet(this, _gridEl, document.createElement("div"));
    __privateGet(this, _gridEl).className = "inspector-grid";
    __privateSet(this, _actionsEl, document.createElement("div"));
    __privateGet(this, _actionsEl).className = "inspector-actions";
    this.shadowRoot.appendChild(__privateGet(this, _gridEl));
    this.shadowRoot.appendChild(__privateGet(this, _actionsEl));
  }
  addRow(label, value, isAccent = false) {
    const labelEl = document.createElement("div");
    labelEl.className = "inspector-label";
    labelEl.textContent = label;
    const valueEl = document.createElement("div");
    valueEl.className = `inspector-value ${isAccent ? "accent" : ""}`;
    const displayValue = typeof value === "function" ? value() : value;
    valueEl.textContent = String(displayValue);
    valueEl.title = String(displayValue);
    __privateGet(this, _gridEl).appendChild(labelEl);
    __privateGet(this, _gridEl).appendChild(valueEl);
    return valueEl;
  }
  addSeparator() {
    const sep = document.createElement("div");
    sep.className = "inspector-separator";
    __privateGet(this, _gridEl).appendChild(sep);
  }
  createButton(icon, text, onClick) {
    const btn = document.createElement("button");
    btn.className = "inspector-btn";
    btn.textContent = icon ? `${icon} ${text}` : text;
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
_customStyles2 = new WeakMap();
_BaseInspector_instances = new WeakSet();
getStyles_fn = function() {
  return `
            :host {
                ${cssVariables}
                display: block;
            }
            ${inspectorStyles}
            ${__privateGet(this, _customStyles2)}
        `;
};
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
const inspectorRegistry = /* @__PURE__ */ new Set();
class PerkyExplorerDetails extends BaseEditorComponent {
  constructor() {
    super(...arguments);
    __privateAdd(this, _PerkyExplorerDetails_instances);
    __privateAdd(this, _module3, null);
    __privateAdd(this, _titleEl, null);
    __privateAdd(this, _contentEl2, null);
  }
  connectedCallback() {
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
  const style = document.createElement("style");
  style.textContent = `:host { ${cssVariables} } ${detailsStyles}
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
        `;
  this.shadowRoot.appendChild(style);
  __privateSet(this, _titleEl, document.createElement("div"));
  __privateGet(this, _titleEl).className = "details-title";
  __privateSet(this, _contentEl2, document.createElement("div"));
  __privateGet(this, _contentEl2).className = "details-content";
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
  const empty = document.createElement("div");
  empty.className = "details-empty";
  empty.textContent = "Select a module to inspect";
  __privateGet(this, _contentEl2).appendChild(empty);
};
renderTitle_fn = function() {
  __privateGet(this, _titleEl).innerHTML = "";
  const statusDot = document.createElement("div");
  statusDot.className = `details-status ${__privateGet(this, _module3).$status}`;
  const focusBtn = document.createElement("button");
  focusBtn.className = "details-focus-btn";
  focusBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle></svg>';
  focusBtn.title = "Focus on this module";
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
    addGridRow(grid, key, formatValue(value));
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
  const grid = document.createElement("div");
  grid.className = "details-grid";
  return grid;
}
function addGridRow(grid, label, value, isAccent = false) {
  const labelEl = document.createElement("div");
  labelEl.className = "details-label";
  labelEl.textContent = label;
  const valueEl = document.createElement("div");
  valueEl.className = `details-value ${isAccent ? "accent" : ""}`;
  if (value instanceof HTMLElement) {
    valueEl.appendChild(value);
  } else {
    valueEl.textContent = String(value);
    valueEl.title = String(value);
  }
  grid.appendChild(labelEl);
  grid.appendChild(valueEl);
}
function formatValue(value) {
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
  const container = document.createElement("div");
  container.className = "details-tags";
  for (const tag of tags) {
    const tagEl = document.createElement("span");
    tagEl.className = "details-tag";
    tagEl.textContent = tag;
    container.appendChild(tagEl);
  }
  return container;
}
customElements.define("perky-explorer-details", PerkyExplorerDetails);
function createInputStyles(customStyles2) {
  return `
        :host {
            ${cssVariables}
            display: inline-flex;
            font-family: var(--font-mono);
        }
        ${customStyles2}
    `;
}
function emitChange(element, detail) {
  element.dispatchEvent(new CustomEvent("change", {
    detail,
    bubbles: true
  }));
}
const attributeHandlers = {
  value: (component, newValue) => {
    component.setValue(parseFloat(newValue) || 0);
  },
  min: (component, newValue) => {
    component.setMin(parseFloat(newValue) || 0);
  },
  max: (component, newValue) => {
    component.setMax(parseFloat(newValue) || 100);
  },
  step: (component, newValue) => {
    component.setStep(parseFloat(newValue) || 1);
  },
  label: (component, newValue) => {
    component.setLabel(newValue || "");
  },
  precision: (component, newValue) => {
    component.setPrecision(parseInt(newValue, 10) || 2);
  },
  checked: (component, newValue) => {
    component.setChecked(newValue !== null);
  }
};
function handleAttributeChange(component, name, oldValue, newValue) {
  if (oldValue === newValue) {
    return false;
  }
  const handler = attributeHandlers[name];
  if (handler) {
    handler(component, newValue);
    return true;
  }
  return false;
}
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
    __privateMethod(this, _SliderInput_instances, buildDOM_fn4).call(this);
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
buildDOM_fn4 = function() {
  const style = document.createElement("style");
  style.textContent = sliderStyles;
  this.shadowRoot.appendChild(style);
  const container = document.createElement("div");
  container.className = "slider-input-container";
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
  container.appendChild(__privateGet(this, _labelEl2));
  container.appendChild(__privateGet(this, _slider));
  container.appendChild(__privateGet(this, _valueEl));
  this.shadowRoot.appendChild(container);
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
const toggleStyles = createInputStyles(`
    .toggle-input-container {
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
    }

    .toggle-input-track {
        position: relative;
        width: 28px;
        height: 14px;
        background: var(--bg-hover);
        border-radius: 7px;
        transition: background 0.2s;
        flex-shrink: 0;
    }

    .toggle-input-track.checked {
        background: var(--accent);
    }

    .toggle-input-thumb {
        position: absolute;
        top: 2px;
        left: 2px;
        width: 10px;
        height: 10px;
        background: var(--fg-muted);
        border-radius: 50%;
        transition: transform 0.2s, background 0.2s;
    }

    .toggle-input-track.checked .toggle-input-thumb {
        transform: translateX(14px);
        background: var(--bg-primary);
    }

    .toggle-input-label {
        font-size: 11px;
        color: var(--fg-primary);
        font-weight: 500;
        user-select: none;
    }

    .toggle-input-label:empty {
        display: none;
    }

    .toggle-input-container:hover .toggle-input-track:not(.checked) {
        background: var(--bg-selected);
    }

    .toggle-input-container:hover .toggle-input-thumb {
        background: var(--fg-secondary);
    }

    .toggle-input-track.checked:hover .toggle-input-thumb {
        background: var(--bg-primary);
    }
`);
class ToggleInput extends HTMLElement {
  constructor() {
    super();
    __privateAdd(this, _ToggleInput_instances);
    __privateAdd(this, _checked, false);
    __privateAdd(this, _label2, "");
    __privateAdd(this, _toggle, null);
    __privateAdd(this, _labelEl3, null);
    this.attachShadow({ mode: "open" });
    __privateMethod(this, _ToggleInput_instances, buildDOM_fn5).call(this);
  }
  static get observedAttributes() {
    return ["checked", "label"];
  }
  connectedCallback() {
    __privateMethod(this, _ToggleInput_instances, updateDisplay_fn2).call(this);
  }
  attributeChangedCallback(name, oldValue, newValue) {
    handleAttributeChange(this, name, oldValue, newValue);
  }
  get checked() {
    return __privateGet(this, _checked);
  }
  set checked(val) {
    const newChecked = Boolean(val);
    if (__privateGet(this, _checked) !== newChecked) {
      __privateSet(this, _checked, newChecked);
      __privateMethod(this, _ToggleInput_instances, updateDisplay_fn2).call(this);
    }
  }
  setChecked(val) {
    __privateSet(this, _checked, val);
    __privateMethod(this, _ToggleInput_instances, updateDisplay_fn2).call(this);
  }
  setLabel(val) {
    __privateSet(this, _label2, val);
    if (__privateGet(this, _labelEl3)) {
      __privateGet(this, _labelEl3).textContent = __privateGet(this, _label2);
    }
  }
}
_checked = new WeakMap();
_label2 = new WeakMap();
_toggle = new WeakMap();
_labelEl3 = new WeakMap();
_ToggleInput_instances = new WeakSet();
buildDOM_fn5 = function() {
  const style = document.createElement("style");
  style.textContent = toggleStyles;
  this.shadowRoot.appendChild(style);
  const container = document.createElement("div");
  container.className = "toggle-input-container";
  __privateSet(this, _toggle, document.createElement("div"));
  __privateGet(this, _toggle).className = "toggle-input-track";
  __privateGet(this, _toggle).addEventListener("click", () => __privateMethod(this, _ToggleInput_instances, handleClick_fn).call(this));
  const thumb = document.createElement("div");
  thumb.className = "toggle-input-thumb";
  __privateGet(this, _toggle).appendChild(thumb);
  __privateSet(this, _labelEl3, document.createElement("span"));
  __privateGet(this, _labelEl3).className = "toggle-input-label";
  __privateGet(this, _labelEl3).textContent = __privateGet(this, _label2);
  __privateGet(this, _labelEl3).addEventListener("click", () => __privateMethod(this, _ToggleInput_instances, handleClick_fn).call(this));
  container.appendChild(__privateGet(this, _toggle));
  container.appendChild(__privateGet(this, _labelEl3));
  this.shadowRoot.appendChild(container);
};
updateDisplay_fn2 = function() {
  if (__privateGet(this, _toggle)) {
    __privateGet(this, _toggle).classList.toggle("checked", __privateGet(this, _checked));
  }
};
handleClick_fn = function() {
  __privateSet(this, _checked, !__privateGet(this, _checked));
  __privateMethod(this, _ToggleInput_instances, updateDisplay_fn2).call(this);
  emitChange(this, { checked: __privateGet(this, _checked) });
};
customElements.define("toggle-input", ToggleInput);
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
const SHIFT_MULTIPLIER = 10;
const CTRL_MULTIPLIER = 0.1;
const DRAG_SENSITIVITY = 0.5;
const numberStyles = createInputStyles(`
    .number-input-container {
        display: flex;
        align-items: center;
        gap: 6px;
        flex: 1;
        min-width: 0;
        background: var(--bg-primary);
        border: 1px solid var(--border);
        border-radius: 4px;
        padding: 0 2px 0 8px;
        height: 26px;
        transition: border-color 0.15s;
    }

    .number-input-container:focus-within {
        border-color: var(--accent);
    }

    .number-input-label {
        font-size: 11px;
        color: var(--fg-muted);
        cursor: ew-resize;
        user-select: none;
        min-width: 10px;
        text-transform: lowercase;
    }

    .number-input-label:hover {
        color: var(--accent);
    }

    .number-input-label.dragging {
        color: var(--accent);
    }

    .number-input-field {
        flex: 1;
        background: transparent;
        border: none;
        color: var(--fg-primary);
        font-size: 11px;
        font-family: var(--font-mono);
        min-width: 0;
        text-align: right;
        padding: 0;
    }

    .number-input-field:focus {
        outline: none;
    }

    .number-input-steppers {
        display: flex;
        gap: 1px;
    }

    .number-input-stepper {
        background: var(--bg-hover);
        border: none;
        color: var(--fg-muted);
        cursor: pointer;
        font-size: 7px;
        width: 14px;
        height: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.1s, color 0.1s;
    }

    .number-input-stepper:first-child {
        border-radius: 2px 0 0 2px;
    }

    .number-input-stepper:last-child {
        border-radius: 0 2px 2px 0;
    }

    .number-input-stepper:hover {
        background: var(--bg-selected);
        color: var(--fg-primary);
    }

    .number-input-stepper:active {
        background: var(--accent);
        color: var(--bg-primary);
    }
`);
function getMultiplier(event) {
  if (event.shiftKey) {
    return SHIFT_MULTIPLIER;
  }
  if (event.ctrlKey || event.metaKey) {
    return CTRL_MULTIPLIER;
  }
  return 1;
}
class NumberInput extends HTMLElement {
  constructor() {
    super();
    __privateAdd(this, _NumberInput_instances);
    __privateAdd(this, _value2, 0);
    __privateAdd(this, _step2, 0.1);
    __privateAdd(this, _precision, 2);
    __privateAdd(this, _label3, "");
    __privateAdd(this, _min2, -Infinity);
    __privateAdd(this, _max2, Infinity);
    __privateAdd(this, _input, null);
    __privateAdd(this, _labelEl4, null);
    __privateAdd(this, _decrementBtn, null);
    __privateAdd(this, _incrementBtn, null);
    __privateAdd(this, _isDragging, false);
    __privateAdd(this, _dragStartX, 0);
    __privateAdd(this, _dragStartValue, 0);
    __privateAdd(this, _onDragMove, (event) => {
      if (!__privateGet(this, _isDragging)) {
        return;
      }
      const deltaX = event.clientX - __privateGet(this, _dragStartX);
      const multiplier = getMultiplier(event);
      const delta = deltaX * DRAG_SENSITIVITY * __privateGet(this, _step2) * multiplier;
      const newValue = __privateMethod(this, _NumberInput_instances, clamp_fn2).call(this, __privateGet(this, _dragStartValue) + delta);
      if (__privateGet(this, _value2) !== newValue) {
        __privateSet(this, _value2, newValue);
        __privateMethod(this, _NumberInput_instances, updateDisplay_fn3).call(this);
        emitChange(this, { value: __privateGet(this, _value2) });
      }
    });
    __privateAdd(this, _onDragEnd, () => {
      __privateSet(this, _isDragging, false);
      __privateGet(this, _labelEl4).classList.remove("dragging");
      document.body.style.cursor = "";
      document.removeEventListener("mousemove", __privateGet(this, _onDragMove));
      document.removeEventListener("mouseup", __privateGet(this, _onDragEnd));
    });
    this.attachShadow({ mode: "open" });
    __privateMethod(this, _NumberInput_instances, buildDOM_fn6).call(this);
  }
  static get observedAttributes() {
    return ["value", "step", "precision", "label", "min", "max"];
  }
  connectedCallback() {
    __privateMethod(this, _NumberInput_instances, updateDisplay_fn3).call(this);
  }
  disconnectedCallback() {
    if (__privateGet(this, _isDragging)) {
      __privateGet(this, _onDragEnd).call(this);
    }
  }
  attributeChangedCallback(name, oldValue, newValue) {
    handleAttributeChange(this, name, oldValue, newValue);
  }
  get value() {
    return __privateGet(this, _value2);
  }
  set value(val) {
    const newValue = __privateMethod(this, _NumberInput_instances, clamp_fn2).call(this, parseFloat(val) || 0);
    if (__privateGet(this, _value2) !== newValue) {
      __privateSet(this, _value2, newValue);
      __privateMethod(this, _NumberInput_instances, updateDisplay_fn3).call(this);
    }
  }
  setValue(val) {
    __privateSet(this, _value2, val);
    __privateMethod(this, _NumberInput_instances, updateDisplay_fn3).call(this);
  }
  setStep(val) {
    __privateSet(this, _step2, val);
  }
  setPrecision(val) {
    __privateSet(this, _precision, val);
    __privateMethod(this, _NumberInput_instances, updateDisplay_fn3).call(this);
  }
  setLabel(val) {
    __privateSet(this, _label3, val);
    if (__privateGet(this, _labelEl4)) {
      __privateGet(this, _labelEl4).textContent = __privateGet(this, _label3);
    }
  }
  setMin(val) {
    __privateSet(this, _min2, val);
  }
  setMax(val) {
    __privateSet(this, _max2, val);
  }
}
_value2 = new WeakMap();
_step2 = new WeakMap();
_precision = new WeakMap();
_label3 = new WeakMap();
_min2 = new WeakMap();
_max2 = new WeakMap();
_input = new WeakMap();
_labelEl4 = new WeakMap();
_decrementBtn = new WeakMap();
_incrementBtn = new WeakMap();
_isDragging = new WeakMap();
_dragStartX = new WeakMap();
_dragStartValue = new WeakMap();
_onDragMove = new WeakMap();
_onDragEnd = new WeakMap();
_NumberInput_instances = new WeakSet();
buildDOM_fn6 = function() {
  const style = document.createElement("style");
  style.textContent = numberStyles;
  this.shadowRoot.appendChild(style);
  const container = document.createElement("div");
  container.className = "number-input-container";
  __privateSet(this, _labelEl4, document.createElement("span"));
  __privateGet(this, _labelEl4).className = "number-input-label";
  __privateGet(this, _labelEl4).textContent = __privateGet(this, _label3);
  __privateGet(this, _labelEl4).addEventListener("mousedown", (e) => __privateMethod(this, _NumberInput_instances, startDrag_fn).call(this, e));
  __privateSet(this, _input, document.createElement("input"));
  __privateGet(this, _input).className = "number-input-field";
  __privateGet(this, _input).type = "text";
  __privateGet(this, _input).inputMode = "decimal";
  __privateGet(this, _input).addEventListener("input", () => __privateMethod(this, _NumberInput_instances, handleInputChange_fn).call(this));
  __privateGet(this, _input).addEventListener("keydown", (e) => __privateMethod(this, _NumberInput_instances, handleKeyDown_fn).call(this, e));
  __privateGet(this, _input).addEventListener("blur", () => __privateMethod(this, _NumberInput_instances, handleBlur_fn2).call(this));
  __privateGet(this, _input).addEventListener("focus", () => __privateGet(this, _input).select());
  const stepperContainer = document.createElement("div");
  stepperContainer.className = "number-input-steppers";
  __privateSet(this, _decrementBtn, document.createElement("button"));
  __privateGet(this, _decrementBtn).className = "number-input-stepper";
  __privateGet(this, _decrementBtn).innerHTML = "◀";
  __privateGet(this, _decrementBtn).tabIndex = -1;
  __privateGet(this, _decrementBtn).addEventListener("click", (e) => __privateMethod(this, _NumberInput_instances, handleStep_fn).call(this, -1, e));
  __privateSet(this, _incrementBtn, document.createElement("button"));
  __privateGet(this, _incrementBtn).className = "number-input-stepper";
  __privateGet(this, _incrementBtn).innerHTML = "▶";
  __privateGet(this, _incrementBtn).tabIndex = -1;
  __privateGet(this, _incrementBtn).addEventListener("click", (e) => __privateMethod(this, _NumberInput_instances, handleStep_fn).call(this, 1, e));
  stepperContainer.appendChild(__privateGet(this, _decrementBtn));
  stepperContainer.appendChild(__privateGet(this, _incrementBtn));
  container.appendChild(__privateGet(this, _labelEl4));
  container.appendChild(__privateGet(this, _input));
  container.appendChild(stepperContainer);
  this.shadowRoot.appendChild(container);
};
updateDisplay_fn3 = function() {
  if (__privateGet(this, _input) && !__privateGet(this, _input).matches(":focus")) {
    __privateGet(this, _input).value = __privateGet(this, _value2).toFixed(__privateGet(this, _precision));
  }
};
handleInputChange_fn = function() {
  const parsed = parseFloat(__privateGet(this, _input).value);
  if (!isNaN(parsed)) {
    const clamped = __privateMethod(this, _NumberInput_instances, clamp_fn2).call(this, parsed);
    if (__privateGet(this, _value2) !== clamped) {
      __privateSet(this, _value2, clamped);
      emitChange(this, { value: __privateGet(this, _value2) });
    }
  }
};
handleBlur_fn2 = function() {
  const parsed = parseFloat(__privateGet(this, _input).value);
  if (isNaN(parsed)) {
    __privateMethod(this, _NumberInput_instances, updateDisplay_fn3).call(this);
  } else {
    __privateSet(this, _value2, __privateMethod(this, _NumberInput_instances, clamp_fn2).call(this, parsed));
    __privateMethod(this, _NumberInput_instances, updateDisplay_fn3).call(this);
  }
};
handleKeyDown_fn = function(event) {
  const multiplier = getMultiplier(event);
  const key = event.key;
  if (key === "ArrowUp") {
    event.preventDefault();
    __privateMethod(this, _NumberInput_instances, adjustValue_fn).call(this, __privateGet(this, _step2) * multiplier);
  } else if (key === "ArrowDown") {
    event.preventDefault();
    __privateMethod(this, _NumberInput_instances, adjustValue_fn).call(this, -__privateGet(this, _step2) * multiplier);
  } else if (key === "Enter") {
    event.preventDefault();
    __privateGet(this, _input).blur();
  } else if (key === "Escape") {
    event.preventDefault();
    __privateMethod(this, _NumberInput_instances, updateDisplay_fn3).call(this);
    __privateGet(this, _input).blur();
  }
};
handleStep_fn = function(direction, event) {
  const multiplier = getMultiplier(event);
  __privateMethod(this, _NumberInput_instances, adjustValue_fn).call(this, direction * __privateGet(this, _step2) * multiplier);
};
adjustValue_fn = function(delta) {
  const newValue = __privateMethod(this, _NumberInput_instances, clamp_fn2).call(this, __privateGet(this, _value2) + delta);
  if (__privateGet(this, _value2) !== newValue) {
    __privateSet(this, _value2, newValue);
    __privateMethod(this, _NumberInput_instances, updateDisplay_fn3).call(this);
    emitChange(this, { value: __privateGet(this, _value2) });
  }
};
clamp_fn2 = function(value) {
  return Math.max(__privateGet(this, _min2), Math.min(__privateGet(this, _max2), value));
};
startDrag_fn = function(event) {
  event.preventDefault();
  __privateSet(this, _isDragging, true);
  __privateSet(this, _dragStartX, event.clientX);
  __privateSet(this, _dragStartValue, __privateGet(this, _value2));
  __privateGet(this, _labelEl4).classList.add("dragging");
  document.body.style.cursor = "ew-resize";
  document.addEventListener("mousemove", __privateGet(this, _onDragMove));
  document.addEventListener("mouseup", __privateGet(this, _onDragEnd));
};
customElements.define("number-input", NumberInput);
const vec2Styles = createInputStyles(`
    :host {
        display: block;
        width: 100%;
        box-sizing: border-box;
    }

    .vec2-input-container {
        display: flex;
        flex-direction: column;
        gap: 4px;
        width: 100%;
    }

    .vec2-input-label {
        font-size: 10px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        color: var(--fg-muted);
    }

    .vec2-input-label:empty {
        display: none;
    }

    .vec2-inputs {
        display: flex;
        gap: 8px;
        width: 100%;
    }

    .vec2-inputs number-input {
        flex: 1;
        min-width: 0;
    }
`);
class Vec2Input extends HTMLElement {
  constructor() {
    super();
    __privateAdd(this, _Vec2Input_instances);
    __privateAdd(this, _vec2, null);
    __privateAdd(this, _xInput, null);
    __privateAdd(this, _yInput, null);
    __privateAdd(this, _label4, "");
    __privateAdd(this, _labelEl5, null);
    this.attachShadow({ mode: "open" });
    __privateMethod(this, _Vec2Input_instances, buildDOM_fn7).call(this);
  }
  static get observedAttributes() {
    return ["label"];
  }
  connectedCallback() {
    __privateMethod(this, _Vec2Input_instances, updateDisplay_fn4).call(this);
  }
  attributeChangedCallback(name, oldValue, newValue) {
    handleAttributeChange(this, name, oldValue, newValue);
  }
  get value() {
    return __privateGet(this, _vec2);
  }
  set value(vec2) {
    __privateSet(this, _vec2, vec2);
    __privateMethod(this, _Vec2Input_instances, updateDisplay_fn4).call(this);
  }
  setLabel(val) {
    __privateSet(this, _label4, val);
    if (__privateGet(this, _labelEl5)) {
      __privateGet(this, _labelEl5).textContent = __privateGet(this, _label4);
    }
  }
}
_vec2 = new WeakMap();
_xInput = new WeakMap();
_yInput = new WeakMap();
_label4 = new WeakMap();
_labelEl5 = new WeakMap();
_Vec2Input_instances = new WeakSet();
buildDOM_fn7 = function() {
  const style = document.createElement("style");
  style.textContent = vec2Styles;
  this.shadowRoot.appendChild(style);
  const container = document.createElement("div");
  container.className = "vec2-input-container";
  __privateSet(this, _labelEl5, document.createElement("span"));
  __privateGet(this, _labelEl5).className = "vec2-input-label";
  __privateGet(this, _labelEl5).textContent = __privateGet(this, _label4);
  const inputs = document.createElement("div");
  inputs.className = "vec2-inputs";
  __privateSet(this, _xInput, document.createElement("number-input"));
  __privateGet(this, _xInput).setAttribute("label", "x");
  __privateGet(this, _xInput).setAttribute("step", "0.1");
  __privateGet(this, _xInput).setAttribute("precision", "2");
  __privateGet(this, _xInput).addEventListener("change", (e) => __privateMethod(this, _Vec2Input_instances, handleChange_fn).call(this, "x", e.detail.value));
  __privateSet(this, _yInput, document.createElement("number-input"));
  __privateGet(this, _yInput).setAttribute("label", "y");
  __privateGet(this, _yInput).setAttribute("step", "0.1");
  __privateGet(this, _yInput).setAttribute("precision", "2");
  __privateGet(this, _yInput).addEventListener("change", (e) => __privateMethod(this, _Vec2Input_instances, handleChange_fn).call(this, "y", e.detail.value));
  inputs.appendChild(__privateGet(this, _xInput));
  inputs.appendChild(__privateGet(this, _yInput));
  container.appendChild(__privateGet(this, _labelEl5));
  container.appendChild(inputs);
  this.shadowRoot.appendChild(container);
};
updateDisplay_fn4 = function() {
  if (!__privateGet(this, _vec2)) {
    return;
  }
  __privateGet(this, _xInput).value = __privateGet(this, _vec2).x;
  __privateGet(this, _yInput).value = __privateGet(this, _vec2).y;
};
handleChange_fn = function(axis, value) {
  if (!__privateGet(this, _vec2)) {
    return;
  }
  __privateGet(this, _vec2)[axis] = value;
  emitChange(this, { value: __privateGet(this, _vec2), axis, componentValue: value });
};
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
const customStyles$3 = `
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

    .asset-header {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 6px;
    }

    .asset-icon {
        font-size: 14px;
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
    this.buildDOM();
  }
  static matches(module) {
    return module instanceof Manifest;
  }
  onModuleSet(module) {
    if (module) {
      __privateMethod(this, _ManifestInspector_instances, update_fn6).call(this);
    }
  }
}
_sectionsState = new WeakMap();
_ManifestInspector_instances = new WeakSet();
update_fn6 = function() {
  if (!this.module) {
    return;
  }
  this.clearContent();
  const container = document.createElement("div");
  container.appendChild(__privateMethod(this, _ManifestInspector_instances, createConfigSection_fn).call(this));
  container.appendChild(__privateMethod(this, _ManifestInspector_instances, createAssetsSection_fn).call(this));
  this.gridEl.style.display = "none";
  this.shadowRoot.insertBefore(container, this.gridEl);
};
createSection_fn = function(title, key, count = null) {
  const section = document.createElement("div");
  section.className = "section";
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
createAssetsSection_fn = function() {
  const allAssets = this.module.getAllAssets();
  const { section, content } = __privateMethod(this, _ManifestInspector_instances, createSection_fn).call(this, "Assets", "assets", allAssets.length);
  if (allAssets.length === 0) {
    content.innerHTML = '<div class="empty-message">No assets defined</div>';
    return section;
  }
  const assetsByType = groupAssetsByType(allAssets);
  for (const [type, assets] of Object.entries(assetsByType)) {
    const group = document.createElement("div");
    group.className = "asset-type-group";
    const typeHeader = document.createElement("div");
    typeHeader.className = "asset-type-header";
    typeHeader.textContent = `${type} (${assets.length})`;
    group.appendChild(typeHeader);
    for (const asset of assets) {
      group.appendChild(createAssetCard(asset, (data) => __privateMethod(this, _ManifestInspector_instances, createDataGrid_fn).call(this, data)));
    }
    content.appendChild(group);
  }
  return section;
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
function createAssetHeader(asset) {
  const header = document.createElement("div");
  header.className = "asset-header";
  const icon = document.createElement("span");
  icon.className = "asset-icon";
  icon.textContent = getAssetIcon(asset);
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
function createAssetCard(asset, createDataGrid) {
  const card = document.createElement("div");
  card.className = "asset-card";
  card.appendChild(createAssetHeader(asset));
  card.appendChild(createAssetDetails(asset));
  const tags = createAssetTags(asset);
  if (tags) {
    card.appendChild(tags);
  }
  const config = createAssetConfig(asset, createDataGrid);
  if (config) {
    card.appendChild(config);
  }
  const preview = createSourcePreview(asset);
  if (preview) {
    card.appendChild(preview);
  }
  return card;
}
function addAssetRow(container, label, value) {
  const labelEl = document.createElement("div");
  labelEl.className = "asset-label";
  labelEl.textContent = label;
  const valueEl = document.createElement("div");
  valueEl.className = "asset-value";
  valueEl.textContent = value;
  container.appendChild(labelEl);
  container.appendChild(valueEl);
}
function addAssetRowElement(container, label, element) {
  const labelEl = document.createElement("div");
  labelEl.className = "asset-label";
  labelEl.textContent = label;
  const valueEl = document.createElement("div");
  valueEl.className = "asset-value";
  valueEl.appendChild(element);
  container.appendChild(labelEl);
  container.appendChild(valueEl);
}
const ASSET_ICON_PATTERNS = [
  { keywords: ["texture", "image", "sprite"], icon: "🖼" },
  { keywords: ["audio", "sound", "music"], icon: "🔊" },
  { keywords: ["font"], icon: "🔤" },
  { keywords: ["shader"], icon: "✨" },
  { keywords: ["scene"], icon: "🎬" },
  { keywords: ["script"], icon: "📜" },
  { keywords: ["data", "json"], icon: "📄" }
];
function getAssetIcon(asset) {
  var _a2;
  const type = ((_a2 = asset.type) == null ? void 0 : _a2.toLowerCase()) || "";
  for (const { keywords, icon } of ASSET_ICON_PATTERNS) {
    if (keywords.some((keyword) => type.includes(keyword))) {
      return icon;
    }
  }
  return "📦";
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
const customStyles$1 = `
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
`;
class ActionControllerInspector extends BaseInspector {
  constructor() {
    super(customStyles$1);
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
    const empty = document.createElement("div");
    empty.className = "empty-message";
    empty.textContent = "No actions defined";
    __privateGet(this, _containerEl2).appendChild(empty);
    return;
  }
  const list = document.createElement("div");
  list.className = "actions-list";
  for (const actionName of actions) {
    const card = __privateMethod(this, _ActionControllerInspector_instances, createActionCard_fn).call(this, actionName);
    list.appendChild(card);
  }
  __privateGet(this, _containerEl2).appendChild(list);
};
createActionCard_fn = function(actionName) {
  const card = document.createElement("div");
  card.className = "action-card";
  const nameEl = document.createElement("span");
  nameEl.className = "action-name";
  nameEl.textContent = actionName;
  const rightSide = document.createElement("div");
  rightSide.style.display = "flex";
  rightSide.style.alignItems = "center";
  rightSide.style.gap = "6px";
  const isPropagable = this.module.shouldPropagate(actionName);
  if (isPropagable) {
    const badge = document.createElement("span");
    badge.className = "action-badge propagable";
    badge.textContent = "propagable";
    rightSide.appendChild(badge);
  }
  const executeBtn = document.createElement("button");
  executeBtn.className = "execute-btn";
  executeBtn.textContent = "▶ Run";
  executeBtn.addEventListener("click", () => {
    this.module.execute(actionName);
  });
  rightSide.appendChild(executeBtn);
  card.appendChild(nameEl);
  card.appendChild(rightSide);
  return card;
};
function createHeader$1(count) {
  const header = document.createElement("div");
  header.className = "actions-header";
  const countEl = document.createElement("div");
  countEl.className = "actions-count";
  countEl.innerHTML = `<strong>${count}</strong> ${pluralize("action", count)}`;
  header.appendChild(countEl);
  return header;
}
customElements.define("action-controller-inspector", ActionControllerInspector);
PerkyExplorerDetails.registerInspector(ActionControllerInspector);
const customStyles = `
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

    .group-count {
        font-size: 9px;
        background: var(--bg-hover);
        padding: 2px 6px;
        border-radius: 8px;
        color: var(--fg-secondary);
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
`;
class ActionDispatcherInspector extends BaseInspector {
  constructor() {
    super(customStyles);
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
    const empty = document.createElement("div");
    empty.className = "empty-message";
    empty.textContent = "No controllers registered";
    __privateGet(this, _containerEl3).appendChild(empty);
    return;
  }
  for (const [controllerName, actions] of actionsMap) {
    const group = __privateMethod(this, _ActionDispatcherInspector_instances, createControllerGroup_fn).call(this, controllerName, actions);
    __privateGet(this, _containerEl3).appendChild(group);
  }
};
createControllerGroup_fn = function(controllerName, actions) {
  const group = document.createElement("div");
  group.className = "controller-group";
  const header = document.createElement("div");
  header.className = "group-header";
  const nameEl = document.createElement("span");
  nameEl.className = "group-name";
  nameEl.textContent = controllerName;
  const count = document.createElement("span");
  count.className = "group-count";
  count.textContent = actions.length;
  header.appendChild(nameEl);
  header.appendChild(count);
  group.appendChild(header);
  if (actions.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-message";
    empty.textContent = "No actions";
    group.appendChild(empty);
  } else {
    const list = document.createElement("div");
    list.className = "actions-list";
    for (const actionName of actions) {
      const card = createActionCard(actionName, controllerName, this.module);
      list.appendChild(card);
    }
    group.appendChild(list);
  }
  return group;
};
function createHeader(totalActions, controllerCount) {
  const header = document.createElement("div");
  header.className = "actions-header";
  const countEl = document.createElement("div");
  countEl.className = "actions-count";
  countEl.innerHTML = `<strong>${totalActions}</strong> ${pluralize("action", totalActions)} in <strong>${controllerCount}</strong> ${pluralize("controller", controllerCount)}`;
  header.appendChild(countEl);
  return header;
}
function createActionCard(actionName, controllerName, dispatcher) {
  const card = document.createElement("div");
  card.className = "action-card";
  const nameEl = document.createElement("span");
  nameEl.className = "action-name";
  nameEl.textContent = actionName;
  const executeBtn = document.createElement("button");
  executeBtn.className = "execute-btn";
  executeBtn.textContent = "▶ Run";
  executeBtn.addEventListener("click", () => {
    dispatcher.executeTo(controllerName, actionName);
  });
  card.appendChild(nameEl);
  card.appendChild(executeBtn);
  return card;
}
customElements.define("action-dispatcher-inspector", ActionDispatcherInspector);
PerkyExplorerDetails.registerInspector(ActionDispatcherInspector);
class ExplorerContextMenu extends BaseEditorComponent {
  constructor() {
    super();
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
    __privateMethod(this, _ExplorerContextMenu_instances, buildDOM_fn8).call(this);
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
buildDOM_fn8 = function() {
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
  for (const action of __privateGet(this, _actions2)) {
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
      var _a2;
      return (_a2 = callbacks.onFocus) == null ? void 0 : _a2.call(callbacks, module);
    }
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
class PerkyExplorer extends BaseEditorComponent {
  constructor() {
    super(...arguments);
    __privateAdd(this, _PerkyExplorer_instances);
    __privateAdd(this, _module5, null);
    __privateAdd(this, _isMinimized, false);
    __privateAdd(this, _isCollapsed, false);
    __privateAdd(this, _sceneTreeMode, false);
    __privateAdd(this, _focusMode, false);
    __privateAdd(this, _embedded, false);
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
    __privateAdd(this, _selectedModule, null);
    __privateAdd(this, _rootModule, null);
    __privateAdd(this, _contextMenuEl, null);
  }
  connectedCallback() {
    __privateMethod(this, _PerkyExplorer_instances, buildDOM_fn9).call(this);
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
_selectedModule = new WeakMap();
_rootModule = new WeakMap();
_contextMenuEl = new WeakMap();
_PerkyExplorer_instances = new WeakSet();
buildDOM_fn9 = function() {
  const style = document.createElement("style");
  style.textContent = explorerStyles + containerStyles;
  this.shadowRoot.appendChild(style);
  __privateSet(this, _containerEl4, document.createElement("div"));
  __privateGet(this, _containerEl4).className = "explorer-container";
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
  const container = document.createElement("div");
  container.className = "explorer-minimized";
  const backButton = document.createElement("span");
  backButton.className = "explorer-back-button";
  backButton.textContent = "←";
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
    onFocus: (m) => this.focusModule(m)
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
class ExplorerTool extends BaseTool {
  constructor() {
    super(...arguments);
    __privateAdd(this, _ExplorerTool_instances);
    __privateAdd(this, _explorerEl2, null);
  }
  connectedCallback() {
    __privateMethod(this, _ExplorerTool_instances, buildDOM_fn10).call(this);
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
}
_explorerEl2 = new WeakMap();
_ExplorerTool_instances = new WeakSet();
buildDOM_fn10 = function() {
  var _a2;
  const style = document.createElement("style");
  style.textContent = STYLES$5;
  this.shadowRoot.appendChild(style);
  __privateSet(this, _explorerEl2, document.createElement("perky-explorer"));
  __privateGet(this, _explorerEl2).embedded = true;
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
const STYLES$5 = `
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
`;
ExplorerTool.register();
customElements.define("explorer-tool", ExplorerTool);
const editorThemeVariables = `
    --bg-primary: #1a1a1e;
    --bg-secondary: #24242a;
    --bg-hover: #2e2e36;
    --bg-selected: #3a3a44;

    --fg-primary: #e4e4e8;
    --fg-secondary: #9898a0;
    --fg-muted: #6a6a72;

    --accent: #6b9fff;

    --status-success: #4ade80;
    --status-error: #f87171;
    --status-warning: #f59e0b;
    --status-muted: #6b7280;

    --hl-keyword: #6b9fff;
    --hl-string: #4ade80;
    --hl-comment: #6a6a72;
    --hl-constant: #f59e0b;

    --border: #38383e;
    --font-mono: "Source Code Pro", "SF Mono", "Monaco", monospace;
`;
const editorThemeVariablesLight = `
    --bg-primary: #f5f5f7;
    --bg-secondary: #eaeaec;
    --bg-hover: #e0e0e4;
    --bg-selected: #d4d4d8;

    --fg-primary: #1a1a1e;
    --fg-secondary: #4a4a52;
    --fg-muted: #8a8a92;

    --accent: #0066cc;

    --status-success: #16a34a;
    --status-error: #dc2626;
    --status-warning: #d97706;
    --status-muted: #9ca3af;

    --hl-keyword: #0066cc;
    --hl-string: #16a34a;
    --hl-comment: #8a8a92;
    --hl-constant: #d97706;

    --border: #c8c8cc;
    --font-mono: "Source Code Pro", "SF Mono", "Monaco", monospace;
`;
const editorBaseStyles = `
    .hidden {
        display: none !important;
    }
`;
const editorScrollbarStyles = `
    ::-webkit-scrollbar {
        width: 6px;
    }

    ::-webkit-scrollbar-track {
        background: var(--bg-primary);
    }

    ::-webkit-scrollbar-thumb {
        background: var(--border);
        border-radius: 3px;
    }
`;
const editorButtonStyles = `
    .editor-btn {
        appearance: none;
        background: var(--bg-hover);
        border: none;
        border-radius: 4px;
        color: var(--fg-secondary);
        padding: 4px 8px;
        cursor: pointer;
        font-family: var(--font-mono);
        font-size: 11px;
        transition: background 0.15s, color 0.15s;
    }

    .editor-btn:hover {
        background: var(--bg-selected);
        color: var(--fg-primary);
    }

    .editor-btn.primary {
        background: var(--accent);
        color: var(--bg-primary);
    }

    .editor-btn.primary:hover {
        filter: brightness(1.1);
    }

    .editor-btn.success {
        background: var(--status-success);
        color: var(--bg-primary);
    }
`;
const editorHeaderStyles = `
    .editor-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px 12px;
        background: var(--bg-secondary);
        border-bottom: 1px solid var(--border);
        cursor: pointer;
        user-select: none;
    }

    .editor-header-title {
        display: flex;
        align-items: center;
        gap: 8px;
        color: var(--fg-primary);
        font-weight: 500;
        font-size: 12px;
    }

    .editor-header-buttons {
        display: flex;
        align-items: center;
        gap: 4px;
    }
`;
function getThemeStyles(options = {}) {
  const {
    supportColorScheme = true,
    supportThemeAttribute = true
  } = options;
  let styles = `:host { ${editorThemeVariables} }`;
  if (supportColorScheme) {
    styles += `
            @media (prefers-color-scheme: light) {
                :host { ${editorThemeVariablesLight} }
            }
        `;
  }
  if (supportThemeAttribute) {
    styles += `
            :host([theme="dark"]) { ${editorThemeVariables} }
            :host([theme="light"]) { ${editorThemeVariablesLight} }
        `;
  }
  return styles;
}
function buildEditorStyles(...styleParts) {
  return [
    getThemeStyles(),
    editorBaseStyles,
    ...styleParts
  ].join("\n");
}
function createSection(title, type) {
  const section = document.createElement("div");
  section.className = "apps-section";
  const header = document.createElement("div");
  header.className = "apps-section-header";
  header.textContent = title;
  const list = document.createElement("div");
  list.className = "apps-list";
  list.dataset.type = type;
  section.appendChild(header);
  section.appendChild(list);
  return section;
}
function createRegisteredItem(name) {
  const item = document.createElement("div");
  item.className = "apps-item";
  const info = document.createElement("div");
  info.className = "apps-item-info";
  const nameEl = document.createElement("span");
  nameEl.className = "apps-item-name";
  nameEl.textContent = name;
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
class AppsTool extends BaseTool {
  constructor() {
    super(...arguments);
    __privateAdd(this, _AppsTool_instances);
    __privateAdd(this, _containerEl5, null);
    __privateAdd(this, _registeredListEl, null);
    __privateAdd(this, _runningListEl, null);
    __privateAdd(this, _appManager, null);
  }
  connectedCallback() {
    __privateMethod(this, _AppsTool_instances, buildDOM_fn11).call(this);
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
buildDOM_fn11 = function() {
  const style = document.createElement("style");
  style.textContent = STYLES$4;
  this.shadowRoot.appendChild(style);
  __privateSet(this, _containerEl5, document.createElement("div"));
  __privateGet(this, _containerEl5).className = "apps-container";
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
  const item = document.createElement("div");
  item.className = "apps-item";
  const info = document.createElement("div");
  info.className = "apps-item-info";
  const status = document.createElement("span");
  status.className = `apps-item-status ${getStatusClass(app)}`;
  const nameEl = document.createElement("span");
  nameEl.className = "apps-item-name";
  nameEl.textContent = app.$id;
  const typeEl = document.createElement("span");
  typeEl.className = "apps-item-type";
  typeEl.textContent = app.constructor.name;
  info.appendChild(status);
  info.appendChild(nameEl);
  info.appendChild(typeEl);
  const actions = document.createElement("div");
  actions.className = "apps-item-actions";
  if (app.$status === "started") {
    const stopBtn = document.createElement("button");
    stopBtn.className = "editor-btn";
    stopBtn.textContent = "Stop";
    stopBtn.addEventListener("click", () => __privateMethod(this, _AppsTool_instances, stopApp_fn).call(this, app.$id));
    actions.appendChild(stopBtn);
  } else if (app.$status === "stopped") {
    const startBtn = document.createElement("button");
    startBtn.className = "editor-btn";
    startBtn.textContent = "Start";
    startBtn.addEventListener("click", () => __privateMethod(this, _AppsTool_instances, startApp_fn).call(this, app.$id));
    actions.appendChild(startBtn);
  }
  const disposeBtn = document.createElement("button");
  disposeBtn.className = "editor-btn";
  disposeBtn.textContent = "Dispose";
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
const STYLES$4 = buildEditorStyles(
  editorScrollbarStyles,
  editorButtonStyles,
  editorBaseStyles,
  `
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
`
);
AppsTool.register();
customElements.define("apps-tool", AppsTool);
const scriptRel = "modulepreload";
const assetsURL = function(dep, importerUrl) {
  return new URL(dep, importerUrl).href;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (deps && deps.length > 0) {
    let allSettled2 = function(promises) {
      return Promise.all(
        promises.map(
          (p) => Promise.resolve(p).then(
            (value) => ({ status: "fulfilled", value }),
            (reason) => ({ status: "rejected", reason })
          )
        )
      );
    };
    const links = document.getElementsByTagName("link");
    const cspNonceMeta = document.querySelector(
      "meta[property=csp-nonce]"
    );
    const cspNonce = (cspNonceMeta == null ? void 0 : cspNonceMeta.nonce) || (cspNonceMeta == null ? void 0 : cspNonceMeta.getAttribute("nonce"));
    promise = allSettled2(
      deps.map((dep) => {
        dep = assetsURL(dep, importerUrl);
        if (dep in seen) return;
        seen[dep] = true;
        const isCss = dep.endsWith(".css");
        const cssSelector = isCss ? '[rel="stylesheet"]' : "";
        const isBaseRelative = !!importerUrl;
        if (isBaseRelative) {
          for (let i = links.length - 1; i >= 0; i--) {
            const link2 = links[i];
            if (link2.href === dep && (!isCss || link2.rel === "stylesheet")) {
              return;
            }
          }
        } else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
          return;
        }
        const link = document.createElement("link");
        link.rel = isCss ? "stylesheet" : scriptRel;
        if (!isCss) {
          link.as = "script";
        }
        link.crossOrigin = "";
        link.href = dep;
        if (cspNonce) {
          link.setAttribute("nonce", cspNonce);
        }
        document.head.appendChild(link);
        if (isCss) {
          return new Promise((res, rej) => {
            link.addEventListener("load", res);
            link.addEventListener(
              "error",
              () => rej(new Error(`Unable to preload CSS for ${dep}`))
            );
          });
        }
      })
    );
  }
  function handlePreloadError(err) {
    const e = new Event("vite:preloadError", {
      cancelable: true
    });
    e.payload = err;
    window.dispatchEvent(e);
    if (!e.defaultPrevented) {
      throw err;
    }
  }
  return promise.then((res) => {
    for (const item of res || []) {
      if (item.status !== "rejected") continue;
      handlePreloadError(item.reason);
    }
    return baseModule().catch(handlePreloadError);
  });
};
class DevToolsState extends EventTarget {
  constructor() {
    super(...arguments);
    __privateAdd(this, _sidebarOpen, false);
    __privateAdd(this, _activeTool, null);
    __privateAdd(this, _commandPaletteOpen, false);
    __privateAdd(this, _loggerOpen, false);
    __privateAdd(this, _module6, null);
    __privateAdd(this, _appManager2, null);
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
}
_sidebarOpen = new WeakMap();
_activeTool = new WeakMap();
_commandPaletteOpen = new WeakMap();
_loggerOpen = new WeakMap();
_module6 = new WeakMap();
_appManager2 = new WeakMap();
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
function buildDockStyles(...additionalStyles) {
  return buildEditorStyles(
    editorBaseStyles,
    dockStyles,
    ...additionalStyles
  );
}
function buildSidebarStyles(...additionalStyles) {
  return buildEditorStyles(
    editorHeaderStyles,
    editorButtonStyles,
    editorScrollbarStyles,
    editorBaseStyles,
    sidebarStyles,
    ...additionalStyles
  );
}
function buildCommandPaletteStyles(...additionalStyles) {
  return buildEditorStyles(
    editorScrollbarStyles,
    editorBaseStyles,
    commandPaletteStyles,
    ...additionalStyles
  );
}
function createDockButton(icon, title, onClick) {
  const button = document.createElement("button");
  button.className = "dock-button";
  button.innerHTML = icon;
  button.title = title;
  button.addEventListener("click", onClick);
  return button;
}
class DevToolsDock extends BaseEditorComponent {
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
  connectedCallback() {
    __privateMethod(this, _DevToolsDock_instances, buildDOM_fn12).call(this);
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
buildDOM_fn12 = function() {
  const style = document.createElement("style");
  style.textContent = STYLES$3;
  this.shadowRoot.appendChild(style);
  __privateSet(this, _dockEl, document.createElement("div"));
  __privateGet(this, _dockEl).className = "devtools-dock";
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
    const separator = document.createElement("div");
    separator.className = "dock-separator";
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
  const separator2 = document.createElement("div");
  separator2.className = "dock-separator";
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
const STYLES$3 = buildDockStyles();
customElements.define("devtools-dock", DevToolsDock);
function createSidebarContent() {
  const content = document.createElement("div");
  content.className = "sidebar-content";
  return content;
}
class DevToolsSidebar extends BaseEditorComponent {
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
    __privateAdd(this, _contentEl3, null);
    __privateAdd(this, _currentToolEl, null);
    __privateAdd(this, _currentToolId, null);
  }
  connectedCallback() {
    __privateMethod(this, _DevToolsSidebar_instances, buildDOM_fn13).call(this);
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
_contentEl3 = new WeakMap();
_currentToolEl = new WeakMap();
_currentToolId = new WeakMap();
_DevToolsSidebar_instances = new WeakSet();
buildDOM_fn13 = function() {
  const style = document.createElement("style");
  style.textContent = STYLES$2;
  this.shadowRoot.appendChild(style);
  __privateSet(this, _sidebarEl2, document.createElement("div"));
  __privateGet(this, _sidebarEl2).className = "devtools-sidebar hidden";
  __privateSet(this, _headerEl3, __privateMethod(this, _DevToolsSidebar_instances, createHeader_fn4).call(this));
  __privateSet(this, _contentEl3, createSidebarContent());
  __privateGet(this, _sidebarEl2).appendChild(__privateGet(this, _headerEl3));
  __privateGet(this, _sidebarEl2).appendChild(__privateGet(this, _contentEl3));
  this.shadowRoot.appendChild(__privateGet(this, _sidebarEl2));
};
createHeader_fn4 = function() {
  const header = document.createElement("div");
  header.className = "sidebar-header";
  __privateSet(this, _titleEl2, document.createElement("div"));
  __privateGet(this, _titleEl2).className = "sidebar-title";
  __privateSet(this, _titleIconEl, document.createElement("span"));
  __privateGet(this, _titleIconEl).className = "sidebar-title-icon";
  __privateSet(this, _titleTextEl, document.createElement("span"));
  __privateGet(this, _titleEl2).appendChild(__privateGet(this, _titleIconEl));
  __privateGet(this, _titleEl2).appendChild(__privateGet(this, _titleTextEl));
  __privateSet(this, _closeBtn, document.createElement("button"));
  __privateGet(this, _closeBtn).className = "sidebar-close";
  __privateGet(this, _closeBtn).textContent = "×";
  __privateGet(this, _closeBtn).title = "Close";
  __privateGet(this, _closeBtn).addEventListener("click", () => {
    var _a2;
    (_a2 = __privateGet(this, _state3)) == null ? void 0 : _a2.closeSidebar();
  });
  header.appendChild(__privateGet(this, _titleEl2));
  header.appendChild(__privateGet(this, _closeBtn));
  return header;
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
  __privateGet(this, _contentEl3).appendChild(__privateGet(this, _currentToolEl));
  (_d = (_c = __privateGet(this, _currentToolEl)).onActivate) == null ? void 0 : _d.call(_c);
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
const STYLES$2 = buildSidebarStyles();
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
function createLoggerContent() {
  const content = document.createElement("div");
  content.className = "logger-content";
  return content;
}
class PerkyLogger extends HTMLElement {
  constructor() {
    super();
    __privateAdd(this, _PerkyLogger_instances);
    __privateAdd(this, _maxEntries, 50);
    __privateAdd(this, _position, "bottom");
    __privateAdd(this, _timestamp, false);
    __privateAdd(this, _theme, "");
    __privateAdd(this, _entries, []);
    __privateAdd(this, _containerEl6, null);
    __privateAdd(this, _contentEl4, null);
    __privateAdd(this, _onLog, null);
    __privateAdd(this, _onClear, null);
    __privateAdd(this, _onSpacer, null);
    __privateAdd(this, _onTitle, null);
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    __privateMethod(this, _PerkyLogger_instances, buildDOM_fn14).call(this);
    __privateMethod(this, _PerkyLogger_instances, bindLoggerEvents_fn).call(this);
  }
  disconnectedCallback() {
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
    const entry = document.createElement("div");
    entry.className = `logger-entry log-${type}`;
    const indicator = document.createElement("span");
    indicator.className = "logger-indicator";
    entry.appendChild(indicator);
    const messageElement = document.createElement("span");
    messageElement.className = "logger-message";
    processMessage(messageElement, message, format);
    entry.appendChild(messageElement);
    const time = timestamp ? new Date(timestamp) : /* @__PURE__ */ new Date();
    const timestampEl = document.createElement("span");
    timestampEl.className = "logger-timestamp";
    timestampEl.textContent = time.toLocaleTimeString();
    entry.appendChild(timestampEl);
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
    const entry = document.createElement("div");
    entry.className = "logger-entry logger-spacer";
    __privateGet(this, _entries).push(entry);
    if (__privateGet(this, _contentEl4)) {
      __privateGet(this, _contentEl4).appendChild(entry);
    }
  }
  title(title) {
    const entry = document.createElement("div");
    entry.className = "logger-entry logger-title-entry";
    entry.textContent = title;
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
  }
}
_maxEntries = new WeakMap();
_position = new WeakMap();
_timestamp = new WeakMap();
_theme = new WeakMap();
_entries = new WeakMap();
_containerEl6 = new WeakMap();
_contentEl4 = new WeakMap();
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
buildDOM_fn14 = function() {
  const style = document.createElement("style");
  style.textContent = STYLES$1;
  this.shadowRoot.appendChild(style);
  __privateSet(this, _containerEl6, document.createElement("div"));
  __privateMethod(this, _PerkyLogger_instances, updateClasses_fn).call(this);
  __privateSet(this, _contentEl4, createLoggerContent());
  __privateGet(this, _containerEl6).appendChild(__privateGet(this, _contentEl4));
  this.shadowRoot.appendChild(__privateGet(this, _containerEl6));
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
const STYLES$1 = buildEditorStyles(
  editorScrollbarStyles,
  editorBaseStyles,
  `
    :host {
        display: block;
        font-family: var(--font-mono);
        font-size: 12px;
    }

    .logger {
        width: calc(100% - 20px);
        margin: 0 10px 10px;
        border-radius: 6px;
        overflow: hidden;
        z-index: 100;
        position: relative;
        background: var(--bg-primary);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
        border: 1px solid var(--border);
        color: var(--fg-primary);
        opacity: 0.4;
        transition: opacity 0.2s ease;
    }

    .logger:hover {
        opacity: 1;
    }

    .logger-content {
        max-height: 250px;
        overflow-y: auto;
    }

    .logger-entry {
        padding: 3px 12px;
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 10px;
    }

    .logger-indicator {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        flex-shrink: 0;
        background: var(--fg-muted);
        opacity: 0.5;
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
    }

    .logger-entry:hover .logger-timestamp {
        opacity: 1;
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
`
);
customElements.define("perky-logger", PerkyLogger);
class PerkyDevTools extends BaseEditorComponent {
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
  connectedCallback() {
    __privateMethod(this, _PerkyDevTools_instances, buildDOM_fn15).call(this);
    __privateMethod(this, _PerkyDevTools_instances, setupKeyboard_fn).call(this);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    __privateMethod(this, _PerkyDevTools_instances, cleanupKeyboard_fn).call(this);
  }
  setModule(module) {
    __privateGet(this, _state4).setModule(module);
  }
  setAppManager(appManager) {
    __privateGet(this, _state4).setAppManager(appManager);
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
buildDOM_fn15 = function() {
  const style = document.createElement("style");
  style.textContent = STYLES;
  this.shadowRoot.appendChild(style);
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
      const { default: DevToolsCommandPalette2 } = await import("./devtools_command_palette-BLGAyuRZ.js");
      return { default: DevToolsCommandPalette2 };
    }, true ? [] : void 0, import.meta.url);
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
const STYLES = `
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
`;
customElements.define("perky-devtools", PerkyDevTools);
async function init() {
  const appManager = new ApplicationManager();
  appManager.register("defendTheDen", DefendTheDen);
  appManager.start();
  const container = document.getElementById("defend_the_den");
  const app = await appManager.spawn("defendTheDen", {
    container,
    preload: "all"
  });
  const devtools = new PerkyDevTools();
  document.body.appendChild(devtools);
  devtools.setModule(app);
  devtools.setAppManager(appManager);
  window.defendTheDen = app;
  window.appManager = appManager;
  window.devtools = devtools;
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
export {
  BaseEditorComponent as B,
  ICONS as I,
  buildCommandPaletteStyles as b,
  getAllTools as g
};
