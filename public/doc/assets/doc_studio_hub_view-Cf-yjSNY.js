import { d as doc, t as text, s as section, c as code } from "./runtime-DOmi4lo7.js";
const hub_view_doc = doc("HubView", { advanced: true }, () => {
  text(`
        The main gallery view of the animator studio. Displays all available
        animators (game and custom) as a grid of thumbnail cards. Provides
        import, export, selection, deletion, and conflict resolution. Mounts
        inside an [[AppLayout@editor/layout]] with a [[StorageInfo@studio/components]]
        header widget.
    `);
  section("setContext", () => {
    text(`
            Initializes the hub with the game manifest, animator configs, and
            texture system. Can be called before or after the element connects
            to the DOM.
        `);
    code("Usage", () => {
      const hub = document.createElement("hub-view");
      hub.setContext({
        manifest,
        animators: { playerAnimator: config },
        textureSystem
      });
    });
  });
  section("Animator cards", () => {
    text(`
            Each animator is shown as a card with a thumbnail preview and
            metadata. Cards are labeled by state: "New" for custom-only
            animators, "Modified" for locally changed game animators, and
            no badge for unmodified game animators. A "+" card opens the
            [[PsdImporter@studio/components]] wizard.
        `);
  });
  section("Selection mode", () => {
    text(`
            The "Select" button toggles selection mode, which shows
            checkboxes on custom animator cards. Selected animators can
            be exported as \`.perky\` files, reverted to the game version,
            or deleted from IndexedDB.
        `);
  });
  section("Conflict reconciliation", () => {
    text(`
            On render, the hub compares custom and game versions. If both
            changed independently, it opens the [[ConflictResolver@studio/components]]
            dialog. Synced versions (game is newer or equal) are auto-cleaned
            from local storage.
        `);
  });
});
export {
  hub_view_doc as default
};
