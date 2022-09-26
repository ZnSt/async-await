const validJson = '{ "name": "Mango", "age": 1 }';
const invalidJson = '{бекенд вернул вот такое чудо!}';

try {
  console.log('1');
  console.log(JSON.parse(validJson));

  console.log('2');
} catch (error) {
  console.log(error);
}

console.log('После try-catch');
