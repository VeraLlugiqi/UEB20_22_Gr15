const form = document.getElementById('form');
const id = document.getElementById('id');
const password = document.getElementById('password');


form.addEventListener('submit', e => {
    e.preventDefault();
    validoInputet();
    nderro();
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
    const paraqitError = inputi.querySelector('.error');

    paraqitError.innerText = '';
    inputi.classList.add('success');
    inputi.classList.remove('error');
};




const validoInputet = () => {
    const idValue = id.value.trim();
    const passwordValue = password.value.trim();
   

    if(idValue === '') {
        vendosError(id, 'Ju lutem shtypni ID');
    } else {
        vendosSukses(id);
    }
  
    if(passwordValue === '') {
        vendosError(password, 'Ju lutem shtypni nje password');
    } else if (passwordValue.length < 10 ) {
        vendosError(password, 'Password-i duhet te jete te pakten 10 karaktere')
    } else {
        vendosSukses(password);
    }
   
};



