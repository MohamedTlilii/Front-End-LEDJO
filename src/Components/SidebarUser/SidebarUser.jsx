import React from "react";
import "./SidebarUser.scss";
import { Link } from "react-router-dom";
import add_Product_icon from "../../Components/Assets/Product_Cart.svg";
import list_Product_icon from "../../Components/Assets/Product_list_icon.svg";
import CartUser from "../CartUser/CartUser";

function SidebarUser({ onCartItemsClick }) {
  return (
    <div className="sidebar-user">
      <CartUser />
      <div className="sidebar-user-item" onClick={onCartItemsClick}>
        <img src={add_Product_icon} alt="" />
        <p>Order's</p>
      </div>
      {/* <div className="sidebar-user-item" onClick={onListProductClick}>
        <img src={list_Product_icon} alt="" />
        <p>Product List</p>
      </div> */}
      {/* Add other sidebar items */}
    </div>
  );
}

export default SidebarUser;
