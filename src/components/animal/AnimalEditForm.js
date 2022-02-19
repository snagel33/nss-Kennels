import React, { useState, useEffect } from "react"
import {useNavigate, useParams} from "react-router-dom";
import {getAnimalById, updateAnimal} from "../../modules/AnimalManager"
import { getAllCustomers } from "../../modules/CustomerManager";
import { getAllLocations } from "../../modules/LocationManager";
import "./AnimalForm.css"

export const AnimalEditForm = () => {
  const [animal, setAnimal] = useState({ name: "", breed: "" });
  const [isLoading, setIsLoading] = useState(false);

  const {animalId} = useParams();
  const navigate = useNavigate();
  const [customers, setCustomers] = useState([]);
  const [locations, setLocations] = useState([]);

  const handleFieldChange = evt => {
    const stateToChange = { ...animal };
    stateToChange[evt.target.id] = evt.target.value;
    setAnimal(stateToChange);
  };

  const updateExistingAnimal = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedAnimal = {
      id: animalId,
      name: animal.name,
      breed: animal.breed,
      customerId: animal.customerId,
      locationId: animal.locationId
    };

  updateAnimal(editedAnimal)
    .then(() => navigate("/animals")
    )
  }

  useEffect(() => {
    getAnimalById(animalId)
      .then(animal => {
        setAnimal(animal);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    getAllCustomers().then(setCustomers)
  }, []);

  useEffect(() => {
    getAllLocations().then(setLocations)
  }, []);

  const handleControlledInputChange = (event) => {
    const newAnimal = { ...animal };
    newAnimal.customerId = event.target.value;
    setAnimal(newAnimal);
    };

  const handleControlledInputChanges = (event) => {
    const newAnimal = { ...animal };
    newAnimal.locationId = event.target.value;
    setAnimal(newAnimal);
    };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={animal.name}
            />
            <label htmlFor="name">Animal name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="breed"
              value={animal.breed}
            />
            <label htmlFor="breed">Breed</label>

          <select value={animal.customerId} name="customerId" id="customerId" onChange={handleControlledInputChange} className="form-control" >
              <option value="0">Select an owner</option>
              {customers.map(l => (
                  <option key={l.id} value={l.id}>
                      {l.name}
                  </option>
              ))}
          </select>
            <label htmlFor="customerId">Owner</label>

          <select value={animal.locationId} name="locationId" id="locationId" onChange={handleControlledInputChanges} className="form-control" >
              <option value="0">Select a location</option>
              {locations.map(loc => (
                  <option key={loc.id} value={loc.id}>
                      {loc.name}
                  </option>
              ))}
          </select>
            <label htmlFor="customerId">Location</label>
          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingAnimal}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}