//Haz tú validación en javascript acá
document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector(".formcontato__form");
    if (form) {
        form.addEventListener("submit", function(event) {
            var nombre = document.getElementById("nombre").value.trim();
            var email = document.getElementById("email").value.trim();
            var asunto = document.getElementById("asunto").value.trim();
            var mensaje = document.getElementById("mensaje").value.trim();

            // Validar nombre
            if (nombre === "") {
                alert("Por favor, ingresa tu nombre.");
                event.preventDefault();
                return;
            }

            // Validar email
            var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert("Por favor, ingresa un correo electrónico válido.");
                event.preventDefault();
                return;
            }

            // Validar asunto
            if (asunto === "") {
                alert("Por favor, ingresa un asunto.");
                event.preventDefault();
                return;
            }

            // Validar mensaje
            if (mensaje === "") {
                alert("Por favor, ingresa un mensaje.");
                event.preventDefault();
                return;
            }

        });
  
    }})
