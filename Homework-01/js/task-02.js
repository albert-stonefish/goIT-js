"use strict";
console.log("task_02");

const totalProducts = 100;
let orderedProducts = prompt("Enter ordered products quantity, please");
orderedProducts = Number.parseInt(orderedProducts);
let message;

console.log(`Order for ${orderedProducts} units is placed`);
if (orderedProducts === 0) {
  message = "Nothing was ordered";
} else if (orderedProducts <= totalProducts) {
  message = "Order is placed, our manager will contact you soon";
} else if (orderedProducts > totalProducts) {
  message = "We have not enough wood, milord";
} else message = "Nothing is ordered";

console.log(message);

console.log("...");
