"use strict";
console.log("task_06");

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Graple", price: 1200, quantity: 2 }
];

const calculateTotalPrice = function(allProducts, productName) {
  for (const object of allProducts) {
    if (object.name === productName) {
      return object.price * object.quantity;
    }
  }
};

console.log(calculateTotalPrice(products, "Radar"));
console.log(calculateTotalPrice(products, "Droid"));

console.log("...");
