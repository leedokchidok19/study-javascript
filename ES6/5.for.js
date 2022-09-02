// 반복문 Loop Statement
// for(변수 선언문; 조건식; 증감식) {}
// 실행 순서:
// 1. 변수 선언문
// 2. 조건식의 값이 참이면 { } 코드 블록을 수행
// 3. 증감식을 수행
// 4. 조건식이 거짓이 될 때까지 2번과 3번을 반복함

for(let i = 0; i< 5; i++) {
    console.log(i);
}

for(let i = 3; i< 5; i++) {
    console.log(i);
}

for(let i = 0; i< 5; i = i + 2) {
    console.log(i);
}

// 중첩 사용
for(let i = 0; i< 5; i = i + 2) {
    for(let j = 0; j < 5; j++)
    console.log(i, j);
}

/*무한 루프
for(;;){
    console.log('무한 루프');
}
*/

// 반복문 제어: continue, break;
for (let i = 0; i < 20; i++) {
    if (i === 10) {
        console.log('i가 드디어 10이 되었다!');
        continue;//아래 코드를 무시하고 다음으로 진행
        //break;//반복문을 특정한 조건에 그만두고 싶을 때 사용
    }
    console.log(i);
}