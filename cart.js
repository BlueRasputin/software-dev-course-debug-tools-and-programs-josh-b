const cart = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Headphones", price: 200 }
];

function calculateTotal(cartItems) {
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) { // changed <= to <
      total += cart[i].price; // changed cartItems to cart
  }
  return total;
}

function applyDiscount(total, discountRate) {
if(!isNaN(discountRate) && discountRate >= 0 && discountRate < 1 ) {
  return total - total * discountRate; // created function to validate that discountRate is a number between 0 and 1
} else {
  throw new RangeError("Discount Rate must be between 0 and 1")
}


   
}

function generateReceipt(cartItems, total) {
  let receipt = "Items:\n";
  cartItems.forEach(item => {
      receipt += `${item.name}: $${item.price}\n`;
  });
  receipt += `Total: $${total.toFixed(2)}`; // Bug: total may not be a number
  return receipt;
}

// Debugging entry point
console.log("Starting shopping cart calculation...");
const total = calculateTotal(cart);
const discountedTotal = applyDiscount(total, .2); // 20% discount
const receipt = generateReceipt(cart, discountedTotal);

document.getElementById("total").textContent = `Total: $${discountedTotal}`;
document.getElementById("receipt").textContent = receipt;
