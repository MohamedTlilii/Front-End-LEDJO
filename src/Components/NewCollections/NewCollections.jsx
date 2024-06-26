import React, { useEffect, useState } from "react";
import "./NewCollections.scss";
import Item from "../Item/Items";
import { motion } from "framer-motion";
import axios from "axios";
import { RingLoader } from "react-spinners"; // Import RingLoader component

// Update the useFetchNewCollections hook to filter products by collection
export const useFetchNewCollections = (url, token, collection) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(url, { headers: { token } })
      .then((res) => {
        // Filter data by collection if collection is provided
        if (collection) {
          const filteredData = res.data.data.filter(
            (item) => item.collections === collection
          );
          setData(filteredData);
          console.log("Filtered data:", filteredData); // Log filtered data
        } else {
          setData(res.data.data);
        }
      })
      .catch((err) => {
        setError(err.message || "Network error");
        console.error(err);
      });
  }, [url, token, collection]);
  // // Log data when it changes
  // useEffect(() => {
  //   // console.log("New Collections Data:", data);
  // }, [data]);
  return { data, error };
};

// Update the NewCollections component to use the new hook and filter by collection
function NewCollections() {
  const token = localStorage.getItem("token");
  const collection = "new"; // Filter by "new" collection
  const { data, error } = useFetchNewCollections(
    "https://back-end-ledjo.onrender.com/api/user/getProducts",
    token,
    "new" // Filter by "new" collection
  );

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <motion.div
      className="new-collections"
      initial={{ x: -500, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>NEW COLLECTIONS</h2>
      <hr className="neon-hr" />
      <div className="new-collections-products-item">
        <div className="collections-items">
          {data ? (
            data.map((product) => (
              <div key={product.id}>
                <Item {...product} />
              </div>
            ))
          ) : (
            <RingLoader
              size={70}
              color="hsl(329, 68%, 44%)"
              style={{ position: "relative", left: "10px" }}
            />
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default NewCollections;
