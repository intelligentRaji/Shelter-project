import BaseComponent from "./BaseComponent.js";

export default class TextComponent extends BaseComponent {
  constructor(options) {
    super(options);
    this.element.textContent = options.text;
  }
}
