"use strict"

import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import {createBtn} from "./Button/Button.js"
import "./styles/style.scss"

import WebpackLogo from "./assets/icon-square-big.png"

const runBtn = createBtn({
  title: "Run something",
  onclick: () => {
    alert("Hello")
  }
})

const innerDiv = document.createElement("img")
innerDiv.setAttribute("src", WebpackLogo)
innerDiv.setAttribute("width", "50px")
innerDiv.setAttribute("height", "50px")

const rootElement = document.getElementById("root")
rootElement.append(runBtn)
rootElement.append(innerDiv)
