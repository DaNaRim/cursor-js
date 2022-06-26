"use strict"

axios.defaults.baseURL = "https://swapi.dev/api/"

const main = document.querySelector("main")
const loading = document.querySelector(".lds-ring")
const filmInput = document.querySelector("#film-number")
const wookieCheckbox = document.querySelector("#is-wookie")

let lastAction = ""

document.querySelector("#getCharacters").addEventListener("click", showCharacters)
document.querySelector("#getPlanets").addEventListener("click", showPlanets)
wookieCheckbox.addEventListener("change", reload)

function reload() {
  if (lastAction === "showCharacters") {
    showCharacters()
  } else if (lastAction === "showPlanets") {
    showPlanets()
  }
}

function showCharacters() {
  loading.classList.add("visible")

  if (filmInput.value > filmInput.max || filmInput.value < filmInput.min) {
    alert("Invalid film number")
    loading.classList.remove("visible")
    return
  }

  findCharactersByFilm(filmInput.value)
    .then(res => res.map(ch => generateCharacterHtml(ch)))
    .then(res => {
      main.innerHTML = `
        <div class="characters">
            ${res.join("").replaceAll(",", "")}
        </div>
      `
    })
    .catch(e => alert(e))
    .finally(() => {
      loading.classList.remove("visible")
      lastAction = "showCharacters"
    })
}

async function findCharactersByFilm(filmNum) {
  const characters = []

  const params = new URLSearchParams()
  if (wookieCheckbox.checked) params.append("format", "wookiee")

  const request = await axios.get(`films/${filmNum}`)

  for (const url of request.data["characters"]) {
    try {
      const character = await axios.get(url, {params})
      characters.push(character.data)
    } catch (e) {
      console.warn(`error with url ${url} \n ${e}`)
    }
  }
  return characters
}

function generateCharacterHtml(character) {
  const urlKey = wookieCheckbox.checked ? "hurcan" : "url"
  const nameKey = wookieCheckbox.checked ? "whrascwo" : "name"
  const birthYearKey = wookieCheckbox.checked ? "rhahrcaoac_roworarc" : "birth_year"
  const genderKey = wookieCheckbox.checked ? "rrwowhwaworc" : "gender"

  const characterId = character[urlKey].split("/")[5]

  const genderIcon = (() => {
    switch (character[genderKey]) {
      case "male":
      case "scraanwo":
        return "<i class=\"fa-solid fa-mars\"></i>"
      case "female":
      case "wwwoscraanwo":
        return "<i class=\"fa-solid fa-venus\"></i>"
      default:
        return "<i class=\"fa-solid fa-genderless\"></i>"
    }
  })()

  return `
    <div class="character-card">
        <div class="character-image">
            <img src="https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg"
                 alt="${character[nameKey]} image" height="200" width="200">
        </div>
        <div class="character-info">
            <h2 class="character-name">${character[nameKey]}</h2>
            <p class="character-date">Birth year: <span>${character[birthYearKey]}</span></p>
            <p class="character-gender">Gender: ${genderIcon}</p>
        </div>
    </div>
  `
}

function showPlanets() {
  loading.classList.add("visible")

  const link = this && this.getAttribute("data-link") ? this.getAttribute("data-link") : "planets"

  const leftArrow = document.querySelector(".fa-caret-left")
  const rightArrow = document.querySelector(".fa-caret-right")

  let page
  if (leftArrow) {
    page = +leftArrow.getAttribute("data-link").slice(-1) + 1
  } else if (rightArrow) {
    page = +rightArrow.getAttribute("data-link").slice(-1) - 1
  }

  const params = new URLSearchParams()
  if (page && !link.includes("page")) params.append("page", String(page))

  new Promise(async res => res((await axios.get(link, {params})).data))
    .then(async res => {
      const planetsKey = wookieCheckbox.checked ? "rcwochuanaoc" : "results"

      const leftArrow = res.previous ? `<i class="fa-solid fa-caret-left clickable-arrow" data-link="${res.previous}"></i>` : ""
      const rightArrow = res.next ? `<i class="fa-solid fa-caret-right clickable-arrow" data-link="${res.next}"></i>` : ""

      if (wookieCheckbox.checked) params.append("format", "wookiee")
      let planets = (await axios.get(link, {params})).data

      //fix server bug
      if (wookieCheckbox.checked && typeof planets === "string") {
        planets = JSON.parse(String(planets).replaceAll(`whhuanan`, ` "whhuanan" `))
      }

      main.innerHTML = `
        <div class="circle-wrapper">
            ${generatePlanetsHtml(planets[planetsKey])}
            <div class="planets-buttons">
                <div class="planets-arrow">
                    ${leftArrow}
                </div>
                <div class="planets-arrow">
                    ${rightArrow}
                </div>
            </div>
        </div>
      `
    })
    .then(() => document.querySelectorAll(".clickable-arrow")
                        .forEach(arrow => arrow.addEventListener("click", showPlanets)))

    .catch(e => alert(e))
    .finally(() => {
      loading.classList.remove("visible")
      lastAction = "showPlanets"
    })
}

function generatePlanetsHtml(planets) {
  const nameKey = wookieCheckbox.checked ? "whrascwo" : "name"

  const sectorDegrees = 360 / planets.length

  let planetsHtml = ""

  let currentDegrees = 0
  for (const planet of planets) {
    const planetStyle = `transform: rotate(${currentDegrees}deg) translate(150px) rotate(-${currentDegrees}deg);`

    const planetHtml = `
          <div class="circle" style="${planetStyle}">
              ${planet[nameKey]}
          </div>
        `
    planetsHtml = planetsHtml.concat(planetHtml)
    currentDegrees += sectorDegrees
  }
  return planetsHtml
}
