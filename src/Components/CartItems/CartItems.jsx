import React, { useState } from "react";
import "./CartItems.scss";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  // const [cartItems, setCartItems] = useState({});
  // const all_product = []; // Populate this array with your products

  // // Define getTotalCartAmount, removeFromCart, and other necessary functions here
  // const getTotalCartAmount = () => {
  //   let totalAmount = 0;
  //   for (const item in cartItems) {
  //     if (cartItems[item] > 0) {
  //       let itemInfo = all_product.find((product) => product.id === Number(item));
  //       totalAmount += itemInfo.new_price * cartItems[item];
  //     }
  //   }
  //   return totalAmount;
  // };

  // const removeFromCart = (itemId) => {
  //   setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  // };

  // // Filter products that are in the cart
  // const cartProducts = all_product.filter(
  //   (product) => cartItems[product.id] > 0
  // );

  return (
    <div className="cart-items">
      <div className="cart-items-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
    
      <div className="cart-items-down">
        <div className="cart-items-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cart-items-total-item">
              <p>Subtatal</p>
              {/* <p>{getTotalCartAmount()} TND</p> */}
            </div>
            <hr />
            <div className="cart-items-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cart-items-total-item">
              <h3>Total</h3>
              {/* <h3>{getTotalCartAmount()} TND</h3> */}
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-items-promo-code">
          <p>If you have a promo code, Enter it here</p>
          <div className="cart-items-promo-box">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
