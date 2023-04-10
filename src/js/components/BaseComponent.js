export default class BaseComponent {
  constructor({ tag, className, parent, neighbor, prepend }) {
    this.element = document.createElement(tag);
    this.element.className = className;
    if (prepend) parent.prepend(this.element);
    if (parent && !prepend) parent.append(this.element);
    if (neighbor) {
      this.neighbor = neighbor;
      this.neighbor.after(this.element);
    }
  }

  static getFirstClassName(className) {
    return className.split(" ")[0];
  }

  static getRandomNumber(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  }
}
