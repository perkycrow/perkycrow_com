import { c as cssVariables } from "./perky_explorer_styles-C0ezRuWU.js";
function createInputStyles(customStyles) {
  return `
        :host {
            ${cssVariables}
            display: inline-flex;
            font-family: var(--font-mono);
        }
        ${customStyles}
    `;
}
function emitChange(element, detail) {
  element.dispatchEvent(new CustomEvent("change", {
    detail,
    bubbles: true
  }));
}
const attributeHandlers = {
  value: (component, newValue) => {
    component.setValue(parseFloat(newValue) || 0);
  },
  min: (component, newValue) => {
    component.setMin(parseFloat(newValue) || 0);
  },
  max: (component, newValue) => {
    component.setMax(parseFloat(newValue) || 100);
  },
  step: (component, newValue) => {
    component.setStep(parseFloat(newValue) || 1);
  },
  label: (component, newValue) => {
    component.setLabel(newValue || "");
  },
  precision: (component, newValue) => {
    component.setPrecision(parseInt(newValue, 10) || 2);
  },
  checked: (component, newValue) => {
    component.setChecked(newValue !== null);
  }
};
function handleAttributeChange(component, name, oldValue, newValue) {
  if (oldValue === newValue) {
    return false;
  }
  const handler = attributeHandlers[name];
  if (handler) {
    handler(component, newValue);
    return true;
  }
  return false;
}
export {
  createInputStyles as c,
  emitChange as e,
  handleAttributeChange as h
};
