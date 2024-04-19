import React, { useState } from "react";
import "./ProductCategory.scss";
import { motion } from "framer-motion";
// import dropdown_icon from "../../Components/Assets/dropdown_icon.png";

const ProductCategory = ({ setSearch }) => {
  const [search, setSearchValue] = useState(""); // Define the search state

  console.log("setSearch prop in ProductCategory:", setSearch);

  return (
    <div className="product-category-cover">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        className="cover"
      ></motion.div>
{/* 
      <div className="product-category-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="product-category-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div> */}
      <div className="fillter">
        <input
          type="text"
          placeholder="Search"
          value={search} // Add this line

          onChange={(e) => {
            setSearchValue(e.target.value); // Update the search state
            setSearch(e.target.value); // Pass the search value to the parent component
          }}
        />
      </div>
    </div>
  );
};

export default ProductCategory;
