var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _RenderSystem_instances, configureDimensions_fn, setupInitialLayers_fn, setupResizeListener_fn;
import { P as PerkyModule } from "./perky_module-DrWJO8l1.js";
import { P as PerkyView } from "./perky_view-Bn-e_bN5.js";
import { C as CanvasLayer } from "./canvas_layer-DcxDFtNS.js";
import { H as HTMLLayer } from "./html_layer-BdWoJ3oM.js";
import { C as Camera } from "./camera-DKv4MCkL.js";
class RenderSystem extends PerkyModule {
  constructor(options = {}) {
    super(options);
    __privateAdd(this, _RenderSystem_instances);
    this.create(PerkyView, {
      $bind: "view",
      className: options.className || "render-system-container",
      position: "absolute"
    });
    if (options.container) {
      this.mount(options.container);
    }
    __privateMethod(this, _RenderSystem_instances, configureDimensions_fn).call(this, options);
    this.setupCameras(options.cameras);
    __privateMethod(this, _RenderSystem_instances, setupInitialLayers_fn).call(this, options.layers);
    __privateMethod(this, _RenderSystem_instances, setupResizeListener_fn).call(this);
  }
  get element() {
    return this.view.element;
  }
  get container() {
    return this.view.container;
  }
  mount(container) {
    return this.view.mount(container);
  }
  dismount() {
    return this.view.dismount();
  }
  get mounted() {
    return this.view.mounted;
  }
  setupCameras(camerasConfig = {}) {
    const hasMainInConfig = "main" in camerasConfig;
    if (!hasMainInConfig) {
      this.createCamera("main", {
        unitsInView: 10,
        viewportWidth: this.layerWidth,
        viewportHeight: this.layerHeight
      });
    }
    Object.entries(camerasConfig).forEach(([id, config]) => {
      this.createCamera(id, config);
    });
    return this;
  }
  createCamera(id, config = {}) {
    const options = {
      $id: id,
      viewportWidth: this.layerWidth,
      viewportHeight: this.layerHeight,
      ...config
    };
    return this.create(Camera, options);
  }
  getCamera(id = "main") {
    const camera = this.getChild(id);
    if (!camera || camera.$category !== "camera") {
      throw new Error(`Camera "${id}" not found`);
    }
    return camera;
  }
  setCamera(id, config) {
    const existing = this.getChild(id);
    if (existing && existing.$category === "camera") {
      this.removeChild(id);
    }
    return this.createCamera(id, config);
  }
  resolveCamera(cameraOption) {
    if (!cameraOption) {
      return null;
    }
    if (typeof cameraOption === "string") {
      return this.getCamera(cameraOption);
    }
    if (cameraOption instanceof Camera) {
      return cameraOption;
    }
    if (typeof cameraOption === "object") {
      return this.createCamera(cameraOption.$id, cameraOption);
    }
    return null;
  }
  createLayer(name, type = "canvas", options = {}) {
    if (this.childrenRegistry.has(name)) {
      throw new Error(`Layer "${name}" already exists`);
    }
    const camera = this.resolveCamera(options.camera);
    const layerOptions = {
      $id: name,
      $category: "layer",
      ...options,
      width: this.layerWidth,
      height: this.layerHeight,
      camera,
      layerManager: this
    };
    let LayerClass;
    if (type === "canvas" || type === "webgl") {
      LayerClass = CanvasLayer;
      layerOptions.rendererType = type;
    } else if (type === "html") {
      LayerClass = HTMLLayer;
    } else {
      throw new Error(`Unknown layer type: "${type}"`);
    }
    const layer = this.create(LayerClass, layerOptions);
    layer.mount(this.element);
    this.sortLayers();
    return layer;
  }
  getLayer(name) {
    return this.getChild(name);
  }
  getRenderer(name) {
    return this.getLayer(name).renderer;
  }
  getHTML(name) {
    return this.getLayer(name).element;
  }
  removeLayer(name) {
    return this.removeChild(name);
  }
  sortLayers() {
    const sorted = this.childrenByCategory("layer").sort((a, b) => a.zIndex - b.zIndex);
    sorted.forEach((layer) => {
      if (layer.element && layer.element.parentElement) {
        this.element.appendChild(layer.element);
      }
    });
    return this;
  }
  resize(width, height) {
    this.layerWidth = width;
    this.layerHeight = height;
    this.childrenByCategory("camera").forEach((camera) => {
      camera.viewportWidth = width;
      camera.viewportHeight = height;
    });
    this.childrenByCategory("layer").forEach((layer) => {
      layer.resize(width, height);
    });
    return this;
  }
  resizeToContainer() {
    const width = this.view.element.clientWidth;
    const height = this.view.element.clientHeight;
    if (width > 0 && height > 0) {
      return this.resize(width, height);
    }
    return this;
  }
  enableAutoResize() {
    this.autoResizeEnabled = true;
    return this;
  }
  disableAutoResize() {
    this.autoResizeEnabled = false;
    return this;
  }
  render() {
    this.childrenByCategory("layer").forEach((layer) => {
      if (layer instanceof CanvasLayer && layer.autoRender) {
        layer.render();
      }
      if (layer instanceof HTMLLayer && layer.autoUpdate) {
        layer.updateWorldElements();
      }
    });
    return this;
  }
  renderLayer(name) {
    const layer = this.getLayer(name);
    if (layer instanceof CanvasLayer) {
      layer.render();
    }
    return this;
  }
  showLayer(name) {
    const layer = this.getLayer(name);
    if (layer) {
      layer.setVisible(true);
    }
    return this;
  }
  hideLayer(name) {
    const layer = this.getLayer(name);
    if (layer) {
      layer.setVisible(false);
    }
    return this;
  }
  onInstall(host) {
    this.delegateTo(host, [
      "createLayer",
      "getLayer",
      "getRenderer",
      "getHTML",
      "removeLayer",
      "renderLayer",
      "showLayer",
      "hideLayer",
      "createCamera",
      "getCamera",
      "setCamera"
    ]);
    if (host.element) {
      this.mount(host.element);
    } else if (host.mounted !== void 0) {
      this.listenToOnce(host, "mount", () => {
        this.mount(host.element);
      });
    }
  }
  onDispose() {
    var _a, _b;
    if ((_b = (_a = this.view) == null ? void 0 : _a.element) == null ? void 0 : _b.parentElement) {
      this.view.element.parentElement.removeChild(this.view.element);
    }
  }
}
_RenderSystem_instances = new WeakSet();
configureDimensions_fn = function(options) {
  this.layerWidth = options.width ?? 800;
  this.layerHeight = options.height ?? 600;
  const hasExplicitDimensions = options.width !== void 0 || options.height !== void 0;
  this.autoResizeEnabled = options.autoResize ?? !hasExplicitDimensions;
};
setupInitialLayers_fn = function(layers) {
  if (layers) {
    layers.forEach((layerConfig) => {
      this.createLayer(layerConfig.name, layerConfig.type, layerConfig);
    });
  }
};
setupResizeListener_fn = function() {
  this.on("resize", ({ width, height }) => {
    if (this.autoResizeEnabled) {
      this.resize(width, height);
    }
  });
};
__publicField(RenderSystem, "$category", "renderSystem");
export {
  RenderSystem as R
};
