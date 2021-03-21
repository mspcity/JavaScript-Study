console.log(age)
// 1. Variable, rw(read/write)
// let (added in ES6)
let globalName = 'global name'
{
  let name = 'park';
  console.log(name);
  name = 'hello';
  console.log(name);
  console.log(globalName)
}
console.log(name)
console.log(globalName)

//var(don't use this)
// var hoisting
// has no block scope
{
  age = 4;
  var age;
}
console.log(age)

// 3. Constant, r(read only)
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;


