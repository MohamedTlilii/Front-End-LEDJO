import React, { useContext } from "react";
import "./ProductDisplay.scss";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { productsContext } from "../../Context/ProductsContextProvider";
import { motion } from "framer-motion";

function ProductDisplay(props) {
  const { product } = props;
  const { addToCart } = useContext(productsContext);
  return (
    <div className="product-display">
      <motion.div
        initial={{ opacity: 0, x: -700 }} // Adjust x to control the starting position
        animate={{ opacity: 1, x: 0 }} // Adjust x to control the ending position
        transition={{ duration: 0.5 }}
        className="product-display-left"
      >
        <div className="product-diaply-img-list">
          <img src={product.image2} alt="" />
          <img src={product.image3} alt="" />
          <img src={product.image4} alt="" />
          <img src={product.image5} alt="" />
        </div>
        <div className="product-display-img">
          <img
            className="product-display-main-img"
            src={product.image1}
            alt=""
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 700 }} // Adjust x to control the starting position
        animate={{ opacity: 1, x: 0 }} // Adjust x to control the ending position
        transition={{ duration: 0.5 }}
        className="product-display-right"
      >
        <h1>{product.name}</h1>
        <div className="product-display-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="product-display-right-prices">
          <div className="product-display-right-price-old">
            {product.old_price}TND
          </div>
          <div className="product-display-right-price-new">
            {product.new_price}TND
          </div>
        </div>
        <div className="product-display-right-description">{product.desc}</div>
        <button
          onClick={() => {
            {
              addToCart(product.id);
            }
          }}
        >
          ADD TO CART
        </button>
       <div className="product-display-categorys" >
       <p className="product-display-left-category">
          <span>Categorey : {product.category} </span>
        </p>
        <p className="product-display-right-category">
          <span>Class : {product.class} </span>
        </p>
       </div>
      </motion.div>
    </div>
  );
}

export default ProductDisplay;
