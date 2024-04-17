import React from "react";
import "./Breadcrums.scss";
import arrow_icon from "../Assets/breadcrum_arrow.png";
import { motion } from "framer-motion";

function Breadcrums(props) {
  const { product } = props;
  return (
    <motion.div
      initial={{ opacity: 0, x: -700 }} // Adjust x to control the starting position
      animate={{ opacity: 1, x: 0 }} // Adjust x to control the ending position
      transition={{ duration: 0.5 }}
      className="breadcrums"
    >
      HOME <img src={arrow_icon} alt="" /> PRODUCT{" "}
      <img src={arrow_icon} alt="" /> {product.category}{" "}
      <img src={arrow_icon} alt="" /> {product.class}{" "}
      <img src={arrow_icon} alt="" /> {product.name}
    </motion.div>
  );
}

export default Breadcrums;
