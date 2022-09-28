const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?i=ice';
async function fetchApi() {
  const response = await fetch(`${BASE_URL}`);
  const result = await response.json();

  return result;
}

fetchApi()
  .then(data => console.log(data))
  .catch(error => console.log(error));
