import BaseComponent from "../components/BaseComponent.js";
import SectionComponent from "../components/SectionComponent.js";
import TextComponent from "../components/TextComponent.js";
import Buttons from "./buttons.js";
import PetsSlider from "./petsSlider.js";

export default class Pagination extends SectionComponent {
  constructor(options) {
    super({ tag: "section", ...options });
    this.container = new BaseComponent({
      tag: "div",
      className: "our-friends-container container",
      parent: this.element,
    });
    this.title = new TextComponent({
      tag: "h2",
      className: "our-friends-title h2",
      parent: this.container.element,
      text: "Our friends who <br> are looking for a house",
    });
    this.viewport = new PetsSlider({
      tag: "div",
      className: "our-friends-viewport",
      parent: this.container.element,
      files: options.files,
    });
    this.buttons = new Buttons({
      tag: "div",
      className: "our-friends-buttons",
      parent: this.container.element,
    });
  }
}
