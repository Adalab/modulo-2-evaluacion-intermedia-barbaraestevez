'use strict';

const inputElement = document.querySelector('.js-input');
const submitElement = document.querySelector('.js-submit');
const resultElement = document.querySelector('.js-result');
const inputValue = inputElement;


function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    }

console.log(getRandomNumber);