export function renderCountries(countries) {
  return countries
    .map(({ name, flags }) => {
      return `<li>
        <img src="${flags.svg}" alt="${name.official}" width="30" height="30">
        <p>${name.official}</p>
            </li>`;
    })
    .join('');
}

export function renderFullCountries(countries) {
  return countries
    .map(({ flags, name, capital, population, languages }) => {
      console.log(typeof languages);
      return `
    <li>
        <img src="${flags.svg}" alt="${name.official} width="500" height="200">
        <h2>${name.official}</h2>
        <p>Capital: ${capital}</p>
        <p>Population: ${population}</p>
        <p>Languages: ${Object.values(languages).join(', ')}</p>
    </li>
`;
    })
    .join('');
}
