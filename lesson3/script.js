console.log(!!0)

// false == 0, undefined, null, "", NaN

let age = 22

if (age) {
  console.log("You are no grown enough")
} else {
  console.log("Cool")
}

function getSqrt(number) {
  if (number < 0) {
    return "This number cant be sqrt!"
  } else {
    return Math.sqrt(number)
  }
}

console.log(getSqrt(0))

function exceptNumber(number) {
  let result
  if (number === 100) {
    result = "Number is 100"
  } else if (number > 100) {
    result = "Number is fine"
  } else if (number < 200) {
    result = "Number is less than 200"
  } else {
    result = "Number is not allowed"
  }
  return result
}

console.log(exceptNumber(50))

function sayHello() {
  console.log("Hello")
}

sayHello()

let name = "ihor"
switch (name) {
  case "ihor":
    console.log("Hello ihor")
    break
  default:
    console.log("No name")
}

let number = 2
switch (number) {
  case 1:
  case 2:
  case 3:
    console.log("1 or 2 or 3")
    break
  default:
    console.log("Wrong number")
}

function getDay(number) {
  switch (number) {
    case 1:
      return "monday"
    case 2:
      return "Tuesday"
    case 3:
      return "Wednesday"
    default:
      return "Wrong number"
  }
}

console.log(getDay(2))

let a = 10
let b = 20

let result = b > a ? "b bigger" : "a bigger"
console.log(result)

function getUserWord(usersAmount) {
  return usersAmount > 1 ? "users" : "user"
}

console.log("Hello " + getUserWord(10))

function sumEven(number) {
  let result = 0
  for (let n = 1; n <= number; n += 2) {
    result += n
  }
  return result
}

console.log(sumEven(4))


function countLetter(string, letter) {
  let counter = 0

  for (let i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() === letter.toLowerCase()) {
      counter++
    }
  }
  return counter
}

console.log(countLetter("Hello my friend", "f"))

let aa = 10
{
  let aa = 20
  console.log(aa)
}
console.log(aa)

var aaa = 10
{
  var aaa = 20
  console.log(aaa)
}
console.log(aaa)

for (var i = 0; i < 5; i++) {
  console.log(i)
}
for (; i < 5; i++) {
  console.log(i)
}

let users = ["Ihor", "Olesya", "Ira", "Nazar"]

for (let i = 0; i < users.length; i++) {
  console.log(users[i])
}

users.forEach(function (name, i) {
  console.log(name + ": " + i)
})

let res = users.map(function (name) {
  return name.length
})
console.log(res)

let res2 = users.filter(function (name) {
  return name.length < 5 || name === "Nazar"
})
console.log(res2)

let users2 = [
  {name: "Ihor", id: 1, age: 5},
  {name: "Olesya", id: 2, age: 43},
  {name: "Ira", id: 3, age: 12},
  {name: "Nazar", id: 4, age: 8},
]

let res3 = users2.filter(function (user) {
  return user.age > 10
})
console.log(res3)

let res4 = users2.find(function (user) {
  if (user.id === 3) {
    delete user.age // bad
    return true
  } else return false
})
console.log(res4)
console.log(users2)

let res5 = users2.find(function (user) {
  return user.id === 2
})

let newUser = {...res5} //clone
delete newUser.age
console.log(newUser)

function findOutlier() {
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] % 2) {
      return arguments[i]
    }
  }
  return "Not found"
}

console.log(findOutlier(2, 6, 8, 10, 3, 12))
