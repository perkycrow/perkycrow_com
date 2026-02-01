import { d as doc, t as text, s as section, a as action, l as logger } from "./runtime-DOmi4lo7.js";
import { S as ServiceRequest } from "./service_request-DR80oy2k.js";
const service_request_doc = doc("ServiceRequest", () => {
  text(`
        Data class representing an RPC request. Has an \`id\`, \`action\`, \`params\`,
        and \`timestamp\`. Created by the client — you rarely instantiate these directly.
    `);
  section("Creating a Request", () => {
    text("A request is created with an action name and optional parameters.");
    action("Constructor", () => {
      const request = new ServiceRequest("greet", { name: "Perky" });
      logger.log("action:", request.action);
      logger.log("params:", request.params);
      logger.log("id:", request.id);
      logger.log("timestamp:", request.timestamp);
    });
  });
  section("Serialization", () => {
    text(`
            Use \`export()\` to serialize a request for transport,
            and \`ServiceRequest.import()\` to reconstruct it on the other side.
        `);
    action("export / import", () => {
      const original = new ServiceRequest("save", { slot: 1 });
      const data = original.export();
      logger.log("exported:", data);
      const restored = ServiceRequest.import(data);
      logger.log("restored action:", restored.action);
      logger.log("restored params:", restored.params);
      logger.log("same id:", original.id === restored.id);
    });
  });
});
export {
  service_request_doc as default
};
