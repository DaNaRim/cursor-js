"use strict"

//Functional programming
function newFunc(a = 2, b = 2) {
  console.log(a + b)
}

newFunc()
newFunc(5, 5)

//OOP
const newObj = {
  a: 2,
  b: 2,
  objFunc: function (a = this.a, b = this.b) {
    console.log(a + b)
  }
}

newObj.objFunc()
newObj.objFunc(5, 5)

const ivan = {
  name: "Ivan",
  finished: 7,
  inProgress: function (homework) {
    this.finished += 1
    return `${this.name} do homework "${homework}"`
  }
}

const tatyana = {
  name: "Tatyana",
  finished: 7,
  inProgress: function (homework) {
    this.finished += 1
    return `${this.name} do homework "${homework}"`
  }
}

console.log(`${ivan.finished} homeworks done`)
console.log(ivan.inProgress("this"))
console.log(`Total ${ivan.finished} homeworks done`)

console.log(`${tatyana.finished} homeworks done`)
console.log(tatyana.inProgress("this"))
console.log(`Total ${tatyana.finished} homeworks done`)


const Student = function (name, finished) {
  this.name = name
  this.finished = finished
  this.inProgress = function (homework) {
    this.finished += 1
    return `${this.name} do homework "${homework}"`
  }
}

const ivan2 = new Student("Ivan", 7)
const tatyana2 = new Student("Tatyana", 7)

console.log()
console.log(`${ivan2.finished} homeworks done`)
console.log(ivan2.inProgress("this"))
console.log(`Total ${ivan2.finished} homeworks done`)

console.log(`${tatyana2.finished} homeworks done`)
console.log(tatyana2.inProgress("this"))
console.log(`Total ${tatyana2.finished} homeworks done`)


console.log(ivan2.inProgress === tatyana2.inProgress)

const Student2 = function (name, finished) {
  this.name = name
  this.finished = finished
}

Student2.prototype.inProgress = function (homework) {
  this.finished += 1
  return `${this.name} do homework "${homework}"`
}

const ivan3 = new Student2("Ivan", 7)
const tatyana3 = new Student2("Tatyana", 7)
console.log(ivan3.inProgress === tatyana3.inProgress)


class Student4 {
  static allHomeworks = 10

  constructor(name, finished) {
    this.finished = finished
    this.name = name
  }

  get getName() {
    return this.name
  }

  set setName(name) {
    return this.name = name
  }

  static sum(finished) {
    return this.allHomeworks - finished
  }

  inProgress() {
    return 1
  }
}

const ivan4 = new Student4("Ivan", 7)
const tatyana4 = new Student4("Tatyana", 7)

console.log(`${ivan4.finished} homeworks done`)
console.log(`${tatyana4.finished} homeworks done`)

console.log(ivan4.inProgress === tatyana4.inProgress)

console.log(ivan4.getName)
ivan4.setName = tatyana4.getName
console.log(ivan4.getName)

console.log(Student4.sum(ivan4.finished))
console.log(tatyana4.inProgress())


class Ship {
  constructor(name, country, health) {
    this.name = name
    this.contry = country
    this.health = health
  }
}

class BattleShip extends Ship {
  constructor(name, country, health, armor) {
    super(name, country, health)
    this.armor = armor
  }
}

class BattleShipTorpedoes extends BattleShip {
  constructor(name, country, health, armor, torpedoes) {
    super(name, country, health, armor)
    this.torpedoes = torpedoes
  }
}

class Destroyer extends Ship {
  constructor(name, country, health, torpedoes) {
    super(name, country, health)
    this.torpedoes = torpedoes
  }
}

const bismark = new BattleShipTorpedoes("Bismark", "German", 80_000, 20_000, 6)
const monaghan = new Destroyer("Monaghan", "USA", 8900, 400)

console.log(bismark)


function Student3(name) {
  this.name = name
}

const st = new Student3("Ivan")
console.log(st)

if (!Array.prototype.find) {
  Array.prototype.find = function () {
    console.log("we have find")
  }
}


const userInput = "Rachel Green, Monica Geller, Phoebe Buffay"

class User {
  constructor(name) {
    this.name = name
  }
}

const users = userInput.split(", ").map(name => new User(name))
console.log(users)

class Users {
  constructor() {
    this.users = []
  }

  addUser(newUser) {
    if (this._includes(newUser)) return
    this.users.push(newUser)
  }

  _includes(newUser) {
    if (this.users.some((user) => user.name === newUser.name)) {
      console.log("Already exists")
      return true
    }
    return false
  }
}

const users2 = new Users()

userInput.split(", ").forEach(name => {
  users2.addUser(new User(name))
})

console.log(users2)

users2.addUser(new User("Phoebe Buffay"))
