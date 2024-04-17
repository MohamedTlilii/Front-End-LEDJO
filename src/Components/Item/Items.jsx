// Item.js
import React from "react";
import "./Item.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Item(product) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, x: -1000 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="item"
    >
      
      <Link to={`/product/${product.id}`}>
        <img
          onClick={window.scrollTo(0, 0)}
          className="image"
          src={product.image1}
          alt=""
        />
      </Link>

     <div className="item-flex">
     <h1>{product.name}</h1>
      <p>{product.desc}</p>
      <div className="item-prices">
        <div className="item-price-new">{product.new_price} TND</div>
        <div className="item-price-old">{product.old_price} TND</div>
      </div>
     </div>
    </motion.div>
  );
}

export default Item;
