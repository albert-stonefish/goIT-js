"use strict";
console.log("task_05");

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grapple", price: 1200, quantity: 2 }
];

const getAllPropValues = function(arr, prop) {
  const propValues = [];
  for (const object of arr) {
    if (object[prop] !== undefined) {
      propValues.push(object[prop]);
    } else {
    }
  }
  return propValues;
};

console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']
console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]
console.log(getAllPropValues(products, "category")); // []

console.log("...");
