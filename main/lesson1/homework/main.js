"use strict"

const PRODUCT_1 = 15.678
const PRODUCT_2 = 123.965
const PRODUCT_3 = 90.2345

//1
const max = Math.max(PRODUCT_1, PRODUCT_2, PRODUCT_3)
console.log("Maximum number: " + max)

//2
const min = Math.min(PRODUCT_1, PRODUCT_2, PRODUCT_3)
console.log("Minimum number: " + min)

//3
const sum = PRODUCT_1 + PRODUCT_2 + PRODUCT_3
console.log("Amount of goods: " + sum)

//4
const sumWithoutPennies =
  Math.floor(PRODUCT_1)
  + Math.floor(PRODUCT_2)
  + Math.floor(PRODUCT_3)
console.log("Amount of goods without pennies: " + sumWithoutPennies)

//5
const sumRoundingToHundreds = Math.round(sum / 100) * 100
console.log("Amount of goods rounded to hundreds: " + sumRoundingToHundreds)

//6
const isSumEven = sumWithoutPennies % 2 === 0
console.log("Is sum even: " + isSumEven)

//7
console.log("Change from 500: " + (500 - sum))

//8
const average = +(sum / 3).toFixed(2)
console.log("Average value of prices: " + average)

//9
const randomDiscount = Math.round(Math.random() * 100)
console.log("Random discount: " + randomDiscount)

//10
const sumWithDiscount = +(sum - sum * randomDiscount / 100).toFixed(2)
console.log("Amount due: " + sumWithDiscount)

//11
const netIncome = +(sum / 2 - sum * randomDiscount / 100).toFixed(2)
console.log("Net income: " + netIncome)
