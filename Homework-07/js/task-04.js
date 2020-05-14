"use strict";
console.log("task_04");

let counterValue = 0;
let counter = document.querySelector("span#value");
const buttonIncrement = document.querySelector(
  'button[data-action="increment"]'
);
const buttonDecrement = document.querySelector(
  'button[data-action="decrement"]'
);

const increment = function () {
  counterValue += 1;
  counter.textContent = counterValue;
};

const decrement = function () {
  counterValue -= 1;
  counter.textContent = counterValue;
};

buttonIncrement.addEventListener("click", increment);
buttonDecrement.addEventListener("click", decrement);

console.log("...");
