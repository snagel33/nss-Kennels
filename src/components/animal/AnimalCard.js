import React from "react"
import { Link } from "react-router-dom";
import "./Animal.css"

export const AnimalCard = ({ animal, handleDeleteAnimal }) => {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={'/images/dog.svg'} alt="My Dog" />
          </picture>
          <h3>Name: <span className="card-petname">
            {animal.name}
          </span></h3>
          <p>Breed: {animal.breed}</p>
          <Link to={`/animals/${animal.id}`}>
            <button>Details</button>
          </Link>
          <Link to={`/animals/${animal.id}/edit`}>
            <button>Edit</button>
          </Link>
          <button type="button" onClick={() => handleDeleteAnimal(animal.id)}>Discharge</button>
        </div>
      </div>
    );
  }