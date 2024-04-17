import React from 'react'
import BENZ from "../Assets/hero/Mercedeslogo.png";
import AUDI from "../Assets/hero/Audilogo.png";
import BMW from "../Assets/hero/BMWlOGO.png";
import TOYOTA from "../Assets/hero/Toyotalogo.svg.png";
import HONDA from "../Assets/hero/220px-Honda_logo.svg.png";
import LEXUS from "../Assets/hero/Lexus.svg.png";
import MAZDA from "../Assets/hero/Mazda.svg.png";
import VOLVO from "../Assets/hero/Volvo-Spread-Word-Mark-Black.svg.png";
import { motion } from "framer-motion";
import "./TopBrand.scss";

function TopBrand() {
  return (
<div>
<div className="hero-title">
          <br />
          <motion.h3
            initial={{ opacity: 0, scale: 0.5, x: 0, y: -1000 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ duration: 0.5 }}
            className="h3"
          >
            Top Modification Car Brand
          </motion.h3>
          <br />
        </div>
        <div className="hero-latest">
          <motion.img
            initial={{ opacity: 0, scale: 0.5, x: 0, y: -1000 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ duration: 0.5 }}
            src={BENZ}
            alt=""
            // style={{ width: "70px" }}
            // className="hero-latest-img"
          />
          <motion.img
            initial={{ opacity: 0, scale: 0.5, x: -1000, y: 0 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ duration: 0.5 }}
            src={BMW}
            alt=""
            // style={{ width: "70px" }}
          />
          <motion.img
            initial={{ opacity: 0, scale: 0.5, x: 1000, y: 0 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ duration: 0.5 }}
            src={MAZDA}
            alt=""
            // style={{ width: "70px" }}
          />
          <motion.img
            initial={{ opacity: 0, scale: 0.5, x: 1000, y: 0 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ duration: 0.5 }}
            src={AUDI}
            alt=""
            // style={{ width: "70px" }}
          />

          <motion.img
            initial={{ opacity: 0, scale: 0.5, x: 1000, y: 0 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ duration: 0.5 }}
            src={HONDA}
            alt=""
            // style={{ width: "70px" }}
          />
          <motion.img
            initial={{ opacity: 0, scale: 0.5, x: 1000, y: 0 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ duration: 0.5 }}
            src={LEXUS}
            alt=""
            // style={{ width: "70px" }}
          />
          <motion.img
            initial={{ opacity: 0, scale: 0.5, x: 1000, y: 0 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ duration: 0.5 }}
            src={VOLVO}
            alt=""
            // style={{ width: "70px" }}
          />
          <motion.img
            initial={{ opacity: 0, scale: 0.5, x: 1000, y: 0 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ duration: 0.5 }}
            src={TOYOTA}
            alt=""
            // style={{ width: "70px" }}
          />
        </div>

</div>
  )
}

export default TopBrand