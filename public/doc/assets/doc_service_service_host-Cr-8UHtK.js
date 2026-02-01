import { d as doc, t as text, s as section, a as action, l as logger, c as code } from "./runtime-DOmi4lo7.js";
import { S as ServiceHost } from "./service_host-B0f4Z5GC.js";
import { S as ServiceTransport } from "./service_transport-Yf7lhcDW.js";
import "./action_controller-DyFDDS26.js";
import "./service_request-DR80oy2k.js";
import "./service_response-D6BAd4n_.js";
import "./perky_module-DrWJO8l1.js";
import "./registry-CF_H4IOw.js";
import "./observable_map-BPZFGUWq.js";
import "./observable_set-BOSKLaPv.js";
import "./utils-DVCexGPz.js";
import "./inflector-BxOpyWLP.js";
const service_host_doc = doc("ServiceHost", () => {
  text(`
        Receives requests and dispatches them to registered handlers.
        Express-style \`(req, res)\` API. Extends PerkyModule.
    `);
  section("Registering Handlers", () => {
    text("Use `register()` to add request handlers by action name.");
    action("register", () => {
      const host = new ServiceHost({
        transport: ServiceTransport.local()
      });
      host.register("greet", (req, res) => {
        res.send(`Hello ${req.params.name}`);
      });
      host.register("add", (req, res) => {
        res.send(req.params.a + req.params.b);
      });
      logger.log("actions registered:", [...host.actions.keys()]);
    });
  });
  section("Subclass with serviceMethods", () => {
    text(`
            Extend ServiceHost and declare \`static serviceMethods\` to
            automatically register class methods as handlers.
        `);
    code("serviceMethods", () => {
    });
  });
  section("Unregistering", () => {
    text("Use `unregister()` to remove a handler.");
    action("unregister", () => {
      const host = new ServiceHost({
        transport: ServiceTransport.local()
      });
      host.register("temp", (req, res) => res.send("ok"));
      logger.log("before:", [...host.actions.keys()]);
      host.unregister("temp");
      logger.log("after:", [...host.actions.keys()]);
    });
  });
  section("Events from Client", () => {
    text(`
            Events sent by the client arrive as \`client:eventName\`.
            Use \`emitToClient()\` to send events back.
        `);
    code("Event handling", () => {
      const host = new ServiceHost();
      host.on("client:ping", () => {
        host.emitToClient("pong");
      });
    });
  });
});
export {
  service_host_doc as default
};
