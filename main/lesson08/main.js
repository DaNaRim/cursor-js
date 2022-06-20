"use strict"

// const obj = new Object()
const obj2 = {}

const user = {
  name: "Andrii",
  surname: "Dovbenko",
  age: 31
}
console.log(user.name)
user.surname = "DAR"
delete user.age
console.log(user)


const users = [
  "Andrii",
  "Vasya",
  "Mykola"
]

const users2 = {
  0: "Andrii",
  1: "Vasya",
  2: "Mykola",
  3: "2132",
  4: "dd",
  5: "3456",
  6: "3456",
  7: "3456",
  8: "3456",
  9: "3456",
  10: "3456"
}
console.log(users2)


delete users[1]
console.log(users)


const heroes = {
  // "Iron-man": "Tony Stark",
  "Iron man": "Tony Stark",
  deadpool: "Wade Wilson",
  daredevil: "Matt Murdock",
  hawkeye: "CLint Barton",
  hulk: "Bruce Banner"
  // hulk: {
  //   name: "Bruce Banner",
  //   power: "Can grow"
  // }
}

// console.log(heroes["Iron man"])

const selectedHero = "hulk"
console.log(heroes[selectedHero])
// console.log(heroes.selectedHero)
// console.log(heroes["selectedHero"])

console.log(`${selectedHero} is ${heroes[selectedHero]}`)
console.log("deadpool" in heroes)

if (heroes.deadpool) {
  console.log(heroes.deadpool)
}


// for (let hero of heroes) {
//   console.log(heroes)
// }

for (const heroesKey in heroes) {
  console.log(`${heroesKey} is ${heroes[heroesKey]}`)
}


console.log(Object.keys(heroes))
console.log(Object.values(heroes))
console.log(Object.entries(heroes))


let user2 = {
  name: "Andrii",
  sayHi: function () {
    // console.log(`Hello, my name is ${user.name}`)
    console.log(`Hello, my name is ${this.name}`)
  }
}
user2.sayHi()

const admin = user2
user2 = 1
// user = null
admin.sayHi()


// const user = ["Andrii", "Dovbenko"]
// const name = user[0]
// const surname = user[1]

// skills equals rest
const [name, surname, ...skills] = ["Andrii", "Dovbenko", "JS", "React", "Redux"]
console.log(name)
console.log(surname)
console.log(skills)


const options = {
  width: "200px",
  height: "100px",
  title: "Menu",
  deep: "20px"
}

// const title = options.title
// const width = options.width

const {width: w, title: t, height, deep = "0px", ...rest} = options
console.log(w)
console.log(deep)
console.log(rest)


// const calc = function (options) {
//   return options.width * options.height * options.deep
// }

const calc = function ({width = 0, height = 0, deep = 0}) {
  return width * height * deep
}

console.log(calc(options))
