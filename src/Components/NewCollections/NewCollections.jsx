import React, { useEffect, useState } from "react";
import "./NewCollections.scss";
import all_product from "../Assets/all_product";
import Item from "../Item/Items";
import { motion } from "framer-motion";

function NewCollections() {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Filter products based on the 'collections' property being 'new'
    const filtered = all_product.filter((item) => item.collections === "new");
    setFilteredProducts(filtered);
  }, []);

  return (
    <motion.div
      initial={{ x: -500, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="new-collections"
    >
      <h2>NEW COLLECTIONS</h2>
      <hr className="neon-hr" />
      <div className="new-collections-products-item">
        <div className="collections-items">
          {filteredProducts.map((item, index) => {
            return (
              <Item
                key={index}
                id={item.id}
                name={item.name}
                image1={item.image1}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default NewCollections;
