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
                <p className={styles.name}>{country.name.common}</p>
                <div className={styles.infoDetail}>

                </div>
                <p>
                    <span>Population: </span>
                    <span>{country.population}</span>
                </p>
                <p>
                    <span>Region: </span>
                    <span>{country.region}</span>
                </p>
                <p>
                    <span>Capital: </span>
                    <span>{country.capital}</span>
                </p>
            </div>
        </li>
    )
}

export default Card;