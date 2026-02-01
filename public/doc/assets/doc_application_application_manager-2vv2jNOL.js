var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _ApplicationManager_instances, findApp_fn;
import { d as doc, t as text, s as section, a as action, l as logger, c as code } from "./runtime-DOmi4lo7.js";
import { R as Registry } from "./registry-CF_H4IOw.js";
import { P as PerkyModule } from "./perky_module-DrWJO8l1.js";
import { A as Application } from "./application-CKyYiLKM.js";
import "./observable_map-BPZFGUWq.js";
import "./observable_set-BOSKLaPv.js";
import "./utils-DVCexGPz.js";
import "./inflector-BxOpyWLP.js";
import "./manifest-D91-_JTr.js";
import "./asset-DgAYMWu3.js";
import "./action_dispatcher-CVnn-6BB.js";
import "./action_controller-DyFDDS26.js";
import "./perky_view-Bn-e_bN5.js";
import "./dom_utils-DTpHkHXB.js";
import "./source_manager-k7LyJEiO.js";
import "./source_loader-CBYKn62_.js";
import "./loaders-DdncYhBP.js";
import "./input_system-CExLXbtT.js";
import "./input_binder-DslDp1y0.js";
import "./input_binding-CfW7yBsk.js";
import "./composite_binding-CzFNM38-.js";
import "./keyboard_device-DhWXHTRz.js";
import "./input_device-BRob1gB9.js";
import "./button_control-n2KtTtYs.js";
import "./input_control-BiNc-VBj.js";
import "./mouse_device-CM8oUMnh.js";
import "./vec2_control-CW0RdMFR.js";
import "./vec2-BvD8ope7.js";
import "./navigation_control-BhgO3nPA.js";
import "./touch_device-BSs8ql2L.js";
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
const application_manager_doc = doc("ApplicationManager", { advanced: true }, () => {
  text(`
        Manages multiple [[Application@application]] instances.
        Handles registration, creation, lifecycle, and lookup of apps.
        Extends [[PerkyModule]] and stores app constructors in a [[Registry]].
    `);
  section("Registering Apps", () => {
    text("Register application constructors by name before creating instances.");
    action("register / unregister", () => {
      const manager = new ApplicationManager({ $id: "manager" });
      manager.register("demo", Application);
      logger.log("registered:", manager.constructors.has("demo"));
      manager.unregister("demo");
      logger.log("after unregister:", manager.constructors.has("demo"));
    });
  });
  section("Creating Apps", () => {
    text("Create app instances from registered constructors.");
    action("createApp", () => {
      const manager = new ApplicationManager({ $id: "manager" });
      manager.register("demo", Application);
      const app = manager.createApp("demo", { $id: "myApp" });
      logger.log("app id:", app.$id);
      logger.log("children:", manager.children.length);
    });
  });
  section("Lifecycle", () => {
    text("Start, stop, and dispose apps by name or id.");
    action("startApp / stopApp", () => {
      const manager = new ApplicationManager({ $id: "manager" });
      manager.register("demo", Application);
      const app = manager.createApp("demo", { $id: "myApp" });
      manager.startApp("myApp");
      logger.log("running:", app.running);
      manager.stopApp("myApp");
      logger.log("after stop:", app.running);
    });
    action("disposeApp", () => {
      const manager = new ApplicationManager({ $id: "manager" });
      manager.register("demo", Application);
      manager.createApp("demo", { $id: "temp" });
      logger.log("before:", manager.children.length);
      manager.disposeApp("temp");
      logger.log("after:", manager.children.length);
    });
  });
  section("Listing Apps", () => {
    text("List all apps or filter by name.");
    action("list", () => {
      const manager = new ApplicationManager({ $id: "manager" });
      manager.register("demo", Application);
      manager.createApp("demo", { $id: "app1", $name: "Game One" });
      manager.createApp("demo", { $id: "app2", $name: "Game Two" });
      manager.createApp("demo", { $id: "app3", $name: "Editor" });
      logger.log("all:", manager.list().map((a) => a.$name));
      logger.log("games:", manager.list("Game").map((a) => a.$name));
    });
  });
  section("Execute", () => {
    text("Call a method on a specific app by name or id.");
    code("execute", () => {
      const manager = new ApplicationManager({ $id: "manager" });
      manager.register("demo", Application);
      manager.createApp("demo", { $id: "myApp" });
      manager.execute("myApp", "start");
    });
  });
});
export {
  application_manager_doc as default
};
