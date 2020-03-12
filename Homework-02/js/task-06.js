"use strict";
console.log("task_06");

let input;
const numbers = [];
let total = 0;

input = prompt("Enter any number, please");

while (input !== null) {
  input = Number.parseFloat(input);
  if (Number.isNaN(input)) {
    alert("Try to enter a number :)");
  } else {
    numbers.push(input);
  }
  input = prompt("Enter any number, please");
}

if (numbers.length > 0) {
  for (let number of numbers) {
    number = Number.parseInt(number * 1000) / 1000;
    total = (total * 1000 + number * 1000) / 1000;
  }
  console.log(`Total equals ${total}`);
} else {
  console.log("massive 'numbers' is empty");
}

console.log("...");
