import { d as doc, t as text, s as section, c as code, a as action, l as logger, b as container, g as see, h as disclaimer } from "./runtime-DOmi4lo7.js";
const runtime_doc = doc("Doc Runtime", { advanced: true }, () => {
  text(`
        The documentation DSL for writing interactive Perky docs.
        Define documentation pages using composable blocks like text, code, actions, and containers.
    `);
  section("Document Structure", () => {
    text(`
            A doc starts with the doc() function and contains blocks.
            Blocks can be organized into sections for better navigation.
        `);
    code("Basic document", () => {
      doc("My Module", () => {
        text("Introduction to the module.");
      });
      doc("My Module", () => {
        text("Another example.");
      });
    });
    code("Using sections", () => {
      doc("My Module", () => {
        section("Overview", () => {
          text("First section content.");
        });
        section("Usage", () => {
          text("Second section content.");
        });
      });
    });
  });
  section("Text Blocks", () => {
    text(`
            Text blocks render markdown content.
            Multi-line strings are automatically dedented.
        `);
    code("text()", () => {
      text("Simple paragraph.");
      text(`
                Multi-line content with automatic dedent.
                Supports **markdown** formatting.
            `);
    });
    code("disclaimer()", () => {
      disclaimer("This feature is experimental.");
    });
  });
  section("Code Blocks", () => {
    text(`
            Code blocks display syntax-highlighted JavaScript.
            The source is extracted from the function body.
        `);
    code("Static code", () => {
      code("Example", () => {
        const x = 1;
        const y = 2;
        return x + y;
      });
    });
    code("Code with title", () => {
      code("Configuration", () => {
      });
    });
  });
  section("Actions", () => {
    text(`
            Actions are executable code blocks with a "Run" button.
            Use these for interactive demonstrations.
        `);
    code("action()", () => {
      action("Log message", () => {
        logger.log("Hello from action!");
      });
    });
    action("Live demo", () => {
      logger.log("This is an action block");
      logger.info("Click Run to execute");
    });
  });
  section("Containers", () => {
    text(`
            Containers render interactive DOM content.
            They receive a context object with helper methods.
        `);
    code("Basic container", () => {
      container(() => {
      });
      container({ width: 400, height: 300 }, () => {
      });
    });
    code("Container options", () => {
      container({
        width: 400,
        height: 300,
        title: "Demo",
        preset: "interactive",
        scrollable: true
      }, () => {
      });
    });
    container({ height: 150, preset: "centered" }, (ctx) => {
      const el = document.createElement("div");
      el.textContent = "Container demo";
      el.style.color = "#fff";
      ctx.container.appendChild(el);
    });
  });
  section("Container Context", () => {
    text(`
            The container callback receives a context object with helper methods
            for building interactive UI.
        `);
    code("ctx.container", () => {
      container((ctx) => {
        ctx.container.innerHTML = "<p>Content</p>";
      });
    });
    code("ctx.action()", () => {
      container((ctx) => {
        ctx.action("Option A", () => {
          logger.log("Selected A");
        });
        ctx.action("Option B", () => {
          logger.log("Selected B");
        });
      });
    });
    code("ctx.slider()", () => {
      container((ctx) => {
        ctx.slider("Speed", { min: 0, max: 100, default: 50 }, (value) => {
          logger.log("Speed:", value);
        });
      });
    });
    code("ctx.info() / ctx.display()", () => {
      container((ctx) => {
        ctx.info(() => "Status: Ready");
        ctx.display(() => ["tag1", "tag2"]);
      });
    });
    code("ctx.hint()", () => {
      container((ctx) => {
        ctx.hint("Press arrow keys to move");
      });
    });
  });
  section("Container Presets", () => {
    text(`
            Presets apply common styling configurations.
            Use preset option to quickly style containers.
        `);
    code("Available presets", () => {
    });
    container({ height: 100, preset: "interactive" }, (ctx) => {
      ctx.hint("interactive preset");
    });
    container({ height: 100, preset: "inspector" }, (ctx) => {
      const el = document.createElement("div");
      el.textContent = "inspector preset";
      el.style.color = "#fff";
      ctx.container.appendChild(el);
    });
  });
  section("Cross-References", () => {
    text(`
            Link to other documentation pages with the see() block.
        `);
    code("see()", () => {
      see("Logger");
      see("Logger", { section: "Events" });
      see("Logger", { type: "api" });
      see("Application", { category: "application" });
    });
    see("Logger");
  });
  section("Setup Functions", () => {
    text(`
            Setup functions run before each action/container in a section.
            Useful for initializing shared state.
        `);
    code("setup()", () => {
      section("With Setup", () => {
        setup(() => {
          logger.clear();
        });
        action("First", () => {
          logger.log("Action 1");
        });
        action("Second", () => {
          logger.log("Action 2");
        });
      });
    });
  });
});
export {
  runtime_doc as default
};
