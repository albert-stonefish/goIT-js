"use strict";
console.log("task_06");

let input = document.querySelector("input#validation-input");

const inputLengthCheck = function () {
  let inputLength = input.value.length;
  let checkLength = Number.parseInt(input.getAttribute("data-length"));
  if (inputLength === checkLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
};

input.addEventListener("blur", inputLengthCheck);

console.log("...");
