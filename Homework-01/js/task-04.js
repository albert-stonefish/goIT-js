'use strict';
console.log('task_04');

let credits = 23580;
let pricePerDroid = 3000;
let totalPrice;
let droidQuantity;

console.log(
  `You have ${credits} credits. One droid costs ${pricePerDroid} credits.`,
);

droidQuantity = prompt('Enter droid quantity, please');

if (droidQuantity === null) {
  console.log('Cancelled by user');
} else {
  droidQuantity = Number.parseInt(droidQuantity);
  if (droidQuantity === 0) {
    console.log(
      'Republic credits are no good out here. I need something more real.',
    );
  } else if (droidQuantity > 0) {
    totalPrice = droidQuantity * pricePerDroid;
    if (totalPrice > credits) {
      console.log('It is not enough credits');
    } else {
      credits = credits - totalPrice;
      console.log(
        `You have bought ${droidQuantity} droids, ${credits} credits left`,
      );
    }
  } else console.log('These aren`t the droids you are looking for');
}

console.log('...');
