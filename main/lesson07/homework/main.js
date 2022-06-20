"use strict"

function getRandomArray(length, min, max) {
  const arr = []

  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * (max - min) + min))
  }
  return arr
}

function getModa(...numbers) {
  const nums = numbers.filter((num => Number.isInteger(num)))
  const frequency = {}

  nums.forEach(num => frequency[num] = (frequency[num] || 0) + 1)

  const maxFrequency = Math.max(...Object.values(frequency))
  const mode = []

  for (const i in frequency) {
    if (frequency[i] === maxFrequency) mode.push(+i)
  }
  return mode
}

function getAverage(...numbers) {
  const nums = numbers.filter((num => Number.isInteger(num)))
  const sum = nums.reduce((a, b) => a + b, 0)
  return sum / nums.length
}

function getMedian(...numbers) {
  const nums = numbers.filter((num => Number.isInteger(num)))
                      .sort((a, b) => a - b)

  if (nums.length % 2 === 0) {
    return (nums[nums.length / 2 - 1] + nums[nums.length / 2]) / 2
  }
  return nums[Math.floor(nums.length / 2)]
}

function filterEvenNumbers(...numbers) {
  return numbers.filter(num => num % 2)
}

function countPositiveNumbers(...numbers) {
  return numbers.filter(num => num > 0).length
}

function getDividedByFive(...numbers) {
  return numbers.filter(num => num % 5 === 0)
}

function replaceBadWords(string) {
  const badWords = ["shit", "fuck"]

  let result = string
  badWords.forEach(badWord => result = result.replace(badWord, "*".repeat(badWord.length)))
  return result

  // const words = string.split(" ")

  // for (const badWord of badWords) {
  //   for (const i in words) {
  //     words[i] = words[i].replace(badWord, "*".repeat(badWord.length))
  //   }
  // }
  // return words.join(" ")
}

function divideByThree(word) {
  const workingWord = word.replace(/\s/g, "").toLowerCase()
  const parts = []

  let part = ""
  for (const letterKey in workingWord) {
    part += workingWord[letterKey]

    if (part.length === 3 || +letterKey === workingWord.length - 1) {
      parts.push(part)
      part = ""
    }
  }
  return parts
}

function generateCombinations(word) {
  if (word.length > 10) return []

  if (word.length < 2) return [word]

  let letterCombinations = []

  for (let i = 0; i < word.length; i++) {
    let subLetterCombinations = generateCombinations(word.slice(0, i) + word.slice(i + 1, word.length + 1))

    for (const comb of subLetterCombinations) {
      if (letterCombinations.includes(word[i] + comb)) continue
      letterCombinations.push(word[i] + comb)
    }
  }
  return letterCombinations

  // Variant 2
  //
  // const letters = word.split("")
  // const letterCombinations = []
  //
  // let resultLength = 1
  //
  // for (let i = 2; i <= word.length; i++) {
  //   resultLength *= i
  // }
  //
  // while (letterCombinations.length !== resultLength) {
  //   let comb = letters.sort(() => 0.5 - Math.random()).join("")
  //
  //   if (letterCombinations.includes(comb)) continue
  //   letterCombinations.push(comb)
  // }
  // letterCombinations.sort()
  // return letterCombinations
}

console.log(getRandomArray(5, 1, 100))

console.log(getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2))

console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2))

console.log(getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2))
console.log(getMedian(1, 2, 3, 4))
console.log(getMedian(1, 2, 3, 4, 5))

console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6))

console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6))

console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2))

console.log(replaceBadWords("Are you fucking kidding?"))
console.log(replaceBadWords("Holy shit!"))
console.log(replaceBadWords("It's bullshit!"))

console.log(divideByThree("Commander"))
console.log(divideByThree("live"))

console.log(generateCombinations("man"))
console.log(generateCombinations("ol"))
