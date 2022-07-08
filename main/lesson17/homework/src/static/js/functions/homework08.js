"use strict"

export const STUDENTS = [{
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

export function getSubjects(student) {
  return Object.keys(student["subjects"]).map(subject =>
    (subject[0].toUpperCase() + subject.slice(1)).replace("_", " ")
  )
}

export function getAverageMark(student) {
  const scores = Object.values(student.subjects).flat()
  const average = scores.reduce((a, b) => a + b, 0) / scores.length
  return Number(average.toFixed(2))
}

export function getStudentInfo(student) {
  return {
    course: student.course,
    name: student.name,
    averageMark: getAverageMark(student)
  }
}

export function getStudentsNames() {
  return STUDENTS.map(student => student.name).sort()
}

export function getBestStudent() {
  const scores = {}
  STUDENTS.forEach(student => scores[student.name] = getAverageMark(student))

  return Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b)
}

export function calculateWordLetters(word) {
  const frequency = {}
  word.toLowerCase()
      .split("")
      .forEach(letter => frequency[letter] = (frequency[letter] || 0) + 1)
  return frequency
}
