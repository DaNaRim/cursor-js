"use strict"

const whatToSay = "Ooh hello"

sendMessage()

function sendMessage(text, recipient) {
  let phrase = ""

  function preparePhrase(separator) {
    // if (separator === undefined) {
    //   separator = "|"
    // }
    // or ${separator || "|"}
    phrase = `${text} ${separator} ${recipient}!`
  }

  preparePhrase()
  console.log(phrase)
}

sendMessage()

// sayHi() // error
const sayHi = function () {
  console.log("Hi guys!")
}

const func = () => console.log("Hi") //bad

function sum(a, b = 10) {
  console.log(a + b)
}

sum(1, undefined)
sum(10, 20)

function sum2(a, b = 10, c = 30, d = 40) {
  return a + b + c + d
}

console.log(sum2(1))

function checkSpaces(object1, object2) {
  console.log(arguments)
  let spaceVolume = 100
  let objectVolume = object1 + object2

  if (spaceVolume < objectVolume) {
    return "Too much"
  }
  return "Ok"
}

console.log(checkSpaces(1, 200))
console.log(checkSpaces(1, 200, 30, 40, 50))

function test(...args) {
  console.log(args)
}

test(1, 2, 3, 4, 5)

const calcVolume = (containerVolume, containerQty) => {
  return containerVolume * containerQty - 20
}

function checkSpace(containerVolume, containerQty, tooMuch, ...rest) {
  let spaceVolume = calcVolume(containerVolume, containerQty)
  let objectVolume = 0
  for (let i = 0; i < rest.length; i++) {
    objectVolume += rest[i]
  }

  if (spaceVolume < objectVolume) {
    tooMuch()
    return "Too much"
  }
  return "Ok"
}

let res = checkSpace(100, 2, requestFunding, 30, 10, 1000)

const funcCheckArgs = function () {
  console.log(arguments)
}

const fuckFromConstructor = new Function("a", "b", "console.log('hello ' + a + ' ' + b)")
fuckFromConstructor()

// (function() {
//   console.log(arguments)
// })(12, 213, 312, 132)

function requestFunding() {
  console.log("Where is my money Lebovsky?!")
}

function makeCounter() {
  let counter = 0

  return function () {
    return counter++
  }
}

console.log(makeCounter()())
const counter1 = makeCounter()
const counter2 = makeCounter()
console.log(counter1())
console.log(counter2())

let f = function someFunction() {
  console.log(f)
}
f()
// console.log(someFunction)

let newF = f
f = null