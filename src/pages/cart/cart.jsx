import React from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";

const Cart = () => {
  return (
    <div className="cart">
      cart
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((Product) => {
          if (cartItems[Product.id] !== 0) {
          }
        })}
      </div>
    </div>
  );
};

export default Cart;
