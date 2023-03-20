import SlideComponent from "../components/SlideComponent.js";
import BaseComponent from "../components/BaseComponent.js";
import CardComponent from "../components/CardComponent.js";

export default class MainSlide extends SlideComponent {
  static activeCards = [];

  static previouseGeneratedCards = [];

  constructor(options) {
    super(options);
    this.previouseCards = [];
    this.cardsInSlide = [];
    this.cards = this.generateCards(MainSlide.previouseGeneratedCards);
  }

  generateCards(checkingProperty) {
    const res = [];
    const numberOfCardsPerSlide = 3;
    const cardsInSlide = [];
    for (let i = 0; i < numberOfCardsPerSlide; i += 1) {
      const card = this.getRandomCard(checkingProperty);
      res.push(card[0]);
      cardsInSlide.push(card[1]);
    }
    if (checkingProperty === MainSlide.previouseGeneratedCards) {
      MainSlide.previouseGeneratedCards = cardsInSlide;
    } else {
      MainSlide.activeCards = cardsInSlide;
    }
    return res;
  }

  getRandomCard(checkingProperty) {
    const number = BaseComponent.getRandomNumber(0, this.files.length - 1);
    const card = this.files[number];
    if (
      checkingProperty.includes(card.name) ||
      this.previouseCards.includes(card.name)
    ) {
      return this.getRandomCard(checkingProperty);
    }
    this.previouseCards.push(card.name);
    return [
      new CardComponent({
        tag: "div",
        className: "our-friends-card",
        parent: this.element,
        settings: card,
      }),
      card.name,
    ];
  }
}
