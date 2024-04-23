import React, { useEffect, useState } from "react";
import "./RelatedProducts.scss";
import Item from "../Item/Items";
import { motion } from "framer-motion";
import axios from "axios";
import { RingLoader } from "react-spinners"; // Import RingLoader component

export const useFetch = (url, token) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(url, { headers: { token } });
      setData(response.data.data);
    } catch (error) {
      setError(error.message || "Network error");
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [url, token]);

  return { data, error };
};
function RelatedProducts() {
  const token = localStorage.getItem("token");
  const { data, error } = useFetch(
    "https://back-end-ledjo.onrender.com/api/user/getProducts",
    token
  );

  // useEffect(() => {
  //   console.log("Fetched data:", data); // Log fetched data
  // }, [data]);

  if (error) {
    return <div>Error: {error}</div>;
  }
  const shuffledData = data.sort(() => Math.random() - 0.5);
  const firstFourProducts = shuffledData.slice(0, 4);


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
      {data ? (
          <div className="popular-item">
            {firstFourProducts.slice(0, 4).map((product) => (
              <Item key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <RingLoader size={70} color="hsl(329, 68%, 44%)" />
        )}
      </div>
    </motion.div>
  );
}

export default RelatedProducts;
