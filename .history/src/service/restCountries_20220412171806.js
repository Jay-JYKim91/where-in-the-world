class RestCountries {
    async allCountries() {
        const response = await fetch(
            `https://restcountries.com/v2/all`
        );
        const result = await response;
        console.log(result);
    }
}

export default RestCountries;