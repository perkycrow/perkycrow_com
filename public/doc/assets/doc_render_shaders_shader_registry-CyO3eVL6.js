import { d as doc, t as text, s as section, c as code } from "./runtime-DOmi4lo7.js";
import { S as ShaderRegistry } from "./shader_registry-BAQG-ymA.js";
import "./shader_program-CRf-39vH.js";
const shader_registry_doc = doc("ShaderRegistry", { advanced: true }, () => {
  text(`
        Central registry for compiled shader programs. Registers shaders by ID,
        compiles them via [[ShaderProgram@render/shaders]], and maps object types
        to default shaders.
    `);
  section("Registering Shaders", () => {
    text(`
            Call \`register()\` with an ID and a descriptor containing vertex/fragment
            source, plus the names of uniforms and attributes to cache.
        `);
    code("Register a shader", () => {
      const registry = new ShaderRegistry(gl);
      registry.register("sprite", {
        vertex: vertexSource,
        fragment: fragmentSource,
        uniforms: ["uProjectionMatrix", "uViewMatrix", "uTexture"],
        attributes: ["aPosition", "aTexCoord"]
      });
      const program = registry.get("sprite");
      program.use();
    });
  });
  section("Default Shaders", () => {
    text(`
            Map object types to default shader IDs. The renderer uses this to
            pick the right shader for each object type automatically.
        `);
    code("Set and get defaults", () => {
      const registry = new ShaderRegistry(gl);
      registry.register("sprite", { vertex: vs, fragment: fs, uniforms: [], attributes: [] });
      registry.register("primitive", { vertex: vs2, fragment: fs2, uniforms: [], attributes: [] });
      registry.setDefault("sprite", "sprite");
      registry.setDefault("primitive", "primitive");
      registry.getDefault("sprite");
    });
  });
  section("Unregister and Dispose", () => {
    text(`
            \`unregister(id)\` disposes a single program and removes it from defaults.
            \`dispose()\` cleans up everything.
        `);
    code("Clean up", () => {
      const registry = new ShaderRegistry(gl);
      registry.register("temp", { vertex: vs, fragment: fs, uniforms: [], attributes: [] });
      registry.unregister("temp");
      registry.dispose();
    });
  });
});
export {
  shader_registry_doc as default
};
