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
      parentClass: this,
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1200 && this.viewport.cardsPerSlide !== 8) {
        this.genereteSlider(options.files);
      }
      if (
        window.innerWidth <= 1200 &&
        window.innerWidth > 630 &&
        this.viewport.cardsPerSlide !== 6
      ) {
        this.genereteSlider(options.files);
      }
      if (window.innerWidth <= 630 && this.viewport.cardsPerSlide !== 3) {
        this.genereteSlider(options.files);
      }
    });
  }

  genereteSlider(settings) {
    this.viewport.element.remove();
    this.viewport = new PetsSlider({
      tag: "div",
      className: "our-friends-viewport",
      neighbor: this.title.element,
      files: settings,
    });
    this.buttons.element.remove();
    this.buttons = new Buttons({
      tag: "div",
      className: "our-friends-buttons",
      parent: this.container.element,
      parentClass: this,
    });
  }
}
