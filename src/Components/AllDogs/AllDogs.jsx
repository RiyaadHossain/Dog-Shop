import React, { useEffect, useState } from "react";
import Dog from "../Dog/Dog";
import Cart from "../Cart/Cart";
import './AllDogs.css'

const AllDogs = () => {
  const [dogs, setDogs] = useState([]);
  const [cart, setCart] = useState([])
    
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setDogs(data));
  }, []);

  const addToCart = (id) => {
    const newCart = [...cart, id]
    setCart(newCart)
  }
  return (
    <div className="main-container">
      <div className="dog-container">
        {dogs.map((dog) => (
          <Dog key={dog.id} dog={dog} addToCart={addToCart}/>
        ))}
      </div>
      <div className="liked-dog">
        <Cart cart={cart}/>
      </div>
    </div>
  );
};

export default AllDogs;
