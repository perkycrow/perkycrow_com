var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { P as PerkyModule } from "./perky_module-8S_KnZAY.js";
import { V as Vec2 } from "./vec2-BvD8ope7.js";
class Entity extends PerkyModule {
  constructor(options = {}) {
    super(options);
    const { x = 0, y = 0 } = options;
    this.position = new Vec2(x, y);
    this.velocity = new Vec2(0, 0);
  }
  get x() {
    return this.position.x;
  }
  set x(value) {
    this.position.x = value;
  }
  get y() {
    return this.position.y;
  }
  set y(value) {
    this.position.y = value;
  }
  update() {
  }
}
__publicField(Entity, "$category", "entity");
export {
  Entity as E
};
