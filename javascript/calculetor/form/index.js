document.getElementById("registrationForm").addEventListener("submit", function (event) {

  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("passwordError").innerText = "";

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;

  let isValid = true;

  if (name === "") {
    document.getElementById("nameError").innerText = "Name is required";
    isValid = false;
  }

  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    document.getElementById("emailError").innerText = "Enter a valid email address";
    isValid = false;
  }

  if (password.length < 6) {
    document.getElementById("passwordError").innerText = "Password must be at least 6 characters";
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
    document.getElementById("registrationForm").reset();
  }
});