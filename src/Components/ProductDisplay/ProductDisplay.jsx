import "./ProductDisplay.scss";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
// import { productsContext } from "../../Context/ProductsContextProvider";
import { motion } from "framer-motion";
import axios from "axios";
// import { useNavigate, useParams } from "react-router-dom";
import { url } from "../../utils/url";

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RingLoader } from "react-spinners"; // Import RingLoader component

function ProductDisplay({ onCartUpdate }) {
  let token = localStorage.getItem("token");

  console.log("Token:", token);
  const [quantity, setQuantity] = useState({ quantity: 1 });

  const { id } = useParams();
  // console.log(id);
  // Ensure the parameter name matches the one in your route
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if ID is received correctly
    const fetchProduct = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://back-end-ledjo.onrender.com/api/user/getSingleProduct/${id}`
        );
        // console.log("API Response:", response.data); // Log API response data
        setProduct(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);
  if (isLoading) {
    return (
      <RingLoader
      size={70} color="hsl(329, 68%, 44%)"
      />
    );
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  if (!product) {
    return <div>No data available for product ID: {id}</div>;
  }
  const handleAddProductToCart = () => {
    // setLoading(true);
    const quantity = 1;
    axios
      .post(
        `${url}/addProductToCart/${id}`,
        { quantity },
        {
          headers: { token: token }, // Or simply { token } if the variable name matches the header name
        }
      )
      .then((res) => {
        // setLoading(false);
        console.log("Product added to cart:", res.data); // Log success message

        console.log(res);
      })
      .catch((err) => {
        // setLoading(false);

        console.dir(err);
      });
  };

  return (
    <div className="product-display">
      <motion.div
        initial={{ opacity: 0, x: -700 }} // Adjust x to control the starting position
        animate={{ opacity: 1, x: 0 }} // Adjust x to control the ending position
        transition={{ duration: 0.5 }}
        className="product-display-left"
      >
        <div className="product-diaply-img-list">
          <img src={product.data.imageUrls[1]} alt="" />
          <img src={product.data.imageUrls[2]} alt="" />
          <img src={product.data.imageUrls[3]} alt="" />
          <img src={product.data.imageUrls[4]} alt="" />
        </div>
        <div className="product-display-img">
          <img
            className="product-display-main-img"
            src={product.data.imageUrls[0]}
            alt=""
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 700 }} // Adjust x to control the starting position
        animate={{ opacity: 1, x: 0 }} // Adjust x to control the ending position
        transition={{ duration: 0.5 }}
        className="product-display-right"
      >
        {/* <h1>{product.name}</h1> */}
        <div className="product-display-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="product-display-right-prices">
          <div className="product-display-right-price-old">
            {product.data.old_price}TND
          </div>
          <div className="product-display-right-price-new">
            {product.data.new_price}TND
          </div>
        </div>
        <div className="product-display-right-description">
          {product.data.desc}
        </div>
        <button onClick={handleAddProductToCart}>ADD TO CART</button>

        <div className="product-display-categorys">
          <p className="product-display-left-category">
            <span>Categorey : {product.data.category} </span>
          </p>
          <p className="product-display-right-category">
            <span>Class : {product.data.classe} </span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default ProductDisplay;
