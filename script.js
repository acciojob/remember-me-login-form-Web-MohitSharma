//your JS code here. If required.

let form = document.getElementById("form");
let username = document.getElementById("username");
let password = document.getElementById("password");
let checkbox = document.getElementById("checkbox");
let existing = document.getElementById("existing");

// Check saved credentials when page loads
if (localStorage.getItem("username") !== null &&
    localStorage.getItem("password") !== null) {
  existing.hidden = false;
}

// Form submission
form.addEventListener("submit", function(event) {
  event.preventDefault();

  let user = username.value;
  let pass = password.value;

  alert("Logged in as " + user);

  if (checkbox.checked) {
    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);
    existing.hidden = false;
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    existing.hidden = true;
  }
});

// Login using saved credentials
existing.addEventListener("click", function() {
  let savedUsername = localStorage.getItem("username");

  if (savedUsername !== null) {
    alert("Logged in as " + savedUsername);
  }
});