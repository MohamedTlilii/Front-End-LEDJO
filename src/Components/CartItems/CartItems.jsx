import { useEffect, useState } from "react";
import "./CartItems.scss";
import remove_icon from "../Assets/cart_cross_icon.png";
import axios from "axios";
import { url } from "../../utils/url";
import { Button, ButtonGroup, Icon } from "semantic-ui-react";

const CartItems = () => {
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let token = localStorage.getItem("token");
  let total = cart?.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.quantity * currentValue.productId.new_price,
    0
  );
  console.log(total);
  useEffect(() => {
    // setLoading(true);
    axios
      .get(`${url}/getOwnCart`, {
        headers: { token },
      })
      .then((res) => {
        setCart(res.data.data);
        // console.log("Cart Data:", res.data.data); // Log the cart data
      })
      .catch((err) => {
        console.dir(err);
      });
  }, [cart, token]);

  const handleInc = (id) => {
    // setLoading(true);
    axios
      .put(
        `${url}/incProductQuantityFromCart/${id}`,
        {},
        {
          headers: {
            token,
          },
        }
      )
      .then((res) => {
        // setLoading(false);
      })
      .catch((err) => {
        // setLoading(false);
      });
  };
  const handleDec = (id) => {
    axios
      .put(
        `${url}/decProductQuantityFromCart/${id}`,
        {},
        {
          headers: {
            token,
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.dir(err);
      });
  };

  const handleDeleteCart = () => {
    // setLoading1(true);
    axios
      .delete(`${url}/deleteCart`, {
        headers: { token },
      })
      .then((res) => {
        console.log(res);
        // setLoading1(false);
        setTimeout(() => {
          setShow(false);
        }, 1000);
      })
      .catch((err) => {
        console.dir(err);
        // setLoading1(true);
      });
  };
  const handleSubmitOdrer = () => {
    // setLoading(true);
    axios
      .post(
        `${url}/createOrder`,
        { total },
        {
          headers: { token },
        }
      )
      .then((res) => {
        console.log(res);
        // setLoading(false);
        setShow(false);
      })
      .catch((err) => {
        console.dir(err);
        // setLoading(true);
      });
  };

  const handleDeleteSingleProduct = (id) => {
    // setLoading2(true);
    axios
      .delete(`${url}/removeProductFromCart/${id}`, {
        headers: { token },
      })
      .then((res) => {
        console.log(res);
        // setLoading2(false);
      })
      .catch((err) => {
        console.dir(err);
        // setLoading2(false);
      });
  };
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
      {cart?.map((product, i) => (
        <div
          key={product.id}
          className="cat-items-format cart-items-format-main"
        >
          <img
            src={product.productId.imageUrls[0]}
            alt={product.productId.name}
            className="cat-icon-product-icon"
          />
          <p>{product.productId.name}</p>
          <p>{product.productId.new_price} TND</p>
          {/* <button className="cart-items-quantity"> */}
            <form className="shopingCartForm">
              <button
                type="button"
                onClick={() => {
                  handleInc(product.productId._id);
                }}
              >
                +
              </button>
              <div>
                <p>{product.quantity}</p>
              </div>
              <button
                type="button"
                onClick={() => {
                  handleDec(product.productId._id);
                }}
              >
                -
              </button>
            </form>
          {/* </button> */}
        
          <p>
            <p>{product.productId.new_price * product.quantity} TND</p>
          </p>
          <Button
                  icon
                  onClick={() => {
                    handleDeleteSingleProduct(product.productId._id);
                  }}
                  // loading={loading2}
                >
                  <Icon name="trash" />
                </Button>
          {/* <img
            src={remove_icon}
            alt="Remove"
            disabled={cart.length > 0 ? false : true}
            onClick={() => {
              handleDeleteCart();
            }}
            className="cat-icon-remove-icon"
          /> */}
          <hr />
        </div>
      ))}
      <div className="cart-items-down">
        <div className="cart-items-total">
          <h1>Cart Totals</h1>
          <div>
            {/* <div className="cart-items-total-item">
              <p>Subtatal</p>
              <p>{total} TND</p>
            </div>
            <hr />
            <div className="cart-items-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div> */}
            <hr />
            <div className="cart-items-total-item">
              <h3>Total</h3>
              <h3>{total} TND</h3>
            </div>
          </div>
          <button
            onClick={() => {
              handleSubmitOdrer();
            }}
            disabled={cart.length > 0 ? false : true}
            // loading={loading}
          >
            PROCEED TO CHECKOUT
          </button>
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
