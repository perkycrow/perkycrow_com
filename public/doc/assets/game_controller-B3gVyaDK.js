var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { A as ActionController } from "./action_controller-DyFDDS26.js";
class GameController extends ActionController {
  get game() {
    return this.engine;
  }
  spawn(Entity, options = {}) {
    var _a;
    return (_a = this.world) == null ? void 0 : _a.create(Entity, options);
  }
}
__publicField(GameController, "resources", ["world", "renderer", "camera"]);
export {
  GameController as G
};
