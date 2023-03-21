import "../css/pets/style.css";
import Pagination from "./pets/pagination.js";

async function startApp() {
  const res = await fetch("./json/pets.json");
  const data = await res.json();
  // eslint-disable-next-line no-new
  new Pagination({
    className: "our-friends",
    parent: document.querySelector(".main"),
    files: data,
  });
}

startApp();

console.log(
  "Страница Main 60/60 - все пункты выполнены\n Проверка верстки 7/7\n Вёрстка соответствует макету 35/35\n Требования к css 6/6\n Интерактивность элементов 12/12\n\n Страница Pets 40/40\n Проверка верстки 7/7\n Вёрстка соответствует макету 15/15\n Требования к css 4/4\n Интерактивность элементов 14/14"
);
