import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import styles from './detail.module.css';

const Detail = ({ country }) => {
    return (
        <section className={styles.container}>
            <div className={styles.top_box}>
                <button>
                    <span>
                        <FontAwesomeIcon icon={faArrowLeftLong} className={styles.icon}/>
                    </span>
                    <span>Back</span>
                </button>
            </div>
            <div className={styles.detail}>
                <div className={styles.image_box}>
                    <img src={country.flags.png} alt="flag"/>
                </div>
                <div className={styles.info_box}>
                    <h3>{country.name.common}</h3>
                    <div className={styles.info_detail_box}>
                        <p>
                            <span>Official Name: </span>
                            <span>{country.name.official}</span>
                        </p>
                        <p>
                            <span>Top Level Domain: </span>
                            <span>{country.tld}</span>
                        </p>
                        <p>
                            <span>Population: </span>
                            <span>{country.population}</span>
                        </p>
                        {/* <p>
                            <span>Currencies:</span>
                            <span>{country.currencies.EUR.name}</span>
                        </p> */}
                        <p>
                            <span>Region: </span>
                            <span>{country.region}</span>
                        </p>
                        <p>
                            <span>Languages: </span>
                            <span></span>
                        </p>
                        <p>
                            <span>Sub Region: </span>
                            <span>{country.subregion}</span>
                        </p>
                        <p>
                            <span>Capital: </span>
                            <span>{country.capital}</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Detail;