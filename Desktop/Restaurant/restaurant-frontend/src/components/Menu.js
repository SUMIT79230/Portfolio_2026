import React from 'react';
import Dish from './DishDetails';
import './Menu.css';

const Menu = ({ categories }) => (
    <section>
        {categories.map(category => (
            <div key={category.name}>
                <h3 className='h'>{category.name}</h3>
                {category.items.map(dish => <Dish key={dish.name} dish={dish} />)}
            </div>
        ))}
    </section>
);

export default Menu;
