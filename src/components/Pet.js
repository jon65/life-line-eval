import React, { useState, useEffect } from "react";
import axios from "axios";

// import User from './components/users/User';

const Pet = () => {
  //init state
  const [pets, setPets] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3002/pets").then((response) => {
      setPets(response.data.pets);
    });
  }, []);

  return (
    <div>
      <h1>People</h1>
      {pets ? (
        pets.map((pet) => <div id={pet.id}>{pet.pet_name}</div>)
      ) : (
        <div>No owners found</div>
      )}
    </div>
  );
};

export default Pet;
