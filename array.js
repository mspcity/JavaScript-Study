'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length)
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
console.log(fruits[fruits.length - 1])

console.clear();
// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i])
}

console.clear()

// b. for of
for(let fruit of fruits) {
  console.log(fruit)
}

console.clear()

// c. forEach
fruits.forEach((fruit) => console.log(fruit));

console.clear()

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('peach', 'grape')
console.log(fruits);

console.clear()

// pop: remove an item from the end
fruits.pop();
console.log(fruits);

console.clear()

// unshift: add an item to the beginning
fruits.unshift('lemon')
console.log(fruits)

console.clear()

// shift: removes an item from the beginning
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push

