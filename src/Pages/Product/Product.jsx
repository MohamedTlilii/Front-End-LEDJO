import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams
import "./Product.scss";
import Breadcrums from "../../Components/Breadcrums/Breadcrums";
import ProductDisplay from "../../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../../Components/RelatedProducts/RelatedProducts";

function Product() {
  const { productId } = useParams(); // Get productId from URL params
  const [product, setProduct] = useState(null); // Initialize product state
  
  // Simulate fetching product data from an API
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://back-end-ledjo.onrender.com/api/user/getProducts/${productId}`);
      const data = await response.json();
      setProduct(data);
    };
    fetchData();
  }, [productId]);

  return (
    <div className="aaaaaa"> 
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
}

export default Product;
