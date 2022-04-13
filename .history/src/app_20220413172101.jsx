import { useState, useEffect } from 'react';
import styles from './app.module.css';
import Cards from './components/cards/cards';
import Detail from './components/detail/detail';
import Header from './components/header/header';
import SearchBar from './components/search_bar/search_bar';

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
      {!selectedCountry && (
        <SearchBar />
      )}
      {selectedCountry && (
        <Detail country={selectedCountry} />
      )}
      <div className={styles.cards}>
        <Cards countries={countries} onCountryClick={selectCountry} />
      </div>
    </div>
  );
}

export default App;
