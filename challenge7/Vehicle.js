class Vehicle {
  #licensePlate;
  #maxSpeed;

  constructor(licensePlate) {
    if (new.target === Vehicle) {
      throw new Error("Cannot instantiate abstract class Vehicle directly.");
    }
    this.#licensePlate = licensePlate;
  }

  setMaxSpeed(speed) {
    throw new Error("setMaxSpeed() must be implemented by subclass");
  }

  getMaxSpeed() {
    throw new Error("getMaxSpeed() must be implemented by subclass");
  }

  calculateFuelConsumption(distance) {
    throw new Error(
      "calculateFuelConsumption() must be implemented by subclass"
    );
  }

  displayInfo() {
    console.log(`License Plate: ${this.#licensePlate}`);
    console.log(`Max Speed: ${this.#maxSpeed} km/h`);
  }

  // Protected helper
  _setInternalMaxSpeed(speed) {
    this.#maxSpeed = speed;
  }

  _getInternalMaxSpeed() {
    return this.#maxSpeed;
  }
}

module.exports = Vehicle;
