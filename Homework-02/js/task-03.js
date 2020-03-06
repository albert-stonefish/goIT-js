"use strict";
console.log("task_03");

const findLongestWord = function(string) {
  let phrase = string.split(" ");
  let longestWord;
  let wordLength = 0;

  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i].length > wordLength) {
      wordLength = phrase[i].length;
      longestWord = phrase[i];
    } else {
    }
  }
  return `The longest word is '${longestWord}'`;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("Google do a roll"));
console.log(findLongestWord("May the force be with you"));
console.log("...");
