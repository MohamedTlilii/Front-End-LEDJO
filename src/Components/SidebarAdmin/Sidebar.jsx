import React from 'react';
import './Sidebar.scss';
import { Link } from 'react-router-dom';
import add_Product_icon from '../../Components/Assets/Product_Cart.svg';
import list_Product_icon from '../../Components/Assets/Product_list_icon.svg';

function Sidebar({ onAddProductClick, onListProductClick }) {
  return (
    <div className='sidebar'>
      <div className='sidebar-item' onClick={onAddProductClick}>
        <img src={add_Product_icon} alt='' />
        <p>Add Product</p>
      </div>
      <div className='sidebar-item' onClick={onListProductClick}>
        <img src={list_Product_icon} alt='' />
        <p>Product List</p>
      </div>
      {/* Add other sidebar items */}
    </div>
  );
}

export default Sidebar;
