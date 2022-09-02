// 조건문 Conditional
// if(조건) {}
// if(조건) {} else {}
// if(조건1) {} else if(조건2) {} else {}

let fruit = 'apple';
if (fruit === 'apple') {
    console.log('🍎');
}else if(fruit === 'orange') {
    console.log('🍊');
} else {
    console.log('😄');
}

// 출력이 안되는 조건
if(false) {
    // false
    // 0
    // ''
    // null
    // undefined
    console.log('출력하면 안됨!');
}
// 출력 되는 조건
if(true) {
    // true
    // 1
    // 'not empty' 비어있지 않은 문자열
    // 연산자 이용<, >, <=...
    // 예) 2 > 1
    console.log('출력하면 됨!');
}