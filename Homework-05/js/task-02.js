"use strict";
console.log("task_02");

class User {
  constructor({ name: name, age: age, followers: followers }) {
    this.name = String(name);
    this.age = Number(age);
    this.followers = Number(followers);
    this.getInfo = function() {
      console.log(
        `User ${name} is ${age} years old and has ${followers} followers`
      );
    };
  }
}

const mango = new User({
  name: "Mango",
  age: 2,
  followers: 20
});

mango.getInfo();

const poly = new User({
  name: "Poly",
  age: 3,
  followers: 17
});

poly.getInfo();

console.log("...");
