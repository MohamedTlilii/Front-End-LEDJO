// Item.js
import React from "react";
import "./Item.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Item({ id, name, desc, new_price, old_price, imageUrls }) {
  const handleImageError = (e) => {
    e.target.src = "/path/to/placeholder-image.jpg"; // Replace with your placeholder image URL
  };

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
      <Link to={`/product/${id}`}>
        <img
          onClick={() => window.scrollTo(0, 0)}
          className="image"
          src={imageUrls && imageUrls.length > 0 ? imageUrls[0] : "/path/to/placeholder-image.jpg"}
          onError={handleImageError}
          alt=""
        />
      </Link>
      <div className="item-flex">
        <h1>{name}</h1>
        <p>{desc}</p>
        <div className="item-prices">
          <div className="item-price-new">{new_price} TND</div>
          <div className="item-price-old">{old_price} TND</div>
        </div>
      </div>
    </motion.div>
  );
}

export default Item;
