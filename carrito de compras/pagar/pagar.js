document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('payment-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe

        // Simular procesamiento de pago (aquí puedes agregar tu lógica real de pago)
        setTimeout(function() {
            alert('¡Compra exitosa!'); // Mostrar mensaje de compra exitosa
            window.location.href = '../productos/productos.html'; // Redirigir a la página de productos
        }, 2000); // Simular un retraso de 2 segundos para dar una sensación de proceso de pago
    });
});
