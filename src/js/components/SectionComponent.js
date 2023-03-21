import BaseComponent from "./BaseComponent.js";

export default class SectionComponent extends BaseComponent {
  constructor(options) {
    super({ tag: "section", ...options });
    this.element.id = options.className;
    if (options.neighbor) {
      this.neighbor = document.querySelector(options.neighbor);
      this.neighbor.after(this.element);
    }
  }
}
