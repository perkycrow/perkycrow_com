function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e !== "string" && !Array.isArray(e)) {
      for (const k in e) {
        if (k !== "default" && !(k in n)) {
          const d = Object.getOwnPropertyDescriptor(e, k);
          if (d) {
            Object.defineProperty(n, k, d.get ? d : {
              enumerable: true,
              get: () => e[k]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var browser$2 = {};
var hasRequiredBrowser;
function requireBrowser() {
  if (hasRequiredBrowser) return browser$2;
  hasRequiredBrowser = 1;
  browser$2.createCanvas = function(width, height) {
    return Object.assign(document.createElement("canvas"), { width, height });
  };
  browser$2.createImageData = function(array, width, height) {
    switch (arguments.length) {
      case 0:
        return new ImageData();
      case 1:
        return new ImageData(array);
      case 2:
        return new ImageData(array, width);
      default:
        return new ImageData(array, width, height);
    }
  };
  browser$2.loadImage = function(src, options) {
    return new Promise(function(resolve, reject) {
      const image = Object.assign(document.createElement("img"), options);
      function cleanup() {
        image.onload = null;
        image.onerror = null;
      }
      image.onload = function() {
        cleanup();
        resolve(image);
      };
      image.onerror = function() {
        cleanup();
        reject(new Error('Failed to load the image "' + src + '"'));
      };
      image.src = src;
    });
  };
  return browser$2;
}
var browserExports = requireBrowser();
const browser = /* @__PURE__ */ getDefaultExportFromCjs(browserExports);
const browser$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: browser
}, [browserExports]);
export {
  browser$1 as b
};
