import React from 'react';
import styles from './card.module.css';

const Card = ( {country} ) => {
    return (
        <h1>{country.name.common}</h1>
    )
}

export default Card;