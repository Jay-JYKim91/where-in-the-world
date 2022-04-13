import React from 'react';
import styles from './header.module.css';

const Header = (props) => {
    return (
        <header className={styles.header}>
            <span>Where in the world?</span>
            <span>
                <button>🌙 Dark Mode</button>
            </span>

        </header>
    )
};

export default Header;