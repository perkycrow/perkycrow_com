var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _Color_instances, parseString_fn, parseHex_fn, parseRgbString_fn, parseHslString_fn, parseNumber_fn, parseArray_fn, parseObject_fn, hslToRgb_fn;
import { d as doc, t as text, s as section, c as code, f as setup, a as action, l as logger } from "./runtime-DOmi4lo7.js";
const CSS_COLORS = {
  black: "#000000",
  white: "#ffffff",
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
  yellow: "#ffff00",
  cyan: "#00ffff",
  magenta: "#ff00ff",
  gray: "#808080",
  grey: "#808080",
  orange: "#ffa500",
  pink: "#ffc0cb",
  purple: "#800080",
  transparent: "#00000000"
};
const _Color = class _Color {
  constructor(value) {
    __privateAdd(this, _Color_instances);
    this.r = 0;
    this.g = 0;
    this.b = 0;
    this.a = 1;
    if (value !== void 0) {
      this.set(value);
    }
  }
  set(value) {
    if (value instanceof _Color) {
      this.r = value.r;
      this.g = value.g;
      this.b = value.b;
      this.a = value.a;
    } else if (typeof value === "string") {
      __privateMethod(this, _Color_instances, parseString_fn).call(this, value);
    } else if (typeof value === "number") {
      __privateMethod(this, _Color_instances, parseNumber_fn).call(this, value);
    } else if (Array.isArray(value)) {
      __privateMethod(this, _Color_instances, parseArray_fn).call(this, value);
    } else if (typeof value === "object") {
      __privateMethod(this, _Color_instances, parseObject_fn).call(this, value);
    }
    return this;
  }
  toHsl() {
    const r = this.r;
    const g = this.g;
    const b = this.b;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const l = (max + min) / 2;
    let h = 0;
    let s = 0;
    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      if (max === r) {
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
      } else if (max === g) {
        h = ((b - r) / d + 2) / 6;
      } else {
        h = ((r - g) / d + 4) / 6;
      }
    }
    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100),
      a: this.a
    };
  }
  toRgb() {
    return {
      r: Math.round(this.r * 255),
      g: Math.round(this.g * 255),
      b: Math.round(this.b * 255),
      a: this.a
    };
  }
  toHex(includeAlpha = false) {
    const r = Math.round(this.r * 255).toString(16).padStart(2, "0");
    const g = Math.round(this.g * 255).toString(16).padStart(2, "0");
    const b = Math.round(this.b * 255).toString(16).padStart(2, "0");
    if (includeAlpha) {
      const a = Math.round(this.a * 255).toString(16).padStart(2, "0");
      return `#${r}${g}${b}${a}`;
    }
    return `#${r}${g}${b}`;
  }
  toRgbString() {
    const rgb = this.toRgb();
    if (this.a < 1) {
      return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${this.a})`;
    }
    return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  }
  toHslString() {
    const hsl = this.toHsl();
    if (this.a < 1) {
      return `hsla(${hsl.h}, ${hsl.s}%, ${hsl.l}%, ${this.a})`;
    }
    return `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
  }
  toString() {
    return this.toHex();
  }
  clone() {
    const color = new _Color();
    color.r = this.r;
    color.g = this.g;
    color.b = this.b;
    color.a = this.a;
    return color;
  }
  copy(color) {
    this.r = color.r;
    this.g = color.g;
    this.b = color.b;
    this.a = color.a;
    return this;
  }
  setAlpha(a) {
    this.a = a;
    return this;
  }
  lighten(amount) {
    const hsl = this.toHsl();
    hsl.l = Math.min(100, hsl.l + amount);
    this.set({ h: hsl.h, s: hsl.s, l: hsl.l, a: this.a });
    return this;
  }
  darken(amount) {
    const hsl = this.toHsl();
    hsl.l = Math.max(0, hsl.l - amount);
    this.set({ h: hsl.h, s: hsl.s, l: hsl.l, a: this.a });
    return this;
  }
  saturate(amount) {
    const hsl = this.toHsl();
    hsl.s = Math.min(100, hsl.s + amount);
    this.set({ h: hsl.h, s: hsl.s, l: hsl.l, a: this.a });
    return this;
  }
  desaturate(amount) {
    const hsl = this.toHsl();
    hsl.s = Math.max(0, hsl.s - amount);
    this.set({ h: hsl.h, s: hsl.s, l: hsl.l, a: this.a });
    return this;
  }
  rotate(degrees) {
    const hsl = this.toHsl();
    hsl.h = (hsl.h + degrees) % 360;
    if (hsl.h < 0) {
      hsl.h += 360;
    }
    this.set({ h: hsl.h, s: hsl.s, l: hsl.l, a: this.a });
    return this;
  }
  mix(color, ratio = 0.5) {
    const other = color instanceof _Color ? color : new _Color(color);
    this.r += (other.r - this.r) * ratio;
    this.g += (other.g - this.g) * ratio;
    this.b += (other.b - this.b) * ratio;
    this.a += (other.a - this.a) * ratio;
    return this;
  }
  invert() {
    this.r = 1 - this.r;
    this.g = 1 - this.g;
    this.b = 1 - this.b;
    return this;
  }
  grayscale() {
    const gray = this.r * 0.299 + this.g * 0.587 + this.b * 0.114;
    this.r = gray;
    this.g = gray;
    this.b = gray;
    return this;
  }
  equals(color) {
    const other = color instanceof _Color ? color : new _Color(color);
    return this.r === other.r && this.g === other.g && this.b === other.b && this.a === other.a;
  }
  get luminance() {
    const r = this.r <= 0.03928 ? this.r / 12.92 : ((this.r + 0.055) / 1.055) ** 2.4;
    const g = this.g <= 0.03928 ? this.g / 12.92 : ((this.g + 0.055) / 1.055) ** 2.4;
    const b = this.b <= 0.03928 ? this.b / 12.92 : ((this.b + 0.055) / 1.055) ** 2.4;
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  }
  get isDark() {
    return this.luminance < 0.5;
  }
  get isLight() {
    return this.luminance >= 0.5;
  }
};
_Color_instances = new WeakSet();
parseString_fn = function(str) {
  str = str.trim().toLowerCase();
  if (CSS_COLORS[str]) {
    str = CSS_COLORS[str];
  }
  if (str.startsWith("#")) {
    __privateMethod(this, _Color_instances, parseHex_fn).call(this, str);
  } else if (str.startsWith("rgb")) {
    __privateMethod(this, _Color_instances, parseRgbString_fn).call(this, str);
  } else if (str.startsWith("hsl")) {
    __privateMethod(this, _Color_instances, parseHslString_fn).call(this, str);
  }
};
parseHex_fn = function(hex) {
  hex = hex.substring(1);
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  } else if (hex.length === 4) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
  }
  this.r = parseInt(hex.substring(0, 2), 16) / 255;
  this.g = parseInt(hex.substring(2, 4), 16) / 255;
  this.b = parseInt(hex.substring(4, 6), 16) / 255;
  if (hex.length === 8) {
    this.a = parseInt(hex.substring(6, 8), 16) / 255;
  } else {
    this.a = 1;
  }
};
parseRgbString_fn = function(str) {
  const match = str.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d.]+)\s*)?\)/);
  if (match) {
    this.r = parseInt(match[1], 10) / 255;
    this.g = parseInt(match[2], 10) / 255;
    this.b = parseInt(match[3], 10) / 255;
    this.a = match[4] === void 0 ? 1 : parseFloat(match[4]);
  }
};
parseHslString_fn = function(str) {
  const match = str.match(/hsla?\(\s*(\d+)\s*,\s*(\d+)%?\s*,\s*(\d+)%?\s*(?:,\s*([\d.]+)\s*)?\)/);
  if (match) {
    const h = parseInt(match[1], 10) / 360;
    const s = parseInt(match[2], 10) / 100;
    const l = parseInt(match[3], 10) / 100;
    this.a = match[4] === void 0 ? 1 : parseFloat(match[4]);
    __privateMethod(this, _Color_instances, hslToRgb_fn).call(this, h, s, l);
  }
};
parseNumber_fn = function(num) {
  if (num > 16777215) {
    this.r = (num >> 24 & 255) / 255;
    this.g = (num >> 16 & 255) / 255;
    this.b = (num >> 8 & 255) / 255;
    this.a = (num & 255) / 255;
  } else {
    this.r = (num >> 16 & 255) / 255;
    this.g = (num >> 8 & 255) / 255;
    this.b = (num & 255) / 255;
    this.a = 1;
  }
};
parseArray_fn = function(arr) {
  this.r = arr[0] ?? 0;
  this.g = arr[1] ?? 0;
  this.b = arr[2] ?? 0;
  this.a = arr[3] ?? 1;
};
parseObject_fn = function(obj) {
  if ("h" in obj) {
    const h = (obj.h ?? 0) / 360;
    const s = (obj.s ?? 100) / 100;
    const l = (obj.l ?? 50) / 100;
    this.a = obj.a ?? 1;
    __privateMethod(this, _Color_instances, hslToRgb_fn).call(this, h, s, l);
  } else {
    this.r = obj.r ?? 0;
    this.g = obj.g ?? 0;
    this.b = obj.b ?? 0;
    this.a = obj.a ?? 1;
  }
};
hslToRgb_fn = function(h, s, l) {
  if (s === 0) {
    this.r = l;
    this.g = l;
    this.b = l;
    return;
  }
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  this.r = hueToRgb(p, q, h + 1 / 3);
  this.g = hueToRgb(p, q, h);
  this.b = hueToRgb(p, q, h - 1 / 3);
};
let Color = _Color;
function hueToRgb(p, q, t) {
  if (t < 0) {
    t += 1;
  }
  if (t > 1) {
    t -= 1;
  }
  if (t < 1 / 6) {
    return p + (q - p) * 6 * t;
  }
  if (t < 1 / 2) {
    return q;
  }
  if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6;
  }
  return p;
}
const color_doc = doc("Color", () => {
  text(`
        Mutable color with multiple input formats and method chaining.
        Stores channels as floats in \`[0, 1]\`.
    `);
  section("Creation", () => {
    text("Colors can be created from hex strings, CSS names, rgb/hsl strings, numbers, arrays, or objects.");
    code("Input formats", () => {
      new Color("#ff6600");
      new Color("orange");
      new Color("rgb(255, 102, 0)");
      new Color("hsl(24, 100, 50)");
      new Color(16737792);
      new Color([1, 0.4, 0]);
      new Color({ r: 1, g: 0.4, b: 0 });
      new Color({ h: 24, s: 100, l: 50 });
    });
  });
  section("Output Formats", () => {
    setup((ctx) => {
      ctx.color = new Color("#4a9eff");
    });
    action("toHex", (ctx) => {
      logger.log("hex:", ctx.color.toHex());
      logger.log("with alpha:", ctx.color.toHex(true));
    });
    action("toRgb / toRgbString", (ctx) => {
      logger.log("rgb object:", ctx.color.toRgb());
      logger.log("rgb string:", ctx.color.toRgbString());
    });
    action("toHsl / toHslString", (ctx) => {
      logger.log("hsl object:", ctx.color.toHsl());
      logger.log("hsl string:", ctx.color.toHslString());
    });
  });
  section("Manipulation", () => {
    text("Methods return `this` for chaining. They mutate the color in place.");
    action("lighten / darken", () => {
      const color = new Color("#4a9eff");
      logger.log("original:", color.toHex());
      logger.log("lighten 20:", color.clone().lighten(20).toHex());
      logger.log("darken 20:", color.clone().darken(20).toHex());
    });
    action("saturate / desaturate", () => {
      const color = new Color("#4a9eff");
      logger.log("original:", color.toHex());
      logger.log("saturate 30:", color.clone().saturate(30).toHex());
      logger.log("desaturate 30:", color.clone().desaturate(30).toHex());
    });
    action("rotate", () => {
      const color = new Color("#ff0000");
      logger.log("red:", color.toHex());
      logger.log("+120°:", color.clone().rotate(120).toHex());
      logger.log("+240°:", color.clone().rotate(240).toHex());
    });
    action("mix", () => {
      const red = new Color("#ff0000");
      const blue = new Color("#0000ff");
      logger.log("red:", red.toHex());
      logger.log("blue:", blue.toHex());
      logger.log("50% mix:", red.clone().mix(blue, 0.5).toHex());
    });
    action("invert / grayscale", () => {
      const color = new Color("#4a9eff");
      logger.log("original:", color.toHex());
      logger.log("inverted:", color.clone().invert().toHex());
      logger.log("grayscale:", color.clone().grayscale().toHex());
    });
  });
  section("Properties", () => {
    action("luminance / isDark / isLight", () => {
      const dark = new Color("#1a1a2e");
      const light = new Color("#f0f0f0");
      logger.log("dark luminance:", dark.luminance.toFixed(4));
      logger.log("dark.isDark:", dark.isDark);
      logger.log("light luminance:", light.luminance.toFixed(4));
      logger.log("light.isLight:", light.isLight);
    });
  });
});
export {
  color_doc as default
};
