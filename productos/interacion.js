document.addEventListener('DOMContentLoaded', function() {
    const increaseButtons = document.querySelectorAll('.increment');
    const decreaseButtons = document.querySelectorAll('.decrement');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const quantityInputs = document.querySelectorAll('.quantity input');
    const cartItems = document.querySelector('.cart-items');

    let totalItems = 0;

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
                totalItems += quantity;
                updateCartItems();
                // Aquí podrías agregar la lógica para agregar el producto al carrito
                alert(`Agregado al carrito: Producto ${index + 1}, Cantidad: ${quantity}`);
            } else {
                alert('Por favor, seleccione al menos una cantidad.');
            }
        });
    });

    function updateCartItems() {
        cartItems.textContent = totalItems;
    }
});
