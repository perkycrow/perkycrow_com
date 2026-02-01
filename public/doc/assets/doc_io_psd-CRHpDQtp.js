import { d as doc, t as text, s as section, c as code } from "./runtime-DOmi4lo7.js";
import { p as parsePsd, l as layerToRGBA } from "./psd-Bk5qgwWq.js";
import "./binary_reader-CGN852Tr.js";
const psd_doc = doc("PSD Parser", { advanced: true }, () => {
  text(`
        Photoshop file parser. Reads the binary PSD format, extracts layers with
        pixel data, and builds a tree of groups and layers. Also detects ICC color
        profiles. Used by [[PsdConverter@io]] to drive the PSD-to-spritesheet pipeline.
    `);
  section("parsePsd", () => {
    text(`
            Parses a PSD file from a Uint8Array. Returns width, height, color mode,
            color profile, flat layer list, tree structure, and detected animations.
        `);
    code("Basic usage", () => {
      const psd2 = parsePsd(new Uint8Array(buffer));
      psd2.width;
      psd2.height;
      psd2.colorMode;
      psd2.colorProfile;
      psd2.layers;
      psd2.tree;
      psd2.animations;
    });
  });
  section("layerToRGBA", () => {
    text(`
            Converts a layer's channel data into an RGBA pixel buffer. By default
            produces a full-size image matching the PSD dimensions. Pass \`trim: true\`
            to get a tightly-cropped result with offset coordinates.
        `);
    code("Full-size output", () => {
      const rgba = layerToRGBA(layer, psd.width, psd.height);
      rgba.pixels;
      rgba.width;
      rgba.height;
    });
    code("Trimmed output", () => {
      const rgba = layerToRGBA(layer, psd.width, psd.height, { trim: true });
      rgba.pixels;
      rgba.width;
      rgba.height;
      rgba.left;
      rgba.top;
    });
  });
  section("Layer Tree", () => {
    text(`
            The tree structure mirrors PSD groups. Groups named \`anim - idle\`,
            \`anim - run\`, etc. are detected as animation groups. Frame layers
            inside are sorted numerically by name.
        `);
    code("Tree structure", () => {
      psd.tree[0].type;
      psd.tree[0].name;
      psd.tree[0].children;
    });
  });
});
export {
  psd_doc as default
};
