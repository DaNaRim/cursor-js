"use strict"

const PRODUCT_1 = 15.678
const PRODUCT_2 = 123.965
const PRODUCT_3 = 90.2345

//1
const MAX = Math.max(PRODUCT_1, PRODUCT_2, PRODUCT_3)
console.log("Maximum number: " + MAX)

//2
const MIN = Math.min(PRODUCT_1, PRODUCT_2, PRODUCT_3)
console.log("Minimum number: " + MIN)

//3
const SUM = PRODUCT_1 + PRODUCT_2 + PRODUCT_3
console.log("Amount of goods: " + SUM)

//4
const SUM_WITHOUT_PENNIES =
  Math.floor(PRODUCT_1)
  + Math.floor(PRODUCT_2)
  + Math.floor(PRODUCT_3)
console.log("Amount of goods without pennies: " + SUM_WITHOUT_PENNIES)

//5
const SUM_ROUNDING_TO_HUNDREDS = Math.round(SUM / 100) * 100
console.log("Amount of goods rounded to hundreds: " + SUM_ROUNDING_TO_HUNDREDS)

//6
const IS_SUM_EVEN = SUM_WITHOUT_PENNIES % 2 === 0
console.log("Is sum even: " + IS_SUM_EVEN)

//7
console.log("Change from 500: " + (500 - SUM))

//8
const AVERAGE = +(SUM / 3).toFixed(2)
console.log("Average value of prices: " + AVERAGE)

//9
const RANDOM_DISCOUNT = Math.round(Math.random() * 100)
console.log("Random discount: " + RANDOM_DISCOUNT)

//10
const SUM_WITH_DISCOUNT = +(SUM - SUM * RANDOM_DISCOUNT / 100).toFixed(2)
console.log("Amount due: " + SUM_WITH_DISCOUNT)

//11
const NET_INCOME = +(SUM / 2 - SUM * RANDOM_DISCOUNT / 100).toFixed(2)
console.log("Net income: " + NET_INCOME)
