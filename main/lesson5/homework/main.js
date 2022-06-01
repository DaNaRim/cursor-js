"use strict"

const STUDENTS = ["Олександр", "Ігор", "Олексій", "Світлана", "Іра", "Олена"]

const THEMES = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"]

const MARKS = [4, 5, 5, 3, 4, 5]

function pairStudents() {
  let pairs = []

  for (let i = 0; i < (STUDENTS.length / 2); i++) {
    pairs.push([STUDENTS[i], STUDENTS[STUDENTS.length - i - 1]])
  }
  return pairs
}

function handOutProjectsToStudents(pairs) {
  let result = []

  for (let i = 0; i < pairs.length; i++) {
    result.push([pairs[i].join(" і "), THEMES[i]])
  }
  return result
}

function giveGradesToStudents() {
  let result = []

  for (let i = 0; i < STUDENTS.length; i++) {
    result.push([STUDENTS[i], MARKS[i]])
  }
  return result
}

function giveRandomGradesToPairs(studentsPairs) {
  let arr = JSON.parse(JSON.stringify(studentsPairs))

  for (let i = 0; i < arr.length; i++) {
    arr[i].push(Math.floor(Math.random() * 5 + 1))
  }
  return arr
}

const pairs = pairStudents()
const pairsWithThemes = handOutProjectsToStudents(pairs)

console.log(pairs)
console.log(pairsWithThemes)
console.log(giveGradesToStudents())
console.log(giveRandomGradesToPairs(pairsWithThemes))
