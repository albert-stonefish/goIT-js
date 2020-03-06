"use strict";
console.log("task_04");

const countTotalSalary = function(employees) {
  let totalSalary = 0;
  for (const key in employees) {
    totalSalary = totalSalary + employees[key];
  }
  return totalSalary;
};

console.log(countTotalSalary({}));
console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80
  })
);
console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150
  })
);
console.log("...");
