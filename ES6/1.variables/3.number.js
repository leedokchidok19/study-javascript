// js는 숫자 관련 타입이 세부적으로 나눠져 있지 않다
let integer = 123;  //정수
let negative = -123;//음수
let double = 1.23;  //실수

console.log(integer);
console.log(negative);
console.log(double);

let binary = 0b1111011;//2진수 : 123
let octal = 0o173;//8진수 : 123
let hex = 0x7b;//16진수: 123

console.log(binary);
console.log(octal);
console.log(hex);

//※주의사항
console.log(0 / 123);//0
console.log(123 / 0);//Infinity
console.log(123 / -0);//-Infinity
console.log(123 / 'text');//NaN(Not a Number)

/*
*BigInt의 typeof 판별 결과는 "bigint"입니다.
    typeof 1n === 'bigint'; // true
    typeof BigInt('1') === 'bigint'; // true

* Object로 감싼 BigInt는 일반적인 object 자료형으로 취급합니다.
    typeof Object(1n) === 'object'; // true
숫자 뒤 'n'을 붙이면 사용 가능 혹운 함수(BigInt) 사용
*/
let bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt);
console.log(BigInt('3'));
