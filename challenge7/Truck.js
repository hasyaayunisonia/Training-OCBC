const Vehicle = require("./Vehicle");

class Truck extends Vehicle {
  #fuelEfficiency;
  #cargoWeight;

  constructor(licensePlate, fuelEfficiency, cargoWeight) {
    super(licensePlate);
    this.#fuelEfficiency = fuelEfficiency;
    this.#cargoWeight = cargoWeight;
  }

  setMaxSpeed(speed) {
    this._setInternalMaxSpeed(speed);
  }

  getMaxSpeed() {
    return this._getInternalMaxSpeed();
  }

  calculateFuelConsumption(distance) {
    return distance / this.#fuelEfficiency + this.#cargoWeight * 0.05;
  }

  setFuelEfficiency(efficiency) {
    this.#fuelEfficiency = efficiency;
  }

  getFuelEfficiency() {
    return this.#fuelEfficiency;
  }

  setCargoWeight(weight) {
    this.#cargoWeight = weight;
  }

  getCargoWeight() {
    return this.#cargoWeight;
  }
}

module.exports = Truck;
