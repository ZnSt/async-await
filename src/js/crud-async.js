const BASE_URL = 'http://localhost:7777';

async function addBook(book) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  };
  const response = await fetch(`${BASE_URL}/books`, options);
  console.log(response);
  const newBook = await response.json();

  return newBook;
}
