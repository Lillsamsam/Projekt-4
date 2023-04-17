/*JULIE*/
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
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
  currentUser.length ? window.location.href="index.html": console.log('Wrong data');
}




const button = document.getElementById("button");
button.addEventListener('click', () => {
loginFunction();
});
