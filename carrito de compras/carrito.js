document.addEventListener('DOMContentLoaded', function() {
    const cartItemsSpan = document.querySelector('.cart-items');
    const productContainer = document.querySelector('.product-list');
    const totalPrice = document.getElementById('total-price');

    // Obtener la cantidad de productos guardados desde productos.html
    const queryParams = new URLSearchParams(window.location.search);
    const quantity = queryParams.get('cantidad');
    if (quantity) {
        cartItemsSpan.textContent = quantity;
    }

    // Aquí puedes agregar lógica para obtener y mostrar los productos y precios guardados

    // Ejemplo de agregar productos de forma dinámica
    const products = [
        { name: 'Producto 1', price: 10.00 },
        { name: 'Producto 2', price: 20.00 }
        // Puedes agregar más productos aquí según lo necesites
    ];

    let totalPriceValue = 0;

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <p>${product.name}</p>
            <p>$${product.price.toFixed(2)}</p>
        `;
        productContainer.appendChild(productElement);
        totalPriceValue += product.price;
    });

    totalPrice.textContent = `$${totalPriceValue.toFixed(2)}`;
});
