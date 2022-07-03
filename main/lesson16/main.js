"use strict"

const apiRequest = (url, method, params) => {
  return fetch({
    url: "asd",
    method: "GET",
    headers: {
      "APIKEY": "dasdas"
    }
  })
}

const users = [
  {
    firstname: "Vasya",
    lastname: "Pupkin"
  },
  {
    firstname: "Iruna",
    lastname: "Tkachuk"
  }
]

const addapterUser = users => {
  return users.map(user => ({...user, fullName: user.firstname + " " + user.lastname}))
}

const writeName = () => {
  addapterUser(users).forEach(user => console.log(user.fullName))
}
writeName()


document.addEventListener("message", () => console.log("yes"))
document.dispatchEvent(new Event("message"))
