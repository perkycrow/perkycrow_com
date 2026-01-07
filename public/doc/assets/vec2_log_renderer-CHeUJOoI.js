import { V as Vec2 } from "./vec2-BvD8ope7.js";
const renderers = [];
function registerLogRenderer(renderer) {
  renderers.push(renderer);
}
function getLogRenderer(item) {
  for (const renderer of renderers) {
    if (renderer.match(item)) {
      return renderer;
    }
  }
  return null;
}
function renderLogItem(item) {
  const renderer = getLogRenderer(item);
  if (renderer) {
    return renderer.render(item);
  }
  return null;
}
function formatNumber(n) {
  if (Number.isInteger(n)) {
    return String(n);
  }
  return n.toFixed(2);
}
const vec2LogRenderer = {
  match(item) {
    return item instanceof Vec2 || (item == null ? void 0 : item.isVector2);
  },
  render(vec) {
    const container = document.createElement("span");
    container.className = "log-vec2";
    const label = document.createElement("span");
    label.className = "log-vec2-label";
    label.textContent = "Vec2";
    const values = document.createElement("span");
    values.className = "log-vec2-values";
    const xEl = document.createElement("span");
    xEl.className = "log-vec2-component";
    xEl.innerHTML = `<span class="log-vec2-key">x</span><span class="log-vec2-value">${formatNumber(vec.x)}</span>`;
    const yEl = document.createElement("span");
    yEl.className = "log-vec2-component";
    yEl.innerHTML = `<span class="log-vec2-key">y</span><span class="log-vec2-value">${formatNumber(vec.y)}</span>`;
    values.appendChild(xEl);
    values.appendChild(yEl);
    container.appendChild(label);
    container.appendChild(values);
    return container;
  }
};
registerLogRenderer(vec2LogRenderer);
export {
  renderLogItem as a,
  registerLogRenderer as r
};
