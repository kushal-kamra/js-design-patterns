//Prototyping Class Pattern

class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}

const civic = new Car(4, 'V6', 'Red');

console.log(civic);

//Constructor Pattern

class SUV extends Car {
    constructor(doors, engine, color, wheels) {
        super(doors, engine, color);
        this.wheels = wheels;
    }
}

const cx5 = new SUV(5, 'V8', 'Blue', 4);

console.log(cx5);