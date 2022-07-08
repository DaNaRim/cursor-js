"use strict"

export function getMaxDigit(number) {
  return Math.max(...("" + number)
    .replaceAll(".", "")
    .split("")
  )
}

export function customPow(a, b) {
  if (b === 0) return 1

  let res = a
  for (let i = 0; i < Math.abs(b) - 1; i++) {
    res *= a
  }
  return b > 0 ? res : 1 / res
}

export function toPascalCase(str) {
  return str[0].toUpperCase() + str.substring(1).toLowerCase()
}

export function getMoneyAfterTax(money) {
  return money * 0.805 // 1 - 19.5 / 100
}

export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

export function countLetter(letter, word) {
  return word.toLowerCase().split(letter.toLowerCase()).length - 1
}

export function convertCurrency(money) {
  const rate = 25

  if (money.substring(money.length - 1) === "$") {
    return Number(money.substring(0, money.length - 1)) * rate

  } else if (money.substring(money.length - 3).toLowerCase() === "uah") {
    return Number(money.substring(0, money.length - 3)) / rate
  } else {
    return "Unknown currency"
  }
}

export function createPassword(length = 8) {
  return Math.floor(Math.random() * Math.pow(10, length))
}

export function deleteLetters(letter, word) {
  return word.replaceAll(letter, "")
}

export function isPalindrome(word) {
  const newWord = word.replaceAll(" ", "").toLowerCase()

  return newWord === newWord.split("").reverse().join("")
}

export function deleteDuplicateLetter(str) {
  let result = str
  const array = [...str]

  for (let i = 0; i < array.length; i++) {
    if (countLetter(array[i], str) <= 1) continue
    result = deleteLetters(array[i], result)
  }
  return result
}
