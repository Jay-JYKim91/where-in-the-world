import { useEffect, useState } from 'react';
import styles from './app.module.css';

function App({ restCountries }) {
  const [countries, setCountries] = useState();

  useEffect(() => {
    restCountries.allCountries();
  })
  return (
    <h1>hello</h1>
  );
}

export default App;
