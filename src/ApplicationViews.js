import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from "./components/animal/AnimalList"
import { LocationList } from "./components/location/LocationList"
import { CustomerList } from "./components/customer/CustomerList"
import { EmployeeList } from "./components/employee/EmployeeList"
import { AnimalDetail } from "./components/animal/AnimalDetail"
import { LocationDetail } from "./components/location/LocationDetail"
import { AnimalForm } from "./components/animal/AnimalForm"
import { CustomerForm } from "./components/customer/CustomerForm"
import { EmployeeForm } from "./components/employee/EmployeeForm"
import { LocationForm } from "./components/location/LocationForm"

export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                {}
                <Route path="/" element={<Home />} />
                {}
                <Route exact path="/animals" element={<AnimalList />} />
                <Route path="/animals/:animalId" element={<AnimalDetail />} />
                <Route path="/animals/create" element={<AnimalForm />} />
                {}
                <Route exact path="/locations" element={<LocationList />} />
                <Route path="/locations/:locationId" element={<LocationDetail />} />
                <Route path="/locations/create" element={<LocationForm />} />
                {}
                <Route path="/customers" element={<CustomerList />} />
                <Route path="/customers/create" element={<CustomerForm />} />
                {}
                <Route path="/employees" element={<EmployeeList />} />
                <Route path="/employees/create" element={<EmployeeForm />} />
            </Routes>
        </>
    )
}