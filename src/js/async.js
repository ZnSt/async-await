// function getFruits(name) {
//   const fruits = {
//     strawberry: '🍓',
//     kiwi: '🥝',
//     apple: '🍏',
//   };

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(fruits[name]);
//     }, 500);
//   });
// }

// async function asyncMakeSmoothie() {
//   try {
//     const apple = getFruits('apple');

//     const kiwi = getFruits('kiwi');

//     const strawberry = getFruits('strawberry');

//     const fruits = await Promise.all([apple, kiwi, strawberry]);
//     console.log(fruits);
//   } catch (error) {
//     console.log(error);
//   }
// }
// asyncMakeSmoothie();

// function makeSmoothie() {
//   getFruits('apple').then(apple => {
//     console.log(apple);
//     getFruits('kiwi').then(kiwi => console.log(kiwi));
//   });
// }

// async function foo() {
//   try {
//     const response = await fetch('https://dummyjson.com/posts');
//     const json = await response.json();
//     return json;
//   } catch (error) {
//     throw new Error(error);
//   }
// }

// foo()
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

// async function foo() {
//   try {
//     console.time('time');
//     const response1 = await fetch('https://dummyjson.com/posts/1');
//     const response2 = await fetch('https://dummyjson.com/posts/2');
//     const response3 = await fetch('https://dummyjson.com/posts/3');

//     const json1 = await response1.json();
//     const json2 = await response2.json();
//     const json3 = await response3.json();

//     return { json1, json2, json3 };
//   } catch (error) {
//     throw new Error(error);
//   }
// }

// foo()
//   .then(data => {
//     console.log(data);
//     console.timeEnd('time');
//   })
//   .catch(error => console.log(error));

const urls = [
  'https://dummyjson.com/posts/1',
  'https://dummyjson.com/posts/2',
  'https://dummyjson.com/posts/3',
];

async function foo() {
  try {
    console.time('time');
    const promise = urls
      .map(url => fetch(url))
      .then(response => response.json());
    return promise;
  } catch (error) {
    throw new Error(error);
  }
}

foo()
  .then(data => {
    console.log(data);
    console.timeEnd('time');
  })
  .catch(error => console.log(error));
