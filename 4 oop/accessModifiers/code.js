// controlling the visibility and accessibility of class members. 
// JavaScript is not traditionally an object-oriented programming (OOP) language, 
// the introduction of classes and access modifiers in ECMAScript 6 (ES6)

// Types of Access Modifiers

//     Public (default)
//     Private
//     Protected

// Purpose of Access Modifiers

// control and restrict access to members of a class
// data integrity, and security 
// adhere to the principle of least privilege.
// improve code maintainability 
// collaboration between team members

// Public Access Modifier

// can be accessed from anywhere
// Public members are the default in JavaScript classes. 

class Person { 
	constructor(name) { 
		this.name = name; // Public member 
	} 

	introduceYourSelf() { 
		console.log(`Hello, my name is ${this.name}.`); 
	} 
} 

const person = new Person('Anurag'); 
person.introduceYourSelf(); // Accessing a public method 
console.log(person.name); // Accessing a public property


// Private Access Modifier

// Members marked as private are only accessible within the class itself. Private members are marked with the # symbol. These members are only accessible from within the class itself. They are invisible to external code. Private members provide encapsulation and ensure that the internals of a class remain hidden.

Javascript 

class Person {
	#name; // Private member 

	constructor(name) { 
		this.#name = name; 
	}

	#hello() { 
		console.log(`Hello, my name is ${this.#name}.`); 
	} 

	introduce() { 
		// Accessing a private method 
		this.#hello(); 
	} 
} 

const person = new Person('Bob'); 
// Accessing a public method that 
// accesses a private method 
person.introduce(); 

// Error: Private member is not accessible 
console.log(person.#name); 

// Protected Access Modifier

// Members marked as protected are accessible within the class and its subclasses. Members marked as protected are accessible within the class and its subclasses. You can use the protected keyword to define protected members. These members maintain a level of encapsulation while allowing access to subclasses.

class Vehicle { 
	constructor(speed) { 
		if (this.constructor === Vehicle) { 
			throw new Error("Abstract classes, cannot be instantiated."); 
		} 
		this.speed = speed; 
	} 
} 

class Car extends Vehicle { 
	constructor(speed) { 
		super(speed); 
	} 
	showSpeed() { 
		// Accessing the protected member in a subclas 
		return this.speed; 
	} 
} 

const myCar = new Car(60); 
// Outputs: 60 
console.log(myCar.showSpeed());
