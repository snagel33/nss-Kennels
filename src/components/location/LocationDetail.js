import React, { useEffect, useState } from "react";
import { getLocationById } from "../../modules/LocationManager";
import { useParams, useNavigate } from "react-router-dom";
import './LocationDetail.css'


export const LocationDetail = () => {
    const [location, setLocation] = useState({ name: "", address: ""});

    const {locationId} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        console.log("useEffect", locationId)
        getLocationById(locationId)
            .then(location => {
                setLocation(location);
            });
    }, [locationId]);

    return (
        <section className="location">
            <h3 className="location__name">{location.name}</h3>
            <div className="location__address">Address: {location.address}</div>
        </section>
    );
}