"use strict";
console.log("task_07");

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function(login) {
  if (login.length >= 4 === true && login.length <= 16 === true) {
    return true;
  } else {
    return false;
  }
};

const isLoginUnique = function(logins, login) {
  if (logins.includes(login) === false) {
    return true;
  } else {
    return false;
  }
};

const addLogin = function(logins, login) {
  if (isLoginValid(login) === true) {
    if (isLoginUnique(logins, login) === true) {
      logins = logins.push(login);
      return "Login successfully added!";
    } else {
      return "This login is in use!";
    }
  } else {
    return "Error! Login must not be shorter than 4 or longer than 16 symbols";
  }
};

console.log(addLogin(logins, "Ajax"));
console.log(addLogin(logins, "robotGoogles"));
console.log(addLogin(logins, "Zod"));
console.log(addLogin(logins, "jqueryisextremelyfast"));

console.log("...");
