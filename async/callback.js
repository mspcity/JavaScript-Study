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

printWithDelay(() => console.log('async callback'), 2000) // async

// Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
      setTimeout(() => {
        if (
          (id === 'park' && password === 'dream') ||
          (id === 'coder' && password === 'academy')
        ) {
          onSuccess(id);
        } else {
          onError(new Error('not found'));
        }
      }, 1000)
  }
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'park') {
        onSuccess({ name: 'park', role: 'admin'});
      } else {
        onError(new Error('no access'));
      }
    }, 1000)
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
  id, 
  password, 
  user => {
    userStorage.getRoles(
      user, 
      userWithRole => {
        alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`)
      },
      error => {
        console.log(error);
      }
    );
  }, 
error => {console.log(error)}
);
