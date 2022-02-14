function countOverpayment(amount, years, percents) {
  let months = years * 12
  let balance = amount
  let interest
  let overpayment = 0
  for (let i = 0; i < months; i++) {
    interest = Math.round(balance / months * (percents * 0.01 + 1) * 100) / 100
    balance -= interest
    overpayment += interest
    console.log(interest)
  }
  return overpayment
}

console.log(countOverpayment(100, 3, 50))
