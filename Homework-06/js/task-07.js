"use strict";
console.log("task_05");

class Car {
  constructor({ maxSpeed: maxSpeed, price: price }) {
    this.settings = {
      speed: 0,
      price: price,
      maxSpeed: maxSpeed,
      isOn: false,
      distance: 0
    };
  }
  set price(value) {
    this.settings.price = value;
  }
  get price() {
    return this.settings.price;
  }
  static getSpecs(car) {
    console.log(
      `maxSpeed: ${car.settings.maxSpeed}, speed: ${car.settings.speed}, isOn: ${car.settings.isOn}, distance: ${car.settings.distance}, price: ${car.settings.price}`
    );
  }
  turnOn = function() {
    this.settings.isOn = true;
  };
  turnOff = function() {
    this.settings.isOn = false;
    this.settings.speed = 0;
  };
  accelerate = function(value) {
    if (this.settings.isOn) {
      if (this.settings.speed + value > this.settings.maxSpeed) {
        this.settings.speed = this.settings.maxSpeed;
      } else {
        this.settings.speed = this.settings.speed + value;
      }
    } else {
    }
  };
  decelerate = function(value) {
    if (this.settings.speed - value < 0) {
      this.settings.speed = 0;
    } else {
      this.settings.speed = this.settings.speed - value;
    }
  };
  drive = function(hours) {
    if (this.settings.isOn) {
      this.settings.distance =
        this.settings.distance + hours * this.settings.speed;
    } else {
    }
  };
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000

console.log("...");
