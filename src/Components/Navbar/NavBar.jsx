// import React, { useRef, useState, useContext } from "react";
// import { productsContext } from "../../Context/ProductsContextProvider";

import SideBar from "../SideBar/SideBar";
import { motion } from "framer-motion";
import logo from "../Assets/navbar/logoo.jpg";
import "./NavBar.scss";
import { GiShoppingCart } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import nav_drop_down from "../Assets/chevron.png";

function NavBar() {
  const navigate = useNavigate();

  // const [menu, setMenu] = useState("home");
  // const { getTotalCartItems } = useContext(productsContext);
  // const menuRef = useRef();
  // const dropdown_toggle =(e)=> {
  //   menuRef.current.classList.toggle('nav-menu-visible');
  //   e.target.classList.toggle("open");
  // }
  let token = localStorage.getItem("token");
  let isUser = JSON.parse(localStorage.getItem("isUser"));
  let isAdmin = JSON.parse(localStorage.getItem("isAdmin"));
  let isBanned = JSON.parse(localStorage.getItem("isBanned"));

  return (
    <motion.div className="hedar">
      <SideBar />
      <div className="navbar">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="navlogo"
        >
          <motion.img className="logo" src={logo} alt="logo" />
          <p>LEDJO</p>
        </motion.div>
        {/* <img
        //  onClick={dropdown_toggle} 
         src="" alt="" className="nav-dropdown" /> */}
        <motion.ul
          // ref={menuRef}
          className="nav-menu"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>{" "}
          </li>
          <li>
            <Link to="/about">About</Link>{" "}
          </li>

          {token && isUser && !isBanned && !isAdmin && (
            <>
              <li>
                <Link to="/profile">Profile</Link>{" "}
              </li>
              <li>
                <Link to="/contacts">Contacts</Link>{" "}
              </li>
            </>
          )}

          {token && isAdmin && !isUser && !isBanned && (
            <>
              <li>
                <Link to="/admin">Admin</Link>{" "}
              </li>
            </>
          )}
        </motion.ul>

        <div className="nav-login">
          {token && !isBanned ? (
            <Link
              onClick={() => {
                localStorage.clear();
                setTimeout(() => {
                  navigate("/login");
                }, 100);
              }}
            >
              <button className="button">Logout</button>
            </Link>
          ) : (
            <>
              <Link to="/login">
                <button className="button">Login</button>
              </Link>
              <Link to="/signup">
                <button className="button">Sign Up</button>
              </Link>
            </>
          )}
          {token && isUser && !isBanned && !isAdmin && (
            <>
              <Link to="/cart">
                <GiShoppingCart
                  className="GiShoppingCart"
                  style={{ fontSize: "2rem", cursor: "pointer" }}
                />
              </Link>
              <div className="nav-count">
                {/* {getTotalCartItems()} */}
                </div>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default NavBar;
