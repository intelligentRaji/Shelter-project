import BaseComponent from "./BaseComponent.js";

export default class ImageComponent extends BaseComponent {
  constructor(options) {
    super({ tag: "img", ...options });
    this.element.src = options.src;
  }
}
