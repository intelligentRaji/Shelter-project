import BaseComponent from "../components/BaseComponent.js";
import ViewportComponent from "../components/ViewportComponent.js";
import MainSlide from "./mianSlide.js";

export default class MainSlider extends ViewportComponent {
  currentSlides = [];

  slides = [];

  constructor(options) {
    super(options);
    this.files = options.files;
    this.getNumberOfCardsInSlide();
    this.getSlides();
  }

  getNumberOfCardsInSlide() {
    if (window.innerWidth > 1080) {
      this.cardsInSlide = 3;
    } else if (window.innerWidth <= 1080 && window.innerWidth > 756) {
      this.cardsInSlide = 2;
    } else if (window.innerWidth <= 756) {
      this.cardsInSlide = 1;
    }
  }

  getArrayOfOptions() {
    const arrayOfOptions = [];
    const cardsInSlide = [];
    for (let i = 0; i < this.cardsInSlide; i += 1) {
      const number = BaseComponent.getRandomNumber(0, this.files.length - 1);
      const options = this.files[number];
      if (this.currentSlides.length !== 0) {
        const NamesOfCardsInSlide = this.currentSlides[
          this.currentSlides.length - 1
        ].map((item) => item.name);
        if (NamesOfCardsInSlide.includes(options.name)) {
          return this.getArrayOfOptions();
        }
      }
      if (cardsInSlide.includes(options.name)) {
        return this.getArrayOfOptions();
      }
      cardsInSlide.push(options.name);
      arrayOfOptions.push(options);
    }
    this.currentSlides.push(arrayOfOptions);
    return arrayOfOptions;
  }

  getSlides() {
    for (let i = 0; i < 3; i += 1) {
      this.slides.push(
        new MainSlide({
          tag: "div",
          className: "our-friends-slide",
          parent: this.element,
          files: this.getArrayOfOptions(),
        })
      );
    }
  }
}
