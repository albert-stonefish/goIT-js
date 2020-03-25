"use strict";
console.log("task_04");

class StringBuilder {
  constructor(str) {
    this._value = str;

    this.append = function(str) {
      this._value += str;
    };
    this.prepend = function(str) {
      this._value = str + this.value;
    };
    this.pad = function(str) {
      this._value = str + this.value + str;
    };
  }
  get value() {
    return this._value;
  }
}

const builder = new StringBuilder(".");

builder.append("^");
console.log(builder.value);

builder.prepend("^");
console.log(builder.value);

builder.pad("=");
console.log(builder.value);

console.log("...");
