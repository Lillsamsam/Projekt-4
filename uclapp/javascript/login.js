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