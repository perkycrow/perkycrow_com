var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _ctx, _filters, _manualEffects, _CanvasPostProcessor_instances, buildFilterString_fn;
import { d as doc, t as text, s as section, c as code } from "./runtime-DOmi4lo7.js";
const FILTER_FORMATTERS = {
  blur: (v) => `blur(${v}px)`,
  brightness: (v) => `brightness(${v})`,
  contrast: (v) => `contrast(${v})`,
  grayscale: (v) => `grayscale(${v})`,
  saturate: (v) => `saturate(${v})`,
  sepia: (v) => `sepia(${v})`,
  hueRotate: (v) => `hue-rotate(${v}deg)`,
  invert: (v) => `invert(${v})`,
  opacity: (v) => `opacity(${v})`,
  dropShadow: (v) => `drop-shadow(${v})`
};
class CanvasPostProcessor {
  constructor(ctx) {
    __privateAdd(this, _CanvasPostProcessor_instances);
    __privateAdd(this, _ctx, null);
    __privateAdd(this, _filters, []);
    __privateAdd(this, _manualEffects, []);
    __privateSet(this, _ctx, ctx);
  }
  get filters() {
    return __privateGet(this, _filters);
  }
  addFilter(type, value) {
    __privateGet(this, _filters).push({ type, value });
    return this;
  }
  removeFilter(type) {
    __privateSet(this, _filters, __privateGet(this, _filters).filter((f) => f.type !== type));
    return this;
  }
  clearFilters() {
    __privateSet(this, _filters, []);
    return this;
  }
  addManualEffect(effect) {
    __privateGet(this, _manualEffects).push(effect);
    return this;
  }
  removeManualEffect(effect) {
    const index = __privateGet(this, _manualEffects).indexOf(effect);
    if (index !== -1) {
      __privateGet(this, _manualEffects).splice(index, 1);
    }
    return this;
  }
  clearManualEffects() {
    __privateSet(this, _manualEffects, []);
    return this;
  }
  begin() {
    const filterString = __privateMethod(this, _CanvasPostProcessor_instances, buildFilterString_fn).call(this);
    if (filterString) {
      __privateGet(this, _ctx).filter = filterString;
    }
  }
  finish(width, height) {
    __privateGet(this, _ctx).filter = "none";
    for (const effect of __privateGet(this, _manualEffects)) {
      effect.apply(__privateGet(this, _ctx), width, height);
    }
  }
  applyVignette(intensity = 0.6, softness = 0.5) {
    const ctx = __privateGet(this, _ctx);
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.max(width, height) * (1 - intensity);
    const gradient = ctx.createRadialGradient(
      centerX,
      centerY,
      radius * softness,
      centerX,
      centerY,
      radius
    );
    gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
    gradient.addColorStop(1, `rgba(0, 0, 0, ${intensity})`);
    ctx.save();
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    ctx.restore();
  }
  dispose() {
    __privateSet(this, _filters, []);
    __privateSet(this, _manualEffects, []);
    __privateSet(this, _ctx, null);
  }
}
_ctx = new WeakMap();
_filters = new WeakMap();
_manualEffects = new WeakMap();
_CanvasPostProcessor_instances = new WeakSet();
buildFilterString_fn = function() {
  return __privateGet(this, _filters).map(({ type, value }) => {
    var _a;
    return ((_a = FILTER_FORMATTERS[type]) == null ? void 0 : _a.call(FILTER_FORMATTERS, value)) ?? "";
  }).filter((s) => s.length > 0).join(" ");
};
const canvas_post_processor_doc = doc("CanvasPostProcessor", { advanced: true }, () => {
  text(`
        Post-processing for Canvas 2D renderers. Applies CSS filter effects (blur, brightness,
        contrast, etc.) and manual pixel-level effects to the canvas after rendering.
    `);
  section("CSS Filters", () => {
    text(`
            Filters are stacked and applied as a single CSS filter string before rendering.
            Supported types: \`blur\`, \`brightness\`, \`contrast\`, \`grayscale\`, \`saturate\`,
            \`sepia\`, \`hueRotate\`, \`invert\`, \`opacity\`, \`dropShadow\`.
        `);
    code("Adding filters", () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const processor = new CanvasPostProcessor(ctx);
      processor.addFilter("blur", 2);
      processor.addFilter("brightness", 1.2);
      processor.filters.length;
      processor.removeFilter("blur");
      processor.filters.length;
      processor.clearFilters();
      processor.filters.length;
    });
  });
  section("Manual Effects", () => {
    text(`
            Manual effects run after filters during \`finish()\`. Each effect must implement
            an \`apply(ctx, width, height)\` method. This is useful for effects that require
            direct canvas manipulation like vignettes.
        `);
    code("Vignette", () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const processor = new CanvasPostProcessor(ctx);
      processor.applyVignette(0.6, 0.5);
    });
  });
  section("Render Cycle", () => {
    text(`
            Call \`begin()\` before drawing to apply CSS filters, and \`finish()\` after
            drawing to reset filters and run manual effects. [[CanvasRenderer@canvas_renderer]]
            handles this automatically.
        `);
    code("Begin and finish", () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const processor = new CanvasPostProcessor(ctx);
      processor.addFilter("contrast", 1.5);
      processor.begin();
      processor.finish(canvas.width, canvas.height);
    });
  });
});
export {
  canvas_post_processor_doc as default
};
