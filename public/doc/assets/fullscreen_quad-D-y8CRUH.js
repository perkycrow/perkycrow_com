var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _vertexBuffer, _texCoordBuffer, _FullscreenQuad_instances, createBuffers_fn;
import { l as logger } from "./runtime-DOmi4lo7.js";
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
export {
  FullscreenQuad as F
};
