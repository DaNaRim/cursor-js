"use strict"

let n
do {
  n = +prompt("Write n (integer number, from -100_000 to 99_999)")
} while (isNaN(Number(n)) || !Number.isInteger(n)
            || n < -100_000 || n > 99_999)

let m
do {
  m = +prompt("Write m (integer number, from n to 100_000))")
} while (isNaN(Number(m)) || !Number.isInteger(m)
          || m <= n || m > 100_000)

const skipPairNum = confirm("Skip pair numbers?")

let sum = 0
for (let i = n; i <= m; i++) {
  if (skipPairNum && i % 2 === 0) continue
  sum += i
  console.log(sum)
}
console.log(sum)
