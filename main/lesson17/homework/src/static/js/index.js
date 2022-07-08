"use strict"

import "../css/index.css"

import {getMaxDigit} from "./functions/homework04"
import {pairStudents} from "./functions/homework05"
import {getRandomArray} from "./functions/homework07"
import {STUDENTS, getSubjects} from "./functions/homework08"
import {UKRAINE, getMyTaxes} from "./functions/homework09"
import {Student} from "./functions/homework10"
import {createIdGenerator} from "./functions/homework15"


const ostap = new Student("Super univercity", 1, "Ostap ostapovich")
const idGenerator = createIdGenerator()

console.log("homework04 > getMaxDigit: " + getMaxDigit(9.385))
console.log("homework05 > pairStudents: " + pairStudents())
console.log("homework07 > getRandomArray: " + getRandomArray(5, 1, 100))
console.log("homework08 > getSubjects: " + getSubjects(STUDENTS[0]))
console.log("homework09 > getMyTaxes: " + getMyTaxes.call(UKRAINE, 100))
console.log("homework10 > Student.getInfo: " + ostap.getInfo())

console.log("homework15 > idGenerator.next() 1: " + idGenerator.next().value)
console.log("homework15 > idGenerator.next() 2: " + idGenerator.next().value)
console.log("homework15 > idGenerator.next() 3: " + idGenerator.next().value)
