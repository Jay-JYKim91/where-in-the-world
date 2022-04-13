import React, { useEffect, useState } from 'react';
import Cards from '../cards/cards';
import styles from './main.module.css';

const Main = ({ countries, onCountryClick }) => {
    

    return (
        <Cards countries={countries} onCountryClick={onCountryClick} />
    )
}

export default Main;