"use strict"

import "../css/lesson15.css"

const text = document.querySelector(".text")

const fontGenerator = newFontGenerator(14, 2, 64, 2)

document.querySelectorAll(".btn_text_changer").forEach(btn => {
  btn.addEventListener("click", updateFontSize)
})

console.log("Working")

function updateFontSize() {
  text.style.fontSize = `${fontGenerator.next(this.getAttribute("data-action")).value}px`
}

function* createIdGenerator() {
  for (let i = 1; i < Infinity; i++) yield i
}

function* newFontGenerator(init, min, max, step) {
  let currentSize = init
  text.style.fontSize = `${init}px`

  while (true) {
    const action = yield currentSize
    if (action === "down" && currentSize === min) continue
    if (action === "up" && currentSize === max) continue

    if (action === "up") currentSize += step
    if (action === "down") currentSize -= step
  }
}


const idGenerator = createIdGenerator()
console.log(idGenerator.next().value)
console.log(idGenerator.next().value)
console.log(idGenerator.next().value)

console.log()
console.log(fontGenerator.next("up").value)
console.log(fontGenerator.next("up").value)
console.log(fontGenerator.next("up").value)
console.log(fontGenerator.next().value)

console.log(fontGenerator.next("down").value)
console.log(fontGenerator.next("down").value)
console.log(fontGenerator.next("down").value)
console.log(fontGenerator.next().value)
