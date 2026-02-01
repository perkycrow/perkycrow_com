class RenderTransform {
  constructor(options = {}) {
    this.enabled = options.enabled ?? true;
  }
  init() {
  }
  apply(context, matrices) {
    return matrices;
  }
  getProgram() {
    return null;
  }
  applyUniforms() {
  }
  dispose() {
  }
}
export {
  RenderTransform as R
};
