/* CREATING ROLL*/
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
      this.type = rollType;
      this.glazing = rollGlazing;
      this.size = packSize;
      this.basePrice = basePrice;
    }
}
  
/* Creating empty array as a cart */
const cart = [];

/* attempt to update detail page */
const queryString = window.location.search;
console.log(queryString);
const params = new URLSearchParams(queryString);
const rollType = params.get('Roll');
console.log(rollType);



const currentRoll = rolls[rollType];


const headingElement = document.getElementById('rollHeading');
const imageElement = document.getElementById('rollImage');

headingElement.textContent = `${rollType} Cinnamon Roll`;
imageElement.src = `assets/products/${currentRoll.imageFile}`;


/*updating price of product*/
function updatePrice() {
    const glazingSelect = document.getElementById('glazing');
    const packSizeSelect = document.getElementById('packSize');
    const PricetotalSpan = document.getElementById('Pricetotal');
  
    const selectedGlazingPrice = parseFloat(glazingSelect.value);
    const selectedPackSizeQuantity = parseInt(packSizeSelect.value);
  
    const totalPrice = (basePrice + selectedGlazingPrice) * selectedPackSizeQuantity;
  
    PricetotalSpan.textContent = `$ ${totalPrice.toFixed(2)}`;
}

/* function to add "item" to cart */
function addToCart() {
    const glazingSelect = document.getElementById('glazing');
    const packSizeSelect = document.getElementById('packSize');
    const rollType = currentRoll.name; /* Get the roll type from the currentRoll */
    const glazing = glazingSelect.value;
    const packSize = packSizeSelect.value;
    const basePrice = currentRoll.basePrice;
  
    const roll = new Roll(rollType, glazing, packSize, basePrice);
    cart.push(roll);
  
    console.log('Cart:', cart);
}