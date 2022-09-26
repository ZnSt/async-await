const BASE_URL = 'https://restcountries.com';
export async function fetchCountries(name) {
  try {
    const response = await fetch(`${BASE_URL}/v3.1/name/${name}?languages`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}
