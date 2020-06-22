"use strict";

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  startButton: document.querySelector("button[data-action='start']"),
  stopButton: document.querySelector("button[data-action='stop']"),
  body: document.querySelector("body"),
};

let currentColor = 0;
let timerId = null;

const setRandomColor = function () {
  const nextColor = randomIntegerFromInterval(0, colors.length - 1);
  if (nextColor === currentColor) {
    currentColor = nextColor + 1;
  } else {
    currentColor = nextColor;
  }
  refs.body.style.backgroundColor = colors[currentColor];
  console.log(`color:`, currentColor);
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startLightshow = function () {
  console.log("start");
  refs.startButton.disabled = true;
  timerId = setInterval(setRandomColor, 1000);
};

const stopLightshow = function () {
  console.log("staph!");
  clearInterval(timerId);
  refs.startButton.disabled = false;
};

refs.startButton.addEventListener("click", startLightshow);
refs.stopButton.addEventListener("click", stopLightshow);
