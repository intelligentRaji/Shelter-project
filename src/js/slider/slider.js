import SectionComponent from "./SectionComponent.js";
import BaseComponent from "./BaseComponent.js";
import TextComponent from "./TextComponent.js";
import OurFriendsSlider from "./OurFirendsSlider.js";

export default class Slider extends SectionComponent {
  constructor(options) {
    super(options);
    this.container = new BaseComponent({
      tag: "div",
      className: "container",
      parent: this.element,
    });
    this.wrapper = new BaseComponent({
      tag: "div",
      className: "our-friends-wrapper",
      parent: this.container.element,
    });
    this.title = new TextComponent({
      tag: "h2",
      className: "our-friends-title h2",
      parent: this.wrapper.element,
      text: "Our friends who are looking for a house",
    });
    this.sliderWrapper = new OurFriendsSlider({
      tag: "div",
      className: "our-friends-slider-wrapper",
      parent: this.wrapper.element,
    });
  }
}
