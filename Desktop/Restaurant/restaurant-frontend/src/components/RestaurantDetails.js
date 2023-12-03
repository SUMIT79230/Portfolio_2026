import React from 'react';
import './RestaurantDetails.css'; // Ensure this path is correct

const RestaurantDetails = ({ details }) => {
    return (
        <section className="restaurant-details">
            <div className="details-column">
                <h2>{details.name}</h2>
                <p>Address: {details.location.address}</p>
                <p>Latitude: {details.location.latitude}</p>
                <p>Longitude: {details.location.longitude}</p>
            </div>

            <div className="details-column">
                <h3>Chef</h3>
                <p>{details.chef.name}</p>
                <p>{details.chef.bio}</p>
                <p><strong>Signature Dish:</strong> {details.chef.signature_dish}</p>
            </div>

            <div className="details-column">
                <h3>Awards</h3>
                {details.awards.map(award => (
                    <p key={award.year}>{award.year} - {award.award} ({award.organization})</p>
                ))}
            </div>

            <div className="details-column">
                <h3>Ambiance</h3>
                <p>{details.ambiance.description}</p>
            </div>

            <div className="details-column">
                <h3>Sustainability Initiatives</h3>
                {details.sustainability.initiatives.map((initiative, index) => (
                    <div key={index}>
                        <p><strong>{initiative.name}</strong></p>
                        <p>{initiative.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RestaurantDetails;




