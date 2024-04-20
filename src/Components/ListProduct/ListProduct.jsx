import React, { useEffect, useState } from "react";
import "./ListProduct.scss";
import cross_icon from "../../Components/Assets/cross_icon.png";
import axios from "axios";
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

function ListProduct() {
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

  // const remove_prduct = async()=> {

  // }
  return (
    <div className="list-product">
      <br />
      <h1>All Products List</h1>
      <br />
      <div className="list-product-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Category</p>
        <p>Old</p>
        <p>New </p>
        <p>Remove</p>
      </div>
      <div className="list-product-allproducts">
        {data.map((product, index) => {
          return (
            <>
              <div
                key={index}
                className="list-product-format-main  listproduct-format"
              >
                <img
                  src={product.imageUrls[0]}
                  alt=""
                  className="listproduct-product-icon"
                />
                <p>{product.name}</p>
                <p>{product.category}</p>
                <p>{product.old_price} TND</p>
                <p>{product.new_price} TND</p>
                <img
                  className="listprodcut-remove-icon"
                  src={cross_icon}
                  alt=""
                />
              </div>
              <hr />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default ListProduct;
