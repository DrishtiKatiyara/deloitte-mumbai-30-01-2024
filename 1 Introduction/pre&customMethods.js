// Some JavaScript Built-in Methods

    // console.log()
    // console.count()
    // print()
    // callback()
    // function()
    // recurse()
    // setTimeout()
    // setInterval()
    // alert()
    // remove()
    // import()
    // etc...

    // ---------------------------------------------

// Writing Custom JavaScript Functions

function myFunction() {
    // This is where you would put your code
  }

function greeting(name = "HubSpot") {
    return `Hello ${name}`;
  }
  
console.log(greeting());
// Output: Hello HubSpot


function greeting(name, message = "Welcome to HubSpot!") {
    return `Hello ${name}, ${message}`;
  }
  
console.log(greeting("John"));
// Output: Hello John, Welcome to HubSpot!


function addTwoNumbers(num1, num2) {
    return num1 + num2;
  }
  
  function calculateResult(firstNumber, secondNumber, func) {
    let result = func(firstNumber, secondNumber);
  
    console.log("The result is", result);
  }
  
calculateResult(5, 10, addTwoNumbers);
// Output: The result is 15