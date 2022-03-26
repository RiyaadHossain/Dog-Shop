import React from "react";
import { HiShoppingCart } from "react-icons/hi";
import "./Dog.css";

const Dog = ({ dog }) => {
  const { name, img, price } = dog;
  return (
    <div className="card">
      <img src={img} alt="" />
      <div className="card-body">
        <div>
          <h2>{name}</h2>
          <div className="flex">
            <p className="lead">
              <strong>Price:</strong> ${price}
            </p>
            <button className="btn">
              <HiShoppingCart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dog;
