"use strict";
console.log("task_01");

// let categoriesContainer = document.querySelector(ul#categories);

const getChildrenQuantity = function (parentNode) {
  let container = document.querySelector(`${parentNode}`);
  return container.children.length;
};

const getHeader = function (parentNode) {
  let container = document.querySelector(`${parentNode}`);
  let headerNode = container.querySelector("h2");
  return headerNode.textContent;
};

const getElementInfo = function (element) {
  let container = document.querySelector(`${element}`);
  let children = Array.from(container.children);
  // let children = container.children;
  console.log(children);
  return children.forEach((child) => console.log(`${child}`));
};

// let headers = document.querySelectorAll("h2");
// let lists = document.querySelectorAll("ul");

console.log(
  `There are ${getChildrenQuantity("ul#categories")} subcategories in this list`
);
console.log(getHeader("ul#categories"));
console.log(getHeader("li.item"));
console.log(getElementInfo("ul#categories"));

// console.log();

console.log("...");
