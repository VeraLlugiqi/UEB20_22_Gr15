const form = document.getElementById('form');
const id = document.getElementById('id');

const password = document.getElementById('password');


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




const validateInputs = () => {
    const idValue = id.value.trim();
 
    const passwordValue = password.value.trim();
   

    if(idValue === '') {
        setError(id, 'Ju lutem shtypni ID');
    } else {
        setSuccess(id);
    }

   

  
    if(passwordValue === '') {
        setError(password, 'Ju lutem shtypni nje password');
    } else if (passwordValue.length < 10 ) {
        setError(password, 'Password-i duhet te jete te pakten 10 karaktere')
    } else {
        setSuccess(password);
    }

  

};

