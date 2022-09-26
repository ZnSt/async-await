const BASE_URL = 'http://localhost:7777';

// // POST
// async function addBook(book) {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json',
//     },
//     body: JSON.stringify(book),
//   };

//   const response = await fetch(`${BASE_URL}/books`, options);
//   console.log(response);

//   const result = await response.json();
//   console.log(result);
//   return result;
// }

// // PATCH
// addBook({
//   title: 'Тестовая книга по Node.js',
//   author: 'I',
//   genres: ['Node.js'],
//   rating: 100,
// })
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

// async function changeBook(update, id) {
//   const options = {
//     method: 'PATCH',
//     headers: {
//       'Content-type': 'application/json',
//     },
//     body: JSON.stringify(update),
//   };

//   const response = await fetch(`${BASE_URL}/books/${id}`, options);
//   const result = await response.json();

//   return result;
// }

// changeBook(
//   {
//     title: 'Новые приключения Node.js and React',
//     rating: 45,
//     author: 'Znova Stanislav',
//   },
//   1
// )
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

// changeBook({ title: 'Приключения Шурика', rating: 20 }, 6)
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

// // PUT
// async function updateAllBook(update, id) {
//   const options = {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(update),
//   };

//   const response = await fetch(`${BASE_URL}/books/${id}`, options);
//   const result = await response.json();
//   return result;
// }

// updateAllBook(
//   {
//     title: 'HTML & CSS book of result',
//     rating: 35,
//     author: 'Josh Bron',
//     price: '300$',
//   },
//   7
// )
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

// DELETE

async function deleteBook(bookID) {
  const options = {
    method: 'DELETE',
  };

  const response = await fetch(`${BASE_URL}/books/${bookID}`, options);
  const result = await response.json();

  return result;
}

deleteBook(9)
  .then(data => console.log(data))
  .catch(error => console.log(error));
