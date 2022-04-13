import { useState, useEffect } from 'react';
import styles from './app.module.css';
import Cards from './components/cards/cards';
import Detail from './components/detail/detail';
import Header from './components/header/header';

function App({ restCountries }) {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  
  useEffect(() => {
      restCountries.allCountries().then(countries => setCountries(countries));
  }, [restCountries])

  const selectCountry = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div className={styles.app}>
      <Header />
      {selectedCountry && (
        <Detail country={selectedCountry} />
      )}
      <Cards countries={countries} onCountryClick={selectCountry} />
    </div>
  );
}

export default App;
