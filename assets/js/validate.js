//Campos a validar:
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmpassword = document.getElementById('confirmpassword');


function validate(item){
    item.setCustomValidity('');
    item.checkValidity();

    if (item == confirmpassword){
        if (item.value === password.value) item.setCustomValidity('');

        else item.setCustomValidity('As Senhas Digitadas não são iguais. Verifique e corrija.');
    }
}

//Solicita validação a cada alteração na entrada
firstname.addEventListener('input', function() {validate(firstname)});
lastname.addEventListener('input', function() {validate(lastname)});
email.addEventListener('input', function() {validate(email)});
password.addEventListener('input', function() {validate(password)});
confirmpassword.addEventListener('input', function() {validate(confirmpassword)});

