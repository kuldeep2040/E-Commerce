import React, { useEffect, useState } from "react";
import "./ListProduct.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import cross_icon from "../../Assets/cross_icon.png";
const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    await fetch("http://localhost:4000/allproducts")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  };
  useEffect(() => {
    fetchInfo();
  }, []);

  const remove_product =async (id) =>{
    await fetch('http://localhost:4000/removeproduct',{
      method: 'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify({id:id}),
    })
    await fetchInfo();
    toast.success("Product Removed Successfully");
  }

  return (
    <div className="listproduct">
      <h1>All Products</h1>
      <div className="listproduct-format-main">
        <p className="heading">Products</p>
        <p className="heading">Title</p>
        <p className="heading">Old Price</p>
        <p className="heading">New Price</p>
        <p className="heading">Category</p>
        <p className="heading">Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allProducts.map((product, index) => (
          <>
            <div
              key={index}
              className="listproduct-format-main listproduct-format"
            >
              <img
                src={product.image}
                alt=""
                className="listproduct-product-icon"
              />
              <p>{product.name}</p>
              {/* <p>{product.title}</p> */}
              <p>{product.old_price}</p>
              <p>{product.new_price}</p>
              <p>{product.category}</p>
              <img
                onClick={()=>{remove_product(product.id)}}
                src={cross_icon}
                alt=""
                className="listproduct-remove-icon"
              />
            </div>
            <hr />
          </>
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
