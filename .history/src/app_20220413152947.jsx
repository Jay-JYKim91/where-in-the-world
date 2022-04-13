import { useState, useEffect } from 'react';
import styles from './app.module.css';
import Detail from './components/detail/detail';
import Main from './components/main/main';

function App({ restCountries }) {
  const [countries, setCountries] = useState();
  const [selectedCountry, setSelectedCountry] = useState(null);
  
  useEffect(() => {
      restCountries.allCountries().then(
        console.log()
        // countries => setCountries(countries)
        );
  }, [restCountries])

  const selectCountry = (country) => {
    setSelectedCountry(country);
  }

  return (
    <div className={styles.app}>
      <Main countries={countries} onCountryClick={selectCountry} />
      {selectedCountry && (
        <Detail />
      )}
    </div>
  );
}

export default App;
