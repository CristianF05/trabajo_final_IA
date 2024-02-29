document.addEventListener('DOMContentLoaded', function() {
    const increaseButtons = document.querySelectorAll('.increase');
    const decreaseButtons = document.querySelectorAll('.decrease');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const quantityInputs = document.querySelectorAll('.quantity input');

    increaseButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            quantityInputs[index].value++;
        });
    });

    decreaseButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            if (quantityInputs[index].value > 0) {
                quantityInputs[index].value--;
            }
        });
    });

    addToCartButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            const quantity = parseInt(quantityInputs[index].value);
            if (quantity > 0) {
                // Aquí podrías agregar la lógica para agregar el producto al carrito
                alert(`Agregado al carrito: Producto ${index + 1}, Cantidad: ${quantity}`);
            } else {
                alert('Por favor, seleccione al menos una cantidad.');
            }
        });
    });
});
