const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

/** Show input erroe message **/

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

/** Show Success **/

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

/** Check Email Validation */

function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

/** Event Listner **/

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('submit');

    if (username.value === '') {
        showError(username, 'Username is required!')
    } else {
        showSuccess(username)
    }

    if (email.value === '') {
        showError(email, 'email is required!')
    }else if(!isValidEmail(email.value)) {
        showError(email, 'email is not valid');
    } else {
        showSuccess(email)
    }

    if (password.value === '') {
        showError(password, 'Password is required!')
    } else {
        showSuccess(password)
    }

    if (password2.value === '') {
        showError(password2, 'Password is required!')
    } else {
        showSuccess(password2)
    }
    

})