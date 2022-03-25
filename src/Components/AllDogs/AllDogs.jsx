import React, { useEffect, useState } from "react";
import Dog from "../Dog/Dog";
import Cart from "../Summary/Summary";
import './AllDogs.css'

const AllDogs = () => {
    const [dogs, setDogs] = useState([]);
    
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setDogs(data));
  }, []);
  console.log(dogs);
  return (
    <div className="main-container">
      <div className="dog-container">
        {dogs.map((dog) => (
          <Dog key={dog.id} dog={dog} />
        ))}
      </div>
      <div className="liked-dog">
        <Cart/>
      </div>
    </div>
  );
};

export default AllDogs;
