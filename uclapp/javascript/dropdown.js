/*ANDREA*/
let selektElementA = document.getElementById("selektboksA");

let optionsA = ["10:00-10:30","10:30-11:00","11:00-11:30","11:30-12:00","12:00-12:30","12:30-13:00"]

selektElementA.innerHTML = "";

for(let i = 0; i <optionsA.length; i++){
    let optA = optionsA[i];
    selektElementA.innerHTML+="<option value=\"" + optA + "\">" + optA + "</option>";
}

/*Kathrine*/
function show(value) {
    document.querySelector(".box").value = value;
  }

  let dropdown = document.querySelector(".dropdown")
  dropdown.onclick = function() {
      dropdown.classList.toggle("active")
}
