import React from 'react';
import Card from '../card/card';
import styles from './cards.module.css';

const Cards = ({ countries }) => {
    console.log(countries);
    return (
        <ul className={styles.countries}>
            {countries.map(country => <Card country={country}/>)}
        </ul>
    )
}

export default Cards;