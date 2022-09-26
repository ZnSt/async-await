// GET

// const BASE_URL = 'http://localhost:7777';
// function fetchBooks() {
//   return fetch(`${BASE_URL}/books`)
//     .then(response => response.json())
//     .then(data => console.log(data));
// }

// fetchBooks();

// function fetchBooksById(id) {
//   return fetch(`${BASE_URL}/books/${id}`)
//     .then(response => response.json())
//     .then(data => console.log(data));
// }

// fetchBooksById(1);

// POST

// function addBook(book) {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(book),
//   };

//   return fetch(`${BASE_URL}/books`, options)
//     .then(response => response.json())
//     .then(data => console.log(data));
// }

// addBook({
//   title: 'Тестовая книга по REACT',
//   author: 'Monnley',
//   genres: ['REACT'],
//   rating: 25,
// })
//   .then(renderBook)
//   .catch(error => console.log(error));

// addBook({
//   title: 'Тестовая книга по NODE.JS',
//   author: 'Alex',
//   genres: ['NODE.JS'],
//   rating: 15,
// })
//   .then(renderBook)
//   .catch(error => console.log(error));

// function renderBook(book) {
//   console.log('Пришел ответ от бекенда можно рисовать');
//   return book;
// }

// // PATCH PUT
// const BASE_URL = 'http://localhost:7777';

// function updateBookById(update, bookId) {
//   const options = {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(update),
//   };

//   return fetch(`${BASE_URL}/books/${bookId}`, options)
//     .then(response => response.json())
//     .then(data => console.log(data));
// }
// updateBookById({ title: 'Большая новая тестовая книга по HTML' }, 14);
// updateBookById({ rating: 55 }, 13);
// updateBookById({ author: 'Репета Сашка', rating: 100 }, 12);

// // DELETE

// const BASE_URL = 'http://localhost:7777';
// function removeBook(bookId) {
//   const options = {
//     method: 'DELETE',
//   };
//   return fetch(`${BASE_URL}/books/${bookId}`, options)
//     .then(response => response.json())
//     .then(data => console.log(data));
// }

// removeBook(18);
// removeBook(16);
