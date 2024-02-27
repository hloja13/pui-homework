document.addEventListener("DOMContentLoaded", function () {
    //creating cart into array
    const cart = [];
    
    //constructing roll structure
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

    // Creating rolls to show up on the page
    const originalRoll = new Roll("Original Cinnamon Roll", "Keep Original", 1, 2.49);
    const walnutRoll = new Roll("Walnut Cinnamon Roll", "Vanilla Milk", 12, 39.90);
    const raisinRoll = new Roll("Raisin Cinnamon Roll", "Sugar Milk", 3, 8.97);
    const appleRoll = new Roll("Apple Cinnamon Roll", "Original", 3, 10.47);

    //pushing those to the page
    cart.push(originalRoll, walnutRoll, raisinRoll, appleRoll);

    //Generating the content for each roll on display
    function displayCartItem(roll) {
        
        //creating div "cart-package"
        const cartItemContainer = document.createElement("div");
        cartItemContainer.className = "cart-package";
        
        //img inside div
        const rollImage = document.createElement("img");
        rollImage.src = `/assets/products/${roll.type.replace(/\s/g, '-').toLowerCase()}.jpg`;
        rollImage.alt = roll.type;
        rollImage.className = "cart-package-image";
        
        //text next to img
        const textElement = document.createElement("div");
        textElement.className = "caption-text";
        textElement.innerHTML = `
            <p>${roll.type}</p>
            <p>Glazing: ${roll.glazing}</p>
            <p>Pack size: ${roll.size}</p>
        `;
        //price to the right of caption-text
        const priceElement = document.createElement("div");
        priceElement.className = "price";
        priceElement.innerHTML = `<p>$${roll.calculatePrice().toFixed(2)}</p>`;
    
        cartItemContainer.appendChild(rollImage);
        cartItemContainer.appendChild(textElement);
        cartItemContainer.appendChild(priceElement);
    
        const cartItemSection = document.getElementById("cart-items");
        cartItemSection.appendChild(cartItemContainer);
    
        //remove button-link
        const removeLink = document.createElement("a");
        removeLink.href = "#";
        removeLink.className = "remove-link";
        removeLink.setAttribute("data-action", "remove");
        removeLink.setAttribute("data-roll-type", roll.type);
        removeLink.innerHTML = "<p>Remove</p>";
    
        removeLink.addEventListener("click", () => {
            removeItem(roll);
        });
        
        //creating a new div for the remove link, so that it doenst fall under cart-package
        const removeLinkContainer = document.createElement("div");
        removeLinkContainer.className = "remove-link-container";
        removeLinkContainer.appendChild(removeLink);
    
        cartItemSection.appendChild(removeLinkContainer);
    }

    //item removed
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

    //price update
    function updateTotalPrice() {
        const totalPriceElement = document.getElementById("totalprice");
        const totalPrice = cart.reduce((total, roll) => total + roll.basePrice, 0);
        totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
    }

    cart.forEach(displayCartItem);

    updateTotalPrice();
});

