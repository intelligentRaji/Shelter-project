export default class BaseComponent {
  constructor({ tag, className, parent }) {
    this.element = document.createElement(tag);
    this.element.className = className;
    if (parent) parent.append(this.element);
  }

  static getFirstClassName(className) {
    return className.split(" ")[0];
  }

  static getRandomNumber(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  }
}
