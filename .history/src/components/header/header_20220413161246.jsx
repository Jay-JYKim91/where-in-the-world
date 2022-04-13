import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './header.module.css';

const Header = (props) => {
    return (
        <header className={styles.header}>
            <span className={styles.title}>Where in the world?</span>
            <span>
                <button className={styles.button}>
                    <span>
                        <FontAwesomeIcon icon="fa-solid fa-moon" />
                    </span>
                    <span>Dark Mode</span>
                </button>
            </span>

        </header>
    )
};

export default Header;