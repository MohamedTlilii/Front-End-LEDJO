import React, { useState } from 'react';
import './Admin.scss';
import SideBar from '../../Components/SidebarAdmin/Sidebar';
import AddProduct from '../../Components/AddProduct/AddProduct';
import ListProduct from '../../Components/ListProduct/ListProduct';
import NavbarAdmin from '../../Components/NavbarAdmin/Navbar';

function Admin() {
  const [displayAddProduct, setDisplayAddProduct] = useState(false);
  const [displayListProduct, setDisplayListProduct] = useState(false);

  const handleAddProductClick = () => {
    setDisplayAddProduct(true);
    setDisplayListProduct(false); // Close ListProduct if open
  };

  const handleListProductClick = () => {
    setDisplayListProduct(true);
    setDisplayAddProduct(false); // Close AddProduct if open
  };

  return (
    <div className='admin'>
      {/* <NavbarAdmin/> */}
      <SideBar
        onAddProductClick={handleAddProductClick}
        onListProductClick={handleListProductClick}
      />
      {displayAddProduct && <AddProduct />}
      {displayListProduct && <ListProduct />}
      {/* Add other components as needed */}
    </div>
  );
}

export default Admin;
