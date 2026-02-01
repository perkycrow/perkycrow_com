var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _functionBindings, _stringBindings, _AutoView_instances, compileBindings_fn;
import { E as EntityView } from "./entity_view-IA5mL-_k.js";
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
export {
  AutoView as A
};
