// import React from 'react'
import "./Navbar.scss";
import navlogo from "../../Components/Assets/navbar/logoo.jpg";
import navProfile from "../../Components/Assets/navbar/profile.jpg";
import arrow from "../../Components/Assets/nav_drop_down.png";

import { motion } from "framer-motion";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-left">
        <img src={navlogo} alt="" className="nav-logo" />
        <p>LEDJO</p>
      </div>
      <div className="nav-right">
        <h1>Admin Panel</h1>

        <img src={navProfile} className="nav-profile" alt="" />
        <img src={arrow} className="nav-arrow" alt="" />
      </div>
    </div>
  );
}

export default Navbar;
