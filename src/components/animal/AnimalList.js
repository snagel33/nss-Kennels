import React, { useEffect, useState } from "react";
import { deleteAnimal, getAllAnimals, getAnimalById } from "../../modules/AnimalManager";
import { AnimalCard } from "./AnimalCard";

export const AnimalList = () => {
    const [animals, setAnimals] = useState([]);
    const getAnimals = () => {
        return getAllAnimals().then(animalsFromAPI => {
            setAnimals(animalsFromAPI);
        });
    };

    useEffect(() => {
        getAnimals();
    }, []);

    const handleDeleteAnimal = id => {
        deleteAnimal(id)
        .then(() => getAllAnimals().then(setAnimals));
    };

    return (
        <div className="container-cards">
            {animals.map(animal => 
                <AnimalCard 
                    key={animal.id} 
                    animal={animal} 
                    handleDeleteAnimal={handleDeleteAnimal} />)}
        </div>
    );
};

