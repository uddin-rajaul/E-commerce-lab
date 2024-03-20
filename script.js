// Select the eye icon which is used to toggle the password visibility
const showPasswordButton = document.querySelector("#show-password-btn");
const passwordField = document.querySelector("#password");

showPasswordButton.addEventListener("click", function () {
  // showPasswordButton.style.display = "none";
  // hidePasswordButton.style.display = "block";
  this.classList.toggle("fa-eye-slash");

  const type =
    passwordField.getAttribute("type") === "password" ? "text" : "password";
  passwordField.setAttribute("type", type);
});
