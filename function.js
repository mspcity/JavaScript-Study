// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.x createCardAndPoint -> createCard, createPoint
// function is object in JS

function log(msg) {
  console.log(msg);
}
log('hello');
log(123)

// 2. Parameters
// primitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
  obj.name = 'coder';
}
const john = { name: 'john' };
changeName(john);
console.log(john)

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}
showMessage('Hi!');