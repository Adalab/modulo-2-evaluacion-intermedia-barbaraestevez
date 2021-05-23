"use strict";

const inputElement = document.querySelector(".js-input");
const submitElement = document.querySelector(".js-button");
const hint = document.querySelector(".js-hint");
const counter = document.querySelector(".js-trials");

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomNumber(100);
console.log(randomNumber);

const checkNumber = () => {
  const number = parseInt(inputElement.value);
  console.log(number);

  if (number < 1 || number > 100) {
    hint.innerHTML = "Pista: El número debe estar entre 1 y 100";
  } else if (number < randomNumber) {
    hint.innerHTML = "Pista: Demasiado bajo";
  } else if (number > randomNumber) {
    hint.innerHTML = "Pista: Demasiado alto";
  } else {
    hint.innerHTML = "Has ganado, campeona!!!";
  }
};

let count = 0;
function increaseCounter() {
  count++;
  counter.innerHTML = `Número de intentos: ${count}`;
}
function handleClick(event) {
  checkNumber();
  increaseCounter();
}
submitElement.addEventListener("click", handleClick);
