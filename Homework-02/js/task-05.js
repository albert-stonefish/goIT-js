"use strict";
console.log("task_05");

const checkForSpam = function(message) {
  message = message.toLowerCase();
  return message.includes("sale") || message.includes("spam");
};

console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("JavaScript weekly newsletter"));
console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("[SPAM] How to earn fast money?"));

console.log("...");
