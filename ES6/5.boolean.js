//불리언 타입
let 참 = true;
let 거짓 = false;
console.log(참);
console.log(거짓);

//활용예
let isFree = true;
let isActivated = false;
let isEnrolled = true;
console.log(isActivated);
console.log(isEnrolled);

//연산자 !! 두 개를 붙이면 true, false 인지 확인 가능
//Falshy 거짓인 값
console.log(`0: ${!!0}`);
console.log(`-0: ${!!-0}`);
console.log(`null: ${!!null}`);
console.log(`undefined: ${!!undefined}`);
console.log(`NaN: ${!!NaN}`);

//Truthy 참인 값
console.log(`1: ${!!1}`);
console.log(`-1: ${!!-1}`);
console.log(`text: ${!!'text'}`);
console.log(!!{});
console.log(`Infinity: ${!!Infinity}`);