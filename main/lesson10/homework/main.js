"use strict"

class Student {

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

class BudgetStudent extends Student {

  constructor(university, course, fullName) {
    super(university, course, fullName)
    setInterval(() => this.getScholarship(), 30_000)
  }

  getScholarship() {
    if (this.isDismissed || this.getAverageMark() < 4.0) return
    console.log("Ви отримали 1400 грн. стипендії")
  }
}


const ostap = new Student("Вища Школа Психотерапії м.Одеса", 1, "Остап Родоманський Бендер")

console.log(ostap.getInfo())

ostap.marks = [5, 4, 4, 5, 5]
console.log(ostap.marks)

console.log(ostap.getAverageMark())

ostap.marks = 5
console.log(ostap.marks)

ostap.dismiss()
console.log(ostap.marks)
ostap.recover()
console.log(ostap.marks)


const rob = new BudgetStudent("Hogwarts", 3, "Rob Banks")
rob.marks = [5, 5, 5]
console.log(rob.getInfo())
