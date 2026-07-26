const images = ["./img/img_01.jpg", "./img/img_02.jpg", "./img/img_03.jpg", "./img/img_04.jpg"];

const randomImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url('${randomImage}')`;
