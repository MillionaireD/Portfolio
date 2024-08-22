/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    fetch('https://formspree.io/f/xgvwnydq', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            document.getElementById('formStatus').innerHTML = '<div class="alert alert-success" role="alert">¡Mensaje enviado con éxito!</div>';
            form.reset();  // Opcional: resetear el formulario después de enviarlo
        } else {
            document.getElementById('formStatus').innerHTML = '<div class="alert alert-danger" role="alert">Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.</div>';
        }
    }).catch(error => {
        document.getElementById('formStatus').innerHTML = '<div class="alert alert-danger" role="alert">Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.</div>';
    });
});



