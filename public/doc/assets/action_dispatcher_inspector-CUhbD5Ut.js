var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _containerEl, _ActionDispatcherInspector_instances, update_fn, createControllerGroup_fn, toggleController_fn;
import { P as PerkyExplorerDetails, a as BaseInspector } from "./perky_explorer_details-blS-_Re2.js";
import { A as ActionDispatcher } from "./action_dispatcher-DmmCqW9v.js";
import { k as pluralize } from "./utils-D9Z65BTh.js";
import "./toggle_input-Do276pUG.js";
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

    .controller-group {
        margin-bottom: 12px;
    }

    .group-header {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 4px 0;
        border-bottom: 1px solid var(--border);
        margin-bottom: 6px;
    }

    .group-name {
        font-size: 10px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        color: var(--fg-muted);
        flex: 1;
    }

    .group-inactive .group-name {
        opacity: 0.4;
    }

    .group-inactive .actions-list {
        opacity: 0.3;
        pointer-events: none;
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
class ActionDispatcherInspector extends BaseInspector {
  constructor() {
    super(customStyles);
    __privateAdd(this, _ActionDispatcherInspector_instances);
    __privateAdd(this, _containerEl, null);
    this.buildDOM();
  }
  static matches(module) {
    return module instanceof ActionDispatcher;
  }
  buildDOM() {
    super.buildDOM();
    __privateSet(this, _containerEl, document.createElement("div"));
    this.shadowRoot.insertBefore(__privateGet(this, _containerEl), this.gridEl);
    this.gridEl.style.display = "none";
  }
  onModuleSet(module) {
    if (module) {
      __privateMethod(this, _ActionDispatcherInspector_instances, update_fn).call(this);
    }
  }
}
_containerEl = new WeakMap();
_ActionDispatcherInspector_instances = new WeakSet();
update_fn = function() {
  if (!this.module) {
    return;
  }
  __privateGet(this, _containerEl).innerHTML = "";
  const actionsMap = this.module.listAllActions();
  let totalActions = 0;
  for (const actions of actionsMap.values()) {
    totalActions += actions.length;
  }
  const header = createHeader(totalActions, actionsMap.size);
  __privateGet(this, _containerEl).appendChild(header);
  if (actionsMap.size === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-message";
    empty.textContent = "No controllers registered";
    __privateGet(this, _containerEl).appendChild(empty);
    return;
  }
  for (const [controllerName, actions] of actionsMap) {
    const group = __privateMethod(this, _ActionDispatcherInspector_instances, createControllerGroup_fn).call(this, controllerName, actions);
    __privateGet(this, _containerEl).appendChild(group);
  }
};
createControllerGroup_fn = function(controllerName, actions) {
  const isActive = this.module.getActive().includes(controllerName);
  const group = document.createElement("div");
  group.className = isActive ? "controller-group" : "controller-group group-inactive";
  const header = document.createElement("div");
  header.className = "group-header";
  const nameEl = document.createElement("span");
  nameEl.className = "group-name";
  nameEl.textContent = controllerName;
  const toggle = document.createElement("toggle-input");
  toggle.setChecked(isActive);
  toggle.addEventListener("change", (e) => {
    __privateMethod(this, _ActionDispatcherInspector_instances, toggleController_fn).call(this, controllerName, e.detail.checked);
  });
  header.appendChild(nameEl);
  header.appendChild(toggle);
  group.appendChild(header);
  if (actions.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-message";
    empty.textContent = "No actions";
    group.appendChild(empty);
  } else {
    const list = document.createElement("div");
    list.className = "actions-list";
    for (const action of actions) {
      const card = createActionCard(action.name, controllerName, this.module);
      list.appendChild(card);
    }
    group.appendChild(list);
  }
  return group;
};
toggleController_fn = function(controllerName, active) {
  const currentActive = this.module.getActive();
  if (active) {
    if (!currentActive.includes(controllerName)) {
      this.module.setActive([...currentActive, controllerName]);
    }
  } else {
    this.module.setActive(currentActive.filter((name) => name !== controllerName));
  }
  __privateMethod(this, _ActionDispatcherInspector_instances, update_fn).call(this);
};
function createHeader(totalActions, controllerCount) {
  const header = document.createElement("div");
  header.className = "actions-header";
  const countEl = document.createElement("div");
  countEl.className = "actions-count";
  countEl.innerHTML = `<strong>${totalActions}</strong> ${pluralize("action", totalActions)} in <strong>${controllerCount}</strong> ${pluralize("controller", controllerCount)}`;
  header.appendChild(countEl);
  return header;
}
function createActionCard(actionName, controllerName, dispatcher) {
  const card = document.createElement("div");
  card.className = "action-card";
  const nameEl = document.createElement("span");
  nameEl.className = "action-name";
  nameEl.textContent = actionName;
  const executeBtn = document.createElement("button");
  executeBtn.className = "execute-btn";
  executeBtn.textContent = "▶ Run";
  executeBtn.addEventListener("click", () => {
    dispatcher.executeTo(controllerName, actionName);
  });
  card.appendChild(nameEl);
  card.appendChild(executeBtn);
  return card;
}
customElements.define("action-dispatcher-inspector", ActionDispatcherInspector);
PerkyExplorerDetails.registerInspector(ActionDispatcherInspector);
