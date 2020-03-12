"use strict";
console.log("task_04");

const formatString = function(string) {
  const stringMaxLength = 40;
  if (string.length > stringMaxLength) {
    string = string.substring(0, 40);
    string = string + "...";
  } else {
  }
  return string;
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
console.log(formatString("Curabitur ligula sapien."));
console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);

console.log("...");
