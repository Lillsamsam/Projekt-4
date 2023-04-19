/*ANDREA*/
let select_element = document.getElementsByClassName("selektboks");
let options = ["08:00-09:00", "09:00-10:00", "10:00-11:00", "12:00-13:00", "13:00-14:00", "14:00-15:00"];

select_element.innerHTML = "";

for (let i = 0; i < options.length; i++) {
  let opt = options[i];
  select_element.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";}

