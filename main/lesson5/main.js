"use strict"

console.log(+"123")
console.log(parseInt("123"))
console.log(+"")

console.log(isNaN(NaN))
console.log(isNaN(323))
console.log(NaN === NaN)


const teachers = ["Ivan", "Vlad", "Bogdan"]

let a = 10
let b = 20
let numbers = [a, b]
console.log("numbers: " + numbers)

console.log(teachers[2])
console.log(teachers["2"])

console.log(teachers[teachers.length - 1])

const arr = [22, 33]
console.log("arr " + arr)

const arr2 = new Array(22)
console.log("arr2 " + arr2)

const arr3 = [21, ["188", [true]]]
console.log(arr3[1][1])


let el = teachers.pop()
console.log("el " + el)
console.log(teachers)

let el2 = teachers.push(el)
console.log("el2 " + el2)
console.log(teachers)

let el3 = teachers.shift()
console.log("el3 " + el3)
console.log(teachers)

let el4 = teachers.unshift(el3)
console.log("el4 " + el4)
console.log(teachers)


// let a1 = prompt("enter number")
// let b1 = prompt("enter number")
// let c1 = prompt("enter number")

const numbers2 = []
// for (let i = 0; i < 4; i++) {
//   numbers2.push(parseInt(prompt("enter number")))
// }
// console.log(numbers2)

for (let i = 0; i < teachers.length; i++) {
  console.log("teacher: " + teachers[i])
}

for (const teacher of teachers) {
  console.log("teacher: " + teacher)
}

let biggestN = 0
for (let i = 0; i < numbers2.length; i++) {
  if (numbers2[i] > biggestN) {
    biggestN = numbers2[i]
  }
}

function findBiggestUserN(maxNumbers) {
  const numbers2 = []
  // for (let i = 0; i < maxNumbers; i++) {
  //   numbers2.push(parseInt(prompt("enter number")))
  // }
  // console.log(numbers2)

  let biggestN = 0
  for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] > biggestN) {
      biggestN = numbers2[i]
    }
  }
  return biggestN
}

// console.log("The biggest is: " + findBiggestUserN(5))

function findBiggestUserN2() {
  const numbers2 = []

  let n
  do {
    n = parseInt(prompt("enter number"))
    if (!isNaN(n)) {
      numbers2.push(n)
    }
  } while (!isNaN(n))

  let biggestN = 0
  for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] > biggestN) {
      biggestN = numbers2[i]
    }
  }
  return biggestN
}

// console.log("The biggest is: " + findBiggestUserN2())


const str = "hello"

const arr4 = str.split("")
arr4.reverse()
console.log(arr4.join(""))


let arr5 = [11, 55]

let copyArr = arr5
copyArr[0] = 22
console.log(copyArr)
console.log(arr5)

//arr -> true
if ([]) {
  console.log("Yes")
}

console.log([] === [])
console.log([1, 2] === [1, 2])

function toUpperCaseTeachers(arr) {
  let newArr = [...arr]
  for (let i = 0; i < newArr.length; i++) {
    newArr[i] = newArr[i].toUpperCase()
    // newArr.push(arr[i].toUpperCase())
  }
  return newArr
}

console.log(toUpperCaseTeachers(teachers))
console.log("original", teachers)


console.log(teachers.includes("Vlad"))
console.log(teachers.indexOf("Vlad"))

function countIvans(arr) {
  let count = 0
  let index = 0;
  while (arr.includes("Ivan", index)) {
    count++
    index = arr.indexOf("Ivan", index) + 1
  }
  return count
}
console.log(countIvans(["Ivan", "Ivan", "NoIvan"]))

let all = teachers.concat(["Yevhen", "Vasyl"], [1, 3])
console.log("all: ", all)

teachers.push("Yevhenia")
console.log(teachers.slice(2, 3))
console.log(teachers.slice(-1)) //cut and copy
console.log(teachers.splice(2)) //delete

console.log(teachers.splice(0, 1, "Vasyl", "Vasyl"))


function removeIvans(arr) {
  arr = [...arr]
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] === "Ivan") {
  //     arr.splice(i, 1)
  //     i--
  //   }
  // }

  for (let i = arr.length; i >= 0; i--) {
    if (arr[i] === "Ivan") {
      arr.splice(i, 1)
    }
  }
  return arr
}

console.log(removeIvans(["Ivan", "FF", "Ivan", "Ivan", "GG"]))



