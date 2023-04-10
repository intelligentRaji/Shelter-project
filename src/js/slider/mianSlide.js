import SlideComponent from "../components/SlideComponent.js";
import CardComponent from "../components/CardComponent.js";

export default class MainSlide extends SlideComponent {
  cards = [];

  constructor(options) {
    super(options);
    this.files = options.files;
    this.getCards();
  }

  getCards() {
    this.files.forEach((item) => {
      this.cards.push(
        new CardComponent({
          tag: "div",
          className: "our-friends-card",
          parent: this.element,
          settings: item,
        })
      );
    });
  }
}
