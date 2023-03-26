import "../css/main/style.css";
import Slider from "./slider/slider.js";
import burgerMenu from "./burger.js";

async function startApp() {
  const res = await fetch("./json/pets.json");
  const data = await res.json();
  // eslint-disable-next-line no-new
  new Slider({
    className: "our-friends",
    neighbor: document.querySelector(".about"),
    files: data,
  });
}

burgerMenu();
await startApp();
