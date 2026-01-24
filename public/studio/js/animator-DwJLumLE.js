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
var _listenersFor, _externalListeners, _history, _maxHistory, _consoleOutput, _Logger_instances, record_fn, trimHistory_fn, emit_fn, _map, _values, _keyByValue, _ObservableMap_instances, removeFromValues_fn, _indexes, _Registry_instances, handleSet_fn, handleDelete_fn, addToIndex_fn, removeFromIndex_fn, _set, _pluralRules, _singularRules, _uncountables, _irregularPlurals, _irregularSingles, _Inflector_instances, sanitizeWord_fn, replaceWord_fn, checkWord_fn, loadIrregulars_fn, loadPlurals_fn, loadSingulars_fn, loadUncountables_fn, _id, _name, _category, _bind, _host, _started, _disposed, _installed, _eagerStart, _lifecycle, _childrenRegistry, _tags, _tagIndexes, _idCounters, _delegations, _eventDelegations, _linked, _PerkyModule_instances, findUniqueId_fn, addChild_fn, setupTagIndexListeners_fn, _data, _Manifest_instances, initAssets_fn, exportAssets_fn, _loadingPromises, _SourceManager_instances, setupLoaderEvents_fn, _canvas, _ctx, _packer, _regions, _dirty, _atlases, _atlasGroups, _regionIndex, _atlasSize, _TextureAtlasManager_instances, addToAtlas_fn, addToNamedAtlas_fn, addOversizedImage_fn, _Spritesheet_instances, initializeFrames_fn, _atlasManager, _manualRegions, _spritesheets, _elapsed, _events, _framesByEvent, _pingpongDirection, _SpriteAnimation_instances, advanceFrame_fn, getNextFrameIndex_fn, getNextForward_fn, getNextReverse_fn, getNextPingpong_fn, emitFrameEvents_fn, updateSpriteFrame_fn, _listeners, _headerEl, _titleEl, _menuBtn, _closeBtn, _contentEl, _footerEl, _AppLayout_instances, buildDOM_fn, updateTitle_fn, updateButtonVisibility_fn, emitEvent_fn, _backdrop, _container, _Overlay_instances, buildDOM_fn2, _resizeObserver, _autoFitEnabled, _BaseRenderer_instances, updateAutoFitObserver_fn, refreshAutoFit_fn, _gl, _program, _uniforms, _attributes, _ShaderProgram_instances, createShader_fn, createProgram_fn, _gl2, _programs, _defaults, _gl3, _shaderRegistry, _effects, _shaderCache, _uniformValues, _uniformTypes, _ShaderEffectRegistry_instances, collectUniforms_fn, parseUniform_fn, compileShader_fn, _gl4, _width, _height, _samples, _msaaFramebuffer, _msaaRenderbuffer, _sceneFramebuffer, _sceneTexture, _pingPongFramebuffers, _pingPongTextures, _currentPingPong, _namedBuffers, _FramebufferManager_instances, createFramebuffers_fn, createMSAAFramebuffer_fn, createResolveFramebuffer_fn, createFramebuffer_fn, resizeNamedBuffers_fn, deleteFramebuffers_fn, _vertexBuffer, _texCoordBuffer, _FullscreenQuad_instances, createBuffers_fn, _gl5, _shaderRegistry2, _framebufferManager, _fullscreenQuad, _passes, _enabled, _gl6, _active, _zombies, _zombieSize, _flushInterval, _WebGLTextureManager_instances, resurrect_fn, createEntry_fn, createTexture_fn, deleteTexture_fn, _initialized, _RenderGroup_instances, initTransform_fn, initPasses_fn, _gl7, _context, _collected, _tempCorners, _tempTexCoords, _WebGLSpriteBatch_instances, ensureTexture_fn, writeVertices_fn, bindOptionalAttributes_fn, _x, _y, _rotation, _scaleX, _scaleY, _pivotX, _pivotY, _localMatrix, _worldMatrix, _dirty2, _sortedChildren, _childrenNeedSort, _tint, _debugGizmos, _depth, _enabled2, _effects2, _region, _effects3, _spriteBatch, _shaderEffectRegistry, _WebGLSpriteRenderer_instances, groupByShaderEffects_fn, getProgramForEffects_fn, _vertexBuffer2, _vertexBuffer3, _gizmoObjects, _rendererRegistry, _renderers, _shaderRegistry3, _shaderEffectRegistry2, _debugGizmoRenderer, _compositeQuad, _compositeProgram, _renderGroupOrder, _WebGLRenderer_instances, setupWebGL_fn, setupBuiltinShaders_fn, setupDefaultRenderers_fn, ensureCompositeSetup_fn, setupCompositeShader_fn, getMatrices_fn, renderSingleScene_fn, renderWithGroups_fn, renderGroupsToTextures_fn, renderGroupToTexture_fn, compositeGroups_fn, drawAllGroups_fn, drawGroup_fn, resetStats_fn, clearWithBackground_fn, applyGroupPasses_fn, applyBlendMode_fn, _perm, _gradP, _Noise_instances, buildPermutation_fn, _Color_instances, parseString_fn, parseHex_fn, parseRgbString_fn, parseHslString_fn, parseNumber_fn, parseArray_fn, parseObject_fn, hslToRgb_fn, hueToRgb_fn, _canvas2, _previewArea, _renderer, _scene, _sprite, _animation, _animationFrameId, _lastTime, _isPlaying, _resizeObserver2, _sceneryEnabled, _sceneryOffset, _sceneryCanvas, _sceneryCtx, _motion, _anchor, _noise, _AnimationPreview_instances, buildDOM_fn3, toggleSettings_fn, toggleScenery_fn, updateSceneryButton_fn, setupRenderer_fn, updateSprite_fn, setupResizeObserver_fn, resizeCanvas_fn, fitToContainer_fn, updateSceneryCanvas_fn, togglePlay_fn, loop_fn, updateScenery_fn, getSceneryDirection_fn, renderScenery_fn, getSpriteSize_fn, renderSidescroller_fn, renderBuildings_fn, getGroundY_fn, renderTopdown_fn, render_fn, _value, _step, _precision, _label, _min, _max, _input, _labelEl, _decrementBtn, _incrementBtn, _isDragging, _dragStartX, _dragStartValue, _onDragMove, _onDragEnd, _NumberInput_instances, buildDOM_fn4, updateDisplay_fn, handleInputChange_fn, handleBlur_fn, handleKeyDown_fn, handleStep_fn, adjustValue_fn, clamp_fn, startDrag_fn, _wrapperEl, _viewportEl, _containerEl, _scrubberEl, _scrubberThumbEl, _dropIndicator, _frames, _currentIndex, _selectedIndex, _dropIndex, _scrollLeft, _maxScroll, _scrubberDragging, _scrubberStartX, _scrubberStartScroll, _internalDragActive, _internalDragIndex, _internalDragGhost, _internalDragStartX, _internalDragStartY, _isDragOutside, _AnimationTimeline_instances, buildDOM_fn5, setupScrubber_fn, _boundScrubberMove, _boundScrubberUp, cleanupScrubberEvents_fn, _boundPointerMove, _boundPointerUp, setupInternalDrag_fn, cleanupInternalDrag_fn, onInternalDragStart_fn, onInternalDragMove_fn, isPointerOutsideTimeline_fn, updateDragGhostState_fn, onInternalDragEnd_fn, markFrameDragging_fn, createInternalDragGhost_fn, updateInternalDragGhost_fn, removeInternalDragGhost_fn, onScrubberStart_fn, onScrubberMove_fn, updateScrollFromScrubber_fn, setScrollLeft_fn, onScrubberEnd_fn, onScrubberClick_fn, updateScrubberThumb_fn, setupDeselect_fn, setupDropZone_fn, handleSpritesheetDrop_fn, calculateDropIndex_fn, updateDropIndicator_fn, hideDropIndicator_fn, render_fn2, createAddButton_fn, createFrameElement_fn, updateHighlight_fn, handleFrameTap_fn, dispatchDeleteEvent_fn, handleKeydown_fn, flashFrameAt_fn, _containerEl2, _filterEl, _gridEl, _spritesheet, _filter, _animationColorMap, _dragData, _dragGhost, _dragStartPos, _dragStartEl, _lastTimeline, _SpritesheetViewer_instances, buildDOM_fn6, buildAnimationColorMap_fn, renderFilter_fn, renderGrid_fn, getFilteredFrames_fn, createFrameElement_fn2, setupPointerDrag_fn, _boundPointerMove2, _boundPointerEnd, cleanupPointerDrag_fn, onPointerStart_fn, findFrameFromPoint_fn, onPointerMove_fn, onPointerEnd_fn, startDrag_fn2, createDragGhost_fn, updateDragGhost_fn, removeDragGhost_fn, _closeBtn2, _contentEl2, _dragStartX2, _currentTranslate, _isDragging2, _SideDrawer_instances, position_get, buildDOM_fn7, setupSwipeToClose_fn, onPointerDown_fn, _value2, _min2, _max2, _step2, _label2, _slider, _labelEl2, _valueEl, _SliderInput_instances, buildDOM_fn8, updateDisplay_fn2, handleInput_fn, clamp_fn2, _value3, _options, _focusedIndex, _isOpen, _buttonEl, _labelEl3, _chevronEl, _dropdownEl, _handleOutsideClick, _handleKeyDown, _SelectInput_instances, buildDOM_fn9, renderOptions_fn, updateDisplay_fn3, toggle_fn, open_fn, close_fn, positionDropdown_fn, selectIndex_fn, moveFocus_fn, updateFocusedOption_fn, scrollToFocused_fn, _checked, _label3, _toggle, _labelEl4, _ToggleInput_instances, buildDOM_fn10, updateDisplay_fn4, handleClick_fn, _triggerEl, _menuEl, _items, _handleOutsideClick2, _DropdownMenu_instances, buildDOM_fn11, renderItems_fn, _context2, _animators, _animatorClass, _animator, _spritesheet2, _selectedAnimation, _appLayout, _containerEl3, _previewSectionEl, _previewEl, _timelineEl, _framesDrawerEl, _editorDrawerEl, _spritesheetSettingsDrawerEl, _spritesheetEl, _selectedFrameIndex, _drawerMode, _headerAnimSelect, _drawerAnimSelect, _anchor2, _AnimatorView_instances, selectAnimator_fn, inferSpritesheetName_fn, buildDOM_fn12, render_fn3, createPreviewSection_fn, buildHeaderControls_fn, buildDrawers_fn, toggleFramesDrawer_fn, toggleAnimationSettings_fn, openSpritesheetSettings_fn, buildSpritesheetSettings_fn, buildAnchorPreview_fn, renderAnchorPreview_fn, getFirstFrameData_fn, setupAnchorDrag_fn, buildAnchorInputs_fn, syncAnchorInputs_fn, updateAnchorPreview_fn, openAnimationSettings_fn, buildAnimationSettings_fn, buildAnimationSettingsContent_fn, rebuildDirectionPad_fn, rebuildAnimationSettingsContent_fn, syncDrawerAnimSelect_fn, updateEditorDrawer_fn, buildFrameEditor_fn, buildFramePreview_fn, buildDurationSection_fn, buildEventsSection_fn, collectEventSuggestions_fn, addFrameToTimeline_fn, setupTimelineEvents_fn, handleFrameSelect_fn, updateForSelectedAnimation_fn, handleFrameDrop_fn, handleFrameMove_fn, handleFrameDelete_fn, handleFrameDuration_fn, updateFramesCount_fn, exportToClipboard_fn, buildAnimationConfig_fn;
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
  log(...items) {
    __privateMethod(this, _Logger_instances, emit_fn).call(this, "notice", ...items);
  }
  info(...items) {
    __privateMethod(this, _Logger_instances, emit_fn).call(this, "info", ...items);
  }
  notice(...items) {
    __privateMethod(this, _Logger_instances, emit_fn).call(this, "notice", ...items);
  }
  warn(...items) {
    __privateMethod(this, _Logger_instances, emit_fn).call(this, "warn", ...items);
  }
  error(...items) {
    __privateMethod(this, _Logger_instances, emit_fn).call(this, "error", ...items);
  }
  success(...items) {
    __privateMethod(this, _Logger_instances, emit_fn).call(this, "success", ...items);
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
emit_fn = function(type, ...items) {
  const entry = { event: "log", type, items, timestamp: Date.now() };
  __privateMethod(this, _Logger_instances, record_fn).call(this, entry);
  this.emit("log", entry);
  if (__privateGet(this, _consoleOutput)) {
    const method = CONSOLE_METHODS[type] || "log";
    console[method](...items);
  }
};
const logger = new Logger();
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
    return string.replace(/[-\s]/g, "_").replace(/([A-Z])([A-Z][a-z])/g, "$1_$2").replace(/([a-z])([A-Z])/g, "$1_$2").replace(/([a-z])(\d+[A-Z])$/g, "$1_$2").replace(/(\d)([A-Z][a-z])/g, "$1_$2").toLowerCase().replace(/^_/, "");
  }
  toKebabCase(string) {
    return string.replace(/[_\s]/g, "-").replace(/([A-Z])([A-Z][a-z])/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2").replace(/([a-z])(\d+[A-Z])$/g, "$1-$2").replace(/(\d)([A-Z][a-z])/g, "$1-$2").toLowerCase().replace(/^-/, "");
  }
  toHumanCase(string) {
    return string.replace(/[-_]/g, " ").replace(/([A-Z])([A-Z][a-z])/g, "$1 $2").replace(/([a-z])([A-Z])/g, "$1 $2").replace(/([a-z])(\d+[A-Z])$/g, "$1 $2").replace(/(\d)([A-Z][a-z])/g, "$1 $2").replace(/^\s+/, "").replace(/\s+/g, " ");
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
function deepMergeInternal(target, source, seen) {
  if (!source) {
    return target;
  }
  if (typeof source === "object" && source !== null) {
    if (seen.has(source)) {
      return source;
    }
    seen.add(source);
  }
  const sourceIsArray = Array.isArray(source);
  const targetIsArray = Array.isArray(target);
  if (sourceIsArray !== targetIsArray) {
    return cloneIfNeeded(source, seen);
  }
  if (sourceIsArray) {
    return mergeArrays(target, source, seen);
  }
  return mergeObject(target, source, seen);
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
function cloneIfNeeded(value, seen) {
  return isMergeableObject(value) ? deepMergeInternal(emptyTarget(value), value, seen) : value;
}
function mergeArrays(target, source, seen) {
  return target.concat(source).map((element) => cloneIfNeeded(element, seen));
}
function getKeys(target) {
  const symbols = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter((symbol) => Object.propertyIsEnumerable.call(target, symbol)) : [];
  return Object.keys(target).concat(symbols);
}
function mergeObject(target, source, seen) {
  const destination = {};
  if (isMergeableObject(target)) {
    getKeys(target).forEach((key) => {
      destination[key] = cloneIfNeeded(target[key], seen);
    });
  }
  getKeys(source).forEach((key) => {
    if (key in target && isMergeableObject(source[key])) {
      destination[key] = deepMergeInternal(target[key], source[key], seen);
    } else {
      destination[key] = cloneIfNeeded(source[key], seen);
    }
  });
  return destination;
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
const SELECTOR_REGEX = /([#.$@])([a-zA-Z0-9_-]+)/g;
const PREFIX_TO_TYPE = {
  "#": "id",
  ".": "tag",
  $: "name",
  "@": "category"
};
const TYPE_MATCHERS = {
  id: (module, value) => module.$id === value,
  tag: (module, value) => {
    var _a;
    return (_a = module.hasTag) == null ? void 0 : _a.call(module, value);
  },
  name: (module, value) => module.$name === value,
  category: (module, value) => module.$category === value
};
function parseSelector(selector) {
  const segments = selector.trim().split(/\s+/);
  return segments.map((segment) => {
    const conditions = [];
    let match;
    SELECTOR_REGEX.lastIndex = 0;
    while ((match = SELECTOR_REGEX.exec(segment)) !== null) {
      const [, prefix, value] = match;
      conditions.push({
        type: PREFIX_TO_TYPE[prefix],
        value
      });
    }
    return conditions;
  }).filter((segment) => segment.length > 0);
}
function matchesConditions(module, conditions) {
  return conditions.every(({ type, value }) => {
    const matcher = TYPE_MATCHERS[type];
    return matcher ? matcher(module, value) : false;
  });
}
function findMatchingChildren(candidates, conditions) {
  return candidates.flatMap((candidate) => {
    const children = candidate.children || [];
    return children.filter((child) => matchesConditions(child, conditions));
  });
}
function query(root, selector) {
  const segments = parseSelector(selector);
  if (segments.length === 0) {
    return null;
  }
  let candidates = [root];
  for (const conditions of segments) {
    candidates = findMatchingChildren(candidates, conditions);
    if (candidates.length === 0) {
      return null;
    }
  }
  return candidates[0] || null;
}
function queryAll(root, selector) {
  const segments = parseSelector(selector);
  if (segments.length === 0) {
    return [];
  }
  let candidates = [root];
  for (const conditions of segments) {
    candidates = findMatchingChildren(candidates, conditions);
    if (candidates.length === 0) {
      return [];
    }
  }
  return candidates;
}
const _PerkyModule = class _PerkyModule extends Notifier {
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
    __privateAdd(this, _idCounters, /* @__PURE__ */ new Map());
    __privateAdd(this, _delegations, []);
    __privateAdd(this, _eventDelegations, []);
    __privateAdd(this, _linked, /* @__PURE__ */ new Map());
    this.options = { ...options };
    __privateSet(this, _name, options.$name || this.constructor.$name || this.constructor.name);
    __privateSet(this, _id, options.$id || __privateGet(this, _name));
    __privateSet(this, _category, options.$category || this.constructor.$category);
    const bindOption = options.$bind ?? this.constructor.$bind;
    __privateSet(this, _bind, bindOption === true ? __privateGet(this, _name) : bindOption);
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
    var _a;
    if (__privateGet(this, _started)) {
      return false;
    }
    __privateSet(this, _started, true);
    (_a = this.onStart) == null ? void 0 : _a.call(this);
    this.emit("start");
    return true;
  }
  stop() {
    var _a;
    if (!__privateGet(this, _started)) {
      return false;
    }
    __privateSet(this, _started, false);
    (_a = this.onStop) == null ? void 0 : _a.call(this);
    this.emit("stop");
    return true;
  }
  dispose() {
    var _a;
    if (__privateGet(this, _disposed)) {
      return false;
    }
    __privateSet(this, _disposed, true);
    this.stop();
    this.unlinkAll();
    this.cleanExternalListeners();
    __privateGet(this, _childrenRegistry).forEach((child) => {
      if (child && !child.disposed) {
        child.dispose();
      }
    });
    __privateGet(this, _childrenRegistry).clear();
    (_a = this.onDispose) == null ? void 0 : _a.call(this);
    this.emit("dispose");
    this.removeListeners();
    return true;
  }
  install(host, options) {
    var _a;
    if (__privateGet(this, _installed)) {
      return this.uninstall();
    }
    __privateSet(this, _host, host);
    if (this.$bind) {
      host[this.$bind] = this;
    }
    __privateSet(this, _installed, true);
    (_a = this.onInstall) == null ? void 0 : _a.call(this, host, options);
    return true;
  }
  uninstall() {
    var _a;
    if (!__privateGet(this, _installed)) {
      return false;
    }
    this.cleanDelegations();
    this.cleanEventDelegations();
    (_a = this.onUninstall) == null ? void 0 : _a.call(this, __privateGet(this, _host));
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
    options.$lifecycle = options.$lifecycle ?? Child.$lifecycle ?? true;
    options.$eagerStart = options.$eagerStart ?? Child.$eagerStart ?? true;
    const hasExplicitId = "$id" in options;
    if (hasExplicitId) {
      unregisterExisting(this, options.$id);
    }
    return this.addChild(new Child(options));
  }
  addChild(child) {
    if (!(child instanceof _PerkyModule)) {
      throw new Error("addChild expects a PerkyModule instance");
    }
    if (child.installed) {
      throw new Error("Module is already installed in another parent");
    }
    if (__privateGet(this, _childrenRegistry).has(child.$id)) {
      child.$id = __privateMethod(this, _PerkyModule_instances, findUniqueId_fn).call(this, child.$name);
    }
    return __privateMethod(this, _PerkyModule_instances, addChild_fn).call(this, child, child.options);
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
        var _a;
        return (_a = child.$tags) == null ? void 0 : _a.includes(tag);
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
        var _a;
        return (_a = child.tags) == null ? void 0 : _a.has(tag);
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
  query(selector) {
    return query(this, selector);
  }
  queryAll(selector) {
    return queryAll(this, selector);
  }
  link(module, alias) {
    if (!(module instanceof _PerkyModule)) {
      throw new Error("link expects a PerkyModule instance");
    }
    const key = alias || module.$id;
    const shouldBind = alias !== false;
    if (__privateGet(this, _linked).has(key)) {
      this.unlink(key);
    }
    __privateGet(this, _linked).set(key, module);
    if (shouldBind) {
      this[key] = module;
    }
    this.listenTo(module, "dispose", () => {
      this.unlink(key);
    });
    this.emit("link", key, module);
    return module;
  }
  unlink(key) {
    const module = __privateGet(this, _linked).get(key);
    if (!module) {
      return false;
    }
    __privateGet(this, _linked).delete(key);
    if (this[key] === module) {
      delete this[key];
    }
    this.emit("unlink", key, module);
    return true;
  }
  getLinked(key) {
    return __privateGet(this, _linked).get(key) || null;
  }
  get linked() {
    return Array.from(__privateGet(this, _linked).values());
  }
  hasLinked(key) {
    return __privateGet(this, _linked).has(key);
  }
  unlinkAll() {
    for (const key of __privateGet(this, _linked).keys()) {
      this.unlink(key);
    }
  }
};
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
_idCounters = new WeakMap();
_delegations = new WeakMap();
_eventDelegations = new WeakMap();
_linked = new WeakMap();
_PerkyModule_instances = new WeakSet();
findUniqueId_fn = function(baseName) {
  let counter = __privateGet(this, _idCounters).get(baseName) || 1;
  __privateGet(this, _idCounters).set(baseName, counter + 1);
  return `${baseName}_${counter}`;
};
addChild_fn = function(child, options = {}) {
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
__publicField(_PerkyModule, "$category", "perkyModule");
__publicField(_PerkyModule, "$name", null);
__publicField(_PerkyModule, "$lifecycle", true);
__publicField(_PerkyModule, "$eagerStart", true);
__publicField(_PerkyModule, "$tags", []);
__publicField(_PerkyModule, "perkyModuleMethods", Notifier.notifierMethods.concat([
  "start",
  "stop",
  "dispose",
  "install",
  "uninstall",
  "create",
  "addChild",
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
  "cleanEventDelegations",
  "query",
  "queryAll",
  "link",
  "unlink",
  "getLinked",
  "hasLinked",
  "unlinkAll"
]));
let PerkyModule = _PerkyModule;
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
      "loader:error",
      "asset:loaded"
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
  this.listenTo(loader, "progress", (progress, { asset }) => {
    this.emit("asset:loaded", asset);
  });
};
__publicField(SourceManager, "$category", "sourceManager");
class TextureRegion {
  constructor(options = {}) {
    this.image = options.image || null;
    this.x = options.x ?? 0;
    this.y = options.y ?? 0;
    this.width = options.width ?? getImageWidth(this.image);
    this.height = options.height ?? getImageHeight(this.image);
  }
  get u0() {
    if (!this.image || !this.image.width) {
      return 0;
    }
    return this.x / this.image.width;
  }
  get v0() {
    if (!this.image || !this.image.height) {
      return 0;
    }
    return this.y / this.image.height;
  }
  get u1() {
    if (!this.image || !this.image.width) {
      return 1;
    }
    return (this.x + this.width) / this.image.width;
  }
  get v1() {
    if (!this.image || !this.image.height) {
      return 1;
    }
    return (this.y + this.height) / this.image.height;
  }
  get uvs() {
    return {
      u0: this.u0,
      v0: this.v0,
      u1: this.u1,
      v1: this.v1
    };
  }
  get bounds() {
    return {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height
    };
  }
  get valid() {
    return this.image !== null && this.width > 0 && this.height > 0;
  }
  static fromImage(image) {
    return new TextureRegion({
      image,
      x: 0,
      y: 0,
      width: (image == null ? void 0 : image.width) || 0,
      height: (image == null ? void 0 : image.height) || 0
    });
  }
  static fromFrame(image, frame) {
    return new TextureRegion({
      image,
      x: frame.x,
      y: frame.y,
      width: frame.w ?? frame.width,
      height: frame.h ?? frame.height
    });
  }
}
function getImageWidth(image) {
  return (image == null ? void 0 : image.width) || 0;
}
function getImageHeight(image) {
  return (image == null ? void 0 : image.height) || 0;
}
class ShelfPacker {
  constructor(width, height, padding = 1) {
    this.width = width;
    this.height = height;
    this.padding = padding;
    this.shelves = [];
    this.currentY = 0;
    this.full = false;
  }
  pack(w, h) {
    const pw = w + this.padding;
    const ph = h + this.padding;
    for (const shelf2 of this.shelves) {
      if (shelf2.height >= ph && shelf2.remainingWidth >= pw) {
        const slot = { x: shelf2.x, y: shelf2.y };
        shelf2.x += pw;
        shelf2.remainingWidth -= pw;
        return slot;
      }
    }
    if (this.currentY + ph > this.height) {
      this.full = true;
      return null;
    }
    const shelf = {
      y: this.currentY,
      x: pw,
      height: ph,
      remainingWidth: this.width - pw
    };
    this.shelves.push(shelf);
    this.currentY += ph;
    return { x: 0, y: shelf.y };
  }
  canFit(w, h) {
    const pw = w + this.padding;
    const ph = h + this.padding;
    for (const shelf of this.shelves) {
      if (shelf.height >= ph && shelf.remainingWidth >= pw) {
        return true;
      }
    }
    return this.currentY + ph <= this.height;
  }
}
const DEFAULT_SIZE = 4096;
const MAX_SIZE = 4096;
const PADDING = 1;
class TextureAtlas {
  constructor(options = {}) {
    __privateAdd(this, _canvas, null);
    __privateAdd(this, _ctx, null);
    __privateAdd(this, _packer, null);
    __privateAdd(this, _regions, /* @__PURE__ */ new Map());
    __privateAdd(this, _dirty, false);
    this.width = options.width ?? DEFAULT_SIZE;
    this.height = options.height ?? DEFAULT_SIZE;
    this.padding = options.padding ?? PADDING;
    __privateSet(this, _canvas, createCanvas(this.width, this.height));
    __privateSet(this, _ctx, __privateGet(this, _canvas).getContext("2d"));
    __privateSet(this, _packer, new ShelfPacker(this.width, this.height, this.padding));
  }
  get canvas() {
    return __privateGet(this, _canvas);
  }
  get dirty() {
    return __privateGet(this, _dirty);
  }
  get full() {
    return __privateGet(this, _packer).full;
  }
  get regionCount() {
    return __privateGet(this, _regions).size;
  }
  markClean() {
    __privateSet(this, _dirty, false);
  }
  add(id, image) {
    if (__privateGet(this, _regions).has(id)) {
      return __privateGet(this, _regions).get(id);
    }
    const slot = __privateGet(this, _packer).pack(image.width, image.height);
    if (!slot) {
      return null;
    }
    __privateGet(this, _ctx).drawImage(image, slot.x, slot.y);
    const region = new TextureRegion({
      image: __privateGet(this, _canvas),
      x: slot.x,
      y: slot.y,
      width: image.width,
      height: image.height
    });
    __privateGet(this, _regions).set(id, region);
    __privateSet(this, _dirty, true);
    return region;
  }
  get(id) {
    return __privateGet(this, _regions).get(id) || null;
  }
  has(id) {
    return __privateGet(this, _regions).has(id);
  }
  getAllRegions() {
    return __privateGet(this, _regions);
  }
  canFit(width, height) {
    return __privateGet(this, _packer).canFit(width, height);
  }
  clear() {
    __privateGet(this, _ctx).clearRect(0, 0, this.width, this.height);
    __privateSet(this, _packer, new ShelfPacker(this.width, this.height, this.padding));
    __privateGet(this, _regions).clear();
    __privateSet(this, _dirty, true);
  }
  dispose() {
    __privateSet(this, _canvas, null);
    __privateSet(this, _ctx, null);
    __privateSet(this, _packer, null);
    __privateGet(this, _regions).clear();
  }
  static get DEFAULT_SIZE() {
    return DEFAULT_SIZE;
  }
  static get MAX_SIZE() {
    return MAX_SIZE;
  }
}
_canvas = new WeakMap();
_ctx = new WeakMap();
_packer = new WeakMap();
_regions = new WeakMap();
_dirty = new WeakMap();
function createCanvas(width, height) {
  if (typeof OffscreenCanvas !== "undefined") {
    return new OffscreenCanvas(width, height);
  }
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  return canvas;
}
const _TextureAtlasManager = class _TextureAtlasManager {
  constructor(options = {}) {
    __privateAdd(this, _TextureAtlasManager_instances);
    __privateAdd(this, _atlases, []);
    __privateAdd(this, _atlasGroups, /* @__PURE__ */ new Map());
    __privateAdd(this, _regionIndex, /* @__PURE__ */ new Map());
    __privateAdd(this, _atlasSize, TextureAtlas.DEFAULT_SIZE);
    __privateSet(this, _atlasSize, options.atlasSize ?? TextureAtlas.DEFAULT_SIZE);
  }
  get atlases() {
    return __privateGet(this, _atlases);
  }
  get atlasCount() {
    return __privateGet(this, _atlases).length;
  }
  get regionCount() {
    return __privateGet(this, _regionIndex).size;
  }
  add(id, image) {
    if (__privateGet(this, _regionIndex).has(id)) {
      return __privateGet(this, _regionIndex).get(id);
    }
    if (!isValidImage(image)) {
      return null;
    }
    if (isOversized(image, __privateGet(this, _atlasSize))) {
      return __privateMethod(this, _TextureAtlasManager_instances, addOversizedImage_fn).call(this, id, image);
    }
    const region = __privateMethod(this, _TextureAtlasManager_instances, addToAtlas_fn).call(this, id, image);
    if (region) {
      __privateGet(this, _regionIndex).set(id, region);
    }
    return region;
  }
  addBatch(images) {
    const results = /* @__PURE__ */ new Map();
    for (const [id, image] of Object.entries(images)) {
      const region = this.add(id, image);
      results.set(id, region);
    }
    return results;
  }
  addToNamedAtlas(atlasName, id, image) {
    if (__privateGet(this, _regionIndex).has(id)) {
      return __privateGet(this, _regionIndex).get(id);
    }
    if (!isValidImage(image)) {
      return null;
    }
    if (isOversized(image, __privateGet(this, _atlasSize))) {
      return __privateMethod(this, _TextureAtlasManager_instances, addOversizedImage_fn).call(this, id, image);
    }
    const region = __privateMethod(this, _TextureAtlasManager_instances, addToNamedAtlas_fn).call(this, atlasName, id, image);
    if (region) {
      __privateGet(this, _regionIndex).set(id, region);
    }
    return region;
  }
  addBatchToNamedAtlas(atlasName, images) {
    const results = /* @__PURE__ */ new Map();
    for (const [id, image] of Object.entries(images)) {
      const region = this.addToNamedAtlas(atlasName, id, image);
      results.set(id, region);
    }
    return results;
  }
  get(id) {
    return __privateGet(this, _regionIndex).get(id) || null;
  }
  has(id) {
    return __privateGet(this, _regionIndex).has(id);
  }
  getDirtyAtlases() {
    return __privateGet(this, _atlases).filter((atlas) => atlas.dirty);
  }
  markAllClean() {
    for (const atlas of __privateGet(this, _atlases)) {
      atlas.markClean();
    }
  }
  clear() {
    for (const atlas of __privateGet(this, _atlases)) {
      atlas.dispose();
    }
    __privateSet(this, _atlases, []);
    __privateGet(this, _atlasGroups).clear();
    __privateGet(this, _regionIndex).clear();
  }
  dispose() {
    this.clear();
  }
};
_atlases = new WeakMap();
_atlasGroups = new WeakMap();
_regionIndex = new WeakMap();
_atlasSize = new WeakMap();
_TextureAtlasManager_instances = new WeakSet();
addToAtlas_fn = function(id, image) {
  return __privateMethod(this, _TextureAtlasManager_instances, addToNamedAtlas_fn).call(this, _TextureAtlasManager.DEFAULT_ATLAS, id, image);
};
addToNamedAtlas_fn = function(atlasName, id, image) {
  let atlasGroup = __privateGet(this, _atlasGroups).get(atlasName);
  if (!atlasGroup) {
    atlasGroup = [];
    __privateGet(this, _atlasGroups).set(atlasName, atlasGroup);
  }
  for (const atlas of atlasGroup) {
    if (atlas.canFit(image.width, image.height)) {
      return atlas.add(id, image);
    }
  }
  const newAtlas = new TextureAtlas({
    width: __privateGet(this, _atlasSize),
    height: __privateGet(this, _atlasSize)
  });
  atlasGroup.push(newAtlas);
  __privateGet(this, _atlases).push(newAtlas);
  return newAtlas.add(id, image);
};
addOversizedImage_fn = function(id, image) {
  const region = TextureRegion.fromImage(image);
  __privateGet(this, _regionIndex).set(id, region);
  return region;
};
__publicField(_TextureAtlasManager, "DEFAULT_ATLAS", Symbol("default"));
let TextureAtlasManager = _TextureAtlasManager;
function isValidImage(image) {
  return image && image.width > 0 && image.height > 0;
}
function isOversized(image, atlasSize) {
  return image.width > atlasSize || image.height > atlasSize;
}
class Spritesheet {
  constructor(source) {
    __privateAdd(this, _Spritesheet_instances);
    this.images = source.images || [source.image];
    this.data = source.data || { frames: [], animations: {}, meta: {} };
    this.framesMap = /* @__PURE__ */ new Map();
    this.animations = this.data.animations || {};
    __privateMethod(this, _Spritesheet_instances, initializeFrames_fn).call(this, this.data.frames);
  }
  getFrame(name) {
    return this.framesMap.get(name) || null;
  }
  getRegion(name) {
    const frame = this.framesMap.get(name);
    return (frame == null ? void 0 : frame.region) || null;
  }
  getFrames(names) {
    if (!names) {
      return Array.from(this.framesMap.values());
    }
    if (!Array.isArray(names)) {
      return [];
    }
    return names.map((name) => this.getFrame(name)).filter(Boolean);
  }
  getRegions(names) {
    return this.getFrames(names).map((frame) => frame.region);
  }
  getAnimation(name) {
    return this.animations[name] || null;
  }
  getAnimationRegions(name) {
    const frameNames = this.getAnimation(name);
    if (!frameNames) {
      return [];
    }
    return this.getRegions(frameNames);
  }
  listFrames() {
    return Array.from(this.framesMap.keys());
  }
  listAnimations() {
    return Object.keys(this.animations);
  }
}
_Spritesheet_instances = new WeakSet();
initializeFrames_fn = function(frames) {
  if (!Array.isArray(frames)) {
    return;
  }
  for (const frameData of frames) {
    if (!frameData.filename) {
      continue;
    }
    const atlasIndex = frameData.atlas ?? 0;
    const image = this.images[atlasIndex];
    const region = new TextureRegion({
      image,
      x: frameData.frame.x,
      y: frameData.frame.y,
      width: frameData.frame.w,
      height: frameData.frame.h
    });
    this.framesMap.set(frameData.filename, {
      ...frameData,
      region,
      image
    });
  }
};
class TextureSystem extends PerkyModule {
  constructor(options = {}) {
    super(options);
    __privateAdd(this, _atlasManager, null);
    __privateAdd(this, _manualRegions, /* @__PURE__ */ new Map());
    __privateAdd(this, _spritesheets, /* @__PURE__ */ new Map());
    __privateSet(this, _atlasManager, new TextureAtlasManager({
      atlasSize: options.atlasSize
    }));
    this.fallback = options.fallback ?? null;
  }
  onInstall(host) {
    this.delegateTo(host, [
      "getRegion",
      "hasRegion",
      "addRegion",
      "addRegions",
      "registerManualAtlas",
      "getSpritesheet",
      "registerSpritesheet"
    ]);
  }
  get atlasManager() {
    return __privateGet(this, _atlasManager);
  }
  get atlases() {
    return __privateGet(this, _atlasManager).atlases;
  }
  get regionCount() {
    return __privateGet(this, _atlasManager).regionCount + __privateGet(this, _manualRegions).size;
  }
  getRegion(id) {
    var _a;
    const region = __privateGet(this, _manualRegions).get(id) || __privateGet(this, _atlasManager).get(id);
    if (region) {
      return region;
    }
    const source = (_a = this.fallback) == null ? void 0 : _a.call(this, id);
    if (source) {
      return TextureRegion.fromImage(source);
    }
    return null;
  }
  hasRegion(id) {
    return __privateGet(this, _manualRegions).has(id) || __privateGet(this, _atlasManager).has(id);
  }
  addRegion(id, image) {
    if (this.hasRegion(id)) {
      return this.getRegion(id);
    }
    return __privateGet(this, _atlasManager).add(id, image);
  }
  addRegions(images) {
    return __privateGet(this, _atlasManager).addBatch(images);
  }
  registerManualAtlas(id, image, frames) {
    for (const [frameName, frameData] of Object.entries(frames)) {
      const regionId = `${id}:${frameName}`;
      const region = TextureRegion.fromFrame(image, frameData);
      __privateGet(this, _manualRegions).set(regionId, region);
    }
  }
  registerSpritesheet(id, source) {
    const spritesheet = new Spritesheet(source);
    __privateGet(this, _spritesheets).set(id, spritesheet);
    return spritesheet;
  }
  getSpritesheet(id) {
    return __privateGet(this, _spritesheets).get(id) || null;
  }
  addFromAsset(asset) {
    var _a;
    if (!isImageAsset(asset) || !asset.source) {
      return null;
    }
    if (this.hasRegion(asset.id)) {
      return this.getRegion(asset.id);
    }
    if (((_a = asset.config) == null ? void 0 : _a.atlas) === false) {
      const region = TextureRegion.fromImage(asset.source);
      __privateGet(this, _manualRegions).set(asset.id, region);
      return region;
    }
    return this.addRegion(asset.id, asset.source);
  }
  buildFromAssets(assets) {
    var _a;
    const atlasGroups = /* @__PURE__ */ new Map();
    const defaultImages = {};
    for (const asset of assets) {
      if (!isImageAsset(asset) || !asset.source) {
        continue;
      }
      const atlasName = (_a = asset.config) == null ? void 0 : _a.atlas;
      if (atlasName === false) {
        __privateGet(this, _manualRegions).set(asset.id, TextureRegion.fromImage(asset.source));
      } else if (atlasName) {
        if (!atlasGroups.has(atlasName)) {
          atlasGroups.set(atlasName, {});
        }
        atlasGroups.get(atlasName)[asset.id] = asset.source;
      } else {
        defaultImages[asset.id] = asset.source;
      }
    }
    for (const [atlasName, images] of atlasGroups) {
      __privateGet(this, _atlasManager).addBatchToNamedAtlas(atlasName, images);
    }
    return this.addRegions(defaultImages);
  }
  getDirtyAtlases() {
    return __privateGet(this, _atlasManager).getDirtyAtlases();
  }
  markAllClean() {
    __privateGet(this, _atlasManager).markAllClean();
  }
  clear() {
    __privateGet(this, _atlasManager).clear();
    __privateGet(this, _manualRegions).clear();
    __privateGet(this, _spritesheets).clear();
  }
  onDispose() {
    this.clear();
  }
}
_atlasManager = new WeakMap();
_manualRegions = new WeakMap();
_spritesheets = new WeakMap();
__publicField(TextureSystem, "$category", "textureSystem");
function isImageAsset(asset) {
  return asset.type === "image";
}
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
async function loadAudio(params) {
  const { url } = normalizeParams(params);
  return {
    type: "deferred_audio",
    url
  };
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
async function loadSpritesheet(params) {
  const { url } = normalizeParams(params);
  const data = await loadJson({ url });
  const baseUrl = url.substring(0, url.lastIndexOf("/") + 1);
  const imagePromises = data.meta.images.map((imageInfo) => {
    const imageUrl = baseUrl + imageInfo.filename;
    return loadImage({ url: imageUrl });
  });
  const images = await Promise.all(imagePromises);
  return {
    data,
    images
  };
}
const loaders = {
  response: loadResponse,
  blob: loadBlob,
  image: loadImage,
  text: loadText,
  json: loadJson,
  arrayBuffer: loadArrayBuffer,
  audio: loadAudio,
  font: loadFont,
  spritesheet: loadSpritesheet
};
const manifest = {
  config: {
    name: "Mistbrewer",
    audio: {
      masterVolume: 0.5,
      channels: {
        sfx: { muted: true, volume: 0.5 },
        ambiance: { muted: true },
        music: { muted: false }
      }
    }
  },
  assets: {
    background: { type: "image", url: "./assets/images/background.png", config: { atlas: false } },
    wolf: { type: "image", url: "./assets/images/wolf.png", config: { atlas: "characters" } },
    wolf_right: { type: "image", url: "./assets/images/wolf_right.png", config: { atlas: "characters" } },
    wolf_up: { type: "image", url: "./assets/images/wolf_up.png", config: { atlas: "characters" } },
    wolf_down: { type: "image", url: "./assets/images/wolf_down.png", config: { atlas: "characters" } },
    pig: { type: "image", url: "./assets/images/pig.png", config: { atlas: "characters" } },
    red: { type: "image", url: "./assets/images/red.png", config: { atlas: "characters" } },
    granny: { type: "image", url: "./assets/images/granny.png", config: { atlas: "characters" } },
    amalgam: { type: "image", url: "./assets/images/amalgam.png", config: { atlas: "characters" } },
    brick: { type: "image", url: "./assets/images/brick.png", config: { atlas: "projectiles" } },
    pie: { type: "image", url: "./assets/images/pie.png", config: { atlas: "projectiles" } },
    cake: { type: "image", url: "./assets/images/cake.png", config: { atlas: "projectiles" } },
    fireball: { type: "image", url: "./assets/images/fireball.png", config: { atlas: "projectiles" } },
    redSpritesheet: { type: "spritesheet", url: "./assets/spritesheets/red.json" },
    click: { type: "audio", url: "./assets/audio/click.ogg", tags: ["sfx"] },
    howl: { type: "audio", url: "./assets/audio/howl.ogg", tags: ["sfx"] },
    throw: { type: "audio", url: "./assets/audio/throw.ogg", tags: ["sfx"] },
    wound: { type: "audio", url: "./assets/audio/wound.ogg", tags: ["sfx"] },
    music: { type: "audio", url: "./assets/audio/music.ogg", tags: ["music"] }
  }
};
class SpriteAnimation extends PerkyModule {
  constructor(options = {}) {
    super(options);
    __privateAdd(this, _SpriteAnimation_instances);
    __privateAdd(this, _elapsed, 0);
    __privateAdd(this, _events, /* @__PURE__ */ new Map());
    __privateAdd(this, _framesByEvent, /* @__PURE__ */ new Map());
    __privateAdd(this, _pingpongDirection, 1);
    const { sprite, frames, fps = 12, loop = true, speed = 1, playbackMode = "forward" } = options;
    this.sprite = sprite;
    this.frames = Array.isArray(frames) ? frames : [];
    this.fps = fps;
    this.loop = loop;
    this.speed = speed;
    this.playbackMode = playbackMode;
    this.currentIndex = 0;
    this.playing = false;
    this.completed = false;
  }
  get frameDuration() {
    return 1 / this.fps;
  }
  getFrameDuration(index) {
    const frame = this.frames[index];
    const baseDuration = this.frameDuration;
    if (frame && typeof frame.duration === "number") {
      return baseDuration * frame.duration;
    }
    return baseDuration;
  }
  get currentFrameDuration() {
    return this.getFrameDuration(this.currentIndex);
  }
  get totalFrames() {
    return this.frames.length;
  }
  get currentFrame() {
    return this.frames[this.currentIndex] || null;
  }
  get progress() {
    return this.totalFrames > 0 ? this.currentIndex / this.totalFrames : 0;
  }
  play() {
    if (this.playing || this.totalFrames === 0) {
      return this;
    }
    this.playing = true;
    this.completed = false;
    __privateSet(this, _elapsed, 0);
    __privateMethod(this, _SpriteAnimation_instances, updateSpriteFrame_fn).call(this);
    this.emit("play");
    return this;
  }
  pause() {
    if (!this.playing) {
      return this;
    }
    this.playing = false;
    this.emit("pause");
    return this;
  }
  stop() {
    this.playing = false;
    this.currentIndex = 0;
    this.completed = false;
    __privateSet(this, _elapsed, 0);
    __privateMethod(this, _SpriteAnimation_instances, updateSpriteFrame_fn).call(this);
    this.emit("stop");
    return this;
  }
  restart() {
    this.currentIndex = 0;
    this.completed = false;
    __privateSet(this, _elapsed, 0);
    this.playing = true;
    __privateMethod(this, _SpriteAnimation_instances, updateSpriteFrame_fn).call(this);
    this.emit("play");
    return this;
  }
  setFrame(index) {
    if (index >= 0 && index < this.totalFrames) {
      this.currentIndex = index;
      __privateMethod(this, _SpriteAnimation_instances, updateSpriteFrame_fn).call(this);
      this.emit("frameChanged", this.currentFrame, index);
    }
    return this;
  }
  setFrameByName(frameName) {
    const index = this.frames.indexOf(frameName);
    if (index !== -1) {
      this.setFrame(index);
    }
    return this;
  }
  nextFrame() {
    const nextIndex = (this.currentIndex + 1) % this.totalFrames;
    this.setFrame(nextIndex);
    return this;
  }
  previousFrame() {
    const prevIndex = this.currentIndex === 0 ? this.totalFrames - 1 : this.currentIndex - 1;
    this.setFrame(prevIndex);
    return this;
  }
  setFps(fps) {
    this.fps = fps;
    this.emit("fpsChanged", fps);
    return this;
  }
  setLoop(loop) {
    this.loop = loop;
    return this;
  }
  setSpeed(speed) {
    this.speed = speed;
    return this;
  }
  setPlaybackMode(mode) {
    this.playbackMode = mode;
    if (mode === "reverse") {
      __privateSet(this, _pingpongDirection, -1);
    } else {
      __privateSet(this, _pingpongDirection, 1);
    }
    return this;
  }
  addEvent(frameIndex, eventName) {
    if (!__privateGet(this, _events).has(frameIndex)) {
      __privateGet(this, _events).set(frameIndex, []);
    }
    __privateGet(this, _events).get(frameIndex).push(eventName);
    if (!__privateGet(this, _framesByEvent).has(eventName)) {
      __privateGet(this, _framesByEvent).set(eventName, []);
    }
    __privateGet(this, _framesByEvent).get(eventName).push(frameIndex);
    return this;
  }
  removeEvent(frameIndex, eventName) {
    if (!__privateGet(this, _events).has(frameIndex)) {
      return this;
    }
    const events = __privateGet(this, _events).get(frameIndex);
    const index = events.indexOf(eventName);
    if (index !== -1) {
      events.splice(index, 1);
    }
    if (events.length === 0) {
      __privateGet(this, _events).delete(frameIndex);
    }
    if (__privateGet(this, _framesByEvent).has(eventName)) {
      const frames = __privateGet(this, _framesByEvent).get(eventName);
      const frameIdx = frames.indexOf(frameIndex);
      if (frameIdx !== -1) {
        frames.splice(frameIdx, 1);
      }
      if (frames.length === 0) {
        __privateGet(this, _framesByEvent).delete(eventName);
      }
    }
    return this;
  }
  clearEvents() {
    __privateGet(this, _events).clear();
    __privateGet(this, _framesByEvent).clear();
    return this;
  }
  getEvents(frameIndex) {
    return __privateGet(this, _events).get(frameIndex) || [];
  }
  getFramesByEvent(eventName) {
    return __privateGet(this, _framesByEvent).get(eventName) || [];
  }
  getSegmentProgress(eventName) {
    const keyframes = this.getFramesByEvent(eventName);
    if (keyframes.length < 2) {
      return 0;
    }
    const current = this.currentIndex;
    for (let i = 0; i < keyframes.length; i++) {
      const start = keyframes[i];
      const end = keyframes[(i + 1) % keyframes.length];
      const isInSegment = end > start ? current >= start && current < end : current >= start || current < end;
      if (isInSegment) {
        const segmentLength = end > start ? end - start : this.totalFrames - start + end;
        const position = current >= start ? current - start : this.totalFrames - start + current;
        return position / segmentLength;
      }
    }
    return 0;
  }
  seekToFrame(index) {
    if (index >= 0 && index < this.totalFrames) {
      this.currentIndex = index;
      __privateSet(this, _elapsed, 0);
      __privateMethod(this, _SpriteAnimation_instances, updateSpriteFrame_fn).call(this);
    }
    return this;
  }
  seekToProgress(progress) {
    const clampedProgress = Math.max(0, Math.min(1, progress));
    const targetIndex = Math.floor(clampedProgress * this.totalFrames);
    return this.seekToFrame(Math.min(targetIndex, this.totalFrames - 1));
  }
  update(deltaTime) {
    if (!this.playing || this.completed) {
      return;
    }
    __privateSet(this, _elapsed, __privateGet(this, _elapsed) + deltaTime * this.speed);
    while (__privateGet(this, _elapsed) >= this.currentFrameDuration) {
      __privateSet(this, _elapsed, __privateGet(this, _elapsed) - this.currentFrameDuration);
      __privateMethod(this, _SpriteAnimation_instances, advanceFrame_fn).call(this);
      if (this.completed) {
        break;
      }
    }
  }
  onDispose() {
    this.playing = false;
    this.sprite = null;
    this.frames = [];
    __privateGet(this, _events).clear();
    __privateGet(this, _framesByEvent).clear();
  }
}
_elapsed = new WeakMap();
_events = new WeakMap();
_framesByEvent = new WeakMap();
_pingpongDirection = new WeakMap();
_SpriteAnimation_instances = new WeakSet();
advanceFrame_fn = function() {
  const previousIndex = this.currentIndex;
  const nextIndex = __privateMethod(this, _SpriteAnimation_instances, getNextFrameIndex_fn).call(this);
  if (nextIndex === null) {
    this.playing = false;
    this.completed = true;
    this.emit("complete");
    return;
  }
  this.currentIndex = nextIndex;
  __privateMethod(this, _SpriteAnimation_instances, emitFrameEvents_fn).call(this, previousIndex, this.currentIndex);
  __privateMethod(this, _SpriteAnimation_instances, updateSpriteFrame_fn).call(this);
  this.emit("frameChanged", this.currentFrame, this.currentIndex);
};
getNextFrameIndex_fn = function() {
  const lastIndex = this.totalFrames - 1;
  if (this.playbackMode === "forward") {
    return __privateMethod(this, _SpriteAnimation_instances, getNextForward_fn).call(this, lastIndex);
  }
  if (this.playbackMode === "reverse") {
    return __privateMethod(this, _SpriteAnimation_instances, getNextReverse_fn).call(this, lastIndex);
  }
  if (this.playbackMode === "pingpong") {
    return __privateMethod(this, _SpriteAnimation_instances, getNextPingpong_fn).call(this, lastIndex);
  }
  return __privateMethod(this, _SpriteAnimation_instances, getNextForward_fn).call(this, lastIndex);
};
getNextForward_fn = function(lastIndex) {
  if (this.currentIndex < lastIndex) {
    return this.currentIndex + 1;
  }
  if (this.loop) {
    this.emit("loop");
    return 0;
  }
  return null;
};
getNextReverse_fn = function(lastIndex) {
  if (this.currentIndex > 0) {
    return this.currentIndex - 1;
  }
  if (this.loop) {
    this.emit("loop");
    return lastIndex;
  }
  return null;
};
getNextPingpong_fn = function(lastIndex) {
  const nextIndex = this.currentIndex + __privateGet(this, _pingpongDirection);
  if (nextIndex >= 0 && nextIndex <= lastIndex) {
    return nextIndex;
  }
  __privateSet(this, _pingpongDirection, __privateGet(this, _pingpongDirection) * -1);
  this.emit("bounce", __privateGet(this, _pingpongDirection));
  if (!this.loop && this.currentIndex === 0) {
    return null;
  }
  return this.currentIndex + __privateGet(this, _pingpongDirection);
};
emitFrameEvents_fn = function(previousIndex, currentIndex) {
  const events = __privateGet(this, _events).get(currentIndex);
  if (events) {
    for (const eventName of events) {
      this.emit("event", eventName, currentIndex);
      this.emit(`event:${eventName}`, currentIndex);
    }
  }
};
updateSpriteFrame_fn = function() {
  if (!this.sprite || !this.currentFrame) {
    return;
  }
  if (this.currentFrame.region) {
    this.sprite.region = this.currentFrame.region;
  } else {
    this.sprite.region = this.currentFrame;
  }
};
class SpriteAnimator extends PerkyModule {
  constructor({ sprite, config, textureSystem } = {}) {
    super();
    this.sprite = sprite;
    this.textureSystem = textureSystem;
    this.current = null;
    const animationsConfig = config || this.constructor.animations;
    if (animationsConfig) {
      this.loadConfig(animationsConfig);
    }
  }
  loadConfig(config) {
    for (const [name, animConfig] of Object.entries(config)) {
      const frames = this.resolveFrames(animConfig);
      const animation = this.create(SpriteAnimation, {
        $id: name,
        sprite: this.sprite,
        frames,
        fps: animConfig.fps ?? 12,
        loop: animConfig.loop ?? true,
        playbackMode: animConfig.playbackMode ?? "forward"
      });
      registerFrameEvents(animation, frames);
    }
  }
  resolveFrames(animConfig) {
    if (animConfig.source) {
      return this.resolveSourceFrames(animConfig.source);
    }
    if (animConfig.frames) {
      return animConfig.frames.map((frame) => this.resolveFrame(frame));
    }
    return [];
  }
  resolveSourceFrames(source) {
    var _a;
    const [spritesheetName, animationName] = source.split(":");
    const spritesheet = (_a = this.textureSystem) == null ? void 0 : _a.getSpritesheet(spritesheetName);
    if (!spritesheet) {
      return [];
    }
    const frameNames = spritesheet.getAnimation(animationName) || [];
    return frameNames.map((frameName) => ({
      region: spritesheet.getRegion(frameName),
      name: frameName
    }));
  }
  resolveFrame(frameConfig) {
    var _a, _b;
    if (frameConfig.region) {
      return {
        region: (_a = this.textureSystem) == null ? void 0 : _a.getRegion(frameConfig.region),
        duration: frameConfig.duration,
        events: frameConfig.events
      };
    }
    const [spritesheetName, frameName] = frameConfig.source.split(":");
    const spritesheet = (_b = this.textureSystem) == null ? void 0 : _b.getSpritesheet(spritesheetName);
    if (!spritesheet) {
      return { region: null };
    }
    const region = spritesheet.getRegion(frameName);
    return {
      region,
      name: frameName,
      source: frameConfig.source,
      duration: frameConfig.duration,
      events: frameConfig.events
    };
  }
  play(name) {
    var _a;
    if (this.current) {
      this.current.stop();
    }
    this.current = this.getChild(name);
    (_a = this.current) == null ? void 0 : _a.restart();
    return this.current;
  }
  get(name) {
    return this.getChild(name);
  }
  update(deltaTime) {
    if (this.current) {
      this.current.update(deltaTime);
    }
  }
}
__publicField(SpriteAnimator, "$category", "spriteAnimator");
function registerFrameEvents(animation, frames) {
  frames.forEach((frame, index) => {
    if (frame.events) {
      for (const eventName of frame.events) {
        animation.addEvent(index, eventName);
      }
    }
  });
}
class RedEnemyAnimator extends SpriteAnimator {
}
__publicField(RedEnemyAnimator, "animations", {
  skip: {
    fps: 10,
    loop: true,
    frames: [
      {
        source: "redSpritesheet:skip/1",
        duration: 0.8,
        events: [
          "hop"
        ]
      },
      {
        source: "redSpritesheet:skip/2"
      },
      {
        source: "redSpritesheet:skip/3",
        duration: 2.000000000000001
      },
      {
        source: "redSpritesheet:skip/4"
      },
      {
        source: "redSpritesheet:skip/5",
        duration: 0.8,
        events: [
          "hop"
        ]
      },
      {
        source: "redSpritesheet:skip/6"
      },
      {
        source: "redSpritesheet:skip/7",
        duration: 2.000000000000001
      },
      {
        source: "redSpritesheet:skip/8"
      }
    ]
  },
  throw: {
    fps: 16,
    loop: false,
    frames: [
      {
        source: "redSpritesheet:throw/1"
      },
      {
        source: "redSpritesheet:throw/2"
      },
      {
        source: "redSpritesheet:throw/3",
        duration: 1.8,
        events: [
          "windup"
        ]
      },
      {
        source: "redSpritesheet:throw/4",
        events: [
          "release"
        ]
      },
      {
        source: "redSpritesheet:throw/5"
      },
      {
        source: "redSpritesheet:throw/6"
      },
      {
        source: "redSpritesheet:throw/7"
      },
      {
        source: "redSpritesheet:throw/8"
      }
    ]
  }
});
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
const themeCSS = `
    :host {

        --bg-primary: #1a1a1e;
        --bg-secondary: #24242a;
        --bg-hover: #2e2e36;
        --bg-selected: #3a3a44;
        --bg-input: #24242a;

        --fg-primary: #e4e4e8;
        --fg-secondary: #9898a0;
        --fg-muted: #6a6a72;

        --accent: #6b9fff;
        --accent-hover: #7daaff;

        --status-success: #4ade80;
        --status-error: #f87171;
        --status-warning: #f59e0b;

        --border: #38383e;
        --border-focus: var(--accent);


        --spacing-xs: 4px;
        --spacing-sm: 8px;
        --spacing-md: 12px;
        --spacing-lg: 16px;
        --spacing-xl: 24px;


        --touch-target: 44px;
        --touch-target-compact: 32px;


        --input-height: 32px;
        --input-height-compact: 28px;
        --input-height-touch: 44px;


        --radius-sm: 4px;
        --radius-md: 8px;
        --radius-lg: 12px;


        --font-mono: "Source Code Pro", "SF Mono", Monaco, Consolas, monospace;
        --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        --font-size-xs: 10px;
        --font-size-sm: 11px;
        --font-size-md: 12px;
        --font-size-lg: 14px;


        --transition-fast: 0.1s ease;
        --transition-normal: 0.15s ease;
        --transition-slow: 0.25s ease;


        --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.2);
        --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.3);
        --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.4);
    }


    :host([context="studio"]) {
        --input-height: var(--input-height-touch);
        --font-size-md: var(--font-size-lg);
        --spacing-sm: var(--spacing-md);
        --radius-md: var(--radius-lg);
    }


    :host([context="editor"]) {
        --input-height: var(--input-height-compact);
        --font-size-md: var(--font-size-sm);
    }


    :host([compact]) {
        --input-height: var(--input-height-compact);
        --font-size-md: var(--font-size-sm);
        --spacing-sm: var(--spacing-xs);
    }


    @media (prefers-color-scheme: light) {
        :host([theme="auto"]) {
            --bg-primary: #f5f5f7;
            --bg-secondary: #e8e8ec;
            --bg-hover: #dcdce0;
            --bg-selected: #d0d0d6;
            --bg-input: #ffffff;

            --fg-primary: #1a1a1e;
            --fg-secondary: #5c5c66;
            --fg-muted: #8c8c96;

            --border: #c8c8ce;

            --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.1);
            --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.15);
            --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.2);
        }
    }

    :host([theme="light"]) {
        --bg-primary: #f5f5f7;
        --bg-secondary: #e8e8ec;
        --bg-hover: #dcdce0;
        --bg-selected: #d0d0d6;
        --bg-input: #ffffff;

        --fg-primary: #1a1a1e;
        --fg-secondary: #5c5c66;
        --fg-muted: #8c8c96;

        --border: #c8c8ce;

        --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.1);
        --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.15);
        --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.2);
    }
`;
const resetCSS = `
    *, *::before, *::after {
        box-sizing: border-box;
    }

    :host {
        display: block;
        font-family: var(--font-mono);
        font-size: var(--font-size-md);
        color: var(--fg-primary);
        line-height: 1.4;
    }

    :host([hidden]) {
        display: none !important;
    }


    ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: var(--border);
        border-radius: 3px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: var(--fg-muted);
    }


    :focus-visible {
        outline: 2px solid var(--accent);
        outline-offset: 2px;
    }

    :focus:not(:focus-visible) {
        outline: none;
    }
`;
const controlsCSS = `

    input[type="text"],
    input[type="number"],
    input[type="search"],
    textarea {
        appearance: none;
        background: transparent;
        color: var(--fg-primary);
        border: none;
        padding: 0;
        height: auto;
        font-family: inherit;
        font-size: inherit;
    }

    input:hover,
    textarea:hover {
        background: transparent;
    }

    input:focus,
    textarea:focus {
        outline: none;
        background: transparent;
    }

    input:disabled,
    textarea:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }


    select {
        appearance: none;
        background: var(--bg-secondary);
        color: var(--fg-primary);
        border: none;
        border-radius: var(--radius-md);
        padding: 0 var(--spacing-lg) 0 var(--spacing-sm);
        height: var(--input-height);
        font-family: inherit;
        font-size: inherit;
        cursor: pointer;
        transition: background var(--transition-fast);
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%239898a0' d='M3 4.5L6 8l3-3.5H3z'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 8px center;
    }

    select:hover {
        background-color: var(--bg-hover);
    }

    select:focus {
        outline: none;
        background-color: var(--bg-hover);
    }


    button {
        appearance: none;
        background: var(--bg-secondary);
        color: var(--fg-secondary);
        border: none;
        border-radius: var(--radius-md);
        padding: 0 var(--spacing-md);
        height: var(--input-height);
        min-width: var(--input-height);
        font-family: inherit;
        font-size: inherit;
        font-weight: 500;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: var(--spacing-xs);
        transition: background var(--transition-fast), color var(--transition-fast), transform var(--transition-fast);
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
    }

    button:hover {
        background: var(--bg-hover);
        color: var(--fg-primary);
    }

    button:active {
        transform: scale(0.96);
    }

    button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        transform: none;
    }


    button.primary {
        background: var(--accent);
        color: var(--bg-primary);
    }

    button.primary:hover {
        background: var(--accent-hover);
        color: var(--bg-primary);
    }

    button.danger {
        background: var(--status-error);
        color: white;
    }

    button.danger:hover {
        background: #ef5350;
        color: white;
    }

    button.ghost {
        background: transparent;
        color: var(--fg-secondary);
    }

    button.ghost:hover {
        background: var(--bg-hover);
        color: var(--fg-primary);
    }


    button.active,
    button[aria-pressed="true"] {
        background: var(--accent);
        color: var(--bg-primary);
    }


    button.icon-only {
        padding: 0;
        width: var(--input-height);
    }


    button.success {
        background: var(--status-success);
        color: var(--bg-primary);
    }


    label {
        color: var(--fg-secondary);
        font-size: var(--font-size-sm);
        user-select: none;
        -webkit-user-select: none;
    }

    label.draggable {
        cursor: ew-resize;
    }
`;
const supportsConstructableStylesheets = (() => {
  try {
    const sheet = new CSSStyleSheet();
    return typeof sheet.replaceSync === "function";
  } catch {
    return false;
  }
})();
let themeSheet = null;
let resetSheet = null;
let controlsSheet = null;
if (supportsConstructableStylesheets) {
  themeSheet = new CSSStyleSheet();
  resetSheet = new CSSStyleSheet();
  controlsSheet = new CSSStyleSheet();
  themeSheet.replaceSync(themeCSS);
  resetSheet.replaceSync(resetCSS);
  controlsSheet.replaceSync(controlsCSS);
}
function adoptStyles(shadowRoot, ...extraSheets) {
  if (supportsConstructableStylesheets) {
    const sheets = [themeSheet, resetSheet, ...extraSheets].filter(Boolean);
    shadowRoot.adoptedStyleSheets = sheets;
  } else {
    const allCSS = [themeCSS, resetCSS];
    extraSheets.forEach((sheet) => {
      if (sheet && sheet._css) {
        allCSS.push(sheet._css);
      }
    });
    const style = document.createElement("style");
    style.textContent = allCSS.join("\n");
    shadowRoot.appendChild(style);
  }
}
function createSheet(css) {
  if (supportsConstructableStylesheets) {
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(css);
    return sheet;
  }
  return { _css: css };
}
const appLayoutCSS = createSheet(`
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
        border-bottom: 1px solid var(--border);
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
class AppLayout extends HTMLElement {
  constructor() {
    super();
    __privateAdd(this, _AppLayout_instances);
    __privateAdd(this, _headerEl, null);
    __privateAdd(this, _titleEl, null);
    __privateAdd(this, _menuBtn, null);
    __privateAdd(this, _closeBtn, null);
    __privateAdd(this, _contentEl, null);
    __privateAdd(this, _footerEl, null);
    this.attachShadow({ mode: "open" });
    adoptStyles(this.shadowRoot, appLayoutCSS);
    __privateMethod(this, _AppLayout_instances, buildDOM_fn).call(this);
  }
  connectedCallback() {
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
  __privateSet(this, _headerEl, document.createElement("header"));
  __privateGet(this, _headerEl).className = "header";
  const headerStart = document.createElement("div");
  headerStart.className = "header-start";
  __privateSet(this, _menuBtn, document.createElement("button"));
  __privateGet(this, _menuBtn).className = "header-btn menu-btn";
  __privateGet(this, _menuBtn).innerHTML = "≡";
  __privateGet(this, _menuBtn).addEventListener("click", () => __privateMethod(this, _AppLayout_instances, emitEvent_fn).call(this, "menu"));
  headerStart.appendChild(__privateGet(this, _menuBtn));
  const headerStartSlot = document.createElement("slot");
  headerStartSlot.name = "header-start";
  headerStart.appendChild(headerStartSlot);
  const headerCenter = document.createElement("div");
  headerCenter.className = "header-center";
  __privateSet(this, _titleEl, document.createElement("span"));
  __privateGet(this, _titleEl).className = "title";
  headerCenter.appendChild(__privateGet(this, _titleEl));
  const headerCenterSlot = document.createElement("slot");
  headerCenterSlot.name = "header-center";
  headerCenter.appendChild(headerCenterSlot);
  const headerEnd = document.createElement("div");
  headerEnd.className = "header-end";
  const headerEndSlot = document.createElement("slot");
  headerEndSlot.name = "header-end";
  headerEnd.appendChild(headerEndSlot);
  __privateSet(this, _closeBtn, document.createElement("button"));
  __privateGet(this, _closeBtn).className = "header-btn close-btn";
  __privateGet(this, _closeBtn).innerHTML = "✕";
  __privateGet(this, _closeBtn).addEventListener("click", () => __privateMethod(this, _AppLayout_instances, emitEvent_fn).call(this, "close"));
  headerEnd.appendChild(__privateGet(this, _closeBtn));
  __privateGet(this, _headerEl).appendChild(headerStart);
  __privateGet(this, _headerEl).appendChild(headerCenter);
  __privateGet(this, _headerEl).appendChild(headerEnd);
  __privateSet(this, _contentEl, document.createElement("main"));
  __privateGet(this, _contentEl).className = "content";
  const contentSlot = document.createElement("slot");
  __privateGet(this, _contentEl).appendChild(contentSlot);
  const overlayContainer = document.createElement("div");
  overlayContainer.className = "overlay-container";
  const overlaySlot = document.createElement("slot");
  overlaySlot.name = "overlay";
  overlayContainer.appendChild(overlaySlot);
  __privateGet(this, _contentEl).appendChild(overlayContainer);
  __privateSet(this, _footerEl, document.createElement("footer"));
  __privateGet(this, _footerEl).className = "footer";
  const footerStart = document.createElement("div");
  footerStart.className = "footer-start";
  const footerStartSlot = document.createElement("slot");
  footerStartSlot.name = "footer-start";
  footerStart.appendChild(footerStartSlot);
  const footerCenter = document.createElement("div");
  footerCenter.className = "footer-center";
  const footerCenterSlot = document.createElement("slot");
  footerCenterSlot.name = "footer-center";
  footerCenter.appendChild(footerCenterSlot);
  const footerEnd = document.createElement("div");
  footerEnd.className = "footer-end";
  const footerEndSlot = document.createElement("slot");
  footerEndSlot.name = "footer-end";
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
customElements.define("app-layout", AppLayout);
const overlayCSS = createSheet(`
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
class Overlay extends HTMLElement {
  constructor() {
    super();
    __privateAdd(this, _Overlay_instances);
    __privateAdd(this, _backdrop, null);
    __privateAdd(this, _container, null);
    this.attachShadow({ mode: "open" });
    adoptStyles(this.shadowRoot, overlayCSS);
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
  __privateSet(this, _backdrop, document.createElement("div"));
  __privateGet(this, _backdrop).className = "backdrop";
  __privateGet(this, _backdrop).addEventListener("click", (e) => {
    if (e.target === __privateGet(this, _backdrop) && !this.hasAttribute("no-close-on-backdrop")) {
      this.close();
    }
  });
  __privateSet(this, _container, document.createElement("div"));
  __privateGet(this, _container).className = "container";
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
customElements.define("editor-overlay", Overlay);
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
const ICONS = {
  start: '<svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>',
  pause: '<svg viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>',
  stop: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>',
  chevronLeft: '<svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"></polyline></svg>',
  wrench: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>',
  scenery: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="2" y1="18" x2="22" y2="18"></line><line x1="6" y1="18" x2="6" y2="10"></line><line x1="12" y1="18" x2="12" y2="8"></line><line x1="18" y1="18" x2="18" y2="12"></line><circle cx="17" cy="5" r="2"></circle></svg>'
};
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
class Camera extends PerkyModule {
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
__publicField(Camera, "$category", "camera");
class BaseRenderer extends PerkyModule {
  constructor(options = {}) {
    super(options);
    __privateAdd(this, _BaseRenderer_instances);
    __privateAdd(this, _resizeObserver, null);
    __privateAdd(this, _autoFitEnabled, false);
    this.canvas = options.canvas || document.createElement("canvas");
    this.pixelRatio = options.pixelRatio ?? 1;
    this.displayWidth = options.width ?? this.canvas.width;
    this.displayHeight = options.height ?? this.canvas.height;
    this.camera = options.camera ?? new Camera({
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
    var _a;
    return (_a = this.canvas) == null ? void 0 : _a.parentElement;
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
    this.emit("resize", width, height);
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
_resizeObserver = new WeakMap();
_autoFitEnabled = new WeakMap();
_BaseRenderer_instances = new WeakSet();
updateAutoFitObserver_fn = function() {
  if (__privateGet(this, _resizeObserver)) {
    __privateGet(this, _resizeObserver).disconnect();
    __privateSet(this, _resizeObserver, null);
  }
  if (!__privateGet(this, _autoFitEnabled) || !this.container) {
    return;
  }
  __privateSet(this, _resizeObserver, new ResizeObserver((entries) => {
    for (const entry of entries) {
      const { width, height } = entry.contentRect;
      if (width > 0 && height > 0) {
        this.resize(width, height);
      }
    }
  }));
  __privateGet(this, _resizeObserver).observe(this.container);
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
in vec4 aUVBounds;

uniform mat3 uProjectionMatrix;
uniform mat3 uViewMatrix;
uniform mat3 uModelMatrix;

out vec2 vTexCoord;
out float vOpacity;
out vec4 vTintColor;
out vec4 vEffectParams;
out vec4 vUVBounds;

void main() {
    vec3 worldPos = uModelMatrix * vec3(aPosition, 1.0);
    vec3 viewPos = uViewMatrix * worldPos;
    vec3 clipPos = uProjectionMatrix * viewPos;

    gl_Position = vec4(clipPos.xy, 0.0, 1.0);
    vTexCoord = aTexCoord;
    vOpacity = aOpacity;
    vTintColor = aTintColor;
    vEffectParams = aEffectParams;
    vUVBounds = aUVBounds;
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
in vec4 vUVBounds;

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
  attributes: ["aPosition", "aTexCoord", "aOpacity", "aTintColor", "aEffectParams", "aUVBounds"]
};
const SPRITE_ATTRIBUTES = ["aPosition", "aTexCoord", "aOpacity", "aTintColor", "aEffectParams", "aUVBounds"];
const PARAM_SLOTS = ["x", "y", "z", "w"];
const DEFAULT_UNIFORM_TYPES = {
  uTime: "float"
};
class ShaderEffectRegistry {
  constructor(gl, shaderRegistry) {
    __privateAdd(this, _ShaderEffectRegistry_instances);
    __privateAdd(this, _gl3, null);
    __privateAdd(this, _shaderRegistry, null);
    __privateAdd(this, _effects, /* @__PURE__ */ new Map());
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
    __privateGet(this, _effects).set(name, EffectClass);
    return this;
  }
  get(name) {
    return __privateGet(this, _effects).get(name) || null;
  }
  has(name) {
    return __privateGet(this, _effects).has(name);
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
    __privateGet(this, _effects).clear();
    __privateGet(this, _shaderCache).clear();
    __privateGet(this, _uniformValues).clear();
    __privateGet(this, _uniformTypes).clear();
    __privateSet(this, _gl3, null);
    __privateSet(this, _shaderRegistry, null);
  }
}
_gl3 = new WeakMap();
_shaderRegistry = new WeakMap();
_effects = new WeakMap();
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
  var _a, _b;
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
    const Effect = __privateGet(this, _effects).get(typeName);
    if ((_a = Effect == null ? void 0 : Effect.shader) == null ? void 0 : _a.fragment) {
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
in vec4 vUVBounds;

out vec4 fragColor;

void main() {
    vec4 color = texture(uTexture, vTexCoord);
    vec2 texCoord = vTexCoord;
    vec2 texelSize = uTexelSize;
    vec4 effectParams = vEffectParams;
    vec2 uvMin = vUVBounds.xy;
    vec2 uvMax = vUVBounds.zw;
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
    var _a;
    return ((_a = __privateGet(this, _namedBuffers).get(name)) == null ? void 0 : _a.texture) ?? null;
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
function getFramebufferStatusName(gl, status) {
  const statusNames = {
    [gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT]: "INCOMPLETE_ATTACHMENT",
    [gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT]: "INCOMPLETE_MISSING_ATTACHMENT",
    [gl.FRAMEBUFFER_UNSUPPORTED]: "UNSUPPORTED",
    [gl.FRAMEBUFFER_INCOMPLETE_MULTISAMPLE]: "INCOMPLETE_MULTISAMPLE"
  };
  return statusNames[status] || `UNKNOWN (${status})`;
}
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
class PostProcessor extends PerkyModule {
  constructor(options = {}) {
    super(options);
    __privateAdd(this, _gl5, null);
    __privateAdd(this, _shaderRegistry2, null);
    __privateAdd(this, _framebufferManager, null);
    __privateAdd(this, _fullscreenQuad, null);
    __privateAdd(this, _passes, []);
    __privateAdd(this, _enabled, true);
    __privateSet(this, _gl5, options.gl);
    __privateSet(this, _shaderRegistry2, options.shaderRegistry);
    this.width = options.width;
    this.height = options.height;
  }
  onInstall() {
    __privateSet(this, _framebufferManager, new FramebufferManager(
      __privateGet(this, _gl5),
      this.width,
      this.height
    ));
    __privateSet(this, _fullscreenQuad, new FullscreenQuad(__privateGet(this, _gl5)));
  }
  get enabled() {
    return __privateGet(this, _enabled);
  }
  set enabled(value) {
    __privateSet(this, _enabled, value);
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
    var _a;
    this.width = width;
    this.height = height;
    (_a = __privateGet(this, _framebufferManager)) == null ? void 0 : _a.resize(width, height);
  }
  hasActivePasses() {
    return __privateGet(this, _enabled) && __privateGet(this, _passes).some((pass) => pass.enabled);
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
  onDispose() {
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
_enabled = new WeakMap();
__publicField(PostProcessor, "$category", "postProcessor");
__publicField(PostProcessor, "$bind", "postProcessor");
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
  gl.generateMipmap(gl.TEXTURE_2D);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
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
  if (colorString.startsWith("hsl")) {
    const match = colorString.match(/hsl\(\s*(\d+)\s*,\s*(\d+)%?\s*,\s*(\d+)%?\s*\)/);
    if (match) {
      const h = parseInt(match[1], 10) / 360;
      const s = parseInt(match[2], 10) / 100;
      const l = parseInt(match[3], 10) / 100;
      const { r, g, b } = hslToRgb(h, s, l);
      return { r, g, b, a: 1 };
    }
  }
  return { r: 0, g: 0, b: 0, a: 1 };
}
function hslToRgb(h, s, l) {
  if (s === 0) {
    return { r: l, g: l, b: l };
  }
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  return {
    r: hueToRgb(p, q, h + 1 / 3),
    g: hueToRgb(p, q, h),
    b: hueToRgb(p, q, h - 1 / 3)
  };
}
function hueToRgb(p, q, t) {
  if (t < 0) {
    t += 1;
  }
  if (t > 1) {
    t -= 1;
  }
  if (t < 1 / 6) {
    return p + (q - p) * 6 * t;
  }
  if (t < 1 / 2) {
    return q;
  }
  if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6;
  }
  return p;
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
    var _a;
    const renderer = this.host;
    if (!(renderer == null ? void 0 : renderer.gl) || !(renderer == null ? void 0 : renderer.shaderRegistry)) {
      return;
    }
    __privateMethod(this, _RenderGroup_instances, initPasses_fn).call(this, renderer.shaderRegistry);
    __privateMethod(this, _RenderGroup_instances, initTransform_fn).call(this, renderer);
    const fbManager = (_a = renderer.postProcessor) == null ? void 0 : _a.framebufferManager;
    if (fbManager) {
      fbManager.getOrCreateBuffer(this.$id);
    }
  }
  hasActivePasses() {
    return this.postPasses.some((pass) => pass.enabled);
  }
  onDispose() {
    var _a, _b;
    const fbManager = (_b = (_a = this.host) == null ? void 0 : _a.postProcessor) == null ? void 0 : _b.framebufferManager;
    if (fbManager) {
      fbManager.disposeBuffer(this.$id);
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
    var _a;
    if (__privateGet(this, _initialized) && ((_a = this.host) == null ? void 0 : _a.shaderRegistry)) {
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
    __privateAdd(this, _context, null);
    __privateAdd(this, _collected, []);
  }
  static get handles() {
    return [];
  }
  get gl() {
    return __privateGet(this, _gl7);
  }
  get context() {
    return __privateGet(this, _context);
  }
  init(context) {
    __privateSet(this, _gl7, context.gl);
    __privateSet(this, _context, context);
  }
  reset() {
    __privateSet(this, _collected, []);
  }
  collect(object, opacity, hints = null) {
    __privateGet(this, _collected).push({ object, opacity, hints });
  }
  get collected() {
    return __privateGet(this, _collected);
  }
  flush() {
  }
  dispose() {
    __privateSet(this, _collected, []);
    __privateSet(this, _gl7, null);
    __privateSet(this, _context, null);
  }
}
_gl7 = new WeakMap();
_context = new WeakMap();
_collected = new WeakMap();
const DEFAULT_TEX_COORDS = [0, 1, 1, 1, 1, 0, 0, 0];
const DEFAULT_TINT = [0, 0, 0, 0];
const DEFAULT_EFFECT_PARAMS = [0, 0, 0, 0];
const DEFAULT_UV_BOUNDS = [0, 0, 1, 1];
const FLOATS_PER_VERTEX = 18;
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
    const region = object.region;
    const image = region == null ? void 0 : region.image;
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
    computeTexCoords(region, texCoords);
    const localAnchorX = bounds.minX + object.anchorX * bounds.width;
    const localAnchorY = bounds.minY + object.anchorY * bounds.height;
    const m = object.worldMatrix;
    const worldAnchorY = m[1] * localAnchorX + m[3] * localAnchorY + m[5];
    const uvBounds = region ? [region.uvs.u0, region.uvs.v0, region.uvs.u1, region.uvs.v1] : null;
    __privateMethod(this, _WebGLSpriteBatch_instances, writeVertices_fn).call(this, {
      corners,
      texCoords,
      opacity: effectiveOpacity,
      hints,
      anchorY: worldAnchorY,
      uvBounds
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
  const { corners, texCoords, opacity, hints, anchorY, uvBounds } = sprite;
  const t = (hints == null ? void 0 : hints.tint) || DEFAULT_TINT;
  const ep = (hints == null ? void 0 : hints.effectParams) || DEFAULT_EFFECT_PARAMS;
  const uv = uvBounds || DEFAULT_UV_BOUNDS;
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
    this.vertexData[idx + 14] = uv[0];
    this.vertexData[idx + 15] = uv[1];
    this.vertexData[idx + 16] = uv[2];
    this.vertexData[idx + 17] = uv[3];
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
    { name: "aEffectParams", size: 4, offset: 10 * 4 },
    { name: "aUVBounds", size: 4, offset: 14 * 4 }
  ];
  for (const { name, size, offset } of optionalAttrs) {
    const location = attrs[name];
    if (location !== void 0 && location !== -1) {
      gl.enableVertexAttribArray(location);
      gl.vertexAttribPointer(location, size, gl.FLOAT, false, stride, offset);
    }
  }
};
function computeTexCoords(region, texCoords) {
  if (region) {
    const { u0, v0, u1, v1 } = region.uvs;
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
  if (!image) {
    return null;
  }
  if (image.complete !== void 0 && (!image.complete || image.naturalWidth === 0)) {
    return null;
  }
  if (image.width === 0) {
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
class Transform {
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
    __privateAdd(this, _dirty2);
    __privateAdd(this, _sortedChildren);
    __privateAdd(this, _childrenNeedSort);
    this.parent = null;
    this.children = [];
    __privateSet(this, _sortedChildren, null);
    __privateSet(this, _childrenNeedSort, false);
    __privateSet(this, _localMatrix, [1, 0, 0, 1, 0, 0]);
    __privateSet(this, _worldMatrix, [1, 0, 0, 1, 0, 0]);
    __privateSet(this, _dirty2, true);
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
    if (__privateGet(this, _dirty2)) {
      return;
    }
    __privateSet(this, _dirty2, true);
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
    if (__privateGet(this, _dirty2) || force) {
      this.updateLocalMatrix();
      if (this.parent) {
        multiplyMatrices(__privateGet(this.parent, _worldMatrix), __privateGet(this, _localMatrix), __privateGet(this, _worldMatrix));
      } else {
        __privateSet(this, _worldMatrix, [...__privateGet(this, _localMatrix)]);
      }
      __privateSet(this, _dirty2, false);
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
_dirty2 = new WeakMap();
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
class Object2D extends Transform {
  constructor(options = {}) {
    super();
    __privateAdd(this, _tint, null);
    __privateAdd(this, _debugGizmos, null);
    __privateAdd(this, _depth, 0);
    this.visible = options.visible ?? true;
    this.opacity = options.opacity ?? 1;
    __privateSet(this, _depth, options.depth ?? 0);
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
  get debugGizmos() {
    return __privateGet(this, _debugGizmos);
  }
  set debugGizmos(value) {
    __privateSet(this, _debugGizmos, value);
  }
  get depth() {
    return __privateGet(this, _depth);
  }
  set depth(value) {
    if (__privateGet(this, _depth) !== value) {
      __privateSet(this, _depth, value);
      if (this.parent) {
        this.parent.markChildrenNeedSort();
      }
      this.markDirty();
    }
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
    this.depth = depth;
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
    if (!hasTint) {
      return null;
    }
    return { tint: __privateGet(this, _tint) };
  }
  render() {
  }
}
_tint = new WeakMap();
_debugGizmos = new WeakMap();
_depth = new WeakMap();
class ShaderEffect {
  constructor(options = {}) {
    __privateAdd(this, _enabled2, true);
    __privateSet(this, _enabled2, options.enabled ?? true);
  }
  get enabled() {
    return __privateGet(this, _enabled2);
  }
  set enabled(value) {
    __privateSet(this, _enabled2, value);
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
_enabled2 = new WeakMap();
__publicField(ShaderEffect, "shader", {
  params: [],
  uniforms: [],
  fragment: ""
});
class SpriteEffectStack {
  constructor() {
    __privateAdd(this, _effects2, []);
    __privateSet(this, _effects2, []);
  }
  get effects() {
    return __privateGet(this, _effects2);
  }
  get count() {
    return __privateGet(this, _effects2).length;
  }
  add(effect) {
    if (this.has(effect.constructor)) {
      return this;
    }
    __privateGet(this, _effects2).push(effect);
    return this;
  }
  remove(EffectClass) {
    const index = __privateGet(this, _effects2).findIndex((e) => e.constructor === EffectClass);
    if (index !== -1) {
      const effect = __privateGet(this, _effects2)[index];
      effect.dispose();
      __privateGet(this, _effects2).splice(index, 1);
    }
    return this;
  }
  get(EffectClass) {
    return __privateGet(this, _effects2).find((e) => e.constructor === EffectClass) || null;
  }
  has(EffectClass) {
    return __privateGet(this, _effects2).some((e) => e.constructor === EffectClass);
  }
  clear() {
    for (const effect of __privateGet(this, _effects2)) {
      effect.dispose();
    }
    __privateSet(this, _effects2, []);
    return this;
  }
  getHints() {
    const hints = {};
    for (const effect of __privateGet(this, _effects2)) {
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
    for (const effect of __privateGet(this, _effects2)) {
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
    for (const effect of __privateGet(this, _effects2)) {
      if (effect.enabled && effect instanceof ShaderEffect) {
        types.push(effect.type);
      }
    }
    return types;
  }
  getShaderEffectParams() {
    const params = [0, 0, 0, 0];
    let offset = 0;
    for (const effect of __privateGet(this, _effects2)) {
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
_effects2 = new WeakMap();
class Sprite extends Object2D {
  constructor(options = {}) {
    super(options);
    __privateAdd(this, _region, null);
    __privateAdd(this, _effects3, null);
    this.width = options.width ?? null;
    this.height = options.height ?? null;
    this.animations = /* @__PURE__ */ new Map();
    this.currentAnimation = null;
    if (options.region) {
      __privateSet(this, _region, options.region);
    } else if (options.frame) {
      this.setFrame(options.frame);
    } else if (options.image) {
      __privateSet(this, _region, TextureRegion.fromImage(options.image));
    }
  }
  get region() {
    return __privateGet(this, _region);
  }
  set region(value) {
    __privateSet(this, _region, value);
  }
  get image() {
    var _a;
    return ((_a = __privateGet(this, _region)) == null ? void 0 : _a.image) ?? null;
  }
  set image(value) {
    if (value) {
      __privateSet(this, _region, TextureRegion.fromImage(value));
    } else {
      __privateSet(this, _region, null);
    }
  }
  get currentFrame() {
    return __privateGet(this, _region);
  }
  setFrame(frame) {
    if (frame instanceof TextureRegion) {
      __privateSet(this, _region, frame);
    } else if (frame && frame.frame) {
      const image = frame.image;
      __privateSet(this, _region, TextureRegion.fromFrame(image, frame.frame));
    } else {
      __privateSet(this, _region, null);
    }
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
  get effects() {
    if (!__privateGet(this, _effects3)) {
      __privateSet(this, _effects3, new SpriteEffectStack());
    }
    return __privateGet(this, _effects3);
  }
  get renderHints() {
    const parentHints = super.renderHints;
    const hasEffects = __privateGet(this, _effects3) !== null && __privateGet(this, _effects3).count > 0;
    if (!parentHints && !hasEffects) {
      return null;
    }
    const hints = parentHints ? { ...parentHints } : {};
    if (hasEffects) {
      const effectHints = __privateGet(this, _effects3).getHints();
      if (effectHints) {
        hints.effects = effectHints;
      }
      const shaderEffectTypes = __privateGet(this, _effects3).getShaderEffectTypes();
      if (shaderEffectTypes.length > 0) {
        hints.shaderEffectTypes = shaderEffectTypes;
        hints.effectParams = __privateGet(this, _effects3).getShaderEffectParams();
      }
    }
    return hints;
  }
  getBounds() {
    const region = __privateGet(this, _region);
    const hasWidth = this.width !== null;
    const hasHeight = this.height !== null;
    if (!region) {
      const renderW2 = hasWidth ? this.width : 10;
      const renderH2 = hasHeight ? this.height : 10;
      const offsetX2 = -renderW2 * this.anchorX;
      const offsetY2 = -renderH2 * this.anchorY;
      return {
        minX: offsetX2,
        minY: offsetY2,
        maxX: offsetX2 + renderW2,
        maxY: offsetY2 + renderH2,
        width: renderW2,
        height: renderH2
      };
    }
    const w = region.width;
    const h = region.height;
    let renderW;
    let renderH;
    if (hasWidth && hasHeight) {
      renderW = this.width;
      renderH = this.height;
    } else if (hasWidth) {
      renderW = this.width;
      renderH = h / w * renderW;
    } else if (hasHeight) {
      renderH = this.height;
      renderW = w / h * renderH;
    } else {
      renderW = w;
      renderH = h;
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
_region = new WeakMap();
_effects3 = new WeakMap();
class WebGLSpriteRenderer extends WebGLObjectRenderer {
  constructor() {
    super(...arguments);
    __privateAdd(this, _WebGLSpriteRenderer_instances);
    __privateAdd(this, _spriteBatch, null);
    __privateAdd(this, _shaderEffectRegistry, null);
  }
  static get handles() {
    return [Sprite];
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
    var _a;
    super.reset();
    const program = ((_a = renderContext == null ? void 0 : renderContext.transform) == null ? void 0 : _a.getProgram()) || null;
    __privateGet(this, _spriteBatch).begin(program);
  }
  flush(matrices, renderContext = null) {
    const gl = this.gl;
    const transform = renderContext == null ? void 0 : renderContext.transform;
    const identityMatrix = [1, 0, 0, 0, 1, 0, 0, 0, 1];
    const batches = __privateMethod(this, _WebGLSpriteRenderer_instances, groupByShaderEffects_fn).call(this);
    for (const { key: effectKey, items } of batches) {
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
  var _a;
  const batches = [];
  let currentKey = null;
  let currentBatch = null;
  for (const item of this.collected) {
    const effectTypes = ((_a = item.hints) == null ? void 0 : _a.shaderEffectTypes) || [];
    const key = [...effectTypes].sort().join("|") || "none";
    if (key !== currentKey) {
      currentKey = key;
      currentBatch = { key, items: [] };
      batches.push(currentBatch);
    }
    currentBatch.items.push(item);
  }
  return batches;
};
getProgramForEffects_fn = function(effectKey, transform) {
  if (transform == null ? void 0 : transform.getProgram()) {
    return transform.getProgram();
  }
  if (!effectKey || effectKey === "none" || !__privateGet(this, _shaderEffectRegistry)) {
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
class WebGLRenderer extends BaseRenderer {
  constructor(options = {}) {
    const { autoFit, ...parentOptions } = options;
    super(parentOptions);
    __privateAdd(this, _WebGLRenderer_instances);
    __privateAdd(this, _rendererRegistry, /* @__PURE__ */ new Map());
    __privateAdd(this, _renderers, []);
    __privateAdd(this, _shaderRegistry3, null);
    __privateAdd(this, _shaderEffectRegistry2, null);
    __privateAdd(this, _debugGizmoRenderer, null);
    __privateAdd(this, _compositeQuad, null);
    __privateAdd(this, _compositeProgram, null);
    __privateAdd(this, _renderGroupOrder, []);
    __privateMethod(this, _WebGLRenderer_instances, setupWebGL_fn).call(this);
    __privateMethod(this, _WebGLRenderer_instances, setupDefaultRenderers_fn).call(this);
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
    if (autoFit) {
      this.autoFitEnabled = true;
    }
  }
  onInstall(host) {
    this.delegateTo(host, [
      "setRenderGroups",
      "clearRenderGroups",
      "prependRenderGroup",
      "appendRenderGroup",
      "removeRenderGroup",
      "setUniform",
      "getUniform",
      "getPass",
      "addPostPass",
      "removePostPass",
      "registerShaderEffect"
    ]);
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
  applyPixelRatio() {
    super.applyPixelRatio();
    if (this.gl) {
      this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    }
    if (this.postProcessor) {
      this.postProcessor.resize(this.canvas.width, this.canvas.height);
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
  addPostPass(PassClass, options = {}) {
    const pass = this.create(PassClass, options);
    this.postProcessor.addPass(pass);
    return pass;
  }
  removePostPass(pass) {
    this.removeChild(pass.$id);
    this.postProcessor.removePass(pass);
    return this;
  }
  getPass(name) {
    return this.getChild(name);
  }
  get postPasses() {
    return this.childrenByCategory("renderPass");
  }
  setRenderGroups(configs) {
    this.clearRenderGroups();
    for (const config of configs) {
      this.appendRenderGroup(config);
    }
    return this;
  }
  clearRenderGroups() {
    for (const group of __privateGet(this, _renderGroupOrder)) {
      this.removeChild(group.$id);
    }
    __privateSet(this, _renderGroupOrder, []);
    return this;
  }
  get renderGroups() {
    return __privateGet(this, _renderGroupOrder);
  }
  prependRenderGroup(config) {
    __privateMethod(this, _WebGLRenderer_instances, ensureCompositeSetup_fn).call(this);
    const group = this.create(RenderGroup, config);
    __privateGet(this, _renderGroupOrder).unshift(group);
    return group;
  }
  appendRenderGroup(config) {
    __privateMethod(this, _WebGLRenderer_instances, ensureCompositeSetup_fn).call(this);
    const group = this.create(RenderGroup, config);
    __privateGet(this, _renderGroupOrder).push(group);
    return group;
  }
  removeRenderGroup(groupOrId) {
    const id = typeof groupOrId === "string" ? groupOrId : groupOrId.$id;
    const index = __privateGet(this, _renderGroupOrder).findIndex((g) => g.$id === id);
    if (index !== -1) {
      __privateGet(this, _renderGroupOrder).splice(index, 1);
      this.removeChild(id);
    }
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
    this.clearRenderGroups();
    if (__privateGet(this, _compositeQuad)) {
      __privateGet(this, _compositeQuad).dispose(this.gl);
      __privateSet(this, _compositeQuad, null);
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
      return __privateMethod(this, _WebGLRenderer_instances, renderWithGroups_fn).call(this);
    }
    return __privateMethod(this, _WebGLRenderer_instances, renderSingleScene_fn).call(this, scene);
  }
}
_rendererRegistry = new WeakMap();
_renderers = new WeakMap();
_shaderRegistry3 = new WeakMap();
_shaderEffectRegistry2 = new WeakMap();
_debugGizmoRenderer = new WeakMap();
_compositeQuad = new WeakMap();
_compositeProgram = new WeakMap();
_renderGroupOrder = new WeakMap();
_WebGLRenderer_instances = new WeakSet();
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
  __privateMethod(this, _WebGLRenderer_instances, setupBuiltinShaders_fn).call(this);
  this.create(WebGLTextureManager, {
    $bind: "textureManager",
    gl
  });
  this.create(PostProcessor, {
    gl,
    shaderRegistry: __privateGet(this, _shaderRegistry3),
    width: this.canvas.width,
    height: this.canvas.height
  });
};
setupBuiltinShaders_fn = function() {
  this.spriteProgram = __privateGet(this, _shaderRegistry3).register("sprite", SPRITE_SHADER_DEF);
  this.primitiveProgram = __privateGet(this, _shaderRegistry3).register("primitive", PRIMITIVE_SHADER_DEF);
  __privateGet(this, _shaderRegistry3).setDefault("sprite", "sprite");
  __privateGet(this, _shaderRegistry3).setDefault("primitive", "primitive");
};
setupDefaultRenderers_fn = function() {
  this.registerRenderer(new WebGLSpriteRenderer());
  this.registerRenderer(new WebGLCircleRenderer());
  this.registerRenderer(new WebGLRectangleRenderer());
  __privateSet(this, _debugGizmoRenderer, new WebGLDebugGizmoRenderer());
  __privateGet(this, _debugGizmoRenderer).init({
    gl: this.gl,
    spriteProgram: this.spriteProgram,
    primitiveProgram: this.primitiveProgram,
    textureManager: this.textureManager,
    shaderEffectRegistry: __privateGet(this, _shaderEffectRegistry2)
  });
};
ensureCompositeSetup_fn = function() {
  if (!__privateGet(this, _compositeProgram)) {
    __privateMethod(this, _WebGLRenderer_instances, setupCompositeShader_fn).call(this);
  }
  if (!__privateGet(this, _compositeQuad)) {
    __privateSet(this, _compositeQuad, new FullscreenQuad(this.gl));
  }
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
  __privateMethod(this, _WebGLRenderer_instances, resetStats_fn).call(this);
  const usePostProcessing = this.postProcessor.begin();
  __privateMethod(this, _WebGLRenderer_instances, clearWithBackground_fn).call(this);
  this.camera.update();
  const matrices = __privateMethod(this, _WebGLRenderer_instances, getMatrices_fn).call(this);
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
    renderer.flush(matrices);
  }
  if (debugGizmoRenderer) {
    debugGizmoRenderer.flush(matrices);
  }
  if (usePostProcessing) {
    this.postProcessor.finish();
  }
};
renderWithGroups_fn = function() {
  __privateMethod(this, _WebGLRenderer_instances, resetStats_fn).call(this);
  this.camera.update();
  const matrices = __privateMethod(this, _WebGLRenderer_instances, getMatrices_fn).call(this);
  __privateMethod(this, _WebGLRenderer_instances, renderGroupsToTextures_fn).call(this, matrices);
  __privateMethod(this, _WebGLRenderer_instances, compositeGroups_fn).call(this);
};
renderGroupsToTextures_fn = function(matrices) {
  for (const group of this.renderGroups) {
    if (group.visible && group.content) {
      __privateMethod(this, _WebGLRenderer_instances, renderGroupToTexture_fn).call(this, group, matrices);
    }
  }
};
renderGroupToTexture_fn = function(group, matrices) {
  var _a;
  const gl = this.gl;
  const fbManager = this.postProcessor.framebufferManager;
  fbManager.getOrCreateBuffer(group.$id);
  fbManager.bindSceneBuffer();
  gl.clearColor(0, 0, 0, 0);
  gl.clear(gl.COLOR_BUFFER_BIT);
  group.content.updateWorldMatrix(false);
  const renderContext = ((_a = group.renderTransform) == null ? void 0 : _a.enabled) ? { transform: group.renderTransform } : null;
  for (const renderer of __privateGet(this, _renderers)) {
    renderer.reset(renderContext);
  }
  const debugGizmoRenderer = this.enableDebugGizmos ? __privateGet(this, _debugGizmoRenderer) : null;
  if (debugGizmoRenderer) {
    debugGizmoRenderer.reset();
  }
  traverseAndCollect(group.content, __privateGet(this, _rendererRegistry), {
    camera: this.camera,
    enableCulling: this.enableCulling,
    stats: this.stats,
    debugGizmoRenderer
  });
  for (const renderer of __privateGet(this, _renderers)) {
    renderer.flush(matrices, renderContext);
  }
  if (debugGizmoRenderer) {
    debugGizmoRenderer.flush(matrices);
  }
  fbManager.resolveToBuffer(group.$id);
  if (group.hasActivePasses()) {
    __privateMethod(this, _WebGLRenderer_instances, applyGroupPasses_fn).call(this, group);
  }
};
compositeGroups_fn = function() {
  const hasGlobalPostProcessing = this.postProcessor.hasActivePasses();
  const fbManager = this.postProcessor.framebufferManager;
  if (hasGlobalPostProcessing) {
    fbManager.bindSceneBuffer();
  } else {
    fbManager.bindScreen();
  }
  __privateMethod(this, _WebGLRenderer_instances, clearWithBackground_fn).call(this);
  __privateMethod(this, _WebGLRenderer_instances, drawAllGroups_fn).call(this);
  this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
  if (hasGlobalPostProcessing) {
    this.postProcessor.finish();
  }
};
drawAllGroups_fn = function() {
  const gl = this.gl;
  const fbManager = this.postProcessor.framebufferManager;
  __privateGet(this, _compositeProgram).use();
  gl.activeTexture(gl.TEXTURE0);
  __privateGet(this, _compositeProgram).setUniform1i("uTexture", 0);
  for (const group of this.renderGroups) {
    if (!group.visible || !group.content) {
      continue;
    }
    const texture = fbManager.getBufferTexture(group.$id);
    if (texture) {
      __privateMethod(this, _WebGLRenderer_instances, drawGroup_fn).call(this, group, texture);
    }
  }
};
drawGroup_fn = function(group, texture) {
  const gl = this.gl;
  __privateMethod(this, _WebGLRenderer_instances, applyBlendMode_fn).call(this, group.blendMode);
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
  const fbManager = this.postProcessor.framebufferManager;
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
  gl.bindTexture(gl.TEXTURE_2D, fbManager.getBufferTexture(group.$id));
  __privateGet(this, _compositeProgram).setUniform1i("uTexture", 0);
  __privateGet(this, _compositeProgram).setUniform1f("uOpacity", 1);
  __privateGet(this, _compositeQuad).draw(gl, __privateGet(this, _compositeProgram));
  let inputTexture = fbManager.swapAndGetTexture();
  for (let i = 0; i < activePasses.length; i++) {
    const isLast = i === activePasses.length - 1;
    if (isLast) {
      fbManager.bindBuffer(group.$id);
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
__publicField(WebGLRenderer, "$name", "webGLRenderer");
class Noise {
  constructor(seed = 0) {
    __privateAdd(this, _Noise_instances);
    __privateAdd(this, _perm, []);
    __privateAdd(this, _gradP, []);
    this.seed(seed);
  }
  seed(seed) {
    const p = __privateMethod(this, _Noise_instances, buildPermutation_fn).call(this, seed);
    __privateSet(this, _perm, new Array(512));
    __privateSet(this, _gradP, new Array(512));
    for (let i = 0; i < 256; i++) {
      __privateGet(this, _perm)[i] = __privateGet(this, _perm)[i + 256] = p[i];
      __privateGet(this, _gradP)[i] = __privateGet(this, _gradP)[i + 256] = GRAD3[p[i] % 12];
    }
    return this;
  }
  perlin(x, y = 0, z = 0) {
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;
    const Z = Math.floor(z) & 255;
    x -= Math.floor(x);
    y -= Math.floor(y);
    z -= Math.floor(z);
    const u = fade(x);
    const v = fade(y);
    const w = fade(z);
    const A = __privateGet(this, _perm)[X] + Y;
    const AA = __privateGet(this, _perm)[A] + Z;
    const AB = __privateGet(this, _perm)[A + 1] + Z;
    const B = __privateGet(this, _perm)[X + 1] + Y;
    const BA = __privateGet(this, _perm)[B] + Z;
    const BB = __privateGet(this, _perm)[B + 1] + Z;
    return lerp(
      lerp(
        lerp(
          dot(__privateGet(this, _gradP)[AA], x, y, z),
          dot(__privateGet(this, _gradP)[BA], x - 1, y, z),
          u
        ),
        lerp(
          dot(__privateGet(this, _gradP)[AB], x, y - 1, z),
          dot(__privateGet(this, _gradP)[BB], x - 1, y - 1, z),
          u
        ),
        v
      ),
      lerp(
        lerp(
          dot(__privateGet(this, _gradP)[AA + 1], x, y, z - 1),
          dot(__privateGet(this, _gradP)[BA + 1], x - 1, y, z - 1),
          u
        ),
        lerp(
          dot(__privateGet(this, _gradP)[AB + 1], x, y - 1, z - 1),
          dot(__privateGet(this, _gradP)[BB + 1], x - 1, y - 1, z - 1),
          u
        ),
        v
      ),
      w
    );
  }
  perlin2d(x, y) {
    return this.perlin(x, y, 0);
  }
  fbm(x, y, octaves = 4, lacunarity = 2, persistence = 0.5) {
    let value = 0;
    let amplitude = 1;
    let frequency = 1;
    let maxValue = 0;
    for (let i = 0; i < octaves; i++) {
      value += this.perlin2d(x * frequency, y * frequency) * amplitude;
      maxValue += amplitude;
      amplitude *= persistence;
      frequency *= lacunarity;
    }
    return value / maxValue;
  }
}
_perm = new WeakMap();
_gradP = new WeakMap();
_Noise_instances = new WeakSet();
buildPermutation_fn = function(seed) {
  const p = [];
  for (let i = 0; i < 256; i++) {
    p[i] = i;
  }
  let n = seed;
  for (let i = 255; i > 0; i--) {
    n = n * 16807 % 2147483647;
    const j = n % (i + 1);
    const tmp = p[i];
    p[i] = p[j];
    p[j] = tmp;
  }
  return p;
};
const GRAD3 = [
  [1, 1, 0],
  [-1, 1, 0],
  [1, -1, 0],
  [-1, -1, 0],
  [1, 0, 1],
  [-1, 0, 1],
  [1, 0, -1],
  [-1, 0, -1],
  [0, 1, 1],
  [0, -1, 1],
  [0, 1, -1],
  [0, -1, -1]
];
function fade(t) {
  return t * t * t * (t * (t * 6 - 15) + 10);
}
function lerp(a, b, t) {
  return a + t * (b - a);
}
function dot(grad, x, y, z) {
  return grad[0] * x + grad[1] * y + grad[2] * z;
}
const CSS_COLORS = {
  black: "#000000",
  white: "#ffffff",
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
  yellow: "#ffff00",
  cyan: "#00ffff",
  magenta: "#ff00ff",
  gray: "#808080",
  grey: "#808080",
  orange: "#ffa500",
  pink: "#ffc0cb",
  purple: "#800080",
  transparent: "#00000000"
};
const _Color = class _Color {
  constructor(value) {
    __privateAdd(this, _Color_instances);
    this.r = 0;
    this.g = 0;
    this.b = 0;
    this.a = 1;
    if (value !== void 0) {
      this.set(value);
    }
  }
  set(value) {
    if (value instanceof _Color) {
      this.r = value.r;
      this.g = value.g;
      this.b = value.b;
      this.a = value.a;
    } else if (typeof value === "string") {
      __privateMethod(this, _Color_instances, parseString_fn).call(this, value);
    } else if (typeof value === "number") {
      __privateMethod(this, _Color_instances, parseNumber_fn).call(this, value);
    } else if (Array.isArray(value)) {
      __privateMethod(this, _Color_instances, parseArray_fn).call(this, value);
    } else if (typeof value === "object") {
      __privateMethod(this, _Color_instances, parseObject_fn).call(this, value);
    }
    return this;
  }
  toHsl() {
    const r = this.r;
    const g = this.g;
    const b = this.b;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const l = (max + min) / 2;
    let h = 0;
    let s = 0;
    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      if (max === r) {
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
      } else if (max === g) {
        h = ((b - r) / d + 2) / 6;
      } else {
        h = ((r - g) / d + 4) / 6;
      }
    }
    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100),
      a: this.a
    };
  }
  toRgb() {
    return {
      r: Math.round(this.r * 255),
      g: Math.round(this.g * 255),
      b: Math.round(this.b * 255),
      a: this.a
    };
  }
  toHex(includeAlpha = false) {
    const r = Math.round(this.r * 255).toString(16).padStart(2, "0");
    const g = Math.round(this.g * 255).toString(16).padStart(2, "0");
    const b = Math.round(this.b * 255).toString(16).padStart(2, "0");
    if (includeAlpha) {
      const a = Math.round(this.a * 255).toString(16).padStart(2, "0");
      return `#${r}${g}${b}${a}`;
    }
    return `#${r}${g}${b}`;
  }
  toRgbString() {
    const rgb = this.toRgb();
    if (this.a < 1) {
      return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${this.a})`;
    }
    return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  }
  toHslString() {
    const hsl = this.toHsl();
    if (this.a < 1) {
      return `hsla(${hsl.h}, ${hsl.s}%, ${hsl.l}%, ${this.a})`;
    }
    return `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
  }
  toString() {
    return this.toHex();
  }
  clone() {
    const color = new _Color();
    color.r = this.r;
    color.g = this.g;
    color.b = this.b;
    color.a = this.a;
    return color;
  }
  copy(color) {
    this.r = color.r;
    this.g = color.g;
    this.b = color.b;
    this.a = color.a;
    return this;
  }
  setAlpha(a) {
    this.a = a;
    return this;
  }
  lighten(amount) {
    const hsl = this.toHsl();
    hsl.l = Math.min(100, hsl.l + amount);
    this.set({ h: hsl.h, s: hsl.s, l: hsl.l, a: this.a });
    return this;
  }
  darken(amount) {
    const hsl = this.toHsl();
    hsl.l = Math.max(0, hsl.l - amount);
    this.set({ h: hsl.h, s: hsl.s, l: hsl.l, a: this.a });
    return this;
  }
  saturate(amount) {
    const hsl = this.toHsl();
    hsl.s = Math.min(100, hsl.s + amount);
    this.set({ h: hsl.h, s: hsl.s, l: hsl.l, a: this.a });
    return this;
  }
  desaturate(amount) {
    const hsl = this.toHsl();
    hsl.s = Math.max(0, hsl.s - amount);
    this.set({ h: hsl.h, s: hsl.s, l: hsl.l, a: this.a });
    return this;
  }
  rotate(degrees) {
    const hsl = this.toHsl();
    hsl.h = (hsl.h + degrees) % 360;
    if (hsl.h < 0) {
      hsl.h += 360;
    }
    this.set({ h: hsl.h, s: hsl.s, l: hsl.l, a: this.a });
    return this;
  }
  mix(color, ratio = 0.5) {
    const other = color instanceof _Color ? color : new _Color(color);
    this.r = this.r + (other.r - this.r) * ratio;
    this.g = this.g + (other.g - this.g) * ratio;
    this.b = this.b + (other.b - this.b) * ratio;
    this.a = this.a + (other.a - this.a) * ratio;
    return this;
  }
  invert() {
    this.r = 1 - this.r;
    this.g = 1 - this.g;
    this.b = 1 - this.b;
    return this;
  }
  grayscale() {
    const gray = this.r * 0.299 + this.g * 0.587 + this.b * 0.114;
    this.r = gray;
    this.g = gray;
    this.b = gray;
    return this;
  }
  equals(color) {
    const other = color instanceof _Color ? color : new _Color(color);
    return this.r === other.r && this.g === other.g && this.b === other.b && this.a === other.a;
  }
  get luminance() {
    const r = this.r <= 0.03928 ? this.r / 12.92 : ((this.r + 0.055) / 1.055) ** 2.4;
    const g = this.g <= 0.03928 ? this.g / 12.92 : ((this.g + 0.055) / 1.055) ** 2.4;
    const b = this.b <= 0.03928 ? this.b / 12.92 : ((this.b + 0.055) / 1.055) ** 2.4;
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  }
  get isDark() {
    return this.luminance < 0.5;
  }
  get isLight() {
    return this.luminance >= 0.5;
  }
};
_Color_instances = new WeakSet();
parseString_fn = function(str) {
  str = str.trim().toLowerCase();
  if (CSS_COLORS[str]) {
    str = CSS_COLORS[str];
  }
  if (str.startsWith("#")) {
    __privateMethod(this, _Color_instances, parseHex_fn).call(this, str);
  } else if (str.startsWith("rgb")) {
    __privateMethod(this, _Color_instances, parseRgbString_fn).call(this, str);
  } else if (str.startsWith("hsl")) {
    __privateMethod(this, _Color_instances, parseHslString_fn).call(this, str);
  }
};
parseHex_fn = function(hex) {
  hex = hex.substring(1);
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  } else if (hex.length === 4) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
  }
  this.r = parseInt(hex.substring(0, 2), 16) / 255;
  this.g = parseInt(hex.substring(2, 4), 16) / 255;
  this.b = parseInt(hex.substring(4, 6), 16) / 255;
  if (hex.length === 8) {
    this.a = parseInt(hex.substring(6, 8), 16) / 255;
  } else {
    this.a = 1;
  }
};
parseRgbString_fn = function(str) {
  const match = str.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d.]+)\s*)?\)/);
  if (match) {
    this.r = parseInt(match[1], 10) / 255;
    this.g = parseInt(match[2], 10) / 255;
    this.b = parseInt(match[3], 10) / 255;
    this.a = match[4] !== void 0 ? parseFloat(match[4]) : 1;
  }
};
parseHslString_fn = function(str) {
  const match = str.match(/hsla?\(\s*(\d+)\s*,\s*(\d+)%?\s*,\s*(\d+)%?\s*(?:,\s*([\d.]+)\s*)?\)/);
  if (match) {
    const h = parseInt(match[1], 10) / 360;
    const s = parseInt(match[2], 10) / 100;
    const l = parseInt(match[3], 10) / 100;
    this.a = match[4] !== void 0 ? parseFloat(match[4]) : 1;
    __privateMethod(this, _Color_instances, hslToRgb_fn).call(this, h, s, l);
  }
};
parseNumber_fn = function(num) {
  if (num > 16777215) {
    this.r = (num >> 24 & 255) / 255;
    this.g = (num >> 16 & 255) / 255;
    this.b = (num >> 8 & 255) / 255;
    this.a = (num & 255) / 255;
  } else {
    this.r = (num >> 16 & 255) / 255;
    this.g = (num >> 8 & 255) / 255;
    this.b = (num & 255) / 255;
    this.a = 1;
  }
};
parseArray_fn = function(arr) {
  this.r = arr[0] ?? 0;
  this.g = arr[1] ?? 0;
  this.b = arr[2] ?? 0;
  this.a = arr[3] ?? 1;
};
parseObject_fn = function(obj) {
  if ("h" in obj) {
    const h = (obj.h ?? 0) / 360;
    const s = (obj.s ?? 100) / 100;
    const l = (obj.l ?? 50) / 100;
    this.a = obj.a ?? 1;
    __privateMethod(this, _Color_instances, hslToRgb_fn).call(this, h, s, l);
  } else {
    this.r = obj.r ?? 0;
    this.g = obj.g ?? 0;
    this.b = obj.b ?? 0;
    this.a = obj.a ?? 1;
  }
};
hslToRgb_fn = function(h, s, l) {
  if (s === 0) {
    this.r = this.g = this.b = l;
    return;
  }
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  this.r = __privateMethod(this, _Color_instances, hueToRgb_fn).call(this, p, q, h + 1 / 3);
  this.g = __privateMethod(this, _Color_instances, hueToRgb_fn).call(this, p, q, h);
  this.b = __privateMethod(this, _Color_instances, hueToRgb_fn).call(this, p, q, h - 1 / 3);
};
hueToRgb_fn = function(p, q, t) {
  if (t < 0) {
    t += 1;
  }
  if (t > 1) {
    t -= 1;
  }
  if (t < 1 / 6) {
    return p + (q - p) * 6 * t;
  }
  if (t < 1 / 2) {
    return q;
  }
  if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6;
  }
  return p;
};
let Color = _Color;
class AnimationPreview extends BaseEditorComponent {
  constructor() {
    super(...arguments);
    __privateAdd(this, _AnimationPreview_instances);
    __privateAdd(this, _canvas2, null);
    __privateAdd(this, _previewArea, null);
    __privateAdd(this, _renderer, null);
    __privateAdd(this, _scene, null);
    __privateAdd(this, _sprite, null);
    __privateAdd(this, _animation, null);
    __privateAdd(this, _animationFrameId, null);
    __privateAdd(this, _lastTime, 0);
    __privateAdd(this, _isPlaying, false);
    __privateAdd(this, _resizeObserver2, null);
    __privateAdd(this, _sceneryEnabled, false);
    __privateAdd(this, _sceneryOffset, 0);
    __privateAdd(this, _sceneryCanvas, null);
    __privateAdd(this, _sceneryCtx, null);
    __privateAdd(this, _motion, null);
    __privateAdd(this, _anchor, { x: 0.5, y: 0 });
    __privateAdd(this, _noise, new Noise(42));
  }
  connectedCallback() {
    __privateMethod(this, _AnimationPreview_instances, buildDOM_fn3).call(this);
    if (__privateGet(this, _animation)) {
      __privateMethod(this, _AnimationPreview_instances, updateSprite_fn).call(this);
      __privateMethod(this, _AnimationPreview_instances, render_fn).call(this);
    }
  }
  disconnectedCallback() {
    this.stop();
    __privateSet(this, _renderer, null);
    __privateSet(this, _scene, null);
    __privateSet(this, _sprite, null);
    if (__privateGet(this, _resizeObserver2)) {
      __privateGet(this, _resizeObserver2).disconnect();
      __privateSet(this, _resizeObserver2, null);
    }
  }
  setMotion(motion) {
    var _a, _b;
    __privateSet(this, _motion, motion);
    __privateMethod(this, _AnimationPreview_instances, updateSceneryButton_fn).call(this);
    if (__privateGet(this, _sceneryEnabled)) {
      __privateSet(this, _sceneryOffset, 0);
      __privateMethod(this, _AnimationPreview_instances, updateSceneryCanvas_fn).call(this);
      __privateMethod(this, _AnimationPreview_instances, fitToContainer_fn).call(this, (_b = (_a = __privateGet(this, _animation)) == null ? void 0 : _a.currentFrame) == null ? void 0 : _b.region);
      __privateMethod(this, _AnimationPreview_instances, render_fn).call(this);
    }
  }
  updateMotion(motion) {
    __privateSet(this, _motion, motion);
    __privateMethod(this, _AnimationPreview_instances, updateSceneryButton_fn).call(this);
  }
  setAnchor(anchor) {
    __privateSet(this, _anchor, anchor || { x: 0.5, y: 0 });
    if (__privateGet(this, _sceneryEnabled)) {
      __privateMethod(this, _AnimationPreview_instances, renderScenery_fn).call(this);
    }
  }
  setAnimation(animation) {
    this.stop();
    __privateSet(this, _animation, animation);
    if (!__privateGet(this, _renderer) && __privateGet(this, _canvas2)) {
      __privateMethod(this, _AnimationPreview_instances, setupRenderer_fn).call(this);
    }
    __privateMethod(this, _AnimationPreview_instances, updateSprite_fn).call(this);
    __privateMethod(this, _AnimationPreview_instances, render_fn).call(this);
  }
  play() {
    if (!__privateGet(this, _animation) || __privateGet(this, _isPlaying)) {
      return;
    }
    __privateSet(this, _isPlaying, true);
    __privateGet(this, _animation).play();
    __privateSet(this, _lastTime, performance.now());
    __privateSet(this, _animationFrameId, requestAnimationFrame((t) => __privateMethod(this, _AnimationPreview_instances, loop_fn).call(this, t)));
    const playBtn = this.shadowRoot.querySelector(".play-btn");
    if (playBtn) {
      playBtn.innerHTML = ICONS.pause;
    }
    this.dispatchEvent(new CustomEvent("play"));
  }
  pause() {
    var _a;
    __privateSet(this, _isPlaying, false);
    (_a = __privateGet(this, _animation)) == null ? void 0 : _a.pause();
    if (__privateGet(this, _animationFrameId)) {
      cancelAnimationFrame(__privateGet(this, _animationFrameId));
      __privateSet(this, _animationFrameId, null);
    }
    const playBtn = this.shadowRoot.querySelector(".play-btn");
    if (playBtn) {
      playBtn.innerHTML = ICONS.start;
    }
    this.dispatchEvent(new CustomEvent("pause"));
  }
  stop() {
    var _a;
    this.pause();
    (_a = __privateGet(this, _animation)) == null ? void 0 : _a.stop();
    __privateSet(this, _sceneryOffset, 0);
    __privateMethod(this, _AnimationPreview_instances, updateSprite_fn).call(this);
    __privateMethod(this, _AnimationPreview_instances, render_fn).call(this);
    this.dispatchEvent(new CustomEvent("stop"));
  }
  get currentIndex() {
    var _a;
    return ((_a = __privateGet(this, _animation)) == null ? void 0 : _a.currentIndex) ?? 0;
  }
  get isPlaying() {
    return __privateGet(this, _isPlaying);
  }
  setCurrentIndex(index) {
    if (!__privateGet(this, _animation)) {
      return;
    }
    __privateGet(this, _animation).seekToFrame(index);
    __privateMethod(this, _AnimationPreview_instances, updateSprite_fn).call(this);
    __privateMethod(this, _AnimationPreview_instances, render_fn).call(this);
    this.dispatchEvent(new CustomEvent("frame", {
      detail: { index: __privateGet(this, _animation).currentIndex }
    }));
  }
}
_canvas2 = new WeakMap();
_previewArea = new WeakMap();
_renderer = new WeakMap();
_scene = new WeakMap();
_sprite = new WeakMap();
_animation = new WeakMap();
_animationFrameId = new WeakMap();
_lastTime = new WeakMap();
_isPlaying = new WeakMap();
_resizeObserver2 = new WeakMap();
_sceneryEnabled = new WeakMap();
_sceneryOffset = new WeakMap();
_sceneryCanvas = new WeakMap();
_sceneryCtx = new WeakMap();
_motion = new WeakMap();
_anchor = new WeakMap();
_noise = new WeakMap();
_AnimationPreview_instances = new WeakSet();
buildDOM_fn3 = function() {
  const style = document.createElement("style");
  style.textContent = STYLES;
  this.shadowRoot.appendChild(style);
  const container = document.createElement("div");
  container.className = "preview-container";
  __privateSet(this, _previewArea, document.createElement("div"));
  __privateGet(this, _previewArea).className = "preview-area";
  __privateSet(this, _sceneryCanvas, document.createElement("canvas"));
  __privateGet(this, _sceneryCanvas).className = "scenery-canvas";
  __privateSet(this, _sceneryCtx, __privateGet(this, _sceneryCanvas).getContext("2d"));
  __privateGet(this, _previewArea).appendChild(__privateGet(this, _sceneryCanvas));
  __privateSet(this, _canvas2, document.createElement("canvas"));
  __privateGet(this, _canvas2).className = "preview-canvas";
  __privateGet(this, _canvas2).width = 256;
  __privateGet(this, _canvas2).height = 256;
  __privateGet(this, _previewArea).appendChild(__privateGet(this, _canvas2));
  container.appendChild(__privateGet(this, _previewArea));
  const controls = document.createElement("div");
  controls.className = "preview-controls";
  const playBtn = document.createElement("button");
  playBtn.className = "play-btn";
  playBtn.innerHTML = ICONS.start;
  playBtn.addEventListener("click", () => __privateMethod(this, _AnimationPreview_instances, togglePlay_fn).call(this));
  const stopBtn = document.createElement("button");
  stopBtn.className = "stop-btn";
  stopBtn.innerHTML = ICONS.stop;
  stopBtn.addEventListener("click", () => this.stop());
  const settingsBtn = document.createElement("button");
  settingsBtn.className = "settings-btn";
  settingsBtn.innerHTML = ICONS.wrench;
  settingsBtn.addEventListener("click", () => __privateMethod(this, _AnimationPreview_instances, toggleSettings_fn).call(this));
  const sceneryBtn = document.createElement("button");
  sceneryBtn.className = "scenery-btn";
  sceneryBtn.innerHTML = ICONS.scenery;
  sceneryBtn.addEventListener("click", () => __privateMethod(this, _AnimationPreview_instances, toggleScenery_fn).call(this));
  controls.appendChild(playBtn);
  controls.appendChild(stopBtn);
  controls.appendChild(settingsBtn);
  controls.appendChild(sceneryBtn);
  container.appendChild(controls);
  this.shadowRoot.appendChild(container);
  __privateMethod(this, _AnimationPreview_instances, setupRenderer_fn).call(this);
  __privateMethod(this, _AnimationPreview_instances, setupResizeObserver_fn).call(this);
  __privateMethod(this, _AnimationPreview_instances, updateSceneryButton_fn).call(this);
};
toggleSettings_fn = function() {
  this.dispatchEvent(new CustomEvent("settingsrequest"));
};
toggleScenery_fn = function() {
  var _a, _b, _c;
  if (!((_a = __privateGet(this, _motion)) == null ? void 0 : _a.enabled)) {
    return;
  }
  __privateSet(this, _sceneryEnabled, !__privateGet(this, _sceneryEnabled));
  __privateSet(this, _sceneryOffset, 0);
  const sceneryBtn = this.shadowRoot.querySelector(".scenery-btn");
  if (sceneryBtn) {
    sceneryBtn.classList.toggle("active", __privateGet(this, _sceneryEnabled));
  }
  __privateMethod(this, _AnimationPreview_instances, updateSceneryCanvas_fn).call(this);
  __privateMethod(this, _AnimationPreview_instances, fitToContainer_fn).call(this, (_c = (_b = __privateGet(this, _animation)) == null ? void 0 : _b.currentFrame) == null ? void 0 : _c.region);
  __privateMethod(this, _AnimationPreview_instances, render_fn).call(this);
};
updateSceneryButton_fn = function() {
  var _a;
  const sceneryBtn = this.shadowRoot.querySelector(".scenery-btn");
  if (sceneryBtn) {
    sceneryBtn.classList.toggle("disabled", !((_a = __privateGet(this, _motion)) == null ? void 0 : _a.enabled));
  }
};
setupRenderer_fn = function() {
  __privateSet(this, _renderer, new WebGLRenderer({
    canvas: __privateGet(this, _canvas2),
    backgroundColor: "transparent",
    width: 256,
    height: 256
  }));
  __privateGet(this, _renderer).camera.setUnitsInView({ width: 256, height: 256 });
  __privateSet(this, _scene, new Object2D());
  __privateSet(this, _sprite, new Sprite({
    anchorX: 0.5,
    anchorY: 0.5
  }));
  __privateGet(this, _scene).add(__privateGet(this, _sprite));
};
updateSprite_fn = function() {
  if (!__privateGet(this, _sprite) || !__privateGet(this, _animation)) {
    return;
  }
  const frame = __privateGet(this, _animation).currentFrame;
  if (frame == null ? void 0 : frame.region) {
    __privateGet(this, _sprite).region = frame.region;
    __privateMethod(this, _AnimationPreview_instances, fitToContainer_fn).call(this, frame.region);
  }
};
setupResizeObserver_fn = function() {
  __privateSet(this, _resizeObserver2, new ResizeObserver(() => {
    __privateMethod(this, _AnimationPreview_instances, resizeCanvas_fn).call(this);
  }));
  __privateGet(this, _resizeObserver2).observe(__privateGet(this, _previewArea));
};
resizeCanvas_fn = function() {
  var _a, _b;
  if (!((_b = (_a = __privateGet(this, _animation)) == null ? void 0 : _a.currentFrame) == null ? void 0 : _b.region)) {
    return;
  }
  __privateMethod(this, _AnimationPreview_instances, fitToContainer_fn).call(this, __privateGet(this, _animation).currentFrame.region);
  __privateMethod(this, _AnimationPreview_instances, updateSceneryCanvas_fn).call(this);
  __privateMethod(this, _AnimationPreview_instances, render_fn).call(this);
};
fitToContainer_fn = function(region) {
  if (!region || !__privateGet(this, _renderer) || !__privateGet(this, _previewArea)) {
    return;
  }
  const padding = 32;
  const paddingBottom = 80;
  const containerWidth = __privateGet(this, _previewArea).clientWidth - padding * 2;
  const containerHeight = __privateGet(this, _previewArea).clientHeight - padding - paddingBottom;
  if (containerWidth <= 0 || containerHeight <= 0) {
    return;
  }
  const sceneryMargin = __privateGet(this, _sceneryEnabled) ? 0.7 : 1;
  const scaleX = containerWidth / region.width;
  const scaleY = containerHeight / region.height;
  const scale = Math.min(scaleX, scaleY, 1) * sceneryMargin;
  const canvasWidth = Math.max(1, Math.floor(region.width * scale));
  const canvasHeight = Math.max(1, Math.floor(region.height * scale));
  __privateGet(this, _renderer).displayWidth = canvasWidth;
  __privateGet(this, _renderer).displayHeight = canvasHeight;
  __privateGet(this, _renderer).applyPixelRatio();
  __privateGet(this, _renderer).camera.viewportWidth = canvasWidth;
  __privateGet(this, _renderer).camera.viewportHeight = canvasHeight;
  __privateGet(this, _renderer).camera.setUnitsInView({ width: region.width, height: region.height });
};
updateSceneryCanvas_fn = function() {
  if (!__privateGet(this, _sceneryCanvas) || !__privateGet(this, _previewArea)) {
    return;
  }
  const padding = 32;
  const paddingBottom = 80;
  const width = __privateGet(this, _previewArea).clientWidth - padding * 2;
  const height = __privateGet(this, _previewArea).clientHeight - padding - paddingBottom;
  if (width <= 0 || height <= 0) {
    return;
  }
  __privateGet(this, _sceneryCanvas).width = width;
  __privateGet(this, _sceneryCanvas).height = height;
  __privateGet(this, _sceneryCanvas).style.width = `${width}px`;
  __privateGet(this, _sceneryCanvas).style.height = `${height}px`;
};
togglePlay_fn = function() {
  if (__privateGet(this, _isPlaying)) {
    this.pause();
  } else {
    this.play();
  }
};
loop_fn = function(currentTime) {
  if (!__privateGet(this, _isPlaying)) {
    return;
  }
  const deltaTime = (currentTime - __privateGet(this, _lastTime)) / 1e3;
  __privateSet(this, _lastTime, currentTime);
  __privateGet(this, _animation).update(deltaTime);
  __privateMethod(this, _AnimationPreview_instances, updateScenery_fn).call(this, deltaTime);
  __privateMethod(this, _AnimationPreview_instances, updateSprite_fn).call(this);
  __privateMethod(this, _AnimationPreview_instances, render_fn).call(this);
  this.dispatchEvent(new CustomEvent("frame", {
    detail: { index: __privateGet(this, _animation).currentIndex }
  }));
  __privateSet(this, _animationFrameId, requestAnimationFrame((t) => __privateMethod(this, _AnimationPreview_instances, loop_fn).call(this, t)));
};
updateScenery_fn = function(deltaTime) {
  var _a;
  if (!__privateGet(this, _sceneryEnabled) || !((_a = __privateGet(this, _motion)) == null ? void 0 : _a.enabled)) {
    return;
  }
  const speed = (__privateGet(this, _motion).speed ?? 1) * 50;
  const direction = __privateMethod(this, _AnimationPreview_instances, getSceneryDirection_fn).call(this);
  __privateSet(this, _sceneryOffset, __privateGet(this, _sceneryOffset) + speed * deltaTime * direction);
  __privateMethod(this, _AnimationPreview_instances, renderScenery_fn).call(this);
};
getSceneryDirection_fn = function() {
  var _a;
  const dir = ((_a = __privateGet(this, _motion)) == null ? void 0 : _a.direction) || "e";
  const directionMap = {
    e: -1,
    w: 1,
    ne: -1,
    se: -1,
    nw: 1,
    sw: 1,
    n: 1,
    s: -1
  };
  return directionMap[dir] || -1;
};
renderScenery_fn = function() {
  var _a;
  if (!__privateGet(this, _sceneryCtx) || !__privateGet(this, _sceneryCanvas)) {
    return;
  }
  const ctx = __privateGet(this, _sceneryCtx);
  const width = __privateGet(this, _sceneryCanvas).width;
  const height = __privateGet(this, _sceneryCanvas).height;
  ctx.clearRect(0, 0, width, height);
  if (!__privateGet(this, _sceneryEnabled) || !((_a = __privateGet(this, _motion)) == null ? void 0 : _a.enabled)) {
    return;
  }
  const mode = __privateGet(this, _motion).mode || "sidescroller";
  if (mode === "sidescroller") {
    __privateMethod(this, _AnimationPreview_instances, renderSidescroller_fn).call(this, ctx, width, height);
  } else if (mode === "topdown") {
    __privateMethod(this, _AnimationPreview_instances, renderTopdown_fn).call(this, ctx, width, height);
  }
};
getSpriteSize_fn = function() {
  var _a, _b;
  const region = (_b = (_a = __privateGet(this, _animation)) == null ? void 0 : _a.currentFrame) == null ? void 0 : _b.region;
  if (!region || !__privateGet(this, _canvas2)) {
    return { width: 64, height: 64 };
  }
  const canvasRect = __privateGet(this, _canvas2).getBoundingClientRect();
  const scale = canvasRect.height / region.height;
  return {
    width: region.width * scale,
    height: region.height * scale
  };
};
renderSidescroller_fn = function(ctx, width, height) {
  const groundY = __privateMethod(this, _AnimationPreview_instances, getGroundY_fn).call(this, height);
  const spriteSize = __privateMethod(this, _AnimationPreview_instances, getSpriteSize_fn).call(this);
  __privateMethod(this, _AnimationPreview_instances, renderBuildings_fn).call(this, ctx, width, groundY, spriteSize);
  ctx.fillStyle = "rgba(100, 120, 140, 0.08)";
  ctx.fillRect(0, groundY, width, height - groundY);
  const unitSize = spriteSize.width * 0.2;
  ctx.strokeStyle = "rgba(150, 170, 190, 0.08)";
  ctx.lineWidth = 1;
  const startX = __privateGet(this, _sceneryOffset) % unitSize - unitSize;
  for (let x = startX; x < width + unitSize; x += unitSize) {
    ctx.beginPath();
    ctx.moveTo(x, groundY);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
  for (let y = groundY + unitSize; y < height; y += unitSize) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
  ctx.strokeStyle = "rgba(150, 170, 190, 0.25)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, groundY);
  ctx.lineTo(width, groundY);
  ctx.stroke();
  const firstUnit = Math.floor(-__privateGet(this, _sceneryOffset) / unitSize);
  for (let i = -1; i < Math.ceil(width / unitSize) + 2; i++) {
    const unit = firstUnit + i;
    const x = __privateGet(this, _sceneryOffset) % unitSize + i * unitSize;
    let poleHeight;
    if (unit % 10 === 0) {
      poleHeight = unitSize * 2;
      ctx.strokeStyle = "rgba(150, 170, 190, 0.2)";
      ctx.lineWidth = 2;
    } else if (unit % 5 === 0) {
      poleHeight = unitSize * 1.25;
      ctx.strokeStyle = "rgba(150, 170, 190, 0.15)";
      ctx.lineWidth = 1.5;
    } else {
      poleHeight = unitSize * 0.6;
      ctx.strokeStyle = "rgba(150, 170, 190, 0.1)";
      ctx.lineWidth = 1;
    }
    ctx.beginPath();
    ctx.moveTo(x, groundY);
    ctx.lineTo(x, groundY - poleHeight);
    ctx.stroke();
  }
};
renderBuildings_fn = function(ctx, width, groundY, spriteSize) {
  const baseHeight = spriteSize.height * 1.2;
  const baseWidth = spriteSize.width * 0.5;
  const gridSize = baseWidth * 0.8;
  const buildings = [];
  const minDepth = 0.3;
  const maxDepth = 1;
  const worldLeftSlow = -__privateGet(this, _sceneryOffset) * minDepth - width;
  const worldRightFast = -__privateGet(this, _sceneryOffset) * maxDepth + width * 2;
  const startSlot = Math.floor(Math.min(worldLeftSlow, worldRightFast) / gridSize) - 2;
  const endSlot = Math.ceil(Math.max(worldLeftSlow, worldRightFast) / gridSize) + 2;
  for (let slot = startSlot; slot <= endSlot; slot++) {
    const depthNoise = __privateGet(this, _noise).perlin2d(slot * 1.2, 0);
    const depth = minDepth + (depthNoise + 1) * 0.35;
    const offsetNoise = __privateGet(this, _noise).perlin2d(slot * 1.7, 100);
    const baseX = slot * gridSize + offsetNoise * gridSize * 0.4;
    const heightNoise = __privateGet(this, _noise).perlin2d(slot * 1.3, 200);
    const widthNoise = __privateGet(this, _noise).perlin2d(slot * 1.5, 300);
    const scale = 0.5 + depth * 0.5;
    const buildingHeight = baseHeight * (0.4 + (heightNoise + 1) * 0.4) * scale;
    const buildingWidth = baseWidth * (0.3 + (widthNoise + 1) * 0.35) * scale;
    const screenX = baseX + __privateGet(this, _sceneryOffset) * depth;
    if (screenX + buildingWidth / 2 > 0 && screenX - buildingWidth / 2 < width) {
      const color = new Color("#1a1a1e").lighten(depth * 8);
      buildings.push({ screenX, buildingWidth, buildingHeight, color: color.toHex(), depth });
    }
  }
  buildings.sort((a, b) => a.depth - b.depth);
  for (const b of buildings) {
    ctx.fillStyle = b.color;
    ctx.fillRect(
      b.screenX - b.buildingWidth / 2,
      groundY - b.buildingHeight,
      b.buildingWidth,
      b.buildingHeight
    );
  }
};
getGroundY_fn = function(sceneryHeight) {
  if (!__privateGet(this, _canvas2)) {
    return sceneryHeight - 20;
  }
  const canvasRect = __privateGet(this, _canvas2).getBoundingClientRect();
  const sceneryRect = __privateGet(this, _sceneryCanvas).getBoundingClientRect();
  const canvasTop = canvasRect.top - sceneryRect.top;
  const canvasHeight = canvasRect.height;
  const anchorY = __privateGet(this, _anchor).y;
  const groundY = canvasTop + canvasHeight * (1 - anchorY);
  return groundY;
};
renderTopdown_fn = function(ctx, width, height) {
  var _a;
  const lineSpacing = 40;
  const dir = ((_a = __privateGet(this, _motion)) == null ? void 0 : _a.direction) || "e";
  const offset = Math.abs(__privateGet(this, _sceneryOffset) % lineSpacing);
  const horizontal = ["e", "w", "ne", "nw", "se", "sw"].includes(dir);
  const vertical = ["n", "s", "ne", "nw", "se", "sw"].includes(dir);
  const dirX = ["w", "nw", "sw"].includes(dir) ? -1 : 1;
  const dirY = ["n", "ne", "nw"].includes(dir) ? -1 : 1;
  ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
  ctx.lineWidth = 1;
  const offsetX = horizontal ? offset * dirX : 0;
  const offsetY = vertical ? offset * dirY : 0;
  for (let y = -40 + offsetY; y < height + lineSpacing; y += lineSpacing) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
  for (let x = -40 + offsetX; x < width + lineSpacing; x += lineSpacing) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
};
render_fn = function() {
  if (!__privateGet(this, _renderer) || !__privateGet(this, _scene)) {
    return;
  }
  __privateMethod(this, _AnimationPreview_instances, renderScenery_fn).call(this);
  __privateGet(this, _renderer).render(__privateGet(this, _scene));
};
const STYLES = buildEditorStyles(
  editorBaseStyles,
  `
    :host {
        display: block;
        width: 100%;
        height: 100%;
    }

    .preview-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        position: relative;
    }

    .preview-area {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: var(--spacing-lg);
        background-color: var(--bg-tertiary);
        position: relative;
    }

    .scenery-canvas {
        position: absolute;
        pointer-events: none;
    }

    .preview-canvas {
        image-rendering: pixelated;
        image-rendering: crisp-edges;
        position: relative;
        z-index: 1;
    }

    .preview-controls {
        position: absolute;
        bottom: var(--spacing-md);
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: var(--spacing-xs);
        padding: var(--spacing-xs);
        background: var(--bg-secondary);
        border-radius: var(--radius-md);
        z-index: 10;
    }

    .preview-controls button {
        background: transparent;
        color: var(--fg-secondary);
        border: none;
        border-radius: var(--radius-sm);
        width: 36px;
        height: 36px;
        padding: 8px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.15s, color 0.15s;
    }

    .preview-controls button svg {
        width: 100%;
        height: 100%;
        fill: currentColor;
    }

    .preview-controls button:hover {
        background: var(--bg-hover);
        color: var(--fg-primary);
    }

    .preview-controls button:active {
        background: var(--accent);
        color: var(--bg-primary);
    }

    .preview-controls button.active {
        background: var(--accent);
        color: var(--bg-primary);
    }

    .preview-controls button.disabled {
        opacity: 0.4;
        cursor: not-allowed;
    }
`
);
customElements.define("animation-preview", AnimationPreview);
function setupInputStyles(shadowRoot, componentCSS = "") {
  const componentSheet = componentCSS ? createSheet(componentCSS) : null;
  if (componentSheet) {
    adoptStyles(shadowRoot, controlsSheet, componentSheet);
  } else {
    adoptStyles(shadowRoot, controlsSheet);
  }
  return componentSheet;
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
const SHIFT_MULTIPLIER = 10;
const CTRL_MULTIPLIER = 0.1;
const DRAG_SENSITIVITY = 0.5;
const numberInputCSS = `
    :host {
        display: inline-block;
    }

    .number-input-container {
        display: flex;
        align-items: center;
        gap: var(--spacing-xs);
        min-width: 0;
        background: transparent;
        padding: 0;
        height: var(--input-height);
    }

    .number-input-label {
        font-size: var(--font-size-sm);
        color: var(--fg-muted);
        cursor: ew-resize;
        user-select: none;
        -webkit-user-select: none;
        min-width: 10px;
        text-transform: lowercase;
        touch-action: none;
    }

    .number-input-label:hover {
        color: var(--accent);
    }

    .number-input-label.dragging {
        color: var(--accent);
    }

    .number-input-field {
        background: transparent;
        border: none;
        border-radius: 0;
        color: var(--fg-primary);
        font-size: var(--font-size-sm);
        font-family: var(--font-mono);
        width: 28px;
        text-align: right;
        padding: 0;
        height: auto;
    }

    .number-input-field:hover {
        background: transparent;
    }

    .number-input-field:focus {
        outline: none;
        border: none;
        background: transparent;
    }

    .number-input-steppers {
        display: flex;
        gap: 1px;
    }

    .number-input-stepper {
        background: transparent;
        border: none;
        color: var(--fg-muted);
        cursor: pointer;
        font-size: 7px;
        width: 14px;
        height: 18px;
        min-height: auto;
        min-width: auto;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background var(--transition-fast), color var(--transition-fast);
        border-radius: var(--radius-sm);
    }

    .number-input-stepper:hover {
        background: var(--bg-hover);
        color: var(--fg-primary);
    }

    .number-input-stepper:active {
        background: var(--accent);
        color: var(--bg-primary);
        transform: none;
    }


    :host([compact]) .number-input-container {
        background: transparent;
        border: none;
        padding: 0;
        height: auto;
        gap: 2px;
    }

    :host([compact]) .number-input-container:focus-within {
        border-color: transparent;
    }

    :host([compact]) .number-input-label {
        display: none;
    }

    :host([compact]) .number-input-field {
        text-align: center;
        padding: 2px 4px;
        color: var(--fg-muted);
        transition: color var(--transition-fast);
    }

    :host([compact]) .number-input-field:hover {
        color: var(--fg-secondary);
    }

    :host([compact]) .number-input-field:focus {
        color: var(--fg-primary);
    }

    :host([compact]) .number-input-steppers {
        flex-direction: column-reverse;
        gap: 0;
    }

    :host([compact]) .number-input-stepper {
        width: 12px;
        height: 10px;
        font-size: 0;
        border-radius: 2px;
    }

    :host([compact]) .number-input-stepper::after {
        font-size: 6px;
    }

    :host([compact]) .number-input-stepper:first-child {
        border-radius: 0 0 2px 2px;
    }

    :host([compact]) .number-input-stepper:first-child::after {
        content: '▼';
    }

    :host([compact]) .number-input-stepper:last-child {
        border-radius: 2px 2px 0 0;
    }

    :host([compact]) .number-input-stepper:last-child::after {
        content: '▲';
    }


    :host([context="studio"]) .number-input-container {
        height: var(--touch-target);
        padding: 0 var(--spacing-xs) 0 var(--spacing-md);
        border-radius: var(--radius-md);
    }

    :host([context="studio"]) .number-input-label {
        font-size: var(--font-size-md);
    }

    :host([context="studio"]) .number-input-field {
        font-size: var(--font-size-md);
        width: 36px;
    }

    :host([context="studio"]) .number-input-stepper {
        width: 28px;
        height: 32px;
        font-size: 12px;
    }
`;
class NumberInput extends HTMLElement {
  constructor() {
    super();
    __privateAdd(this, _NumberInput_instances);
    __privateAdd(this, _value, 0);
    __privateAdd(this, _step, 0.1);
    __privateAdd(this, _precision, 2);
    __privateAdd(this, _label, "");
    __privateAdd(this, _min, -Infinity);
    __privateAdd(this, _max, Infinity);
    __privateAdd(this, _input, null);
    __privateAdd(this, _labelEl, null);
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
      const delta = deltaX * DRAG_SENSITIVITY * __privateGet(this, _step) * multiplier;
      const newValue = __privateMethod(this, _NumberInput_instances, clamp_fn).call(this, __privateGet(this, _dragStartValue) + delta);
      if (__privateGet(this, _value) !== newValue) {
        __privateSet(this, _value, newValue);
        __privateMethod(this, _NumberInput_instances, updateDisplay_fn).call(this);
        emitChange(this, { value: __privateGet(this, _value) });
      }
    });
    __privateAdd(this, _onDragEnd, () => {
      __privateSet(this, _isDragging, false);
      if (__privateGet(this, _labelEl)) {
        __privateGet(this, _labelEl).classList.remove("dragging");
      }
      document.body.style.cursor = "";
      document.removeEventListener("pointermove", __privateGet(this, _onDragMove));
      document.removeEventListener("pointerup", __privateGet(this, _onDragEnd));
      document.removeEventListener("pointercancel", __privateGet(this, _onDragEnd));
    });
    this.attachShadow({ mode: "open" });
    setupInputStyles(this.shadowRoot, numberInputCSS);
    __privateMethod(this, _NumberInput_instances, buildDOM_fn4).call(this);
  }
  static get observedAttributes() {
    return ["value", "step", "precision", "label", "min", "max"];
  }
  connectedCallback() {
    __privateMethod(this, _NumberInput_instances, updateDisplay_fn).call(this);
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
    return __privateGet(this, _value);
  }
  set value(val) {
    const newValue = __privateMethod(this, _NumberInput_instances, clamp_fn).call(this, parseFloat(val) || 0);
    if (__privateGet(this, _value) !== newValue) {
      __privateSet(this, _value, newValue);
      __privateMethod(this, _NumberInput_instances, updateDisplay_fn).call(this);
    }
  }
  setValue(val) {
    __privateSet(this, _value, val);
    __privateMethod(this, _NumberInput_instances, updateDisplay_fn).call(this);
  }
  setStep(val) {
    __privateSet(this, _step, val);
  }
  setPrecision(val) {
    __privateSet(this, _precision, val);
    __privateMethod(this, _NumberInput_instances, updateDisplay_fn).call(this);
  }
  setLabel(val) {
    __privateSet(this, _label, val);
    if (__privateGet(this, _labelEl)) {
      __privateGet(this, _labelEl).textContent = __privateGet(this, _label);
    }
  }
  setMin(val) {
    __privateSet(this, _min, val);
  }
  setMax(val) {
    __privateSet(this, _max, val);
  }
  setCompact(val) {
    if (val) {
      this.setAttribute("compact", "");
    } else {
      this.removeAttribute("compact");
    }
  }
}
_value = new WeakMap();
_step = new WeakMap();
_precision = new WeakMap();
_label = new WeakMap();
_min = new WeakMap();
_max = new WeakMap();
_input = new WeakMap();
_labelEl = new WeakMap();
_decrementBtn = new WeakMap();
_incrementBtn = new WeakMap();
_isDragging = new WeakMap();
_dragStartX = new WeakMap();
_dragStartValue = new WeakMap();
_onDragMove = new WeakMap();
_onDragEnd = new WeakMap();
_NumberInput_instances = new WeakSet();
buildDOM_fn4 = function() {
  const container = document.createElement("div");
  container.className = "number-input-container";
  __privateSet(this, _labelEl, document.createElement("span"));
  __privateGet(this, _labelEl).className = "number-input-label";
  __privateGet(this, _labelEl).textContent = __privateGet(this, _label);
  __privateGet(this, _labelEl).addEventListener("pointerdown", (e) => __privateMethod(this, _NumberInput_instances, startDrag_fn).call(this, e));
  __privateSet(this, _input, document.createElement("input"));
  __privateGet(this, _input).className = "number-input-field";
  __privateGet(this, _input).type = "text";
  __privateGet(this, _input).inputMode = "decimal";
  __privateGet(this, _input).addEventListener("input", () => __privateMethod(this, _NumberInput_instances, handleInputChange_fn).call(this));
  __privateGet(this, _input).addEventListener("keydown", (e) => __privateMethod(this, _NumberInput_instances, handleKeyDown_fn).call(this, e));
  __privateGet(this, _input).addEventListener("blur", () => __privateMethod(this, _NumberInput_instances, handleBlur_fn).call(this));
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
  container.appendChild(__privateGet(this, _labelEl));
  container.appendChild(__privateGet(this, _input));
  container.appendChild(stepperContainer);
  this.shadowRoot.appendChild(container);
};
updateDisplay_fn = function() {
  if (__privateGet(this, _input) && !__privateGet(this, _input).matches(":focus")) {
    __privateGet(this, _input).value = __privateGet(this, _value).toFixed(__privateGet(this, _precision));
  }
};
handleInputChange_fn = function() {
  const parsed = parseFloat(__privateGet(this, _input).value);
  if (!isNaN(parsed)) {
    const clamped = __privateMethod(this, _NumberInput_instances, clamp_fn).call(this, parsed);
    if (__privateGet(this, _value) !== clamped) {
      __privateSet(this, _value, clamped);
      emitChange(this, { value: __privateGet(this, _value) });
    }
  }
};
handleBlur_fn = function() {
  const parsed = parseFloat(__privateGet(this, _input).value);
  if (isNaN(parsed)) {
    __privateMethod(this, _NumberInput_instances, updateDisplay_fn).call(this);
  } else {
    __privateSet(this, _value, __privateMethod(this, _NumberInput_instances, clamp_fn).call(this, parsed));
    __privateMethod(this, _NumberInput_instances, updateDisplay_fn).call(this);
  }
};
handleKeyDown_fn = function(event) {
  const multiplier = getMultiplier(event);
  const key = event.key;
  if (key === "ArrowUp") {
    event.preventDefault();
    __privateMethod(this, _NumberInput_instances, adjustValue_fn).call(this, __privateGet(this, _step) * multiplier);
  } else if (key === "ArrowDown") {
    event.preventDefault();
    __privateMethod(this, _NumberInput_instances, adjustValue_fn).call(this, -__privateGet(this, _step) * multiplier);
  } else if (key === "Enter") {
    event.preventDefault();
    __privateGet(this, _input).blur();
  } else if (key === "Escape") {
    event.preventDefault();
    __privateMethod(this, _NumberInput_instances, updateDisplay_fn).call(this);
    __privateGet(this, _input).blur();
  }
};
handleStep_fn = function(direction, event) {
  const multiplier = getMultiplier(event);
  __privateMethod(this, _NumberInput_instances, adjustValue_fn).call(this, direction * __privateGet(this, _step) * multiplier);
};
adjustValue_fn = function(delta) {
  const newValue = __privateMethod(this, _NumberInput_instances, clamp_fn).call(this, __privateGet(this, _value) + delta);
  if (__privateGet(this, _value) !== newValue) {
    __privateSet(this, _value, newValue);
    __privateMethod(this, _NumberInput_instances, updateDisplay_fn).call(this);
    emitChange(this, { value: __privateGet(this, _value) });
  }
};
clamp_fn = function(value) {
  return Math.max(__privateGet(this, _min), Math.min(__privateGet(this, _max), value));
};
startDrag_fn = function(event) {
  event.preventDefault();
  __privateSet(this, _isDragging, true);
  __privateSet(this, _dragStartX, event.clientX);
  __privateSet(this, _dragStartValue, __privateGet(this, _value));
  if (__privateGet(this, _labelEl)) {
    __privateGet(this, _labelEl).classList.add("dragging");
  }
  document.body.style.cursor = "ew-resize";
  document.addEventListener("pointermove", __privateGet(this, _onDragMove));
  document.addEventListener("pointerup", __privateGet(this, _onDragEnd));
  document.addEventListener("pointercancel", __privateGet(this, _onDragEnd));
};
function getMultiplier(event) {
  if (event.shiftKey) {
    return SHIFT_MULTIPLIER;
  }
  if (event.ctrlKey || event.metaKey) {
    return CTRL_MULTIPLIER;
  }
  return 1;
}
customElements.define("number-input", NumberInput);
const DRAG_TYPE_SPRITESHEET = "application/x-spritesheet-frame";
class AnimationTimeline extends BaseEditorComponent {
  constructor() {
    super(...arguments);
    __privateAdd(this, _AnimationTimeline_instances);
    __privateAdd(this, _wrapperEl, null);
    __privateAdd(this, _viewportEl, null);
    __privateAdd(this, _containerEl, null);
    __privateAdd(this, _scrubberEl, null);
    __privateAdd(this, _scrubberThumbEl, null);
    __privateAdd(this, _dropIndicator, null);
    __privateAdd(this, _frames, []);
    __privateAdd(this, _currentIndex, 0);
    __privateAdd(this, _selectedIndex, -1);
    __privateAdd(this, _dropIndex, -1);
    __privateAdd(this, _scrollLeft, 0);
    __privateAdd(this, _maxScroll, 0);
    __privateAdd(this, _scrubberDragging, false);
    __privateAdd(this, _scrubberStartX, 0);
    __privateAdd(this, _scrubberStartScroll, 0);
    __privateAdd(this, _internalDragActive, false);
    __privateAdd(this, _internalDragIndex, -1);
    __privateAdd(this, _internalDragGhost, null);
    __privateAdd(this, _internalDragStartX, 0);
    __privateAdd(this, _internalDragStartY, 0);
    __privateAdd(this, _isDragOutside, false);
    __privateAdd(this, _boundScrubberMove, null);
    __privateAdd(this, _boundScrubberUp, null);
    __privateAdd(this, _boundPointerMove, null);
    __privateAdd(this, _boundPointerUp, null);
  }
  connectedCallback() {
    __privateMethod(this, _AnimationTimeline_instances, buildDOM_fn5).call(this);
    this.tabIndex = 0;
    this.addEventListener("keydown", (e) => __privateMethod(this, _AnimationTimeline_instances, handleKeydown_fn).call(this, e));
    __privateMethod(this, _AnimationTimeline_instances, setupInternalDrag_fn).call(this);
    if (__privateGet(this, _frames).length > 0) {
      __privateMethod(this, _AnimationTimeline_instances, render_fn2).call(this);
    }
  }
  disconnectedCallback() {
    __privateMethod(this, _AnimationTimeline_instances, cleanupScrubberEvents_fn).call(this);
    __privateMethod(this, _AnimationTimeline_instances, cleanupInternalDrag_fn).call(this);
  }
  setFrames(frames) {
    __privateSet(this, _frames, frames);
    if (__privateGet(this, _containerEl)) {
      __privateMethod(this, _AnimationTimeline_instances, render_fn2).call(this);
    }
  }
  setCurrentIndex(index) {
    if (__privateGet(this, _currentIndex) === index) {
      return;
    }
    __privateSet(this, _currentIndex, index);
    __privateMethod(this, _AnimationTimeline_instances, updateHighlight_fn).call(this);
  }
  clearSelection() {
    if (__privateGet(this, _selectedIndex) !== -1) {
      __privateSet(this, _selectedIndex, -1);
      __privateMethod(this, _AnimationTimeline_instances, updateHighlight_fn).call(this);
      this.dispatchEvent(new CustomEvent("frameselect", {
        detail: { index: -1, frame: null }
      }));
    }
  }
  getSelectedIndex() {
    return __privateGet(this, _selectedIndex);
  }
  handleTouchDragOver(clientX) {
    __privateGet(this, _containerEl).classList.add("drag-over");
    __privateSet(this, _dropIndex, __privateMethod(this, _AnimationTimeline_instances, calculateDropIndex_fn).call(this, clientX));
    __privateMethod(this, _AnimationTimeline_instances, updateDropIndicator_fn).call(this);
  }
  handleTouchDrop(frameData) {
    __privateGet(this, _containerEl).classList.remove("drag-over");
    const insertIndex = __privateGet(this, _dropIndex);
    if (insertIndex >= 0) {
      __privateMethod(this, _AnimationTimeline_instances, handleSpritesheetDrop_fn).call(this, JSON.stringify(frameData));
      requestAnimationFrame(() => __privateMethod(this, _AnimationTimeline_instances, flashFrameAt_fn).call(this, insertIndex));
    }
    __privateMethod(this, _AnimationTimeline_instances, hideDropIndicator_fn).call(this);
  }
  handleTouchDragLeave() {
    __privateGet(this, _containerEl).classList.remove("drag-over");
    __privateMethod(this, _AnimationTimeline_instances, hideDropIndicator_fn).call(this);
  }
  flashMovedFrame(newIndex) {
    requestAnimationFrame(() => {
      const frameEls = __privateGet(this, _containerEl).querySelectorAll(".frame");
      const frameEl = frameEls[newIndex];
      if (!frameEl) {
        return;
      }
      frameEl.classList.add("just-moved");
      frameEl.addEventListener("animationend", () => {
        frameEl.classList.remove("just-moved");
      }, { once: true });
    });
  }
}
_wrapperEl = new WeakMap();
_viewportEl = new WeakMap();
_containerEl = new WeakMap();
_scrubberEl = new WeakMap();
_scrubberThumbEl = new WeakMap();
_dropIndicator = new WeakMap();
_frames = new WeakMap();
_currentIndex = new WeakMap();
_selectedIndex = new WeakMap();
_dropIndex = new WeakMap();
_scrollLeft = new WeakMap();
_maxScroll = new WeakMap();
_scrubberDragging = new WeakMap();
_scrubberStartX = new WeakMap();
_scrubberStartScroll = new WeakMap();
_internalDragActive = new WeakMap();
_internalDragIndex = new WeakMap();
_internalDragGhost = new WeakMap();
_internalDragStartX = new WeakMap();
_internalDragStartY = new WeakMap();
_isDragOutside = new WeakMap();
_AnimationTimeline_instances = new WeakSet();
buildDOM_fn5 = function() {
  adoptStyles(this.shadowRoot, timelineStyles);
  __privateSet(this, _wrapperEl, document.createElement("div"));
  __privateGet(this, _wrapperEl).className = "timeline-wrapper";
  __privateSet(this, _viewportEl, document.createElement("div"));
  __privateGet(this, _viewportEl).className = "timeline-viewport";
  __privateSet(this, _containerEl, document.createElement("div"));
  __privateGet(this, _containerEl).className = "timeline";
  __privateSet(this, _dropIndicator, document.createElement("div"));
  __privateGet(this, _dropIndicator).className = "drop-indicator";
  __privateGet(this, _containerEl).appendChild(__privateGet(this, _dropIndicator));
  __privateSet(this, _scrubberEl, document.createElement("div"));
  __privateGet(this, _scrubberEl).className = "scrubber hidden";
  __privateSet(this, _scrubberThumbEl, document.createElement("div"));
  __privateGet(this, _scrubberThumbEl).className = "scrubber-thumb";
  __privateGet(this, _scrubberEl).appendChild(__privateGet(this, _scrubberThumbEl));
  __privateMethod(this, _AnimationTimeline_instances, setupDropZone_fn).call(this);
  __privateMethod(this, _AnimationTimeline_instances, setupScrubber_fn).call(this);
  __privateMethod(this, _AnimationTimeline_instances, setupDeselect_fn).call(this);
  __privateGet(this, _viewportEl).appendChild(__privateGet(this, _containerEl));
  __privateGet(this, _wrapperEl).appendChild(__privateGet(this, _viewportEl));
  __privateGet(this, _wrapperEl).appendChild(__privateGet(this, _scrubberEl));
  this.shadowRoot.appendChild(__privateGet(this, _wrapperEl));
};
setupScrubber_fn = function() {
  __privateGet(this, _scrubberEl).addEventListener("pointerdown", (e) => __privateMethod(this, _AnimationTimeline_instances, onScrubberStart_fn).call(this, e));
  __privateSet(this, _boundScrubberMove, (e) => __privateMethod(this, _AnimationTimeline_instances, onScrubberMove_fn).call(this, e));
  __privateSet(this, _boundScrubberUp, () => __privateMethod(this, _AnimationTimeline_instances, onScrubberEnd_fn).call(this));
  document.addEventListener("pointermove", __privateGet(this, _boundScrubberMove));
  document.addEventListener("pointerup", __privateGet(this, _boundScrubberUp));
  document.addEventListener("pointercancel", __privateGet(this, _boundScrubberUp));
  __privateGet(this, _scrubberEl).addEventListener("click", (e) => __privateMethod(this, _AnimationTimeline_instances, onScrubberClick_fn).call(this, e));
};
_boundScrubberMove = new WeakMap();
_boundScrubberUp = new WeakMap();
cleanupScrubberEvents_fn = function() {
  if (__privateGet(this, _boundScrubberMove)) {
    document.removeEventListener("pointermove", __privateGet(this, _boundScrubberMove));
  }
  if (__privateGet(this, _boundScrubberUp)) {
    document.removeEventListener("pointerup", __privateGet(this, _boundScrubberUp));
    document.removeEventListener("pointercancel", __privateGet(this, _boundScrubberUp));
  }
};
_boundPointerMove = new WeakMap();
_boundPointerUp = new WeakMap();
setupInternalDrag_fn = function() {
  __privateSet(this, _boundPointerMove, (e) => __privateMethod(this, _AnimationTimeline_instances, onInternalDragMove_fn).call(this, e));
  __privateSet(this, _boundPointerUp, (e) => __privateMethod(this, _AnimationTimeline_instances, onInternalDragEnd_fn).call(this, e));
  document.addEventListener("pointermove", __privateGet(this, _boundPointerMove));
  document.addEventListener("pointerup", __privateGet(this, _boundPointerUp));
  document.addEventListener("pointercancel", __privateGet(this, _boundPointerUp));
};
cleanupInternalDrag_fn = function() {
  if (__privateGet(this, _boundPointerMove)) {
    document.removeEventListener("pointermove", __privateGet(this, _boundPointerMove));
  }
  if (__privateGet(this, _boundPointerUp)) {
    document.removeEventListener("pointerup", __privateGet(this, _boundPointerUp));
    document.removeEventListener("pointercancel", __privateGet(this, _boundPointerUp));
  }
  __privateMethod(this, _AnimationTimeline_instances, removeInternalDragGhost_fn).call(this);
};
onInternalDragStart_fn = function(e, index) {
  if (e.button !== 0) {
    return;
  }
  if (isInteractiveElement(e.target, e.currentTarget)) {
    return;
  }
  __privateSet(this, _internalDragIndex, index);
  __privateSet(this, _internalDragStartX, e.clientX);
  __privateSet(this, _internalDragStartY, e.clientY);
  __privateSet(this, _internalDragActive, false);
};
onInternalDragMove_fn = function(e) {
  if (__privateGet(this, _internalDragIndex) < 0) {
    return;
  }
  const dx = e.clientX - __privateGet(this, _internalDragStartX);
  const dy = e.clientY - __privateGet(this, _internalDragStartY);
  const distance = Math.sqrt(dx * dx + dy * dy);
  if (!__privateGet(this, _internalDragActive) && distance > 10) {
    __privateSet(this, _internalDragActive, true);
    __privateMethod(this, _AnimationTimeline_instances, createInternalDragGhost_fn).call(this, e.clientX, e.clientY);
    __privateMethod(this, _AnimationTimeline_instances, markFrameDragging_fn).call(this, __privateGet(this, _internalDragIndex), true);
    this.classList.add("dragging");
  }
  if (__privateGet(this, _internalDragActive)) {
    e.preventDefault();
    __privateMethod(this, _AnimationTimeline_instances, updateInternalDragGhost_fn).call(this, e.clientX, e.clientY);
    const isOutside = __privateMethod(this, _AnimationTimeline_instances, isPointerOutsideTimeline_fn).call(this, e.clientX, e.clientY);
    if (isOutside !== __privateGet(this, _isDragOutside)) {
      __privateSet(this, _isDragOutside, isOutside);
      __privateMethod(this, _AnimationTimeline_instances, updateDragGhostState_fn).call(this, isOutside);
    }
    if (isOutside) {
      __privateGet(this, _containerEl).classList.remove("drag-over");
      __privateMethod(this, _AnimationTimeline_instances, hideDropIndicator_fn).call(this);
    } else {
      __privateGet(this, _containerEl).classList.add("drag-over");
      __privateSet(this, _dropIndex, __privateMethod(this, _AnimationTimeline_instances, calculateDropIndex_fn).call(this, e.clientX));
      __privateMethod(this, _AnimationTimeline_instances, updateDropIndicator_fn).call(this);
    }
  }
};
isPointerOutsideTimeline_fn = function(clientX, clientY) {
  const rect = __privateGet(this, _viewportEl).getBoundingClientRect();
  const margin = 20;
  return clientY < rect.top - margin || clientY > rect.bottom + margin || clientX < rect.left - margin || clientX > rect.right + margin;
};
updateDragGhostState_fn = function(isOutside) {
  if (!__privateGet(this, _internalDragGhost)) {
    return;
  }
  const canvas = __privateGet(this, _internalDragGhost).querySelector("canvas");
  let deleteHint = __privateGet(this, _internalDragGhost).querySelector(".delete-hint");
  if (isOutside) {
    if (canvas) {
      canvas.style.filter = "grayscale(1) brightness(0.7)";
      canvas.style.boxShadow = "0 4px 12px rgba(255,59,48,0.5)";
    }
    if (!deleteHint) {
      deleteHint = document.createElement("div");
      deleteHint.className = "delete-hint";
      deleteHint.textContent = "Release to delete";
      deleteHint.style.cssText = `
                    position: absolute;
                    top: 100%;
                    left: 50%;
                    transform: translateX(-50%);
                    margin-top: 8px;
                    background: rgba(255, 59, 48, 0.9);
                    color: white;
                    font-size: 11px;
                    font-weight: 500;
                    padding: 4px 10px;
                    border-radius: 4px;
                    white-space: nowrap;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.3);
                `;
      __privateGet(this, _internalDragGhost).appendChild(deleteHint);
    }
  } else {
    if (canvas) {
      canvas.style.filter = "";
      canvas.style.boxShadow = "0 4px 12px rgba(0,0,0,0.4)";
    }
    if (deleteHint) {
      deleteHint.remove();
    }
  }
};
onInternalDragEnd_fn = function() {
  if (__privateGet(this, _internalDragIndex) < 0) {
    return;
  }
  if (__privateGet(this, _internalDragActive)) {
    const sourceIndex = __privateGet(this, _internalDragIndex);
    if (__privateGet(this, _isDragOutside)) {
      this.dispatchEvent(new CustomEvent("framedelete", {
        detail: { index: sourceIndex }
      }));
    } else {
      const targetIndex = __privateGet(this, _dropIndex);
      if (targetIndex >= 0 && sourceIndex !== targetIndex && sourceIndex !== targetIndex - 1) {
        this.dispatchEvent(new CustomEvent("framemove", {
          detail: {
            fromIndex: sourceIndex,
            toIndex: targetIndex
          }
        }));
      }
    }
    __privateMethod(this, _AnimationTimeline_instances, markFrameDragging_fn).call(this, __privateGet(this, _internalDragIndex), false);
    __privateMethod(this, _AnimationTimeline_instances, removeInternalDragGhost_fn).call(this);
    __privateGet(this, _containerEl).classList.remove("drag-over");
    __privateMethod(this, _AnimationTimeline_instances, hideDropIndicator_fn).call(this);
    this.classList.remove("dragging");
  }
  __privateSet(this, _internalDragIndex, -1);
  __privateSet(this, _internalDragActive, false);
  __privateSet(this, _isDragOutside, false);
};
markFrameDragging_fn = function(index, isDragging) {
  const frameEls = __privateGet(this, _containerEl).querySelectorAll(".frame");
  const frameEl = frameEls[index];
  if (frameEl) {
    frameEl.classList.toggle("dragging", isDragging);
  }
};
createInternalDragGhost_fn = function(x, y) {
  const frameEls = __privateGet(this, _containerEl).querySelectorAll(".frame");
  const frameEl = frameEls[__privateGet(this, _internalDragIndex)];
  if (!frameEl) {
    return;
  }
  const canvas = frameEl.querySelector("canvas");
  if (!canvas) {
    return;
  }
  __privateSet(this, _internalDragGhost, document.createElement("div"));
  __privateGet(this, _internalDragGhost).style.cssText = `
            position: fixed;
            pointer-events: none;
            z-index: 10000;
            opacity: 0.8;
            transform: translate(-50%, -50%) scale(0.9);
        `;
  const clonedCanvas = document.createElement("canvas");
  clonedCanvas.width = canvas.width;
  clonedCanvas.height = canvas.height;
  clonedCanvas.style.cssText = "border-radius: 4px; box-shadow: 0 4px 12px rgba(0,0,0,0.4);";
  clonedCanvas.getContext("2d").drawImage(canvas, 0, 0);
  __privateGet(this, _internalDragGhost).appendChild(clonedCanvas);
  document.body.appendChild(__privateGet(this, _internalDragGhost));
  __privateMethod(this, _AnimationTimeline_instances, updateInternalDragGhost_fn).call(this, x, y);
};
updateInternalDragGhost_fn = function(x, y) {
  if (__privateGet(this, _internalDragGhost)) {
    __privateGet(this, _internalDragGhost).style.left = `${x}px`;
    __privateGet(this, _internalDragGhost).style.top = `${y}px`;
  }
};
removeInternalDragGhost_fn = function() {
  if (__privateGet(this, _internalDragGhost)) {
    __privateGet(this, _internalDragGhost).remove();
    __privateSet(this, _internalDragGhost, null);
  }
};
onScrubberStart_fn = function(e) {
  if (e.target === __privateGet(this, _scrubberThumbEl)) {
    e.preventDefault();
    __privateSet(this, _scrubberDragging, true);
    __privateSet(this, _scrubberStartX, e.clientX);
    __privateSet(this, _scrubberStartScroll, __privateGet(this, _scrollLeft));
    __privateGet(this, _scrubberEl).classList.add("dragging");
  }
};
onScrubberMove_fn = function(e) {
  if (!__privateGet(this, _scrubberDragging)) {
    return;
  }
  e.preventDefault();
  __privateMethod(this, _AnimationTimeline_instances, updateScrollFromScrubber_fn).call(this, e.clientX);
};
updateScrollFromScrubber_fn = function(clientX) {
  const scrubberRect = __privateGet(this, _scrubberEl).getBoundingClientRect();
  const thumbWidth = __privateGet(this, _scrubberThumbEl).offsetWidth;
  const trackWidth = scrubberRect.width - thumbWidth;
  if (trackWidth <= 0) {
    return;
  }
  const deltaX = clientX - __privateGet(this, _scrubberStartX);
  const newScroll = __privateGet(this, _scrubberStartScroll) + deltaX / trackWidth * __privateGet(this, _maxScroll);
  __privateMethod(this, _AnimationTimeline_instances, setScrollLeft_fn).call(this, newScroll);
};
setScrollLeft_fn = function(value) {
  __privateSet(this, _scrollLeft, Math.max(0, Math.min(__privateGet(this, _maxScroll), value)));
  __privateGet(this, _containerEl).style.transform = `translateX(${-__privateGet(this, _scrollLeft)}px)`;
  __privateMethod(this, _AnimationTimeline_instances, updateScrubberThumb_fn).call(this);
};
onScrubberEnd_fn = function() {
  if (__privateGet(this, _scrubberDragging)) {
    __privateSet(this, _scrubberDragging, false);
    __privateGet(this, _scrubberEl).classList.remove("dragging");
  }
};
onScrubberClick_fn = function(e) {
  if (e.target === __privateGet(this, _scrubberThumbEl)) {
    return;
  }
  const scrubberRect = __privateGet(this, _scrubberEl).getBoundingClientRect();
  const thumbWidth = __privateGet(this, _scrubberThumbEl).offsetWidth;
  const clickX = e.clientX - scrubberRect.left - thumbWidth / 2;
  const trackWidth = scrubberRect.width - thumbWidth;
  const scrollRatio = Math.max(0, Math.min(1, clickX / trackWidth));
  __privateMethod(this, _AnimationTimeline_instances, setScrollLeft_fn).call(this, scrollRatio * __privateGet(this, _maxScroll));
};
updateScrubberThumb_fn = function() {
  const viewportWidth = __privateGet(this, _viewportEl).clientWidth;
  const contentWidth = __privateGet(this, _containerEl).scrollWidth;
  __privateSet(this, _maxScroll, Math.max(0, contentWidth - viewportWidth));
  if (__privateGet(this, _maxScroll) <= 1) {
    __privateGet(this, _scrubberEl).classList.add("hidden");
    return;
  }
  __privateGet(this, _scrubberEl).classList.remove("hidden");
  const scrubberWidth = __privateGet(this, _scrubberEl).clientWidth;
  if (scrubberWidth === 0) {
    return;
  }
  const thumbRatio = viewportWidth / contentWidth;
  const thumbWidth = Math.max(44, scrubberWidth * thumbRatio);
  const scrollRatio = __privateGet(this, _maxScroll) > 0 ? __privateGet(this, _scrollLeft) / __privateGet(this, _maxScroll) : 0;
  const thumbLeft = scrollRatio * (scrubberWidth - thumbWidth);
  __privateGet(this, _scrubberThumbEl).style.width = `${thumbWidth}px`;
  __privateGet(this, _scrubberThumbEl).style.left = `${thumbLeft}px`;
};
setupDeselect_fn = function() {
  __privateGet(this, _containerEl).addEventListener("click", (e) => {
    if (e.target === __privateGet(this, _containerEl)) {
      this.clearSelection();
    }
  });
};
setupDropZone_fn = function() {
  const handleDragOver = (e) => {
    if (!e.dataTransfer.types.includes(DRAG_TYPE_SPRITESHEET)) {
      return;
    }
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";
    __privateGet(this, _containerEl).classList.add("drag-over");
    __privateSet(this, _dropIndex, __privateMethod(this, _AnimationTimeline_instances, calculateDropIndex_fn).call(this, e.clientX));
    __privateMethod(this, _AnimationTimeline_instances, updateDropIndicator_fn).call(this);
  };
  const handleDragLeave = (e) => {
    const rect = __privateGet(this, _viewportEl).getBoundingClientRect();
    if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) {
      __privateGet(this, _containerEl).classList.remove("drag-over");
      __privateMethod(this, _AnimationTimeline_instances, hideDropIndicator_fn).call(this);
    }
  };
  const handleDrop = (e) => {
    e.preventDefault();
    __privateGet(this, _containerEl).classList.remove("drag-over");
    const spritesheetData = e.dataTransfer.getData(DRAG_TYPE_SPRITESHEET);
    if (spritesheetData) {
      __privateMethod(this, _AnimationTimeline_instances, handleSpritesheetDrop_fn).call(this, spritesheetData);
    }
    __privateMethod(this, _AnimationTimeline_instances, hideDropIndicator_fn).call(this);
  };
  __privateGet(this, _viewportEl).addEventListener("dragover", handleDragOver);
  __privateGet(this, _viewportEl).addEventListener("dragleave", handleDragLeave);
  __privateGet(this, _viewportEl).addEventListener("drop", handleDrop);
};
handleSpritesheetDrop_fn = function(data) {
  try {
    const frameData = JSON.parse(data);
    this.dispatchEvent(new CustomEvent("framedrop", {
      detail: {
        index: __privateGet(this, _dropIndex),
        frameName: frameData.name,
        regionData: frameData.regionData
      }
    }));
  } catch {
  }
};
calculateDropIndex_fn = function(clientX) {
  const frameEls = __privateGet(this, _containerEl).querySelectorAll(".frame");
  if (frameEls.length === 0) {
    return 0;
  }
  for (let i = 0; i < frameEls.length; i++) {
    const rect = frameEls[i].getBoundingClientRect();
    const midpoint = rect.left + rect.width / 2;
    if (clientX < midpoint) {
      return i;
    }
  }
  return frameEls.length;
};
updateDropIndicator_fn = function() {
  const frameEls = __privateGet(this, _containerEl).querySelectorAll(".frame");
  __privateGet(this, _dropIndicator).classList.add("visible");
  if (frameEls.length === 0 || __privateGet(this, _dropIndex) === 0) {
    __privateGet(this, _dropIndicator).style.left = "0px";
    return;
  }
  if (__privateGet(this, _dropIndex) >= frameEls.length) {
    const lastFrame = frameEls[frameEls.length - 1];
    const containerRect2 = __privateGet(this, _containerEl).getBoundingClientRect();
    const frameRect2 = lastFrame.getBoundingClientRect();
    __privateGet(this, _dropIndicator).style.left = `${frameRect2.right - containerRect2.left + __privateGet(this, _scrollLeft) + 2}px`;
    return;
  }
  const targetFrame = frameEls[__privateGet(this, _dropIndex)];
  const containerRect = __privateGet(this, _containerEl).getBoundingClientRect();
  const frameRect = targetFrame.getBoundingClientRect();
  __privateGet(this, _dropIndicator).style.left = `${frameRect.left - containerRect.left + __privateGet(this, _scrollLeft) - 2}px`;
};
hideDropIndicator_fn = function() {
  __privateGet(this, _dropIndicator).classList.remove("visible");
  __privateSet(this, _dropIndex, -1);
};
render_fn2 = function() {
  __privateGet(this, _containerEl).innerHTML = "";
  __privateSet(this, _dropIndicator, document.createElement("div"));
  __privateGet(this, _dropIndicator).className = "drop-indicator";
  __privateGet(this, _containerEl).appendChild(__privateGet(this, _dropIndicator));
  for (let i = 0; i < __privateGet(this, _frames).length; i++) {
    const frame = __privateGet(this, _frames)[i];
    const frameEl = __privateMethod(this, _AnimationTimeline_instances, createFrameElement_fn).call(this, frame, i);
    __privateGet(this, _containerEl).appendChild(frameEl);
  }
  __privateGet(this, _containerEl).appendChild(__privateMethod(this, _AnimationTimeline_instances, createAddButton_fn).call(this));
  __privateMethod(this, _AnimationTimeline_instances, updateHighlight_fn).call(this);
  requestAnimationFrame(() => __privateMethod(this, _AnimationTimeline_instances, updateScrubberThumb_fn).call(this));
};
createAddButton_fn = function() {
  const addBtn = document.createElement("button");
  addBtn.className = "add-frame-btn";
  addBtn.innerHTML = "+";
  addBtn.title = "Add frames";
  addBtn.addEventListener("click", () => {
    this.dispatchEvent(new CustomEvent("addrequest", { bubbles: true }));
  });
  return addBtn;
};
createFrameElement_fn = function(frame, index) {
  const frameEl = document.createElement("div");
  frameEl.className = "frame";
  frameEl.dataset.index = index;
  const thumbnailWrapper = document.createElement("div");
  thumbnailWrapper.className = "frame-thumbnail-wrapper";
  const canvas = document.createElement("canvas");
  canvas.className = "frame-thumbnail";
  canvas.width = 80;
  canvas.height = 80;
  drawFrameThumbnail$1(canvas, frame);
  thumbnailWrapper.appendChild(canvas);
  const indexEl = document.createElement("div");
  indexEl.className = "frame-index";
  indexEl.textContent = index;
  thumbnailWrapper.appendChild(indexEl);
  const duration = frame.duration || 1;
  if (duration !== 1) {
    const durationBadge = document.createElement("div");
    durationBadge.className = "frame-duration-badge";
    const displayDuration = Number.isInteger(duration) ? duration : duration.toFixed(1);
    durationBadge.textContent = `${displayDuration}×`;
    thumbnailWrapper.appendChild(durationBadge);
  }
  if (frame.events && frame.events.length > 0) {
    const eventBadge = document.createElement("div");
    eventBadge.className = "frame-event-badge";
    eventBadge.title = frame.events.join(", ");
    thumbnailWrapper.appendChild(eventBadge);
  }
  frameEl.appendChild(thumbnailWrapper);
  frameEl.addEventListener("click", () => {
    if (__privateGet(this, _internalDragActive)) {
      return;
    }
    __privateMethod(this, _AnimationTimeline_instances, handleFrameTap_fn).call(this, index);
  });
  frameEl.addEventListener("pointerdown", (e) => __privateMethod(this, _AnimationTimeline_instances, onInternalDragStart_fn).call(this, e, index));
  return frameEl;
};
updateHighlight_fn = function() {
  const frameEls = __privateGet(this, _containerEl).querySelectorAll(".frame");
  frameEls.forEach((el, i) => {
    el.classList.toggle("current", i === __privateGet(this, _currentIndex));
    el.classList.toggle("selected", i === __privateGet(this, _selectedIndex));
  });
};
handleFrameTap_fn = function(index) {
  if (__privateGet(this, _selectedIndex) === index) {
    __privateSet(this, _selectedIndex, -1);
  } else {
    __privateSet(this, _selectedIndex, index);
  }
  __privateMethod(this, _AnimationTimeline_instances, updateHighlight_fn).call(this);
  this.dispatchEvent(new CustomEvent("frameselect", {
    detail: {
      index: __privateGet(this, _selectedIndex),
      frame: __privateGet(this, _selectedIndex) >= 0 ? __privateGet(this, _frames)[__privateGet(this, _selectedIndex)] : null
    }
  }));
};
dispatchDeleteEvent_fn = function(index) {
  this.dispatchEvent(new CustomEvent("framedelete", {
    detail: { index }
  }));
};
handleKeydown_fn = function(e) {
  if (e.key === "Delete" || e.key === "Backspace") {
    if (__privateGet(this, _currentIndex) >= 0 && __privateGet(this, _currentIndex) < __privateGet(this, _frames).length) {
      e.preventDefault();
      __privateMethod(this, _AnimationTimeline_instances, dispatchDeleteEvent_fn).call(this, __privateGet(this, _currentIndex));
    }
  }
};
flashFrameAt_fn = function(index) {
  const frameEls = __privateGet(this, _containerEl).querySelectorAll(".frame");
  const frameEl = frameEls[index];
  if (!frameEl) {
    return;
  }
  frameEl.classList.add("just-added");
  frameEl.addEventListener("animationend", () => {
    frameEl.classList.remove("just-added");
  }, { once: true });
  for (let i = index + 1; i < frameEls.length; i++) {
    const el = frameEls[i];
    el.classList.add("pushed-right");
    el.addEventListener("animationend", () => {
      el.classList.remove("pushed-right");
    }, { once: true });
  }
};
function isInteractiveElement(el, stopAt) {
  var _a;
  const interactiveTags = ["button", "number-input", "input"];
  while (el && el !== stopAt) {
    if (interactiveTags.includes((_a = el.tagName) == null ? void 0 : _a.toLowerCase())) {
      return true;
    }
    el = el.parentElement;
  }
  return false;
}
function drawFrameThumbnail$1(canvas, frame) {
  const ctx = canvas.getContext("2d");
  const region = frame.region;
  if (!region || !region.image) {
    ctx.fillStyle = "#333";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#666";
    ctx.font = "10px monospace";
    ctx.textAlign = "center";
    ctx.fillText("?", canvas.width / 2, canvas.height / 2 + 3);
    return;
  }
  const scale = Math.min(
    canvas.width / region.width,
    canvas.height / region.height
  );
  const w = region.width * scale;
  const h = region.height * scale;
  const x = (canvas.width - w) / 2;
  const y = (canvas.height - h) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    region.image,
    region.x,
    region.y,
    region.width,
    region.height,
    x,
    y,
    w,
    h
  );
}
const timelineStyles = createSheet(`
    :host {
        display: block;
        height: fit-content;
    }

    :host(.dragging) {
        user-select: none;
    }

    .timeline-wrapper {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-md);
    }

    .timeline-viewport {
        overflow: hidden;
        flex-shrink: 0;
    }

    .timeline {
        display: flex;
        gap: var(--spacing-sm);
        padding: var(--spacing-sm) 0;
        position: relative;
        width: fit-content;
        min-width: 100%;
        will-change: transform;
    }

    .scrubber {
        position: relative;
        height: 28px;
        background: var(--bg-tertiary);
        border-radius: var(--radius-lg);
        cursor: pointer;
        touch-action: none;
        flex-shrink: 0;
    }

    .scrubber.hidden {
        display: none !important;
    }

    .scrubber-thumb {
        position: absolute;
        top: 3px;
        bottom: 3px;
        min-width: 48px;
        background: var(--bg-hover);
        border-radius: var(--radius-md);
        cursor: grab;
        transition: background 0.2s ease;
    }

    .scrubber-thumb:hover,
    .scrubber.dragging .scrubber-thumb {
        background: var(--accent);
    }

    .scrubber.dragging .scrubber-thumb {
        cursor: grabbing;
    }

    .frame {
        position: relative;
        padding: var(--spacing-xs);
        background: var(--bg-tertiary);
        border-radius: var(--radius-md);
        flex-shrink: 0;
        cursor: grab;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .frame:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }

    .frame:active {
        cursor: grabbing;
        transform: scale(0.98);
    }

    .frame.current {
        background: var(--bg-selected);
    }

    .frame.selected {
        outline: 2px solid var(--fg-primary);
        outline-offset: -2px;
    }

    .frame.dragging {
        opacity: 0.4;
        transform: scale(0.95);
        pointer-events: none;
    }

    .frame.just-added {
        animation: frame-added 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    @keyframes frame-added {
        0% {
            transform: scale(0.5);
            opacity: 0;
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }

    .frame.just-moved {
        animation: frame-moved 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    @keyframes frame-moved {
        0% {
            transform: scale(1.15);
        }
        100% {
            transform: scale(1);
        }
    }

    .frame.pushed-right {
        animation: pushed-right 0.3s ease-out;
    }

    @keyframes pushed-right {
        0% {
            transform: translateX(-16px);
        }
        100% {
            transform: translateX(0);
        }
    }

    .frame-thumbnail-wrapper {
        position: relative;
        border-radius: var(--radius-sm);
        overflow: hidden;
    }

    .frame-thumbnail {
        display: block;
        background: var(--bg-secondary);
    }

    .frame-index {
        position: absolute;
        top: 4px;
        left: 4px;
        font-size: 10px;
        font-weight: 500;
        color: var(--fg-muted);
        line-height: 1;
    }

    .frame-duration-badge {
        position: absolute;
        bottom: 4px;
        right: 4px;
        font-size: 10px;
        font-weight: 500;
        color: var(--fg-muted);
        line-height: 1;
    }

    .frame-event-badge {
        position: absolute;
        top: 6px;
        left: 18px;
        width: 5px;
        height: 5px;
        background: var(--status-warning, #ffc107);
        border-radius: 50%;
        cursor: help;
    }

    .drop-indicator {
        position: absolute;
        top: var(--spacing-sm);
        bottom: var(--spacing-sm);
        width: 3px;
        background: var(--accent);
        border-radius: 2px;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.15s, left 0.15s;
        z-index: 10;
        box-shadow: 0 0 8px var(--accent);
    }

    .drop-indicator.visible {
        opacity: 1;
    }

    .add-frame-btn {
        appearance: none;
        background: var(--bg-tertiary);
        border: 2px dashed var(--border);
        border-radius: var(--radius-md);
        color: var(--fg-muted);
        font-size: 24px;
        font-weight: 300;
        width: 80px;
        height: 80px;
        margin: var(--spacing-xs);
        cursor: pointer;
        transition: background var(--transition-fast), border-color var(--transition-fast), color var(--transition-fast), transform 0.1s;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .add-frame-btn:hover {
        background: var(--bg-hover);
        border-color: var(--accent);
        color: var(--accent);
    }

    .add-frame-btn:active {
        transform: scale(0.95);
    }

    .hidden {
        display: none !important;
    }
`);
customElements.define("animation-timeline", AnimationTimeline);
const ANIMATION_COLORS = [
  "rgba(99, 102, 241, 0.15)",
  "rgba(236, 72, 153, 0.15)",
  "rgba(34, 197, 94, 0.15)",
  "rgba(249, 115, 22, 0.15)",
  "rgba(14, 165, 233, 0.15)",
  "rgba(168, 85, 247, 0.15)",
  "rgba(234, 179, 8, 0.15)",
  "rgba(20, 184, 166, 0.15)"
];
class SpritesheetViewer extends BaseEditorComponent {
  constructor() {
    super(...arguments);
    __privateAdd(this, _SpritesheetViewer_instances);
    __privateAdd(this, _containerEl2, null);
    __privateAdd(this, _filterEl, null);
    __privateAdd(this, _gridEl, null);
    __privateAdd(this, _spritesheet, null);
    __privateAdd(this, _filter, null);
    __privateAdd(this, _animationColorMap, /* @__PURE__ */ new Map());
    __privateAdd(this, _dragData, null);
    __privateAdd(this, _dragGhost, null);
    __privateAdd(this, _dragStartPos, null);
    __privateAdd(this, _dragStartEl, null);
    __privateAdd(this, _lastTimeline, null);
    __privateAdd(this, _boundPointerMove2, null);
    __privateAdd(this, _boundPointerEnd, null);
  }
  connectedCallback() {
    __privateMethod(this, _SpritesheetViewer_instances, buildDOM_fn6).call(this);
    __privateMethod(this, _SpritesheetViewer_instances, setupPointerDrag_fn).call(this);
    if (__privateGet(this, _spritesheet)) {
      __privateMethod(this, _SpritesheetViewer_instances, renderFilter_fn).call(this);
      __privateMethod(this, _SpritesheetViewer_instances, renderGrid_fn).call(this);
    }
  }
  disconnectedCallback() {
    __privateMethod(this, _SpritesheetViewer_instances, cleanupPointerDrag_fn).call(this);
  }
  setSpritesheet(spritesheet) {
    __privateSet(this, _spritesheet, spritesheet);
    __privateSet(this, _filter, null);
    __privateMethod(this, _SpritesheetViewer_instances, buildAnimationColorMap_fn).call(this);
    if (__privateGet(this, _filterEl)) {
      __privateMethod(this, _SpritesheetViewer_instances, renderFilter_fn).call(this);
      __privateMethod(this, _SpritesheetViewer_instances, renderGrid_fn).call(this);
    }
  }
}
_containerEl2 = new WeakMap();
_filterEl = new WeakMap();
_gridEl = new WeakMap();
_spritesheet = new WeakMap();
_filter = new WeakMap();
_animationColorMap = new WeakMap();
_dragData = new WeakMap();
_dragGhost = new WeakMap();
_dragStartPos = new WeakMap();
_dragStartEl = new WeakMap();
_lastTimeline = new WeakMap();
_SpritesheetViewer_instances = new WeakSet();
buildDOM_fn6 = function() {
  adoptStyles(this.shadowRoot, viewerStyles);
  __privateSet(this, _containerEl2, document.createElement("div"));
  __privateGet(this, _containerEl2).className = "viewer-container";
  __privateSet(this, _filterEl, document.createElement("select"));
  __privateGet(this, _filterEl).className = "filter-select";
  __privateGet(this, _filterEl).addEventListener("change", (e) => {
    __privateSet(this, _filter, e.target.value || null);
    __privateMethod(this, _SpritesheetViewer_instances, renderGrid_fn).call(this);
  });
  __privateSet(this, _gridEl, document.createElement("div"));
  __privateGet(this, _gridEl).className = "frame-grid";
  __privateGet(this, _containerEl2).appendChild(__privateGet(this, _filterEl));
  __privateGet(this, _containerEl2).appendChild(__privateGet(this, _gridEl));
  this.shadowRoot.appendChild(__privateGet(this, _containerEl2));
};
buildAnimationColorMap_fn = function() {
  __privateGet(this, _animationColorMap).clear();
  if (!__privateGet(this, _spritesheet)) {
    return;
  }
  const animations = __privateGet(this, _spritesheet).listAnimations();
  animations.forEach((name, index) => {
    __privateGet(this, _animationColorMap).set(name, ANIMATION_COLORS[index % ANIMATION_COLORS.length]);
  });
};
renderFilter_fn = function() {
  __privateGet(this, _filterEl).innerHTML = "";
  const allOption = document.createElement("option");
  allOption.value = "";
  allOption.textContent = "All frames";
  __privateGet(this, _filterEl).appendChild(allOption);
  if (!__privateGet(this, _spritesheet)) {
    return;
  }
  const animations = __privateGet(this, _spritesheet).listAnimations();
  for (const name of animations) {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    __privateGet(this, _filterEl).appendChild(option);
  }
};
renderGrid_fn = function() {
  __privateGet(this, _gridEl).innerHTML = "";
  if (!__privateGet(this, _spritesheet)) {
    return;
  }
  const frames = __privateMethod(this, _SpritesheetViewer_instances, getFilteredFrames_fn).call(this);
  for (const [name, frameData] of frames) {
    const frameEl = __privateMethod(this, _SpritesheetViewer_instances, createFrameElement_fn2).call(this, name, frameData);
    __privateGet(this, _gridEl).appendChild(frameEl);
  }
};
getFilteredFrames_fn = function() {
  if (!__privateGet(this, _spritesheet)) {
    return [];
  }
  const allFrames = __privateGet(this, _spritesheet).framesMap;
  if (!__privateGet(this, _filter)) {
    return Array.from(allFrames.entries());
  }
  const animationFrameNames = __privateGet(this, _spritesheet).getAnimation(__privateGet(this, _filter));
  if (!animationFrameNames) {
    return [];
  }
  return animationFrameNames.map((name) => [name, allFrames.get(name)]).filter(([, data]) => data);
};
createFrameElement_fn2 = function(name, frameData) {
  const frameEl = document.createElement("div");
  frameEl.className = "frame";
  frameEl.dataset.name = name;
  frameEl.draggable = true;
  frameEl.title = name;
  const animPrefix = getAnimationPrefix(name);
  if (animPrefix && __privateGet(this, _animationColorMap).has(animPrefix)) {
    frameEl.style.background = __privateGet(this, _animationColorMap).get(animPrefix);
  }
  const canvas = document.createElement("canvas");
  canvas.className = "frame-thumbnail";
  canvas.width = 100;
  canvas.height = 100;
  drawFrameThumbnail(canvas, frameData.region);
  frameEl.appendChild(canvas);
  const nameEl = document.createElement("div");
  nameEl.className = "frame-name";
  nameEl.textContent = name;
  frameEl.appendChild(nameEl);
  frameEl.addEventListener("click", () => {
    this.dispatchEvent(new CustomEvent("frameclick", {
      detail: { name, region: frameData.region, frameData }
    }));
  });
  frameEl.addEventListener("dragstart", (e) => {
    var _a, _b, _c, _d;
    e.dataTransfer.setData("application/x-spritesheet-frame", JSON.stringify({
      name,
      regionData: {
        x: (_a = frameData.region) == null ? void 0 : _a.x,
        y: (_b = frameData.region) == null ? void 0 : _b.y,
        width: (_c = frameData.region) == null ? void 0 : _c.width,
        height: (_d = frameData.region) == null ? void 0 : _d.height
      }
    }));
    e.dataTransfer.effectAllowed = "copy";
    frameEl.classList.add("dragging");
  });
  frameEl.addEventListener("dragend", () => {
    frameEl.classList.remove("dragging");
  });
  return frameEl;
};
setupPointerDrag_fn = function() {
  this.addEventListener("pointerdown", (e) => __privateMethod(this, _SpritesheetViewer_instances, onPointerStart_fn).call(this, e));
  __privateSet(this, _boundPointerMove2, (e) => __privateMethod(this, _SpritesheetViewer_instances, onPointerMove_fn).call(this, e));
  __privateSet(this, _boundPointerEnd, (e) => __privateMethod(this, _SpritesheetViewer_instances, onPointerEnd_fn).call(this, e));
  document.addEventListener("pointermove", __privateGet(this, _boundPointerMove2));
  document.addEventListener("pointerup", __privateGet(this, _boundPointerEnd));
  document.addEventListener("pointercancel", __privateGet(this, _boundPointerEnd));
};
_boundPointerMove2 = new WeakMap();
_boundPointerEnd = new WeakMap();
cleanupPointerDrag_fn = function() {
  if (__privateGet(this, _boundPointerMove2)) {
    document.removeEventListener("pointermove", __privateGet(this, _boundPointerMove2));
  }
  if (__privateGet(this, _boundPointerEnd)) {
    document.removeEventListener("pointerup", __privateGet(this, _boundPointerEnd));
    document.removeEventListener("pointercancel", __privateGet(this, _boundPointerEnd));
  }
  __privateMethod(this, _SpritesheetViewer_instances, removeDragGhost_fn).call(this);
};
onPointerStart_fn = function(e) {
  var _a;
  if (e.pointerType === "mouse") {
    return;
  }
  const target = e.composedPath()[0];
  const frameEl = ((_a = target.closest) == null ? void 0 : _a.call(target, ".frame")) || __privateMethod(this, _SpritesheetViewer_instances, findFrameFromPoint_fn).call(this, e.clientX, e.clientY);
  if (!frameEl) {
    return;
  }
  __privateSet(this, _dragStartPos, { x: e.clientX, y: e.clientY });
  __privateSet(this, _dragStartEl, frameEl);
  __privateSet(this, _dragData, null);
};
findFrameFromPoint_fn = function(x, y) {
  var _a;
  const elements = this.shadowRoot.elementsFromPoint(x, y);
  for (const el of elements) {
    if ((_a = el.classList) == null ? void 0 : _a.contains("frame")) {
      return el;
    }
  }
  return null;
};
onPointerMove_fn = function(e) {
  if (!__privateGet(this, _dragStartEl)) {
    return;
  }
  if (e.pointerType === "mouse") {
    return;
  }
  const dx = e.clientX - __privateGet(this, _dragStartPos).x;
  const dy = e.clientY - __privateGet(this, _dragStartPos).y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  if (!__privateGet(this, _dragData) && distance > 10) {
    e.preventDefault();
    __privateMethod(this, _SpritesheetViewer_instances, startDrag_fn2).call(this, e.clientX, e.clientY);
  }
  if (__privateGet(this, _dragData)) {
    e.preventDefault();
    __privateMethod(this, _SpritesheetViewer_instances, updateDragGhost_fn).call(this, e.clientX, e.clientY);
    const timeline = findTimeline(e.clientX, e.clientY);
    if (timeline) {
      timeline.handleTouchDragOver(e.clientX);
    } else if (__privateGet(this, _lastTimeline)) {
      __privateGet(this, _lastTimeline).handleTouchDragLeave();
      __privateSet(this, _lastTimeline, null);
    }
    __privateSet(this, _lastTimeline, timeline);
  }
};
onPointerEnd_fn = function(e) {
  var _a;
  if (!__privateGet(this, _dragStartEl)) {
    return;
  }
  if (e.pointerType === "mouse") {
    return;
  }
  if (__privateGet(this, _dragData)) {
    const timeline = findTimeline(e.clientX, e.clientY);
    if (timeline) {
      timeline.handleTouchDrop(__privateGet(this, _dragData));
    } else if (__privateGet(this, _lastTimeline)) {
      __privateGet(this, _lastTimeline).handleTouchDragLeave();
    }
    (_a = __privateGet(this, _dragStartEl)) == null ? void 0 : _a.classList.remove("dragging");
    __privateMethod(this, _SpritesheetViewer_instances, removeDragGhost_fn).call(this);
  }
  __privateSet(this, _dragStartPos, null);
  __privateSet(this, _dragStartEl, null);
  __privateSet(this, _dragData, null);
  __privateSet(this, _lastTimeline, null);
};
startDrag_fn2 = function(x, y) {
  var _a, _b, _c, _d, _e;
  const frameEl = __privateGet(this, _dragStartEl);
  const name = frameEl.dataset.name;
  const frameData = (_a = __privateGet(this, _spritesheet)) == null ? void 0 : _a.framesMap.get(name);
  if (!frameData) {
    return;
  }
  __privateSet(this, _dragData, {
    name,
    regionData: {
      x: (_b = frameData.region) == null ? void 0 : _b.x,
      y: (_c = frameData.region) == null ? void 0 : _c.y,
      width: (_d = frameData.region) == null ? void 0 : _d.width,
      height: (_e = frameData.region) == null ? void 0 : _e.height
    }
  });
  frameEl.classList.add("dragging");
  __privateMethod(this, _SpritesheetViewer_instances, createDragGhost_fn).call(this, frameEl, x, y);
};
createDragGhost_fn = function(frameEl, x, y) {
  const canvas = frameEl.querySelector("canvas");
  if (!canvas) {
    return;
  }
  __privateSet(this, _dragGhost, document.createElement("div"));
  __privateGet(this, _dragGhost).className = "drag-ghost";
  __privateGet(this, _dragGhost).style.cssText = `
            position: fixed;
            pointer-events: none;
            z-index: 10000;
            opacity: 0.8;
            transform: translate(-50%, -50%) scale(0.8);
        `;
  const clonedCanvas = document.createElement("canvas");
  clonedCanvas.width = canvas.width;
  clonedCanvas.height = canvas.height;
  clonedCanvas.style.cssText = "border-radius: 4px; box-shadow: 0 4px 12px rgba(0,0,0,0.3);";
  clonedCanvas.getContext("2d").drawImage(canvas, 0, 0);
  __privateGet(this, _dragGhost).appendChild(clonedCanvas);
  document.body.appendChild(__privateGet(this, _dragGhost));
  __privateMethod(this, _SpritesheetViewer_instances, updateDragGhost_fn).call(this, x, y);
};
updateDragGhost_fn = function(x, y) {
  if (__privateGet(this, _dragGhost)) {
    __privateGet(this, _dragGhost).style.left = `${x}px`;
    __privateGet(this, _dragGhost).style.top = `${y}px`;
  }
};
removeDragGhost_fn = function() {
  if (__privateGet(this, _dragGhost)) {
    __privateGet(this, _dragGhost).remove();
    __privateSet(this, _dragGhost, null);
  }
};
function findTimeline(x, y) {
  const visited = /* @__PURE__ */ new Set();
  return findElementInShadowDom({ root: document, x, y, tagName: "animation-timeline", visited });
}
function getAnimationPrefix(frameName) {
  const slashIndex = frameName.lastIndexOf("/");
  if (slashIndex === -1) {
    return null;
  }
  return frameName.substring(0, slashIndex);
}
function findElementInShadowDom({ root, x, y, tagName, visited }) {
  var _a;
  const elements = root.elementsFromPoint(x, y);
  for (const el of elements) {
    if (visited.has(el)) {
      continue;
    }
    visited.add(el);
    if (((_a = el.tagName) == null ? void 0 : _a.toLowerCase()) === tagName) {
      return el;
    }
    if (el.shadowRoot) {
      const found = findElementInShadowDom({ root: el.shadowRoot, x, y, tagName, visited });
      if (found) {
        return found;
      }
    }
  }
  return null;
}
function drawFrameThumbnail(canvas, region) {
  const ctx = canvas.getContext("2d");
  if (!region || !region.image) {
    ctx.fillStyle = "#333";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#666";
    ctx.font = "10px monospace";
    ctx.textAlign = "center";
    ctx.fillText("?", canvas.width / 2, canvas.height / 2 + 3);
    return;
  }
  const scale = Math.min(
    canvas.width / region.width,
    canvas.height / region.height
  );
  const w = region.width * scale;
  const h = region.height * scale;
  const x = (canvas.width - w) / 2;
  const y = (canvas.height - h) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    region.image,
    region.x,
    region.y,
    region.width,
    region.height,
    x,
    y,
    w,
    h
  );
}
const viewerStyles = createSheet(`
    :host {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .viewer-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        flex: 1;
        min-height: 0;
        gap: var(--spacing-md);
    }

    .filter-select {
        appearance: none;
        background: var(--bg-tertiary);
        color: var(--fg-primary);
        border: none;
        border-radius: var(--radius-md);
        padding: var(--spacing-sm) var(--spacing-lg) var(--spacing-sm) var(--spacing-md);
        font-family: var(--font-mono);
        font-size: var(--font-size-sm);
        flex-shrink: 0;
        cursor: pointer;
        transition: background 0.15s, color 0.15s;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%239898a0' d='M3 4.5L6 8l3-3.5H3z'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 8px center;
        min-height: var(--touch-target);
        max-width: calc(100% - 40px);
    }

    .filter-select:hover {
        background-color: var(--bg-hover);
    }

    .filter-select:focus {
        outline: none;
        background-color: var(--bg-hover);
    }

    .frame-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        overflow-y: auto;
        width: 100%;
        flex: 1;
        min-height: 0;
        align-content: flex-start;
        background: var(--bg-tertiary);
        border-radius: var(--radius-md);
        padding: var(--spacing-md);
        gap: var(--spacing-sm);
        box-sizing: border-box;
    }

    .frame {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2px;
        cursor: grab;
        transition: filter 0.15s;
    }

    .frame:hover {
        filter: brightness(1.2);
    }

    .frame:active {
        cursor: grabbing;
    }

    .frame.dragging {
        opacity: 0.5;
    }

    .frame-thumbnail {
        display: block;
    }

    .frame-name {
        font-size: 8px;
        color: var(--fg-muted);
        max-width: 100px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
    }
`);
customElements.define("spritesheet-viewer", SpritesheetViewer);
const SWIPE_THRESHOLD = 50;
const drawerCSS = createSheet(`
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
        border-right: 1px solid var(--border);
        transform: translateX(-100%);
    }

    :host([position="right"]) {
        right: 0;
        border-left: 1px solid var(--border);
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
class SideDrawer extends HTMLElement {
  constructor() {
    super();
    __privateAdd(this, _SideDrawer_instances);
    __privateAdd(this, _closeBtn2, null);
    __privateAdd(this, _contentEl2, null);
    __privateAdd(this, _dragStartX2, 0);
    __privateAdd(this, _currentTranslate, 0);
    __privateAdd(this, _isDragging2, false);
    this.attachShadow({ mode: "open" });
    adoptStyles(this.shadowRoot, drawerCSS);
    __privateMethod(this, _SideDrawer_instances, buildDOM_fn7).call(this);
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
_closeBtn2 = new WeakMap();
_contentEl2 = new WeakMap();
_dragStartX2 = new WeakMap();
_currentTranslate = new WeakMap();
_isDragging2 = new WeakMap();
_SideDrawer_instances = new WeakSet();
position_get = function() {
  return this.getAttribute("position") || "left";
};
buildDOM_fn7 = function() {
  __privateSet(this, _closeBtn2, document.createElement("button"));
  __privateGet(this, _closeBtn2).className = "drawer-close";
  __privateGet(this, _closeBtn2).innerHTML = "✕";
  __privateGet(this, _closeBtn2).addEventListener("click", () => this.close());
  __privateSet(this, _contentEl2, document.createElement("div"));
  __privateGet(this, _contentEl2).className = "drawer-content";
  const slot = document.createElement("slot");
  __privateGet(this, _contentEl2).appendChild(slot);
  this.shadowRoot.appendChild(__privateGet(this, _closeBtn2));
  this.shadowRoot.appendChild(__privateGet(this, _contentEl2));
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
  __privateSet(this, _isDragging2, true);
  __privateSet(this, _dragStartX2, e.clientX);
  __privateSet(this, _currentTranslate, 0);
  this.classList.add("dragging");
  this.setPointerCapture(e.pointerId);
  const onPointerMove = (moveEvent) => {
    if (!__privateGet(this, _isDragging2)) {
      return;
    }
    const deltaX = moveEvent.clientX - __privateGet(this, _dragStartX2);
    if (__privateGet(this, _SideDrawer_instances, position_get) === "left") {
      __privateSet(this, _currentTranslate, Math.min(0, deltaX));
    } else {
      __privateSet(this, _currentTranslate, Math.max(0, deltaX));
    }
    this.style.transform = `translateX(${__privateGet(this, _currentTranslate)}px)`;
  };
  const onPointerUp = () => {
    __privateSet(this, _isDragging2, false);
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
customElements.define("side-drawer", SideDrawer);
const sliderInputCSS = `
    .slider-input-container {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
    }

    .slider-input-label {
        font-size: var(--font-size-xs);
        color: var(--fg-muted);
        min-width: 60px;
    }

    .slider-input-label:empty {
        display: none;
        min-width: 0;
    }

    :host([no-label]) .slider-input-label {
        display: none !important;
        min-width: 0;
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
        transition: transform var(--transition-fast), box-shadow var(--transition-fast);
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
        font-size: var(--font-size-xs);
        color: var(--fg-secondary);
        min-width: 32px;
        text-align: right;
        font-variant-numeric: tabular-nums;
    }

    :host([no-value]) .slider-input-value {
        display: none;
    }


    :host([context="studio"]) .slider-input-container {
        gap: var(--spacing-md);
    }

    :host([context="studio"]) .slider-input-label {
        font-size: var(--font-size-md);
        min-width: 80px;
    }

    :host([context="studio"]) .slider-input-track {
        height: 8px;
    }

    :host([context="studio"]) .slider-input-track::-webkit-slider-runnable-track {
        height: 8px;
        border-radius: 4px;
    }

    :host([context="studio"]) .slider-input-track::-webkit-slider-thumb {
        width: 24px;
        height: 24px;
        margin-top: -8px;
    }

    :host([context="studio"]) .slider-input-track::-moz-range-track {
        height: 8px;
        border-radius: 4px;
    }

    :host([context="studio"]) .slider-input-track::-moz-range-thumb {
        width: 24px;
        height: 24px;
    }

    :host([context="studio"]) .slider-input-value {
        font-size: var(--font-size-md);
        min-width: 48px;
    }
`;
class SliderInput extends HTMLElement {
  constructor() {
    super();
    __privateAdd(this, _SliderInput_instances);
    __privateAdd(this, _value2, 0);
    __privateAdd(this, _min2, 0);
    __privateAdd(this, _max2, 100);
    __privateAdd(this, _step2, 1);
    __privateAdd(this, _label2, "");
    __privateAdd(this, _slider, null);
    __privateAdd(this, _labelEl2, null);
    __privateAdd(this, _valueEl, null);
    this.attachShadow({ mode: "open" });
    setupInputStyles(this.shadowRoot, sliderInputCSS);
    __privateMethod(this, _SliderInput_instances, buildDOM_fn8).call(this);
  }
  static get observedAttributes() {
    return ["value", "min", "max", "step", "label"];
  }
  connectedCallback() {
    __privateMethod(this, _SliderInput_instances, updateDisplay_fn2).call(this);
  }
  attributeChangedCallback(name, oldValue, newValue) {
    handleAttributeChange(this, name, oldValue, newValue);
  }
  get value() {
    return __privateGet(this, _value2);
  }
  set value(val) {
    const newValue = __privateMethod(this, _SliderInput_instances, clamp_fn2).call(this, parseFloat(val) || 0);
    if (__privateGet(this, _value2) !== newValue) {
      __privateSet(this, _value2, newValue);
      __privateMethod(this, _SliderInput_instances, updateDisplay_fn2).call(this);
    }
  }
  setValue(val) {
    __privateSet(this, _value2, val);
    __privateMethod(this, _SliderInput_instances, updateDisplay_fn2).call(this);
  }
  setMin(val) {
    __privateSet(this, _min2, val);
    if (__privateGet(this, _slider)) {
      __privateGet(this, _slider).min = __privateGet(this, _min2);
    }
  }
  setMax(val) {
    __privateSet(this, _max2, val);
    if (__privateGet(this, _slider)) {
      __privateGet(this, _slider).max = __privateGet(this, _max2);
    }
  }
  setStep(val) {
    __privateSet(this, _step2, val);
    if (__privateGet(this, _slider)) {
      __privateGet(this, _slider).step = __privateGet(this, _step2);
    }
  }
  setLabel(val) {
    __privateSet(this, _label2, val);
    if (__privateGet(this, _labelEl2)) {
      __privateGet(this, _labelEl2).textContent = __privateGet(this, _label2);
    }
  }
}
_value2 = new WeakMap();
_min2 = new WeakMap();
_max2 = new WeakMap();
_step2 = new WeakMap();
_label2 = new WeakMap();
_slider = new WeakMap();
_labelEl2 = new WeakMap();
_valueEl = new WeakMap();
_SliderInput_instances = new WeakSet();
buildDOM_fn8 = function() {
  const container = document.createElement("div");
  container.className = "slider-input-container";
  __privateSet(this, _labelEl2, document.createElement("span"));
  __privateGet(this, _labelEl2).className = "slider-input-label";
  __privateGet(this, _labelEl2).textContent = __privateGet(this, _label2);
  __privateSet(this, _slider, document.createElement("input"));
  __privateGet(this, _slider).type = "range";
  __privateGet(this, _slider).className = "slider-input-track";
  __privateGet(this, _slider).min = __privateGet(this, _min2);
  __privateGet(this, _slider).max = __privateGet(this, _max2);
  __privateGet(this, _slider).step = __privateGet(this, _step2);
  __privateGet(this, _slider).addEventListener("input", () => __privateMethod(this, _SliderInput_instances, handleInput_fn).call(this));
  __privateSet(this, _valueEl, document.createElement("span"));
  __privateGet(this, _valueEl).className = "slider-input-value";
  container.appendChild(__privateGet(this, _labelEl2));
  container.appendChild(__privateGet(this, _slider));
  container.appendChild(__privateGet(this, _valueEl));
  this.shadowRoot.appendChild(container);
};
updateDisplay_fn2 = function() {
  if (__privateGet(this, _slider)) {
    __privateGet(this, _slider).value = __privateGet(this, _value2);
  }
  if (__privateGet(this, _valueEl)) {
    __privateGet(this, _valueEl).textContent = formatSliderValue(__privateGet(this, _value2));
  }
};
handleInput_fn = function() {
  const newValue = parseFloat(__privateGet(this, _slider).value);
  if (__privateGet(this, _value2) !== newValue) {
    __privateSet(this, _value2, newValue);
    __privateGet(this, _valueEl).textContent = formatSliderValue(__privateGet(this, _value2));
    emitChange(this, { value: __privateGet(this, _value2) });
  }
};
clamp_fn2 = function(value) {
  return Math.max(__privateGet(this, _min2), Math.min(__privateGet(this, _max2), value));
};
function formatSliderValue(value) {
  if (Math.abs(value) < 0.01) {
    return value.toFixed(3);
  }
  return value.toFixed(2);
}
customElements.define("slider-input", SliderInput);
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
class SelectInput extends HTMLElement {
  constructor() {
    super();
    __privateAdd(this, _SelectInput_instances);
    __privateAdd(this, _value3, null);
    __privateAdd(this, _options, []);
    __privateAdd(this, _focusedIndex, -1);
    __privateAdd(this, _isOpen, false);
    __privateAdd(this, _buttonEl, null);
    __privateAdd(this, _labelEl3, null);
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
      switch (e.key) {
        case "Escape":
          e.preventDefault();
          __privateMethod(this, _SelectInput_instances, close_fn).call(this);
          break;
        case "ArrowDown":
          e.preventDefault();
          __privateMethod(this, _SelectInput_instances, moveFocus_fn).call(this, 1);
          break;
        case "ArrowUp":
          e.preventDefault();
          __privateMethod(this, _SelectInput_instances, moveFocus_fn).call(this, -1);
          break;
        case "Enter":
        case " ":
          e.preventDefault();
          if (__privateGet(this, _focusedIndex) >= 0) {
            __privateMethod(this, _SelectInput_instances, selectIndex_fn).call(this, __privateGet(this, _focusedIndex));
          }
          break;
        case "Tab":
          __privateMethod(this, _SelectInput_instances, close_fn).call(this);
          break;
      }
    });
    this.attachShadow({ mode: "open" });
    setupInputStyles(this.shadowRoot, selectInputCSS);
    __privateMethod(this, _SelectInput_instances, buildDOM_fn9).call(this);
  }
  connectedCallback() {
    __privateMethod(this, _SelectInput_instances, updateDisplay_fn3).call(this);
  }
  disconnectedCallback() {
    __privateMethod(this, _SelectInput_instances, close_fn).call(this);
  }
  get value() {
    return __privateGet(this, _value3);
  }
  set value(val) {
    if (__privateGet(this, _value3) !== val) {
      __privateSet(this, _value3, val);
      __privateMethod(this, _SelectInput_instances, updateDisplay_fn3).call(this);
    }
  }
  setValue(val) {
    __privateSet(this, _value3, val);
    __privateMethod(this, _SelectInput_instances, updateDisplay_fn3).call(this);
  }
  setOptions(options) {
    __privateSet(this, _options, options.map((opt) => {
      if (typeof opt === "string") {
        return { value: opt, label: opt };
      }
      return opt;
    }));
    __privateMethod(this, _SelectInput_instances, renderOptions_fn).call(this);
    __privateMethod(this, _SelectInput_instances, updateDisplay_fn3).call(this);
  }
}
_value3 = new WeakMap();
_options = new WeakMap();
_focusedIndex = new WeakMap();
_isOpen = new WeakMap();
_buttonEl = new WeakMap();
_labelEl3 = new WeakMap();
_chevronEl = new WeakMap();
_dropdownEl = new WeakMap();
_handleOutsideClick = new WeakMap();
_handleKeyDown = new WeakMap();
_SelectInput_instances = new WeakSet();
buildDOM_fn9 = function() {
  __privateSet(this, _buttonEl, document.createElement("button"));
  __privateGet(this, _buttonEl).className = "select-button";
  __privateGet(this, _buttonEl).type = "button";
  __privateGet(this, _buttonEl).addEventListener("click", () => __privateMethod(this, _SelectInput_instances, toggle_fn).call(this));
  __privateGet(this, _buttonEl).addEventListener("keydown", __privateGet(this, _handleKeyDown));
  __privateSet(this, _labelEl3, document.createElement("span"));
  __privateGet(this, _labelEl3).className = "select-label";
  __privateSet(this, _chevronEl, document.createElement("span"));
  __privateGet(this, _chevronEl).className = "select-chevron";
  __privateGet(this, _chevronEl).textContent = "▼";
  __privateGet(this, _buttonEl).appendChild(__privateGet(this, _labelEl3));
  __privateGet(this, _buttonEl).appendChild(__privateGet(this, _chevronEl));
  __privateSet(this, _dropdownEl, document.createElement("div"));
  __privateGet(this, _dropdownEl).className = "select-dropdown";
  this.shadowRoot.appendChild(__privateGet(this, _buttonEl));
  this.shadowRoot.appendChild(__privateGet(this, _dropdownEl));
};
renderOptions_fn = function() {
  __privateGet(this, _dropdownEl).innerHTML = "";
  for (let i = 0; i < __privateGet(this, _options).length; i++) {
    const opt = __privateGet(this, _options)[i];
    const optionEl = document.createElement("div");
    optionEl.className = "select-option";
    optionEl.textContent = opt.label;
    optionEl.dataset.index = i;
    if (opt.value === __privateGet(this, _value3)) {
      optionEl.classList.add("selected");
    }
    optionEl.addEventListener("click", (e) => {
      e.stopPropagation();
      __privateMethod(this, _SelectInput_instances, selectIndex_fn).call(this, i);
    });
    __privateGet(this, _dropdownEl).appendChild(optionEl);
  }
};
updateDisplay_fn3 = function() {
  const selected = __privateGet(this, _options).find((opt) => opt.value === __privateGet(this, _value3));
  __privateGet(this, _labelEl3).textContent = selected ? selected.label : "";
  const optionEls = __privateGet(this, _dropdownEl).querySelectorAll(".select-option");
  optionEls.forEach((el, i) => {
    var _a;
    el.classList.toggle("selected", ((_a = __privateGet(this, _options)[i]) == null ? void 0 : _a.value) === __privateGet(this, _value3));
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
  const selectedIndex = __privateGet(this, _options).findIndex((opt) => opt.value === __privateGet(this, _value3));
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
  const oldValue = __privateGet(this, _value3);
  __privateSet(this, _value3, opt.value);
  __privateMethod(this, _SelectInput_instances, updateDisplay_fn3).call(this);
  __privateMethod(this, _SelectInput_instances, close_fn).call(this);
  __privateGet(this, _buttonEl).focus();
  if (oldValue !== __privateGet(this, _value3)) {
    emitChange(this, { value: __privateGet(this, _value3) });
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
customElements.define("select-input", SelectInput);
const toggleInputCSS = `
    .toggle-input-container {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
        cursor: pointer;
    }

    .toggle-input-track {
        position: relative;
        width: 28px;
        height: 14px;
        background: var(--bg-hover);
        border-radius: 7px;
        transition: background var(--transition-normal);
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
        transition: transform var(--transition-normal), background var(--transition-normal);
    }

    .toggle-input-track.checked .toggle-input-thumb {
        transform: translateX(14px);
        background: var(--bg-primary);
    }

    .toggle-input-label {
        font-size: var(--font-size-sm);
        color: var(--fg-primary);
        font-weight: 500;
        user-select: none;
        -webkit-user-select: none;
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


    :host([context="studio"]) .toggle-input-container {
        gap: var(--spacing-md);
    }

    :host([context="studio"]) .toggle-input-track {
        width: 52px;
        height: 32px;
        border-radius: 16px;
    }

    :host([context="studio"]) .toggle-input-thumb {
        top: 4px;
        left: 4px;
        width: 24px;
        height: 24px;
    }

    :host([context="studio"]) .toggle-input-track.checked .toggle-input-thumb {
        transform: translateX(20px);
    }

    :host([context="studio"]) .toggle-input-label {
        font-size: var(--font-size-lg);
    }
`;
class ToggleInput extends HTMLElement {
  constructor() {
    super();
    __privateAdd(this, _ToggleInput_instances);
    __privateAdd(this, _checked, false);
    __privateAdd(this, _label3, "");
    __privateAdd(this, _toggle, null);
    __privateAdd(this, _labelEl4, null);
    this.attachShadow({ mode: "open" });
    setupInputStyles(this.shadowRoot, toggleInputCSS);
    __privateMethod(this, _ToggleInput_instances, buildDOM_fn10).call(this);
  }
  static get observedAttributes() {
    return ["checked", "label"];
  }
  connectedCallback() {
    __privateMethod(this, _ToggleInput_instances, updateDisplay_fn4).call(this);
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
      __privateMethod(this, _ToggleInput_instances, updateDisplay_fn4).call(this);
    }
  }
  setChecked(val) {
    __privateSet(this, _checked, val);
    __privateMethod(this, _ToggleInput_instances, updateDisplay_fn4).call(this);
  }
  setLabel(val) {
    __privateSet(this, _label3, val);
    if (__privateGet(this, _labelEl4)) {
      __privateGet(this, _labelEl4).textContent = __privateGet(this, _label3);
    }
  }
}
_checked = new WeakMap();
_label3 = new WeakMap();
_toggle = new WeakMap();
_labelEl4 = new WeakMap();
_ToggleInput_instances = new WeakSet();
buildDOM_fn10 = function() {
  const container = document.createElement("div");
  container.className = "toggle-input-container";
  __privateSet(this, _toggle, document.createElement("div"));
  __privateGet(this, _toggle).className = "toggle-input-track";
  __privateGet(this, _toggle).addEventListener("click", () => __privateMethod(this, _ToggleInput_instances, handleClick_fn).call(this));
  const thumb = document.createElement("div");
  thumb.className = "toggle-input-thumb";
  __privateGet(this, _toggle).appendChild(thumb);
  __privateSet(this, _labelEl4, document.createElement("span"));
  __privateGet(this, _labelEl4).className = "toggle-input-label";
  __privateGet(this, _labelEl4).textContent = __privateGet(this, _label3);
  __privateGet(this, _labelEl4).addEventListener("click", () => __privateMethod(this, _ToggleInput_instances, handleClick_fn).call(this));
  container.appendChild(__privateGet(this, _toggle));
  container.appendChild(__privateGet(this, _labelEl4));
  this.shadowRoot.appendChild(container);
};
updateDisplay_fn4 = function() {
  if (__privateGet(this, _toggle)) {
    __privateGet(this, _toggle).classList.toggle("checked", __privateGet(this, _checked));
  }
};
handleClick_fn = function() {
  __privateSet(this, _checked, !__privateGet(this, _checked));
  __privateMethod(this, _ToggleInput_instances, updateDisplay_fn4).call(this);
  emitChange(this, { checked: __privateGet(this, _checked) });
};
customElements.define("toggle-input", ToggleInput);
const dropdownStyles = createSheet(`
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
        border: 1px solid var(--border);
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
class DropdownMenu extends HTMLElement {
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
    this.attachShadow({ mode: "open" });
    adoptStyles(this.shadowRoot, dropdownStyles);
    __privateMethod(this, _DropdownMenu_instances, buildDOM_fn11).call(this);
  }
  connectedCallback() {
    document.addEventListener("click", __privateGet(this, _handleOutsideClick2));
  }
  disconnectedCallback() {
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
buildDOM_fn11 = function() {
  __privateSet(this, _triggerEl, document.createElement("button"));
  __privateGet(this, _triggerEl).className = "trigger";
  __privateGet(this, _triggerEl).addEventListener("click", (e) => {
    e.stopPropagation();
    this.toggle();
  });
  __privateSet(this, _menuEl, document.createElement("div"));
  __privateGet(this, _menuEl).className = "menu";
  this.shadowRoot.appendChild(__privateGet(this, _triggerEl));
  this.shadowRoot.appendChild(__privateGet(this, _menuEl));
};
renderItems_fn = function() {
  __privateGet(this, _menuEl).innerHTML = "";
  for (const item of __privateGet(this, _items)) {
    const btn = document.createElement("button");
    btn.className = "menu-item";
    btn.textContent = item.label;
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
customElements.define("dropdown-menu", DropdownMenu);
const animatorStyles = createSheet(`
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
        border-top: 1px solid var(--border);
        padding: var(--spacing-md) var(--spacing-lg);
        min-height: 120px;
        overflow: hidden;
        max-width: 100%;
    }


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
class AnimatorView extends BaseEditorComponent {
  constructor() {
    super(...arguments);
    __privateAdd(this, _AnimatorView_instances);
    __privateAdd(this, _context2, null);
    __privateAdd(this, _animators, {});
    __privateAdd(this, _animatorClass, null);
    __privateAdd(this, _animator, null);
    __privateAdd(this, _spritesheet2, null);
    __privateAdd(this, _selectedAnimation, null);
    __privateAdd(this, _appLayout, null);
    __privateAdd(this, _containerEl3, null);
    __privateAdd(this, _previewSectionEl, null);
    __privateAdd(this, _previewEl, null);
    __privateAdd(this, _timelineEl, null);
    __privateAdd(this, _framesDrawerEl, null);
    __privateAdd(this, _editorDrawerEl, null);
    __privateAdd(this, _spritesheetSettingsDrawerEl, null);
    __privateAdd(this, _spritesheetEl, null);
    __privateAdd(this, _selectedFrameIndex, -1);
    __privateAdd(this, _drawerMode, null);
    // 'frame' | 'settings'
    __privateAdd(this, _headerAnimSelect, null);
    __privateAdd(this, _drawerAnimSelect, null);
    __privateAdd(this, _anchor2, { x: 0.5, y: 0 });
  }
  connectedCallback() {
    __privateMethod(this, _AnimatorView_instances, buildDOM_fn12).call(this);
    if (__privateGet(this, _context2)) {
      const firstKey = Object.keys(__privateGet(this, _animators))[0];
      if (firstKey) {
        __privateMethod(this, _AnimatorView_instances, selectAnimator_fn).call(this, firstKey);
      }
    }
  }
  setContext({ textureSystem, animators }) {
    __privateSet(this, _context2, { textureSystem });
    __privateSet(this, _animators, animators || {});
    if (this.isConnected) {
      const firstKey = Object.keys(__privateGet(this, _animators))[0];
      if (firstKey) {
        __privateMethod(this, _AnimatorView_instances, selectAnimator_fn).call(this, firstKey);
      }
    }
  }
}
_context2 = new WeakMap();
_animators = new WeakMap();
_animatorClass = new WeakMap();
_animator = new WeakMap();
_spritesheet2 = new WeakMap();
_selectedAnimation = new WeakMap();
_appLayout = new WeakMap();
_containerEl3 = new WeakMap();
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
_anchor2 = new WeakMap();
_AnimatorView_instances = new WeakSet();
selectAnimator_fn = function(name) {
  const AnimatorClass = __privateGet(this, _animators)[name];
  if (!AnimatorClass) {
    return;
  }
  __privateSet(this, _animatorClass, AnimatorClass);
  __privateSet(this, _animator, new AnimatorClass({
    sprite: null,
    textureSystem: __privateGet(this, _context2).textureSystem
  }));
  const spritesheetName = __privateMethod(this, _AnimatorView_instances, inferSpritesheetName_fn).call(this);
  __privateSet(this, _spritesheet2, spritesheetName ? __privateGet(this, _context2).textureSystem.getSpritesheet(spritesheetName) : null);
  __privateSet(this, _selectedAnimation, __privateGet(this, _animator).children[0] || null);
  __privateMethod(this, _AnimatorView_instances, render_fn3).call(this);
};
inferSpritesheetName_fn = function() {
  var _a, _b, _c;
  const animations = (_a = __privateGet(this, _animatorClass)) == null ? void 0 : _a.animations;
  if (!animations) {
    return null;
  }
  const firstAnim = Object.values(animations)[0];
  if (firstAnim == null ? void 0 : firstAnim.source) {
    return firstAnim.source.split(":")[0];
  }
  if ((_c = (_b = firstAnim == null ? void 0 : firstAnim.frames) == null ? void 0 : _b[0]) == null ? void 0 : _c.source) {
    return firstAnim.frames[0].source.split(":")[0];
  }
  return null;
};
buildDOM_fn12 = function() {
  adoptStyles(this.shadowRoot, animatorStyles);
  __privateSet(this, _appLayout, document.createElement("app-layout"));
  __privateGet(this, _appLayout).setAttribute("no-menu", "");
  __privateGet(this, _appLayout).setAttribute("no-close", "");
  __privateGet(this, _appLayout).setAttribute("no-footer", "");
  __privateSet(this, _containerEl3, document.createElement("div"));
  __privateGet(this, _containerEl3).className = "animator-container";
  __privateGet(this, _appLayout).appendChild(__privateGet(this, _containerEl3));
  this.shadowRoot.appendChild(__privateGet(this, _appLayout));
};
render_fn3 = function() {
  __privateGet(this, _appLayout).querySelectorAll("[slot]").forEach((el) => el.remove());
  __privateGet(this, _containerEl3).innerHTML = "";
  if (!__privateGet(this, _animator)) {
    __privateGet(this, _containerEl3).innerHTML = '<div class="empty">No animator loaded</div>';
    return;
  }
  __privateMethod(this, _AnimatorView_instances, buildHeaderControls_fn).call(this);
  __privateSet(this, _previewSectionEl, __privateMethod(this, _AnimatorView_instances, createPreviewSection_fn).call(this));
  __privateGet(this, _containerEl3).appendChild(__privateGet(this, _previewSectionEl));
  __privateSet(this, _timelineEl, document.createElement("animation-timeline"));
  __privateGet(this, _timelineEl).className = "timeline-section";
  if (__privateGet(this, _selectedAnimation)) {
    __privateGet(this, _timelineEl).setFrames(__privateGet(this, _selectedAnimation).frames);
  }
  __privateMethod(this, _AnimatorView_instances, setupTimelineEvents_fn).call(this);
  __privateGet(this, _containerEl3).appendChild(__privateGet(this, _timelineEl));
  __privateMethod(this, _AnimatorView_instances, buildDrawers_fn).call(this);
};
createPreviewSection_fn = function() {
  const section = document.createElement("div");
  section.className = "preview-section";
  __privateSet(this, _previewEl, document.createElement("animation-preview"));
  if (__privateGet(this, _selectedAnimation)) {
    __privateGet(this, _previewEl).setAnimation(__privateGet(this, _selectedAnimation));
    __privateGet(this, _previewEl).setMotion(__privateGet(this, _selectedAnimation).motion);
    __privateGet(this, _previewEl).setAnchor(__privateGet(this, _anchor2));
  }
  __privateGet(this, _previewEl).addEventListener("frame", (e) => {
    var _a;
    (_a = __privateGet(this, _timelineEl)) == null ? void 0 : _a.setCurrentIndex(e.detail.index);
  });
  __privateGet(this, _previewEl).addEventListener("settingsrequest", () => {
    __privateMethod(this, _AnimatorView_instances, toggleAnimationSettings_fn).call(this);
  });
  section.appendChild(__privateGet(this, _previewEl));
  return section;
};
buildHeaderControls_fn = function() {
  var _a;
  const headerStart = document.createElement("div");
  headerStart.className = "header-controls";
  headerStart.setAttribute("slot", "header-start");
  const backBtn = document.createElement("button");
  backBtn.className = "toolbar-btn";
  backBtn.innerHTML = ICONS.chevronLeft;
  backBtn.title = "Back to gallery";
  backBtn.addEventListener("click", () => {
    this.dispatchEvent(new CustomEvent("close", { bubbles: true }));
  });
  headerStart.appendChild(backBtn);
  const settingsMenu = document.createElement("dropdown-menu");
  settingsMenu.setIcon(ICONS.wrench);
  settingsMenu.setItems([
    { label: "Animation Settings", action: () => __privateMethod(this, _AnimatorView_instances, openAnimationSettings_fn).call(this) },
    { label: "Anchor Settings", action: () => __privateMethod(this, _AnimatorView_instances, openSpritesheetSettings_fn).call(this) },
    { label: "Export", action: () => __privateMethod(this, _AnimatorView_instances, exportToClipboard_fn).call(this) }
  ]);
  headerStart.appendChild(settingsMenu);
  const animatorSelect = document.createElement("select-input");
  animatorSelect.setAttribute("context", "studio");
  const animatorNames = Object.keys(__privateGet(this, _animators));
  const currentAnimatorName = animatorNames.find((name) => __privateGet(this, _animators)[name] === __privateGet(this, _animatorClass));
  animatorSelect.setOptions(animatorNames);
  animatorSelect.setValue(currentAnimatorName);
  animatorSelect.addEventListener("change", (e) => {
    __privateMethod(this, _AnimatorView_instances, selectAnimator_fn).call(this, e.detail.value);
  });
  __privateSet(this, _headerAnimSelect, document.createElement("select-input"));
  __privateGet(this, _headerAnimSelect).setAttribute("context", "studio");
  const animOptions = __privateGet(this, _animator).children.map((anim) => ({ value: anim.$id, label: anim.$id }));
  __privateGet(this, _headerAnimSelect).setOptions(animOptions);
  __privateGet(this, _headerAnimSelect).setValue((_a = __privateGet(this, _selectedAnimation)) == null ? void 0 : _a.$id);
  __privateGet(this, _headerAnimSelect).addEventListener("change", (e) => {
    __privateSet(this, _selectedAnimation, __privateGet(this, _animator).getChild(e.detail.value));
    __privateMethod(this, _AnimatorView_instances, updateForSelectedAnimation_fn).call(this);
    __privateMethod(this, _AnimatorView_instances, syncDrawerAnimSelect_fn).call(this);
  });
  headerStart.appendChild(animatorSelect);
  headerStart.appendChild(__privateGet(this, _headerAnimSelect));
  __privateGet(this, _appLayout).appendChild(headerStart);
  if (__privateGet(this, _selectedAnimation)) {
    const headerEnd = document.createElement("div");
    headerEnd.className = "header-controls";
    headerEnd.setAttribute("slot", "header-end");
    const anim = __privateGet(this, _selectedAnimation);
    const fpsInput = document.createElement("number-input");
    fpsInput.setAttribute("context", "studio");
    fpsInput.setLabel("FPS");
    fpsInput.setValue(anim.fps);
    fpsInput.setStep(1);
    fpsInput.setPrecision(0);
    fpsInput.setMin(1);
    fpsInput.setMax(60);
    fpsInput.addEventListener("change", (e) => {
      anim.setFps(e.detail.value);
    });
    const loopToggle = document.createElement("toggle-input");
    loopToggle.setAttribute("context", "studio");
    loopToggle.setLabel("Loop");
    loopToggle.setChecked(anim.loop);
    loopToggle.addEventListener("change", (e) => {
      anim.setLoop(e.detail.checked);
    });
    const modeSelect = document.createElement("select-input");
    modeSelect.setAttribute("context", "studio");
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
  __privateSet(this, _framesDrawerEl, document.createElement("side-drawer"));
  __privateGet(this, _framesDrawerEl).setAttribute("position", "left");
  __privateSet(this, _spritesheetEl, document.createElement("spritesheet-viewer"));
  if (__privateGet(this, _spritesheet2)) {
    __privateGet(this, _spritesheetEl).setSpritesheet(__privateGet(this, _spritesheet2));
  }
  __privateGet(this, _spritesheetEl).addEventListener("frameclick", (e) => {
    __privateMethod(this, _AnimatorView_instances, addFrameToTimeline_fn).call(this, e.detail);
  });
  __privateGet(this, _framesDrawerEl).appendChild(__privateGet(this, _spritesheetEl));
  __privateGet(this, _previewSectionEl).appendChild(__privateGet(this, _framesDrawerEl));
  __privateSet(this, _editorDrawerEl, document.createElement("side-drawer"));
  __privateGet(this, _editorDrawerEl).setAttribute("position", "right");
  __privateGet(this, _previewSectionEl).appendChild(__privateGet(this, _editorDrawerEl));
  __privateSet(this, _spritesheetSettingsDrawerEl, document.createElement("side-drawer"));
  __privateGet(this, _spritesheetSettingsDrawerEl).setAttribute("position", "right");
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
  __privateMethod(this, _AnimatorView_instances, buildSpritesheetSettings_fn).call(this);
  __privateGet(this, _spritesheetSettingsDrawerEl).open();
};
buildSpritesheetSettings_fn = function() {
  const container = document.createElement("div");
  container.className = "spritesheet-settings";
  const anchorSection = document.createElement("div");
  anchorSection.className = "settings-section";
  const anchorLabel = document.createElement("div");
  anchorLabel.className = "settings-label";
  anchorLabel.textContent = "Anchor";
  anchorSection.appendChild(anchorLabel);
  const anchorPreview = __privateMethod(this, _AnimatorView_instances, buildAnchorPreview_fn).call(this);
  anchorSection.appendChild(anchorPreview);
  const anchorInputs = __privateMethod(this, _AnimatorView_instances, buildAnchorInputs_fn).call(this);
  anchorSection.appendChild(anchorInputs);
  container.appendChild(anchorSection);
  __privateGet(this, _spritesheetSettingsDrawerEl).appendChild(container);
};
buildAnchorPreview_fn = function() {
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
    __privateMethod(this, _AnimatorView_instances, renderAnchorPreview_fn).call(this, canvas, handle);
  });
  __privateMethod(this, _AnimatorView_instances, setupAnchorDrag_fn).call(this, wrapper, canvas, handle);
  return wrapper;
};
renderAnchorPreview_fn = function(canvas, handle) {
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const frameData = __privateMethod(this, _AnimatorView_instances, getFirstFrameData_fn).call(this);
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
  const anchorX = offsetX + __privateGet(this, _anchor2).x * drawWidth;
  const anchorY = offsetY + (1 - __privateGet(this, _anchor2).y) * drawHeight;
  handle.style.left = `${anchorX}px`;
  handle.style.top = `${anchorY}px`;
  handle.dataset.offsetX = offsetX;
  handle.dataset.offsetY = offsetY;
  handle.dataset.drawWidth = drawWidth;
  handle.dataset.drawHeight = drawHeight;
};
getFirstFrameData_fn = function() {
  if (!__privateGet(this, _spritesheet2)) {
    return null;
  }
  const frames = __privateGet(this, _spritesheet2).getFrames();
  if (!frames.length) {
    return null;
  }
  const firstFrame = frames[0];
  return {
    image: firstFrame.image,
    region: firstFrame.region
  };
};
setupAnchorDrag_fn = function(wrapper, canvas, handle) {
  let isDragging = false;
  const updateAnchor = (e) => {
    var _a;
    const rect = canvas.getBoundingClientRect();
    const offsetX = parseFloat(handle.dataset.offsetX) || 0;
    const offsetY = parseFloat(handle.dataset.offsetY) || 0;
    const drawWidth = parseFloat(handle.dataset.drawWidth) || 1;
    const drawHeight = parseFloat(handle.dataset.drawHeight) || 1;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const anchorX = Math.max(0, Math.min(1, (x - offsetX) / drawWidth));
    const anchorY = Math.max(0, Math.min(1, 1 - (y - offsetY) / drawHeight));
    __privateGet(this, _anchor2).x = Math.round(anchorX * 100) / 100;
    __privateGet(this, _anchor2).y = Math.round(anchorY * 100) / 100;
    __privateMethod(this, _AnimatorView_instances, renderAnchorPreview_fn).call(this, canvas, handle);
    __privateMethod(this, _AnimatorView_instances, syncAnchorInputs_fn).call(this);
    (_a = __privateGet(this, _previewEl)) == null ? void 0 : _a.setAnchor(__privateGet(this, _anchor2));
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
};
buildAnchorInputs_fn = function() {
  const row = document.createElement("div");
  row.className = "settings-row anchor-inputs";
  const xInput = document.createElement("number-input");
  xInput.setAttribute("context", "studio");
  xInput.setLabel("X");
  xInput.setValue(__privateGet(this, _anchor2).x);
  xInput.setStep(0.01);
  xInput.setPrecision(2);
  xInput.setMin(0);
  xInput.setMax(1);
  xInput.addEventListener("change", (e) => {
    __privateGet(this, _anchor2).x = e.detail.value;
    __privateMethod(this, _AnimatorView_instances, updateAnchorPreview_fn).call(this);
  });
  const yInput = document.createElement("number-input");
  yInput.setAttribute("context", "studio");
  yInput.setLabel("Y");
  yInput.setValue(__privateGet(this, _anchor2).y);
  yInput.setStep(0.01);
  yInput.setPrecision(2);
  yInput.setMin(0);
  yInput.setMax(1);
  yInput.addEventListener("change", (e) => {
    __privateGet(this, _anchor2).y = e.detail.value;
    __privateMethod(this, _AnimatorView_instances, updateAnchorPreview_fn).call(this);
  });
  row.appendChild(xInput);
  row.appendChild(yInput);
  this._anchorXInput = xInput;
  this._anchorYInput = yInput;
  return row;
};
syncAnchorInputs_fn = function() {
  var _a, _b;
  (_a = this._anchorXInput) == null ? void 0 : _a.setValue(__privateGet(this, _anchor2).x);
  (_b = this._anchorYInput) == null ? void 0 : _b.setValue(__privateGet(this, _anchor2).y);
};
updateAnchorPreview_fn = function() {
  var _a;
  const canvas = __privateGet(this, _spritesheetSettingsDrawerEl).querySelector(".anchor-preview-canvas");
  const handle = __privateGet(this, _spritesheetSettingsDrawerEl).querySelector(".anchor-handle");
  if (canvas && handle) {
    __privateMethod(this, _AnimatorView_instances, renderAnchorPreview_fn).call(this, canvas, handle);
  }
  (_a = __privateGet(this, _previewEl)) == null ? void 0 : _a.setAnchor(__privateGet(this, _anchor2));
};
openAnimationSettings_fn = function() {
  var _a;
  __privateGet(this, _spritesheetSettingsDrawerEl).close();
  __privateSet(this, _selectedFrameIndex, -1);
  (_a = __privateGet(this, _timelineEl)) == null ? void 0 : _a.clearSelection();
  __privateSet(this, _drawerMode, "settings");
  __privateGet(this, _editorDrawerEl).innerHTML = "";
  __privateMethod(this, _AnimatorView_instances, buildAnimationSettings_fn).call(this);
  __privateGet(this, _editorDrawerEl).open();
};
buildAnimationSettings_fn = function() {
  var _a;
  const container = document.createElement("div");
  container.className = "animation-settings";
  const animSection = document.createElement("div");
  animSection.className = "settings-section";
  const animLabel = document.createElement("div");
  animLabel.className = "settings-label";
  animLabel.textContent = "Animation";
  animSection.appendChild(animLabel);
  __privateSet(this, _drawerAnimSelect, document.createElement("select-input"));
  __privateGet(this, _drawerAnimSelect).setAttribute("context", "studio");
  const animOptions = __privateGet(this, _animator).children.map((anim) => ({ value: anim.$id, label: anim.$id }));
  __privateGet(this, _drawerAnimSelect).setOptions(animOptions);
  __privateGet(this, _drawerAnimSelect).setValue((_a = __privateGet(this, _selectedAnimation)) == null ? void 0 : _a.$id);
  __privateGet(this, _drawerAnimSelect).addEventListener("change", (e) => {
    var _a2;
    __privateSet(this, _selectedAnimation, __privateGet(this, _animator).getChild(e.detail.value));
    __privateMethod(this, _AnimatorView_instances, updateForSelectedAnimation_fn).call(this);
    (_a2 = __privateGet(this, _headerAnimSelect)) == null ? void 0 : _a2.setValue(e.detail.value);
    __privateMethod(this, _AnimatorView_instances, rebuildAnimationSettingsContent_fn).call(this, container);
  });
  animSection.appendChild(__privateGet(this, _drawerAnimSelect));
  container.appendChild(animSection);
  __privateMethod(this, _AnimatorView_instances, buildAnimationSettingsContent_fn).call(this, container);
  __privateGet(this, _editorDrawerEl).appendChild(container);
};
buildAnimationSettingsContent_fn = function(container) {
  const anim = __privateGet(this, _selectedAnimation);
  if (!anim) {
    return;
  }
  const motion = anim.motion || {};
  const currentMode = motion.enabled ? motion.mode || "sidescroller" : "none";
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
    if (!anim.motion) {
      anim.motion = {};
    }
    const isEnabled = e.detail.value !== "none";
    anim.motion.enabled = isEnabled;
    anim.motion.mode = isEnabled ? e.detail.value : anim.motion.mode;
    motionOptions.style.display = isEnabled ? "flex" : "none";
    __privateMethod(this, _AnimatorView_instances, rebuildDirectionPad_fn).call(this, directionPad, anim);
    (_a = __privateGet(this, _previewEl)) == null ? void 0 : _a.setMotion(anim.motion);
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
  __privateMethod(this, _AnimatorView_instances, rebuildDirectionPad_fn).call(this, directionPad, anim);
  dirSubSection.appendChild(directionPad);
  motionOptions.appendChild(dirSubSection);
  const speedSubSection = document.createElement("div");
  speedSubSection.className = "settings-section";
  const speedLabel = document.createElement("div");
  speedLabel.className = "settings-label";
  speedLabel.textContent = "Reference Speed";
  speedSubSection.appendChild(speedLabel);
  const speedRow = document.createElement("div");
  speedRow.className = "settings-row";
  const speedSlider = document.createElement("slider-input");
  speedSlider.setAttribute("context", "studio");
  speedSlider.setAttribute("no-value", "");
  speedSlider.setAttribute("no-label", "");
  speedSlider.setValue(motion.speed ?? 1);
  speedSlider.setMin(0);
  speedSlider.setMax(10);
  speedSlider.setStep(0.1);
  const speedInput = document.createElement("number-input");
  speedInput.setAttribute("context", "studio");
  speedInput.setValue(motion.speed ?? 1);
  speedInput.setStep(0.1);
  speedInput.setPrecision(1);
  speedInput.setMin(0);
  speedInput.setMax(100);
  const updateSpeed = (value) => {
    var _a;
    if (!anim.motion) {
      anim.motion = {};
    }
    anim.motion.speed = value;
    (_a = __privateGet(this, _previewEl)) == null ? void 0 : _a.updateMotion(anim.motion);
  };
  speedSlider.addEventListener("change", (e) => {
    speedInput.setValue(e.detail.value);
    updateSpeed(e.detail.value);
  });
  speedInput.addEventListener("change", (e) => {
    speedSlider.setValue(Math.min(10, Math.max(0, e.detail.value)));
    updateSpeed(e.detail.value);
  });
  speedRow.appendChild(speedSlider);
  speedRow.appendChild(speedInput);
  speedSubSection.appendChild(speedRow);
  motionOptions.appendChild(speedSubSection);
  motionSection.appendChild(motionOptions);
  container.appendChild(motionSection);
};
rebuildDirectionPad_fn = function(pad, anim) {
  pad.innerHTML = "";
  const motion = anim.motion || {};
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
        if (!anim.motion) {
          anim.motion = {};
        }
        anim.motion.direction = pos;
        __privateMethod(this, _AnimatorView_instances, rebuildDirectionPad_fn).call(this, pad, anim);
        (_a = __privateGet(this, _previewEl)) == null ? void 0 : _a.setMotion(anim.motion);
      });
    } else {
      btn.style.visibility = "hidden";
    }
    pad.appendChild(btn);
  }
};
rebuildAnimationSettingsContent_fn = function(container) {
  const sections = container.querySelectorAll("[data-setting]");
  sections.forEach((s) => s.remove());
  __privateMethod(this, _AnimatorView_instances, buildAnimationSettingsContent_fn).call(this, container);
};
syncDrawerAnimSelect_fn = function() {
  var _a;
  if (__privateGet(this, _drawerAnimSelect) && __privateGet(this, _drawerMode) === "settings") {
    __privateGet(this, _drawerAnimSelect).setValue((_a = __privateGet(this, _selectedAnimation)) == null ? void 0 : _a.$id);
    const container = __privateGet(this, _editorDrawerEl).querySelector(".animation-settings");
    if (container) {
      __privateMethod(this, _AnimatorView_instances, rebuildAnimationSettingsContent_fn).call(this, container);
    }
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
  __privateMethod(this, _AnimatorView_instances, buildFrameEditor_fn).call(this, frame);
  __privateGet(this, _editorDrawerEl).open();
};
buildFrameEditor_fn = function(frame) {
  const container = document.createElement("div");
  container.className = "frame-editor";
  container.appendChild(__privateMethod(this, _AnimatorView_instances, buildFramePreview_fn).call(this, frame));
  container.appendChild(__privateMethod(this, _AnimatorView_instances, buildDurationSection_fn).call(this, frame));
  container.appendChild(__privateMethod(this, _AnimatorView_instances, buildEventsSection_fn).call(this, frame));
  __privateGet(this, _editorDrawerEl).appendChild(container);
};
buildFramePreview_fn = function(frame) {
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
};
buildDurationSection_fn = function(frame) {
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
    __privateGet(this, _timelineEl).setFrames(__privateGet(this, _selectedAnimation).frames);
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
};
buildEventsSection_fn = function(frame) {
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
      removeBtn.innerHTML = "×";
      removeBtn.addEventListener("click", () => {
        frame.events = currentEvents.filter((e) => e !== event);
        __privateGet(this, _timelineEl).setFrames(__privateGet(this, _selectedAnimation).frames);
        renderEvents();
      });
      chip.appendChild(chipText);
      chip.appendChild(removeBtn);
      eventsContainer.appendChild(chip);
    }
    const suggestions = __privateMethod(this, _AnimatorView_instances, collectEventSuggestions_fn).call(this, currentEvents);
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
          __privateGet(this, _timelineEl).setFrames(__privateGet(this, _selectedAnimation).frames);
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
          __privateGet(this, _timelineEl).setFrames(__privateGet(this, _selectedAnimation).frames);
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
};
collectEventSuggestions_fn = function(excludeEvents) {
  const allEvents = /* @__PURE__ */ new Set();
  for (const anim of __privateGet(this, _animator).children) {
    for (const frame of anim.frames) {
      const events = frame.events || [];
      events.forEach((event) => allEvents.add(event));
    }
  }
  excludeEvents.forEach((event) => allEvents.delete(event));
  return Array.from(allEvents).slice(0, 6);
};
addFrameToTimeline_fn = function({ name, region }) {
  if (!__privateGet(this, _selectedAnimation) || !region) {
    return;
  }
  __privateGet(this, _selectedAnimation).frames.push({ region, name });
  __privateGet(this, _timelineEl).setFrames(__privateGet(this, _selectedAnimation).frames);
  __privateMethod(this, _AnimatorView_instances, updateFramesCount_fn).call(this);
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
  var _a, _b;
  if (__privateGet(this, _selectedAnimation)) {
    (_a = __privateGet(this, _timelineEl)) == null ? void 0 : _a.setFrames(__privateGet(this, _selectedAnimation).frames);
    (_b = __privateGet(this, _previewEl)) == null ? void 0 : _b.setAnimation(__privateGet(this, _selectedAnimation));
  }
  __privateGet(this, _appLayout).querySelectorAll('[slot^="header"]').forEach((el) => el.remove());
  __privateMethod(this, _AnimatorView_instances, buildHeaderControls_fn).call(this);
};
handleFrameDrop_fn = function({ index, frameName }) {
  if (!__privateGet(this, _selectedAnimation) || !__privateGet(this, _spritesheet2)) {
    return;
  }
  const region = __privateGet(this, _spritesheet2).getRegion(frameName);
  if (!region) {
    return;
  }
  __privateGet(this, _selectedAnimation).frames.splice(index, 0, { region, name: frameName });
  __privateGet(this, _timelineEl).setFrames(__privateGet(this, _selectedAnimation).frames);
  __privateMethod(this, _AnimatorView_instances, updateFramesCount_fn).call(this);
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
  __privateMethod(this, _AnimatorView_instances, updateFramesCount_fn).call(this);
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
updateFramesCount_fn = function() {
};
exportToClipboard_fn = function() {
  if (!__privateGet(this, _animator)) {
    return;
  }
  const animations = {};
  for (const anim of __privateGet(this, _animator).children) {
    animations[anim.$id] = __privateMethod(this, _AnimatorView_instances, buildAnimationConfig_fn).call(this, anim);
  }
  const lines = [];
  if (__privateGet(this, _anchor2).x !== 0.5 || __privateGet(this, _anchor2).y !== 0) {
    lines.push(`static anchor = {x: ${__privateGet(this, _anchor2).x}, y: ${__privateGet(this, _anchor2).y}}`);
    lines.push("");
  }
  lines.push(`static animations = ${JSON.stringify(animations, null, 4)}`);
  navigator.clipboard.writeText(lines.join("\n"));
};
buildAnimationConfig_fn = function(anim) {
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
      direction: anim.motion.direction || "e",
      speed: anim.motion.speed ?? 1
    };
  }
  config.frames = anim.frames.map((frame) => {
    var _a2, _b;
    const fc = {};
    if (frame.source) {
      fc.source = frame.source;
    } else if (frame.name) {
      fc.source = `${((_a2 = __privateGet(this, _spritesheet2)) == null ? void 0 : _a2.$id) || "spritesheet"}:${frame.name}`;
    }
    if (frame.duration && frame.duration !== 1) {
      fc.duration = frame.duration;
    }
    if ((_b = frame.events) == null ? void 0 : _b.length) {
      fc.events = [...frame.events];
    }
    return fc;
  });
  return config;
};
customElements.define("animator-view", AnimatorView);
const ANIMATORS = {
  RedEnemyAnimator
};
const GITHUB_BASE = "https://raw.githubusercontent.com/perkycrow/perky/main/den/";
function rewriteManifestUrls(data) {
  const rewritten = { ...data, assets: {} };
  for (const [id, asset] of Object.entries(data.assets)) {
    rewritten.assets[id] = {
      ...asset,
      url: asset.url.replace("./", GITHUB_BASE)
    };
  }
  return rewritten;
}
async function init() {
  const container = document.getElementById("app");
  try {
    const manifest$1 = new Manifest({ data: rewriteManifestUrls(manifest) });
    const sourceManager = new SourceManager({
      loaders: new Registry(loaders),
      manifest: manifest$1
    });
    await sourceManager.loadAll();
    const textureSystem = new TextureSystem();
    const imageAssets = manifest$1.getAssetsByType("image");
    textureSystem.buildFromAssets(imageAssets);
    const spritesheetAssets = manifest$1.getAssetsByType("spritesheet");
    for (const asset of spritesheetAssets) {
      if (asset.source) {
        textureSystem.registerSpritesheet(asset.id, asset.source);
      }
    }
    container.innerHTML = "";
    const animatorView = document.createElement("animator-view");
    animatorView.setContext({
      textureSystem,
      animators: ANIMATORS
    });
    container.appendChild(animatorView);
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
