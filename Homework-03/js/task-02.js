"use strict";
console.log("task_02");

const countProps = function(obj) {
  return Object.entries(obj).length;
};

console.log(countProps({}));
console.log(countProps({ name: "Mango", age: 2 }));
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

console.log("...");
