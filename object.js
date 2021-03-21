// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object.

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const bob = { name: 'bob', age: 37 };
print(bob)

bob.hasJob = true;
console.log(bob.hasJob)

delete bob.hasJob;
console.log(bob.hasJob)

// 2. Computed properties

console.log(bob.name);
console.log(bob['name']); // key should be always string 'name'
bob['hasJob'] = true;
console.log(bob.hasJob)

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(bob, 'name')
printValue(bob, 'age')

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 =  new Person('elly', 30);

console.log(person4)

// 4. Constructor Function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// 5. in operator: property existence check (key in obj)

console.log('name' in bob)
console.log('age' in bob)
console.log('random' in bob)
console.log(bob.random)

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in bob) {
  console.log(key);
}
console.clear()
// for (value of iterable)
const array = [1, 2, 4, 5];
for(value of array) {
  console.log(value)
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20'};
// const user2 = user;
// user2.name = 'coder';
// console.clear();
// console.log(user);

// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3)

const user4 = {};
Object.assign(user4, user);
console.clear();
console.log(user4);

const user5 = Object.assign({}, user);
console.log(user5)