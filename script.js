'use strict';

// Coding Challenge #1

// 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;

const Car = function (make, speed) {
  this.make = make;
  this.speed = `${speed} km/h`;
};

// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;

Car.prototype.accelerate = function () {
  this.speed = `${Number.parseInt(this.speed) + 10} km/h`;
  console.log(`The new speed is ${this.speed}`);
};

// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;

Car.prototype.brake = function () {
  this.speed = `${Number.parseInt(this.speed) - 5} km/h`;
  console.log(`The new speed is ${this.speed}`);
};
// 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.brake();

mercedes.accelerate();
mercedes.brake();

// DATA CAR 1: 'BMW' going at 120 km/h
// DATA CAR 2: 'Mercedes' going at 95 km/h

// GOOD LUCK 😀

// Coding Challenge #2 ---------------------
console.log('Coding Challenge 2 ------------');

// 1. Re-create challenge 1, but this time using an ES6 class;
class Car2 {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${make}'s speed is now ${speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${make}'s speed is now ${speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speedMph) {
    this.speed = speedMph * 1.6;
  }
}

// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
// 4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

const ford = new Car2('Ford', 120);
ford.speedUS = 100;
console.log(ford.speedUS);
console.log(ford);
// DATA CAR 1: 'Ford' going at 120 km/h

// GOOD LUCK 😀

// Coding Challenge #3
console.log('Coding Challenege 3 ------- ');

// 1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = `${charge}%`;
};
// 2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = `${chargeTo}%`;
};

// 3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';

EV.prototype.accelerate = function () {
  this.speed = `${Number.parseInt(this.speed) + 20} km/h`;
  this.charge = `${Number.parseInt(this.charge) - 1}%`;
  console.log(
    `${this.make} going at ${this.speed}, with a charge of ${this.charge}`
  );
};

// 4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉
const tesla = new EV('Tesla', 120, 23);
tesla.accelerate();

// DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

// GOOD LUCK 😀
