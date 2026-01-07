const countryList = document.getElementById("country-list");
axios.get("https://restcountries.com/v3.1/all?fields=name")
    .then((result) => {
        const names = result.data
        for (one of names) {
            const country = document.createElement("option");
            country.value = one.name.common;
            countryList.appendChild(country);
        };
    });