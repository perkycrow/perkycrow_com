var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _gl, _shaderRegistry, _effects, _shaderCache, _uniformValues, _uniformTypes, _ShaderEffectRegistry_instances, collectUniforms_fn, parseUniform_fn, compileShader_fn;
import { a as SPRITE_VERTEX } from "./sprite_shader-C1tJ_XZn.js";
import { l as logger } from "./runtime-DOmi4lo7.js";
const SPRITE_ATTRIBUTES = ["aPosition", "aTexCoord", "aOpacity", "aTintColor", "aEffectParams", "aUVBounds"];
const PARAM_SLOTS = ["x", "y", "z", "w"];
const DEFAULT_UNIFORM_TYPES = {
  uTime: "float"
};
class ShaderEffectRegistry {
  constructor(gl, shaderRegistry) {
    __privateAdd(this, _ShaderEffectRegistry_instances);
    __privateAdd(this, _gl, null);
    __privateAdd(this, _shaderRegistry, null);
    __privateAdd(this, _effects, /* @__PURE__ */ new Map());
    __privateAdd(this, _shaderCache, /* @__PURE__ */ new Map());
    __privateAdd(this, _uniformValues, /* @__PURE__ */ new Map());
    __privateAdd(this, _uniformTypes, /* @__PURE__ */ new Map());
    __privateSet(this, _gl, gl);
    __privateSet(this, _shaderRegistry, shaderRegistry);
  }
  setUniform(name, value, type = null) {
    __privateGet(this, _uniformValues).set(name, value);
    if (type) {
      __privateGet(this, _uniformTypes).set(name, type);
    }
    return this;
  }
  getUniform(name) {
    return __privateGet(this, _uniformValues).get(name);
  }
  applyUniforms(gl, program) {
    const uniformSetters = {
      float: (loc, val) => gl.uniform1f(loc, val),
      vec2: (loc, val) => gl.uniform2fv(loc, val),
      vec3: (loc, val) => gl.uniform3fv(loc, val),
      vec4: (loc, val) => gl.uniform4fv(loc, val),
      int: (loc, val) => gl.uniform1i(loc, val)
    };
    for (const [name, value] of __privateGet(this, _uniformValues)) {
      const location = program.uniforms[name];
      if (location === void 0 || location === -1) {
        continue;
      }
      const type = __privateGet(this, _uniformTypes).get(name) || DEFAULT_UNIFORM_TYPES[name] || "float";
      const setter = uniformSetters[type] || uniformSetters.float;
      setter(location, value);
    }
  }
  register(EffectClass) {
    const name = EffectClass.name;
    __privateGet(this, _effects).set(name, EffectClass);
    return this;
  }
  get(name) {
    return __privateGet(this, _effects).get(name) || null;
  }
  has(name) {
    return __privateGet(this, _effects).has(name);
  }
  getShaderForEffects(effectTypes) {
    const sortedTypes = [...effectTypes].sort();
    const cacheKey = sortedTypes.join("|") || "base";
    if (__privateGet(this, _shaderCache).has(cacheKey)) {
      return __privateGet(this, _shaderCache).get(cacheKey);
    }
    const shader = __privateMethod(this, _ShaderEffectRegistry_instances, compileShader_fn).call(this, sortedTypes, cacheKey);
    __privateGet(this, _shaderCache).set(cacheKey, shader);
    return shader;
  }
  dispose() {
    __privateGet(this, _effects).clear();
    __privateGet(this, _shaderCache).clear();
    __privateGet(this, _uniformValues).clear();
    __privateGet(this, _uniformTypes).clear();
    __privateSet(this, _gl, null);
    __privateSet(this, _shaderRegistry, null);
  }
}
_gl = new WeakMap();
_shaderRegistry = new WeakMap();
_effects = new WeakMap();
_shaderCache = new WeakMap();
_uniformValues = new WeakMap();
_uniformTypes = new WeakMap();
_ShaderEffectRegistry_instances = new WeakSet();
collectUniforms_fn = function(effectUniforms, uniforms) {
  for (const uniform of effectUniforms) {
    const { name, type } = __privateMethod(this, _ShaderEffectRegistry_instances, parseUniform_fn).call(this, uniform);
    if (name) {
      uniforms.set(name, type);
    }
  }
};
parseUniform_fn = function(uniform) {
  if (typeof uniform === "string") {
    const type = __privateGet(this, _uniformTypes).get(uniform) || DEFAULT_UNIFORM_TYPES[uniform] || "float";
    return { name: uniform, type };
  }
  if (uniform.name && uniform.type) {
    return { name: uniform.name, type: uniform.type };
  }
  return { name: null, type: null };
};
compileShader_fn = function(effectTypes, cacheKey) {
  var _a, _b;
  const fragments = [];
  const uniforms = /* @__PURE__ */ new Map([
    ["uTexture", "sampler2D"],
    ["uTexelSize", "vec2"],
    ["uProjectionMatrix", "mat3"],
    ["uViewMatrix", "mat3"],
    ["uModelMatrix", "mat3"]
  ]);
  let paramOffset = 0;
  for (const typeName of effectTypes) {
    const Effect = __privateGet(this, _effects).get(typeName);
    if ((_a = Effect == null ? void 0 : Effect.shader) == null ? void 0 : _a.fragment) {
      const snippet = wrapSnippet(Effect, paramOffset);
      fragments.push(snippet);
      paramOffset += ((_b = Effect.shader.params) == null ? void 0 : _b.length) || 0;
      __privateMethod(this, _ShaderEffectRegistry_instances, collectUniforms_fn).call(this, Effect.shader.uniforms || [], uniforms);
    }
  }
  const fragmentSource = buildFragment(fragments, uniforms);
  return __privateGet(this, _shaderRegistry).register(`sprite_effect_${cacheKey}`, {
    vertex: SPRITE_VERTEX,
    fragment: fragmentSource,
    uniforms: Array.from(uniforms.keys()),
    attributes: SPRITE_ATTRIBUTES
  });
};
function wrapSnippet(EffectClass, paramOffset) {
  const { params = [], fragment } = EffectClass.shader;
  const name = EffectClass.name;
  const paramDeclarations = params.map((paramName, index) => {
    const globalIndex = paramOffset + index;
    if (globalIndex >= 4) {
      logger.warn(`[ShaderEffect] ${name}: param "${paramName}" exceeds 4 params limit, ignored`);
      return null;
    }
    const slot = PARAM_SLOTS[globalIndex];
    return `float ${paramName} = effectParams.${slot};`;
  }).filter(Boolean).join("\n        ");
  return `
    // === ${name} ===
    {
        ${paramDeclarations}
        ${fragment}
    }
    // === End ${name} ===`;
}
function buildFragment(snippets, uniforms) {
  const uniformDeclarations = Array.from(uniforms.entries()).filter(([name]) => name !== "uTexture" && name !== "uTexelSize").filter(([name]) => !name.startsWith("uProjection") && !name.startsWith("uView") && !name.startsWith("uModel")).map(([name, type]) => `uniform ${type} ${name};`).join("\n");
  return `#version 300 es
precision mediump float;

uniform sampler2D uTexture;
uniform vec2 uTexelSize;
${uniformDeclarations}

in vec2 vTexCoord;
in float vOpacity;
in vec4 vTintColor;
in vec4 vEffectParams;
in vec4 vUVBounds;

out vec4 fragColor;

void main() {
    vec4 color = texture(uTexture, vTexCoord);
    vec2 texCoord = vTexCoord;
    vec2 texelSize = uTexelSize;
    vec4 effectParams = vEffectParams;
    vec2 uvMin = vUVBounds.xy;
    vec2 uvMax = vUVBounds.zw;
${snippets.join("\n")}


    if (vTintColor.a > 0.0) {
        color.rgb = mix(color.rgb, vTintColor.rgb, vTintColor.a);
    }

    fragColor = vec4(color.rgb, color.a * vOpacity);
}
`;
}
export {
  ShaderEffectRegistry as S
};
