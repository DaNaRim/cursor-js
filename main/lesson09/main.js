"use strict"

const arr = [1, 2, 2, 2, 3, 3]

const res = arr.reduce((acc, curr) => {
  if (acc[curr]) acc[curr]++
  else acc[curr] = 1
  return acc
}, {})
console.log(Object.keys(res).find((el) => {
  return res[el] === Math.max(...Object.values(res))
}))

// const res2 = arr.reduce((acc, curr, index, array) => {
//   const currLength = array.filter((el) => el === curr).length
// }, {})


function add(a, b) {
  return a + b
}

console.log(typeof add)
console.log(typeof add == "object")
console.log(add)

// [[Lexical environment]]
add()


const a = 10
const b = 20

// function printSmth(whereAmI) {
//   // [[LE]]
//   if (whereAmI) console.log(whereAmI)
//   console.log({a, b})
// }

// {
//   const a = 45
//   const b = 250
//   printSmth("Local")
// }
// printSmth("Global")

function printSmth(a, b) {
  console.log({a, b})
}

printSmth(a, b)

{
  const a = 45
  const b = 250
  printSmth(a, b)
}

function printSmth2() {
  const a = 25
  const b = 400
  console.log({a, b})
}

printSmth2()


let count = 1

console.log(count)

function increment() {
  count += 1
}

increment()
console.log(count)


function ranger(type) {
  if (type === "inc") count++
  else if ("dec") count--
}

ranger("inc")
console.log({count})

function ranger2(type) {
  let count = 1
  if (type === "inc") count++
  else if ("dec") count--
  return count
}

console.log(ranger2("inc"))

function ranger3() {
  let count = 1

  return function (type) {
    if (type === "inc") count++
    else if ("dec") count--
    return count
  }
}

const firstCount = ranger3()
console.log({firstCount: firstCount("inc")})

firstCount("inc")
console.log({firstCount: firstCount("inc")})

const secondCount = ranger3()

secondCount("inc")
console.log({secondCount: secondCount("inc")})


console.log(this)
const obj = {
  name: "John",
  isAuthenticated: false,
  sayHi: function () {
    if (!this.isAuthenticated) {
      console.warn("Log in")
    }
    console.log(this.name)
  }
}
obj.sayHi()

//Error
// const printMyName = obj.sayHi
// printMyName()


function add2() {

}

function User() {
  const a = 10
  console.log("Current user: ", this)
}

const user = new User()

function User2() {
  const name = "Sam"

  this.sayName = function () {
    console.log(this.name)
  }
}

const sam = new User2()
sam.sayName()


const sayName = function () {
  console.log(this.name)
}

function User3(_name) {
  const name = _name
}

const sam2 = new User3()
console.log({sam2})


const obj2 = {
  name: "L"
}

obj2.sayMyName = sayName
obj2.sayMyName()

// const newF = sayName.call()

function sayName2(a, b) {
  console.log({
    title: `Name is: ${this.name}`,
    a, b
  })
}

sayName2.call(obj2, 10, 20)
sayName2.apply(obj2, [10, 20, 30, 40])

const newF = sayName2.bind(obj, 10, 20)
newF()


const obj3 = {
  name: "Name",

  say1: function (...args) {
    console.log({
      title: `Name is: ${this.name}`, //outside fn context
      args
    })
  },

  say2: (...args) => {
    console.log({
      title: `Name is: ${this.name}`, //outside obj context
      args
    })
  },

  say3: function () {
    const localName = () => { //outside fn context
      console.log(this)
    }
    localName()
  }
}

obj3.say1()
obj3.say2()
obj3.say3()


const arr2 = [1, 2, 3, 4, 5]

console.log(
  arr2.map((el) => el * 2)
      .filter((el) => el > 2)
)


// add(1,2,3) ==> add(1)(2)(3)

function addThreeNumb() {
  return function (a = 0) {
    return function (b = 0) {
      return function (c = 0) {
        return a + b + c
      }
    }
  }
}


//HOF - high order function
console.log(addThreeNumb()(1)(2)(3))


function multiple(bindArg) {
  return function (a) {
    return bindArg * a
  }
}

const multipleTwo = multiple(2)
const multipleThree = multiple(3)
console.log(multipleTwo(5))
console.log(multipleThree(5))


function multiple2() {
  const a = 0
  multiple2()
}

// multiple2()

function factorial(arg) {
  let counter = 1

  if (arg === 0) return counter

  counter *= arg
  factorial(arg - 1)
  return counter
}

console.log(factorial(5))
