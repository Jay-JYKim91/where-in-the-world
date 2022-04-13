import React from 'react';
import Card from '../card/card';
import styles from './cards.module.css';

const Cards = ({ countries, onCountryClick }) => {
    return (
        <ul className={styles.countries}>
            {countries.map(country => <Card country={country} onCountryClick={onCountryClick} />)}
        </ul>
    )
}

export default Cards;