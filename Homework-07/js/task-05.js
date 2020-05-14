"use strict";
console.log("task_05");

let span = document.querySelector("span#name-output");
let input = document.querySelector("input#name-input");

const inputValueTransfer = function () {
  span.textContent = input.value;
  if (input.value.length === 0) {
    span.textContent = "незнакомец";
  }
};

input.addEventListener("keyup", inputValueTransfer);

console.log("...");
