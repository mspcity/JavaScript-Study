// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

console.log('youngmin\'s book')

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation


// 3. Increment and Decrement operators
let counter = 2;
const preIncrement = ++counter;
// same as
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`)

const postIncrement = counter++;
// postIncrement = counter;
//counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`)
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`)

// 4. Assignment operators
let x = 3;
let y = 6;
x += y // x = x + y;
x -= y // x = x - y;
x *= y // x = x * y;
x /= y // x = x / y;



