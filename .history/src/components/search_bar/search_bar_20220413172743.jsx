import React from 'react';
import styles from './search_bar.module.css';

const SearchBar = (props) => {
    return (
        <section className={styles.searchBar}>
            <div>
                <input type="text"/>
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