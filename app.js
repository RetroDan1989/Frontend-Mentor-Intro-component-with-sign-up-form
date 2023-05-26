const form      = document.getElementById("form");
const firstName = document.getElementById("firstNameInput");
const lastName  = document.getElementById("lastNameInput");
const email     = document.getElementById("emailInput");
const password  = document.getElementById("passwordInput");

form.addEventListener("submit",(e) => {
    e.preventDefault();

    checkInputs();
});

const MESSAGE_TYPE = {
    FIRST_NAME_ERROR: "First Name cannot be empty",
    LAST_NAME_ERROR: "Last Name cannot be empty",
    EMAIL_ERROR_EMPTY: "Email cannot be empty",
    EMAIL_ERROR_NOT_VALID: "Looks like this is not an email",
    PASSWOR_ERROR:"Password cannot be empty"
}

function checkInputs() {

    const firstNameValue = firstName.value.trim();
    const lastNameValue  = lastName.value.trim();
    const emailValue     = email.value.trim();
    const passwordValue  = password.value.trim();
    let emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    // First Name
    if(firstNameValue === ""){
        setErrorFor(firstName,MESSAGE_TYPE.FIRST_NAME_ERROR);
    }
    else {
        setSuccessFor(firstName);
    }

    // Last name
    if(lastNameValue === "") {
        setErrorFor(lastName,MESSAGE_TYPE.LAST_NAME_ERROR)
    }
    else {
        setSuccessFor(lastName)
    }

    // Email

    if(emailValue === "") {
        setErrorFor(email,MESSAGE_TYPE.EMAIL_ERROR_EMPTY)
    }
    else if(!emailValue.match(emailFormat)) {
        setErrorFor(email,MESSAGE_TYPE.EMAIL_ERROR_NOT_VALID)
    }
    else {
        setSuccessFor(email);
    }

    // Password

    if(passwordValue === "") {
        setErrorFor(password,MESSAGE_TYPE.PASSWOR_ERROR)
    }
    else {
        setSuccessFor(password);
    }

}

function setErrorFor(input,message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = message;

    formControl.className = "form-control error"
}


function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control";
}