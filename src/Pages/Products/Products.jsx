import ProductCategory from "../ProductCategory/ProductCategory";
import React, { useEffect, useState } from "react";
import "./Products.scss";
import { motion } from "framer-motion";
import axios from "axios";
import Item from "../../Components/Item/Items";

function Products() {
  const [selectedCategory, ] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedClass, setSelectedClass] = useState(null);

  const [products, setProducts] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://back-end-ledjo.onrender.com/api/user/getProducts"
        );
        // console.log("Fetched data:", response.data); // Add this line
        setProducts(response.data.data); // Set products state with the correct data structure
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, []);
  // console.log("Initial Products:", products);

  useEffect(() => {
    // Filter products based on selected category, class, and search query
    const filtered = products.filter((product) => {
      return (
        (!selectedCategory || product.category === selectedCategory) &&
        (!selectedClass || product.classe === selectedClass) &&
        (!search || product.name.toLowerCase().includes(search.toLowerCase())) // Filter by search query
      );
    });
    setFilteredProducts(filtered);
  }, [products, selectedCategory, selectedClass, search]);
// Add this console log to check the filtered data
// console.log("Filtered Products:", filteredProducts);
  return (
    <div className="page-wrapper">
      {/* ProductCategory component for selecting categories */}
      <ProductCategory setSearch={setSearch} />

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
                    <li
                      onClick={() => {
                        setSelectedClass("V Class");
                        // console.log(setSelectedClass);
                      }}
                    >
                      V Class
                    </li>
                    <li onClick={() => setSelectedClass("A Class")}>
                      A Class
                    </li>
                    <li onClick={() => setSelectedClass("C Class")}>
                      C Class
                    </li>
                    <li onClick={() => setSelectedClass("E Class")}>
                      E Class
                    </li>
                    <li onClick={() => setSelectedClass("S Class")}>
                      S Class
                    </li>
                    <li onClick={() => setSelectedClass("GLA Class")}>
                      GLA Class
                    </li>
                    <li onClick={() => setSelectedClass("GLB Class")}>
                      GLB Class
                    </li>
                    <li onClick={() => setSelectedClass("GLC Class")}>
                      GLC Class
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <span className="product-mark">For AUDI</span>
                  <ul className="dropdown-content">
                    <li onClick={() => setSelectedClass("A3")}>A3</li>
                    <li onClick={() => setSelectedClass("A4")}>A4</li>
                    <li onClick={() => setSelectedClass("A6")}>A6</li>
                    <li onClick={() => setSelectedClass("A7")}>A7</li>
                    <li onClick={() => setSelectedClass("Q2")}>Q2</li>
                    <li onClick={() => setSelectedClass("Q3")}>Q3</li>
                    <li onClick={() => setSelectedClass("Q5")}>Q5</li>
                  </ul>
                </li>
                <li className="dropdown">
                  <span className="product-mark">For BMW</span>
                  <ul className="dropdown-content">
                    <li onClick={() => setSelectedClass("X3")}>X3</li>
                    <li onClick={() => setSelectedClass("3 series")}>
                      3 series
                    </li>
                    <li onClick={() => setSelectedClass("5 series")}>
                      5 series
                    </li>
                    <li onClick={() => setSelectedClass("7 series")}>
                      7 series
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <span className="product-mark">For TOYOTA</span>
                  <ul className="dropdown-content">
                    <li onClick={() => setSelectedClass("RAV4")}>RAV4</li>
                    <li onClick={() => setSelectedClass("Corolla")}>
                      Corolla
                    </li>
                    <li onClick={() => setSelectedClass("Vellfire")}>
                      Vellfire
                    </li>
                    <li onClick={() => setSelectedClass("Alphard")}>
                      Alphard
                    </li>
                    <li onClick={() => setSelectedClass("Camry")}>Camry</li>
                  </ul>
                </li>
                <li className="dropdown">
                  <span className="product-mark">For HONDA</span>
                  <ul className="dropdown-content">
                    <li onClick={() => setSelectedClass("CRV")}>CRV</li>
                    <li onClick={() => setSelectedClass("Civic")}>Civic</li>
                    <li onClick={() => setSelectedClass("Accord")}>
                      Accord
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <span className="product-mark">For LEXUS</span>
                  <ul className="dropdown-content">
                    <li onClick={() => setSelectedClass("RX")}>RX</li>
                    <li onClick={() => setSelectedClass("ES")}>ES</li>
                  </ul>
                </li>
                <li className="dropdown">
                  <span className="product-mark">For MAZDA</span>
                  <ul className="dropdown-content">
                    <li onClick={() => setSelectedClass("CX4")}>CX4</li>
                    <li onClick={() => setSelectedClass("CX5")}>CX5</li>
                    <li onClick={() => setSelectedClass("3 Axela")}>
                      3 Axela
                    </li>
                    <li onClick={() => setSelectedClass("CX6 ATENZA5")}>
                      6 ATENZA
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <span className="product-mark">For VOLVO</span>
                  <ul className="dropdown-content">
                    <li onClick={() => setSelectedClass("XC60")}>XC60</li>
                    <li onClick={() => setSelectedClass("S90")}>S90</li>
                    <li onClick={() => setSelectedClass("XC40")}>XC40</li>
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
              {filteredProducts.map((product, index) => (
                <div className="right-side-container-product" key={product.id}>
                  <Item
                    // id={product.id}
                    // name={product.name}
                    // desc={product.desc}
                    // imageUrls={product.imageUrls}
                    // image2={product.image2}
                    // image3={product.image3}
                    // image4={product.image4}
                    // image5={product.image5}
                    // new_price={product.new_price}
                    // old_price={product.old_price}
                    {...product}
                  />
                  {/* </Link> */}
                </div>
              ))}
              {/* {console.log("Filtered Products:", filteredProducts)} */}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
