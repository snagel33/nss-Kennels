import React, { useEffect, useState } from "react";
import { deleteLocation, getLocationById } from "../../modules/LocationManager";
import { useParams, useNavigate } from "react-router-dom";
import './LocationDetail.css'


export const LocationDetail = () => {
    const [location, setLocation] = useState({ name: "", address: ""});
    const [isLoading, setIsLoading] = useState(true);

    const {locationId} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        console.log("useEffect", locationId)
        getLocationById(locationId)
            .then(location => {
                setLocation(location);
                setIsLoading(false);
            });
    }, [locationId]);

    const handleDelete = () => {
        setIsLoading(true);
        deleteLocation(locationId).then(() =>
            navigate("/locations")
        );
    };

    return (
        <section className="location">
            <h3 className="location__name">{location.name}</h3>
            <p className="location__address">Address: {location.address}</p>
            <button type="button" disabled={isLoading} onClick={handleDelete}>
                Close Location
            </button>
        </section>
    );
}