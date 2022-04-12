import React from 'react';
import styles from './cards.module.css';

const Cards = ({ countries }) => {
    return (
        <h1>{countries.name.official}</h1>
    )
}

export default Cards;