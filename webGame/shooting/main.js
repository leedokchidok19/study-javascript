/*
이미지는 icon8 사이트에서 참고
https://icons8.com/icons
*/
//캔버스 세팅
let canvas;
let ctx;

canvas = document.createElement('canvas');
ctx = canvas.getContext('2d');

canvas.width = 400;
canvas.height = 700;

document.body.appendChild(canvas);

let backgroundImage, spaceshipImage, bulletImage, enemyImage, gameOverImage;

function loadImage() {

    backgroundImage = new Image();
    backgroundImage.src = 'images/hd-wallpaper-1867616_1920.jpg';

    spaceshipImage = new Image();
    spaceshipImage.src = 'images/icons8-space-60.png';

    bulletImage = new Image();
    bulletImage.src = 'images/hd-wallpaper-1867616_1920.jpg';

    enemyImage = new Image();
    enemyImage.src = 'images/hd-wallpaper-1867616_1920.jpg';

    gameOverImage = new Image();
    gameOverImage.src = 'images/hd-wallpaper-1867616_1920.jpg';

}