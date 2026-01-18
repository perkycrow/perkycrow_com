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
var _gl, _program, _uniforms, _attributes, _ShaderProgram_instances, createShader_fn, createProgram_fn, _gl2, _programs, _defaults, _gl3, _shaderRegistry, _effects, _shaderCache, _uniformValues, _uniformTypes, _ShaderEffectRegistry_instances, collectUniforms_fn, parseUniform_fn, compileShader_fn, _gl4, _width, _height, _samples, _msaaFramebuffer, _msaaRenderbuffer, _sceneFramebuffer, _sceneTexture, _pingPongFramebuffers, _pingPongTextures, _currentPingPong, _namedBuffers, _FramebufferManager_instances, createFramebuffers_fn, createMSAAFramebuffer_fn, createResolveFramebuffer_fn, createFramebuffer_fn, resizeNamedBuffers_fn, deleteFramebuffers_fn, _vertexBuffer, _texCoordBuffer, _FullscreenQuad_instances, createBuffers_fn, _gl5, _shaderRegistry2, _framebufferManager, _fullscreenQuad, _passes, _enabled, _gl6, _active, _zombies, _zombieSize, _flushInterval, _WebGLTextureManager_instances, resurrect_fn, createEntry_fn, createTexture_fn, deleteTexture_fn, _initialized, _RenderGroup_instances, initTransform_fn, initPasses_fn, _gl7, _context, _collected, _tempCorners, _tempTexCoords, _WebGLSpriteBatch_instances, ensureTexture_fn, writeVertices_fn, bindOptionalAttributes_fn, _spriteBatch, _shaderEffectRegistry, _WebGLSpriteRenderer_instances, groupByShaderEffects_fn, getProgramForEffects_fn, _vertexBuffer2, _vertexBuffer3, _gizmoObjects, _rendererRegistry, _renderers, _shaderRegistry3, _shaderEffectRegistry2, _debugGizmoRenderer, _compositeQuad, _compositeProgram, _renderGroupOrder, _WebGLRenderer_instances, setupWebGL_fn, setupBuiltinShaders_fn, setupDefaultRenderers_fn, ensureCompositeSetup_fn, setupCompositeShader_fn, getMatrices_fn, renderSingleScene_fn, renderWithGroups_fn, renderGroupsToTextures_fn, renderGroupToTexture_fn, compositeGroups_fn, drawAllGroups_fn, drawGroup_fn, resetStats_fn, clearWithBackground_fn, applyGroupPasses_fn, applyBlendMode_fn;
import { B as BaseRenderer, t as traverseAndCollect } from "./traverse-D34r-iXQ.js";
import { l as logger } from "./runtime-Bve5cOyN.js";
import { P as PerkyModule } from "./perky_module-CDYsQSv9.js";
import { S as Sprite } from "./sprite-Do0QfU8k.js";
import { C as Circle } from "./circle-CP_IlbCy.js";
import { R as Rectangle } from "./rectangle-CaoTFuaL.js";
class ShaderProgram {
  constructor(gl, vertexSource, fragmentSource) {
    __privateAdd(this, _ShaderProgram_instances);
    __privateAdd(this, _gl, null);
    __privateAdd(this, _program, null);
    __privateAdd(this, _uniforms, {});
    __privateAdd(this, _attributes, {});
    __privateSet(this, _gl, gl);
    __privateSet(this, _program, __privateMethod(this, _ShaderProgram_instances, createProgram_fn).call(this, vertexSource, fragmentSource));
  }
  get program() {
    return __privateGet(this, _program);
  }
  get uniforms() {
    return __privateGet(this, _uniforms);
  }
  get attributes() {
    return __privateGet(this, _attributes);
  }
  registerUniform(name) {
    const location = __privateGet(this, _gl).getUniformLocation(__privateGet(this, _program), name);
    __privateGet(this, _uniforms)[name] = location;
    return this;
  }
  registerAttribute(name) {
    const location = __privateGet(this, _gl).getAttribLocation(__privateGet(this, _program), name);
    __privateGet(this, _attributes)[name] = location;
    return this;
  }
  use() {
    __privateGet(this, _gl).useProgram(__privateGet(this, _program));
    return this;
  }
  setUniform1f(name, value) {
    __privateGet(this, _gl).uniform1f(__privateGet(this, _uniforms)[name], value);
    return this;
  }
  setUniform2f(name, x, y) {
    __privateGet(this, _gl).uniform2f(__privateGet(this, _uniforms)[name], x, y);
    return this;
  }
  setUniform3f(name, x, y, z) {
    __privateGet(this, _gl).uniform3f(__privateGet(this, _uniforms)[name], x, y, z);
    return this;
  }
  setUniform4f(name, values) {
    __privateGet(this, _gl).uniform4f(__privateGet(this, _uniforms)[name], values[0], values[1], values[2], values[3]);
    return this;
  }
  setUniform1i(name, value) {
    __privateGet(this, _gl).uniform1i(__privateGet(this, _uniforms)[name], value);
    return this;
  }
  setUniformMatrix3fv(name, transpose, value) {
    __privateGet(this, _gl).uniformMatrix3fv(__privateGet(this, _uniforms)[name], transpose, value);
    return this;
  }
  setUniformMatrix4fv(name, transpose, value) {
    __privateGet(this, _gl).uniformMatrix4fv(__privateGet(this, _uniforms)[name], transpose, value);
    return this;
  }
  dispose() {
    if (__privateGet(this, _program)) {
      __privateGet(this, _gl).deleteProgram(__privateGet(this, _program));
      __privateSet(this, _program, null);
    }
    __privateSet(this, _uniforms, {});
    __privateSet(this, _attributes, {});
    __privateSet(this, _gl, null);
  }
}
_gl = new WeakMap();
_program = new WeakMap();
_uniforms = new WeakMap();
_attributes = new WeakMap();
_ShaderProgram_instances = new WeakSet();
createShader_fn = function(type, source) {
  const gl = __privateGet(this, _gl);
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const error = gl.getShaderInfoLog(shader);
    gl.deleteShader(shader);
    throw new Error(`Shader compilation failed: ${error}`);
  }
  return shader;
};
createProgram_fn = function(vertexSource, fragmentSource) {
  const gl = __privateGet(this, _gl);
  const vertexShader = __privateMethod(this, _ShaderProgram_instances, createShader_fn).call(this, gl.VERTEX_SHADER, vertexSource);
  const fragmentShader = __privateMethod(this, _ShaderProgram_instances, createShader_fn).call(this, gl.FRAGMENT_SHADER, fragmentSource);
  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const error = gl.getProgramInfoLog(program);
    gl.deleteProgram(program);
    throw new Error(`Program linking failed: ${error}`);
  }
  gl.deleteShader(vertexShader);
  gl.deleteShader(fragmentShader);
  return program;
};
class ShaderRegistry {
  constructor(gl) {
    __privateAdd(this, _gl2, null);
    __privateAdd(this, _programs, /* @__PURE__ */ new Map());
    __privateAdd(this, _defaults, /* @__PURE__ */ new Map());
    __privateSet(this, _gl2, gl);
  }
  register(id, { vertex, fragment, uniforms = [], attributes = [] }) {
    const program = new ShaderProgram(__privateGet(this, _gl2), vertex, fragment);
    for (const name of uniforms) {
      program.registerUniform(name);
    }
    for (const name of attributes) {
      program.registerAttribute(name);
    }
    __privateGet(this, _programs).set(id, program);
    return program;
  }
  get(id) {
    return __privateGet(this, _programs).get(id) || null;
  }
  has(id) {
    return __privateGet(this, _programs).has(id);
  }
  setDefault(type, id) {
    __privateGet(this, _defaults).set(type, id);
    return this;
  }
  getDefault(type) {
    const id = __privateGet(this, _defaults).get(type);
    return id ? this.get(id) : null;
  }
  unregister(id) {
    const program = __privateGet(this, _programs).get(id);
    if (program) {
      program.dispose();
      __privateGet(this, _programs).delete(id);
      for (const [type, defaultId] of __privateGet(this, _defaults)) {
        if (defaultId === id) {
          __privateGet(this, _defaults).delete(type);
        }
      }
    }
    return this;
  }
  dispose() {
    for (const program of __privateGet(this, _programs).values()) {
      program.dispose();
    }
    __privateGet(this, _programs).clear();
    __privateGet(this, _defaults).clear();
    __privateSet(this, _gl2, null);
  }
}
_gl2 = new WeakMap();
_programs = new WeakMap();
_defaults = new WeakMap();
const SPRITE_VERTEX = `#version 300 es
in vec2 aPosition;
in vec2 aTexCoord;
in float aOpacity;
in vec4 aTintColor;
in vec4 aEffectParams;
in vec4 aUVBounds;

uniform mat3 uProjectionMatrix;
uniform mat3 uViewMatrix;
uniform mat3 uModelMatrix;

out vec2 vTexCoord;
out float vOpacity;
out vec4 vTintColor;
out vec4 vEffectParams;
out vec4 vUVBounds;

void main() {
    vec3 worldPos = uModelMatrix * vec3(aPosition, 1.0);
    vec3 viewPos = uViewMatrix * worldPos;
    vec3 clipPos = uProjectionMatrix * viewPos;

    gl_Position = vec4(clipPos.xy, 0.0, 1.0);
    vTexCoord = aTexCoord;
    vOpacity = aOpacity;
    vTintColor = aTintColor;
    vEffectParams = aEffectParams;
    vUVBounds = aUVBounds;
}
`;
const SPRITE_FRAGMENT = `#version 300 es
precision mediump float;

uniform sampler2D uTexture;
uniform vec2 uTexelSize;

in vec2 vTexCoord;
in float vOpacity;
in vec4 vTintColor;
in vec4 vEffectParams;
in vec4 vUVBounds;

out vec4 fragColor;

void main() {
    vec4 color = texture(uTexture, vTexCoord);

    if (vTintColor.a > 0.0) {
        color.rgb = mix(color.rgb, vTintColor.rgb, vTintColor.a);
    }

    fragColor = vec4(color.rgb, color.a * vOpacity);
}
`;
const SPRITE_SHADER_DEF = {
  vertex: SPRITE_VERTEX,
  fragment: SPRITE_FRAGMENT,
  uniforms: [
    "uProjectionMatrix",
    "uViewMatrix",
    "uModelMatrix",
    "uTexture",
    "uTexelSize"
  ],
  attributes: ["aPosition", "aTexCoord", "aOpacity", "aTintColor", "aEffectParams", "aUVBounds"]
};
const SPRITE_ATTRIBUTES = ["aPosition", "aTexCoord", "aOpacity", "aTintColor", "aEffectParams", "aUVBounds"];
const PARAM_SLOTS = ["x", "y", "z", "w"];
const DEFAULT_UNIFORM_TYPES = {
  uTime: "float"
};
class ShaderEffectRegistry {
  constructor(gl, shaderRegistry) {
    __privateAdd(this, _ShaderEffectRegistry_instances);
    __privateAdd(this, _gl3, null);
    __privateAdd(this, _shaderRegistry, null);
    __privateAdd(this, _effects, /* @__PURE__ */ new Map());
    __privateAdd(this, _shaderCache, /* @__PURE__ */ new Map());
    __privateAdd(this, _uniformValues, /* @__PURE__ */ new Map());
    __privateAdd(this, _uniformTypes, /* @__PURE__ */ new Map());
    __privateSet(this, _gl3, gl);
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
    __privateSet(this, _gl3, null);
    __privateSet(this, _shaderRegistry, null);
  }
}
_gl3 = new WeakMap();
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
const PRIMITIVE_VERTEX = `#version 300 es
in vec2 aPosition;
in vec4 aColor;

uniform mat3 uProjectionMatrix;
uniform mat3 uViewMatrix;

out vec4 vColor;

void main() {
    vec3 viewPos = uViewMatrix * vec3(aPosition, 1.0);
    vec3 clipPos = uProjectionMatrix * viewPos;

    gl_Position = vec4(clipPos.xy, 0.0, 1.0);
    vColor = aColor;
}
`;
const PRIMITIVE_FRAGMENT = `#version 300 es
precision mediump float;

in vec4 vColor;

out vec4 fragColor;

void main() {
    fragColor = vColor;
}
`;
const PRIMITIVE_SHADER_DEF = {
  vertex: PRIMITIVE_VERTEX,
  fragment: PRIMITIVE_FRAGMENT,
  uniforms: ["uProjectionMatrix", "uViewMatrix"],
  attributes: ["aPosition", "aColor"]
};
class FramebufferManager {
  constructor(gl, width, height, samples = 4) {
    __privateAdd(this, _FramebufferManager_instances);
    __privateAdd(this, _gl4, null);
    __privateAdd(this, _width, 0);
    __privateAdd(this, _height, 0);
    __privateAdd(this, _samples, 4);
    __privateAdd(this, _msaaFramebuffer, null);
    __privateAdd(this, _msaaRenderbuffer, null);
    __privateAdd(this, _sceneFramebuffer, null);
    __privateAdd(this, _sceneTexture, null);
    __privateAdd(this, _pingPongFramebuffers, []);
    __privateAdd(this, _pingPongTextures, []);
    __privateAdd(this, _currentPingPong, 0);
    __privateAdd(this, _namedBuffers, /* @__PURE__ */ new Map());
    __privateSet(this, _gl4, gl);
    __privateSet(this, _width, width);
    __privateSet(this, _height, height);
    __privateSet(this, _samples, Math.min(samples, gl.getParameter(gl.MAX_SAMPLES)));
    __privateMethod(this, _FramebufferManager_instances, createFramebuffers_fn).call(this);
  }
  get width() {
    return __privateGet(this, _width);
  }
  get height() {
    return __privateGet(this, _height);
  }
  get samples() {
    return __privateGet(this, _samples);
  }
  resize(width, height) {
    if (width === __privateGet(this, _width) && height === __privateGet(this, _height)) {
      return;
    }
    __privateSet(this, _width, width);
    __privateSet(this, _height, height);
    __privateMethod(this, _FramebufferManager_instances, deleteFramebuffers_fn).call(this);
    __privateMethod(this, _FramebufferManager_instances, createFramebuffers_fn).call(this);
    __privateMethod(this, _FramebufferManager_instances, resizeNamedBuffers_fn).call(this);
  }
  resetPingPong() {
    __privateSet(this, _currentPingPong, 0);
  }
  bindSceneBuffer() {
    const gl = __privateGet(this, _gl4);
    gl.bindFramebuffer(gl.FRAMEBUFFER, __privateGet(this, _msaaFramebuffer));
    gl.viewport(0, 0, __privateGet(this, _width), __privateGet(this, _height));
  }
  resolveSceneBuffer() {
    const gl = __privateGet(this, _gl4);
    const width = __privateGet(this, _width);
    const height = __privateGet(this, _height);
    gl.bindFramebuffer(gl.READ_FRAMEBUFFER, __privateGet(this, _msaaFramebuffer));
    gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, __privateGet(this, _sceneFramebuffer));
    gl.blitFramebuffer(
      0,
      0,
      width,
      height,
      0,
      0,
      width,
      height,
      gl.COLOR_BUFFER_BIT,
      gl.NEAREST
    );
    gl.bindFramebuffer(gl.READ_FRAMEBUFFER, null);
    gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, null);
  }
  resolveToBuffer(name) {
    const buffer = __privateGet(this, _namedBuffers).get(name);
    if (!buffer) {
      return false;
    }
    const gl = __privateGet(this, _gl4);
    const width = __privateGet(this, _width);
    const height = __privateGet(this, _height);
    gl.bindFramebuffer(gl.READ_FRAMEBUFFER, __privateGet(this, _msaaFramebuffer));
    gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, buffer.framebuffer);
    gl.blitFramebuffer(
      0,
      0,
      width,
      height,
      0,
      0,
      width,
      height,
      gl.COLOR_BUFFER_BIT,
      gl.NEAREST
    );
    gl.bindFramebuffer(gl.READ_FRAMEBUFFER, null);
    gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, null);
    return true;
  }
  getSceneTexture() {
    return __privateGet(this, _sceneTexture);
  }
  bindPingPong() {
    const gl = __privateGet(this, _gl4);
    gl.bindFramebuffer(gl.FRAMEBUFFER, __privateGet(this, _pingPongFramebuffers)[__privateGet(this, _currentPingPong)]);
    gl.viewport(0, 0, __privateGet(this, _width), __privateGet(this, _height));
  }
  swapAndGetTexture() {
    const texture = __privateGet(this, _pingPongTextures)[__privateGet(this, _currentPingPong)];
    __privateSet(this, _currentPingPong, 1 - __privateGet(this, _currentPingPong));
    return texture;
  }
  getOrCreateBuffer(name) {
    if (!__privateGet(this, _namedBuffers).has(name)) {
      const { framebuffer, texture } = __privateMethod(this, _FramebufferManager_instances, createFramebuffer_fn).call(this);
      __privateGet(this, _namedBuffers).set(name, { framebuffer, texture });
    }
    return __privateGet(this, _namedBuffers).get(name);
  }
  bindBuffer(name) {
    const buffer = __privateGet(this, _namedBuffers).get(name);
    if (!buffer) {
      return false;
    }
    const gl = __privateGet(this, _gl4);
    gl.bindFramebuffer(gl.FRAMEBUFFER, buffer.framebuffer);
    gl.viewport(0, 0, __privateGet(this, _width), __privateGet(this, _height));
    return true;
  }
  getBufferTexture(name) {
    var _a;
    return ((_a = __privateGet(this, _namedBuffers).get(name)) == null ? void 0 : _a.texture) ?? null;
  }
  disposeBuffer(name) {
    const buffer = __privateGet(this, _namedBuffers).get(name);
    if (!buffer) {
      return false;
    }
    const gl = __privateGet(this, _gl4);
    gl.deleteFramebuffer(buffer.framebuffer);
    gl.deleteTexture(buffer.texture);
    __privateGet(this, _namedBuffers).delete(name);
    return true;
  }
  disposeNamedBuffers() {
    const gl = __privateGet(this, _gl4);
    for (const { framebuffer, texture } of __privateGet(this, _namedBuffers).values()) {
      gl.deleteFramebuffer(framebuffer);
      gl.deleteTexture(texture);
    }
    __privateGet(this, _namedBuffers).clear();
  }
  bindScreen() {
    const gl = __privateGet(this, _gl4);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport(0, 0, __privateGet(this, _width), __privateGet(this, _height));
  }
  dispose() {
    __privateMethod(this, _FramebufferManager_instances, deleteFramebuffers_fn).call(this);
    this.disposeNamedBuffers();
    __privateSet(this, _msaaFramebuffer, null);
    __privateSet(this, _msaaRenderbuffer, null);
    __privateSet(this, _sceneFramebuffer, null);
    __privateSet(this, _sceneTexture, null);
    __privateSet(this, _gl4, null);
  }
}
_gl4 = new WeakMap();
_width = new WeakMap();
_height = new WeakMap();
_samples = new WeakMap();
_msaaFramebuffer = new WeakMap();
_msaaRenderbuffer = new WeakMap();
_sceneFramebuffer = new WeakMap();
_sceneTexture = new WeakMap();
_pingPongFramebuffers = new WeakMap();
_pingPongTextures = new WeakMap();
_currentPingPong = new WeakMap();
_namedBuffers = new WeakMap();
_FramebufferManager_instances = new WeakSet();
createFramebuffers_fn = function() {
  __privateMethod(this, _FramebufferManager_instances, createMSAAFramebuffer_fn).call(this);
  __privateMethod(this, _FramebufferManager_instances, createResolveFramebuffer_fn).call(this);
  for (let i = 0; i < 2; i++) {
    const { framebuffer, texture } = __privateMethod(this, _FramebufferManager_instances, createFramebuffer_fn).call(this);
    __privateGet(this, _pingPongFramebuffers).push(framebuffer);
    __privateGet(this, _pingPongTextures).push(texture);
  }
};
createMSAAFramebuffer_fn = function() {
  const gl = __privateGet(this, _gl4);
  const width = Math.max(1, __privateGet(this, _width));
  const height = Math.max(1, __privateGet(this, _height));
  __privateSet(this, _msaaRenderbuffer, gl.createRenderbuffer());
  gl.bindRenderbuffer(gl.RENDERBUFFER, __privateGet(this, _msaaRenderbuffer));
  gl.renderbufferStorageMultisample(
    gl.RENDERBUFFER,
    __privateGet(this, _samples),
    gl.RGBA8,
    width,
    height
  );
  __privateSet(this, _msaaFramebuffer, gl.createFramebuffer());
  gl.bindFramebuffer(gl.FRAMEBUFFER, __privateGet(this, _msaaFramebuffer));
  gl.framebufferRenderbuffer(
    gl.FRAMEBUFFER,
    gl.COLOR_ATTACHMENT0,
    gl.RENDERBUFFER,
    __privateGet(this, _msaaRenderbuffer)
  );
  const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
  if (status !== gl.FRAMEBUFFER_COMPLETE) {
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.bindRenderbuffer(gl.RENDERBUFFER, null);
    throw new Error(`MSAA Framebuffer not complete: ${getFramebufferStatusName(gl, status)}`);
  }
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  gl.bindRenderbuffer(gl.RENDERBUFFER, null);
};
createResolveFramebuffer_fn = function() {
  const { framebuffer, texture } = __privateMethod(this, _FramebufferManager_instances, createFramebuffer_fn).call(this);
  __privateSet(this, _sceneFramebuffer, framebuffer);
  __privateSet(this, _sceneTexture, texture);
};
createFramebuffer_fn = function() {
  const gl = __privateGet(this, _gl4);
  const width = Math.max(1, __privateGet(this, _width));
  const height = Math.max(1, __privateGet(this, _height));
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texImage2D(
    gl.TEXTURE_2D,
    0,
    gl.RGBA8,
    width,
    height,
    0,
    gl.RGBA,
    gl.UNSIGNED_BYTE,
    null
  );
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  const framebuffer = gl.createFramebuffer();
  gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
  gl.framebufferTexture2D(
    gl.FRAMEBUFFER,
    gl.COLOR_ATTACHMENT0,
    gl.TEXTURE_2D,
    texture,
    0
  );
  const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
  if (status !== gl.FRAMEBUFFER_COMPLETE) {
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.bindTexture(gl.TEXTURE_2D, null);
    throw new Error(`Framebuffer not complete: ${getFramebufferStatusName(gl, status)}`);
  }
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  gl.bindTexture(gl.TEXTURE_2D, null);
  return { framebuffer, texture };
};
resizeNamedBuffers_fn = function() {
  const gl = __privateGet(this, _gl4);
  const names = [...__privateGet(this, _namedBuffers).keys()];
  for (const name of names) {
    const old = __privateGet(this, _namedBuffers).get(name);
    gl.deleteFramebuffer(old.framebuffer);
    gl.deleteTexture(old.texture);
    const { framebuffer, texture } = __privateMethod(this, _FramebufferManager_instances, createFramebuffer_fn).call(this);
    __privateGet(this, _namedBuffers).set(name, { framebuffer, texture });
  }
};
deleteFramebuffers_fn = function() {
  const gl = __privateGet(this, _gl4);
  if (__privateGet(this, _msaaFramebuffer)) {
    gl.deleteFramebuffer(__privateGet(this, _msaaFramebuffer));
    gl.deleteRenderbuffer(__privateGet(this, _msaaRenderbuffer));
  }
  if (__privateGet(this, _sceneFramebuffer)) {
    gl.deleteFramebuffer(__privateGet(this, _sceneFramebuffer));
    gl.deleteTexture(__privateGet(this, _sceneTexture));
  }
  for (let i = 0; i < __privateGet(this, _pingPongFramebuffers).length; i++) {
    gl.deleteFramebuffer(__privateGet(this, _pingPongFramebuffers)[i]);
    gl.deleteTexture(__privateGet(this, _pingPongTextures)[i]);
  }
  __privateSet(this, _pingPongFramebuffers, []);
  __privateSet(this, _pingPongTextures, []);
};
function getFramebufferStatusName(gl, status) {
  const statusNames = {
    [gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT]: "INCOMPLETE_ATTACHMENT",
    [gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT]: "INCOMPLETE_MISSING_ATTACHMENT",
    [gl.FRAMEBUFFER_UNSUPPORTED]: "UNSUPPORTED",
    [gl.FRAMEBUFFER_INCOMPLETE_MULTISAMPLE]: "INCOMPLETE_MULTISAMPLE"
  };
  return statusNames[status] || `UNKNOWN (${status})`;
}
class FullscreenQuad {
  constructor(gl) {
    __privateAdd(this, _FullscreenQuad_instances);
    __privateAdd(this, _vertexBuffer, null);
    __privateAdd(this, _texCoordBuffer, null);
    __privateMethod(this, _FullscreenQuad_instances, createBuffers_fn).call(this, gl);
  }
  draw(gl, program) {
    const positionAttr = program.attributes.aPosition;
    const texCoordAttr = program.attributes.aTexCoord;
    if (positionAttr === void 0 || positionAttr === -1) {
      logger.warn("FullscreenQuad: aPosition attribute not found");
      return;
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, __privateGet(this, _vertexBuffer));
    gl.enableVertexAttribArray(positionAttr);
    gl.vertexAttribPointer(positionAttr, 2, gl.FLOAT, false, 0, 0);
    if (texCoordAttr !== void 0 && texCoordAttr !== -1) {
      gl.bindBuffer(gl.ARRAY_BUFFER, __privateGet(this, _texCoordBuffer));
      gl.enableVertexAttribArray(texCoordAttr);
      gl.vertexAttribPointer(texCoordAttr, 2, gl.FLOAT, false, 0, 0);
    }
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }
  dispose(gl) {
    if (__privateGet(this, _vertexBuffer)) {
      gl.deleteBuffer(__privateGet(this, _vertexBuffer));
      __privateSet(this, _vertexBuffer, null);
    }
    if (__privateGet(this, _texCoordBuffer)) {
      gl.deleteBuffer(__privateGet(this, _texCoordBuffer));
      __privateSet(this, _texCoordBuffer, null);
    }
  }
}
_vertexBuffer = new WeakMap();
_texCoordBuffer = new WeakMap();
_FullscreenQuad_instances = new WeakSet();
createBuffers_fn = function(gl) {
  const vertices = new Float32Array([
    -1,
    -1,
    1,
    -1,
    -1,
    1,
    1,
    1
  ]);
  const texCoords = new Float32Array([
    0,
    0,
    1,
    0,
    0,
    1,
    1,
    1
  ]);
  __privateSet(this, _vertexBuffer, gl.createBuffer());
  gl.bindBuffer(gl.ARRAY_BUFFER, __privateGet(this, _vertexBuffer));
  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
  __privateSet(this, _texCoordBuffer, gl.createBuffer());
  gl.bindBuffer(gl.ARRAY_BUFFER, __privateGet(this, _texCoordBuffer));
  gl.bufferData(gl.ARRAY_BUFFER, texCoords, gl.STATIC_DRAW);
};
class PostProcessor extends PerkyModule {
  constructor(options = {}) {
    super(options);
    __privateAdd(this, _gl5, null);
    __privateAdd(this, _shaderRegistry2, null);
    __privateAdd(this, _framebufferManager, null);
    __privateAdd(this, _fullscreenQuad, null);
    __privateAdd(this, _passes, []);
    __privateAdd(this, _enabled, true);
    __privateSet(this, _gl5, options.gl);
    __privateSet(this, _shaderRegistry2, options.shaderRegistry);
    this.width = options.width;
    this.height = options.height;
  }
  onInstall() {
    __privateSet(this, _framebufferManager, new FramebufferManager(
      __privateGet(this, _gl5),
      this.width,
      this.height
    ));
    __privateSet(this, _fullscreenQuad, new FullscreenQuad(__privateGet(this, _gl5)));
  }
  get enabled() {
    return __privateGet(this, _enabled);
  }
  set enabled(value) {
    __privateSet(this, _enabled, value);
  }
  get passes() {
    return __privateGet(this, _passes);
  }
  get framebufferManager() {
    return __privateGet(this, _framebufferManager);
  }
  addPass(pass) {
    pass.init(__privateGet(this, _shaderRegistry2));
    __privateGet(this, _passes).push(pass);
    return this;
  }
  removePass(pass) {
    const index = __privateGet(this, _passes).indexOf(pass);
    if (index !== -1) {
      __privateGet(this, _passes).splice(index, 1);
      pass.dispose();
    }
    return this;
  }
  clearPasses() {
    for (const pass of __privateGet(this, _passes)) {
      pass.dispose();
    }
    __privateSet(this, _passes, []);
    return this;
  }
  resize(width, height) {
    var _a;
    this.width = width;
    this.height = height;
    (_a = __privateGet(this, _framebufferManager)) == null ? void 0 : _a.resize(width, height);
  }
  hasActivePasses() {
    return __privateGet(this, _enabled) && __privateGet(this, _passes).some((pass) => pass.enabled);
  }
  begin() {
    if (!this.hasActivePasses()) {
      return false;
    }
    __privateGet(this, _framebufferManager).resetPingPong();
    __privateGet(this, _framebufferManager).bindSceneBuffer();
    return true;
  }
  finish() {
    if (!this.hasActivePasses()) {
      return;
    }
    const gl = __privateGet(this, _gl5);
    const activePasses = __privateGet(this, _passes).filter((pass) => pass.enabled);
    __privateGet(this, _framebufferManager).resolveSceneBuffer();
    gl.disable(gl.BLEND);
    let inputTexture = __privateGet(this, _framebufferManager).getSceneTexture();
    for (let i = 0; i < activePasses.length; i++) {
      const isLast = i === activePasses.length - 1;
      if (isLast) {
        __privateGet(this, _framebufferManager).bindScreen();
        gl.clearColor(0, 0, 0, 1);
        gl.clear(gl.COLOR_BUFFER_BIT);
      } else {
        __privateGet(this, _framebufferManager).bindPingPong();
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);
      }
      activePasses[i].render(gl, inputTexture, __privateGet(this, _fullscreenQuad));
      if (!isLast) {
        inputTexture = __privateGet(this, _framebufferManager).swapAndGetTexture();
      }
    }
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
  }
  onDispose() {
    this.clearPasses();
    if (__privateGet(this, _framebufferManager)) {
      __privateGet(this, _framebufferManager).dispose();
      __privateSet(this, _framebufferManager, null);
    }
    if (__privateGet(this, _fullscreenQuad)) {
      __privateGet(this, _fullscreenQuad).dispose(__privateGet(this, _gl5));
      __privateSet(this, _fullscreenQuad, null);
    }
    __privateSet(this, _gl5, null);
    __privateSet(this, _shaderRegistry2, null);
  }
}
_gl5 = new WeakMap();
_shaderRegistry2 = new WeakMap();
_framebufferManager = new WeakMap();
_fullscreenQuad = new WeakMap();
_passes = new WeakMap();
_enabled = new WeakMap();
__publicField(PostProcessor, "$category", "postProcessor");
__publicField(PostProcessor, "$bind", "postProcessor");
class WebGLTextureManager extends PerkyModule {
  constructor(options = {}) {
    super(options);
    __privateAdd(this, _WebGLTextureManager_instances);
    __privateAdd(this, _gl6);
    __privateAdd(this, _active, /* @__PURE__ */ new Map());
    __privateAdd(this, _zombies, /* @__PURE__ */ new Map());
    __privateAdd(this, _zombieSize, 0);
    __privateAdd(this, _flushInterval, null);
    __privateSet(this, _gl6, options.gl);
    this.maxZombieSize = options.maxZombieSize ?? 150 * 1024 * 1024;
    this.maxAge = options.maxAge ?? 15 * 60 * 1e3;
    this.autoFlushInterval = options.autoFlushInterval ?? 60 * 1e3;
    this.autoFlushEnabled = options.autoFlush ?? true;
  }
  onStart() {
    if (this.autoFlushEnabled && this.autoFlushInterval > 0) {
      __privateSet(this, _flushInterval, setInterval(() => {
        this.flushStale();
      }, this.autoFlushInterval));
    }
  }
  onStop() {
    if (__privateGet(this, _flushInterval)) {
      clearInterval(__privateGet(this, _flushInterval));
      __privateSet(this, _flushInterval, null);
    }
  }
  get gl() {
    return __privateGet(this, _gl6);
  }
  acquire(image) {
    if (!image) {
      return null;
    }
    if (__privateGet(this, _active).has(image)) {
      __privateGet(this, _active).get(image).refs++;
      return __privateGet(this, _active).get(image).texture;
    }
    if (__privateGet(this, _zombies).has(image)) {
      return __privateMethod(this, _WebGLTextureManager_instances, resurrect_fn).call(this, image);
    }
    return __privateMethod(this, _WebGLTextureManager_instances, createEntry_fn).call(this, image);
  }
  release(image) {
    const entry = __privateGet(this, _active).get(image);
    if (!entry) {
      return false;
    }
    entry.refs--;
    if (entry.refs <= 0) {
      __privateGet(this, _active).delete(image);
      __privateGet(this, _zombies).set(image, {
        texture: entry.texture,
        size: entry.size,
        lastUsed: Date.now()
      });
      __privateSet(this, _zombieSize, __privateGet(this, _zombieSize) + entry.size);
      this.emit("zombie", image, entry.size);
      this.flushIfFull();
    }
    return true;
  }
  flush() {
    const count = __privateGet(this, _zombies).size;
    const size = __privateGet(this, _zombieSize);
    for (const [, zombie] of __privateGet(this, _zombies)) {
      __privateGet(this, _gl6).deleteTexture(zombie.texture);
    }
    __privateGet(this, _zombies).clear();
    __privateSet(this, _zombieSize, 0);
    if (count > 0) {
      this.emit("flush", count, size);
    }
    return { count, size };
  }
  flushIfFull() {
    if (__privateGet(this, _zombieSize) <= this.maxZombieSize) {
      return { count: 0, size: 0 };
    }
    const targetSize = this.maxZombieSize * 0.5;
    const sorted = [...__privateGet(this, _zombies).entries()].sort((a, b) => a[1].lastUsed - b[1].lastUsed);
    let count = 0;
    let size = 0;
    for (const [image, zombie] of sorted) {
      if (__privateGet(this, _zombieSize) <= targetSize) {
        break;
      }
      __privateMethod(this, _WebGLTextureManager_instances, deleteTexture_fn).call(this, image, zombie);
      count++;
      size += zombie.size;
    }
    if (count > 0) {
      this.emit("flushIfFull", count, size);
    }
    return { count, size };
  }
  flushStale(maxAge = this.maxAge) {
    const now = Date.now();
    let count = 0;
    let size = 0;
    for (const [image, zombie] of __privateGet(this, _zombies)) {
      if (now - zombie.lastUsed > maxAge) {
        __privateMethod(this, _WebGLTextureManager_instances, deleteTexture_fn).call(this, image, zombie);
        count++;
        size += zombie.size;
      }
    }
    if (count > 0) {
      this.emit("flushStale", count, size);
    }
    return { count, size };
  }
  getTexture(image) {
    if (!image) {
      return null;
    }
    const active = __privateGet(this, _active).get(image);
    if (active) {
      return active.texture;
    }
    const zombie = __privateGet(this, _zombies).get(image);
    if (zombie) {
      return zombie.texture;
    }
    return this.acquire(image);
  }
  hasTexture(image) {
    return __privateGet(this, _active).has(image) || __privateGet(this, _zombies).has(image);
  }
  get stats() {
    let activeSize = 0;
    for (const entry of __privateGet(this, _active).values()) {
      activeSize += entry.size;
    }
    return {
      activeCount: __privateGet(this, _active).size,
      activeSize,
      activeSizeMB: (activeSize / (1024 * 1024)).toFixed(2),
      zombieCount: __privateGet(this, _zombies).size,
      zombieSize: __privateGet(this, _zombieSize),
      zombieSizeMB: (__privateGet(this, _zombieSize) / (1024 * 1024)).toFixed(2),
      totalCount: __privateGet(this, _active).size + __privateGet(this, _zombies).size,
      totalSize: activeSize + __privateGet(this, _zombieSize),
      totalSizeMB: ((activeSize + __privateGet(this, _zombieSize)) / (1024 * 1024)).toFixed(2)
    };
  }
  onDispose() {
    this.onStop();
    for (const entry of __privateGet(this, _active).values()) {
      __privateGet(this, _gl6).deleteTexture(entry.texture);
    }
    __privateGet(this, _active).clear();
    for (const zombie of __privateGet(this, _zombies).values()) {
      __privateGet(this, _gl6).deleteTexture(zombie.texture);
    }
    __privateGet(this, _zombies).clear();
    __privateSet(this, _zombieSize, 0);
  }
}
_gl6 = new WeakMap();
_active = new WeakMap();
_zombies = new WeakMap();
_zombieSize = new WeakMap();
_flushInterval = new WeakMap();
_WebGLTextureManager_instances = new WeakSet();
resurrect_fn = function(image) {
  const zombie = __privateGet(this, _zombies).get(image);
  __privateGet(this, _zombies).delete(image);
  __privateSet(this, _zombieSize, __privateGet(this, _zombieSize) - zombie.size);
  __privateGet(this, _active).set(image, {
    texture: zombie.texture,
    refs: 1,
    size: zombie.size
  });
  this.emit("resurrect", image);
  return zombie.texture;
};
createEntry_fn = function(image) {
  const texture = __privateMethod(this, _WebGLTextureManager_instances, createTexture_fn).call(this, image);
  const size = estimateSize(image);
  __privateGet(this, _active).set(image, { texture, refs: 1, size });
  this.emit("create", image, size);
  return texture;
};
createTexture_fn = function(image) {
  const gl = __privateGet(this, _gl6);
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
  gl.generateMipmap(gl.TEXTURE_2D);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.bindTexture(gl.TEXTURE_2D, null);
  return texture;
};
deleteTexture_fn = function(image, zombie) {
  __privateGet(this, _gl6).deleteTexture(zombie.texture);
  __privateGet(this, _zombies).delete(image);
  __privateSet(this, _zombieSize, __privateGet(this, _zombieSize) - zombie.size);
  this.emit("delete", image, zombie.size);
};
__publicField(WebGLTextureManager, "$category", "textureManager");
function estimateSize(image) {
  if (!image || !image.width || !image.height) {
    return 0;
  }
  return image.width * image.height * 4;
}
function parseColor(colorString) {
  if (colorString.startsWith("#")) {
    const hex = colorString.substring(1);
    const r = parseInt(hex.substring(0, 2), 16) / 255;
    const g = parseInt(hex.substring(2, 4), 16) / 255;
    const b = parseInt(hex.substring(4, 6), 16) / 255;
    return { r, g, b, a: 1 };
  }
  if (colorString.startsWith("hsl")) {
    const match = colorString.match(/hsl\(\s*(\d+)\s*,\s*(\d+)%?\s*,\s*(\d+)%?\s*\)/);
    if (match) {
      const h = parseInt(match[1], 10) / 360;
      const s = parseInt(match[2], 10) / 100;
      const l = parseInt(match[3], 10) / 100;
      const { r, g, b } = hslToRgb(h, s, l);
      return { r, g, b, a: 1 };
    }
  }
  return { r: 0, g: 0, b: 0, a: 1 };
}
function hslToRgb(h, s, l) {
  if (s === 0) {
    return { r: l, g: l, b: l };
  }
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  return {
    r: hueToRgb(p, q, h + 1 / 3),
    g: hueToRgb(p, q, h),
    b: hueToRgb(p, q, h - 1 / 3)
  };
}
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
const BLEND_MODES = {
  normal: "normal",
  additive: "additive",
  multiply: "multiply"
};
class RenderGroup extends PerkyModule {
  constructor(options = {}) {
    super(options);
    __privateAdd(this, _RenderGroup_instances);
    __privateAdd(this, _initialized, false);
    this.content = options.content ?? null;
    this.postPasses = options.postPasses ?? [];
    this.blendMode = options.blendMode ?? BLEND_MODES.normal;
    this.visible = options.visible ?? true;
    this.opacity = options.opacity ?? 1;
    this.renderTransform = options.renderTransform ?? null;
    __privateSet(this, _initialized, false);
  }
  onInstall() {
    var _a;
    const renderer = this.host;
    if (!(renderer == null ? void 0 : renderer.gl) || !(renderer == null ? void 0 : renderer.shaderRegistry)) {
      return;
    }
    __privateMethod(this, _RenderGroup_instances, initPasses_fn).call(this, renderer.shaderRegistry);
    __privateMethod(this, _RenderGroup_instances, initTransform_fn).call(this, renderer);
    const fbManager = (_a = renderer.postProcessor) == null ? void 0 : _a.framebufferManager;
    if (fbManager) {
      fbManager.getOrCreateBuffer(this.$id);
    }
  }
  hasActivePasses() {
    return this.postPasses.some((pass) => pass.enabled);
  }
  onDispose() {
    var _a, _b;
    const fbManager = (_b = (_a = this.host) == null ? void 0 : _a.postProcessor) == null ? void 0 : _b.framebufferManager;
    if (fbManager) {
      fbManager.disposeBuffer(this.$id);
    }
    for (const pass of this.postPasses) {
      pass.dispose();
    }
    this.postPasses = [];
    if (this.renderTransform) {
      this.renderTransform.dispose();
      this.renderTransform = null;
    }
    __privateSet(this, _initialized, false);
  }
  addPostPass(pass) {
    var _a;
    if (__privateGet(this, _initialized) && ((_a = this.host) == null ? void 0 : _a.shaderRegistry)) {
      pass.init(this.host.shaderRegistry);
    }
    this.postPasses.push(pass);
    this.emit("postPass:added", pass);
    return this;
  }
  removePostPass(pass) {
    const index = this.postPasses.indexOf(pass);
    if (index !== -1) {
      this.postPasses.splice(index, 1);
      pass.dispose();
      this.emit("postPass:removed", pass);
    }
    return this;
  }
}
_initialized = new WeakMap();
_RenderGroup_instances = new WeakSet();
initTransform_fn = function(renderer) {
  if (this.renderTransform) {
    this.renderTransform.init({
      gl: renderer.gl,
      shaderRegistry: renderer.shaderRegistry
    });
  }
};
initPasses_fn = function(shaderRegistry) {
  if (__privateGet(this, _initialized)) {
    return;
  }
  for (const pass of this.postPasses) {
    pass.init(shaderRegistry);
  }
  __privateSet(this, _initialized, true);
};
__publicField(RenderGroup, "$category", "renderGroup");
__publicField(RenderGroup, "$name", "renderGroup");
class WebGLObjectRenderer {
  constructor() {
    __privateAdd(this, _gl7, null);
    __privateAdd(this, _context, null);
    __privateAdd(this, _collected, []);
  }
  static get handles() {
    return [];
  }
  get gl() {
    return __privateGet(this, _gl7);
  }
  get context() {
    return __privateGet(this, _context);
  }
  init(context) {
    __privateSet(this, _gl7, context.gl);
    __privateSet(this, _context, context);
  }
  reset() {
    __privateSet(this, _collected, []);
  }
  collect(object, opacity, hints = null) {
    __privateGet(this, _collected).push({ object, opacity, hints });
  }
  get collected() {
    return __privateGet(this, _collected);
  }
  flush() {
  }
  dispose() {
    __privateSet(this, _collected, []);
    __privateSet(this, _gl7, null);
    __privateSet(this, _context, null);
  }
}
_gl7 = new WeakMap();
_context = new WeakMap();
_collected = new WeakMap();
const DEFAULT_TEX_COORDS = [0, 1, 1, 1, 1, 0, 0, 0];
const DEFAULT_TINT = [0, 0, 0, 0];
const DEFAULT_EFFECT_PARAMS = [0, 0, 0, 0];
const DEFAULT_UV_BOUNDS = [0, 0, 1, 1];
const FLOATS_PER_VERTEX = 18;
class WebGLSpriteBatch {
  constructor(gl, spriteProgram, textureManager, options = {}) {
    __privateAdd(this, _WebGLSpriteBatch_instances);
    __privateAdd(this, _tempCorners, new Float32Array(8));
    __privateAdd(this, _tempTexCoords, new Float32Array(8));
    this.gl = gl;
    this.spriteProgram = spriteProgram;
    this.textureManager = textureManager;
    this.maxSprites = options.maxSprites ?? 1e3;
    this.vertexData = new Float32Array(this.maxSprites * 4 * FLOATS_PER_VERTEX);
    this.indexData = new Uint16Array(this.maxSprites * 6);
    for (let i = 0; i < this.maxSprites; i++) {
      const offset = i * 6;
      const vertexOffset = i * 4;
      this.indexData[offset + 0] = vertexOffset + 0;
      this.indexData[offset + 1] = vertexOffset + 1;
      this.indexData[offset + 2] = vertexOffset + 2;
      this.indexData[offset + 3] = vertexOffset + 0;
      this.indexData[offset + 4] = vertexOffset + 2;
      this.indexData[offset + 5] = vertexOffset + 3;
    }
    this.vertexBuffer = gl.createBuffer();
    this.indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indexData, gl.STATIC_DRAW);
    this.currentTexture = null;
    this.currentTextureSize = { width: 1, height: 1 };
    this.spriteCount = 0;
    this.vertexIndex = 0;
    this.activeProgram = null;
  }
  begin(program = null) {
    this.spriteCount = 0;
    this.vertexIndex = 0;
    this.currentTexture = null;
    this.activeProgram = program;
  }
  addSprite(object, effectiveOpacity, hints = null) {
    const region = object.region;
    const image = region == null ? void 0 : region.image;
    const texture = getValidTexture(image, this.textureManager);
    if (!texture) {
      return;
    }
    __privateMethod(this, _WebGLSpriteBatch_instances, ensureTexture_fn).call(this, texture);
    if (image) {
      this.currentTextureSize.width = image.width || 1;
      this.currentTextureSize.height = image.height || 1;
    }
    const corners = __privateGet(this, _tempCorners);
    const texCoords = __privateGet(this, _tempTexCoords);
    const bounds = object.getBounds();
    transformCorners(object.worldMatrix, bounds, corners);
    computeTexCoords(region, texCoords);
    const localAnchorX = bounds.minX + object.anchorX * bounds.width;
    const localAnchorY = bounds.minY + object.anchorY * bounds.height;
    const m = object.worldMatrix;
    const worldAnchorY = m[1] * localAnchorX + m[3] * localAnchorY + m[5];
    const uvBounds = region ? [region.uvs.u0, region.uvs.v0, region.uvs.u1, region.uvs.v1] : null;
    __privateMethod(this, _WebGLSpriteBatch_instances, writeVertices_fn).call(this, {
      corners,
      texCoords,
      opacity: effectiveOpacity,
      hints,
      anchorY: worldAnchorY,
      uvBounds
    });
  }
  flush(alternateProgram = null) {
    if (this.spriteCount === 0) {
      return;
    }
    const gl = this.gl;
    const program = alternateProgram || this.activeProgram || this.spriteProgram;
    gl.useProgram(program.program);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this.currentTexture);
    gl.uniform1i(program.uniforms.uTexture, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, this.vertexData.subarray(0, this.vertexIndex), gl.DYNAMIC_DRAW);
    const stride = FLOATS_PER_VERTEX * 4;
    gl.enableVertexAttribArray(program.attributes.aPosition);
    gl.vertexAttribPointer(program.attributes.aPosition, 2, gl.FLOAT, false, stride, 0);
    gl.enableVertexAttribArray(program.attributes.aTexCoord);
    gl.vertexAttribPointer(program.attributes.aTexCoord, 2, gl.FLOAT, false, stride, 2 * 4);
    gl.enableVertexAttribArray(program.attributes.aOpacity);
    gl.vertexAttribPointer(program.attributes.aOpacity, 1, gl.FLOAT, false, stride, 4 * 4);
    __privateMethod(this, _WebGLSpriteBatch_instances, bindOptionalAttributes_fn).call(this, program, stride);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
    gl.drawElements(gl.TRIANGLES, this.spriteCount * 6, gl.UNSIGNED_SHORT, 0);
    this.spriteCount = 0;
    this.vertexIndex = 0;
  }
  end(alternateProgram = null) {
    this.flush(alternateProgram);
  }
  dispose() {
    const gl = this.gl;
    gl.deleteBuffer(this.vertexBuffer);
    gl.deleteBuffer(this.indexBuffer);
  }
}
_tempCorners = new WeakMap();
_tempTexCoords = new WeakMap();
_WebGLSpriteBatch_instances = new WeakSet();
ensureTexture_fn = function(texture) {
  if (this.currentTexture !== texture) {
    this.flush();
    this.currentTexture = texture;
  }
  if (this.spriteCount >= this.maxSprites) {
    this.flush();
  }
};
writeVertices_fn = function(sprite) {
  const { corners, texCoords, opacity, hints, anchorY, uvBounds } = sprite;
  const t = (hints == null ? void 0 : hints.tint) || DEFAULT_TINT;
  const ep = (hints == null ? void 0 : hints.effectParams) || DEFAULT_EFFECT_PARAMS;
  const uv = uvBounds || DEFAULT_UV_BOUNDS;
  for (let i = 0; i < 4; i++) {
    const idx = this.vertexIndex;
    const ci = i * 2;
    this.vertexData[idx] = corners[ci];
    this.vertexData[idx + 1] = corners[ci + 1];
    this.vertexData[idx + 2] = texCoords[ci];
    this.vertexData[idx + 3] = texCoords[ci + 1];
    this.vertexData[idx + 4] = opacity;
    this.vertexData[idx + 5] = anchorY;
    this.vertexData[idx + 6] = t[0];
    this.vertexData[idx + 7] = t[1];
    this.vertexData[idx + 8] = t[2];
    this.vertexData[idx + 9] = t[3];
    this.vertexData[idx + 10] = ep[0];
    this.vertexData[idx + 11] = ep[1];
    this.vertexData[idx + 12] = ep[2];
    this.vertexData[idx + 13] = ep[3];
    this.vertexData[idx + 14] = uv[0];
    this.vertexData[idx + 15] = uv[1];
    this.vertexData[idx + 16] = uv[2];
    this.vertexData[idx + 17] = uv[3];
    this.vertexIndex += FLOATS_PER_VERTEX;
  }
  this.spriteCount++;
};
bindOptionalAttributes_fn = function(program, stride) {
  const gl = this.gl;
  const attrs = program.attributes;
  const optionalAttrs = [
    { name: "aAnchorY", size: 1, offset: 5 * 4 },
    { name: "aTintColor", size: 4, offset: 6 * 4 },
    { name: "aEffectParams", size: 4, offset: 10 * 4 },
    { name: "aUVBounds", size: 4, offset: 14 * 4 }
  ];
  for (const { name, size, offset } of optionalAttrs) {
    const location = attrs[name];
    if (location !== void 0 && location !== -1) {
      gl.enableVertexAttribArray(location);
      gl.vertexAttribPointer(location, size, gl.FLOAT, false, stride, offset);
    }
  }
};
function computeTexCoords(region, texCoords) {
  if (region) {
    const { u0, v0, u1, v1 } = region.uvs;
    texCoords[0] = u0;
    texCoords[1] = v1;
    texCoords[2] = u1;
    texCoords[3] = v1;
    texCoords[4] = u1;
    texCoords[5] = v0;
    texCoords[6] = u0;
    texCoords[7] = v0;
  } else {
    texCoords.set(DEFAULT_TEX_COORDS);
  }
}
function getValidTexture(image, textureManager) {
  if (!image) {
    return null;
  }
  if (image.complete !== void 0 && (!image.complete || image.naturalWidth === 0)) {
    return null;
  }
  if (image.width === 0) {
    return null;
  }
  return textureManager.getTexture(image);
}
function transformCorners(m, bounds, corners) {
  const { minX, minY, maxX, maxY } = bounds;
  corners[0] = m[0] * minX + m[2] * minY + m[4];
  corners[1] = m[1] * minX + m[3] * minY + m[5];
  corners[2] = m[0] * maxX + m[2] * minY + m[4];
  corners[3] = m[1] * maxX + m[3] * minY + m[5];
  corners[4] = m[0] * maxX + m[2] * maxY + m[4];
  corners[5] = m[1] * maxX + m[3] * maxY + m[5];
  corners[6] = m[0] * minX + m[2] * maxY + m[4];
  corners[7] = m[1] * minX + m[3] * maxY + m[5];
}
class WebGLSpriteRenderer extends WebGLObjectRenderer {
  constructor() {
    super(...arguments);
    __privateAdd(this, _WebGLSpriteRenderer_instances);
    __privateAdd(this, _spriteBatch, null);
    __privateAdd(this, _shaderEffectRegistry, null);
  }
  static get handles() {
    return [Sprite];
  }
  init(context) {
    super.init(context);
    __privateSet(this, _spriteBatch, new WebGLSpriteBatch(
      context.gl,
      context.spriteProgram,
      context.textureManager
    ));
    __privateSet(this, _shaderEffectRegistry, context.shaderEffectRegistry);
  }
  reset(renderContext = null) {
    var _a;
    super.reset();
    const program = ((_a = renderContext == null ? void 0 : renderContext.transform) == null ? void 0 : _a.getProgram()) || null;
    __privateGet(this, _spriteBatch).begin(program);
  }
  flush(matrices, renderContext = null) {
    const gl = this.gl;
    const transform = renderContext == null ? void 0 : renderContext.transform;
    const identityMatrix = [1, 0, 0, 0, 1, 0, 0, 0, 1];
    const batches = __privateMethod(this, _WebGLSpriteRenderer_instances, groupByShaderEffects_fn).call(this);
    for (const { key: effectKey, items } of batches) {
      const program = __privateMethod(this, _WebGLSpriteRenderer_instances, getProgramForEffects_fn).call(this, effectKey, transform);
      __privateGet(this, _spriteBatch).begin(program);
      for (const { object, opacity, hints } of items) {
        __privateGet(this, _spriteBatch).addSprite(object, opacity, hints);
      }
      gl.useProgram(program.program);
      gl.uniformMatrix3fv(program.uniforms.uProjectionMatrix, false, matrices.projectionMatrix);
      gl.uniformMatrix3fv(program.uniforms.uViewMatrix, false, matrices.viewMatrix);
      gl.uniformMatrix3fv(program.uniforms.uModelMatrix, false, identityMatrix);
      setEffectUniforms(gl, program, __privateGet(this, _spriteBatch).currentTextureSize);
      if (__privateGet(this, _shaderEffectRegistry)) {
        __privateGet(this, _shaderEffectRegistry).applyUniforms(gl, program);
      }
      if (transform) {
        transform.applyUniforms(gl, program, matrices);
      }
      __privateGet(this, _spriteBatch).end(program);
    }
  }
  dispose() {
    if (__privateGet(this, _spriteBatch)) {
      __privateGet(this, _spriteBatch).dispose();
      __privateSet(this, _spriteBatch, null);
    }
    __privateSet(this, _shaderEffectRegistry, null);
    super.dispose();
  }
}
_spriteBatch = new WeakMap();
_shaderEffectRegistry = new WeakMap();
_WebGLSpriteRenderer_instances = new WeakSet();
groupByShaderEffects_fn = function() {
  var _a;
  const batches = [];
  let currentKey = null;
  let currentBatch = null;
  for (const item of this.collected) {
    const effectTypes = ((_a = item.hints) == null ? void 0 : _a.shaderEffectTypes) || [];
    const key = [...effectTypes].sort().join("|") || "none";
    if (key !== currentKey) {
      currentKey = key;
      currentBatch = { key, items: [] };
      batches.push(currentBatch);
    }
    currentBatch.items.push(item);
  }
  return batches;
};
getProgramForEffects_fn = function(effectKey, transform) {
  if (transform == null ? void 0 : transform.getProgram()) {
    return transform.getProgram();
  }
  if (!effectKey || effectKey === "none" || !__privateGet(this, _shaderEffectRegistry)) {
    return this.context.spriteProgram;
  }
  const effectTypes = effectKey.split("|").filter(Boolean);
  if (effectTypes.length === 0) {
    return this.context.spriteProgram;
  }
  return __privateGet(this, _shaderEffectRegistry).getShaderForEffects(effectTypes);
};
function setEffectUniforms(gl, program, textureSize) {
  const uTexelSize = program.uniforms.uTexelSize;
  if (uTexelSize !== void 0 && uTexelSize !== -1) {
    gl.uniform2f(uTexelSize, 1 / textureSize.width, 1 / textureSize.height);
  }
}
class WebGLPrimitiveRenderer extends WebGLObjectRenderer {
  constructor() {
    super(...arguments);
    __privateAdd(this, _vertexBuffer2, null);
  }
  get vertexBuffer() {
    return __privateGet(this, _vertexBuffer2);
  }
  init(context) {
    super.init(context);
    __privateSet(this, _vertexBuffer2, context.gl.createBuffer());
  }
  flush(matrices) {
    if (this.collected.length === 0) {
      return;
    }
    const gl = this.gl;
    const program = this.context.primitiveProgram;
    gl.useProgram(program.program);
    gl.uniformMatrix3fv(program.uniforms.uProjectionMatrix, false, matrices.projectionMatrix);
    gl.uniformMatrix3fv(program.uniforms.uViewMatrix, false, matrices.viewMatrix);
    for (const { object, opacity } of this.collected) {
      this.renderObject(object, opacity);
    }
  }
  renderObject() {
  }
  dispose() {
    if (__privateGet(this, _vertexBuffer2)) {
      this.gl.deleteBuffer(__privateGet(this, _vertexBuffer2));
      __privateSet(this, _vertexBuffer2, null);
    }
    super.dispose();
  }
}
_vertexBuffer2 = new WeakMap();
class WebGLCircleRenderer extends WebGLPrimitiveRenderer {
  static get handles() {
    return [Circle];
  }
  renderObject(circle, opacity) {
    const gl = this.gl;
    const program = this.context.primitiveProgram;
    const segments = 32;
    const radius = circle.radius;
    const offsetX = -radius * 2 * circle.anchorX + radius;
    const offsetY = -radius * 2 * circle.anchorY + radius;
    const color = parseColor(circle.color);
    const m = circle.worldMatrix;
    const vertices = [];
    const centerX = m[0] * offsetX + m[2] * offsetY + m[4];
    const centerY = m[1] * offsetX + m[3] * offsetY + m[5];
    vertices.push(centerX, centerY, color.r, color.g, color.b, opacity);
    for (let i = 0; i <= segments; i++) {
      const angle = i / segments * Math.PI * 2;
      const x = offsetX + Math.cos(angle) * radius;
      const y = offsetY + Math.sin(angle) * radius;
      const worldX = m[0] * x + m[2] * y + m[4];
      const worldY = m[1] * x + m[3] * y + m[5];
      vertices.push(worldX, worldY, color.r, color.g, color.b, opacity);
    }
    const vertexData = new Float32Array(vertices);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertexData, gl.DYNAMIC_DRAW);
    const stride = 6 * 4;
    gl.enableVertexAttribArray(program.attributes.aPosition);
    gl.vertexAttribPointer(program.attributes.aPosition, 2, gl.FLOAT, false, stride, 0);
    gl.enableVertexAttribArray(program.attributes.aColor);
    gl.vertexAttribPointer(program.attributes.aColor, 4, gl.FLOAT, false, stride, 2 * 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, segments + 2);
  }
}
class WebGLRectangleRenderer extends WebGLPrimitiveRenderer {
  static get handles() {
    return [Rectangle];
  }
  renderObject(rect, opacity) {
    const gl = this.gl;
    const program = this.context.primitiveProgram;
    const offsetX = -rect.width * rect.anchorX;
    const offsetY = -rect.height * rect.anchorY;
    const m = rect.worldMatrix;
    const corners = [
      { x: offsetX, y: offsetY },
      { x: offsetX + rect.width, y: offsetY },
      { x: offsetX + rect.width, y: offsetY + rect.height },
      { x: offsetX, y: offsetY + rect.height }
    ];
    const worldCorners = corners.map((corner) => ({
      x: m[0] * corner.x + m[2] * corner.y + m[4],
      y: m[1] * corner.x + m[3] * corner.y + m[5]
    }));
    if (rect.color && rect.color !== "transparent") {
      const color = parseColor(rect.color);
      const vertices = [];
      for (const wc of worldCorners) {
        vertices.push(wc.x, wc.y, color.r, color.g, color.b, opacity);
      }
      const vertexData = new Float32Array(vertices);
      gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, vertexData, gl.DYNAMIC_DRAW);
      const stride = 6 * 4;
      gl.enableVertexAttribArray(program.attributes.aPosition);
      gl.vertexAttribPointer(program.attributes.aPosition, 2, gl.FLOAT, false, stride, 0);
      gl.enableVertexAttribArray(program.attributes.aColor);
      gl.vertexAttribPointer(program.attributes.aColor, 4, gl.FLOAT, false, stride, 2 * 4);
      gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    }
    if (rect.strokeWidth > 0) {
      const strokeColor = parseColor(rect.strokeColor);
      const vertices = [];
      for (let i = 0; i < 4; i++) {
        const start = worldCorners[i];
        const end = worldCorners[(i + 1) % 4];
        vertices.push(
          start.x,
          start.y,
          strokeColor.r,
          strokeColor.g,
          strokeColor.b,
          opacity,
          end.x,
          end.y,
          strokeColor.r,
          strokeColor.g,
          strokeColor.b,
          opacity
        );
      }
      const vertexData = new Float32Array(vertices);
      gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, vertexData, gl.DYNAMIC_DRAW);
      const stride = 6 * 4;
      gl.enableVertexAttribArray(program.attributes.aPosition);
      gl.vertexAttribPointer(program.attributes.aPosition, 2, gl.FLOAT, false, stride, 0);
      gl.enableVertexAttribArray(program.attributes.aColor);
      gl.vertexAttribPointer(program.attributes.aColor, 4, gl.FLOAT, false, stride, 2 * 4);
      gl.lineWidth(rect.strokeWidth);
      gl.drawArrays(gl.LINES, 0, 8);
    }
  }
}
class WebGLDebugGizmoRenderer extends WebGLObjectRenderer {
  constructor() {
    super(...arguments);
    __privateAdd(this, _vertexBuffer3, null);
    __privateAdd(this, _gizmoObjects, []);
  }
  static get handles() {
    return [];
  }
  init(context) {
    super.init(context);
    __privateSet(this, _vertexBuffer3, context.gl.createBuffer());
  }
  reset() {
    super.reset();
    __privateSet(this, _gizmoObjects, []);
  }
  collectGizmo(object, opacity) {
    __privateGet(this, _gizmoObjects).push({ object, opacity });
  }
  flush(matrices) {
    if (__privateGet(this, _gizmoObjects).length === 0) {
      return;
    }
    const gl = this.gl;
    const program = this.context.primitiveProgram;
    gl.useProgram(program.program);
    gl.uniformMatrix3fv(program.uniforms.uProjectionMatrix, false, matrices.projectionMatrix);
    gl.uniformMatrix3fv(program.uniforms.uViewMatrix, false, matrices.viewMatrix);
    for (const { object, opacity } of __privateGet(this, _gizmoObjects)) {
      this.renderGizmos(object, opacity);
    }
  }
  renderGizmos(object, opacity) {
    const gizmos = object.debugGizmos;
    if (!gizmos) {
      return;
    }
    const bounds = object.getBounds();
    const hasSize = bounds.width > 0 || bounds.height > 0;
    const m = object.worldMatrix;
    if (gizmos.bounds && hasSize) {
      this.renderBounds(m, bounds, opacity);
    }
    if (gizmos.anchor) {
      this.renderAnchor(m, object, bounds, opacity);
    }
    if (gizmos.pivot) {
      this.renderPivot(m, object, opacity);
    }
    if (gizmos.origin) {
      this.renderOrigin(m, opacity);
    }
  }
  renderBounds(m, bounds, opacity) {
    const corners = [
      { x: bounds.minX, y: bounds.minY },
      { x: bounds.maxX, y: bounds.minY },
      { x: bounds.maxX, y: bounds.maxY },
      { x: bounds.minX, y: bounds.maxY }
    ];
    const transformed = corners.map((p) => ({
      x: m[0] * p.x + m[2] * p.y + m[4],
      y: m[1] * p.x + m[3] * p.y + m[5]
    }));
    const vertices = [];
    const color = { r: 0, g: 1, b: 0 };
    for (let i = 0; i < 4; i++) {
      const p1 = transformed[i];
      const p2 = transformed[(i + 1) % 4];
      vertices.push(p1.x, p1.y, color.r, color.g, color.b, opacity * 0.8);
      vertices.push(p2.x, p2.y, color.r, color.g, color.b, opacity * 0.8);
    }
    this.drawLines(vertices);
  }
  renderAnchor(m, object, bounds, opacity) {
    const anchorX = bounds.minX + object.anchorX * bounds.width;
    const anchorY = bounds.minY + object.anchorY * bounds.height;
    const worldX = m[0] * anchorX + m[2] * anchorY + m[4];
    const worldY = m[1] * anchorX + m[3] * anchorY + m[5];
    const size = 0.08;
    const color = { r: 1, g: 1, b: 0 };
    const vertices = [
      worldX - size,
      worldY,
      color.r,
      color.g,
      color.b,
      opacity,
      worldX + size,
      worldY,
      color.r,
      color.g,
      color.b,
      opacity,
      worldX,
      worldY - size,
      color.r,
      color.g,
      color.b,
      opacity,
      worldX,
      worldY + size,
      color.r,
      color.g,
      color.b,
      opacity
    ];
    this.drawLines(vertices);
    this.drawCircle({ x: worldX, y: worldY, radius: size * 0.5, color, opacity: opacity * 0.5, segments: 12 });
  }
  renderPivot(m, object, opacity) {
    const pivotX = object.pivotX;
    const pivotY = object.pivotY;
    const worldX = m[0] * pivotX + m[2] * pivotY + m[4];
    const worldY = m[1] * pivotX + m[3] * pivotY + m[5];
    const size = 0.06;
    const color = { r: 1, g: 0, b: 1 };
    const vertices = [
      worldX - size * 1.5,
      worldY,
      color.r,
      color.g,
      color.b,
      opacity,
      worldX + size * 1.5,
      worldY,
      color.r,
      color.g,
      color.b,
      opacity,
      worldX,
      worldY - size * 1.5,
      color.r,
      color.g,
      color.b,
      opacity,
      worldX,
      worldY + size * 1.5,
      color.r,
      color.g,
      color.b,
      opacity
    ];
    this.drawLines(vertices);
    this.drawCircleOutline({ x: worldX, y: worldY, radius: size, color, opacity, segments: 16 });
  }
  renderOrigin(m, opacity) {
    const originX = m[4];
    const originY = m[5];
    const size = 0.1;
    const scaleX = Math.sqrt(m[0] * m[0] + m[1] * m[1]);
    const scaleY = Math.sqrt(m[2] * m[2] + m[3] * m[3]);
    const xAxisX = originX + m[0] / scaleX * size * 2;
    const xAxisY = originY + m[1] / scaleX * size * 2;
    const yAxisX = originX + m[2] / scaleY * size * 2;
    const yAxisY = originY + m[3] / scaleY * size * 2;
    const vertices = [
      originX,
      originY,
      1,
      0,
      0,
      opacity,
      xAxisX,
      xAxisY,
      1,
      0,
      0,
      opacity,
      originX,
      originY,
      0,
      1,
      0,
      opacity,
      yAxisX,
      yAxisY,
      0,
      1,
      0,
      opacity
    ];
    this.drawLines(vertices);
    this.drawCircle({ x: originX, y: originY, radius: 0.03, color: { r: 1, g: 1, b: 1 }, opacity, segments: 8 });
  }
  drawLines(vertices) {
    const gl = this.gl;
    const program = this.context.primitiveProgram;
    const vertexData = new Float32Array(vertices);
    gl.bindBuffer(gl.ARRAY_BUFFER, __privateGet(this, _vertexBuffer3));
    gl.bufferData(gl.ARRAY_BUFFER, vertexData, gl.DYNAMIC_DRAW);
    const stride = 6 * 4;
    gl.enableVertexAttribArray(program.attributes.aPosition);
    gl.vertexAttribPointer(program.attributes.aPosition, 2, gl.FLOAT, false, stride, 0);
    gl.enableVertexAttribArray(program.attributes.aColor);
    gl.vertexAttribPointer(program.attributes.aColor, 4, gl.FLOAT, false, stride, 2 * 4);
    gl.drawArrays(gl.LINES, 0, vertices.length / 6);
  }
  drawCircle(options) {
    const { x: cx, y: cy, radius, color, opacity, segments } = options;
    const gl = this.gl;
    const program = this.context.primitiveProgram;
    const vertices = [cx, cy, color.r, color.g, color.b, opacity];
    for (let i = 0; i <= segments; i++) {
      const angle = i / segments * Math.PI * 2;
      const x = cx + Math.cos(angle) * radius;
      const y = cy + Math.sin(angle) * radius;
      vertices.push(x, y, color.r, color.g, color.b, opacity);
    }
    const vertexData = new Float32Array(vertices);
    gl.bindBuffer(gl.ARRAY_BUFFER, __privateGet(this, _vertexBuffer3));
    gl.bufferData(gl.ARRAY_BUFFER, vertexData, gl.DYNAMIC_DRAW);
    const stride = 6 * 4;
    gl.enableVertexAttribArray(program.attributes.aPosition);
    gl.vertexAttribPointer(program.attributes.aPosition, 2, gl.FLOAT, false, stride, 0);
    gl.enableVertexAttribArray(program.attributes.aColor);
    gl.vertexAttribPointer(program.attributes.aColor, 4, gl.FLOAT, false, stride, 2 * 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, segments + 2);
  }
  drawCircleOutline(options) {
    const { x: cx, y: cy, radius, color, opacity, segments } = options;
    const vertices = [];
    for (let i = 0; i < segments; i++) {
      const angle1 = i / segments * Math.PI * 2;
      const angle2 = (i + 1) / segments * Math.PI * 2;
      const x1 = cx + Math.cos(angle1) * radius;
      const y1 = cy + Math.sin(angle1) * radius;
      const x2 = cx + Math.cos(angle2) * radius;
      const y2 = cy + Math.sin(angle2) * radius;
      vertices.push(x1, y1, color.r, color.g, color.b, opacity);
      vertices.push(x2, y2, color.r, color.g, color.b, opacity);
    }
    this.drawLines(vertices);
  }
  dispose() {
    if (__privateGet(this, _vertexBuffer3)) {
      this.gl.deleteBuffer(__privateGet(this, _vertexBuffer3));
      __privateSet(this, _vertexBuffer3, null);
    }
    __privateSet(this, _gizmoObjects, []);
    super.dispose();
  }
}
_vertexBuffer3 = new WeakMap();
_gizmoObjects = new WeakMap();
class WebGLRenderer extends BaseRenderer {
  constructor(options = {}) {
    const { autoFit, ...parentOptions } = options;
    super(parentOptions);
    __privateAdd(this, _WebGLRenderer_instances);
    __privateAdd(this, _rendererRegistry, /* @__PURE__ */ new Map());
    __privateAdd(this, _renderers, []);
    __privateAdd(this, _shaderRegistry3, null);
    __privateAdd(this, _shaderEffectRegistry2, null);
    __privateAdd(this, _debugGizmoRenderer, null);
    __privateAdd(this, _compositeQuad, null);
    __privateAdd(this, _compositeProgram, null);
    __privateAdd(this, _renderGroupOrder, []);
    __privateMethod(this, _WebGLRenderer_instances, setupWebGL_fn).call(this);
    __privateMethod(this, _WebGLRenderer_instances, setupDefaultRenderers_fn).call(this);
    this.applyPixelRatio();
    this.backgroundColor = options.backgroundColor ?? null;
    this.enableCulling = options.enableCulling ?? false;
    this.enableDebugGizmos = options.enableDebugGizmos ?? true;
    this.stats = {
      totalObjects: 0,
      renderedObjects: 0,
      culledObjects: 0,
      drawCalls: 0
    };
    if (autoFit) {
      this.autoFitEnabled = true;
    }
  }
  onInstall(host) {
    this.delegateTo(host, [
      "setRenderGroups",
      "clearRenderGroups",
      "prependRenderGroup",
      "appendRenderGroup",
      "removeRenderGroup",
      "setUniform",
      "getUniform",
      "getPass",
      "addPostPass",
      "removePostPass",
      "registerShaderEffect"
    ]);
  }
  registerRenderer(renderer) {
    const context = {
      gl: this.gl,
      spriteProgram: this.spriteProgram,
      primitiveProgram: this.primitiveProgram,
      textureManager: this.textureManager,
      shaderEffectRegistry: __privateGet(this, _shaderEffectRegistry2)
    };
    renderer.init(context);
    for (const ObjectClass of renderer.constructor.handles) {
      __privateGet(this, _rendererRegistry).set(ObjectClass, renderer);
    }
    if (!__privateGet(this, _renderers).includes(renderer)) {
      __privateGet(this, _renderers).push(renderer);
    }
    return this;
  }
  unregisterRenderer(renderer) {
    for (const ObjectClass of renderer.constructor.handles) {
      if (__privateGet(this, _rendererRegistry).get(ObjectClass) === renderer) {
        __privateGet(this, _rendererRegistry).delete(ObjectClass);
      }
    }
    const index = __privateGet(this, _renderers).indexOf(renderer);
    if (index !== -1) {
      __privateGet(this, _renderers).splice(index, 1);
    }
    renderer.dispose();
    return this;
  }
  applyPixelRatio() {
    super.applyPixelRatio();
    if (this.gl) {
      this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    }
    if (this.postProcessor) {
      this.postProcessor.resize(this.canvas.width, this.canvas.height);
    }
  }
  get shaderRegistry() {
    return __privateGet(this, _shaderRegistry3);
  }
  get shaderEffectRegistry() {
    return __privateGet(this, _shaderEffectRegistry2);
  }
  registerShaderEffect(EffectClass) {
    return __privateGet(this, _shaderEffectRegistry2).register(EffectClass);
  }
  setUniform(name, value, type = null) {
    __privateGet(this, _shaderEffectRegistry2).setUniform(name, value, type);
    return this;
  }
  getUniform(name) {
    return __privateGet(this, _shaderEffectRegistry2).getUniform(name);
  }
  registerShader(id, definition) {
    return __privateGet(this, _shaderRegistry3).register(id, definition);
  }
  getShader(id) {
    return __privateGet(this, _shaderRegistry3).get(id);
  }
  addPostPass(PassClass, options = {}) {
    const pass = this.create(PassClass, options);
    this.postProcessor.addPass(pass);
    return pass;
  }
  removePostPass(pass) {
    this.removeChild(pass.$id);
    this.postProcessor.removePass(pass);
    return this;
  }
  getPass(name) {
    return this.getChild(name);
  }
  get postPasses() {
    return this.childrenByCategory("renderPass");
  }
  setRenderGroups(configs) {
    this.clearRenderGroups();
    for (const config of configs) {
      this.appendRenderGroup(config);
    }
    return this;
  }
  clearRenderGroups() {
    for (const group of __privateGet(this, _renderGroupOrder)) {
      this.removeChild(group.$id);
    }
    __privateSet(this, _renderGroupOrder, []);
    return this;
  }
  get renderGroups() {
    return __privateGet(this, _renderGroupOrder);
  }
  prependRenderGroup(config) {
    __privateMethod(this, _WebGLRenderer_instances, ensureCompositeSetup_fn).call(this);
    const group = this.create(RenderGroup, config);
    __privateGet(this, _renderGroupOrder).unshift(group);
    return group;
  }
  appendRenderGroup(config) {
    __privateMethod(this, _WebGLRenderer_instances, ensureCompositeSetup_fn).call(this);
    const group = this.create(RenderGroup, config);
    __privateGet(this, _renderGroupOrder).push(group);
    return group;
  }
  removeRenderGroup(groupOrId) {
    const id = typeof groupOrId === "string" ? groupOrId : groupOrId.$id;
    const index = __privateGet(this, _renderGroupOrder).findIndex((g) => g.$id === id);
    if (index !== -1) {
      __privateGet(this, _renderGroupOrder).splice(index, 1);
      this.removeChild(id);
    }
    return this;
  }
  onDispose() {
    for (const renderer of __privateGet(this, _renderers)) {
      renderer.dispose();
    }
    __privateSet(this, _renderers, []);
    __privateGet(this, _rendererRegistry).clear();
    if (__privateGet(this, _debugGizmoRenderer)) {
      __privateGet(this, _debugGizmoRenderer).dispose();
      __privateSet(this, _debugGizmoRenderer, null);
    }
    this.clearRenderGroups();
    if (__privateGet(this, _compositeQuad)) {
      __privateGet(this, _compositeQuad).dispose(this.gl);
      __privateSet(this, _compositeQuad, null);
    }
    if (__privateGet(this, _shaderEffectRegistry2)) {
      __privateGet(this, _shaderEffectRegistry2).dispose();
      __privateSet(this, _shaderEffectRegistry2, null);
    }
    if (__privateGet(this, _shaderRegistry3)) {
      __privateGet(this, _shaderRegistry3).dispose();
      __privateSet(this, _shaderRegistry3, null);
    }
    super.onDispose();
    this.gl = null;
  }
  render(scene) {
    if (this.renderGroups.length > 0 && !scene) {
      return __privateMethod(this, _WebGLRenderer_instances, renderWithGroups_fn).call(this);
    }
    return __privateMethod(this, _WebGLRenderer_instances, renderSingleScene_fn).call(this, scene);
  }
}
_rendererRegistry = new WeakMap();
_renderers = new WeakMap();
_shaderRegistry3 = new WeakMap();
_shaderEffectRegistry2 = new WeakMap();
_debugGizmoRenderer = new WeakMap();
_compositeQuad = new WeakMap();
_compositeProgram = new WeakMap();
_renderGroupOrder = new WeakMap();
_WebGLRenderer_instances = new WeakSet();
setupWebGL_fn = function() {
  this.gl = this.canvas.getContext("webgl2", {
    alpha: true,
    premultipliedAlpha: false,
    antialias: true,
    preserveDrawingBuffer: false
  });
  if (!this.gl) {
    throw new Error("WebGL2 not supported");
  }
  const gl = this.gl;
  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
  __privateSet(this, _shaderRegistry3, new ShaderRegistry(gl));
  __privateSet(this, _shaderEffectRegistry2, new ShaderEffectRegistry(gl, __privateGet(this, _shaderRegistry3)));
  __privateMethod(this, _WebGLRenderer_instances, setupBuiltinShaders_fn).call(this);
  this.create(WebGLTextureManager, {
    $bind: "textureManager",
    gl
  });
  this.create(PostProcessor, {
    gl,
    shaderRegistry: __privateGet(this, _shaderRegistry3),
    width: this.canvas.width,
    height: this.canvas.height
  });
};
setupBuiltinShaders_fn = function() {
  this.spriteProgram = __privateGet(this, _shaderRegistry3).register("sprite", SPRITE_SHADER_DEF);
  this.primitiveProgram = __privateGet(this, _shaderRegistry3).register("primitive", PRIMITIVE_SHADER_DEF);
  __privateGet(this, _shaderRegistry3).setDefault("sprite", "sprite");
  __privateGet(this, _shaderRegistry3).setDefault("primitive", "primitive");
};
setupDefaultRenderers_fn = function() {
  this.registerRenderer(new WebGLSpriteRenderer());
  this.registerRenderer(new WebGLCircleRenderer());
  this.registerRenderer(new WebGLRectangleRenderer());
  __privateSet(this, _debugGizmoRenderer, new WebGLDebugGizmoRenderer());
  __privateGet(this, _debugGizmoRenderer).init({
    gl: this.gl,
    spriteProgram: this.spriteProgram,
    primitiveProgram: this.primitiveProgram,
    textureManager: this.textureManager,
    shaderEffectRegistry: __privateGet(this, _shaderEffectRegistry2)
  });
};
ensureCompositeSetup_fn = function() {
  if (!__privateGet(this, _compositeProgram)) {
    __privateMethod(this, _WebGLRenderer_instances, setupCompositeShader_fn).call(this);
  }
  if (!__privateGet(this, _compositeQuad)) {
    __privateSet(this, _compositeQuad, new FullscreenQuad(this.gl));
  }
};
setupCompositeShader_fn = function() {
  const COMPOSITE_SHADER_DEF = {
    vertex: `#version 300 es
                in vec2 aPosition;
                in vec2 aTexCoord;
                out vec2 vTexCoord;
                void main() {
                    gl_Position = vec4(aPosition, 0.0, 1.0);
                    vTexCoord = aTexCoord;
                }
            `,
    fragment: `#version 300 es
                precision mediump float;
                uniform sampler2D uTexture;
                uniform float uOpacity;
                in vec2 vTexCoord;
                out vec4 fragColor;
                void main() {
                    vec4 color = texture(uTexture, vTexCoord);

                    float alpha = color.a * uOpacity;
                    fragColor = vec4(color.rgb * uOpacity, alpha);
                }
            `,
    uniforms: ["uTexture", "uOpacity"],
    attributes: ["aPosition", "aTexCoord"]
  };
  __privateSet(this, _compositeProgram, __privateGet(this, _shaderRegistry3).register("_composite", COMPOSITE_SHADER_DEF));
};
getMatrices_fn = function() {
  const w = this.canvas.width;
  const h = this.canvas.height;
  const ppu = this.camera.pixelsPerUnit * this.pixelRatio;
  const projectionMatrix = [
    2 / w,
    0,
    0,
    0,
    2 / h,
    0,
    -1,
    -1,
    1
  ];
  const viewMatrix = [
    ppu,
    0,
    0,
    0,
    ppu,
    0,
    w / 2 - this.camera.x * ppu,
    h / 2 - this.camera.y * ppu,
    1
  ];
  return { projectionMatrix, viewMatrix };
};
renderSingleScene_fn = function(scene) {
  __privateMethod(this, _WebGLRenderer_instances, resetStats_fn).call(this);
  const usePostProcessing = this.postProcessor.begin();
  __privateMethod(this, _WebGLRenderer_instances, clearWithBackground_fn).call(this);
  this.camera.update();
  const matrices = __privateMethod(this, _WebGLRenderer_instances, getMatrices_fn).call(this);
  scene.updateWorldMatrix(false);
  for (const renderer of __privateGet(this, _renderers)) {
    renderer.reset();
  }
  const debugGizmoRenderer = this.enableDebugGizmos ? __privateGet(this, _debugGizmoRenderer) : null;
  if (debugGizmoRenderer) {
    debugGizmoRenderer.reset();
  }
  traverseAndCollect(scene, __privateGet(this, _rendererRegistry), {
    camera: this.camera,
    enableCulling: this.enableCulling,
    stats: this.stats,
    debugGizmoRenderer
  });
  for (const renderer of __privateGet(this, _renderers)) {
    renderer.flush(matrices);
  }
  if (debugGizmoRenderer) {
    debugGizmoRenderer.flush(matrices);
  }
  if (usePostProcessing) {
    this.postProcessor.finish();
  }
};
renderWithGroups_fn = function() {
  __privateMethod(this, _WebGLRenderer_instances, resetStats_fn).call(this);
  this.camera.update();
  const matrices = __privateMethod(this, _WebGLRenderer_instances, getMatrices_fn).call(this);
  __privateMethod(this, _WebGLRenderer_instances, renderGroupsToTextures_fn).call(this, matrices);
  __privateMethod(this, _WebGLRenderer_instances, compositeGroups_fn).call(this);
};
renderGroupsToTextures_fn = function(matrices) {
  for (const group of this.renderGroups) {
    if (group.visible && group.content) {
      __privateMethod(this, _WebGLRenderer_instances, renderGroupToTexture_fn).call(this, group, matrices);
    }
  }
};
renderGroupToTexture_fn = function(group, matrices) {
  var _a;
  const gl = this.gl;
  const fbManager = this.postProcessor.framebufferManager;
  fbManager.getOrCreateBuffer(group.$id);
  fbManager.bindSceneBuffer();
  gl.clearColor(0, 0, 0, 0);
  gl.clear(gl.COLOR_BUFFER_BIT);
  group.content.updateWorldMatrix(false);
  const renderContext = ((_a = group.renderTransform) == null ? void 0 : _a.enabled) ? { transform: group.renderTransform } : null;
  for (const renderer of __privateGet(this, _renderers)) {
    renderer.reset(renderContext);
  }
  const debugGizmoRenderer = this.enableDebugGizmos ? __privateGet(this, _debugGizmoRenderer) : null;
  if (debugGizmoRenderer) {
    debugGizmoRenderer.reset();
  }
  traverseAndCollect(group.content, __privateGet(this, _rendererRegistry), {
    camera: this.camera,
    enableCulling: this.enableCulling,
    stats: this.stats,
    debugGizmoRenderer
  });
  for (const renderer of __privateGet(this, _renderers)) {
    renderer.flush(matrices, renderContext);
  }
  if (debugGizmoRenderer) {
    debugGizmoRenderer.flush(matrices);
  }
  fbManager.resolveToBuffer(group.$id);
  if (group.hasActivePasses()) {
    __privateMethod(this, _WebGLRenderer_instances, applyGroupPasses_fn).call(this, group);
  }
};
compositeGroups_fn = function() {
  const hasGlobalPostProcessing = this.postProcessor.hasActivePasses();
  const fbManager = this.postProcessor.framebufferManager;
  if (hasGlobalPostProcessing) {
    fbManager.bindSceneBuffer();
  } else {
    fbManager.bindScreen();
  }
  __privateMethod(this, _WebGLRenderer_instances, clearWithBackground_fn).call(this);
  __privateMethod(this, _WebGLRenderer_instances, drawAllGroups_fn).call(this);
  this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
  if (hasGlobalPostProcessing) {
    this.postProcessor.finish();
  }
};
drawAllGroups_fn = function() {
  const gl = this.gl;
  const fbManager = this.postProcessor.framebufferManager;
  __privateGet(this, _compositeProgram).use();
  gl.activeTexture(gl.TEXTURE0);
  __privateGet(this, _compositeProgram).setUniform1i("uTexture", 0);
  for (const group of this.renderGroups) {
    if (!group.visible || !group.content) {
      continue;
    }
    const texture = fbManager.getBufferTexture(group.$id);
    if (texture) {
      __privateMethod(this, _WebGLRenderer_instances, drawGroup_fn).call(this, group, texture);
    }
  }
};
drawGroup_fn = function(group, texture) {
  const gl = this.gl;
  __privateMethod(this, _WebGLRenderer_instances, applyBlendMode_fn).call(this, group.blendMode);
  __privateGet(this, _compositeProgram).setUniform1f("uOpacity", group.opacity);
  gl.bindTexture(gl.TEXTURE_2D, texture);
  __privateGet(this, _compositeQuad).draw(gl, __privateGet(this, _compositeProgram));
};
resetStats_fn = function() {
  this.stats.totalObjects = 0;
  this.stats.renderedObjects = 0;
  this.stats.culledObjects = 0;
  this.stats.drawCalls = 0;
};
clearWithBackground_fn = function() {
  const gl = this.gl;
  if (this.backgroundColor && this.backgroundColor !== "transparent") {
    const color = parseColor(this.backgroundColor);
    gl.clearColor(color.r, color.g, color.b, color.a);
  } else {
    gl.clearColor(0, 0, 0, 0);
  }
  gl.clear(gl.COLOR_BUFFER_BIT);
};
applyGroupPasses_fn = function(group) {
  const gl = this.gl;
  const fbManager = this.postProcessor.framebufferManager;
  const activePasses = group.postPasses.filter((pass) => pass.enabled);
  if (activePasses.length === 0) {
    return;
  }
  gl.disable(gl.BLEND);
  fbManager.resetPingPong();
  fbManager.bindPingPong();
  gl.clearColor(0, 0, 0, 0);
  gl.clear(gl.COLOR_BUFFER_BIT);
  __privateGet(this, _compositeProgram).use();
  gl.activeTexture(gl.TEXTURE0);
  gl.bindTexture(gl.TEXTURE_2D, fbManager.getBufferTexture(group.$id));
  __privateGet(this, _compositeProgram).setUniform1i("uTexture", 0);
  __privateGet(this, _compositeProgram).setUniform1f("uOpacity", 1);
  __privateGet(this, _compositeQuad).draw(gl, __privateGet(this, _compositeProgram));
  let inputTexture = fbManager.swapAndGetTexture();
  for (let i = 0; i < activePasses.length; i++) {
    const isLast = i === activePasses.length - 1;
    if (isLast) {
      fbManager.bindBuffer(group.$id);
    } else {
      fbManager.bindPingPong();
    }
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    activePasses[i].render(gl, inputTexture, __privateGet(this, _compositeQuad));
    if (!isLast) {
      inputTexture = fbManager.swapAndGetTexture();
    }
  }
  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
};
applyBlendMode_fn = function(blendMode) {
  const gl = this.gl;
  const blendFuncs = {
    [BLEND_MODES.additive]: [gl.ONE, gl.ONE],
    [BLEND_MODES.multiply]: [gl.DST_COLOR, gl.ONE_MINUS_SRC_ALPHA],
    [BLEND_MODES.normal]: [gl.ONE, gl.ONE_MINUS_SRC_ALPHA]
  };
  const [src, dst] = blendFuncs[blendMode] || blendFuncs[BLEND_MODES.normal];
  gl.blendFunc(src, dst);
};
__publicField(WebGLRenderer, "$name", "webGLRenderer");
export {
  RenderGroup as R,
  WebGLRenderer as W,
  WebGLTextureManager as a
};
