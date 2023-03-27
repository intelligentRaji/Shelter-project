import BaseComponent from "./BaseComponent.js";
import ButtonComponent from "./ButtonComponent.js";
import ImageComponent from "./ImageComponent.js";
import TextComponent from "./TextComponent.js";

export default class PopupComponent extends BaseComponent {
  constructor({ tag, className, parent, pet }) {
    super({ tag, className, parent });
    this.exitButton = new ButtonComponent({
      className: "popup-button",
      parent: this.element,
    });
    this.img = new ImageComponent({
      className: "popup-image",
      parent: this.element,
      src: pet.img,
    });
    this.about = new BaseComponent({
      tag: "div",
      className: "popup-about",
      parent: this.element,
    });
    this.name = new TextComponent({
      tag: "p",
      className: "popup-name",
      parent: this.about.element,
      text: pet.name,
    });
    this.type = new TextComponent({
      tag: "p",
      className: "popup-type",
      parent: this.about.element,
      text: `${pet.type} - ${pet.breed}`,
    });
    this.description = new TextComponent({
      tag: "p",
      className: "popup-description",
      parent: this.about.element,
      text: pet.description,
    });
    this.info = new BaseComponent({
      tag: "ul",
      className: "popup-info",
      parent: this.about.element,
    });
    this.age = new TextComponent({
      tag: "li",
      className: "popup-item",
      parent: this.info.element,
      text: `<b>Age</b>: ${pet.age}`,
    });
    this.inoculations = new TextComponent({
      tag: "li",
      className: "popup-item",
      parent: this.info.element,
      text: `<b>Inoculations</b>: ${pet.inoculations.join(", ")}`,
    });
    this.diseases = new TextComponent({
      tag: "li",
      className: "popup-item",
      parent: this.info.element,
      text: `<b>Diseases</b>: ${pet.diseases.join(", ")}`,
    });
    this.parasites = new TextComponent({
      tag: "li",
      className: "popup-item",
      parent: this.info.element,
      text: `<b>Parasites</b>: ${pet.parasites.join(", ")}`,
    });
    this.overlay = document.querySelector(".overlay");
    this.exitButton.element.addEventListener("click", () => this.closePopup());
  }

  closePopup() {
    this.overlay.style.visibility = "hidden";
    this.overlay.style.backgroundColor = "transparent";
    this.element.style.opacity = "0";
    document.body.style.overflow = "visible";
    this.element.addEventListener("transitionend", () => {
      this.element.remove();
    });
  }
}
