/*Kathrine*/
function show(value) {
    document.querySelector(".box").value = value;
  }

  let dropdown = document.querySelector(".dropdown")
  dropdown.onclick = function() {
      dropdown.classList.toggle("active")
}