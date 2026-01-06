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
var _mousedownListener, _mouseupListener, _mousemoveListener, _contextmenuListener, _wheelListener, _MouseDevice_instances, createControls_fn, handleMousedown_fn, handleMouseup_fn, handleMousemove_fn, handleContextmenu_fn, handleWheel_fn;
import { d as doc, t as text, s as section, a as code, c as container } from "./runtime-29XJHD7V.js";
import { I as InputControl, a as InputDevice, B as ButtonControl } from "./button_control-DpZUrUro.js";
import { V as Vec2 } from "./vec2-BvD8ope7.js";
import { l as logger } from "./logger-CkRtvmLl.js";
import "./perky_module-uJdyZ-t_.js";
import "./utils-DXBRLumH.js";
const { VALUE: VALUE$1, OLD_VALUE: OLD_VALUE$1 } = InputControl;
class Vec2Control extends InputControl {
  getDefaultValue() {
    return new Vec2();
  }
  setValue(value, event = null) {
    if (!(value instanceof Vec2)) {
      value = new Vec2(value);
    }
    if (this[VALUE$1] && this[VALUE$1].equals(value)) {
      return false;
    }
    this[OLD_VALUE$1] = this[VALUE$1];
    this[VALUE$1] = new Vec2(value);
    this.emit("updated", this[VALUE$1], this[OLD_VALUE$1], event);
    return true;
  }
}
const { VALUE, OLD_VALUE } = InputControl;
class NavigationControl extends InputControl {
  getDefaultValue() {
    return { deltaX: 0, deltaY: 0, deltaZ: 0, event: null };
  }
  setValue(wheelEvent, event = null) {
    const delta = {
      deltaX: wheelEvent.deltaX || 0,
      deltaY: wheelEvent.deltaY || 0,
      deltaZ: wheelEvent.deltaZ || 0,
      event: wheelEvent
    };
    this[OLD_VALUE] = this[VALUE];
    this[VALUE] = delta;
    this.emit("updated", this[VALUE], this[OLD_VALUE], event);
    return true;
  }
  get deltaY() {
    return this.value.deltaY;
  }
  get deltaX() {
    return this.value.deltaX;
  }
  get deltaZ() {
    return this.value.deltaZ;
  }
  get event() {
    return this.value.event;
  }
  get isTrackpadPinchZoom() {
    return this.event && (this.event.ctrlKey || this.event.metaKey);
  }
  get isMouseWheelZoom() {
    if (!this.event || this.isTrackpadPinchZoom) {
      return false;
    }
    const isVerticalOnly = Math.abs(this.deltaX) <= 0.1;
    const isSignificantVertical = Math.abs(this.deltaY) >= 10;
    return isVerticalOnly && isSignificantVertical;
  }
  get isTrackpadPan() {
    if (!this.event || this.isTrackpadPinchZoom) {
      return false;
    }
    return Math.abs(this.deltaX) > 0.1 || Math.abs(this.deltaY) > 0.1;
  }
}
class MouseDevice extends InputDevice {
  constructor(params = {}) {
    super(params);
    __privateAdd(this, _MouseDevice_instances);
    __privateAdd(this, _mousedownListener);
    __privateAdd(this, _mouseupListener);
    __privateAdd(this, _mousemoveListener);
    __privateAdd(this, _contextmenuListener);
    __privateAdd(this, _wheelListener);
    this.shouldPreventDefault = params.shouldPreventDefault;
    __privateMethod(this, _MouseDevice_instances, createControls_fn).call(this);
    __privateSet(this, _mousedownListener, __privateMethod(this, _MouseDevice_instances, handleMousedown_fn).bind(this));
    __privateSet(this, _mouseupListener, __privateMethod(this, _MouseDevice_instances, handleMouseup_fn).bind(this));
    __privateSet(this, _mousemoveListener, __privateMethod(this, _MouseDevice_instances, handleMousemove_fn).bind(this));
    __privateSet(this, _contextmenuListener, __privateMethod(this, _MouseDevice_instances, handleContextmenu_fn).bind(this));
    __privateSet(this, _wheelListener, __privateMethod(this, _MouseDevice_instances, handleWheel_fn).bind(this));
  }
  onStart() {
    this.container.addEventListener("mousedown", __privateGet(this, _mousedownListener));
    this.container.addEventListener("mouseup", __privateGet(this, _mouseupListener));
    this.container.addEventListener("mousemove", __privateGet(this, _mousemoveListener));
    this.container.addEventListener("contextmenu", __privateGet(this, _contextmenuListener));
    this.container.addEventListener("wheel", __privateGet(this, _wheelListener), { passive: false });
  }
  onStop() {
    this.container.removeEventListener("mousedown", __privateGet(this, _mousedownListener));
    this.container.removeEventListener("mouseup", __privateGet(this, _mouseupListener));
    this.container.removeEventListener("mousemove", __privateGet(this, _mousemoveListener));
    this.container.removeEventListener("contextmenu", __privateGet(this, _contextmenuListener));
    this.container.removeEventListener("wheel", __privateGet(this, _wheelListener), { passive: false });
  }
}
_mousedownListener = new WeakMap();
_mouseupListener = new WeakMap();
_mousemoveListener = new WeakMap();
_contextmenuListener = new WeakMap();
_wheelListener = new WeakMap();
_MouseDevice_instances = new WeakSet();
createControls_fn = function() {
  this.registerControl(new ButtonControl({
    device: this,
    name: "leftButton"
  }));
  this.registerControl(new ButtonControl({
    device: this,
    name: "rightButton"
  }));
  this.registerControl(new ButtonControl({
    device: this,
    name: "middleButton"
  }));
  this.registerControl(new ButtonControl({
    device: this,
    name: "backButton"
  }));
  this.registerControl(new ButtonControl({
    device: this,
    name: "forwardButton"
  }));
  this.registerControl(new Vec2Control({
    device: this,
    name: "position"
  }));
  this.registerControl(new NavigationControl({
    device: this,
    name: "navigation"
  }));
};
handleMousedown_fn = function(event) {
  const buttonName = getButtonName(event.button);
  const control = this.getControl(buttonName);
  this.preventDefault(event, control);
  if (control && !control.isPressed) {
    control.press(event);
  }
};
handleMouseup_fn = function(event) {
  const buttonName = getButtonName(event.button);
  const control = this.getControl(buttonName);
  this.preventDefault(event, control);
  if (control && control.isPressed) {
    control.release(event);
  }
};
handleMousemove_fn = function(event) {
  const positionControl = this.getControl("position");
  positionControl.setValue({
    x: event.clientX,
    y: event.clientY
  }, event);
};
handleContextmenu_fn = function(event) {
  const rightButtonControl = this.getControl("rightButton");
  this.preventDefault(event, rightButtonControl);
};
handleWheel_fn = function(event) {
  const navigationControl = this.getControl("navigation");
  this.preventDefault(event, navigationControl);
  navigationControl.setValue(event, event);
};
__publicField(MouseDevice, "$name", "mouse");
const BUTTON_NAMES = {
  0: "leftButton",
  1: "middleButton",
  2: "rightButton",
  3: "backButton",
  4: "forwardButton"
};
function getButtonName(button) {
  return BUTTON_NAMES[button] || `button${button}`;
}
const mouse_device_doc = doc("MouseDevice", () => {
  text(`
        Mouse input device. Tracks button presses, cursor position, and wheel/trackpad navigation.
        Creates controls for left, right, middle, back, and forward buttons.
    `);
  section("Basic Setup", () => {
    text(`
            Create a MouseDevice attached to a container element.
            The device must be started to begin listening for events.
        `);
    code("Creation", () => {
      const mouse = new MouseDevice({
        container: document.body
      });
      mouse.start();
    });
    container({ title: "Mouse buttons", width: 400, height: 150 }, (ctx) => {
      ctx.container.style.display = "flex";
      ctx.container.style.flexDirection = "column";
      ctx.container.style.alignItems = "center";
      ctx.container.style.justifyContent = "center";
      ctx.container.style.background = "#1a1a2e";
      ctx.container.style.color = "#fff";
      ctx.container.style.fontFamily = "monospace";
      ctx.container.style.userSelect = "none";
      const hint = document.createElement("div");
      hint.textContent = "Click with different mouse buttons";
      hint.style.fontSize = "12px";
      hint.style.opacity = "0.6";
      hint.style.marginBottom = "16px";
      ctx.container.appendChild(hint);
      const display = document.createElement("div");
      display.style.fontSize = "20px";
      display.style.minHeight = "28px";
      ctx.container.appendChild(display);
      const mouse = new MouseDevice({
        container: ctx.container
      });
      mouse.on("control:pressed", (control) => {
        if (control.name.includes("Button")) {
          display.textContent = control.name;
          logger.log("pressed:", control.name);
        }
      });
      mouse.on("control:released", (control) => {
        if (control.name.includes("Button")) {
          display.textContent = "";
          logger.log("released:", control.name);
        }
      });
      mouse.start();
      ctx.setApp(mouse);
    });
  });
  section("Position Tracking", () => {
    text(`
            The \`position\` control tracks cursor coordinates as a Vec2.
            Values are relative to the viewport (clientX/clientY).
        `);
    container({ title: "Cursor position", width: 400, height: 200 }, (ctx) => {
      ctx.container.style.display = "flex";
      ctx.container.style.flexDirection = "column";
      ctx.container.style.alignItems = "center";
      ctx.container.style.justifyContent = "center";
      ctx.container.style.background = "#16213e";
      ctx.container.style.color = "#fff";
      ctx.container.style.fontFamily = "monospace";
      const hint = document.createElement("div");
      hint.textContent = "Move cursor inside this area";
      hint.style.fontSize = "12px";
      hint.style.opacity = "0.6";
      hint.style.marginBottom = "16px";
      ctx.container.appendChild(hint);
      const display = document.createElement("div");
      display.style.fontSize = "24px";
      ctx.container.appendChild(display);
      const mouse = new MouseDevice({
        container: ctx.container
      });
      const positionControl = mouse.getControl("position");
      positionControl.on("updated", (pos) => {
        const rect = ctx.container.getBoundingClientRect();
        const localX = Math.round(pos.x - rect.left);
        const localY = Math.round(pos.y - rect.top);
        display.textContent = `${localX}, ${localY}`;
      });
      mouse.start();
      ctx.setApp(mouse);
    });
  });
  section("Wheel & Navigation", () => {
    text(`
            The \`navigation\` control handles wheel events with delta values.
            It can distinguish between mouse wheel and trackpad gestures.
        `);
    container({ title: "Wheel events", width: 400, height: 180 }, (ctx) => {
      ctx.container.style.display = "flex";
      ctx.container.style.flexDirection = "column";
      ctx.container.style.alignItems = "center";
      ctx.container.style.justifyContent = "center";
      ctx.container.style.background = "#1a1a2e";
      ctx.container.style.color = "#fff";
      ctx.container.style.fontFamily = "monospace";
      ctx.container.style.gap = "8px";
      const hint = document.createElement("div");
      hint.textContent = "Scroll or use trackpad";
      hint.style.fontSize = "12px";
      hint.style.opacity = "0.6";
      ctx.container.appendChild(hint);
      const deltaDisplay = document.createElement("div");
      deltaDisplay.style.fontSize = "18px";
      ctx.container.appendChild(deltaDisplay);
      const typeDisplay = document.createElement("div");
      typeDisplay.style.fontSize = "14px";
      typeDisplay.style.color = "#e94560";
      ctx.container.appendChild(typeDisplay);
      const mouse = new MouseDevice({
        container: ctx.container,
        shouldPreventDefault: true
      });
      const navControl = mouse.getControl("navigation");
      navControl.on("updated", () => {
        const dX = navControl.deltaX.toFixed(1);
        const dY = navControl.deltaY.toFixed(1);
        deltaDisplay.textContent = `deltaX: ${dX}  deltaY: ${dY}`;
        if (navControl.isTrackpadPinchZoom) {
          typeDisplay.textContent = "trackpad pinch zoom";
        } else if (navControl.isTrackpadPan) {
          typeDisplay.textContent = "trackpad pan";
        } else if (navControl.isMouseWheelZoom) {
          typeDisplay.textContent = "mouse wheel";
        } else {
          typeDisplay.textContent = "";
        }
      });
      mouse.start();
      ctx.setApp(mouse);
    });
    code("Navigation control API", () => {
      const mouse = new MouseDevice();
      const nav = mouse.getControl("navigation");
      nav.deltaX;
      nav.deltaY;
      nav.deltaZ;
      nav.isTrackpadPinchZoom;
      nav.isTrackpadPan;
      nav.isMouseWheelZoom;
    });
  });
  section("Prevent Default", () => {
    text(`
            Use \`shouldPreventDefault\` to block browser actions like context menu or scroll.
        `);
    code("Block context menu", () => {
      new MouseDevice({
        shouldPreventDefault: (event, control) => {
          return control.name === "rightButton";
        }
      });
    });
    code("Block all", () => {
      new MouseDevice({
        shouldPreventDefault: true
      });
    });
  });
});
export {
  mouse_device_doc as default
};
