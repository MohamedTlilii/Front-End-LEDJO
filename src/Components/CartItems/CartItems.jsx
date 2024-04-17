import React, { useContext } from "react";
import "./CartItems.scss";
import { productsContext } from "../../Context/ProductsContextProvider";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } =
    useContext(productsContext);

  // Filter products that are in the cart
  const cartProducts = all_product.filter(
    (product) => cartItems[product.id] > 0
  );

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
      {cartProducts.map((product) => (
        <div
          key={product.id}
          className="cat-items-format cart-items-format-main"
        >
          <img
            src={product.image1}
            alt={product.name}
            className="cat-icon-product-icon"
          />
          <p>{product.name}</p>
          <p>{product.new_price} TND</p>
          <button className="cart-items-quantity">
            {cartItems[product.id]}
          </button>
          <p>{product.new_price * cartItems[product.id]} TND</p>
          <img
            src={remove_icon}
            alt="Remove"
            onClick={() => {
              removeFromCart(product.id);
            }}
            className="cat-icon-remove-icon"
          />
          <hr />
        </div>
      ))}
      <div className="cart-items-down">
        <div className="cart-items-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cart-items-total-item">
              <p>Subtatal</p>
              <p>{getTotalCartAmount()}TND</p>
            </div>
            <hr />
            <div className="cart-items-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cart-items-total-item">
              <h3>Total</h3>
              <h3>{getTotalCartAmount()}TND</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-items-promo-code">
          <p>If you have a promo code,Enter it here</p>
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
