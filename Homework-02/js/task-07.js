"use strict";
console.log("task_07");

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
let message;

const isLoginValid = function(login) {
  return login.length >= 4 && login.length <= 16;
};

const isLoginUnique = function(logins, login) {
  return logins.includes(login) === false;
};

const addLogin = function(logins, login) {
  if (isLoginValid(login)) {
    if (isLoginUnique(logins, login)) {
      logins = logins.push(login);
      message = "Login successfully added!";
    } else {
      message = "This login is in use!";
    }
  } else {
    message =
      "Error! Login must not be shorter than 4 or longer than 16 symbols";
  }
  return message;
};

console.log(addLogin(logins, "Ajax"));
console.log(addLogin(logins, "robotGoogles"));
console.log(addLogin(logins, "Zod"));
console.log(addLogin(logins, "jqueryisextremelyfast"));

console.log("...");
