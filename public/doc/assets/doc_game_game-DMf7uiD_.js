import { d as doc, t as text, g as see } from "./runtime-COHOMYgI.js";
const game_doc = doc("Game", { context: "game" }, () => {
  text(`
        Game extends [[Application@application]] with a game loop and render system built-in.
        It's the standard starting point for most games.

        *Work in progress.*
    `);
  see("Application", { category: "application" });
  see("GameLoop", { category: "game" });
});
export {
  game_doc as default
};
