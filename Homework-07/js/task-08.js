"use strict";
console.log("task_08");

let boxContainer = document.querySelector("div#boxes");
let input = document.querySelector("input[type='number']");
let buttonCreate = document.querySelector("button[data-action='render']");
let buttonClear = document.querySelector("button[data-action='destroy']");

const getColorRandom = function () {
  return Number.parseInt(Math.random() * 256);
};

const createBoxes = function () {
  let amount = Number.parseInt(input.value);
  let heightWidth = 30;
  if (amount === 0 || Number.isNaN(amount)) {
    console.log("Nothing to create");
  } else {
    console.log("box_create");
    for (let i = 1; i <= amount; i += 1) {
      let box = document.createElement("div");
      let colorRgb = `rgb(${getColorRandom()},${getColorRandom()},${getColorRandom()})`;
      boxContainer.appendChild(box);
      box.setAttribute(
        "style",
        `height: ${heightWidth}px; width: ${heightWidth}px; background-color: ${colorRgb}; margin-top: 10px; margin-left: auto; margin-right: auto;`
      );
      console.log(colorRgb);
      heightWidth += 10;
      console.log(boxContainer);
    }
  }
};
const destroyBoxes = function () {
  console.log("box_destroy");
  let boxContainerContent = boxContainer.querySelectorAll("div");
  for (let i = 0; i < boxContainerContent.length; i += 1) {
    let box = boxContainer.querySelector("div");
    box.remove();
  }
};

buttonCreate.addEventListener("click", createBoxes);
buttonClear.addEventListener("click", destroyBoxes);

console.log("...");
