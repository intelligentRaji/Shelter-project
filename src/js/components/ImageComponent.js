import BaseComponent from "./BaseComponent.js";

export default class ImageComponent extends BaseComponent {
  constructor(options) {
    super({ tag: "img", ...options });
    this.element.src = options.src;
    if (options.alt) {
      this.element.alt = options.alt;
    } else {
      this.element.alt = ImageComponent.getBaseName(options.src);
    }
  }

  static getBaseName(src) {
    return src.split("/").slice(-1)[0].split(".")[0];
  }
}
