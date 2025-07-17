const Vehicle = require("./Vehicle");

class Car extends Vehicle {
  #fuelEfficiency;

  constructor(licensePlate, fuelEfficiency) {
    super(licensePlate);
    this.#fuelEfficiency = fuelEfficiency;
  }

  setMaxSpeed(speed) {
    this._setInternalMaxSpeed(speed);
  }

  getMaxSpeed() {
    return this._getInternalMaxSpeed();
  }

  calculateFuelConsumption(distance) {
    return distance / this.#fuelEfficiency;
  }

  setFuelEfficiency(efficiency) {
    this.#fuelEfficiency = efficiency;
  }

  getFuelEfficiency() {
    return this.#fuelEfficiency;
  }
}

module.exports = Car;
