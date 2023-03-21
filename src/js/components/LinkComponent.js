import BaseComponent from "./BaseComponent.js";

export default class LinkComponent extends BaseComponent {
  constructor({ className, parent, src }) {
    super({ tag: "a", className, parent });
    this.element.href = src;
  }
}
