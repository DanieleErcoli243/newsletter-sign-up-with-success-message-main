// recupero gli elementi dal DOM

const form = document.querySelector('form');
const field = document.querySelector('input');
const messageField = document.getElementById('error-msg');
const dismissBtn = document.getElementById('dismiss');
const overlay = document.querySelector('.overlay');
// aggancio un ascoltatore di eventi al botton del form

form.addEventListener('submit', e => {
    e.preventDefault();
    console.log('ao a fata');
    const valueField = field.value;

    let errorMessage = '';
    const isEmailValid = /^\S+@\S+$/g

    if(!valueField) errorMessage = 'e-mail is required';
    else if(!isEmailValid.test(valueField)) errorMessage = 'Please, enter a valid e-mail';

    messageField.innerText= errorMessage;


    if(!errorMessage) {
        
        overlay.classList.remove('d-none');
        overlay.classList.add('d-flex');
    }
})

dismissBtn.addEventListener('click', () => {
    location.reload();
    overlay.classList.remove('d-flex');
    overlay.classList.add('d-none');

})
