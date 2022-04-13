import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.module.css';
import App from './app';
import RestCountries from './service/restCountries';

const restCountries = new RestCountries();

ReactDOM.render(
  <React.StrictMode>
    <App restCountries={restCountries}/>
  </React.StrictMode>,
  document.getElementById('root')
);
