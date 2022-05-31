"use strict"

const STUDENTS = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"]

const THEMES = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"]

const MARKS = [4, 5, 5, 3, 4, 5]

function pairStudents() {
  return [
    [STUDENTS[0], STUDENTS[2]],
    [STUDENTS[1], STUDENTS[3]],
    [STUDENTS[4], STUDENTS[5]]
  ]
}

function handOutProjectsToStudents(pairs) {
  let arr = JSON.parse(JSON.stringify(pairs))

  for (let i = 0; i < arr.length; i++) {
    arr[i].push(THEMES[i])
  }
  return arr
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
