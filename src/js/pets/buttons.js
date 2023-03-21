import BaseComponent from "../components/BaseComponent.js";
import ButtonComponent from "../components/ButtonComponent.js";
import TextComponent from "../components/TextComponent.js";

export default class Buttons extends BaseComponent {
  constructor(options) {
    super(options);
    this.doubleLeft = new ButtonComponent({
      className: "our-friends-button left double disabled",
      parent: this.element,
      svg: "pets-double-right",
    });
    this.left = new ButtonComponent({
      className: "our-friends-button left disabled",
      parent: this.element,
      svg: "pets-right",
    });
    this.page = new TextComponent({
      tag: "p",
      className: "our-friends-page",
      parent: this.element,
      text: "1",
    });
    this.right = new ButtonComponent({
      className: "our-friends-button",
      parent: this.element,
      svg: "pets-right",
    });
    this.doubleRight = new ButtonComponent({
      className: "our-friends-button double",
      parent: this.element,
      svg: "pets-double-right",
    });
  }
}
