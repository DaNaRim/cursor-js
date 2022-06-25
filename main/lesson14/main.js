"use strict"

function one() {
}

function two() {
}

function result() {
  return new Promise(res => res(one()))
}

result().then(() => two())


const BASE_URL = "https://jsonplaceholder.typicode.com"

// const userFetch = fetch(`${BASE_URL}/users`)
//
// userFetch.then(res => {
//   if (res.status === 404) {
//     console.error("We have some problems")
//   }
//   return res.json()
// }).then(res => console.log(res))


const button = document.querySelector(".users")
const post = document.querySelector(".post")
button.addEventListener("click", getUsers)
post.addEventListener("click", () => {
  getSinglePost(101)
})

async function getUsers() {
  const request = await fetch(`${BASE_URL}/users`)
  const response = await request.json()

  console.log(response.find(user => user.id === 1))
}

async function createPost() {
  const body = {
    title: "our post",
    body: "My new post",
    userId: 1
  }

  const request = await fetch(`${BASE_URL}/posts`, {
    method: "POST",
    body: JSON.stringify(body)
  })

  console.log(request)
  const response = await request.json()
}


async function getSinglePost(id) {
  const request = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const response = await request.json()

  console.log(response)
}


async function getWeather() {
  //mime types
  const form = new FormData()
  form.append("url", "./some-path")
  form.append("type", "img/jpeg")

  const request = await fetch("...", {
    method: "POST",
    body: form,
    headers: {}
  })
}


function setValue() {
  localStorage.setItem("token", JSON.stringify({name: "Ivan"}))
}

setValue()
console.log(JSON.parse(localStorage.getItem("token")))


function changeValue() {
  const ourItem = JSON.parse(localStorage.getItem("token"))

  ourItem.name = "Other Name"
  localStorage.setItem("token", JSON.stringify(ourItem))
}

setTimeout(changeValue, 5000)
console.log(JSON.parse(localStorage.getItem("token")))

setTimeout(() => localStorage.clear(), 5000)


// console.log(axios)

axios.defaults.baseURL = "https://weatherbit-v1-mashape.p.rapidapi.com"
axios.defaults.headers = {
  "X-RapidAPI-Key": "7112d52fe4msh9aa5111bd8ae4b2p164ed7jsn5764b581e757",
  "X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com"
}

async function getWeather({lon, lat}) {
  // const request = await axios.get("/forecast/3hourly", {
  //   params: {lat: "35.5", lon: "-78.5"},
  //   headers: {
  //     "X-RapidAPI-Key": "7112d52fe4msh9aa5111bd8ae4b2p164ed7jsn5764b581e757",
  //     "X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com"
  //   }
  // })

  const params = new URLSearchParams()
  params.append("lat", String(lon))
  params.append("lon", String(lat))

  const request = await axios.get("/forecast/3hourly", {
    params
  })
  console.log(request.data)
}

getWeather({lat: "35.5", lon: "-78.5"})
