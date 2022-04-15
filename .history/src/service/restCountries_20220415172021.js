class RestCountries {
    async allCountries() {
        const response = await fetch(
            `https://restcountries.com/v3.1/all`
        );
        const result = await response.json();
        return result;
    }

    async searchByCode(query) {
        const response = await fetch(
            `https://restcountries.com/v3.1/alpha/${query}`
        );
        const result = await response.json();
        console.log(result[0]);
        // return result[0].name.common;
    }
}

export default RestCountries;