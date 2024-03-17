document.addEventListener("DOMContentLoaded", function () {
    // Attempt to retrieve cart from local storage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Function to save cart to local storage
    function saveCartToLocalStorage(cart) {
        localStorage.setItem("cart", JSON.stringify(cart));
        console.log("Current contents of the cart in local storage:");
        console.log(cart);
    }

    // Function to update total price on the cart page
    function updateTotalPrice() {
        const totalPriceElement = document.getElementById("totalprice");
        const totalPrice = cart.reduce((total, roll) => total + roll.basePrice, 0);
        totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
    }

    // Function to remove an item from the cart
    function removeItem(roll) {
        const index = cart.indexOf(roll);
        if (index !== -1) {
            cart.splice(index, 1);
            saveCartToLocalStorage(cart); // Save updated cart to local storage
            updateTotalPrice(); // Update total price on the page
            updateCartDisplay(); // Update cart display on the page
        }
    }

    // Function to update cart display on the page
    function updateCartDisplay() {
        const cartItemSection = document.getElementById("cart-items");
        cartItemSection.innerHTML = '';

        cart.forEach(displayCartItem);
    }

    // Function to display an item in the cart
    function displayCartItem(roll) {
        const cartItemContainer = document.createElement("div");
        cartItemContainer.className = "cart-package";

        // Construct HTML for cart item display
        cartItemContainer.innerHTML = `
            <p>${roll.type}</p>
            <p>Glazing: ${roll.glazing}</p>
            <p>Pack size: ${roll.size}</p>
            <p>Price: $${roll.basePrice.toFixed(2)}</p>
            <a href="#" class="remove-link" data-roll-type="${roll.type}">Remove</a>
        `;

        cartItemSection.appendChild(cartItemContainer);
    }

    // Event delegation for remove links
    document.getElementById("cart-items").addEventListener("click", function (event) {
        if (event.target && event.target.matches(".remove-link")) {
            const rollType = event.target.getAttribute("data-roll-type");
            const roll = cart.find(roll => roll.type === rollType);
            if (roll) {
                removeItem(roll);
            }
        }
    });

    // Initial call to populate cart display and update total price
    updateCartDisplay();
    updateTotalPrice();
});