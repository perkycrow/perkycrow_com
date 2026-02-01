import { d as doc, t as text, c as code } from "./runtime-DOmi4lo7.js";
const service_worker_doc = doc("ServiceWorker", () => {
  text(`
        Web Worker bootstrap script. Receives an \`init-service\` message,
        dynamically imports the service class, and instantiates it.
        Used internally by \`ServiceClient.fromWorker()\`.
    `);
  code("How it works", () => {
    ServiceClient.fromWorker("./my_service.js");
  });
});
export {
  service_worker_doc as default
};
