"use strict"

// BigInt()

const a = 1234n

console.log(typeof a)
console.log(a + 1n)

const name1 = Symbol()
const name2 = Symbol()
const name3 = Symbol.for("name") // using specific key
const name4 = Symbol.for("name")

console.log(name1)
console.log(name1 === name2)
console.log(name3 === name4)


const age = Symbol.for("age")
const username = Symbol.for("username")

const obj = {
  [age]: 20,
  [username]: "John",

  age: 30,
  username: "Pette"
}

console.log()
console.log(obj.age)
console.log(obj[age])


const userNames = ["John", "Sam", "Jack"]

for (const name of userNames) {
  console.log(name)
}


for (const objKey in obj) {
  console.log(objKey)
}

console.log(Object.getOwnPropertyNames(obj))

Object.getOwnPropertyNames(obj).forEach(el => console.log(obj[el]))


//descriptors

Object.defineProperty(obj, "username", {
  enumerable: false
  // writable: false
})

for (const objKey in obj) {
  console.log(objKey)
}

obj.username = "KKK"
console.log(obj)

// {
//   value: 42,
//   done: false / true
// }


class Users {
  constructor(users) {
    this.users = users
  }

  // [Symbol.iterator]() {
  //   let i = 0
  //   let users = this.users
  //
  //   return {
  //     next() {
  //       if (i < users.length) {
  //         return {
  //           value: users[i++],
  //           done: false
  //         }
  //       }
  //
  //       return {
  //         done: true
  //       }
  //     }
  //   }
  // }


  [Symbol.iterator]() {
    const users = this.users
    let i = -1

    return {
      next() {
        return {
          value: users[++i],
          done: !(i in users)
        }
      }
    }
  }
}

const users = new Users(["John", "Sam"])

console.log([...users])


function* testSomething() {
  yield 1
  yield 2
  yield 3
}

const customIterator = testSomething()
console.log(customIterator.next())
console.log(customIterator.next())
console.log(customIterator.next())


function* addNumbers(a, b) {
  const sum = a + b

  const c = yield sum

  const d = yield c + sum

  const e = yield d + c + sum
}

const addIterator = addNumbers(5, 10)
console.log()
console.log(addIterator.next())
console.log(addIterator.next(100))
console.log(addIterator.next(200))


// const divs = document.querySelectorAll("div")
//
// console.log(divs)
// console.log(Array.from(divs))

const arr = Array.from({length: 10}, (el, i) => i + 1)
console.log(arr)


function* getRange(from, to) {
  const min = Math.min(from, to)
  const max = Math.max(from, to)
  for (let i = min; i <= max; i++) {
    yield i
  }
}

const array1 = [...getRange(1, 10)]
console.log(array1)
