import React from 'react';
import styles from './detail.module.css';

const Detail = ({ country }) => {
    return (
        <h1>{country.name.common}</h1>
    )
}

export default Detail;