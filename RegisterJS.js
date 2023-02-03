const form = document.getElementById('form');
const id = document.getElementById('id');
const emri = document.getElementById('emri');
const mbiemri = document.getElementById('mbiemri');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password1 = document.getElementById('password1');
const audio = document.getElementById('audio');
const audio1 = document.getElementById('audio1');

form.addEventListener('submit', e => {
    e.preventDefault();
    validoInputet();
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

const validimiEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validoInputet = () => {
    const idValue = id.value.trim();
    const emriValue = emri.value.trim();
    const mbiemriValue = mbiemri.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password1Value = password1.value.trim();
    const audioValue = audio.value.trim();
    const audio1Value = audio1.value.trim();


    if(idValue === '') {
        vendosError(id, 'Ju lutem shtypni id');
    } else if(isNaN(idValue)) {
        vendosError(id, 'Ju lutem shtypni nje id valide');
    }else if(idValue.length !== 8){
        vendosError(id, 'ID duhet te kete saktesisht 8 numra')
    }else {
        vendosSukses(id);
    }

    if(emriValue === '') {
        vendosError(emri, 'Ju lutem shtypni emrin');
    } else {
        vendosSukses(emri);
    }
    if(mbiemriValue === '') {
        vendosError(mbiemri, 'Ju lutem shtypni mbiemrin');
    } else {
        vendosSukses(mbiemri);
    }

    if(emailValue === '') {
        vendosError(email, 'Ju lutem shtypni email');
    } else if (!validimiEmail(emailValue)) {
        vendosError(email, 'Ju lutem shtypni nje email adrese valide');
    } else {
        vendosSukses(email);
    }

    if(passwordValue === '') {
        vendosError(password, 'Ju lutem shtypni nje password');
    } else if (passwordValue.length <= 10 ) {
        vendosError(password, 'Password-i duhet te jete te pakten 10 karaktere')
    } else {
        vendosSukses(password);
    }

    if(password1Value === '') {
        vendosError(password1, 'Ju lutem rishtypni password-in e juaj');
    } else if (password1Value !== passwordValue) {
        vendosError(password1, "Password-at nuk perputhen");
    } else {
        vendosSukses(password1);
    }

    const text = "I like red roses";
    const textU = text.toUpperCase();
    const textL = text.toLowerCase();
      if(audioValue === '') {
        vendosError(audio, 'Ju lutem shkruajeni ate qe e degjoni ne audio');
    } else if(audioValue == text) {
        vendosSukses(audio);
    }
    else if(audioValue == textU){
        vendosSukses(audio);
    }
    else if(audioValue == textL){
        vendosSukses(audio);
    }
    else{
        vendosError(audio, "Ju lutem ridegjojeni dhe rishkruani tekstin pa gabime");
    }

    const text1 = "He's a university student";
    const text1P = text1
  .replace(/[.,\/#!$%\^&\*;:{}=\-_`'~()]/g, "")
  .replace(/\s{2,}/g, " ");
    const text1U = text1.toUpperCase();
    const text1L = text1.toLowerCase();
    const text1UP = text1P.toUpperCase();
    const text1LP = text1P.toLowerCase();
    if(audio1Value === '') {
        vendosError(audio1, 'Ju lutem shkruajeni ate qe e degjoni ne audio');
    }
    else if((audio1Value == text1) ||
    (audio1Value == text1P) ||
    (audio1Value == text1U) ||
    (audio1Value == text1L) ||
    (audio1Value == text1UP) ||
    (audio1Value == text1LP) )
    {
        vendosSukses(audio1);
    }
    else{
        vendosError(audio1, "Ju lutem ridegjojeni dhe rishkruani tekstin pa gabime");
    }

    

};
