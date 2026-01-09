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
var _resizeObserver, _autoFitEnabled, _BaseRenderer_instances, updateAutoFitObserver_fn, refreshAutoFit_fn, _x, _y, _rotation, _scaleX, _scaleY, _pivotX, _pivotY, _localMatrix, _worldMatrix, _dirty, _sortedChildren, _childrenNeedSort, _enabled, _effects, _tint, _effects2, _debugGizmos;
import { P as PerkyModule } from "./perky_module-BD8xZ4RH.js";
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
    __privateAdd(this, _resizeObserver, null);
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
export {
  BaseRenderer as B,
  Circle as C,
  Group2D as G,
  Image2D as I,
  Object2D as O,
  Rectangle as R,
  Sprite2D as S,
  Camera2D as a,
  traverseAndCollect as t
};
