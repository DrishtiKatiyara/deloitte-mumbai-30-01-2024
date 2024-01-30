// Developers often use the term "interface" in JavaScript to refer to a set of properties and methods that an object is expected to have.

// In JavaScript, objects are dynamic, and their structure is defined by the properties and methods they have at runtime. If an object adheres to a specific set of properties and methods, it is said to satisfy an "interface."

// Here's an example of how you might implement something similar to an interface in JavaScript:

// Define an "interface" for shapes
const shapeInterface = {
  area: function () {
    throw new Error("Method 'area' must be implemented.");
  },
  perimeter: function () {
    throw new Error("Method 'perimeter' must be implemented.");
  },
};

// Implement a Circle object that adheres to the shapeInterface
const Circle = {
  radius: 5,
  area: function () {
    return Math.PI * this.radius ** 2;
  },
  perimeter: function () {
    return 2 * Math.PI * this.radius;
  },
};

// Implement a Rectangle object that adheres to the shapeInterface
const Rectangle = {
  width: 4,
  height: 6,
  area: function () {
    return this.width * this.height;
  },
  perimeter: function () {
    return 2 * (this.width + this.height);
  },
};

// Usage
console.log(Circle.area());      // Output: 78.54
console.log(Rectangle.perimeter());// Output: 20


// In this example, `shapeInterface` is an object that defines methods (`area` and `perimeter`) that should be implemented by any object considered a "shape." The `Circle` and `Rectangle` objects are then created to adhere to this "interface" by providing implementations for the required methods.

// It's important to note that JavaScript itself does not enforce interfaces, so it relies on developers to follow conventions and expectations. If an object has the expected properties and methods, it's considered to satisfy the "interface." Libraries like TypeScript, however, provide more robust support for defining and enforcing interfaces in a statically typed manner.