import React, { useState, useEffect } from "react";
import { CustomerCard } from "./CustomerCard";
import { deleteCustomer, getAllCustomers } from "../../modules/CustomerManager";
import { useNavigate } from "react-router-dom";



export const CustomerList = () => {
    const [customers, setCustomers] = useState([]);
    const getCustomers = () => {
        return getAllCustomers().then(customersFromAPI => {
            setCustomers(customersFromAPI);
        });
    };

    useEffect(() => {
        getCustomers();
    }, []);

    const handleDeleteCustomer = (id) => {
        deleteCustomer(id)
        .then(() => getAllCustomers().then(setCustomers));
    };

    const navigate = useNavigate();

    return (
        <>
        <section className="section-content">
            <button type="button"
                className="btn"
                onClick={() => {navigate("/customers/create")}}>
                    Add Customer
            </button>
            </section>

        <div className="container-cards">
            {customers.map(customer => 
                <CustomerCard 
                    key={customer.id} 
                    customer={customer} 
                    handleDeleteCustomer={handleDeleteCustomer} />)}
        </div>
        </>
    );
};