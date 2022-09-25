// fetch('https://api.github.com/users/ZnSt')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

// async function getGitData() {
//   try {
//     const response = await fetch('https://api.github.com/users/ZnSt');
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getGitData();

// const video = document.querySelector('.video');
// const myVideo = navigator.mediaDevices
//   .getUserMedia({ video: true })
//   .then(response => {
//     console.log(response);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// async function getUserVideo() {
//   try {
//     const response = await navigator.mediaDevices.getUserMedia({
//       video: true,
//     });
//     video.srcObject = response;
//   } catch (error) {
//     console.log(error);
//   }
// }

// getUserVideo();

function sleep(time) {
  return new Promise((resolve, reject) => {
    if (time < 500) {
      reject(`Слишком мало сна!`);
    }
    setTimeout(() => {
      resolve(`Поспал ${time}`);
    }, time);
  });
}

async function sleepSession() {
  try {
    const sleep1 = await sleep(1500);
    console.log(sleep1);
    const sleep2 = await sleep(1000);
    console.log(sleep2);
    const sleep3 = await sleep(500);
    console.log(sleep3);
    const sleep4 = await sleep(200);
    console.log(sleep4);
  } catch (error) {
    console.log(error);
  }
}

sleepSession();
