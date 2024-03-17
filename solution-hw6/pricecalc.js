/* Shows JS where to start from */
const basePrice = 2.49;

const glazing = [
    { name: 'Keep original', priceAdaptation: 0.00 },
    { name: 'Sugar milk', priceAdaptation: 0.00 },
    { name: 'Vanilla milk', priceAdaptation: 0.50 },
    { name: 'Double chocolate', priceAdaptation: 1.50 },
];  

const packSize = [
    { name: '1', quantity: 1 },
    { name: '3', quantity: 3 },
    { name: '6', quantity: 6 },
    { name: '12', quantity: 12 },
];  


const glazingSelect = document.getElementById('glazing');
for (const option of glazing) {
  const optionElement = document.createElement('option');
  optionElement.value = option.priceAdaptation;
  optionElement.textContent = option.name;
  glazingSelect.appendChild(optionElement);
}


const packSizeSelect = document.getElementById('packSize');
for (const option of packSize) {
  const optionElement = document.createElement('option');
  optionElement.value = option.quantity;
  optionElement.textContent = option.name;
  packSizeSelect.appendChild(optionElement);
}


function updatePrice() {
    const glazingSelect = document.getElementById('glazing');
    const packSizeSelect = document.getElementById('packSize');
    const PricetotalSpan = document.getElementById('Pricetotal');
  
    const selectedGlazingPrice = parseFloat(glazingSelect.value);
    const selectedPackSizeQuantity = parseInt(packSizeSelect.value);
  
    const totalPrice = (basePrice + selectedGlazingPrice) * selectedPackSizeQuantity;
  
    PricetotalSpan.textContent = `$ ${totalPrice.toFixed(2)}`;
}
