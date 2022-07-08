"use strict"

export function* createIdGenerator() {
  for (let i = 1; i < Infinity; i++) yield i
}

export function* newFontGenerator(init, min, max, step) {
  let currentSize = init

  while (true) {
    const action = yield currentSize
    if (action === "down" && currentSize === min) continue
    if (action === "up" && currentSize === max) continue

    if (action === "up") currentSize += step
    if (action === "down") currentSize -= step
  }
}
