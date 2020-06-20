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

let timerId = null;

const setRandomColor = function () {
  console.log("color!");
  const color = randomIntegerFromInterval(0, colors.length - 1);
  refs.body.style.backgroundColor = colors[color];
  console.log(color);
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startLightshow = function () {
  console.log("lol start");
  refs.startButton.removeEventListener("click", startLightshow);
  timerId = setInterval(setRandomColor, 1000);
};

const stopLightshow = function () {
  console.log("lol staph!");
  clearInterval(timerId);
  refs.startButton.addEventListener("click", startLightshow);
};

refs.startButton.addEventListener("click", startLightshow);
refs.stopButton.addEventListener("click", stopLightshow);
