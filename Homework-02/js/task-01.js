"use strict";
console.log("task_01");

const logItems = function(items) {
  let number = 0;
  let item;

  for (let i = 0; i < items.length; i++) {
    item = items[number];
    number += 1;
    console.log(`${number} - ${item}`);
  }
};

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

console.log("...");
