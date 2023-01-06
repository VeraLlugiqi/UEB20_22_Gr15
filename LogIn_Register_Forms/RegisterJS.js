const form = document.getElementById('form');
const id = document.getElementById('id');
const emri = document.getElementById('emri');
const mbiemri = document.getElementById('mbiemri');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password1 = document.getElementById('password1');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const idValue = id.value.trim();
    const emriValue = emri.value.trim();
    const mbiemriValue = mbiemri.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password1Value = password1.value.trim();

    if(idValue === '') {
        setError(id, 'Ju lutem shtypni ID');
    } else {
        setSuccess(id);
    }

    if(emriValue === '') {
        setError(emri, 'Ju lutem shtypni emrin');
    } else {
        setSuccess(emri);
    }
    if(mbiemriValue === '') {
        setError(mbiemri, 'Ju lutem shtypni mbiemrin');
    } else {
        setSuccess(mbiemri);
    }

    if(emailValue === '') {
        setError(email, 'Ju lutem shtypni email');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Ju lutem shtypni nje email adrese valide');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Ju lutem shtypni nje password');
    } else if (passwordValue.length < 10 ) {
        setError(password, 'Password-i duhet te jete te pakten 10 karaktere')
    } else {
        setSuccess(password);
    }

    if(password1Value === '') {
        setError(password1, 'Ju lutem rishtypni password-in e juaj');
    } else if (password1Value !== passwordValue) {
        setError(password1, "Password-et nuk perputhen");
    } else {
        setSuccess(password1);
    }

};
