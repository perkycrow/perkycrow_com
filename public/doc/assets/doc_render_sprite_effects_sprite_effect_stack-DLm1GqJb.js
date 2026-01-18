var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { d as doc, t as text, s as section, f as container, b as action, l as logger, c as code } from "./runtime-Bve5cOyN.js";
import { a as ShaderEffect, S as Sprite, b as SpriteEffectStack } from "./sprite-Do0QfU8k.js";
import { W as WebGLRenderer } from "./webgl_renderer-DaG7IDHy.js";
import { G as Group2D } from "./group_2d-B-hGIEMS.js";
import "./object_2d-DKcr5oBk.js";
import "./transform-DC3tDXed.js";
import "./texture_region-Buaf2v24.js";
import "./traverse-D34r-iXQ.js";
import "./perky_module-CDYsQSv9.js";
import "./registry-BmMVxDIp.js";
import "./observable_map-CRpP7ZPx.js";
import "./observable_set-BwzSVQHh.js";
import "./utils-Bje3PFeD.js";
import "./inflector-BxOpyWLP.js";
import "./circle-CP_IlbCy.js";
import "./rectangle-CaoTFuaL.js";
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
const sprite_effect_stack_doc = doc("SpriteEffectStack", () => {
  text(`
        Manages a collection of visual effects for [[Sprite@render]] objects.
        Shader effects manipulate texture pixels, so they only work with sprites.
    `);
  section("Outline Effect on Sprite", () => {
    text(`
            The outline effect detects edges in the texture and draws an outline around them.
            Shader effects must be registered with the renderer before use.
        `);
    container({ title: "Sprite with outline", height: 200 }, (ctx) => {
      const renderer = new WebGLRenderer({
        container: ctx.container,
        autoFit: true,
        backgroundColor: "#1a1a2e"
      });
      renderer.registerShaderEffect(OutlineEffect);
      const scene = new Group2D();
      const shroomImage = new Image();
      shroomImage.src = "./assets/images/shroom.png";
      shroomImage.onload = () => {
        const sprite = new Sprite({
          x: 0,
          y: 0,
          width: 5,
          height: 5,
          image: shroomImage
        });
        sprite.effects.add(new OutlineEffect({
          width: 0.03
        }));
        scene.add(sprite);
        renderer.render(scene);
      };
      ctx.setApp(renderer, scene);
    });
    container({ title: "Interactive outline width", height: 200 }, (ctx) => {
      const renderer = new WebGLRenderer({
        container: ctx.container,
        autoFit: true,
        backgroundColor: "#1a1a2e"
      });
      renderer.registerShaderEffect(OutlineEffect);
      const scene = new Group2D();
      let outline = null;
      const shroomImage = new Image();
      shroomImage.src = "./assets/images/shroom.png";
      shroomImage.onload = () => {
        const sprite = new Sprite({
          x: 0,
          y: 0,
          width: 5,
          height: 5,
          image: shroomImage
        });
        outline = new OutlineEffect({ width: 0.03 });
        sprite.effects.add(outline);
        scene.add(sprite);
        renderer.render(scene);
      };
      ctx.slider("width", { min: 0.01, max: 0.1, default: 0.03 }, (value) => {
        if (outline) {
          outline.width = value;
          renderer.render(scene);
        }
      });
      ctx.setApp(renderer, scene);
    });
    container({ title: "Multiple sprites with outlines", height: 200 }, (ctx) => {
      const renderer = new WebGLRenderer({
        container: ctx.container,
        autoFit: true,
        backgroundColor: "#16213e"
      });
      renderer.registerShaderEffect(OutlineEffect);
      const scene = new Group2D();
      const shroomImage = new Image();
      shroomImage.src = "./assets/images/shroom.png";
      shroomImage.onload = () => {
        const sprite1 = new Sprite({
          x: -4,
          y: 0,
          width: 4,
          height: 4,
          image: shroomImage
        });
        sprite1.effects.add(new OutlineEffect({ width: 0.02 }));
        const sprite2 = new Sprite({
          x: 0,
          y: 0,
          width: 4,
          height: 4,
          image: shroomImage
        });
        sprite2.effects.add(new OutlineEffect({ width: 0.04 }));
        const sprite3 = new Sprite({
          x: 4,
          y: 0,
          width: 4,
          height: 4,
          image: shroomImage
        });
        sprite3.effects.add(new OutlineEffect({ width: 0.06 }));
        scene.add(sprite1, sprite2, sprite3);
        renderer.render(scene);
      };
      ctx.setApp(renderer, scene);
    });
  });
  section("Basic Usage", () => {
    text("Access effects through the `effects` property on Sprite.");
    action("Adding an effect", () => {
      const sprite = new Sprite({ width: 100, height: 100 });
      sprite.effects.add(new OutlineEffect({ width: 0.05 }));
      logger.log("effect count:", sprite.effects.count);
      logger.log("has outline:", sprite.effects.has(OutlineEffect));
    });
    action("Removing an effect", () => {
      const sprite = new Sprite({ width: 100, height: 100 });
      sprite.effects.add(new OutlineEffect());
      logger.log("before remove:", sprite.effects.count);
      sprite.effects.remove(OutlineEffect);
      logger.log("after remove:", sprite.effects.count);
    });
    action("Getting an effect", () => {
      const sprite = new Sprite({ width: 100, height: 100 });
      sprite.effects.add(new OutlineEffect({ width: 0.1 }));
      const outline = sprite.effects.get(OutlineEffect);
      logger.log("outline width:", outline.width);
      outline.width = 0.2;
      logger.log("modified width:", outline.width);
    });
  });
  section("Stack Management", () => {
    text("The stack prevents duplicate effects of the same type.");
    action("Duplicate prevention", () => {
      const stack = new SpriteEffectStack();
      stack.add(new OutlineEffect({ width: 0.05 }));
      stack.add(new OutlineEffect({ width: 0.1 }));
      logger.log("count (still 1):", stack.count);
      logger.log("width (first added):", stack.get(OutlineEffect).width);
    });
    action("Clear all effects", () => {
      const stack = new SpriteEffectStack();
      stack.add(new OutlineEffect());
      logger.log("before clear:", stack.count);
      stack.clear();
      logger.log("after clear:", stack.count);
    });
  });
  section("Effect Properties", () => {
    text("Effects can be enabled/disabled dynamically.");
    action("Enable/disable effect", () => {
      const outline = new OutlineEffect();
      logger.log("default enabled:", outline.enabled);
      outline.enabled = false;
      logger.log("after disable:", outline.enabled);
      outline.enabled = true;
      logger.log("after enable:", outline.enabled);
    });
  });
  section("Performance", () => {
    text(`
            Sprites are batched by shader effect to minimize draw calls.
            When sprites with different effects are interleaved in depth order,
            the renderer creates a new batch at each effect change.
        `);
    code("Best case", () => {
      spriteA.depth = 0;
      spriteB.depth = 1;
      spriteC.depth = 2;
      spriteD.depth = 3;
    });
    code("Worst case", () => {
      spriteA.depth = 0;
      spriteB.depth = 1;
      spriteC.depth = 2;
      spriteD.depth = 3;
    });
    text(`
            For most games this is fine. If you have hundreds of sprites with
            different effects interleaved, consider creating a single custom
            ShaderEffect that combines all your effects with toggle parameters.
            This gives you full batching control.
        `);
  });
});
export {
  sprite_effect_stack_doc as default
};
