const form = document.getElementById('form');
const ankesat = document.getElementById('ankesat');
const email = document.getElementById('email');


form.addEventListener('submit', e => {
    e.preventDefault();
    validoTeDhenat();
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

const validoEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validoTeDhenat = () => {
    const ankesatValue = ankesat.value.trim();
    const emailValue = email.value.trim();
    

    if(ankesatValue === '') {
        vendosError(ankesat, 'Ju lutem shtypni komentet e juaja');
    }else {
        vendosSukses(ankesat);
        $(document).ready(function(){
            $('#butoni').ready(function(){
              $("form").hide(500, function(){
                alert("Ankesa e juaj eshte derguar");
                window.location.href = "LogIn_Form.html";
              });
            });
          });
      
        
    }

    if(emailValue === '') {
        vendosSukses(email);
    }else if (!validoEmail(emailValue)) {
        vendosError(email, 'Ju lutem shtypni nje email adrese valide');
    }else {
        vendosSukses(email);
    }
  
};



