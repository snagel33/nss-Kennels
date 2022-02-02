import React, { useEffect, useState } from "react";
import { getAllAnimals, getAnimalById } from "../../modules/AnimalManager";
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

    return (
        <div className="container-cards">
            {animals.map(animal => <AnimalCard key={animal.id} />)}
        </div>
    );
};