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

function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSuccess(input)
    } else {
        showError(input, 'Email is not valid')
    }
}

/** Check Required fields **/

function checkRequired(inputArray) {
    inputArray.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input, `${getFieldName(input)} is required`)
        } else {
            showSuccess(input)
        }
    })
}

/** Check Input Length **/

function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} charactors`)
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} charactors`)
    } else {
        showSuccess(input);
    }
}

/** Check Password Match **/

function checkPasswordsMatch(input_one, input_two) {
    if(input_one.value !== input_two.value){
        showError(input_two, 'Passwords do not match ')
    }
}

/** Get Fieild Name **/

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

/** Event Listner **/

form.addEventListener('submit', function (e) {
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordsMatch(password, password2);

})