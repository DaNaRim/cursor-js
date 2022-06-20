"use strict"

console.log(null > 0) //false
console.log(null == 0) //false
console.log(null >= 0) //true
console.log(null != 0) //true
console.log(null == null) //true

console.log(undefined > 0) //false
console.log(undefined == 0) //false
console.log(undefined >= 0) //false
console.log(undefined == undefined) //true

if ("" >= false) {
  console.log(1)
}

if ([]) {
  //objects, not empty string return true
  //null, undefined, NaN return false
  console.log(2)
}

let age;

let message = age < 3
? "Hello" : age < 18
? "ff" : age < 100
? "aa" : "omg"

if ("o") {
  console.log(3)
}

console.log(1 || 0)
console.log(true || "sdfsd")
console.log(undefined || 0)
console.log(undefined || "" || false || 0)

console.log(typeof +"123")
console.log(typeof Number("123"))

// let name
// do {
//   name = prompt(name)
// } while (!name)

