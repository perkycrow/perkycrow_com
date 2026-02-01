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
var _rendererRegistry, _renderers, _debugGizmoRenderer, _CanvasRenderer_instances, setupDefaultRenderers_fn;
import { B as BaseRenderer } from "./base_renderer-D4JWfabm.js";
import { t as traverseAndCollect } from "./traverse-C3LohcEy.js";
import { C as CanvasObjectRenderer } from "./canvas_object_renderer-DluJQ6Jr.js";
import { C as Circle } from "./circle-CP_IlbCy.js";
import { R as Rectangle } from "./rectangle-CaoTFuaL.js";
import { S as Sprite } from "./sprite-Dhc4lLUh.js";
import { C as CanvasDebugGizmoRenderer } from "./canvas_debug_gizmo_renderer-DFq6beKS.js";
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
export {
  CanvasRenderer as C
};
