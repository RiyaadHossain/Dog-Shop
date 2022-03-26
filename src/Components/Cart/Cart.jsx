import React from "react";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";

const Cart = ({ cart }) => {
  return (
    <div className="cart-container">
      <h2>Cart</h2>
      <div className="cart-body">
        <div className="single-dog-container">
          {cart.map((singleDog) => (
            <CartItem key={singleDog.id} singleDog={singleDog} />
          ))}
        </div>
        <div className="btn-container">
          <button className="cart-btn">Choose 1 for Me</button>
          <button className="cart-btn">Choose Another</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
