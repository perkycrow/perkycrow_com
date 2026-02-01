import { d as doc, t as text, s as section, a as action, l as logger } from "./runtime-DOmi4lo7.js";
function blobToArrayBuffer(blob) {
  if (typeof blob.arrayBuffer === "function") {
    return blob.arrayBuffer();
  }
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsArrayBuffer(blob);
  });
}
async function compress(blob) {
  if (typeof CompressionStream === "undefined") {
    return blob;
  }
  if (typeof blob.stream !== "function") {
    const buffer = await blobToArrayBuffer(blob);
    const stream2 = new Response(buffer).body.pipeThrough(new CompressionStream("gzip"));
    return new Response(stream2).blob();
  }
  const stream = blob.stream().pipeThrough(new CompressionStream("gzip"));
  return new Response(stream).blob();
}
async function decompress(blob) {
  if (typeof DecompressionStream === "undefined") {
    return blob;
  }
  if (typeof blob.stream !== "function") {
    const buffer = await blobToArrayBuffer(blob);
    const stream2 = new Response(buffer).body.pipeThrough(new DecompressionStream("gzip"));
    return new Response(stream2).blob();
  }
  const stream = blob.stream().pipeThrough(new DecompressionStream("gzip"));
  return new Response(stream).blob();
}
async function pack(files, { compress: shouldCompress = true } = {}) {
  const header = {
    files: files.map((f) => ({
      name: f.name,
      size: f.blob.size,
      type: f.blob.type
    }))
  };
  const headerBytes = new TextEncoder().encode(JSON.stringify(header));
  const headerSize = new Uint32Array([headerBytes.length]);
  const blob = new Blob([headerSize, headerBytes, ...files.map((f) => f.blob)]);
  return shouldCompress ? compress(blob) : blob;
}
async function unpack(blob, { compressed = true } = {}) {
  const data = compressed ? await decompress(blob) : blob;
  const buffer = await blobToArrayBuffer(data);
  const headerSize = new Uint32Array(buffer, 0, 1)[0];
  const headerBytes = new Uint8Array(buffer, 4, headerSize);
  const header = JSON.parse(new TextDecoder().decode(headerBytes));
  let offset = 4 + headerSize;
  return header.files.map((file) => {
    const fileBlob = new Blob([buffer.slice(offset, offset + file.size)], { type: file.type });
    offset += file.size;
    return { name: file.name, blob: fileBlob };
  });
}
const pack_doc = doc("Pack", { advanced: true }, () => {
  text(`
        Binary file packing with gzip compression. Powers the \`.perky\` file format — a header
        with file metadata followed by concatenated blobs. Used by [[PerkyStore@perky_store]] to
        bundle resources for storage and export.
    `);
  section("pack", () => {
    text("Bundles multiple files into a single compressed blob. Each file needs a name and a blob.");
    action("Pack files", async () => {
      const files = [
        { name: "data.json", blob: new Blob(['{"hello":"world"}'], { type: "application/json" }) },
        { name: "readme.txt", blob: new Blob(["Hello"], { type: "text/plain" }) }
      ];
      const packed = await pack(files);
      logger.log("type:", packed.type);
      logger.log("size:", packed.size, "bytes");
    });
    action("Pack without compression", async () => {
      const files = [
        { name: "data.json", blob: new Blob(['{"key":"value"}'], { type: "application/json" }) }
      ];
      const packed = await pack(files, { compress: false });
      logger.log("uncompressed size:", packed.size, "bytes");
    });
  });
  section("unpack", () => {
    text("Extracts files from a packed blob. Returns an array of `{name, blob}` objects.");
    action("Round-trip", async () => {
      const original = [
        { name: "config.json", blob: new Blob(['{"fps":60}'], { type: "application/json" }) },
        { name: "notes.txt", blob: new Blob(["test"], { type: "text/plain" }) }
      ];
      const packed = await pack(original);
      const extracted = await unpack(packed);
      for (const file of extracted) {
        const content = await file.blob.text();
        logger.log(file.name, "→", content);
      }
    });
  });
  section("File Format", () => {
    text(`
            The packed format is straightforward:

            1. A 4-byte uint32 header size
            2. A JSON header with file names, sizes, and MIME types
            3. Concatenated file blobs in order

            The whole thing is then gzip-compressed by default.
        `);
  });
});
export {
  pack_doc as default
};
