"use strict"

export function getRandomArray(length, min, max) {
  const arr = []

  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * (max - min) + min))
  }
  return arr
}

export function getModa(...numbers) {
  const nums = numbers.filter(num => Number.isInteger(num))
  const frequency = {}

  nums.forEach(num => frequency[num] = (frequency[num] || 0) + 1)

  const maxFrequency = Math.max(...Object.values(frequency))
  const mode = []

  for (const i in frequency) {
    if (frequency[i] === maxFrequency) mode.push(+i)
  }
  return mode
}

export function getAverage(...numbers) {
  const nums = numbers.filter(num => Number.isInteger(num))
  const sum = nums.reduce((a, b) => a + b, 0)
  return sum / nums.length
}

export function getMedian(...numbers) {
  const nums = numbers.filter(num => Number.isInteger(num))
                      .sort((a, b) => a - b)

  if (nums.length % 2 === 0) {
    return (nums[nums.length / 2 - 1] + nums[nums.length / 2]) / 2
  }
  return nums[Math.floor(nums.length / 2)]
}

export function filterEvenNumbers(...numbers) {
  return numbers.filter(num => num % 2)
}

export function countPositiveNumbers(...numbers) {
  return numbers.filter(num => num > 0).length
}

export function getDividedByFive(...numbers) {
  return numbers.filter(num => num % 5 === 0)
}

export function replaceBadWords(string) {
  const badWords = ["shit", "fuck"]

  let result = string
  badWords.forEach(badWord => result = result.replace(badWord, "*".repeat(badWord.length)))
  return result
}

export function divideByThree(word) {
  return word.match(/.{1,3}/g) || []
}

export function generateCombinations(word) {
  if (word.length > 10) return []

  if (word.length < 2) return [word]

  const letterCombinations = []

  for (let i = 0; i < word.length; i++) {
    const subLetterCombinations = generateCombinations(word.slice(0, i) + word.slice(i + 1, word.length + 1))

    for (const comb of subLetterCombinations) {
      if (letterCombinations.includes(word[i] + comb)) continue
      letterCombinations.push(word[i] + comb)
    }
  }
  return letterCombinations
}
