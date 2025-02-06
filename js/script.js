// recupero gli elementi dal DOM

const form = document.querySelector('form');
const field = document.querySelector('input');
const messageField = document.getElementById('error-msg');
const dismissBtn = document.getElementById('dismiss');

// aggancio un ascoltatore di eventi al botton del form

form.addEventListener('submit', e => {
    e.preventDefault();

    const valueField = field.value;

    let errorMessage = '';

    if(!valueField) errorMessage = 'e-mail is required';

    const isEmailValid = /^\S+@\S+$/g

    

})
