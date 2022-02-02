import React from "react"
import "./Location.css"

export const LocationCard = ({location}) => {
    return (
        <div className="card">
            <div className="card-content">
                <picture>
                    <img src={`/images/kennel2.png`} alt="My Kennel" />
                </picture>
                <h3>Name: <span className="card-kennelname">
                    {location.name}
                </span></h3>
                <p>Address: {location.address}</p>
                </div>
            </div>
        );
    }