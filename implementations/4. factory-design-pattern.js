class Shape {
    draw() {
        throw new Error("Implement draw from Shape");
    }
}

class Circle extends Shape {
    draw() {
        console.log('circle');
    }
}

class Rectangle extends Shape {
    draw() {
        console.log('rectangle');
    }
}

class ShapeFactory {
    getShape(input_shape) {
        switch(input_shape) {
            case "CIRCLE":
                return new Circle();
            case "RECTANGLE":
                return new Rectangle();
            default:
                return null;
        }
    }
}

let shape_factory_obj = new ShapeFactory();
let circle_obj = shape_factory_obj.getShape("CIRCLE");
circle_obj.draw();
let rectangle_obj = shape_factory_obj.getShape("RECTANGLE");
rectangle_obj.draw();