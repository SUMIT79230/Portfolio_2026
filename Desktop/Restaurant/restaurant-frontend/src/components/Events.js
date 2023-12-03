import React from 'react';
import './Events.css'; // Import the CSS here

const Events = ({ events }) => (
    <section className="events-section">
        <div className='Upcoming_event'>Upcoming Events</div>
        {events.map(event => (
            <div key={event.name} className="event-item">
                <h4 className="event-title">{event.name}</h4>
                <p className="event-date">Date: {event.date}</p>
                <p className="event-description">{event.description}</p>
            </div>
        ))}
    </section>
);

export default Events;



