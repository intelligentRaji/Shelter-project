import BaseComponent from "./BaseComponent.js";

export default class SlideComponent extends BaseComponent {
  constructor(options) {
    super(options);
    this.files = options.files;
  }
}
