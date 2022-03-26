import React, { useEffect, useState } from "react";
import Dog from "../Dog/Dog";
import Cart from "../Cart/Cart";
import "./AllDogs.css";

const AllDogs = () => {
  const [dogs, setDogs] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setDogs(data));
  }, []);

  const addToCart = (id) => {
    const newCart = [...cart, id];
    let selectedDog = []
    newCart.map((cart) => {
      if (selectedDog.indexOf(cart) === -1) {
        selectedDog.push(cart)
      } else {
        alert("Sorry, You Can't choose the Same dog Twice. 🙁")
      }
    })
    setCart(selectedDog);
  };
  const ChooseOne = () => {
    const random = Math.floor(Math.random() * cart.length)
    const choosed = [cart[random]]
    setCart(choosed)
  };
  const ChooseAgain = () => {
    setCart([])
  };
  return (
    <div className="main-container">
      <div className="dog-container">
        {dogs.map((dog) => (
          <Dog key={dog.id} dog={dog} addToCart={addToCart} />
        ))}
      </div>
      <div className="liked-dog">
        <Cart ChooseAgain={ChooseAgain} ChooseOne={ChooseOne} cart={cart} />
      </div>
    </div>
  );
};

export default AllDogs;
