import { d as doc, t as text, s as section, c as code } from "./runtime-DOmi4lo7.js";
const api_parser_doc = doc("Api Parser", { advanced: true }, () => {
  text(`
        Parses JavaScript source files using Acorn to extract structured API metadata.
        Produces class, method, getter, setter, and function information for the API tab.
    `);
  section("parseSourceFile", () => {
    text(`
            Parses a source string into an AST and extracts all exported classes, functions, and variables.
            Returns an object with arrays of classes, functions, and exports.
        `);
    code("Basic usage", () => {
      const result = parseSourceFile(`
                export default class Player {
                    constructor(name) {}
                    get health() {}
                    move(x, y) {}
                }
            `);
      result.classes[0].name;
      result.classes[0].methods;
      result.classes[0].getters;
      result.classes[0].constructor;
    });
    code("Functions and variables", () => {
      const result = parseSourceFile(`
                export function createEnemy(type) {}
                export const MAX_HEALTH = 100
            `);
      result.functions[0].name;
      result.functions[0].params;
      result.exports[0].name;
    });
  });
  section("getApiForFile", () => {
    text(`
            Higher-level wrapper around parseSourceFile.
            Returns a simplified result typed as either "class" or "module" depending on the source content.
        `);
    code("Single class file", () => {
      const api = getApiForFile(source, "/core/player.js");
      api.type;
      api.name;
    });
    code("Multi-export file", () => {
      const api = getApiForFile(source, "/core/utils.js");
      api.type;
      api.functions;
      api.exports;
    });
  });
  section("Class Parsing", () => {
    text(`
            Classes are parsed into structured metadata including inheritance,
            constructors, methods, getters, setters, and static members.
            Private members (# prefix) are excluded.
        `);
    code("Result structure", () => {
    });
  });
});
export {
  api_parser_doc as default
};
