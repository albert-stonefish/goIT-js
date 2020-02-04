'use strict';
console.log('task_02');

const totalProducts = 100;
let orderedProducts = prompt('Enter ordered products quantity, please');
orderedProducts = Number.parseInt(orderedProducts);

console.log(`Order for ${orderedProducts} units is placed`);
if (orderedProducts === 0) {
  console.log('Nothing was ordered');
} else if (orderedProducts <= totalProducts) {
  console.log('Order is placed, our manager will contact you soon');
} else if (orderedProducts > totalProducts) {
  console.log('We have not enough wood, milord');
} else console.log('Nothing is ordered');

console.log('...');
