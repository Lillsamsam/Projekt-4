/*ANDREA*/
const menu = document.querySelector(".menu");
const burger = document.querySelector(".burger");

function Menu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
  } else {
    menu.classList.add("showMenu");
  }
}
burger.addEventListener("click", Menu);