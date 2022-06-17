const form = document.querySelector(".form");
const firstName = document.querySelector(".first-name");
const lastName = document.querySelector(".last-name");
const email = document.querySelector(".email-address");
const password = document.querySelector(".password");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    checkInputs();
})

function checkInputs() {
    const fName = firstName.value;
    const lName = lastName.value;
    const eMail = email.value;
    const pWord = password.value;
    if (fName == "") {
        firstName.parentElement.classList.add("error");
    }
    if (lName == "") {
        lastName.parentElement.classList.add("error");
    }
    if (!/.+@.+\..+/.test(eMail) || eMail == "") {
        email.parentElement.classList.add("error");
        email.value = "email@example.com"
        email.style.color = "rgb(255, 122, 122)";
    }
    if (pWord == "") {
        password.parentElement.classList.add("error");
    }
}
firstName.addEventListener("focus", function () {
    firstName.parentElement.classList.remove("error");
})
lastName.addEventListener("focus", function () {
    lastName.parentElement.classList.remove("error");
})
email.addEventListener("focus", function () {
    email.parentElement.classList.remove("error");
    email.value = "";
})
password.addEventListener("focus", function () {
    password.parentElement.classList.remove("error");
})