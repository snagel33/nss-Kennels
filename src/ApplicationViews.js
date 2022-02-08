import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { AnimalCard } from './components/animal/AnimalCard.js'
import { LocationCard } from "./components/location/LocationCard"
import { CustomerCard } from "./components/customer/CustomerCard"
import { EmployeeCard } from "./components/employee/EmployeeCard"
import { AnimalList } from "./components/animal/AnimalList"
import { LocationList } from "./components/location/LocationList"
import { CustomerList } from "./components/customer/CustomerList"
import { EmployeeList } from "./components/employee/EmployeeList"
import { AnimalDetail } from "./components/animal/AnimalDetail"
import { LocationDetail } from "./components/location/LocationDetail"

export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                {}
                <Route path="/" element={<Home />} />
                {}
                <Route exact path="/animals" element={<AnimalList />} />
                <Route path="/animals/:animalId" element={<AnimalDetail />} />
                {}
                <Route exact path="/locations" element={<LocationList />} />
                <Route path="/locations/:locationId" element={<LocationDetail />} />
                {}
                <Route path="/customers" element={<CustomerList />} />
                {}
                <Route path="/employees" element={<EmployeeList />} />
            </Routes>
        </>
    )
}