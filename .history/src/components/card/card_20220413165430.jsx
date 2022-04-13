import React from 'react';
import styles from './card.module.css';

const Card = ({ country, onCountryClick }) => {
    
    return (
        <li
            className={styles.container}
            onClick={() => onCountryClick(country)}
        >
            <h1>{country.name.common}</h1>
        </li>
    )
}

export default Card;