import SlideComponent from "../components/SlideComponent.js";
import CardComponent from "../components/CardComponent.js";

export default class PetsSlide extends SlideComponent {
  constructor(options) {
    super(options);
    this.getCards();
  }

  getCards() {
    this.cards = [];
    this.files.forEach((item) =>
      this.cards.push(
        new CardComponent({
          tag: "div",
          className: "our-friends-card",
          parent: this.element,
          settings: item,
        })
      )
    );
  }
}
