import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import "./CartItems.css";
import remove_icon from "../../assets/cart_cross_icon.png";
const CartItems = () => {
  const {
    all_product,
    addToCart,
    removeFromCart,
    cartItems,
    getTotalCartAmount,
  } = useContext(ShopContext);
  const rupeeSymbol = "₹";
  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Quantity</p>
        <p>Title</p>
        <p>PRice</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} className="cartitems-product-icon" alt="" />
                <p>{e.name}</p>
                <p>
                  {rupeeSymbol} {e.new_price}
                </p>
                <button className="cartitems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>
                  {rupeeSymbol} {cartItems[e.id] * e.new_price}
                </p>
                <img
                  src={remove_icon}
                  alt=""
                  className="cartitems-remove-icon"
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>cart Totals</h1>
          <div className="cartitems-total-item">
            <p>Subtotal</p>
            <p>₹ {getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cartitems-total-item">
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <hr />
          <div className="cartitems-total-item">
            <p>Total</p>
            <p>₹ {getTotalCartAmount()}</p>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promocode, Enter it here.</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promocode" />
            <button>APPLY</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
