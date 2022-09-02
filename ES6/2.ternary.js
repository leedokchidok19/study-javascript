// 삼항 조건 연산자 Ternary Operator
// 조건식 ? 참인 경우 : 거짓인 경우

let fruit = 'orange';
if (fruit === 'apple') {
    console.log('🍎');
}else if(fruit === 'orange') {
    console.log('🍊');
} else {
    console.log('😄');
}

// 위의 조건을 삼항 연산자로 표현
fruit === 'apple' ? console.log('🍎') : console.log('🍊');

// 삼항 연산자로 바로 변수에 할당
let emoji = fruit === 'apple' ? '🍎' : '🍊';
console.log(`emoji: ${emoji}`);