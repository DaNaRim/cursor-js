"use strict"

function generateBlocks() {
  if (document.getElementById("figure") != null) return

  const figure = document.createElement("div")
  figure.setAttribute("id", "figure")

  for (let i = 0; i < 25; i++) {
    const square = document.createElement("div")
    square.setAttribute("class", "square")
    square.style.backgroundColor = `rgb(${[1, 2, 3].map(() => Math.random() * 256)})`
    figure.appendChild(square)
  }
  document.body.appendChild(figure)
}

function generateBlocksInterval() {
  generateBlocks()
  setInterval(() => {
    for (const node of document.getElementById("figure").childNodes) {
      node.style.backgroundColor = `rgb(${[1, 2, 3].map(() => Math.random() * 256)})`
    }
  }, 1000)
}

// generateBlocks()
generateBlocksInterval()
