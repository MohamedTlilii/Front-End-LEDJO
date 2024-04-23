import "./User.scss";
import SidebarUser from "../../Components/SidebarUser/SidebarUser";
import React, { useState } from "react";
import CartItemsProfile from "../../Components/CartItemsProfile/CartItemsProfile";

function User() {
  const [displayCartItems, setDisplayCartItems] = useState(false);

  const handleCartItemsClick = () => {
    setDisplayCartItems(true);
  };

  return (
    <div className="user">
      <div className="sidbarr">

       <SidebarUser
        onCartItemsClick={handleCartItemsClick}
      />
      </div>
      {displayCartItems && <CartItemsProfile />}
    </div>
  );
}

export default User;
