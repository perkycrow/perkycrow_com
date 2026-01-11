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
var _listenersFor, _externalListeners, _map, _values, _keyByValue, _ObservableMap_instances, removeFromValues_fn, _indexes, _Registry_instances, handleSet_fn, handleDelete_fn, addToIndex_fn, removeFromIndex_fn, _set, _pluralRules, _singularRules, _uncountables, _irregularPlurals, _irregularSingles, _Inflector_instances, sanitizeWord_fn, replaceWord_fn, checkWord_fn, loadIrregulars_fn, loadPlurals_fn, loadSingulars_fn, loadUncountables_fn, _id, _name, _category, _bind, _host, _started, _disposed, _installed, _eagerStart, _lifecycle, _childrenRegistry, _tags, _tagIndexes, _idCounters, _delegations, _eventDelegations, _PerkyModule_instances, findUniqueId_fn, addChild_fn, setupTagIndexListeners_fn, _ApplicationManager_instances, findApp_fn, _data, _Manifest_instances, initAssets_fn, exportAssets_fn, _actions, _actionList, _history, _maxHistory, _consoleOutput, _Logger_instances, record_fn, trimHistory_fn, emit_fn, _activeControllers, _ActionDispatcher_instances, setupMainController_fn, isControllerActive_fn, _resizeObserver, _previousStyles, _onFullscreenChange, _previousDisplay, _PerkyView_instances, setupResizeObserver_fn, setupFullscreenEvents_fn, requestFullscreen_fn, dispatchDisplayModeChanged_fn, _loadingPromises, _SourceManager_instances, setupLoaderEvents_fn, _bindings, _InputDevice_instances, initEvents_fn, _keydownListener, _keyupListener, _blurListener, _KeyboardDevice_instances, handleKeydown_fn, handleKeyup_fn, handleBlur_fn, _mousedownListener, _mouseupListener, _mousemoveListener, _contextmenuListener, _wheelListener, _MouseDevice_instances, createControls_fn, handleMousedown_fn, handleMouseup_fn, handleMousemove_fn, handleContextmenu_fn, handleWheel_fn, _touchstartListener, _touchmoveListener, _touchendListener, _touchcancelListener, _activeTouch, _startX, _startY, _currentY, _touchStartTime, _swipeReferenceY, _TouchDevice_instances, createControls_fn2, handleTouchstart_fn, handleTouchmove_fn, handleTouchend_fn, detectTap_fn, findChangedTouch_fn, handleTouchcancel_fn, releaseAllSwipes_fn, findActiveTouch_fn, isTouchActive_fn, _InputSystem_instances, getControlsFromBinding_fn, initEvents_fn2, handleInputEvent_fn, _Application_instances, autoRegisterBindings_fn, _paused, _fpsLimited, _resizeObserver2, _autoFitEnabled, _BaseRenderer_instances, updateAutoFitObserver_fn, refreshAutoFit_fn, _context, _collected, _x, _y, _rotation, _scaleX, _scaleY, _pivotX, _pivotY, _localMatrix, _worldMatrix, _dirty, _sortedChildren, _childrenNeedSort, _enabled, _effects, _tint, _effects2, _debugGizmos, _region, _rendererRegistry, _renderers, _debugGizmoRenderer, _CanvasRenderer_instances, setupDefaultRenderers_fn, _gl, _program, _uniforms, _attributes, _ShaderProgram_instances, createShader_fn, createProgram_fn, _gl2, _programs, _defaults, _gl3, _shaderRegistry, _effects3, _shaderCache, _uniformValues, _uniformTypes, _ShaderEffectRegistry_instances, collectUniforms_fn, parseUniform_fn, compileShader_fn, _gl4, _width, _height, _samples, _msaaFramebuffer, _msaaRenderbuffer, _sceneFramebuffer, _sceneTexture, _pingPongFramebuffers, _pingPongTextures, _currentPingPong, _namedBuffers, _FramebufferManager_instances, createFramebuffers_fn, createMSAAFramebuffer_fn, createResolveFramebuffer_fn, createFramebuffer_fn, resizeNamedBuffers_fn, deleteFramebuffers_fn, _vertexBuffer, _texCoordBuffer, _FullscreenQuad_instances, createBuffers_fn, _gl5, _shaderRegistry2, _framebufferManager, _fullscreenQuad, _passes, _enabled2, _gl6, _active, _zombies, _zombieSize, _flushInterval, _WebGLTextureManager_instances, resurrect_fn, createEntry_fn, createTexture_fn, deleteTexture_fn, _initialized, _RenderGroup_instances, initTransform_fn, initPasses_fn, _gl7, _context2, _collected2, _tempCorners, _tempTexCoords, _WebGLSpriteBatch_instances, ensureTexture_fn, writeVertices_fn, bindOptionalAttributes_fn, _spriteBatch, _shaderEffectRegistry, _WebGLSpriteRenderer_instances, groupByShaderEffects_fn, getProgramForEffects_fn, _vertexBuffer2, _vertexBuffer3, _gizmoObjects, _rendererRegistry2, _renderers2, _shaderRegistry3, _shaderEffectRegistry2, _postProcessor, _debugGizmoRenderer2, _compositeQuad, _compositeProgram, _WebGLRenderer_instances, setupWebGL_fn, setupBuiltinShaders_fn, setupDefaultRenderers_fn2, setupCompositeShader_fn, getMatrices_fn, renderSingleScene_fn, renderWithGroups_fn, renderGroupsToTextures_fn, renderGroupToTexture_fn, compositeGroups_fn, drawAllGroups_fn, drawGroup_fn, resetStats_fn, clearWithBackground_fn, applyGroupPasses_fn, applyBlendMode_fn, _RenderSystem_instances, configureDimensions_fn, setupInitialLayers_fn, setupResizeListener_fn, _canvas, _ctx, _packer, _regions, _dirty2, _atlases, _regionIndex, _atlasSize, _TextureAtlasManager_instances, addToAtlas_fn, addOversizedImage_fn, _atlasManager, _manualRegions, _Game_instances, updateActiveControllers_fn, _world, _functionBindings, _stringBindings, _AutoView_instances, compileBindings_fn, _classRegistry, _matcherRegistry, _views, _WorldView_instances, handleEntitySet_fn, handleEntityDelete_fn, disposeAllViews_fn, resolveViews_fn, _GameRenderer_instances, registerViews_fn, setupRenderGroups_fn, _enabled3, _program2, _uniforms2, _RenderPass_instances, applyUniform_fn, _Ghast_instances, updateCamera_fn, updateGroundPass_fn, buildTextureAtlases_fn;
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
  toHumanCase(string) {
    return string.replace(/[-_]/g, " ").replace(/([A-Z])([A-Z][a-z])/g, "$1 $2").replace(/([a-z])([A-Z])/g, "$1 $2").replace(/^\s+/, "").replace(/\s+/g, " ");
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
  "queryAll"
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
  "listActionsWithParams",
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
    var _a;
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
    (_a = this.configureApplication) == null ? void 0 : _a.call(this, options);
  }
  async preload() {
    return this.loadTag("preload");
  }
}
_Application_instances = new WeakSet();
autoRegisterBindings_fn = function(controllerName, controller) {
  var _a;
  const Controller = controller.constructor;
  const bindings = ((_a = Controller.normalizeBindings) == null ? void 0 : _a.call(Controller, controllerName)) || [];
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
    __privateAdd(this, _resizeObserver2, null);
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
    var _a;
    return ((_a = __privateGet(this, _context)) == null ? void 0 : _a.ctx) || null;
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
class Object2D extends Transform {
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
class Sprite extends Object2D {
  constructor(options = {}) {
    super(options);
    __privateAdd(this, _region, null);
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
    const Effect = __privateGet(this, _effects3).get(typeName);
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
      fbManager.getOrCreateBuffer(this.$name);
    }
  }
  hasActivePasses() {
    return this.postPasses.some((pass) => pass.enabled);
  }
  onDispose() {
    var _a, _b;
    const fbManager = (_b = (_a = this.host) == null ? void 0 : _a.postProcessor) == null ? void 0 : _b.framebufferManager;
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
  var _a;
  const batches = /* @__PURE__ */ new Map();
  for (const item of this.collected) {
    const effectTypes = ((_a = item.hints) == null ? void 0 : _a.shaderEffectTypes) || [];
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
class WebGLRenderer extends BaseRenderer {
  constructor(options = {}) {
    const { autoFit, ...parentOptions } = options;
    super(parentOptions);
    __privateAdd(this, _WebGLRenderer_instances);
    __privateAdd(this, _rendererRegistry2, /* @__PURE__ */ new Map());
    __privateAdd(this, _renderers2, []);
    __privateAdd(this, _shaderRegistry3, null);
    __privateAdd(this, _shaderEffectRegistry2, null);
    __privateAdd(this, _postProcessor, null);
    __privateAdd(this, _debugGizmoRenderer2, null);
    __privateAdd(this, _compositeQuad, null);
    __privateAdd(this, _compositeProgram, null);
    __privateMethod(this, _WebGLRenderer_instances, setupWebGL_fn).call(this);
    __privateMethod(this, _WebGLRenderer_instances, setupDefaultRenderers_fn2).call(this);
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
      __privateMethod(this, _WebGLRenderer_instances, setupCompositeShader_fn).call(this);
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
      return __privateMethod(this, _WebGLRenderer_instances, renderWithGroups_fn).call(this);
    }
    return __privateMethod(this, _WebGLRenderer_instances, renderSingleScene_fn).call(this, scene);
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
  __privateMethod(this, _WebGLRenderer_instances, resetStats_fn).call(this);
  const usePostProcessing = __privateGet(this, _postProcessor).begin();
  __privateMethod(this, _WebGLRenderer_instances, clearWithBackground_fn).call(this);
  this.camera.update();
  const matrices = __privateMethod(this, _WebGLRenderer_instances, getMatrices_fn).call(this);
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
  const fbManager = __privateGet(this, _postProcessor).framebufferManager;
  fbManager.getOrCreateBuffer(group.$name);
  fbManager.bindSceneBuffer();
  gl.clearColor(0, 0, 0, 0);
  gl.clear(gl.COLOR_BUFFER_BIT);
  group.content.updateWorldMatrix(false);
  const renderContext = ((_a = group.renderTransform) == null ? void 0 : _a.enabled) ? { transform: group.renderTransform } : null;
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
    __privateMethod(this, _WebGLRenderer_instances, applyGroupPasses_fn).call(this, group);
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
  __privateMethod(this, _WebGLRenderer_instances, clearWithBackground_fn).call(this);
  __privateMethod(this, _WebGLRenderer_instances, drawAllGroups_fn).call(this);
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
__publicField(WebGLRenderer, "$name", "webGLRenderer");
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
const DEFAULT_SIZE = 2048;
const MAX_SIZE = 4096;
const PADDING = 1;
class TextureAtlas {
  constructor(options = {}) {
    __privateAdd(this, _canvas, null);
    __privateAdd(this, _ctx, null);
    __privateAdd(this, _packer, null);
    __privateAdd(this, _regions, /* @__PURE__ */ new Map());
    __privateAdd(this, _dirty2, false);
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
    return __privateGet(this, _dirty2);
  }
  get full() {
    return __privateGet(this, _packer).full;
  }
  get regionCount() {
    return __privateGet(this, _regions).size;
  }
  markClean() {
    __privateSet(this, _dirty2, false);
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
    __privateSet(this, _dirty2, true);
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
    __privateSet(this, _dirty2, true);
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
_dirty2 = new WeakMap();
function createCanvas(width, height) {
  if (typeof OffscreenCanvas !== "undefined") {
    return new OffscreenCanvas(width, height);
  }
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  return canvas;
}
class TextureAtlasManager {
  constructor(options = {}) {
    __privateAdd(this, _TextureAtlasManager_instances);
    __privateAdd(this, _atlases, []);
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
    __privateGet(this, _regionIndex).clear();
  }
  dispose() {
    this.clear();
  }
}
_atlases = new WeakMap();
_regionIndex = new WeakMap();
_atlasSize = new WeakMap();
_TextureAtlasManager_instances = new WeakSet();
addToAtlas_fn = function(id, image) {
  for (const atlas of __privateGet(this, _atlases)) {
    if (atlas.canFit(image.width, image.height)) {
      return atlas.add(id, image);
    }
  }
  const newAtlas = new TextureAtlas({
    width: __privateGet(this, _atlasSize),
    height: __privateGet(this, _atlasSize)
  });
  __privateGet(this, _atlases).push(newAtlas);
  return newAtlas.add(id, image);
};
addOversizedImage_fn = function(id, image) {
  const region = TextureRegion.fromImage(image);
  __privateGet(this, _regionIndex).set(id, region);
  return region;
};
function isValidImage(image) {
  return image && image.width > 0 && image.height > 0;
}
function isOversized(image, atlasSize) {
  return image.width > atlasSize || image.height > atlasSize;
}
class TextureSystem extends PerkyModule {
  constructor(options = {}) {
    super(options);
    __privateAdd(this, _atlasManager, null);
    __privateAdd(this, _manualRegions, /* @__PURE__ */ new Map());
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
      "registerManualAtlas"
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
  buildFromAssets(assets) {
    const images = {};
    for (const asset of assets) {
      if (isImageAsset(asset) && asset.source) {
        images[asset.id] = asset.source;
      }
    }
    return this.addRegions(images);
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
  }
  onDispose() {
    this.clear();
  }
}
_atlasManager = new WeakMap();
_manualRegions = new WeakMap();
__publicField(TextureSystem, "$category", "textureSystem");
function isImageAsset(asset) {
  return asset.type === "image";
}
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
    this.create(TextureSystem, {
      $bind: "textureSystem",
      fallback: (id) => this.getSource(id),
      ...params.textureSystem
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
class Player extends Entity {
  constructor(params = {}) {
    super(params);
    const { maxSpeed = 3, acceleration = 25 } = params;
    this.maxSpeed = maxSpeed;
    this.acceleration = acceleration;
  }
  move(direction) {
    this.direction = direction;
  }
  update(deltaTime) {
    applyMovement(this, deltaTime);
    clampVelocity(this);
    applyVelocity(this, deltaTime);
  }
}
function applyMovement(player, deltaTime) {
  var _a;
  if (((_a = player.direction) == null ? void 0 : _a.length()) > 0) {
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
class GhastWorld extends World {
  constructor(options = {}) {
    super(options);
  }
  preUpdate(deltaTime, context) {
    const direction = context.getDirection("move");
    if (this.player) {
      this.player.move(direction);
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
  update(game, deltaTime) {
    this.world.update(deltaTime, game);
  }
  spawnPlayer(options = {}) {
    return this.world.spawnPlayer(options);
  }
}
__publicField(GameController, "bindings", {
  moveUp: ["KeyW", "ArrowUp"],
  moveDown: ["KeyS", "ArrowDown"],
  moveLeft: ["KeyA", "ArrowLeft"],
  moveRight: ["KeyD", "ArrowRight"]
});
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
  sync(deltaTime) {
    super.sync(deltaTime);
    if (__privateGet(this, _stringBindings)) {
      for (let i = 0; i < __privateGet(this, _stringBindings).length; i++) {
        const { prop, entityProp } = __privateGet(this, _stringBindings)[i];
        this.root[prop] = this.entity[entityProp];
      }
    }
    if (__privateGet(this, _functionBindings)) {
      for (let i = 0; i < __privateGet(this, _functionBindings).length; i++) {
        const { prop, fn } = __privateGet(this, _functionBindings)[i];
        this.root[prop] = fn(this.entity, deltaTime);
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
class PlayerView extends EntityView {
  constructor(entity, context) {
    super(entity, context);
    this.root = new Sprite({
      region: context.game.getRegion("shade"),
      x: entity.x,
      y: entity.y,
      width: 1,
      height: 1
    });
  }
}
class GameRenderer extends PerkyModule {
  constructor(options = {}) {
    super(options);
    __privateAdd(this, _GameRenderer_instances);
    this.world = options.world;
    this.game = options.game;
    this.entitiesGroup = new Group2D({ name: "entities" });
    this.worldView = this.create(WorldView, {
      $id: "worldView",
      world: this.world,
      game: this.game
    });
    __privateMethod(this, _GameRenderer_instances, registerViews_fn).call(this);
  }
  onStart() {
    __privateMethod(this, _GameRenderer_instances, setupRenderGroups_fn).call(this);
  }
  render() {
    var _a;
    const deltaTime = ((_a = this.game.clock) == null ? void 0 : _a.deltaTime) ?? 0.016;
    this.worldView.sync(deltaTime);
    const gameLayer = this.game.getCanvas("game");
    gameLayer.markDirty();
    gameLayer.render();
  }
}
_GameRenderer_instances = new WeakSet();
registerViews_fn = function() {
  this.worldView.register(Player, PlayerView);
};
setupRenderGroups_fn = function() {
  const gameLayer = this.game.getCanvas("game");
  this.entitiesGroup.addChild(this.worldView.rootGroup);
  gameLayer.renderer.setRenderGroups([
    {
      $name: "entities",
      content: this.entitiesGroup
    }
  ]);
};
class RenderPass {
  constructor() {
    __privateAdd(this, _RenderPass_instances);
    __privateAdd(this, _enabled3, true);
    __privateAdd(this, _program2, null);
    __privateAdd(this, _uniforms2, {});
    __privateSet(this, _uniforms2, { ...this.constructor.defaultUniforms });
  }
  get enabled() {
    return __privateGet(this, _enabled3);
  }
  set enabled(value) {
    __privateSet(this, _enabled3, value);
  }
  get program() {
    return __privateGet(this, _program2);
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
    __privateSet(this, _program2, shaderRegistry.register(id, definition));
  }
  setUniform(name, value) {
    __privateGet(this, _uniforms2)[name] = value;
    return this;
  }
  render(gl, inputTexture, fullscreenQuad) {
    if (!__privateGet(this, _enabled3) || !__privateGet(this, _program2)) {
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
    for (const [name, value] of Object.entries(__privateGet(this, _uniforms2))) {
      __privateMethod(this, _RenderPass_instances, applyUniform_fn).call(this, name, value);
    }
  }
  dispose() {
    __privateSet(this, _program2, null);
    __privateSet(this, _uniforms2, {});
  }
}
_enabled3 = new WeakMap();
_program2 = new WeakMap();
_uniforms2 = new WeakMap();
_RenderPass_instances = new WeakSet();
applyUniform_fn = function(name, value) {
  var _a;
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
  (_a = setters[value.length]) == null ? void 0 : _a.call(setters);
};
__publicField(RenderPass, "shaderDefinition", null);
__publicField(RenderPass, "defaultUniforms", {});
__publicField(RenderPass, "uniformConfig", {});
class GroundPass extends RenderPass {
}
__publicField(GroundPass, "shaderDefinition", {
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
            uniform vec2 uCameraPos;
            uniform vec2 uResolution;
            uniform float uPixelsPerUnit;
            uniform float uTileSize;
            uniform float uTime;

            in vec2 vTexCoord;
            out vec4 fragColor;

            // Colors
            const vec3 COLOR_LIGHT = vec3(0.68, 0.66, 0.64);
            const vec3 COLOR_DARK = vec3(0.52, 0.50, 0.48);

            float hash(vec2 p) {
                return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
            }

            vec2 hash2(vec2 p) {
                return vec2(
                    fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453),
                    fract(sin(dot(p, vec2(269.5, 183.3))) * 43758.5453)
                );
            }

            float noise(vec2 p) {
                vec2 i = floor(p);
                vec2 f = fract(p);
                f = f * f * (3.0 - 2.0 * f);
                float a = hash(i);
                float b = hash(i + vec2(1.0, 0.0));
                float c = hash(i + vec2(0.0, 1.0));
                float d = hash(i + vec2(1.0, 1.0));
                return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
            }

            // Check if a tile should be "light" (the puffy squares)
            bool isLightTile(vec2 tileIndex) {
                return mod(tileIndex.x + tileIndex.y, 2.0) < 0.5;
            }

            // Distance to a curly tendril path
            float curlTendril(vec2 p, vec2 tileIndex, int tendrilId, float time) {
                vec2 seed = tileIndex + vec2(float(tendrilId) * 7.77, float(tendrilId) * 3.33);

                // Starting direction from tile edge
                float startAngle = hash(seed) * 6.28;
                vec2 startDir = vec2(cos(startAngle), sin(startAngle));

                // Start position at edge of tile (radius ~0.5)
                vec2 startPos = startDir * 0.48;

                // Animated length - slow breathing effect
                float timeOffset = hash(seed * 6.66) * 6.28;
                float breatheSpeed = 0.3 + hash(seed * 7.77) * 0.2; // 0.3 to 0.5 - slow
                float breathe = sin(time * breatheSpeed + timeOffset) * 0.5 + 0.5; // 0 to 1

                // Tendril properties - more variation in length, bigger amplitude
                float baseLength = 0.1 + hash(seed * 1.1) * 0.4; // 0.1 to 0.5
                float totalLength = baseLength * (0.4 + breathe * 0.6); // animate between 40% and 100%

                // Wiggle speed - moderate and varies per tendril
                float wiggleSpeed = 1.2 + hash(seed * 8.88) * 1.0; // 1.2 to 2.2
                float baseWidth = 0.015 + hash(seed * 2.2) * 0.01;
                float curliness = 1.0 + hash(seed * 3.3) * 1.5;
                float curlFreq = 3.0 + hash(seed * 4.4) * 2.0;

                // March along the tendril and find closest point
                float minDist = 1.0;
                vec2 pos = startPos;

                for (int step = 0; step < 30; step++) {
                    float t = float(step) / 29.0;

                    // Curl the direction as we go outward - with animated wiggle
                    // Wiggle increases along the tendril (tip moves more than base)
                    float wiggle = sin(time * wiggleSpeed + t * 3.0 + timeOffset) * 0.8 * t;
                    float curlAngle = startAngle + wiggle + sin(t * curlFreq + hash(seed * 5.5) * 6.28) * curliness * t;
                    vec2 dir = vec2(cos(curlAngle), sin(curlAngle));

                    // Width tapers toward tip
                    float width = baseWidth * (1.0 - t * 0.8);

                    // Distance from query point to this segment
                    float d = length(p - pos) - width;
                    minDist = min(minDist, d);

                    // Move along path
                    float stepSize = totalLength / 29.0;
                    pos += dir * stepSize;
                }

                return minDist;
            }

            // Tendril extensions from tile edges
            float tendrilDistance(vec2 localPos, vec2 tileIndex, float time) {
                vec2 p = localPos - 0.5;

                // Determine if this tile has tendrils
                float damageLevel = hash(tileIndex * 3.33);
                if (damageLevel < 0.5) return 1.0;

                float minDist = 1.0;
                int numTendrils = 2 + int(hash(tileIndex * 4.44) * 3.0);

                for (int i = 0; i < 4; i++) {
                    if (i >= numTendrils) break;
                    float d = curlTendril(p, tileIndex, i, time);
                    minDist = min(minDist, d);
                }

                return minDist;
            }

            // Distance to a puffy square blob with subtle imperfections
            float blobDistance(vec2 localPos, vec2 tileIndex, float time) {
                vec2 p = localPos - 0.5;

                // Squircle - sweet spot for slight corner rounding
                float squareness = 12.0;
                float baseDist = pow(pow(abs(p.x), squareness) + pow(abs(p.y), squareness), 1.0 / squareness);

                // Size - slightly overflow into dark tiles
                float size = 0.51 + hash(tileIndex) * 0.01;

                // Subtle edge wobble
                float angle = atan(p.y, p.x);
                float wobble = 0.0;
                wobble += sin(angle * 8.0 + hash(tileIndex * 1.1) * 6.28) * 0.004;
                wobble += sin(angle * 13.0 + hash(tileIndex * 2.2) * 6.28) * 0.003;
                wobble += (noise(tileIndex * 2.0 + vec2(cos(angle), sin(angle)) * 0.5) - 0.5) * 0.008;

                float blobDist = baseDist - size - wobble;

                // Combine with tendrils
                float tendrilDist = tendrilDistance(localPos, tileIndex, time);

                return min(blobDist, tendrilDist);
            }

            // Paint splatters
            float splatter(vec2 worldPos, out float grayBlend) {
                float result = 0.0;
                grayBlend = 0.5;

                // Multiple scales of splatters
                for (int layer = 0; layer < 3; layer++) {
                    float scale = 8.0 + float(layer) * 6.0;
                    vec2 p = worldPos * scale;
                    vec2 cellId = floor(p);
                    vec2 cellUv = fract(p);

                    for (int y = -1; y <= 1; y++) {
                        for (int x = -1; x <= 1; x++) {
                            vec2 offset = vec2(float(x), float(y));
                            vec2 cell = cellId + offset;

                            float chance = hash(cell * 0.31 + float(layer) * 100.0);
                            if (chance < 0.88) continue;

                            vec2 center = hash2(cell * 1.7);
                            vec2 diff = offset + center - cellUv;

                            // Blobby shape
                            float angle = atan(diff.y, diff.x);
                            float shapeVar = 0.8 + 0.2 * sin(angle * 3.0 + hash(cell) * 6.28);
                            shapeVar *= 0.9 + 0.1 * sin(angle * 5.0 + hash(cell * 2.0) * 6.28);
                            float dist = length(diff) / shapeVar;

                            float radius = 0.15 + hash(cell * 2.3) * 0.2;
                            float blob = 1.0 - smoothstep(radius * 0.5, radius, dist);

                            if (blob > result) {
                                result = blob;
                                grayBlend = hash(cell * 3.7);
                            }
                        }
                    }
                }

                return result;
            }

            void main() {
                vec2 screenCenter = uResolution * 0.5;
                vec2 pixelPos = vTexCoord * uResolution;
                vec2 worldPos = uCameraPos + (pixelPos - screenCenter) / uPixelsPerUnit;

                // Tile coordinates
                vec2 tilePos = worldPos / uTileSize;
                vec2 tileIndex = floor(tilePos);
                vec2 tileLocal = fract(tilePos);

                // Start with dark background
                vec3 baseColor = COLOR_DARK;
                float variation = hash(tileIndex * 1.1) * 0.03 - 0.015;
                baseColor += variation;

                // Check current and neighboring tiles for light blobs
                float minDist = 1.0;
                vec2 closestLightTile = tileIndex;

                for (int dy = -1; dy <= 1; dy++) {
                    for (int dx = -1; dx <= 1; dx++) {
                        vec2 neighbor = tileIndex + vec2(float(dx), float(dy));

                        if (isLightTile(neighbor)) {
                            vec2 localInNeighbor = tileLocal - vec2(float(dx), float(dy));
                            float d = blobDistance(localInNeighbor, neighbor, uTime);

                            if (d < minDist) {
                                minDist = d;
                                closestLightTile = neighbor;
                            }
                        }
                    }
                }

                // Smooth transition between light and dark tiles
                float pixelSize = 1.0 / uPixelsPerUnit;
                float edgeSmooth = pixelSize * 1.5; // Smooth over ~1.5 pixels
                float lightBlend = 1.0 - smoothstep(-edgeSmooth, edgeSmooth, minDist);

                vec3 darkColor = COLOR_DARK + hash(tileIndex * 1.1) * 0.03 - 0.015;
                vec3 lightColor = COLOR_LIGHT + hash(closestLightTile * 2.2) * 0.03 - 0.015;
                baseColor = mix(darkColor, lightColor, lightBlend);

                // Paint splatters
                float grayBlend;
                float splatIntensity = splatter(worldPos, grayBlend);
                if (splatIntensity > 0.0) {
                    vec3 splatColor = mix(COLOR_DARK - 0.03, COLOR_LIGHT + 0.03, grayBlend);
                    baseColor = mix(baseColor, splatColor, splatIntensity * 0.6);
                }

                // Composite with scene
                vec4 sceneColor = texture(uTexture, vTexCoord);
                fragColor = vec4(mix(baseColor, sceneColor.rgb, sceneColor.a), 1.0);
            }
        `,
  uniforms: ["uTexture", "uCameraPos", "uResolution", "uPixelsPerUnit", "uTileSize", "uTime"],
  attributes: ["aPosition", "aTexCoord"]
});
__publicField(GroundPass, "defaultUniforms", {
  uCameraPos: [0, 0],
  uResolution: [800, 600],
  uPixelsPerUnit: 100,
  uTileSize: 1,
  uTime: 0
});
const manifest = {
  config: {
    name: "Ghast"
  },
  assets: {
    shade: { type: "image", url: "./assets/images/shade.png" }
  }
};
class Ghast extends Game {
  constructor(params = {}) {
    const renderSystemConfig = {
      cameras: {
        main: {
          unitsInView: { width: 8, height: 6 }
        }
      },
      layers: [
        {
          name: "game",
          type: "webgl",
          camera: "main",
          backgroundColor: "transparent"
        }
      ]
    };
    super({
      ...params,
      renderSystem: renderSystemConfig
    });
    __privateAdd(this, _Ghast_instances);
  }
  configureGame() {
    this.world = this.create(GhastWorld);
    this.camera = this.renderSystem.getCamera("main");
    this.registerController("game", GameController);
    this.setActiveControllers(["game"]);
    const gameController = this.getController("game");
    gameController.world = this.world;
    this.renderer = this.create(GameRenderer, {
      $id: "renderer",
      world: this.world,
      game: this
    });
    gameController.renderer = this.renderer;
    const gameLayer = this.getCanvas("game");
    this.groundPass = new GroundPass();
    gameLayer.renderer.addPostPass(this.groundPass);
    this.on("update", () => {
      __privateMethod(this, _Ghast_instances, updateCamera_fn).call(this);
      __privateMethod(this, _Ghast_instances, updateGroundPass_fn).call(this);
    });
    this.on("render", () => {
      this.renderer.render();
    });
  }
  onStart() {
    __privateMethod(this, _Ghast_instances, buildTextureAtlases_fn).call(this);
    this.execute("spawnPlayer", { x: 0, y: 0 });
  }
}
_Ghast_instances = new WeakSet();
updateCamera_fn = function() {
  const player = this.world.player;
  if (player) {
    this.camera.x = player.x;
    this.camera.y = player.y;
  }
};
updateGroundPass_fn = function() {
  const gameLayer = this.getCanvas("game");
  this.groundPass.setUniform("uCameraPos", [this.camera.x, this.camera.y]);
  this.groundPass.setUniform("uResolution", [gameLayer.canvas.width, gameLayer.canvas.height]);
  this.groundPass.setUniform("uPixelsPerUnit", this.camera.pixelsPerUnit);
  this.groundPass.setUniform("uTime", performance.now() / 1e3);
};
buildTextureAtlases_fn = function() {
  const assets = this.getAllAssets();
  this.textureSystem.buildFromAssets(assets);
};
__publicField(Ghast, "$name", "ghast");
__publicField(Ghast, "manifest", manifest);
async function init() {
  const appManager = new ApplicationManager();
  appManager.register("ghast", Ghast);
  appManager.start();
  const container = document.getElementById("ghast");
  const app = await appManager.spawn("ghast", {
    container,
    preload: "all"
  });
  window.ghast = app;
  window.appManager = appManager;
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
