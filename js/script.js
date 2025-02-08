// recupero gli elementi dal DOM

const form = document.querySelector('form');
const field = document.querySelector('input');
const messageField = document.getElementById('error-msg');
const dismissBtn = document.getElementById('dismiss');
const overlay = document.querySelector('.overlay');
// aggancio un ascoltatore di eventi al bottone del modulo

form.addEventListener('submit', e => {
    // impedisco il naturale comportamento del modulo
    e.preventDefault();
    // creo una variabile per il contenuto dell'input
    const valueField = field.value;
    // creo una variabile per il messaggio di errore e la lascio vuota
    let errorMessage = '';
    // uso le regex per controllare la validità dell'indirizzo e-mail
    const isEmailValid = /^\S+@\S+$/g
    // stabilisco le condizioni per stabilire quale messaggio di errore stampare 
    if(!valueField) errorMessage = 'e-mail is required';
    else if(!isEmailValid.test(valueField)) errorMessage = 'Please, enter a valid e-mail';
    // stampo il messaggio
    messageField.innerText= errorMessage;

    // stabilisco la condizione per far apparire il messaggio di successo
    if(!errorMessage) {
        
        overlay.classList.remove('d-none');
        overlay.classList.add('d-flex');
    }
})

// aggancio un ascoltatore di eventi al bottone per chiudere il messaggio di successo
dismissBtn.addEventListener('click', () => {
    location.reload();
    overlay.classList.remove('d-flex');
    overlay.classList.add('d-none');

})
