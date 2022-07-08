"use strict"

export class Student {

  constructor(university, course, fullName) {
    this.university = university
    this.course = course
    this.fullName = fullName
    this._marks = []
    this.isDismissed = false
  }

  get marks() {
    if (this.isDismissed) return null
    return this._marks
  }

  set marks(mark) {
    if (this.isDismissed) return null

    this._marks = this._marks.concat(mark)
    return this._marks
  }

  getInfo() {
    return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`
  }

  getAverageMark() {
    if (this.isDismissed) return null
    return this._marks.reduce((a, b) => a + b, 0) / (this._marks.length | 1)
  }

  dismiss() {
    this.isDismissed = true
  }

  recover() {
    this.isDismissed = false
  }
}

export class BudgetStudent extends Student {

  constructor(university, course, fullName) {
    super(university, course, fullName)
    setInterval(() => this.getScholarship(), 30_000)
  }

  getScholarship() {
    if (this.isDismissed || this.getAverageMark() < 4.0) return
    console.log("Ви отримали 1400 грн. стипендії")
  }
}