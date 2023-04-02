import BaseComponent from "./BaseComponent.js";
import ImageComponent from "./ImageComponent.js";
import TextComponent from "./TextComponent.js";
import ButtonComponent from "./ButtonComponent.js";
import PopupComponent from "./PopupComponent.js";
import getScrollbarWidth from "../utils/getScrollbarWidth.js";

export default class CardComponent extends BaseComponent {
  constructor(options) {
    super(options);
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
    this.overlay = document.querySelector(".overlay");
    this.element.addEventListener("click", async () => {
      await this.createPopup(options.settings);
      const scrollWidth = getScrollbarWidth();
      this.overlay.classList.add("active");
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollWidth}px`;
    });
  }

  async createPopup(options) {
    this.popup = new PopupComponent({
      tag: "div",
      className: "popup",
      parent: document.body,
      pet: options,
    });
  }
}
