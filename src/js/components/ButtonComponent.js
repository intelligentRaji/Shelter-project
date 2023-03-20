import BaseComponent from "./BaseComponent.js";
import ImageComponent from "./ImageComponent.js";

export default class ButtonComponent extends BaseComponent {
  constructor({ className, parent, text, src, alt, svg }) {
    super({ tag: "button", className, parent });
    if (text) this.element.textContent = text;
    if (src) {
      this.image = new ImageComponent({
        className: `${BaseComponent.getFirstClassName(className)}-img`,
        parent: this.element,
        src,
        alt,
      });
    }
    if (svg)
      this.element.innerHTML = `<svg class = "${BaseComponent.getFirstClassName(
        className
      )}-svg"><use xlink:href="assets/svg/sprite.svg#${svg}"></use></svg>`;
  }
}
