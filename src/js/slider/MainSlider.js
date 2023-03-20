import ViewportComponent from "../components/ViewportComponent.js";
import MainSlide from "./mianSlide.js";

export default class MainSlider extends ViewportComponent {
  constructor(options) {
    super(options);
    this.files = options.files;
    this.getSlides();
  }

  getSlides() {
    this.slides = [];
    for (let i = 0; i < 3; i += 1) {
      this.slides.push(
        new MainSlide({
          tag: "div",
          className: "our-friends-slide",
          parent: this.element,
          files: this.files,
        })
      );
    }
  }
}
