import React, { useEffect, useState } from 'react';
import Cards from '../cards/cards';
import styles from './main.module.css';

const Main = ({ restCountries, onCountryClick }) => {
    const [countries, setCountries] = useState();

    useEffect(() => {
        restCountries.allCountries().then(countries => 
            // setCountries(countries);
            console.log(countries)
            );
    }, [restCountries])

    return (
        <Cards countries={countries} onCountryClick={onCountryClick} />
    )
}

export default Main;