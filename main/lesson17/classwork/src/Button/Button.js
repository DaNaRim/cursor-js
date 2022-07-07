"use strict"

import "./Button.scss"

// export const button = document.createElement("button")
//
// button.classList.add("primary")
// button.textContent = "click me!"

export const createBtn = ({title, onclick, className}) => {
  const btn = document.createElement("button")

  btn.classList.add(className ? className : "primary")
  btn.textContent = title
  btn.onclick = onclick

  return btn
}
