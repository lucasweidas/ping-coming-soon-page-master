function verifyEmail(email) {
    if (email === '') {
        errorMsg.innerText = 'Whoops! It looks like you forgot to add your email';
        errorMsg.classList.add('show');
        inputEmail.classList.add('show');
        return;
    }
    
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email)) {
        errorMsg.classList.remove('show');
        inputEmail.classList.remove('show');
        return;
    }

    errorMsg.innerText = 'Please provide a valid email address';
    errorMsg.classList.add('show');
    inputEmail.classList.add('show');
}

const form = document.querySelector('.form-c');
const inputEmail = document.querySelector('#email');
const errorMsg = document.querySelector('#error-msg');
const btnSubmit = document.querySelector('#btn-submit');

form.onsubmit = e => e.preventDefault();

btnSubmit.addEventListener('click', () => {
    verifyEmail(inputEmail.value);
});