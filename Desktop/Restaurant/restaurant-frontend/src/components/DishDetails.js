import React from 'react';
import dishStyles from './DishDetails.module.css'; 
import rowStyles from './DishesRow.module.css'; 

const DishDetails = ({ dish }) => (
    <div className={rowStyles.dishesContainer}>
    <div className={dishStyles.dishCard}>
        <img src={dish.imageUrl || 'default-image.jpg'} alt={dish.name} className={dishStyles.dishImage} />
        <div className={dishStyles.dishContent}>
            <h4 className={dishStyles.dishName}>{dish.name || 'Name not available'}</h4>
            <p className={dishStyles.dishDescription}>{dish.description || 'Description not available'}</p>
            <p className={dishStyles.dishPrice}>{dish.price ? `Price: ${dish.price}` : 'Price not available'}</p>
            <p className={dishStyles.ingredients}>{dish.ingredients ? `Ingredients: ${dish.ingredients}` : 'Ingredients not available'}</p>
            <p className={dishStyles.seasonal_availability}>{dish.seasonal_availability ? `Seasonal Availability: ${dish.seasonal_availability}` : 'Seasonal availability not available'}</p>
        </div>
    </div>
    </div>
);

export default DishDetails;








