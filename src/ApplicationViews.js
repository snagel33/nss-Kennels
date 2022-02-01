import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { AnimalCard } from './components/animal/AnimalCard.js'
import { LocationCard } from "./components/location/LocationCard"
import { CustomerCard } from "./components/customer/CustomerCard"
import { EmployeeCard } from "./components/employee/EmployeeCard"

export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                {}
                <Route path="/" element={<Home />} />
                {}
                <Route path="/animals" element={<AnimalCard />} />
                {}
                <Route path="/locations" element={<LocationCard />} />
                {}
                <Route path="/customers" element={<CustomerCard />} />
                {}
                <Route path="/employees" element={<EmployeeCard />} />
            </Routes>
        </>
    )
}