const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "/assets/products/original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "/assets/products/apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "/assets/products/raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "/assets/products/walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "/assets/products/double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "/assets/products/strawberry-cinnamon-roll.jpg"
    }    
};

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
      this.type = rollType;
      this.glazing = rollGlazing;
      this.size = packSize;
      this.basePrice = basePrice;
    }

    calculatePrice() {
        return this.basePrice;
    }
}
  
const cart = [];

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

function addItemToCart(rollType, glazing, packSize, rollPrice) {
    const roll = new Roll(rollType, glazing, packSize, rollPrice);
    cart.push(roll);
    updateCartDisplay();
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
    const totalPriceElement = document.getElementById("Pricetotal");
    const totalPrice = cart.reduce((total, roll) => total + roll.basePrice, 0);
    totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
}

const addToCartButton = document.getElementById("child");
addToCartButton.addEventListener("click", () => {
    const glazingSelect = document.getElementById("glazing");
    const packSizeSelect = document.getElementById("packSize");
    const rollType = document.getElementById("rolls-select").value;
    const glazing = glazingSelect.value;
    const packSize = packSizeSelect.value;
    const rollPrice = rolls[rollType].basePrice;
    addItemToCart(rollType, glazing, packSize, rollPrice);
});

updateCartDisplay();
updateTotalPrice();