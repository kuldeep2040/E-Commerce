import React, { useState } from "react";
import "./AddProduct.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import axios from 'axios';
import upload_area from "../../Assets/upload_area.svg";
const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "",
    new_price: "",
    old_price: "",
  });
  const imageHandler = (e) => {
    e.preventDefault();
    setImage(e.target.files[0]);
  };
  const changeHandler = (e) => {
    setProductDetails({
      ...productDetails,
      [e.target.name]: e.target.value,
    });
  };
  const Add_Product = async () => {
    console.log(productDetails);
     if (!image) {
      toast.error("Please add an image before submitting!"); // Error toast for missing image
      return; // Stop execution if no image
    }
    let responseData;
    let product = productDetails;
    const formData = new FormData();
    formData.append("product", image);

    await fetch("http://localhost:4000/upload", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        responseData = data;
      });

    if (responseData.success) {
      product.image = responseData.image_url;
      console.log(product);
      await fetch("http://localhost:4000/addproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((resp) => resp.json())
        .then((data) => {
          if (data.success) {
            // alert("Product Added")
            setProductDetails({
              name: "",
              image: "",
              category: "",
              new_price: "",
              old_price: "",
            });
            setImage(false);
            toast.success("Food Added Successfully!");
          } 
          else {
            toast.error("Failed to add product!"); // Show error toast
          }
        });
    }
  };
  return (
    <div className="addproduct">
      <div className="addproduct-itemfield">
        <p className="heading">Product Title</p>
        <input
          type="text"
          value={productDetails.name}
          onChange={changeHandler}
          name="name"
          id=""
          placeholder="Type here"
        />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p className="heading">Price</p>
          <input
            type="text"
            value={productDetails.old_price}
            onChange={changeHandler}
            name="old_price"
            id=""
            placeholder="Type here"
          />
        </div>
        <div className="addproduct-itemfield">
          <p className="heading">Offer Price</p>
          <input
            type="text"
            value={productDetails.new_price}
            onChange={changeHandler}
            name="new_price"
            id=""
            placeholder="Type here"
          />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p className="heading">Product Category</p>
        <select
          value={productDetails.category}
          onChange={changeHandler}
          name="category"
          className="addproduct-selector"
        >
          <option value="" disabled>
            Select Category
          </option>{" "}
          {/* Add a default option */}
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : upload_area}
            className="addproduct-thumbnail-img"
            alt=""
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
      <button className="addproduct-btn" onClick={Add_Product}>
        ADD
      </button>
    </div>
  );
};

export default AddProduct;
