var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _containerEl, _ActionControllerInspector_instances, update_fn, createActionCard_fn;
import { P as PerkyExplorerDetails, a as BaseInspector } from "./perky_explorer_details-blS-_Re2.js";
import { A as ActionController } from "./action_controller-CFYpCrnY.js";
import { j as pluralize } from "./utils-CF4a2IhA.js";
const customStyles = `
    .actions-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 8px;
    }

    .actions-count {
        font-size: 11px;
        color: var(--fg-muted);
    }

    .actions-count strong {
        color: var(--fg-primary);
    }

    .actions-list {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .action-card {
        background: var(--bg-hover);
        border-radius: 4px;
        padding: 8px 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
    }

    .action-name {
        font-size: 11px;
        font-weight: 600;
        color: var(--accent);
        font-family: var(--font-mono);
    }

    .action-badge {
        font-size: 9px;
        padding: 2px 6px;
        border-radius: 4px;
        background: var(--bg-primary);
        color: var(--fg-muted);
    }

    .action-badge.propagable {
        background: var(--status-started);
        color: var(--bg-primary);
    }

    .execute-btn {
        background: var(--bg-primary);
        border: 1px solid var(--border);
        border-radius: 4px;
        padding: 3px 8px;
        font-size: 9px;
        color: var(--fg-muted);
        cursor: pointer;
        transition: all 0.15s;
    }

    .execute-btn:hover {
        background: var(--accent);
        color: var(--bg-primary);
        border-color: var(--accent);
    }

    .empty-message {
        color: var(--fg-muted);
        font-size: 11px;
        font-style: italic;
        text-align: center;
        padding: 16px;
    }
`;
class ActionControllerInspector extends BaseInspector {
  constructor() {
    super(customStyles);
    __privateAdd(this, _ActionControllerInspector_instances);
    __privateAdd(this, _containerEl, null);
    this.buildDOM();
  }
  static matches(module) {
    return module instanceof ActionController;
  }
  buildDOM() {
    super.buildDOM();
    __privateSet(this, _containerEl, document.createElement("div"));
    this.shadowRoot.insertBefore(__privateGet(this, _containerEl), this.gridEl);
    this.gridEl.style.display = "none";
  }
  onModuleSet(module) {
    if (module) {
      __privateMethod(this, _ActionControllerInspector_instances, update_fn).call(this);
    }
  }
}
_containerEl = new WeakMap();
_ActionControllerInspector_instances = new WeakSet();
update_fn = function() {
  if (!this.module) {
    return;
  }
  __privateGet(this, _containerEl).innerHTML = "";
  const actions = this.module.listActions();
  const header = createHeader(actions.length);
  __privateGet(this, _containerEl).appendChild(header);
  if (actions.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-message";
    empty.textContent = "No actions defined";
    __privateGet(this, _containerEl).appendChild(empty);
    return;
  }
  const list = document.createElement("div");
  list.className = "actions-list";
  for (const actionName of actions) {
    const card = __privateMethod(this, _ActionControllerInspector_instances, createActionCard_fn).call(this, actionName);
    list.appendChild(card);
  }
  __privateGet(this, _containerEl).appendChild(list);
};
createActionCard_fn = function(actionName) {
  const card = document.createElement("div");
  card.className = "action-card";
  const nameEl = document.createElement("span");
  nameEl.className = "action-name";
  nameEl.textContent = actionName;
  const rightSide = document.createElement("div");
  rightSide.style.display = "flex";
  rightSide.style.alignItems = "center";
  rightSide.style.gap = "6px";
  const isPropagable = this.module.shouldPropagate(actionName);
  if (isPropagable) {
    const badge = document.createElement("span");
    badge.className = "action-badge propagable";
    badge.textContent = "propagable";
    rightSide.appendChild(badge);
  }
  const executeBtn = document.createElement("button");
  executeBtn.className = "execute-btn";
  executeBtn.textContent = "▶ Run";
  executeBtn.addEventListener("click", () => {
    this.module.execute(actionName);
  });
  rightSide.appendChild(executeBtn);
  card.appendChild(nameEl);
  card.appendChild(rightSide);
  return card;
};
function createHeader(count) {
  const header = document.createElement("div");
  header.className = "actions-header";
  const countEl = document.createElement("div");
  countEl.className = "actions-count";
  countEl.innerHTML = `<strong>${count}</strong> ${pluralize("action", count)}`;
  header.appendChild(countEl);
  return header;
}
customElements.define("action-controller-inspector", ActionControllerInspector);
PerkyExplorerDetails.registerInspector(ActionControllerInspector);
