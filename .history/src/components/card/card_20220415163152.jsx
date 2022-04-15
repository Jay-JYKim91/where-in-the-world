import React from 'react';
import styles from './card.module.css';

const Card = ({ country, onCountryClick }) => {
    const population = parseInt(country.population).toLocaleString();

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
                    <p>
                        <span className={styles.infoTitle}>Population: </span>
                        <span>{population}</span>
                    </p>
                    <p>
                        <span className={styles.infoTitle}>Region: </span>
                        <span>{country.region}</span>
                    </p>
                    <p>
                        <span className={styles.infoTitle}>Capital: </span>
                        <span>{country.capital}</span>
                    </p>    
                </div>
            </div>
        </li>
    )
}

export default Card;