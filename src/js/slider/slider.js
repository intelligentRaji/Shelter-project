import SectionComponent from "../components/SectionComponent.js";
import BaseComponent from "../components/BaseComponent.js";
import TextComponent from "../components/TextComponent.js";
import arrow from "../../assets/svg/Arrow.svg";
import ButtonComponent from "../components/ButtonComponent.js";
import MainSlider from "./MainSlider.js";
import LinkComponent from "../components/LinkComponent.js";

export default class Slider extends SectionComponent {
  constructor(options) {
    super(options);
    this.files = options.files;
    this.container = new BaseComponent({
      tag: "div",
      className: "container",
      parent: this.element,
    });
    this.ourFriendsWrapper = new BaseComponent({
      tag: "div",
      className: "our-friends-wrapper",
      parent: this.container.element,
    });
    this.title = new TextComponent({
      tag: "h2",
      className: "our-friends-title h2",
      parent: this.ourFriendsWrapper.element,
      text: "Our friends who <br> are looking for a house",
    });
    this.sliderWrapper = new BaseComponent({
      tag: "div",
      className: "our-friends-slider",
      parent: this.ourFriendsWrapper.element,
    });
    this.left = new ButtonComponent({
      className: "our-friends-slider-button left",
      parent: this.sliderWrapper.element,
      src: arrow,
      alt: "left",
    });
    this.left.element.onclick = this.showPreviouseSlide.bind(this);
    this.viewport = new MainSlider({
      tag: "div",
      className: "our-friends-viewport",
      parent: this.sliderWrapper.element,
      files: this.files,
    });
    this.right = new ButtonComponent({
      className: "our-friends-slider-button right",
      parent: this.sliderWrapper.element,
      src: arrow,
      alt: "right",
    });
    this.right.element.onclick = this.showNextSlide.bind(this);
    this.button = new LinkComponent({
      className: "our-friends-button",
      parent: this.ourFriendsWrapper.element,
      src: "pets.html",
    });
    this.buttonText = new TextComponent({
      tag: "p",
      className: "our-friends-button-text",
      parent: this.button.element,
      text: "Get to know the rest",
    });
    window.addEventListener("resize", () => {
      if (
        window.innerWidth < 1080 &&
        window.innerWidth > 756 &&
        this.viewport.cardsInSlide !== 2
      ) {
        this.genereteSlider();
      }
      if (window.innerWidth > 1080 && this.viewport.cardsInSlide !== 3) {
        this.genereteSlider();
      }
      if (window.innerWidth < 756 && this.viewport.cardsInSlide !== 1) {
        this.genereteSlider();
      }
    });
  }

  showNextSlide() {
    const button = this.right.element;
    this.viewport.getNextSlide();
    const slide = this.viewport.slides[0].element;
    const movementDistance = -103;
    const currentMargin = parseInt(slide.style.marginLeft, 10);
    if (Number.isNaN(currentMargin)) {
      slide.style.marginLeft = `${movementDistance}%`;
    } else {
      slide.style.marginLeft = `${currentMargin + movementDistance}%`;
    }
    button.onclick = null;
    slide.addEventListener("transitionend", () => {
      button.onclick = this.showNextSlide.bind(this);
    });
  }

  showPreviouseSlide() {
    const button = this.left.element;
    const slide = this.viewport.slides[0].element;
    const movementDistance = 103;
    const currentMargin = parseInt(slide.style.marginLeft, 10);
    if (Number.isNaN(currentMargin)) {
      slide.style.marginLeft = `${movementDistance}%`;
    } else {
      slide.style.marginLeft = `${currentMargin + movementDistance}%`;
    }
    button.onclick = null;
    this.viewport.getPreviouseSlide();
    slide.addEventListener("transitionend", () => {
      button.onclick = this.showPreviouseSlide.bind(this);
    });
  }

  genereteSlider() {
    this.viewport.element.remove();
    this.viewport = new MainSlider({
      tag: "div",
      className: "our-friends-viewport",
      neighbor: this.left.element,
      files: this.files,
    });
  }
}
