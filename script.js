document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const password = document.getElementById("password").value.trim();

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const mobileError = document.getElementById("mobileError");
  const passwordError = document.getElementById("passwordError");

  let isValid = true;

  if (!/^[A-Z][a-z]*( [A-Z][a-z]*)*$/.test(name)) {
    nameError.textContent = "Name must be alphabetic and capitalize first letter of each word.";
    nameError.style.display = "block";
    isValid = false;
  } else {
    nameError.style.display = "none";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    emailError.textContent = "Enter a valid email address.";
    emailError.style.display = "block";
    isValid = false;
  } else {
    emailError.style.display = "none";
  }

  if (!/^\d{10}$/.test(mobile)) {
    mobileError.textContent = "Mobile number must be 10 digits.";
    mobileError.style.display = "block";
    isValid = false;
  } else {
    mobileError.style.display = "none";
  }

  if (!/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
    passwordError.textContent = "Password must have at least 8 characters, one uppercase, and one number.";
    passwordError.style.display = "block";
    isValid = false;
  } else {
    passwordError.style.display = "none";
  }

  if (isValid) {
    alert("Form submitted successfully!");
  }
});
