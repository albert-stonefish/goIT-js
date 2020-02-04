'use strict';
console.log('task_02');

const ADMIN_PASSWORD = 'jqueryismyjam';
let enteredPassword;
let message;

enteredPassword = prompt('Enter password');
if (enteredPassword === null) {
  message = 'Cancelled by user';
} else if (enteredPassword === ADMIN_PASSWORD) {
  message = 'Wellcome';
} else if (enteredPassword !== ADMIN_PASSWORD) {
  message = 'Access denied, wrong password';
} else message = 'Ops, something went wrong';
alert(message);

console.log('...');
