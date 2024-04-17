import React from "react";
import "./NewsLetter.scss";
import { motion } from "framer-motion";

function NewsLetter() {
  return (
    <motion.div
    initial={{ x: 500, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
     
      className="news-letter"
    >
      <h1>Get Exclusive Ofeers On Your Email</h1>
      <p>Subscribe to our NewsLetter and stay updated </p>
      <div className="news-letter-div">
        <input type="email" placeholder="Your Email id" />
        <button>Subscribe</button>
      </div>
    </motion.div>
  );
}

export default NewsLetter;
