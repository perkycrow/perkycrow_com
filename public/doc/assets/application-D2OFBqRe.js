var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _Application_instances, createMainController_fn, autoRegisterBindings_fn;
import { P as PerkyModule } from "./perky_module-CDYsQSv9.js";
import { M as Manifest } from "./manifest-CcXH69ku.js";
import { A as ActionDispatcher } from "./action_dispatcher-BTrHqwt3.js";
import { A as ActionController } from "./action_controller-DbekOh4I.js";
import { R as Registry } from "./registry-BmMVxDIp.js";
import { P as PerkyView, I as InputSystem } from "./perky_view-Bbbq1S5O.js";
import { S as SourceManager } from "./source_manager-DIE15Ki8.js";
import { a as loaders } from "./loaders-BPPjM6oY.js";
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
    __privateMethod(this, _Application_instances, createMainController_fn).call(this);
    (_a = this.configureApplication) == null ? void 0 : _a.call(this, options);
  }
  async preload() {
    return this.loadTag("preload");
  }
}
_Application_instances = new WeakSet();
createMainController_fn = function() {
  const ControllerClass = this.constructor.ActionController;
  if (ControllerClass) {
    const controller = this.registerController(ControllerClass);
    this.setActiveControllers(controller.$id);
  }
};
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
__publicField(Application, "ActionController", ActionController);
export {
  Application as A
};
