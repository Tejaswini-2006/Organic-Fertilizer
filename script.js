let cart = [];

// Fetch products from the backend
fetch('http://localhost:5000/api/products')
    .then(response => response.json())
    .then(data => {
        const productContainer = document.querySelector('.product-container');
        data.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');

            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>A premium organic fertilizer that enhances plant growth and soil health.</p>
                <p><strong>Price:</strong> ₹${product.price}</p>
                <button class="add-to-cart" data-product="${product.name}" data-price="${product.price}">Add to Cart</button>
            `;
            productContainer.appendChild(productDiv);
        });

        // Add event listeners to Add to Cart buttons
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', (event) => {
                const productName = event.target.getAttribute('data-product');
                const productPrice = event.target.getAttribute('data-price');

                // Add the product to the cart (send to backend)
                fetch('http://localhost:5000/api/cart', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            productName,
                            price: productPrice
                        })
                    })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data.message); // Log success message
                        updateCart(data.cart);
                    });
            });
        });
    })
    .catch(error => console.error('Error fetching products:', error));

// Update the cart display
function updateCart(cartData) {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; // Clear current cart items

    cartData.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = `${item.productName} - ₹${item.price}`;
        cartItems.appendChild(itemDiv);
    });

    // Enable checkout button if cart is not empty
    const checkoutButton = document.getElementById('checkout');
    if (cartData.length > 0) {
        checkoutButton.disabled = false;
        checkoutButton.style.opacity = 1;
    } else {
        checkoutButton.disabled = true;
        checkoutButton.style.opacity = 0.5;
    }
}

// Handle checkout (sending cart to the backend for payment)
document.getElementById('checkout').addEventListener('click', () => {
    fetch('http://localhost:5000/api/checkout', {
            method: 'POST',
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message); // Show success message
            updateCart([]); // Clear the cart after successful checkout
        })
        .catch(error => console.error('Error during checkout:', error));
});