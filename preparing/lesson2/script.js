if (4 > 5) {
  console.log()
}

let isBigger = 10 > 5

console.log(10 > 5 > 4)

console.log(3 == 3)
console.log(3 === "3")
console.log(3 == "3")

console.log("abc" == "abc")
console.log("abc" > "abc")
console.log("abc" <= "abc")
console.log("a".charCodeAt(0))

let notDef
console.log(notDef)
notDef = "FFFF"
console.log(notDef)
notDef = null
console.log(notDef)

console.log(null == undefined)
console.log(null === undefined)

let dictionary = {
  mom: 1223456,
  dad: 1231234,
  sister: 1231313
}

dictionary["some user"] = 9999

console.log(dictionary)
console.log(dictionary["some user"])

dictionary["some user" + 1] = 9998
console.log(dictionary)

let newObj = {
  ["many words key"]: 23123132,
  "asdad asd a": 23123
}
console.log(newObj)

delete dictionary.dad
console.log(dictionary)

delete dictionary["mom"]
console.log(dictionary)

let newObj2 = {
  obj: {
    field: 44
  },
  anotherField: 45
}
console.log(newObj2.obj.field)

let user = {
  name: "valeral",
  email: "1231234@gmail.com",
  parents: {
    mother: {
      name: "Ira"
    }

  }
}

let shoppingList = ["milk", "eggs"]
console.log(shoppingList)
console.log(shoppingList[1])
console.log(shoppingList.length)

shoppingList = ["milk", "eggs", "bread"]
console.log(shoppingList.length)
console.log(shoppingList[shoppingList.length - 1])

let arr = Array(5)
arr[0] = 'arr'

let arr2 = Array("a", "b")

arr2[0] = ["some data"]

console.log(arr2[0][0])

let arrFromString = "abc".split("")
console.log(arrFromString)

// let userInput = prompt("what is your name and age (enter values separated with comma)")
// let data = userInput.split(", ")
//
// console.log(data)

console.log(["a", "b", "c"].join(", "))
console.log("a, b, c".split(", "))

arr = [1, 2, 3]
arr[5] = 5
console.log(arr)

arr.pop()
console.log(arr)

arr.push(4)
console.log(arr)

arr.shift()
console.log(arr)

arr.unshift(1)
console.log(arr)

arr.splice(1, 3)
console.log(arr)
arr.splice(1, 0, "a", "b", "c")
console.log(arr)

arr.splice(5)
console.log(arr)

delete arr[1] //bad
console.log(arr)

console.log({} === {})

let obj = {} // -> memory -> object -> asdboaisdhoiawhd

/*
{} === {}
asdboaisdhoiawhd === asdlhaosidhoiauhd
 */

let a = "a"
let b = a
b = "b"

console.log(a)
console.log(b)

let ihor = {name: "ihor"}
let vasyl = ihor
vasyl.name = "vasyl"

console.log(ihor)
console.log(vasyl)

function fixName(name, age) {
  let newName = name.substring(0, 1).toUpperCase() + name.substring(1).toLowerCase()
  return newName + " " + age
}

let username = "iHoR"
let fixedName = fixName(userName, 65)
console.log(fixedName)
