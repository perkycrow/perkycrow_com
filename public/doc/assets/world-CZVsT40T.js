var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { P as PerkyModule } from "./perky_module-CDYsQSv9.js";
class World extends PerkyModule {
  get entities() {
    return this.childrenByCategory("entity");
  }
  update(deltaTime, context) {
    if (!this.started) {
      return;
    }
    this.preUpdate(deltaTime, context);
    for (const entity of this.entities) {
      if (entity.started) {
        entity.update(deltaTime);
      }
    }
    this.postUpdate(deltaTime, context);
  }
  preUpdate() {
  }
  postUpdate() {
  }
}
__publicField(World, "$category", "world");
export {
  World as W
};
