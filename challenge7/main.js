const Car = require("./Car");
const Truck = require("./Truck");

const car = new Car("B1234XYZ", 15);
car.setMaxSpeed(180);
car.displayInfo();
console.log(
  `Fuel consumption (150km): ${car
    .calculateFuelConsumption(150)
    .toFixed(2)} liters\n`
);

const truck = new Truck("D5678TRK", 8, 2000);
truck.setMaxSpeed(120);
truck.displayInfo();
console.log(
  `Fuel consumption (150km): ${truck
    .calculateFuelConsumption(150)
    .toFixed(2)} liters`
);
