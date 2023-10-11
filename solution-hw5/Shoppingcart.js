document.addEventListener("DOMContentLoaded", function () {
    const cart = [];

    class Roll {
        constructor(rollType, rollGlazing, packSize, rollPrice) {
            this.type = rollType;
            this.glazing = rollGlazing;
            this.size = packSize;
            this.basePrice = rollPrice;
        }

        calculatePrice() {
            return this.basePrice;
        }
    }

    const originalRoll = new Roll("Original Cinnamon Roll", "Keep Original", 1, 2.49);
    const walnutRoll = new Roll("Walnut", "Vanilla Milk", 12, 39.90);
    const raisinRoll = new Roll("Raisin", "Sugar Milk", 3, 8.97);
    const appleRoll = new Roll("Apple", "Original", 3, 10.47);


    cart.push(originalRoll, walnutRoll, raisinRoll, appleRoll);

    function displayCartItem(roll) {
        const cartItemContainer = document.createElement("div");
        cartItemContainer.className = "cart-package";

        const rollImage = document.createElement("img");
        rollImage.src = `/assets/products/${roll.type.replace(/\s/g, '-').toLowerCase()}.jpg`;
        rollImage.alt = roll.type;
        rollImage.style.width = "200px";
        rollImage.style.height = "200px";
        rollImage.className = "cart-package-image";

        const textElement = document.createElement("div");
        textElement.className = "caption-text";
        textElement.innerHTML = `
            <p>${roll.type}</p>
            <p>Glazing: ${roll.glazing}</p>
            <p>Pack size: ${roll.size}</p>
        `;

        const priceElement = document.createElement("div");
        priceElement.className = "price";
        priceElement.innerHTML = `<p>$${roll.calculatePrice().toFixed(2)}</p>`;

        const removeLink = document.createElement("a");
        removeLink.href = "#";
        removeLink.setAttribute("data-action", "remove");
        removeLink.setAttribute("data-roll-type", roll.type);
        removeLink.innerHTML = "<p>Remove</p>";

        removeLink.addEventListener("click", () => {
            removeItem(roll);
        });

        cartItemContainer.appendChild(rollImage);
        cartItemContainer.appendChild(textElement);
        cartItemContainer.appendChild(priceElement);
        cartItemContainer.appendChild(removeLink);

        const cartItemSection = document.getElementById("cart-items");
        cartItemSection.appendChild(cartItemContainer);
    }

    function removeItem(roll) {
        const index = cart.indexOf(roll);
        if (index !== -1) {
            cart.splice(index, 1);
            updateCartDisplay();
        }
    }

    function updateCartDisplay() {
        const cartItemSection = document.getElementById("cart-items");
        cartItemSection.innerHTML = '';

        cart.forEach(displayCartItem);
        updateTotalPrice();
    }

    function updateTotalPrice() {
        const totalPriceElement = document.getElementById("total-price");
        const totalPrice = cart.reduce((total, roll) => total + roll.basePrice, 0);
        totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
    }

    cart.forEach(displayCartItem);

    updateTotalPrice();
});