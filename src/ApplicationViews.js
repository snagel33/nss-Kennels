import React from "react"
import { Route, Routes, Navigate } from "react-router-dom"
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
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"
import { AnimalEditForm } from "./components/animal/AnimalEditForm"
import { EmployeeEditForm } from "./components/employee/EmployeeEditForm"

export const ApplicationViews = ({ isAuthenticated, setIsAuthenticated }) => {

    const PrivateRoute = ({ children }) => {
        return isAuthenticated ? children : <Navigate to="/login" />;
    }
  
    const setAuthUser = (user) => {
      sessionStorage.setItem("kennel_customer", JSON.stringify(user))
      setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
    }

    return (
        <>
            <Routes>
                <Route exact path="/login" element={<Login setAuthUser={setAuthUser} />} />
                <Route exact path="/register" element={<Register />} />
                {}
                <Route path="/" element={<Home />} />
                {}
                <Route exact path="/animals" element={<PrivateRoute><AnimalList /></PrivateRoute>} />
                <Route path="/animals/:animalId" element={<AnimalDetail />} />
                <Route path="/animals/create" element={<AnimalForm />} />
                <Route path="/animals/:animalId/edit" element={<PrivateRoute><AnimalEditForm /></PrivateRoute>} />
                {}
                <Route exact path="/locations" element={<PrivateRoute><LocationList /></PrivateRoute>} />
                <Route path="/locations/:locationId" element={<LocationDetail />} />
                <Route path="/locations/create" element={<LocationForm />} />
                {}
                <Route path="/customers" element={<PrivateRoute><CustomerList /></PrivateRoute>} />
                <Route path="/customers/create" element={<CustomerForm />} />
                {}
                <Route path="/employees" element={<PrivateRoute><EmployeeList /></PrivateRoute>} />
                <Route path="/employees/create" element={<EmployeeForm />} />
                <Route path="/employees/:employeeId/edit" element={<PrivateRoute><EmployeeEditForm /></PrivateRoute>} />
            </Routes>
        </>
    )
}