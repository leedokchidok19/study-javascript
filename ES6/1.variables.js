/*
입력(input) - 처리(process) - 출력(output)
                           - 데이터(data) 

변수(Variables) : 값을 저장하는 공간
: 자료를 저장할 수 있는 이름이 주어진 기억장소

* 변수를 선언하기 위해서는
let 혹은 const 키워드 사용
(var는 지양)

예) 1) 키워드 / 변수 이름 / 문의 끝
    let a;
    → 변수 선언(Variable declaration)

    2) 키워드 / 변수 이름 / 할당 연산자 / 값 / 문의 끝
    let a = 0;
    → 변수 선언과 값의 할당(Variable declaration and assignment)

    3) 변수 이름 / 할당 연산자 / 값 / 문의 끝
    a = 0;
    → 값의 재할당(Value reassigning)

* let a =0;
a 는 변수이름(Variable name) 혹은 식별자(identifier)라 불림
식별자 : 메모리의 주소 어딘가에 저장되어있는 것을 식별할 수 있다
*/

let a = 0;
console.log(a); //0

a = 1;
console.log(a); //1

let b;
console.log(b); //undefined

b = 2;
console.log(b); //2