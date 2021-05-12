'use strict';

const inputElement = document.querySelector('.js-input');
const submitElement = document.querySelector('.js-button');
const resultElement = document.querySelector('.js-result');
const hint = document.querySelector('.js-hint');
const counter = document.querySelector('.js-trials');
const randomNumber = getRandomNumber(100);


function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    }

function checkNumber () {
    const number = parseInt(inputElement.value);
    
if (number < 1 || number > 100) {
    hint.innerHTML = "Pista: El número debe estar entre 1 y 100";
} else if (number < randomNumber) {
    hint.innerHTML = "Pista: Demasiado bajo";
  } else if (number > randomNumber) {
    hint.innerHTML = "Pista: Demasiado alto";
  } else (number === randomNumber) {
    hint.innerHTML = "Has ganado, campeona!!!";
  } 
  increaseCounter();
}
function increaseCounter () {
    count += 1;
    counter.value = `Número de intentos: ${count}`;
}
function handleClick () {
    checkNum ();
}
button.addEventListener ('click', handleClick);