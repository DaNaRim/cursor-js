"use strict"

const btn = document.querySelector("#btn")

// const getColor = function generateValue(value = 256, isOpacity) {
function generateValue(value = 256, isOpacity) {
  // console.log({isOpacity})
  const random = Math.floor(Math.random() * value)

  // if (random === 0) {
  //   return generateValue(value)
  // }

  if (isOpacity && random / value === 0) {
    return generateValue(value)
  }

  // console.log(random)
  return random
}

// btn.onclick = generateValue

function setBgColor() {
  document.body.style.backgroundColor
    = `rgba(${generateValue()},
     ${generateValue()},
     ${generateValue()},
     ${generateValue(11, true)})`
}

btn.onclick = setBgColor;

//IIFE
(function printA() {
  console.log("A")
})()

const genValue = () => console.log(Math.random())
// btn.onclick = genValue

const calculate = (...args) => {
  console.log(args)

  for (let i = 0; i < args.length; i++) {
    console.log(args[i])
  }
}
calculate(1, 2, 3, 4, 5)
calculate(1, 2, 3)

const arr = ["john", "Sam", "Dean"]
console.log(arr[0])
console.log(arr[1])
console.log(arr)

arr.push("Oliver")
console.log(arr)

arr.pop()
console.log(arr)

arr.shift()
console.log(arr)

arr.unshift("Tanya")
console.log(arr)

console.log(arr.concat("John", "Max"))
console.log(arr)

console.log(arr.indexOf("Max"))

let r = ["Oliver", "Sam"].join(", ")
console.log(r)

console.log(r.split(", "))

const newArr = arr.slice()
console.log(newArr)

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

console.log(arr2.slice(3))
console.log(arr2.slice(-3))
console.log(arr2.slice(3, 6))

arr2.splice(-1, 1, 99)
console.log(arr2)
