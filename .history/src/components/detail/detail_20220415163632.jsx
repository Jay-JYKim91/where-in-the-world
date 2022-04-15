import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import styles from './detail.module.css';

const Detail = ({ country, onBackClick }) => {
    const population = parseInt(country.population).toLocaleString();
    const languages = Object.values(country.languages).join(', ');
    const currency = country.currencies;
    return (
        <section className={styles.container}>
            <div className={styles.top_box}>
                <button
                    onClick={() => onBackClick(country)}
                >
                    <span>
                        <FontAwesomeIcon icon={faArrowLeftLong} className={styles.icon}/>
                    </span>
                    <span>Back</span>
                </button>
            </div>
            <div className={styles.detail}>
                <div className={styles.image_box}>
                    <img className={styles.image} src={country.flags.png} alt="flag"/>
                </div>
                <div className={styles.info_box}>
                    <h3>{country.name.common}</h3>
                    <div className={styles.info_detail_box}>
                        <p>
                            <span className={styles.info_title}>Official Name: </span>
                            <span>{country.name.official}</span>
                        </p>
                        <p>
                            <span className={styles.info_title}>Top Level Domain: </span>
                            <span>{country.tld}</span>
                        </p>
                        <p>
                            <span className={styles.info_title}>Population: </span>
                            <span>{population}</span>
                        </p>
                        <p>
                            <span className={styles.info_title}>Currencies:</span>
                            <span>{currency}</span>
                        </p>
                        <p>
                            <span className={styles.info_title}>Region: </span>
                            <span>{country.region}</span>
                        </p>
                        <p>
                            <span className={styles.info_title}>Languages: </span>
                            <span>{languages}</span>
                        </p>
                        <p>
                            <span className={styles.info_title}>Sub Region: </span>
                            <span>{country.subregion}</span>
                        </p>
                        <p>
                            <span className={styles.info_title}>Capital: </span>
                            <span>{country.capital}</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Detail;