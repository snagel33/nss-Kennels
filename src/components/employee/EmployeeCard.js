import React from "react"
import "./Employee.css"
import { Link } from "react-router-dom";

export const EmployeeCard = ({employee, handleDeleteEmployee}) => {

    return (
        <div className="card">
            <div className="card-content">
                <picture>
                    <img src={`/images/employee.png`} alt="My Employee" />
                </picture>
                <h3>Name: <span className="card-employeename">
                    {employee.name}
                </span></h3>
                <p>Location: {employee.location.name}</p>
                <button type="button" onClick={() => handleDeleteEmployee(employee.id)}>Terminate</button>
            </div>
        </div>
    );
}