import { d as doc, t as text, s as section, a as action, l as logger } from "./runtime-DOmi4lo7.js";
class SimpleCollisionDetector {
  constructor() {
    this.bodies = [];
    this.callbacks = /* @__PURE__ */ new Map();
    this.enabled = true;
  }
  addBody(object, options = {}) {
    const body = {
      object,
      type: options.type || "default",
      radius: options.radius || getDefaultRadius(object),
      enabled: options.enabled !== false
    };
    this.bodies.push(body);
    return body;
  }
  removeBody(object) {
    const index = this.bodies.findIndex((body) => body.object === object);
    if (index > -1) {
      this.bodies.splice(index, 1);
    }
  }
  onCollision(typeA, typeB, callback) {
    const key = getCollisionKey(typeA, typeB);
    this.callbacks.set(key, callback);
  }
  detectCollisions() {
    if (!this.enabled) {
      return;
    }
    for (let i = 0; i < this.bodies.length; i++) {
      this.checkBodyCollisions(i);
    }
  }
  checkBodyCollisions(bodyIndex) {
    const bodyA = this.bodies[bodyIndex];
    for (let j = bodyIndex + 1; j < this.bodies.length; j++) {
      const bodyB = this.bodies[j];
      if (!bodyA.enabled || !bodyB.enabled) {
        continue;
      }
      if (checkCollision(bodyA, bodyB)) {
        this.handleCollision(bodyA, bodyB);
      }
    }
  }
  handleCollision(bodyA, bodyB) {
    const key1 = getCollisionKey(bodyA.type, bodyB.type);
    const key2 = getCollisionKey(bodyB.type, bodyA.type);
    const callback = this.callbacks.get(key1) || this.callbacks.get(key2);
    if (callback) {
      callback(bodyA.object, bodyB.object, {
        distance: getDistance(bodyA.object, bodyB.object),
        bodyA,
        bodyB
      });
    }
  }
  enable() {
    this.enabled = true;
  }
  disable() {
    this.enabled = false;
  }
  clear() {
    this.bodies = [];
    this.callbacks.clear();
  }
  getBodiesOfType(type) {
    return this.bodies.filter((body) => body.type === type);
  }
  getBodiesNear(x, y, radius) {
    return this.bodies.filter((body) => {
      const dx = body.object.position.x - x;
      const dy = body.object.position.y - y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      return distance <= radius;
    });
  }
}
function checkCollision(bodyA, bodyB) {
  const posA = bodyA.object.position;
  const posB = bodyB.object.position;
  const dx = posA.x - posB.x;
  const dy = posA.y - posB.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  const minDistance = bodyA.radius + bodyB.radius;
  return distance < minDistance;
}
function getDistance(objectA, objectB) {
  const dx = objectA.position.x - objectB.position.x;
  const dy = objectA.position.y - objectB.position.y;
  return Math.sqrt(dx * dx + dy * dy);
}
function getCollisionKey(typeA, typeB) {
  return `${typeA}-${typeB}`;
}
function getDefaultRadius(object) {
  var _a;
  if (object.isSprite) {
    return Math.max(object.scale.x, object.scale.y);
  }
  if ((_a = object.geometry) == null ? void 0 : _a.parameters) {
    const params = object.geometry.parameters;
    return params.radius || Math.max(params.width, params.height) / 2;
  }
  return 1;
}
const simple_collision_detector_doc = doc("SimpleCollisionDetector", () => {
  text(`
        Lightweight radius-based collision detector.
        Register bodies with a type and radius, then define callbacks per type pair.
        No shape math — just distance checks between positions.
    `);
  section("Adding Bodies", () => {
    action("Register bodies", () => {
      const detector = new SimpleCollisionDetector();
      const player = { position: { x: 0, y: 0 } };
      const enemy = { position: { x: 30, y: 0 } };
      detector.addBody(player, { type: "player", radius: 20 });
      detector.addBody(enemy, { type: "enemy", radius: 20 });
      logger.log("bodies:", detector.bodies.length);
    });
  });
  section("Collision Callbacks", () => {
    text("Register callbacks with onCollision(typeA, typeB, callback). They fire during detectCollisions().");
    action("Detect player-enemy collision", () => {
      const detector = new SimpleCollisionDetector();
      const player = { position: { x: 0, y: 0 } };
      const enemy = { position: { x: 10, y: 0 } };
      detector.addBody(player, { type: "player", radius: 20 });
      detector.addBody(enemy, { type: "enemy", radius: 20 });
      detector.onCollision("player", "enemy", (a, b, info) => {
        logger.log("hit! distance:", info.distance.toFixed(1));
      });
      detector.detectCollisions();
    });
  });
  section("Enable and Disable", () => {
    text("Disable the detector to skip collision checks. Re-enable to resume.");
    action("Toggle detection", () => {
      const detector = new SimpleCollisionDetector();
      logger.log("enabled:", detector.enabled);
      detector.disable();
      logger.log("after disable:", detector.enabled);
      detector.enable();
      logger.log("after enable:", detector.enabled);
    });
  });
  section("Queries", () => {
    action("Get bodies by type", () => {
      const detector = new SimpleCollisionDetector();
      detector.addBody({ position: { x: 0, y: 0 } }, { type: "bullet" });
      detector.addBody({ position: { x: 10, y: 0 } }, { type: "bullet" });
      detector.addBody({ position: { x: 50, y: 0 } }, { type: "enemy" });
      const bullets = detector.getBodiesOfType("bullet");
      logger.log("bullets:", bullets.length);
    });
    action("Get bodies near a point", () => {
      const detector = new SimpleCollisionDetector();
      detector.addBody({ position: { x: 5, y: 5 } }, { type: "item" });
      detector.addBody({ position: { x: 500, y: 500 } }, { type: "item" });
      const nearby = detector.getBodiesNear(0, 0, 50);
      logger.log("nearby:", nearby.length);
    });
  });
  section("Removing and Clearing", () => {
    action("Remove a body", () => {
      const detector = new SimpleCollisionDetector();
      const obj = { position: { x: 0, y: 0 } };
      detector.addBody(obj, { type: "player" });
      logger.log("before:", detector.bodies.length);
      detector.removeBody(obj);
      logger.log("after:", detector.bodies.length);
    });
    action("Clear all", () => {
      const detector = new SimpleCollisionDetector();
      detector.addBody({ position: { x: 0, y: 0 } });
      detector.addBody({ position: { x: 10, y: 0 } });
      detector.onCollision("default", "default", () => {
      });
      detector.clear();
      logger.log("bodies:", detector.bodies.length);
      logger.log("callbacks:", detector.callbacks.size);
    });
  });
});
export {
  simple_collision_detector_doc as default
};
