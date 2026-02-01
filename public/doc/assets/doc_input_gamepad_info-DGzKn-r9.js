var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _GamepadInfo_instances, parseRawId_fn, determineType_fn, refineType_fn, _GamepadInfo_static, parseRawIdFirefox_fn, parseRawIdChrome_fn, getTypeFromVendor_fn, getTypeFromName_fn, getPlaystationModel_fn;
import { d as doc, t as text, s as section, a as action, l as logger, c as code } from "./runtime-DOmi4lo7.js";
const _GamepadInfo = class _GamepadInfo {
  constructor(rawId) {
    __privateAdd(this, _GamepadInfo_instances);
    this.raw = rawId;
    this.vendor = null;
    this.product = null;
    this.name = null;
    this.type = "generic";
    this.model = null;
    if (!rawId || typeof rawId !== "string") {
      this.type = "unknown";
      return;
    }
    __privateMethod(this, _GamepadInfo_instances, parseRawId_fn).call(this);
    __privateMethod(this, _GamepadInfo_instances, determineType_fn).call(this);
    __privateMethod(this, _GamepadInfo_instances, refineType_fn).call(this);
  }
};
_GamepadInfo_instances = new WeakSet();
parseRawId_fn = function() {
  var _a, _b;
  const parsedResult = __privateMethod(_a = _GamepadInfo, _GamepadInfo_static, parseRawIdFirefox_fn).call(_a, this.raw) || __privateMethod(_b = _GamepadInfo, _GamepadInfo_static, parseRawIdChrome_fn).call(_b, this.raw) || { name: this.raw };
  if (parsedResult) {
    Object.assign(this, parsedResult);
  }
};
determineType_fn = function() {
  var _a, _b;
  if (this.vendor) {
    this.type = __privateMethod(_a = _GamepadInfo, _GamepadInfo_static, getTypeFromVendor_fn).call(_a, this.vendor);
  } else {
    this.type = __privateMethod(_b = _GamepadInfo, _GamepadInfo_static, getTypeFromName_fn).call(_b, this.raw);
  }
};
refineType_fn = function() {
  var _a;
  if (this.type === "playstation") {
    this.model = __privateMethod(_a = _GamepadInfo, _GamepadInfo_static, getPlaystationModel_fn).call(_a, this.name);
    if (this.model === "ds4") {
      this.type = "ps4";
    } else if (this.model === "dualsense") {
      this.type = "ps5";
    } else if (this.model === "ds3") {
      this.type = "ps3";
    }
  } else if (this.type === "nintendo") {
    this.type = "switch";
  }
};
_GamepadInfo_static = new WeakSet();
parseRawIdFirefox_fn = function(rawId) {
  const firefoxPattern = /^([0-9a-f]{1,4})-([0-9a-f]{1,4})-(.+)$/i;
  const match = rawId.match(firefoxPattern);
  if (match) {
    return {
      vendor: match[1],
      product: match[2],
      name: match[3]
    };
  }
  return null;
};
parseRawIdChrome_fn = function(rawId) {
  const chromePattern = /^(.+) \(.*[Vv]endor: ?([0-9a-f]{1,4}).*[Pp]roduct: ?([0-9a-f]{1,4}).*\)$/i;
  const match = rawId.match(chromePattern);
  if (match) {
    return {
      name: match[1],
      vendor: match[2],
      product: match[3]
    };
  }
  return null;
};
getTypeFromVendor_fn = function(vendor) {
  const vendorMap = {
    "054c": "playstation",
    "045e": "xbox",
    "057e": "nintendo",
    "046d": "logitech",
    "0079": "nintendo",
    "0810": "generic",
    "0e8f": "generic",
    "2dc8": "8bitdo"
  };
  return vendorMap[vendor.toLowerCase()] || "generic";
};
getTypeFromName_fn = function(name) {
  var _a;
  const nameLC = name.toLowerCase();
  const patterns = [
    { regex: /^gamepad \d+$/i, type: "xbox" },
    { regex: /playstation|dualshock|dualsense|ps[1-5]/i, type: "playstation" },
    { regex: /xbox|microsoft/i, type: "xbox" },
    { regex: /nintendo|switch|joycon|pro controller|nes|snes|n64/i, type: "nintendo" },
    { regex: /logitech/i, type: "logitech" },
    { regex: /8bitdo/i, type: "8bitdo" }
  ];
  return ((_a = patterns.find((p) => p.regex.test(nameLC))) == null ? void 0 : _a.type) || "generic";
};
getPlaystationModel_fn = function(name) {
  var _a;
  const nameLC = (name == null ? void 0 : name.toLowerCase()) || "";
  const modelMap = [
    { check: (s) => s.includes("dualshock 4") || s.includes("ds4"), model: "ds4" },
    { check: (s) => s.includes("dualshock 3") || s.includes("ds3"), model: "ds3" },
    { check: (s) => s.includes("dualsense"), model: "dualsense" }
  ];
  return ((_a = modelMap.find((m) => m.check(nameLC))) == null ? void 0 : _a.model) || "unknown";
};
__privateAdd(_GamepadInfo, _GamepadInfo_static);
let GamepadInfo = _GamepadInfo;
const gamepad_info_doc = doc("GamepadInfo", { advanced: true }, () => {
  text(`
        Parses raw gamepad ID strings to detect controller type and model.
        Handles format differences between Chrome and Firefox.
    `);
  section("Basic Usage", () => {
    text(`
            Pass a gamepad's raw ID string to get vendor, type, and model information.
        `);
    action("Parse a gamepad ID", () => {
      const info = new GamepadInfo("Xbox 360 Controller (STANDARD GAMEPAD Vendor: 045e Product: 028e)");
      logger.log("Type:", info.type);
      logger.log("Vendor:", info.vendor);
      logger.log("Product:", info.product);
      logger.log("Name:", info.name);
    });
  });
  section("Controller Types", () => {
    text(`
            Detected types include \`xbox\`, \`ps3\`, \`ps4\`, \`ps5\`, \`switch\`,
            \`logitech\`, \`8bitdo\`, \`generic\`, and \`unknown\`.
        `);
    action("PlayStation detection", () => {
      const ps5 = new GamepadInfo("DualSense Wireless Controller (STANDARD GAMEPAD Vendor: 054c Product: 0ce6)");
      logger.log("Type:", ps5.type);
      logger.log("Model:", ps5.model);
      const ps4 = new GamepadInfo("054c-09cc-Sony Interactive Entertainment Wireless Controller");
      logger.log("Type:", ps4.type);
      logger.log("Model:", ps4.model);
    });
    action("Nintendo detection", () => {
      const info = new GamepadInfo("057e-2009-Pro Controller");
      logger.log("Type:", info.type);
      logger.log("Name:", info.name);
    });
  });
  section("Browser Formats", () => {
    text(`
            Chrome and Firefox report gamepad IDs differently. GamepadInfo handles both.
        `);
    code("Chrome format", () => {
      const info = new GamepadInfo("Xbox 360 Controller (STANDARD GAMEPAD Vendor: 045e Product: 028e)");
      logger.log(info.vendor);
    });
    code("Firefox format", () => {
      const info = new GamepadInfo("045e-028e-Xbox 360 Controller");
      logger.log(info.vendor);
    });
  });
  section("Edge Cases", () => {
    text(`
            Missing or invalid IDs produce an \`unknown\` type.
            Unrecognized strings fall back to \`generic\`.
        `);
    action("Invalid input", () => {
      const empty = new GamepadInfo(null);
      logger.log("Null:", empty.type);
      const unknown = new GamepadInfo("Some Random Controller");
      logger.log("Unrecognized:", unknown.type);
    });
  });
});
export {
  gamepad_info_doc as default
};
