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
}
  
const cart = [];

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');

// Access the roll information from the 'rolls' object
const currentRoll = rolls[rollType];

// Update the Heading and Image elements
const headingElement = document.getElementById('rollHeading');
const imageElement = document.getElementById('rollImage');

headingElement.textContent = `${rollType} Cinnamon Roll`;
imageElement.src = `images/products/${currentRoll.imageFile}`;

function updatePrice() {
    const glazingSelect = document.getElementById('glazingOptions');
    const packSizeSelect = document.getElementById('packSizeOptions');
    const totalPriceSpan = document.getElementById('totalPrice');
  
    const selectedGlazingPrice = parseFloat(glazingSelect.value);
    const selectedPackSizePrice = parseFloat(packSizeSelect.value);
    const basePrice = currentRoll.basePrice; // Use the base price from the currentRoll
  
    const totalPrice = (basePrice + selectedGlazingPrice) * selectedPackSizePrice;
  
    totalPriceSpan.textContent = `$ ${totalPrice.toFixed(2)}`;
}

function addToCart() {
    const glazingSelect = document.getElementById('glazingOptions');
    const packSizeSelect = document.getElementById('packSizeOptions');
    const rollType = currentRoll.name; // Get the roll type from the currentRoll
    const glazing = glazingSelect.value;
    const packSize = packSizeSelect.value;
    const basePrice = currentRoll.basePrice;
  
    const roll = new Roll(rollType, glazing, packSize, basePrice);
    cart.push(roll);
  
    console.log('Cart:', cart);
  }

