import BaseComponent from "./BaseComponent.js";
import ImageComponent from "./ImageComponent.js";
import TextComponent from "./TextComponent.js";
import ButtonComponent from "./ButtonComponent.js";

export default class CardComponent extends BaseComponent {
  constructor(options) {
    super(options);
    this.src = options.settings.img;
    this.image = new ImageComponent({
      className: "our-friends-card-img",
      parent: this.element,
      src: options.settings.img,
    });
    this.name = new TextComponent({
      tag: "p",
      className: "our-friends-card-text",
      parent: this.element,
      text: `${options.settings.name}`,
    });
    this.button = new ButtonComponent({
      className: "our-friends-card-button",
      parent: this.element,
      text: "Learn more",
    });
  }
}
