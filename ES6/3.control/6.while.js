// while(조건) {}
// 조건이 false가 될때까지 {} 코드를 반복 실행

let num = 5;
while(num >= 0) {
    console.log(num);
    num--;
}

let isActive = false;
let i = 0;
while(isActive) {
    console.log('아직 살아있다!');
    if(i === 1000) {
        break;
    }
    i++;
}

do {
    console.log('do-while 아직 살아있다!');
} while (isActive);

// while과 do while 차이점
// while은 조건식이 참인 경우 실행
// do while의 do 부분은 while 부분 조건식 참, 거짓 확인 전 실행