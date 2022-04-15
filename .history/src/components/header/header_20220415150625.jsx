import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon  } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styles from './header.module.css';

const Header = (props) => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <span className={styles.title}>Where in the world?</span>
                <span>
                    <button className={styles.button}>
                        <span>
                            <FontAwesomeIcon icon={faMoon} className={styles.icon}/>
                        </span>
                        <span>Dark Mode</span>
                    </button>
                </span>                     
            </div>
        </header>
    )
};

export default Header;