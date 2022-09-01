/*
typeof: 데이터 타입을 확인
값을 타입 문자열로 반환
정적인 언어는 아래와 같이 컴파일 시 타입이 결정
int variable =0;
다른 타입을 할당하면 컴파일 에러 발생
자바스크립트는 실행 시 타입 결정
동적 또는 weakly typed라고 부른다
*/
let variable;
console.log(typeof variable);//undefined

variable = '';
console.log(typeof variable);//string

variable = 123;//자바스크립트는 할당된 값에 따라 타입이 결정된다
console.log(typeof variable);//nuber

variable = {}
console.log(typeof variable);//object

variable = function() {};
console.log(typeof variable);//function

variable = Symbol();
console.log(typeof variable);//symbol

console.log(typeof 123);//number
console.log(typeof '123');//string
