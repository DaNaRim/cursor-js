"use strict"

function getMaxDigit(number) {
  const numStr = ("" + number).split('.').join("")

  return Math.max.apply(null, numStr.split(""))

  // variant 2
  // const array = Array.from(String(number), Number)
  //
  // let max = array[0]
  // for (let i = 1; i < array.length; i++) {
  //   if (array[i] > max) max = array[i]
  // }
  // return max
}

function customPow(a, b) {
  if (b === 0) return 1

  let res = a
  for (let i = 0; i < Math.abs(b) - 1; i++) {
    res *= a
  }
  return b > 0 ? res : 1 / res
}

function toPascalCase(str) {
  return str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase()
}

function getMoneyAfterTax(money) {
  return money * 0.805 // 1 - 19.5 / 100
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

function countLetter(letter, word) {
  return word.toLowerCase().split(letter.toLowerCase()).length - 1

  // variant2
  // return (word.toLowerCase().match(new RegExp(letter.toLowerCase(), "g")) || []).length

  // variant3
  // let count = 0
  // let wordArr = [...word]
  // for (let i = 0; i < wordArr.length; i++) {
  //   if (letter.toLowerCase() === wordArr[i].toLowerCase()) count++
  // }
  // return count
}

function convertCurrency(money) {
  const RATE = 25

  if (money.substring(money.length - 1).toLowerCase() === "$") {
    return Number(money.substring(0, money.length - 1)) * RATE

  } else if (money.substring(money.length - 3).toLowerCase() === "uah") {
    return Number(money.substring(0, money.length - 3)) / RATE
  } else {
    return "Unknown currency"
  }
}

function createPassword(length = 8) {
  return Math.floor(Math.random() * Math.pow(10, length))
}

function deleteLetters(letter, word) {
  return word.replaceAll(letter, "")
}

function isPalindrome(word) {
  const newWord = word.replaceAll(" ", "").toLowerCase()

  return newWord === newWord.split("").reverse().join("")
}

function deleteDuplicateLetter(str) {
  let result = str
  const array = [...str]

  for (let i = 0; i < array.length; i++) {
    if (countLetter(array[i], str) <= 1) continue
    result = deleteLetters(array[i], result)
  }
  return result
}

console.log(`Function №1:  ${getMaxDigit(9.385)}`)
console.log(`Function №2:  ${customPow(3, 8)}`)
console.log(`Function №3:  ${toPascalCase("vLAd")}`)
console.log(`Function №4:  ${getMoneyAfterTax(1000)}`)
console.log(`Function №5:  ${getRandomNumber(1, 10)}`)
console.log(`Function №6:  ${countLetter("a", "aasdffajaa")}`)

console.log(`Function №7:  ${convertCurrency("100$")}`)
console.log(`Function №7:  ${convertCurrency("2500UaH")}`)

console.log(`Function №9:  ${createPassword(10)}`)
console.log(`Function №11: ${deleteLetters("a", "blablabla")}`)

console.log(`Function №12: ${isPalindrome("ababa")}`)
console.log(`Function №12: ${isPalindrome("ababab")}`)
console.log(`Function №12: ${isPalindrome("Я несу гусеня")}`)

console.log(`Function №13: ${deleteDuplicateLetter("Бісквіт був дуже ніжним")}`)
