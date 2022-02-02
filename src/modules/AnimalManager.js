const remoteURL = "http://localhost:8088"

export const getAnimalById = (animalId) => {
    return fetch(`${remoteURL}/animals/${animalId}?_expand=location&_expand=customerId`)
        .then(res => res.json())
}

export const getAllAnimals = () => {
    return fetch(`${remoteURL}/animals`)
        .then(res => res.json())
}