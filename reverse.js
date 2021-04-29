// let str = "truck"
// let newStr = str.split('')
// console.log(newStr.reverse().join(''))

let str = 'apple'
let newStr = ''
for(let i = str.length -1; i >= 0; i--) {
  newStr += str[i]
}
console.log(newStr)