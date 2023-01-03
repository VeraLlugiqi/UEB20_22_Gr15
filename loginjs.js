const form = document.getElementById('form');
const id = document.getElementById('id');
const emri = document.getElementById('emri');
const mbiemri = document.getElementById('mbiemri');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password1 = document.getElementById('password1');

form.addEventListener('submit', e => {
    e.preventDefault();

    inputetValide();
});

const vendosError = (element, message) => {
    const inputi = element.parentElement;
    const paraqitError = inputi.querySelector('.error');

    paraqitError.innerText = message;
    inputi.classList.add('error');
    inputi.classList.remove('success')
}

const vendosSukses = element => {
    const inputi = element.parentElement;
    const paraqitError = inputControl.querySelector('.error');

    paraqitError.innerText = '';
    inputi.classList.add('success');
    inputi.classList.remove('error');
};
function eshteNumer(numri) {
              
    
    var ASCIICode = (numri.which) ? numri.which : numri.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}

const eshteEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


const inputetValide = () => {
    const idValue = id.value.trim();
    const emriValue = emri.value.trim();
    const mbiemriValue = mbiemri.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password1Value = password1.value.trim();

    if(idValue === '') {
        vendosError(id, 'ID is required');
    } else if((onlyNumberKey(idValue))) {
        vendosError(id, 'Nuk eshte numer');
    }
    else{
        vendosSukses(id);
    }
    if(emriValue === '') {
        vendosError(emri, 'Emri is required');
    } else {
        vendosSukses(emri);
    }
    if(mbiemriValue === '') {
        vendosError(mbiemri, 'Emri is required');
    } else {
        vendosSukses(mbiemri);
    }

    if(emailValue === '') {
        vendosError(email, 'Email is required');
    } else if (!eshteEmail(emailValue)) {
        vendosError(email, 'Provide a valid email address');
    } else {
        vendosSukses(email);
    }

    if(passwordValue === '') {
        vendosError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        vendosError(password, 'Password must be at least 8 character.')
    } else {
        vendosSukses(password);
    }

    if(password1Value === '') {
        vendosError(password1, 'Please confirm your password');
    } else if (password1Value !== passwordValue) {
        vendosError(password1, "Passwords doesn't match");
    } else {
        vendosSukses(password1);
    }

};
