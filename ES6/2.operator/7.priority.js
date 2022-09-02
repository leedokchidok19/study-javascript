let a = 2;
let b = 3;
let result = a + b * 4; // 2 + (3 * 4)

console.log(result); // 14

result = a++ + b * 4; // 2 + (3 * 4)

console.log('a++ + b * 4');
console.log(result); // 14

result = ( a + b ) * 4; // (3 + 3) * 4
console.log(result); // 24