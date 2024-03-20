// Select the eye icon which is used to toggle the password visibility
const showPasswordButton = document.querySelector("#show-password");


const passwordField = document.querySelector("#show-password");

showPassword.addEventListener("click", function () {
    this.classList.toggle("fa-solid");
  
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);
});
