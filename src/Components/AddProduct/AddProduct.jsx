import React, { useState } from "react";
import "./AddProduct.scss";
import upload_area from "../../Components/Assets/upload_area.svg";
import axios from "axios";

function AddProduct() {
  const [category, setCategory] = useState("");
  const [classOptions, setClassOptions] = useState([]);
  const [img, setImg] = useState(null); // Changed to null for better handling
  const [productDetails, setProductDetails] = useState({
    name: "",
    desc: "",
    category: "",
    classe: "",
    collections: "",
    new_price: "",
    old_price: "",
    imageUrls: [],
  });

  // Define class options for each category
  const categoryOptions = {
    "Mercedes-Benz": [
      "V Class",
      "A Class",
      "C Class",
      "E Class",
      "S Class",
      "GLA Class",
      "GLC Class",
    ],
    AUDI: ["A3", "A4", "A6", "A7", "Q2", "Q3", "Q5"],
    BMW: ["X3", "3 series", "5 series", "7 series"],
    TOYOTA: ["RAV4", "Corolla", "Vellfire", "Alphard", "Camry"],
    HONDA: ["CRV", "Civic", "Accord"],
    LEXUS: ["RX", "ES"],
    MAZDA: ["CX4", "CX5", "3 Axela", "6 ATENZA"],
    VOLVO: ["XC60", "S90", "XC40"],
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    setClassOptions(categoryOptions[selectedCategory] || []);
    // Reset class selection when category changes
    setProductDetails({ ...productDetails, classe: "" });
  };

  const imageHandler = (e) => {
    setImg(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
    // console.log("Input Value:", e.target.value); // Add console log here
  };

  const Add_Product = () => {
    let token = localStorage.getItem("token");

    const { name, desc, category, classe, collections, new_price, old_price } =
      productDetails;

    const productFormData = new FormData();
    productFormData.append("name", name);
    productFormData.append("desc", desc);
    productFormData.append("category", category);
    productFormData.append("classe", classe);
    productFormData.append("collections", collections);
    productFormData.append("new_price", Number(new_price));
    productFormData.append("old_price", Number(old_price));

    if (img) {
      productFormData.append("image", img);
    }
  

    console.log("Form Data:", productFormData); // Check FormData before sending

    axios
      .post("http://localhost:5000/api/admin/addProduct", productFormData)
      
      .then((res) => {
        console.log("Response:", res.data);
        // Handle success
      })
      .catch((err) => {
        console.error("Error:", err);
        // Handle error
      });
  };

  return (
    <div className="add-product">
      <div className="addproduct-name">
        <p>Product Title</p>
        <input
          value={productDetails.name}
          onChange={changeHandler}
          type="text"
          name="name"
          placeholder="Type here"
        />
      </div>

      <div className="addproduct-desc">
        <p>Description</p>
        <input
          value={productDetails.desc}
          onChange={changeHandler}
          type="text"
          name="desc"
          placeholder="Type here"
        />
      </div>

      <div className="addproduct-category">
        <p>Product Category</p>
        <select
          value={productDetails.category}
          onChange={(e) => {
            handleCategoryChange(e);
            changeHandler(e);
          }}
          name="category"
          className="add-product-selector"
        >
          <option value="">Select Category</option>
          {Object.keys(categoryOptions).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="addproduct-class">
        <p>Product Class</p>
        <select
          value={productDetails.class}
          onChange={changeHandler}
          name="classe"
          className="add-product-selector"
        >
          <option>Select Class</option>
          {classOptions.map((classOption) => (
            <option key={classOption} value={classOption}>
              {classOption}
            </option>
          ))}
        </select>
        <div className="addproduct-collections">
          <p>Collections</p>
          <select
            value={productDetails.collections}
            onChange={changeHandler}
            name="collections"
            className="add-product-selector"
          >
            <option value="">Select Collection</option>
            <option value="New">New</option>
            <option value="Old">Old</option>
          </select>
        </div>
        <div className="addproduct-prices">
          <div className="addproduct-new_price">
            <p>New Price</p>
            <input
              value={productDetails.new_price}
              onChange={changeHandler}
              type="text"
              name="new_price"
              placeholder="Type here"
            />
          </div>
          <div className="addproduct-old_price">
            <p>Old Price</p>
            <input
              value={productDetails.old_price}
              onChange={changeHandler}
              type="text"
              name="old_price"
              placeholder="Type here"
            />
          </div>
        </div>
      </div>
      <div className="addproduct-img">
        <label htmlFor="file-input">
          <img
            src={img ? URL.createObjectURL(img) : upload_area}
            alt=""
            className="addproduct-thumnail-img"
          />
        </label>
        <input
          onChange={imageHandler}
          type="file"
          name="image"
          id="file-input"
          hidden
        />
      </div>
      <button
        onClick={() => {
          Add_Product();
        }}
        className="addproduct-btn"
      >
        ADD
      </button>
    </div>
  );
}

export default AddProduct;
