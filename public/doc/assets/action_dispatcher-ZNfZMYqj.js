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
var _activeControllers, _ActionDispatcher_instances, setupMainController_fn, isControllerActive_fn;
import { P as PerkyModule } from "./perky_module-BD8xZ4RH.js";
import { A as ActionController } from "./action_controller-D-4twAJQ.js";
import { l as logger } from "./logger-Wk9ggM8V.js";
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
export {
  ActionDispatcher as A
};
