// 증가 & 감소 연산자 Increment & Decrement Operators
let a = 0;

console.log(a); // 0

a++; // a = a + 1;

console.log(a); // 1

a--; // a = a - 1;

console.log(a); // 0

console.clear();
// 주의!
// a++ 필요한 연산을 하고, 그 뒤 값을 증가시킴
// ++a 값을 먼저 증가하고, 필요한 연산을 함
a = 0;
//console.log(a++); // 0
//console.log(a); // 1
let b = a++;
console.log(b); // 0
console.log(a); // 1

a = 0;
let c = ++a;
console.log(c); // 1
console.log(a); // 1