import React, { useContext } from "react";
import "./Product.scss";
import { productsContext } from "../../Context/ProductsContextProvider";
import { useParams } from "react-router-dom";
import Breadcrums from "../../Components/Breadcrums/Breadcrums";
import ProductDisplay from "../../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../../Components/RelatedProducts/RelatedProducts";

function Product() {
  const { all_product } = useContext(productsContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  
 

  return (
    <div className="aaaaaa"> 
      <Breadcrums product={product} />
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  );
}

export default Product;
