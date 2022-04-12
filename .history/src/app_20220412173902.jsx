import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './app.module.css';
import Detail from './components/detail/detail';
import Main from './components/main/main';

function App({ restCountries }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={
            <Main restCountries={restCountries} />
          } />
          <Route exact path='/detail' element={
            <Detail />
          } />
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
