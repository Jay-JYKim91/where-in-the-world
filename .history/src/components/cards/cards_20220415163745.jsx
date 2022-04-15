import React from 'react';
import Card from '../card/card';
import styles from './cards.module.css';

const Cards = ({ countries, onCountryClick }) => {
    return (
        <div className={styles.container}>
            <ul className={styles.countries}>
                {countries.map(country => <Card country={country} key={country.name.common} onCountryClick={onCountryClick} />)}
            </ul>
        </div>
        
    )
}

export default Cards;