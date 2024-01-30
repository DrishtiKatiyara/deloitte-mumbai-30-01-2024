// Coding Style

// Our coding must be as clean and easy to read as possible.Our
// That is actually the art of programming – to take a complex task and code it in a way that is both correct and human-readable. A good code style greatly assists in that.

// 😠 Beginners sometimes do that. Bad! Curly braces are not needed:
if (n < 0) {alert(`Power ${n} is not supported`);}

// 😠 Split to a separate line without braces. Never do that, easy to make an error when adding new lines:
if (n < 0)
  alert(`Power ${n} is not supported`);

// 😏 One line without braces – acceptable, if it’s short:
if (n < 0) alert(`Power ${n} is not supported`);

// 😃 The best variant:
if (n < 0) {
    alert(`Power ${n} is not supported`);
  }


// Function Placement
// Declare the functions above the code that uses them:

// function declarations
function createElement() {
    ...
  }
  
  function setHandler(elem) {
    ...
  }
  
  function walkAround() {
    ...
  }
  
  // the code which uses them
  let elem = createElement();
  setHandler(elem);
  walkAround();

// Code first, then functions
// the code which uses the functions
let elem = createElement();
setHandler(elem);
walkAround();

// --- helper functions ---
function createElement() {
  ...
}

function setHandler(elem) {
  ...
}

function walkAround() {
  ...
}