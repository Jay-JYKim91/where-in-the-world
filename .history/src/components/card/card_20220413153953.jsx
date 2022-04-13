import React from 'react';
import styles from './card.module.css';

const Card = ({ country, onCountryClick }) => {
    console.log(country);

    return (
        <div
            onClick={() => onCountryClick(country)}>
            <h1>{country.area}</h1>
        </div>
    )
}

export default Card;