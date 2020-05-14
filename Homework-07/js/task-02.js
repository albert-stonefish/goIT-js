"use strict";
console.log("task_02");

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientList = document.querySelector("#ingredients");
const list = [];
ingredients.forEach((ingredient) => {
  let listOption = document.createElement("li");
  listOption.textContent = ingredient;
  list.push(listOption);
});

list.forEach((option) => {
  ingredientList.appendChild(option);
});

console.log("...");
