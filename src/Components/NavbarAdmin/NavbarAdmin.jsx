// import React from 'react'
import "./NavbarAdmin.scss";
import navlogo from "../../Components/Assets/navbar/logoo.jpg";
import navProfile from "../../Components/Assets/navbar/profile.jpg";
import arrow from "../../Components/Assets/nav_drop_down.png";

import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

function NavbarAdmin() {
  const navigate = useNavigate();

  let token = localStorage.getItem("token");
  let isUser = JSON.parse(localStorage.getItem("isUser"));
  let isAdmin = JSON.parse(localStorage.getItem("isAdmin"));
  let isBanned = JSON.parse(localStorage.getItem("isBanned"));
  return (
    <div className="navbar">
      <div className="nav-left">
        {/* <img src={navlogo} alt="" className="nav-logo" />
        <p>LEDJO</p> */}
        <img src={navProfile} className="nav-logo" alt="" />

        <h1>Admin Panel</h1>
      </div>
      <div className="nav-right">
        {/* <img src={arrow} className="nav-arrow" alt="" /> */}

        {token && isAdmin && !isBanned ? (
          <Link
            to="/login"
            onClick={() => {
              localStorage.clear();
              setTimeout(() => {
                navigate("/login");
              }, 100);
            }}
          >
            <button className="button">Logout</button>
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export default NavbarAdmin;
