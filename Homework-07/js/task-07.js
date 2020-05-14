"use strict";
console.log("task_07");

let input = document.querySelector("input#font-size-control");
let text = document.querySelector("span#text");

text.setAttribute("style", `font-size: ${input.value}px`);

const fontSizeAdjustment = function () {
  text.setAttribute("style", `font-size: ${input.value}px`);
};

input.addEventListener("input", fontSizeAdjustment);

console.log("...");
