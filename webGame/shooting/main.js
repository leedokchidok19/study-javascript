/*
이미지는 icon8 사이트에서 참고
https://icons8.com/icons
* bulletImage - https://icons8.com/icons/set/bullet
* enemyImage - https://icons8.com/icons/set/enemy
* gameOverImage - https://toppng.com/show_download/101861/game-over/large
*/
/*
version : 1.0
description :
1) 우주선 이동
    * 우주선의 x,y 좌표가 바뀌고 다시 render 그려준다
2) 총알만들기
    * 스페이스바를 누르면 총알 발사
    * 총알이 발사 = 총알의 y갑이 --, 총알의 x값은?
        스페이스를 누른 순간의 우주선의 x좌표
    * 발사된 총알들은 총알 배열에 저장을 한다
    * 총알들은 x,y좌표값이 있어야 한다
    * 총알 배열을 가지고 render 그려준다
3) 적군 만들기
    * x,y, init, update
    * 적군은 위치가 랜덤하다
    * 적군은 밑으로 내려온다 = y좌표가 증가한다
    * 1초마다 하나씩 적군이 나온다
    * 적군의 우주선이 바닥에 닿으면 게임 오버
    * 적군과 총알이 만나면 우주선이 사라진다 점수 1점 회득
4) 적군이 죽는다
    * 총알.y <= 적군.y And
         총알.x >= 적군.x and 총알.x <= 적군.x + 적군의 넓이
        => 닿았다
        => 총일이 죽게됨 적군의 우주선이 없어짐, 점수 획득
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
let gameOver = false;//true이면 게임 끝, false이면 게임 시작
let score = 0;//점수판

//우주선 좌표(우주선의 이미지 크기는 60)
let spaceshipX = canvas.width/2 - 60/2;
let spaceshipY = canvas.height - 60;

//총알 저장 리스트
let bulletList = [];

//총알 좌표
function Bullet() {

    this.x = 0;
    this.y = 0;

    //총알을 우주선 좌표를 기준으로 설정
    this.init = function() {

        this.x = spaceshipX+5; //총알 가운데 위치
        this.y = spaceshipY;
        this.alive = true; //true면 살아있는 총알 false면 죽은 총알

        bulletList.push(this);

    }//init

    //총알 이동
    this.update = function() {
        this.y -= 7;
    }

    //총알과 적군의 충돌체크
    this.checkHit = function() {
        //총알.y <= 적군.y And
        //총알.x >= 적군.x and 총알.x <= 적군.x + 적군의 넓이
        for(let i=0; i < enemyList.length; i++){

            if(this.y <= enemyList[i].y && this.x >= enemyList[i].x && this.x <= enemyList[i].x +40) {
                //총알이 죽게됨 적군의 우주선이 없어짐, 점수 획득
                score++;
                this.alive = false;//죽은 총알
                enemyList.splice(i, 1);
            }
    
        }

    }

}//Bullet

//랜덤 함수로 최소와 최대값을 기준으로 랜덤한 숫자 return
function generateRandomValue(min, max) {

    //Math.random : 0~1 사이 숫자 랜덤하게 반환
    //Math.floor : 소수점 내림 함수
    let randomNum = Math.floor(Math.random() * (max-min+1)) + min;
    return randomNum;

}//generateRandomValue

//적군 저장 리스트
let enemyList = [];

//적군 만들기
function Enemy() {

    this.x = 0;
    this.y = 0;

    //적국 초기화
    this.init = function() {

        this.x = generateRandomValue(0, canvas.width - 67);//max는 캔버스 너비와 우주선 이미지 크기 계산
        this.y = 0;//최상위 위치에서 시작하게 0으로 고정

        enemyList.push(this);

    }//init

    this.update = function() {
        this.y += 2;
        
        if(this.y >= canvas.height -67) {
            gameOver = true;
            //console.log(`Game Over: ${gameOver}`);
        }
    }

}//Enemy

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
        
        if(event.keyCode == 32) { //32 == space bar
            createBullet(); //총알 생성
        }
    });

}//setupKeyboardListener

//총알 생성
function createBullet() {
    
    console.log('총알 생성');
    let b = new Bullet();//총알 생성
    b.init();

}//createBullet

//적 생성
function createEnemy() {

    //setInterval(호출하고 싶은 함수, 시간)
    //1초에 한 번 적 생성
    const interval = setInterval(function(){
        let e = new Enemy();
        e.init();
    }, 1000);

}//createEnemy

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

    //총알의 y좌표를 업데이트하는 함수 호출
    for(let i =0; i < bulletList.length; i++) {

        if(bulletList[i].alive) {
            bulletList[i].update();
            bulletList[i].checkHit();//총알 충돌체크
        }

    }

    //적의 y좌표를 업데이트하는 함수 호출
    for(let i =0; i < enemyList.length; i++) {

        enemyList[i].update();

    }

}//update

function render() {

    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(spaceshipImage, spaceshipX, spaceshipY);
    ctx.fillText(`Scroe:${score}`, 20, 20);
    ctx.fillStyle = 'white';
    ctx.font = '1.25rem Arial';

    //총알 render
    for(let i =0; i < bulletList.length; i++) {
        if(bulletList[i].alive) {
            ctx.drawImage(bulletImage, bulletList[i].x, bulletList[i].y);
        }

    }

    //적 render
    for(let i =0; i < enemyList.length; i++) {
        ctx.drawImage(enemyImage, enemyList[i].x, enemyList[i].y);
    }

}//render

function main() {

    if(!gameOver){
        //게임오버가 아닌 경우
        update();//좌표값 업데이트
        render();//그리기
        //console.log('animation calls main function');
        requestAnimationFrame(main);
    }else{
        //게임오버 문구 출력
        ctx.drawImage(gameOverImage, 10, 100, 380, 380);
    }

}//main

loadImage();
setupKeyboardListener();
createEnemy();
main();


