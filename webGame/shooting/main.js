/*
이미지는 icon8 사이트에서 참고
https://icons8.com/icons
* bulletImage - https://icons8.com/icons/set/bullet
* enemyImage - https://icons8.com/icons/set/enemy
* gameOverImage - https://toppng.com/show_download/101861/game-over/large
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

//우주선 좌표(우주선의 크기는 60)
let spaceshipX = canvas.width/2 - 60/2;
let spaceshipY = canvas.height - 60;

function loadImage() {

    backgroundImage = new Image();
    backgroundImage.src = 'images/hd-wallpaper-1867616_1920.jpg';

    spaceshipImage = new Image();
    spaceshipImage.src = 'images/icons8-space-60.png';

    bulletImage = new Image();
    bulletImage.src = 'images/icons8-bullet-50.png';

    enemyImage = new Image();
    enemyImage.src = 'images/icons8-air-67.png';

    gameOverImage = new Image();
    gameOverImage.src = 'images/toppng.com-game-over-870x630.png';

}

let keysDown = {};

//방향키 읽어오는 함수
function setupKeyboardListener() {
    document.addEventListener('keydown', function(event){
        console.log('key', event.keyCode);
        console.log('key', event.key);
        keysDown[event.keyCode] = true;
        console.log('키다운에객체에 들어간 값은?', keysDown);
    });
    document.addEventListener('keyup', function(event){
        delete keysDown[event.keyCode];
        console.log('키클릭 후?', keysDown);
    });
}

/*
우주선 동작
우주선이 오른쪽으로 가면 x 좌표 증가
우주선이 왼쪽으로 가면 x 좌표 감소
*/
function update() {

    if( 39 in keysDown ) {
        spaceshipX += 5;
    }//right

    if( 37 in keysDown ) {
        spaceshipX -= 5;
    }//left

    //우주선의 좌표가 캔버스 밖으로 나가지 않게 처리
    if(spaceshipX <= 0) {
        spaceshipX = 0;
    }

    if(spaceshipX >= canvas.width-60){
       spaceshipX = canvas.width-60;
    }

}

function render() {

    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(spaceshipImage, spaceshipX, spaceshipY);

}

function main() {

    update();//좌표값 업데이트
    render();//그리기
    //console.log('animation calls main function');
    requestAnimationFrame(main);
}

loadImage();
setupKeyboardListener();
main();


