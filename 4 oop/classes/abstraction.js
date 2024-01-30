function Shape(radius) {
    if (this.constructor === Shape) {
        throw new Error("Cannot instantiate abstract class Shape");
    }
    this.draw = function() {
        throw new Error("Cannot call abstract method draw from Shape");
    }
}

function Circle(radius) {
    Shape.call(this, radius);
    this.radius = radius
    this.draw = function() {
        console.log("Drawing a Circle");
        console.log(this.radius);
    }
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

let circle = new Circle(10);
circle.draw(); // "Drawing a Circle"
let shape = new Shape(); // Error: Cannot instantiate abstract class Shape

// In this example, the Shape class is an abstract class that cannot be instantiated and contains an abstract method draw() which throws an error when called. The Circle class inherits from the Shape class and implements the draw() method providing a specific implementation.

// Interfaces are another way to achieve abstraction in JavaScript, although it's not a native feature of javascript. Some libraries like TypeScript provide interfaces. An interface defines a set of methods that a class must implement but does not provide an implementation for those methods. This allows developers to ensure that a class has the required methods without specifying how those methods should be implemented.