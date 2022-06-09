"use strict"

const UKRAINE = {tax: 0.195, middleSalary: 1789, vacancies: 11476}
const LATVIA = {tax: 0.25, middleSalary: 1586, vacancies: 3921}
const LITVA = {tax: 0.15, middleSalary: 1509, vacancies: 1114}

function getMyTaxes(salary) {
  return Number((this.tax * salary).toFixed(2))
}

function getMiddleTaxes() {
  return Number((this.tax * this.middleSalary).toFixed(2))
}

function getTotalTaxes() {
  return Number((this.tax * this.middleSalary * this.vacancies).toFixed(2))
}

function getMySalary() {
  const salaryLogger = () => {
    const salary = Math.floor(Math.random() * 500 + 1500)
    const taxes = getMyTaxes.call(this, salary)
    console.log({
      salary: salary,
      taxes: taxes,
      profit: (salary * 100 - taxes * 100) / 100
    })
  }
  setInterval(() => salaryLogger(), 10_000)
}

console.log(getMyTaxes.call(UKRAINE, 100))
console.log(getMiddleTaxes.call(UKRAINE))
console.log(getTotalTaxes.call(UKRAINE))
getMySalary.call(UKRAINE)
