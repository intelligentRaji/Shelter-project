import BaseComponent from "../components/BaseComponent.js";
import ButtonComponent from "../components/ButtonComponent.js";
import TextComponent from "../components/TextComponent.js";

export default class Buttons extends BaseComponent {
  constructor(options) {
    super(options);
    this.parentClass = options.parentClass;
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
    this.right.element.onclick = this.showNextSlide.bind(this);
    this.doubleRight = new ButtonComponent({
      className: "our-friends-button double",
      parent: this.element,
      svg: "pets-double-right",
    });
    this.doubleRight.element.onclick = this.showLastSlide.bind(this);
  }

  showNextSlide() {
    const slide = this.parentClass.viewport.slides[0].element;
    const movementDistance = -103;
    const currentMargin = parseInt(slide.style.marginLeft, 10);
    this.page.element.textContent = `${
      Number(this.page.element.textContent) + 1
    }`;
    if (Number.isNaN(currentMargin)) {
      slide.style.marginLeft = `${movementDistance}%`;
    } else {
      slide.style.marginLeft = `${currentMargin + movementDistance}%`;
    }
    this.controlButtons();
  }

  showLastSlide() {
    const slide = this.parentClass.viewport.slides[0].element;
    const movementDistance = -103;
    this.page.element.textContent = `${this.parentClass.viewport.slides.length}`;
    slide.style.marginLeft = `${
      movementDistance * (this.parentClass.viewport.slides.length - 1)
    }%`;
    this.controlButtons();
  }

  showPreviouseSlide() {
    const slide = this.parentClass.viewport.slides[0].element;
    const movementDistance = 103;
    const currentMargin = parseInt(slide.style.marginLeft, 10);
    this.page.element.textContent = `${
      Number(this.page.element.textContent) - 1
    }`;
    if (Number.isNaN(currentMargin)) {
      slide.style.marginLeft = `${movementDistance}%`;
    } else {
      slide.style.marginLeft = `${currentMargin + movementDistance}%`;
    }
    this.controlButtons();
  }

  showFirstSlide() {
    const slide = this.parentClass.viewport.slides[0].element;
    this.page.element.textContent = `1`;
    slide.style.marginLeft = `0`;
    this.controlButtons();
  }

  controlButtons() {
    if (
      Number(this.page.element.textContent) ===
      this.parentClass.viewport.slides.length
    ) {
      this.right.element.classList.add("disabled");
      this.doubleRight.element.classList.add("disabled");
      this.right.element.onclick = null;
      this.doubleRight.element.onclick = null;
    }
    if (
      Number(this.page.element.textContent) !==
      this.parentClass.viewport.slides.length
    ) {
      this.right.element.classList.remove("disabled");
      this.doubleRight.element.classList.remove("disabled");
      this.right.element.onclick = this.showNextSlide.bind(this);
      this.doubleRight.element.onclick = this.showLastSlide.bind(this);
    }
    if (Number(this.page.element.textContent) === 1) {
      this.left.element.classList.add("disabled");
      this.doubleLeft.element.classList.add("disabled");
      this.left.element.onclick = null;
      this.doubleLeft.element.onclick = null;
    }
    if (Number(this.page.element.textContent) !== 1) {
      this.left.element.classList.remove("disabled");
      this.doubleLeft.element.classList.remove("disabled");
      this.left.element.onclick = this.showPreviouseSlide.bind(this);
      this.doubleLeft.element.onclick = this.showFirstSlide.bind(this);
    }
  }
}
