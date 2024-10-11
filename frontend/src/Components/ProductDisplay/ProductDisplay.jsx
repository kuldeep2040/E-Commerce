import React, { useContext, useState } from "react";
import "./ProductDisplay.css";
import star_icon from "../../assets/star_icon.png";
import star_dull_icon from "../../assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  // State for managing selected size
  const [selectedSize, setSelectedSize] = useState(null);

  // Handle size selection
  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  // Add product to cart with selected size
  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to cart.");
      return;
    }
    addToCart(product.id, selectedSize); // Pass the selected size to addToCart
  };

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img src={product.image} alt="" className="productdisplay-main-img" />
        </div>
      </div>

      <div className="productdisplay-right">
        <h1 className="h11">{product.name}</h1>

        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>

        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">{product.old_price}</div>
          <div className="productdisplay-right-price-new">{product.new_price}</div>
        </div>

        <div className="productdisplay-right-description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum consectetur libero ducimus deleniti labore accusantium maiores nulla animi numquam excepturi at quia perspiciatis ad officia laboriosam modi, ullam repudiandae aspernatur.
        </div>

        <div className="productdisplay-right-size">
          <h1 className="selectsize">Select Size</h1>
          <div className="productdisplay-right-sizes">
            {["S", "M", "L", "Xl", "XXL"].map((size) => (
              <div
                key={size}
                className={`size-button ${selectedSize === size ? "active" : ""}`}
                onClick={() => handleSizeClick(size)}
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        <button onClick={handleAddToCart}>ADD TO CART</button>

        <p className="productdisplay-right-category">
          <span>Category: </span>Women, T-Shirt, Crop Top
        </p>
        <p className="productdisplay-right-category">
          <span>Tags: </span>Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
