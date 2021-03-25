'use strict';
// Synchronous callback
function printImmediately(print) {
  print();
}
// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}

// JavaScript is synchronous.
// Execute the code block by order after hoisting.
// hoisting: var, function declaration.
console.log('1') // sync
setTimeout(() => 
console.log('2'), 1000); // async
console.log('3') // sync

printImmediately(() => console.log('hello')) // sync

printWithDelay(() => console.log('async callback'), 3000) // async