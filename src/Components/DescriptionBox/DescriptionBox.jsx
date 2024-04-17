import React from "react";
import "./DescriptionBox.scss";
import { motion } from "framer-motion";

function DescriptionBox() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="description-box"
    >
      <div className="description-box-navigator">
        <div className="description-box-nav-box">Description</div>
        <div className="description-box-nav-box-fade">Reviews (122)</div>
      </div>
      <div className="description-box-description">
        <p>
          An e-commerce website is an online platform designed to facilitate the
          buying and selling of products or services. It allows customers to
          interact with businesses, browse through available items, make
          purchases, and sometimes even schedule delivery or pickup dates to
          their local area, making the entire process convenient and efficient.
        </p>
        <p>
          E-commerce website typically displays product or service details,
          including detailed descriptions, images, prices, and available
          variations (e.g., colors). Each product usually has its own dedicated
          page with relevant information.
        </p>
      </div>
    </motion.div>
  );
}

export default DescriptionBox;
