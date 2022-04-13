import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass  } from '@fortawesome/free-solid-svg-icons';
import styles from './search_bar.module.css';

const SearchBar = (props) => {
    return (
        <section className={styles.searchBar}>
            <div className={styles.inputBox}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input type="search" placeholder="Search for a country..." />
            </div>
            <div>
                <select name="" id="">
                    <option value=""></option>
                </select>
            </div>
        </section>
    )
}

export default SearchBar;