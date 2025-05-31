const inputElements = document.querySelectorAll("input");
const passwords = document.querySelectorAll('input[type="password"]');

let arePasswordsSame = false;

function matchPasswords (pswd1Element, pswd2Element) {
    if (pswd1Element.value !== pswd2Element.value) {
        pswd2Element.classList.add("show-error");
        arePasswordsSame = false;
    }
    else {
        pswd2Element.classList.remove("show-error");
        arePasswordsSame = true;
    }
}

function validateInput(element) {
    if (! element instanceof HTMLInputElement) {
        return TypeError;
    }

    const elementClasses = element.classList;

    if (!element.checkValidity()) {
        elementClasses.add("show-error");
    }
    else {
        elementClasses.remove("show-error");
    }
}

inputElements.forEach(element => {
    element.addEventListener("blur", () => validateInput(element));
});

/* Adding event listener when confirm password text box is unfocused.
   The event listener will update the global variable arePasswordsSame. */
passwords[1].addEventListener("blur", () => matchPasswords(passwords[0], passwords[1]));

// Prevent the form from submitting if both passwords are not same.
/* Note: Only passwords are checked here because 
   for other elements the form will automatically prevent submission on invalid inputs. */
document.querySelector("form").addEventListener("submit", (event) => {
    if (!arePasswordsSame) {
        event.preventDefault();
    } 
})
