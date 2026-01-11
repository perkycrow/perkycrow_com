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
var _functionBindings, _stringBindings, _AutoView_instances, compileBindings_fn, _classRegistry, _matcherRegistry, _views, _WorldView_instances, handleEntitySet_fn, handleEntityDelete_fn, disposeAllViews_fn, resolveViews_fn;
import { P as PerkyModule } from "./perky_module-BJShv6RO.js";
import { G as Group2D } from "./group_2d-CWpylRxM.js";
import { O as Object2D } from "./object_2d-Y0NPrBXr.js";
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
export {
  WorldView as W
};
