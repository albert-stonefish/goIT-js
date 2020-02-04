'use strict';
console.log('task_05');

let country;
let deliveryPrice;

country = prompt('Choose the country for delivery, please');

if (country === null) {
  console.log('Cancelled by user');
} else {
  country = country.toLowerCase();
  switch (country) {
    case 'china':
      deliveryPrice = 100;
      console.log(`Delivery to ${country} costs ${deliveryPrice} cr`);
      break;
    case 'chile':
      deliveryPrice = 250;
      console.log(`Delivery to ${country} costs ${deliveryPrice} cr`);
      break;
    case 'australia':
      deliveryPrice = 170;
      console.log(`Delivery to ${country} costs ${deliveryPrice} cr`);
      break;
    case 'india':
      deliveryPrice = 80;
      console.log(`Delivery to ${country} costs ${deliveryPrice} cr`);
      break;
    case 'jamaica':
      deliveryPrice = 120;
      console.log(`Delivery to ${country} costs ${deliveryPrice} cr`);
      break;
    default:
      alert('It is not possible to deliver order to your country');
  }
}

console.log('...');
