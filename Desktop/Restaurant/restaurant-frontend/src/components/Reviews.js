import React from 'react';
import './Reviews.css';

const Reviews = ({ reviews }) => (
    <section>
        <div className='review-class'>
            <div className='review_header'>Customer Reviews</div>
            <div className='review-inner'>

            {reviews.map(review => (
    <div key={review.customer_name} className="individual-review">
        <h4 className="review-customer-name">{review.customer_name}</h4>
        <div className="review-rating">
            {[...Array(Math.round(review.rating))].map((_, i) => (
                <div key={i} className="star-icon"></div>
            ))}
            <span>Rating: {review.rating}</span>
        </div>
        <p className="review-comment">{review.comment}</p>
    </div>
))}

                
            </div>
        </div>
    </section>
);

export default Reviews;

