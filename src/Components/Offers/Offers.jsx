import React from "react";
import "./Offers.scss";
import p1 from "../Assets/offers/99.png";
// import p2 from "../Assets/offers/p2.jpg";
// import p3 from "../Assets/offers/p3.jpg";
// import p4 from "../Assets/offers/p4.jpg";
import { motion } from "framer-motion";

function Offers() {
  return (
    <div className="offers">
      <motion.div
         initial={{ x: 500, opacity: 0 }}
         animate={{ x: 0, opacity: 1 }}
         transition={{ duration: 0.5 }}
        className="offers-left"
      >
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button> Check Now</button>
      </motion.div>
      <motion.div
        className="offers-righet"
        initial={{ opacity: 0, scale: 0.5, x: 1000, y: 0 }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img
          className="offerimage"
          src={p1}
          alt=""
          // style={{
          //   width: "250px",
          //   height: "250px",
          //   borderRadius: "10px",
          //   cursor: "pointer",
          // }}
        />
        {/* <img
          className="offerimage"
          src={p2}
          alt=""
          style={{
            width: "250px",
            height: "250px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        />
        <img
          className="offerimage"
          src={p3}
          alt=""
          style={{
            width: "250px",
            height: "250px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        />
        <img
          className="offerimage"
          src={p4}
          alt=""
          style={{
            width: "250px",
            height: "250px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        /> */}
      </motion.div>
    </div>
  );
}

export default Offers;
