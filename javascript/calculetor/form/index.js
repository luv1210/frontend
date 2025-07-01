    document.getElementById("registrationForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form from submitting
      
      // Clear all errors first
      document.getElementById("nameError").innerText = "";
      document.getElementById("emailError").innerText = "";
      document.getElementById("passwordError").innerText = "";

      let name = document.getElementById("name").value.trim();
      let email = document.getElementById("email").value.trim();
      let password = document.getElementById("password").value;

      let isValid = true;

      // Name Validation
      if (name === "") {
        document.getElementById("nameError").innerText = "Name is required";
        isValid = false;
      }

      // Email Validation
      let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!email.match(emailPattern)) {
        document.getElementById("emailError").innerText = "Enter a valid email address";
        isValid = false;
      }

      // Password Validation
      if (password.length < 6) {
        document.getElementById("passwordError").innerText = "Password must be at least 6 characters";
        isValid = false;
      }

      if (isValid) {
        alert("Form submitted successfully!");
        // You can submit the form here using AJAX or proceed with default behavior
        // For now, we just reset the form
        document.getElementById("registrationForm").reset();
      }
    });