var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var _perm, _gradP;
import { d as doc, t as text, c as code, s as section, a as action, l as logger } from "./runtime-DOmi4lo7.js";
class Noise {
  constructor(seed = 0) {
    __privateAdd(this, _perm, []);
    __privateAdd(this, _gradP, []);
    this.seed(seed);
  }
  seed(seed) {
    const p = buildPermutation(seed);
    __privateSet(this, _perm, new Array(512));
    __privateSet(this, _gradP, new Array(512));
    for (let i = 0; i < 256; i++) {
      __privateGet(this, _perm)[i] = p[i];
      __privateGet(this, _perm)[i + 256] = p[i];
      __privateGet(this, _gradP)[i] = GRAD3[p[i] % 12];
      __privateGet(this, _gradP)[i + 256] = GRAD3[p[i] % 12];
    }
    return this;
  }
  perlin(x, y = 0, z = 0) {
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;
    const Z = Math.floor(z) & 255;
    x -= Math.floor(x);
    y -= Math.floor(y);
    z -= Math.floor(z);
    const u = fade(x);
    const v = fade(y);
    const w = fade(z);
    const A = __privateGet(this, _perm)[X] + Y;
    const AA = __privateGet(this, _perm)[A] + Z;
    const AB = __privateGet(this, _perm)[A + 1] + Z;
    const B = __privateGet(this, _perm)[X + 1] + Y;
    const BA = __privateGet(this, _perm)[B] + Z;
    const BB = __privateGet(this, _perm)[B + 1] + Z;
    return lerp(
      lerp(
        lerp(
          dot(__privateGet(this, _gradP)[AA], x, y, z),
          dot(__privateGet(this, _gradP)[BA], x - 1, y, z),
          u
        ),
        lerp(
          dot(__privateGet(this, _gradP)[AB], x, y - 1, z),
          dot(__privateGet(this, _gradP)[BB], x - 1, y - 1, z),
          u
        ),
        v
      ),
      lerp(
        lerp(
          dot(__privateGet(this, _gradP)[AA + 1], x, y, z - 1),
          dot(__privateGet(this, _gradP)[BA + 1], x - 1, y, z - 1),
          u
        ),
        lerp(
          dot(__privateGet(this, _gradP)[AB + 1], x, y - 1, z - 1),
          dot(__privateGet(this, _gradP)[BB + 1], x - 1, y - 1, z - 1),
          u
        ),
        v
      ),
      w
    );
  }
  perlin2d(x, y) {
    return this.perlin(x, y, 0);
  }
  fbm(x, y, { octaves = 4, lacunarity = 2, persistence = 0.5 } = {}) {
    let value = 0;
    let amplitude = 1;
    let frequency = 1;
    let maxValue = 0;
    for (let i = 0; i < octaves; i++) {
      value += this.perlin2d(x * frequency, y * frequency) * amplitude;
      maxValue += amplitude;
      amplitude *= persistence;
      frequency *= lacunarity;
    }
    return value / maxValue;
  }
}
_perm = new WeakMap();
_gradP = new WeakMap();
const GRAD3 = [
  [1, 1, 0],
  [-1, 1, 0],
  [1, -1, 0],
  [-1, -1, 0],
  [1, 0, 1],
  [-1, 0, 1],
  [1, 0, -1],
  [-1, 0, -1],
  [0, 1, 1],
  [0, -1, 1],
  [0, 1, -1],
  [0, -1, -1]
];
function fade(t) {
  return t * t * t * (t * (t * 6 - 15) + 10);
}
function lerp(a, b, t) {
  return a + t * (b - a);
}
function dot(grad, x, y, z) {
  return grad[0] * x + grad[1] * y + grad[2] * z;
}
function buildPermutation(seed) {
  const p = [];
  for (let i = 0; i < 256; i++) {
    p[i] = i;
  }
  let n = seed;
  for (let i = 255; i > 0; i--) {
    n = n * 16807 % 2147483647;
    const j = n % (i + 1);
    const tmp = p[i];
    p[i] = p[j];
    p[j] = tmp;
  }
  return p;
}
const noise_doc = doc("Noise", () => {
  text(`
        Seedable Perlin noise generator.
        Supports 2D/3D noise and fractional Brownian motion (fbm).
    `);
  code("Creation", () => {
    new Noise(42);
    new Noise();
  });
  section("perlin", () => {
    text("Generates 3D Perlin noise. The y and z parameters default to 0.");
    action("2D noise", () => {
      const noise = new Noise(42);
      logger.log("perlin(1.5, 2.3):", noise.perlin(1.5, 2.3));
      logger.log("perlin(0.5, 0.5):", noise.perlin(0.5, 0.5));
      logger.log("perlin(3.0, 1.0):", noise.perlin(3, 1));
    });
    action("3D noise", () => {
      const noise = new Noise(42);
      logger.log("perlin(1.5, 2.3, 0.7):", noise.perlin(1.5, 2.3, 0.7));
      logger.log("perlin(0.5, 0.5, 0.5):", noise.perlin(0.5, 0.5, 0.5));
    });
  });
  section("perlin2d", () => {
    text("Shorthand for `perlin(x, y, 0)`.");
    action("Example", () => {
      const noise = new Noise(42);
      logger.log("perlin2d(1.5, 2.3):", noise.perlin2d(1.5, 2.3));
      logger.log("perlin(1.5, 2.3, 0):", noise.perlin(1.5, 2.3, 0));
      logger.log("Same result");
    });
  });
  section("fbm", () => {
    text(`
            Fractional Brownian motion. Layers multiple octaves of Perlin noise
            for more natural-looking results.
        `);
    action("Default parameters", () => {
      const noise = new Noise(42);
      logger.log("fbm(1.5, 2.3):", noise.fbm(1.5, 2.3));
    });
    action("Custom parameters", () => {
      const noise = new Noise(42);
      logger.log("1 octave:", noise.fbm(1.5, 2.3, { octaves: 1 }));
      logger.log("4 octaves:", noise.fbm(1.5, 2.3, { octaves: 4 }));
      logger.log("8 octaves:", noise.fbm(1.5, 2.3, { octaves: 8 }));
    });
  });
  section("seed", () => {
    text("Reseeds the generator. Same seed produces the same noise values.");
    action("Reproducibility", () => {
      const noise = new Noise(42);
      logger.log("seed 42:", noise.perlin2d(1, 1));
      noise.seed(99);
      logger.log("seed 99:", noise.perlin2d(1, 1));
      noise.seed(42);
      logger.log("seed 42 again:", noise.perlin2d(1, 1));
    });
  });
});
export {
  noise_doc as default
};
