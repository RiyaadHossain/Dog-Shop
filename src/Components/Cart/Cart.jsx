import React from "react";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";

const Cart = ({ cart, ChooseAgain, ChooseOne }) => {
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
          <button onClick={ChooseOne} className="cart-btn">Choose 1 for Me</button>
          <button onClick={ChooseAgain} className="cart-btn">Choose Again </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
