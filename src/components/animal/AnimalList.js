import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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

    const navigate = useNavigate();

    return (
        <>
        <section className="section-content">
            <button type="button"
                className="btn"
                onClick={() => {navigate("/animals/create")}}>
                    Admit Animal
            </button>
            </section>

        <div className="container-cards">
            {animals.map(animal => 
                <AnimalCard 
                    key={animal.id} 
                    animal={animal} 
                    handleDeleteAnimal={handleDeleteAnimal} />)}
        </div>
        </>
    );
};

