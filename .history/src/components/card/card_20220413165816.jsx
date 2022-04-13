import React from 'react';
import styles from './card.module.css';

const Card = ({ country, onCountryClick }) => {
    console.log(country);
    return (
        <li
            className={styles.container}
            onClick={() => onCountryClick(country)}
        >
            <div className={styles.imageBox}>
                <img className={styles.img} src={country.flags.png} alt="flag"/>
            </div>
            <div className={styles.info}>
                <h1>{country.name.common}</h1>

            </div>
        </li>
    )
}

export default Card;