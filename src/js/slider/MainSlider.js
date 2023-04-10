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
    this.slides[0].element.style.marginLeft = "-103%";
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

  getArrayOfOptions(mode = undefined) {
    const arrayOfOptions = [];
    const cardsInSlide = [];
    for (let i = 0; i < this.cardsInSlide; i += 1) {
      const number = BaseComponent.getRandomNumber(0, this.files.length - 1);
      const options = this.files[number];
      if (this.currentSlides.length !== 0) {
        let NamesOfCardsInSlide;
        if (mode) {
          NamesOfCardsInSlide = this.currentSlides[0].map((item) => item.name);
        }
        if (!mode) {
          NamesOfCardsInSlide = this.currentSlides[
            this.currentSlides.length - 1
          ].map((item) => item.name);
        }
        if (NamesOfCardsInSlide.includes(options.name)) {
          if (mode) {
            return this.getArrayOfOptions(true);
          }
          return this.getArrayOfOptions();
        }
      }
      if (cardsInSlide.includes(options.name)) {
        if (mode) {
          return this.getArrayOfOptions(true);
        }
        return this.getArrayOfOptions();
      }
      cardsInSlide.push(options.name);
      arrayOfOptions.push(options);
    }
    return arrayOfOptions;
  }

  getSlides() {
    for (let i = 0; i < 3; i += 1) {
      const options = this.getArrayOfOptions();
      this.currentSlides.push(options);
      this.slides.push(
        new MainSlide({
          tag: "div",
          className: "our-friends-slide",
          parent: this.element,
          files: options,
        })
      );
    }
  }

  getNextSlide() {
    const options = this.getArrayOfOptions();
    this.currentSlides.push(options);
    this.slides.push(
      new MainSlide({
        tag: "div",
        className: "our-friends-slide",
        parent: this.element,
        files: options,
      })
    );
    this.slides[0].element.remove();
    this.currentSlides.shift();
    this.slides.shift();
  }

  getPreviouseSlide() {
    const options = this.getArrayOfOptions(true);
    this.currentSlides.unshift(options);
    this.slides.unshift(
      new MainSlide({
        tag: "div",
        className: "our-friends-slide",
        parent: this.element,
        files: options,
        prepend: true,
      })
    );
    this.slides[this.slides.length - 1].element.remove();
    this.slides[0].element.style.marginLeft = "-103%";
    this.currentSlides.pop();
    this.slides.pop();
  }
}
