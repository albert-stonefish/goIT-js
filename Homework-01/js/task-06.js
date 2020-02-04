'use strict';
console.log('task_06');

let input;
let total = 0;

while (input !== null) {
  input = prompt('Enter any number');
  if (Number.isNaN(Number.parseFloat(input)) === false) {
    total = total + Number.parseFloat(input);
  } else if (input === null) {
  } else {
    alert(
      'Try to enter a number... Yes, I know, that you can enter only a string, but let it look as a number. But not a NaN, nevertheless NaN is number, do not enter NaN. Enter something, that looks more like number and less like NaN, ok?',
    );
  }
}
alert(`Total equals ${total}`);

console.log('...');
