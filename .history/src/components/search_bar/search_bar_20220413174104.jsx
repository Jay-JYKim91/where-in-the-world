import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass  } from '@fortawesome/free-solid-svg-icons';
import styles from './search_bar.module.css';

const SearchBar = (props) => {
    return (
        <section className={styles.searchBar}>
            <div className={styles.inputBox}>
                <FontAwesomeIcon className={styles.icon} icon={faMagnifyingGlass} />
                <input className={styles.input} type="search" placeholder="Search for a country..." />
            </div>
            <div>
                <select name="region" id="filterByRegion">
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </section>
    )
}

export default SearchBar;