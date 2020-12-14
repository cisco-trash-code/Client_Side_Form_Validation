const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

/** Show input erroe message **/

function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

/** Event Listner **/

form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('submit');

    if(username.value === ''){
        showError(username, 'User name is required!')
    }else{
        showSuccess(username)
    }

})