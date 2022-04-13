import { useState } from 'react';
import styles from './app.module.css';
import Detail from './components/detail/detail';
import Main from './components/main/main';

function App({ restCountries }) {
  const [selectedCountry, setSelectedVideo] = useState(null);
  const selectCountry = (country) => {
    setSelectedCountry(country);
  }
  return (
    <div className={styles.app}>
      <Main restCountries={restCountries} onCountryClick={selectCountry} />
      <Detail />
    </div>
  );
}

export default App;
