import React, { useEffect, useState } from "react";
import { EmployeeCard } from "./EmployeeCard";
import { getAllEmployees } from "../../modules/EmployeeManager";
import { deleteEmployee } from "../../modules/EmployeeManager";


export const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const getEmployees = () => {

        return getAllEmployees().then(employeesFromAPI => {
            setEmployees(employeesFromAPI);
        });
    };

    useEffect(() => {
        getEmployees();
    }, []);

    const handleDeleteEmployee = id => {
        deleteEmployee(id)
        .then(() => getAllEmployees().then(setEmployees));
    };

    return (
        <div className="container-cards">
            {employees.map(employee => 
                <EmployeeCard 
                    key={employee.id} 
                    employee={employee} 
                    handleDeleteEmployee={handleDeleteEmployee} />)}
        </div>
    );
};