import { d as doc, t as text, s as section, c as code } from "./runtime-DOmi4lo7.js";
const launcher_doc = doc("Animator Launcher", { advanced: true }, () => {
  text(`
        Entry point for the animator studio. Loads a game manifest, resolves
        the target animator (from the game or from IndexedDB), and mounts
        an [[AnimatorView@studio/animator]] into the given container.
    `);
  section("launchAnimatorStudio", () => {
    text(`
            Async function that orchestrates the full startup sequence: load
            the manifest, build the texture system, find the requested animator,
            and create the editor view. Supports both game animators and custom
            animators stored in [[PerkyStore@io]].
        `);
    code("Usage", () => {
      launchAnimatorStudio(manifestData, container, {
        basePath: "../",
        animatorId: "playerAnimator"
      });
      launchAnimatorStudio(manifestData, container, {
        animatorId: "myCustomAnimator",
        isCustom: true
      });
    });
  });
});
export {
  launcher_doc as default
};
