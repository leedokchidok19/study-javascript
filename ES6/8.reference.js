/*
* 원시(Primitive)
    메모리 셀 안에 값이 들어가 있음
    메모리 자체를 가리킴
* 객체(Object)
    실제 객체가 들어있는 메모리 값을 저장
    즉, 참조(Reference) 값이 들어가 있음
*/

//원시 타입은 값이 복사되어 전달됨
let a = 1;
let b = a;//Copy by Value
b = 2;

console.log(a);
console.log(b);

//객체 타입은 참조 값(메모리 주소, 레퍼런스)가 복사되어 전달됨
let apple = {
    name: '사과',
}

//apple 메모리 주소값이 복사
let orange = apple;//copy by Reference
apple.name = '오렌지';

console.log(apple);
console.log(orange);