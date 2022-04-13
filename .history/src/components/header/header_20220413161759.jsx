import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSolid  } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styles from './header.module.css';

const Header = (props) => {
    return (
        <header className={styles.header}>
            <span className={styles.title}>Where in the world?</span>
            <span>
                <button className={styles.button}>
                    <span>
                        <FontAwesomeIcon icon={faMoon} />
                    </span>
                    <span>Dark Mode</span>
                </button>
            </span>

        </header>
    )
};

export default Header;