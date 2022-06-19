"use strict"

window.addEventListener("keydown", playSound)

document.querySelectorAll(".key").forEach(key => {
  key.addEventListener("click", playSound)
})
document.querySelectorAll("audio").forEach(audio => {
  audio.addEventListener("ended", removeTransition)
  audio.addEventListener("pause", removeTransition)
})

function playSound(e) {
  const keyCode = e.keyCode ? e.keyCode : this.getAttribute("data-key")

  const key = document.querySelector(`.key[data-key="${keyCode}"]`)
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`)

  const audios = document.querySelectorAll("audio")
  audios.forEach(a => {
    if (+a.getAttribute("data-key") !== keyCode) {
      a.pause();
      a.currentTime = 0;
    }
  })

  if (!audio) return

  audio.currentTime = 0
  audio.play()
  key.classList.add("playing")
}

function removeTransition() {
  const keyCode = this.getAttribute("data-key")
  const key = document.querySelector(`.key[data-key="${keyCode}"]`)
  key.classList.remove("playing")
}
