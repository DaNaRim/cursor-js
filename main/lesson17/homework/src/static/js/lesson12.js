"use strict"

import "../css/lesson12.css"

const VALID_KEYCODES = {
  w: 65,
  s: 83,
  d: 68,
  f: 70,
  g: 71,
  h: 72,
  j: 74,
  k: 75,
  l: 76
}

let isDemotivatorWorking = false
let tbcTimeoutId

window.onload = function () {
  const alert = document.querySelector(".alert")
  alert.style.display = "none"
}

window.addEventListener("keydown", processButtonPress)

document.querySelectorAll(".key").forEach(key => {
  key.addEventListener("click", processButtonPress)
})
document.querySelectorAll("audio").forEach(audio => {
  audio.addEventListener("ended", removeTransition)
  audio.addEventListener("pause", removeTransition)
})

function processButtonPress(e) {
  const keyCode = e.keyCode ? e.keyCode : +this.getAttribute("data-key")

  if (!Object.values(VALID_KEYCODES).includes(keyCode)) return

  if (keyCode === 83) addDemotivator()
  if (keyCode === 74) addToBeContinued()

  playAudio(keyCode)
  showImage(keyCode)

  const key = document.querySelector(`.key[data-key="${keyCode}"]`)
  key.classList.add("playing")
}

function playAudio(keyCode) {
  const audios = document.querySelectorAll("audio")
  audios.forEach(a => {
    if (+a.getAttribute("data-key") === keyCode) {
      a.currentTime = 0
      a.play()
    } else {
      a.pause()
      a.currentTime = 0
    }
  })
}

function showImage(keyCode) {
  setTimeout(() => {
    const images = document.querySelectorAll(".memImage")
    images.forEach(image => {
      if (+image.getAttribute("data-key") === keyCode) {
        image.classList.add("appear")
        setTimeout(() => image.classList.add("visible"), 10) //to solve conflict with appear and visible
      } else {
        image.classList.remove("visible")
        setTimeout(() => image.classList.add("appear"), 10) //to solve conflict with appear and visible
      }
    })
  }, 10) //to solve conflict with demotivator
}

function addDemotivator() {
  if (isDemotivatorWorking) return //to solve conflict with multiple demotivators
  isDemotivatorWorking = true

  const newHtml = `
  <div class="wrapper">
      <div class="border_wrapper">
          ${(getInnerHtml("main"))}
      </div>
  </div>
  <div class="text_after_wrapper">What?</div>
  `
  const main = document.querySelector("main")
  main.innerHTML = newHtml

  //to solve conflict with to be continued
  setTimeout(() => document.body.style.backgroundColor = "black", 10)

  const keys = document.querySelectorAll(".key")
  keys.forEach(key => {
    key.classList.add("small_key")
    key.addEventListener("click", processButtonPress)
  })
}

function removeDemotivator() {
  const newHtml = getInnerHtml(".border_wrapper")

  if (!newHtml) return

  const main = document.querySelector("main")
  main.innerHTML = newHtml

  document.body.style.removeProperty("background-color")

  const keys = document.querySelectorAll(".key")
  keys.forEach(key => {
    key.classList.remove("small_key")
    key.addEventListener("click", processButtonPress)
  })

  isDemotivatorWorking = false
}

function addToBeContinued() {
  removeToBeContinued()

  tbcTimeoutId = setTimeout(() => {
    const arrow = document.querySelector("#tbc_arrow")
    arrow.classList.add("arrow_appear")

    document.body.style.backgroundColor = "#a28f57"
    tbcTimeoutId = undefined
  }, 4_650)
}

function removeToBeContinued() {
  if (tbcTimeoutId) clearTimeout(tbcTimeoutId)
  tbcTimeoutId = undefined

  const arrow = document.querySelector("#tbc_arrow")
  arrow.classList.remove("arrow_appear")
  document.body.style.removeProperty("background-color")
}

function removeTransition() {
  const keyCode = +this.getAttribute("data-key")

  const key = document.querySelector(`.key[data-key="${keyCode}"]`)
  key.classList.remove("playing")

  if (keyCode === 83) {
    removeDemotivator()
    return
  } else if (keyCode === 74) {
    removeToBeContinued()
    return
  }
  const image = document.querySelector(`img[data-key="${keyCode}"]`)
  image.classList.remove("visible")
}

function getInnerHtml(selector) {
  const html = document.querySelector(selector)

  if (!html) return ""

  return Array.prototype.reduce.call(html.childNodes, (html, node) => {
    return html + (node.outerHTML || node.nodeValue)
  }, "")
}
