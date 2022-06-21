"use strict"

// setTimeout(() => console.log(1), 0)

console.log(2)
console.log(3)

// const timer = setInterval(() => console.log(1), 2000)
// setTimeout(() => clearInterval(timer), 5000)
//
// const timer2 = setTimeout(() => console.log(2), 2000)
// setTimeout(() => clearTimeout(timer2), 2000)


//NFE - named function expression
const callMe = function next() {
  console.log("called")
  // next()
}
callMe()

const timer3 = setTimeout(function next() {
  // console.log("called")
  // setTimeout(next, 1000)
}, 1000)


const currentDate = new Date()
console.log(currentDate)

setTimeout(() => {
  const otherDate = new Date()

  // console.log(otherDate - currentDate)
}, 5000)

const date = new Date(2010, 12, 5)
const date2 = new Date("2010-04-20")
const date3 = new Date("2010 04 20")
const date4 = new Date("2010-04-20T19:39:10.811Z")
console.log()
console.log(date)
console.log(date2)
console.log(date3)
console.log(date4)

console.log()
console.log(date.toISOString())
console.log(date.toString())


const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", " Friday", "Saturday", "Sunday"]

const year = currentDate.getFullYear()
const month = currentDate.getMonth()
const day = currentDate.getDate()
const dayOfWeek = currentDate.getDay()

// const dateEl = document.getElementById("date")
// dateEl.innerText = `Current date is ${year} ${dayNames[dayOfWeek]} ${day} ${month}`


//PromiseState: pending, resolved, rejected
const promise = new Promise((res, rej) => {

  // res() //pending -> resolved
  // rej() //pending -> reject

  setTimeout(() => rej(9), 2000)

  // throw new Error("error")
})

console.log(promise)

promise.then(response => {
  console.log(response)
}).catch(err => {
  console.log(err)
})


const promise2 = new Promise((res, rej) => {
  res({
    status: 200
  })
})

promise2.then(response => {
  if (response.status === 200) {
    console.log(response)
  }
}).catch(err => {
  console.log("err")
}).finally(() => {
  console.log("finally")
})


setTimeout(() => console.log(10), 3000)

const promise3 = new Promise(() => {
  setTimeout(() => console.log(1), 3000)
})

setTimeout(() => console.log(10), 3000)

// Promise.all([promise, promise2])
//        .then(res => {
//          console.log(res)
//        })

Promise.race([promise, promise2]).then(res => {
  console.log(res)
})


async function callMe2() {
  // const request = await fetch("https://jsonplaceholder.typicode.com/comments")
  // const response = await request.json()
  // console.log({response})
}

// callMe2()

async function callMe3() {
  try {
    // const request = await fetch("https://jsonplaceholder.typicode.com/comments")
    // const response = await request.json()
    // console.log({response})
    //
    // if (request.status === 404) {
    //   throw new Error("something went wrong")
    // }
  } catch (e) {
    console.log(e)
  }
}

callMe3()

const users = new Promise((res, rej) => {
  res({some: "value"})
})

users.then(res => res.some += "GG")
     .then(res => console.log(res))
     .catch(e => console.log(e))

// console.log({users})