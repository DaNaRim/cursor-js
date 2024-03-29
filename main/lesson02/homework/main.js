"use strict"

// let startNumber
// do {
//   if (!isNaN(Number(startNumber)) && startNumber <= 0 && startNumber !== "") {
//     alert("Number must be positive")
//   }
//   if (isNaN(Number(startNumber)) && typeof startNumber === "string") {
//     alert("You must type number")
//   }
//   startNumber = prompt("Write first number")
// } while (isNaN(startNumber) || startNumber <= 0)
// alert(startNumber)

let n
do {
  n = +prompt("Write n (integer number, from -100_000 to 99_999)")
} while (!Number.isInteger(n) || n < -100_000 || n > 99_999)

let m
do {
  m = +prompt(`Write m (integer number, from ${n} to 100_000))`)
} while (!Number.isInteger(m) || m <= n || m > 100_000)

const skipEvenNum = confirm("Skip even numbers?")

let sum = 0
for (let i = n; i <= m; i++) {
  if (skipEvenNum && i % 2 === 0) continue
  sum += i
}
console.log(sum)
alert("Your sum: " + sum)
