import React from 'react';
import Header from './components/Header';
import RestaurantDetails from './components/RestaurantDetails';
import Menu from './components/Menu';
import Map from './components/Map';
import Reviews from './components/Reviews';
import Events from './components/Events';
import data from './data.json'; // Assuming JSON data is saved here

const App = () => {
    const { restaurant } = data;
    return (
        <div>
            <Header />
            <RestaurantDetails details={restaurant} />
            <Menu categories={restaurant.menu.categories} />
            <Events events={restaurant.events.upcoming_events} />
            <Map location={{ lat: restaurant.location.latitude, lng: restaurant.location.longitude }} />
            <Reviews reviews={restaurant.reviews} />
            
        </div>
    );
};

export default App;

