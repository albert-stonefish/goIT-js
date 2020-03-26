"use strict";
console.log("task_03");

class Storage {
  constructor(items) {
    this.items = items;
  }
}

Storage.prototype.getItems = function() {
  return this.items;
};

Storage.prototype.addItem = function(item) {
  this.items.push(item);
};

Storage.prototype.removeItem = function(item) {
  for (let i = 0; i < this.items.length; i += 1) {
    if (this.items[i] === item) {
      this.items.splice(i, 1);
    }
  }
};

const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор"
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem("Дроид");
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem("Пролонгер");
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

console.log("...");
