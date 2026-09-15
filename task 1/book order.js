
const customerNameRaw = " Sara ";
const bookTitle = "JavaScript Basics";


const unitPrice = 150;          
const quantityInput = "3";      
const shippingCost = 30;


const customerNameClean = customerNameRaw.trim();

console.log(`Original name: "${customerNameRaw}"`);
console.log(`Cleaned name:  "${customerNameClean}"`);


const quantityNumber = Number(quantityInput);

console.log(`Quantity (text):    value = ${quantityInput}, type = ${typeof quantityInput}`);
console.log(`Quantity (number):  value = ${quantityNumber}, type = ${typeof quantityNumber}`);


const subtotal = unitPrice * quantityNumber;  
const total = subtotal + shippingCost;         


const receipt = `
--------- RECEIPT ---------
Customer: ${customerNameClean}
Book:     ${bookTitle}
Unit price: $${unitPrice.toFixed(2)}
Quantity:   ${quantityNumber}
Subtotal:   $${subtotal.toFixed(2)}
Shipping:   $${shippingCost.toFixed(2)}
Total:      $${total.toFixed(2)}
----------------------------
`;

console.log(receipt);