import SlideComponent from "../components/SlideComponent.js";
import ViewportComponent from "../components/ViewportComponent.js";
import shuffleArray from "../utils/shuffle.js";

export default class PetsSlider extends ViewportComponent {
  constructor(options) {
    super(options);
    this.getFiles(options.files);
    this.getSlides();
    console.log(this.slides);
  }

  getFiles(files) {
    const shuffledFiles = shuffleArray(files);
    let res = [];
    for (let i = 0; i < 6; i += 1) {
      res = res.concat(shuffleArray(shuffledFiles));
    }
    this.files = res;
  }

  getSlides() {
    const cardsPerSlide = 8;
    const res = [];
    for (let i = 0; i < this.files.length; i += cardsPerSlide) {
      const cardsInSlide = this.files.slice(i, cardsPerSlide);
      res.push(
        new SlideComponent({
          tag: "div",
          className: "our-friends-slide",
          parent: this.element,
          files: cardsInSlide,
        })
      );
    }
  }
}
