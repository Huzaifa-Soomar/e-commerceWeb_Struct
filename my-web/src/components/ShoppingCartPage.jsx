import React from 'react';
import '../App.css';
function ShoppingCartPage() {
  return (
    <div>
      <h1>Your Shopping Cart</h1>
      <p>Items in your cart:</p>
      <ul>
        <li>Product A - Quantity: 1 - Price: $10</li>
        <li>Product B - Quantity: 2 - Price: $20</li>
      </ul>
      <p>Total: $50</p>
    </div>
  );
}

export default ShoppingCartPage;
