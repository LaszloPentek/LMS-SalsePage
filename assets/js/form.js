let signupForm = document.querySelector(".js-signup-form");

function signupFormSubmitted(event){
    event.preventDefault();

    let password1 = document.querySelector(".js-password1").ariaValueMax;
    let password2 = document.querySelector(".js-password2").ariaValueMax;

    console.log(password1, password2 , password1 === password2)


    if(password1 !== password2){
        //Az aéert ideinglenes, ne használd design elemként
        alert("Password ")
    }
}


signupForm.addEventListener('submit', signupFormSubmitted);