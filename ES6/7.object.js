/*
연관된 데이터를 그룹화
-> 변수 name과 관련된 내용이
많거나 변화가 많을 경우
그때마다 변수 이름을 수정하는 것은 비효율적
*/
let name = 'apple';
let color = 'red';
let display = '🍎';
let orangeName = 'orange';

let apple = {
    name: 'apple',
    color: 'red',
    display: '🍎'
}

console.log(apple);
//개별적으로 접근하고 싶을 때는 "."을 이용
console.log(apple.name);
console.log(apple.color);
console.log(apple.display);

let orange = {
    name: '오렌지',
    color: 'orange',
    display: '🍊'
}

console.log(orange);
console.log(orange.name);
console.log(orange.color);
console.log(orange.display);