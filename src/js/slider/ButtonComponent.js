import BaseComponent from "./BaseComponent.js";
import ImageComponent from "./ImageComponent.js";

export default class ButtonComponent extends BaseComponent {
  constructor({ className, modificator, parent, text, src }) {
    super({ tag: "button", className, parent });
    if (modificator) this.element.classList.add(modificator);
    if (text) this.element.textContent = text;
    if (src) {
      this.image = new ImageComponent({
        className: `${className}-img`,
        parent: this.element,
        src,
      });
    }
  }
}
