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
var _resizeObserver, _previousStyles, _onFullscreenChange, _previousDisplay, _PerkyView_instances, setupResizeObserver_fn, setupFullscreenEvents_fn, requestFullscreen_fn, dispatchDisplayModeChanged_fn;
import { u as uniqueId } from "./utils-DVCexGPz.js";
import { P as PerkyModule } from "./perky_module-DrWJO8l1.js";
import { c as createElement } from "./dom_utils-DTpHkHXB.js";
class PerkyView extends PerkyModule {
  constructor(params = {}) {
    super(params);
    __privateAdd(this, _PerkyView_instances);
    __privateAdd(this, _resizeObserver, null);
    __privateAdd(this, _previousStyles, {});
    __privateAdd(this, _onFullscreenChange, null);
    __privateAdd(this, _previousDisplay, null);
    __publicField(this, "displayMode", "normal");
    this.element = params.element ? params.element : this.constructor.defaultElement(params);
    if (params.position) {
      applyPositionStyle(this.element, params.position);
    }
    if (params.container) {
      this.mount(params.container);
    }
    if (params.className) {
      this.addClass(params.className);
    }
    __privateMethod(this, _PerkyView_instances, setupResizeObserver_fn).call(this);
    __privateMethod(this, _PerkyView_instances, setupFullscreenEvents_fn).call(this);
  }
  onInstall(host) {
    this.delegateTo(host, [
      "element",
      "mount",
      "dismount",
      "mounted",
      "displayMode",
      "setDisplayMode",
      "enterFullscreenMode",
      "exitFullscreenMode",
      "toggleFullscreen"
    ]);
    this.delegateEventsTo(host, [
      "resize",
      "mount",
      "dismount",
      "displayMode:changed"
    ]);
  }
  get container() {
    return this.element.parentElement;
  }
  get width() {
    return this.element.offsetWidth;
  }
  get height() {
    return this.element.offsetHeight;
  }
  get size() {
    return {
      width: this.width,
      height: this.height
    };
  }
  get aspectRatio() {
    const { width, height } = this.size;
    return height > 0 ? width / height : 0;
  }
  addClass(className) {
    this.element.classList.add(className);
  }
  removeClass(className) {
    this.element.classList.remove(className);
  }
  hasClass(className) {
    return this.element.classList.contains(className);
  }
  setSize({ width, height, unit = "px" }) {
    Object.assign(this.element.style, {
      width: `${width}${unit}`,
      height: `${height}${unit}`
    });
    this.emit("resize", { width, height });
  }
  fit(element = this.container) {
    const { width, height } = element.getBoundingClientRect();
    this.setSize({ width, height });
  }
  mount(container) {
    if (!container) {
      throw new Error("Container element is required");
    }
    if (this.container && this.container !== container) {
      this.container.removeChild(this.element);
    }
    container.appendChild(this.element);
    this.emit("mount", { container });
    if (__privateGet(this, _resizeObserver)) {
      __privateGet(this, _resizeObserver).observe(this.element);
    }
  }
  dismount() {
    if (this.container) {
      this.container.removeChild(this.element);
      this.emit("dismount", { container: this.container });
    }
    if (__privateGet(this, _resizeObserver)) {
      __privateGet(this, _resizeObserver).disconnect();
    }
  }
  get mounted() {
    return Boolean(this.container && this.container.contains(this.element));
  }
  static defaultElement(params) {
    const element = createElement("div", {
      id: params.id || uniqueId("perky_view", "perky_view"),
      class: params.className || "perky-view"
    });
    const styles = {
      display: "block",
      overflow: "hidden",
      position: "relative",
      width: "100%",
      height: "100%",
      ...this.defaultStyles(params)
    };
    Object.assign(element.style, styles);
    return element;
  }
  static defaultStyles() {
    return {};
  }
  isVisible() {
    return this.element.style.display !== "none";
  }
  onDispose() {
    this.exitFullscreenMode();
    if (__privateGet(this, _resizeObserver)) {
      __privateGet(this, _resizeObserver).disconnect();
      __privateSet(this, _resizeObserver, null);
    }
    if (__privateGet(this, _onFullscreenChange)) {
      document.removeEventListener("fullscreenchange", __privateGet(this, _onFullscreenChange));
    }
    this.dismount();
  }
  get html() {
    return this.element.innerHTML;
  }
  get display() {
    return this.element.style.display;
  }
  set display(display) {
    this.element.style.display = display;
  }
  hide() {
    if (this.display && this.display !== "none") {
      __privateSet(this, _previousDisplay, this.display);
    }
    this.display = "none";
  }
  show() {
    if (__privateGet(this, _previousDisplay)) {
      this.display = __privateGet(this, _previousDisplay);
      __privateSet(this, _previousDisplay, null);
    } else {
      this.display = "";
    }
  }
  setDisplayMode(mode) {
    const modes = {
      normal: () => this.exitFullscreenMode(),
      fullscreen: () => this.enterFullscreenMode()
    };
    if (modes[mode]) {
      modes[mode]();
    }
  }
  enterFullscreenMode() {
    if (this.displayMode === "fullscreen") {
      return;
    }
    this.displayMode = "fullscreen";
    document.body.classList.add("fullscreen-mode");
    __privateSet(this, _previousStyles, {
      position: this.element.style.position,
      top: this.element.style.top,
      left: this.element.style.left,
      width: this.element.style.width,
      height: this.element.style.height,
      zIndex: this.element.style.zIndex
    });
    Object.assign(this.element.style, {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100vw",
      height: "100vh",
      zIndex: "10000"
    });
    __privateMethod(this, _PerkyView_instances, requestFullscreen_fn).call(this);
  }
  exitFullscreenMode() {
    if (this.displayMode === "normal") {
      return;
    }
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
    this.displayMode = "normal";
    document.body.style.overflow = "";
    document.body.classList.remove("fullscreen-mode");
    Object.assign(this.element.style, __privateGet(this, _previousStyles));
    __privateSet(this, _previousStyles, {});
    __privateMethod(this, _PerkyView_instances, dispatchDisplayModeChanged_fn).call(this, "normal");
  }
  toggleFullscreen() {
    const mode = this.displayMode;
    if (mode === "fullscreen") {
      this.exitFullscreenMode();
    } else {
      this.enterFullscreenMode();
    }
  }
}
_resizeObserver = new WeakMap();
_previousStyles = new WeakMap();
_onFullscreenChange = new WeakMap();
_previousDisplay = new WeakMap();
_PerkyView_instances = new WeakSet();
setupResizeObserver_fn = function() {
  __privateSet(this, _resizeObserver, new ResizeObserver((entries) => {
    for (const entry of entries) {
      const { width, height } = entry.contentRect;
      if (this.mounted) {
        this.emit("resize", { width, height });
      }
    }
  }));
  if (this.element) {
    __privateGet(this, _resizeObserver).observe(this.element);
  }
};
setupFullscreenEvents_fn = function() {
  const onFullscreenChange = () => {
    if (document.fullscreenElement === this.element) {
      this.displayMode = "fullscreen";
      document.body.style.overflow = "hidden";
      __privateMethod(this, _PerkyView_instances, dispatchDisplayModeChanged_fn).call(this, "fullscreen");
    } else if (this.displayMode === "fullscreen") {
      this.exitFullscreenMode();
    }
  };
  document.addEventListener("fullscreenchange", onFullscreenChange);
  __privateSet(this, _onFullscreenChange, onFullscreenChange);
};
requestFullscreen_fn = function() {
  if (this.element.requestFullscreen) {
    this.element.requestFullscreen();
  }
};
dispatchDisplayModeChanged_fn = function(mode) {
  this.emit("displayMode:changed", { mode });
};
__publicField(PerkyView, "$category", "perkyView");
function applyPositionStyle(element, position) {
  element.style.position = position;
  if (position === "absolute") {
    element.style.top = "0";
    element.style.left = "0";
  }
}
export {
  PerkyView as P
};
