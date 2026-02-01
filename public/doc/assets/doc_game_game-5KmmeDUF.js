import { d as doc, t as text, g as see } from "./runtime-DOmi4lo7.js";
const game_doc = doc("Game", { featured: true }, () => {
  text(`
        Game extends [[Application@application]] with a game loop, render system,
        textures, and audio built-in. Use [[Stage@game]] to organize your game
        into distinct phases — levels, menus, cutscenes — each with its own
        world and world view.

        It's the standard starting point for most games.
    `);
  see("Application", { category: "application" });
  see("GameLoop", { category: "game" });
  see("Stage", { category: "game" });
});
export {
  game_doc as default
};
