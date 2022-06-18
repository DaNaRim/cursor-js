"use strict"

function test() {
  console.log("test")
}

function test2() {
  console.log("test2")
  this.style.backgroundColor = "red"
}

// document.querySelector("#clickable").onclick = test
// document.querySelector("#clickable").onclick = test2 //override

function doBoth() {
  test()
  test2()
}

// document.querySelector("#clickable").onclick = doBoth

const button = document.querySelector("#clickable")

button.addEventListener("click", test)
button.addEventListener("click", test2)

// button.removeEventListener("click", test2)

// button.replaceWith(button.cloneNode(true))

// button.addEventListener("click", () => {
//   test()
//   test2()
// })

const parent = document.querySelector(".parent")
const child = document.querySelector(".child")
const child2 = document.querySelector(".child2")

function doSmth(index) {
  console.log(`Hi from ${index}`)
}

[parent, child, child2].forEach((el, index) => {
  el.addEventListener("click", () => doSmth(index))
})

// document.querySelectorAll("li").forEach((el, index) => {
//   el.addEventListener("click", () => doSmth(index))
// })

function doSmth2(target) {
  console.log(`Hi from ${target.id}`)
}

const longList = document.querySelector("#longList")

longList.addEventListener("click", e => doSmth2(e.target))


const todoHolder = document.querySelector("#todoHolder")
const addTodoForm = document.querySelector("#addTodoForm")
const addTodoInput = document.querySelector("#addTodoInput")

let id = 0

function createTodo(text) {
  const newLi = document.createElement("li")
  newLi.innerHTML = `${id}. ${text} `
  newLi.id = `${id}n`

  const deleteButton = document.createElement("button")
  deleteButton.innerHTML = "x"
  deleteButton.addEventListener("click", deleteTodo)
  newLi.appendChild(deleteButton)

  id++
  return newLi
}

function addTodo() {
  const inputValue = addTodoInput.value
  if (!inputValue) return

  const todo = createTodo(inputValue)
  todoHolder.appendChild(todo)
}

function deleteTodo(e) {
  e.target.closest("li").style.textDecoration = "line-through"
}

function onFormSubmit(e) {
  e.preventDefault()
  addTodo()
  addTodoForm.reset()
}

addTodoForm.addEventListener("submit", onFormSubmit)
