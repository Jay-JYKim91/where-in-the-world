class RestCountries {
    async allCountries() {
        const response = await fetch(
            `https://restcountries.com/v3.1/all`
        );
        // const result = await response;
        // console.log(result.json());
        return response.json();
    }
}

export default RestCountries;