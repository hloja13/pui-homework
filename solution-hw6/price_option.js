
const glazingOptions = [
  { name: 'Keep original', priceAdaptation: 0.00 },
  { name: 'Sugar milk', priceAdaptation: 0.00 },
  { name: 'Vanilla milk', priceAdaptation: 0.50 },
  { name: 'Double chocolate', priceAdaptation: 1.50 },
];  

const packSizeOptions = [
  { name: '1', quantity: 1 },
  { name: '3', quantity: 3 },
  { name: '6', quantity: 6 },
  { name: '12', quantity: 12 },
];  

const basePrice = 2.49;

const glazingSelect = document.getElementById('glazingOptions');
for (const option of glazingOptions) {
const optionElement = document.createElement('option');
optionElement.value = option.priceAdaptation;
optionElement.textContent = option.name;
glazingSelect.appendChild(optionElement);
}

const packSizeSelect = document.getElementById('packSizeOptions');
for (const option of packSizeOptions) {
const optionElement = document.createElement('option');
optionElement.value = option.quantity;
optionElement.textContent = option.name;
packSizeSelect.appendChild(optionElement);
}

function updatePrice() {
  const glazingSelect = document.getElementById('glazingOptions');
  const packSizeSelect = document.getElementById('packSizeOptions');
  const totalPriceSpan = document.getElementById('totalPrice');

  const selectedGlazingPrice = parseFloat(glazingSelect.value);
  const selectedPackSizeQuantity = parseInt(packSizeSelect.value);

  const totalPrice = (basePrice + selectedGlazingPrice) * selectedPackSizeQuantity;

  totalPriceSpan.textContent = `$ ${totalPrice.toFixed(2)}`;
}