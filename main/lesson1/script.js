"use strict"
// a = 5
// console.log(a)

//always const first

console.log(apples)
var apples = 10

//var go first when program start

/*
names

no digit first
can contain _ and $
 */

/*
* const - CREAMING_SNAKE_CASE
* let - camelCase
* */

const name = "ivan"
const age = 20

console.log(typeof name) //string
console.log(typeof "")
console.log(typeof age) //number
console.log(typeof null) //object
console.log(typeof function () {
}) //function
console.log(typeof NaN) //number

let currentUser = undefined

// currentUser = date.user

function check(a) {
  if (typeof a === "string") {
    console.log(a.toUpperCase())
  } else if (typeof a === "number") {
    console.log(a * a)
  }
}

check(33)

// const name1 = prompt("write your name", "10")

console.log(parseInt("10", 2))

console.log("22" / "11") //2

123.455.toFixed(2)
