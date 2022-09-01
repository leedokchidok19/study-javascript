/*
변수 : Variable
1) 값을 저장하는 공간
2) 자료를 저장할 수 있는 이름이 주어진 기억장소
예) let : 재할당 가능 
    const : 재할당 불가능
*/
//let 재할당이 가능
let a = 1;
a = 2;

//const 재할당이 불가능
//1. 상수
//2. 상수 변수 또는 변수
const text = 'hello';
// 상수 변수인데 재할당해서 에러 발생
//text = 'hi'; //TypeError: Assignment to constant variable.

//1. 상수
// 대문자
// 단어와 단어 사이에는 "_" 언더 스코어 사용
const MAX_FRUITS = 5;

//2. 재할당이 불가능한 상수 변수 또는 변수
const apple = {
    name: 'apple',
    color: 'red',
    display: '🍎'
}
//apple = {};
console.log(apple);
apple.name = 'orange';
apple.display = '🍏';
console.log(apple);

/*
        재할당(Reassignable)   변경(Mutable)
let         Yes                    Yes
const       No                     Yes

※ object의 값 변경은 둘 다 가능
*/