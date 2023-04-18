/*ANDREA*/
let select_element = document.getElementById("selectboks");
let options = ["08:00-09:00", "09:00-10:00", "10:00-11:00", "12:00-13:00", "13:00-14:00", "14:00-15:00"];

select_element.innerHTML = "";

for (let i = 0; i < options.length; i++) {
  let opt = options[i];
  select_element.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";}

/*KATHRINE*/

function show(value) {
    document.querySelector(".dropbox").value = value;
  }

  let dropdown = document.querySelector(".dropdown")
  dropdown.onclick = function() {
      dropdown.classList.toggle("active")
  }