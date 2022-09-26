// try {
//   console.log('внтури try до myVar');

//   setTimeout(() => {
//     try {
//       myVar;
//     } catch (error) {
//       console.log('undefined myVar');
//     }
//   }, 1000);

//   console.log('Внутри try после myVar');
// } catch (error) {
//   console.log('error!!!');
// }

// console.log('после трай-кетч');

try {
  console.log('внтури try до myVar');

  myVar;

  console.log('Внутри try после myVar');
} catch (error) {
  console.dir(error);
}

console.log('после трай-кетч');
