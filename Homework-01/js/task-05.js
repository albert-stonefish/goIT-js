"use strict";
console.log("task_05");

let country;
let deliveryPrice;

country = prompt("Choose the country for delivery, please");

if (country === null) {
  console.log("Cancelled by user");
} else {
  country = country.toLowerCase();
  switch (country) {
    case "china":
      country = "China";
      deliveryPrice = 100;
      break;
    case "chile":
      country = "Chile";
      deliveryPrice = 250;
      break;
    case "australia":
      country = "Australia";
      deliveryPrice = 170;
      break;
    case "india":
      country = "India";
      deliveryPrice = 80;
      break;
    case "jamaica":
      country = "Jamaica";
      deliveryPrice = 120;
      break;
    default:
      alert("It is not possible to deliver order to your country");
  }
}

if (country !== "undefined") {
  console.log(`Delivery to ${country} costs ${deliveryPrice} cr`);
} else {
}

console.log("...");
