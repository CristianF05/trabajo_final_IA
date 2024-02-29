document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(event) {
        // Evitar el envío del formulario por defecto
        event.preventDefault();
        
        // Obtener los valores de usuario y contraseña
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Aquí podrías agregar lógica de verificación del usuario y contraseña
        // Por simplicidad, redireccionamos al usuario a la página principal
        window.location.href = '../informacion/informacion.html';
    });
});
