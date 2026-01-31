var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _state, _overlayEl, _containerEl, _inputEl, _resultsEl, _appActions, _internalCommands, _filteredCommands, _selectedIndex, _history, _maxHistory, _DevToolsCommandPalette_instances, buildDOM_fn, rebuildAll_fn, buildAppActions_fn, buildInternalCommands_fn, addFloatingToolCommands_fn, onInput_fn, showHistory_fn, filterCommands_fn, renderResults_fn, groupCommands_fn, createResultItem_fn, updateSelection_fn, onKeydown_fn, executeCurrentCommand_fn, autocompleteSelected_fn, executeCommand_fn, executeTemplateCommand_fn, executeToolCommand_fn, executeHistoryEntry_fn, addToHistory_fn, executeInspectCommand_fn;
import { E as EditorComponent, e as editorScrollbarStyles, b as editorBaseStyles, I as ICONS } from "./perky_store-C6_wT1fL.js";
import { c as createElement, l as logger } from "./preload-helper-CeD19KcA.js";
import { c as commandPaletteStyles, g as getAllTools } from "./main-DP9Ao9SF.js";
import "./spritesheet_viewer-e3Yq6yFI.js";
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
class DevToolsCommandPalette extends EditorComponent {
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
  onConnected() {
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
  __privateSet(this, _overlayEl, createElement("div", { class: "command-palette-overlay hidden" }));
  __privateGet(this, _overlayEl).addEventListener("click", (e) => {
    var _a;
    if (e.target === __privateGet(this, _overlayEl)) {
      (_a = __privateGet(this, _state)) == null ? void 0 : _a.closeCommandPalette();
    }
  });
  __privateSet(this, _containerEl, createElement("div", { class: "command-palette-container" }));
  const inputWrapper = createElement("div", { class: "command-palette-input-wrapper" });
  const icon = createElement("span", { class: "command-palette-icon", text: ">_" });
  __privateSet(this, _inputEl, createElement("input", {
    class: "command-palette-input",
    attrs: { type: "text", placeholder: "Type a command..." }
  }));
  __privateGet(this, _inputEl).addEventListener("input", () => __privateMethod(this, _DevToolsCommandPalette_instances, onInput_fn).call(this));
  __privateGet(this, _inputEl).addEventListener("keydown", (e) => __privateMethod(this, _DevToolsCommandPalette_instances, onKeydown_fn).call(this, e));
  inputWrapper.appendChild(icon);
  inputWrapper.appendChild(__privateGet(this, _inputEl));
  __privateSet(this, _resultsEl, createElement("div", { class: "command-palette-results" }));
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
  commands.push({
    id: "inspect",
    title: "/inspect",
    placeholder: "appId.query(selector)",
    subtitle: "Inspect module",
    type: "template",
    icon: ICONS.logger
  });
  __privateMethod(this, _DevToolsCommandPalette_instances, addFloatingToolCommands_fn).call(this, commands);
  return commands;
};
addFloatingToolCommands_fn = function(commands) {
  var _a;
  const toolManager = (_a = __privateGet(this, _state)) == null ? void 0 : _a.toolManager;
  if (!toolManager) {
    return;
  }
  const tools = toolManager.listTools();
  for (const tool of tools) {
    commands.push({
      id: `tool:${tool.id}`,
      title: `/tool ${tool.id}`,
      placeholder: "key=value ...",
      subtitle: `Open ${tool.name}`,
      type: "template",
      icon: tool.icon
    });
  }
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
      const empty = createElement("div", { class: "command-palette-empty", text: "No results found" });
      __privateGet(this, _resultsEl).appendChild(empty);
    } else {
      const hint = createElement("div", { class: "command-palette-hint", text: "Type to search actions, / for commands" });
      __privateGet(this, _resultsEl).appendChild(hint);
    }
    return;
  }
  const groups = __privateMethod(this, _DevToolsCommandPalette_instances, groupCommands_fn).call(this);
  for (const [subtitle, commands] of Object.entries(groups)) {
    const sectionTitle = createElement("div", { class: "command-palette-section-title", text: subtitle });
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
  const result = createElement("div", { class: "command-palette-result", attrs: { "data-id": cmd.id } });
  const icon = createElement("span", { class: "command-palette-result-icon", html: cmd.icon });
  const text = createElement("div", { class: "command-palette-result-text" });
  const title = createElement("div", { class: "command-palette-result-title", text: cmd.title });
  if (cmd.placeholder) {
    const placeholder = createElement("span", { class: "command-palette-placeholder", text: ` ${cmd.placeholder}` });
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
    Tab: () => {
      __privateMethod(this, _DevToolsCommandPalette_instances, autocompleteSelected_fn).call(this);
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
autocompleteSelected_fn = function() {
  const selected = __privateGet(this, _filteredCommands)[__privateGet(this, _selectedIndex)];
  if (selected) {
    __privateGet(this, _inputEl).value = selected.title + " ";
    __privateMethod(this, _DevToolsCommandPalette_instances, onInput_fn).call(this);
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
  if (commandId.startsWith("tool:")) {
    __privateMethod(this, _DevToolsCommandPalette_instances, executeToolCommand_fn).call(this, commandId);
    return;
  }
  const appManager = (_a = __privateGet(this, _state)) == null ? void 0 : _a.appManager;
  if (!appManager) {
    return;
  }
  const handlers = {
    spawn: () => appManager.spawn(arg),
    start: () => appManager.startApp(arg),
    stop: () => appManager.stopApp(arg),
    dispose: () => appManager.disposeApp(arg),
    inspect: () => __privateMethod(this, _DevToolsCommandPalette_instances, executeInspectCommand_fn).call(this, arg)
  };
  const handler = handlers[commandId];
  if (handler) {
    __privateMethod(this, _DevToolsCommandPalette_instances, addToHistory_fn).call(this, __privateGet(this, _inputEl).value.trim(), { id: commandId });
    handler();
    (_b = __privateGet(this, _state)) == null ? void 0 : _b.closeCommandPalette();
  }
};
executeToolCommand_fn = function(commandId) {
  var _a, _b;
  const toolManager = (_a = __privateGet(this, _state)) == null ? void 0 : _a.toolManager;
  if (!toolManager) {
    return;
  }
  const toolId = commandId.replace("tool:", "");
  const input = __privateGet(this, _inputEl).value.trim();
  const { args } = parseCommand(input);
  const params = parseToolParams(args);
  __privateMethod(this, _DevToolsCommandPalette_instances, addToHistory_fn).call(this, input, { id: commandId });
  toolManager.open(toolId, params);
  (_b = __privateGet(this, _state)) == null ? void 0 : _b.closeCommandPalette();
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
executeInspectCommand_fn = function(expression) {
  var _a, _b;
  const appManager = (_a = __privateGet(this, _state)) == null ? void 0 : _a.appManager;
  if (!appManager) {
    return;
  }
  const result = evaluateExpression(expression, appManager);
  if (result !== void 0) {
    logger.info(result);
    (_b = __privateGet(this, _state)) == null ? void 0 : _b.openLogger();
  }
};
__publicField(DevToolsCommandPalette, "styles", `
    ${editorScrollbarStyles}
    ${editorBaseStyles}
    ${commandPaletteStyles}
    `);
function collectActionsFromApp(app, actions) {
  var _a;
  const actionsMap = (_a = app.actionDispatcher) == null ? void 0 : _a.listAllActions();
  if (!actionsMap) {
    return;
  }
  for (const [controllerName, actionInfos] of actionsMap) {
    for (const actionInfo of actionInfos) {
      const actionName = typeof actionInfo === "string" ? actionInfo : actionInfo.name;
      const params = typeof actionInfo === "object" ? actionInfo.params : [];
      const placeholder = formatParamsPlaceholder(params);
      actions.push({
        id: `action:${app.$id}:${controllerName}:${actionName}`,
        title: actionName,
        subtitle: app.$id,
        type: "action",
        icon: ICONS.action,
        app,
        actionName,
        placeholder
      });
    }
  }
}
function formatParamsPlaceholder(params) {
  if (!params || params.length === 0) {
    return null;
  }
  return params.map((p) => {
    if (typeof p === "string") {
      return p;
    }
    if (p.defaultValue !== null) {
      return `${p.name}=${p.defaultValue}`;
    }
    return p.name;
  }).join(", ");
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
function evaluateExpression(expression, appManager) {
  const parts = parseExpression(expression);
  const appId = parts[0];
  const app = appManager.getChild(appId);
  if (!app) {
    logger.warn(`App "${appId}" not found`);
    return void 0;
  }
  if (parts.length === 1) {
    return app;
  }
  let current = app;
  for (let i = 1; i < parts.length; i++) {
    const part = parts[i];
    if (part.type === "method") {
      if (typeof current[part.name] === "function") {
        current = current[part.name](part.arg);
      } else {
        logger.warn(`Method "${part.name}" not found`);
        return void 0;
      }
    } else {
      current = current[part];
    }
    if (current === void 0 || current === null) {
      logger.warn(`Property "${part.name || part}" not found`);
      return void 0;
    }
  }
  return current;
}
function handleQuoteChar(char, state) {
  if ((char === '"' || char === "'") && !state.inQuotes) {
    state.inQuotes = true;
    state.quoteChar = char;
    return true;
  }
  if (char === state.quoteChar && state.inQuotes) {
    state.inQuotes = false;
    state.quoteChar = null;
    return true;
  }
  return false;
}
function handleParenChar(char, state) {
  if (char === "(" && !state.inQuotes) {
    state.inParens++;
    return true;
  }
  if (char === ")" && !state.inQuotes) {
    state.inParens--;
    return true;
  }
  return false;
}
function parseExpression(expression) {
  const parts = [];
  let current = "";
  const state = { inParens: 0, inQuotes: false, quoteChar: null };
  for (const char of expression) {
    handleQuoteChar(char, state);
    handleParenChar(char, state);
    if (char === "." && !state.inQuotes && state.inParens === 0) {
      if (current) {
        parts.push(parsePart(current));
      }
      current = "";
    } else {
      current += char;
    }
  }
  if (current) {
    parts.push(parsePart(current));
  }
  return parts;
}
function parsePart(part) {
  const methodMatch = part.match(/^(\w+)\((['"]?)(.*)(['"]?)\)$/);
  if (methodMatch) {
    const [, name, , arg] = methodMatch;
    return { type: "method", name, arg };
  }
  return part;
}
function parseToolParams(args) {
  const params = {};
  for (const arg of args) {
    if (typeof arg === "object") {
      Object.assign(params, arg);
      continue;
    }
    if (typeof arg !== "string" || !arg.includes("=")) {
      continue;
    }
    const eqIndex = arg.indexOf("=");
    const key = arg.slice(0, eqIndex);
    const value = parseParamValue(arg.slice(eqIndex + 1));
    params[key] = value;
  }
  return params;
}
function parseParamValue(value) {
  if (value === "true") {
    return true;
  }
  if (value === "false") {
    return false;
  }
  if (!isNaN(value) && value !== "") {
    return Number(value);
  }
  return value;
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
customElements.define("devtools-command-palette", DevToolsCommandPalette);
export {
  DevToolsCommandPalette as default
};
