/*JULIE*/
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

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

let select_element = document.getElementById("selectboks");
let options = ["08:00-09:00", "09:00-10:00", "10:00-11:00", "12:00-13:00", "13:00-14:00", "14:00-15:00"];

select_element.innerHTML = "";

for (let i = 0; i < options.length; i++) {
  let opt = options[i];
  select_element.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
}
/*KATHRINE*/

/*MICHELLE*/

/*DANIEL*/


// viser koden hvis man klikker checkboxen af

function myFunction() {
  let x = document.getElementById("psw");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}



// premade koder


var userArray = [
    {
        username: "user1",
        password: "pw1"
    },
    {
        username: "user2",
        password: "pw2"
    },
    {
        username: "user3",
        password: "pw3"
    }
]

function loginFunction () {
     let username = document.getElementById("myText").value;
     let password = document.getElementById("myText1").value;
  let currentUser = userArray.filter( user=> user.username == username && user.password == password)
  currentUser.length ? console.log('Hello'): console.log('Wrong data')
}

const button = document.getElementById("button");
button.addEventListener('click', () => {
loginFunction();
});
