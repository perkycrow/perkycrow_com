var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { S as ShaderEffect } from "./shader_effect-DOeCHK4c.js";
class OutlineEffect extends ShaderEffect {
  constructor(options = {}) {
    super(options);
    __publicField(this, "width", 0.02);
    this.width = options.width ?? 0.02;
  }
}
__publicField(OutlineEffect, "shader", {
  params: ["width"],
  uniforms: [],
  fragment: `
            if (width > 0.0 && color.a < 0.5) {
                vec2 offset = texelSize * width * 100.0;

                float neighborAlpha = 0.0;
                neighborAlpha += texture(uTexture, texCoord + vec2(-offset.x, 0.0)).a;
                neighborAlpha += texture(uTexture, texCoord + vec2(offset.x, 0.0)).a;
                neighborAlpha += texture(uTexture, texCoord + vec2(0.0, -offset.y)).a;
                neighborAlpha += texture(uTexture, texCoord + vec2(0.0, offset.y)).a;

                if (neighborAlpha > 0.0) {
                    color = vec4(1.0, 1.0, 1.0, 1.0);
                }
            }
        `
});
export {
  OutlineEffect as O
};
