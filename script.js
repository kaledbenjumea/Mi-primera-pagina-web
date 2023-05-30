function showAlert() {alert('¡Hola, esta es una alerta desde JavaScript!');}
const form = document.getElementById('myForm');
form.addEventListener ('submit', function(event) {
    event.preventDefault();
    validateForm();
});

function validateEmail(Email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(Email)
}

function validateForm() {
    constEmailInput = document.getElementById('Email');
    const Email = EmailInput.value;

    if(!validateEmail(Email)) {
        alert('Por favor ingrese un correo electronico valido.');
    } else{
        alert('Correo electronico enviado correctamente.');
    }
    }

document.querySelector("button.button-menu-toggle")
.addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("nav-links-responsive")
})