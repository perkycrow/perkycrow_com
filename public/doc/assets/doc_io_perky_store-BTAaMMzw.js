import { d as doc, t as text, s as section, c as code } from "./runtime-DOmi4lo7.js";
const perky_store_doc = doc("PerkyStore", { advanced: true }, () => {
  text(`
        IndexedDB wrapper for persistent resource storage. Each resource is packed into a
        compressed blob with metadata using [[Pack@pack]]. Used by Studio to save and
        manage custom assets like animators and spritesheets.
    `);
  section("Usage", () => {
    code("Basic workflow", async () => {
      const store2 = new PerkyStore();
      await store2.save("playerAnimator", {
        type: "animator",
        name: "player",
        files: [
          { name: "playerAnimator.json", blob: jsonBlob },
          { name: "playerSpritesheet.json", blob: sheetBlob },
          { name: "player.png", blob: pngBlob }
        ]
      });
      const resource = await store2.get("playerAnimator");
      resource.id;
      resource.type;
      resource.files;
      await store2.list();
      await store2.list("animator");
    });
  });
  section("Saving and Retrieving", () => {
    text(`
            Resources are stored as compressed blobs in IndexedDB. Each resource requires
            a \`type\` and contains one or more files. The store adds a \`meta.json\` internally
            for tracking metadata.
        `);
    code("save and get", async () => {
      await store.save("heroAnimator", {
        type: "animator",
        name: "hero",
        files: [{ name: "heroAnimator.json", blob: configBlob }]
      });
      const resource = await store.get("heroAnimator");
      resource.name;
      resource.createdAt;
      resource.updatedAt;
    });
  });
  section("Listing", () => {
    text("List all resources or filter by type.");
    code("List resources", async () => {
      await store.list();
      await store.list("animator");
    });
  });
  section("Import and Export", () => {
    text(`
            Export downloads a \`.perky\` file. Import reads one back in.
            The \`.perky\` format is a gzip-compressed bundle created by [[Pack@pack]].
        `);
    code("Export and import", async () => {
      await store.export("playerAnimator");
      const result = await store.import(file);
      result.id;
      result.type;
      result.name;
    });
  });
  section("Deleting", () => {
    text("Remove a resource by its id.");
    code("Delete a resource", async () => {
      await store.delete("playerAnimator");
    });
  });
});
export {
  perky_store_doc as default
};
