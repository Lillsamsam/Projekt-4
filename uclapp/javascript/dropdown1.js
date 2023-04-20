/*ANDREA*/
let selektElementA = document.getElementById("selektboksA");

let optionsA = ["10:00-10:30","10:30-11:00","11:00-11:30","11:30-12:00","12:00-12:30","12:30-13:00"]

selektElementA.innerHTML = "";

for(let i = 0; i <optionsA.length; i++){
    let optA = optionsA[i];
    selektElementA.innerHTML+="<option value=\"" + optA + "\">" + optA + "</option>";
}

