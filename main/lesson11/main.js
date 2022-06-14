// "use strict"

console.log(document.documentElement)

const b = document.body

// for (let i = 0; i < document.body.childNodes.length; i++) {
//   alert(document.body.childNodes[i])
// }

// for (let i = 0; i < document.body.children.length; i++) {
//   alert(document.body.children[i])
// }

console.log(document.querySelector("p").length)

console.log(document.body.innerHTML)

document.innerHTML = "<div class = 'red'></div>"


const div = document.createElement("div")

div.innerHTML = "<strong>Hello</strong>"

document.body.append("Text")
document.body.append(div)
