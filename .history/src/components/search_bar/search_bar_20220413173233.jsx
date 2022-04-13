import React from 'react';
import styles from './search_bar.module.css';

const SearchBar = (props) => {
    return (
        <section className={styles.searchBar}>
            <div>
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
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