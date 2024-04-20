import React from "react";
import "./About.scss";
import { motion } from "framer-motion";
import VIDEO from "../../Components/Assets/about/vedio-hero - Trim.mp4"; // Path to your video file
// import hand_icon from "../Assets/hand_icon.png";
// import arrow_icon from "../Assets/arrow.png";
// import hero_img from "../Assets/New folder/hero_image.png";
function About() {
  return (
    <div className="about">
      <motion.div
        initial={{ x: -500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="about-left"
      >
        <h2>LEDJO</h2>
        <div>
          <div className="hand-hand-icon">
            <p>Professional</p>
            {/* <img src={hand_icon} alt="" /> */}
          </div>
          <p> Ambient </p>
          <p>lighting</p>
        </div>
        <div className="about-latest-btn">
          {/* <div>last collection</div>
          <img src={arrow_icon} alt="" /> */}
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="about-right"
      >
        <video autoPlay loop muted>
          <source src={VIDEO} type="video/mp4" />
        </video>
      </motion.div>
    </div>
  );
}

export default About;
