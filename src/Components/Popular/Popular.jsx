import React, { useEffect, useState } from "react";
import "./Popular.scss";
import Item from "../Item/Items";
import { motion } from "framer-motion";
import axios from "axios";
// import { useParams } from "react-router-dom";
import { RingLoader } from "react-spinners";

export const useFetch = (url, token) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    console.log("Fetching data..."); // Log when fetching starts
    try {
      const response = await axios.get(url, { headers: { token } });
      setData(response.data.data);
      console.log("Data fetched successfully:", response.data.data); // Log fetched data
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

function Popular() {
  const token = localStorage.getItem("token");
  const { data, error } = useFetch(
    "https://back-end-ledjo.onrender.com/api/user/getProducts",
    token
  );

  // Uncomment this useEffect to log fetched data
  // useEffect(() => {
  //   console.log("Fetched data:", data);
  // }, [data]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const shuffledData = data.sort(() => Math.random() - 0.5);
  const firstFourProducts = shuffledData.slice(0, 4);

  return (
    <motion.div
      className="popular"
      initial={{ x: -500, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>TOP PICKS</h2>
      <hr className="neon-hr" />
      <div className="popular-products-item">
        <div className="popular-item">
          {firstFourProducts ? (
            firstFourProducts.map((product) => (
              <div key={product.id}>
                <Item {...product} />
              </div>
            ))
          ) : (
            <RingLoader size={70} color="hsl(329, 68%, 44%)" />
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default Popular;
