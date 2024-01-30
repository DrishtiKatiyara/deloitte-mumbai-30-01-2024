// ES6 simplified these steps by using the extends and super keywords.

// The following example defines the Animal and Bird classes and establishes the inheritance through the extends and super keywords.

class Animal {
    constructor(legs, wings) {
        this.legs = legs;
        this.wings = wings;
    }
    walk() {
        console.log('walking on ' + this.legs + ' legs');
    }
}

class Bird extends Animal {
    constructor(legs, wings) {
        super(legs, wings);
        this.wings = wings;
    }
    fly() {
        console.log('flying');
    }
}


let bird = new Bird(2);

bird.walk();
bird.fly();

// How it works.

// First, use the extends keyword to make the Bird class inheriting from the Animal class:

class Bird extends Animal {
   // ...
}
// Code language: JavaScript (javascript)

// The Animal class is called a base class or parent class while the Bird class is known as a derived class or child class. By doing this, the Bird class inherits all methods and properties of the Animal class.

// Second, in the Bird‘s constructor, call super() to invoke the Animal‘s constructor with the legs argument.

// JavaScript requires the child class to call super() if it has a constructor. As you can see in the Bird class, the super(legs) is equivalent to the following statement in ES5:

Animal.call(this, legs);
Code language: JavaScript (javascript)

// If the Bird class doesn’t have a constructor, you don’t need to do anything else:

class Bird extends Animal {
    fly() {
        console.log('flying');
    }
}
// Code language: JavaScript (javascript)

// It is equivalent to the following class:

class Bird extends Animal {
    constructor(...args) {
        super(...args);
    }
    fly() {
        console.log('flying');
    }
}
// Code language: JavaScript (javascript)

// However, the child class has a constructor, it needs to call super(). For example, the following code results in an error:

class Bird extends Animal {
    constructor(legs) {
    }
    fly() {
        console.log('flying');
    }
}
// Code language: JavaScript (javascript)

// Error:

// ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
// Code language: JavaScript (javascript)

// Because the super() initializes the this object, you need to call the super() before accessing the this object. Trying to access this before calling super() also results in an error.

// For example, if you want to initialize the color property of the Bird class, you can do it as follows:

class Bird extends Animal {
	constructor(legs, color) {
		super(legs);
		this.color = color;
	}
	fly() {
		console.log("flying");
	}
	getColor() {
		return this.color;
	}
}

let pegion = new Bird(2, "white");
console.log(pegion.getColor());