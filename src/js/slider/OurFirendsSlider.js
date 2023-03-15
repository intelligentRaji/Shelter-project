import arrow from "../../assets/svg/Arrow.svg";
import BaseComponent from "./BaseComponent.js";
import ButtonComponent from "./ButtonComponent.js";

export default class OurFriendsSlider extends BaseComponent {
  constructor(options) {
    super(options);
    this.right = new ButtonComponent({
      className: "our-friends-slider-button",
      modificator: "right",
      parent: this.element,
      src: arrow,
    });
  }
}
