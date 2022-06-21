"use strict"

async function getRandomChinese(length) {
  let result = ""

  for (let i = 0; i < length; i++) {
    const signNumber = Number(Date.now().toString().slice(-5))
    result += String.fromCharCode(signNumber)

    await new Promise(res => setTimeout(res, 50))
  }
  return result
}

getRandomChinese(4).then(res => console.log(res))
