"use strict"

const user = {
  name: "Ivan",
  age: 25
}

// const jsBody = document.body
//
// jsBody.style.height = "150px"
// jsBody.style.backgroundColor = "red"

for (let i = 0; i < 21; i++) {
  if (i % 2 === 0) continuellll
  console.log({i})
}

/*
0
NaN
undefined
null
false
 */

if (0) {
  console.log("yes")
}

console.log(true + 2)

Number("23") //good
+ "23" // bad

// let startNumber
// do {
//   if (!isNaN(Number(startNumber)) && startNumber <= 0 && startNumber !== "") {
//     alert("Number must be positive")
//   }
//   if (isNaN(Number(startNumber)) && typeof startNumber === "string") {
//     alert("You must type number")
//   }
//   startNumber = prompt("Write first number")
// } while (isNaN(startNumber) || startNumber <= 1)

console.log("\"")

let value = 26.2342
value = value.toFixed(3)
console.log(typeof value)

console.log(10 || 20 || 30) //10
console.log(null || "" || undefined) //undefined

console.log(1 && 2 && 3) //3
console.log(undefined && 2 && 3) //undefined

console.log(undefined || 2 && 3 || null && 4)
