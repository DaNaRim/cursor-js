"use strict"

const STUDENTS = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}]

function getSubjects(student) {
  return Object.keys(student["subjects"]).map((subject) =>
    (subject[0].toUpperCase() + subject.slice(1)).replace("_", " ")
  )
}

function getAverageMark(student) {
  const scores = [].concat(...Object.values(student["subjects"]))
  const average = scores.reduce((a, b) => a + b, 0) / scores.length
  return Number(average.toFixed(2))
}

function getStudentInfo(student) {
  return {
    course: student.course,
    name: student.name,
    averageMark: getAverageMark(student)
  }
}

function getStudentsNames() {
  return STUDENTS.map((student) => student.name).sort()
}

function getBestStudent() {
  const scores = {}
  STUDENTS.forEach((student) => scores[student.name] = getAverageMark(student))

  return Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b)
}

function calculateWordLetters(word) {
  const frequency = {}
  word.toLowerCase().split("").forEach((letter) => frequency[letter] = (frequency[letter] || 0) + 1)
  return frequency
}


console.log(getSubjects(STUDENTS[0]))
console.log(getAverageMark(STUDENTS[0]))
console.log(getStudentInfo(STUDENTS[0]))

console.log(getStudentsNames())
console.log(getBestStudent())
console.log(calculateWordLetters("тест"))
