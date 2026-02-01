var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var _context, _collected;
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
export {
  CanvasObjectRenderer as C
};
