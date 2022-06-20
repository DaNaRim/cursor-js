"use strict"

// let arr = new Array()
// arr.forEach()

// arr.forEach((item, index, array) => {
//do something
// })

const heroes = ["Captain America", "Iron Man", "Spider man", "Black Widow", "Black Panther", "Hulk", "Ant-Man"]

heroes.forEach((hero, i, arr) => {
  console.log(`${hero} has position number ${i} in array - ${arr}`)
})

// const res = arr.map((item, index, array) => {
//
// })

const upperCaseHeroes = heroes.map((hero) => {
  return hero.toUpperCase()
})
console.log(upperCaseHeroes)

// const upperCaseHeroes = []
//
// heroes.forEach((hero) => {
//   upperCaseHeroes.push(hero.toUpperCase())
// })

// const upperCaseHeroes = heroes.map((hero) => {
//   if (hero !== "spider-Man") {
//     return hero.toUpperCase()
//   }
// })


// const res = arr.filter((item, index, array) => {
//
// })

const result = heroes.filter((hero) => {
  const heroNameArray = hero.split(" ")
  return heroNameArray.length > 1
})
console.log(result)

const deleteItem = (item) => {
  return heroes.filter((hero) => {
    return hero !== item
  })
}
console.log(deleteItem("Hulk"))

const result2 = heroes.find((hero) => {
  const heroNameArray = hero.split(" ")
  return heroNameArray.length > 1
})

console.log(result2)

const selectedItem = (item) => {
  return heroes.find((hero) => {
    return item === hero
  })
}
console.log(selectedItem("Black Panther"))

const heroes2 = [
  {name: "Black Panther", size: 4},
  {name: "Spider-Man", size: 2},
  {name: "Black Widow", size: 4}
]

const numbersArray = [12, 15, 8, 130, 4]

const res = numbersArray.every((num) => {
  return num > 10
})
console.log(res)

const res2 = numbersArray.some((num) => {
  return num > 10
})

// const result = arr.reduce((preValue, item, index, array) => {
// do something
// }, [init])

let arr = [1, 2, 3, 4, 5]

let res3 = arr.reduce((sum, current) => {
  return sum + current
}, 0)
console.log(res3)

const arr3 = [1, 15, 2, 15]

// arr3.sort()
// console.log(arr3)

arr3.sort((a, b) => {
  // if (a > b) return 1
  // if (a < b) return -1
  // return 0
  return a - b
})
console.log(arr3)

// const heroesTwoWordsName = heroes.filter((hero) => {
//   return hero.split(" ").length > 1
// })
// const heroesTwoWordsNameUpperCase = heroesTwoWordsName.map((hero) => {
//   return hero.toUpperCase()
// })

const heroesFormatted = heroes.filter((hero) => {
  return hero.split(" ").length > 1
}).map((hero) => {
  return hero.toUpperCase()
}).sort()

const heroesFormatted2 = heroes
  .filter((hero) => hero.split(" ").length > 1)
  .map((hero) => hero.toUpperCase())
  .sort()

console.log(heroesFormatted)
