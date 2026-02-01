var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { d as doc, t as text, s as section, a as action, l as logger, c as code } from "./runtime-DOmi4lo7.js";
import { S as ServiceTransport } from "./service_transport-Yf7lhcDW.js";
import { S as ServiceRequest } from "./service_request-DR80oy2k.js";
import { P as PerkyModule } from "./perky_module-DrWJO8l1.js";
import { S as ServiceHost } from "./service_host-B0f4Z5GC.js";
import "./registry-CF_H4IOw.js";
import "./observable_map-BPZFGUWq.js";
import "./observable_set-BOSKLaPv.js";
import "./utils-DVCexGPz.js";
import "./inflector-BxOpyWLP.js";
import "./service_response-D6BAd4n_.js";
const _ServiceClient = class _ServiceClient extends PerkyModule {
  constructor({ transport, target, ...options } = {}) {
    super(options);
    if (transport) {
      this.transport = transport;
    } else if (target) {
      this.transport = ServiceTransport.auto(target);
    } else {
      this.transport = ServiceTransport.auto();
    }
    this.pendingRequests = /* @__PURE__ */ new Map();
    this.transport.onMessage(this.handleMessage.bind(this));
  }
  async request(action2, params = {}, timeout = 5e3) {
    const request = new ServiceRequest(action2, params);
    return new Promise((resolve, reject) => {
      this.pendingRequests.set(request.id, { resolve, reject });
      const timeoutId = setTimeout(() => {
        this.pendingRequests.delete(request.id);
        reject(new Error(`Request timeout for action '${action2}'`));
      }, timeout);
      const originalResolve = this.pendingRequests.get(request.id).resolve;
      const originalReject = this.pendingRequests.get(request.id).reject;
      this.pendingRequests.set(request.id, {
        resolve: (value) => {
          clearTimeout(timeoutId);
          this.pendingRequests.delete(request.id);
          originalResolve(value);
        },
        reject: (error) => {
          clearTimeout(timeoutId);
          this.pendingRequests.delete(request.id);
          originalReject(error);
        }
      });
      this.transport.send({
        type: "service-request",
        request: request.export()
      });
    });
  }
  handleMessage(message) {
    if (message.type === "service-event") {
      this.handleEvent(message);
      return;
    }
    if (message.type !== "service-response") {
      return;
    }
    const response = message.response;
    const pending = this.pendingRequests.get(response.requestId);
    if (!pending) {
      return;
    }
    if (response.success) {
      pending.resolve(response.data);
    } else {
      pending.reject(new Error(response.error));
    }
  }
  handleEvent(message) {
    const { eventName, args, direction } = message;
    if (direction === "host-to-client") {
      this.emit(`host:${eventName}`, ...args);
    }
  }
  emitToHost(eventName, ...args) {
    this.transport.send({
      type: "service-event",
      eventName,
      args,
      direction: "client-to-host"
    });
  }
  static fromWorker(servicePath, config = {}) {
    const workerUrl = new URL("data:text/javascript;base64,aW1wb3J0IGxvZ2dlciBmcm9tICcuLi9jb3JlL2xvZ2dlci5qcycKCgpsZXQgc2VydmljZSA9IG51bGwKCnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGFzeW5jIChldmVudCkgPT4gewogICAgY29uc3Qge3R5cGUsIHNlcnZpY2VQYXRoLCBjb25maWcgPSB7fX0gPSBldmVudC5kYXRhCgogICAgaWYgKHR5cGUgIT09ICdpbml0LXNlcnZpY2UnIHx8IHNlcnZpY2UgIT09IG51bGwpIHsKICAgICAgICByZXR1cm4KICAgIH0KCiAgICB0cnkgewogICAgICAgIGNvbnN0IG1vZHVsZSA9IGF3YWl0IGltcG9ydCgvKiBAdml0ZS1pZ25vcmUgKi8gc2VydmljZVBhdGgpCiAgICAgICAgY29uc3QgU2VydmljZUNsYXNzID0gbW9kdWxlLmRlZmF1bHQgfHwgbW9kdWxlW09iamVjdC5rZXlzKG1vZHVsZSlbMF1dCgogICAgICAgIHNlcnZpY2UgPSBuZXcgU2VydmljZUNsYXNzKGNvbmZpZykKCiAgICB9IGNhdGNoIChlcnJvcikgewogICAgICAgIGxvZ2dlci5lcnJvcignU2VydmljZSBpbml0IGZhaWxlZDonLCBlcnJvci5tZXNzYWdlKQogICAgfQp9KQo=", import.meta.url);
    const worker = new Worker(workerUrl, { type: "module" });
    const client = new _ServiceClient({ target: worker });
    worker.postMessage({
      type: "init-service",
      servicePath,
      config
    });
    return client;
  }
  static async fromService(ServiceClass, config = {}) {
    const [transportA, transportB] = ServiceTransport.pair();
    const serviceHost = new ServiceClass({ ...config, transport: transportA });
    const client = new _ServiceClient({ transport: transportB });
    client.serviceHost = serviceHost;
    return client;
  }
  static async fromPath(servicePath, config = {}) {
    const module = await import(
      /* @vite-ignore */
      servicePath
    );
    const ServiceClass = module.default || Object.values(module).find((value) => {
      return typeof value === "function" && value.prototype;
    });
    return _ServiceClient.fromService(ServiceClass, config);
  }
  static from(options) {
    const { worker, service, path, config = {} } = options;
    const optionCount = [worker, service, path].filter(Boolean).length;
    if (optionCount === 0) {
      throw new Error("ServiceClient.from() requires one of: worker, service, or path");
    }
    if (optionCount > 1) {
      throw new Error("ServiceClient.from() requires exactly one option: worker, service, or path");
    }
    if (worker) {
      return _ServiceClient.fromWorker(worker, config);
    }
    if (service) {
      return _ServiceClient.fromService(service, config);
    }
    return _ServiceClient.fromPath(path, config);
  }
};
__publicField(_ServiceClient, "$category", "serviceClient");
__publicField(_ServiceClient, "$eagerStart", false);
let ServiceClient = _ServiceClient;
const service_client_doc = doc("ServiceClient", () => {
  text(`
        Sends requests and receives responses. Promise-based with configurable timeout.
        Extends PerkyModule.
    `);
  section("Request / Response", () => {
    text(`
            Use \`request()\` to call an action on the host.
            Returns a promise that resolves with the response data.
        `);
    action("Basic request", async () => {
      class EchoService extends ServiceHost {
        echo(req, res) {
          res.send(`echo: ${req.params.message}`);
        }
      }
      __publicField(EchoService, "serviceMethods", ["echo"]);
      const client = await ServiceClient.fromService(EchoService);
      const result = await client.request("echo", { message: "hello" });
      logger.log("result:", result);
    });
  });
  section("Error Handling", () => {
    text("When the host responds with an error, the promise rejects.");
    action("Error response", async () => {
      class FailService extends ServiceHost {
        fail(req, res) {
          res.error("Something went wrong");
        }
      }
      __publicField(FailService, "serviceMethods", ["fail"]);
      const client = await ServiceClient.fromService(FailService);
      try {
        await client.request("fail");
      } catch (error) {
        logger.log("caught:", error.message);
      }
    });
  });
  section("Events", () => {
    text(`
            Use \`emitToHost()\` to send events to the host.
            Listen for host events with \`on('host:eventName')\`.
        `);
    action("Client-host events", async () => {
      class PingService extends ServiceHost {
        constructor(options) {
          super(options);
          this.on("client:ping", () => {
            logger.log("host received ping");
            this.emitToClient("pong");
          });
        }
      }
      const client = await ServiceClient.fromService(PingService);
      client.on("host:pong", () => {
        logger.log("client received pong");
      });
      client.emitToHost("ping");
    });
  });
  section("Factory Methods", () => {
    text(`
            \`ServiceClient.from()\` is the preferred way to create a client.
            It accepts one of \`worker\`, \`service\`, or \`path\`.
        `);
    code("from() options", () => {
      ServiceClient.from({ service: MyService });
      ServiceClient.from({ worker: "./my_service.js" });
      ServiceClient.from({ path: "./my_service.js" });
    });
  });
});
export {
  service_client_doc as default
};
