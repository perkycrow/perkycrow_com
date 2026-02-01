var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { d as doc, t as text, s as section, c as code, a as action, l as logger } from "./runtime-DOmi4lo7.js";
import { G as Grid } from "./grid-BP3Xbhw7.js";
import { P as Pathfinder, h as heuristics } from "./pathfinder-CUYd1oPX.js";
import { S as ServiceHost } from "./service_host-B0f4Z5GC.js";
import { S as ServiceRequest } from "./service_request-DR80oy2k.js";
import { S as ServiceResponse } from "./service_response-D6BAd4n_.js";
import "./utils-DVCexGPz.js";
import "./inflector-BxOpyWLP.js";
import "./service_transport-Yf7lhcDW.js";
import "./perky_module-DrWJO8l1.js";
import "./registry-CF_H4IOw.js";
import "./observable_map-BPZFGUWq.js";
import "./observable_set-BOSKLaPv.js";
class PathfindingService extends ServiceHost {
  constructor(config = {}) {
    super(config);
    this.grid = null;
    this.pathfinder = new Pathfinder({
      heuristic: heuristics[config.heuristic] ?? heuristics.manhattan,
      allowDiagonal: config.allowDiagonal ?? true,
      isWalkable
    });
    this.pathCache = /* @__PURE__ */ new Map();
    this.maxCacheSize = config.maxCacheSize || 500;
  }
  setGrid(req, res) {
    try {
      const { gridData } = req.params;
      if (!gridData) {
        res.error("Missing gridData parameter");
        return;
      }
      this.grid = new Grid({
        width: gridData.width,
        height: gridData.height
      });
      if (gridData.cells) {
        Object.entries(gridData.cells).forEach(([key, value]) => {
          const coords = parseCellKey(key);
          this.grid.setCell(coords, value);
        });
      }
      this.pathCache.clear();
      res.send({
        success: true,
        gridSize: `${gridData.width}x${gridData.height}`,
        cellCount: Object.keys(gridData.cells || {}).length
      });
    } catch (error) {
      res.error(`Failed to set grid: ${error.message}`);
    }
  }
  setCell(req, res) {
    try {
      const { coords, value } = req.params;
      if (!this.grid) {
        res.error("No grid set. Call setGrid first.");
        return;
      }
      if (!coords || (coords.x === void 0 || coords.y === void 0)) {
        res.error("Missing or invalid coords parameter");
        return;
      }
      this.grid.setCell(coords, value);
      this.pathCache.clear();
      res.send({
        success: true,
        coords,
        value,
        cacheCleared: true
      });
    } catch (error) {
      res.error(`Failed to set cell: ${error.message}`);
    }
  }
  findPath(req, res) {
    try {
      const { start, goal, options = {} } = req.params;
      if (!this.grid) {
        res.error("No grid set. Call setGrid first.");
        return;
      }
      if (!start || !goal) {
        res.error("Missing start or goal coordinates");
        return;
      }
      if (options.heuristic && heuristics[options.heuristic]) {
        this.pathfinder.setHeuristic(heuristics[options.heuristic]);
      }
      if (typeof options.allowDiagonal === "boolean") {
        this.pathfinder.setAllowDiagonal(options.allowDiagonal);
      }
      const cacheKey = getCacheKey(start, goal, options);
      if (this.pathCache.has(cacheKey)) {
        const cachedResult = this.pathCache.get(cacheKey);
        res.send({
          ...cachedResult,
          cached: true
        });
        return;
      }
      const startTime = performance.now();
      const path = this.pathfinder.findPath(this.grid, start, goal);
      const calculationTime = performance.now() - startTime;
      const result = {
        path: path || [],
        found: Boolean(path),
        length: path ? path.length : 0,
        calculationTime,
        cached: false
      };
      this.cacheResult(cacheKey, result);
      res.send(result);
    } catch (error) {
      res.error(`Pathfinding failed: ${error.message}`);
    }
  }
  cacheResult(key, result) {
    if (this.pathCache.size >= this.maxCacheSize) {
      const firstKey = this.pathCache.keys().next().value;
      this.pathCache.delete(firstKey);
    }
    this.pathCache.set(key, {
      path: result.path,
      found: result.found,
      length: result.length,
      calculationTime: result.calculationTime
    });
  }
}
__publicField(PathfindingService, "serviceMethods", ["findPath", "setGrid", "setCell"]);
function parseCellKey(key) {
  const [x, y] = key.split(",").map(Number);
  return { x, y };
}
function getCacheKey(start, goal, options) {
  return `${start.x},${start.y}->${goal.x},${goal.y}|${options.heuristic || "manhattan"}|${Boolean(options.allowDiagonal)}`;
}
function isWalkable(cell) {
  if (typeof cell === "object" && cell !== null) {
    return cell.walkable !== false;
  }
  if (typeof cell === "number") {
    return cell !== 0;
  }
  if (typeof cell === "string") {
    return cell !== "wall";
  }
  return true;
}
const pathfinding_service_doc = doc("PathfindingService", { advanced: true }, () => {
  text(`
        Worker-ready pathfinding service wrapping [[Grid@grid]] and [[Pathfinder@pathfinder]].
        Extends [[ServiceHost@service_host]] to expose \`setGrid\`, \`setCell\`, and \`findPath\`
        as service methods. Includes result caching for repeated queries.
    `);
  section("Setup", () => {
    text("Create the service and initialize a grid before finding paths.");
    code("Creation", () => {
      new PathfindingService();
      new PathfindingService({
        heuristic: "euclidean",
        allowDiagonal: true,
        maxCacheSize: 1e3
      });
    });
    action("setGrid", () => {
      const service = new PathfindingService();
      const req = new ServiceRequest("setGrid", {
        gridData: {
          width: 5,
          height: 5,
          cells: { "2,0": "wall", "2,1": "wall", "2,2": "wall" }
        }
      });
      const res = new ServiceResponse();
      service.setGrid(req, res);
      logger.log("result:", JSON.stringify(res.result));
    });
  });
  section("Finding Paths", () => {
    text("Call `findPath` with start and goal coordinates. Returns the path, length, and timing info.");
    action("Basic pathfinding", () => {
      const service = new PathfindingService();
      const setupReq = new ServiceRequest("setGrid", {
        gridData: { width: 5, height: 5, cells: {} }
      });
      const setupRes = new ServiceResponse();
      service.setGrid(setupReq, setupRes);
      const req = new ServiceRequest("findPath", {
        start: { x: 0, y: 0 },
        goal: { x: 4, y: 4 }
      });
      const res = new ServiceResponse();
      service.findPath(req, res);
      logger.log("found:", res.result.found);
      logger.log("length:", res.result.length);
      logger.log("cached:", res.result.cached);
    });
    action("With obstacles", () => {
      const service = new PathfindingService();
      const setupReq = new ServiceRequest("setGrid", {
        gridData: {
          width: 5,
          height: 5,
          cells: { "2,0": "wall", "2,1": "wall", "2,2": "wall" }
        }
      });
      const setupRes = new ServiceResponse();
      service.setGrid(setupReq, setupRes);
      const req = new ServiceRequest("findPath", {
        start: { x: 0, y: 0 },
        goal: { x: 4, y: 0 }
      });
      const res = new ServiceResponse();
      service.findPath(req, res);
      logger.log("found:", res.result.found);
      logger.log("path length:", res.result.length);
      if (res.result.path) {
        for (const step of res.result.path) {
          logger.log(`(${step.x}, ${step.y})`);
        }
      }
    });
  });
  section("Caching", () => {
    text(`
            Results are cached automatically. Repeated queries with the same start, goal,
            and options return cached results. The cache is cleared when the grid changes
            via \`setGrid\` or \`setCell\`.
        `);
    action("Cached result", () => {
      const service = new PathfindingService();
      const setupReq = new ServiceRequest("setGrid", {
        gridData: { width: 5, height: 5, cells: {} }
      });
      const setupRes = new ServiceResponse();
      service.setGrid(setupReq, setupRes);
      const req1 = new ServiceRequest("findPath", {
        start: { x: 0, y: 0 },
        goal: { x: 4, y: 4 }
      });
      const res1 = new ServiceResponse();
      service.findPath(req1, res1);
      logger.log("first call cached:", res1.result.cached);
      const req2 = new ServiceRequest("findPath", {
        start: { x: 0, y: 0 },
        goal: { x: 4, y: 4 }
      });
      const res2 = new ServiceResponse();
      service.findPath(req2, res2);
      logger.log("second call cached:", res2.result.cached);
    });
  });
  section("Modifying the Grid", () => {
    text("Use `setCell` to update individual cells. This clears the path cache.");
    action("setCell", () => {
      const service = new PathfindingService();
      const setupReq = new ServiceRequest("setGrid", {
        gridData: { width: 5, height: 5, cells: {} }
      });
      const setupRes = new ServiceResponse();
      service.setGrid(setupReq, setupRes);
      const cellReq = new ServiceRequest("setCell", {
        coords: { x: 2, y: 2 },
        value: "wall"
      });
      const cellRes = new ServiceResponse();
      service.setCell(cellReq, cellRes);
      logger.log("setCell result:", JSON.stringify(cellRes.result));
    });
  });
});
export {
  pathfinding_service_doc as default
};
