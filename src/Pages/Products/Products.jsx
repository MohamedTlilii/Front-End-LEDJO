import React, { useState } from "react";
import "./Products.scss";
import all_product from "../../Components/Assets/all_product";
import { motion } from "framer-motion";
import Item from "../../Components/Item/Items";
import ProductCategory from "../ProductCategory/ProductCategory";

function Products(props) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [search, setSearch] = useState("");

  // Filter products based on selected category and search query
  const filteredProducts = all_product.filter((product) => {
    return (
      (!selectedCategory || product.class === selectedCategory) &&
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="page-wrapper">
      
     
<ProductCategory setSearch={setSearch}/>

      {/* Products section */}
      <div className="products">
        <div className="products-content">
          <div className="left-side">
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              Product categories
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="left-side-container"
            >
              <ul>
                <li className="dropdown">
                  <span className="product-mark">For Mercedes-Benz</span>
                  <ul className="dropdown-content">
                    <li onClick={() => setSelectedCategory("V Class")}>
                      V Class
                    </li>
                    <li onClick={() => setSelectedCategory("A Class")}>
                      A Class
                    </li>
                    <li onClick={() => setSelectedCategory("C Class")}>
                      C Class
                    </li>
                    <li onClick={() => setSelectedCategory("E Class")}>
                      E Class
                    </li>
                    <li onClick={() => setSelectedCategory("S Class")}>
                      S Class
                    </li>
                    <li onClick={() => setSelectedCategory("GLA Class")}>
                      GLA Class
                    </li>
                    <li onClick={() => setSelectedCategory("GLB Class")}>
                      GLB Class
                    </li>
                    <li onClick={() => setSelectedCategory("GLC Class")}>
                      GLC Class
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <span className="product-mark">For AUDI</span>
                  <ul className="dropdown-content">
                    <li onClick={() => setSelectedCategory("A3")}>A3</li>
                    <li onClick={() => setSelectedCategory("A4")}>A4</li>
                    <li onClick={() => setSelectedCategory("A6")}>A6</li>
                    <li onClick={() => setSelectedCategory("A7")}>A7</li>
                    <li onClick={() => setSelectedCategory("Q2")}>Q2</li>
                    <li onClick={() => setSelectedCategory("Q3")}>Q3</li>
                    <li onClick={() => setSelectedCategory("Q5")}>Q5</li>
                  </ul>
                </li>
                <li className="dropdown">
                  <span className="product-mark">For BMW</span>
                  <ul className="dropdown-content">
                    <li onClick={() => setSelectedCategory("X3")}>X3</li>
                    <li onClick={() => setSelectedCategory("3 series")}>
                      3 series
                    </li>
                    <li onClick={() => setSelectedCategory("5 series")}>
                      5 series
                    </li>
                    <li onClick={() => setSelectedCategory("7 series")}>
                      7 series
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <span className="product-mark">For TOYOTA</span>
                  <ul className="dropdown-content">
                    <li  onClick={() => setSelectedCategory("RAV4")}>RAV4</li>
                    <li  onClick={() => setSelectedCategory("Corolla")}>Corolla</li>
                    <li  onClick={() => setSelectedCategory("Vellfire")}>Vellfire</li>
                    <li  onClick={() => setSelectedCategory("Alphard")}>Alphard</li>
                    <li  onClick={() => setSelectedCategory("Camry")}>Camry</li>
                  </ul>
                </li>
                <li className="dropdown">
                  <span className="product-mark">For HONDA</span>
                  <ul className="dropdown-content">
                    <li onClick={() => setSelectedCategory("CRV")}>CRV</li>
                    <li onClick={() => setSelectedCategory("Civic")}>Civic</li>
                    <li onClick={() => setSelectedCategory("Accord")}>Accord</li>
                  </ul>
                </li>
                <li className="dropdown">
                  <span className="product-mark">For LEXUS</span>
                  <ul className="dropdown-content">
                    <li onClick={() => setSelectedCategory("RX")}>RX</li>
                    <li onClick={() => setSelectedCategory("ES")}>ES</li>
                  </ul>
                </li>
                <li className="dropdown">
                  <span className="product-mark">For MAZDA</span>
                  <ul className="dropdown-content">
                    <li onClick={() => setSelectedCategory("CX4")}>CX4</li>
                    <li onClick={() => setSelectedCategory("CX5")}>CX5</li>
                    <li onClick={() => setSelectedCategory("3 Axela")}>3 Axela</li>
                    <li onClick={() => setSelectedCategory("CX6 ATENZA5")}>6 ATENZA</li>
                  </ul>
                </li>
                <li className="dropdown">
                  <span className="product-mark">For VOLVO</span>
                  <ul className="dropdown-content">
                    <li onClick={() => setSelectedCategory("XC60")}>XC60</li>
                    <li onClick={() => setSelectedCategory("S90")}>S90</li>
                    <li onClick={() => setSelectedCategory("XC40")}>XC40</li>
                  </ul>
                </li>
              </ul>
            </motion.div>
          </div>{" "}
          <div className="right-side">
            
            <motion.div
              initial={{ opacity: 0, x: "100%", scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="right-side-container"
            >
              {/* Map products based on selected category */}
              {filteredProducts
                // .filter((e) =>
                //   e.name.toLowerCase().includes(search.toLowerCase())
                // )
                .map((product, index) => (
                  <div className="right-side-container-product"  key={product.id}>
                    <Item
                      id={product.id}
                      name={product.name}
                      // desc={product.desc}
                      image1={product.image1}
                      // image2={product.image2}
                      // image3={product.image3}
                      // image4={product.image4}
                      // image5={product.image5}
                      new_price={product.new_price}
                      old_price={product.old_price}
                    />
                    {/* </Link> */}
                  </div>
                ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
