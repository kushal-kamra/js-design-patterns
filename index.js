// Prototyping Class Pattern

class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}

const civic = new Car(4, 'V6', 'Red');

console.log(civic);

// Constructor Pattern

class SUV extends Car {
    constructor(doors, engine, color, wheels) {
        super(doors, engine, color);
        this.wheels = wheels;
    }
}

const cx5 = new SUV(5, 'V8', 'Blue', 4);

console.log(cx5);

// Singleton Pattern

let instance = null;

class Bike {
    constructor(wheels, color) {
        if(!instance) {
            this.wheels = wheels;
            this.color = color;
            instance = this;
        } else {
            return instance;
        }
    }
}

const harley = new Bike(2, 'Black');

console.log(harley);

const ducati = new Bike(2, 'Red');

console.log(ducati);

// Factory Pattern

class Cycle {
    constructor(body, color) {
        this.body = body;
        this.color = color;
    }
}

class CycleFactory {
    createCycle(type) {
        switch(type) {
            case 'ok':
                return new Cycle('steel', 'black')
            case 'good':
                return new Cycle('aluminium', 'grey')
        }
    }
}

const cycleFactory = new CycleFactory();

const myOkCycle = cycleFactory.createCycle('ok');
console.log(myOkCycle);

const myGoodCycle = cycleFactory.createCycle('good');
console.log(myGoodCycle);

// Abstract Factory Pattern

class CarFactory {
    createCar(model) {
        switch(model) {
            case 'civic':
                return new Car(4, 'V6', 'Red');
            case 'esteem':
                return new Car(4, 'V4', 'Yellow');
        }
    }
}

const carFactory = new CarFactory();

class VehicleFactory {
    createVehicle(type, model) {
        switch(type) {
            case 'cycle':
                return cycleFactory.createCycle(model);
            case 'car':
                return carFactory.createCar(model);
        }
    }
}

const vehicleFactory = new VehicleFactory();

const vehicleGoodCycle = vehicleFactory.createVehicle('cycle', 'good');
console.log(vehicleGoodCycle);

const vehicleCivicCar = vehicleFactory.createVehicle('car', 'civic');
console.log(vehicleCivicCar);

// Mixin Pattern

let carMixin = {
    revEngine() {
        console.log(`This ${this.engine} engine is doing Vroom Vroom!`);
    }
}

Object.assign(Car.prototype, carMixin);

const vehicleEsteemCar = vehicleFactory.createVehicle('car', 'esteem');
vehicleEsteemCar.revEngine();