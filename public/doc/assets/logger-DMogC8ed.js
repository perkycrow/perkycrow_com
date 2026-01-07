var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _history, _maxHistory, _consoleOutput, _Logger_instances, record_fn, trimHistory_fn, emit_fn;
import { N as Notifier } from "./runtime-CM36Pd9c.js";
const CONSOLE_METHODS = {
  info: "info",
  warn: "warn",
  error: "error",
  notice: "log",
  success: "log"
};
class Logger extends Notifier {
  constructor() {
    super(...arguments);
    __privateAdd(this, _Logger_instances);
    __privateAdd(this, _history, []);
    __privateAdd(this, _maxHistory, 100);
    __privateAdd(this, _consoleOutput, true);
  }
  get history() {
    return __privateGet(this, _history);
  }
  get maxHistory() {
    return __privateGet(this, _maxHistory);
  }
  set maxHistory(value) {
    __privateSet(this, _maxHistory, value);
    __privateMethod(this, _Logger_instances, trimHistory_fn).call(this);
  }
  get consoleOutput() {
    return __privateGet(this, _consoleOutput);
  }
  set consoleOutput(value) {
    __privateSet(this, _consoleOutput, value);
  }
  log(...items) {
    __privateMethod(this, _Logger_instances, emit_fn).call(this, "notice", ...items);
  }
  info(...items) {
    __privateMethod(this, _Logger_instances, emit_fn).call(this, "info", ...items);
  }
  notice(...items) {
    __privateMethod(this, _Logger_instances, emit_fn).call(this, "notice", ...items);
  }
  warn(...items) {
    __privateMethod(this, _Logger_instances, emit_fn).call(this, "warn", ...items);
  }
  error(...items) {
    __privateMethod(this, _Logger_instances, emit_fn).call(this, "error", ...items);
  }
  success(...items) {
    __privateMethod(this, _Logger_instances, emit_fn).call(this, "success", ...items);
  }
  clear() {
    const entry = { event: "clear", timestamp: Date.now() };
    __privateMethod(this, _Logger_instances, record_fn).call(this, entry);
    this.emit("clear", entry);
  }
  spacer() {
    const entry = { event: "spacer", timestamp: Date.now() };
    __privateMethod(this, _Logger_instances, record_fn).call(this, entry);
    this.emit("spacer", entry);
  }
  title(title) {
    const entry = { event: "title", title, timestamp: Date.now() };
    __privateMethod(this, _Logger_instances, record_fn).call(this, entry);
    this.emit("title", entry);
  }
  clearHistory() {
    __privateSet(this, _history, []);
  }
}
_history = new WeakMap();
_maxHistory = new WeakMap();
_consoleOutput = new WeakMap();
_Logger_instances = new WeakSet();
record_fn = function(entry) {
  __privateGet(this, _history).push(entry);
  __privateMethod(this, _Logger_instances, trimHistory_fn).call(this);
};
trimHistory_fn = function() {
  while (__privateGet(this, _history).length > __privateGet(this, _maxHistory)) {
    __privateGet(this, _history).shift();
  }
};
emit_fn = function(type, ...items) {
  const entry = { event: "log", type, items, timestamp: Date.now() };
  __privateMethod(this, _Logger_instances, record_fn).call(this, entry);
  this.emit("log", entry);
  if (__privateGet(this, _consoleOutput)) {
    const method = CONSOLE_METHODS[type] || "log";
    console[method](...items);
  }
};
const logger = new Logger();
export {
  logger as l
};
