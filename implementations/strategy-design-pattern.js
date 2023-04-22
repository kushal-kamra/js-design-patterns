class DriveStrategy {
    drive() {
        throw new error ("Implement drive!");
    }
};

class NormalDriveStrategy extends DriveStrategy {
    drive() {
        console.log("Normal drive capability");
    }
};

class SportsDriveStrategy extends DriveStrategy {
    drive() {
        console.log("Sports drive strategy");
    }
};

class Vehicle {
    constructor(driveObj) {
        this.driveObject = driveObj;
    }

    drive() {
        this.driveObject.drive();
    }
}

class OffroadVehicle extends Vehicle {
    constructor() {
        //constructor injection
        super(new SportsDriveStrategy());
    }
}

class SportsVehicle extends Vehicle {
    constructor() {
        //constructor injection
        super(new SportsDriveStrategy());
    }
}

class GoodsVehicle extends Vehicle {
    constructor() {
        //constructor injection        
        super(new NormalDriveStrategy());
    }
}

let vehicle_1 = new SportsVehicle();
vehicle_1.drive();

let vehicle_2 = new GoodsVehicle();
vehicle_2.drive();