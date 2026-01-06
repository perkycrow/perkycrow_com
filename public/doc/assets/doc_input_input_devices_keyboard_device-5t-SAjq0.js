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
var _keydownListener, _keyupListener, _blurListener, _KeyboardDevice_instances, handleKeydown_fn, handleKeyup_fn, handleBlur_fn;
import { d as doc, t as text, s as section, a as code, c as container } from "./runtime-29XJHD7V.js";
import { a as InputDevice, B as ButtonControl } from "./button_control-DpZUrUro.js";
import { l as logger } from "./logger-CkRtvmLl.js";
import "./perky_module-uJdyZ-t_.js";
import "./utils-DXBRLumH.js";
class KeyboardDevice extends InputDevice {
  constructor(params = {}) {
    super(params);
    __privateAdd(this, _KeyboardDevice_instances);
    __privateAdd(this, _keydownListener);
    __privateAdd(this, _keyupListener);
    __privateAdd(this, _blurListener);
    this.shouldPreventDefault = params.shouldPreventDefault;
    __privateSet(this, _keydownListener, __privateMethod(this, _KeyboardDevice_instances, handleKeydown_fn).bind(this));
    __privateSet(this, _keyupListener, __privateMethod(this, _KeyboardDevice_instances, handleKeyup_fn).bind(this));
    __privateSet(this, _blurListener, __privateMethod(this, _KeyboardDevice_instances, handleBlur_fn).bind(this));
  }
  onStart() {
    this.container.addEventListener("keydown", __privateGet(this, _keydownListener), true);
    this.container.addEventListener("keyup", __privateGet(this, _keyupListener), true);
    this.container.addEventListener("blur", __privateGet(this, _blurListener));
  }
  onStop() {
    this.container.removeEventListener("keydown", __privateGet(this, _keydownListener), true);
    this.container.removeEventListener("keyup", __privateGet(this, _keyupListener), true);
    this.container.removeEventListener("blur", __privateGet(this, _blurListener));
  }
}
_keydownListener = new WeakMap();
_keyupListener = new WeakMap();
_blurListener = new WeakMap();
_KeyboardDevice_instances = new WeakSet();
handleKeydown_fn = function(event) {
  if (shouldIgnoreEvent(event)) {
    return;
  }
  const keyName = getKeyName(event);
  const control = this.findOrCreateControl(ButtonControl, {
    name: keyName
  });
  this.preventDefault(event, control);
  if (!control.isPressed) {
    control.press(event);
  }
};
handleKeyup_fn = function(event) {
  if (shouldIgnoreEvent(event)) {
    return;
  }
  const keyName = getKeyName(event);
  const control = this.getControl(keyName);
  this.preventDefault(event, control);
  if (control && control.isPressed) {
    control.release(event);
  }
};
handleBlur_fn = function() {
  this.pressedNames.forEach((keyName) => {
    const control = this.getControl(keyName);
    if (control && control.isPressed) {
      control.release();
    }
  });
};
__publicField(KeyboardDevice, "$name", "keyboard");
function getKeyName(event) {
  return event.code;
}
function shouldIgnoreEvent(event) {
  const path = event.composedPath();
  for (const element of path) {
    if (element.tagName) {
      const tagName = element.tagName.toLowerCase();
      if (tagName === "input" || tagName === "textarea") {
        return true;
      }
      if (element.isContentEditable) {
        return true;
      }
    }
  }
  return false;
}
const keyboard_device_doc = doc("KeyboardDevice", () => {
  text(`
        Keyboard input device. Listens for keydown/keyup events and creates
        ButtonControl instances dynamically for each key pressed.
    `);
  section("Basic Setup", () => {
    text(`
            Create a KeyboardDevice attached to a container element.
            The device must be started to begin listening for events.
        `);
    code("Creation", () => {
      const keyboard = new KeyboardDevice({
        container: document.body
      });
      keyboard.start();
    });
    container({ title: "Interactive keyboard", width: 400, height: 150 }, (ctx) => {
      ctx.container.tabIndex = 0;
      ctx.container.style.outline = "none";
      ctx.container.style.display = "flex";
      ctx.container.style.flexDirection = "column";
      ctx.container.style.alignItems = "center";
      ctx.container.style.justifyContent = "center";
      ctx.container.style.background = "#1a1a2e";
      ctx.container.style.color = "#fff";
      ctx.container.style.fontFamily = "monospace";
      ctx.container.style.cursor = "pointer";
      const hint = document.createElement("div");
      hint.textContent = "Click here, then press keys";
      hint.style.fontSize = "12px";
      hint.style.opacity = "0.6";
      hint.style.marginBottom = "16px";
      ctx.container.appendChild(hint);
      const display = document.createElement("div");
      display.style.fontSize = "24px";
      display.style.minHeight = "32px";
      ctx.container.appendChild(display);
      const keyboard = new KeyboardDevice({
        container: ctx.container
      });
      keyboard.on("control:pressed", (control) => {
        display.textContent = control.name;
        logger.log("pressed:", control.name);
      });
      keyboard.on("control:released", (control) => {
        display.textContent = "";
        logger.log("released:", control.name);
      });
      keyboard.start();
      ctx.setApp(keyboard);
    });
  });
  section("Key Names", () => {
    text(`
            Keys are identified by their \`event.code\` value (physical key position).
            Examples: \`KeyA\`, \`Space\`, \`ArrowUp\`, \`ShiftLeft\`.
        `);
    container({ title: "Key codes", width: 400, height: 150 }, (ctx) => {
      ctx.container.tabIndex = 0;
      ctx.container.style.outline = "none";
      ctx.container.style.display = "flex";
      ctx.container.style.flexDirection = "column";
      ctx.container.style.alignItems = "center";
      ctx.container.style.justifyContent = "center";
      ctx.container.style.background = "#16213e";
      ctx.container.style.color = "#fff";
      ctx.container.style.fontFamily = "monospace";
      const hint = document.createElement("div");
      hint.textContent = "Press any key to see its code";
      hint.style.fontSize = "12px";
      hint.style.opacity = "0.6";
      hint.style.marginBottom = "16px";
      ctx.container.appendChild(hint);
      const codeDisplay = document.createElement("div");
      codeDisplay.style.fontSize = "20px";
      codeDisplay.style.color = "#e94560";
      ctx.container.appendChild(codeDisplay);
      const keyboard = new KeyboardDevice({
        container: ctx.container
      });
      keyboard.on("control:pressed", (control) => {
        codeDisplay.textContent = control.name;
      });
      keyboard.start();
      ctx.setApp(keyboard);
    });
  });
  section("Querying State", () => {
    text("Check if specific keys are pressed or get all pressed keys.");
    container({ title: "Multiple keys", width: 400, height: 180 }, (ctx) => {
      ctx.container.tabIndex = 0;
      ctx.container.style.outline = "none";
      ctx.container.style.display = "flex";
      ctx.container.style.flexDirection = "column";
      ctx.container.style.alignItems = "center";
      ctx.container.style.justifyContent = "center";
      ctx.container.style.background = "#1a1a2e";
      ctx.container.style.color = "#fff";
      ctx.container.style.fontFamily = "monospace";
      ctx.container.style.gap = "12px";
      const hint = document.createElement("div");
      hint.textContent = "Hold multiple keys";
      hint.style.fontSize = "12px";
      hint.style.opacity = "0.6";
      ctx.container.appendChild(hint);
      const display = document.createElement("div");
      display.style.fontSize = "16px";
      display.style.textAlign = "center";
      display.style.minHeight = "48px";
      ctx.container.appendChild(display);
      const keyboard = new KeyboardDevice({
        container: ctx.container
      });
      const updateDisplay = () => {
        const pressed = keyboard.getPressedControls();
        if (pressed.length > 0) {
          display.innerHTML = pressed.map((c) => `<span style="background:#e94560;padding:4px 8px;margin:2px;border-radius:4px">${c.name}</span>`).join("");
        } else {
          display.textContent = "";
        }
      };
      keyboard.on("control:pressed", updateDisplay);
      keyboard.on("control:released", updateDisplay);
      keyboard.start();
      ctx.setApp(keyboard);
    });
    code("API methods", () => {
      const keyboard = new KeyboardDevice();
      keyboard.start();
      keyboard.isPressed("Space");
      keyboard.getPressedControls();
      keyboard.getValueFor("KeyW");
    });
  });
  section("Prevent Default", () => {
    text(`
            Use \`shouldPreventDefault\` to stop browser default behavior.
            Can be a boolean or a function for fine-grained control.
        `);
    code("Prevent all", () => {
      new KeyboardDevice({
        shouldPreventDefault: true
      });
    });
    code("Selective prevention", () => {
      new KeyboardDevice({
        shouldPreventDefault: (event, control) => {
          return ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Space"].includes(control.name);
        }
      });
    });
  });
});
export {
  keyboard_device_doc as default
};
