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
var _resizeObserver, _autoFitEnabled, _BaseRenderer_instances, updateAutoFitObserver_fn, refreshAutoFit_fn, _x, _y, _rotation, _scaleX, _scaleY, _pivotX, _pivotY, _localMatrix, _worldMatrix, _dirty, _sortedChildren, _childrenNeedSort, _tint, _debugGizmos, _depth, _enabled, _effects, _region, _effects2, _gl, _program, _uniforms, _attributes, _ShaderProgram_instances, createShader_fn, createProgram_fn, _gl2, _programs, _defaults, _gl3, _shaderRegistry, _effects3, _shaderCache, _uniformValues, _uniformTypes, _ShaderEffectRegistry_instances, collectUniforms_fn, parseUniform_fn, compileShader_fn, _gl4, _width, _height, _samples, _msaaFramebuffer, _msaaRenderbuffer, _sceneFramebuffer, _sceneTexture, _pingPongFramebuffers, _pingPongTextures, _currentPingPong, _namedBuffers, _FramebufferManager_instances, createFramebuffers_fn, createMSAAFramebuffer_fn, createResolveFramebuffer_fn, createFramebuffer_fn, resizeNamedBuffers_fn, deleteFramebuffers_fn, _vertexBuffer, _texCoordBuffer, _FullscreenQuad_instances, createBuffers_fn, _gl5, _shaderRegistry2, _framebufferManager, _fullscreenQuad, _passes, _enabled2, _gl6, _active, _zombies, _zombieSize, _flushInterval, _WebGLTextureManager_instances, resurrect_fn, createEntry_fn, createTexture_fn, deleteTexture_fn, _initialized, _RenderGroup_instances, initTransform_fn, initPasses_fn, _gl7, _context, _collected, _tempCorners, _tempTexCoords, _WebGLSpriteBatch_instances, ensureTexture_fn, writeVertices_fn, bindOptionalAttributes_fn, _spriteBatch, _shaderEffectRegistry, _WebGLSpriteRenderer_instances, groupByShaderEffects_fn, getProgramForEffects_fn, _vertexBuffer2, _vertexBuffer3, _gizmoObjects, _rendererRegistry, _renderers, _shaderRegistry3, _shaderEffectRegistry2, _debugGizmoRenderer, _compositeQuad, _compositeProgram, _renderGroupOrder, _WebGLRenderer_instances, setupWebGL_fn, setupBuiltinShaders_fn, setupDefaultRenderers_fn, ensureCompositeSetup_fn, setupCompositeShader_fn, getMatrices_fn, renderSingleScene_fn, renderWithGroups_fn, renderGroupsToTextures_fn, renderGroupToTexture_fn, compositeGroups_fn, drawAllGroups_fn, drawGroup_fn, resetStats_fn, clearWithBackground_fn, applyGroupPasses_fn, applyBlendMode_fn, _elapsed, _events, _framesByEvent, _pingpongDirection, _SpriteAnimation_instances, advanceFrame_fn, getNextFrameIndex_fn, getNextForward_fn, getNextReverse_fn, getNextPingpong_fn, emitFrameEvents_fn, updateSpriteFrame_fn, _value, _min, _max, _step, _label, _slider, _labelEl, _valueEl, _SliderInput_instances, buildDOM_fn, updateDisplay_fn, handleInput_fn, clamp_fn, _checked, _label2, _toggle, _labelEl2, _ToggleInput_instances, buildDOM_fn2, updateDisplay_fn2, handleClick_fn, _value2, _step2, _precision, _label3, _min2, _max2, _input, _labelEl3, _decrementBtn, _incrementBtn, _isDragging, _dragStartX, _dragStartValue, _onDragMove, _onDragEnd, _NumberInput_instances, buildDOM_fn3, updateDisplay_fn3, handleInputChange_fn, handleBlur_fn, handleKeyDown_fn, handleStep_fn, adjustValue_fn, clamp_fn2, startDrag_fn, _perm, _gradP, _Color_instances, parseString_fn, parseHex_fn, parseRgbString_fn, parseHslString_fn, parseNumber_fn, parseArray_fn, parseObject_fn, hslToRgb_fn, _canvas, _renderer, _camera, _scene, _backgroundSprite, _animatorSprite, _animation, _anchor, _size, _unitsInView, _isPlaying, _lastTime, _animationFrameId, _onFrame, _onComplete, _spriteX, _motion, _AnimatorPreview_instances, setup_fn, updateBackground_fn, updateAnimatorSprite_fn, loop_fn, updateMotion_fn, getSpriteDirection_fn, _canvas2, _previewArea, _renderer2, _scene2, _sprite, _animation2, _animationFrameId2, _lastTime2, _isPlaying2, _resizeObserver2, _sceneryEnabled, _sceneryOffset, _spriteOffset, _sceneryCanvas, _sceneryCtx, _gridCanvas, _gridCtx, _gridEnabled, _motion2, _anchor2, _noise, _moveSpriteMode, _backgroundImage, _backgroundRegion, _unitsInView2, _size2, _gamePreview, _gamePreviewCanvas, _AnimationPreview_instances, buildDOM_fn4, toggleSettings_fn, hasMotion_get, sceneryActive_get, toggleScenery_fn, toggleGrid_fn, syncGridButton_fn, useGamePreview_get, updateGamePreviewConfig_fn, applyGamePreviewSettings_fn, createGamePreview_fn, updatePlayButtonIcon_fn, syncPreviewVisibility_fn, syncSceneryState_fn, updateSceneryButton_fn, pauseAllPreviews_fn, setupNormalPreview_fn, updateGamePreviewSize_fn, centerSprite_fn, setupRenderer_fn, updateSprite_fn, setupResizeObserver_fn, resizeCanvas_fn, fitToContainer_fn, updateSceneryCanvas_fn, updateGridCanvas_fn, togglePlay_fn, loop_fn2, updateScenery_fn, wrapSpritePosition_fn, getSpriteDirection_fn2, clearSceneryCanvas_fn, renderScenery_fn, renderSimpleGrid_fn, getSpriteSize_fn, renderSidescroller_fn, renderBackgroundImage_fn, renderBuildings_fn, getGroundY_fn, renderTopdown_fn, render_fn, renderGrid_fn, updateSpritePosition_fn, _wrapperEl, _viewportEl, _containerEl, _scrubberEl, _scrubberThumbEl, _frames, _currentIndex, _selectedIndex, _dropIndex, _scrollLeft, _maxScroll, _scrubberDragging, _scrubberStartX, _scrubberStartScroll, _internalDragActive, _internalDragIndex, _internalDragGhost, _internalDragStartX, _internalDragStartY, _isDragOutside, _dragFrameStep, _AnimationTimeline_instances, buildDOM_fn5, setupScrubber_fn, _boundScrubberMove, _boundScrubberUp, cleanupScrubberEvents_fn, _boundPointerMove, _boundPointerUp, setupInternalDrag_fn, cleanupInternalDrag_fn, onInternalDragStart_fn, onInternalDragMove_fn, isPointerOutsideTimeline_fn, updateDragGhostState_fn, onInternalDragEnd_fn, updateFrameGaps_fn, applySourceGap_fn, clearFrameGaps_fn, markFrameDragging_fn, createInternalDragGhost_fn, updateInternalDragGhost_fn, removeInternalDragGhost_fn, onScrubberStart_fn, onScrubberMove_fn, updateScrollFromScrubber_fn, setScrollLeft_fn, onScrubberEnd_fn, onScrubberClick_fn, updateScrubberThumb_fn, setupDeselect_fn, calculateDropIndex_fn, render_fn2, createAddButton_fn, createFrameElement_fn, updateHighlight_fn, handleFrameTap_fn, dispatchDeleteEvent_fn, handleKeydown_fn, _containerEl2, _filterEl, _gridEl, _spritesheet, _filter, _animationColorMap, _SpritesheetViewer_instances, buildDOM_fn6, buildAnimationColorMap_fn, renderFilter_fn, renderGrid_fn2, getFilteredFrames_fn, createFrameElement_fn2;
import { P as PerkyModule, f as TextureRegion, E as EditorComponent, I as ICONS } from "./perky_store-C6_wT1fL.js";
import { l as logger, b as createStyleSheet, c as createElement } from "./preload-helper-CeD19KcA.js";
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
    if (__privateGet(this, _dirty)) {
      return;
    }
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
class Sprite extends Object2D {
  constructor(options = {}) {
    super(options);
    __privateAdd(this, _region, null);
    __privateAdd(this, _effects2, null);
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
    if (!__privateGet(this, _effects2)) {
      __privateSet(this, _effects2, new SpriteEffectStack());
    }
    return __privateGet(this, _effects2);
  }
  get renderHints() {
    const parentHints = super.renderHints;
    const hasEffects = __privateGet(this, _effects2) !== null && __privateGet(this, _effects2).count > 0;
    if (!parentHints && !hasEffects) {
      return null;
    }
    const hints = parentHints ? { ...parentHints } : {};
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
_effects2 = new WeakMap();
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
    __privateAdd(this, _enabled2, true);
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
    var _a;
    this.width = width;
    this.height = height;
    (_a = __privateGet(this, _framebufferManager)) == null ? void 0 : _a.resize(width, height);
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
_enabled2 = new WeakMap();
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
    r: hueToRgb$1(p, q, h + 1 / 3),
    g: hueToRgb$1(p, q, h),
    b: hueToRgb$1(p, q, h - 1 / 3)
  };
}
function hueToRgb$1(p, q, t) {
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
    const resolvedConfig = config || {
      anchor: this.constructor.anchor,
      animations: this.constructor.animations
    };
    this.anchor = resolvedConfig.anchor || { x: 0.5, y: 0.5 };
    if (resolvedConfig.animations) {
      this.loadConfig(resolvedConfig.animations);
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
      if (animConfig.motion) {
        animation.motion = animConfig.motion;
      }
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
const controlsSheet = createStyleSheet(controlsCSS);
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
class SliderInput extends EditorComponent {
  constructor() {
    super();
    __privateAdd(this, _SliderInput_instances);
    __privateAdd(this, _value, 0);
    __privateAdd(this, _min, 0);
    __privateAdd(this, _max, 100);
    __privateAdd(this, _step, 1);
    __privateAdd(this, _label, "");
    __privateAdd(this, _slider, null);
    __privateAdd(this, _labelEl, null);
    __privateAdd(this, _valueEl, null);
    __privateMethod(this, _SliderInput_instances, buildDOM_fn).call(this);
  }
  static get observedAttributes() {
    return ["value", "min", "max", "step", "label"];
  }
  onConnected() {
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
    if (__privateGet(this, _labelEl)) {
      __privateGet(this, _labelEl).textContent = __privateGet(this, _label);
    }
  }
}
_value = new WeakMap();
_min = new WeakMap();
_max = new WeakMap();
_step = new WeakMap();
_label = new WeakMap();
_slider = new WeakMap();
_labelEl = new WeakMap();
_valueEl = new WeakMap();
_SliderInput_instances = new WeakSet();
buildDOM_fn = function() {
  const container = createElement("div", { class: "slider-input-container" });
  __privateSet(this, _labelEl, createElement("span", {
    class: "slider-input-label",
    text: __privateGet(this, _label)
  }));
  __privateSet(this, _slider, createElement("input", {
    type: "range",
    class: "slider-input-track",
    min: __privateGet(this, _min),
    max: __privateGet(this, _max),
    step: __privateGet(this, _step)
  }));
  __privateGet(this, _slider).addEventListener("input", () => __privateMethod(this, _SliderInput_instances, handleInput_fn).call(this));
  __privateSet(this, _valueEl, createElement("span", { class: "slider-input-value" }));
  container.appendChild(__privateGet(this, _labelEl));
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
__publicField(SliderInput, "styles", [controlsSheet, sliderInputCSS]);
function formatSliderValue(value) {
  if (Math.abs(value) < 0.01) {
    return value.toFixed(3);
  }
  return value.toFixed(2);
}
customElements.define("slider-input", SliderInput);
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
class ToggleInput extends EditorComponent {
  constructor() {
    super();
    __privateAdd(this, _ToggleInput_instances);
    __privateAdd(this, _checked, false);
    __privateAdd(this, _label2, "");
    __privateAdd(this, _toggle, null);
    __privateAdd(this, _labelEl2, null);
    __privateMethod(this, _ToggleInput_instances, buildDOM_fn2).call(this);
  }
  static get observedAttributes() {
    return ["checked", "label"];
  }
  onConnected() {
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
    if (__privateGet(this, _labelEl2)) {
      __privateGet(this, _labelEl2).textContent = __privateGet(this, _label2);
    }
  }
}
_checked = new WeakMap();
_label2 = new WeakMap();
_toggle = new WeakMap();
_labelEl2 = new WeakMap();
_ToggleInput_instances = new WeakSet();
buildDOM_fn2 = function() {
  const container = createElement("div", { class: "toggle-input-container" });
  __privateSet(this, _toggle, createElement("div", { class: "toggle-input-track" }));
  __privateGet(this, _toggle).addEventListener("click", () => __privateMethod(this, _ToggleInput_instances, handleClick_fn).call(this));
  const thumb = createElement("div", { class: "toggle-input-thumb" });
  __privateGet(this, _toggle).appendChild(thumb);
  __privateSet(this, _labelEl2, createElement("span", {
    class: "toggle-input-label",
    text: __privateGet(this, _label2)
  }));
  __privateGet(this, _labelEl2).addEventListener("click", () => __privateMethod(this, _ToggleInput_instances, handleClick_fn).call(this));
  container.appendChild(__privateGet(this, _toggle));
  container.appendChild(__privateGet(this, _labelEl2));
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
__publicField(ToggleInput, "styles", [controlsSheet, toggleInputCSS]);
customElements.define("toggle-input", ToggleInput);
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
class NumberInput extends EditorComponent {
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
    __privateAdd(this, _labelEl3, null);
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
      if (__privateGet(this, _labelEl3)) {
        __privateGet(this, _labelEl3).classList.remove("dragging");
      }
      document.body.style.cursor = "";
      document.removeEventListener("pointermove", __privateGet(this, _onDragMove));
      document.removeEventListener("pointerup", __privateGet(this, _onDragEnd));
      document.removeEventListener("pointercancel", __privateGet(this, _onDragEnd));
    });
    __privateMethod(this, _NumberInput_instances, buildDOM_fn3).call(this);
  }
  static get observedAttributes() {
    return ["value", "step", "precision", "label", "min", "max"];
  }
  onConnected() {
    __privateMethod(this, _NumberInput_instances, updateDisplay_fn3).call(this);
  }
  onDisconnected() {
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
    if (__privateGet(this, _labelEl3)) {
      __privateGet(this, _labelEl3).textContent = __privateGet(this, _label3);
    }
  }
  setMin(val) {
    __privateSet(this, _min2, val);
  }
  setMax(val) {
    __privateSet(this, _max2, val);
  }
  setCompact(val) {
    if (val) {
      this.setAttribute("compact", "");
    } else {
      this.removeAttribute("compact");
    }
  }
}
_value2 = new WeakMap();
_step2 = new WeakMap();
_precision = new WeakMap();
_label3 = new WeakMap();
_min2 = new WeakMap();
_max2 = new WeakMap();
_input = new WeakMap();
_labelEl3 = new WeakMap();
_decrementBtn = new WeakMap();
_incrementBtn = new WeakMap();
_isDragging = new WeakMap();
_dragStartX = new WeakMap();
_dragStartValue = new WeakMap();
_onDragMove = new WeakMap();
_onDragEnd = new WeakMap();
_NumberInput_instances = new WeakSet();
buildDOM_fn3 = function() {
  const container = createElement("div", { class: "number-input-container" });
  __privateSet(this, _labelEl3, createElement("span", { class: "number-input-label", text: __privateGet(this, _label3) }));
  __privateGet(this, _labelEl3).addEventListener("pointerdown", (e) => __privateMethod(this, _NumberInput_instances, startDrag_fn).call(this, e));
  __privateSet(this, _input, createElement("input", {
    class: "number-input-field",
    type: "text",
    attrs: { inputmode: "decimal" }
  }));
  __privateGet(this, _input).addEventListener("input", () => __privateMethod(this, _NumberInput_instances, handleInputChange_fn).call(this));
  __privateGet(this, _input).addEventListener("keydown", (e) => __privateMethod(this, _NumberInput_instances, handleKeyDown_fn).call(this, e));
  __privateGet(this, _input).addEventListener("blur", () => __privateMethod(this, _NumberInput_instances, handleBlur_fn).call(this));
  __privateGet(this, _input).addEventListener("focus", () => __privateGet(this, _input).select());
  const stepperContainer = createElement("div", { class: "number-input-steppers" });
  __privateSet(this, _decrementBtn, createElement("button", { class: "number-input-stepper", html: "◀" }));
  __privateGet(this, _decrementBtn).tabIndex = -1;
  __privateGet(this, _decrementBtn).addEventListener("click", (e) => __privateMethod(this, _NumberInput_instances, handleStep_fn).call(this, -1, e));
  __privateSet(this, _incrementBtn, createElement("button", { class: "number-input-stepper", html: "▶" }));
  __privateGet(this, _incrementBtn).tabIndex = -1;
  __privateGet(this, _incrementBtn).addEventListener("click", (e) => __privateMethod(this, _NumberInput_instances, handleStep_fn).call(this, 1, e));
  stepperContainer.appendChild(__privateGet(this, _decrementBtn));
  stepperContainer.appendChild(__privateGet(this, _incrementBtn));
  container.appendChild(__privateGet(this, _labelEl3));
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
handleBlur_fn = function() {
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
  if (__privateGet(this, _labelEl3)) {
    __privateGet(this, _labelEl3).classList.add("dragging");
  }
  document.body.style.cursor = "ew-resize";
  document.addEventListener("pointermove", __privateGet(this, _onDragMove));
  document.addEventListener("pointerup", __privateGet(this, _onDragEnd));
  document.addEventListener("pointercancel", __privateGet(this, _onDragEnd));
};
__publicField(NumberInput, "styles", [controlsSheet, numberInputCSS]);
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
class Noise {
  constructor(seed = 0) {
    __privateAdd(this, _perm, []);
    __privateAdd(this, _gradP, []);
    this.seed(seed);
  }
  seed(seed) {
    const p = buildPermutation(seed);
    __privateSet(this, _perm, new Array(512));
    __privateSet(this, _gradP, new Array(512));
    for (let i = 0; i < 256; i++) {
      __privateGet(this, _perm)[i] = p[i];
      __privateGet(this, _perm)[i + 256] = p[i];
      __privateGet(this, _gradP)[i] = GRAD3[p[i] % 12];
      __privateGet(this, _gradP)[i + 256] = GRAD3[p[i] % 12];
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
  fbm(x, y, { octaves = 4, lacunarity = 2, persistence = 0.5 } = {}) {
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
function buildPermutation(seed) {
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
    this.r += (other.r - this.r) * ratio;
    this.g += (other.g - this.g) * ratio;
    this.b += (other.b - this.b) * ratio;
    this.a += (other.a - this.a) * ratio;
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
    this.a = match[4] === void 0 ? 1 : parseFloat(match[4]);
  }
};
parseHslString_fn = function(str) {
  const match = str.match(/hsla?\(\s*(\d+)\s*,\s*(\d+)%?\s*,\s*(\d+)%?\s*(?:,\s*([\d.]+)\s*)?\)/);
  if (match) {
    const h = parseInt(match[1], 10) / 360;
    const s = parseInt(match[2], 10) / 100;
    const l = parseInt(match[3], 10) / 100;
    this.a = match[4] === void 0 ? 1 : parseFloat(match[4]);
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
    this.r = l;
    this.g = l;
    this.b = l;
    return;
  }
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  this.r = hueToRgb(p, q, h + 1 / 3);
  this.g = hueToRgb(p, q, h);
  this.b = hueToRgb(p, q, h - 1 / 3);
};
let Color = _Color;
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
class AnimatorPreview {
  constructor({ canvas, unitsInView, onFrame, onComplete } = {}) {
    __privateAdd(this, _AnimatorPreview_instances);
    __privateAdd(this, _canvas, null);
    __privateAdd(this, _renderer, null);
    __privateAdd(this, _camera, null);
    __privateAdd(this, _scene, null);
    __privateAdd(this, _backgroundSprite, null);
    __privateAdd(this, _animatorSprite, null);
    __privateAdd(this, _animation, null);
    __privateAdd(this, _anchor, { x: 0.5, y: 0 });
    __privateAdd(this, _size, { width: 1, height: 1 });
    __privateAdd(this, _unitsInView, { width: 7, height: 5 });
    __privateAdd(this, _isPlaying, false);
    __privateAdd(this, _lastTime, 0);
    __privateAdd(this, _animationFrameId, null);
    __privateAdd(this, _onFrame, null);
    __privateAdd(this, _onComplete, null);
    __privateAdd(this, _spriteX, 0);
    __privateAdd(this, _motion, null);
    __privateSet(this, _canvas, canvas);
    if (unitsInView) {
      __privateSet(this, _unitsInView, unitsInView);
    }
    __privateSet(this, _onFrame, onFrame);
    __privateSet(this, _onComplete, onComplete);
    __privateMethod(this, _AnimatorPreview_instances, setup_fn).call(this);
  }
  setUnitsInView(unitsInView) {
    __privateSet(this, _unitsInView, unitsInView);
    __privateGet(this, _camera).setUnitsInView(unitsInView);
    __privateMethod(this, _AnimatorPreview_instances, updateBackground_fn).call(this);
  }
  setSize(size) {
    __privateSet(this, _size, size || { width: 1, height: 1 });
    __privateMethod(this, _AnimatorPreview_instances, updateAnimatorSprite_fn).call(this);
  }
  setMotion(motion) {
    __privateSet(this, _motion, motion);
  }
  setBackgroundRegion(region) {
    if (!region) {
      __privateGet(this, _backgroundSprite).visible = false;
      return;
    }
    __privateGet(this, _backgroundSprite).region = region;
    __privateMethod(this, _AnimatorPreview_instances, updateBackground_fn).call(this);
    __privateGet(this, _backgroundSprite).visible = true;
  }
  setAnimation(animation) {
    __privateSet(this, _animation, animation);
    __privateSet(this, _spriteX, 0);
    __privateMethod(this, _AnimatorPreview_instances, updateAnimatorSprite_fn).call(this);
  }
  setAnchor(anchor) {
    __privateSet(this, _anchor, anchor || { x: 0.5, y: 0 });
    __privateMethod(this, _AnimatorPreview_instances, updateAnimatorSprite_fn).call(this);
  }
  resize(width, height) {
    __privateGet(this, _canvas).width = width;
    __privateGet(this, _canvas).height = height;
    __privateGet(this, _renderer).displayWidth = width;
    __privateGet(this, _renderer).displayHeight = height;
    __privateGet(this, _renderer).applyPixelRatio();
    __privateGet(this, _camera).viewportWidth = width;
    __privateGet(this, _camera).viewportHeight = height;
    __privateMethod(this, _AnimatorPreview_instances, updateAnimatorSprite_fn).call(this);
  }
  play() {
    if (__privateGet(this, _isPlaying) || !__privateGet(this, _animation)) {
      return;
    }
    __privateSet(this, _isPlaying, true);
    __privateGet(this, _animation).play();
    __privateSet(this, _lastTime, performance.now());
    __privateSet(this, _animationFrameId, requestAnimationFrame((t) => __privateMethod(this, _AnimatorPreview_instances, loop_fn).call(this, t)));
  }
  pause() {
    var _a;
    __privateSet(this, _isPlaying, false);
    (_a = __privateGet(this, _animation)) == null ? void 0 : _a.pause();
    if (__privateGet(this, _animationFrameId)) {
      cancelAnimationFrame(__privateGet(this, _animationFrameId));
      __privateSet(this, _animationFrameId, null);
    }
  }
  stop() {
    var _a, _b;
    this.pause();
    (_a = __privateGet(this, _animation)) == null ? void 0 : _a.stop();
    __privateSet(this, _spriteX, 0);
    __privateMethod(this, _AnimatorPreview_instances, updateAnimatorSprite_fn).call(this);
    this.render();
    (_b = __privateGet(this, _onComplete)) == null ? void 0 : _b.call(this);
  }
  render() {
    __privateGet(this, _renderer).render(__privateGet(this, _scene));
  }
  seekToFrame(index) {
    if (!__privateGet(this, _animation)) {
      return;
    }
    __privateGet(this, _animation).seekToFrame(index);
    __privateMethod(this, _AnimatorPreview_instances, updateAnimatorSprite_fn).call(this);
    this.render();
  }
  get isPlaying() {
    return __privateGet(this, _isPlaying);
  }
  get animation() {
    return __privateGet(this, _animation);
  }
  get sprite() {
    return __privateGet(this, _animatorSprite);
  }
  get currentIndex() {
    var _a;
    return ((_a = __privateGet(this, _animation)) == null ? void 0 : _a.currentIndex) ?? 0;
  }
  dispose() {
    this.stop();
    __privateSet(this, _renderer, null);
    __privateSet(this, _scene, null);
  }
}
_canvas = new WeakMap();
_renderer = new WeakMap();
_camera = new WeakMap();
_scene = new WeakMap();
_backgroundSprite = new WeakMap();
_animatorSprite = new WeakMap();
_animation = new WeakMap();
_anchor = new WeakMap();
_size = new WeakMap();
_unitsInView = new WeakMap();
_isPlaying = new WeakMap();
_lastTime = new WeakMap();
_animationFrameId = new WeakMap();
_onFrame = new WeakMap();
_onComplete = new WeakMap();
_spriteX = new WeakMap();
_motion = new WeakMap();
_AnimatorPreview_instances = new WeakSet();
setup_fn = function() {
  __privateSet(this, _camera, new Camera({
    viewportWidth: __privateGet(this, _canvas).width,
    viewportHeight: __privateGet(this, _canvas).height
  }));
  __privateGet(this, _camera).setUnitsInView(__privateGet(this, _unitsInView));
  __privateSet(this, _renderer, new WebGLRenderer({
    canvas: __privateGet(this, _canvas),
    backgroundColor: "transparent"
  }));
  __privateGet(this, _renderer).camera = __privateGet(this, _camera);
  __privateSet(this, _scene, new Group2D());
  __privateSet(this, _backgroundSprite, new Sprite({ x: 0, y: 0 }));
  __privateGet(this, _scene).addChild(__privateGet(this, _backgroundSprite));
  __privateSet(this, _animatorSprite, new Sprite({ x: 0, y: 0 }));
  __privateGet(this, _scene).addChild(__privateGet(this, _animatorSprite));
};
updateBackground_fn = function() {
  const region = __privateGet(this, _backgroundSprite).region;
  if (!region) {
    return;
  }
  const backgroundHeight = __privateGet(this, _unitsInView).height;
  const backgroundWidth = region.width / region.height * backgroundHeight;
  __privateGet(this, _backgroundSprite).width = backgroundWidth;
  __privateGet(this, _backgroundSprite).height = backgroundHeight;
};
updateAnimatorSprite_fn = function() {
  if (!__privateGet(this, _animation)) {
    __privateGet(this, _animatorSprite).visible = false;
    return;
  }
  const frame = __privateGet(this, _animation).currentFrame;
  if (!(frame == null ? void 0 : frame.region)) {
    return;
  }
  const region = frame.region;
  const aspectRatio = region.width / region.height;
  const spriteHeight = __privateGet(this, _size).height;
  const spriteWidth = spriteHeight * aspectRatio;
  __privateGet(this, _animatorSprite).region = region;
  __privateGet(this, _animatorSprite).width = spriteWidth;
  __privateGet(this, _animatorSprite).height = spriteHeight;
  __privateGet(this, _animatorSprite).anchorX = __privateGet(this, _anchor).x;
  __privateGet(this, _animatorSprite).anchorY = __privateGet(this, _anchor).y;
  __privateGet(this, _animatorSprite).visible = true;
  __privateGet(this, _animatorSprite).x = __privateGet(this, _spriteX);
  __privateGet(this, _animatorSprite).y = 0;
};
loop_fn = function(currentTime) {
  var _a;
  if (!__privateGet(this, _isPlaying)) {
    return;
  }
  const deltaTime = (currentTime - __privateGet(this, _lastTime)) / 1e3;
  __privateSet(this, _lastTime, currentTime);
  __privateGet(this, _animation).update(deltaTime);
  __privateMethod(this, _AnimatorPreview_instances, updateMotion_fn).call(this, deltaTime);
  __privateMethod(this, _AnimatorPreview_instances, updateAnimatorSprite_fn).call(this);
  this.render();
  (_a = __privateGet(this, _onFrame)) == null ? void 0 : _a.call(this, __privateGet(this, _animation).currentIndex);
  if (__privateGet(this, _animation).completed) {
    this.stop();
    return;
  }
  __privateSet(this, _animationFrameId, requestAnimationFrame((t) => __privateMethod(this, _AnimatorPreview_instances, loop_fn).call(this, t)));
};
updateMotion_fn = function(deltaTime) {
  var _a;
  if (!((_a = __privateGet(this, _motion)) == null ? void 0 : _a.mode)) {
    return;
  }
  const motionSpeed = __privateGet(this, _motion).speed ?? 1;
  const speed = __privateGet(this, _size).width * motionSpeed;
  const direction = __privateMethod(this, _AnimatorPreview_instances, getSpriteDirection_fn).call(this);
  __privateSet(this, _spriteX, __privateGet(this, _spriteX) + speed * deltaTime * direction);
  const halfWidth = __privateGet(this, _unitsInView).width / 2;
  const margin = __privateGet(this, _size).width;
  if (__privateGet(this, _spriteX) > halfWidth + margin) {
    __privateSet(this, _spriteX, -halfWidth - margin);
  } else if (__privateGet(this, _spriteX) < -halfWidth - margin) {
    __privateSet(this, _spriteX, halfWidth + margin);
  }
};
getSpriteDirection_fn = function() {
  var _a;
  const dir = ((_a = __privateGet(this, _motion)) == null ? void 0 : _a.direction) || "e";
  const directionMap = {
    e: 1,
    w: -1,
    ne: 1,
    se: 1,
    nw: -1,
    sw: -1,
    n: 0,
    s: 0
  };
  return directionMap[dir] ?? 1;
};
class AnimationPreview extends EditorComponent {
  constructor() {
    super(...arguments);
    __privateAdd(this, _AnimationPreview_instances);
    __privateAdd(this, _canvas2, null);
    __privateAdd(this, _previewArea, null);
    __privateAdd(this, _renderer2, null);
    __privateAdd(this, _scene2, null);
    __privateAdd(this, _sprite, null);
    __privateAdd(this, _animation2, null);
    __privateAdd(this, _animationFrameId2, null);
    __privateAdd(this, _lastTime2, 0);
    __privateAdd(this, _isPlaying2, false);
    __privateAdd(this, _resizeObserver2, null);
    __privateAdd(this, _sceneryEnabled, false);
    __privateAdd(this, _sceneryOffset, 0);
    __privateAdd(this, _spriteOffset, 0);
    __privateAdd(this, _sceneryCanvas, null);
    __privateAdd(this, _sceneryCtx, null);
    __privateAdd(this, _gridCanvas, null);
    __privateAdd(this, _gridCtx, null);
    __privateAdd(this, _gridEnabled, false);
    __privateAdd(this, _motion2, null);
    __privateAdd(this, _anchor2, { x: 0.5, y: 0 });
    __privateAdd(this, _noise, new Noise(42));
    __privateAdd(this, _moveSpriteMode, true);
    __privateAdd(this, _backgroundImage, null);
    __privateAdd(this, _backgroundRegion, null);
    __privateAdd(this, _unitsInView2, null);
    __privateAdd(this, _size2, null);
    __privateAdd(this, _gamePreview, null);
    __privateAdd(this, _gamePreviewCanvas, null);
  }
  onConnected() {
    __privateMethod(this, _AnimationPreview_instances, buildDOM_fn4).call(this);
    if (__privateGet(this, _animation2)) {
      __privateMethod(this, _AnimationPreview_instances, updateSprite_fn).call(this);
      __privateMethod(this, _AnimationPreview_instances, render_fn).call(this);
    }
  }
  onDisconnected() {
    var _a;
    this.stop();
    __privateSet(this, _renderer2, null);
    __privateSet(this, _scene2, null);
    __privateSet(this, _sprite, null);
    (_a = __privateGet(this, _gamePreview)) == null ? void 0 : _a.dispose();
    __privateSet(this, _gamePreview, null);
    if (__privateGet(this, _resizeObserver2)) {
      __privateGet(this, _resizeObserver2).disconnect();
      __privateSet(this, _resizeObserver2, null);
    }
  }
  setMotion(motion) {
    var _a;
    __privateSet(this, _motion2, motion);
    __privateSet(this, _sceneryOffset, 0);
    __privateSet(this, _spriteOffset, 0);
    if (!__privateGet(this, _AnimationPreview_instances, hasMotion_get)) {
      __privateSet(this, _sceneryEnabled, false);
    }
    (_a = __privateGet(this, _gamePreview)) == null ? void 0 : _a.setMotion(motion);
    __privateMethod(this, _AnimationPreview_instances, syncSceneryState_fn).call(this);
  }
  updateMotion(motion) {
    var _a, _b;
    const modeChanged = ((_a = __privateGet(this, _motion2)) == null ? void 0 : _a.mode) !== (motion == null ? void 0 : motion.mode);
    __privateSet(this, _motion2, motion);
    (_b = __privateGet(this, _gamePreview)) == null ? void 0 : _b.setMotion(motion);
    if (modeChanged) {
      __privateMethod(this, _AnimationPreview_instances, syncSceneryState_fn).call(this);
    }
  }
  setAnchor(anchor) {
    var _a;
    __privateSet(this, _anchor2, anchor || { x: 0.5, y: 0 });
    (_a = __privateGet(this, _gamePreview)) == null ? void 0 : _a.setAnchor(__privateGet(this, _anchor2));
    if (__privateGet(this, _AnimationPreview_instances, sceneryActive_get)) {
      __privateMethod(this, _AnimationPreview_instances, renderScenery_fn).call(this);
    }
  }
  setBackgroundImage(image) {
    __privateSet(this, _backgroundImage, image);
    if (__privateGet(this, _AnimationPreview_instances, sceneryActive_get)) {
      __privateMethod(this, _AnimationPreview_instances, renderScenery_fn).call(this);
    }
  }
  setUnitsInView(unitsInView) {
    var _a, _b;
    __privateSet(this, _unitsInView2, unitsInView);
    __privateMethod(this, _AnimationPreview_instances, updateGamePreviewConfig_fn).call(this);
    if (__privateGet(this, _AnimationPreview_instances, sceneryActive_get)) {
      __privateMethod(this, _AnimationPreview_instances, fitToContainer_fn).call(this, (_b = (_a = __privateGet(this, _animation2)) == null ? void 0 : _a.currentFrame) == null ? void 0 : _b.region);
      __privateMethod(this, _AnimationPreview_instances, render_fn).call(this);
    }
  }
  setSize(size) {
    __privateSet(this, _size2, size);
    __privateMethod(this, _AnimationPreview_instances, updateGamePreviewConfig_fn).call(this);
  }
  setBackgroundRegion(region) {
    __privateSet(this, _backgroundRegion, region);
    __privateMethod(this, _AnimationPreview_instances, updateGamePreviewConfig_fn).call(this);
  }
  setAnimation(animation) {
    var _a;
    this.stop();
    __privateSet(this, _animation2, animation);
    if (!__privateGet(this, _renderer2) && __privateGet(this, _canvas2)) {
      __privateMethod(this, _AnimationPreview_instances, setupRenderer_fn).call(this);
    }
    (_a = __privateGet(this, _gamePreview)) == null ? void 0 : _a.setAnimation(animation);
    __privateMethod(this, _AnimationPreview_instances, updateSprite_fn).call(this);
    __privateMethod(this, _AnimationPreview_instances, render_fn).call(this);
  }
  play() {
    if (!__privateGet(this, _animation2) || __privateGet(this, _isPlaying2)) {
      return;
    }
    if (__privateGet(this, _AnimationPreview_instances, useGamePreview_get) && __privateGet(this, _gamePreview)) {
      __privateGet(this, _gamePreview).play();
      __privateSet(this, _isPlaying2, true);
      __privateMethod(this, _AnimationPreview_instances, updatePlayButtonIcon_fn).call(this, true);
      this.dispatchEvent(new CustomEvent("play"));
      return;
    }
    __privateSet(this, _isPlaying2, true);
    __privateGet(this, _animation2).play();
    __privateSet(this, _lastTime2, performance.now());
    __privateSet(this, _animationFrameId2, requestAnimationFrame((t) => __privateMethod(this, _AnimationPreview_instances, loop_fn2).call(this, t)));
    __privateMethod(this, _AnimationPreview_instances, updatePlayButtonIcon_fn).call(this, true);
    this.dispatchEvent(new CustomEvent("play"));
  }
  pause() {
    var _a;
    if (__privateGet(this, _AnimationPreview_instances, useGamePreview_get) && __privateGet(this, _gamePreview)) {
      __privateGet(this, _gamePreview).pause();
    }
    __privateSet(this, _isPlaying2, false);
    (_a = __privateGet(this, _animation2)) == null ? void 0 : _a.pause();
    if (__privateGet(this, _animationFrameId2)) {
      cancelAnimationFrame(__privateGet(this, _animationFrameId2));
      __privateSet(this, _animationFrameId2, null);
    }
    __privateMethod(this, _AnimationPreview_instances, updatePlayButtonIcon_fn).call(this, false);
    this.dispatchEvent(new CustomEvent("pause"));
  }
  stop() {
    var _a;
    if (__privateGet(this, _AnimationPreview_instances, useGamePreview_get) && __privateGet(this, _gamePreview)) {
      __privateGet(this, _gamePreview).stop();
      __privateSet(this, _isPlaying2, false);
      __privateMethod(this, _AnimationPreview_instances, updatePlayButtonIcon_fn).call(this, false);
      this.dispatchEvent(new CustomEvent("stop"));
      return;
    }
    this.pause();
    (_a = __privateGet(this, _animation2)) == null ? void 0 : _a.stop();
    __privateSet(this, _sceneryOffset, 0);
    __privateSet(this, _spriteOffset, 0);
    __privateMethod(this, _AnimationPreview_instances, updateSprite_fn).call(this);
    __privateMethod(this, _AnimationPreview_instances, render_fn).call(this);
    this.dispatchEvent(new CustomEvent("stop"));
  }
  get currentIndex() {
    var _a;
    return ((_a = __privateGet(this, _animation2)) == null ? void 0 : _a.currentIndex) ?? 0;
  }
  get isPlaying() {
    return __privateGet(this, _isPlaying2);
  }
  setCurrentIndex(index) {
    if (!__privateGet(this, _animation2)) {
      return;
    }
    if (__privateGet(this, _AnimationPreview_instances, useGamePreview_get) && __privateGet(this, _gamePreview)) {
      __privateGet(this, _gamePreview).seekToFrame(index);
      this.dispatchEvent(new CustomEvent("frame", {
        detail: { index: __privateGet(this, _gamePreview).currentIndex }
      }));
      return;
    }
    __privateGet(this, _animation2).seekToFrame(index);
    __privateMethod(this, _AnimationPreview_instances, updateSprite_fn).call(this);
    __privateMethod(this, _AnimationPreview_instances, render_fn).call(this);
    this.dispatchEvent(new CustomEvent("frame", {
      detail: { index: __privateGet(this, _animation2).currentIndex }
    }));
  }
}
_canvas2 = new WeakMap();
_previewArea = new WeakMap();
_renderer2 = new WeakMap();
_scene2 = new WeakMap();
_sprite = new WeakMap();
_animation2 = new WeakMap();
_animationFrameId2 = new WeakMap();
_lastTime2 = new WeakMap();
_isPlaying2 = new WeakMap();
_resizeObserver2 = new WeakMap();
_sceneryEnabled = new WeakMap();
_sceneryOffset = new WeakMap();
_spriteOffset = new WeakMap();
_sceneryCanvas = new WeakMap();
_sceneryCtx = new WeakMap();
_gridCanvas = new WeakMap();
_gridCtx = new WeakMap();
_gridEnabled = new WeakMap();
_motion2 = new WeakMap();
_anchor2 = new WeakMap();
_noise = new WeakMap();
_moveSpriteMode = new WeakMap();
_backgroundImage = new WeakMap();
_backgroundRegion = new WeakMap();
_unitsInView2 = new WeakMap();
_size2 = new WeakMap();
_gamePreview = new WeakMap();
_gamePreviewCanvas = new WeakMap();
_AnimationPreview_instances = new WeakSet();
buildDOM_fn4 = function() {
  const container = createElement("div", { class: "preview-container" });
  __privateSet(this, _previewArea, createElement("div", { class: "preview-area" }));
  __privateSet(this, _sceneryCanvas, createElement("canvas", { class: "scenery-canvas" }));
  __privateSet(this, _sceneryCtx, __privateGet(this, _sceneryCanvas).getContext("2d"));
  __privateGet(this, _previewArea).appendChild(__privateGet(this, _sceneryCanvas));
  __privateSet(this, _gamePreviewCanvas, createElement("canvas", { class: "game-preview-canvas" }));
  __privateGet(this, _gamePreviewCanvas).width = 256;
  __privateGet(this, _gamePreviewCanvas).height = 256;
  __privateGet(this, _previewArea).appendChild(__privateGet(this, _gamePreviewCanvas));
  __privateSet(this, _canvas2, createElement("canvas", { class: "preview-canvas" }));
  __privateGet(this, _canvas2).width = 256;
  __privateGet(this, _canvas2).height = 256;
  __privateGet(this, _previewArea).appendChild(__privateGet(this, _canvas2));
  __privateSet(this, _gridCanvas, createElement("canvas", { class: "grid-canvas" }));
  __privateSet(this, _gridCtx, __privateGet(this, _gridCanvas).getContext("2d"));
  __privateGet(this, _previewArea).appendChild(__privateGet(this, _gridCanvas));
  container.appendChild(__privateGet(this, _previewArea));
  const controls = createElement("div", { class: "preview-controls" });
  const playBtn = createElement("button", { class: "play-btn", html: ICONS.start });
  playBtn.addEventListener("click", () => __privateMethod(this, _AnimationPreview_instances, togglePlay_fn).call(this));
  const stopBtn = createElement("button", { class: "stop-btn", html: ICONS.stop });
  stopBtn.addEventListener("click", () => this.stop());
  const settingsBtn = createElement("button", { class: "settings-btn", html: ICONS.wrench });
  settingsBtn.addEventListener("click", () => __privateMethod(this, _AnimationPreview_instances, toggleSettings_fn).call(this));
  const sceneryBtn = createElement("button", { class: "scenery-btn", html: ICONS.scenery });
  sceneryBtn.addEventListener("click", () => __privateMethod(this, _AnimationPreview_instances, toggleScenery_fn).call(this));
  const gridBtn = createElement("button", { class: "grid-btn", html: ICONS.grid });
  gridBtn.addEventListener("click", () => __privateMethod(this, _AnimationPreview_instances, toggleGrid_fn).call(this));
  controls.appendChild(playBtn);
  controls.appendChild(stopBtn);
  controls.appendChild(settingsBtn);
  controls.appendChild(sceneryBtn);
  controls.appendChild(gridBtn);
  container.appendChild(controls);
  this.shadowRoot.appendChild(container);
  __privateMethod(this, _AnimationPreview_instances, setupRenderer_fn).call(this);
  __privateMethod(this, _AnimationPreview_instances, setupResizeObserver_fn).call(this);
  __privateMethod(this, _AnimationPreview_instances, syncSceneryState_fn).call(this);
};
toggleSettings_fn = function() {
  this.dispatchEvent(new CustomEvent("settingsrequest"));
};
hasMotion_get = function() {
  var _a, _b;
  return ((_a = __privateGet(this, _motion2)) == null ? void 0 : _a.enabled) || ((_b = __privateGet(this, _motion2)) == null ? void 0 : _b.mode);
};
sceneryActive_get = function() {
  return __privateGet(this, _sceneryEnabled) && __privateGet(this, _AnimationPreview_instances, hasMotion_get);
};
toggleScenery_fn = function() {
  if (!__privateGet(this, _AnimationPreview_instances, hasMotion_get)) {
    return;
  }
  __privateSet(this, _sceneryEnabled, !__privateGet(this, _sceneryEnabled));
  __privateSet(this, _sceneryOffset, 0);
  __privateSet(this, _spriteOffset, 0);
  __privateMethod(this, _AnimationPreview_instances, syncSceneryState_fn).call(this);
};
toggleGrid_fn = function() {
  __privateSet(this, _gridEnabled, !__privateGet(this, _gridEnabled));
  __privateMethod(this, _AnimationPreview_instances, syncGridButton_fn).call(this);
  __privateMethod(this, _AnimationPreview_instances, syncPreviewVisibility_fn).call(this);
  __privateMethod(this, _AnimationPreview_instances, updateGridCanvas_fn).call(this);
};
syncGridButton_fn = function() {
  var _a;
  const gridBtn = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector(".grid-btn");
  if (gridBtn) {
    gridBtn.classList.toggle("active", __privateGet(this, _gridEnabled));
  }
};
useGamePreview_get = function() {
  return __privateGet(this, _AnimationPreview_instances, sceneryActive_get) && __privateGet(this, _unitsInView2) && __privateGet(this, _backgroundRegion) && __privateGet(this, _size2);
};
updateGamePreviewConfig_fn = function() {
  if (!__privateGet(this, _gamePreviewCanvas)) {
    return;
  }
  if (__privateGet(this, _AnimationPreview_instances, useGamePreview_get) && !__privateGet(this, _gamePreview)) {
    __privateMethod(this, _AnimationPreview_instances, createGamePreview_fn).call(this);
  }
  if (__privateGet(this, _gamePreview)) {
    __privateMethod(this, _AnimationPreview_instances, applyGamePreviewSettings_fn).call(this);
  }
  __privateMethod(this, _AnimationPreview_instances, syncPreviewVisibility_fn).call(this);
};
applyGamePreviewSettings_fn = function() {
  if (__privateGet(this, _unitsInView2)) {
    __privateGet(this, _gamePreview).setUnitsInView(__privateGet(this, _unitsInView2));
  }
  if (__privateGet(this, _backgroundRegion)) {
    __privateGet(this, _gamePreview).setBackgroundRegion(__privateGet(this, _backgroundRegion));
  }
  if (__privateGet(this, _size2)) {
    __privateGet(this, _gamePreview).setSize(__privateGet(this, _size2));
  }
  if (__privateGet(this, _anchor2)) {
    __privateGet(this, _gamePreview).setAnchor(__privateGet(this, _anchor2));
  }
  if (__privateGet(this, _motion2)) {
    __privateGet(this, _gamePreview).setMotion(__privateGet(this, _motion2));
  }
  if (__privateGet(this, _animation2)) {
    __privateGet(this, _gamePreview).setAnimation(__privateGet(this, _animation2));
  }
};
createGamePreview_fn = function() {
  __privateSet(this, _gamePreview, new AnimatorPreview({
    canvas: __privateGet(this, _gamePreviewCanvas),
    unitsInView: __privateGet(this, _unitsInView2),
    onFrame: (index) => {
      this.dispatchEvent(new CustomEvent("frame", { detail: { index } }));
    },
    onComplete: () => {
      this.dispatchEvent(new CustomEvent("stop"));
      __privateMethod(this, _AnimationPreview_instances, updatePlayButtonIcon_fn).call(this, false);
    }
  }));
};
updatePlayButtonIcon_fn = function(isPlaying) {
  var _a;
  const playBtn = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector(".play-btn");
  if (playBtn) {
    playBtn.innerHTML = isPlaying ? ICONS.pause : ICONS.start;
  }
};
syncPreviewVisibility_fn = function() {
  var _a;
  if (!__privateGet(this, _canvas2) || !__privateGet(this, _gamePreviewCanvas) || !__privateGet(this, _sceneryCanvas)) {
    return;
  }
  const useGame = __privateGet(this, _AnimationPreview_instances, useGamePreview_get);
  __privateGet(this, _gamePreviewCanvas).style.display = useGame ? "block" : "none";
  __privateGet(this, _canvas2).style.display = useGame ? "none" : "";
  __privateGet(this, _sceneryCanvas).style.display = useGame ? "none" : "";
  __privateGet(this, _gridCanvas).style.display = __privateGet(this, _gridEnabled) ? "block" : "none";
  (_a = __privateGet(this, _previewArea)) == null ? void 0 : _a.classList.toggle("game-preview-mode", useGame);
};
syncSceneryState_fn = function() {
  __privateMethod(this, _AnimationPreview_instances, updateSceneryButton_fn).call(this);
  const wasPlaying = __privateMethod(this, _AnimationPreview_instances, pauseAllPreviews_fn).call(this);
  __privateMethod(this, _AnimationPreview_instances, updateGamePreviewConfig_fn).call(this);
  __privateMethod(this, _AnimationPreview_instances, syncPreviewVisibility_fn).call(this);
  __privateMethod(this, _AnimationPreview_instances, syncGridButton_fn).call(this);
  if (__privateGet(this, _AnimationPreview_instances, useGamePreview_get)) {
    requestAnimationFrame(() => {
      __privateMethod(this, _AnimationPreview_instances, updateGamePreviewSize_fn).call(this);
      __privateMethod(this, _AnimationPreview_instances, updateGridCanvas_fn).call(this);
    });
    if (wasPlaying) {
      this.play();
    }
    return;
  }
  __privateMethod(this, _AnimationPreview_instances, setupNormalPreview_fn).call(this);
  if (wasPlaying) {
    this.play();
  }
};
updateSceneryButton_fn = function() {
  const sceneryBtn = this.shadowRoot.querySelector(".scenery-btn");
  if (sceneryBtn) {
    sceneryBtn.classList.toggle("disabled", !__privateGet(this, _AnimationPreview_instances, hasMotion_get));
    sceneryBtn.classList.toggle("active", __privateGet(this, _AnimationPreview_instances, sceneryActive_get));
  }
};
pauseAllPreviews_fn = function() {
  var _a, _b;
  const wasPlaying = __privateGet(this, _isPlaying2) || ((_a = __privateGet(this, _gamePreview)) == null ? void 0 : _a.isPlaying);
  (_b = __privateGet(this, _gamePreview)) == null ? void 0 : _b.pause();
  if (__privateGet(this, _animationFrameId2)) {
    cancelAnimationFrame(__privateGet(this, _animationFrameId2));
    __privateSet(this, _animationFrameId2, null);
  }
  __privateSet(this, _isPlaying2, false);
  return wasPlaying;
};
setupNormalPreview_fn = function() {
  var _a, _b;
  if (__privateGet(this, _AnimationPreview_instances, sceneryActive_get)) {
    __privateMethod(this, _AnimationPreview_instances, updateSceneryCanvas_fn).call(this);
    __privateMethod(this, _AnimationPreview_instances, centerSprite_fn).call(this);
  } else {
    __privateMethod(this, _AnimationPreview_instances, clearSceneryCanvas_fn).call(this);
  }
  __privateMethod(this, _AnimationPreview_instances, fitToContainer_fn).call(this, (_b = (_a = __privateGet(this, _animation2)) == null ? void 0 : _a.currentFrame) == null ? void 0 : _b.region);
  __privateMethod(this, _AnimationPreview_instances, render_fn).call(this);
};
updateGamePreviewSize_fn = function() {
  if (!__privateGet(this, _gamePreviewCanvas) || !__privateGet(this, _previewArea) || !__privateGet(this, _gamePreview)) {
    return;
  }
  const width = __privateGet(this, _previewArea).clientWidth;
  const height = __privateGet(this, _previewArea).clientHeight;
  if (width > 0 && height > 0) {
    __privateGet(this, _gamePreview).resize(width, height);
    __privateMethod(this, _AnimationPreview_instances, updateGridCanvas_fn).call(this);
  }
  __privateGet(this, _gamePreview).render();
};
centerSprite_fn = function() {
  if (!__privateGet(this, _sceneryCanvas) || !__privateGet(this, _moveSpriteMode)) {
    return;
  }
  const width = __privateGet(this, _sceneryCanvas).width;
  const spriteSize = __privateMethod(this, _AnimationPreview_instances, getSpriteSize_fn).call(this);
  __privateSet(this, _spriteOffset, (width - spriteSize.width) / 2);
};
setupRenderer_fn = function() {
  __privateSet(this, _renderer2, new WebGLRenderer({
    canvas: __privateGet(this, _canvas2),
    backgroundColor: "transparent",
    width: 256,
    height: 256
  }));
  __privateGet(this, _renderer2).camera.setUnitsInView({ width: 256, height: 256 });
  __privateSet(this, _scene2, new Object2D());
  __privateSet(this, _sprite, new Sprite({
    anchorX: 0.5,
    anchorY: 0.5
  }));
  __privateGet(this, _scene2).add(__privateGet(this, _sprite));
};
updateSprite_fn = function() {
  if (!__privateGet(this, _sprite) || !__privateGet(this, _animation2)) {
    return;
  }
  const frame = __privateGet(this, _animation2).currentFrame;
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
  if (!((_b = (_a = __privateGet(this, _animation2)) == null ? void 0 : _a.currentFrame) == null ? void 0 : _b.region)) {
    return;
  }
  if (__privateGet(this, _AnimationPreview_instances, useGamePreview_get)) {
    __privateMethod(this, _AnimationPreview_instances, updateGamePreviewSize_fn).call(this);
    return;
  }
  __privateMethod(this, _AnimationPreview_instances, fitToContainer_fn).call(this, __privateGet(this, _animation2).currentFrame.region);
  __privateMethod(this, _AnimationPreview_instances, updateSceneryCanvas_fn).call(this);
  __privateMethod(this, _AnimationPreview_instances, render_fn).call(this);
};
fitToContainer_fn = function(region) {
  if (!region || !__privateGet(this, _renderer2) || !__privateGet(this, _previewArea)) {
    return;
  }
  const padding = 32;
  const paddingBottom = 80;
  const containerWidth = __privateGet(this, _previewArea).clientWidth - padding * 2;
  const containerHeight = __privateGet(this, _previewArea).clientHeight - padding - paddingBottom;
  if (containerWidth <= 0 || containerHeight <= 0) {
    return;
  }
  const sceneryMargin = __privateGet(this, _AnimationPreview_instances, sceneryActive_get) ? 0.5 : 1;
  const scaleX = containerWidth / region.width;
  const scaleY = containerHeight / region.height;
  const scale = Math.min(scaleX, scaleY, 1) * sceneryMargin;
  const canvasWidth = Math.max(1, Math.floor(region.width * scale));
  const canvasHeight = Math.max(1, Math.floor(region.height * scale));
  __privateGet(this, _renderer2).displayWidth = canvasWidth;
  __privateGet(this, _renderer2).displayHeight = canvasHeight;
  __privateGet(this, _renderer2).applyPixelRatio();
  __privateGet(this, _renderer2).camera.viewportWidth = canvasWidth;
  __privateGet(this, _renderer2).camera.viewportHeight = canvasHeight;
  __privateGet(this, _renderer2).camera.setUnitsInView({ width: region.width, height: region.height });
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
updateGridCanvas_fn = function() {
  if (!__privateGet(this, _gridCanvas) || !__privateGet(this, _previewArea)) {
    return;
  }
  const width = __privateGet(this, _previewArea).clientWidth;
  const height = __privateGet(this, _previewArea).clientHeight;
  if (width <= 0 || height <= 0) {
    return;
  }
  __privateGet(this, _gridCanvas).width = width;
  __privateGet(this, _gridCanvas).height = height;
  __privateMethod(this, _AnimationPreview_instances, renderGrid_fn).call(this);
};
togglePlay_fn = function() {
  if (__privateGet(this, _isPlaying2)) {
    this.pause();
  } else {
    this.play();
  }
};
loop_fn2 = function(currentTime) {
  if (!__privateGet(this, _isPlaying2)) {
    return;
  }
  const deltaTime = (currentTime - __privateGet(this, _lastTime2)) / 1e3;
  __privateSet(this, _lastTime2, currentTime);
  __privateGet(this, _animation2).update(deltaTime);
  __privateMethod(this, _AnimationPreview_instances, updateScenery_fn).call(this, deltaTime);
  __privateMethod(this, _AnimationPreview_instances, updateSprite_fn).call(this);
  __privateMethod(this, _AnimationPreview_instances, render_fn).call(this);
  this.dispatchEvent(new CustomEvent("frame", {
    detail: { index: __privateGet(this, _animation2).currentIndex }
  }));
  if (__privateGet(this, _animation2).completed) {
    this.stop();
    return;
  }
  __privateSet(this, _animationFrameId2, requestAnimationFrame((t) => __privateMethod(this, _AnimationPreview_instances, loop_fn2).call(this, t)));
};
updateScenery_fn = function(deltaTime) {
  var _a;
  if (!__privateGet(this, _AnimationPreview_instances, sceneryActive_get)) {
    return;
  }
  const spriteWidth = __privateMethod(this, _AnimationPreview_instances, getSpriteSize_fn).call(this).width;
  const motionSpeed = ((_a = __privateGet(this, _motion2)) == null ? void 0 : _a.speed) ?? 1;
  const speed = spriteWidth * motionSpeed;
  const direction = __privateMethod(this, _AnimationPreview_instances, getSpriteDirection_fn2).call(this);
  if (__privateGet(this, _moveSpriteMode)) {
    __privateSet(this, _spriteOffset, __privateGet(this, _spriteOffset) + speed * deltaTime * direction);
    __privateMethod(this, _AnimationPreview_instances, wrapSpritePosition_fn).call(this);
  } else {
    __privateSet(this, _sceneryOffset, __privateGet(this, _sceneryOffset) + speed * deltaTime * -direction);
  }
  __privateMethod(this, _AnimationPreview_instances, renderScenery_fn).call(this);
};
wrapSpritePosition_fn = function() {
  if (!__privateGet(this, _sceneryCanvas)) {
    return;
  }
  const width = __privateGet(this, _sceneryCanvas).width;
  const spriteSize = __privateMethod(this, _AnimationPreview_instances, getSpriteSize_fn).call(this);
  const margin = spriteSize.width;
  if (__privateGet(this, _spriteOffset) > width + margin) {
    __privateSet(this, _spriteOffset, -margin);
  } else if (__privateGet(this, _spriteOffset) < -margin) {
    __privateSet(this, _spriteOffset, width + margin);
  }
};
getSpriteDirection_fn2 = function() {
  var _a;
  const dir = ((_a = __privateGet(this, _motion2)) == null ? void 0 : _a.direction) || "e";
  const directionMap = {
    e: 1,
    w: -1,
    ne: 1,
    se: 1,
    nw: -1,
    sw: -1,
    n: 0,
    s: 0
  };
  return directionMap[dir] ?? 1;
};
clearSceneryCanvas_fn = function() {
  if (__privateGet(this, _sceneryCtx) && __privateGet(this, _sceneryCanvas)) {
    __privateGet(this, _sceneryCtx).clearRect(0, 0, __privateGet(this, _sceneryCanvas).width, __privateGet(this, _sceneryCanvas).height);
  }
};
renderScenery_fn = function() {
  if (!__privateGet(this, _sceneryCtx) || !__privateGet(this, _sceneryCanvas)) {
    return;
  }
  const ctx = __privateGet(this, _sceneryCtx);
  const width = __privateGet(this, _sceneryCanvas).width;
  const height = __privateGet(this, _sceneryCanvas).height;
  ctx.clearRect(0, 0, width, height);
  if (!__privateGet(this, _AnimationPreview_instances, sceneryActive_get)) {
    __privateMethod(this, _AnimationPreview_instances, renderSimpleGrid_fn).call(this, ctx, width, height);
    return;
  }
  const mode = __privateGet(this, _motion2).mode || "sidescroller";
  if (mode === "sidescroller") {
    __privateMethod(this, _AnimationPreview_instances, renderSidescroller_fn).call(this, ctx, width, height);
  } else if (mode === "topdown") {
    __privateMethod(this, _AnimationPreview_instances, renderTopdown_fn).call(this, ctx, width, height);
  }
};
renderSimpleGrid_fn = function(ctx, width, height) {
  if (!__privateGet(this, _gridEnabled)) {
    return;
  }
  const spriteSize = __privateMethod(this, _AnimationPreview_instances, getSpriteSize_fn).call(this);
  const gridSize = spriteSize.width * 0.2;
  ctx.strokeStyle = "rgba(26, 26, 30, 0.06)";
  ctx.lineWidth = 1;
  for (let x = gridSize; x < width; x += gridSize) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
  for (let y = gridSize; y < height; y += gridSize) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
};
getSpriteSize_fn = function() {
  var _a, _b;
  const region = (_b = (_a = __privateGet(this, _animation2)) == null ? void 0 : _a.currentFrame) == null ? void 0 : _b.region;
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
  if (__privateGet(this, _backgroundImage)) {
    __privateMethod(this, _AnimationPreview_instances, renderBackgroundImage_fn).call(this, ctx, width, height);
    return;
  }
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
renderBackgroundImage_fn = function(ctx, width, height) {
  const img = __privateGet(this, _backgroundImage);
  const imgRatio = img.width / img.height;
  const canvasRatio = width / height;
  let drawWidth;
  let drawHeight;
  if (imgRatio > canvasRatio) {
    drawHeight = height;
    drawWidth = height * imgRatio;
  } else {
    drawWidth = width;
    drawHeight = width / imgRatio;
  }
  const offsetX = __privateGet(this, _sceneryOffset) % drawWidth;
  const y = height - drawHeight;
  ctx.drawImage(img, offsetX, y, drawWidth, drawHeight);
  ctx.drawImage(img, offsetX - drawWidth, y, drawWidth, drawHeight);
  ctx.drawImage(img, offsetX + drawWidth, y, drawWidth, drawHeight);
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
  const anchorY = __privateGet(this, _anchor2).y;
  const groundY = canvasTop + canvasHeight * (1 - anchorY);
  return groundY;
};
renderTopdown_fn = function(ctx, width, height) {
  var _a;
  const lineSpacing = 40;
  const dir = ((_a = __privateGet(this, _motion2)) == null ? void 0 : _a.direction) || "e";
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
  if (!__privateGet(this, _renderer2) || !__privateGet(this, _scene2)) {
    return;
  }
  __privateMethod(this, _AnimationPreview_instances, renderScenery_fn).call(this);
  __privateMethod(this, _AnimationPreview_instances, renderGrid_fn).call(this);
  __privateMethod(this, _AnimationPreview_instances, updateSpritePosition_fn).call(this);
  __privateGet(this, _renderer2).render(__privateGet(this, _scene2));
};
renderGrid_fn = function() {
  if (!__privateGet(this, _gridCtx) || !__privateGet(this, _gridCanvas)) {
    return;
  }
  const ctx = __privateGet(this, _gridCtx);
  const width = __privateGet(this, _gridCanvas).width;
  const height = __privateGet(this, _gridCanvas).height;
  ctx.clearRect(0, 0, width, height);
  if (!__privateGet(this, _gridEnabled)) {
    return;
  }
  let cellSize;
  let offsetX = 0;
  let offsetY = 0;
  if (__privateGet(this, _unitsInView2) && __privateGet(this, _AnimationPreview_instances, useGamePreview_get)) {
    const unitsInView = __privateGet(this, _unitsInView2);
    const ppuForWidth = width / unitsInView.width;
    const ppuForHeight = height / unitsInView.height;
    cellSize = Math.min(ppuForWidth, ppuForHeight);
    const gridWidth = cellSize * unitsInView.width;
    const gridHeight = cellSize * unitsInView.height;
    offsetX = (width - gridWidth) / 2;
    offsetY = (height - gridHeight) / 2;
  } else {
    const spriteSize = __privateMethod(this, _AnimationPreview_instances, getSpriteSize_fn).call(this);
    cellSize = spriteSize.width * 0.25;
  }
  const colCount = Math.ceil(width / cellSize) + 1;
  const rowCount = Math.ceil(height / cellSize) + 1;
  const startCol = -Math.ceil(offsetX / cellSize);
  const startRow = -Math.ceil(offsetY / cellSize);
  const subdivisions = 4;
  const subCellSize = cellSize / subdivisions;
  const subColor = __privateGet(this, _AnimationPreview_instances, useGamePreview_get) ? "rgba(26, 26, 30, 0.06)" : "rgba(255, 255, 255, 0.08)";
  ctx.strokeStyle = subColor;
  ctx.lineWidth = 1;
  for (let i = startCol * subdivisions; i < colCount * subdivisions; i++) {
    if (i % subdivisions === 0) {
      continue;
    }
    const x = Math.round(offsetX + i * subCellSize) + 0.5;
    if (x < 0 || x > width) {
      continue;
    }
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
  for (let i = startRow * subdivisions; i < rowCount * subdivisions; i++) {
    if (i % subdivisions === 0) {
      continue;
    }
    const y = Math.round(offsetY + i * subCellSize) + 0.5;
    if (y < 0 || y > height) {
      continue;
    }
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
  const mainColor = __privateGet(this, _AnimationPreview_instances, useGamePreview_get) ? "rgba(26, 26, 30, 0.12)" : "rgba(255, 255, 255, 0.15)";
  ctx.strokeStyle = mainColor;
  for (let i = startCol; i < colCount; i++) {
    const x = Math.round(offsetX + i * cellSize) + 0.5;
    if (x < 0 || x > width) {
      continue;
    }
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
  for (let i = startRow; i < rowCount; i++) {
    const y = Math.round(offsetY + i * cellSize) + 0.5;
    if (y < 0 || y > height) {
      continue;
    }
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
};
updateSpritePosition_fn = function() {
  var _a, _b;
  if (!__privateGet(this, _canvas2)) {
    return;
  }
  if (!__privateGet(this, _AnimationPreview_instances, sceneryActive_get) || !__privateGet(this, _moveSpriteMode)) {
    __privateGet(this, _canvas2).style.position = "";
    __privateGet(this, _canvas2).style.left = "";
    __privateGet(this, _canvas2).style.top = "";
    return;
  }
  const sceneryRect = (_a = __privateGet(this, _sceneryCanvas)) == null ? void 0 : _a.getBoundingClientRect();
  const previewRect = (_b = __privateGet(this, _previewArea)) == null ? void 0 : _b.getBoundingClientRect();
  const canvasRect = __privateGet(this, _canvas2).getBoundingClientRect();
  if (!sceneryRect || !previewRect) {
    return;
  }
  const sceneryLeft = sceneryRect.left - previewRect.left;
  const sceneryTop = sceneryRect.top - previewRect.top;
  const centerY = sceneryTop + (sceneryRect.height - canvasRect.height) / 2;
  __privateGet(this, _canvas2).style.position = "absolute";
  __privateGet(this, _canvas2).style.left = `${sceneryLeft + __privateGet(this, _spriteOffset)}px`;
  __privateGet(this, _canvas2).style.top = `${centerY}px`;
};
__publicField(AnimationPreview, "styles", `
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

    .preview-area.game-preview-mode {
        padding: 0;
    }

    .scenery-canvas {
        position: absolute;
        pointer-events: none;
    }

    .game-preview-canvas {
        display: none;
        image-rendering: pixelated;
        image-rendering: crisp-edges;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
    }

    .grid-canvas {
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 2;
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
    `);
customElements.define("animation-preview", AnimationPreview);
class AnimationTimeline extends EditorComponent {
  constructor() {
    super(...arguments);
    __privateAdd(this, _AnimationTimeline_instances);
    __privateAdd(this, _wrapperEl, null);
    __privateAdd(this, _viewportEl, null);
    __privateAdd(this, _containerEl, null);
    __privateAdd(this, _scrubberEl, null);
    __privateAdd(this, _scrubberThumbEl, null);
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
    __privateAdd(this, _dragFrameStep, 0);
    __privateAdd(this, _boundScrubberMove, null);
    __privateAdd(this, _boundScrubberUp, null);
    __privateAdd(this, _boundPointerMove, null);
    __privateAdd(this, _boundPointerUp, null);
  }
  onConnected() {
    __privateMethod(this, _AnimationTimeline_instances, buildDOM_fn5).call(this);
    this.tabIndex = 0;
    this.addEventListener("keydown", (e) => __privateMethod(this, _AnimationTimeline_instances, handleKeydown_fn).call(this, e));
    __privateMethod(this, _AnimationTimeline_instances, setupInternalDrag_fn).call(this);
    if (__privateGet(this, _frames).length > 0) {
      __privateMethod(this, _AnimationTimeline_instances, render_fn2).call(this);
    }
  }
  onDisconnected() {
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
  flashAddedFrame(index) {
    requestAnimationFrame(() => {
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
    });
  }
  flashMovedFrame(newIndex) {
    requestAnimationFrame(() => {
      const frameEls = __privateGet(this, _containerEl).querySelectorAll(".frame");
      const frameEl = frameEls[newIndex];
      if (!frameEl) {
        return;
      }
      frameEl.classList.add("just-settled");
      frameEl.addEventListener("animationend", () => {
        frameEl.classList.remove("just-settled");
      }, { once: true });
    });
  }
}
_wrapperEl = new WeakMap();
_viewportEl = new WeakMap();
_containerEl = new WeakMap();
_scrubberEl = new WeakMap();
_scrubberThumbEl = new WeakMap();
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
_dragFrameStep = new WeakMap();
_AnimationTimeline_instances = new WeakSet();
buildDOM_fn5 = function() {
  __privateSet(this, _wrapperEl, createElement("div", { class: "timeline-wrapper" }));
  __privateSet(this, _viewportEl, createElement("div", { class: "timeline-viewport" }));
  __privateSet(this, _containerEl, createElement("div", { class: "timeline" }));
  __privateSet(this, _scrubberEl, createElement("div", { class: "scrubber hidden" }));
  __privateSet(this, _scrubberThumbEl, createElement("div", { class: "scrubber-thumb" }));
  __privateGet(this, _scrubberEl).appendChild(__privateGet(this, _scrubberThumbEl));
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
    const frameEls = __privateGet(this, _containerEl).querySelectorAll(".frame");
    if (frameEls.length > 1) {
      __privateSet(this, _dragFrameStep, frameEls[1].getBoundingClientRect().left - frameEls[0].getBoundingClientRect().left);
    } else if (frameEls.length > 0) {
      __privateSet(this, _dragFrameStep, frameEls[0].offsetWidth);
    }
    __privateMethod(this, _AnimationTimeline_instances, createInternalDragGhost_fn).call(this, e.clientX, e.clientY);
    __privateMethod(this, _AnimationTimeline_instances, markFrameDragging_fn).call(this, __privateGet(this, _internalDragIndex), true);
    this.classList.add("dragging");
    __privateGet(this, _containerEl).classList.add("gap-active");
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
      __privateMethod(this, _AnimationTimeline_instances, clearFrameGaps_fn).call(this);
    } else {
      __privateGet(this, _containerEl).classList.add("drag-over");
      __privateSet(this, _dropIndex, __privateMethod(this, _AnimationTimeline_instances, calculateDropIndex_fn).call(this, e.clientX));
      __privateMethod(this, _AnimationTimeline_instances, updateFrameGaps_fn).call(this);
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
      deleteHint = createElement("div", {
        class: "delete-hint",
        text: "Release to delete",
        style: `
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
                    `
      });
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
    __privateMethod(this, _AnimationTimeline_instances, clearFrameGaps_fn).call(this);
    __privateGet(this, _containerEl).classList.remove("drag-over", "gap-active");
    this.classList.remove("dragging");
  }
  __privateSet(this, _internalDragIndex, -1);
  __privateSet(this, _internalDragActive, false);
  __privateSet(this, _isDragOutside, false);
};
updateFrameGaps_fn = function() {
  const frameEls = __privateGet(this, _containerEl).querySelectorAll(".frame");
  if (frameEls.length === 0) {
    return;
  }
  const S = __privateGet(this, _internalDragIndex);
  const D = __privateGet(this, _dropIndex);
  const noMove = D < 0 || D === S || D === S + 1;
  const step = __privateGet(this, _dragFrameStep);
  const sourceShift = S < D ? (D - S - 1) * step : (D - S) * step;
  __privateMethod(this, _AnimationTimeline_instances, applySourceGap_fn).call(this, frameEls[S], noMove, sourceShift);
  frameEls.forEach((el, i) => {
    if (i === S) {
      return;
    }
    if (noMove) {
      el.style.transform = "";
      return;
    }
    el.style.transform = computeFrameShift(i, S, D, step);
  });
};
applySourceGap_fn = function(el, noMove, shift) {
  if (noMove) {
    el.style.transform = "";
    el.classList.remove("drag-placeholder");
  } else {
    el.style.transform = `translateX(${shift}px)`;
    el.classList.add("drag-placeholder");
  }
};
clearFrameGaps_fn = function() {
  const frameEls = __privateGet(this, _containerEl).querySelectorAll(".frame");
  frameEls.forEach((el) => {
    el.style.transform = "";
    el.classList.remove("drag-placeholder");
  });
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
  __privateSet(this, _internalDragGhost, createElement("div", {
    style: `
                position: fixed;
                pointer-events: none;
                z-index: 10000;
                opacity: 0.8;
                transform: translate(-50%, -50%) scale(0.9);
            `
  }));
  const clonedCanvas = createElement("canvas", {
    style: "border-radius: 4px; box-shadow: 0 4px 12px rgba(0,0,0,0.4);"
  });
  clonedCanvas.width = canvas.width;
  clonedCanvas.height = canvas.height;
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
  e.preventDefault();
  if (e.target === __privateGet(this, _scrubberThumbEl)) {
    __privateSet(this, _scrubberDragging, true);
    __privateSet(this, _scrubberStartX, e.clientX);
    __privateSet(this, _scrubberStartScroll, __privateGet(this, _scrollLeft));
    __privateGet(this, _scrubberEl).classList.add("dragging");
    __privateGet(this, _scrubberEl).setPointerCapture(e.pointerId);
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
render_fn2 = function() {
  __privateGet(this, _containerEl).innerHTML = "";
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
  const addBtn = createElement("button", {
    class: "add-frame-btn",
    html: "+",
    title: "Add frames"
  });
  addBtn.addEventListener("click", () => {
    this.dispatchEvent(new CustomEvent("addrequest", { bubbles: true }));
  });
  return addBtn;
};
createFrameElement_fn = function(frame, index) {
  const frameEl = createElement("div", { class: "frame" });
  frameEl.dataset.index = index;
  const thumbnailWrapper = createElement("div", { class: "frame-thumbnail-wrapper" });
  const canvas = createElement("canvas", { class: "frame-thumbnail" });
  canvas.width = 100;
  canvas.height = 100;
  drawFrameThumbnail$1(canvas, frame);
  thumbnailWrapper.appendChild(canvas);
  const indexEl = createElement("div", { class: "frame-index", text: String(index) });
  thumbnailWrapper.appendChild(indexEl);
  const duration = frame.duration || 1;
  if (duration !== 1) {
    const displayDuration = Number.isInteger(duration) ? duration : duration.toFixed(1);
    const durationBadge = createElement("div", {
      class: "frame-duration-badge",
      text: `${displayDuration}×`
    });
    thumbnailWrapper.appendChild(durationBadge);
  }
  if (frame.events && frame.events.length > 0) {
    const eventBadge = createElement("div", {
      class: "frame-event-badge",
      title: frame.events.join(", ")
    });
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
__publicField(AnimationTimeline, "styles", `
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
        padding: 0;
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
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        user-select: none;
    }

    .frame:hover {
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
        opacity: 0;
        pointer-events: none;
    }

    .frame.drag-placeholder {
        opacity: 0.3 !important;
        outline: 2px dashed var(--accent);
        outline-offset: -2px;
    }

    .timeline.gap-active .frame {
        transition: transform 0.15s ease-out;
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

    .frame.just-settled {
        animation: frame-settle 0.4s ease-out;
    }

    @keyframes frame-settle {
        0% {
            transform: scale(1.05);
            box-shadow: 0 0 0 2px var(--accent), 0 0 12px rgba(99, 102, 241, 0.4);
        }
        100% {
            transform: scale(1);
            box-shadow: none;
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

    .add-frame-btn {
        appearance: none;
        background: var(--bg-tertiary);
        border: 2px dashed var(--border);
        border-radius: var(--radius-md);
        color: var(--fg-muted);
        font-size: 24px;
        font-weight: 300;
        width: 100px;
        height: 100px;
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
function computeFrameShift(i, S, D, step) {
  if (S < D && i > S && i < D) {
    return `translateX(${-step}px)`;
  }
  if (S > D && i >= D && i < S) {
    return `translateX(${step}px)`;
  }
  return "";
}
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
class SpritesheetViewer extends EditorComponent {
  constructor() {
    super(...arguments);
    __privateAdd(this, _SpritesheetViewer_instances);
    __privateAdd(this, _containerEl2, null);
    __privateAdd(this, _filterEl, null);
    __privateAdd(this, _gridEl, null);
    __privateAdd(this, _spritesheet, null);
    __privateAdd(this, _filter, null);
    __privateAdd(this, _animationColorMap, /* @__PURE__ */ new Map());
  }
  onConnected() {
    __privateMethod(this, _SpritesheetViewer_instances, buildDOM_fn6).call(this);
    if (__privateGet(this, _spritesheet)) {
      __privateMethod(this, _SpritesheetViewer_instances, renderFilter_fn).call(this);
      __privateMethod(this, _SpritesheetViewer_instances, renderGrid_fn2).call(this);
    }
  }
  setSpritesheet(spritesheet) {
    __privateSet(this, _spritesheet, spritesheet);
    __privateSet(this, _filter, null);
    __privateMethod(this, _SpritesheetViewer_instances, buildAnimationColorMap_fn).call(this);
    if (__privateGet(this, _filterEl)) {
      __privateMethod(this, _SpritesheetViewer_instances, renderFilter_fn).call(this);
      __privateMethod(this, _SpritesheetViewer_instances, renderGrid_fn2).call(this);
    }
  }
}
_containerEl2 = new WeakMap();
_filterEl = new WeakMap();
_gridEl = new WeakMap();
_spritesheet = new WeakMap();
_filter = new WeakMap();
_animationColorMap = new WeakMap();
_SpritesheetViewer_instances = new WeakSet();
buildDOM_fn6 = function() {
  __privateSet(this, _containerEl2, createElement("div", { class: "viewer-container" }));
  __privateSet(this, _filterEl, createElement("select", { class: "filter-select" }));
  __privateGet(this, _filterEl).addEventListener("change", (e) => {
    __privateSet(this, _filter, e.target.value || null);
    __privateMethod(this, _SpritesheetViewer_instances, renderGrid_fn2).call(this);
  });
  __privateSet(this, _gridEl, createElement("div", { class: "frame-grid" }));
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
  const allOption = createElement("option", { value: "", text: "All frames" });
  __privateGet(this, _filterEl).appendChild(allOption);
  if (!__privateGet(this, _spritesheet)) {
    return;
  }
  const animations = __privateGet(this, _spritesheet).listAnimations();
  for (const name of animations) {
    const option = createElement("option", { value: name, text: name });
    __privateGet(this, _filterEl).appendChild(option);
  }
};
renderGrid_fn2 = function() {
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
  const frameEl = createElement("div", {
    class: "frame",
    title: name,
    attrs: { "data-name": name }
  });
  const animPrefix = getAnimationPrefix(name);
  if (animPrefix && __privateGet(this, _animationColorMap).has(animPrefix)) {
    frameEl.style.background = __privateGet(this, _animationColorMap).get(animPrefix);
  }
  const canvas = createElement("canvas", { class: "frame-thumbnail" });
  canvas.width = 100;
  canvas.height = 100;
  drawFrameThumbnail(canvas, frameData.region);
  frameEl.appendChild(canvas);
  const nameEl = createElement("div", { class: "frame-name", text: name });
  frameEl.appendChild(nameEl);
  frameEl.addEventListener("click", () => {
    this.dispatchEvent(new CustomEvent("frameclick", {
      detail: { name, region: frameData.region, frameData }
    }));
  });
  return frameEl;
};
__publicField(SpritesheetViewer, "styles", `
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
        cursor: pointer;
        transition: filter 0.15s;
    }

    .frame:hover {
        filter: brightness(1.2);
    }

    .frame:active {
        transform: scale(0.95);
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
function getAnimationPrefix(frameName) {
  const slashIndex = frameName.lastIndexOf("/");
  if (slashIndex === -1) {
    return null;
  }
  return frameName.substring(0, slashIndex);
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
customElements.define("spritesheet-viewer", SpritesheetViewer);
export {
  BaseRenderer as B,
  Circle as C,
  Easing as E,
  Group2D as G,
  Object2D as O,
  Rectangle as R,
  Sprite as S,
  WebGLRenderer as W,
  Camera as a,
  ShaderEffect as b,
  SpriteAnimator as c,
  WebGLTextureManager as d,
  controlsSheet as e,
  emitChange as f,
  RenderGroup as g,
  handleAttributeChange as h,
  traverseAndCollect as t
};
