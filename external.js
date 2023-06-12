let a
let b
let operator

function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
}

function operate(a, b, operator) {
  if (operator == "+") {
    return add(a, b)
  }
}

// display text in display box
const numbers = document.querySelectorAll("div.num")
const display = document.querySelector("div.display")
let str = ""

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    str += number.textContent
    if (display) {
      display.textContent = str
    }
  })
})

// clear text
const clear = document.getElementById("C")
clear?.addEventListener("click", () => {
  if (display) {
    console.log(display.textContent)
  }
})
