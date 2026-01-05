var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _state, _overlayEl, _containerEl, _inputEl, _resultsEl, _appActions, _internalCommands, _filteredCommands, _selectedIndex, _history, _maxHistory, _DevToolsCommandPalette_instances, buildDOM_fn, rebuildAll_fn, buildAppActions_fn, buildInternalCommands_fn, onInput_fn, showHistory_fn, filterCommands_fn, renderResults_fn, groupCommands_fn, createResultItem_fn, updateSelection_fn, onKeydown_fn, executeCurrentCommand_fn, executeCommand_fn, executeTemplateCommand_fn, executeHistoryEntry_fn, addToHistory_fn;
import { B as BaseEditorComponent, b as buildCommandPaletteStyles, g as getAllTools, I as ICONS } from "./index-CnallOn9.js";
function tokenize(input) {
  const args = [];
  let current = "";
  let depth = 0;
  let inString = false;
  let stringChar = null;
  for (const char of input) {
    if (!inString && (char === '"' || char === "'")) {
      inString = true;
      stringChar = char;
      current += char;
    } else if (inString && char === stringChar) {
      inString = false;
      stringChar = null;
      current += char;
    } else if (!inString && (char === "{" || char === "[")) {
      depth++;
      current += char;
    } else if (!inString && (char === "}" || char === "]")) {
      depth--;
      current += char;
    } else if (!inString && depth === 0 && char === ",") {
      args.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }
  if (current.trim()) {
    args.push(current.trim());
  }
  return args.map(smartParse);
}
function smartParse(value) {
  if (!value) {
    return void 0;
  }
  if (value === "true") {
    return true;
  }
  if (value === "false") {
    return false;
  }
  if (value === "null") {
    return null;
  }
  if (value === "undefined") {
    return void 0;
  }
  if (value.startsWith('"') && value.endsWith('"') || value.startsWith("'") && value.endsWith("'")) {
    return value.slice(1, -1);
  }
  if (value.startsWith("{") || value.startsWith("[")) {
    try {
      return parseRelaxedJSON(value);
    } catch {
      return value;
    }
  }
  const num = Number(value);
  if (!isNaN(num) && value !== "") {
    return num;
  }
  return value;
}
function parseRelaxedJSON(value) {
  return new Function(`return (${value})`)();
}
function parseCommand(input) {
  const trimmed = input.trim();
  const spaceIndex = trimmed.indexOf(" ");
  if (spaceIndex === -1) {
    return { command: trimmed, args: [] };
  }
  const command = trimmed.slice(0, spaceIndex);
  const argsString = trimmed.slice(spaceIndex + 1);
  return { command, args: tokenize(argsString) };
}
class DevToolsCommandPalette extends BaseEditorComponent {
  constructor() {
    super(...arguments);
    __privateAdd(this, _DevToolsCommandPalette_instances);
    __privateAdd(this, _state, null);
    __privateAdd(this, _overlayEl, null);
    __privateAdd(this, _containerEl, null);
    __privateAdd(this, _inputEl, null);
    __privateAdd(this, _resultsEl, null);
    __privateAdd(this, _appActions, []);
    __privateAdd(this, _internalCommands, []);
    __privateAdd(this, _filteredCommands, []);
    __privateAdd(this, _selectedIndex, 0);
    __privateAdd(this, _history, []);
    __privateAdd(this, _maxHistory, 20);
  }
  connectedCallback() {
    __privateMethod(this, _DevToolsCommandPalette_instances, buildDOM_fn).call(this);
    __privateMethod(this, _DevToolsCommandPalette_instances, rebuildAll_fn).call(this);
  }
  setState(state) {
    __privateSet(this, _state, state);
    __privateMethod(this, _DevToolsCommandPalette_instances, rebuildAll_fn).call(this);
  }
  show() {
    var _a, _b;
    (_a = __privateGet(this, _overlayEl)) == null ? void 0 : _a.classList.remove("hidden");
    (_b = __privateGet(this, _inputEl)) == null ? void 0 : _b.focus();
    __privateGet(this, _inputEl).value = "";
    __privateSet(this, _selectedIndex, 0);
    __privateMethod(this, _DevToolsCommandPalette_instances, rebuildAll_fn).call(this);
    __privateMethod(this, _DevToolsCommandPalette_instances, showHistory_fn).call(this);
  }
  hide() {
    var _a;
    (_a = __privateGet(this, _overlayEl)) == null ? void 0 : _a.classList.add("hidden");
    __privateGet(this, _inputEl).value = "";
  }
}
_state = new WeakMap();
_overlayEl = new WeakMap();
_containerEl = new WeakMap();
_inputEl = new WeakMap();
_resultsEl = new WeakMap();
_appActions = new WeakMap();
_internalCommands = new WeakMap();
_filteredCommands = new WeakMap();
_selectedIndex = new WeakMap();
_history = new WeakMap();
_maxHistory = new WeakMap();
_DevToolsCommandPalette_instances = new WeakSet();
buildDOM_fn = function() {
  const style = document.createElement("style");
  style.textContent = STYLES;
  this.shadowRoot.appendChild(style);
  __privateSet(this, _overlayEl, document.createElement("div"));
  __privateGet(this, _overlayEl).className = "command-palette-overlay hidden";
  __privateGet(this, _overlayEl).addEventListener("click", (e) => {
    var _a;
    if (e.target === __privateGet(this, _overlayEl)) {
      (_a = __privateGet(this, _state)) == null ? void 0 : _a.closeCommandPalette();
    }
  });
  __privateSet(this, _containerEl, document.createElement("div"));
  __privateGet(this, _containerEl).className = "command-palette-container";
  const inputWrapper = document.createElement("div");
  inputWrapper.className = "command-palette-input-wrapper";
  const icon = document.createElement("span");
  icon.className = "command-palette-icon";
  icon.textContent = ">_";
  __privateSet(this, _inputEl, document.createElement("input"));
  __privateGet(this, _inputEl).className = "command-palette-input";
  __privateGet(this, _inputEl).type = "text";
  __privateGet(this, _inputEl).placeholder = "Type a command...";
  __privateGet(this, _inputEl).addEventListener("input", () => __privateMethod(this, _DevToolsCommandPalette_instances, onInput_fn).call(this));
  __privateGet(this, _inputEl).addEventListener("keydown", (e) => __privateMethod(this, _DevToolsCommandPalette_instances, onKeydown_fn).call(this, e));
  inputWrapper.appendChild(icon);
  inputWrapper.appendChild(__privateGet(this, _inputEl));
  __privateSet(this, _resultsEl, document.createElement("div"));
  __privateGet(this, _resultsEl).className = "command-palette-results";
  __privateGet(this, _containerEl).appendChild(inputWrapper);
  __privateGet(this, _containerEl).appendChild(__privateGet(this, _resultsEl));
  __privateGet(this, _overlayEl).appendChild(__privateGet(this, _containerEl));
  this.shadowRoot.appendChild(__privateGet(this, _overlayEl));
};
rebuildAll_fn = function() {
  __privateSet(this, _appActions, __privateMethod(this, _DevToolsCommandPalette_instances, buildAppActions_fn).call(this));
  __privateSet(this, _internalCommands, __privateMethod(this, _DevToolsCommandPalette_instances, buildInternalCommands_fn).call(this));
};
buildAppActions_fn = function() {
  var _a, _b;
  const actions = [];
  const apps = ((_b = (_a = __privateGet(this, _state)) == null ? void 0 : _a.appManager) == null ? void 0 : _b.list()) || [];
  for (const app of apps) {
    if (app.$status === "started") {
      collectActionsFromApp(app, actions);
    }
  }
  return actions;
};
buildInternalCommands_fn = function() {
  const commands = [];
  const tools = getAllTools();
  for (const Tool of tools) {
    commands.push({
      id: `open:${Tool.toolId}`,
      title: `/open ${Tool.toolId}`,
      subtitle: `Open ${Tool.toolName}`,
      type: "command",
      icon: Tool.toolIcon,
      action: () => {
        var _a, _b;
        (_a = __privateGet(this, _state)) == null ? void 0 : _a.openTool(Tool.toolId);
        (_b = __privateGet(this, _state)) == null ? void 0 : _b.closeCommandPalette();
      }
    });
  }
  commands.push({
    id: "open:logger",
    title: "/open logger",
    subtitle: "Open Logger panel",
    type: "command",
    icon: ICONS.logger,
    action: () => {
      var _a, _b;
      (_a = __privateGet(this, _state)) == null ? void 0 : _a.openLogger();
      (_b = __privateGet(this, _state)) == null ? void 0 : _b.closeCommandPalette();
    }
  });
  commands.push({
    id: "toggle:logger",
    title: "/toggle logger",
    subtitle: "Toggle Logger panel",
    type: "command",
    icon: ICONS.logger,
    action: () => {
      var _a, _b;
      (_a = __privateGet(this, _state)) == null ? void 0 : _a.toggleLogger();
      (_b = __privateGet(this, _state)) == null ? void 0 : _b.closeCommandPalette();
    }
  });
  commands.push({
    id: "close:sidebar",
    title: "/close sidebar",
    subtitle: "Close Sidebar panel",
    type: "command",
    icon: ICONS.close,
    action: () => {
      var _a, _b;
      (_a = __privateGet(this, _state)) == null ? void 0 : _a.closeSidebar();
      (_b = __privateGet(this, _state)) == null ? void 0 : _b.closeCommandPalette();
    }
  });
  commands.push({
    id: "spawn",
    title: "/spawn",
    placeholder: "appName",
    subtitle: "Create app instance",
    type: "template",
    icon: ICONS.spawn
  });
  commands.push({
    id: "start",
    title: "/start",
    placeholder: "appId",
    subtitle: "Start stopped app",
    type: "template",
    icon: ICONS.start
  });
  commands.push({
    id: "stop",
    title: "/stop",
    placeholder: "appId",
    subtitle: "Stop running app",
    type: "template",
    icon: ICONS.stop
  });
  commands.push({
    id: "dispose",
    title: "/dispose",
    placeholder: "appId",
    subtitle: "Remove app instance",
    type: "template",
    icon: ICONS.dispose
  });
  return commands;
};
onInput_fn = function() {
  const raw = __privateGet(this, _inputEl).value;
  const query = raw.trim().toLowerCase();
  const commandPart = query.split(" ")[0];
  if (raw.startsWith("/")) {
    const commandQuery = commandPart.slice(1);
    __privateMethod(this, _DevToolsCommandPalette_instances, filterCommands_fn).call(this, commandQuery, __privateGet(this, _internalCommands));
  } else if (query) {
    __privateMethod(this, _DevToolsCommandPalette_instances, filterCommands_fn).call(this, commandPart, __privateGet(this, _appActions));
  } else {
    __privateMethod(this, _DevToolsCommandPalette_instances, showHistory_fn).call(this);
  }
};
showHistory_fn = function() {
  if (__privateGet(this, _history).length === 0) {
    __privateSet(this, _filteredCommands, []);
    __privateSet(this, _selectedIndex, 0);
    __privateMethod(this, _DevToolsCommandPalette_instances, renderResults_fn).call(this);
    return;
  }
  __privateSet(this, _filteredCommands, __privateGet(this, _history).map((entry, index) => ({
    id: `history:${index}`,
    title: entry.input,
    subtitle: "Recent",
    type: "history",
    icon: ICONS.history,
    originalEntry: entry
  })));
  __privateSet(this, _selectedIndex, 0);
  __privateMethod(this, _DevToolsCommandPalette_instances, renderResults_fn).call(this);
};
filterCommands_fn = function(query, source) {
  if (query) {
    __privateSet(this, _filteredCommands, source.map((cmd) => ({
      cmd,
      score: Math.max(
        fuzzyScore(query, cmd.title.toLowerCase()),
        fuzzyScore(query, cmd.subtitle.toLowerCase())
      )
    })).filter(({ score }) => score > 0).sort((a, b) => b.score - a.score).map(({ cmd }) => cmd));
  } else {
    __privateSet(this, _filteredCommands, [...source]);
  }
  __privateSet(this, _selectedIndex, 0);
  __privateMethod(this, _DevToolsCommandPalette_instances, renderResults_fn).call(this);
};
renderResults_fn = function() {
  __privateGet(this, _resultsEl).innerHTML = "";
  if (__privateGet(this, _filteredCommands).length === 0) {
    const query = __privateGet(this, _inputEl).value.trim();
    if (query) {
      const empty = document.createElement("div");
      empty.className = "command-palette-empty";
      empty.textContent = "No results found";
      __privateGet(this, _resultsEl).appendChild(empty);
    } else {
      const hint = document.createElement("div");
      hint.className = "command-palette-hint";
      hint.textContent = "Type to search actions, / for commands";
      __privateGet(this, _resultsEl).appendChild(hint);
    }
    return;
  }
  const groups = __privateMethod(this, _DevToolsCommandPalette_instances, groupCommands_fn).call(this);
  for (const [subtitle, commands] of Object.entries(groups)) {
    const sectionTitle = document.createElement("div");
    sectionTitle.className = "command-palette-section-title";
    sectionTitle.textContent = subtitle;
    __privateGet(this, _resultsEl).appendChild(sectionTitle);
    for (const cmd of commands) {
      const result = __privateMethod(this, _DevToolsCommandPalette_instances, createResultItem_fn).call(this, cmd);
      __privateGet(this, _resultsEl).appendChild(result);
    }
  }
  __privateMethod(this, _DevToolsCommandPalette_instances, updateSelection_fn).call(this);
};
groupCommands_fn = function() {
  const groups = {};
  for (const cmd of __privateGet(this, _filteredCommands)) {
    if (!groups[cmd.subtitle]) {
      groups[cmd.subtitle] = [];
    }
    groups[cmd.subtitle].push(cmd);
  }
  return groups;
};
createResultItem_fn = function(cmd) {
  const result = document.createElement("div");
  result.className = "command-palette-result";
  result.dataset.id = cmd.id;
  const icon = document.createElement("span");
  icon.className = "command-palette-result-icon";
  icon.innerHTML = cmd.icon;
  const text = document.createElement("div");
  text.className = "command-palette-result-text";
  const title = document.createElement("div");
  title.className = "command-palette-result-title";
  title.textContent = cmd.title;
  if (cmd.placeholder) {
    const placeholder = document.createElement("span");
    placeholder.className = "command-palette-placeholder";
    placeholder.textContent = ` ${cmd.placeholder}`;
    title.appendChild(placeholder);
  }
  text.appendChild(title);
  result.appendChild(icon);
  result.appendChild(text);
  result.addEventListener("click", () => __privateMethod(this, _DevToolsCommandPalette_instances, executeCommand_fn).call(this, cmd));
  result.addEventListener("mouseenter", () => {
    const index = __privateGet(this, _filteredCommands).findIndex((c) => c.id === cmd.id);
    if (index >= 0) {
      __privateSet(this, _selectedIndex, index);
      __privateMethod(this, _DevToolsCommandPalette_instances, updateSelection_fn).call(this);
    }
  });
  return result;
};
updateSelection_fn = function() {
  const results = __privateGet(this, _resultsEl).querySelectorAll(".command-palette-result");
  results.forEach((el) => {
    const cmdIndex = __privateGet(this, _filteredCommands).findIndex((c) => c.id === el.dataset.id);
    el.classList.toggle("selected", cmdIndex === __privateGet(this, _selectedIndex));
  });
  const selectedEl = __privateGet(this, _resultsEl).querySelector(".command-palette-result.selected");
  if (selectedEl) {
    selectedEl.scrollIntoView({ block: "nearest" });
  }
};
onKeydown_fn = function(e) {
  const keyHandlers = {
    ArrowDown: () => {
      __privateSet(this, _selectedIndex, Math.min(
        __privateGet(this, _selectedIndex) + 1,
        __privateGet(this, _filteredCommands).length - 1
      ));
      __privateMethod(this, _DevToolsCommandPalette_instances, updateSelection_fn).call(this);
    },
    ArrowUp: () => {
      __privateSet(this, _selectedIndex, Math.max(__privateGet(this, _selectedIndex) - 1, 0));
      __privateMethod(this, _DevToolsCommandPalette_instances, updateSelection_fn).call(this);
    },
    Enter: () => {
      __privateMethod(this, _DevToolsCommandPalette_instances, executeCurrentCommand_fn).call(this);
    },
    Escape: () => {
      var _a;
      (_a = __privateGet(this, _state)) == null ? void 0 : _a.closeCommandPalette();
    }
  };
  const handler = keyHandlers[e.key];
  if (handler) {
    e.preventDefault();
    handler();
  }
};
executeCurrentCommand_fn = function() {
  const selected = __privateGet(this, _filteredCommands)[__privateGet(this, _selectedIndex)];
  if (selected) {
    __privateMethod(this, _DevToolsCommandPalette_instances, executeCommand_fn).call(this, selected);
  }
};
executeCommand_fn = function(cmd) {
  var _a;
  if (cmd.type === "history") {
    __privateMethod(this, _DevToolsCommandPalette_instances, executeHistoryEntry_fn).call(this, cmd.originalEntry);
  } else if (cmd.type === "template") {
    const input = __privateGet(this, _inputEl).value.trim();
    const { args } = parseCommand(input);
    if (args.length > 0) {
      __privateMethod(this, _DevToolsCommandPalette_instances, executeTemplateCommand_fn).call(this, cmd.id, args[0]);
    } else {
      __privateGet(this, _inputEl).value = `${cmd.title} `;
      __privateGet(this, _inputEl).focus();
      __privateMethod(this, _DevToolsCommandPalette_instances, onInput_fn).call(this);
    }
  } else if (cmd.type === "action") {
    const input = __privateGet(this, _inputEl).value;
    const { args } = parseCommand(input);
    const historyInput = buildHistoryInput(cmd.actionName, args);
    __privateMethod(this, _DevToolsCommandPalette_instances, addToHistory_fn).call(this, historyInput, cmd);
    cmd.app.actionDispatcher.execute(cmd.actionName, ...args);
    (_a = __privateGet(this, _state)) == null ? void 0 : _a.closeCommandPalette();
  } else if (cmd.action) {
    __privateMethod(this, _DevToolsCommandPalette_instances, addToHistory_fn).call(this, cmd.title, cmd);
    cmd.action();
  }
};
executeTemplateCommand_fn = function(commandId, arg) {
  var _a, _b;
  const appManager = (_a = __privateGet(this, _state)) == null ? void 0 : _a.appManager;
  if (!appManager) {
    return;
  }
  const handlers = {
    spawn: () => appManager.spawn(arg),
    start: () => appManager.startApp(arg),
    stop: () => appManager.stopApp(arg),
    dispose: () => appManager.disposeApp(arg)
  };
  const handler = handlers[commandId];
  if (handler) {
    __privateMethod(this, _DevToolsCommandPalette_instances, addToHistory_fn).call(this, __privateGet(this, _inputEl).value.trim(), { id: commandId });
    handler();
    (_b = __privateGet(this, _state)) == null ? void 0 : _b.closeCommandPalette();
  }
};
executeHistoryEntry_fn = function(entry) {
  __privateGet(this, _inputEl).value = entry.input;
  __privateMethod(this, _DevToolsCommandPalette_instances, onInput_fn).call(this);
  const matchingCmd = __privateGet(this, _filteredCommands).find((c) => c.id === entry.cmdId);
  if (matchingCmd) {
    __privateMethod(this, _DevToolsCommandPalette_instances, executeCommand_fn).call(this, matchingCmd);
  }
};
addToHistory_fn = function(input, cmd) {
  const entry = { input, cmdId: cmd.id };
  const existingIndex = __privateGet(this, _history).findIndex((e) => e.input === input);
  if (existingIndex !== -1) {
    __privateGet(this, _history).splice(existingIndex, 1);
  }
  __privateGet(this, _history).unshift(entry);
  if (__privateGet(this, _history).length > __privateGet(this, _maxHistory)) {
    __privateGet(this, _history).pop();
  }
};
function collectActionsFromApp(app, actions) {
  var _a;
  const actionsMap = (_a = app.actionDispatcher) == null ? void 0 : _a.listAllActions();
  if (!actionsMap) {
    return;
  }
  for (const [controllerName, actionNames] of actionsMap) {
    for (const actionName of actionNames) {
      actions.push({
        id: `action:${app.$id}:${controllerName}:${actionName}`,
        title: actionName,
        subtitle: app.$id,
        type: "action",
        icon: ICONS.action,
        app,
        actionName
      });
    }
  }
}
function buildHistoryInput(actionName, args) {
  if (args.length === 0) {
    return actionName;
  }
  const argsString = args.map((arg) => {
    if (typeof arg === "string") {
      return `"${arg}"`;
    }
    if (typeof arg === "object") {
      return JSON.stringify(arg);
    }
    return String(arg);
  }).join(", ");
  return `${actionName} ${argsString}`;
}
function fuzzyScore(query, target) {
  if (target.includes(query)) {
    return 100 + query.length / target.length * 50;
  }
  let queryIndex = 0;
  let score = 0;
  let lastMatchIndex = -1;
  for (let i = 0; i < target.length && queryIndex < query.length; i++) {
    if (target[i] === query[queryIndex]) {
      score += 10;
      if (lastMatchIndex === i - 1) {
        score += 5;
      }
      lastMatchIndex = i;
      queryIndex++;
    }
  }
  if (queryIndex < query.length) {
    return 0;
  }
  return score;
}
const STYLES = buildCommandPaletteStyles();
customElements.define("devtools-command-palette", DevToolsCommandPalette);
export {
  DevToolsCommandPalette as default
};
