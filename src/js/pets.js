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
