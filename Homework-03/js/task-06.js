"use strict";
console.log("task_06");

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 }
];

const calculateTotalPrice = function(allProducts, productName) {
  let totalPrice;
  for (const object of allProducts) {
    if (object.name === productName) {
      totalPrice = object.price * object.quantity;
    }
  }
  return totalPrice;
};

console.log(calculateTotalPrice(products, "Радар"));
console.log(calculateTotalPrice(products, "Дроид"));

console.log("...");
