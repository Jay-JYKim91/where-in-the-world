import React from 'react';
import Cards from '../cards/cards';
import styles from './main.module.css';

const Main = ({ restCountries }) => {
    const [countries, setCountries] = useState();

    useEffect(() => {
        restCountries.allCountries().then(countries => setCountries(countries));
    })

    return (
        <Cards countries={countries}/>
    )
}

export default Main;