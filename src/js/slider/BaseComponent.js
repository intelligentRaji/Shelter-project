export default class BaseComponent {
  constructor({ tag, className, parent }) {
    this.element = document.createElement(tag);
    this.element.className = className;
    if (parent) parent.append(this.element);
  }
}
