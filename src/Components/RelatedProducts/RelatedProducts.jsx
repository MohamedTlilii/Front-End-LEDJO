import React, { useEffect, useState } from "react";
import "./RelatedProducts.scss";
import all_product from "../Assets/all_product";
import Item from "../Item/Items";
import { motion } from "framer-motion";

function RelatedProducts() {
  // const [relatedProducts, setRelatedProducts] = useState([]);
  // useEffect(() => {
  //   const categories = ["Mercedes-Benz", "AUDI", "BMW", "TOYOTA"];

  //   const selectedProducts = categories
  //     .map((category) => {
  //       const productsInCategory = all_product.filter(
  //         (item) => item.category === category
  //       );
  //       if (productsInCategory.length > 1) {
  //         const randomOffset = Math.floor(
  //           Math.random() * productsInCategory.length
  //         ); // Random offset
  //         const secondProductIndex =
  //           (1 + randomOffset) % productsInCategory.length; // Ensure index doesn't exceed array length
  //         return productsInCategory[secondProductIndex]; // Second product
  //       }
  //       return null;
  //     })
  //     .filter((product) => product !== null)
  //     .slice(0, 4); // Limit to 4 products

  //   setRelatedProducts(selectedProducts);
  // }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: -700 }} // Adjust x to control the starting position
      animate={{ opacity: 1, x: 0 }} // Adjust x to control the ending position
      transition={{ duration: 0.5 }}
      className="related-product"
    >
      <h2>Related Products</h2>
      <hr className="neon-hr" />{" "}
      <div className="related-products-item">
        <div className="popular-item">
          {/* {relatedProducts.map((item, index) => (
            <Item
              key={index}
              id={item.id}
              name={item.name}
              // desc={item.desc}
              image1={item.image1}
              image2={item.image2}
              image3={item.image3}
              image4={item.image4}
              image5={item.image5}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))} */}
        </div>
      </div>
    </motion.div>
  );
}

export default RelatedProducts;
