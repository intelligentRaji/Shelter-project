import BaseComponent from "./components/BaseComponent.js";

export default function burgerMenu() {
  const overlay = new BaseComponent({
    tag: "div",
    className: "overlay",
    parent: document.body,
  });
  const burger = document.querySelector(".header-burger");
  const burgerNavigation = document.querySelector(".header-nav");
  const links = document.querySelectorAll(".header-link");

  function showOverlay() {
    if (burger.classList.contains("active")) {
      overlay.element.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
      overlay.element.style.visibility = "visible";
    } else {
      overlay.element.style.backgroundColor = "transparent";
      overlay.element.style.visibility = "hidden";
    }
  }

  function showBurger() {
    burger.classList.toggle("active");
    showOverlay();
  }

  burger.addEventListener("click", showBurger);

  links.forEach((item) => item.addEventListener("click", showBurger));

  document.addEventListener("click", (e) => {
    const target =
      e.composedPath().includes(burgerNavigation) ||
      e.composedPath().includes(burger);
    if (!target) showBurger();
  });
}
