class CollisionResolver {
  constructor(options = {}) {
    this.options = {
      separationFactor: 0.5,
      restitution: 0.2,
      friction: 0.8,
      ...options
    };
  }
  resolve(bodyA, bodyB, collision) {
    this.separateBodies(bodyA, bodyB, collision);
    if (hasPhysicsProperties(bodyA, bodyB)) {
      this.resolveVelocity(bodyA, bodyB, collision);
    }
  }
  separateBodies(bodyA, bodyB, collision) {
    var _a, _b;
    const { normal, depth } = collision;
    const separationDistance = depth * this.options.separationFactor;
    const massA = ((_a = bodyA.userData) == null ? void 0 : _a.mass) || 1;
    const massB = ((_b = bodyB.userData) == null ? void 0 : _b.mass) || 1;
    const totalMass = massA + massB;
    const ratioA = massB / totalMass;
    const ratioB = massA / totalMass;
    const separationA = {
      x: -normal.x * separationDistance * ratioA,
      y: -normal.y * separationDistance * ratioA
    };
    const separationB = {
      x: normal.x * separationDistance * ratioB,
      y: normal.y * separationDistance * ratioB
    };
    if (!isStatic(bodyA)) {
      bodyA.position.x += separationA.x;
      bodyA.position.y += separationA.y;
    }
    if (!isStatic(bodyB)) {
      bodyB.position.x += separationB.x;
      bodyB.position.y += separationB.y;
    }
  }
  resolveVelocity(bodyA, bodyB, collision) {
    var _a, _b;
    const { normal } = collision;
    const velA = getVelocity(bodyA);
    const velB = getVelocity(bodyB);
    const relativeVel = {
      x: velB.x - velA.x,
      y: velB.y - velA.y
    };
    const velAlongNormal = relativeVel.x * normal.x + relativeVel.y * normal.y;
    if (velAlongNormal > 0) {
      return;
    }
    const restitution = getRestitution(bodyA, bodyB, this.options.restitution);
    const impulseScalar = -(1 + restitution) * velAlongNormal;
    const massA = ((_a = bodyA.userData) == null ? void 0 : _a.mass) || 1;
    const massB = ((_b = bodyB.userData) == null ? void 0 : _b.mass) || 1;
    const totalMass = massA + massB;
    const impulse = {
      x: impulseScalar * normal.x / totalMass,
      y: impulseScalar * normal.y / totalMass
    };
    if (!isStatic(bodyA)) {
      velA.x -= impulse.x * massB;
      velA.y -= impulse.y * massB;
      setVelocity(bodyA, velA);
    }
    if (!isStatic(bodyB)) {
      velB.x += impulse.x * massA;
      velB.y += impulse.y * massA;
      setVelocity(bodyB, velB);
    }
    this.applyFriction(bodyA, bodyB, collision, impulse);
  }
  applyFriction(bodyA, bodyB, collision, impulse) {
    var _a, _b;
    const { normal } = collision;
    const velA = getVelocity(bodyA);
    const velB = getVelocity(bodyB);
    const relativeVel = {
      x: velB.x - velA.x,
      y: velB.y - velA.y
    };
    const velAlongNormal = relativeVel.x * normal.x + relativeVel.y * normal.y;
    const tangent = {
      x: relativeVel.x - velAlongNormal * normal.x,
      y: relativeVel.y - velAlongNormal * normal.y
    };
    const tangentLength = Math.sqrt(tangent.x * tangent.x + tangent.y * tangent.y);
    if (tangentLength > 0) {
      tangent.x /= tangentLength;
      tangent.y /= tangentLength;
    }
    const friction = getFriction(bodyA, bodyB, this.options.friction);
    const frictionImpulse = Math.abs(impulse.x * normal.x + impulse.y * normal.y) * friction;
    const frictionForce = {
      x: -tangent.x * frictionImpulse,
      y: -tangent.y * frictionImpulse
    };
    const massA = ((_a = bodyA.userData) == null ? void 0 : _a.mass) || 1;
    const massB = ((_b = bodyB.userData) == null ? void 0 : _b.mass) || 1;
    const totalMass = massA + massB;
    if (!isStatic(bodyA)) {
      velA.x -= frictionForce.x * massB / totalMass;
      velA.y -= frictionForce.y * massB / totalMass;
      setVelocity(bodyA, velA);
    }
    if (!isStatic(bodyB)) {
      velB.x += frictionForce.x * massA / totalMass;
      velB.y += frictionForce.y * massA / totalMass;
      setVelocity(bodyB, velB);
    }
  }
}
function getRestitution(bodyA, bodyB, restitution) {
  var _a, _b;
  return Math.min(
    ((_a = bodyA.userData) == null ? void 0 : _a.restitution) || restitution,
    ((_b = bodyB.userData) == null ? void 0 : _b.restitution) || restitution
  );
}
function getFriction(bodyA, bodyB, friction) {
  var _a, _b;
  return Math.min(
    ((_a = bodyA.userData) == null ? void 0 : _a.friction) || friction,
    ((_b = bodyB.userData) == null ? void 0 : _b.friction) || friction
  );
}
function getVelocity(body) {
  var _a;
  return ((_a = body.userData) == null ? void 0 : _a.velocity) || body.velocity || { x: 0, y: 0 };
}
function setVelocity(body, velocity) {
  var _a;
  if ((_a = body.userData) == null ? void 0 : _a.velocity) {
    body.userData.velocity.x = velocity.x;
    body.userData.velocity.y = velocity.y;
  } else if (body.velocity) {
    body.velocity.x = velocity.x;
    body.velocity.y = velocity.y;
  }
}
function isStatic(body) {
  var _a;
  return ((_a = body.userData) == null ? void 0 : _a.isStatic) || body.isStatic || false;
}
function hasPhysicsProperties(bodyA, bodyB) {
  var _a, _b;
  return ((_a = bodyA.userData) == null ? void 0 : _a.velocity) || ((_b = bodyB.userData) == null ? void 0 : _b.velocity) || (bodyA.velocity || bodyB.velocity);
}
export {
  CollisionResolver as C
};
